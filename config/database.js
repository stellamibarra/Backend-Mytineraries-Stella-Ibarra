import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('DB Connected!'))
.catch(err => {
    console.log(err);
}
);
