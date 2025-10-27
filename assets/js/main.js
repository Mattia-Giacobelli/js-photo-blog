console.log('It works');

//Save the row domEl
const rowEl = document.querySelector('.row')
console.log(rowEl);

//Create a ajax call to get the pictures array
const pictures = []
fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(data => {
        //-Save the array
        pictures.push(data)
    })
console.log(pictures);




//Cycle into the array to generate a card with a picture
//-ForEach cycle
//-Save custom card markup
//-Save the new cards into the rowEl

