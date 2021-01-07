
var withEmotion = false;

function remover(variable, id) {
    var variable = document.getElementById(id);
    variable.remove();
}

function clickButton() {
    var rb1 = document.getElementById("rb1");
    var rb2 = document.getElementById("rb2");

    if (rb1.checked) {
        withEmotion = true;
    } else if (rb2.checked) {
        withEmotion = false;
    }

    removeToStart();
}

function createImage(imgPath) {                                 //cria imagens
    var imgElement = document.createElement("img");
    imgElement.src = imgPath;
    return imgElement;
}

function addClassName(element, className) {                      //adiciona uma classe a um elemento
    element.classList.add(className);
}

function appendToDom(info) {                                     //insere no Body
    document.body.append(info);
}

function createButtons(opt1, funcName1, opt2, funcName2) {
    var btns = document.querySelector("#buttons");
    btns.innerHTML =
        `<button onclick="${funcName1}()">${opt1}</button>
    <button onclick="${funcName2}()">${opt2}</button>`
}

function textChoices(className, text) {
    var paragraph = document.getElementById("text");
    paragraph.setAttribute("class", className);
    paragraph.innerHTML = text
}

function removeToStart() {

    remover(campImg, "campImg");
    remover(intro, "intro");
    remover(radioButtons, "radioButtons");
    remover(initialButton, "initialButton");
    startGameImg();
}

function continuarStory(id, funcao) {
    document.getElementById("buttons").innerHTML = "";

    var continuar = document.createElement("button");
    continuar.setAttribute("id", id);
    continuar.innerText = "Continuar...";
    continuar. addEventListener("click", funcao)
    document.getElementById("buttons").appendChild(continuar);
}

function clearImg(){
    document.getElementById("divImg").innerHTML = "";
}

function image(varImg, id) {

    clearImg();

    if(withEmotion == true){
        var imgTag = createImage(varImg);
        imgTag.setAttribute("id", id);
    
        document.getElementById("divImg").appendChild(imgTag);      
    }
}

function death(){
    document.body.style.backgroundImage = "url('./imagens/blood.jpg')";
    var title = document.getElementById("h1");
    title.style.color = "white";
}

function youWin(){
    clearImg();
    var divImg = document.getElementById("divImg");

    document.body.style.backgroundColor = "black";

    image(youWinImg, "youWinImg");
    var title = document.getElementById("h1");
    title.style.color = "white";
}

function resetLayout(){

    document.body.style.backgroundImage = ""
    document.body.style.backgroundColor = "#8d8997";

    var title = document.createElement("h1");
    title.setAttribute("id", "head1");
    title.style.color = "#282b31";

    var paragraph = document.getElementById("text");
    paragraph.style.color = "white"

    var header = document.getElementById("header")
    header.appendChild(title)
}

function playAgain() {

    document.getElementById("buttons").innerHTML = "";

    var playAgain = document.createElement("button");
    playAgain.setAttribute("id", "playAgain");
    playAgain.innerText = "Jogar denovo!";
    playAgain.addEventListener("click", startGameImg)
    document.getElementById("buttons").appendChild(playAgain);
}
