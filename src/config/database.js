import mongoose from 'mongoose';

const dbPath = "mongodb://<your_username>:<your_password>@<your_host>/<your_database>";

mongoose.connect(dbPath, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

export default mongoose;
