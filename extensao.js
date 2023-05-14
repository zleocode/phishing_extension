const form = document.querySelector("#form");
const campo = document.querySelector("input[name='campo']");
const resultado = document.querySelector("#resultado");

const listaComparacao = [
    "https://www.mercadolivre.com.br/",
    "https://www.americanas.com.br/",
    "https://www.magazineluiza.com.br/",
    "https://www.submarino.com.br/",
    "https://www.shoptime.com.br/",
    "https://www.amazon.com.br/",
    "https://www.casasbahia.com.br/",
    "https://www.extra.com.br/",
    "https://www.pontofrio.com.br/",
    "https://www.carrefour.com.br/",
    "https://www.netshoes.com.br/",
    "https://www.zattini.com.br/",
    "https://www.dafiti.com.br/",
    "https://www.lojasrenner.com.br/",
    "https://www.riachuelo.com.br/",
    "https://www.marisa.com.br/",
    "https://www.cea.com.br/",
    "https://www.havan.com.br/",
    "https://www.saraiva.com.br/",
    "https://www.livrariacultura.com.br/",
    "https://www.leroymerlin.com.br/",
    "https://www.magazineluiza.com.br/marketplace/",
    "https://www.madeiramadeira.com.br/",
    "https://www.kalunga.com.br/",
    "https://www.fastshop.com.br/",
    "https://www.tokstok.com.br/",
    "https://www.pernambucanas.com.br/",
    "https://www.lojaskd.com.br/",
    "https://www.etna.com.br/",
    "https://www.casasajita.com.br/",
    "https://www.petz.com.br/",
    "https://www.petlove.com.br/",
    "https://www.petco.com.br/",
    "https://www.zara.com/br/",
    "https://www.adidas.com.br/",
    "https://www.nike.com.br/",
    "https://www.centauro.com.br/",
    "https://www.decathlon.com.br/",
    "https://www.apple.com/br/",
    "https://www.samsung.com.br/",
    "https://www.kabum.com.br/",
    "https://www.walmart.com.br/",
    "https://www.kaufen.com.br/",
    "https://www.farmrio.com.br/",
    "https://www.farfetch.com/br/",
    "https://www.electrolux.com.br/",
    "https://www.colombo.com.br/",
    "https://www.angeloni.com.br/",
    "https://www.buscape.com.br/",
    "https://www.zoom.com.br/",];

const listaEncurtada = [
  "bit.ly",
  "tinyurl.com",
  "goo.gl",
  "ow.ly",
  "buff.ly",
  "t.co",
  "adf.ly",
  "is.gd",
  "mcaf.ee",
  "fur.ly",
  "tr.im",
  "ow.ly",
  "tiny.cc",
  "v.gd",
  "cli.gs",
  "idek.net",
  "kl.am",
  "soo.gd",
  "zz.gd",
  "yourls.org"
];

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const input = campo.value;
  const isEncurtada = listaEncurtada.some(valor => input.includes(valor));
  const isConfiavel = listaComparacao.some(valor => input.includes(valor));
  
  if (isEncurtada) {
    resultado.textContent = 'Esta URL é encurtada e não é possível verificar a confiabilidade.';
    resultado.className = 'warning';
  } else if (isConfiavel) {
    resultado.textContent = 'Este Site é Confiável.';
    resultado.className = 'success';
  } else if (input.trim() === '') {
    resultado.textContent = 'Por favor insira um link para fazer a verificação.';
    resultado.className = 'warning';
  } else {
    resultado.textContent = 'Este Site não é confiável.';
    resultado.className = 'error';
  }
});
