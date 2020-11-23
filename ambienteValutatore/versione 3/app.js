// SELECTORS
const punteggi=document.querySelector(".punteggi-btn");
var nomiCinni=["anna", "paolo", "elisa"];
var points=[5 , 10, 20];

// EVENT LISTENERS
punteggi.addEventListener("click", getPunteggi);

//BACK HOME


// CONTROLLO PUNTEGGI
function getPunteggi(){
    document.write('<table cellpadding=20 width=70% >');
    
    document.write('<thead>');
    document.write('<tr>' + '<th>' + "Nome" +'</th>' + '<th>' + "Punteggio" +'</th>' + '<tr>');
    document.write('</thead>');
    //aggiungere colonna per nomi
  for (let i=0; i<=nomiCinni.length-1; i++) { //modificare i<=10 con il numero di righe, ovvero il numero di giocatori
    document.write('<tr>');
    document.write('<td>' + nomiCinni[i] + '</td>');
    document.write('<td>' + points[i] + '</td>');
    document.write('</tr>');
  }
  var btnBack=document.createElement("button");
  var btnText=document.createTextNode("Go Back");
  btnBack.appendChild(btnText);
  document.body.appendChild(btnBack);
  $(btnBack).click(function(){
      location.reload()
  })
  
}








