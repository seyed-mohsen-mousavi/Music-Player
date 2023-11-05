let $ = document;
const body = $.body;
const audioElm = $.querySelector("audio");
const divLeftSide = $.getElementById("left-side");
const divRightSide = $.getElementById("right-side");
const btnDarkMode = $.getElementById("darkmode");
const music = [
  {
    id: 1,
    name: "Darya Kenar",
    artist: "Hiphopologist",
    path: "../src/audio/Hiphopologist x Kagan - Daryakenar.mp3",
    Image: "../src/img/hiphop.jpg",
    time: "02:49"
  },
  {
    id: 2,
    name: "Qabil",
    artist: "Reza Pishro",
    path: "../src/audio/Reza-Pishro-Qabil-darkstarmusic.ir-320.mp3",
    Image: "../src/img/qabil.jpg",
    time: "03:33"
  },
  {
    id: 3,
    name: "Slim Shady",
    artist: "Eminem",
    path: "../src/audio/eminem-the-real-slim-shady-128.mp3",
    Image: "../src/img/eminem.jpeg",
    time: "04:44"
  },
  {
    id: 4,
    name: "Bale Ghorban",
    artist: "Reza Pishro",
    path: "../src/audio/Reza Pishro & Putak - Bale Ghorban.mp3",
    Image: "../src/img/baleghroban.png",
    time: "03:45"
  },
];
let haveRightElm = true;
let id = 0;
let isplay = true;
let idNext = 1;
function createPlayRightSide(img_s, eUpdate, contentN,timeFull) {
  // divRightSide.firstElementChild.remove()
  // divRightSide.lastElementChild.remove()
  if (eUpdate == id) {
    audioElm.play();
  } else {
    if (divRightSide.childNodes.length < 3) {
      id = eUpdate;
      audioElm.play();
      createRightElm(img_s, contentN,timeFull);
    } else {
      // remove provies Elm
      divRightSide.firstElementChild.remove();
      divRightSide.firstElementChild.remove();

      if (divRightSide.childNodes.length < 3) {
        id = eUpdate;
        audioElm.play();
        createRightElm(img_s, contentN,timeFull);
      }
    }
  }
}
body.style.backgroundImage = "url(../src/img/bg.jpg)";
function createRightElm(img_s, contentN,timeFull) {
  body.style.backgroundImage = "url(" + img_s + ")";
  const newImg = $.createElement("img");
  newImg.className = "bg-slate-700 w-72 h-72 rounded-3xl animated fadeInUp";
  newImg.id = "right-img";
  newImg.src = img_s;
  const controlAndContent = $.createElement("div");
  const pContent = $.createElement("p");
  const progresCurrent = $.createElement("div");
  const current = $.createElement("div");
  const timeDiv = $.createElement("div")
  const timeText = $.createElement("p");
  const timeFullText = $.createElement("p")
  timeFullText.innerHTML = timeFull
  pContent.innerHTML = contentN;
  pContent.className = "name_music";
  current.id = "curent";
  timeDiv.className = "time_current";
  const newDiv = $.createElement("div");
  newDiv.className = "my-2 flex gap-4 ";
  newDiv.id = "right-div";
  controlAndContent.id = "control_and_content";
  // curent style and show Time
  let curentTimes = setInterval(() => {
    const duration = audioElm.duration;
    const currentTime = audioElm.currentTime;
    const progressPercent = (currentTime / duration) * 100;
    progresCurrent.style.width = progressPercent + "%";
    console.log(progressPercent + "%");
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
  }, 1000);
    /* for text Update */ audioElm.addEventListener(
      "timeupdate",
      updateCurrentText
    );
  function updateCurrentText() {
    let time = Math.floor(audioElm.currentTime);
    if (time < 10) {
      timeText.innerHTML = "00" + ":" + "0" + time;
    } else if (time >= 10 && time <= 59) {
      timeText.innerHTML = "00" + ":" + time;
    } else {
      if( Math.floor(time % 60) < 10){
        timeText.innerHTML = "0" +  Math.floor(time / 60) + ":" +  "0" + Math.floor(time % 60);
      }else{
        timeText.innerHTML = "0" +  Math.floor(time / 60) + ":" + Math.floor(time % 60);
      }
    }
  }
  // append For controls
  timeDiv.append(timeText,timeFullText)
  current.append(progresCurrent);
  controlAndContent.append(pContent, timeDiv, current, newDiv);
  // all Btn
  const newBtnProvies = $.createElement("button");
  const newBtnPlayAndPause = $.createElement("button");
  const newBtnNext = $.createElement("button");
  newBtnProvies.id = "btn_provies";
  newBtnPlayAndPause.id = "btn_play";
  newBtnNext.id = "btn_next";
  newBtnPlayAndPause.className =
    "bg-slate-500 p-2 rounded-full hover:bg-slate-600 animated fadeIn";
  // svg add Provies ---------
  const newSvgProvies = $.createElementNS("http://www.w3.org/2000/svg", "svg");
  newSvgProvies.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  newSvgProvies.setAttribute("fill", "none");
  newSvgProvies.setAttribute("viewBox", "0 0 24 24");
  newSvgProvies.setAttribute("strokewidth", "1.5");
  newSvgProvies.setAttribute("stroke", "currentColor");
  newSvgProvies.setAttribute("class", "w-8 h-8");
  const newPathSvgProvies = $.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  newPathSvgProvies.setAttribute("stroke-linecap", "round");
  newPathSvgProvies.setAttribute("stroke-linejoin", "round");
  newPathSvgProvies.setAttribute(
    "d",
    "M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
  );

  newSvgProvies.append(newPathSvgProvies);
  newBtnProvies.append(newSvgProvies);
  // add svg Play ----------
  const newSvgPlay = $.createElementNS("http://www.w3.org/2000/svg", "svg");
  newSvgPlay.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  newSvgPlay.setAttribute("viewBox", "0 0 24 24");
  newSvgPlay.setAttribute("strokewidth", "1.5");
  newSvgPlay.setAttribute("stroke", "currentColor");
  newSvgPlay.setAttribute("class", "w-8 h-8 fill-white stroke-none");
  newSvgPlay.setAttribute("id", "play_pause1");

  const newPathSvgPlay = $.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  newPathSvgPlay.setAttribute("stroke-linecap", "round");
  newPathSvgPlay.setAttribute("stroke-linejoin", "round");
  newPathSvgPlay.setAttribute(
    "d",
    "M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
  );
  newPathSvgPlay.setAttribute("id", "play_pause");
  newSvgPlay.append(newPathSvgPlay);
  newBtnPlayAndPause.append(newSvgPlay);
  // add svg Next ----------
  const newSvgNext = $.createElementNS("http://www.w3.org/2000/svg", "svg");
  newSvgNext.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  newSvgNext.setAttribute("fill", "none");
  newSvgNext.setAttribute("viewBox", "0 0 24 24");
  newSvgNext.setAttribute("strokewidth", "1.5");
  newSvgNext.setAttribute("stroke", "currentColor");
  newSvgNext.setAttribute("class", "w-8 h-8");
  const newPathSvgNext = $.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  newPathSvgNext.setAttribute("stroke-linecap", "round");
  newPathSvgNext.setAttribute("stroke-linejoin", "round");
  newPathSvgNext.setAttribute(
    "d",
    "M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
  );

  let s = newPathSvgNext;
  newSvgNext.appendChild(newPathSvgNext);
  newBtnNext.append(newSvgNext);
  // Append All btn and append To RightSide
  newDiv.append(newBtnProvies, newBtnPlayAndPause, newBtnNext);
  divRightSide.append(newImg, controlAndContent);
  // All Event
  idNext = idNext + 1;
  $.getElementById("btn_next").addEventListener("click", () => {
    console.log(id);
    music.forEach((e) => {
      if (idNext === e.id) {
        img_s = e.Image;
        createPlayRightSide(img_s);
      }
    });
  });
  $.getElementById("btn_provies").addEventListener("click", () => {
    console.log("btn_provies");
  });
  $.getElementById("btn_play").addEventListener("click", () => {
    if (isplay) {
      audioElm.pause();
      isplay = false;
      $.getElementById("play_pause").setAttribute(
        "d",
        "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
      );
      let curentTimes = setInterval(() => {
        const duration = audioElm.duration;
        const currentTime = audioElm.currentTime;
        // Update progress bar width
        const progressPercent = (currentTime / duration) * 100;
        progresCurrent.style.width = progressPercent + "%";
        // Calculate display for duration
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
      });
    } else {
      audioElm.play();
      isplay = true;
      $.getElementById("play_pause").setAttribute(
        "d",
        "M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
      );
    }
  });
  $.getElementById("curent").addEventListener("click", setProgressBar);
  function setProgressBar(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioElm.duration;
    audioElm.currentTime = (clickX / width) * duration;
    audioElm.play();
    $.getElementById("play_pause").setAttribute(
      "d",
      "M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
    );
    isplay = true;
  }
}
function createBtnLeftSide(e) {
  // New Button
  const newBtn = $.createElement("button");
  newBtn.className =
    "flex gap-1 p-2 bg-[#ffffff8c] shadow-sm backdrop-blur-[11.2px] rounded-md  transition-all ease-in-out w-60 items-center hover:bg-[#ffffff29] my-3";
  newBtn.id = "btn_music";
  newBtn.addEventListener("click", () => {
    audioElm.src = e.path;
    const img_s = e.Image;
    const eUpdate = e.id;
    const contentN = e.name;
    const timeFull = e.time
    createPlayRightSide(img_s, eUpdate, contentN,timeFull);
  });
  // new Img
  const newImg = $.createElement("img");
  newImg.className = "w-12 h-12 bg-white rounded-xl";
  newImg.src = e.Image;
  newImg.alt = e.name + "_Image";
  // new Div and Content
  const newDiv = $.createElement("div");
  newDiv.className = "text-left";

  const newP = $.createElement("p");
  newP.className = "text-gray-800";
  newP.innerHTML = e.name;
  const newP2 = $.createElement("p");
  newP2.className = "text-sm text-slate-600";
  newP2.innerHTML = e.artist;
  newDiv.append(newP, newP2);
  // appand To newBtn ---
  newBtn.append(newImg, newDiv);
  divLeftSide.append(newBtn);
}
// ----------
// newBtnProvies.id = "btn_provies";
// newBtnPlayAndPause.id = "btn_play";
// newBtnNext.id = "btn_next"; =>> :)
music.forEach((e) => {
  createBtnLeftSide(e);
});
let flagDark = false;
if (
  localStorage.getItem("theme") === null ||
  localStorage.getItem("theme") === "light"
) {
  localStorage.setItem("theme", "light");
} else {
  document.body.classList.add("dark");
  flagDark = true;
}
btnDarkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (flagDark) {
    localStorage.setItem("theme", "light");
    flagDark = false;
  } else {
    localStorage.setItem("theme", "dark");
    flagDark = true;
  }
});
