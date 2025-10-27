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
        for (let i = 0; i < 6; i++) {
            const element = data[i];
            pictures.push(element)
        }
    })
console.log(pictures);


//Create a function to generate a card for each picture
function genCard(picture) {
    //Cycle into the array to generate a card with a picture
    const card = `<div class="col">
    <div class="mycard">
    <img src="${picture}" alt="">
    <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>
    <img class="pin" src="./assets/img/pin.svg" alt="">
    </div>`
    
}
//-Save custom card markup
//-ForEach cycle

//-Save the new cards into the rowEl
//Call the function to generate cards


