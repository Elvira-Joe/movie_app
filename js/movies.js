"use strict";

const apiURL = "https://wind-miniature-gauge.glitch.me/movies";

const getMovies = () => fetch(apiURL)
    .then(res => res.json())
    .catch(console.error)

function buildCards(movies){
    let html = `<div>`
    for(let movie of movies){
        console.log(movie.title);
        console.log(movie.rating);
        console.log(movie.id);

        html += '<div class="card">\n' +
            '  <div class="card-header">\n' +
            '    Quote\n' +
            '  </div>\n' +
            '  <div class="card-body">\n' +
            '    <blockquote class="blockquote mb-0">\n' +
            '      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n' +
            '      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>\n' +
            '    </blockquote>\n' +
            '  </div>\n' +
            '</div>'

    }
    html += `</div>`
    document.write(html);
}