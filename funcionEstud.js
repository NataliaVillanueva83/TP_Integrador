class Estudiante {
    constructor(nombre,apellido) {
        this.nombre = nombre;
        this.apellido = apellido
        this.cursos = [];
        this.notas = [];
    }

    asignarCurso(curso) {
        if (curso.estudiantes.length < curso.maxEstudiantes) {
            this.cursos.push(curso);
            curso.estudiantes.push(this);
            this.notas[curso.nombre] = [];
        } else {
            console.log(`El curso ${curso.nombre} ha alcanzado el máximo de estudiantes.`);
        }
    }

    agregarNota(curso, nota) {
        if (this.cursos.includes(curso)) {
            this.notas[curso.nombre].push(nota);
        } else {
            console.log(`El estudiante no está inscrito en el curso ${curso.nombre}.`);
        }
    }

    promedioNotas(curso) {
        if (this.notas[curso.nombre].length > 0) {
            const suma = this.notas[curso.nombre].reduce((a, b) => a + b, 0);
            return suma / this.notas[curso.nombre].length;
        } else {
            return 0;
        }
    }
}

class Curso {
    constructor(nombre, maxEstudiantes, profesor) {
        this.nombre = nombre;
        this.maxEstudiantes = maxEstudiantes;
        this.profesor = profesor;
        this.estudiantes = [];
    }

    promedioGeneral() {
        if (this.estudiantes.length > 0) {
            const sumaPromedios = this.estudiantes.reduce((suma, estudiante) => suma + estudiante.promedioNotas(this), 0);
            return sumaPromedios / this.estudiantes.length;
        } else {
            return 0;
        }
    }
}

const estudiantes =[
   
new Estudiante('José', 'Pérez'),
new Estudiante('Vanina', 'Sánchez'),
new Estudiante('Aldana', 'Potechino'),
new Estudiante('Pedro', 'Mendieta'),
new Estudiante('Rafael', 'Dominic'),
new Estudiante('Carlos', 'Pérez'),
new Estudiante('Sandro', 'Fernández'),
new Estudiante('Mateo', 'Triviño'),
new Estudiante('Sabrina', 'Alonso'),
//new Estudiante('Roxana', 'García'),
]

const cursos = [
    new Curso('Álgebra', 10, 'Sánchez'),
    new Curso('Análisis Matemático', 10, 'Pérez'),
    new Curso('Programación', 10, 'Alegri'),
    new Curso('Inglés Técnico 1', 10, 'Suárez'),
    new Curso('Adm. de las Org.', 10, 'Tolosa'),
    new Curso('EDI', 10, 'Salvatori'),
    new Curso('Metodología', 10, 'Weiman'),
    new Curso('Sistemas', 10, 'Maglieti'),
]

// Asignación de estudiantes a cursos
estudiantes.forEach(estudiante => {

    cursos.forEach(curso => {
        estudiante.asignarCurso(curso);
    });

});

estudiantes.forEach( e => console.log( e ) );


cursos.forEach( c => console.log( c ) );
