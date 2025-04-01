

// const addNumbers = (a: number, b: number) => {
    //     return {
        //         result: a + b
        //     }
        // }
        
        // const multiply = ( firstNumber: number, SecondNumber: number, base: number = 2 ) => {
            //     return ( firstNumber +  SecondNumber ) * base 
            // }
interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount: number ) => {
    if (character.hp === 50) console.log('Cura maxima')
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`)
    }
}

healCharacter( strider, 60)

strider.showHp()

// const multiplyResult: number =  multiply(5, 3);

