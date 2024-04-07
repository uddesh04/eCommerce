const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://dbuser:Qwerty@cluster.zsytikm.mongodb.net", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
