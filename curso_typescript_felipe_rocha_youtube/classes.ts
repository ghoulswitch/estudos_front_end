//58:12
class Person {
    id: number;
    name: string;
    age: number;

    constructor (id: number, name: string, age: number) { //constructor é a função que é chamada quando a classe é instanciada
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName (): string { //método da classe
        return this.name;
    }

}

const person = new Person (1, "Milly", 19);//instanciando a classe Person