const IconWhitePlayCircleBtn = document.querySelector('.fr__view__btn__img__white');
const IconBlackPlayCircleBtn = document.querySelector('.fr__view__btn__img__black');
const FeatureedRecipeBtn = document.querySelector('.fr__view__btn');

ChangeColorIconPlayCircleBtn(FeatureedRecipeBtn, IconWhitePlayCircleBtn, IconBlackPlayCircleBtn);


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
