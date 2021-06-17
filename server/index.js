const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
// Route files
const employeRouter = require("./routes/employe.routes")
const PORT = config.get('serverPort')
const app = express()
app.use(express.json())

/* Routes */
app.use('/api', employeRouter);

const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"), {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

start()