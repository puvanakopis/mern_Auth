import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log('Database connected'));
        mongoose.connection.on('error', (err) => console.log('Database error:', err));

        await mongoose.connect(process.env.MONGODB_URL);
    } catch (err) {
        console.error('Connection error:', err);
        process.exit(1);
    }
};

export default connectDB;