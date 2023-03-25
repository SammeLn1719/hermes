const express = require("express")
const userRouter = require('./routes/user.routes');
const reviewRouter = require('./routes/reviews.routes');
const productRouter = require('./routes/product.routes');
const discountRouter = require('./routes/discount.routes');
const basketRouter = require('./routes/basket.routes');
const articlesRouter = require('./routes/articles.routes');
const PORT = 5000;


const app = express();

app.use(express.json())
app.use('/api/user',userRouter)
app.use('/api/reviews',reviewRouter)
app.use('/api/product',productRouter)
app.use('/api/discount',discountRouter)
app.use('/api/basket',basketRouter)
app.use('/api/articles',articlesRouter)


app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
