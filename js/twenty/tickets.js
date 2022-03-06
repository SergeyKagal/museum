window.onload = () => {
  if (!sessionStorage.radio) {
    saveRadio();
    saveTickets();
    return;
  }

  loadStorage();
}
const amontBas = document.querySelector('#Basic');
const amontSen = document.querySelector('#Senior');


function ticketTypeCheck() {
  if (document.querySelector('#radio1').checked) return 20;
  if (document.querySelector('#radio2').checked) return 25;
  if (document.querySelector('#radio3').checked) return 40;
}

function totalCost(type, numBas, numSen) {
  return type * numBas * 1 + type * numSen * 1 / 2;
}


function Basic() {
  return document.querySelector('#Basic').value;
}

function Senior() {
  return document.querySelector('#Senior').value;
}

document.querySelector('.basic-senior-wrapper').onclick = function() {

  document.querySelector('#ticketsCost').innerHTML = `Total € ${totalCost(ticketTypeCheck(), Basic(), Senior())}`
  saveRadio();
  saveTickets();
}

document.querySelector('.radio-inner').onclick = function() {

  document.querySelector('#ticketsCost').innerHTML = `Total € ${totalCost(ticketTypeCheck(), Basic(), Senior())}`
  saveRadio();
  saveTickets();

}



function saveRadio() {
  if (document.querySelector('#radio1').checked) sessionStorage.setItem('radio', '#radio1');
  if (document.querySelector('#radio2').checked) sessionStorage.setItem('radio', '#radio2');
  if (document.querySelector('#radio3').checked) sessionStorage.setItem('radio', '#radio3');
}

function loadStorage() {
  document.querySelector(sessionStorage.radio).checked = true;
  document.querySelector('#Senior').value = sessionStorage.senior;
  document.querySelector('#Basic').value = sessionStorage.basic;
  document.querySelector('#ticketsCost').innerHTML = `Total € ${totalCost(ticketTypeCheck(), Basic(), Senior())}`



}

function saveTickets() {
  sessionStorage.setItem('basic', Basic())
  sessionStorage.setItem('senior', Senior())
}