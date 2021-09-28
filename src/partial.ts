//Partial

interface User {
  name: string;
  lastname: string;
}

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

const user: MyPartial<User> = {
  name: "aa"
};
