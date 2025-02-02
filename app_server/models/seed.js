const Trip = require('./travlr');
const mongoose = require('./database');
const sampleTrips = [
    { code: 'T001', name: 'Hawaii Adventure', length: '7 days', start: new Date(), resort: 'Waikiki Resort', perPerson: '$1500', image: 'hawaii.jpg', description: 'A relaxing trip to Hawaii.' },
    { code: 'T002', name: 'Alaska Cruise', length: '5 days', start: new Date(), resort: 'Glacier Bay', perPerson: '$2000', image: 'alaska.jpg', description: 'Experience the icy wonders of Alaska.' },
    { code: 'T003', name: 'Paris Getaway', length: '4 days', start: new Date(), resort: 'Eiffel Suites', perPerson: '$1800', image: 'paris.jpg', description: 'Romantic getaway in Paris.' }
];

const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(sampleTrips);
    console.log('Database seeded!');
    mongoose.connection.close();
};

seedDB();
