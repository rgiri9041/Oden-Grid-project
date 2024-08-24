const container = document.querySelector(".container");
for (i = 0; i < 16; i++) {
    const row = document.createElement('row');
    row.classList.add('item');
    container.appendChild(row);
    for (j = 0; j < 16; j++) {
        const col = document.createElement('col');
        col.classList.add('items');
        row.appendChild(col);
    }
}
const button = document.getElementById('btn');
const popup = document.getElementById('popup');

function openPopup() {
    console.log("here")
    popup.classList.add('open-popup');
}


button.addEventListener('click', openPopup);
// popup.removeEventListener('click', closePopup);
const ok = document.getElementById('ok');
function closePopup() {
    popup.classList.remove('open-popup');
}
ok.addEventListener('click', closePopup);






