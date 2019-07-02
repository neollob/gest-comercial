// import { Agent } from "https";
import { SuppliersModule } from '../../suppliers/suppliers.module';

interface Supplier {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: { first: string; last: string };
  company: string;
  email: string;
  phone: string;
  address: string;

}
export default Supplier;
