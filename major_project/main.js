//cart
    let cartIcon=document.querySelector("#cart-item")
    let cart=document.querySelector(".cart")
    let closeCart=document.querySelector("#close-cart")

    cartIcon.oneclick= () =>{
    cart.classList.add("active")
    };

    closeCart.oneclick= () =>(
        cart.classList.remove("active")
    );
    //cart working js
    if(document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded",ready);    
    }else{
    ready();
    }

    //making function
    function ready(){
    var removecartbuttons=document.getElementsByClassName('cart-remove')
    console.log(removecartbuttons)
    for(var i=0;i<removecartbuttons.length;i++){
        var button=removecartbuttons[i]
        button.addEventListener('click',removecartbuttons)
    }
    }
    //quantity changes
    var quantityInput=document.getElementsByClassName("cart-quantity");
    for(var i=0;i<quantityInput.length;i++){
    var input=quantityInput[i];
    input.addEventListener("change",quantitychanged);
    }
    //add to cart
    var addcart=document.getElementsByClassName("add-cart");
    for(var i=0;i<addcart.length;i++){
        var button=addcart[i];
        button.addEventListener("click",addcartclicked);
    }
    //buy button work
    document.getElementsByClassName(btn-buy)[0]
    .addEventListener('click',buyButtonClicked)
//Buy button
function buyButtonClicked(){
    alert('Your order is placed')
    var cartcontent=document.getElementsByClassName('cart-content')[0]
    while(cartcontent.hasChildNodes()){ removechild(child: Node):Element
        cartcontent.removeChild(cartcontent.firstChild);
    }
    updatetotal();
}    
//remove items from cart
function removeCartitems(event){
    var buttonclicked=event.target
    buttonclicked.parentElement.remove();
    updatetotal();
}
//add to cart
function addcartclicked(event){
    var buttonclicked=event.target;
    var shopProduct=button.parentElement;
    var title=shopProduct.getElementsByClassName(".product-title")[0].innertext;
    var price=shopProduct.getElementsByClassName(".price")[0].innertext;
    var productImg=shopProduct.getElementsByClassName(".product-image")[0].innertext;
    addpPoductToCart(title,price,productImg);
    updatetotal();
}
function addPoductToCart(title,price,productImg){
    var cartBox=document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems=document.getElementsByClassName("cart-product-title");
    for(var i=0;i<cartItemsNames.length; i++){
        alert("You have already add this item to cart ");
    lreturn; 
    }
}
var cartBoxcontent=`
                        <img src="₹{productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">₹{title}</div>
                            <div class="cart-price">₹{price}/div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <!--remove cart-->
                        <i class='bx bxs-trash-alt cart-remove'></i>` 
cartShopBox.innerHTML=cartBoxcontent
cartItems,append(cartShopBox)   
cartShopBox
.getElementsByClassName('cart-remove')[0]
.addEventListener('click',removeCartitems)
cartShopBox
.getElementsByClassName('cart-quantity')[0]
.addEventListener('change',quantitychanged)                     
// Quantity changes
function quantitychanged(event){
    var input=event.target
    if(isNaN(input.value)||input.value<=0){
        input.value=1;
    }
}

//update totol
function updatetotal(){
    var cartContent=document.getElementsByClassName('cart-content')[0]
    var cartBox=cartContent.getElementsByClassName('cart-box')
    var totol=0;
    for(var i=0;i< cartBoxes.length; i++)
}    
    var cartbox=cartBoxes[i];
    var priceElement=cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement=cartbox.getElementsByClassName("cart-quantity")[0];
    var price=parseFloat(priceElement.innertext.replace("₹",""));
    var quantity=quantityElement.value;
    totol=totol+(price*quantity);

    document.getElementsByClassName('total-price')[0].innertext='₹'+totol;
 
