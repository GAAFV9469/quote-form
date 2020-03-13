const express = require ('express');
const connectDB = require('./config/db');
// const path = require('path')

const app = express();

//Initialize Middleware
// app.use('/api', router);
app.use (express.json({extended: false}));
// app.get('/', function(req, res){
//     res.json({message: 'You have spoken!'})
// });

//Connect to the DataBase
connectDB();

//Define Routes
app.use('/api/quotes', require('./routes/api/quotes'));

if (process.env.NODE_ENV === 'production'){
    //set static folder
    app.use (express.static('client/build'));
    app.get('*', (req, res) => {
        res.send(path.resolve(__dirname, 'index.html'));
    });
}

// Create PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));