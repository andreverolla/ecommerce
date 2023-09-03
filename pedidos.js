import { lerLocalStorage, desenharProdutoNoCarrinhoSimples } from "./src/utils";

function criarPedidoHistorico(pedidoComData) {
  const elementoPedido = `
    <p class="text-xl text-bold my-4 ">${new Date(pedidoComData.dataPedido).toLocaleDateString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })}</p>
    <section class="bg-slate-300 border border-slate-400 p-3 rounded-lg" id="container-pedidos-${pedidoComData.dataPedido}"></section>
  `
  const main = document.getElementsByTagName('main')[0]
  main.innerHTML += elementoPedido

  for (const idProduto in pedidoComData.pedido) {
    desenharProdutoNoCarrinhoSimples(idProduto, `container-pedidos-${pedidoComData.dataPedido}`, pedidoComData.pedido[idProduto])
  }
}

function renderizarHistoricoPedidos() {
  const historico = lerLocalStorage('historico')
  for (const pedidoComData of historico) {
    criarPedidoHistorico(pedidoComData)
  }
}

renderizarHistoricoPedidos()