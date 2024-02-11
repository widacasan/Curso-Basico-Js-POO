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

function Student1(name,age,agregarLibro) {
    this.name = name;
    this.age = age;
    this.agregarLibro = agregarLibro;
};

Student1.prototype.agregarLibro = function agregarLibro(nuevoLibro){
    this.agregarLibro.push(nuevoLibro);
};

const daniel = new Student1(
    'name',
    26,
    ['el poder del ahora', 'el principito', 'dora la exporadora']
)

//Prototipos con la sintaxis de clases

class Student2 {
    constructor({
        age,
        name,
        librosLeidos = [],
        email,
    }){
        this.name = name;
        this.age = age;
        this.email + email;
        this.librosLeidos = librosLeidos;
    }
m
    agregarLibro(nuevoLibro) {
        this.librosLeidos.push(nuevoLibro);
    }
}

const miguelito = new Student2 ({
    name: 'Miguel',
    age: 26,
    email: "Miguel@gmail.com"
}
)

// Ventajas de la programacion orinentada a objetos

class Course {
    constructor({
        name,
        clases =[],
    }){
        this.name = name;
        this.clases = clases;
    }
}

const cursoProgramacionBasica = new Course({
    name: "Curso Gratis de Programacion Basica",
});
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
});


class LearningPath {
    constructor({
        name,
        courses =[],
    }){
        this.name = name;
        this.courses = courses;
    }
}
const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo web",
    courses: [
        cursoProgramacionBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,

    ],

});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgramacionBasica,
        "Curso DataBusinesss",
        "Curso Dataviz",

    ],

});

const escuelaVgs = new LearningPath({
    name: "Escuela de Video juegos",
    courses: [
        cursoProgramacionBasica,
        "Curso de Unity",
        "Curso de Unreal",

    ],
});


class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
       
        this.approvedCourses  = approvedCourses;
        this.learningPaths  = learningPaths;
    }
}

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@gmail.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
      ],
})
const Miguelito2 = new Student({
    name: "miguelDC",
    username: "migueldc",
    email: "jmiguel@gmail.com",
    twitter: "fmigueldc",
    learningPaths: [
        escuelaWeb,
        escuelaData,
      ],
})