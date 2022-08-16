const buttonConverter = document.getElementsByClassName('buttonConverter')
var moedas = ''
var currentBid = ''

function converter() {
  const selectDe = document.getElementById('selectDe');
  const inputDe = document.getElementById('inputDe');
  const selectPara = document.getElementById('selectPara');
  const resultado = document.getElementById('resultado');
  
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }
  
  fetch(`https://economia.awesomeapi.com.br/json/last/${selectDe.value}-${selectPara.value}`, options)
  .then(response =>{response.json()
    .then( data => showBid(data))
  })
  .catch(e => console.log('Ocorreu um erro:'+ e.message))
}

const showBid = (result)=> {
  moedas = selectDe.value+selectPara.value
  currentBid = result[moedas].bid
  console.log(currentBid)
  return currentBid
}