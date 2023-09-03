import { catalogo } from './utils'
import { adicionarAoCarrinho } from './menuCarrinho'

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `
      <div class="shadow-xl shadow-slate-400 w-48 m-2 flex flex-col p-2 justify-between group rounded-lg ${produtoCatalogo.feminino ? 'feminino' : 'masculino'}" id="card-produto-${produtoCatalogo.id}">
        <img class="rounded-lg group-hover:scale-110 duration-300 my-3" src="./assets/img/${produtoCatalogo.imagem}" alt="">
        <p class="text-sm">${produtoCatalogo.marca}</p>
        <p class="text-sm">${produtoCatalogo.nome}</p>
        <p class="text-sm">${produtoCatalogo.preco}</p>
        <button id="adicionar-${produtoCatalogo.id}" class="bg-slate-950 text-slate-200 hover:bg-slate-900 p-1 rounded-lg"><i class=" fa-solid fa-cart-plus"></i></button>
      </div>
    `;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  for (const produtoCatalogo of catalogo) {
    document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id))
  }
}