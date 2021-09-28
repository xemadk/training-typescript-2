//tests

//Ej4

interface Student {
  name: string;
  age: number;
  occupation: string;
}

interface Teacher {
  name: string;
  age: number;
  subject: string;
}

type User = Student | Teacher;

const students: Student[] = [
  {
    name: "Luke Patterson",
    age: 32,
    occupation: "Internal auditor"
  },
  {
    name: "Emily Coleman",
    age: 25,
    occupation: "English"
  },
  {
    name: "Alexandra Morton",
    age: 35,
    occupation: "Conservation worker"
  },
  {
    name: "Bruce Willis",
    age: 39,
    occupation: "Placement officer"
  }
];

type StudentFields = keyof Student;

const filterStudentsBy = (
  students: Student[],
  criteria: Partial<Student>
): Student[] => {
  return students.filter((student: Student) => {
    const criteriaKeys: StudentFields[] = Object.keys(
      criteria
    ) as StudentFields[];
    return criteriaKeys.every((fieldName) => {
      return criteria[fieldName] === student[fieldName];
    });
  });
};

const logStudent = ({ name, occupation }: Student) => {
  console.log(`  - ${name}, ${occupation}`);
};

console.log("Students of age 35:");
filterStudentsBy(students, { age: 35 }).forEach(logStudent);

//Ej5
const swap = <P1, P2>(arg1: P1, arg2: P2): [P2, P1] => {
  return [arg2, arg1];
};

let age: number, occupation: string;

[occupation, age] = swap(39, "Placement officer");
console.log("Occupation: ", occupation);
console.log("Age: ", age);
