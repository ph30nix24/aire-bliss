import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser"
import morgan from 'morgan';
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
// app.use(cors({
//     origin: "https://aire-bliss.vercel.app",
//     credentials: true
// }))


// app.use(cors())

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
app.use('/aire-bliss/cart', cartRouter);



export default app;