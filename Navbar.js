fetch('../navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
    });

    window.addEventListener('load', function () {
      document.body.classList.add('loaded');
    });
