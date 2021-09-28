interface Paciente {
  id: number;
  nombre: string;
  apellidos: string;
  edad: number;
  sistolica: number;
  diastolica: number;
}

const paciente: Paciente = {
  id: 45,
  nombre: "Juan",
  apellidos: "Perez",
  edad: 27,
  sistolica: 90,
  diastolica: 60
};

const actualizaciones: Partial<Paciente> = {
  sistolica: 110,
  diastolica: 70
};

const actualizaPaciente = (
  paciente: Paciente,
  delta: Partial<Paciente>
): Paciente => {
  return { ...paciente, ...delta };
};
