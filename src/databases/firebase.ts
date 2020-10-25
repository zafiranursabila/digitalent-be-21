import admin from 'firebase-admin';
import { serviceAccountCredentials } from '../serviceAccountKey';
const serviceAccount = serviceAccountCredentials as admin.ServiceAccount;

export type Account = {
  account_number: number;
  balance: number;
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  address: string;
  employer: string;
  email: string;
  city: string;
  state: string;
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: ''
});

const db = admin.firestore();

export class FirebaseClient {
  private db: FirebaseFirestore.Firestore;
  private accountRef = db.collection('accounts');

  constructor() {
    this.db = db;
  }

  async addData(account: Account) {

  }

  async getData() {

  }

  async getDataByAccountNumber(accountNumber: number) {

  }

  async getDataByAge(age: number) {
    
  }
}