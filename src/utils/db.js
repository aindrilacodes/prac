// const mongoose=require('mongoose');
// const colors=require('colors')

// const url=process.env.MONGODB_URI 
// const connectDb=async()=>{
//     try{
//        const conn= await mongoose.connect(url)
//         console.log("Database connected",conn.connection.host)
//         mongoose.connection.on('error',(error)=>{
//             console.error("Db connection error:",error)
//     }
// );
//     }
//     catch(error)
//     {
//         console.error(colors.bgGreen.red("Database connection failed"))
//         process.exit(0)
//     }
// }
// module.exports=connectDb