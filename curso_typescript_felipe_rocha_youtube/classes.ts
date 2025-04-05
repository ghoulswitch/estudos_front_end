//58:12
class Person {
    id: number;
    protected name: string;
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

//SUBCLASSES
class Employee extends Person {
    constructor(id: number, name: string, age:number) {
        super(id, name, age); //super chama o constr da classe pai
    }

    whoAmI() {
        return this.name;//aqui não necessita de this. pq o nome só pode ser acessado dentro da classe Person e Employee
    }
}

const person = new Person (1, "Milly", 19);//instanciando a classe Person

