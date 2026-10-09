const livros = [];

const campoTitulo = document.getElementById('campoTitulo');
const campoAutor = document.getElementById('campoAutor');
const campoCapa = document.getElementById('campoCapa');
const botaoAdicionar = document.getElementById('botaoAdicionar');
const mensagemErro = document.getElementById('mensagemErro');
const listaLivros = document.getElementById('listaLivros');

function cadastrarLivro() {
  const titulo = campoTitulo.value.trim();
  const autor = campoAutor.value.trim();
  const capa = campoCapa.value.trim();

  if (titulo === '' || autor === '' || capa === '') {
    mostrarErro('Preencha todos os campos antes de cadastrar o livro.');
    return;
  }

  esconderErro();

  livros.push({ titulo: titulo, autor: autor, capa: capa });
  adicionarLivroNaTela(livros.length - 1);

  campoTitulo.value = '';
  campoAutor.value = '';
  campoCapa.value = '';
  campoTitulo.focus();
}

function adicionarLivroNaTela(indice) {
  const livro = livros[indice];

  const item = document.createElement('article');
  item.className = 'livro';

  const capa = document.createElement('img');
  capa.className = 'livro-capa';
  capa.src = livro.capa;
  capa.alt = 'Capa do livro ' + livro.titulo;
  capa.onerror = function () {
    capa.onerror = null;
    capa.src = 'midias/capa-reserva.png';
  };

  const info = document.createElement('div');
  info.className = 'livro-info';

  const titulo = document.createElement('p');
  titulo.className = 'livro-titulo';
  titulo.textContent = livro.titulo;

  const autor = document.createElement('p');
  autor.className = 'livro-autor';
  autor.textContent = livro.autor;

  info.appendChild(titulo);
  info.appendChild(autor);

  const botaoRemover = document.createElement('button');
  botaoRemover.className = 'botao-remover';
  botaoRemover.title = 'Remover livro';
  botaoRemover.setAttribute('aria-label', 'Remover ' + livro.titulo);
  botaoRemover.innerHTML = '<img src="midias/icone-remover.png" alt="">';

  botaoRemover.addEventListener('click', function () {
    const posicao = livros.indexOf(livro);
    if (posicao > -1) {
      livros.splice(posicao, 1);
    }
    item.remove();
  });

  item.appendChild(capa);
  item.appendChild(info);
  item.appendChild(botaoRemover);

  listaLivros.appendChild(item);
}

function mostrarErro(texto) {
  mensagemErro.textContent = texto;
  mensagemErro.classList.add('visivel');
}

function esconderErro() {
  mensagemErro.textContent = '';
  mensagemErro.classList.remove('visivel');
}

botaoAdicionar.addEventListener('click', cadastrarLivro);

[campoTitulo, campoAutor, campoCapa].forEach(function (campo) {
  campo.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
      cadastrarLivro();
    }
  });
});