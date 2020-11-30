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
            <p class="card-text movie-genre">${movie.genre}</p>
            <p class="card-text movie-actors">${movie.actors}</p>
            <p class="card-text movie-rating"><small class="text-muted"><strong>Rating: ${movie.rating} Stars</strong></small></p>
            <p class="card-text">${movie.id}</p>
            <div>
               <button type="button" data-id="${movie.id}" data-title="${movie.title}" class="edit btn-secondary btn" data-toggle="modal" data-target="#edit-movie-modal">Edit</button>        
               <button type="button" data-id="${movie.id}" class="delete btn-danger btn">Delete</button>        
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

//Save New Movie Click Event
$("#save-new-movie").click(() => {
    let newMovieObj = {
        title: $("#new-movie-title").val(),
        rating: $("#new-movie-rating").val(),
        poster: $("#new-movie-poster").val(),
        year: $("#new-movie-year").val(),
        director: $("#new-movie-director").val(),
        plot: $("#new-movie-plot").val()
    };
    addNewMovie(newMovieObj);
});


//Delete Movie Function accessed through the "delete" button inside each card
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

//Delete Click Event
$(document).on('click', '.delete', function() {
    let dataId = $(this).data("id");
    deleteMovie(dataId);
    // $(this).parent().parent().parent().css("display", "none")
});


//Edit Button Function


//Function to prepopulate the add/edit movie modal
$(document).on('click', '.edit', function() {
    // let dataId = $(this).data("id");
    let dataTitle = $(this).data("title");
    // let movieTitle = $( ".movie-title:eq(dataId)").val()
    // $( ".movie-title:eq(dataId)").val(dataId)
    $("#edit-movie-title").attr("value", dataTitle)
});

// $(document).getElementsByClassName("edit").value = movie.title

//Function to indicate that we are modifying an existing movie


//Questions:
//Where to pass ID to get the values, to set values
//Dynamically updating page as items are added/deleted/edited