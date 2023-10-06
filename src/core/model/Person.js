const Person = {
    new(id, name, register) {
        let person = {};
        person.id = id;
        person.name = name;
        person.register = register;

        return person;
    }
}

export default Person;