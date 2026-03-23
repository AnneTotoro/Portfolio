<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Aiko Hayashi — Portfolio</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@300;400&family=Noto+Serif+JP:wght@300;400;500&display=swap" rel="stylesheet" />
</head>
<body>

  <nav id="nav">
    <a href="index.html" class="nav-name">Aiko Hayashi</a>
    <ul class="nav-links">
      <li><a href="index.html" class="active" data-en="About" data-ja="概要">About</a></li>
      <li><a href="architecture.html" data-en="Architecture" data-ja="建築">Architecture</a></li>
      <li><a href="research.html" data-en="Research" data-ja="研究">Research</a></li>
      <li><a href="photography.html" data-en="Photography" data-ja="写真">Photography</a></li>
    </ul>
    <button class="lang-toggle" id="langToggle">JP</button>
  </nav>

  <main class="about-layout">
    <section class="about-text">
      <h1 class="page-title">Aiko Hayashi</h1>
      <p class="subtitle">
        <span data-en="Architect · Researcher · Photographer" data-ja="建築学生">Architectecture Student</span>
      </p>

      <div class="bio">
        <p><span data-en="I am an architecture student at the Georgia Institute of Technology in the United States. I have strong interests in urban science, urban homogenization, and architectural design, and I am currently based in Tokyo and Atlanta." data-ja="Georgia Institute of Technology, USAに通う建築学生２年。Urban Science,都市の均質化, 建築設計に強い関心があり、現在は東京、アトランタを拠点に活動。">I am a designer and researcher exploring the intersection of built space, human experience, and emerging technology. Currently based in [City], working at [Firm / Institution].</span></p>
        <p><span data-en="My architectural practice focuses on [your focus area]. My research investigates [research topic]. Between projects, I document the world through photography." data-ja="建築実践では[専門分野]を中心に取り組み、研究では[研究テーマ]を探求しています。プロジェクトの合間には、写真で世界を記録しています。">My architectural practice focuses on [your focus area]. My research investigates [research topic]. Between projects, I document the world through photography.</span></p>
      </div>

      <div class="contact-line">
        <a href="your-cv.pdf" target="_blank">CV</a>
        <span class="sep">·</span>
        <a href="https://github.com/yourusername" target="_blank">GitHub</a>
        <span class="sep">·</span>
        <a href="mailto:you@email.com">Email</a>
      </div>
    </section>

    <aside class="about-image">
      <div class="photo-placeholder"><span data-en="Photo" data-ja="写真">Photo</span></div>
    </aside>
  </main>

  <section class="selected-strip">
    <p class="strip-label"><span data-en="Selected Work" data-ja="主な作品">Selected Work</span></p>
    <div class="strip-grid">
      <a href="architecture.html" class="strip-item">
        <div class="strip-thumb"></div>
        <span data-en="Architecture" data-ja="建築">Architecture</span>
      </a>
      <a href="research.html" class="strip-item">
        <div class="strip-thumb"></div>
        <span data-en="Research" data-ja="研究">Research</span>
      </a>
      <a href="photography.html" class="strip-item">
        <div class="strip-thumb"></div>
        <span data-en="Photography" data-ja="写真">Photography</span>
      </a>
    </div>
  </section>

  <footer><span>© <span id="year"></span> Aiko Hayashi</span></footer>
  <script src="main.js"></script>
</body>
</html>
