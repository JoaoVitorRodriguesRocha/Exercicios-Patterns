export class DataExterna {
    private data: string;
  
    constructor(data: string) {
      // Formato esperado: "YYYY-MM-DD"
      this.data = data;
    }
  
    getData(): string {
      return this.data;
    }
  
    getAno(): string {
      return this.data.split("-")[0];
    }
  
    getMes(): string {
      return this.data.split("-")[1];
    }
  
    getDia(): string {
      return this.data.split("-")[2];
    }
  }