import express from 'express';
import userRouter from './routes/user.routes';
import postRouter from './routes/post.routes';


const app = express();
app.use(express.json())

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.get('/', (req, res) => {
    res.send('Hello World').status(200);
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
});