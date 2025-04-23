import { DataLocal } from './DataLocal';
import { DataExterna } from './DataExterna';

export class DataAdapter extends DataLocal {
  private dataExterna: DataExterna;

  constructor(dataLocal: string) {
    super(dataLocal);
    const partes = dataLocal.split('/');
    const dataFormatada = `${partes[2]}-${partes[1]}-${partes[0]}`;
    this.dataExterna = new DataExterna(dataFormatada);
  }

  getData(): string {
    const data = this.dataExterna.getData();
    const partes = data.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }
}
