const Connection = require("mongoose");
Connection.connect("mongodb://localhost:27017/sam", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => console.log("Connection to Database Established"))
  .catch((err) => console.log(err));
Connection.Promise = global.Promise;
// console.log("Connection to Database Established");
