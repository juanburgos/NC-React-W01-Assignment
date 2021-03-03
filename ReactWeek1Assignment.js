class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

const newStudent = new Student("Juan", "j@j.dev", "React");

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(newStudent) {
        const duplicate = this.students.filter(students => newStudent.email === students.email);

        if (duplicate.length > 0) {
            console.log(`Student with email ${newStudent.email} is already registered.`);
        } else {
            this.students.push(newStudent);
            console.log(`Successfully registered ${newStudent.name}!`);
        }

        return this.students;
    }
}

const newCohort = new Bootcamp("React Masters", "Lv. 99");
newCohort.registerStudent(newStudent);