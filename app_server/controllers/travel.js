const fs = require('fs'); // To work with the JSON file

// Controller function to handle the '/travel' route
exports.getTrips = (req, res) => {
    try {
        // Read and parse the trips.json file
        const tripsData = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

        // Render the 'travel' view, passing the trips data to the template
        res.render('travel', { trips: tripsData });
    } catch (error) {
        console.error('Error reading trips.json:', error);
        // Send a generic error response if something goes wrong
        res.status(500).send('Error loading trips data.');
    }
};
