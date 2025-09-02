// const express = require('express')
// const app = express()
// require('dotenv').config()
// const cors = require('cors')
// const bodyParser = require('body-parser')
// const PORT = process.env.PORT || 8080;
// require('./Models/db')
// const AuthRouter = require('./Routes/AuthRouter')
// const ProductRouter = require('./Routes/ProductsRouter')

// app.get('/ping', (req, res) => {
//     res.send('pong')
// })

// app.use(bodyParser.json());
// app.use(cors());
// app.use('/author', AuthRouter)
// app.use('/products', ProductRouter)

//  app.listen(PORT, ()=> {
//     console.log(`servr is running on ${PORT}`)
//  })



const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

require('./Models/db');

const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductsRouter');

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json()); // built-in body parser

app.get('/ping', (req, res) => res.send('pong'));

app.use('/author', AuthRouter);
app.use('/products', ProductRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
