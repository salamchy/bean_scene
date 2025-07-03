import Menu from "../models/menu.model.js";
import cloudinary from '../utils/cloudinary.js';
import fs from 'fs/promises';

export const createMenu = async (req, res) => {
  try {
    const { name, category, type, price, description } = req.body;

    // Validation
    if (!req.file) {
      return res.status(400).json({ 
        success: false,
        message: 'Image upload is required' 
      });
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "menu_items", // Organize in Cloudinary
      resource_type: "auto"
    });

    // Create menu item with Cloudinary data
    const menu = new Menu({
      name,
      category,
      type,
      price: Number(price), // Ensure numeric
      description,
      image: {
        public_id: result.public_id, // Store for future management
        url: result.secure_url       // HTTPS URL
      }
    });

    const savedMenu = await menu.save();
    
    // Delete local temp file
    await fs.unlink(req.file.path);

    res.status(201).json({
      success: true,
      data: savedMenu
    });

  } catch (error) {
    console.error('Create Menu Error:', error);
    
    // Cleanup: Delete temp file if upload failed
    if (req.file) await fs.unlink(req.file.path).catch(console.error);

    res.status(500).json({ 
      success: false,
      message: 'Failed to create menu item',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export const getAllCoffee = async (req, res) => {
  try {
    // Pagination parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const skip = (page - 1) * limit;

    // Filtering parameters
    const { category, search } = req.query;
    const query = {};

    if (category) {
      query.category = { $in: category.split(',') }; // Supports multiple categories
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    // Execute queries in parallel
    const [items, totalItems] = await Promise.all([
      Menu.find(query)
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 }), // Newest first
      Menu.countDocuments(query)
    ]);

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalItems / limit);
    const hasNextPage = page < totalPages;
    const hasPreviousPage = page > 1;

    res.status(200).json({
      success: true,
      pagination: {
        totalItems,
        totalPages,
        currentPage: page,
        itemsPerPage: limit,
        hasNextPage,
        hasPreviousPage
      },
      data: items
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch menu', error });
  }
};

export const getAdminCoffee = async (req, res) => {
  try {
    const menuItems = await Menu.find({});
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch menu for admin', error });
  }
};

export const updateCoffee = async (req, res) => {
  try {
    const coffee = await Menu.findById(req.params.id);

    if (!coffee) {
      return res.status(404).json({ message: 'Coffee item not found' });
    }

    const { name, category, type, price, description } = req.body;

    // Update fields if provided
    if (name) coffee.name = name;
    if (category) coffee.category = category;
    if (type) coffee.type = type;
    if (price) coffee.price = price;
    if (description) coffee.description = description;

    // Handle new image upload
    if (req.file && req.file.path) {
      // Delete previous image from Cloudinary (optional, but cleaner)
      const prevImageUrl = coffee.image;
      const publicId = prevImageUrl?.split('/').pop().split('.')[0];
      if (publicId) {
        await cloudinary.uploader.destroy(`coffee-menu/${publicId}`);
      }

      // Set new Cloudinary image URL
      coffee.image = req.file.path;
    }

    const updatedCoffee = await Menu.save();
    res.status(200).json(updatedCoffee);
  } catch (error) {
    console.error('Update Error:', error);
    res.status(500).json({ message: 'Failed to update coffee', error: error.message });
  }
};

export const deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the menu item
    const menuItem = await Menu.findById(id);
    
    if (!menuItem) {
      return res.status(404).json({
        success: false,
        message: 'Menu item not found'
      });
    }

    // Delete image from Cloudinary if it exists
    if (menuItem.image?.public_id) {
      await cloudinary.uploader.destroy(menuItem.image.public_id);
    }

    // Delete from database
    await Menu.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Menu item deleted successfully'
    });

  } catch (error) {
    console.error('Delete Menu Error:', error);
    
    // Handle specific Cloudinary errors
    if (error.message.includes('Cloudinary')) {
      return res.status(502).json({
        success: false,
        message: 'Error communicating with image service'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to delete menu item',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};