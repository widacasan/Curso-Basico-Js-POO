const william = {
    name: 'William',
    age: 26,
    librosLeidos: [
        'Este dolor no es mio',
        'Metodo silva'
    ],
    agregarLibro(nuevoLibro){
        this.librosLeidos.push(nuevoLibro)
    }
};

function Student(name,age,agregarLibro) {
    this.name = name;
    this.age = age;
    this.agregarLibro = agregarLibro;
};

Student.prototype.agregarLibro = function agregarLibro(nuevoLibro){
    this.agregarLibro.push(nuevoLibro);
};

const daniel = new Student(
    'name',
    26,
    ['el poder del ahora', 'el principito', 'dora la exporadora']
)

//Prototipos con la sintaxis de clases

class Student2 {
    constructor(name,age,librosLeidos){
        this.name = name;
        this.age = age;
        this.librosLeidos = librosLeidos;
    }
m
    agregarLibro(nuevoLibro) {
        this.librosLeidos.push(nuevoLibro);
    }
}

const miguelito = new Student2 (
    'name',
    26,
    ['el poder del ahora', 'el principito', 'dora la exporadora']
)