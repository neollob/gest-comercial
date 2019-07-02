// import { Agent } from "https";
import { SuppliersModule } from '../../suppliers/suppliers.module';

interface Supplier {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  name: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
  latitude: number;
  longitude: number;
  tags: string[];
  friends: { id: number; name: string; }[];
  greeting: string;
  favoriteFruit: string;

}
export default Supplier;
