function init(){
	var images = document.getElementsByClassName("images");
    var left_arrow = document.getElementById("left_arrow");
    var right_arrow = document.getElementById("right_arrow");
	for (var i = 0; i < images.length; i++) {
		images[i].onclick = changeBigPicture;
	}
    left_arrow.onclick = previousPic;
    right_arrow.onclick = nextPic;
}

function check_img(){
    var appDiv = document.getElementById("big_picture");
    var eventElement = document.getElementById("bigpic");
    eventElement.src = ("img/notFound.png");
    eventElement.className = "pic_4";
    eventElement.id = "bigpic";
    alert("Простите, мы потеряли эту картинку, но мы работаем над этим прямо сейчас");
}

function changeBigPicture(eventObj){
	var appDiv = document.getElementById("big_picture");
	appDiv.innerHTML = "";	
	var eventElement = eventObj.target;
	var imageNameParts = eventElement.id.split("_");
	var src = "img/gallery/big/" + imageNameParts[1] + ".jpg";
	var imageDomElement = document.createElement("img");
	imageDomElement.src = src;
    imageDomElement.className = "pic_" + imageNameParts[1];
    imageDomElement.id = "bigpic";
    imageDomElement.onerror = check_img;
	appDiv.appendChild(imageDomElement);
}

function previousPic(){
    var appDiv = document.getElementById("big_picture");
    var eventElement = document.getElementById("bigpic");
    var imageNameParts = eventElement.className.split("_");
    if (+imageNameParts[1] === 0) {
        var imageNamePartsNew = 4;
    } else {
        var imageNamePartsNew = +imageNameParts[1] - 1;
    }
    var newSrc = "img/gallery/big/" + imageNamePartsNew + ".jpg";
    eventElement.src = newSrc;
    eventElement.className = "pic_" + imageNamePartsNew;
    eventElement.onerror = check_img;
}

function nextPic(){
    var appDiv = document.getElementById("big_picture");
    var eventElement = document.getElementById("bigpic");
    var imageNameParts = eventElement.className.split("_");
    if (+imageNameParts[1] >= 4) {
        var imageNamePartsNew = 1;
    } else {
        var imageNamePartsNew = +imageNameParts[1] + 1;
    }
    var newSrc = "img/gallery/big/" + imageNamePartsNew + ".jpg";
    eventElement.src = newSrc;
    eventElement.className = "pic_" + imageNamePartsNew;
    eventElement.onerror = check_img;
}

window.onload = init;