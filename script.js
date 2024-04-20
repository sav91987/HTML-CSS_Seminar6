const data = JSON.parse(dataInfo);

function createCartItem(params) {
  const imgSrcEl = params.querySelector("img.image").src;
  const imgAltEl = params.querySelector("img.image").alt;
  const nameEl = params.parentNode.querySelector("p.saleCardName").innerHTML;
  const priceEl = params.parentNode.querySelector("p.saleCardPrice").innerHTML;

  const cartItemsTemplateEl = document.getElementById("cartItemsTemplate");
  const cloneCartItemsEl = cartItemsTemplateEl.content.cloneNode(true);
  cloneCartItemsEl.querySelector("img.selectedProduct__box-img").src = imgSrcEl;
  cloneCartItemsEl.querySelector("img.selectedProduct__box-img").alt = imgAltEl;
  cloneCartItemsEl.querySelector(
    "h2.selectedProduct__box-top-header"
  ).innerHTML = nameEl;
  cloneCartItemsEl.querySelector(
    "span.selectedProduct__param-box-price"
  ).innerHTML = priceEl;
  selectedProductEl.appendChild(cloneCartItemsEl);
}

function deleteCartItem() {
  sectionCartItems.classList.remove("hidden");
  selectedProductEl.addEventListener("click", (el) => {
    if (el.target.classList[0] === "selectedProduct__box-top-btn") {
      el.target.parentNode.parentNode.parentNode.parentNode.remove();
      if (!sectionCartItems.querySelector(".selectedProduct__box-top-btn")) {
        sectionCartItems.classList.add("hidden");
      }
    } else if (el.target.classList[0] === "selectedProduct__box-top-btn-svg") {
      el.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
      if (!sectionCartItems.querySelector(".selectedProduct__box-top-btn")) {
        sectionCartItems.classList.add("hidden");
      }
    }
  });
}

const salesCardsEl = document.querySelector("section.salesCards");
const salesCardTemplateEl = document.getElementById("salesCardTemplate");

data.forEach((element) => {
  const clone = salesCardTemplateEl.content.cloneNode(true);

  clone.querySelector("img.image").src = element.imgUrl;
  clone.querySelector("img.image").alt = element.imgAlt;
  clone.querySelector("img.imageBtn").src = element.imgBtnUrl;
  clone.querySelector("img.imageBtn").alt = element.imgBtnAlt;
  clone.querySelector("p.saleCardName").innerHTML = element.saleCardName;
  clone.querySelector("p.saleCardDiscript").innerHTML =
    element.saleCardDiscript;
  clone.querySelector("p.saleCardPrice").innerHTML = element.saleCardPrice;

  salesCardsEl.appendChild(clone);
});

/* ДЗ по JS (семинарe 7) начало */

const parentEl = document.querySelector("body");
const sectionSubscribe = document.querySelector("section.subscribe");
const sectionCartItems = document.createElement("section");
sectionCartItems.classList.add("hidden", "cartItems", "container");
parentEl.insertBefore(sectionCartItems, sectionSubscribe);

const h5CartItemsEl = document.createElement("h5");
h5CartItemsEl.innerHTML = "Cart Items";
h5CartItemsEl.classList.add("text", "textSalesTitle");
sectionCartItems.appendChild(h5CartItemsEl);

const selectedProductEl = document.createElement("div");
selectedProductEl.classList.add("selectedProduct");
sectionCartItems.appendChild(selectedProductEl);


salesCardsEl.addEventListener("click", (e) => {
  console.log(e.target.classList[0]);
  if (e.target.classList[0] === "salesCard__btnAddToCart") {
    createCartItem(e.target.parentNode);
    deleteCartItem();

  } else if (e.target.classList[0] === "imageBtn") {
    createCartItem(e.target.parentNode.parentNode);
    deleteCartItem();
  }
});

/* ДЗ по JS (семинарe 7) конец */

const menuActive = document.querySelector(".menu-active");
const burgerBtN = document.querySelector(".btnMenu");

function toggleMenu() {
  menuActive.classList.toggle("hidden");
}

burgerBtN.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);
