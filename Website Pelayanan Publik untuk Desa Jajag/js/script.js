// --- Fungsi untuk semua halaman ---
function logout() {
  if (confirm("Yakin ingin logout?")) {
    window.location.href = "index.html"; // Mengarahkan ke halaman login
  }
}

// --- Efek scroll untuk Navbar di halaman User & Admin ---
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.glass-navbar');
  // Pastikan elemen navbar ada sebelum menjalankan script
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(13, 110, 253, 0.95)';
      navbar.classList.add('shadow');
    } else {
      // Background berbeda untuk user dan admin saat di atas
      if (document.body.classList.contains('user-page') || document.body.classList.contains('admin-page')) {
         navbar.style.background = 'rgba(13, 110, 253, 0.6)';
         navbar.classList.remove('shadow');
      }
    }
  }
});

// --- Fungsi khusus untuk halaman Login (index.html) ---
function handleLogin(event) {
  event.preventDefault(); // Mencegah form dari auto-submit

  // Cek apakah kita berada di halaman yang benar dengan mencari form login
  const loginForm = document.querySelector('form[onsubmit="return handleLogin(event)"]');
  if (loginForm) {
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const role = document.getElementById('role').value;
      const errorMsg = document.getElementById('error-msg');

      if (!email || !password || !role) {
        errorMsg.style.display = 'block';
        return false;
      }
      
      errorMsg.style.display = 'none';

      if (role === 'admin') {
        window.location.href = 'admin.html';
      } else if (role === 'user') {
        window.location.href = 'user.html';
      } else {
        errorMsg.style.display = 'block';
      }
  }
   return false;
}