// Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones 
// y salidas indicadas en los comentarios.

abstract class Animal {
    static population: number = 0;
    constructor() {
        Animal.population = Animal.population + 1
    }
    public abstract sound(): void;
}

class Dog extends Animal {
    color: string;

    constructor(color: string) {
        super ();
        this.color = color;
    };

    sound(): void {
        console.log('WOW');
        this.iamadog();
    };

    public iamadog() {
        console.log('yes, this is a dog');
    }
}

class Cat extends Animal {
    gender: string;

    constructor(color: string) {
        super ();
        this.gender = color;
    };
    
    sound() {
        console.log('MEOW');
        this.iamacat();
    };


    public iamacat() {
        console.log('yes, this is a cat');
    }
}

let animals: Animal[] = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));

for(let animal of animals){
    animal.sound();
    
}
/**  loop prints these lines
MEOW
yes, this is a cat
WOW
yes, this is a dog
MEOW
yes, this is a cat
WOW
yes, this is a dog
*/

console.log(Animal.population); //4