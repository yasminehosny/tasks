var btns=document.querySelectorAll(".btn")
var total_price=0
var product=document.querySelector(".products")
var count=document.querySelector(".counter")
var counter=0
btns.forEach(function(item){
    item.onclick = function (){
        counter++
        count.innerHTML=counter
        total_price+=+(item.getAttribute("price"))
        product.innerHTML+= item.getAttribute("title")+"&nbsp; &nbsp; "
        product.style.fontSize="25px"
        product.style.fontWeight="bold"
        product.style.marginBottom = "20px"
        product.style.border="1px solid black"
        product.style.padding="15px"
        product.style.color="rgb(88, 88, 198)"
    }
})
var totalbtn=document.querySelector(".total")

totalbtn.onclick=function(){
    var total_price_span=document.querySelector(".total-price")
     total_price_span.style.width="150px"
    total_price_span.style.fontSize = "20px"
    total_price_span.style.fontWeight = "bold"
    total_price_span.style.color = "rgb(88, 88, 198)"
    total_price_span.style.border="1px solid black"
    total_price_span.style.margin="30px auto"
     total_price_span.style.padding="15px"
    total_price_span.innerHTML="total price = "+total_price+" LE"
}