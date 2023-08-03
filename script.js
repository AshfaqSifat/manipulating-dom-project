let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");
let pDiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div");

pButton.onclick = function() {
    imgDiv.style.display = "none";
    pDiv.style.display = "block";
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This is text.";
    pDiv.appendChild(newParagraph);
}

imgButton.onclick = function() {
    imgDiv.style.display = "block";
    pDiv.style.display = "none";


    let newImage = document.createElement("img");
    newImage.src = "image.jpg";
    newImage.width = 100;
    newImage.height = 50;
    imgDiv.appendChild(newImage);
}