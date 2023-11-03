import dbConnect from './dbConnect.js';

try {

    dbConnect.on("error", () => {
        console.log.bind(console, 'Error on database connection')
    })

    dbConnect.once("open", () => {
        console.log('Connection was made successfully');
    });
} catch (err) {
    console.log(`Error on connect: ${err}`);
}

export default dbConnect;
