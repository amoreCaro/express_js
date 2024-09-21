var express = require('express');
var router = express.Router();

const Product = require('../models/product.model');

// Create a new product

router.post('/', async (req, res) => {
  try {
    console.log(req.body); // Додайте це для перевірки даних
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Fetch all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get product by ID
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Get product by ID
    if (product) {
      res.json(product); // Send product in JSON
    } else {
      res.status(404).json({ message: 'Product not found' }); // Send error if the product is not found
    }
  } catch (error) {
    res.status(500).json({ message: error.message }); // Send error if something went wrong
  }
});



// // Fetch all users: `GET /api/users`
// router.get('/api/users', function (req, res) {
//   res.send(users);
// });

// // Fetch a single user by ID: `GET /api/users/:id`
// router.get('/api/users/:id', function (req, res) {
//   // GET user by id
//   const userId = parseInt(req.params.id);

//   // Fetch the user from the Users list
//   const user = users.find(u => u.id === userId);

//   // Send a 404 response
//   if (!user) {
//     res.status(404).send("there is no user with such id: " + userId);
//   } else {
//     // Display the founded user 
//     res.json(user);
//   }
// });

// // Add a new user: `POST /api/users`
// router.post('/api/users', async function (req, res) {
//   try {
//     const newUser = await User.create(req.body); // Save the user to the database
//     res.status(201).json(newUser); // Send the created user object as a response
//     console.log("User POST request sent successfully");
//   }
//   catch (error) { // Add the error parameter here
//     res.status(500).json({ message: error.message });
//   }
// });

// // Delete a user: `DELETE /api/users/1`
// router.delete('/api/users/1', function (req, res) {
//   res.send("This API is DELETE customer page");
// });

module.exports = router;
