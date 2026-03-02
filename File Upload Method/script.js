upload=document.querySelector(".upload");
btn=document.querySelector(".btn");

btn.addEventListener("click",function(e)
{
    upload.click();

})

upload.addEventListener("change",function(e)
{
    btn.textContent=e.target.files[0].name;
})
