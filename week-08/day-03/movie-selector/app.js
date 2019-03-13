'use strict'

const movieDisplay = document.querySelector('.movie-display');

const movieForm = document.querySelector('form');

const genreDropDown = document.querySelector('.genre-select');

const movieDropDown = document.querySelector('.movie-select');

const movies = {
  movies: ['Moon', '2001 Space odessy', 'Contact', 'Darkest hour', 'There will be blood', 'American beuty', 'Airplane!', 'Deadpool', 'Wayne\'s World'],
  'sci-fis': [0,1],
  dramas: [2,3,4],
  comedies: [5,6,7,8]
}

const getMovies = (type='all') => {
  return type == 'all'? movies.movies:
  type == 'Sci-fi'? movies.movies.filter((v, i) => {
    return movies['sci-fis'].some((item) => i==item);    
  }):
  type == 'Drama'? movies.movies.filter((v, i) => {
    return movies['dramas'].some((item) => i==item);    
  }):
  type == 'Comedy'? movies.movies.filter((v, i) => {
    return movies['comedies'].some((item) => i==item);    
  }):
  [];
}

const generateOptions = (type='all') => {
  const movieDatalist = document.querySelector('#movies');
  while (movieDatalist.firstChild) {
    movieDatalist.removeChild(movieDatalist.firstChild);
  }
  let movieList = getMovies (type);
  movieList.forEach((v, i) => {
    let option = document.createElement('option');
    option.value = v;
    movieDatalist.appendChild(option);
  });
}

generateOptions();


genreDropDown.onfocus = (e) => {
  e.target.value == 'Select a genre'? e.target.value='':null;
}
movieDropDown.onfocus = (e) => {
  e.target.value == 'Select a movie'? e.target.value='':null;
}

movieForm.onchange = (e) => {
  e.target.classList.contains('genre-select')?
  e.target.value == ''? (e.target.value = 'Select a genre', generateOptions()):
  generateOptions(e.target.value):
  e.target.classList.contains('movie-select')?
  e.target.value == ''? e.target.value = 'Select a movie':
  movieDisplay.textContent = e.target.value:
  null;
}


