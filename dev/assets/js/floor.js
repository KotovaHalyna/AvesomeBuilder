const flatArr = [{
  id: 0,
  house: '2',
  floor: '1',
  flatNumber: '1',
  rooms: '3',
  square: '82.3м²',
  price: '950$',
  priceTotal: '78,185$',
 status: 'action',
},
{
    id: 1,
    house: '2',
    floor: '1',
    flatNumber: '2',
    rooms: '2',
    square: '60,7м²',
    price: '950$',
    priceTotal: '57,665$',
    status: 'booking',
},
{
    id: 2,
    house: '2',
    floor: '1',
    flatNumber: '3',
    rooms: '2',
    square: '60,7м²',
    price: '950$',
    priceTotal: '57,665$',
    status: 'already-sold',
},
{
    id: 3,
    house: '2',
    floor: '1',
    flatNumber: '4',
    rooms: '3',
    square: '82м²',
    price: '950$',
    priceTotal: '77,900$',
    status: 'action',
},
{
    id: 4,
    house: '2',
    flatNumber: '5',
    rooms: '3',
    square: '79,7м²',
    price: '950$',
    priceTotal: '75,905$',
    status: 'booking',
},
{
    id: 5,
    house: '2',
    floor: '1',
    flatNumber: '6',
    rooms: '1',
    square: '39,2м²',
    price: '950$',
    priceTotal: '37,240$',
    status: 'action',
},
{
    id: 6,
    house: '2',
    flatNumber: '7',
    rooms: '1',
    square: '42м²',
    price: '950$',
    priceTotal: '39,900$',
    status: 'booking',
},
{
    id: 7,
    house: '2',
    flatNumber: '8',
    rooms: '1',
    square: '39,2м²',
    price: '950$',
    priceTotal: '37,240$',
    status: 'already-sold',
},
{
    id: 8,
    house: '2',
    floor: '1',
    flatNumber: '9',
    rooms: '3',
    square: '79,3м²',
    price: '950$',
    priceTotal: '75,335$',
    status: 'already-sold',
},
]

const installFloor = () => {
    const flats = document.querySelectorAll('.flat')
    const flatInfo = document.querySelector('.floor-options')

    const removeActiveClass = () => flats.forEach(item => {
        item.classList.remove('active')
    })

  console.log(initialValue);

  const initialValue = [flatArr[1]]
  .console.log(initialValue);


  


    const renderInformation = (array) => {
      const flatInformation = array.map(item => {
        return ('

          <h2>${item.house}</h2>
          <h2>${item.flatNumber}</h2>
          <h2>${item.floor}</h2>
          <h2>${item.flatNumber}</h2>
          <h2>${item.rooms}</h2>
          <h2>${item.square}</h2>
          <h2>${item.price}</h2>
          <h2>${item.priceTotal}</h2>
          <h2>${item.status}</h2>
          ')   
      })

        flatInfo.innerHTML = flatInformation.join('')
    }
    renderInformation(initialValue)

    flats.forEach(flat => {
       flat.addEventListener('click', () => {
        removeActiveClass()
        flat.classList.add('active')
       })

      if (flat.classList.contains('action')) {
        flat.querySelector('.flat-status').innerHTML = 'Акція'
      } else if (flat.classList.contains('sold')) {
        flat.querySelector('.flat-status').innerHTML = 'Бронь'
      } else if (flat.classList.contains('booking')) {
        flat.querySelector('.flat-status').innerHTML = 'Продано'
      } else {
        flat.querySelector('.flat-status').innerHTML = 'Вільно'
      }
    })
}

document.querySelector('.page-floor') ? installFloor() : null;
