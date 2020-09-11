let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
   let meuSrc = minhaImagem.getAttribute('src');
   if(meuSrc === 'imagens/b9cf98599524d62a5611cd50d078ec7c.jpg') {
     minhaImagem.setAttribute ('src','imagens/assdfse.jpg');
   } else {
     minhaImagem.setAttribute ('src','imagens/b9cf98599524d62a5611cd50d078ec7c.jpg');
   }
  }
  let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
 if (!meuNome) {
  defineNomeUsuario ();
  }
else
{
  localStorage.setItem('nome', meuNome);
  meuCabecalho.textContent = 'word coins.olar, ' + meuNome;
}
}
if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'word coins.olar, ' + nomeGuardado;
}

meuBotao.onclick = function() { defineNomeUsuario();
}
