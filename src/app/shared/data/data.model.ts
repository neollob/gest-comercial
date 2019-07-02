import Customer from '../interfaces/customer.interface';
const customers: Array<Customer> = [
  {
    _id: '5d1b2bfb133b6c66b1f5e141',
    index: 0,
    guid: 'c95fd19c-fc6a-4c06-9cb6-66ee57195489',
    isActive: false,
    balance: '$2,251.89',
    picture: 'https://cape.agenciase.org/herramienta/avatar/avatar.png',
    age: 40,
    eyeColor: 'blue',
    name: {
      first: 'Koch',
      last: 'Marshall'
    },
    company: 'TINGLES',
    email: 'koch.marshall@tingles.net',
    phone: '+1 (814) 422-2914',
    address: '561 Porter Avenue, Trona, Texas, 2724'
  },
  {
    _id: '5d1b2bfb5a2517ffc02aacfc',
    index: 1,
    guid: 'baded9a7-ac7e-41bc-aaee-18da5ca04e51',
    isActive: true,
    balance: '$3,512.59',
    picture: 'https://cape.agenciase.org/herramienta/avatar/avatar.png',
    age: 30,
    eyeColor: 'blue',
    name: {
      first: 'Randall',
      last: 'Marquez'
    },
    company: 'TELLIFLY',
    email: 'randall.marquez@tellifly.info',
    phone: '+1 (830) 545-2602',
    address: '947 Holt Court, Ilchester, Guam, 9651'
  },
  {
    _id: '5d1b2bfb4b57fd407d05ef55',
    index: 2,
    guid: '9d166ab2-3017-4f40-84a5-cc65971ebf85',
    isActive: true,
    balance: '$2,056.70',
    picture: 'https://cape.agenciase.org/herramienta/avatar/avatar.png',
    age: 33,
    eyeColor: 'brown',
    name: {
      first: 'Mae',
      last: 'Bowers'
    },
    company: 'SYNKGEN',
    email: 'mae.bowers@synkgen.io',
    phone: '+1 (881) 473-3663',
    address: '386 Troutman Street, Wawona, Hawaii, 5155'
  },
  {
    _id: '5d1b2bfb4f6572d927cacc2e',
    index: 3,
    guid: '677cd6d8-1a52-4a09-a57b-457897f09529',
    isActive: false,
    balance: '$3,159.05',
    picture: 'https://cape.agenciase.org/herramienta/avatar/avatar.png',
    age: 35,
    eyeColor: 'blue',
    name: {
      first: 'Massey',
      last: 'George'
    },
    company: 'ACCIDENCY',
    email: 'massey.george@accidency.tv',
    phone: '+1 (826) 549-2462',
    address: '812 Danforth Street, Chestnut, West Virginia, 2788'
  },
  {
    _id: '5d1b2bfbe20814a377defa58',
    index: 4,
    guid: '4367c016-37bf-4bc3-af36-9f6102771b0c',
    isActive: false,
    balance: '$2,236.38',
    picture: 'https://cape.agenciase.org/herramienta/avatar/avatar.png',
    age: 25,
    eyeColor: 'green',
    name: {
      first: 'Diane',
      last: 'Price'
    },
    company: 'ORBIN',
    email: 'diane.price@orbin.com',
    phone: '+1 (896) 486-3158',
    address: '805 Fairview Place, Bendon, Delaware, 8667'
  },
  {
    _id: '5d1b2bfbb33cc4815c3de7e6',
    index: 5,
    guid: 'c4e53373-bfd8-4aae-93fa-b202d5a632f4',
    isActive: false,
    balance: '$1,210.53',
    picture: 'https://cape.agenciase.org/herramienta/avatar/avatar.png',
    age: 39,
    eyeColor: 'blue',
    name: {
      first: 'Mable',
      last: 'Peterson'
    },
    company: 'CALLFLEX',
    email: 'mable.peterson@callflex.biz',
    phone: '+1 (837) 551-2223',
    address: '108 Minna Street, Springdale, Illinois, 8899'
  },
  {
    _id: '5d1b2bfb18666537d9b3ba9f',
    index: 6,
    guid: 'a3e6d157-67fc-42d7-ba6f-bdc3da51264e',
    isActive: false,
    balance: '$2,966.57',
    picture: 'https://cape.agenciase.org/herramienta/avatar/avatar.png',
    age: 39,
    eyeColor: 'brown',
    name: {
      first: 'Jannie',
      last: 'Roy'
    },
    company: 'NURALI',
    email: 'jannie.roy@nurali.org',
    phone: '+1 (872) 583-2676',
    address: '230 Crooke Avenue, Fulford, Wyoming, 4998'
  },
  {
    _id: '5d1b2bfbdd215078a0e05823',
    index: 7,
    guid: 'a6f33c05-3e97-49f4-b7a7-152ef96482ba',
    isActive: true,
    balance: '$1,335.08',
    picture: 'https://cape.agenciase.org/herramienta/avatar/avatar.png',
    age: 38,
    eyeColor: 'green',
    name: {
      first: 'Robinson',
      last: 'Eaton'
    },
    company: 'LINGOAGE',
    email: 'robinson.eaton@lingoage.us',
    phone: '+1 (842) 493-2368',
    address: '632 Fay Court, Gibsonia, Northern Mariana Islands, 1474'
  },
  {
    _id: '5d1b2bfbbe80b113402b923a',
    index: 8,
    guid: '952e957d-56af-4d8e-bf71-08ff56f7fccd',
    isActive: false,
    balance: '$2,090.39',
    picture: 'https://cape.agenciase.org/herramienta/avatar/avatar.png',
    age: 22,
    eyeColor: 'blue',
    name: {
      first: 'Leticia',
      last: 'Patterson'
    },
    company: 'XPLOR',
    email: 'leticia.patterson@xplor.biz',
    phone: '+1 (861) 586-2288',
    address: '421 Trucklemans Lane, Malo, Connecticut, 3900'
  },
  {
    _id: '5d1b2bfb13dc6438398d1102',
    index: 9,
    guid: 'aab0269b-b676-46e8-9f24-2d5ae44314f8',
    isActive: true,
    balance: '$1,559.82',
    picture: 'https://cape.agenciase.org/herramienta/avatar/avatar.png',
    age: 27,
    eyeColor: 'green',
    name: {
      first: 'Hughes',
      last: 'Santos'
    },
    company: 'QUILTIGEN',
    email: 'hughes.santos@quiltigen.me',
    phone: '+1 (928) 457-2813',
    address: '254 Oxford Street, Celeryville, North Dakota, 6925'
  }
];

export default customers;
