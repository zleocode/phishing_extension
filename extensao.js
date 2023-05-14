const form = document.querySelector("#form");
const campo = document.querySelector("input[name='campo']");
const resultado = document.querySelector("#resultado");

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var url = tabs[0].url;
  // console.log(url); // exibe a URL da aba ativa no console
  campo.value = url;
});

function verifyCertificate(url) {
  fetch(url)
    .then(response => response.arrayBuffer())
    .then(buffer => {
      const crypto = window.crypto.subtle;
      const cert = new Uint8Array(buffer);
      const signature = new Uint8Array(0); // Assinatura digital do certificado
      const publicKey = null;
      crypto.verify(
        { name: "RSASSA-PKCS1-v1_5" },
        publicKey,
        signature,
        cert
      ).then(result => {
        if (result) {
          console.log("Certificado válido!");
        } else {
          console.log("Certificado inválido!");
        }
      }).catch(error => {
        console.error("Erro ao verificar o certificado:", error);
      });
    })
    .catch(error => {
      console.error("Erro ao buscar o certificado:", error);
    });
}
  


form.addEventListener("submit", function(event) {
  event.preventDefault();

  const input = campo.value.replace(/www\./, '');
  const isEncurtada = listaEncurtada.some(valor => input.includes(valor.replace(/www\./, '')));
  const isConfiavel = listaComparacao.some(valor => input.includes(valor.replace(/www\./, '')));
  
  // verifyCertificate(input);

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
