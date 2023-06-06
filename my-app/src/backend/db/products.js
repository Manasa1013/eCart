import { v4 as uuid } from "uuid";

import faker from "faker";

faker.seed(123);
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const fakeProducts = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "horror",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
  },
];

export const products = [
  {
    _id: "737e8e1-cf3f-e322-f3b1-df03ac2b2d37",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/sg-test-lg2.jpg?fit=800%2C800&ssl=1",
      "http://placeimg.com/640/480/nature",
      "C:/Users/manaa/Documents/GitHub/eCart/my-app/public/assets",
    ],
    description:
      "Quis molestiae tempora eligendi omnis quisquam quisquam quos.",
    brand: "RNS Club Star – Boys",
    name: "BATTING LEG GUARDS FOR LEFT HANDED BATSMAN",
    category: "Sports",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 880,
    discount: 12,
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    _id: "388c8-6a5-35fb-2b5c-87220a101aec",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/Untitled-1-1.jpg?fit=800%2C800&ssl=1",
      "http://placeimg.com/640/480/food",
    ],
    description:
      "Voluptatibus velit nobis culpa deleniti eos reprehenderit in nisi.",
    brand: "RNS Elite – Men",
    name: "BATTING LEG GUARDS FOR LEFT HANDED BATSMAN",
    category: "Sports",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 1155,
    discount: 18,
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    _id: "ca86455-c5b3-112-2140-ded63a3e1f0e",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/SG-Excelite2.jpg?fit=800%2C800&ssl=1",
      "http://placeimg.com/640/480/people",
    ],
    description: "Quia odio et inventore eligendi in deserunt id.",
    brand: "SG – Excelite – Men",
    name: "LEFT HANDED BATTING GLOVES BY SG",
    category: "Sports",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 1679,
    discount: 8,
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    _id: "fa565-b47-c4b-1118-122bd351c",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/sg-test-lg2.jpg?fit=800%2C800&ssl=1",
      "http://placeimg.com/640/480/people",
    ],
    description: "Odio quia vitae provident.",
    brand: "RNS Club Star – Boys",
    name: "BATTING LEG GUARDS FOR LEFT HANDED BATSMAN",
    category: "Sports",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 880,
    discount: 2,
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    _id: "b642cde-fe7-48f1-fea-a272e0284bcd",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2021/02/4-pieces-knife-set_grande.jpg?fit=600%2C600&ssl=1",
      "http://placeimg.com/640/480/nature",
    ],
    description: "Molestiae harum ullam pariatur quos est quod.",
    brand: "rena germany Kitchen Utility Set",
    name: "4 Pcs Knife Set (1 Each of Serrated Knife 110 mm, Plain Knife 90 mm, Serrated Knife 90 mm, Promo Peeler)",
    category: "KitchenItems",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 220,
    discount: 15,
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    _id: "6788de0-4e5-714b-4c4e-33733838a3e2",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2021/02/paring-Knife.jpg?fit=810%2C607&ssl=1",
      "http://placeimg.com/640/480/fashion",
    ],
    description: "Quisquam esse quia expedita commodi.",
    brand: "autem",
    name: "Paring Knife Serrated Blade",
    category: "KitchenItems",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 125,
    discount: 19,
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    _id: "2cbc8-ed16-feec-48cc-5f7e2751d28",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2021/02/Cook-Knife-165-mm_grande.jpg?w=600&ssl=1",
      "http://placeimg.com/640/480/business",
    ],
    description: "Exercitationem doloribus harum voluptas.",
    brand: "rena germany Kitchen Utility Set",
    name: "Cook Knife (165 mm)",
    category: "KitchenItems",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 160,
    discount: 36,
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    _id: "5cfd5ff-7473-1ab1-73a7-44f332a4328",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/MyLeft-Playing-Cards3.jpg?fit=800%2C800&ssl=1",
      "http://placeimg.com/640/480/animals",
    ],
    description: "Et accusantium et quia quos sequi molestiae beatae enim.",
    brand: "necessitatibus",
    name: "My Left Playing Cards",
    category: "FunStuff",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 95,
    discount: 33,
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    _id: "c137ec-d13c-c32-252-c688f8e1ca8f",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2019/01/My-Left-Logo-1-square.jpg?fit=1122%2C1122&ssl=1",
      "http://placeimg.com/640/480/food",
    ],
    description:
      "Saepe eligendi rerum excepturi et laudantium fuga similique fugit.",
    brand: "corporis",
    name: "T Shirt [Always Right]",
    category: "FunStuff",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 599,
    discount: 38,
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    _id: "e784ab1-5068-0a12-0eac-ff3fcf6befc",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2019/01/My-Left-Logo-square.jpg?fit=1122%2C1122&ssl=1",
      "http://placeimg.com/640/480/city",
    ],
    description: "Esse nobis et sint magnam aut.",
    brand: "atque",
    name: "T Shirt [Sooo Mainstream]",
    category: "FunStuff",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 599,
    discount: 6,
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    _id: "74ec46a-2ff6-c875-f340-abb7b64dbb72",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/Untitled-1.jpg?fit=800%2C800&ssl=1",
      "http://placeimg.com/640/480/nightlife",
    ],
    description:
      "Incidunt occaecati iusto laborum facere quia deleniti dolorem quibusdam id.",
    brand: "MyLeft",
    name: "Hand writing Development Guide cum Workbook for Left Handers",
    category: "Books",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 225,
    discount: 39,
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    _id: "1c1d07-1f83-67ee-0a00-1a858bfd56",
    src: [
      "https://m.media-amazon.com/images/I/512PEE4TSRL._SX313_BO1,204,203,200_.jpg",
      "http://placeimg.com/640/480/cats",
    ],
    description:
      ' For every lefty tired of living in a right-handed world, this witty and wise guide to the facts and findings, legend and lore of the so-called "sinister people" is a welcome bookshelf addition." ',
    brand: "Jack Fincher",
    name: "Lefties: The Origins & Consequences of Being Left-Handed Hardcover – Import, 1 February 1993",
    category: "Books",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 2825,
    discount: 42,
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    _id: "fa2fd5a-370-faee-127e-4ff51cd337c5",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/RNS-ClubStar2-1.jpg?fit=800%2C800&ssl=1",
      "http://placeimg.com/640/480/fashion",
    ],
    description:
      "A Bundle of 1 MyLeft Geo Pouch 13 inch and one Maped Geo Metric set of 12 inch",
    brand: "Maped",
    name: "Maped Geo Metric and MyLeft Geo Pouch Bundle",
    category: "Stationery",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 198,
    discount: 29,
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    _id: "2ba68ed-a66d-f047-38fe-065ea7ea21",
    src: [
      "https://i0.wp.com/thelefthandshop.in/wp-content/uploads/2017/08/Seasor-2.jpg?fit=800%2C800&ssl=1",
      "http://placeimg.com/640/480/food",
    ],
    description:
      "Scissors for young kids, Reversed blades for frustration free cutting for left handers. No more discomfort or making special effort to cut any paper. This scissors will work perfectly in your left hand.No more running from craft time, you will love cutting any shape or pattern with this scissors.Note: Color of product may vary.",
    brand: "Maped",
    name: "Shape 16cm – Left Handed",
    category: "Stationery",
    count: 0,
    isAdded: false,
    isWishlisted: false,
    price: 199,
    discount: 22,
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
];
