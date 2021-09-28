// Required
type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

interface State {
  id: number;
  name: string;
  company: Department;
}

interface Department {
  departmentName: string;
}

// Readonly
const state: Readonly<State> = {
  id: 1,
  name: "Joan",
  company: { departmentName: "RISS" }
};

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

const myState: MyReadonly<State> = {
  id: 1,
  name: "Joan"
};

//Not valid since object is readonly
//myState.name = "Otro";
//ReadOnly is not recursive.
myState.company.departmentName = "OtroRISS";
console.log(myState);

//Readonly recursice
type MyReadOnly<T> = {
  readonly [P in keyof T]: MyReadOnly<T[P]>;
};

//Writable and DeepWritable
interface UserReadOnly {
  readonly id: number;
  name: string;
  amigo?: UserReadOnly;
}

type MyWritable<T> = {
  -readonly [P in keyof T]: T[P];
};

type MyDeepWritable<T> = {
  -readonly [P in keyof T]: MyDeepWritable<T[P]>;
};

type User = MyWritable<UserReadOnly>;

const userW: User = {
  id: 1,
  name: "Bla",
  amigo: {
    id: 2,
    name: "Joan"
  }
};

userW.amigo.id = 22;
