let text = document.querySelector(".click");
let keys = document.querySelector(".buttons");
let key_text = document.querySelectorAll(".key-text");

let soundArr = [
    { sounds: "./Sounds/key01.mp3" },
    { sounds: "./Sounds/key02.mp3" },
    { sounds: "./Sounds/key03.mp3" },
    { sounds: "./Sounds/key04.mp3" },
    { sounds: "./Sounds/key05.mp3" },
    { sounds: "./Sounds/key06.mp3" },
    { sounds: "./Sounds/key07.mp3" },
    { sounds: "./Sounds/key08.mp3" },
    { sounds: "./Sounds/key09.mp3" },
    { sounds: "./Sounds/key10.mp3" },
    { sounds: "./Sounds/key11.mp3" },
    { sounds: "./Sounds/key12.mp3" },
    { sounds: "./Sounds/key13.mp3" },
    { sounds: "./Sounds/key14.mp3" },
    { sounds: "./Sounds/key15.mp3" },
    { sounds: "./Sounds/key16.mp3" },
    { sounds: "./Sounds/key17.mp3" },
    { sounds: "./Sounds/key18.mp3" },
    { sounds: "./Sounds/key19.mp3" },
    { sounds: "./Sounds/key20.mp3" },
    { sounds: "./Sounds/key21.mp3" },
    { sounds: "./Sounds/key22.mp3" },
    { sounds: "./Sounds/key23.mp3" },
    { sounds: "./Sounds/key24.mp3" },
    { sounds: "./Sounds/key25.mp3" },
    { sounds: "./Sounds/key26.mp3" },
    { sounds: "./Sounds/key27.mp3" },
    { sounds: "./Sounds/key28.mp3" },
    { sounds: "./Sounds/key29.mp3" },
    { sounds: "./Sounds/key30.mp3" },
    // { sounds: "./Sounds/key01.mp3" },

];

const keyMap = {
    A: 0,
    S: 1,
    D: 2,
    F: 3,
    G: 4,
    H: 5,
    J: 6,
    K: 7,
    L: 8,
    ";": 9,
    "'": 10,

    Q: 11,
    W: 12,
    E: 13,
    R: 14,
    T: 15,
    U: 16,
    I: 17,
    O: 18,

    P: 19,
    "[": 20,
    "]": 21,
    Z: 22,
    C: 23,
    V: 24,
    B: 25,
    N:26,
    Y:27,
    X:28,
    M:29,
  };


let audio = new Audio("")

document.addEventListener("keydown", function (e) {
    if (e.repeat) return;
    if (keyMap[e.key.toUpperCase()] === undefined) return;

        audio.src = soundArr[keyMap[e.key.toUpperCase()]].sounds;
        // audio.currentTime = 0;
        audio.play();
        text.textContent=`"${e.key.toUpperCase()}"`;



    console.log(e.key.toUpperCase());
})

keys.addEventListener("click",function(e)
{
    audio.src=`${soundArr[e.target.dataset.index].sounds}`;
    audio.currentTime=0;
    audio.play();
    text.textContent=`"${key_text[e.target.dataset.index].textContent}"`;

})
