function loadCategories() {
  // 1->fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //2-> get promise & then convert promise to json
    .then((res) => res.json())
    // 3-> send data to display categories
    .then((data) => display(data.categories));
}
function display(categories) {
  //get the categories
  const categoryContainer = document.getElementById("category-container");
  //loop the iteration array of object
  for (let cat of categories) {
    // create
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
     <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
     `;
    //append
    categoryContainer.appendChild(categoryDiv);
  }
}
loadCategories();
