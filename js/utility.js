let total = 0;
function addFolowerList(event, elementID){
    let selectElement = event.target.parentElement.children[1].innerText;
    
    let li = document.createElement("li");
    li.innerText = selectElement;

    let selectElementForAppend = event.target.parentElement.parentElement.parentElement.children[1].children[1];

    selectElementForAppend.appendChild(li);

    // let price = document.getElementById(elementID);
    let addTotalElement = document.getElementById("totalCount");

    let price = event.target.parentElement.children[3].innerText.split(" ")[1];
    let priceNumber = parseInt(price);
    
    total = total + priceNumber;

    addTotalElement.innerText = total

}


