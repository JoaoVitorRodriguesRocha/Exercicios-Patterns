export class DataLocal {
    private data: string;
  
    constructor(data: string) {
      // Formato esperado: "DD/MM/YYYY"
      this.data = data;
    }
  
    getDataFormatada(): string {
      return this.data;
    }
  
    formataParaExibicao(): string {
      const [dia, mes, ano] = this.data.split("/");
      return `${dia} de ${this.obterNomeMes(parseInt(mes))} de ${ano}`;
    }
  
    private obterNomeMes(mes: number): string {
      const meses = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
      ];
      return meses[mes - 1];
    }
  }