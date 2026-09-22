// Número de WhatsApp do seu sogro (Ex: 55 + DDD + Número sem espaços)
const NUMERO_WHATSAPP = "5581991639777"; 

// Lista completa de produtos
const produtos = [
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

// Carrinho de compras (lista de pedidos)
let carrinho = [];

// Elementos do DOM
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.cat-btn');
const cartFloating = document.getElementById('cartFloating');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const cartItemsList = document.getElementById('cartItemsList');

let categoriaAtual = 'todos';

// Renderizar produtos na tela
function exibirProdutos(listaParaExibir) {
    productGrid.innerHTML = '';

    if (listaParaExibir.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #718096; padding: 40px;">Nenhum produto encontrado.</p>';
        return;
    }

    listaParaExibir.forEach(produto => {
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
                <button class="add-btn" onclick="adicionarAoCarrinho(${produto.id})">
                    <i class="fa-solid fa-cart-plus"></i> Adicionar à Lista
                </button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Adicionar produto ao carrinho
function adicionarAoCarrinho(idProduto) {
    const produtoEncontrado = produtos.find(p => p.id === idProduto);
    if (produtoEncontrado) {
        carrinho.push(produtoEncontrado);
        atualizarCarrinho();
    }
}

// Remover item do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Atualizar contador e exibição do carrinho
function atualizarCarrinho() {
    cartCount.textContent = carrinho.length;

    if (carrinho.length > 0) {
        cartFloating.classList.remove('hidden');
    } else {
        cartFloating.classList.add('hidden');
        fecharModalCarrinho();
    }

    cartItemsList.innerHTML = '';
    carrinho.forEach((item, index) => {
        const row = document.createElement('div');
        row.className = 'cart-item-row';
        row.innerHTML = `
            <div class="cart-item-info">
                <span>${item.nome}</span>
                <small>${item.preco}</small>
            </div>
            <button class="remove-item-btn" onclick="removerDoCarrinho(${index})">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        cartItemsList.appendChild(row);
    });
}

// Abrir e fechar modal
function abrirModalCarrinho() {
    cartModal.classList.remove('hidden');
}

function fecharModalCarrinho() {
    cartModal.classList.add('hidden');
}

// Enviar pedido consolidado via WhatsApp
function enviarPedidoWhatsApp() {
    if (carrinho.length === 0) return;

    let mensagem = "Olá! Gostaria de fazer o pedido dos seguintes produtos:\n\n";
    carrinho.forEach((item, index) => {
        mensagem += `${index + 1}. *${item.nome}* (${item.preco})\n`;
    });
    mensagem += "\nPoderia confirmar a disponibilidade e os valores totais?";

    const mensagemCodificada = encodeURIComponent(mensagem);
    const linkWhatsapp = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensagemCodificada}`;

    window.open(linkWhatsapp, '_blank');
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

// Filtrar por texto e categoria
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

// Inicializar a aplicação
exibirProdutos(produtos);