"use strict";
const number01Films = +prompt('Сколько фильмов вы уже просмотрели?', '');
const personalMovieDB = {
   count: number01Films,
   movies: {},
   actors: {},
   geners: [],
   privat: false
};

const a = prompt('Один из последний просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      с = prompt('Один из последний просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[с] = d;

console.log(personalMovieDB);