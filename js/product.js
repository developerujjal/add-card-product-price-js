document.getElementById("btn-one").addEventListener("click", function(e){
    
    addFolowerList(e, "totalCount");
    
})


document.getElementById("btn-two").addEventListener("click", function(e){

    addFolowerList(e, "totalCount");
    
})


document.getElementById("btn-three").addEventListener("click", function(e){
    addFolowerList(e, "totalCount");
})




document.getElementById("btn-submit").addEventListener("click", function(){
    let inputField = document.getElementById("input-field").value;

    let totalPriceElement = document.getElementById("totalCount").innerText;
    let totalpriceValue = parseInt(totalPriceElement);
    console.log( totalpriceValue)

    let discountElement = document.getElementById("discount");

    let payableElement = document.getElementById("payable");
    
    document.getElementById("input-field").value = "";
    if(inputField === "Hello"){
        let allPrice = totalpriceValue * 10;
        let afterDiscount = allPrice / 100;
        discountElement.innerText = afterDiscount;

        let totalStuff = totalpriceValue - afterDiscount;
        payableElement.innerText = totalStuff;
       

    }
})