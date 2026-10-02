const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../../index.html');

const chunks = [];

chunks.push(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  <title>La Bonelli Pizzaria | Pizza Delivery no Jardim São Luís - SP</title>
  <meta name="description" content="La Bonelli Pizzaria - peça sua pizza favorita pelo delivery no Jardim São Luís, São Paulo. Confira nosso cardápio e faça seu pedido.">
  <meta name="keywords" content="La Bonelli Pizzaria, pizza Jardim São Luís, pizzaria Jardim São Luís, pizza delivery São Paulo, delivery Jardim São Luís, pizzaria São Paulo, pizza delivery SP, La Bonelli Pizza">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#E51A24">

  <!-- Open Graph / Facebook / WhatsApp -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://labonellipizzaria.com.br/">
  <meta property="og:title" content="La Bonelli Pizzaria | Pizza Delivery no Jardim São Luís - SP">
  <meta property="og:description" content="Sabor, qualidade e tradição em cada pizza. Peça sua pizza favorita e receba quentinha no conforto da sua casa no Jardim São Luís.">
  <meta property="og:image" content="assets/images/hero-pizza.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="assets/images/logotipo-novo.png">
  <link rel="apple-touch-icon" href="assets/images/logotipo-novo.png">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,900;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Stylesheet -->
  <link rel="stylesheet" href="css/style.css">

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "La Bonelli Pizzaria",
    "image": "assets/images/logotipo-novo.png",
    "@id": "https://labonellipizzaria.com.br",
    "url": "https://labonellipizzaria.com.br",
    "telephone": "+5511923535049",
    "priceRange": "$$",
    "servesCuisine": "Italian, Pizza",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Geraldo Fraga de Oliveira, 629",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "05847-620",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.6622,
      "longitude": -46.7297
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "18:00",
        "closes": "23:30"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "8"
    }
  }
  </script>
</head>
<body>

  <!-- Top Announcement Bar -->
  <aside class="top-bar">
    <div class="container">
      <div class="top-bar-left">
        <div class="live-status-badge status-badge open">
          <span class="status-dot"></span> Aberto Agora • Fecha às 23:30
        </div>
        <div class="top-info-item">
          <span>🛵 Delivery Jardim São Luís & Região</span>
        </div>
      </div>
      <div class="top-bar-right">
        <a href="tel:+5511923535049" class="top-info-item">
          <span>📞 (11) 92353-5049</span>
        </a>
        <div class="top-info-item">
          <span>📍 R. Geraldo Fraga de Oliveira, 629</span>
        </div>
      </div>
    </div>
  </aside>

  <!-- Site Navigation Header -->
  <header class="site-header">
    <div class="container header-container">
      <a href="#inicio" class="logo-link" aria-label="La Bonelli Pizzaria - Início">
        <img src="assets/images/logotipo-novo.png" alt="Logotipo La Bonelli Pizzaria" class="logo-img">
      </a>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop" aria-label="Menu Principal">
        <a href="#inicio" class="nav-link active">Início</a>
        <a href="#cardapio" class="nav-link">Cardápio</a>
        <a href="#delivery" class="nav-link">Delivery</a>
        <a href="#sobre" class="nav-link">Sobre Nós</a>
        <a href="#horarios" class="nav-link">Horários</a>
        <a href="#avaliacoes" class="nav-link">Avaliações</a>
        <a href="#galeria" class="nav-link">Galeria</a>
        <a href="#localizacao" class="nav-link">Onde Estamos</a>
        <a href="#contato" class="nav-link">Contato</a>
      </nav>

      <!-- Header Actions -->
      <div class="header-actions">
        <button class="cart-toggle-btn" aria-label="Ver Carrinho de Compras" title="Seu Pedido">
          🛒
          <span class="cart-count">0</span>
        </button>
        <a href="#contato" class="btn btn-primary btn-sm">
          <span>🍕 Pedir Agora</span>
        </a>
        <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Abrir Menu de Navegação">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer Menu -->
  <div class="drawer-backdrop" id="drawer-backdrop"></div>
  <aside class="mobile-drawer" id="mobile-drawer" aria-label="Menu Mobile">
    <div class="mobile-nav-links">
      <a href="#inicio" class="mobile-nav-link"><span>🏠 Início</span> ➔</a>
      <a href="#cardapio" class="mobile-nav-link"><span>🍽️ Cardápio</span> ➔</a>
      <a href="#delivery" class="mobile-nav-link"><span>🛵 Delivery</span> ➔</a>
      <a href="#sobre" class="mobile-nav-link"><span>👨‍🍳 Sobre Nós</span> ➔</a>
      <a href="#horarios" class="mobile-nav-link"><span>⏰ Horários</span> ➔</a>
      <a href="#avaliacoes" class="mobile-nav-link"><span>⭐ Avaliações</span> ➔</a>
      <a href="#galeria" class="mobile-nav-link"><span>📸 Galeria de Fotos</span> ➔</a>
      <a href="#localizacao" class="mobile-nav-link"><span>📍 Onde Estamos</span> ➔</a>
      <a href="#contato" class="mobile-nav-link"><span>📱 Fazer Pedido</span> ➔</a>
    </div>
    <div class="drawer-footer">
      <a href="https://wa.me/5511923535049" target="_blank" rel="noopener" class="btn btn-whatsapp">
        <span>💬 WhatsApp (11) 92353-5049</span>
      </a>
      <button class="btn btn-secondary open-cart-action">
        <span>🛒 Ver Meu Pedido</span>
      </button>
    </div>
  </aside>
`);

chunks.push(`
  <main>
    <!-- Hero Section -->
    <section id="inicio" class="hero-section">
      <div class="hero-bg-glow"></div>
      <div class="container hero-grid">
        <div class="hero-content reveal-left">
          <div class="hero-badge-group">
            <span class="hero-rating-badge">⭐ 5,0 de Avaliação no Google (8 avaliações)</span>
            <span class="section-tag green">✨ Delivery Especializado</span>
          </div>

          <h1 class="hero-title">
            A Verdadeira Pizza Artesanal no <span class="highlight">Jardim São Luís</span>
          </h1>

          <p class="hero-subtitle">
            <strong>Sabor, qualidade e tradição em cada pizza.</strong> Massas de fermentação natural, ingredientes selecionados de primeiríssima linha e aquele queijo derretido perfeito direto para a sua mesa!
          </p>

          <div class="hero-pills">
            <div class="hero-pill">🔥 Forno Tradicional</div>
            <div class="hero-pill">🛵 Entrega Rápida & Quentinha</div>
            <div class="hero-pill">🧀 Catupiry & Queijos Nobres</div>
            <div class="hero-pill">🌿 Ingredientes Frescos</div>
          </div>

          <div class="hero-actions">
            <a href="#cardapio" class="btn btn-primary btn-lg">
              <span>🍽️ Ver Cardápio</span>
            </a>
            <a href="https://wa.me/5511923535049?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20na%20La%20Bonelli%20Pizzaria." target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg">
              <span>💬 Pedir no WhatsApp</span>
            </a>
          </div>
        </div>

        <div class="hero-visual reveal-right">
          <div class="hero-image-wrapper">
            <img src="assets/images/hero-pizza.jpg" alt="Deliciosa Pizza Artesanal La Bonelli saindo do forno a lenha" class="hero-main-img">
            
            <div class="hero-floating-card top-left">
              <div class="card-icon-box">🍕</div>
              <div class="card-text-box">
                <h4>100% Artesanal</h4>
                <p>Massa leve e crocante</p>
              </div>
            </div>

            <div class="hero-floating-card bottom-right">
              <div class="card-icon-box green">🛵</div>
              <div class="card-text-box">
                <h4>Delivery Expresso</h4>
                <p>Média de 30 a 45 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Strip -->
    <section class="features-strip">
      <div class="container">
        <div class="features-grid">
          <div class="feature-item reveal-on-scroll stagger-1">
            <div class="feature-icon">🍕</div>
            <div class="feature-info">
              <h3>Massa de Longa Fermentação</h3>
              <p>Maturada por até 48h, proporcionando extrema leveza, crocância e fácil digestão.</p>
            </div>
          </div>

          <div class="feature-item reveal-on-scroll stagger-2">
            <div class="feature-icon">🧀</div>
            <div class="feature-info">
              <h3>Ingredientes Selecionados</h3>
              <p>Trabalhamos apenas com marcas renomadas, Catupiry original e queijos de alta qualidade.</p>
            </div>
          </div>

          <div class="feature-item reveal-on-scroll stagger-3">
            <div class="feature-icon">🛵</div>
            <div class="feature-info">
              <h3>Delivery Especializado</h3>
              <p>Embalagens térmicas especiais que garantem a pizza quentinha e com a borda crocante.</p>
            </div>
          </div>

          <div class="feature-item reveal-on-scroll stagger-4">
            <div class="feature-icon">⭐</div>
            <div class="feature-info">
              <h3>Nota Máxima 5.0 Estrelas</h3>
              <p>Excelência comprovada pela satisfação unânime dos nossos clientes no Google.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu Section -->
    <section id="cardapio" class="section-padding menu-section">
      <div class="container">
        <div class="section-header text-center reveal-on-scroll">
          <span class="section-tag gold">📋 Escolha sua Favorita</span>
          <h2 class="section-title">Nosso <span class="red">Cardápio</span> Artesanal</h2>
          <p class="section-desc">
            Pizzas preparadas com receitas tradicionais, molho de tomate fresco e recheios generosos. Escolha os tamanhos Pequena, Média ou Grande!
          </p>
        </div>

        <div class="menu-controls reveal-on-scroll">
          <div class="category-tabs" role="tablist">
            <button class="category-tab active" data-category="all" role="tab">🔥 Todas</button>
            <button class="category-tab" data-category="tradicionais" role="tab">🍕 Tradicionais</button>
            <button class="category-tab" data-category="especiais" role="tab">✨ Especiais</button>
            <button class="category-tab" data-category="vegetarianas" role="tab">🥦 Vegetarianas</button>
            <button class="category-tab" data-category="doces" role="tab">🍫 Sobremesas</button>
            <button class="category-tab" data-category="bebidas" role="tab">🥤 Bebidas</button>
          </div>

          <div class="menu-search-box">
            <span class="menu-search-icon">🔍</span>
            <input type="text" id="menu-search-input" class="menu-search-input" placeholder="Buscar por sabor ou ingrediente...">
          </div>
        </div>

        <!-- Dynamic Menu Grid -->
        <div class="menu-grid" id="menu-grid">
          <!-- Populated by js/main.js -->
        </div>
      </div>
    </section>
`);

chunks.push(`
    <!-- Delivery Section -->
    <section id="delivery" class="section-padding delivery-section">
      <div class="container">
        <div class="delivery-grid">
          <div class="delivery-visual reveal-left">
            <div class="delivery-img-wrapper">
              <img src="assets/images/delivery-bag.jpg" data-src="assets/images/delivery-bag.jpg" alt="Entregador La Bonelli Pizzaria com embalagem térmica" class="lazy-load" loading="lazy">
            </div>
          </div>

          <div class="delivery-content reveal-right">
            <span class="section-tag green">🛵 Pizza na sua casa!</span>
            <h2 class="section-title">Delivery Rápido no <span class="red">Jardim São Luís</span></h2>
            <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 1.5rem;">
              Bateu aquela vontade irresistível de pizza? Faça seu pedido em poucos cliques e receba no aconchego do seu lar com todo o capricho da La Bonelli.
            </p>

            <div class="delivery-steps">
              <div class="step-card">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h4>Escolha no Cardápio</h4>
                  <p>Selecione suas pizzas favoritas, escolha os tamanhos e personalize com bordas recheadas.</p>
                </div>
              </div>

              <div class="step-card">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h4>Envie Direto pelo WhatsApp</h4>
                  <p>Nosso formulário compila o pedido completo e envia para o WhatsApp da pizzaria instantaneamente.</p>
                </div>
              </div>

              <div class="step-card">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h4>Receba Quentinho</h4>
                  <p>Nossos entregadores levam sua pizza em mochilas térmicas para manter o calor e a crocância.</p>
                </div>
              </div>
            </div>

            <div class="payment-methods-strip">
              <span>💳 Formas de Pagamento:</span>
              <div class="payment-tags">
                <span class="pay-tag">PIX Instantâneo</span>
                <span class="pay-tag">Cartão de Crédito</span>
                <span class="pay-tag">Cartão de Débito</span>
                <span class="pay-tag">Dinheiro (com troco)</span>
              </div>
            </div>

            <div style="margin-top: 2rem;">
              <a href="#contato" class="btn btn-whatsapp btn-lg">
                <span>📱 Fazer Meu Pedido Agora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section id="sobre" class="section-padding about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-images-composition reveal-left">
            <img src="assets/images/chef-pizzaiolo.jpg" data-src="assets/images/chef-pizzaiolo.jpg" alt="Chef Pizzaiolo preparando pizza artesanal" class="about-main-img lazy-load" loading="lazy">
            <img src="assets/images/forno-lenha.jpg" data-src="assets/images/forno-lenha.jpg" alt="Pizza assando no forno a lenha tradicional" class="about-sub-img lazy-load" loading="lazy">
          </div>

          <div class="about-story reveal-right">
            <span class="section-tag gold">🇮🇹 Nossa História & Tradição</span>
            <h2 class="section-title">A Paixão por Criar a <span class="red">Melhor Pizza</span></h2>
            
            <p>
              A <strong>La Bonelli Pizzaria</strong> nasceu da autêntica paixão pela culinária italiana aliada ao caloroso gosto paulistano por pizzas de qualidade inquestionável. Localizada no coração do Jardim São Luís, nos dedicamos diariamente a entregar mais do que uma refeição: entregamos momentos inesquecíveis em família e entre amigos.
            </p>

            <p>
              Nosso segredo está na paciência e no respeito aos processos tradicionais. Nossas massas passam por um processo de <strong>longa fermentação</strong>, resultando em uma borda aerada, crocante por fora e incrivelmente macia por dentro. Cada ingrediente é minuciosamente selecionado, desde os tomates frescos até os queijos artesanais.
            </p>

            <div class="about-stats-grid">
              <div class="stat-item">
                <div class="stat-num">5.0 ⭐</div>
                <div class="stat-label">Google Avaliações</div>
              </div>
              <div class="stat-item">
                <div class="stat-num">+30</div>
                <div class="stat-label">Sabores Artesanais</div>
              </div>
              <div class="stat-item">
                <div class="stat-num">100%</div>
                <div class="stat-label">Satisfação Garantida</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Schedule & Business Hours Section -->
    <section id="horarios" class="section-padding schedule-section">
      <div class="container">
        <div class="schedule-grid">
          <div class="schedule-info reveal-left">
            <span class="section-tag">⏰ Atendimento</span>
            <h2 class="section-title">Horário de <span class="gold">Funcionamento</span></h2>
            <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 1.5rem;">
              Estamos prontos para atender você todos os dias com pizzas fresquinhas saindo do forno até tarde da noite.
            </p>

            <div style="margin-bottom: 2rem;">
              <div class="live-status-badge status-badge open" style="font-size: 0.95rem; padding: 0.5rem 1.25rem;">
                <span class="status-dot"></span> Aberto Agora • Fecha às 23:30
              </div>
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="tel:+5511923535049" class="btn btn-secondary">
                <span>📞 Ligar: (11) 92353-5049</span>
              </a>
              <a href="#contato" class="btn btn-primary">
                <span>🍕 Fazer Pedido</span>
              </a>
            </div>
          </div>

          <div class="schedule-card reveal-right">
            <h3 style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--text-cream); margin-bottom: 1.25rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.75rem;">
              🗓️ Horários da Semana
            </h3>
            <table class="schedule-table">
              <tbody>
                <tr><td class="day">Segunda-feira</td><td class="hours">18:00 às 23:30</td></tr>
                <tr><td class="day">Terça-feira</td><td class="hours">18:00 às 23:30</td></tr>
                <tr><td class="day">Quarta-feira</td><td class="hours">18:00 às 23:30</td></tr>
                <tr><td class="day">Quinta-feira</td><td class="hours">18:00 às 23:30</td></tr>
                <tr><td class="day">Sexta-feira</td><td class="hours">18:00 às 23:30</td></tr>
                <tr><td class="day">Sábado</td><td class="hours">18:00 às 23:30</td></tr>
                <tr><td class="day">Domingo</td><td class="hours">18:00 às 23:30</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
`);

chunks.push(`
    <!-- Reviews Section -->
    <section id="avaliacoes" class="section-padding reviews-section">
      <div class="container">
        <div class="section-header text-center reveal-on-scroll">
          <span class="section-tag gold">💬 Depoimentos Reais</span>
          <h2 class="section-title">O que nossos <span class="gold">Clientes Dizem</span></h2>
          <p class="section-desc">
            A La Bonelli Pizzaria possui avaliação impecável de 5.0 estrelas no Google. Veja os relatos de quem já experimentou e aprovou!
          </p>
        </div>

        <div class="reviews-summary-card reveal-on-scroll">
          <div class="reviews-summary-left">
            <div class="score-big">5.0</div>
            <div>
              <div class="stars-wrapper">★★★★★</div>
              <div style="font-weight: 700; color: var(--text-cream); font-size: 1.1rem;">Avaliação Máxima no Google</div>
              <div style="color: var(--text-muted); font-size: 0.85rem;">Baseado em 8 avaliações verificadas de clientes</div>
            </div>
          </div>
          <div>
            <a href="https://maps.google.com/?q=La+Bonelli+Pizzaria+Jardim+Sao+Luis+Sao+Paulo" target="_blank" rel="noopener" class="btn btn-outline-gold">
              <span>⭐ Ver no Google Maps</span>
            </a>
          </div>
        </div>

        <div class="reviews-grid">
          <div class="review-card reveal-on-scroll stagger-1">
            <div>
              <div class="stars-wrapper" style="font-size: 1rem; margin-bottom: 0.75rem;">★★★★★</div>
              <p class="review-text">
                "Melhor pizza do Jardim São Luís! A massa é super leve e crocante, recheio muito bem caprichado e o Catupiry é original mesmo. Chegou super quente em menos de 35 minutos!"
              </p>
            </div>
            <div class="review-author">
              <div class="author-avatar">MR</div>
              <div>
                <div class="author-name">Marcos Ribeiro</div>
                <div class="review-source"><span>Google Reviews • Cliente Verificado</span></div>
              </div>
            </div>
          </div>

          <div class="review-card reveal-on-scroll stagger-2">
            <div>
              <div class="stars-wrapper" style="font-size: 1rem; margin-bottom: 0.75rem;">★★★★★</div>
              <p class="review-text">
                "Atendimento nota 10 pelo WhatsApp! A pizza de Quatro Queijos e a doce de Nutella com Morango estavam divinas. Viramos clientes fiéis da La Bonelli aqui em casa."
              </p>
            </div>
            <div class="review-author">
              <div class="author-avatar" style="background: linear-gradient(135deg, #009246, #F5A623);">CS</div>
              <div>
                <div class="author-name">Camila Silva</div>
                <div class="review-source"><span>Google Reviews • Cliente Verificado</span></div>
              </div>
            </div>
          </div>

          <div class="review-card reveal-on-scroll stagger-3">
            <div>
              <div class="stars-wrapper" style="font-size: 1rem; margin-bottom: 0.75rem;">★★★★★</div>
              <p class="review-text">
                "Sensacional! A massa no ponto perfeito, molho de tomate caseiro saborosíssimo e entrega muito rápida. Recomendo de olhos fechados para quem quer pizza de verdade."
              </p>
            </div>
            <div class="review-author">
              <div class="author-avatar" style="background: linear-gradient(135deg, #E51A24, #990B12);">RA</div>
              <div>
                <div class="author-name">Rodrigo Almeida</div>
                <div class="review-source"><span>Google Reviews • Cliente Verificado</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="galeria" class="section-padding gallery-section">
      <div class="container">
        <div class="section-header text-center reveal-on-scroll">
          <span class="section-tag">📸 Conheça a La Bonelli</span>
          <h2 class="section-title">Nossa <span class="red">Galeria</span> de Fotos</h2>
          <p class="section-desc">
            Confira alguns dos nossos pratos, ingredientes frescos e momentos do preparo artesanal. Clique nas fotos para ampliar!
          </p>
        </div>

        <div class="gallery-grid" id="gallery-grid">
          <!-- Populated by js/main.js -->
        </div>
      </div>
    </section>

    <!-- Location Section -->
    <section id="localizacao" class="section-padding location-section">
      <div class="container">
        <div class="section-header text-center reveal-on-scroll">
          <span class="section-tag green">📍 Onde Estamos</span>
          <h2 class="section-title">Nossa <span class="gold">Localização</span></h2>
          <p class="section-desc">
            Localizada no Jardim São Luís em São Paulo, atendendo delivery com agilidade para toda a região.
          </p>
        </div>

        <div class="location-grid">
          <div class="location-info-card reveal-left">
            <div>
              <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--text-cream); margin-bottom: 0.5rem;">
                La Bonelli Pizzaria
              </h3>
              <p style="color: var(--accent-gold); font-weight: 700; font-size: 0.95rem;">
                Delivery de Pizza • Atendimento Rápido
              </p>

              <div class="location-detail-list">
                <div class="loc-item">
                  <div class="loc-icon">🏠</div>
                  <div class="loc-text">
                    <h4>Endereço</h4>
                    <p>R. Geraldo Fraga de Oliveira, 629<br>Jardim São Luís, São Paulo - SP<br>CEP 05847-620</p>
                  </div>
                </div>

                <div class="loc-item">
                  <div class="loc-icon">📞</div>
                  <div class="loc-text">
                    <h4>Telefone / WhatsApp</h4>
                    <p>(11) 92353-5049</p>
                  </div>
                </div>

                <div class="loc-item">
                  <div class="loc-icon">🌐</div>
                  <div class="loc-text">
                    <h4>Código Plus Maps</h4>
                    <p>87W5+MQ Jardim São Luís, São Paulo - SP</p>
                  </div>
                </div>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem;">
              <a href="https://maps.google.com/?q=R.+Geraldo+Fraga+de+Oliveira,+629+-+Jardim+S%C3%A3o+Lu%C3%ADs,+S%C3%A3o+Paulo+-+SP,+05847-620" target="_blank" rel="noopener" class="btn btn-primary">
                <span>🗺️ Como Chegar (Google Maps)</span>
              </a>
              <button id="copy-address-btn" class="btn btn-secondary">
                <span>📋 Copiar Endereço Completo</span>
              </button>
            </div>
          </div>

          <div class="map-wrapper reveal-right">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.498877685601!2d-46.73231462377045!3d-23.662283978729544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5180f970233b%3A0x8e8eb0ce972c353a!2sR.%20Geraldo%20Fraga%20de%20Oliveira%2C%20629%20-%20Jardim%20S%C3%A3o%20Lu%C3%ADs%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005847-620!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="600" 
              height="450" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="Mapa de Localização da La Bonelli Pizzaria">
            </iframe>
          </div>
        </div>
      </div>
    </section>
`);

chunks.push(`
    <!-- Interactive Order & Contact Section (WhatsApp Compiler) -->
    <section id="contato" class="section-padding contact-section">
      <div class="container">
        <div class="section-header text-center reveal-on-scroll">
          <span class="section-tag gold">📱 Pedido Rápido & Contato</span>
          <h2 class="section-title">Envie seu <span class="red">Pedido para o WhatsApp</span></h2>
          <p class="section-desc">
            Preencha os dados abaixo e nosso sistema compilará todos os itens e informações diretamente para o WhatsApp oficial da pizzaria!
          </p>
        </div>

        <div class="contact-card-container reveal-zoom">
          <div class="form-tabs-header">
            <button class="form-tab-btn active" data-tab="tab-order">
              <span>🍕 Montar Pedido Delivery</span>
            </button>
            <button class="form-tab-btn" data-tab="tab-message">
              <span>💬 Dúvidas & Outros Assuntos</span>
            </button>
          </div>

          <div class="form-body">
            <!-- Order Compilation Tab -->
            <div id="tab-order" class="form-tab-content active">
              <form id="whatsapp-order-form">
                
                <!-- Client Info -->
                <div class="form-grid-2">
                  <div class="form-group">
                    <label class="form-label" for="order-name">
                      Seu Nome Completo <span class="required">*</span>
                    </label>
                    <input type="text" id="order-name" class="form-control" placeholder="Ex: João da Silva" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="order-phone">
                      WhatsApp / Telefone <span class="required">*</span>
                    </label>
                    <input type="tel" id="order-phone" class="form-control" placeholder="Ex: (11) 99999-9999" required>
                  </div>
                </div>

                <!-- Service Type -->
                <div class="form-group">
                  <label class="form-label">Tipo de Atendimento:</label>
                  <div class="radio-pills">
                    <label class="radio-pill-label">
                      <input type="radio" name="order-delivery-type" value="delivery" checked>
                      <span>🛵 Entrega (Delivery)</span>
                    </label>
                    <label class="radio-pill-label">
                      <input type="radio" name="order-delivery-type" value="retirada">
                      <span>🏪 Retirada no Balcão</span>
                    </label>
                  </div>
                </div>

                <!-- Delivery Address Group -->
                <div id="form-address-group" class="form-delivery-address">
                  <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-cream); margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.4rem;">
                    📍 Endereço para Entrega
                  </h4>
                  
                  <div class="form-grid-2">
                    <div class="form-group" style="margin-bottom: 0.75rem;">
                      <label class="form-label" for="order-street">Rua / Avenida <span class="required">*</span></label>
                      <input type="text" id="order-street" class="form-control" placeholder="Ex: Rua Geraldo Fraga de Oliveira">
                    </div>
                    <div class="form-group" style="margin-bottom: 0.75rem;">
                      <label class="form-label" for="order-number">Número <span class="required">*</span></label>
                      <input type="text" id="order-number" class="form-control" placeholder="Ex: 629">
                    </div>
                  </div>

                  <div class="form-grid-3">
                    <div class="form-group" style="margin-bottom: 0.75rem;">
                      <label class="form-label" for="order-neighborhood">Bairro</label>
                      <input type="text" id="order-neighborhood" class="form-control" value="Jardim São Luís">
                    </div>
                    <div class="form-group" style="margin-bottom: 0.75rem;">
                      <label class="form-label" for="order-complement">Complemento / Apto</label>
                      <input type="text" id="order-complement" class="form-control" placeholder="Ex: Bloco B Apto 42">
                    </div>
                    <div class="form-group" style="margin-bottom: 0.75rem;">
                      <label class="form-label" for="order-cep">CEP</label>
                      <input type="text" id="order-cep" class="form-control" value="05847-620">
                    </div>
                  </div>

                  <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label" for="order-reference">Ponto de Referência</label>
                    <input type="text" id="order-reference" class="form-control" placeholder="Ex: Próximo à padaria / portão preto">
                  </div>
                </div>

                <!-- Order Items Selected Summary -->
                <div class="order-items-preview-box">
                  <div class="preview-items-title">
                    <span>🛒 Resumo dos Itens Selecionados:</span>
                    <a href="#cardapio" style="font-size: 0.8rem; color: var(--primary-red); font-weight: 700; text-decoration: underline;">
                      + Adicionar Mais Itens do Cardápio
                    </a>
                  </div>
                  <div id="order-items-preview-list" class="preview-list">
                    <!-- Populated automatically from cart -->
                  </div>
                </div>

                <!-- Manual Items / Extra Notes -->
                <div class="form-group">
                  <label class="form-label" for="order-manual-items">
                    Sabores ou Bebidas Adicionais (Caso queira digitar):
                  </label>
                  <textarea id="order-manual-items" class="form-control" placeholder="Ex: 1x Pizza de Calabresa Grande sem cebola, 1x Coca-Cola 2L"></textarea>
                </div>

                <!-- Payment Method -->
                <div class="form-group">
                  <label class="form-label">Forma de Pagamento:</label>
                  <div class="radio-pills">
                    <label class="radio-pill-label">
                      <input type="radio" name="order-payment" value="pix" checked>
                      <span>⚡ PIX</span>
                    </label>
                    <label class="radio-pill-label">
                      <input type="radio" name="order-payment" value="cartao_credito">
                      <span>💳 Cartão Crédito</span>
                    </label>
                    <label class="radio-pill-label">
                      <input type="radio" name="order-payment" value="cartao_debito">
                      <span>💳 Cartão Débito</span>
                    </label>
                    <label class="radio-pill-label">
                      <input type="radio" name="order-payment" value="dinheiro">
                      <span>💵 Dinheiro</span>
                    </label>
                  </div>
                </div>

                <!-- Change input for cash -->
                <div id="form-change-group" class="form-group" style="display: none;">
                  <label class="form-label" for="order-change-val">Precisa de troco para quanto?</label>
                  <input type="text" id="order-change-val" class="form-control" placeholder="Ex: R$ 100,00">
                </div>

                <!-- General Observations -->
                <div class="form-group">
                  <label class="form-label" for="order-obs">Observações Gerais para a Cozinha ou Entrega:</label>
                  <input type="text" id="order-obs" class="form-control" placeholder="Ex: Tocar o interfone, campainha não funciona, massa bem assada...">
                </div>

                <!-- Submit Button -->
                <button type="submit" class="btn btn-whatsapp whatsapp-submit-btn">
                  <span>📱 Enviar Pedido Compilado para o WhatsApp (11) 92353-5049</span>
                </button>
              </form>
            </div>

            <!-- General Message Tab -->
            <div id="tab-message" class="form-tab-content">
              <form id="general-contact-form">
                <div class="form-grid-2">
                  <div class="form-group">
                    <label class="form-label" for="contact-name">Seu Nome <span class="required">*</span></label>
                    <input type="text" id="contact-name" class="form-control" placeholder="Seu nome" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="contact-phone">WhatsApp / Telefone</label>
                    <input type="tel" id="contact-phone" class="form-control" placeholder="(11) 99999-9999">
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label" for="contact-subject">Assunto:</label>
                  <select id="contact-subject" class="form-control">
                    <option value="Dúvida sobre o Cardápio">Dúvida sobre o Cardápio</option>
                    <option value="Área de Entrega e Taxas">Área de Entrega e Taxas</option>
                    <option value="Encomendas para Eventos / Aniversários">Encomendas para Eventos / Aniversários</option>
                    <option value="Elogio ou Sugestão">Elogio ou Sugestão</option>
                    <option value="Outro Assunto">Outro Assunto</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="contact-message">Sua Mensagem <span class="required">*</span></label>
                  <textarea id="contact-message" class="form-control" placeholder="Digite sua dúvida ou mensagem aqui..." required></textarea>
                </div>

                <button type="submit" class="btn btn-whatsapp whatsapp-submit-btn">
                  <span>💬 Enviar Mensagem via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call To Action Banner -->
    <section class="section-padding" style="background: linear-gradient(135deg, #E51A24 0%, #8F0A10 100%); text-align: center; position: relative; overflow: hidden;">
      <div class="container reveal-on-scroll">
        <h2 style="font-family: var(--font-serif); font-size: 2.8rem; font-weight: 900; color: #FFFFFF; margin-bottom: 1rem;">
          🍕 A Fome Bateu? Não Fique Só Olhando!
        </h2>
        <p style="font-size: 1.25rem; color: #FFE4E6; max-width: 680px; margin: 0 auto 2rem;">
          Escolha suas pizzas favoritas agora mesmo e receba com a melhor qualidade e rapidez no Jardim São Luís e região!
        </p>
        <a href="#contato" class="btn btn-secondary btn-lg" style="background: #FFFFFF; color: #E51A24; font-size: 1.1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.4);">
          <span>🛵 FAZER MEU PEDIDO AGORA</span>
        </a>
      </div>
    </section>
  </main>
`);

chunks.push(`
  <!-- Shopping Cart Drawer -->
  <div class="cart-drawer" id="cart-drawer">
    <div class="cart-header">
      <h3><span>🛒</span> Seu Pedido</h3>
      <button class="cart-close-btn" id="cart-close-btn" aria-label="Fechar Carrinho">✕</button>
    </div>
    
    <div class="cart-body" id="cart-items-body">
      <!-- Injected by js/main.js -->
    </div>

    <div class="cart-footer">
      <div class="cart-summary-row">
        <span>Subtotal dos Produtos:</span>
        <span id="cart-subtotal-val" style="font-weight: 700; color: var(--text-cream);">R$ 0,00</span>
      </div>
      <div class="cart-summary-row">
        <span>Taxa de Entrega Estimada:</span>
        <span style="font-weight: 700; color: #10B981;">R$ 5,00</span>
      </div>
      <div class="cart-summary-row total">
        <span>Total do Pedido:</span>
        <span class="val" id="cart-total-val">R$ 0,00</span>
      </div>

      <a href="#contato" class="btn btn-whatsapp" onclick="closeCartDrawer()" style="width: 100%; padding: 1rem;">
        <span>✅ Concluir Pedido no WhatsApp</span>
      </a>
    </div>
  </div>

  <!-- Product Customization Modal -->
  <div class="modal-overlay" id="customize-modal">
    <div class="modal-content">
      <button class="modal-close-btn" onclick="closeCustomizeModal()" aria-label="Fechar Modal">✕</button>
      <img id="modal-item-img" src="assets/images/pizza-calabresa.jpg" alt="Pizza" class="modal-hero-img">
      
      <div class="modal-body">
        <h3 id="modal-item-title" class="modal-title">Nome da Pizza</h3>
        <p id="modal-item-desc" class="modal-desc">Descrição dos ingredientes da pizza.</p>

        <!-- Size Options -->
        <div class="modal-option-group">
          <div class="modal-option-title">
            <span>1. Escolha o Tamanho</span>
            <span class="option-badge-req">Obrigatório</span>
          </div>
          <div id="modal-sizes-container">
            <!-- Injected dynamically -->
          </div>
        </div>

        <!-- Crust Options -->
        <div class="modal-option-group" id="modal-crust-container">
          <div class="modal-option-title">
            <span>2. Borda Recheada (Opcional)</span>
          </div>
          <div class="custom-checkbox-row">
            <label><input type="radio" name="modal-crust" value="none" data-price="0" checked onchange="recalcModalPrice()"> <span>Sem borda recheada</span></label>
            <span class="option-add-price">Grátis</span>
          </div>
          <div class="custom-checkbox-row">
            <label><input type="radio" name="modal-crust" value="catupiry" data-price="10.00" onchange="recalcModalPrice()"> <span>Borda de Catupiry Original</span></label>
            <span class="option-add-price">+ R$ 10,00</span>
          </div>
          <div class="custom-checkbox-row">
            <label><input type="radio" name="modal-crust" value="cheddar" data-price="10.00" onchange="recalcModalPrice()"> <span>Borda de Cheddar Cremoso</span></label>
            <span class="option-add-price">+ R$ 10,00</span>
          </div>
          <div class="custom-checkbox-row">
            <label><input type="radio" name="modal-crust" value="chocolate" data-price="12.00" onchange="recalcModalPrice()"> <span>Borda de Chocolate ao Leite</span></label>
            <span class="option-add-price">+ R$ 12,00</span>
          </div>
        </div>

        <!-- Extras -->
        <div class="modal-option-group">
          <div class="modal-option-title">
            <span>3. Adicionais Especiais (Opcional)</span>
          </div>
          <div class="custom-checkbox-row">
            <label><input type="checkbox" name="modal-extra" value="bacon" data-price="6.00" onchange="recalcModalPrice()"> <span>Bacon Crocante em Cubos</span></label>
            <span class="option-add-price">+ R$ 6,00</span>
          </div>
          <div class="custom-checkbox-row">
            <label><input type="checkbox" name="modal-extra" value="alho" data-price="4.00" onchange="recalcModalPrice()"> <span>Alho Frito Dourado</span></label>
            <span class="option-add-price">+ R$ 4,00</span>
          </div>
          <div class="custom-checkbox-row">
            <label><input type="checkbox" name="modal-extra" value="queijo" data-price="8.00" onchange="recalcModalPrice()"> <span>Mozzarella Extra</span></label>
            <span class="option-add-price">+ R$ 8,00</span>
          </div>
        </div>

        <!-- Notes -->
        <div class="modal-option-group">
          <div class="modal-option-title">
            <span>4. Observações do Item</span>
          </div>
          <input type="text" id="modal-item-notes" class="form-control" placeholder="Ex: Sem cebola, massa bem crocante, cortar em 12 fatias...">
        </div>
      </div>

      <div class="modal-footer">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div class="qty-control">
            <button class="qty-btn" onclick="adjustModalQty(-1)">-</button>
            <span class="qty-val" id="modal-qty-val">1</span>
            <button class="qty-btn" onclick="adjustModalQty(1)">+</button>
          </div>
          <div>
            <div style="font-size: 0.72rem; color: var(--text-dim); text-transform: uppercase; font-weight: 700;">Total:</div>
            <div id="modal-total-price" style="font-size: 1.3rem; font-weight: 800; color: var(--accent-gold);">R$ 0,00</div>
          </div>
        </div>
        <button class="btn btn-primary" onclick="addCurrentModalToCart()">
          <span>Adicionar ao Pedido</span> 🍕
        </button>
      </div>
    </div>
  </div>

  <!-- Lightbox Modal -->
  <div class="lightbox-modal" id="lightbox-modal">
    <button class="lightbox-close" id="lightbox-close" aria-label="Fechar Imagem">✕</button>
    <div class="lightbox-img-wrap">
      <img id="lightbox-img" src="" alt="Foto Ampliada" class="lightbox-img">
      <div id="lightbox-caption" class="lightbox-caption"></div>
    </div>
  </div>

  <!-- Floating Actions (WhatsApp & Back to Top) -->
  <div class="floating-actions">
    <button class="back-to-top" id="back-to-top" aria-label="Voltar ao Topo" title="Voltar ao Topo">▲</button>
    <a href="https://wa.me/5511923535049?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20na%20La%20Bonelli%20Pizzaria." target="_blank" rel="noopener" class="floating-whatsapp" aria-label="Fazer Pedido no WhatsApp" title="Pedir no WhatsApp">
      💬
    </a>
  </div>

  <!-- Toast Container -->
  <div class="toast-container" id="toast-container"></div>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="assets/images/logotipo-novo.png" alt="La Bonelli Pizzaria" class="footer-logo">
          <p>
            A verdadeira pizza artesanal no Jardim São Luís. Massas de longa fermentação, molhos especiais e ingredientes de excelência para entregar a melhor experiência gastronômica na sua casa.
          </p>
          <div class="footer-social-links">
            <a href="https://wa.me/5511923535049" target="_blank" rel="noopener" class="social-btn" title="WhatsApp">📱</a>
            <a href="https://instagram.com" target="_blank" rel="noopener" class="social-btn" title="Instagram">📸</a>
            <a href="https://facebook.com" target="_blank" rel="noopener" class="social-btn" title="Facebook">👥</a>
          </div>
        </div>

        <div>
          <h4 class="footer-title">Links Rápidos</h4>
          <div class="footer-links">
            <a href="#inicio">Início</a>
            <a href="#cardapio">Cardápio Completo</a>
            <a href="#delivery">Como Funciona o Delivery</a>
            <a href="#sobre">Nossa História</a>
            <a href="#avaliacoes">Avaliações dos Clientes</a>
            <a href="#galeria">Galeria de Fotos</a>
            <a href="#localizacao">Onde Estamos</a>
            <a href="#contato">Fazer Pedido</a>
          </div>
        </div>

        <div>
          <h4 class="footer-title">Atendimento</h4>
          <div class="footer-contact-items">
            <div class="footer-contact-item">
              <span class="icon">⏰</span>
              <div>
                <strong>Segunda a Domingo</strong><br>
                18:00 às 23:30
              </div>
            </div>
            <div class="footer-contact-item">
              <span class="icon">📞</span>
              <div>
                <strong>Telefone / Pedidos</strong><br>
                (11) 92353-5049
              </div>
            </div>
            <div class="footer-contact-item">
              <span class="icon">📍</span>
              <div>
                <strong>Localização</strong><br>
                R. Geraldo Fraga de Oliveira, 629<br>
                Jardim São Luís - São Paulo/SP
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 class="footer-title">Formas de Pagamento</h4>
          <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1rem;">
            Aceitamos as principais bandeiras e métodos modernos para sua comodidade:
          </p>
          <div class="payment-tags" style="gap: 0.6rem;">
            <span class="pay-tag">PIX</span>
            <span class="pay-tag">Mastercard</span>
            <span class="pay-tag">Visa</span>
            <span class="pay-tag">Elo</span>
            <span class="pay-tag">Hipercard</span>
            <span class="pay-tag">Alelo Refeição</span>
            <span class="pay-tag">Sodexo</span>
            <span class="pay-tag">Dinheiro</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          © 2026 <strong>La Bonelli Pizzaria</strong>. Todos os direitos reservados.
        </div>
        <div>
          Delivery de Pizza no Jardim São Luís e Região - São Paulo / SP
        </div>
      </div>
    </div>
  </footer>

  <!-- Main JavaScript File -->
  <script src="js/main.js"></script>
</body>
</html>
`);

fs.writeFileSync(targetPath, chunks.join(''), 'utf8');
console.log('Successfully written index.html!');
