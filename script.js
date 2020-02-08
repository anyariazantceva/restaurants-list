fetch('restaurants.json')
    .then(res => res.json())
    .then((data) => {
        const restaurants = data.restaurants;
        restaurants.forEach((item) => {

        })
    });
