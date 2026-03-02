let imageContainer = document.querySelector(".Image-container");

const images = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop&q=60",
        description: "Sunset over calm ocean waves"
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&auto=format&fit=crop&q=60",
        description: "Modern workspace with laptop"
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60",
        description: "Tropical beach with turquoise water"
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60",
        description: "Team collaboration in office"
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60",
        description: "Mountain landscape during golden hour"
    },
    {
        id: 6,
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60",
        description: "Coding setup with glowing monitor"
    },
    {
        id: 7,
        url: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=600&auto=format&fit=crop&q=60",
        description: "City skyline at night"
    },
    {
        id: 8,
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop&q=60",
        description: "Forest pathway with sunlight"
    },
    {
        id: 9,
        url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop&q=60",
        description: "Creative brainstorming session"
    },
    {
        id: 10,
        url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&auto=format&fit=crop&q=60",
        description: "Snow-covered mountain peaks"
    },
    {
        id: 11,
        url: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=600&auto=format&fit=crop&q=60",
        description: "Minimal desk setup"
    },
    {
        id: 12,
        url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&auto=format&fit=crop&q=60",
        description: "River flowing through forest"
    },
    {
        id: 13,
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=60",
        description: "Close-up of circuit board"
    },
    {
        id: 14,
        url: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600&auto=format&fit=crop&q=60",
        description: "Hot air balloons in sky"
    },
    {
        id: 15,
        url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=600&auto=format&fit=crop&q=60",
        description: "Laptop and coffee workspace"
    },
    {
        id: 16,
        url: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=600&auto=format&fit=crop&q=60",
        description: "City street during sunset"
    },
    {
        id: 17,
        url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&auto=format&fit=crop&q=60",
        description: "Waterfall in lush jungle"
    },
    {
        id: 18,
        url: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=600&auto=format&fit=crop&q=60",
        description: "Developer coding at night"
    },
    {
        id: 19,
        url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600&auto=format&fit=crop&q=60",
        description: "Autumn road surrounded by trees"
    },
    {
        id: 20,
        url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&auto=format&fit=crop&q=60",
        description: "Abstract colorful background"
    },
    {
        id: 21,
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60",
        description: "Startup team discussion"
    },
    {
        id: 22,
        url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&auto=format&fit=crop&q=60",
        description: "Desert dunes under blue sky"
    },
    {
        id: 23,
        url: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=600&auto=format&fit=crop&q=60",
        description: "Macbook on wooden table"
    },
    {
        id: 24,
        url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&auto=format&fit=crop&q=60",
        description: "Clean minimal interior design"
    },
    {
        id: 25,
        url: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&auto=format&fit=crop&q=60",
        description: "Drone view of coastline"
    }
];



function generateImages(n) {
    let clutter = "";

    for (let i = 1; i <= n; i++) {
        let width = Math.floor(Math.random() * 200) + 300;   // 300–500px
        let height = Math.floor(Math.random() * 100) + 250;  // 300–600px

        clutter += `      <img
        src="https://picsum.photos/${width}/${height}?random=${i}"
        alt="Random Image ${i}"
      >`;
    }

    document.querySelector(".Image-container").innerHTML = clutter;
}

let randomNo=Math.floor(Math.random()*300)+100;
generateImages(randomNo);
console.log(randomNo);

let focusinput = document.querySelector("input");
const searchOverlay = document.querySelector(".overlay");
let box2 = document.querySelector(".box2");
focusinput.addEventListener("focus", () => {
    searchOverlay.classList.add("active");
    box2.style.display = "initial";

});

focusinput.addEventListener("blur", () => {
    searchOverlay.classList.remove("active");
    box2.style.display = "none";
});

let ul = document.querySelector("ul");
focusinput.addEventListener("input", function () {
    const value = focusinput.value.toLowerCase().trim();

    if (value === "") {
        ul.innerHTML = " ";
        return;
    }
    let clutter = " ";

    const descriptions = images.filter(obj => obj.description.toLowerCase().startsWith(value)).map(obj => obj.description);


    descriptions.forEach(function (element) {
        clutter += `<li>${element}</li>`
        // cluter += ` <img src="${element.url}" alt="">`
    })
    ul.innerHTML = clutter;
    ul.style.display = "initial"






});
