const mongoose = require("mongoose");

const User = require("./user");

mongoose.connect("mongodb://localhost:27017/user", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error");
});

db.open("open", async () => {
  console.log("Connected to MongoDB");
  try {
    const newUser = new User({
      name: "Athika Fatima",
      email: "athika@gbc.ca",
      age: 23,
    });

    await newUser.save();

    console.log("User saved successfully");
  } catch (error) {
    console.error("Error saving user:", error);
  } finally {
    mongoose.connection.close();
  }
});
