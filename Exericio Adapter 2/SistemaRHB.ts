// ---------------------------------
// SISTEMA B - Sistema da empresa adquirida (não pode ser modificado)
// ---------------------------------

// Interfaces e tipos do Sistema B (completamente diferentes do Sistema A)
export interface EmployeeB {
    employeeId: string; // Usa string ao invés de number
    personalInfo: {
      firstName: string;
      lastName: string;
      middleName?: string;
    };
    employmentDetails: {
      startDate: string; // Formato ISO
      position: string;
      team: string;
      division: string;
      compensation: {
        baseSalary: number;
        currency: string;
        bonusEligible: boolean;
      };
    };
    status: "ACTIVE" | "INACTIVE" | "ON_LEAVE";
  }
  
  // API do Sistema B
  export class HRSystemB {
    private employees: Record<string, EmployeeB> = {};
    private nextId: number = 1000;
  
    constructor() {
      // Inicializa com alguns funcionários de exemplo
      this.addEmployee({
        employeeId: "EMP-1001",
        personalInfo: {
          firstName: "Maria",
          lastName: "Santos",
          middleName: "Oliveira",
        },
        employmentDetails: {
          startDate: "2019-06-12",
          position: "Senior Developer",
          team: "Backend",
          division: "Information Technology",
          compensation: {
            baseSalary: 8500,
            currency: "BRL",
            bonusEligible: true,
          },
        },
        status: "ACTIVE",
      });
    }
  
    // Note que o Sistema B usa camelCase e inglês nos nomes dos métodos
    addEmployee(employee: EmployeeB): string {
      // Se não tiver ID, gera um novo
      if (!employee.employeeId) {
        employee.employeeId = `EMP-${this.nextId++}`;
      }
  
      this.employees[employee.employeeId] = employee;
      console.log(
        `System B: Employee ${employee.personalInfo.firstName} added with ID ${employee.employeeId}`
      );
      return employee.employeeId;
    }
  
    getEmployee(employeeId: string): EmployeeB | null {
      const employee = this.employees[employeeId];
      return employee || null;
    }
  
    getAllEmployees(): EmployeeB[] {
      return Object.values(this.employees);
    }
  
    updateEmployee(employeeId: string, details: Partial<EmployeeB>): boolean {
      if (!this.employees[employeeId]) {
        console.log(`System B: Employee ${employeeId} not found`);
        return false;
      }
  
      // Sistema B exige validação específica
      if (
        details.status &&
        !["ACTIVE", "INACTIVE", "ON_LEAVE"].includes(details.status)
      ) {
        throw new Error("Invalid status provided");
      }
  
      this.employees[employeeId] = { ...this.employees[employeeId], ...details };
      console.log(`System B: Employee ${employeeId} updated`);
      return true;
    }
  
    deactivateEmployee(employeeId: string): boolean {
      if (!this.employees[employeeId]) return false;
  
      // Sistema B não remove funcionários, apenas marca como inativos
      this.employees[employeeId].status = "INACTIVE";
      console.log(`System B: Employee ${employeeId} deactivated`);
      return true;
    }
  
    // Método específico do Sistema B para buscar por divisão
    findEmployeesByDivision(division: string): EmployeeB[] {
      return Object.values(this.employees).filter(
        (e) => e.employmentDetails.division === division
      );
    }
  
    // Método específico do Sistema B para processar folha de pagamento
    processPayroll(date: string): { employeeId: string; amount: number }[] {
      return Object.values(this.employees)
        .filter((e) => e.status === "ACTIVE")
        .map((e) => ({
          employeeId: e.employeeId,
          amount: e.employmentDetails.compensation.baseSalary,
        }));
    }
  }