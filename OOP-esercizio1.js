class User{
    constructor(_firstName, _lastName, _age, _location){
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    ageCompared = function(usersComparedAge){
        if(this.age < usersComparedAge.age){
            return `${this.firstName} ${this.lastName} é piu giovane di ${usersComparedAge.firstName} ${usersComparedAge.lastName}`
        } else if (this.age > usersComparedAge.age){
            return  `${usersComparedAge.firstName} ${usersComparedAge.lastName} é piu givane di ${this.firstName} ${this.lastName}`
    } else{
        return  `${usersComparedAge.firstName} ${usersComparedAge.lastName} ha la stessa eta di ${this.firstName} ${this.lastName}`
    }
}
}
const user1 = new User('Mario', 'Neri', 25, 'Milano')
console.log('primo utente', user1)

////////////////////////////////////////////////////////////////// utente 2 
class User2 extends User {
    constructor(_firstName, _lastName, _age, _location){
        super(_firstName, _lastName, _age, _location)
    }
}
const user2 = new User('Givanni', 'Verdi', 38 ,'Firenze')
console.log('secondo utente', user2)
console.log(user2.ageCompared(user1))

////////////////////////////////////////////////////////////////// utente 3
class User3 extends User {
    constructor(_firstName, _lastName, _age, _location, _skills){
        super(_firstName, _lastName, _age, _location)
        this.skills = _skills
    }
}
const user3 = new User3('Maria', 'Neri', 30 ,'Padova', ['HTML', 'JS'])
console.log('terzo utente', user3)
console.log(user3.ageCompared(user2))

///////////////////////////////////////////////////////////////// utente 4
class User4 extends User3 {
    constructor(_firstName, _lastName, _age, _location, _skills){
        super(_firstName, _lastName, _age, _location)
    }
}
const user4 = new User3('Antonio', 'Ferrari', 28 ,'Padova', ['HTML', 'JS', 'CSS'])
console.log('quarto utente', user4)
console.log(user4.ageCompared(user3))

/////////////////////////////////////////////////////////////// utente 5
class User5 extends User {
    constructor(_firstName, _lastName, _age, _location, _hairColor){
        super(_firstName, _lastName, _age, _location)
        this.hairColor = _hairColor
    }
}
const user5 = new User5('Stefania', 'Poppi', 32 ,'Reggiolo', 'Biondi')
console.log('quinto utente', user5)
console.log(user5.ageCompared(user4))