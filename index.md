<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Aiko Hayashi — Portfolio</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@300;400&family=Noto+Serif+JP:wght@300;400;500&display=swap" rel="stylesheet" />
  <style>
    :root {
      --font-display: 'Bebas Neue', Impact, sans-serif;
    }
    .nav-name,
    .page-title,
    h1, h2, h3 {
      font-family: var(--font-display);
      letter-spacing: 0.08em;
    }
    .awards {
      margin: 2rem 0 1.5rem;
    }
    .awards-title {
      font-size: 13px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 1.25rem;
      color: #888;
    }
    .award-item {
      padding: 0.9rem 0;
      border-top: 0.5px solid #e0e0e0;
    }
    .award-item:last-child {
      border-bottom: 0.5px solid #e0e0e0;
    }
    .award-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 1rem;
      margin-bottom: 0.2rem;
    }
    .award-name {
      font-size: 14px;
      font-weight: 500;
    }
    .award-date {
      font-size: 11px;
      color: #999;
      white-space: nowrap;
      font-family: 'DM Mono', monospace;
    }
    .award-issuer {
      font-size: 11px;
      color: #999;
      margin-bottom: 0.3rem;
      letter-spacing: 0.02em;
    }
    .award-desc {
      font-size: 13px;
      color: #555;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <nav id="nav">
    <a href="index.html" class="nav-name" data-en="Aiko Hayashi" data-ja="林愛子”>Aiko Hayashi</a>
    <ul class="nav-links">
      <li><a href="index.html" class="active" data-en="About" data-ja="About">About</a></li>
      <li><a href="architecture.html" data-en="Works" data-ja="Works">Architecture</a></li>
      <li><a href="research.html" data-en="Research" data-ja="リサーチ">Research</a></li>
      <li><a href="photography.html" data-en="Photography" data-ja="写真">Photography</a></li>
    </ul>
    <button class="lang-toggle" id="langToggle">JP</button>
  </nav>

  <main class="about-layout">
    <section class="about-text">

      <h1 class="page-title">Aiko Hayashi</h1>
      <p class="subtitle">
        <span data-en="Architecture Student" data-ja="建築学生">Architecture Student</span>
      </p>

      <div class="bio">
        <p>
          <span data-en="I am an architecture student at the Georgia Institute of Technology in the United States. I have strong interests in urban science, urban homogenization, and architectural design, and I am currently based in Tokyo and Atlanta." data-ja="Georgia Institute of Technology, USAに通う建築学生。Urban Science,都市の均質化, 建築設計に強い関心があり、現在は東京、アトランタを拠点に活動。">I am an architecture student at the Georgia Institute of Technology in the United States. I have strong interests in urban science, urban homogenization, and architectural design, and I am currently based in Tokyo and Atlanta.</span>
        </p>
      </div>

      <div class="awards">
        <h2 class="awards-title" data-en="Awards" data-ja="受賞歴">Awards</h2>

        <div class="award-item">
          <div class="award-header">
            <span class="award-name" data-en="Yanai Tadashi Foundation Scholar" data-ja="柳井正財団 海外奨学金プログラム">Yanai Tadashi Foundation Scholar</span>
            <span class="award-date">Jul 2024</span>
          </div>
          <p class="award-issuer" data-en="Yanai Tadashi Foundation" data-ja="柳井正財団">Yanai Tadashi Foundation</p>
          <p class="award-desc" data-en="Granted full college funding $10,500 / year." data-ja="柳井正財団より年間$10,500の全額奨学金を授与。">Granted full college funding $10,500 / year.</p>
        </div>

        <div class="award-item">
          <div class="award-header">
            <span class="award-name" data-en="1st Prize — Mainabi Career Koshien 2022" data-ja="マイナビキャリア甲子園2022 優勝">1st Prize — Mainabi Career Koshien 2022</span>
            <span class="award-date">Mar 2023</span>
          </div>
          <p class="award-issuer" data-en="Mainabi Career Koshien" data-ja="マイナビキャリア甲子園">Mainabi Career Koshien</p>
          <p class="award-desc" data-en="Awarded for proposing the most innovative and feasible business idea out of 2,318 teams. Proposed emobby, a cloud service that visualizes a city's individuality and creates spaces for youth." data-ja="2318チームの中で最も革新的かつ実現可能なビジネスアイデアとして優勝。都市の個性を可視化し若者の居場所を創るクラウドサービス「emobby」を提案。">Awarded for proposing the most innovative and feasible business idea out of 2,318 teams. Proposed emobby, a cloud service that visualizes a city's individuality and creates spaces for youth.</p>
        </div>

        <div class="award-item">
          <div class="award-header">
            <span class="award-name" data-en="Gold Medal — DOCOMOMO Japan" data-ja="DOCOMOMO Japan 金賞">Gold Medal — DOCOMOMO Japan</span>
            <span class="award-date">Aug 2021</span>
          </div>
          <p class="award-issuer" data-en="DOCOMOMO Japan" data-ja="DOCOMOMO Japan">DOCOMOMO Japan</p>
          <p class="award-desc" data-en="Awarded for the best architectural design proposal of Daikanyama Hillside Terrace." data-ja="代官山ヒルサイドテラスの建築設計提案において最優秀賞を受賞。">Awarded for the best architectural design proposal of Daikanyama Hillside Terrace.</p>
        </div>
      </div>

      <div class="contact-line">
        <a href="your-cv.pdf" target="_blank">CV</a>
        <span class="sep">·</span>
        <a href="https://github.com/Annetotoro" target="_blank">GitHub</a>
        <span class="sep">·</span>
        <a href="mailto:aiko.hayashi2005@email.com">Email</a>
      </div>

    </section>

    <aside class="about-image">
      <div class="photo-placeholder"><span data-en="Photo" data-ja="写真">Photo</span></div>
    </aside>
  </main>

  <footer><span>© <span id="year"></span> Aiko Hayashi</span></footer>
  <script src="main.js"></script>
</body>
</html>


