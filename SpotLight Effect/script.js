let Overlay=document.querySelector("#Overlay");

document.addEventListener("mousemove",function(e)
{
    console.log(e.clientX,e.clientY)
    document.documentElement.style.setProperty("--x",`${e.clientX}px`);
    document.documentElement.style.setProperty("--y",`${e.clientY}px`);
})
