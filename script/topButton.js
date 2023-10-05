const mybutton = document.getElementById('btnTop');

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
};

window.onscroll = () => {
  scrollFunction();
};

const topFunction = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const buttonTop = document.getElementById('btnTop');
buttonTop.addEventListener('click', (event) => {
  topFunction();
});
