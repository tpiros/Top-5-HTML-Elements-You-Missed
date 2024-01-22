const dialog = document.querySelector('dialog');
const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');

openButton.addEventListener('click', () => {
  // dialog.show();
  dialog.showModal();
});

closeButton.addEventListener('click', () => {
  dialog.close();
});
