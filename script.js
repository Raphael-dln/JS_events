// Fonctionnalité 1
// Fonctionnalité 1 bis

let footer = document.getElementsByTagName('footer')[0];

let count = 1
let onFooterClick = function() {
  console.log("clic n°" + count)
  count += 1
};

footer.addEventListener('click', onFooterClick);



// Fonctionnalité 2 : toggle burger
let navElmt = document.getElementById('navbarHeader');
let navTogglerElmt = document.getElementsByClassName('navbar-toggler')[0];
let onNavbarClick = function() {
  navElmt.classList.toggle("collapse");
};

navTogglerElmt.addEventListener('click', onNavbarClick);


// Fonctionnalité 3

let btnEdit = document.getElementsByClassName('btn-sm btn-outline-secondary')[0];
let cardText = document.getElementsByClassName('card-text')[0];
let onBtnEditClick = function() {
  cardText.style.color = "red";
}
btnEdit.addEventListener('click', onBtnEditClick);


// Fonctionnalité 4

let btnEdit2 = document.getElementsByClassName('btn-sm btn-outline-secondary')[1];
let cardText2 = document.getElementsByClassName('card-text')[1];

let onBtnEditClick2 = function() {
  cardText2.style.color = "green";
  btnEdit2.addEventListener('click', onBtnEditClick3);
  btnEdit2.removeEventListener('click', onBtnEditClick2)
}
let onBtnEditClick3 = function() {
  cardText2.style.color = "";
  btnEdit2.addEventListener('click', onBtnEditClick2);
  btnEdit2.removeEventListener('click', onBtnEditClick3)
}
btnEdit2.addEventListener('click', onBtnEditClick2);


// Fonctionnalité 5

let bootstrap = document.getElementsByTagName('header')[0];
let link = document.getElementsByTagName('link')[0];
console.log(bootstrap)
console.log(link)
let onHeaderClick = function() {
  link.href = "";
  bootstrap.addEventListener('dblclick', onHeaderClick2);
  bootstrap.removeEventListener('dblclick', onHeaderClick)
}
let onHeaderClick2 = function() {
  link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
  bootstrap.addEventListener('dblclick', onHeaderClick);
  bootstrap.removeEventListener('dblclick', onHeaderClick2)
}
bootstrap.addEventListener('dblclick', onHeaderClick); 


// Fonctionnalité 6

let btnView = document.getElementsByClassName('btn btn-sm btn-success');
let cardText4 = document.getElementsByClassName('card-text');
let cardImg = document.getElementsByClassName("card-img-top");

 for (let i = 0; i < btnView.length; i++){
    btnView[i].addEventListener('mouseover', function () {
      if (cardText4[i].style.display !== 'none') {
        cardText4[i].style.display = 'none';
        cardImg[i].style.width = "20%"
      } else {
        cardText4[i].style.display = '';
        cardImg[i].style.width = "100%"
      }
    })
 }

// Fonctionnalité 7

let cardElt = document.querySelector('.album > .container > .row');
let btnNextElt = document.querySelector('.btn.btn-secondary.my-2');

btnNextElt.addEventListener('click', function()  {
  cardElt.insertBefore(cardElt.lastElementChild, cardElt.firstElementChild);
})


// Fonctionnalité 8 

let btnPreviousElt = document.getElementsByClassName('btn btn-primary my-2')[0];

btnPreviousElt.removeAttribute('href');
btnPreviousElt.addEventListener('click', function (){
  cardElt.insertBefore(cardElt.firstElementChild, cardElt.lastElementChild.nextSibling);
})

// Fonctionnalité 9 

let logoNav = document.getElementsByClassName("navbar-brand d-flex align-items-center")[0];
var body = document.body


let onLogoNav = function (e) {
  if (e.key === "a") {
    body.className = ''
    body.classList.add("col-4");
    
  } else if (e.key === "y") {
    body.className = ''
    body.classList.add("col-4", "offset-md-4");
  } else if (e.key === "p") {
    body.className = ''
    body.classList.add("col-4", "offset-md-8");   
  } else if (e.key === "b") {
    body.className = ''
  }
}
logoNav.addEventListener('keypress', onLogoNav)