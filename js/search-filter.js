var filteredMenu = document.getElementById('filtered-menu'),
    filterButton = document.getElementById ('filterButton');

    // var rotaingIcon =document.getElementById("rotate_shape");
    var rotatingIcon = document.getElementsByClassName("rotate_shape")
    var rotatebutton = document.getElementById("rotating_button")
    console.log(rotatingIcon);

function openFilter(){
    filteredMenu.classList.toggle("show");
    filterButton.classList.toggle ("background");
}
function rotate() {
    // rotaingIcon.classList.toggle("rotating");
    for (let index = 0; index < rotatingIcon.length; index++) {
        const element = rotatingIcon[index];
        element.classList.toggle("rotating");
    }
   
}

