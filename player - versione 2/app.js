// navbar a comparsa per versione mobile
function openNav(){
  document.getElementById("navs").style.width="100%";
}

function closeNav(){
  document.getElementById("navs").style.width="0";
}

// GAME

//Scelta età 
function pickAge(){
  var selez=document.getElementById("agePicker");
  var selUser= selez.options[selez.selectIndex].value; /* non riconosce value sto figlio di troia */

  console.log(sUser);

  if(selUser==="1"){
    console.log("Difficoltà: FACILE (Bambini)");
    $("#bambini").removeClass("game");
    $("#age").removeClass("game").addClass("game");
  }
  else if(selUser==="2"){
    console.log("Difficoltà: MEDIA (Pre-adolescenti)");
    $("#preAdo").removeClass("game");
    $("#age").removeClass("game").addClass("game");
  }
  else if(selUser==="3"){
    console.log("Difficolta: DIFFICILE (Adolescenti)");
    $("#adolescenti").removeClass("game");
    $("#age").removeClass("game").addClass("game");
  }
}

///* GIOCO 1/4/7 */


///* GIOCO 2/5/8 */


///* GIOCO 3/6/9 */