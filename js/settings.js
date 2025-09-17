const themeColors = {
    dark: '#111',
    blue: '#08e2ff',
    red: '#ff0059',
    green: '#27ff4a',
    purple: '#a020f0',
    yellow: '#fffb00',
    orange: '#ff9000',
    pink: '#ff3ec9',
    gray: '#444',
    matrix: '#0aff0a',
    retro: '#f7d51d'
  };
  
  function applyTheme(theme) {
    let color = themeColors[theme] || '#111';
    document.body.style.background = color;
    document.querySelector('.nexus-header').style.color = theme === 'gray' ? '#fff' : color;
    // Optionally, change grid overlay and neon accents based on theme
    document.querySelector('.grid-bg').style.backgroundImage =
      (theme === 'matrix')
        ? "linear-gradient(to right, rgba(0,255,0,0.14) 1px, transparent 1px),linear-gradient(to bottom, rgba(0,255,0,0.14) 1px, transparent 1px)"
        : "linear-gradient(to right, rgba(0,255,255,0.08) 1px, transparent 1px),linear-gradient(to bottom, rgba(0,255,255,0.08) 1px, transparent 1px)";
    document.querySelector('.grid-bg').style.backgroundSize = "60px 60px";
  }
  
  const themeSelect = document.getElementById('theme-select');
  const themePreview = document.getElementById('theme-preview');
  themeSelect.addEventListener('change', function() {
    const theme = this.value;
    themePreview.style.background = themeColors[theme] || '#111';
    themePreview.style.boxShadow = `0 0 14px ${themeColors[theme] || '#08e2ff'}`;
    applyTheme(theme);
    localStorage.setItem('nexusTheme', theme);
  });
  
  // Restore theme on load
  const savedTheme = localStorage.getItem('nexusTheme');
  if (savedTheme && themeColors[savedTheme]) {
    themeSelect.value = savedTheme;
    themePreview.style.background = themeColors[savedTheme];
    themePreview.style.boxShadow = `0 0 14px ${themeColors[savedTheme]}`;
    applyTheme(savedTheme);
  } else {
    themePreview.style.background = themeColors['dark'];
    themePreview.style.boxShadow = `0 0 14px ${themeColors['dark']}`;
    applyTheme('dark');
  }
  
  // Particle Effects Toggle
  const particlesToggle = document.getElementById('particles-toggle');
  particlesToggle.checked = localStorage.getItem('particlesEnabled') === 'true';
  particlesToggle.addEventListener('change', () => {
    localStorage.setItem('particlesEnabled', particlesToggle.checked);
  });
  
  // Sound FX Toggle
  const soundToggle = document.getElementById('sound-toggle');
  soundToggle.checked = localStorage.getItem('soundFXEnabled') === 'true';
  soundToggle.addEventListener('change', () => {
    localStorage.setItem('soundFXEnabled', soundToggle.checked);
  });
  
  document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('nexusUser');
    window.location.href = '../index.html';
  });