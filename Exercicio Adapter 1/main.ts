import { DataLocal } from './DataLocal';
import { DataAdapter } from './DataAdapter';

const dataLocal = new DataLocal('23/04/2025');
console.log('DataLocal:', dataLocal.getData());

const dataComAdapter = new DataAdapter('23/04/2025');
console.log('Data com Adapter:', dataComAdapter.getData());
