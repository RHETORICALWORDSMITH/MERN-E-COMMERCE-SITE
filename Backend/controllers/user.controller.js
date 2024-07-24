import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"; // to secure password

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    //encrypt the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create new user
    //following destrunctiong value and key (of name and email are same so write only once)
    const newUser = new User({ name, email, password: hashedPassword });

    // Save user to the database
    await newUser.save();

    // Return success response
    res.status(201).json(newUser);
  } catch (error) {
    if (error.response) {
      console.log(`Error creating user: ${error.message}`);
      alert(`Error creating user: ${error.response.data.message}`);
      res.status(500).json({ message: "Server Error", error });
    }
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user already exists
    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    } else {
      res.status(200).json({
        message: "Login successful",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log(`Error during login user: ${error.message}`);
    res.status(500).json({ message: "Server Error", error });
  }
};
