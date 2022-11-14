class Dog{
    constructor(name, species, size) {
        this.name = name
        this.species = species
        this.size = size
    }
    describe(){
        console.log(`${this.name} is a ${this.species} dog measuring ${this.size}`);
    }
    bark(){
        let barks = ['Grrr! Grrr!', 'Woof! Woof!']

        return barks[Math.floor(Math.random()*2)]
    }
    cat(){
        console.log(`Look, a cat! ${this.name} barks: ${this.bark()}`);
    }

}


const fang = new Dog("Fang", "boarhound", 75);
fang.describe()
fang.cat()

const snowy = new Dog("Snowy", "terrier", 22);
snowy.describe()
snowy.cat()