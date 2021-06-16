if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{ready()}
var idArray=[]
var idString=""
function ready(){
    var removeCartBtns= document.getElementsByClassName('header-cart-item-remove')
    for(i=0;i<removeCartBtns.length;i++){
        var btn= removeCartBtns[i]
        btn.addEventListener('click',removeCartItem)
    }
    var addToCartButtons=document.getElementsByClassName('add-to-cart-btn-co')
    for(i=0;i<addToCartButtons.length;i++){
        var button =addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    

   
}

function addToCartClicked(event){
    if(!document.querySelector('.header-cart-item')){
        myElement=document.querySelector('.header-cart')
        myElement.classList.remove('header-cart-list_no-cart')
    }
    var button= event.target
    var shopItem = button.parentElement.parentElement.parentElement
    var title =shopItem.getElementsByClassName('home-product-item-name')[0].innerText
    var price =shopItem.getElementsByClassName('home-product-item-price')[0].innerText
    var imgSrc= shopItem.getElementsByClassName('home-product-item-img-content')[0].innerText
    var type=shopItem.getElementsByClassName('home-product-item-type-content')[0].innerText
    var sTT=shopItem.getElementsByClassName('home-product-item-STT-content')[0].innerText
    addItemToCart(title,price,imgSrc,type,sTT)
    idArray.push(sTT)
    updateCartTotal()
}

function addItemToCart(title,price,imgSrc,type,sTT){
    var cartLi=document.createElement('li')
    cartLi.classList.add('header-cart-item')
    var cartItems=document.getElementsByClassName('header-cart-list-item')[0]
    var cartLiContents=`
        <img src="${imgSrc}" alt="" class="header-cart-img">
        <div class="header-cart-item-info">
        <div class="header-cart-item-head">
            <h5 class="header-cart-item-name">${title}</h5>
            <div class="header-cart-item-price-wrap">
            <span class="header-cart-item-price">${price}</span>
            <span class="n_dis header-cart-item-sTT">${sTT}</span>
            </div>
        </div>
        <div class="header-cart-item-body">
            <span class="header-cart-item-type">Phân loại: ${type}</span>
            <span class="header-cart-item-remove" >Xóa</span>
        </div>
        </div>`
    cartLi.innerHTML = cartLiContents
    cartItems.append(cartLi)
    cartLi.getElementsByClassName('header-cart-item-remove')[0].addEventListener('click',removeCartItem)
}

function removeCartItem(event){
    var btnClicked = event.target
    var sTTitem=btnClicked.parentElement.parentElement
    var sTT=sTTitem.getElementsByClassName('header-cart-item-sTT')[0].innerText
    btnClicked.parentElement.parentElement.parentElement.remove()
    if(!document.querySelector('.header-cart-item')){
        myElement=document.querySelector('.header-cart')
        myElement.classList.add('header-cart-list_no-cart')
    }
    for(i=0;i<idArray.length;i++){
        if ( idArray[i] ==sTT) {
            idArray.splice(i, 1);
            break 
          }
    }
    updateCartTotal()
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('header-cart-list-item')[0]
    var cartRows=cartItemContainer.getElementsByClassName('header-cart-item')
    var total=0
    for(i=0;i<cartRows.length;i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('header-cart-item-price')[0]
        var price=parseFloat(priceElement.innerText.replaceAll('.','').replace('đ',''))
        total=total +price
    }
    total=(Math.round(total)).toFixed(0)
    total=total.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    document.getElementsByClassName('cart-total-price')[0].innerText = total+'đ'
    myNotice=document.querySelector('.header-cart-notice')
    var le=idArray.length
    if(le){myNotice.innerHTML=le}
    else{myNotice.innerHTML=''}   
    idString=idArray.join('')
    var purchaseBtn=document.getElementsByClassName('btn-dat-hang')[0]
    purchaseBtn.outerHTML=`
        <form action="/pay">
            <input type="text" name="q" value="${idString}" class="n_dis">
            <button type="submit" class="btn btn-primary btn-dat-hang">Đặt hàng</button>
        </form>`
}


