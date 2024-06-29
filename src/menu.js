//combos
import comb1 from "./img/Combs/combinado-1.jpg";
import comb2 from "./img/Combs/combinado-2.jpg";
import comb3 from "./img/Combs/combinado-3.jpg";
import comb4 from "./img/Combs/combinado-4.webp";

//hots
import guioza from "./img/Hot/guioza.jpg";
import hot from "./img/Hot/hot-roll.jpg";
import lamen from "./img/Hot/lamen.jpg";
import yaki from "./img/Hot/yakissoba.jpg";

//bebidas
import coca from "./img/Drinks/cocacola.webp";
import juiceLemon from "./img/Drinks/lemon.jpg";
import juiceOrange from "./img/Drinks/orange.webp";

//Combos - criação de lista
const combinado1 = {
    id: 1,
    nome: "Combinado 1",
    preco: "129,90",
    imagem: comb1, 
    sobre: "Uma experiência gastronômica única, criada pelo talento e criatividade dos nossos chefs, este combinado oferece uma mistura surpreendente de sabores e texturas, com rolos exclusivos e combinações inovadoras que desafiam as expectativas."
}

const combinado2 = {
    id:2,
    nome: "Combinado 2",
    preco: "189,90",
    imagem: comb2, 
    sobre: "Uma seleção cuidadosamente elaborada dos clássicos favoritos da culinária japonesa, apresentando uma variedade de nigiri, sashimi e rolos de sushi, cada um ressaltando o frescor e a qualidade dos ingredientes."
}

const combinado3 = {
    id:3,
    nome: "Combinado 3",
    preco: "209,90",
    imagem: comb3, 
    sobre: "Para os apreciadores mais exigentes, este combinado apresenta uma seleção dos melhores cortes de peixe fresco, cuidadosamente escolhidos à mão, combinados com arroz delicadamente temperado e envoltos em algas crocantes, garantindo uma experiência de sushi verdadeiramente luxuosa."
}

const combinado4 = {
    id:4,
    nome: "Combinado 4",
    preco: "59,90",
    imagem: comb4, 
    sobre: "Introduzindo os iniciantes ao maravilhoso mundo do sushi, este combo é cuidadosamente elaborado para oferecer uma experiência suave e acessível."
}

export const combosSushi = [
    combinado1,
    combinado2,
    combinado3,
    combinado4
]

//Quentes - criação de lista
const guio = {
    id:5,
    nome: "Guioza",
    preco: "24,99",
    imagem: guioza, 
    sobre: "Prato típico da culinária chinesa, a guioza é feita de recheio de carne moída ou de legumes que vai dentro de uma massa fina, selada pelas extremidades (exatamente como um pastel), e que é, enfim, cozida ou frita."
}

const hotRoll = {
    id:6,
    nome: "Hot Roll",
    preco: "14,99",
    imagem: hot, 
    sobre: "O hot roll (ou simplesmente hot) ou sushi empanado é um alimento abrasileirado da culinária japonesa, do tipo maki (sushi enrolado), feito com peixe, normalmente salmão ou atum, enrolados com arroz em nori, uma alga marinha."
}

const lame = {
    id:7,
    nome: "Lamen",
    preco: "44,99",
    imagem: lamen, 
    sobre: "Um prato de ramen normalmente é composto por um tipo de macarrão chinês, uma sopa com caldo à base de ossos de porco, peixe ou frango, e temperados com uma base tarê."
}

const yak = {
    id:8,
    nome: "Yakissoba",
    preco: "34,99",
    imagem: yaki, 
    sobre: "Sōsu yakissoba, também conhecido por yakisoba, é um prato de origem japonesa, cujo nome significa, literalmente, macarrão de sobá frito."
}

export const quentes = [
    guio,
    hotRoll,
    lame,
    yak
]

//Bebidas - criação de lista
const cocaCola = {
    id:9,
    nome: "Coca Cola",
    preco: "10,00",
    imagem: coca
}

const sucoLe = {
    id:10,
    nome: "Suco de limão",
    preco: "10,00",
    imagem: juiceLemon
}

const sucoLa = {
    id:11,
    nome: "Suco de laranja",
    preco: "10,00",
    imagem: juiceOrange
}

export const beb = [
    cocaCola,
    sucoLe,
    sucoLa
] 