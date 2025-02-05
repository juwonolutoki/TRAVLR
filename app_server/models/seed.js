const Trip = require('./travlr');
const mongoose = require('./database');
const sampleTrips = [
    { name: 'Gale Reef', image: 'reef1.jpg', description: '<p>Gale Reef - Sed et augue lorem. In sit amet placeraand white sandy beaches.</p>', price: '$1500' },
    { name: "Dawson's Reef", image: 'reef2.jpg', description: "<p>Dawson's Reef - Experience the serene beauty of the mountains.</p>", price: '$2000' },
    { name: "Claire's Reef", image: 'reef3.jpg', description: "<p>Claire's Reef - Discover ancient temples, beautiful gardens, and rich traditions.</p>", price: '$1800' }
];

const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(sampleTrips);
    console.log('Database seeded!');
    mongoose.connection.close();
};
