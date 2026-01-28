let yesSize = 1;
let noTxtIndex= 0;

const message = ["LOH BKT?!","DI MO NA PALA AKO LAB","MAY IBA KA NA SIGURO", "CRY NALANG AKO SA GILID",":<"];

function changeSize()
{
    yesSize += 0.5;
    const yesBtn = document.getElementById('btnY');
    yesBtn.style.transform =`scale(${yesSize})`;

    noTxtIndex = (noTxtIndex + 1) % message.length;
    document.getElementById('btnN').innerText = message[noTxtIndex];

}