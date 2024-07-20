document.addEventListener('DOMContentLoaded', function () {
    var navbarCollapse = document.getElementById('navbarSupportedContent');
    var navLinks = navbarCollapse.querySelectorAll('.nav-link');
    var bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
  
    navLinks.forEach(function (navLink) {
      navLink.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show')) {
          bsCollapse.hide();
        }
      });
    });
  });
  