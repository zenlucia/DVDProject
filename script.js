let library = document.getElementById("library");
    
function showDVDs() {
  for (let [key, value] of Object.entries(DVDList))
  {
    //console.log(key, value);
    let ul = document.createElement("ul");
    ul.classList.add("uls")
    let li = document.createElement("li");
    let dvdCard = document.createElement("div");
    dvdCard.classList.add("dvdCard");
    let dvdImage = document.createElement("img");
    dvdImage.classList.add("dvdimage")
    let textHolder = document.createElement("div")
    textHolder.classList.add("textholder")
    let dvdName = document.createElement("h3");
    dvdName.classList.add("dvdname")
    let button = document.createElement("button")
    button.classList.add("Add")
    button.textContent="ADD TO BASKET"
    let breaks = document.createElement("br");
    let breaks1 = document.createElement("br");
    let breaks2 = document.createElement("br");
    let breaks3 = document.createElement("br");
    let breaks4 = document.createElement("br");

    dvdImage.src = value.src
   //console.log(dvdImage);
    dvdName = value.movie;
    
    let dvdGenre = value.genre;
    let dvdYear =value.year;
    let dvdPrice = value.price;
    let dvdStock = value.stock;
    
    li.id=key
     
    textHolder.append(dvdName)
    li.append(dvdGenre, breaks)
    ul.appendChild(li)
    li.append(dvdYear, breaks1)
    ul.appendChild(li)
    li.append("Stock number ", dvdStock, breaks3)
    ul.appendChild(li)
    li.append(dvdPrice, breaks2)
    
    textHolder.append(ul)
    textHolder.append(button)
    dvdCard.append(dvdImage)
    dvdCard.appendChild(textHolder);
    dvdCard.id = value.id
    library.appendChild(dvdCard);
  }
}

showDVDs();


/** When the button is clicked, that DVD title should be added to my basket, and the cost of the basket should be updated.*/
/* click ADD To Basket to trigger dvdNumber function to display number of dvds in local storage*/
let dvd= document.querySelectorAll(".Add");
for (let i = 0; i < dvd.length; i++) {
  dvd[i].addEventListener("click", () => {
    dvdNumbers(DVDList[i]);
    
  })
}
/*When refreshing the page, basketNumbers stay*/
function onloadNumbers() {
  let basketNumbers = localStorage.getItem("dvdNumbers");
  if (basketNumbers) {
    document.querySelector(".cart span").textContent = basketNumbers; 
  }
}
/*updating basket count*/
function dvdNumbers(DVDList) {
  
  let basketNumbers = localStorage.getItem("dvdNumbers");
  
  basketNumbers = parseInt(basketNumbers);
  if (basketNumbers) {
    localStorage.setItem("dvdNumbers", basketNumbers + 1);
  /*updating basketNumbers on navbar*/
    document.querySelector(".cart span").textContent=basketNumbers+1
  } else {
    localStorage.setItem("dvdNumbers", 1);
    document.querySelector(".cart span").textContent="1"
  }
  setItems(DVDList);
}

/*Adding Item ID to storage*/
function setItems(DVDItem) {
  //console.log(DVDItem);

  let dvdId = DVDItem.id;
  let storageIds = localStorage.getItem("DVDId")
  let dvdIdHolder = [];
  dvdIdHolder.push(dvdId)
  dvdIdHolder.push(storageIds)
  //console.log(dvdId);
  let basketItems = localStorage.setItem("DVDId",dvdIdHolder)
  //console.log(dvdIdHolder);
}

function totalCost(dvds) {
  //console.log("Price is", dvds.dvdPrice);
  
  let cartCost = localStorage.getItem("totalCost");
  
  //console.log(typeof cartCost);
  //console.log(parseInt(cartCost));
  cartCost += dvdPrice;
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
  
    localStorage.setItem("totalCost",cartCost+dvds.price)
  } else {
  localStorage.setItem("totalCost", dvds.price);}
}
onloadNumbers();

let cartbutton = document.getElementById("gotocart")

/*Add event listener to fire*/
const id = localStorage.getItem('DVDId')
  let newid=JSON.stringify(id)
cartbutton.addEventListener("click", ()=>{

  console.log(newid);
  setTimeout(() => {
    /**call function to populate cart */
    addToCartPage(newid)
}, 2000);
})



let label = document.getElementById("label")
let shoppingBasket = document.getElementById("shopping-basket")
let generateBasketItems=()=>{}
/*use IDs to populate cart page; loop through
function addToCartPage(id) {
  let cartPage = document.getElementById("cart")
  document.getElementById("img").src = "img";
  
  dvdname = document.getElementById("dvdname")
  price = document.getElementById("dvdprice")
  quantity = document.getElementById("quantity")
  textHolder.append(dvdName)
    li.append(dvdname, breaks)  
  li.append(dvdPrice, breaks1)
  
}
addToCartPage();*/

/**search genre */
let filterSearch = document.getElementById("library")
/**Add eventlistener to search box */
filterSearch.addEventListener("keyup", filterNames);
/**Get DVD titles; Get value  */
function filterNames() {
  console.log(DVDList.movie);
}