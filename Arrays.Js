//QUSTION1
//getting last element from an array
let  arr1 = [3, 7, 34, 90, 12];
let lastElement = arr1[arr1.length -1];
console.log({lastElement});

let arr2 = [true, "green", "where",12,56];
let lastElement2 = arr2[arr2.length -1];
console.log({lastElement2});

//QUESTION2
//Joining array elements into a string
let myPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(myPets.join());

//QUESTION3
//Sorting array items
let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
arr3.sort();
console.log({arr3});

//QUESTION4
//Removing duplicates from an array
let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);

}
console.log(removeDuplicates(arr));

//returning duplicates only
 let duplicates = arr.filter((item, index) => arr.indexOf(item) !==index);
console.log({duplicates});

//QUESTION 5
//search for a word in an array
let arr5 = ["the", "way", "x", 4];

arr5.forEach(str => {
    if(str === 'way'){
        console.log('way')
    }else{
        console.log('search was not found')
    }
})
    
    
//QUESTION6
//sorting a string
let word = "sevink"
let sortWord = (string) => {
    return string.split("").sort().join("");
}

console.log(sortWord("sevink"));
