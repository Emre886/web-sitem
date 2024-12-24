// script.js
// Gezinme çubuğundaki bağlantılara dinamik renk değiştirme efekti eklenmiş durumda.
// script.js (Tüm sayfalarda ortak kullanılacak JavaScript)
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.nav-link');  // Navbar'daki tüm bağlantıları al
    var currentPage = window.location.pathname.split('/').pop();  // Mevcut sayfanın ismini al

    links.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');  // Geçerli sayfa bağlantısına 'active' sınıfı ekle
        }
    });
});
