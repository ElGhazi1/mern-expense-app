require('dotenv').config();

const app = require('./src/app');

const PORT = process.env.PORT || 5000; 



app.listen( 3000, ()=> {
        console.log(`Server is ready for connection on port ${PORT}`);
} );
