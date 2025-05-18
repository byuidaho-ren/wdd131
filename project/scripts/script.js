function openModal(projectId) {
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
  // Dynamic content logic could go here if needed
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

/* home topfold auto set WxH  */
function setHeroDimensions() {
  const hero = document.querySelector('.hero');
  hero.style.height = `${window.innerHeight}px`;
  hero.style.width = `${window.innerWidth}px`;
}

// Set on load
window.addEventListener('DOMContentLoaded', setHeroDimensions);

// Update on resize
window.addEventListener('resize', setHeroDimensions);


// Data for modal content
const modalData = [
  {
    image: 'images/Hiring.webp',
    title: 'Web Design Hiring',
    description: 'Hiring Agency Web Design and System Application website development'
  },
  {
    image: 'images/GreatHome.webp',
    title: 'Web Design GreatHome',
    description: 'GreatHome Web Design and System Application website development'
  },
  {
    image: 'images/BakerCake.webp',
    title: 'Web Design BakerCake',
    description: 'BakerCake Web Design and System Application website development'
  },
  {
    image: 'images/cooland.webp',
    title: 'Web Design Cooland',
    description: 'Cooland Web Design and System Application website development'
  }
];

// Open Modal Function
function openModal(index) {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');

  // Set modal content
  modalImage.src = modalData[index].image;
  modalTitle.textContent = modalData[index].title;
  modalDescription.textContent = modalData[index].description;

  // Show the modal
  modal.style.display = 'flex';
}

// Close Modal Function
document.getElementById('closeModal').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function(e) {
  if (e.target === document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
  }
});
