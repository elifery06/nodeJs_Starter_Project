const mongoose = require("mongoose")
mongoose.connect(process.env.DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

.then(()=> {
    console.log("Veritabanına başarıyla bağlanıldı...");
})
.catch((err)=>{
    console.log("Veritabanına bağlanırken hata oluştu...",err);
})