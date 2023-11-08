import mongoose from "mongoose";

async function databaseConnection(URI){
    try {

        await mongoose.connect(URI)
        console.log('db connected')        
    } catch (error) {
        console.log('database connection failed!')
    }

}

export default databaseConnection;