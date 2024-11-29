const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log("Uncaught exception --> Shutting down");
  console.log(err.name, err.message);
  process.exit(1); // Exit process with failure
});

// Load environment variables from config.env file
dotenv.config({ path: "./config.env" });

const app = require("./app");

// Connect to the MongoDB database
const dbURI = `mongodb://localhost:27017/`;

mongoose
.connect(dbURI)
.then(() => {
  app.listen(3000);
  console.log("MongoDB connected...");
})
.catch((err) => console.log(err));
app.use(ErrorHandler)
// Start the server


// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log("Unhandled rejection --> Shutting down");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1); // Exit process with failure
  });
});
