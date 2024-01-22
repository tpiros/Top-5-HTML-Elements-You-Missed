const dialog = document.querySelector('dialog');
const openButton = document.getElementById('open');
const output = document.querySelector('output');
const select = document.querySelector('select');
const confirmButton = document.getElementById('confirmButton');

openButton.addEventListener('click', () => {
  dialog.showModal();
});

confirmButton.addEventListener('click', (e) => {
  e.preventDefault();
  dialog.close(select.value);
});

dialog.addEventListener('close', (e) => {
  output.value =
    dialog.returnValue === 'default'
      ? 'No selection was made'
      : dialog.returnValue;
});
