const app = require('./src/services/app');
require('dotenv').config();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
})
