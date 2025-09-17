// Demo account system
const USERS = [
  { username: 'admin', password: 'abbas007' },
  { username: 'giacomo', password: 'makeshiftknife' },
  { username: 'eric', password: 'joesucks123'
];

document.querySelector('.login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const uname = document.getElementById('login-username').value.trim();
  const pass = document.getElementById('login-password').value;
  const user = USERS.find(u => u.username === uname && u.password === pass);
  if (user) {
    localStorage.setItem('nexusUser', uname);
    window.location.href = "pages/home.html";
  } else {
    let tip = document.querySelector('.login-tip');
    tip.innerHTML = "<span style='color:#ff0059'>Incorrect username or password!</span>";
    tip.style.animation = "shake 0.3s";
    setTimeout(()=>{ tip.style.animation = ""; }, 400);
  }
});

// If already logged in, auto-redirect
if (localStorage.getItem('nexusUser')) {
  window.location.href = "pages/home.html";

}
