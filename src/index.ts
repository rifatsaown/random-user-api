import "dotenv/config";
import app from './app';
import { connectToDatabase } from "./utils/dbConnect";

const port = process.env.PORT || 5000;

const startServer = async () => {
    try{
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
            connectToDatabase();
        });
    }catch(err){
        console.log(`Server Error: ${err}`);
    }
};

startServer();