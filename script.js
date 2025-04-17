
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}
const bigPicture = document.getElementById('big-picture-2');
        const smallPictures = document.querySelectorAll('.small-pictures-2 img');
        smallPictures.forEach(smallPic => {
          smallPic.addEventListener('mouseover', () => {
            bigPicture.src = smallPic.getAttribute('data-big');
          });
    
          smallPic.addEventListener('mouseout', () => {
          });
        });
        document.querySelector('.collapsible-container').addEventListener('click', function () {
          this.classList.toggle('expanded');
        });