import Contact from '../models/contact.model.js';

export const createMessage = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const contact = await Contact.create({
      user: req.user.id,
      name,
      email,
      message
    });
    res.status(201).json({ 
        success: true,
        message: 'Message sent successfully!' 
    });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find().populate('user', 'email');
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve messages' });
  }
};
