import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import { inicializarCarrinho, atualizarPrecoCarrinho, renderizarProdutosCarrinho } from "./src/menuCarrinho";

inicializarCarrinho()
renderizarCatalogo()
renderizarProdutosCarrinho()
atualizarPrecoCarrinho()
inicializarFiltros()