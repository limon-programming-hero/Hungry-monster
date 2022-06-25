// random meals 
async function showRandom() {
    let randomFetching = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await randomFetching.json();

    const showSegment = document.getElementById('show_meal_random');
    creatingShowDiv(showSegment, data, 0);
}

for (i = 0; i < 8; i++) {
    showRandom();
}
// search button click event 
document.getElementById('search_button').addEventListener('click', function () {
    const word = document.getElementById('search_input').value;
    document.getElementById('search_and_random').style.display = 'none';
    showSearchMeal(word);
});

async function showSearchMeal(word) {
    let searchFetching = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`);
    const data = await searchFetching.json();

    const detailsPortion = document.getElementById('show_search_meal');

    if (data.meals == null) {
        const showError = document.createElement('h3');
        showError.innerText = 'Food item is not found!'
        showError.style.textAlign = 'center';
        detailsPortion.appendChild(showError);
    }
    else {
        for (let i = 0; i < data.meals.length; i++) {
            creatingShowDiv(detailsPortion, data, i);
        }
    }
}

//   making random and search function combined

const creatingShowDiv = (parentDiv, data, i) => {
    const mealSection = document.createElement('div');
    const mealName = document.createElement('p');
    const mealImage = document.createElement('img');

    mealSection.className = 'meal_section';
    mealName.className = 'meal_name';
    mealImage.className = 'meal_image';

    mealName.innerText = data.meals[i].strMeal;
    mealImage.src = data.meals[i].strMealThumb;

    parentDiv.appendChild(mealSection);
    mealSection.appendChild(mealImage);
    mealSection.appendChild(mealName);


    // showing details of a single meal 

    mealSection.addEventListener('click', function () {
        document.getElementById('search_and_random').style.display = 'none';
        document.getElementById("show_search_meal").style.display = 'none';

        const showDetails = document.getElementById('show_details');

        const showDetailsSub = document.createElement('div');
        const mealIngredient = document.createElement('div');
        const IngredientTitle = document.createElement('h4');
        const IngredientList = document.createElement('ul');

        mealIngredient.className = "meal_ingredient";
        IngredientTitle.innerText = "Ingredients";

        showDetails.appendChild(showDetailsSub);
        showDetailsSub.appendChild(mealSection);
        showDetailsSub.appendChild(mealIngredient);
        mealIngredient.appendChild(IngredientTitle);
        mealIngredient.appendChild(IngredientList);

        if (data.meals[i].strIngredient1 != null) {
            const IngredientListItem = document.createElement('li');
            IngredientListItem.innerText = `${data.meals[i].strMeasure1} ${data.meals[i].strIngredient1}`;
            IngredientList.appendChild(IngredientListItem);
        }

        if (data.meals[i].strIngredient2 != null) {
            const IngredientListItem = document.createElement('li');
            IngredientListItem.innerText = `${data.meals[i].strMeasure2} ${data.meals[i].strIngredient2}`;
            IngredientList.appendChild(IngredientListItem);
        }

        if (data.meals[i].strIngredient3 != null) {
            const IngredientListItem = document.createElement('li');
            IngredientListItem.innerText = `${data.meals[i].strMeasure3} ${data.meals[i].strIngredient3}`;
            IngredientList.appendChild(IngredientListItem);
        }

        if (data.meals[i].strIngredient4 != null) {
            const IngredientListItem = document.createElement('li');
            IngredientListItem.innerText = `${data.meals[i].strMeasure4} ${data.meals[i].strIngredient4}`;
            IngredientList.appendChild(IngredientListItem);
        }

        if (data.meals[i].strIngredient5 != null) {
            const IngredientListItem = document.createElement('li');
            IngredientListItem.innerText = `${data.meals[i].strMeasure5} ${data.meals[i].strIngredient5}`;
            IngredientList.appendChild(IngredientListItem);
        }

        if (data.meals[i].strIngredient6 != null) {
            const IngredientListItem = document.createElement('li');
            console.log(`${data.meals[i].strMeasure6} ${data.meals[i].ingeName}`);
            IngredientListItem.innerText = `${data.meals[i].strMeasure6} ${data.meals[i].strIngredient6}`;
            IngredientList.appendChild(IngredientListItem);
        }
    })
}

//  reloading the page
document.getElementById('nav-img').addEventListener('click', function () {
    location.reload();
});

document.getElementById('home_button').addEventListener('click', function () {
    location.reload();
})
