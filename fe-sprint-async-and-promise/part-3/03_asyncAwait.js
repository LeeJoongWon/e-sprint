async function getNewsAndWeatherAsync() {
    // TODO: async/await 키워드를 이용해 작성합니다
    let obj = {};
    const newsURL = 'http://localhost:4999/data/latestNews';
    const weatherURL = 'http://localhost:4999/data/weather';
    let news = await fetch(newsURL).then((response) => response.json());
    let weather = await fetch(weatherURL).then((response) => response.json());
    obj.news = news.data;
    obj.weather = weather;
    return obj;
}

if (typeof window === 'undefined') {
    module.exports = {
        getNewsAndWeatherAsync,
    };
}
