var modal = document.getElementById('popup');
var modalone = document.getElementById('pop-pool');
var modaltwo = document.getElementById('create-pool');

// Get the button that opens the modal

// When the user clicks on the button, open the modal

// When the user clicks on <span> (x), close the modal

function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
      }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    else if (event.target == modalone) {
        modalone.style.display = "none";
    }
    else if (event.target == modaltwo) {
        modaltwo.style.display = "none";
    }
}
