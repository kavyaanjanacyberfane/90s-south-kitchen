export interface Dish {
  name: string;
  description: string;
  image: string;
}

export const vegDishes: Dish[] = [
  {
    name: "Ghee Podi Idli",
    description:
      "Soft idlis tossed in gundu podi and melted ghee, a comforting plate that tastes like home.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5rlfqc87-pEfFiRkUwmg_T1SaTLleQIVe2K1kZEN-4rocbmQL8d2P74az&s=10",
  },
  {
    name: "Masala Dosa",
    description:
      "A crisp, golden dosa folded around a soft, spiced potato filling and served with chutneys and sambar.",
    image:
      "https://t4.ftcdn.net/jpg/01/89/45/21/360_F_189452136_gJBG4ZRXY9NnZZCGV2s8QhObmpeerJTO.jpg",
  },

  {
    name: "Medu Vada",
    description:
      "Crisp outside, fluffy inside: urad dal vadas with pepper and curry leaf, served hot with sambar.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXZL0UFvuw0EuJJyFfdP_oVoaxrCLwVk1VxUV12IrTtiRa3bUgfLrZ1aAOz9EissMzuE1LIjoVUn3sFJ2i9qgi_eRDLxmJiCzE2mckinK0bj1791bultMZHAIjOR3Oq2EkQOwjoWd5KPpKTl2TDIunak7FazGcxocXn6-2goslyXv2H85-hPbvDeipK-zk/s16000-rw/IMG_20260203_160702.jpg",
  },
  {
    name: "Andhra Veg Meals",
    description:
      "Rice with dal, vegetable curries, rasam, curd and pickle, laid out the traditional way.",
    image:
      "https://content.jdmagicbox.com/v2/comp/mumbai/k9/022pxx22.xx22.220811094333.w9k9/catalogue/the-royal-thali-pure-veg-andheri-east-mumbai-north-indian-delivery-restaurants-y6dsqh4upa.jpg",
  },
  // {
  //   name: 'Ven Pongal',
  //   description:
  //     'Creamy rice and moong dal finished with black pepper, cumin and ghee-roasted cashew.',
  //   image: 'https://www.flavourstreat.com/wp-content/uploads/2022/12/ven-pongal-recipe-instant-pot.jpg',
  // },
];

export const nonVegDishes: Dish[] = [
  {
    name: "Chicken 65",
    description:
      "Spiced, crisp-fried chicken with curry leaf and green chilli, a favourite starter for sharing.",
    image:
      "https://t3.ftcdn.net/jpg/16/00/18/10/360_F_1600181037_6afxO52nIDCJeo1hxvpQ7Ozfn1g19Kaz.jpg",
  },
  {
    name: "Andhra Chicken Curry",
    description:
      "A robust, home-style curry with roasted spices and a proper Andhra kick, best with rice or ragi mudde.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hPoflYE59_dyhXeCTg4stLUsqNbLOhx0RyUGdKOBy67vObk2f0e1U38&s=10",
  },
  {
    name: "Mutton Pulusu",
    description:
      "Slow-cooked mutton in a tangy tamarind gravy, rich and deeply spiced.",
    image:
      "https://t4.ftcdn.net/jpg/07/30/89/41/360_F_730894156_1PHFyGcyw0v4qtTdfhU3yLj3x3qlDUwe.jpg",
  },
  {
    name: "Fish Curry",
    description:
      "Fresh fish simmered in a tamarind and chilli gravy, a coastal Andhra classic.",
    image:
      "https://t3.ftcdn.net/jpg/07/40/82/24/360_F_740822463_52voy5oEQjSgfUJB50W3u3MybvMC6amJ.jpg",
  },
  // {
  //   name: 'Kerala Parotta with Chicken Curry',
  //   description:
  //     'Flaky, layered parotta with a peppery chicken curry for mopping up every last drop.',
  //   image: '/images/dishes/parotta-chicken-curry.jpg',
  // },
];
