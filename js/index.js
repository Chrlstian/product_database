let storeData = [];
const addEl = document.getElementById("button-el");

addEl.addEventListener("click", function(){
    let nameEl = document.getElementById("name-el").value;
    let quantityEl = parseInt(document.getElementById("quantity-el").value);
    let priceEl = parseInt(document.getElementById("price-el").value);
    let totalEl = document.getElementById("total-el");
    let trEl = document.getElementById("tr-el");

    storeData.push(trEl);
    let resultQtyprice = quantityEl * priceEl;
    totalEl.textContent = resultQtyprice;

    trEl.innerHTML += `<td class="td-style">${nameEl}</td><td class="td-style">${quantityEl}</td><td class="td-style">${priceEl}</td><td class="td-style">${resultQtyprice}</td>`;
    clearData();

})

function clearData(){
    document.getElementById('name-el').value = "";
    document.getElementById('quantity-el').value = "";
    document.getElementById('price-el').value = "";
    document.getElementById('total-el').value = "";
}
