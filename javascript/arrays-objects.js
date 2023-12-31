// Return an array with the following values:
// - the number 4
// - the string 'abc'
// - an array of strings: 'apple', 'berry', 'cherry'
// - the boolean value true
function myArr() {
  // Replace this with your code
  let newArr = [4, "abc", ["apple", "berry", "cherry"], true];
  return newArr;
}

// The following array, `nestedLetters`, contains many levels of nested arrays.
// Return the letter 'z' from `nestedLetters` using bracket notation.
function getZ() {
  const nestedLetters = [
    "m",
    "g",
    "e",
    "q",
    "h",
    ["n", "b", ["v", "z", "y", "r"]],
    "a",
  ];
  return nestedLetters[5][2][1];
  // Replace this with your code
}

// Use the spread operator to combine the following arrays into one array and return it.
function flatAnimals() {
  const forest = ["deer", "bear", "squirrel"];
  const ocean = ["whale", "shark", "dolphin", "octopus", "starfish"];
  const savannah = ["lion", "zebra", "lion", "giraffe"];
  const desert = ["rattlesnake", "coyote"];

  // Replace this with your code
  let habitats = [...forest, ...ocean, ...savannah, ...desert];
  return habitats;
}

// Now use the spread operator to return a copy of the animals array with 'elephant' at
// the end.
function animalsWithElephant() {
  const animals = ["aardvark", "bear", "cat"];

  // Replace this with your code
  let animalsEle = [...animals, "elephant"];
  return animalsEle;
}
// console.log(animalsWithElephant())

// You don't agree with the rating for Splendor,
// delete the rating property off of the gameInfo object.
function improveGameRating() {
  const gameInfo = {
    name: "Splendor",
    desc: "Renaissance merchants race to grab gems, acquire property, and please nobility.",
    players: [2, 3, 4],
    playingTime: 30,
    minAge: 10,
    rating: 1,
  };

  // Replace this with your code
  delete gameInfo.rating;
  return gameInfo;
}

// You only like even numbers, so get rid of the other shapes by
// looping over the shapes object and deleting any property whose value is odd number.
function evenShapes() {
  const shapes = {
    triangle: 3,
    square: 4,
    rectangle: 4,
    pentagon: 5,
    hexagon: 6,
    septagon: 7,
    octagon: 8,
  };

  // Replace this with your code
  // for (i = )
  for (const prop in shapes) {
    if (shapes[prop] % 2 !== 0) {
      delete shapes[prop];
    }
  }
  // console.log(shapes)
  return shapes;
}
// console.log(evenShapes())

// Write a for loop that loops over the classes array,
// nest a for in loop to loop over each object.
// Check to see if any of the properties' values are the boolean 'true'.
// If they are true, change them to false.
function betterCourses() {
  const courses = [
    {
      title: "JavaScript 101",
      instructor: "Emily",
      days: ["M", "W", "F"],
      time: 11,
      inPerson: false,
      homework: true,
    },
    {
      title: "UI Design",
      instructor: "Daniel",
      days: ["T", "Th"],
      time: 9,
      inPerson: true,
      homework: false,
    },
    {
      title: "Creating Servers",
      instructor: "Jess",
      days: ["M", "W"],
      time: 1,
      inPerson: true,
      homework: true,
    },
  ];

  // Replace this with your code
  courses.forEach((ele) => {
    for (const prop in ele) {
      if (ele[prop] === true) {
        ele[prop] = false;
      }
    }
  });
  // for (let i = 0; i < courses.length; i++){
  //   for (let prop in obj){
  //     if (obj[prop] === true) {
  //       obj[prop] = false
  //     }
  //   }
  // }
  // console.log(courses)
  return courses;
}
// console.log(betterCourses())
// Use nested for loops to compare the letters in the lettersToPair array below.
// When you find a pair, push the indexes of the letters into the pairsArray as an array.
// For example, looping the array ['b', 'x', 'x', 'b']
// should create the array [[0,3], [1,2]].
function findPairs() {
  const lettersToPair = ["e", "k", "s", "a", "e", "s", "a", "n", "k", "n"];
  const pairsArray = [];

  // Replace this with your code
  lettersToPair.forEach((letter, index) => {
    lettersToPair.forEach((secondLetter, secondIndex) => {
      if (index < secondIndex && letter === secondLetter){
      // It just needs this, but I learned this function using chatGPT which is cheating :)
      // pairsArray.push([index,secondIndex])
      }
    })
    // for (let i = 0 + 1; i < lettersToPair.length; i++)
    //   if (ele === lettersToPair[i]) {
    //     if (i !== index) {
    //       pairsArray.push([index, i]);
    //     }
    //   }
  });
  // console.log(pairsArray)
  return pairsArray;
}
// console.log(findPairs())

// For these problems we will be using the objects below, contactInfo and shippingInfo,
// as well as objects that you will make based off these two.
const contactInfo = {
  name: "Helen",
  phoneNumber: 1234445555,
  email: "helen@mymail.com",
};

const shippingInfo = {
  name: "Helen",
  street: "100 E. Main Street",
  city: "Anytown",
  state: "AZ",
  zipCode: 85004,
};

// Using the Object.assign method, create a new object that combines the contactInfo and
// shippingInfo objects and return it.
function getHelensInfo() {
  // Replace this with your code
  let getHelen = Object.assign(contactInfo, shippingInfo);
  return getHelen;
}

// Return Helen's email using destructuring.
function getHelensEmail() {
  // Replace this with your code
  const { email } = contactInfo;
  return email;
}

// Use destructuring to save the zip code and state
// from shippingInfo to new variables and return [zipCode, state]
function getZipAndState() {
  // Replace this with your code
  let newVar = [];
  const { state, zipCode } = shippingInfo;
  newVar = [zipCode, state];
  console.log(newVar);
  return newVar;
}
// console.log(getZipAndState());

// Helen has a daughter named Ellen that lives at the same address.
// Return an object with Helen's info in it using the spread operator on the
// contactInfo and shippingInfo objects. Then, overwrite the name property to 'Ellen'
// and the email address to 'ellen@email.com'.
// Return the new object.
function getEllensInfo() {
  // Replace this with your code
  let ellensInfo = { ...contactInfo, ...shippingInfo };
  ellensInfo.name = "Ellen";
  ellensInfo.email = "ellen@email.com";
  return ellensInfo;
}

// Use the userInfo object below to complete problems 9-11.
const userInfo = {
  name: "gn@rly_c0der_007",
  password: "reallySuperSecret1",
  settings: {
    theme: "dark",
    fontSize: 14,
    alerts: false,
  },
  topics: ["food", "hiking", "gaming", "tech"],
  comments: [
    {
      post: "New Phones Coming in September",
      comment: "Excited to get one of these!",
      upvotes: 5,
      responses: [
        {
          userId: 3827,
          response: "Me too!",
        },
        {
          userId: 1040,
          response: "Want to learn about the pyramid scheme I bought into?",
        },
      ],
    },
    {
      post: "Best Hiking in Your Town",
      comment: "Trail #402 is closed in the winter",
      upvotes: 100,
      responses: [
        {
          userId: 1084,
          response: "Thanks for the info",
        },
        {
          userId: 5498,
          response: "You saved me a trip out there, thank you!",
        },
        {
          userId: 3597,
          response: "Good to know",
        },
      ],
    },
  ],
};

// Return the value of alerts in gn@rly_c0der_007's settings using dot notation.
function shouldAlert() {
  // Replace this with your code
  return userInfo.settings.alerts;
}

// Return the last item in gn@rly_c0der_007's topics array
// using dot and/or bracket notation.
function lastTopic() {
  // Replace this with your code
  return userInfo.topics[userInfo.topics.length-1];
}

// Return the userId of the first response to
// gn@rly_c0der_007's 2nd comment using dot/bracket notation.
function firstResponseId() {
  // Replace this with your code
  return userInfo.comments[1].responses[0].userId;
}

export {
  animalsWithElephant,
  betterCourses,
  contactInfo,
  evenShapes,
  findPairs,
  firstResponseId,
  flatAnimals,
  getEllensInfo,
  getHelensEmail,
  getHelensInfo,
  getZ,
  getZipAndState,
  improveGameRating,
  lastTopic,
  myArr,
  shouldAlert,
};
