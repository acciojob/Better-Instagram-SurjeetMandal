document.addEventListener('DOMContentLoaded', () => {
  const allowDrop = event => event.preventDefault();

  const drag = event => {
    event.dataTransfer.setData('text', event.target.id);
  };

  const drop = event => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const draggedElement = document.getElementById(data);
    const targetElement = event.target.closest('.image');

    if (targetElement) {
      const parent = targetElement.parentNode;
      parent.insertBefore(draggedElement, targetElement);
    }
  };

  const images = document.querySelectorAll('.image');
  images.forEach(image => {
    image.addEventListener('dragstart', drag);
  });

  document.body.addEventListener('dragover', allowDrop);
  document.body.addEventListener('drop', drop);
});




