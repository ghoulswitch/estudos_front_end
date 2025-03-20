//TYPE
type User = {
    firstName: string
    age: number
    email: string
    password?: string //o ponto de interrogação indica que a propriedade é opcional
    orders: Orders[]
};

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

//UNIONS