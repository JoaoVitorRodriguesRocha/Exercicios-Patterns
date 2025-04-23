// ---------------------------------
// SISTEMA A - Sistema da sua empresa (não pode ser modificado)
// ---------------------------------

// Interfaces e tipos do Sistema A
export interface FuncionarioA {
    id: number;
    nome: string;
    sobrenome: string;
    dataContratacao: Date;
    cargo: string;
    departamento: DepartamentoA;
    salario: number;
    statusAtivo: boolean;
  }
  
  export enum DepartamentoA {
    TI = "TI",
    RH = "RH",
    FINANCEIRO = "FINANCEIRO",
    MARKETING = "MARKETING",
    OPERACOES = "OPERACOES",
  }
  
  // API do Sistema A
  export class SistemaRHA {
    private funcionarios: Map<number, FuncionarioA> = new Map();
  
    constructor() {
      // Inicializa com alguns funcionários de exemplo
      this.adicionarFuncionario({
        id: 1,
        nome: "João",
        sobrenome: "Silva",
        dataContratacao: new Date("2020-03-15"),
        cargo: "Desenvolvedor Sênior",
        departamento: DepartamentoA.TI,
        salario: 8000,
        statusAtivo: true,
      });
    }
  
    adicionarFuncionario(funcionario: FuncionarioA): void {
      this.funcionarios.set(funcionario.id, funcionario);
      console.log(
        `Sistema A: Funcionário ${funcionario.nome} adicionado com ID ${funcionario.id}`
      );
    }
  
    obterFuncionario(id: number): FuncionarioA | undefined {
      return this.funcionarios.get(id);
    }
  
    listarFuncionarios(): FuncionarioA[] {
      return Array.from(this.funcionarios.values());
    }
  
    atualizarFuncionario(id: number, detalhes: Partial<FuncionarioA>): boolean {
      const funcionario = this.funcionarios.get(id);
      if (!funcionario) return false;
  
      this.funcionarios.set(id, { ...funcionario, ...detalhes });
      console.log(`Sistema A: Funcionário ${id} atualizado`);
      return true;
    }
  
    removerFuncionario(id: number): boolean {
      const resultado = this.funcionarios.delete(id);
      if (resultado) {
        console.log(`Sistema A: Funcionário ${id} removido`);
      }
      return resultado;
    }
  
    // Método para buscar funcionários por departamento - específico do Sistema A
    buscarFuncionariosPorDepartamento(
      departamento: DepartamentoA
    ): FuncionarioA[] {
      return Array.from(this.funcionarios.values()).filter(
        (f) => f.departamento === departamento
      );
    }
  }