//Adding items to cart
let dvdPrice=[]
window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  console.log(DVDList);
  
  //*updating basket number*/
  function onloadNumbers() {
    let basketNumbers = localStorage.getItem("dvdNumbers");
    //console.log(basketNumbers);
  
    if (basketNumbers) {
      document.querySelector(".cart span").textContent = basketNumbers;
      let id = localStorage.getItem("DVDId")
      //console.log(id);
      setItems(id);
    }
  }
  onloadNumbers();
function setItems(DVDItem) {
  //console.log(DVDItem.length);
  

  /**Get DVDList array, map through it, populate cart.html */
  
  DVDList.map((dvd) => {
    for (let i = 0; i < DVDItem.length; i++) {
      //console.log(typeof DVDItem);
      //console.log(DVDItem[i]);
      if (DVDItem.length>0){
      if (dvd.id === parseInt(DVDItem[i])) {
        fillCart(dvd)
        let dvdId = parseInt(DVDItem[i]);
        //let bin = DVDItem.shift();
        //console.log(bin);

        
      }
      }
    }
  });
  }
  
  function fillCart(dvd) {
    let shoppingBasket = document.getElementById("shopping-basket");
    
    console.log(dvd.price, dvd);
        let dvdNumberPrice = dvd.price.replace("£", "");
    let newDVDPrice = parseFloat(dvdNumberPrice);
    console.log(newDVDPrice);
        dvdPrice.push(newDVDPrice);
        console.log(dvdPrice);
        let label = document.getElementById("label");
        // reduce array
        const initialValue = 0;
        const sumWithInitial = dvdPrice.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          initialValue
        );
        console.log(sumWithInitial);
        // expected output: 10
        let total = document.getElementById("total");
        total.innerHTML = "TOTAL: £" + sumWithInitial.toFixed(2);
        let content=document.createElement("div")
        content.innerHTML += `<br>
       <img width=200 src=${dvd.src} >
     <p><b>${dvd.movie}</b></p>
     <span><b>${dvd.price}</b></span> `;

        shoppingBasket.append(content);
  }
/*getting Item ID out of storage*/
  /**function setItems(DVDItems) {
    console.log(DVDItems);
    // Get DVDList array, map through it, populate cart.html 
    let dvdPrice = []
    let DVDItem = []
    DVDItem.push(DVDItems)
      DVDList.map((dvd) => {
      for (let i = 0; i < DVDItem.length; i++) {
        console.log(typeof DVDItem);
        console.log(DVDItem[i]);
        if (dvd.id === parseInt(DVDItem[i])) { 
          let bin=
            DVDItem.shift()
          console.log(bin);
          
           let dvdId = parseInt(bin);
          console.log(dvd.id, dvdId);
          
          
          let dvdNumberPrice = dvd.price.replace("£", "")
          let newDVDPrice = parseFloat(dvdNumberPrice)
          dvdPrice.push(newDVDPrice)
          //console.log(dvdPrice);
          let label = document.getElementById("label");
        

          // reduce array
          const initialValue = 0;
          const sumWithInitial = dvdPrice.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
          );

          console.log(sumWithInitial);
          let total = document.getElementById("total")
          total.innerHTML = "TOTAL: £" + sumWithInitial.toFixed(2)
          let shoppingBasket = document.getElementById("shopping-basket");
          shoppingBasket.innerHTML +=
            `<br><img width=200 src=${dvd.src} >
          <p><b>${dvd.movie}</b></p>  
          <span><b>${dvd.price}</b></span> `
          
          
        }
         
        }
        
    })
  }*/
  }


);

function clearCart()
{
  localStorage.removeItem('dvdNumbers')
  localStorage.removeItem('DVDId')
  let shoppingBasket = document.getElementById("shopping-basket");
  shoppingBasket.innerHTML = "Thank you for your purchase!"
  let cart = document.getElementById("gotocart")
  cart.innerHTML = ""
  cart.style.visibility = "hidden"
  
  buy = document.querySelector(".buy")
  buy.innerHTML = ""
  buy.style.visibility = 'hidden' 
}

/**Total basket numbers */
  /** 
function dvdNumbers(DVDItem) {
  
  let basketNumbers = localStorage.getItem("dvdNumbers");
  
  basketNumbers = parseInt(basketNumbers);
  if (basketNumbers) {
    localStorage.setItem("dvdNumbers", basketNumbers + 1);
  //*updating basketNumbers on navbar*
    document.querySelector(".cart span").textContent=basketNumbers+1
  } else {
    localStorage.setItem("dvdNumbers", 1);
    document.querySelector(".cart span").textContent="1"
}
  
  
}
  */