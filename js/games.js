// When a game is clicked, open it in a new about:blank tab and write the game's iframe into it
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
      const url = card.getAttribute('data-url');
      // Open about:blank and inject iframe
      const newTab = window.open('about:blank', '_blank');
      if (newTab) {
        newTab.document.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <title>Play Game - NEXUS</title>
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <style>
              body { background: #000; margin:0; display:flex; align-items:center; justify-content:center; height:100vh;}
              iframe { border:0; width:98vw; height:98vh; box-shadow: 0 0 64px #08e2ff; border-radius:12px;}
            </style>
          </head>
          <body>
            <iframe src="${url}" allowfullscreen></iframe>
          </body>
          </html>
        `);
        newTab.document.close();
      }
    });
  });