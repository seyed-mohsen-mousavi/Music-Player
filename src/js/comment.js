const btnSent = document.getElementById("send_comment");
const inptElm = document.getElementById("send_inpt");
const chatUser = document.getElementById("chat_user");
let inputValue;
btnSent.addEventListener("click", () => {
  if (inptElm.value) {
    createComment();
    inptElm.value = ""
  } else {
    console.log("sss");
  }
});
inptElm.addEventListener("keyup",(e)=>{
  inputValue = inptElm.value;
  if (e.key === "Enter" && inptElm.value) {
    createComment()
    inptElm.value = ""
  };
})
function createComment() {
  let mamDiv = document.createElement("div");
  mamDiv.className = "chat__conversation-board__message-container reversed";
  let newDiv = document.createElement("div");
  let newDiv2 = document.createElement("div");
  let newDiv3 = document.createElement("div");
  newDiv.className = "chat__conversation-board__message__person";
  newDiv2.className = "chat__conversation-board__message__context";
  newDiv3.className = "chat__conversation-board__message__options";
  mamDiv.append(newDiv, newDiv2, newDiv3);
  // 1 Div ---***--------------
  let div = document.createElement("div");
  div.className = "chat__conversation-board__message__person__avatar";
  let img = document.createElement("img");
  img.src = "../src/img/user.png";
  img.alt = "";
  let span = document.createElement("span");
  span.className = "chat__conversation-board__message__person__nickname";
  span.innerHTML = "user";
  div.append(img);
  newDiv.append(div, span);
  // 2 Div ---***---------------
  let divNew = document.createElement("div");
  divNew.className = "chat__conversation-board__message__bubble";
  let content_massage = document.createElement("span");
  content_massage.innerHTML = inputValue;
  divNew.append(content_massage);
  newDiv2.append(divNew);
  chatUser.append(mamDiv);
}
document.body.style.backgroundImage = "url(../src/img/bg.jpg)";
