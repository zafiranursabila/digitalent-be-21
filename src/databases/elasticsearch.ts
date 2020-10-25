import { Client } from 'elasticsearch';

const client = new Client({
  host: process.env.ELASTICSEARCH_HOST
});

export class ElasticClient {
  private client: Client;

  constructor() {
    this.client = client;
  }

  async getData(size?: number) {

  }

  async getByState(state: string) {

  }

  async getByEmployer(state: string, employer: string) {

  }

  async getByAccountNumber(accountNumber: number) {

  }

  async getByAccountNumberRange(accountNumbers: number[]) {

  }

  async getByAge(age: number) {

  }
}