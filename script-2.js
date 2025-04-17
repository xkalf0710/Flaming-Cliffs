// Get the big picture element
const bigPicture = document.getElementById('big-picture');

// Get all small pictures
const smallPictures = document.querySelectorAll('.small-pictures img');

// Add hover event to each small picture
smallPictures.forEach(smallPic => {
  smallPic.addEventListener('mouseover', () => {
    // Change the big picture's source to the one in the data-big attribute
    bigPicture.src = smallPic.getAttribute('data-big');
  });

  smallPic.addEventListener('mouseout', () => {
    // Optionally reset the big picture if needed (uncomment the next line)
    // bigPicture.src = "big.jpg";
  });
});