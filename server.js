console.clear()

import databaseConection from './src/config/databaseConection.js'
import app from "./src/app.js"
import 'dotenv/config.js'

const PORT = process.env.PORT || null

databaseConection.on('error', () => {
    console.log('Fail to connect in database');
})

databaseConection.once('open', () => {
    console.log('Database connect succesfully');
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})
