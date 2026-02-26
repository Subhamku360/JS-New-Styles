let arr = [
    {
      font: "aloreta",
      text: "Start small, grow daily."
    },
    {
      font: "Archare",
      text: "Consistency beats motivation."
    },
    {
      font: "Awesome",
      text: "Build skills, not excuses."
    },
    {
      font: "Burra",
      text: "Code today, conquer tomorrow."
    },
    {
      font: "Modern",
      text: "Every expert was once a beginner."
    },
    {
      font: "Joker",
      text: "Push through, level up."
    },
    {
      font: "rigrofe",
      text: "Discipline creates freedom."
    },
    {
      font: "valorant",
      text: "Stay hungry. Stay building."
    }

];

let parent=document.querySelector(".parent");
let btn=document.querySelector(".btn");




btn.addEventListener("click",function(e)
{
    let randomElement=Math.floor(Math.random()*arr.length);
    let x=(Math.random()*100);
    let y=(Math.random()*100);
    let sc=(Math.random()*2);
    let c1=Math.floor(Math.random()*255);
    let c2=Math.floor(Math.random()*255);
    let c3=Math.floor(Math.random()*255);
    let h1=document.createElement("h1");
    h1.textContent=arr[randomElement].text;
    h1.style.position="absolute";
    h1.style.left=`${x}%`;
    h1.style.top=`${y}%`;
    h1.style.scale=`${sc}`;
    h1.style.color=`rgb(${c1},${c2},${c3})`;
    h1.style.fontFamily=arr[randomElement].font;
    parent.append(h1);
    


})
