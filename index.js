var btn = document.querySelector("#btn");
var priceDisp = document.querySelector("#price");


btn.addEventListener("click", function(){
    var XHR = new XMLHttpRequest();
    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

XHR.onreadystatechange = function(){
    if(XHR.readyState ==4 && XHR.status == 200);
    var data = JSON.parse(XHR.responseText);
    var price = data.bpi.USD.rate;
    priceDisp.innerText = price;

/* console.log(data.bpi.USD.rate);
    console.log(XHR.responseText);*/    
}
    XHR.open("GET", url);
    XHR.send();
})