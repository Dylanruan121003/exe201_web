document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', event => {
       item.classList.toggle('open');
       var img = item.querySelector('.toggle');
       if (item.classList.contains('open')) {
          img.src = "./images/minus-circle.png";
       } else {
          img.src = "./images/plus circle.png";
       }
    })
    })