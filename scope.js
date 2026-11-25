let dawat = "veg_biryani";

const myHome = (food) => {
  const response = roshanHome(food);
  return response;
};

const roshanHome = (dawatfood) => {
  const response = devHome(dawatfood);

  return `${response} and roshan`;
};

const devHome = (items) => {
  return `thank you for ${items} from dev`;
};

const apna_admin = myHome(dawat);
console.log("🚀 ~ apna_admin:", apna_admin)
