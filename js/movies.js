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
            <p class="card-text movie-director">${movie.director}</p>
            <p class="card-text movie-year">${movie.year}</p>
            <p class="card-text movie-rating"><small class="text-muted"><strong>Rating: ${movie.rating} Stars</strong></small></p>
            <p class="card-text movie-id">${movie.id}</p>
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

//Add Movie Function to create a POST Request
const addNewMovie = (movie) => fetch(`${apiURL}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
})
    .then(res => res.json())
    .then(data => {
        console.log(`Success: created ${JSON.stringify(data)}`);
        return movie;
    })
    .catch(console.error);

$("#save-new-movie").click(() => {
    let newMovieObj = {
        title: $("#new-movie-title").val(),
        rating: $("#new-movie-rating").val(),
        poster: $("#new-movie-poster").val(),
        year: $("#new-movie-year").val(),
        director: $("#new-movie-director").val(),
        plot: $("#new-movie-plot").val()
    };
    addNewMovie(newMovieObj)});


//Delete movie function accessed through the "delete" button inside each card
const deleteMovie = id => fetch(`${apiURL}/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => res.json())
    .then(() => {
        console.log(`Success: deleted movie with id of ${id}`);
    })
    .catch(console.error);

$(".delete").click(() => {console.log("Hi!")});
// $(".delete").click(() => {deleteMovie()});

//Adding click event to dynamically created elements/button jQuery
//stick to ES5 or ES6
//Accessing IDs: // data attribute data-id