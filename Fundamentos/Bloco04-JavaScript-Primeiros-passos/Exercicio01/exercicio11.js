const pecaDeXadrez = "Torre".toLocaleLowerCase();

console.log(pecaDeXadrez);

    switch (pecaDeXadrez) {
        case 'torre':
            console.log("frente")
            break;
        case 'peão':
            console.log("um passo para frente ou para trás")
            break;
        case 'bispo':
            console.log("diagonal");
            break;
        case 'cavalo':
            console.log("avança para esquerda, direita, frente ou para trás em um formato de L");
            break;
        default:
            break;
    }
