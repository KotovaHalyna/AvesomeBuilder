const buildItem = document.querySelectorAll('build-item')

const cellAdress = document.querySelector('#address')
const cellFlats = document.querySelector('#flats')
const cellFlatsFree = document.querySelector('#flats-free')
const cellFlatsBooking = document.querySelector('#flats-booking')
const cellFlatsSold = document.querySelector('#flats-sold')

console.log('log ', buildItem.length);

buildItem.forEach(object => {
    object.addEventListener('mouseover', ()=> {
        const attr = object.getAttribute('data-address')
        console.log(attr);
        cellAdress.innerText = attr
    })
})