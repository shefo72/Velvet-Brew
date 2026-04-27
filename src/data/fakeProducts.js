export const products = [
  {
    id: 1,
    title: "Espresso",
    basePrice: 4.5,
    description:
      "A double shot of our signature house blend with notes of dark chocolate",
    image: "../../public/products/1.png",
    customizations: [
      {
        id: "type",
        label: "Select Roast",
        options: [
          { value: "house", label: "House Blend", extraPrice: 0 },
          { value: "single-origin", label: "Single Origin", extraPrice: 1.0 },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Flat White",
    basePrice: 5.5,
    description:
      "Velvety micro-foam poured over a double espresso for a smooth, creamy balance.",
    image: "../../public/products/2.png",
    customizations: [
      {
        id: "size",
        label: "Select Size",
        options: [
          { value: "regular", label: "Regular", extraPrice: 0 },
          { value: "large", label: "Large", extraPrice: 0.75 },
        ],
      },
      {
        id: "milk",
        label: "Milk Preferences",
        options: [
          { id: "m1", label: "Whole Milk", extraPrice: 0 },
          { id: "m2", label: "Oat Milk", extraPrice: 0.75 },
          { id: "m3", label: "Almond Milk", extraPrice: 0.75 },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Slow-Drip",
    basePrice: 6.0,
    description:
      "Cold-steeped for 18 hours to achieve a crisp, refreshing, and naturally sweet profile.",
    image: "../../public/products/3.png",
    customizations: [
      {
        id: "sweetener",
        label: "Sweetener",
        options: [
          { value: "none", label: "None", extraPrice: 0 },
          { value: "vanilla", label: "Vanilla Syrup", extraPrice: 0.5 },
          { value: "caramel", label: "Caramel Syrup", extraPrice: 0.5 },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Vanilla Latte",
    basePrice: 5.75,
    description:
      "House-made Madagascar vanilla bean syrup blended with organic steamed milk.",
    image: "../../public/products/4.png",
    customizations: [
      {
        id: "size",
        label: "Select Size",
        options: [
          { value: "small", label: "Small", extraPrice: 0 },
          { value: "regular", label: "Regular", extraPrice: 0.5 },
          { value: "large", label: "Large", extraPrice: 1.0 },
        ],
      },
      {
        id: "temperature",
        label: "Temperature",
        options: [
          { value: "hot", label: "Hot", extraPrice: 0 },
          { value: "iced", label: "Iced", extraPrice: 0.25 },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Butter Croissant",
    basePrice: 4.25,
    description:
      "Laminated with premium French butter for 72 hours. Golden, flaky, and airy.",
    image: "../../public/products/6.png",
    customizations: [
      {
        id: "service",
        label: "Serving Preference",
        options: [
          { value: "cold", label: "As is", extraPrice: 0 },
          { value: "warmed", label: "Warmed", extraPrice: 0 },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Almond Croissant",
    basePrice: 5.5,
    description:
      "Twice-baked with almond cream filling and topped with toasted almond flakes.",
    image: "/images/products/croissant-almond.png",
    customizations: [],
  },
  {
    id: 7,
    title: "Pistachio Tart",
    basePrice: 6.5,
    description:
      "Decadent roasted pistachio ganache filling with a white chocolate drizzle.",
    image: "../../public/products/7.png",
    customizations: [
      {
        id: "topping",
        label: "Extra Topping",
        options: [
          { value: "none", label: "None", extraPrice: 0 },
          {
            value: "crushed-nuts",
            label: "Crushed Pistachios",
            extraPrice: 0.5,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Avocado Toast",
    basePrice: 12.0,
    description:
      "Crushed avocado, radish, micro-greens, and chili flakes on toasted sourdough.",
    image: "../../public/products/8.png",
    customizations: [
      {
        id: "add-on",
        label: "Add Protein",
        options: [
          { value: "none", label: "None", extraPrice: 0 },
          { value: "egg", label: "Poached Egg", extraPrice: 2.0 },
          { value: "salmon", label: "Smoked Salmon", extraPrice: 4.5 },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Salmon Toast",
    basePrice: 14.5,
    description:
      "Premium Norwegian salmon, cream cheese, capers, and dill on rye bread.",
    image: "../../public/products/9.png",
    customizations: [
      {
        id: "bread",
        label: "Bread Choice",
        options: [
          { value: "rye", label: "Rye Bread", extraPrice: 0 },
          { value: "gluten-free", label: "Gluten-Free", extraPrice: 1.5 },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Truffle Toast",
    basePrice: 13.5,
    description:
      "Wild sautéed mushrooms with white truffle oil and parmesan shavings.",
    image: "../../public/products/10.png",
    customizations: [],
  },
];
