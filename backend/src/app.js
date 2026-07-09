import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser"
import morgan from 'morgan';


const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URI,
    credentials: true
}))


app.use(morgan('dev'))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.send("Hello");
})

//authRoutes 
import authRouter from './routes/auth.routes.js';
app.use("/aire-bliss/auth", authRouter);

import adminRouter from './routes/admin.routes.js';
app.use("/aire-bliss/admin", adminRouter);

import productRouter from './routes/product.routes.js';
app.use("/aire-bliss/products", productRouter)

import userRouter from './routes/user.routes.js';
app.use('/aire-bliss/user', userRouter);

import cartRouter from './routes/cart.routes.js';
app.use('/aire-bliss/user/cart', cartRouter);

import wishListRouter from './routes/wishList.routes.js';
app.use("/aire-bliss/user/wishlist", wishListRouter)

import addressesRouter from './routes/addresses.routes.js';
app.use('/aire-bliss/user/address', addressesRouter);

export default app;