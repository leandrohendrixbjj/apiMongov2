import databaseConection from './databaseConection.js';

try {

    databaseConection.on("error", () => {
        console.log.bind(console, 'Error on Database connection')
    })

    databaseConection.once("open", () => {
        console.log('Database conected successfully');
    });
} catch (err) {
    console.log(`Error on Database conection: ${err}`);
}

export default databaseConection;
