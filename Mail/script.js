const mail = ["google@gmail.com", "microsoft@outlook.com", "telecom@alice.it"];

const verifica = prompt("Inserire email");

let sentinella = false;

for (let i = 0; i < mail.length; i++){

    if (verifica == mail[i]){
        sentinella = true;
        alert('ok');
    }
}

if (sentinella) {
    alert('entra');
} else {
    alert('no');
}