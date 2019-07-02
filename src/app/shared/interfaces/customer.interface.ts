// import { Agent } from "https";
import { CustomersModule } from 'src/app/customers/customers.module';

interface Customer {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: { first: string; last: string };
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
  latitude: number;
  longitude: number;
  greeting: string;
}
export default Customer;
