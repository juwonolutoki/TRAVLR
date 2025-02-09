// C:\Users\LMA\TRAVLR\app_server\controllers\userController.js

// Example in-memory "database" for users (you can replace this with a real database like MongoDB or MySQL)
const users = [];

// Handle user registration logic
exports.registerUser = (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Create a new user (for simplicity, we are not hashing passwords here)
  const newUser = { username, password };
  users.push(newUser);  // Save the user to the "database"

  // Send success response
  res.status(201).json({ message: 'User registered successfully', user: newUser });
};

// Handle user login logic
exports.loginUser = (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = users.find(user => user.username === username);

  // If user doesn't exist or password is incorrect
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Send success response (you can add a JWT token here for real-world scenarios)
  res.status(200).json({ message: 'Login successful', user: { username: user.username } });
};
