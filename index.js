let express = require('express');

const apiRoutes = require("./routes/index");
const bodyParser = require('body-parser');
const db = require('./database/index');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Initialize the app
let app = express();
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', apiRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Setup server port
const port = process.env.PORT || 5000;
// Send message for default URL
app.get('/', (req, res) => res.send('Express API'));
// Launch app to listen to specified port
app.listen(port, () => {
console.log("Running Server on port " + port);
});

module.exports = app;
