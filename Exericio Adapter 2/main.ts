import { DepartamentoA, FuncionarioA, SistemaRHA } from "./SistemaRHA";
import { HRSystemB, EmployeeB } from "./SistemaRHB";
import { FuncionarioAdapter } from './FuncionarioAdapter';

console.log("=== DEMONSTRAÇÃO DO ADAPTADOR DE SISTEMAS DE RH ===");

const sistemaA = new SistemaRHA();
const sistemaB = new HRSystemB();

console.log("1. Listando funcionários originais do Sistema A:");
console.log(sistemaA.listarFuncionarios());

console.log("2. Listando funcionários originais do Sistema B:");
console.log(sistemaB.getAllEmployees());

console.log("3. Adicionando um novo funcionário no Sistema A:");
const novoFuncionario: FuncionarioA = {
  id: 100,
  nome: "Ana",
  sobrenome: "Ferreira",
  dataContratacao: new Date("2023-01-10"),
  cargo: "Analista de Marketing",
  departamento: DepartamentoA.MARKETING,
  salario: 6500,
  statusAtivo: true,
};
sistemaA.adicionarFuncionario(novoFuncionario);

console.log("4. Integrando um funcionário do Sistema B no Sistema A:");
const funcionarioB: EmployeeB = {
  employeeId: "EMP-1002",
  personalInfo: {
    firstName: "Carlos",
    lastName: "Almeida",
    middleName: "Eduardo",
  },
  employmentDetails: {
    startDate: "2021-05-12",
    position: "Senior Developer",
    team: "Backend",
    division: "Information Technology",
    compensation: {
      baseSalary: 8000,
      currency: "BRL",
      bonusEligible: true,
    },
  },
  status: "ACTIVE",
};

const adaptadoFuncionarioA = new FuncionarioAdapter(funcionarioB);

const funcionarioAdaptadoA: FuncionarioA = {
  id: 101,
  nome: adaptadoFuncionarioA.nomeCompleto,
  sobrenome: '', 
  dataContratacao: new Date(funcionarioB.employmentDetails.startDate),
  cargo: adaptadoFuncionarioA.cargo,
  departamento: DepartamentoA.TECNOLOGIA, 
  salario: adaptadoFuncionarioA.salario,
  statusAtivo: true,
};

sistemaA.adicionarFuncionario(funcionarioAdaptadoA);

console.log("5. Listando funcionários do Sistema A após a integração:");
console.log(sistemaA.listarFuncionarios());
