# 🍕 La Bonelli Pizzaria — Website Oficial & Sistema de Delivery

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/jairodiasdejesus/la-bonelli-pizzaria?style=for-the-badge&logo=github&color=E51A24)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Produção-brightgreen?style=for-the-badge)

**Experiência gastronômica artesanal com atendimento ágil por delivery em São Paulo - SP.**

[🍕 Ver Demonstração](#-como-executar-localmente) • [📋 Cardápio](#-funcionalidades) • [🛵 Fazer Pedido](#-integração-com-whatsapp) • [🚀 Publicação](#-scripts-de-publicação-e-deploy)

---

</div>

## 📌 Sobre o Projeto

O website da **La Bonelli Pizzaria** foi desenvolvido com foco em alta conversão, performance ultrarrápida e design moderno (*Dark Pizza Theme*). Proporciona uma experiência fluida para os clientes explorarem o cardápio artesanal, personalizarem suas pizzas e enviarem pedidos diretamente para o WhatsApp da pizzaria em poucos cliques.

Localizada no **Jardim São Luís — São Paulo/SP**, a La Bonelli combina tradição em forno a lenha com a praticidade do atendimento digital.

---

## ✨ Funcionalidades em Destaque

### 🍕 1. Cardápio Interativo & Sistema de Busca
- Filtros dinâmicos por categorias: *Tradicionais, Especiais, Vegetarianas, Doces e Bebidas*.
- Busca em tempo real por nome ou ingredientes.
- Seletor de tamanhos dinâmico na vitrine: **P (4 fatias)**, **M (6 fatias)** e **G (8 fatias)** com atualização instantânea de valores.

### 🛠️ 2. Modal de Customização Avançada
- Escolha personalizada de bordas recheadas (Catupiry original, Cheddar cremoso, Chocolate, etc.).
- Inclusão de ingredientes adicionais (Bacon crocante, Queijo extra, Alho frito, etc.).
- Campo livre para observações especiais do cliente (*ex: "sem cebola", "massa bem assada"*).

### 🛒 3. Carrinho de Compras em Tempo Real (Drawer)
- Gerenciamento com persistência local via `localStorage`.
- Atualização em tempo real de quantidade, subtotal e cálculo de taxa de entrega.
- Acesso rápido em qualquer página do site.

### 📲 4. Compilador de Pedidos para o WhatsApp
- Formulário intuitivo para seleção de Entrega (Delivery) ou Retirada no Balcão.
- Campos de endereço completo com ponto de referência.
- Seleção de formas de pagamento (PIX, Cartão de Crédito/Débito, Dinheiro com troco).
- **Geração automática de mensagem formatada e estruturada** enviada diretamente para o WhatsApp oficial: `(11) 92353-5049`.

### ⏰ 5. Indicador de Horário de Funcionamento em Tempo Real
- Verificação dinâmica do horário local informando se a pizzaria está **Aberto Agora** ou **Fechado Agora**.
- Destaque automático do dia da semana atual no cronograma de funcionamento.

### 📸 6. Galeria de Fotos Interativa (Lightbox)
- Visualização fotográfica do ambiente, forno a lenha, preparo artesanal e pizzas em alta definição.

### ⚡ 7. Performance & SEO de Alto Nível
- Lazy loading de imagens via `IntersectionObserver`.
- Animações fluidas de rolagem (*reveal-on-scroll*).
- Marcação semântica HTML5 completa para indexação no Google.
- Meta tags completas e Open Graph para compartilhamento em redes sociais.

---

## 📂 Estrutura de Diretórios

```text
la-bonelli-pizzaria/
├── .docs/                       # Documentação técnica e especificações do projeto
│   ├── SPEC.md                  # Especificação detalhada de conteúdo e fluxos
│   └── logotipo-novo.png        # Arquivo de identidade visual original
├── assets/                      # Recursos estáticos
│   └── images/                  # Fotos de alta qualidade das pizzas, ambiente e insumos
│       ├── hero-pizza.jpg
│       ├── pizza-calabresa.jpg
│       ├── pizza-margherita.jpg
│       ├── pizza-frango-catupiry.jpg
│       ├── pizza-quatro-queijos.jpg
│       ├── pizza-pepperoni.jpg
│       ├── pizza-vegetariana.jpg
│       ├── pizza-doce-nutella.jpg
│       ├── forno-lenha.jpg
│       └── ...
├── css/
│   └── style.css                # Estilização completa com Design Tokens e responsividade
├── js/
│   └── main.js                  # Lógica do cardápio, carrinho, modais e WhatsApp compiler
├── .env.example                 # Modelo para variáveis de ambiente e segurança
├── .gitignore                   # Arquivos ignorados pelo Git (segurança e build)
├── avaliacoes.html              # Página de depoimentos e reputação 5.0 estrelas
├── cardapio.html                # Página dedicada do cardápio completo
├── contato.html                 # Página de contato, localização e formulário de pedido
├── delivery.html                # Página sobre raio de entrega, taxas e horários
├── index.html                   # Página principal (Landing page de alta conversão)
├── package.json                 # Metadados do projeto e scripts npm
├── pizzaria.txt                 # Dados informativos de referência (Google Maps)
├── politica-privacidade.html    # Termos de privacidade e conformidade LGPD
├── publish.bat                  # Script de publicação automatizada para Windows
├── publish.sh                   # Script de publicação automatizada para Linux/macOS
├── sobre.html                   # História, valores e tradição da pizzaria
└── README.md                    # Documentação oficial do repositório
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
Nenhuma dependência externa obrigatória é necessária, pois o projeto é construído em tecnologias nativas da web (HTML5, CSS3, JavaScript ES6+).

### Opção 1: Via VS Code (Live Server)
1. Clone o repositório:
   ```bash
   git clone https://github.com/jairodiasdejesus/la-bonelli-pizzaria.git
   ```
2. Abra a pasta no **VS Code**.
3. Clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.

### Opção 2: Via Node.js / NPX
```bash
# Executar servidor local de desenvolvimento na porta 3000
npm start
```
ou:
```bash
npx serve .
```

### Opção 3: Via Python
```bash
python -m http.server 8000
```
Acesse no navegador: `http://localhost:8000`

---

## 🔒 Segurança & Boas Práticas

- **Proteção de Segredos:** Nenhum token de autenticação, credencial de banco ou chave privada está hardcoded no projeto.
- **Variáveis de Ambiente:** Qualquer integração com APIs de mapas ou gateways de pagamento deve utilizar o arquivo `.env` baseado no modelo disponibilizado em [`.env.example`](.env.example).
- **Git Ignore:** O arquivo [`.gitignore`](.gitignore) está configurado para bloquear `.env`, logs, dependências e arquivos temporários do sistema operacional.

---

## 🔄 Scripts de Publicação e Deploy

Para conectar seu ambiente e sincronizar o projeto diretamente com o GitHub:

### No Windows:
Basta dar dois cliques ou rodar no terminal:
```cmd
.\publish.bat
```

### No Linux / macOS:
```bash
chmod +x publish.sh
./publish.sh
```

### Comandos Git Manuais:
```bash
git init
git branch -M main
git remote add origin https://github.com/jairodiasdejesus/la-bonelli-pizzaria.git
git add .
git commit -m "feat: publicacao do site La Bonelli Pizzaria"
git push -u origin main
```

---

## 🌐 Hospedagem em Produção

O projeto está 100% pronto para publicação estática gratuita e de alta disponibilidade em plataformas como:
- **GitHub Pages:** Ative em `Settings > Pages > Branch: main`
- **Vercel:** Conecte o repositório no dashboard da Vercel
- **Netlify:** Arraste a pasta ou conecte via GitHub

---

## 📍 Informações da Pizzaria

- **Razão Social:** La Bonelli Pizzaria
- **Endereço:** R. Geraldo Fraga de Oliveira, 629 — Jardim São Luís, São Paulo - SP, CEP 05847-620
- **Telefone / WhatsApp:** (11) 92353-5049
- **Horário de Atendimento:** Terça a Domingo, das 18:00 às 23:30
- **Avaliação Google:** ⭐ 5,0 estrelas

---

## 👤 Autor

Desenvolvido e mantido por **[Jairo Dias de Jesus](https://github.com/jairodiasdejesus)**.

---

## 📄 Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).
