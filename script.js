const buttonConverter = document.getElementsByClassName('buttonConverter')

function consultarAPI() {
  const selectDe = document.getElementById('selectDe');
  
  const selectPara = document.getElementById('selectPara');
 
  
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
  var moedas = selectDe.value+selectPara.value
  var currentBid = result[moedas].bid
  return converter(currentBid)
}

 function converter(currentBid) {
  const inputDe = document.getElementById('inputDe');
  const resultado = document.getElementById('resultado');

  resultado.innerHTML = `${inputDe.value*currentBid}`
 }