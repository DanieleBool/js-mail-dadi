const open = document.querySelector('.game');

open.addEventListener("click", 
function()
{

// stampo il numero del giocatore
let player = Math.floor(Math.random() * 6) + 1;
alert('Il tuo numero è:<br>' + player);
// stampo il numero del computer
let pc = Math.floor(Math.random() * 6) + 1;
alert('Il numero del tuo avversario è:<br>' + pc);

if(player > pc){
    document.querySelector('.result').innerHTML = 'VITTORIA!';
}
else if( player < pc){
    document.querySelector('.result').innerHTML = 'HAI PERSO.';
}
else{
    document.querySelector('.result').innerHTML = 'PAREGGIO';
}

}
);

var vis = 1000;

//MODIFICA ALERT
window.alert = function (message) {
  var a = document.createElement('div');
//regole di stile CSS
  a.style.cssText = "width:50vw; height:25vh; border:5px solid gold; border-radius:10px; padding:10px; background:white; position:fixed; top:50px; right:0; left:0; margin:auto; font-family: Arial, sans-serif; text-align: center; line-height: 60px; padding: 2% ; font-size: 32px; font-weight: bold; z-index:"+ vis+ ";";

  a.innerHTML = message;
  document.body.appendChild(a);
//Rimozione dell'elemento al click
    a.addEventListener("click", function() {
    a.remove();
    }
    )

vis--;
}