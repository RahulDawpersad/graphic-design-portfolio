// Get the dropdown content and project gallery
var dropdownContent = document.querySelector(".dropdown-content");
var gallery = document.getElementById("gallery");
var checkboxes = document.querySelectorAll(
  '.dropdown-content input[type="checkbox"]'
);
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal-img");
var closeModal = document.getElementById("close-modal");

// Add event listener to the checkboxes
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    // Clear the gallery
    gallery.innerHTML = "";

    // Loop through checkboxes to check which ones are checked
    checkboxes.forEach(function (chk) {
      if (chk.checked) {
        // Get the value of the checked checkbox
        var category = chk.value;
        // Add images or videos based on the selected category
        if (checkbox.checked && category === "websites") {
          // Redirect to website.html if "websites" checkbox is checked
          window.location.href = "websites.html";
        }
        switch (category) {
          case "websites":
            addTemplate("public/img", "Website Template 1");
            break;
          case "logos":
            addTemplate("public/img/logos/logo1.png", "Business Logo 1");
            addTemplate("public/img/logos/logo2.png", "Business Logo 2");
            addTemplate("public/img/logos/logo3.png", "Business Logo 3");
            addTemplate("public/img/logos/logo4.png", "Business Logo 4");
            addTemplate("public/img/logos/logo12.jpg", "Business Logo 5");
            addTemplate("public/img/logos/logo6.png", "Business Logo 6");
            addTemplate("public/img/logos/logo8.jpg", "Business Logo 7");
            addTemplate("public/img/logos/logo9.jpg", "Business Logo 8");
            addTemplate("public/img/logos/logo5.png", "Business Logo 9");
            addTemplate("public/img/logos/logo15.jpg", "Business Logo 10");
            addTemplate("public/img/logos/logo16.jpg", "Business Logo 11");
            break;
          case "cards":
            addTemplate("public/img/cards/card1.png", "Business Card 1");
            addTemplate("public/img/cards/card2.png", "Business Card 2");
            addTemplate("public/img/cards/card3.png", "Business Card 3");
            addTemplate("public/img/cards/card4.png", "Business Card 4");
            addTemplate("public/img/cards/card5.png", "Business Card 5");
            addTemplate("public/img/cards/card6.png", "Business Card 6");
            break;
          case "ads":
            // addTemplate("public/img/ads/logo8.mp4", "Business Video 1", true); 
            // addTemplate("public/img/ads/video2.mp4", "Business Video 2", true);
            break;
          case "flyers":
            addTemplate("https://via.placeholder.com/300", "Business Flyer 1");
            addTemplate("https://via.placeholder.com/300", "Business Flyer 2");
            break;
          case "posters":
            addTemplate("public/img/poster/poster1.png", "Business Poster 1");
            addTemplate("public/img/poster/poster2.png", "Business Poster 2");
            addTemplate("public/img/poster/poster3.png", "Business Poster 3");
            addTemplate("public/img/poster/poster4.png", "Business Poster 4");
            addTemplate("public/img/poster/poster5.png", "Business Poster 4");
            break;
        }
      }
    });
  });
});

// Function to add template image or video to gallery
function addTemplate(src, alt, isVideo = false) {
  if (isVideo) {
    var video = document.createElement('video');
    video.src = src;
    video.alt = alt;
    video.classList.add('project-video');
    video.setAttribute('controls', 'true');
    video.addEventListener('click', function() {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
    gallery.appendChild(video);
  } else {
    var img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.classList.add('project-img');
    img.addEventListener('click', function() {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
    gallery.appendChild(img);
  }
}

// Close modal when the close button is clicked
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
