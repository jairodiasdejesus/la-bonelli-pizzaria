/**
 * LA BONELLI PIZZARIA - MAIN JAVASCRIPT
 * Features:
 * - Dynamic Menu & Filter System
 * - Customization Modal (Size, Crust, Notes)
 * - Cart Management (Local storage & UI drawer)
 * - WhatsApp Order Compiler & Contact Form
 * - IntersectionObserver Scroll Animations
 * - IntersectionObserver Image Lazy Loading
 * - Live Business Hours & Status Checker
 * - Interactive Photo Gallery Lightbox
 * - Toast Notification System
 * - Responsive Mobile Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initBusinessHours();
  initMenu();
  initCart();
  initWhatsAppOrderForm();
  initContactForm();
  initScrollAnimations();
  initLazyLoading();
  initGalleryLightbox();
  initNavigation();
  initBackToTop();
  initCopyAddress();
});

/* ==========================================================================
   1. MENU DATABASE
   ========================================================================== */
const MENU_DATA = [
  {
    id: 'pizza-calabresa',
    name: 'Calabresa Especial',
    category: 'tradicionais',
    badge: 'Mais Pedida',
    badgeType: 'hot',
    desc: 'Molho de tomate artesanal, calabresa especial fatiada, cebola em rodelas finas, azeitonas pretas chilenas e orégano fresco.',
    image: 'assets/images/pizza-calabresa.jpg',
    prices: { p: 42.00, m: 54.00, g: 62.00 },
    defaultSize: 'g'
  },
  {
    id: 'pizza-margherita',
    name: 'Margherita Clássica',
    category: 'tradicionais',
    badge: 'Tradição Italiana',
    badgeType: 'veg',
    desc: 'Molho de tomate San Marzano, mozzarella especial, fatias de tomate fresco, folhas de manjericão gigante e azeite extravirgem.',
    image: 'assets/images/pizza-margherita.jpg',
    prices: { p: 44.00, m: 56.00, g: 64.00 },
    defaultSize: 'g'
  },
  {
    id: 'pizza-frango-catupiry',
    name: 'Frango com Catupiry',
    category: 'tradicionais',
    badge: 'Favorita',
    badgeType: 'hot',
    desc: 'Peito de frango desfiado temperado com ervas finas, coberto com o autêntico Catupiry cremoso, milho verde e orégano.',
    image: 'assets/images/pizza-frango-catupiry.jpg',
    prices: { p: 46.00, m: 58.00, g: 68.00 },
    defaultSize: 'g'
  },
  {
    id: 'pizza-portuguesa',
    name: 'Portuguesa da Casa',
    category: 'tradicionais',
    badge: 'Clássica',
    badgeType: 'hot',
    desc: 'Presunto magro em cubos, mozzarella, ovos cozidos, cebola caramelizada, ervilhas frescas, azeitonas pretas e orégano.',
    image: 'assets/images/pizza-portuguesa.jpg',
    prices: { p: 46.00, m: 58.00, g: 68.00 },
    defaultSize: 'g'
  },
  {
    id: 'pizza-quatro-queijos',
    name: 'Quatro Queijos Premium',
    category: 'especiais',
    badge: 'Especial do Chef',
    badgeType: 'chef',
    desc: 'Combinação refinada de mozzarella especial, gorgonzola importado, provolone defumado e Catupiry genuíno.',
    image: 'assets/images/pizza-quatro-queijos.jpg',
    prices: { p: 48.00, m: 62.00, g: 72.00 },
    defaultSize: 'g'
  },
  {
    id: 'pizza-pepperoni',
    name: 'Pepperoni Supreme',
    category: 'especiais',
    badge: 'Sensação',
    badgeType: 'chef',
    desc: 'Generosa camada de mozzarella derretida, fatias crocantes de pepperoni especial levemente apimentado e orégano.',
    image: 'assets/images/pizza-pepperoni.jpg',
    prices: { p: 48.00, m: 62.00, g: 72.00 },
    defaultSize: 'g'
  },
  {
    id: 'pizza-vegetariana',
    name: 'Vegetariana Caprese',
    category: 'vegetarianas',
    badge: '100% Vegetariana',
    badgeType: 'veg',
    desc: 'Mozzarella de búfala, corações de alcachofra, abobrinha grelhada no azeite, tomate cereja confit e rúcula fresca.',
    image: 'assets/images/pizza-vegetariana.jpg',
    prices: { p: 46.00, m: 59.00, g: 69.00 },
    defaultSize: 'g'
  },
  {
    id: 'pizza-doce-nutella',
    name: 'Nutella com Morangos Frescos',
    category: 'doces',
    badge: 'Sobremesa Estrela',
    badgeType: 'hot',
    desc: 'Massa fina crocante coberta com pura Nutella aveludada, morangos frescos fatiados e raspas de chocolate meio amargo.',
    image: 'assets/images/pizza-doce-nutella.jpg',
    prices: { p: 40.00, m: 52.00, g: 60.00 },
    defaultSize: 'm'
  },
  {
    id: 'sobremesa-petit',
    name: 'Grand Gateau Especial',
    category: 'doces',
    badge: 'Sobremesa',
    badgeType: 'chef',
    desc: 'Bolo de chocolate artesanal recheado com calda quente fluida, acompanhado de picolé cremoso e castanhas.',
    image: 'assets/images/sobremesa-petit.jpg',
    prices: { p: 26.00, m: 26.00, g: 26.00 },
    defaultSize: 'p',
    singleSize: true
  },
  {
    id: 'bebida-refrigerante',
    name: 'Refrigerante 2 Litros (Coca / Guaraná)',
    category: 'bebidas',
    badge: 'Geladinho',
    badgeType: 'hot',
    desc: 'Coca-Cola Tradicional, Coca Sem Açúcar, Guaraná Antarctica ou Fanta Laranja 2 Litros bem gelados.',
    image: 'assets/images/bebidas-refri.jpg',
    prices: { p: 15.00, m: 15.00, g: 15.00 },
    defaultSize: 'g',
    singleSize: true
  }
];

/* ==========================================================================
   2. BUSINESS HOURS & LIVE STATUS
   ========================================================================== */
function initBusinessHours() {
  const statusBadges = document.querySelectorAll('.live-status-badge');
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTimeVal = currentHour + currentMinute / 60;

  // Open 18:00 to 23:30 every day
  const isOpen = currentTimeVal >= 18.0 && currentTimeVal <= 23.5;

  statusBadges.forEach(badge => {
    if (isOpen) {
      badge.className = 'status-badge open live-status-badge';
      badge.innerHTML = '<span class="status-dot"></span> Aberto Agora • Fecha às 23:30';
    } else {
      badge.className = 'status-badge closed live-status-badge';
      badge.innerHTML = '<span class="status-dot"></span> Fechado Agora • Abre às 18:00';
    }
  });

  // Highlight current day in schedule table
  const dayIndex = now.getDay(); // 0 is Sunday, 1 is Monday...
  const tableRows = document.querySelectorAll('.schedule-table tr');
  if (tableRows && tableRows.length > 0) {
    // Map Sunday=0, Monday=1.. to row indexes
    const mapDayToRow = [6, 0, 1, 2, 3, 4, 5];
    const targetRowIndex = mapDayToRow[dayIndex];
    if (tableRows[targetRowIndex]) {
      tableRows[targetRowIndex].classList.add('current-day');
    }
  }
}

/* ==========================================================================
   3. MENU RENDERING & FILTERING
   ========================================================================== */
let selectedCategory = 'all';
let searchQuery = '';

function initMenu() {
  const menuContainer = document.getElementById('menu-grid');
  const categoryTabs = document.querySelectorAll('.category-tab');
  const searchInput = document.getElementById('menu-search-input');

  if (!menuContainer) return;

  renderMenu();

  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      selectedCategory = tab.dataset.category || 'all';
      renderMenu();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderMenu();
    });
  }
}

function renderMenu() {
  const container = document.getElementById('menu-grid');
  if (!container) return;

  const filtered = MENU_DATA.filter(item => {
    const matchesCategory = (selectedCategory === 'all') || (item.category === selectedCategory);
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery) || 
      item.desc.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
        <h3 style="font-size: 1.3rem; color: var(--text-cream); margin-bottom: 0.5rem;">Nenhum item encontrado</h3>
        <p>Tente buscar por outro termo ou escolha outra categoria do cardápio.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const defaultSize = item.defaultSize || 'g';
    const initialPrice = item.prices[defaultSize].toFixed(2).replace('.', ',');
    const badgeHtml = item.badge ? `<span class="pizza-badge ${item.badgeType}">${item.badge}</span>` : '';
    
    const sizeSelectorHtml = item.singleSize ? `
      <div class="pizza-sizes-selector" style="justify-content: center;">
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); padding: 0.3rem;">Porção Única</span>
      </div>
    ` : `
      <div class="pizza-sizes-selector" data-item-id="${item.id}">
        <button class="size-btn ${defaultSize === 'p' ? 'active' : ''}" data-size="p" onclick="selectCardSize('${item.id}', 'p', this)">P (4 fatias)</button>
        <button class="size-btn ${defaultSize === 'm' ? 'active' : ''}" data-size="m" onclick="selectCardSize('${item.id}', 'm', this)">M (6 fatias)</button>
        <button class="size-btn ${defaultSize === 'g' ? 'active' : ''}" data-size="g" onclick="selectCardSize('${item.id}', 'g', this)">G (8 fatias)</button>
      </div>
    `;

    return `
      <article class="pizza-card reveal-on-scroll" data-id="${item.id}">
        <div class="pizza-card-img-wrap">
          <img src="${item.image}" data-src="${item.image}" alt="${item.name}" class="pizza-card-img lazy-load" loading="lazy">
          ${badgeHtml}
        </div>
        <div class="pizza-card-body">
          <div class="pizza-card-header">
            <h3 class="pizza-name">${item.name}</h3>
          </div>
          <p class="pizza-ingredients">${item.desc}</p>
          ${sizeSelectorHtml}
          <div class="pizza-card-footer">
            <div class="pizza-price-box">
              <span class="price-label">A partir de</span>
              <span class="price-val" id="price-${item.id}">R$ ${initialPrice}</span>
            </div>
            <button class="add-order-btn" onclick="openCustomizeModal('${item.id}')">
              <span>Personalizar & Pedir</span> 🛒
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Re-initialize lazy load & reveal
  initLazyLoading();
  initScrollAnimations();
}

window.selectCardSize = function(itemId, size, btn) {
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  const card = btn.closest('.pizza-card');
  if (card) {
    card.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  const priceEl = document.getElementById(`price-${itemId}`);
  if (priceEl) {
    priceEl.textContent = `R$ ${item.prices[size].toFixed(2).replace('.', ',')}`;
  }
};

/* ==========================================================================
   4. PRODUCT CUSTOMIZATION MODAL & CART
   ========================================================================== */
let currentModalItem = null;
let currentCart = JSON.parse(localStorage.getItem('labonelli_cart') || '[]');

function initCart() {
  updateCartUI();

  const cartToggleBtns = document.querySelectorAll('.cart-toggle-btn, .open-cart-action');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const drawerBackdrop = document.getElementById('drawer-backdrop');

  cartToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  if (cartCloseBtn) {
    cartCloseBtn.addEventListener('click', closeCartDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', () => {
      closeCartDrawer();
      closeMobileMenu();
    });
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  if (drawer) drawer.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

window.openCustomizeModal = function(itemId) {
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;
  currentModalItem = item;

  const modal = document.getElementById('customize-modal');
  const modalImg = document.getElementById('modal-item-img');
  const modalTitle = document.getElementById('modal-item-title');
  const modalDesc = document.getElementById('modal-item-desc');
  const modalSizesContainer = document.getElementById('modal-sizes-container');
  const modalCrustContainer = document.getElementById('modal-crust-container');
  const modalPriceEl = document.getElementById('modal-total-price');

  if (modalImg) modalImg.src = item.image;
  if (modalTitle) modalTitle.textContent = item.name;
  if (modalDesc) modalDesc.textContent = item.desc;

  // Render sizes
  const defaultSize = item.defaultSize || 'g';
  if (modalSizesContainer) {
    if (item.singleSize) {
      modalSizesContainer.innerHTML = `
        <div class="custom-checkbox-row" style="border-color: var(--primary-red); background: var(--primary-red-subtle);">
          <label><input type="radio" name="modal-size" value="p" checked> <span>Tamanho Padrão</span></label>
          <span class="option-add-price">R$ ${item.prices.p.toFixed(2).replace('.', ',')}</span>
        </div>
      `;
    } else {
      modalSizesContainer.innerHTML = `
        <div class="custom-checkbox-row">
          <label><input type="radio" name="modal-size" value="p" ${defaultSize === 'p' ? 'checked' : ''} onchange="recalcModalPrice()"> <span>Pequena (4 fatias - 25cm)</span></label>
          <span class="option-add-price">R$ ${item.prices.p.toFixed(2).replace('.', ',')}</span>
        </div>
        <div class="custom-checkbox-row">
          <label><input type="radio" name="modal-size" value="m" ${defaultSize === 'm' ? 'checked' : ''} onchange="recalcModalPrice()"> <span>Média (6 fatias - 30cm)</span></label>
          <span class="option-add-price">R$ ${item.prices.m.toFixed(2).replace('.', ',')}</span>
        </div>
        <div class="custom-checkbox-row">
          <label><input type="radio" name="modal-size" value="g" ${defaultSize === 'g' ? 'checked' : ''} onchange="recalcModalPrice()"> <span>Grande (8 fatias - 35cm)</span></label>
          <span class="option-add-price">R$ ${item.prices.g.toFixed(2).replace('.', ',')}</span>
        </div>
      `;
    }
  }

  // Hide crust options for beverages or desserts
  if (modalCrustContainer) {
    if (item.category === 'bebidas' || item.category === 'doces' || item.singleSize) {
      modalCrustContainer.style.display = 'none';
    } else {
      modalCrustContainer.style.display = 'block';
      // Reset radio to no crust
      const noCrustRadio = modalCrustContainer.querySelector('input[value="none"]');
      if (noCrustRadio) noCrustRadio.checked = true;
    }
  }

  // Reset extras & notes
  const notesEl = document.getElementById('modal-item-notes');
  if (notesEl) notesEl.value = '';

  const extraCheckboxes = document.querySelectorAll('input[name="modal-extra"]');
  extraCheckboxes.forEach(cb => cb.checked = false);

  const qtyInput = document.getElementById('modal-qty-val');
  if (qtyInput) qtyInput.textContent = '1';

  recalcModalPrice();

  if (modal) modal.classList.add('open');
};

window.closeCustomizeModal = function() {
  const modal = document.getElementById('customize-modal');
  if (modal) modal.classList.remove('open');
};

window.adjustModalQty = function(delta) {
  const qtyEl = document.getElementById('modal-qty-val');
  if (!qtyEl) return;
  let val = parseInt(qtyEl.textContent, 10) + delta;
  if (val < 1) val = 1;
  if (val > 20) val = 20;
  qtyEl.textContent = val;
  recalcModalPrice();
};

window.recalcModalPrice = function() {
  if (!currentModalItem) return;
  const sizeRadio = document.querySelector('input[name="modal-size"]:checked');
  const size = sizeRadio ? sizeRadio.value : (currentModalItem.defaultSize || 'g');
  let basePrice = currentModalItem.prices[size] || currentModalItem.prices.g;

  // Crust price
  const crustRadio = document.querySelector('input[name="modal-crust"]:checked');
  if (crustRadio && crustRadio.dataset.price) {
    basePrice += parseFloat(crustRadio.dataset.price);
  }

  // Extras
  const extras = document.querySelectorAll('input[name="modal-extra"]:checked');
  extras.forEach(ext => {
    if (ext.dataset.price) basePrice += parseFloat(ext.dataset.price);
  });

  const qtyEl = document.getElementById('modal-qty-val');
  const qty = qtyEl ? parseInt(qtyEl.textContent, 10) : 1;

  const total = basePrice * qty;
  const priceEl = document.getElementById('modal-total-price');
  if (priceEl) priceEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
};

window.addCurrentModalToCart = function() {
  if (!currentModalItem) return;

  const sizeRadio = document.querySelector('input[name="modal-size"]:checked');
  const size = sizeRadio ? sizeRadio.value : (currentModalItem.defaultSize || 'g');
  const sizeNames = { p: 'Pequena (4 fatias)', m: 'Média (6 fatias)', g: 'Grande (8 fatias)' };
  const sizeLabel = currentModalItem.singleSize ? 'Porção Única' : (sizeNames[size] || 'Grande');

  let unitPrice = currentModalItem.prices[size] || currentModalItem.prices.g;
  let crustLabel = 'Sem borda recheada';
  const crustRadio = document.querySelector('input[name="modal-crust"]:checked');
  if (crustRadio && crustRadio.value !== 'none') {
    crustLabel = crustRadio.parentElement.querySelector('span').textContent.trim();
    unitPrice += parseFloat(crustRadio.dataset.price || 0);
  }

  const extrasArr = [];
  const extras = document.querySelectorAll('input[name="modal-extra"]:checked');
  extras.forEach(ext => {
    extrasArr.push(ext.parentElement.querySelector('span').textContent.trim());
    unitPrice += parseFloat(ext.dataset.price || 0);
  });

  const notesEl = document.getElementById('modal-item-notes');
  const notes = notesEl ? notesEl.value.trim() : '';

  const qtyEl = document.getElementById('modal-qty-val');
  const qty = qtyEl ? parseInt(qtyEl.textContent, 10) : 1;

  const cartItem = {
    cartId: 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
    itemId: currentModalItem.id,
    name: currentModalItem.name,
    image: currentModalItem.image,
    size: sizeLabel,
    crust: crustLabel !== 'Sem borda recheada' ? crustLabel : null,
    extras: extrasArr.length > 0 ? extrasArr.join(', ') : null,
    notes: notes || null,
    unitPrice: unitPrice,
    qty: qty,
    totalPrice: unitPrice * qty
  };

  currentCart.push(cartItem);
  saveCart();
  updateCartUI();
  closeCustomizeModal();
  showToast(`🍕 ${currentModalItem.name} adicionada ao seu pedido!`, 'success');
  openCartDrawer();
};

function saveCart() {
  localStorage.setItem('labonelli_cart', JSON.stringify(currentCart));
}

function updateCartUI() {
  const countBadges = document.querySelectorAll('.cart-count');
  const cartBody = document.getElementById('cart-items-body');
  const cartSubtotalEl = document.getElementById('cart-subtotal-val');
  const cartTotalEl = document.getElementById('cart-total-val');
  const orderPreviewList = document.getElementById('order-items-preview-list');

  const totalCount = currentCart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = currentCart.reduce((sum, item) => sum + item.totalPrice, 0);

  countBadges.forEach(badge => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  });

  if (cartSubtotalEl) cartSubtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
  if (cartTotalEl) {
    const deliveryFee = 5.00; // standard Jardim São Luís
    const finalTotal = subtotal > 0 ? (subtotal + deliveryFee) : 0;
    cartTotalEl.textContent = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;
  }

  // Render drawer items
  if (cartBody) {
    if (currentCart.length === 0) {
      cartBody.innerHTML = `
        <div class="empty-cart-state">
          <div class="empty-cart-icon">🍕</div>
          <h4>Seu pedido está vazio</h4>
          <p>Escolha seus sabores favoritos no cardápio e monte seu pedido artesanal!</p>
        </div>
      `;
    } else {
      cartBody.innerHTML = currentCart.map(item => `
        <div class="cart-item-card">
          <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-details">
              ${item.size ? `<div>📏 ${item.size}</div>` : ''}
              ${item.crust ? `<div>🧀 ${item.crust}</div>` : ''}
              ${item.extras ? `<div>✨ ${item.extras}</div>` : ''}
              ${item.notes ? `<div style="color: #F5A623;">📝 Obs: ${item.notes}</div>` : ''}
            </div>
            <div class="cart-item-bottom">
              <span class="cart-item-price">R$ ${item.totalPrice.toFixed(2).replace('.', ',')}</span>
              <div class="qty-control">
                <button class="qty-btn" onclick="changeCartItemQty('${item.cartId}', -1)">-</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn" onclick="changeCartItemQty('${item.cartId}', 1)">+</button>
              </div>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeCartItem('${item.cartId}')" title="Remover item">✕</button>
        </div>
      `).join('');
    }
  }

  // Update order form compilation preview box
  if (orderPreviewList) {
    if (currentCart.length === 0) {
      orderPreviewList.innerHTML = `
        <div style="color: var(--text-muted); font-size: 0.85rem; font-style: italic;">
          Nenhum item selecionado pelo cardápio. Você pode escolher no cardápio acima ou digitar seus itens no campo abaixo.
        </div>
      `;
    } else {
      orderPreviewList.innerHTML = currentCart.map(item => `
        <div class="preview-item-row">
          <div>
            <strong>${item.qty}x ${item.name}</strong> (${item.size})
            ${item.crust ? `<br><small style="color: #10B981;">+ ${item.crust}</small>` : ''}
            ${item.notes ? `<br><small style="color: #F5A623;">Obs: ${item.notes}</small>` : ''}
          </div>
          <span style="font-weight: 700; color: var(--accent-gold);">R$ ${item.totalPrice.toFixed(2).replace('.', ',')}</span>
        </div>
      `).join('') + `
        <div style="display: flex; justify-content: space-between; font-weight: 800; padding-top: 0.5rem; margin-top: 0.5rem; border-top: 1px solid rgba(255,255,255,0.1); color: var(--text-cream);">
          <span>Subtotal dos Itens:</span>
          <span style="color: var(--accent-gold);">R$ ${subtotal.toFixed(2).replace('.', ',')}</span>
        </div>
      `;
    }
  }
}

window.changeCartItemQty = function(cartId, delta) {
  const item = currentCart.find(i => i.cartId === cartId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    currentCart = currentCart.filter(i => i.cartId !== cartId);
  } else {
    item.totalPrice = item.unitPrice * item.qty;
  }
  saveCart();
  updateCartUI();
};

window.removeCartItem = function(cartId) {
  currentCart = currentCart.filter(i => i.cartId !== cartId);
  saveCart();
  updateCartUI();
  showToast('Item removido do pedido.', 'default');
};

/* ==========================================================================
   5. WHATSAPP ORDER COMPILER & CONTACT FORM
   ========================================================================== */
function initWhatsAppOrderForm() {
  const orderForm = document.getElementById('whatsapp-order-form');
  const deliveryTypeRadios = document.querySelectorAll('input[name="order-delivery-type"]');
  const addressContainer = document.getElementById('form-address-group');
  const paymentMethodRadios = document.querySelectorAll('input[name="order-payment"]');
  const changeGroup = document.getElementById('form-change-group');

  // Toggle delivery address container
  deliveryTypeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (addressContainer) {
        addressContainer.style.display = radio.value === 'delivery' ? 'block' : 'none';
      }
    });
  });

  // Toggle cash change input
  paymentMethodRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (changeGroup) {
        changeGroup.style.display = radio.value === 'dinheiro' ? 'block' : 'none';
      }
    });
  });

  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      compileAndSendWhatsAppOrder();
    });
  }
}

function compileAndSendWhatsAppOrder() {
  const name = (document.getElementById('order-name')?.value || '').trim();
  const phone = (document.getElementById('order-phone')?.value || '').trim();
  const deliveryType = document.querySelector('input[name="order-delivery-type"]:checked')?.value || 'delivery';
  
  const street = (document.getElementById('order-street')?.value || '').trim();
  const number = (document.getElementById('order-number')?.value || '').trim();
  const neighborhood = (document.getElementById('order-neighborhood')?.value || 'Jardim São Luís').trim();
  const complement = (document.getElementById('order-complement')?.value || '').trim();
  const reference = (document.getElementById('order-reference')?.value || '').trim();
  const cep = (document.getElementById('order-cep')?.value || '05847-620').trim();

  const paymentMethod = document.querySelector('input[name="order-payment"]:checked')?.value || 'pix';
  const changeFor = (document.getElementById('order-change-val')?.value || '').trim();
  const manualItems = (document.getElementById('order-manual-items')?.value || '').trim();
  const generalObs = (document.getElementById('order-obs')?.value || '').trim();

  if (!name) {
    showToast('Por favor, informe seu nome.', 'error');
    document.getElementById('order-name')?.focus();
    return;
  }

  if (deliveryType === 'delivery' && (!street || !number)) {
    showToast('Por favor, informe a rua e o número para entrega.', 'error');
    document.getElementById('order-street')?.focus();
    return;
  }

  // Calculate Subtotal & Totals
  const subtotal = currentCart.reduce((sum, item) => sum + item.totalPrice, 0);
  const deliveryFee = (deliveryType === 'delivery') ? 5.00 : 0.00;
  const total = subtotal + deliveryFee;

  // Build compiled WhatsApp Message
  let msg = '🍕 *NOVO PEDIDO - LA BONELLI PIZZARIA* 🍕\n';
  msg += '══════════════════════════════════\n';
  msg += `👤 *Cliente:* ${name}\n`;
  if (phone) msg += `📱 *Telefone/WhatsApp:* ${phone}\n`;
  msg += `📍 *Tipo:* ${deliveryType === 'delivery' ? '🛵 Entrega (Delivery)' : '🏪 Retirada no Balcão'}\n`;

  if (deliveryType === 'delivery') {
    msg += '══════════════════════════════════\n';
    msg += '🏠 *ENDEREÇO DE ENTREGA:*\n';
    msg += `• Rua/Av: ${street}, Nº ${number}\n`;
    if (complement) msg += `• Complemento: ${complement}\n`;
    msg += `• Bairro: ${neighborhood}\n`;
    if (cep) msg += `• CEP: ${cep}\n`;
    if (reference) msg += `• Ponto de Ref: ${reference}\n`;
  }

  msg += '══════════════════════════════════\n';
  msg += '📋 *ITENS DO PEDIDO:*\n';

  if (currentCart.length > 0) {
    currentCart.forEach(item => {
      msg += `\n• *${item.qty}x ${item.name}* (${item.size}) - R$ ${item.totalPrice.toFixed(2).replace('.', ',')}\n`;
      if (item.crust) msg += `  ↳ Borda: ${item.crust}\n`;
      if (item.extras) msg += `  ↳ Adicionais: ${item.extras}\n`;
      if (item.notes) msg += `  ↳ Obs: ${item.notes}\n`;
    });
  }

  if (manualItems) {
    msg += `\n📝 *Outros Itens / Detalhes:*\n${manualItems}\n`;
  }

  if (currentCart.length === 0 && !manualItems) {
    msg += '*(Cardápio a confirmar com o atendente)*\n';
  }

  msg += '\n══════════════════════════════════\n';
  if (subtotal > 0) {
    msg += `💰 *Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    if (deliveryType === 'delivery') {
      msg += `🛵 *Taxa de Entrega:* R$ ${deliveryFee.toFixed(2).replace('.', ',')}\n`;
    }
    msg += `💳 *VALOR TOTAL:* R$ ${total.toFixed(2).replace('.', ',')}\n`;
  }

  const paymentLabels = {
    pix: 'PIX (Chave Instantânea)',
    cartao_credito: 'Cartão de Crédito (Levar Máquina)',
    cartao_debito: 'Cartão de Débito (Levar Máquina)',
    dinheiro: 'Dinheiro'
  };

  msg += `💵 *Forma de Pagamento:* ${paymentLabels[paymentMethod] || paymentMethod}\n`;
  if (paymentMethod === 'dinheiro' && changeFor) {
    msg += `  ↳ Troco para: R$ ${changeFor}\n`;
  }

  if (generalObs) {
    msg += `\n💬 *Observações Gerais:*\n${generalObs}\n`;
  }

  msg += '══════════════════════════════════\n';
  msg += '✨ _Enviado via Site Oficial La Bonelli Pizzaria_';

  const whatsappPhone = '5511923535049';
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(msg)}`;

  // Open WhatsApp in new tab
  window.open(whatsappUrl, '_blank');
  showToast('🚀 Pedido compilado! Abrindo WhatsApp...', 'success');
}

/* General Contact Form */
function initContactForm() {
  const contactForm = document.getElementById('general-contact-form');
  const tabs = document.querySelectorAll('.form-tab-btn');
  const tabContents = document.querySelectorAll('.form-tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (document.getElementById('contact-name')?.value || '').trim();
      const phone = (document.getElementById('contact-phone')?.value || '').trim();
      const subject = (document.getElementById('contact-subject')?.value || 'Dúvida Geral').trim();
      const message = (document.getElementById('contact-message')?.value || '').trim();

      if (!name || !message) {
        showToast('Por favor, preencha seu nome e mensagem.', 'error');
        return;
      }

      let msg = '👋 *MENSAGEM DE CONTATO - LA BONELLI PIZZARIA*\n';
      msg += '══════════════════════════════════\n';
      msg += `👤 *Nome:* ${name}\n`;
      if (phone) msg += `📱 *Telefone/WhatsApp:* ${phone}\n`;
      msg += `📌 *Assunto:* ${subject}\n`;
      msg += '══════════════════════════════════\n';
      msg += `💬 *Mensagem:*\n${message}\n`;
      msg += '══════════════════════════════════\n';
      msg += '_Enviado via formulário de contato do site_';

      const whatsappPhone = '5511923535049';
      const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(msg)}`;
      window.open(whatsappUrl, '_blank');
      showToast('Mensagem pronta! Abrindo WhatsApp...', 'success');
    });
  }
}

/* ==========================================================================
   6. SCROLL ANIMATIONS (IntersectionObserver)
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-zoom');

  if (!('IntersectionObserver' in window)) {
    animatedElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  });

  animatedElements.forEach(el => {
    if (!el.classList.contains('revealed')) {
      observer.observe(el);
    }
  });
}

/* ==========================================================================
   7. LAZY LOADING (IntersectionObserver)
   ========================================================================== */
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img.lazy-load');

  if (!('IntersectionObserver' in window)) {
    lazyImages.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.classList.add('loaded');
      }
    });
    return;
  }

  const imageObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
        img.onload = () => img.classList.add('loaded');
        // fallback if cached
        if (img.complete) img.classList.add('loaded');
        obs.unobserve(img);
      }
    });
  }, {
    rootMargin: '100px 0px',
    threshold: 0.01
  });

  lazyImages.forEach(img => {
    if (!img.classList.contains('loaded')) {
      imageObserver.observe(img);
    }
  });
}

/* ==========================================================================
   8. PHOTO GALLERY & LIGHTBOX
   ========================================================================== */
const GALLERY_DATA = [
  { src: 'assets/images/pizza-calabresa.jpg', title: 'Pizza Calabresa Artesanal', desc: 'Com cebolas caramelizadas e orégano' },
  { src: 'assets/images/forno-lenha.jpg', title: 'Forno a Lenha Tradicional', desc: 'Assada no fogo com temperatura perfeita' },
  { src: 'assets/images/pizza-quatro-queijos.jpg', title: 'Quatro Queijos Especial', desc: 'Gorgonzola, Catupiry, Provolone e Mozzarella' },
  { src: 'assets/images/chef-pizzaiolo.jpg', title: 'Mestres Pizzaiolos', desc: 'Dedicação e paixão em cada detalhe' },
  { src: 'assets/images/pizza-frango-catupiry.jpg', title: 'Frango com Catupiry', desc: 'Recheio super cremoso e crocante' },
  { src: 'assets/images/delivery-bag.jpg', title: 'Delivery Rápido & Quente', desc: 'Embalagens térmicas especiais' },
  { src: 'assets/images/pizza-margherita.jpg', title: 'Margherita Clássica', desc: 'Tomates frescos e manjericão perfumado' },
  { src: 'assets/images/massa-artesanal.jpg', title: 'Massa de Longa Fermentação', desc: 'Leveza, aroma e digestão perfeita' }
];

function initGalleryLightbox() {
  const galleryGrid = document.getElementById('gallery-grid');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  if (galleryGrid) {
    galleryGrid.innerHTML = GALLERY_DATA.map((item, idx) => `
      <div class="gallery-item reveal-on-scroll stagger-${(idx % 4) + 1}" onclick="openLightbox(${idx})">
        <img src="${item.src}" data-src="${item.src}" alt="${item.title}" class="gallery-img lazy-load" loading="lazy">
        <div class="gallery-overlay">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </div>
    `).join('');
  }

  window.openLightbox = function(index) {
    const item = GALLERY_DATA[index];
    if (!item || !lightboxModal) return;
    if (lightboxImg) lightboxImg.src = item.src;
    if (lightboxCaption) lightboxCaption.textContent = `${item.title} - ${item.desc}`;
    lightboxModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function() {
    if (lightboxModal) lightboxModal.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (lightboxClose) {
    lightboxClose.addEventListener('click', window.closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) window.closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeLightbox();
      window.closeCustomizeModal();
      closeCartDrawer();
      closeMobileMenu();
    }
  });
}

/* ==========================================================================
   9. NAVIGATION & HEADER
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Header scroll class
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Nav active spy
    let currentSecId = '';
    const scrollPosition = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSecId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSecId}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile drawer toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('open');
      mobileDrawer?.classList.toggle('open');
      const backdrop = document.getElementById('drawer-backdrop');
      backdrop?.classList.toggle('open');
    });
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

function closeMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  mobileMenuBtn?.classList.remove('open');
  mobileDrawer?.classList.remove('open');
  backdrop?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ==========================================================================
   10. BACK TO TOP & UTILITIES
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initCopyAddress() {
  const copyBtn = document.getElementById('copy-address-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const address = 'R. Geraldo Fraga de Oliveira, 629 - Jardim São Luís, São Paulo - SP, CEP 05847-620';
      navigator.clipboard.writeText(address).then(() => {
        showToast('📍 Endereço copiado para a área de transferência!', 'success');
      }).catch(() => {
        showToast('Endereço: R. Geraldo Fraga de Oliveira, 629', 'default');
      });
    });
  }
}

/* Toast Notifications */
function showToast(message, type = 'default') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
