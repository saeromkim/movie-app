import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {}

  componentDidMount(){
    this._getMovies();
  }

_renderMovies = () =>{
  const movies = this.state.movies.map(movie =>{
    return <Movie 
      title={movie.title_english}
      poster={movie.medium_cover_image}
      key={movie.id}
      genres={movie.genres}
      synopsis={movie.synopsis}/>
  })   
  return movies;
};

_getMovies = async () => {
  const movies =  await this._callApi() //_callApi()가 끝나기를 기다렸다가(await) movies 에 넣기
  this.setState({ //callApi() 끝나고 실행
    movies
  });
};

_callApi = () => {
  return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(tomato => tomato.json())
    .then(json => json.data.movies) //data.movies를 return(=>)한다
    .catch(err => console.log(err))
};

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : '영화 데이터를 불러오는 중이에요~'}
      </div>
    );
  }
}

export default App;

