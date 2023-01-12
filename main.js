async function shortenLink() {
  // obtém o link do formulário
  var link = document.getElementById("link").value;
  // chama a API do TinyURL com o link original
  const response = await fetch("https://tinyurl.com/api-create.php?url=" + link);
  // obtém o link encurtado da resposta da API
  const shortLink = await response.text();
  // exibe o link encurtado no HTML
  var shortLinkContainer = document.querySelector(".short-link");
  shortLinkContainer.innerHTML = "";
  var a = document.createElement("a");
  a.href = shortLink;
  a.textContent = shortLink;
  shortLinkContainer.appendChild(a);
  // copia o link encurtado para a área de transferência
  var tempInput = document.createElement("input");
  tempInput.value = shortLink;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  // exibe mensagem de sucesso ao copiar link
  var success = document.querySelector(".success");
  success.textContent = "Link copiado com sucesso!";
  setTimeout(function() {
    success.textContent = "";
  }, 2000);
}