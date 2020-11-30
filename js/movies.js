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
        refresh();
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
        genre: $("#new-movie-genre").val(),
        actors: $("#new-movie-actors").val(),
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
        refresh();
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

//Function to indicate that we are modifying an existing movie

const editMovie = movie => fetch(`${apiURL}/${movie.id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
})
    .then(res => res.json())
    .then(data => {
        console.log(`Success: created ${JSON.stringify(data)}`);
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


//Questions:
//Where to pass ID to get the values, to set values
//Dynamically updating page as items are added/deleted/edited

// $('#delete-movie-btn').click(function () {
//     let deleteUserMovie = $('#deleted-movie').val();
//     console.log(deleteUserMovie);
//     getMovies().then((movies) => {
//         let movieNameID;
//         movies.forEach((movie) => {
//             console.log(movie.title, movie.id);
//             if (deleteUserMovie === movie.title) {
//                 movieNameID = movie.id;
//                 console.log((movie.id));
//                 return deleteMovie(movieNameID);
//             }
//         });
//         $('.apiOutput').html('');
//         $('#deleted-movie').val('');
//         let bucket = [];
//         getMovies().then((movies) => {
//             movies.forEach(({title, rating,}) => {
//                 let movieInfoString = (`${title} - rating:  ${rating} <br>`);
//                 bucket.push(movieInfoString);
//             });
//             $('.apiOutput').html(`Here are the all the movies:<br> ${bucket}`)
//         }).catch((error) => {
//             console.log('Oh no! Something went wrong.\nCheck the console for details.');
//             console.log(error);
//         });
//     });
// });

