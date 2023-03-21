function Released (title, director, yearReleased) {
        this.title = title
        this.director = director
        this.yearReleased = yearReleased
}
function MovieRatingOver7 (title, director, yearReleased, rating) {
        this.rating = rating;
}
MovieRatingOver7.prototype = Object.create(Released.prototype)

function ActionMovie(title, director, yearReleased, rating, budget, genre) {
      Released.call(this, title, director, yearReleased);
      MovieRatingOver7.call(this, title, director, yearReleased, rating);
      this.budget = budget;
      this.genre = genre;
}
function ComedyMovie(title, director, yearReleased, rating, budget, genre) {
      Released.call(this, title, director, yearReleased);
      MovieRatingOver7.call(this, title, director, yearReleased, rating);
      this.budget = budget;
      this.genre = genre;
}
function HorrorMovie(title, director, yearReleased, rating, budget, genre) {
       Released.call(this, title, director, yearReleased);
       this.budget = budget;
       this.genre = genre;
}
function SciFiMovie(title, director, yearReleased, rating, budget, genre) {
      Released.call(this, title, director, yearReleased);
      this.budget = budget;
      this.genre = genre;
}
Object.setPrototypeOf(ActionMovie.prototype, Released.prototype);
ActionMovie.prototype.constructor = ActionMovie;
ActionMovie.prototype.genre = "action";
Object.setPrototypeOf(ComedyMovie.prototype, Released.prototype);
ComedyMovie.prototype.constructor = ComedyMovie;
ComedyMovie.prototype.genre = "comedy";
Object.setPrototypeOf(HorrorMovie.prototype, Released.prototype);
HorrorMovie.prototype.constructor = HorrorMovie;
HorrorMovie.prototype.genre = "horror";
Object.setPrototypeOf(SciFiMovie.prototype, Released.prototype);
SciFiMovie.prototype.constructor = SciFiMovie;
SciFiMovie.prototype.genre = "sci-fi";

Released.prototype.release = function  (){
    console.log(`
        Title: ${ this.title }
        By: ${ this.director }
        ${ this.yearReleased }
    `);
}
MovieRatingOver7.prototype.mark = function () {
    console.log(`
        Rating: ${ this.rating }
    `);
}
ActionMovie.prototype.getRating = function () {
  return `${this.rating} rating over 7.`;
}
ActionMovie.prototype.getDetails = function () {
  return `${this.title} (${this.yearReleased}) directed by ${this.director}. Budget: $${this.budget} million. Genre: ${this.genre}. Rating: ${this.rating} rating over 7.`;
}
ComedyMovie.prototype.getRating = function () {
  return `${this.rating} rating over 7.`;
}
ComedyMovie.prototype.getDetails = function () {
  return `${this.title} (${this.yearReleased}) directed by ${this.director}. Budget: $${this.budget} million. Genre: ${this.genre}. Rating: ${this.rating} rating over 7.`;
}
HorrorMovie.prototype.getTitle = function () {
    return this.title;
}
HorrorMovie.prototype.getDetails = function () {
  return `${this.title} (${this.yearReleased}) directed by ${this.director}. Budget: $${this.budget} million. Genre: ${this.genre}.`;
}
SciFiMovie.prototype.getTitle = function () {
    return this.title;
}
SciFiMovie.prototype.getDetails = function () {
  return `${this.title} (${this.yearReleased}) directed by ${this.director}. Budget: $${this.budget} million. Genre: ${this.genre}.`;
}

let action = new ActionMovie("Everything Everywhere All at Once", "Daniel Kwan", 2022, 7.8, 25, "Action");
let comedy = new ComedyMovie("Triangle of Sadness", "Ruben Östlund", 2022, 7, 15, "Comedy");
let horror = new HorrorMovie("The Amityville Horror", "Andrew Douglas", 2005, 6, 18, "Horror");
let sciFi = new SciFiMovie("Space Samurai: Oasis", "Mark Maine", 2014, 6, 10, "Sci-Fi");

console.log(action.getDetails()); 
console.log(comedy.getDetails());
console.log(horror.getDetails());
console.log(sciFi.getDetails());
