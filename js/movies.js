"use strict";

const apiURL = "https://wind-miniature-gauge.glitch.me/movies";


//getMovies Function to fetch
const getMovies = () => fetch(apiURL)
    .then(res => res.json())
    .catch(console.error)


//Building Cards Function
function buildCards(movie){
    let html = '';
    html += `<div class="card">
     <div class="card-header">${movie.title}</div>
     <div class="card-body">
     <blockquote class="blockquote mb-0">
     <p>${movie.rating}</p>
     <footer class="blockquote-footer">${movie.id} <cite title="Source Title">Source Title</cite></footer>
     </blockquote>
     </div>
     </div>`;
    return html;
}