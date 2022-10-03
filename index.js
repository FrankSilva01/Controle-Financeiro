const item = document.querySelector("#entrada");
const itensGasto = document.querySelector("#itemGasto")
const ganho = document.querySelector("#valorGanho");
const gasto = document.querySelector("#valorGasto");
const btnAdc = document.querySelector("#BtnAdicionar");
const bntAdcValor = document.querySelector("#btnAdicionarValor");
const bntAdcGasto = document.querySelector("#BtnAdicionarGasto");
const lista = item.value;
const listaValor = document.querySelector("#listaValor");
const listaGasto = document.querySelector("#listaGastos")
const listaSaida = document.querySelector("#listaSaida")

btnAdc.addEventListener("click", (e) => {
  e.preventDefault();
  const itemGanho = item.value;

  console.log(itemGanho);
  adicionarLista();
});

bntAdcGasto.addEventListener("click", (e) => {
  e.preventDefault();
  const itensGastos = itensGasto.value;

  console.log(itensGastos);
  adicionarGastos();
});

// bntAdcValor.addEventListener("click", (e) => {
//   e.preventDefault();

//   const valorGasto = gasto.value;
//   console.log(valorGasto);
//   adicionarPreco();
// });

function adicionarLista() {
  li = document.createElement("li");
  itens = item.value;

  li.textContent = "Item:" + " " + itens[0].toUpperCase() + itens.substring(1);

  // select the ul menu element
  const listaItem = document.querySelector("#listaItem");
  listaItem.appendChild(li);

  li = document.createElement("li");
  li.style.backgroundColor = "green";
  
  li.textContent = "Valor: " + "R$" + " " + ganho.value;

  // select the ul menu element
  const listaValor = document.querySelector("#listaValor");
  listaItem.appendChild(li);
  valorFinal();
}

function adicionarGastos() {
  li = document.createElement("li");
  itens = itensGasto.value;

  li.textContent = "Item:" + " " + itens[0].toUpperCase() + itens.substring(1);

  // select the ul menu element
  const listaGastos = document.querySelector("#listaGastos");
  listaGastos.appendChild(li);

  li = document.createElement("li");
  li.style.backgroundColor = "red";
  
  li.textContent = "Valor: " + "R$" + " " + gasto.value;

  // select the ul menu element
  const listaSaidas = document.querySelector("#listaSaida");
  listaGastos.appendChild(li);
  valorFinal();
}


function valorFinal() {
  const total = document.querySelector(".total");
  let totalGanho = [ganho.value];
  let totalGasto = [gasto.value];

  for (let i = 0; i < totalGanho.length; i++) {
    total.innerHTML = "Total: " + totalGanho[i] + totalGasto[i];
      
  }
}
