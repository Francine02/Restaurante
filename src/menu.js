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
    nome: "Combinado 1",
    preco: "129,90",
    imagem: comb1, 
    sobre: "Uma experiência gastronômica única, criada pelo talento e criatividade dos nossos chefs, este combinado oferece uma mistura surpreendente de sabores e texturas, com rolos exclusivos e combinações inovadoras que desafiam as expectativas."
}

const combinado2 = {
    nome: "Combinado 2",
    preco: "189,90",
    imagem: comb2, 
    sobre: "Uma seleção cuidadosamente elaborada dos clássicos favoritos da culinária japonesa, apresentando uma variedade de nigiri, sashimi e rolos de sushi, cada um ressaltando o frescor e a qualidade dos ingredientes."
}

const combinado3 = {
    nome: "Combinado 3",
    preco: "209,90",
    imagem: comb3, 
    sobre: "Para os apreciadores mais exigentes, este combinado apresenta uma seleção dos melhores cortes de peixe fresco, cuidadosamente escolhidos à mão, combinados com arroz delicadamente temperado e envoltos em algas crocantes, garantindo uma experiência de sushi verdadeiramente luxuosa."
}

const combinado4 = {
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
    nome: "Guioza",
    preco: "24,99",
    imagem: guioza, 
    sobre: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
}

const hotRoll = {
    nome: "Hot Roll",
    preco: "14,99",
    imagem: hot, 
    sobre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
}

const lame = {
    nome: "Lamen",
    preco: "44,99",
    imagem: lamen, 
    sobre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptatum corrupti reprehenderit eum ullam deleniti."
}

const yak = {
    nome: "Yakissoba",
    preco: "34,99",
    imagem: yaki, 
    sobre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptatum corrupti reprehenderit eum ullam deleniti."
}

export const quentes = [
    guio,
    hotRoll,
    lame,
    yak
]

//Bebidas - criação de lista
const cocaCola = {
    nome: "Coca Cola",
    preco: "10,00",
    imagem: coca
}

const sucoLe = {
    nome: "Suco de limão",
    preco: "10,00",
    imagem: juiceLemon
}

const sucoLa = {
    nome: "Suco de laranja",
    preco: "10,00",
    imagem: juiceOrange
}

export const beb = [
    cocaCola,
    sucoLe,
    sucoLa
] 