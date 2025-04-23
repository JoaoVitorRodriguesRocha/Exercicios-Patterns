import { FuncionarioA } from './SistemaRHA';
import { EmployeeB } from './SistemaRHB';  

export class FuncionarioAdapter extends FuncionarioA {
  private funcionarioB: EmployeeB;

  constructor(funcionarioB: EmployeeB) {
    const nomeCompleto = `${funcionarioB.personalInfo.firstName} ${funcionarioB.personalInfo.middleName ? funcionarioB.personalInfo.middleName + ' ' : ''}${funcionarioB.personalInfo.lastName}`;
    const salario = funcionarioB.employmentDetails.compensation.baseSalary;
    const cargo = funcionarioB.employmentDetails.position;

    super(nomeCompleto, salario, cargo);
    this.funcionarioB = funcionarioB;
  }

  get nomeCompleto(): string {
    return `${this.funcionarioB.personalInfo.firstName} ${this.funcionarioB.personalInfo.middleName ? this.funcionarioB.personalInfo.middleName + ' ' : ''}${this.funcionarioB.personalInfo.lastName}`;
  }

  get salario(): number {
    return this.funcionarioB.employmentDetails.compensation.baseSalary;
  }

  get cargo(): string {
    return this.funcionarioB.employmentDetails.position;
  }
}
