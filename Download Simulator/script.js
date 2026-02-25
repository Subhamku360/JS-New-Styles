startbtn=document.querySelector(".start");
stopbtn=document.querySelector(".stop");
cardHeading=document.querySelector(".startheading");
downloadprogress=document.querySelector(".percentage");
progressBar=document.querySelector(".totalprogress");
downloadCard=document.querySelector("#downloadCard");
ready=document.querySelector(".ready");
let count=0;

startbtn.addEventListener("click",function()
{
    startbtn.disabled = true;
    startbtn.style.opacity=0.5;
    // startbtn.style.scale=1;

    timer=setInterval(() => {
        count++;
        cardHeading.textContent="Downloading Start";

        downloadprogress.textContent=`${count}%`
        progressBar.style.width=`${count}%`
        if(count===100)
            {

                cardHeading.textContent="Downloading Completed";
                clearInterval(timer);

                //Enable it to see more cool animation

                // setTimeout(() => {
                //     downloadCard.classList.add("fade-out");

                //     setTimeout(() => {
                //         document.body.style.backgroundImage=`url(${"https://i.pinimg.com/originals/20/b8/1e/20b81edb88baba24e4a0e5c527c6a1f2.gif"})`;
                //         downloadCard.style.display = "none";
                //         ready.textContent = "Download Completed";
                //     }, 500);

                // }, 1500);


            }
        }, 20);

    })

    stopbtn.addEventListener("click",function()
    {
        clearInterval(timer);
        count=0;
        cardHeading.textContent="Downloading Stop and Reset ";
        startbtn.disabled = false;
        startbtn.style.opacity=1;
        progressBar.style.width=`${count}%`;
        downloadprogress.textContent=`${count}%`

})
