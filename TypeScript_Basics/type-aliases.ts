type StringOrNum = string | number;
type objWithNiche = { niche: string; something: StringOrNum };

let variable: StringOrNum;

const greet = (user: objWithNiche) => {
  console.log(`I am a ${user.niche} type of person (${user.something})`);
};
