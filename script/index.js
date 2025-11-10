//For Category Section
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

//For Videos section
function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => videoCategory(data.videos));
}
const videoCategory = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videos.forEach((video) => {
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
   <div class="card bg-base-100">
        <figure class="relative">
          <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" alt="" />
          <small
            class="absolute bottom-2 right-2 bg-black text-white rounded text-sm p-1"
            >3hrs 56 min ago</small
          >
        </figure>
        <div class="flex mx-0 gap-5 py-5">
          <div class="profile">
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2"
              >
                <img
                  src="${video.authors[0].profile_picture}"
                />
              </div>
            </div>
          </div>
          <div class="des">
            <h1 class="font-semibold">
              Building a Winning UX Strategy Using the Kano Model
            </h1>
            <p class="text-sm text-gray-400 flex gap-3">
             ${video.authors[0].profile_name}
              <img class="w-6"
                src="https://img.icons8.com/?size=96&id=FNbnqlDTjR45&format=gif&color=f7f7f7"
                alt=""
              />
            </p>
            <p class="text-sm text-gray-400">${video.others.views}</p>
          </div>
        </div>
      </div>
    `;
    videoContainer.appendChild(videoCard);
  });
};
loadVideos();
