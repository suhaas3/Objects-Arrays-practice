const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map((num) => {
//   return num * 2;
// })

const doubled = numbers.map(num => num * 2);

// console.log(doubled)

//movie Pricing Exercise
const movieList = [
  {
    title: "devara",
    price: 200
  },
  {
    title: "Pushpa 2",
    price: 310
  },
  {
    title: "game changer",
    price: 180
  }
];

const formattedMovies = movieList.map(movie => {
  return {
    title: movie.title,
    price: `₹${movie.price}`
  };
});

//console.log(formattedMovies)

//BookMyShow scenraio
const showTimings = [
  {
    time: "10:00 AM",
    seats: 50
  },
  {
    time: "2:00 PM", seats: 0
  },
  { time: "6:00 PM", seats: 25 }
];

const availabilityStatus = showTimings.map(show => {
  return {
    time: show.time,
    status: show.seats > 0 ? "Available" : "Housefull",
    seatsLeft: show.seats
  }
})

//console.log("show Availability :",availabilityStatus)

//create an Array of 5 movie Objects with: title,rating,price
const moviesList = [
  {
    title: "Devara",
    rating: 9.8,
    price: 249
  },
  {
    title: "pushpa 2", rating: 8.5, price: 310
  },
  { title: "game changer", rating: 5.5, price: 180 },
  { title: "Hit 3", rating: 7.0, price: 150 },
  { title: "salaar", rating: 8.8, price: 195 }
];

//console.log(typeof moviesList)

const moviePrice = moviesList.map(priceIn => {
  return {
    title: priceIn.title,
    rating: priceIn.rating > 7.0 ? "BlockBuster" : "Disaster",
    price: `₹${priceIn.price}`,
    premiumPrice: `₹${priceIn.price + 100}`
  }
})

// console.log(moviePrice)

//create an Array of movie objects
const movieCollection = [
  {
    title: "Inception",
    price: 200,
    seatsAvailable: 50,
    ratings: 4.5
  },
  {
    title: "Avathar", price: 250, seatsAvailable: 0, ratings: 5.0
  },
  { title: "BumbleBee", price: 180, seatsAvailable: 30, ratings: 4.8 },
  { title: "Beast", price: 120, seatsAvailable: 80, ratings: 3.0 },
  { title: "Ntr31", price: 280, seatsAvailable: 0, ratings: 5.0 }
];

const allMovies = movieCollection.map(movies => {
  return {
    title: movies.title,
    price: `₹${movies.price}`,
    isAvailableSeats: movies.seatsAvailable > 0 ? "Available" : "Housefull",
    weekendSurgePrice: `₹${movies.price + 100}`,
    ratings: movies.ratings >= 5.0 ? "BlockBuster" : "Average" 
  }
})

console.log(allMovies)