//Dynamic Button section  (Music , comedy , Drawing)
const loadCategories=()=>{
    //load the data 
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    //convert promise to json
    .then(res=>res.json())
    //display to data
    .then(data=>displayCategory(data.categories));
}
const displayCategory=(categories)=>{
    //get the container 
    const categoryContainer = document.getElementById('category-container');
    //loop iterate in array of object (for loop)
    for(let cat of categories){
        //create element 
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML=` 
          <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white ">${cat.category}</button>
        `
        categoryContainer.appendChild(categoryDiv)
    }
    //create element

    //append element
}
loadCategories();