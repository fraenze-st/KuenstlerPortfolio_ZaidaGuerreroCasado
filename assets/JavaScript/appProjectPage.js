// $(document).ready(function () {
// navbar active-class
// var navProjects = document.querySelectorAll(".nbpp-link");
// // Loop through the links and add the active class to the current/clicked link
// for (var i = 0; i < navProjects.length; i++) {
//     navProjects[i].addEventListener("click", function () {
//         console.log("clicked");
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }



//Enlarge Images
// Get the modal
// source: https://www.w3schools.com/howto/howto_css_modal_images.asp
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const projectImg = document.querySelectorAll(".project-image");
const imgArray = Array.from(projectImg);
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (let i = 0; i < imgArray.length; i++) {

    imgArray[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// });