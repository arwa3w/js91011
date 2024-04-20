function getDetails(zName, zAge, zCountry) {
    function namePattern() {
        return `${zName.slice(0,zName.indexOf(" "))} ${zName.substr(zName.indexOf(" "), 2).toUpperCase()}.`
      // Write Your Code Here
      // Osama Mohamed => Osama M.
      // Ahmed ali => Ahmed A.
    }
    namePattern();
    function ageWithMessage() {
        return `your age is ${parseInt(zAge)}`;
      // Write Your Code Here
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
    }
    ageWithMessage();
    function countryTwoLetters() {
        return `${zCountry.slice(0,2).toUpperCase()}`;
      // Write Your Code Here
      // Egypt => You Live In EG
      // Syria => You Live In SY
    }
    countryTwoLetters();
    function fullDetails() {
        return `Hello ${namePattern()} ,${ageWithMessage()},${countryTwoLetters()}`;
      // Write Your Code Here
    }
    return fullDetails(); // Do Not Edit This
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY

console.log("---------------------------------------------2")


itsMe = () => {return` Iam A Normal Function`;}
  console.log(itsMe()); // Iam A Normal Function

urlCreate = (protocol, web, tld) => {
return`${protocol}://www.${web}.${tld}`;
}

  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

console.log("---------------------------------------------3")



checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble



console.log("---------------------------------------------4")

function specialMix(...data) {
    // Your Code Here
    let r=0;
    for(let i=0 ;i<data.length;i++)
    {
        if(isNaN(parseInt(data[i]))===false)
        {
            r+=parseInt(data[i]);
        }
    }
    if(r==0)
    {
        return `all is string` ;
    }
    return r;
}
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


  console.log("---------------------------------------------week 10 (1)")


let mix=[1 , 2 , 3 , "E" , 4 , "l" , "z" , "e" , "r" , 5 , "o"];
let newstring =mix.map(function(ele){
  if( isNaN(parseInt(ele)))
    return ele;
  else
    return "";
}).reduce(function(x,y){
  return x+y;
})
console.log(newstring);



console.log("---------------------------------------------week 10 (2)")


let myString = "EElllzzzzzzzeroo";

let newss = myString.split("").filter(function(ele,index){
  return myString.indexOf(ele) === index;
}).reduce(function(x,y){
  return x+y;
})
console.log(newss)


console.log("---------------------------------------------week 10 (3)")


let myArray =["E" , "l" , "z" , ["e","r"],"o"];

let n=myArray.reduce(function(x,y){
  return x+y;
}).split("").filter(function(ele){
  return ele !== ",";
}).reduce(function(x,y){
  return x+y;
})
console.log(n)





console.log("---------------------------------------------week 10 (4)")

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]
let s=numsAndStrings.filter(function(ele){
  return !isNaN(parseInt(ele));
}).map(function(ele){
  return -ele;
})
console.log(s)

console.log("---------------------------------------------week 10 (5)")




let nums = [2, 12, 11, 5, 10, 1, 99];
let r=nums.reduce(function(x,y){
  return y%2===0 ? y*x : y+x;
},1)
console.log(r)
// 500




console.log("---------------------------------------------week 11 (1)")

// Create Your Object Here
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function(){
      return `My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`;
  },
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
console.log("---------------------------------------------week 11 (2)")
let objMethodOne = {
  property: "Method One",
};

console.log(objMethodOne.property); 

let objMethodTwo = new Object ({
  property: "Method Two",
});

console.log(objMethodTwo.property); 


let objMethodThree = Object.create({});

objMethodThree.property = "Method Three";

console.log(objMethodThree.property); 

let objMethodFour = Object.assign({}, {property: "Method Four"});

console.log(objMethodFour.property);




console.log("---------------------------------------------week 11 (3)")



let a = 1;

let threeNums = {
    b: 2,
    c: 3,
    d: 4,
};

let twoNums = {
    e: 5,
    f: 6,
};

let finalObject = Object.assign({}, {a}, threeNums, twoNums);

console.log(finalObject);
console.log("---------------------------------------------week 11 (4)")

let myFavGames = {
  "Trinity Universe": {
      publisher: "NIS America",
      price: 40,
  },
  "Titan Quest": {
      publisher: "THQ",
      bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
      },
      price: 50,
  },
  YS: {
      publisher: "Falcom",
      bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
      },
      price: 40,
  },
};

let objectLength = Object.keys(myFavGames).length;

let game = Object.keys(myFavGames);

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${game[i]}`);
  console.log(`The Publisher Is ${myFavGames[game[i]]["publisher"]}`);
  console.log(`The Price Is ${myFavGames[game[i]]["price"]}`);

  if (Object.hasOwn(myFavGames[game[i]], "bestThree")) {
      console.log("- Game Has Releases");
      console.log(`First => ${myFavGames[game[i]]["bestThree"]["one"]}`);
      console.log(`Second => ${myFavGames[game[i]]["bestThree"]["two"]}`);
      console.log(`Third => ${myFavGames[game[i]]["bestThree"]["three"]}`);
  }
  console.log("#".repeat(20));
}

