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

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

$("#add-button").click(openForm);


// Add New Movies Function
// function createMovieForm() {
//     let html = `<div>`
//     html +=`<form>
//       <div class="form-group row">
//         <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
//         <div class="col-sm-10">
//           <input type="email" class="form-control" id="inputEmail3">
//         </div>
//       </div>
//       <div class="form-group row">
//         <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
//         <div class="col-sm-10">
//           <input type="password" class="form-control" id="inputPassword3">
//         </div>
//       </div>
//       <fieldset class="form-group">
//         <div class="row">
//           <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
//           <div class="col-sm-10">
//             <div class="form-check">
//               <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
//               <label class="form-check-label" for="gridRadios1">
//                 First radio
//               </label>
//             </div>
//             <div class="form-check">
//               <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
//               <label class="form-check-label" for="gridRadios2">
//                 Second radio
//               </label>
//             </div>
//             <div class="form-check disabled">
//               <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
//               <label class="form-check-label" for="gridRadios3">
//                 Third disabled radio
//               </label>
//             </div>
//           </div>
//         </div>
//       </fieldset>
//       <div class="form-group row">
//         <div class="col-sm-2">Checkbox</div>
//         <div class="col-sm-10">
//           <div class="form-check">
//             <input class="form-check-input" type="checkbox" id="gridCheck1">
//             <label class="form-check-label" for="gridCheck1">
//               Example checkbox
//             </label>
//           </div>
//         </div>
//       </div>
//       <div class="form-group row">
//         <div class="col-sm-10">
//           <button type="submit" class="btn btn-primary">Sign in</button>
//         </div>
//       </div>
//     </form>
// </div>`
// $("#movie-row").html(html);
// }