import mongoose from "mongoose";


const dbConnection = async (MONGODB_URL) => {
    try {
        await mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
        console.log('Connected to Database');
    } catch (error) {
        console.error('Cannot connect to Database', error.message);
    }
}

export default dbConnection;