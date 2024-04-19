function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData('text', event.target.id);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text');
  event.target.parentNode.insertBefore(document.getElementById(data), event.target);
}

const images = document.querySelectorAll('.image');
images.forEach(image => {
  image.addEventListener('dragstart', drag);
  image.addEventListener('dragover', allowDrop);
  image.addEventListener('drop', drop);
});

