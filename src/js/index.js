// Single line comment

/*
 Multi line comment 
*/

/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que  marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
*/

const buttons = document.querySelectorAll('.button'); // getting by the s
const characters = document.querySelectorAll('.character');

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {

        unselectButton();
        unselectCharacter();

        button.classList.add('selected');
        characters[index].classList.add('selected');
    });
});


function unselectCharacter() {
    const characterSelected = document.querySelector('.character.selected');
    characterSelected.classList.remove('selected');
}

function unselectButton() {
    const buttonSelected = document.querySelector('.button.selected');
    buttonSelected.classList.remove('selected');
}
// event listeners just work in one element, not in a list
