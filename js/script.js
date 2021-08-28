const searchFood =async () =>{
    const searchField = document.getElementById('searchField');
    const name = searchField.value
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    const res = await fetch(url)
    const data = await res.json()
    displayFood(data.meals);
      
}

const displayFood = (foods) => {
    const foodsContainer = document.getElementById('foodContainer');
    foodsContainer.textContent = ''
    for(const food of foods){
        const div1 = document.createElement('div');
        div1.className = 'col'
        div1.addEventListener('click', function(){
            loadData(food.idMeal)
        })
        const div2 = document.createElement('div');
        div2.className = 'card'
        div2.innerHTML = `
        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <p class="card-text">${food.strInstructions.slice(0,150)}</p>
        </div>
        `
        div1.appendChild(div2)
        foodsContainer.appendChild(div1)
        
    }
    
}

const loadData = async (id) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await res.json()
    details(data.meals[0]);
    
    
}

const details = data => {
    console.log(data);
    
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";


    span.onclick = function() {
    modal.style.display = "none";
}
    window.onclick = function(event) {
    if (event.target == modal) {
  modal.style.display = "none";
}}

const modalBody = document.getElementById('modal-body');
modalBody.innerHTML=`
                <h1>${data.strMeal}</h1>
                <p>Area: ${data.strArea}</p>
                <p>Catagory: ${data.strCategory}</p>
                <p>Ingredient1: ${data.strIngredient1}</p>
                <p>Ingredient2: ${data.strIngredient2}</p>
                <p>Ingredient3: ${data.strIngredient3}</p>
                <p>Ingredient4: ${data.strIngredient4}</p>
                <p>Ingredient5: ${data.strIngredient5}</p>
                <p>Ingredient6: ${data.strIngredient6}</p>
                
`
}