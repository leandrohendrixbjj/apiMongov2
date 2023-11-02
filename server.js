console.clear()
import confirmConnection from './src/config/confirmConnection.js'
import app from "./src/app.js"
const PORT = process.env.PORT || 3000

if (!confirmConnection) {
    console.log("Error on database connection");
}


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})