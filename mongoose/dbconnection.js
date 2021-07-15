const mongoose = require("mongoose");

const dbconnection = mongoose.connect(
    "mongodb+srv://muskandatabase:muskanrathod99@cluster0.domlt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }
);

module.exports = dbconnection;