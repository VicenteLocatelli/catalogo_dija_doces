// Número de WhatsApp do seu sogro (Ex: 55 + DDD + Número sem espaços)
const NUMERO_WHATSAPP = "5581991639777"; 

// Lista completa de produtos (atualizada com os novos prints do catálogo)
const produtos = [
    // --- Balas e Confeitos ---
    {
        id: 1,
        nome: "Balas Fini Gelatina Tubes Melancia 12x240g",
        categoria: "Balas e Confeitos",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        nome: "Balas Fini Ursinhos de Ouro 12x90g",
        categoria: "Balas e Confeitos",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1526737445300-842e4726c518?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        nome: "Balas Fini Tubes Morango Ácido 12x240g",
        categoria: "Balas e Confeitos",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1575224526378-ef138f24a0d8?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 4,
        nome: "Balas Mentos Stick Rainbow Box 24x14g",
        categoria: "Balas e Confeitos",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1534482492-2642faef81f4?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 5,
        nome: "Chiclete Buzzy Hortelã Cx 24x100g",
        categoria: "Balas e Confeitos",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 6,
        nome: "Balas Freegells Drops Hortelã 12x12g",
        categoria: "Balas e Confeitos",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 7,
        nome: "Confeitos Dori Gomets Sortidos 12x80g",
        categoria: "Balas e Confeitos",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&auto=format&fit=crop&q=60"
    },

    // --- Chocolates ---
    {
        id: 8,
        nome: "Chocolate Hershey's Special Dark 60% 20x87g",
        categoria: "Chocolates",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 9,
        nome: "Chocolate Hershey's Cookies 'n' Creme 15x92g",
        categoria: "Chocolates",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 10,
        nome: "Confeitos M&M's Chocolate ao Leite Bag 24x148g",
        categoria: "Chocolates",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&auto=format&fit=crop&q=60"
    },

    // --- Salgadinhos e Doces Tradicionais (Paçocas) ---
    {
        id: 11,
        nome: "Salgadinho Crokíssimo Pct Salgado 30x40g",
        categoria: "Salgadinhos",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 12,
        nome: "Salgadinho Crokíssimo Pimenta 30x40g",
        categoria: "Salgadinhos",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1621996346565-e3d5d6281298?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 13,
        nome: "Paçoquita Santa Helena Rolha Display 24x100g",
        categoria: "Salgadinhos",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&auto=format&fit=crop&q=60"
    }
];

// Elementos do DOM
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.cat-btn');

let categoriaAtual = 'todos';

// Função para renderizar os produtos na tela
function exibirProdutos(listaParaExibir) {
    productGrid.innerHTML = '';

    if (listaParaExibir.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666; padding: 40px;">Nenhum produto encontrado.</p>';
        return;
    }

    listaParaExibir.forEach(produto => {
        const mensagem = encodeURIComponent(`Olá! Tenho interesse no produto: *${produto.nome}* (${produto.preco}). Poderia me passar mais detalhes?`);
        const linkWhatsapp = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensagem}`;

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-container">
                <span class="product-category-tag">${produto.categoria}</span>
                <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${produto.nome}</h3>
                <div class="product-price">${produto.preco}</div>
                <a href="${linkWhatsapp}" target="_blank" class="whatsapp-btn">
                    <i class="fa-brands fa-whatsapp"></i> Pedir pelo WhatsApp
                </a>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Filtrar por categoria
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        categoriaAtual = button.getAttribute('data-category');
        filtrarEBuscar();
    });
});

// Filtrar por texto digitado e categoria combinados
function filtrarEBuscar() {
    const termoBusca = searchInput.value.toLowerCase().trim();

    const produtosFiltrados = produtos.filter(produto => {
        const correspondeCategoria = categoriaAtual === 'todos' || produto.categoria === categoriaAtual;
        const correspondeBusca = produto.nome.toLowerCase().includes(termoBusca);
        return correspondeCategoria && correspondeBusca;
    });

    exibirProdutos(produtosFiltrados);
}

searchInput.addEventListener('input', filtrarEBuscar);

// Inicializar a página
exibirProdutos(produtos);