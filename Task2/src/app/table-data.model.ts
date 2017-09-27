import { Data } from './data.model';

export interface TableData {
    caption: string;
    headers: string[],
    data: Data[]
}