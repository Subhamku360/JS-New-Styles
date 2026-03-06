let Overlay = document.querySelector("#Overlay");

document.addEventListener("mousemove", function (e) {

    document.documentElement.style.setProperty("--x", `${e.clientX}px`);
    document.documentElement.style.setProperty("--y", `${e.clientY}px`);
})


let heading1 = document.querySelector(".matrix-heading1");
let h1 = heading1.innerHTML;
let heading2 = document.querySelector(".matrix-heading2");
let h2 = heading2.innerHTML;
let para = document.querySelector(".matrix-para");
let p = para.innerHTML;

let character = "ABCDEFGHIJKLMNOPQRSTUVWXVZabcdefghijklmnopqrstuvwxyz";
let iterations=0;

function matrixEffect(element, originalText) {

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let iteration = 0;

    const interval = setInterval(() => {

        element.innerText = originalText
            .split("")
            .map((letter, index) => {

                if (index < iteration) return letter;

                return characters[Math.floor(Math.random() * characters.length)];

            })
            .join("");

        iteration += 0.3;

        if (iteration >= originalText.length) {
            clearInterval(interval);
        }

    }, 50);

    return interval;

}



heading1.addEventListener("mouseenter", function () {
    heading1.style.backgroundColor = "rgb(6, 17, 6)";
    intervel1=matrixEffect(heading1, h1);



});
heading1.addEventListener("mouseout", function () {
    heading1.style.backgroundColor = "transparent";
    heading1.innerText = h1;

    clearInterval(interval1);
});

para.addEventListener("mouseenter", function () {

    para.style.backgroundColor = "rgb(6, 17, 6)";
    matrixEffect(para, p);

});
para.addEventListener("mouseout", function () {
    clearInterval(interval3);
    para.innerText = p;
    para.style.backgroundColor = "transparent";
});

heading2.addEventListener("mouseenter",function()
{
    matrixEffect(heading2, h2);
})
heading2.addEventListener("mouseout",function()
{
    clearInterval(interval2);
    heading2.innerText = h2;
})
