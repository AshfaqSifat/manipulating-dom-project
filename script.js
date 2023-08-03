//Assign the divs and buttons to a variable
let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");
let pDiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div");


pButton.onclick = function() {
    //When button is clicked, imgDiv is hidden and only pDiv is shown
    imgDiv.style.display = "none";
    pDiv.style.display = "block";


    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This is text.";
    pDiv.appendChild(newParagraph);
}

imgButton.onclick = function() {
    //When button is clicked, pDiv is hidden and only imgDiv is shown
    imgDiv.style.display = "block";
    pDiv.style.display = "none";


    let newImage = document.createElement("img");
    newImage.src = "image.jpg";
    //Image size is set to not be too big
    newImage.width = 100;
    newImage.height = 50;
    imgDiv.appendChild(newImage);
}