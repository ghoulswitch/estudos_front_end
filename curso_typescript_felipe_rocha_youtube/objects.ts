//TYPE - é um tipo de dado que poder ser usado para definir um objeto, array ou função
type User = {
    firstName: string
    age: number
    email: string
    password?: string //o ponto de interrogação indica que a propriedade é opcional
    orders?: Orders[]
};

//criando um tipo de dado Orders que faz parte do tipo User 
type Orders = {
    productId: string
    price: number
}

//criando um objeto do tipo User; ao apertar ctrl+espaço o ts mostra as propriedades do objeto
const usuario: User = {
    firstName: "Milly",
    age: 19,
    email: "mowoono@gmail.com",
    orders: [{productId: "1", price: 100}]
};

//UNIONS - é a união de dois tipos de dados
type Author = {
    books: string[]
}

const author: Author & User = {
    age: 30,
    books: ["Trono de vidro", "O príncipe cruel", "Tudo pelo jogo"],
    email: "author@gmail.com",
    firstName: "Sarah",
    password: "123456"
}

// console.log(author);

//INTERFACES
interface IUser {
    readonly firstName: string; //readonly indica que a propriedade não pode ser alterada; ou seja, é somente leitura 
    email: string;
}

const mailUser: IUser = {
    email: 'usuario@gmail.com',
    firstName: 'Usuário'
}
