console.log('It works');

//Save the row domEl
const rowEl = document.querySelector('.row')
console.log(rowEl);

//Save pictures array
const pictures = []



//Create a ajax call to get the pictures array
fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(data => {
        data.forEach(pic => {
            pictures.push(pic)
        });
        stampCard(pictures, rowEl)
        console.log(pictures);

        //Select cards El and overlay
        const skateCard = document.getElementById('1')
        const passeggiataCard = document.getElementById('2')
        const alpiCard = document.getElementById('3')
        const sagraCard = document.getElementById('4')
        const waterCard = document.getElementById('5')
        const rivieraCard = document.getElementById('6')
        const overlay = document.getElementById('overlay')
        const ovBtn = document.querySelector('button')
        console.log(skateCard, overlay);

        //Create eventlistener to open overlay with specific card image

        skateCard.addEventListener('click', () => {
            //const img = document.querySelector('.1')
            overlay.style = "display: block"
            const ovImg = document.querySelector('.ov-img')
            ovImg.src = img.src

        })
        passeggiataCard.addEventListener('click', () => {
            //const img = document.getElementsByClassName('1')
            overlay.style = "display: block"
            const ovImg = document.querySelector('.ov-img')
            ovImg.src = img.src

        })
        alpiCard.addEventListener('click', () => {
            //const img = document.getElementsByClassName('1')
            overlay.style = "display: block"
            const ovImg = document.querySelector('.ov-img')
            ovImg.src = img.src

        })
        sagraCard.addEventListener('click', () => {
            //const img = document.getElementsByClassName('1')
            overlay.style = "display: block"
            const ovImg = document.querySelector('.ov-img')
            ovImg.src = img.src

        })
        waterCard.addEventListener('click', () => {
            //const img = document.getElementsByClassName('1')
            overlay.style = "display: block"
            const ovImg = document.querySelector('.ov-img')
            ovImg.src = img.src

        })
        rivieraCard.addEventListener('click', () => {
            //const img = document.getElementsByClassName('1')
            overlay.style = "display: block"
            const ovImg = document.querySelector('.ov-img')
            ovImg.src = img.src

        })
        //Close overlay
        ovBtn.addEventListener('click', (e) => {
            e.preventDefault()
            overlay.style = "display: none"
        })
    })




//Create a function to generate a card for each picture
function stampCard(array, El) {

    array.forEach(pic => {
        console.log(pic);

        let card = `<div class="col">
            <div class="mycard" id="${pic.id}">
            <img class="${pic.id}" src="${pic.url}" alt="">
            <div class="date">
            ${pic.date}
            </div>
            <h2>
            ${pic.title.toUpperCase()}
            </h2>
            <img  class="pin" src="./assets/img/pin.svg" alt="">
            </div>`
        //Stamp in page
        El.innerHTML += card
    })
}





//Open/close the overlay


//Create a function to change overlay's display property


//Create a function to get the card img src and stamp into the overlay

//Create event listener for each card and call the previous functions


