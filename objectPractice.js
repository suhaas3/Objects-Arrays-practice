//movie object using the simple way (object literal)
const movie1 = {
  name: 'Devara',
  price: 249,
  language: 'telugu'
};

// console.log(movie1)
// console.log(movie1.name)

//empty object first,then add properties
const movie2 = {};

movie2.name = 'pushpa';
movie2.price = 180;
movie2.language = 'hindi';

// console.log(movie2)

//create object using square bracket notation
const movie3 = {};

movie3["name"] = 'superman';
movie3["price"] = 200;
movie3["language"] = "english";

// console.log(movie3)

movie3["name"] = "ntr31";

//console.log(movie3["name"])
//console.log(movie3["price"])
//console.log(movie3["language"])

//create a book Object
const book1 = {
  bookName: "web dev",
  bookId: 123,
  bookAuthor: "so and so"
};

const book2 = {};
  book2.bookName = "JavaScript";
  book2.bookId = 456;
  book2.bookAuthor = "java man";

  //console.log(book2.bookAuthor)
//object with Bracket notation
  const book3 = {};
  book3["bookName"] = "Java";
  book3["bookId"] = "789";
  book3["bookAuthor"] = "james Gosling";

  //console.log(book3["bookId"])

  //movie Details example
  const movieDetails = {
    title: "Devara",
    director: "koratala siva",
    year: 2024,
    price: {
      normal:200,
      premium:350
    },
    showTimings: ["10:00 Am","2:00 PM","6:00 PM"]
  };

  //console.log(movieDetails)
  console.log(movieDetails.price);