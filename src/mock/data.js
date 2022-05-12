export const deck = [
    { question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript', flipped: false, large: false, status: '' },
    { question: 'O React é __', answer: 'uma biblioteca JavaScript para construção de interfaces', flipped: false, large: false, status: '' },
    { question: 'Componentes devem iniciar com __', answer: 'letra maiúscula', flipped: false, large: false, status: '' },
    { question: 'Podemos colocar __ dentro do JSX', answer: 'expressões', flipped: false, large: false, status: '' },
    { question: 'O ReactDOM nos ajuda __', answer: 'interagindo com a DOM para colocar componentes React na mesma', flipped: false, large: false, status: '' },
    { question: 'Usamos o npm para __', answer: 'gerenciar os pacotes necessários e suas dependências', flipped: false, large: false, status: '' },
    { question: 'Usamos props para __', answer: 'passar diferentes informações para componentes', flipped: false, large: false, status: '' },
    { question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente novamente novamente novamente novamente novamente', flipped: false, large: true, status: '' }
]

function shuffleCards() {
    return Math.random() - 0.5
}
deck.sort(shuffleCards)