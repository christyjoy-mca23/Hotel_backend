import mongoose from 'mongoose';
import { ConnectionOptions } from 'tls';
require('dotenv').config();

const connectDB = async () => {
    try {
        console.log("MONGO_URI:", process.env.MONGO_URI); // 
        const connect = await mongoose.connect(process.env.MONGO_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectionOptions);
        console.log("Database is connected");
    } catch (error: any) {
        console.log(error.message);
    }
}

export default connectDB;