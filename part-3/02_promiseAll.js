function getNewsAndWeatherAll() {
    const newsURL = 'http://localhost:4999/data/latestNews';
    const weatherURL = 'http://localhost:4999/data/weather';
    let obj = {};
    let news = fetch(newsURL).then((response) => response.json());
    let weather = fetch(weatherURL).then((response) => response.json());
    return Promise.all([news, weather]).then((data) => {
        obj.news = data[0].data;
        obj.weather = data[1];
        return obj;
    });
}

if (typeof window === 'undefined') {
    module.exports = {
        getNewsAndWeatherAll,
    };
}
