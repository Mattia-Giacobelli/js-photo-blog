console.log('It works');

//Save the row domEl
const rowEl = document.querySelector('.row')
console.log(rowEl);



//Create a function to generate a card for each picture
/**
 * generate cards based on array's object and stamp in the selected El
 * @param {*} 
*/
function genCards() {

    //Create a ajax call to get the pictures array

    //Cycle into the array to generate a card with a picture
    //-ForEach cycle
    for (let i = 0; i < 6; i++) {
        let card
        //-Save custom card markup

        fetch('https://lanciweb.github.io/demo/api/pictures/')
            .then(response => response.json())
            .then(data => {
                console.log(data[i].url)

                card = `<div class="col">
                <div class="mycard">
                <img src="${data[i].url}" alt="">
                <div class="date">
                ${data[i].date}
                </div>
                <h2>
                ${data[i].title.toUpperCase()}
                </h2>
                <img class="pin" src="./assets/img/pin.svg" alt="">
                </div>`
                //Stamp in page
                rowEl.innerHTML += card
            })
    };

}

genCards()

const prova = 'f'
prova.toUpperCase