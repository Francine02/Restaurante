//combos
import comb1 from "./img/Combs/combinado-1.jpg";
import comb2 from "./img/Combs/combinado-2.jpg";
import comb3 from "./img/Combs/combinado-3.jpg";
import comb4 from "./img/Combs/combinado-4.webp";

//hots
import guioza from "./img/Hot/guioza.jpg";
import hot from "./img/Hot/hot-roll.jpg";
import lamen from "src/img/Hot/lamen.jpg";
import yaki from "./img/Hot/yakissoba.jpg";

//bebidas
import coca from "./img/Drinks/cocacola.webp";
import juiceLemon from "./img/Drinks/lemon.jpg";
import juiceOrange from "./img/Drinks/orange.webp";

//Combos - criação de lista
const combinado1 = {
    nome: "Combinado 1",
    preco: "129,9",
    imagem: comb1, 
    sobre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptatum corrupti reprehenderit eum ullam deleniti. Ratione repellat fugiat ad amet eum quidem culpa rem deserunt, autem magnam ipsam itaque consequatur!"
}

const combinado2 = {
    nome: "Combinado 2",
    preco: "189,9",
    imagem: comb2, 
    sobre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptatum corrupti reprehenderit eum ullam deleniti."
}

const combinado3 = {
    nome: "Combinado 3",
    preco: "209,9",
    imagem: comb3, 
    sobre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptatum corrupti reprehenderit eum ullam deleniti. Ratione repellat fugiat ad amet eum quidem culpa rem deserunt, autem magnam ipsam itaque consequatur! Ratione repellat fugiat ad amet eum quidem culpa rem deserunt, autem magnam ipsam itaque consequatur!"
}

const combinado4 = {
    nome: "Combinado 4",
    preco: "59,9",
    imagem: comb4, 
    sobre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
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