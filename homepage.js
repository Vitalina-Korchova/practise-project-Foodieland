const IconWhitePlayCircleBtn = document.querySelector('.fr__view__btn__img__white');
const IconBlackPlayCircleBtn = document.querySelector('.fr__view__btn__img__black');
const FeatureedRecipeBtn = document.querySelector('.fr__view__btn');

ChangeColorIconPlayCircleBtn(FeatureedRecipeBtn, IconWhitePlayCircleBtn, IconBlackPlayCircleBtn);
CategoriesBlockItemsDisplay();
RecipesBlockDisplay();

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

function RecipesBlockDisplay(){
    const ContainerItemsRecipesBlock = document.getElementById('r__items');
    const elementsArray = [];

    for(let i = 0; i < 9; i++){
        const recipesItem = document.createElement('div');
        recipesItem.classList.add('r__element');
        recipesItem.setAttribute('id', `r__element${i}`);
        elementsArray.push(recipesItem);
    }

    elementsArray.forEach(item => {
        ContainerItemsRecipesBlock.appendChild(item);
        //console.log(`Added: ${item.id}`);
    });

    const blockAdd = document.getElementById('r__element5');
    const addInner = document.createElement('img');
    addInner.classList.add('r__img__add');
    addInner.src = "./images/recipes/img-ads.png"
    blockAdd.appendChild(addInner);


    BuildRecipeElement(
        document.getElementById('r__element0'),
        "./images/recipes/img-cheeseburger.png",
        "Big and Juicy Wagyu Beef Cheeseburger",
        "30 Minutes",
        "Snack"
    );

    BuildRecipeElement(
        document.getElementById('r__element1'),
        "./images/recipes/img-salmon.png",
        "Fresh Lime Roasted Salmon with Ginger Sauce",
        "30 Minutes",
        "Fish"
    );

    BuildRecipeElement(
        document.getElementById('r__element2'),
        "./images/recipes/img-pancake.png",
        "Strawberry Oatmeal Pancake with Honey Syrup",
        "30 Minutes",
        "Breakfast"
    );

    BuildRecipeElement(
        document.getElementById('r__element3'),
        "./images/recipes/img-salad.png",
        "Fresh and Healthy Mixed Mayonnaise Salad",
        "30 Minutes",
        "Healthy"
    );

    BuildRecipeElement(
        document.getElementById('r__element4'),
        "./images/recipes/img-meatballs.png",
        "Chicken Meatballs with Cream Cheese",
        "30 Minutes",
        "Meat"
    );

    BuildRecipeElement(
        document.getElementById('r__element6'),
        "./images/recipes/img-fruitypancake.png",
        "Fruity Pancake with Orange & Blueberry",
        "30 Minutes",
        "Sweet"
    );

    BuildRecipeElement(
        document.getElementById('r__element7'),
        "./images/recipes/img-chickenrise.png",
        "The Best Easy One Pot Chicken and Rice",
        "30 Minutes",
        "Snack"
    );

    BuildRecipeElement(
        document.getElementById('r__element8'),
        "./images/recipes/img-pasta.png",
        "The Creamiest Creamy Chicken and Bacon Pasta",
        "30 Minutes",
        "Noodles"
    );
    function BuildRecipeElement (elem, image, title, time,  type){

        const imageRecipe = document.createElement('img');
        imageRecipe.classList.add('r__elem__img');
        imageRecipe.src = image;

        const titleRecipe = document.createElement('span');
        titleRecipe.classList.add('r__elem__title');
        titleRecipe.textContent = title;

        const characteristicsRecipe = document.createElement('div');
        characteristicsRecipe.classList.add('r__elem__characteristics');

        const timeRecipe = document.createElement('div');
        timeRecipe.classList.add('r__elem__time');

        const timeRecipeIcon = document.createElement('img');
        timeRecipeIcon.classList.add('r__elem__time__img');
        timeRecipeIcon.src = "./images/icon-time.png";


        const timeRecipeText = document.createElement('span');
        timeRecipeText.classList.add('r__elem__time__text');
        timeRecipeText.textContent = time;

        timeRecipe.appendChild(timeRecipeIcon);
        timeRecipe.appendChild(timeRecipeText);

        const typeRecipe = document.createElement('div');
        typeRecipe.classList.add('r__elem__type');

        const typeRecipeIcon = document.createElement('img');
        typeRecipeIcon.classList.add('r__elem__type__img');
        typeRecipeIcon.src = "/images/icon-cutlery.png";

        const typeRecipeText = document.createElement('span');
        typeRecipeText.classList.add('r__elem__type__text');
        typeRecipeText.textContent = type;

        typeRecipe.appendChild(typeRecipeIcon);
        typeRecipe.appendChild(typeRecipeText);

        characteristicsRecipe.appendChild(timeRecipe);
        characteristicsRecipe.appendChild(typeRecipe);

        const iconNoLikeRecipe = document.createElement('img');
        iconNoLikeRecipe.classList.add('r__elem__nolike');
        iconNoLikeRecipe.src = "/images/recipes/icon-nolike.png";

        //add likeIcon
        elem.appendChild(imageRecipe);
        elem.appendChild(titleRecipe);
        elem.appendChild(characteristicsRecipe);
        elem.appendChild(iconNoLikeRecipe);
    }
}