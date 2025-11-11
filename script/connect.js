function removeActiveClass() {
  const activeButtons = document.getElementsByClassName("active");
  for (let btn of activeButtons) {
    btn.classList.remove("active");
  }
}

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
    .then((data) => {
      removeActiveClass();
      document.getElementById("btn-all").classList.add("active");
      displayVideos(data.videos);
    });
};

//Dynamic category video
const loadCategoryVideos = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const clickedButton = document.getElementById(`btn-${id}`);
      removeActiveClass();
      clickedButton.classList.add("active");
      console.log(clickedButton);
      displayVideos(data.category);
    });
};
const loadVideoDetails = (videoId) => {
  console.log(videoId);
  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayVideoDetails(data.video));
};

const displayVideoDetails = (video) => {
  document.getElementById("video_details").showModal();
  const detailsContainer = document.getElementById("details_container");
  detailsContainer.innerHTML = `
  <div class="card bg-base-100 image-full  shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}" />
  </figure>
  <div class="card-body flex justify-center items-center py-1">
    <h2 class="card-title">${video.title}</h2>
     <h2 class="card-title">${video.authors[0].profile_name}</h2>
     <h2 class="card-title">${video.others.views}</h2>
   
   
  </div>
</div>
  `;
};

const displayVideos = (videos) => {
  console.log(videos);
  const videoContainer = document.getElementById("video-container");

  videoContainer.innerHTML = "";

  if (videos.length == 0) {
    videoContainer.innerHTML = `
    <div
        class="col-span-full text-center flex flex-col justify-center items-center py-10"
      >
        <img src="Icon.png" alt="" />
        <p class="text-3xl font-bold pt-6">
          Oops!! Sorry, There is no content here
        </p>
      </div>
    `;
  }
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
        <button onclick=loadVideoDetails('${video.video_id}') class="btn btn-block">Show Details</button>
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
          <button id="btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white ">${cat.category}</button>
        `;
    categoryContainer.appendChild(categoryDiv);
  }
  //create element

  //append element
};
loadCategories();
