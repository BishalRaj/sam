const Connection = require("mongoose");
const auth =
  "mongodb+srv://pos:r5eghUsnm758TGMU@cluster0.ak9au.mongodb.net/pos?authSource=admin&replicaSet=atlas-6mwvhn-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
Connection.connect(auth, {
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
