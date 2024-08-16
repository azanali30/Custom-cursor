// const cursor = document.getElementById('custom-cursor');

const root = document.querySelector('html');

const cursor = document.createElement('div');
cursor.classList.add("custom-cursor");
root.appendChild(cursor);


const pointer = document.querySelector('.custom-cursor');


document.addEventListener('mousemove', (e) => {
  pointer.style.left = `${e.clientX}px`;
  pointer.style.top = `${e.clientY}px`;
});

document.addEventListener('contextmenu', (e) => {
  e.preventDefault()
});




