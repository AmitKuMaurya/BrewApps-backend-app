import mongoose from 'mongoose';

export const dbConnection = async () => {
    await mongoose.connect('mongodb://amit69maurya69:amit69maurya69@ac-dwqxzyd-shard-00-00.0xyxexl.mongodb.net:27017,ac-dwqxzyd-shard-00-01.0xyxexl.mongodb.net:27017,ac-dwqxzyd-shard-00-02.0xyxexl.mongodb.net:27017/?ssl=true&replicaSet=atlas-7uhgff-shard-0&authSource=admin&retryWrites=true&w=majority')
    .then(()=>{
        console.log({msg : "DataBase Connected Successfully 🌼"})
    })
    .catch((err)=>{
        console.log({err : err});
        process.exit(1);
    })
}