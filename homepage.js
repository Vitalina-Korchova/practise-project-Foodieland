const IconWhitePlayCircleBtn = document.querySelector('.fr__view__btn__img__white');
const IconBlackPlayCircleBtn = document.querySelector('.fr__view__btn__img__black');
const FeatureedRecipeBtn = document.querySelector('.fr__view__btn');

ChangeColorIconPlayCircleBtn(FeatureedRecipeBtn, IconWhitePlayCircleBtn, IconBlackPlayCircleBtn);
CategoriesBlockItemsDisplay();

function ChangeColorIconPlayCircleBtn(Btn,iconWhite,iconBlack ){
    Btn.addEventListener('mouseenter', () => {
        iconWhite.style.display="none";
        iconBlack.style.display="block";
        
    });
    
  
    Btn.addEventListener('mouseleave', () => {
        iconWhite.style.display="block";
        iconBlack.style.display="none";
    });
}



function CategoriesBlockItemsDisplay(){
    const ContainerItemsCategoriesBlock = document.getElementById('c__items');
    const itemsArray = [];

    for(let i = 0; i <= 5; i++){
        const categoriesItem = document.createElement('div');
        categoriesItem.classList.add('c__element');
        categoriesItem.setAttribute('id', `c__element${i}`);
        itemsArray.push(categoriesItem);
    }

    itemsArray.forEach(item => {
        ContainerItemsCategoriesBlock.appendChild(item);
        //console.log(`Added: ${item.id}`);
    });

    BuildCategoriesElement(
        document.getElementById('c__element0'),
        "./images/categories-block/img-breakfast.png",
        "./images/categories-block/img-shadow-breakfast.png",
        "Breakfast",
        "linear-gradient(0deg, rgba(112,130,70,0.13226540616246496) 0%, rgba(112,130,70,0) 100%)"
    );

    BuildCategoriesElement(
        document.getElementById('c__element1'),
        "./images/categories-block/img-vegan.png",
        "./images/categories-block/img-shadow-vegan.png",
        "Vegan",
        "linear-gradient(0deg, rgba(108,198,63,0.15467436974789917) 0%, rgba(108,198,63,0) 100%)"
    );

    BuildCategoriesElement(
        document.getElementById('c__element2'),
        "./images/categories-block/img-meat.png",
        "./images/categories-block/img-shadow-meat.png",
        "Meat",
        "linear-gradient(180deg, rgba(204,38,27,0) 0%, rgba(204,38,27,0.14346988795518212) 100%)"
    );

    BuildCategoriesElement(
        document.getElementById('c__element3'),
        "./images/categories-block/img-dessert.png",
        "./images/categories-block/img-shadow-dessert.png",
        "Dessert",
        "linear-gradient(180deg, rgba(240,158,0,0) 0%, rgba(240,158,0,0.13506652661064422) 100%)"
    );

    BuildCategoriesElement(
        document.getElementById('c__element4'),
        "./images/categories-block/img-lunch.png",
        "./images/categories-block/img-shadow-lunch.png",
        "Lunch",
        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.048231792717086885) 100%)"
    );

    BuildCategoriesElement(
        document.getElementById('c__element5'),
        "./images/categories-block/img-chocolate.png",
        "./images/categories-block/img-shadow-chocolate.png",
        "Chocolate",
        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.048231792717086885) 100%)"
    );

    function BuildCategoriesElement (elem, imageCategoriesSrc, imgShadowSrc,  textContent, backgroundColor){
        const imageCategories = document.createElement('img');
        imageCategories.classList.add('c__img__elem');
        imageCategories.src = imageCategoriesSrc;

        const imgShadow = document.createElement('img');
        imgShadow.classList.add('c__elem__shadow');
        imgShadow.src = imgShadowSrc;

        const text = document.createElement('span');
        text.classList.add('c__elem__text');
        text.textContent = textContent;

        const rectangle = document.createElement('div');
        rectangle.classList.add('c__rectangle');
        rectangle.style.background = backgroundColor;

        elem.appendChild(imageCategories);
        elem.appendChild(imgShadow);
        elem.appendChild(text);
        elem.appendChild(rectangle);
    }
    
}
