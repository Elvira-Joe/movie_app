"use strict";

// const apiURL = "https://wind-miniature-gauge.glitch.me/movies";
const apiURL = "https://heroku-movies-app.herokuapp.com/movies";

//getMovies Function to fetch
const getMovies = () => fetch(apiURL)
    .then(res => res.json())
    .catch(console.error)


//buildCards Function
function buildCards(movie){
    let html = '';
    html += `<div class="card col-12 mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${movie.poster}" class="card-img movie-poster" alt="${movie.title}">
        </div>
        <div class="col-md-8">
          <div class="card-body movie-card-body">
            <h5 class="card-title movie-title">${movie.title}</h5>
            <p class="card-text movie-plot">${movie.plot}</p>
            <p class="card-text movie-director">${movie.director}</p>
            <p class="card-text movie-year">${movie.year}</p>
            <p class="card-text movie-genre">${movie.genre}</p>
            <p class="card-text movie-actors">${movie.actors}</p>
            <p class="card-text movie-rating"><small class="text-muted"><strong>Rating: ${movie.rating} Stars</strong></small></p>
            <p class="card-text movie-id">${movie.id}</p>
            <div>
               <button type="button" data-id="${movie.id}" data-title="${movie.title}" data-poster="${movie.poster}" data-plot="${movie.plot}" data-director="${movie.director}" data-year="${movie.year}" data-genre="${movie.genre}" data-actors="${movie.actors}" data-rating="${movie.rating}" class="edit btn-secondary btn" data-toggle="modal" data-target="#edit-movie-modal">Edit</button>        
               <button type="button" data-id="${movie.id}" class="delete btn-danger btn">Delete</button>        
            </div>  
          </div>
        </div>
        
      </div>
    </div>`

    return html;
}


//addNewMovie Function to create a POST Request
const addNewMovie = (movie) => fetch(`${apiURL}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
})
    .then(res => res.json())
    .then(data => {
        $("#add-movie-modal").modal("toggle");
        refresh();
        return movie;
    })
    .catch(console.error);



//Save New Movie Click Event
$("#save-new-movie").click(() => {
    let newMoviePoster = "";
    if($("#new-movie-poster").length && $("#new-movie-poster").val().length){
        newMoviePoster = $("#new-movie-poster").val()
    }   else{
        newMoviePoster = "media/popcorn-placeholder.jpg"
    }
    let newMovieObj = {
        title: $("#new-movie-title").val(),
        rating: $("#new-movie-rating").val(),
        poster: newMoviePoster,
        year: $("#new-movie-year").val(),
        genre: $("#new-movie-genre").val(),
        actors: $("#new-movie-actors").val(),
        director: $("#new-movie-director").val(),
        plot: $("#new-movie-plot").val()
    };
    addNewMovie(newMovieObj);
});



//Delete Movie Function to create a DELETE Request
const deleteMovie = id => fetch(`${apiURL}/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => res.json())
    .then(() => {
        refresh();
    })
    .catch(console.error);



//Delete Click Event
$(document).on('click', '.delete', function() {
    let dataId = $(this).data("id");
    deleteMovie(dataId);
});



//Click Event to Prepopulate the Edit Movie Modal
$(document).on('click', '.edit', function() {
    let dataTitle = $(this).data("title");
    let dataPoster = $(this).data("poster");
    let dataPlot = $(this).data("plot");
    let dataDirector = $(this).data("director");
    let dataYear = $(this).data("year");
    let dataGenre = $(this).data("genre");
    let dataActors = $(this).data("actors");
    let dataRating = $(this).data("rating");
    let dataId = $(this).data("id");
    $("#edit-movie-title").val(dataTitle)
    $("#edit-movie-poster").val(dataPoster)
    $("#edit-movie-plot").text(dataPlot)
    $("#edit-movie-director").val(dataDirector)
    $("#edit-movie-year").val(dataYear)
    $("#edit-movie-genre").val(dataGenre)
    $("#edit-movie-actors").val(dataActors)
    $("#edit-movie-rating").val(dataRating)
    $("#edit-movie-id").val(dataId)
});



//Edit Movie Function to create a PUT Request
const editMovie = movie => fetch(`${apiURL}/${movie.id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
})
    .then(res => res.json())
    .then(data => {
        $("#edit-movie-modal").modal("toggle");
        refresh();
        return movie;
    })
    .catch(console.error);



//Save Edit Movie Click Event
$("#save-edit-movie").click(() => {
    let editMovieObj = {
        title: $("#edit-movie-title").val(),
        rating: $("#edit-movie-rating").val(),
        poster: $("#edit-movie-poster").val(),
        year: $("#edit-movie-year").val(),
        genre: $("#edit-movie-genre").val(),
        actors: $("#edit-movie-actors").val(),
        director: $("#edit-movie-director").val(),
        plot: $("#edit-movie-plot").val(),
        id: $("#edit-movie-id").val()
    };
    editMovie(editMovieObj);
});