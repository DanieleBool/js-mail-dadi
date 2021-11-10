// stampo il numero del giocatore
let  player = Math.floor(Math.random() * 6) + 1;
alert('Il tuo numero è ' + player);
// stampo il numero del computer
let  pc = Math.floor(Math.random() * 6) + 1;
alert('Il numero del tuo avversario è ' + pc);

if (player > pc) {
    alert('VITTORIA!');
}else if ( player < pc) {
    alert('HAI PERSO.');
} else {
    alert('PAREGGIO');
}