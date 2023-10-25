const account = {
  name: "Mensa",
  salary: 6000,
  isBlack: true,
};

let details: {
  name: string;
  address: string;
  isAdult: boolean;
  age: number;
  status?: string //Optional
} = {
  name: "Mensa",
  address: "Naija",
  isAdult: true,
  age: 99,
};

let accounts:{}[]; //will stroe an array of object