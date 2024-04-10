const mongoose= require('mongoose');
mongoose.set('strictQuery',true);

const atlat= "mongodb+srv://dangvanthong1006:4Syti06Xcl394raE@cluster0.ikbhnvb.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0"
const connect = async()=>{
    try{
        await mongoose.connect(atlat,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
        })
        console.log("Connect success");
    }catch(error){
        console.log("Connect fail");
        console.log(error)
    }
}

module.exports={connect}