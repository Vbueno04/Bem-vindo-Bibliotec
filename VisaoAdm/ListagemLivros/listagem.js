const livros = document.querySelectorAll(".livro");

const botaoAnterior = document.getElementById("pagina-anterior")
const botaoProxima = document.getElementById("proxima-pagina")
const numeroPagina = document.querySelector(".pagina-atual")
const quantidadeLivros = document.querySelector(".quantidade-livros")

console.log(botaoAnterior);
console.log(botaoProxima);


// Configuração da paginação 

// Define em quantos livro serão mostrados em cada capa 
const livrosPorPagina = 4;

// Guarda qual página está sendo exibida, começamdo na página 1
let paginaAtual = 1;

//* Calculando o total de páginas 

// Divide a quantidade total de livros pela quantidade de livros por página
// Math.ceil () -> arredonda o resultado para cima 

// Exemplo: 
// 10 livros / 4 paginas = 2.5
// Math.cell() = 2.5 arredondado para cima -> 3 páginas 
const totalPaginas = Math.ceil (livros.length / livrosPorPagina);

//* Função por mostrar a págna (atualizar os elementos)

function mostrarPagina() {

    // Descobre o índice do primeiro livro que deve aparecer

    // Pagina 1:
    // (1-1) x 4 = 0

    // Pagina 2:
    // (2-1) x 4 = 4

    // livros = [1, 2, 3, 4, 5, 6, 7, 8]
    // Página 1 = 1, 2, 3, 4
    // Página 2 = 5, 6, 7, 8
    const inicio = (paginaAtual - 1) * livrosPorPagina;

    // Descobre até onde os livros devem ser exibidos

    // Página 1: inicio 0 -> fim 0 + 4 = 4
    // Página 2: inicio 0 -> fim 4 + 4 = 8
    const fim = inicio + livrosPorPagina;

    // Percorre toda a lista de livros econtrados no HTML
    // "livro" representa o elemento atual
    // "posicao" representa a posição desse livro na lista 
    livros.forEach((livro, posicao) => {

        // inicio na página 1 = 0
        // fim = 4

        // Verifica se o indice/posicao do livro está dentro do intervalo da pagina atual.
        if(posicao >= inicio && posicao < fim ) {
            // se estiver dentro do intervalo, mostra o livro
            livro.style.display = "grid"
        }
        else {
            // se não estiver, esconde o livro
            livro.style.display = "none"
        }
    })

    // Atualiza no HTML o número da página atual 
    numeroPagina.textContent = paginaAtual;

    // Inicialmente, consideramos "fim" como a posição o ú~timo livro mostrado 
    let ultimoLivro = fim; 

    // Se o valor ultrapassar a quantidade real de livros, usamos a quantidade total.
    if(ultimoLivro > livros.length) {
        ultimoLivro = livros.length
    };

    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros`
};

// Evento de click no botão de próxima página

botaoProxima.addEventListener("click", () => {
    //Só permite avançar se ainda existir uma próxima página
    if(paginaAtual < totalPaginas){

        // Avança uma página
        // paginaAtual = paginaAtual + 1
        paginaAtual++

        // Atualiza os livros exibidos na tela
        mostrarPagina()
    }
})

// Evento de click no botão de págima anterior 

botaoAnterior.addEventListener("click", () => {
    // Só permite voltar se não estivermos na primeira página 
    if(paginaAtual > 1){

        // Voltamos uma página 
        paginaAtual --

        //Atualiza os livros exixbidos na tela
        mostrarPagina()
    }
})

// Quando a página carregar, precisamos executar a função de mostrar página uma vez para esconder os livros que não pertencem a primeira página 
mostrarPagina ()