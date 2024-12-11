const API_URL = "http://localhost:3000/api";

// Función para cargar cursos dinámicamente
const loadCourses = async () => {
    const response = await fetch(`${API_URL}/courses`);
    const courses = await response.json();
    const courseDropdowns = [document.getElementById('student-course'), document.getElementById('teacher-course')];
    courseDropdowns.forEach(dropdown => {
        dropdown.innerHTML = '<option value="">Seleccione un curso</option>';
        courses.forEach(course => {
            const option = document.createElement('option');
            option.value = course.id;
            option.textContent = course.name;
            dropdown.appendChild(option);
        });
    });
};

// Función para registrar estudiantes
const registerStudent = async (event) => {
    event.preventDefault();
    const name = document.getElementById('student-name').value;
    const email = document.getElementById('student-email').value;
    const course_id = document.getElementById('student-course').value;

    const response = await fetch(`${API_URL}/students`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, course_id }),
    });

    if (response.ok) {
        alert("Estudiante registrado con éxito");
        loadStudents();
    } else {
        alert("Error al registrar el estudiante");
    }
};

// Función para cargar estudiantes
const loadStudents = async () => {
    const response = await fetch(`${API_URL}/students`);
    const students = await response.json();
    const tableBody = document.getElementById('student-table').querySelector('tbody');
    tableBody.innerHTML = '';
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.course_id}</td>
        `;
        tableBody.appendChild(row);
    });
};

// Función para registrar profesores (similar a estudiantes)
const registerTeacher = async (event) => {
    event.preventDefault();
    const name = document.getElementById('teacher-name').value;
    const email = document.getElementById('teacher-email').value;
    const course_id = document.getElementById('teacher-course').value;

    const response = await fetch(`${API_URL}/teachers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, course_id }),
    });

    if (response.ok) {
        alert("Profesor registrado con éxito");
        loadTeachers();
    } else {
        alert("Error al registrar el profesor");
    }
};

// Función para cargar profesores
const loadTeachers = async () => {
    const response = await fetch(`${API_URL}/teachers`);
    const teachers = await response.json();
    const tableBody = document.getElementById('teacher-table').querySelector('tbody');
    tableBody.innerHTML = '';
    teachers.forEach(teacher => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${teacher.id}</td>
            <td>${teacher.name}</td>
            <td>${teacher.email}</td>
            <td>${teacher.course_id}</td>
        `;
        tableBody.appendChild(row);
    });
};

// Función para registrar cursos
const registerCourse = async (event) => {
    event.preventDefault();
    const name = document.getElementById('course-name').value;
    const description = document.getElementById('course-description').value;

    const response = await fetch(`${API_URL}/courses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description }),
    });

    if (response.ok) {
        alert("Curso registrado con éxito");
        loadCourses();
    } else {
        alert("Error al registrar el curso");
    }
};

// Función para cargar cursos
const loadCoursesTable = async () => {
    const response = await fetch(`${API_URL}/courses`);
    const courses = await response.json();
    const tableBody = document.getElementById('course-table').querySelector('tbody');
    tableBody.innerHTML = '';
    courses.forEach(course => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course.id}</td>
            <td>${course.name}</td>
            <td>${course.description}</td>
        `;
        tableBody.appendChild(row);
    });
};

// Carga inicial
document.addEventListener('DOMContentLoaded', () => {
    loadCourses();
    loadStudents();
    loadTeachers();
    loadCoursesTable();

    document.getElementById('student-form').addEventListener('submit', registerStudent);
    document.getElementById('teacher-form').addEventListener('submit', registerTeacher);
    document.getElementById('course-form').addEventListener('submit', registerCourse);
});
