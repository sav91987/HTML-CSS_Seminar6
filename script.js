const data = JSON.parse(dataInfo);

const salesCardsEl = document.querySelector('section.salesCards');
const salesCardTemplateEl = document.getElementById('salesCardTemplate');


data.forEach(element => {
	const clone = salesCardTemplateEl.content.cloneNode(true);

	clone.querySelector('img.image').src = element.imgUrl;
	clone.querySelector('img.image').alt = element.imgAlt;
	clone.querySelector('a').href = element.aHref;
	clone.querySelector('img.imageBtn').src = element.imgBtnUrl;
	clone.querySelector('img.imageBtn').alt = element.imgBtnAlt;
	clone.querySelector('p.saleCardName').innerHTML = element.saleCardName;
	clone.querySelector('p.saleCardDiscript').innerHTML = element.saleCardDiscript;
	clone.querySelector('p.saleCardPrice').innerHTML = element.saleCardPrice;

	salesCardsEl.appendChild(clone);

});



const menuActive = document.querySelector('.menu-active'); 
const burgerBtN = document.querySelector('.btnMenu');

function toggleMenu() {
	menuActive.classList.toggle('hidden');
}

burgerBtN.addEventListener('click', toggleMenu); 
menuClose.addEventListener('click', toggleMenu); 


