"use strict";

const apiURL = "https://wind-miniature-gauge.glitch.me/movies";


//getMovies Function to fetch
const getMovies = () => fetch(apiURL)
    .then(res => res.json())
    .catch(console.error)


//Building Cards Function
function buildCards(movie){
    let html = '';

    html += `<div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${movie.poster}" class="card-img" alt="${movie.title}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title movie-title">${movie.title}</h5>
            <p class="card-text movie-plot">${movie.plot}</p>
            <p class="card-text movie-id">${movie.id}</p>
            <p class="card-text movie-rating"><small class="text-muted"><strong>${movie.rating}</strong></small></p>
          </div>
        </div>
      </div>
    </div>`

    // html += `<div class="card">
    //  <img src="${movie.poster}" class="movie-posters">
    //  <div class="card-body">
    //  <h5 class="card-title movie-title">${movie.title}</h5>
    //  <p class="card-text">${movie.plot}</p>
    //  <p class="movie-id">${movie.id}</p>
    //  </div>
    //  <div class="card-footer">
    //  <small class="text-muted"><strong>Rating: ${movie.rating} Stars</strong></small>
    //  </div>
    //  </div>`;
    return html;
}