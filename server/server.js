const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;

app.use(express.json()); 
app.use(cors())
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config'); 
require('./routes/codingDojo.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );