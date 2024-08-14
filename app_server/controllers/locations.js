/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', {
    title: 'E-FARMERS',
    pageHeader: {
    title: 'E-FARMERS',
    strapline: '!'
    },
    locations: [{
    name: 'Starcups',
    address: '1256 High Street, Reading, RG6 1PS',
    rating: 3,
    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
    distance: '100m'
    },{
    name: 'Cafe Hero',
    address: '125 High Street, Reading, RG6 1PS',
    rating: 4,
    facilities: ['grains', 'dairy', 'Premium wifi'],
    distance: '200m'
    },{
    name: 'Burger Queen',
    address: '1256 High Street, Reading, RG6 1PS',
    rating: 2,
    facilities: ['Food', 'Premium wifi'],
    distance: '250m'
}]
});
};
    /* GET 'Location info' page */
    const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
    };
    /* GET 'Add review' page */
    const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
    };
    module.exports = {
        homelist,
        locationInfo,
        addReview
        };