var api = {
    getMovies() {
        var url = 'https://api.themoviedb.org/3/discover/movie?api_key=9ed988bd98a6fa0b603d1eeff4ab4f97&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
        return fetch(url).then((res) => res.json());
    }
};
module.exports = api;