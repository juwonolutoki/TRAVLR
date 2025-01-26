exports.getHome = (req, res) => {
    try {
        // Render the 'home' view with optional dynamic data
        res.render('home', { pageTitle: 'Welcome to Travlr' });
    } catch (error) {
        console.error('Error rendering the home page:', error);
        res.status(500).send('Error loading the home page.');
    }
};

exports.getAbout = (req, res) => {
    try {
        // Render the 'about' view with optional dynamic data
        res.render('about', { pageTitle: 'About Travlr' });
    } catch (error) {
        console.error('Error rendering the about page:', error);
        res.status(500).send('Error loading the about page.');
    }
};

exports.getContact = (req, res) => {
    try {
        // Render the 'contact' view with optional dynamic data
        res.render('contact', { pageTitle: 'Contact Us' });
    } catch (error) {
        console.error('Error rendering the contact page:', error);
        res.status(500).send('Error loading the contact page.');
    }
};
