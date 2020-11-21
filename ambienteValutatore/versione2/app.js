// SELECTORS
const punteggi=document.querySelector(".punteggi-btn");

// EVENT LISTENERS
punteggi.addEventListener("click", getPunteggi);

// CONTROLLO PUNTEGGI
function getPunteggi(){
    document.write('<h1 color=red> PUNTEGGIO GIOCATORI</h1>')
    document.write('<table border=1 cellpadding=10>');
    for(i=1;i<=3;i++){
        document.write('<tr>');
        for(j=1;j<=4;j++){
            document.write('<td>');
            // document.write('a<sub>'+i+','+j+'</sub>');
            document.write('</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
    document.write('<button onclick="index.html">back to home</button>');
    document.close();
}


 