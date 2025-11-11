//Dynamic load  Button section  (Music , comedy , Drawing)
const loadCategories = () => {
  //load the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //convert promise to json
    .then((res) => res.json())
    //display to data
    .then((data) => displayCategory(data.categories));
};

//Dynamic load video section
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
};
const displayVideos = (videos) => {
  console.log(videos);
  const videoContainer = document.getElementById("video-container");
  //for Each loop ( array of object)
  videos.forEach((video) => {
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
    <div class="card bg-base-100">
        <figure class="relative">
          <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" />
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
             ${video.title}
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
const displayCategory = (categories) => {
  //get the container
  const categoryContainer = document.getElementById("category-container");
  //loop iterate in array of object (for of loop)
  for (let cat of categories) {
    //create element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = ` 
          <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white ">${cat.category}</button>
        `;
    categoryContainer.appendChild(categoryDiv);
  }
  //create element

  //append element
};
loadCategories();
