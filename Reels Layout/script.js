const posts = [
    {
        profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        profileName: "Aarav Sharma",
        isFollowed: false,
        likeCount: 124,
        isLiked: false,
        commentCount: 12,
        shareCount: 4,
        video: "./videos/video1.mp4",
        description: "Morning vibes 🌅 | Chasing dreams one step at a time.",
        ismuted:true,
    },
    {
        profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        profileName: "Priya Verma",
        isFollowed: true,
        likeCount: 892,
        isLiked: true,
        commentCount: 76,
        shareCount: 15,
        video: "./videos/video2.mp4",
        description: "Sunsets and coffee make everything better ☕🌇" ,
        ismuted:true,
    },
    {
        profileImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
        profileName: "Rohan Mehta",
        isFollowed: false,
        likeCount: 452,
        isLiked: false,
        commentCount: 34,
        shareCount: 8,
        video: "./videos/video3.mp4",
        description: "Grinding today for a better tomorrow 💪",
        ismuted:true,
    },
    {
        profileImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        profileName: "Sneha Kapoor",
        isFollowed: true,
        likeCount: 2103,
        isLiked: true,
        commentCount: 189,
        shareCount: 42,
        video: "./videos/video4.mp4",
        description: "Confidence level: Selfie with no filter ✨",
        ismuted:true,
    },
    {
        profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        profileName: "Aditya Singh",
        isFollowed: false,
        likeCount: 675,
        isLiked: false,
        commentCount: 51,
        shareCount: 11,
        video: "./videos/video5.mp4",
        description: "Adventure awaits 🌍✈️",
        ismuted:true,
    },
    {
        profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        profileName: "Kavya Nair",
        isFollowed: true,
        likeCount: 998,
        isLiked: false,
        commentCount: 88,
        shareCount: 20,
        video: "./videos/video6.mp4",
        description: "Smiling through every challenge 😊",
        ismuted:true,
    },
    {
        profileImage: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
        profileName: "Rahul Joshi",
        isFollowed: false,
        likeCount: 321,
        isLiked: true,
        commentCount: 27,
        shareCount: 6,
        video: "./videos/video7.mp4",
        description: "Late nights, big goals 🌙🔥",
        ismuted:true,
    },
    {
        profileImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        profileName: "Ananya Gupta",
        isFollowed: true,
        likeCount: 1876,
        isLiked: true,
        commentCount: 143,
        shareCount: 33,
        video: "./videos/video8.mp4",
        description: "Creating my own sunshine ☀️",
        ismuted:true,
    },
    {
        profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        profileName: "Vikram Patel",
        isFollowed: false,
        likeCount: 540,
        isLiked: false,
        commentCount: 45,
        shareCount: 9,
        video: "./videos/video9.mp4",
        description: "Work hard, stay humble 🚀",
        ismuted:true,
    },
    {
        profileImage: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
        profileName: "Ishita Malhotra",
        isFollowed: true,
        likeCount: 1320,
        isLiked: true,
        commentCount: 102,
        shareCount: 25,
        video: "./videos/video10.mp4",
        description: "Living in the moment 💫",
        ismuted:true,
    }
];

let reel = document.querySelector(".container");
function AddData() {
    let clutter = " ";
    posts.forEach(function (elem,index) {
        clutter += `

          <div class="reel-section">
            <div class="mutedIcon">
                <i id="${index}"class=${elem.ismuted?"ri-volume-mute-fill":"ri-volume-up-fill"}></i>
            </div>
            <video class="background-video" src="${elem.video}" ${elem.ismuted?"muted":" "} autoplay loop ></video>
            <div class="bottom-container">
                <div class="Profile-container">
                    <img class="profile-image"
                        src="${elem.profileImage}"
                        alt="">
                    <h1 class="profile-name">${elem.profileName}</h1>
                    <button class="follow-button">${elem.isFollowed?"Followed":"Unfollow"}</button>
                </div>
                <div class="description">
                    <p>${elem.description}</p>
                </div>
            </div>
            <aside class="aside-container">
                <div class="item item1">
                    <i class=${elem.isLiked?"ri-heart-fill":"ri-heart-line"}></i>
                    <h3 id="${index}" class="likeCount">${elem.likeCount}</h3>
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
    reel.innerHTML = clutter;

}
AddData();
function FollowUnfollow() {

    reel.addEventListener("click", function (e) {

        if (e.target.classList.contains("follow-button")) {
            if (e.target.innerHTML === "Follow") {
                e.target.innerHTML = "Unfollow";

            }
            else {
                e.target.innerHTML = "Follow";
            }
        }
    })
}

FollowUnfollow();
reel.addEventListener("click", function (e) {

    if(posts[e.target.children[1].id].isLiked!=true)
    {
        posts[e.target.children[1].id].isLiked=true;
        posts[e.target.children[1].id].likeCount++;
    }
    else{
        posts[e.target.children[1].id].isLiked=false;
        posts[e.target.children[1].id].likeCount--;
    }

    AddData();


})

reel.addEventListener("click",function(e)
{
    if(posts[e.target.id].ismuted===true)
    {
        posts[e.target.id].ismuted=false;
        AddData();
    }
    else{
        posts[e.target.id].ismuted=true;
        AddData();
    }
})
