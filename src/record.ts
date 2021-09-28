type Muestra = "nombre" | "edad" | "sistolica" | "diastolica";
type A = Record<Muestra, string | number>;

const muestraA: A = {
  nombre: "pepe",
  edad: 23
};

const muestraB: A = {
  nombre: "juan",
  edad: 40,
  sistolica: 90,
  diastolica: 60
};

const error: A = {
  nombre: "Juan",
  tension: {
    sistolica: 110,
    diastolica: 70
  }
};
