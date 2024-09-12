require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
const resourceRoutes = require('./routes/resourceRouter')


//MIDDLEWARE
app.use(express.json());



//ROUTE
app.use('/api/v1/resources', resourceRoutes);

//ERROR ROUTE
app.use((req, res) => {
    res.status(404).json({message: 'Route not found!'});
});

//DB CONNECTION
const startServer = async () => {
    try {
        await mongoose.connect(process.env.mongo_url, {dbName: 'testresourceserver'});
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
            
        })
    } catch (error) {
        console.log(error);
        
    }
}

startServer();