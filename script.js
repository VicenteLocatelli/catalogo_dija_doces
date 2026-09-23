/* =========================================================
   IRMÃOS MARTINS — CATÁLOGO V2
   Catálogo + Busca + Categorias + Lista de Pedidos + WhatsApp
   ========================================================= */


/* =========================================================
   CONFIGURAÇÕES
   ========================================================= */

// Número do WhatsApp do seu sogro
// Formato: 55 + DDD + número, sem espaços ou símbolos.
const NUMERO_WHATSAPP = "5581991639777";


/* =========================================================
   CATÁLOGO DE PRODUTOS
   =========================================================
   
   Estrutura preparada para receber o catálogo completo.

   Campos:
   - id: identificador único
   - marca: marca do produto
   - nome: nome exibido no catálogo
   - categoria: categoria principal
   - variacao: sabor/modelo/variação
   - embalagem: tipo de embalagem
   - peso: peso ou quantidade
   - preco: preço exibido
   - imagem: URL ou caminho da imagem
*/

const produtos = [

    {
        id: 1,
        marca: "Fini",
        nome: "Balas Fini Gelatina Tubes Melancia",
        categoria: "Balas e Confeitos",
        variacao: "Melancia",
        embalagem: "Pacote",
        peso: "12x240g",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600&auto=format&fit=crop&q=70"
    },

    {
        id: 2,
        marca: "Fini",
        nome: "Balas Fini Ursinhos de Ouro",
        categoria: "Balas e Confeitos",
        variacao: "Ursinhos",
        embalagem: "Pacote",
        peso: "12x90g",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1526737445300-842e4726c518?w=600&auto=format&fit=crop&q=70"
    },

    {
        id: 3,
        marca: "Fini",
        nome: "Balas Fini Tubes Morango Ácido",
        categoria: "Balas e Confeitos",
        variacao: "Morango Ácido",
        embalagem: "Pacote",
        peso: "12x240g",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1575224526378-ef138f24a0d8?w=600&auto=format&fit=crop&q=70"
    },

    {
        id: 4,
        marca: "Mentos",
        nome: "Mentos Stick Rainbow",
        categoria: "Balas e Confeitos",
        variacao: "Rainbow",
        embalagem: "Box",
        peso: "24x14g",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1534482492-2642faef81f4?w=600&auto=format&fit=crop&q=70"
    },

    {
        id: 5,
        marca: "Riclan",
        nome: "Chiclete Buzzy Hortelã",
        categoria: "Balas e Confeitos",
        variacao: "Hortelã",
        embalagem: "Caixa",
        peso: "24x100g",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&auto=format&fit=crop&q=70"
    },

    {
        id: 6,
        marca: "Riclan",
        nome: "Freegells Drops Hortelã",
        categoria: "Balas e Confeitos",
        variacao: "Hortelã",
        embalagem: "Display",
        peso: "12x12g",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=600&auto=format&fit=crop&q=70"
    },

    {
        id: 7,
        marca: "Dori",
        nome: "Confeitos Dori Gomets Sortidos",
        categoria: "Balas e Confeitos",
        variacao: "Sortidos",
        embalagem: "Pacote",
        peso: "12x80g",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&auto=format&fit=crop&q=70"
    },

    {
        id: 8,
        marca: "Hershey's",
        nome: "Chocolate Hershey's Special Dark",
        categoria: "Chocolates",
        variacao: "60%",
        embalagem: "Tablete",
        peso: "20x87g",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600&auto=format&fit=crop&q=70"
    },

    {
        id: 9,
        marca: "Hershey's",
        nome: "Chocolate Hershey's Cookies 'n' Creme",
        categoria: "Chocolates",
        variacao: "Cookies 'n' Creme",
        embalagem: "Tablete",
        peso: "15x92g",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&auto=format&fit=crop&q=70"
    },

    {
        id: 10,
        marca: "M&M's",
        nome: "M&M's Chocolate ao Leite",
        categoria: "Chocolates",
        variacao: "Chocolate ao Leite",
        embalagem: "Bag",
        peso: "24x148g",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&auto=format&fit=crop&q=70"
    },

    {
        id: 11,
        marca: "Santa Helena",
        nome: "Crokíssimo Amendoim Salgado",
        categoria: "Salgadinhos",
        variacao: "Levemente Salgado",
        embalagem: "Pacote",
        peso: "30x40g",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600&auto=format&fit=crop&q=70"
    },

    {
        id: 12,
        marca: "Santa Helena",
        nome: "Crokíssimo Amendoim Pimenta",
        categoria: "Salgadinhos",
        variacao: "Pimenta Suave",
        embalagem: "Pacote",
        peso: "30x40g",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1621996346565-e3d5d6281298?w=600&auto=format&fit=crop&q=70"
    },

    {
        id: 13,
        marca: "Santa Helena",
        nome: "Paçoquita Rolha",
        categoria: "Doces",
        variacao: "Original",
        embalagem: "Display",
        peso: "24x100g",
        preco: "Sob Consulta / Atacado",
        imagem: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600&auto=format&fit=crop&q=70"
    }

];


/* =========================================================
   ESTADO DA APLICAÇÃO
   ========================================================= */

let carrinho = [];

let categoriaAtual = "todos";

let termoBuscaAtual = "";


/* =========================================================
   ELEMENTOS DO DOM
   ========================================================= */

const productGrid = document.getElementById("productGrid");

const searchInput = document.getElementById("searchInput");

const categoryButtons = document.querySelectorAll(".cat-btn");

const cartFloating = document.getElementById("cartFloating");

const cartCount = document.getElementById("cartCount");

const cartModal = document.getElementById("cartModal");

const cartItemsList = document.getElementById("cartItemsList");


/* =========================================================
   FUNÇÕES AUXILIARES
   ========================================================= */

/**
 * Normaliza textos para facilitar a busca.
 *
 * Exemplo:
 * "Morango Ácido" -> "morango acido"
 *
 * Isso permite encontrar produtos mesmo sem acento.
 */
function normalizarTexto(texto) {

    return String(texto || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

}


/**
 * Escapa HTML para evitar que dados de produtos
 * sejam interpretados como código.
 */
function escaparHTML(texto) {

    return String(texto || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/**
 * Retorna a quantidade total de produtos no carrinho.
 */
function obterQuantidadeTotalCarrinho() {

    return carrinho.reduce((total, item) => {
        return total + item.quantidade;
    }, 0);

}


/**
 * Retorna o produto original pelo ID.
 */
function encontrarProduto(idProduto) {

    return produtos.find(produto => produto.id === idProduto);

}


/* =========================================================
   RENDERIZAÇÃO DOS PRODUTOS
   ========================================================= */

function exibirProdutos(listaParaExibir) {

    if (!productGrid) return;

    productGrid.innerHTML = "";

    if (listaParaExibir.length === 0) {

        productGrid.innerHTML = `
            <div class="empty-products">
                <i class="fa-solid fa-magnifying-glass"></i>

                <h3>Nenhum produto encontrado</h3>

                <p>
                    Tente pesquisar por outro nome, marca,
                    sabor ou categoria.
                </p>
            </div>
        `;

        return;
    }


    listaParaExibir.forEach(produto => {

        const card = document.createElement("article");

        card.className = "product-card";

        card.dataset.productId = produto.id;


        card.innerHTML = `

            <div class="product-img-container">

                <span class="product-category-tag">
                    ${escaparHTML(produto.marca)}
                </span>

                <img
                    src="${escaparHTML(produto.imagem)}"
                    alt="${escaparHTML(produto.nome)}"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='https://placehold.co/600x450/f1f3f5/555555?text=Irm%C3%A3os+Martins';"
                >

            </div>


            <div class="product-info">

                <div class="product-brand">
                    ${escaparHTML(produto.marca)}
                </div>

                <h3 class="product-title">
                    ${escaparHTML(produto.nome)}
                </h3>

                ${
                    produto.variacao
                    ?
                    `<div class="product-variation">
                        ${escaparHTML(produto.variacao)}
                    </div>`
                    :
                    ""
                }

                ${
                    produto.peso
                    ?
                    `<div class="product-weight">
                        <i class="fa-solid fa-box"></i>
                        ${escaparHTML(produto.peso)}
                    </div>`
                    :
                    ""
                }

                <div class="product-price">
                    ${escaparHTML(produto.preco)}
                </div>

                <button
                    class="add-btn"
                    type="button"
                    onclick="adicionarAoCarrinho(${produto.id})"
                    aria-label="Adicionar ${escaparHTML(produto.nome)} à lista"
                >
                    <i class="fa-solid fa-plus"></i>
                    Adicionar à Lista
                </button>

            </div>

        `;

        productGrid.appendChild(card);

    });

}


/* =========================================================
   CARRINHO / LISTA DE PEDIDOS
   ========================================================= */

/**
 * Adiciona um produto ao carrinho.
 *
 * Se o produto já estiver na lista,
 * aumenta a quantidade em vez de criar
 * uma nova linha.
 */
function adicionarAoCarrinho(idProduto) {

    const produtoEncontrado = encontrarProduto(idProduto);

    if (!produtoEncontrado) return;


    const itemExistente = carrinho.find(
        item => item.id === idProduto
    );


    if (itemExistente) {

        itemExistente.quantidade += 1;

    } else {

        carrinho.push({

            id: produtoEncontrado.id,

            nome: produtoEncontrado.nome,

            marca: produtoEncontrado.marca,

            preco: produtoEncontrado.preco,

            quantidade: 1

        });

    }


    atualizarCarrinho();

    mostrarFeedbackAdicionado(idProduto);

}


/**
 * Aumenta a quantidade.
 */
function aumentarQuantidade(idProduto) {

    const item = carrinho.find(
        item => item.id === idProduto
    );

    if (!item) return;

    item.quantidade += 1;

    atualizarCarrinho();

}


/**
 * Diminui a quantidade.
 *
 * Quando chega a zero, remove o item.
 */
function diminuirQuantidade(idProduto) {

    const item = carrinho.find(
        item => item.id === idProduto
    );

    if (!item) return;


    item.quantidade -= 1;


    if (item.quantidade <= 0) {

        carrinho = carrinho.filter(
            produto => produto.id !== idProduto
        );

    }


    atualizarCarrinho();

}


/**
 * Remove completamente um produto.
 */
function removerDoCarrinho(idProduto) {

    carrinho = carrinho.filter(
        item => item.id !== idProduto
    );

    atualizarCarrinho();

}


/**
 * Limpa todo o carrinho.
 */
function limparCarrinho() {

    carrinho = [];

    atualizarCarrinho();

}


/* =========================================================
   ATUALIZAÇÃO VISUAL DO CARRINHO
   ========================================================= */

function atualizarCarrinho() {

    const quantidadeTotal = obterQuantidadeTotalCarrinho();


    /* Contador principal */

    if (cartCount) {

        cartCount.textContent = quantidadeTotal;

    }


    /* Botão flutuante */

    if (cartFloating) {

        if (quantidadeTotal > 0) {

            cartFloating.classList.remove("hidden");

        } else {

            cartFloating.classList.add("hidden");

        }

    }


    /* Lista dentro do modal */

    if (cartItemsList) {

        cartItemsList.innerHTML = "";


        if (carrinho.length === 0) {

            cartItemsList.innerHTML = `

                <div class="cart-empty">

                    <i class="fa-solid fa-cart-shopping"></i>

                    <h4>Sua lista está vazia</h4>

                    <p>
                        Adicione produtos para montar seu pedido.
                    </p>

                </div>

            `;

        } else {

            carrinho.forEach(item => {

                const row = document.createElement("div");

                row.className = "cart-item-row";


                row.innerHTML = `

                    <div class="cart-item-info">

                        <span>
                            ${escaparHTML(item.nome)}
                        </span>

                        <small>
                            ${escaparHTML(item.preco)}
                        </small>

                    </div>


                    <div class="cart-item-actions">

                        <button
                            type="button"
                            class="quantity-btn"
                            onclick="diminuirQuantidade(${item.id})"
                            aria-label="Diminuir quantidade"
                        >
                            <i class="fa-solid fa-minus"></i>
                        </button>


                        <span class="cart-item-quantity">
                            ${item.quantidade}
                        </span>


                        <button
                            type="button"
                            class="quantity-btn"
                            onclick="aumentarQuantidade(${item.id})"
                            aria-label="Aumentar quantidade"
                        >
                            <i class="fa-solid fa-plus"></i>
                        </button>


                        <button
                            type="button"
                            class="remove-item-btn"
                            onclick="removerDoCarrinho(${item.id})"
                            aria-label="Remover produto"
                        >
                            <i class="fa-solid fa-trash-can"></i>
                        </button>

                    </div>

                `;


                cartItemsList.appendChild(row);

            });

        }

    }

}


/* =========================================================
   FEEDBACK AO ADICIONAR
   ========================================================= */

function mostrarFeedbackAdicionado(idProduto) {

    const card = document.querySelector(
        `.product-card[data-product-id="${idProduto}"]`
    );

    if (!card) return;


    const botao = card.querySelector(".add-btn");

    if (!botao) return;


    const textoOriginal = botao.innerHTML;


    botao.innerHTML = `
        <i class="fa-solid fa-check"></i>
        Adicionado
    `;


    botao.classList.add("added");


    setTimeout(() => {

        botao.innerHTML = textoOriginal;

        botao.classList.remove("added");

    }, 900);

}


/* =========================================================
   MODAL DO CARRINHO
   ========================================================= */

function abrirModalCarrinho() {

    if (!cartModal) return;

    cartModal.classList.remove("hidden");

    document.body.classList.add("modal-open");

}


function fecharModalCarrinho() {

    if (!cartModal) return;

    cartModal.classList.add("hidden");

    document.body.classList.remove("modal-open");

}


/* Fecha clicando fora do modal */

if (cartModal) {

    cartModal.addEventListener("click", event => {

        if (event.target === cartModal) {

            fecharModalCarrinho();

        }

    });

}


/* Fecha com ESC */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        fecharModalCarrinho();

    }

});


/* =========================================================
   WHATSAPP
   ========================================================= */

function enviarPedidoWhatsApp() {

    if (carrinho.length === 0) return;


    let mensagem =
        "Olá! Gostaria de fazer um pedido:\n\n";


    carrinho.forEach(item => {

        mensagem +=
            `• ${item.nome} — ${item.quantidade} unidade${item.quantidade > 1 ? "s" : ""}\n`;

    });


    mensagem +=
        "\nPoderia confirmar a disponibilidade e os valores totais?\n\n";

    mensagem +=
        "Obrigado!";


    const mensagemCodificada =
        encodeURIComponent(mensagem);


    const linkWhatsapp =
        `https://wa.me/${NUMERO_WHATSAPP}?text=${mensagemCodificada}`;


    /*
     * Não abrir uma nova aba.
     *
     * O próprio WhatsApp/navegador decide o destino:
     * - celular → WhatsApp, quando disponível
     * - desktop → WhatsApp Web/app conforme o ambiente
     */
    window.location.href = linkWhatsapp;

}



/* =========================================================
   BUSCA E FILTROS
   ========================================================= */

function filtrarEBuscar() {

    if (!searchInput) return;


    termoBuscaAtual =
        normalizarTexto(searchInput.value);


    const produtosFiltrados = produtos.filter(produto => {


        /* ---------------------------------------------
           FILTRO POR CATEGORIA
           --------------------------------------------- */

        const correspondeCategoria =
            categoriaAtual === "todos" ||
            normalizarTexto(produto.categoria) ===
            normalizarTexto(categoriaAtual);


        /* ---------------------------------------------
           BUSCA AMPLA
           
           Procura em:
           - nome
           - marca
           - categoria
           - variação
           - embalagem
           - peso
           --------------------------------------------- */

        const textoProduto = normalizarTexto(`

            ${produto.nome}
            ${produto.marca}
            ${produto.categoria}
            ${produto.variacao || ""}
            ${produto.embalagem || ""}
            ${produto.peso || ""}

        `);


        const correspondeBusca =
            !termoBuscaAtual ||
            textoProduto.includes(termoBuscaAtual);


        return
            correspondeCategoria &&
            correspondeBusca;

    });


    exibirProdutos(produtosFiltrados);


    atualizarContadorResultados(
        produtosFiltrados.length
    );

}


/**
 * Atualiza elementos opcionais do novo layout.
 *
 * Se ainda não existirem no HTML atual,
 * simplesmente não faz nada.
 */
function atualizarContadorResultados(quantidade) {

    const contador =
        document.getElementById("productResultCount");


    if (!contador) return;


    contador.textContent =
        `${quantidade} produto${quantidade !== 1 ? "s" : ""}`;

}


/* =========================================================
   BOTÕES DE CATEGORIA
   ========================================================= */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {


        /* Remove ativo dos outros */

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        /* Ativa botão selecionado */

        button.classList.add("active");


        /* Atualiza categoria */

        categoriaAtual =
            button.getAttribute("data-category") ||
            "todos";


        /* Refaz filtro */

        filtrarEBuscar();

    });

});


/* =========================================================
   BUSCA
   ========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filtrarEBuscar
    );

}


/* =========================================================
   ATALHOS DE BUSCA
   ========================================================= */

/*
   Permite futuramente criar botões como:

   "Mentos"
   "Fini"
   "Chocolate"
   "Paçoquita"

   Basta chamar:

   pesquisarProduto("Mentos")
*/

function pesquisarProduto(termo) {

    if (!searchInput) return;


    searchInput.value = termo || "";

    filtrarEBuscar();


    /* Leva o usuário até os produtos */

    const grid =
        document.getElementById("productGrid");


    if (grid) {

        grid.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =========================================================
   LIMPAR BUSCA
   ========================================================= */

function limparBusca() {

    if (!searchInput) return;


    searchInput.value = "";

    termoBuscaAtual = "";

    filtrarEBuscar();

}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

function inicializarCatalogo() {

    exibirProdutos(produtos);

    atualizarCarrinho();

    atualizarContadorResultados(
        produtos.length
    );

}


/* Inicia quando o DOM estiver pronto */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        inicializarCatalogo
    );

} else {

    inicializarCatalogo();

}


/* =========================================================
   EXPOSIÇÃO DE FUNÇÕES
   =========================================================
   
   Mantemos as funções disponíveis globalmente
   porque o HTML atual utiliza onclick="..."
*/

window.adicionarAoCarrinho =
    adicionarAoCarrinho;

window.aumentarQuantidade =
    aumentarQuantidade;

window.diminuirQuantidade =
    diminuirQuantidade;

window.removerDoCarrinho =
    removerDoCarrinho;

window.limparCarrinho =
    limparCarrinho;

window.abrirModalCarrinho =
    abrirModalCarrinho;

window.fecharModalCarrinho =
    fecharModalCarrinho;

window.enviarPedidoWhatsApp =
    enviarPedidoWhatsApp;

window.pesquisarProduto =
    pesquisarProduto;

window.limparBusca =
    limparBusca;