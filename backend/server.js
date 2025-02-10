const app = require("./app");
const connectDatabase = require("./db/Database");

//Handling Uncaught exception when setting up backend server

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`"Shutting down the server due to Uncaught Exception"`);
    
})

//connecting to database
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"./config/.env"
    });
};

//connect db
connectDatabase();

//create server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});


//unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.error(`Error: ${err.message}`);
    console.log("Shutting down the server due to Unhandled Promise Rejection");
    server.close(() => {
        process.exit(1);
    });
});