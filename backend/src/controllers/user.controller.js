import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

//controller for users registration
export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    //all required field are checked in middleware that are provided 

    // check user if already exist
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        message: "User already exist.",
      });
    }

    // Hash the password using bcrypt before saving it to the database
    const hashPassword = await bcrypt.hash(password, 10);

    //create a new user with hashed password
    const newUser = await User.create({
      email,
      password: hashPassword,
    });

    //save the new user to the database
    await newUser.save();

    //respond with success message
    return res.status(200).json({
      success: true,
      message: "Successfully registered.",
      data: { email: newUser.email, role: newUser.role },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Internal Server Error for register User." });
  }
};

//controller for user login

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    //all required field are checked in middleware that are provided 

    //check if user exist in the database
    const userExist = await User.findOne({ email }).select("+password");

    if (!userExist) {
      return res.status(400).json({
        success: false,
        message: "User doesnot exist.",
      });
    }

    //compare the password that are provided with database password
    const hash = await bcrypt.compare(password, userExist.password);

    if (!hash) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials !",
      });
    }

    //genertae a JWT token for the authenticated user
    const token = jwt.sign(
      {
        id: userExist._id,
        email: userExist.email,
        role: userExist.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    //set the token as an HTTP-Only Cookie
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      maxAge: 60 * 60 * 1000,
    });

    // Respond generated token with a success message
    return res.status(200).json({
      success: true,
      message: "Login Successfully!!!",
      token,
      user: {
        _id: userExist._id,
        email: userExist.email,
        role: userExist.role,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Internal Server Error for Login User." });
  }
};

//logout controller
export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("authToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    });

    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
