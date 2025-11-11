
//this is previous code 

// //For Category Section
// function loadCategories() {
//   // 1->fetch the data
//   fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
//     //2-> get promise & then convert promise to json
//     .then((res) => res.json())
//     // 3-> send data to display categories
//     .then((data) => display(data.categories));
// }

// function display(categories) {
//   //get the categories
//   const categoryContainer = document.getElementById("category-container");

//   //loop the iteration array of object
//   for (let cat of categories) {
//     // create
//     const categoryDiv = document.createElement("div");
//     categoryDiv.innerHTML = `
//      <button id="btn-${cat.category_id}" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white" onclick="categoryVideo(${cat.category_id})">${cat.category}</button>
//      `;
//     //append
//     categoryContainer.appendChild(categoryDiv);
//   }
// }

// //videoDetails 

// const loadVideoDetails =(videoId)=>{
//   console.log(videoId);
//   const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
//   fetch(url)
//   .then(res=>res.json())
//   .then(data=>console.log(data.video));
// }
// const displayVideoDetails=(video)=>{
//   console.log(video);
//   document.getElementById('video_modal').showModal();
// }
// //For category video section
// const categoryVideo = (id) => {
//   const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
//   console.log(url);
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       const buttonClicked = document.getElementById(`btn-${id}`);
//       buttonClicked.classList.add('active')
//       console.log(buttonClicked);
//       videoCategory(data.category)
//     });
// };

// const videoCategory = (videos) => {
//   const videoContainer = document.getElementById("video-container");
//   videoContainer.innerHTML = "";
//   if (videos.length == 0) {
//     videoContainer.innerHTML = `
//       <div class="col-span-full text-center flex flex-col justify-center items-center py-10">
//       <img src="Icon.png" alt="">
//       <p class="text-3xl font-bold pt-6">Oops!! Sorry, There is no content here</p>
//     </div>
//      `;
//   }
//   videos.forEach((video) => {
//     const videoCard = document.createElement("div");
//     videoCard.innerHTML = `
//    <div class="card bg-base-100">
//         <figure class="relative">
//           <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" alt="" />
//           <small
//             class="absolute bottom-2 right-2 bg-black text-white rounded text-sm p-1"
//             >3hrs 56 min ago</small
//           >
//         </figure>
//         <div class="flex mx-0 gap-5 py-5">
//           <div class="profile">
//             <div class="avatar">
//               <div
//                 class="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2"
//               >
//                 <img
//                   src="${video.authors[0].profile_picture}"
//                 />
//               </div>
//             </div>
//           </div>
//           <div class="des">
//             <h1 class="font-semibold">
//               Building a Winning UX Strategy Using the Kano Model
//             </h1>
//             <p class="text-sm text-gray-400 flex gap-3">
//              ${video.authors[0].profile_name}
//               <img class="w-6"
//                 src="https://img.icons8.com/?size=96&id=FNbnqlDTjR45&format=gif&color=f7f7f7"
//                 alt=""
//               />
//             </p>
//             <p class="text-sm text-gray-400">${video.others.views}</p>
//           </div>
//         </div>
//         <button onclick=loadVideoDetails('${video.video_id}') class="btn btn-block">Show Details</button>
//       </div>
//     `;
//     videoContainer.appendChild(videoCard);
//   });
// };

// //For Videos section
// function loadVideos() {
//   fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
//     .then((res) => res.json())
//     .then((data) => videoCategory(data.videos));
// }

// loadCategories();
// loadVideos();
