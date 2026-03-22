<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Photography — Aiko Hayashi</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@300;400&family=Noto+Serif+JP:wght@300;400;500&display=swap" rel="stylesheet" />
</head>
<body class="photo-page">

  <!-- SIDEBAR NAV -->
  <nav id="sidebar">
    <a href="index.html" class="sidebar-name">Aiko Hayashi</a>
    <ul class="sidebar-links">
      <li><a href="index.html" data-en="Home" data-ja="ホーム">Home</a></li>
      <li><a href="architecture.html" data-en="Projects" data-ja="建築">Projects</a></li>
      <li><a href="research.html" data-en="Research" data-ja="研究">Research</a></li>
      <li><a href="photography.html" class="active" data-en="Photography" data-ja="写真">Photography</a></li>
    </ul>
    <button class="lang-toggle" id="langToggle">JP</button>
  </nav>

  <!-- PHOTO GRID -->
  <main class="grid-main">
    <div class="photo-tile-grid" id="photoGrid">

      <!-- Row 1 -->
      <div class="tile" data-caption="Location, Year">
        <div class="tile-ph" style="aspect-ratio:4/3;background:#c8c4be;"></div>
      </div>
      <div class="tile" data-caption="Location, Year">
        <div class="tile-ph" style="aspect-ratio:4/3;background:#b8b2a8;"></div>
      </div>
      <div class="tile" data-caption="Location, Year">
        <div class="tile-ph" style="aspect-ratio:4/3;background:#d2cdc6;"></div>
      </div>
      <div class="tile" data-caption="Location, Year">
        <div class="tile-ph" style="aspect-ratio:4/3;background:#bfbab4;"></div>
      </div>
      <div class="tile" data-caption="Location, Year">
        <div class="tile-ph" style="aspect-ratio:4/3;background:#c4bfb9;"></div>
      </div>

      <!-- Row 2 -->
      <div class="tile" data-caption="Location, Year">
        <div class="tile-ph" style="aspect-ratio:4/3;background:#b5b0aa;"></div>
      </div>
      <div class="tile" data-caption="Location, Year">
        <div class="tile-ph" style="aspect-ratio:4/3;background:#cac5bf;"></div>
      </div>
      <div class="tile" data-caption="Location, Year">
        <div class="tile-ph" style="aspect-ratio:4/3;background:#bdb8b2;"></div>
      </div>
      <div class="tile" data-caption="Location, Year">
        <div class="tile-ph" style="aspect-ratio:4/3;background:#c9c4bd;"></div>
      </div>
      <div class="tile" data-caption="Location, Year">
        <div class="tile-ph" style="aspect-ratio:4/3;background:#b9b4ae;"></div>
      </div>

      <!-- Row 3 -->
      <div class="tile" data-caption="Location, Year">
        <div class="tile-ph" style="aspect-ratio:4/3;background:#d0cbc4;"></div>
      </div>
      <div class="tile" data-caption="Location, Year">
        <div class="tile-ph" style="aspect-ratio:4/3;background:#bab5af;"></div>
      </div>
      <div class="tile" data-caption="Location, Year">
        <div class="tile-ph" style="aspect-ratio:4/3;background:#c6c1ba;"></div>
      </div>
      <div class="tile" data-caption="Location, Year">
        <div class="tile-ph" style="aspect-ratio:4/3;background:#cfcac3;"></div>
      </div>
      <div class="tile" data-caption="Location, Year">
        <div class="tile-ph" style="aspect-ratio:4/3;background:#bcb7b1;"></div>
      </div>

    </div>
  </main>

  <!-- LIGHTBOX -->
  <div id="lightbox" class="lb hidden">
    <div class="lb-bg" id="lbBg"></div>
    <button class="lb-close" id="lbClose">&#x2715;</button>
    <button class="lb-prev" id="lbPrev">&#x2190;</button>
    <div class="lb-center">
      <img id="lbImg" src="" alt="" />
      <p id="lbCaption"></p>
    </div>
    <button class="lb-next" id="lbNext">&#x2192;</button>
  </div>

  <script src="main.js"></script>
</body>
</html>
