function Released (title, director, yearReleased) {
        this.title = title
        this.director = director
        this.yearReleased = yearReleased
}
function MovieRatingOver7 (title, director, yearReleased, rating) {
        Released.call(this, title, director, yearReleased);
        this.rating = rating;
}
MovieRatingOver7.prototype = Object.create(Released.prototype);
MovieRatingOver7.prototype.constructor = MovieRatingOver7;

function ActionMovie(title, director, yearReleased, rating, budget, genre, explosions) {
      MovieRatingOver7.call(this, title, director, yearReleased, rating);
      this.budget = budget;
      this.genre = genre;
      this.explosions = explosions;
}
function ComedyMovie(title, director, yearReleased, rating, budget, genre, levelOfHumor) {
      MovieRatingOver7.call(this, title, director, yearReleased, rating);
      this.budget = budget;
      this.genre = genre;
      this.levelOfHumor = levelOfHumor;
}
function HorrorMovie(title, director, yearReleased, rating, budget, genre, jumpScares) {
       Released.call(this, title, director, yearReleased);
       this.budget = budget;
       this.genre = genre;
       this.jumpScares = jumpScares;
}
function SciFiMovie(title, director, yearReleased, rating, budget, genre, futuristicTech) {
      Released.call(this, title, director, yearReleased);
      this.budget = budget;
      this.genre = genre;
      this.futuristicTech = futuristicTech;
}
Object.setPrototypeOf(ActionMovie.prototype, MovieRatingOver7.prototype);
Object.setPrototypeOf(ComedyMovie.prototype, MovieRatingOver7.prototype);
Object.setPrototypeOf(HorrorMovie.prototype, Released.prototype);
Object.setPrototypeOf(SciFiMovie.prototype, Released.prototype);


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
  return `${this.title} (${this.yearReleased}) directed by ${this.director}. Budget: $${this.budget} million. Genre: ${this.genre}. Rating: ${this.rating} rating over 7. Explosions: ${this.explosions}`;
}
ComedyMovie.prototype.getRating = function () {
  return `${this.rating} rating over 7.`;
}
ComedyMovie.prototype.getDetails = function () {
  return `${this.title} (${this.yearReleased}) directed by ${this.director}. Budget: $${this.budget} million. Genre: ${this.genre}. Rating: ${this.rating} rating over 7. Level of humor: ${this.levelOfHumor}`;
}
HorrorMovie.prototype.getTitle = function () {
    return this.title;
}
HorrorMovie.prototype.getDetails = function () {
  return `${this.title} (${this.yearReleased}) directed by ${this.director}. Budget: $${this.budget} million. Genre: ${this.genre}. Scary moments: ${this.jumpScares} `;
}
SciFiMovie.prototype.getTitle = function () {
    return this.title;
}
SciFiMovie.prototype.getDetails = function () {
  return `${this.title} (${this.yearReleased}) directed by ${this.director}. Budget: $${this.budget} million. Genre: ${this.genre}. Technologies that were used: ${this.futuristicTech}`;
}

let action = new ActionMovie("Everything Everywhere All at Once", "Daniel Kwan", 2022, 7.8, 25, "Action", 10);
let comedy = new ComedyMovie("Triangle of Sadness", "Ruben Östlund", 2022, 7, 15, "Comedy", 29);
let horror = new HorrorMovie("The Amityville Horror", "Andrew Douglas", 2005, 6, 18, "Horror", 5);
let sciFi = new SciFiMovie("Space Samurai: Oasis", "Mark Maine", 2014, 6, 10, "Sci-Fi", ["wormhole travel", "artificial intelligence"]);

console.log(action.getDetails()); 
console.log(comedy.getDetails());
console.log(horror.getDetails());
console.log(sciFi.getDetails());
