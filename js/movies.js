"use strict";

const apiURL = "https://wind-miniature-gauge.glitch.me/movies";


//getMovies Function to fetch
const getMovies = () => fetch(apiURL)
    .then(res => res.json())
    .catch(console.error)


//Building Cards Function
function buildCards(movie){
    let html = '';
    html += `<div class="card col-12 mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${movie.poster}" class="card-img" alt="${movie.title}">
        </div>
        <div class="col-md-8">
          <div class="card-body movie-card-body">
            <h5 class="card-title movie-title">${movie.title}</h5>
            <p class="card-text movie-plot">${movie.plot}</p>
            <p class="card-text movie-id">${movie.id}</p>
            <p class="card-text movie-rating"><small class="text-muted"><strong>Rating: ${movie.rating} Stars</strong></small></p>
            <div>
               <button type="button" class="edit btn-secondary btn">Edit</button>        
               <button type="button" class="delete btn-danger btn">Delete</button>        
            </div>  
          </div>
        </div>
        
      </div>
    </div>`

    return html;
}