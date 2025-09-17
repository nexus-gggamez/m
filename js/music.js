document.querySelector('.music-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const q = document.getElementById('music_query').value.trim();
    if (!q) return;
    const ytUrl = "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);
    window.open(ytUrl, '_blank');
  });