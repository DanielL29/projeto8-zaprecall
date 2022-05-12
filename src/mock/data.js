export const decks = {
    React: [
        { question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript', large: false },
        { question: 'O React é __', answer: 'uma biblioteca JavaScript para construção de interfaces', large: false },
        { question: 'Componentes devem iniciar com __', answer: 'letra maiúscula', large: false },
        { question: 'Podemos colocar __ dentro do JSX', answer: 'expressões', large: false },
        { question: 'O ReactDOM nos ajuda __', answer: 'interagindo com a DOM para colocar componentes React na mesma', large: false },
        { question: 'Usamos o npm para __', answer: 'gerenciar os pacotes necessários e suas dependências', large: false },
        { question: 'Usamos props para __', answer: 'passar diferentes informações para componentes', large: false },
        { question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente', large: true }
    ],
    DragonBall: [
        { question: 'Quem é o pai do gohan?', answer: 'Piccolo (pai é quem cria)', large: false },
        { question: 'Quantos saiyajins restaram?', answer: '6 - Goku, Vegeta, Gohan, Goten, Trunks, Pan', large: false },
        { question: 'Qual o verdadeiro nome do Goku?', answer: 'Kakarotto', large: false },
        { question: 'Oi ___ Goku!', answer: 'eu sou', large: false },
        { question: 'Qualquer inimigo...Vegeta: _____', answer: 'Inseto!', large: false },
        { question: 'é mais de _______!!!', answer: 'oito miiiiiilllll', large: false }
    ],
    OnePiece: [
        { question: 'Qual o nome do protagonista?', answer: 'Luffy (Piratinha que estica)', large: false },
        { question: 'Quantos episodios tem o anime?', answer: '+1000', large: false },
        { question: 'O anime vai acabar? ', answer: 'Só deus sabe', large: false },
        { question: 'O lele-san gosta do anime?', answer: 'Infelizmente não', large: false }
    ]
}

function shuffleDeck() {
    return Math.random() - 0.5
}
decks.React.sort(shuffleDeck)
decks.DragonBall.sort(shuffleDeck)
decks.OnePiece.sort(shuffleDeck)