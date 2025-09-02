// const ensureAuthenticated = require('../Middlewares/Auth');

// const router = require('express').Router();
// router.get('/pro',
//     ensureAuthenticated, (req, res) => {
//         console.log('-----logged in user detail----', req.user);
//     res.status(200).json([
//         {
//             name: "mobile",
//             price:20000,
//             brand: "samsung",
//             category: "electronics",
//             image: "https://m.media-amazon.com/images/I/71Swqqe7XAL._AC_UY218_.jpg"

//         },
//         {
//             name: 'tv',
//             price: 40000,
//             brand: 'lg',
//             category: 'electronics',
//             image: 'https://m.media-amazon.com/images/I/61+9K4n1h4L._AC_UY218_.jpg'
//         }
//      ] )
// })
// module.exports = router;



const ensureAuthenticated = require('../Middlewares/Auth');
const router = require('express').Router();
const Product = require('../Models/Product');

// 🔹 Add product (for testing / seeding)
router.post('/add', async (req, res) => {
  try {
    const { name, price, brand, category, image } = req.body;
    const product = new Product({ name, price, brand, category, image });
    await product.save();
    res.status(201).json({ message: "Product added successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🔹 Get all products (protected)
router.get('/pro', ensureAuthenticated, async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
