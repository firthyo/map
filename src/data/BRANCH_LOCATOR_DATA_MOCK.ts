import GreenLifeInsurance1 from '../asset/insurance-card/Green Life Insurance 1.png';
import GreenLifeInsurance2 from '../asset/insurance-card/Green Life Insurance 2.png';
import MuangNontInsurance1 from '../asset/insurance-card/Muang Nont Insurance 1.png';
import MuangNontInsurance2 from '../asset/insurance-card/Muang Nont Insurance 2.png';
import Ziyang1 from '../asset/insurance-card/Ziyang 1.png';
import Ziyang2 from '../asset/insurance-card/Ziyang 2.png';
export const MOCK_BRANCH = [
  {
    id: 1,
    name: 'Dazzlesphere',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    address: null,
    contact: '217-468-9170',
    lat: 13.834526271238504,
    lng: 100.54392846864313,
    item: {
      Snack: {
        price: 20,
        count: '10,000',
        promotion: 'buy 1 get 2',
      },
      Motorcycle: {
        price: '30,000',
        count: 1,
        promotion: '',
      },
      Cup: { price: 150, count: 0, promotion: '' },
      'Mobile phone': {
        price: '15,000',
        count: 5,
        promotion: '',
      },
      Sofa: { price: '23,000', count: 5, promotion: '' },
      Pillow: { price: 550, count: 5, promotion: '' },
      Battery: { price: 50, count: 5, promotion: '' },
      Notebook: { price: '22,000', count: 5, promotion: '' },
    },
    image: [
      { name: 'Green Life Insurance', src: GreenLifeInsurance1 },
      { name: 'Ziyang Lite', src: Ziyang2 },
    ],
  },
  {
    id: 2,
    name: 'Twinte',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    address: null,
    contact: '600-705-8521',
    lat: 13.750425,
    lng: 100.661553,
    item: {
      Snack: { price: 20, count: 0, promotion: '' },
      Motorcycle: {
        price: '30,000',
        count: 0,
        promotion: '',
      },
      Cup: { price: 150, count: 0, promotion: '' },
      'Mobile phone': {
        price: '15,000',
        count: 5,
        promotion: '',
      },
      Sofa: { price: '23,000', count: 5, promotion: '' },
      Pillow: { price: 550, count: 5, promotion: '' },
      Battery: { price: 50, count: 5, promotion: '' },
      Notebook: { price: '22,000', count: 5, promotion: '' },
    },
    image: [
      { name: 'Green Life Insurance', src: GreenLifeInsurance1 },
      { name: 'Green Life Insurance Lite', src: GreenLifeInsurance2 },
    ],
  },
  {
    id: 3,
    name: 'Voolia',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    address: null,
    contact: '734-696-9251',
    lat: 13.766994,
    lng: 100.619044,
    item: {
      Snack: { price: 20, count: 200, promotion: '' },
      Motorcycle: {
        price: '30,000',
        count: 0,
        promotion: '',
      },
      Cup: { price: 150, count: 75, promotion: '' },
      'Mobile phone': {
        price: '15,000',
        count: 5,
        promotion: '',
      },
      Sofa: { price: '23,000', count: 5, promotion: '' },
      Pillow: { price: 550, count: 5, promotion: '' },
      Battery: { price: 50, count: 5, promotion: '' },
      Notebook: { price: '22,000', count: 5, promotion: '' },
    },
    image: [
      { name: 'Green Life Insurance Lite', src: GreenLifeInsurance2 },
      { name: 'Muang Nont Insurance', src: MuangNontInsurance1 },
    ],
  },
  {
    id: 4,
    name: 'Wikizz',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    address: 'Veracruz Llave',
    contact: '179-999-2093',
    lat: 13.709466,
    lng: 100.627363,
    item: {
      Snack: { price: 20, count: 55, promotion: '' },
      Motorcycle: {
        price: '30,000',
        count: 0,
        promotion: '0% for 10 months',
      },
      Cup: { price: 150, count: 35, promotion: '' },
      'Mobile phone': {
        price: '15,000',
        count: 5,
        promotion: '',
      },
      Sofa: { price: '23,000', count: 5, promotion: '' },
      Pillow: { price: 550, count: 5, promotion: '' },
      Battery: { price: 50, count: 5, promotion: '' },
      Notebook: { price: '22,000', count: 5, promotion: '' },
    },
    image: [
      { name: 'Muang Nont Insurance Lite', src: MuangNontInsurance2 },
    ],
  },
  {
    id: 5,
    name: 'Tazz',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    address: null,
    contact: '834-102-4834',
    lat: 13.696096,
    lng: 100.481598,
    item: {
      Snack: { price: 20, count: 950, promotion: '' },
      Motorcycle: {
        price: '30,000',
        count: 13,
        promotion: '',
      },
      Cup: { price: 150, count: 35, promotion: '' },
      'Mobile phone': {
        price: '15,000',
        count: 5,
        promotion: '',
      },
      Sofa: { price: '23,000', count: 5, promotion: '' },
      Pillow: { price: 550, count: 5, promotion: '' },
      Battery: { price: 50, count: 5, promotion: '' },
      Notebook: { price: '22,000', count: 5, promotion: '' },
    },
    image: [
      { name: 'Muang Nont Insurance Lite', src: MuangNontInsurance2 },
      { name: 'Ziyang', src: Ziyang1 },
    ],
  },
  {
    id: 6,
    name: 'Mydeo',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    address: null,
    contact: '290-195-4782',
    lat: 13.739057,
    lng: 100.449354,
    item: {
      Snack: { price: 20, count: 840, promotion: '' },
      Motorcycle: {
        price: '30,000',
        count: 2,
        promotion: '',
      },
      Cup: { price: 150, count: 25, promotion: '' },
      'Mobile phone': {
        price: '15,000',
        count: 5,
        promotion: '',
      },
      Sofa: {
        price: '23,000',
        count: 5,
        promotion: 'Free 1 pillow',
      },
      Pillow: { price: 550, count: 5, promotion: '' },
      Battery: { price: 50, count: 5, promotion: '' },
      Notebook: { price: '22,000', count: 5, promotion: '' },
    },
    image: [
      { name: 'Ziyang', src: Ziyang1 },
      { name: 'Ziyang Lite', src: Ziyang2 },
    ],
  },
  {
    id: 7,
    name: 'Rooxo',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    address: null,
    contact: '723-183-4669',
    lat: 13.774241,
    lng: 100.53986,
    item: {
      Snack: { price: 20, count: 232, promotion: '' },
      Motorcycle: {
        price: '30,000',
        count: 6,
        promotion: '',
      },
      Cup: { price: 150, count: 85, promotion: '' },
      'Mobile phone': {
        price: '15,000',
        count: 5,
        promotion: '',
      },
      Sofa: { price: '23,000', count: 5, promotion: '' },
      Pillow: { price: 550, count: 5, promotion: '' },
      Battery: { price: 50, count: 5, promotion: '' },
      Notebook: { price: '22,000', count: 5, promotion: '' },
    },
    image: [
      { name: 'Ziyang Lite', src: Ziyang2 },
      { name: 'Green Life Insurance', src: GreenLifeInsurance1 },
    ],
  },
  {
    id: 8,
    name: 'Trupe',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    address: null,
    contact: '364-831-0885',
    lat: 13.701542,
    lng: 100.529104,
    item: {
      Snack: { price: 20, count: 5555, promotion: '' },
      Motorcycle: {
        price: '30,000',
        count: 0,
        promotion: '',
      },
      Cup: { price: 150, count: 15, promotion: '' },
      'Mobile phone': {
        price: '15,000',
        count: 5,
        promotion: '',
      },
      Sofa: { price: '23,000', count: 5, promotion: '' },
      Pillow: { price: 550, count: 5, promotion: '' },
      Battery: { price: 50, count: 5, promotion: '' },
      Notebook: { price: '22,000', count: 5, promotion: '' },
    },
    image: [
      {
        name: 'Green Life Insurance Lite',
        src: GreenLifeInsurance2,
      },
    ],
  },
  {
    id: 9,
    name: 'Yodo',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    address: null,
    contact: '135-958-5838',
    lat: 13.811179,
    lng: 100.527489,
    item: {
      Snack: { price: 20, count: 1285, promotion: '' },
      Motorcycle: {
        price: '30,000',
        count: 9,
        promotion: '',
      },
      Cup: { price: 150, count: 2, promotion: '' },
      'Mobile phone': {
        price: '15,000',
        count: 5,
        promotion: '',
      },
      Sofa: { price: '23,000', count: 5, promotion: '' },
      Pillow: { price: 550, count: 5, promotion: '' },
      Battery: { price: 50, count: 5, promotion: '' },
      Notebook: { price: '22,000', count: 5, promotion: '' },
    },
    image: [
      {
        name: 'Green Life Insurance Lite',
        src: GreenLifeInsurance2,
      },
      { name: 'Muang Nont Insurance', src: MuangNontInsurance1 },
    ],
  },
  {
    id: 10,
    name: 'Skiba',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    address: 'Hamburg',
    contact: '156-615-9907',
    lat: 13.803144,
    lng: 100.487974,
    item: {
      Snack: { price: 20, count: 666, promotion: '' },
      Motorcycle: {
        price: '30,000',
        count: 4,
        promotion: '',
      },
      Cup: { price: 150, count: 65, promotion: '' },
      'Mobile phone': {
        price: '15,000',
        count: 5,
        promotion: '',
      },
      Sofa: { price: '23,000', count: 5, promotion: '' },
      Pillow: { price: 550, count: 5, promotion: '' },
      Battery: { price: 50, count: 5, promotion: '' },
      Notebook: { price: '22,000', count: 5, promotion: '' },
    },
    image: [
      { name: 'Muang Nont Insurance', src: MuangNontInsurance1 },
      { name: 'Muang Nont Insurance Lite', src: MuangNontInsurance2 },
    ],
  },
  {
    id: 11,
    name: 'Janyx',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    address: null,
    contact: '479-589-8570',
    lat: 13.905879,
    lng: 100.584791,
    item: {
      Snack: { price: 20, count: 123, promotion: '' },
      Motorcycle: {
        price: '30,000',
        count: 4,
        promotion: '',
      },
      Cup: { price: 150, count: 15, promotion: '' },
      'Mobile phone': {
        price: '15,000',
        count: 5,
        promotion: '',
      },
      Sofa: { price: '23,000', count: 5, promotion: '' },
      Pillow: { price: 550, count: 5, promotion: '' },
      Battery: { price: 50, count: 5, promotion: '' },
      Notebook: { price: '22,000', count: 5, promotion: '' },
    },
    image: [
      { name: 'Muang Nont Insurance Lite', src: MuangNontInsurance2 },
      { name: 'Ziyang', src: Ziyang1 },
    ],
  },
  {
    id: 12,
    name: 'Jamia',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    address: null,
    contact: '585-740-2947',
    lat: 13.657006,
    lng: 100.50915,
    item: {
      Snack: { price: 20, count: 333, promotion: '' },
      Motorcycle: {
        price: '30,000',
        count: 23,
        promotion: '',
      },
      Cup: { price: 150, count: 51, promotion: '' },
      'Mobile phone': {
        price: '15,000',
        count: 5,
        promotion: '',
      },
      Sofa: { price: '23,000', count: 5, promotion: '' },
      Pillow: { price: 550, count: 5, promotion: '' },
      Battery: { price: 50, count: 5, promotion: '' },
      Notebook: { price: '22,000', count: 5, promotion: '' },
    },
    image: [{ name: 'Ziyang Lite', src: Ziyang2 }],
  },
  {
    id: 13,
    name: 'Buzzster',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    address: null,
    contact: '148-430-0224',
    lat: 13.693762,
    lng: 100.591082,
    item: {
      Snack: { price: 20, count: 234, promotion: '' },
      Motorcycle: {
        price: '30,000',
        count: 5,
        promotion: '',
      },
      Cup: { price: 150, count: 234, promotion: '' },
      'Mobile phone': {
        price: '15,000',
        count: 5,
        promotion: '',
      },
      Sofa: { price: '23,000', count: 5, promotion: '' },
      Pillow: { price: 550, count: 5, promotion: '' },
      Battery: { price: 50, count: 5, promotion: '' },
      Notebook: { price: '22,000', count: 5, promotion: '' },
    },
    image: [
      { name: 'Ziyang Lite', src: Ziyang2 },
      { name: 'Green Life Insurance', src: GreenLifeInsurance1 },
    ],
  },
  {
    id: 14,
    name: 'Photospace',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    address: null,
    contact: '778-194-0495',
    lat: 13.732664,
    lng: 100.563033,
    item: {
      Snack: { price: 20, count: 0, promotion: '' },
      Motorcycle: {
        price: '30,000',
        count: 0,
        promotion: '',
      },
      Cup: { price: 150, count: 22, promotion: '' },
      'Mobile phone': {
        price: '15,000',
        count: 5,
        promotion: '',
      },
      Sofa: { price: '23,000', count: 5, promotion: '' },
      Pillow: { price: 550, count: 5, promotion: '' },
      Battery: { price: 50, count: 5, promotion: '' },
      Notebook: { price: '22,000', count: 5, promotion: '' },
    },
    image: [
      { name: 'Green Life Insurance', src: GreenLifeInsurance1 },
      { name: 'Green Life Insurance Lite', src: GreenLifeInsurance2 },
    ],
  },
  {
    id: 15,
    name: 'Oodoo',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    address: null,
    contact: '247-315-3462',
    lat: 13.710867,
    lng: 100.445357,
    item: {
      Snack: { price: 20, count: 0, promotion: '' },
      Motorcycle: {
        price: '30,000',
        count: 25,
        promotion: '',
      },
      Cup: { price: 150, count: 0, promotion: '' },
      'Mobile phone': {
        price: '15,000',
        count: 5,
        promotion: '',
      },
      Sofa: { price: '23,000', count: 5, promotion: '' },
      Pillow: { price: 550, count: 5, promotion: '' },
      Battery: { price: 50, count: 5, promotion: '' },
      Notebook: { price: '22,000', count: 5, promotion: '' },
    },
    image: [
      { name: 'Muang Nont Insurance', src: MuangNontInsurance1 },
    ],
  },
];
