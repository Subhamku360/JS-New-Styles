const posts = [
    {
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      profileName: "Aarav Sharma",
      isFollowed: false,
      likeCount: 124,
      isLiked: false,
      commentCount: 12,
      shareCount: 4,
      video: "./videos/11900288_1080_1920_30fps.mp4",
      description: "Morning vibes 🌅 | Chasing dreams one step at a time."
    },
    {
      profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      profileName: "Priya Verma",
      isFollowed: true,
      likeCount: 892,
      isLiked: true,
      commentCount: 76,
      shareCount: 15,
      video: "./videos/12553712-uhd_2160_3840_25fps.mp4",
      description: "Sunsets and coffee make everything better ☕🌇"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
      profileName: "Rohan Mehta",
      isFollowed: false,
      likeCount: 452,
      isLiked: false,
      commentCount: 34,
      shareCount: 8,
      video: "./videos/12969356_2160_3840_60fps.mp4",
      description: "Grinding today for a better tomorrow 💪"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      profileName: "Sneha Kapoor",
      isFollowed: true,
      likeCount: 2103,
      isLiked: true,
      commentCount: 189,
      shareCount: 42,
      video: "./videos/3189290-hd_1080_1920_25fps.mp4",
      description: "Confidence level: Selfie with no filter ✨"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      profileName: "Aditya Singh",
      isFollowed: false,
      likeCount: 675,
      isLiked: false,
      commentCount: 51,
      shareCount: 11,
      video: "./videos/4562023-hd_1040_1848_30fps.mp4",
      description: "Adventure awaits 🌍✈️"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      profileName: "Kavya Nair",
      isFollowed: true,
      likeCount: 998,
      isLiked: false,
      commentCount: 88,
      shareCount: 20,
      video: "./videos/4764769-uhd_2160_3840_30fps.mp4",
      description: "Smiling through every challenge 😊"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
      profileName: "Rahul Joshi",
      isFollowed: false,
      likeCount: 321,
      isLiked: true,
      commentCount: 27,
      shareCount: 6,
      video: "./videos/6550972-hd_1080_1920_25fps.mp4",
      description: "Late nights, big goals 🌙🔥"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
      profileName: "Ananya Gupta",
      isFollowed: true,
      likeCount: 1876,
      isLiked: true,
      commentCount: 143,
      shareCount: 33,
      video: "./videos/6689156-hd_1080_1920_25fps.mp4",
      description: "Creating my own sunshine ☀️"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      profileName: "Vikram Patel",
      isFollowed: false,
      likeCount: 540,
      isLiked: false,
      commentCount: 45,
      shareCount: 9,
      video: "./videos/7197861-uhd_2160_3840_25fps.mp4",
      description: "Work hard, stay humble 🚀"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
      profileName: "Ishita Malhotra",
      isFollowed: true,
      likeCount: 1320,
      isLiked: true,
      commentCount: 102,
      shareCount: 25,
      video: "./videos/8382686-uhd_2160_4096_25fps.mp4",
      description: "Living in the moment 💫"
    }
  ];

let clutter=" ";
let reel=document.querySelector(".container");
posts.forEach(function(elem)
{
    clutter+=`

          <div class="reel-section">
            <video class="background-video" src="${elem.video}" autoplay loop ></video>
            <div class="bottom-container">
                <div class="Profile-container">
                    <img class="profile-image"
                        src="${elem.profileImage}"
                        alt="">
                    <h1 class="profile-name">${elem.profileName}</h1>
                    <button class="follow-button">Follow</button>
                </div>
                <div class="description">
                    <p>${elem.description}</p>
                </div>
            </div>
            <aside class="aside-container">
                <div class="item item1">
                    <i class="icon ri-heart-line"></i>
                    <h3 class="likeCount">${elem.likeCount}</h3>
                </div>
                <div class="item item2">
                    <i class="icon ri-chat-3-line"></i>
                    <h3>${elem.commentCount}</h3>
                </div>
                <div class="item item3">
                    <i class="icon ri-share-forward-line"></i>
                    <h3>${elem.shareCount}</h3>
                </div>
                <div class="item item4">
                    <i class="icon ri-more-2-fill"></i>

                </div>
            </aside>
            </div>`;
});

reel.addEventListener("click",function(e)
{

    if(e.target.classList.contains("follow-button"))
    {
        if(e.target.innerHTML==="Follow")
        {
            e.target.innerHTML="Unfollow";
        }
        else{
            e.target.innerHTML="Follow";
        }
    }
    else if(e.target.classList.contains("ri-heart-line"))
    {

            e.target.classList.remove("ri-heart-line");
            e.target.classList.add("ri-heart-fill")



    }
    else if(e.target.classList.contains("ri-heart-fill"))
    {

            e.target.classList.add("ri-heart-line");
            e.target.classList.remove("ri-heart-fill")


    }

})


reel.innerHTML=clutter;
