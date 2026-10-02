const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../');

// Shared Header Component
function getHeader(activePage = 'inicio') {
  return `
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
      <a href="index.html" class="logo-link" aria-label="La Bonelli Pizzaria - Início">
        <img src="assets/images/logotipo-novo.png" alt="Logotipo La Bonelli Pizzaria" class="logo-img">
      </a>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop" aria-label="Menu Principal">
        <a href="index.html" class="nav-link ${activePage === 'inicio' ? 'active' : ''}">Início</a>
        <a href="cardapio.html" class="nav-link ${activePage === 'cardapio' ? 'active' : ''}">Cardápio</a>
        <a href="delivery.html" class="nav-link ${activePage === 'delivery' ? 'active' : ''}">Delivery</a>
        <a href="sobre.html" class="nav-link ${activePage === 'sobre' ? 'active' : ''}">Sobre Nós</a>
        <a href="avaliacoes.html" class="nav-link ${activePage === 'avaliacoes' ? 'active' : ''}">Avaliações</a>
        <a href="index.html#galeria" class="nav-link">Galeria</a>
        <a href="index.html#localizacao" class="nav-link">Onde Estamos</a>
        <a href="contato.html" class="nav-link ${activePage === 'contato' ? 'active' : ''}">Contato</a>
      </nav>

      <!-- Header Actions -->
      <div class="header-actions">
        <button class="cart-toggle-btn" aria-label="Ver Carrinho de Compras" title="Seu Pedido">
          🛒
          <span class="cart-count">0</span>
        </button>
        <a href="contato.html#fazer-pedido" class="btn btn-primary btn-sm">
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
      <a href="index.html" class="mobile-nav-link"><span>🏠 Início</span> ➔</a>
      <a href="cardapio.html" class="mobile-nav-link"><span>🍽️ Cardápio Completo</span> ➔</a>
      <a href="delivery.html" class="mobile-nav-link"><span>🛵 Delivery & Entregas</span> ➔</a>
      <a href="sobre.html" class="mobile-nav-link"><span>👨‍🍳 Sobre Nós</span> ➔</a>
      <a href="avaliacoes.html" class="mobile-nav-link"><span>⭐ Avaliações (5.0)</span> ➔</a>
      <a href="index.html#galeria" class="mobile-nav-link"><span>📸 Galeria de Fotos</span> ➔</a>
      <a href="index.html#localizacao" class="mobile-nav-link"><span>📍 Onde Estamos</span> ➔</a>
      <a href="contato.html" class="mobile-nav-link"><span>📱 Fazer Pedido</span> ➔</a>
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
  `;
}

// Shared Footer Component
function getFooter() {
  return `
  <!-- Shopping Cart Drawer -->
  <div class="cart-drawer" id="cart-drawer">
    <div class="cart-header">
      <h3><span>🛒</span> Seu Pedido</h3>
      <button class="cart-close-btn" id="cart-close-btn" aria-label="Fechar Carrinho">✕</button>
    </div>
    <div class="cart-body" id="cart-items-body"></div>
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
      <a href="contato.html#fazer-pedido" class="btn btn-whatsapp" onclick="closeCartDrawer()" style="width: 100%; padding: 1rem;">
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

        <div class="modal-option-group">
          <div class="modal-option-title">
            <span>1. Escolha o Tamanho</span>
            <span class="option-badge-req">Obrigatório</span>
          </div>
          <div id="modal-sizes-container"></div>
        </div>

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

  <!-- Floating Actions -->
  <div class="floating-actions">
    <button class="back-to-top" id="back-to-top" aria-label="Voltar ao Topo" title="Voltar ao Topo">▲</button>
    <a href="https://wa.me/5511923535049?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20na%20La%20Bonelli%20Pizzaria." target="_blank" rel="noopener" class="floating-whatsapp" aria-label="Fazer Pedido no WhatsApp" title="Pedir no WhatsApp">
      💬
    </a>
  </div>

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
          <h4 class="footer-title">Páginas</h4>
          <div class="footer-links">
            <a href="index.html">Início</a>
            <a href="cardapio.html">Cardápio Completo</a>
            <a href="delivery.html">Delivery & Entregas</a>
            <a href="sobre.html">Nossa História</a>
            <a href="avaliacoes.html">Avaliações dos Clientes</a>
            <a href="contato.html">Fazer Pedido / Contato</a>
            <a href="politica-privacidade.html">Política de Privacidade</a>
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
            <span class="pay-tag">Alelo</span>
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

  <script src="js/main.js"></script>
</body>
</html>
  `;
}

// Pages definitions
const pages = {
  'index.html': `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>La Bonelli Pizzaria | Pizza Delivery no Jardim São Luís - SP</title>
  <meta name="description" content="La Bonelli Pizzaria - peça sua pizza favorita pelo delivery no Jardim São Luís, São Paulo. Confira nosso cardápio e faça seu pedido.">
  <meta name="keywords" content="La Bonelli Pizzaria, pizza Jardim São Luís, pizzaria Jardim São Luís, pizza delivery São Paulo, delivery Jardim São Luís, pizzaria São Paulo, pizza delivery SP, La Bonelli Pizza">
  <meta name="theme-color" content="#E51A24">
  <link rel="icon" type="image/png" href="assets/images/logotipo-novo.png">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('inicio')}
  <main>
    <section id="inicio" class="hero-section">
      <div class="hero-bg-glow"></div>
      <div class="container hero-grid">
        <div class="hero-content reveal-left">
          <div class="hero-badge-group">
            <span class="hero-rating-badge">⭐ 5,0 de Avaliação no Google (8 avaliações)</span>
            <span class="section-tag green">✨ Delivery Especializado</span>
          </div>
          <h1 class="hero-title">A Verdadeira Pizza Artesanal no <span class="highlight">Jardim São Luís</span></h1>
          <p class="hero-subtitle"><strong>Sabor, qualidade e tradição em cada pizza.</strong> Massas de fermentação natural, ingredientes selecionados de primeiríssima linha e aquele queijo derretido perfeito direto para a sua mesa!</p>
          <div class="hero-pills">
            <div class="hero-pill">🔥 Forno Tradicional</div>
            <div class="hero-pill">🛵 Entrega Rápida & Quentinha</div>
            <div class="hero-pill">🧀 Catupiry & Queijos Nobres</div>
            <div class="hero-pill">🌿 Ingredientes Frescos</div>
          </div>
          <div class="hero-actions">
            <a href="cardapio.html" class="btn btn-primary btn-lg"><span>🍽️ Ver Cardápio</span></a>
            <a href="https://wa.me/5511923535049?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20na%20La%20Bonelli%20Pizzaria." target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg"><span>💬 Pedir no WhatsApp</span></a>
          </div>
        </div>
        <div class="hero-visual reveal-right">
          <div class="hero-image-wrapper">
            <img src="assets/images/hero-pizza.jpg" alt="Deliciosa Pizza Artesanal La Bonelli saindo do forno a lenha" class="hero-main-img">
            <div class="hero-floating-card top-left">
              <div class="card-icon-box">🍕</div>
              <div class="card-text-box"><h4>100% Artesanal</h4><p>Massa leve e crocante</p></div>
            </div>
            <div class="hero-floating-card bottom-right">
              <div class="card-icon-box green">🛵</div>
              <div class="card-text-box"><h4>Delivery Expresso</h4><p>Média de 30 a 45 min</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="features-strip">
      <div class="container">
        <div class="features-grid">
          <div class="feature-item reveal-on-scroll stagger-1">
            <div class="feature-icon">🍕</div>
            <div class="feature-info"><h3>Massa de Longa Fermentação</h3><p>Maturada por até 48h, proporcionando extrema leveza, crocância e fácil digestão.</p></div>
          </div>
          <div class="feature-item reveal-on-scroll stagger-2">
            <div class="feature-icon">🧀</div>
            <div class="feature-info"><h3>Ingredientes Selecionados</h3><p>Trabalhamos apenas com marcas renomadas, Catupiry original e queijos de alta qualidade.</p></div>
          </div>
          <div class="feature-item reveal-on-scroll stagger-3">
            <div class="feature-icon">🛵</div>
            <div class="feature-info"><h3>Delivery Especializado</h3><p>Embalagens térmicas especiais que garantem a pizza quentinha e com a borda crocante.</p></div>
          </div>
          <div class="feature-item reveal-on-scroll stagger-4">
            <div class="feature-icon">⭐</div>
            <div class="feature-info"><h3>Nota Máxima 5.0 Estrelas</h3><p>Excelência comprovada pela satisfação unânime dos nossos clientes no Google.</p></div>
          </div>
        </div>
      </div>
    </section>
    <section id="cardapio" class="section-padding menu-section">
      <div class="container">
        <div class="section-header text-center reveal-on-scroll">
          <span class="section-tag gold">📋 Escolha sua Favorita</span>
          <h2 class="section-title">Nosso <span class="red">Cardápio</span> Artesanal</h2>
          <p class="section-desc">Pizzas preparadas com receitas tradicionais, molho de tomate fresco e recheios generosos.</p>
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
        <div class="menu-grid" id="menu-grid"></div>
      </div>
    </section>
    <section id="galeria" class="section-padding gallery-section">
      <div class="container">
        <div class="section-header text-center reveal-on-scroll">
          <span class="section-tag">📸 Conheça a La Bonelli</span>
          <h2 class="section-title">Nossa <span class="red">Galeria</span> de Fotos</h2>
          <p class="section-desc">Confira alguns dos nossos pratos, ingredientes frescos e momentos do preparo artesanal.</p>
        </div>
        <div class="gallery-grid" id="gallery-grid"></div>
      </div>
    </section>
    <section id="localizacao" class="section-padding location-section">
      <div class="container">
        <div class="section-header text-center reveal-on-scroll">
          <span class="section-tag green">📍 Onde Estamos</span>
          <h2 class="section-title">Nossa <span class="gold">Localização</span></h2>
          <p class="section-desc">Localizada no Jardim São Luís em São Paulo, atendendo delivery com agilidade para toda a região.</p>
        </div>
        <div class="location-grid">
          <div class="location-info-card reveal-left">
            <div>
              <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--text-cream); margin-bottom: 0.5rem;">La Bonelli Pizzaria</h3>
              <p style="color: var(--accent-gold); font-weight: 700; font-size: 0.95rem;">Delivery de Pizza • Atendimento Rápido</p>
              <div class="location-detail-list">
                <div class="loc-item"><div class="loc-icon">🏠</div><div class="loc-text"><h4>Endereço</h4><p>R. Geraldo Fraga de Oliveira, 629<br>Jardim São Luís, São Paulo - SP<br>CEP 05847-620</p></div></div>
                <div class="loc-item"><div class="loc-icon">📞</div><div class="loc-text"><h4>Telefone / WhatsApp</h4><p>(11) 92353-5049</p></div></div>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem;">
              <a href="https://maps.google.com/?q=R.+Geraldo+Fraga+de+Oliveira,+629+-+Jardim+S%C3%A3o+Lu%C3%ADs,+S%C3%A3o+Paulo+-+SP,+05847-620" target="_blank" rel="noopener" class="btn btn-primary"><span>🗺️ Como Chegar (Google Maps)</span></a>
              <button id="copy-address-btn" class="btn btn-secondary"><span>📋 Copiar Endereço Completo</span></button>
            </div>
          </div>
          <div class="map-wrapper reveal-right">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.498877685601!2d-46.73231462377045!3d-23.662283978729544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5180f970233b%3A0x8e8eb0ce972c353a!2sR.%20Geraldo%20Fraga%20de%20Oliveira%2C%20629%20-%20Jardim%20S%C3%A3o%20Lu%C3%ADs%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005847-620!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa de Localização"></iframe>
          </div>
        </div>
      </div>
    </section>
  </main>
  ${getFooter()}
`,

  'cardapio.html': `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cardápio Completo de Pizzas | La Bonelli Pizzaria</title>
  <meta name="description" content="Confira o cardápio completo da La Bonelli Pizzaria. Pizzas tradicionais, especiais, vegetarianas, doces e bebidas no Jardim São Luís.">
  <link rel="icon" type="image/png" href="assets/images/logotipo-novo.png">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('cardapio')}
  <main>
    <section class="section-padding" style="background: linear-gradient(180deg, #131318 0%, #0D0D11 100%); text-align: center;">
      <div class="container reveal-on-scroll">
        <span class="section-tag gold">🍕 Cardápio Oficial 2026</span>
        <h1 class="section-title">Nosso <span class="red">Cardápio</span> Artesanal</h1>
        <p class="section-desc">Escolha suas pizzas favoritas, selecione os tamanhos P, M ou G, adicione bordas recheadas e monte seu pedido para envio direto no WhatsApp!</p>
      </div>
    </section>
    <section class="section-padding menu-section">
      <div class="container">
        <div class="menu-controls reveal-on-scroll">
          <div class="category-tabs" role="tablist">
            <button class="category-tab active" data-category="all" role="tab">🔥 Todas as Opções</button>
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
        <div class="menu-grid" id="menu-grid"></div>
      </div>
    </section>
    <section class="section-padding" style="background: var(--bg-secondary); border-top: 1px solid var(--border-color);">
      <div class="container">
        <div class="section-header text-center reveal-on-scroll">
          <span class="section-tag green">🎁 Combos Imperdíveis</span>
          <h2 class="section-title">Promoções da <span class="gold">La Bonelli</span></h2>
          <p class="section-desc">Aproveite nossos combos especiais para reunir a família e os amigos!</p>
        </div>
        <div class="features-grid" style="grid-template-columns: repeat(3, 1fr);">
          <div class="feature-item reveal-on-scroll stagger-1" style="flex-direction: column; text-align: center; align-items: center; padding: 2rem;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🍕🥤</div>
            <h3 style="color: var(--text-cream); font-size: 1.25rem;">Combo Casal</h3>
            <p style="margin: 0.5rem 0 1rem; color: var(--text-muted);">1 Pizza Grande Tradicional + 1 Refrigerante 2L</p>
            <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 1.25rem;">R$ 69,90</div>
            <a href="contato.html" class="btn btn-primary btn-sm">Pedir no WhatsApp</a>
          </div>
          <div class="feature-item reveal-on-scroll stagger-2" style="flex-direction: column; text-align: center; align-items: center; padding: 2rem; border-color: var(--border-gold);">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🍕🍕🥤</div>
            <h3 style="color: var(--accent-gold); font-size: 1.25rem;">Combo Família</h3>
            <p style="margin: 0.5rem 0 1rem; color: var(--text-muted);">2 Pizzas Grandes + Borda Catupiry + 1 Refrigerante 2L</p>
            <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 1.25rem;">R$ 124,90</div>
            <a href="contato.html" class="btn btn-primary btn-sm">Pedir no WhatsApp</a>
          </div>
          <div class="feature-item reveal-on-scroll stagger-3" style="flex-direction: column; text-align: center; align-items: center; padding: 2rem;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🍕🍫</div>
            <h3 style="color: var(--text-cream); font-size: 1.25rem;">Combo Doce Amor</h3>
            <p style="margin: 0.5rem 0 1rem; color: var(--text-muted);">1 Pizza Grande Especial + 1 Pizza Média Doce de Nutella</p>
            <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 1.25rem;">R$ 109,90</div>
            <a href="contato.html" class="btn btn-primary btn-sm">Pedir no WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  </main>
  ${getFooter()}
`,

  'sobre.html': `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sobre Nós & Nossa História | La Bonelli Pizzaria</title>
  <meta name="description" content="Conheça a história da La Bonelli Pizzaria no Jardim São Luís. Tradição italiana, fermentação natural e amor pela gastronomia.">
  <link rel="icon" type="image/png" href="assets/images/logotipo-novo.png">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('sobre')}
  <main>
    <section class="section-padding" style="background: linear-gradient(180deg, #131318 0%, #0D0D11 100%); text-align: center;">
      <div class="container reveal-on-scroll">
        <span class="section-tag gold">👨‍🍳 Tradição & Excelência</span>
        <h1 class="section-title">Nossa <span class="red">História</span></h1>
        <p class="section-desc">Conheça os pilares que fazem da La Bonelli Pizzaria referência em sabor e qualidade 5.0 estrelas no Jardim São Luís.</p>
      </div>
    </section>
    <section class="section-padding about-section">
      <div class="container">
        <div class="about-grid" style="margin-bottom: 4rem;">
          <div class="about-images-composition reveal-left">
            <img src="assets/images/chef-pizzaiolo.jpg" data-src="assets/images/chef-pizzaiolo.jpg" alt="Pizzaiolo La Bonelli" class="about-main-img lazy-load">
            <img src="assets/images/forno-lenha.jpg" data-src="assets/images/forno-lenha.jpg" alt="Forno a lenha" class="about-sub-img lazy-load">
          </div>
          <div class="about-story reveal-right">
            <span class="section-tag green">🇮🇹 O Verdadeiro Sabor Italiano</span>
            <h2 class="section-title">Feita com Paixão e <span class="gold">Ingredientes Nobres</span></h2>
            <p>A <strong>La Bonelli Pizzaria</strong> foi fundada com um propósito claro: trazer a experiência autêntica da pizza artesanal para o Jardim São Luís e bairros vizinhos.</p>
            <p>Começa na escolha criteriosa das farinhas, no tempo certo de maturação da massa, no molho de tomate fresco temperado com ervas aromáticas e na generosidade dos queijos de primeira linha.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  ${getFooter()}
`,

  'delivery.html': `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Delivery de Pizza no Jardim São Luís | La Bonelli Pizzaria</title>
  <meta name="description" content="Informações de entrega da La Bonelli Pizzaria no Jardim São Luís, taxas, tempo médio e formas de pagamento.">
  <link rel="icon" type="image/png" href="assets/images/logotipo-novo.png">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('delivery')}
  <main>
    <section class="section-padding" style="background: linear-gradient(180deg, #131318 0%, #0D0D11 100%); text-align: center;">
      <div class="container reveal-on-scroll">
        <span class="section-tag green">🛵 Entrega Rápida & Quentinha</span>
        <h1 class="section-title">Delivery <span class="red">La Bonelli</span></h1>
        <p class="section-desc">Entregamos no conforto da sua casa com agilidade, pontualidade e total segurança em embalagens térmicas lacradas.</p>
      </div>
    </section>
    <section class="section-padding delivery-section">
      <div class="container">
        <div class="delivery-grid">
          <div class="delivery-content reveal-left">
            <span class="section-tag gold">📍 Cobertura de Atendimento</span>
            <h2 class="section-title">Bairros <span class="gold">Atendidos</span></h2>
            <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 1.5rem;">Nossa base fica localizada na <strong>Rua Geraldo Fraga de Oliveira, 629 - Jardim São Luís</strong>.</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem; margin-bottom: 2rem;">
              <div class="pay-tag" style="padding: 0.6rem 1rem; font-size: 0.9rem; text-align: center;">📍 Jardim São Luís</div>
              <div class="pay-tag" style="padding: 0.6rem 1rem; font-size: 0.9rem; text-align: center;">📍 Vila das Belezas</div>
              <div class="pay-tag" style="padding: 0.6rem 1rem; font-size: 0.9rem; text-align: center;">📍 Guarapiranga</div>
              <div class="pay-tag" style="padding: 0.6rem 1rem; font-size: 0.9rem; text-align: center;">📍 Campo Limpo (Região)</div>
              <div class="pay-tag" style="padding: 0.6rem 1rem; font-size: 0.9rem; text-align: center;">📍 Santo Amaro (Próximo)</div>
              <div class="pay-tag" style="padding: 0.6rem 1rem; font-size: 0.9rem; text-align: center;">📍 Capão Redondo (Região)</div>
            </div>
          </div>
          <div class="delivery-visual reveal-right">
            <div class="delivery-img-wrapper">
              <img src="assets/images/delivery-bag.jpg" data-src="assets/images/delivery-bag.jpg" alt="Entrega La Bonelli" class="lazy-load">
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  ${getFooter()}
`,

  'avaliacoes.html': `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Avaliações dos Clientes ⭐ 5.0 | La Bonelli Pizzaria</title>
  <meta name="description" content="Depoimentos e avaliações 5.0 estrelas da La Bonelli Pizzaria no Jardim São Luís.">
  <link rel="icon" type="image/png" href="assets/images/logotipo-novo.png">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('avaliacoes')}
  <main>
    <section class="section-padding" style="background: linear-gradient(180deg, #131318 0%, #0D0D11 100%); text-align: center;">
      <div class="container reveal-on-scroll">
        <span class="section-tag gold">⭐ Excelência Comprovada</span>
        <h1 class="section-title">Avaliações dos <span class="gold">Clientes</span></h1>
        <p class="section-desc">A La Bonelli Pizzaria se orgulha de manter 100% de satisfação com nota 5.0 / 5.0 no Google Reviews.</p>
      </div>
    </section>
    <section class="section-padding reviews-section">
      <div class="container">
        <div class="reviews-summary-card reveal-on-scroll">
          <div class="reviews-summary-left">
            <div class="score-big">5.0</div>
            <div>
              <div class="stars-wrapper">★★★★★</div>
              <div style="font-weight: 700; color: var(--text-cream); font-size: 1.15rem;">Nota 5.0 de 5.0 no Google</div>
              <div style="color: var(--text-muted); font-size: 0.9rem;">8 avaliações verificadas de clientes reais</div>
            </div>
          </div>
          <div>
            <a href="https://maps.google.com/?q=La+Bonelli+Pizzaria+Jardim+Sao+Luis+Sao+Paulo" target="_blank" rel="noopener" class="btn btn-outline-gold">
              <span>⭐ Avaliar no Google Maps</span>
            </a>
          </div>
        </div>
        <div class="reviews-grid">
          <div class="review-card reveal-on-scroll stagger-1">
            <div>
              <div class="stars-wrapper" style="font-size: 1rem; margin-bottom: 0.75rem;">★★★★★</div>
              <p class="review-text">"Melhor pizza do Jardim São Luís! A massa é super leve e crocante, recheio muito bem caprichado e o Catupiry é original mesmo. Chegou super quente em menos de 35 minutos!"</p>
            </div>
            <div class="review-author"><div class="author-avatar">MR</div><div><div class="author-name">Marcos Ribeiro</div><div class="review-source"><span>Google Reviews • Cliente Verificado</span></div></div></div>
          </div>
          <div class="review-card reveal-on-scroll stagger-2">
            <div>
              <div class="stars-wrapper" style="font-size: 1rem; margin-bottom: 0.75rem;">★★★★★</div>
              <p class="review-text">"Atendimento nota 10 pelo WhatsApp! A pizza de Quatro Queijos e a doce de Nutella com Morango estavam divinas. Viramos clientes fiéis da La Bonelli aqui em casa."</p>
            </div>
            <div class="review-author"><div class="author-avatar" style="background: linear-gradient(135deg, #009246, #F5A623);">CS</div><div><div class="author-name">Camila Silva</div><div class="review-source"><span>Google Reviews • Cliente Verificado</span></div></div></div>
          </div>
          <div class="review-card reveal-on-scroll stagger-3">
            <div>
              <div class="stars-wrapper" style="font-size: 1rem; margin-bottom: 0.75rem;">★★★★★</div>
              <p class="review-text">"Sensacional! A massa no ponto perfeito, molho de tomate caseiro saborosíssimo e entrega muito rápida. Recomendo de olhos fechados para quem quer pizza de verdade."</p>
            </div>
            <div class="review-author"><div class="author-avatar" style="background: linear-gradient(135deg, #E51A24, #990B12);">RA</div><div><div class="author-name">Rodrigo Almeida</div><div class="review-source"><span>Google Reviews • Cliente Verificado</span></div></div></div>
          </div>
        </div>
      </div>
    </section>
  </main>
  ${getFooter()}
`,

  'contato.html': `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contato & Pedidos pelo WhatsApp | La Bonelli Pizzaria</title>
  <meta name="description" content="Entre em contato com a La Bonelli Pizzaria. Envie seu pedido compilado direto para nosso WhatsApp (11) 92353-5049.">
  <link rel="icon" type="image/png" href="assets/images/logotipo-novo.png">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader('contato')}
  <main>
    <section class="section-padding" style="background: linear-gradient(180deg, #131318 0%, #0D0D11 100%); text-align: center;">
      <div class="container reveal-on-scroll">
        <span class="section-tag gold">📱 Atendimento Rápido</span>
        <h1 class="section-title">Entre em <span class="red">Contato</span></h1>
        <p class="section-desc">Fale conosco pelo WhatsApp, faça seu pedido delivery compilado ou envie sua dúvida sobre nosso cardápio e atendimento.</p>
      </div>
    </section>
    <section id="fazer-pedido" class="section-padding contact-section">
      <div class="container">
        <div class="contact-card-container reveal-zoom">
          <div class="form-tabs-header">
            <button class="form-tab-btn active" data-tab="tab-order"><span>🍕 Montar Pedido Delivery</span></button>
            <button class="form-tab-btn" data-tab="tab-message"><span>💬 Dúvidas & Outros Assuntos</span></button>
          </div>
          <div class="form-body">
            <div id="tab-order" class="form-tab-content active">
              <form id="whatsapp-order-form">
                <div class="form-grid-2">
                  <div class="form-group">
                    <label class="form-label" for="order-name">Seu Nome Completo <span class="required">*</span></label>
                    <input type="text" id="order-name" class="form-control" placeholder="Ex: João da Silva" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="order-phone">WhatsApp / Telefone <span class="required">*</span></label>
                    <input type="tel" id="order-phone" class="form-control" placeholder="Ex: (11) 99999-9999" required>
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label">Tipo de Atendimento:</label>
                  <div class="radio-pills">
                    <label class="radio-pill-label"><input type="radio" name="order-delivery-type" value="delivery" checked><span>🛵 Entrega (Delivery)</span></label>
                    <label class="radio-pill-label"><input type="radio" name="order-delivery-type" value="retirada"><span>🏪 Retirada no Balcão</span></label>
                  </div>
                </div>
                <div id="form-address-group" class="form-delivery-address">
                  <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-cream); margin-bottom: 0.85rem;">📍 Endereço para Entrega</h4>
                  <div class="form-grid-2">
                    <div class="form-group"><label class="form-label" for="order-street">Rua / Avenida <span class="required">*</span></label><input type="text" id="order-street" class="form-control" placeholder="Ex: Rua Geraldo Fraga de Oliveira"></div>
                    <div class="form-group"><label class="form-label" for="order-number">Número <span class="required">*</span></label><input type="text" id="order-number" class="form-control" placeholder="Ex: 629"></div>
                  </div>
                  <div class="form-grid-3">
                    <div class="form-group"><label class="form-label" for="order-neighborhood">Bairro</label><input type="text" id="order-neighborhood" class="form-control" value="Jardim São Luís"></div>
                    <div class="form-group"><label class="form-label" for="order-complement">Complemento</label><input type="text" id="order-complement" class="form-control" placeholder="Ex: Apto 42"></div>
                    <div class="form-group"><label class="form-label" for="order-cep">CEP</label><input type="text" id="order-cep" class="form-control" value="05847-620"></div>
                  </div>
                </div>
                <div class="order-items-preview-box">
                  <div class="preview-items-title">
                    <span>🛒 Resumo dos Itens Selecionados:</span>
                    <a href="cardapio.html" style="font-size: 0.8rem; color: var(--primary-red); font-weight: 700; text-decoration: underline;">+ Ver Cardápio & Adicionar Sabores</a>
                  </div>
                  <div id="order-items-preview-list" class="preview-list"></div>
                </div>
                <div class="form-group">
                  <label class="form-label" for="order-manual-items">Sabores ou Bebidas Adicionais:</label>
                  <textarea id="order-manual-items" class="form-control" placeholder="Ex: 1x Pizza de Calabresa Grande sem cebola, 1x Coca-Cola 2L"></textarea>
                </div>
                <div class="form-group">
                  <label class="form-label">Forma de Pagamento:</label>
                  <div class="radio-pills">
                    <label class="radio-pill-label"><input type="radio" name="order-payment" value="pix" checked><span>⚡ PIX</span></label>
                    <label class="radio-pill-label"><input type="radio" name="order-payment" value="cartao_credito"><span>💳 Crédito</span></label>
                    <label class="radio-pill-label"><input type="radio" name="order-payment" value="cartao_debito"><span>💳 Débito</span></label>
                    <label class="radio-pill-label"><input type="radio" name="order-payment" value="dinheiro"><span>💵 Dinheiro</span></label>
                  </div>
                </div>
                <div id="form-change-group" class="form-group" style="display: none;">
                  <label class="form-label" for="order-change-val">Troco para quanto?</label>
                  <input type="text" id="order-change-val" class="form-control" placeholder="Ex: R$ 100,00">
                </div>
                <button type="submit" class="btn btn-whatsapp whatsapp-submit-btn"><span>📱 Enviar Pedido Compilado para o WhatsApp (11) 92353-5049</span></button>
              </form>
            </div>
            <div id="tab-message" class="form-tab-content">
              <form id="general-contact-form">
                <div class="form-grid-2">
                  <div class="form-group"><label class="form-label" for="contact-name">Seu Nome <span class="required">*</span></label><input type="text" id="contact-name" class="form-control" placeholder="Seu nome" required></div>
                  <div class="form-group"><label class="form-label" for="contact-phone">WhatsApp / Telefone</label><input type="tel" id="contact-phone" class="form-control" placeholder="(11) 99999-9999"></div>
                </div>
                <div class="form-group">
                  <label class="form-label" for="contact-message">Sua Mensagem <span class="required">*</span></label>
                  <textarea id="contact-message" class="form-control" placeholder="Digite sua mensagem aqui..." required></textarea>
                </div>
                <button type="submit" class="btn btn-whatsapp whatsapp-submit-btn"><span>💬 Enviar Mensagem via WhatsApp</span></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  ${getFooter()}
`,

  'politica-privacidade.html': `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Política de Privacidade | La Bonelli Pizzaria</title>
  <link rel="icon" type="image/png" href="assets/images/logotipo-novo.png">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${getHeader()}
  <main>
    <section class="section-padding" style="background: linear-gradient(180deg, #131318 0%, #0D0D11 100%); text-align: center;">
      <div class="container reveal-on-scroll">
        <span class="section-tag gold">🔒 Segurança & Transparência</span>
        <h1 class="section-title">Política de <span class="red">Privacidade</span></h1>
        <p class="section-desc">Como tratamos seus dados com respeito e privacidade em conformidade com a LGPD.</p>
      </div>
    </section>
    <section class="section-padding">
      <div class="container" style="max-width: 860px; line-height: 1.8; color: var(--text-secondary);">
        <div class="reveal-on-scroll" style="background: var(--bg-card); padding: 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
          <h2 style="color: var(--text-cream); margin-bottom: 1rem; font-family: var(--font-serif);">1. Coleta e Uso de Informações</h2>
          <p style="margin-bottom: 1.5rem;">A La Bonelli Pizzaria coleta apenas os dados necessários para o atendimento e entrega do seu pedido (nome, telefone e endereço completo).</p>
          <h2 style="color: var(--text-cream); margin-bottom: 1rem; font-family: var(--font-serif);">2. Contato</h2>
          <p>Dúvidas? Fale conosco pelo telefone/WhatsApp: <strong>(11) 92353-5049</strong>.</p>
        </div>
      </div>
    </section>
  </main>
  ${getFooter()}
`
};

for (const [filename, content] of Object.entries(pages)) {
  fs.writeFileSync(path.join(rootDir, filename), content, 'utf8');
  console.log('✓ Generated: ' + filename);
}

console.log('\nAll pages updated and synchronized successfully!');
