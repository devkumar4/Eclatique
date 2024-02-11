// sampleProducts.ts
interface Products {
  name: string;
  description?: string;
  product?: string;
  price: number;
  category?: string;
  images: string[];
  variants: { name: string; options: string[] }[];
  stock?: number;
  customizationOptions?: { name: string; type: string; values: string[] }[];
  model3D?: string;
}

const sampleProducts: Products[] = [
  /*SHOES PRODUCTS*/
  {
    name: "Running Shoes",
    description: "Lightweight and comfortable running shoes",
    price: 49.99,
    category: "Running",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71JyFu1MhTL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81bNLv-gpUL._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Red", "Blue", "Black"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 100,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["White", "Black", "Red"] },
    ],
    model3D: "running_shoes_model.obj",
  },
  {
    name: "Air Zoom Pegasus 38",
    description: "Versatile and responsive running shoes",
    price: 5499.99,
    category: "Running",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/61ulGwJujcL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81qV6mDYPYL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71U64woKvML._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Blue", "Red", "Black"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 100,
    customizationOptions: [
      {
        name: "Lace Color",
        type: "color",
        values: ["White", "Black", "Yellow"],
      },
    ],
    model3D: "air_zoom_pegasus_38.obj",
  },
  {
    name: "Free RN 5.0",
    description: "Lightweight and flexible running shoes",
    price: 4499.99,
    category: "Running",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/41K+LkzBMGL.jpg",
      "https://m.media-amazon.com/images/I/31j5c4ovHAL.jpg",
      "https://m.media-amazon.com/images/I/41yWBRmZPjL.jpg",
    ],

    variants: [
      { name: "Color", options: ["Green", "Gray", "White"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 80,
    customizationOptions: [
      {
        name: "Lace Color",
        type: "color",
        values: ["Black", "Blue", "Orange"],
      },
    ],
    model3D: "free_rn_5.0.obj",
  },
  {
    name: "UltraBoost 21",
    description: "High-performance running shoes with Boost technology",
    price: 6999.99,
    category: "Running",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71U46FoFl1L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81+M+QpyckL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71sCK+UKXLL._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Black", "White", "Gray"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 120,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["Red", "Blue", "Yellow"] },
    ],
    model3D: "ultraboost_21.obj",
  },
  {
    name: "React Infinity Run Flyknit",
    description: "Cushioned and supportive running shoes",
    price: 5799.99,
    category: "Running",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/81MS8J-BH4L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81KCjk3V77L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Z3+HkNY3L._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Purple", "Green", "Black"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 90,
    customizationOptions: [
      {
        name: "Lace Color",
        type: "color",
        values: ["White", "Gray", "Orange"],
      },
    ],
    model3D: "react_infinity_run_flyknit.obj",
  },
  {
    name: "Air Zoom Pegasus 38",
    description: "Versatile and responsive running shoes",
    price: 7499.99,
    category: "Running",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/81Gl4DtccKL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Kr+C1ApkL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81kuIA8nLxL._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Blue", "Black", "White"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 100,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["Red", "Gray", "Yellow"] },
    ],
    model3D: "pegasus_38.obj",
  },
  {
    name: "Solar Boost 3",
    description: "Energized cushioning for long-distance runs",
    price: 8799.99,
    category: "Running",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/61IjzhuiiAL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61SkB3QqL3L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71xV-dZdl2L._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Gray", "Green", "Black"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 80,
    customizationOptions: [
      {
        name: "Lace Color",
        type: "color",
        values: ["Blue", "Black", "Orange"],
      },
    ],
    model3D: "solar_boost_3.obj",
  },

  {
    name: "Adizero Adios Pro",
    description: "Professional racing shoes for speed and comfort",
    price: 10999.99,
    category: "Running",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71-bFg4IZ8L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61QLC74vFpL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71oN22Uk1mL._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["White", "Black", "Orange"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 60,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["Blue", "Red", "Yellow"] },
    ],
    model3D: "adios_pro.obj",
  },
  {
    name: "Wave Rider 24",
    description: "Smooth and stable running shoes",
    price: 6699.99,
    category: "Running",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/61nqI5eaGhL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/612jiI61jtL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71GDiXrbieL._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Blue", "Black", "Gray"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 90,
    customizationOptions: [
      {
        name: "Lace Color",
        type: "color",
        values: ["White", "Black", "Green"],
      },
    ],
    model3D: "wave_rider_24.obj",
  },
  {
    name: "Epic React Flyknit 2",
    description: "Soft and responsive running shoes",
    price: 7899.99,
    category: "Running",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/81gP9dfhPAL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81llEfyDezL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Mqv56o3DL._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Black", "Red", "Yellow"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 110,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["Blue", "Gray", "Orange"] },
    ],
    model3D: "epic_react_flyknit_2.obj",
  },
  {
    name: "FuelCell Propel",
    description: "High-rebound cushioning for a propulsive feel",
    price: 7299.99,
    category: "Running",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/81PcQue+rlS._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71l5Er3crdS._SL1431_.jpg",
      "https://m.media-amazon.com/images/I/71l5Er3crdS._SL1431_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Gray", "Green", "Black"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 70,
    customizationOptions: [
      {
        name: "Lace Color",
        type: "color",
        values: ["Red", "Purple", "Yellow"],
      },
    ],
    model3D: "fuelcell_propel.obj",
  },
  {
    name: "Ghost 13",
    description: "Smooth and stable running shoes with plush cushioning",
    price: 8499.99,
    category: "Running",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/8173xRAefBL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81eKmkWvf0L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81+SuHn6Y2L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81cucsqb23L._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Blue", "Black", "White"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 100,
    customizationOptions: [
      {
        name: "Lace Color",
        type: "color",
        values: ["Gray", "Orange", "Purple"],
      },
    ],
    model3D: "ghost_13.obj",
  },
  {
    name: "Gel-Nimbus 23",
    description: "Premium cushioning and comfort for long-distance runs",
    price: 9399.99,
    category: "Running",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/61GXupkyemL._SL1200_.jpg",
      "https://m.media-amazon.com/images/I/61sR5oYfpdL._SL1200_.jpg",
      "https://m.media-amazon.com/images/I/619Ov0it0bL._SL1200_.jpg",
      "https://m.media-amazon.com/images/I/61O-VJUBWdL._SL1200_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Black", "Green", "Gray"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 80,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["White", "Blue", "Red"] },
    ],
    model3D: "gel_nimbus_23.obj",
  },
  {
    name: "Hoka One One Clifton 8",
    description: "Lightweight and cushioned running shoes",
    price: 7999.99,
    category: "Running",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71uciG33ThL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Q04+6Wq+L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71PZRvZcYyL._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Blue", "Black", "Orange"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 95,
    customizationOptions: [
      {
        name: "Lace Color",
        type: "color",
        values: ["Gray", "Purple", "Yellow"],
      },
    ],
    model3D: "clifton_8.obj",
  },

  /*CASUAL SHOES */
  {
    name: "Casual Comfort Loafers",
    description: "Stylish and comfortable loafers for everyday wear",
    price: 2499.99,
    category: "Casual",
    product: "footwear",
    images: ["image_url_1a", "image_url_1b"],
    variants: [
      { name: "Color", options: ["Brown", "Black", "Tan"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 120,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["White", "Black", "Red"] },
    ],
    model3D: "casual_loafers.obj",
  },
  {
    name: "Classic Canvas Sneakers",
    description: "Versatile canvas sneakers for a casual look",
    price: 1799.99,
    category: "Casual",
    product: "footwear",
    images: ["image_url_2a", "image_url_2b"],
    variants: [
      { name: "Color", options: ["Navy Blue", "Gray", "White"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 100,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["Red", "Black", "Blue"] },
    ],
    model3D: "canvas_sneakers.obj",
  },
  {
    name: "Leather Slip-On Shoes",
    description: "Elegant slip-on shoes with a leather finish",
    price: 3299.99,
    category: "Casual",
    product: "footwear",
    images: ["image_url_3a", "image_url_3b"],
    variants: [
      { name: "Color", options: ["Black", "Brown", "Tan"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 80,
    customizationOptions: [
      {
        name: "Lace Color",
        type: "color",
        values: ["White", "Black", "Brown"],
      },
    ],
    model3D: "leather_slip_on.obj",
  },
  {
    name: "Casual Sneaker Boots",
    description: "Stylish and comfortable sneaker boots for a casual look",
    price: 2799.99,
    category: "Casual",
    product: "footwear",
    images: ["image_url_4a", "image_url_4b"],
    variants: [
      { name: "Color", options: ["Gray", "Blue", "Brown"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 90,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["Red", "Black", "Gray"] },
    ],
    model3D: "sneaker_boots.obj",
  },
  {
    name: "Casual Slip-On Sandals",
    description: "Comfortable slip-on sandals for casual wear",
    price: 1499.99,
    category: "Casual",
    product: "footwear",
    images: ["image_url_5a", "image_url_5b"],
    variants: [
      { name: "Color", options: ["Brown", "Black", "Beige"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 110,
    customizationOptions: [
      { name: "Strap Color", type: "color", values: ["White", "Black", "Red"] },
    ],
    model3D: "slip_on_sandals.obj",
  },
  {
    name: "Casual Derby Shoes",
    description: "Classic derby shoes for a smart casual look",
    price: 2999.99,
    category: "Casual",
    product: "footwear",
    images: ["image_url_6a", "image_url_6b"],
    variants: [
      { name: "Color", options: ["Black", "Brown", "Tan"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 95,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["White", "Black", "Blue"] },
    ],
    model3D: "casual_derby.obj",
  },
  {
    name: "Fashionable Slip-On Loafers",
    description: "Trendy slip-on loafers for a stylish look",
    price: 2199.99,
    category: "Casual",
    product: "footwear",
    images: ["image_url_7a", "image_url_7b"],
    variants: [
      { name: "Color", options: ["Gray", "Blue", "Black"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 105,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["Red", "Black", "Gray"] },
    ],
    model3D: "slip_on_loafers.obj",
  },
  {
    name: "Casual Oxford Shoes",
    description: "Sophisticated oxford shoes for a polished look",
    price: 3499.99,
    category: "Casual",
    product: "footwear",
    images: ["image_url_8a", "image_url_8b"],
    variants: [
      { name: "Color", options: ["Black", "Brown", "Tan"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 85,
    customizationOptions: [
      {
        name: "Lace Color",
        type: "color",
        values: ["White", "Black", "Brown"],
      },
    ],
    model3D: "casual_oxford.obj",
  },
  {
    name: "Casual Moccasin Shoes",
    description: "Comfortable moccasin shoes for a relaxed look",
    price: 2599.99,
    category: "Casual",
    product: "footwear",
    images: ["image_url_9a", "image_url_9b"],
    variants: [
      { name: "Color", options: ["Brown", "Black", "Blue"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 88,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["Red", "Black", "Gray"] },
    ],
    model3D: "casual_moccasins.obj",
  },
  {
    name: "Casual Sporty Sneakers",
    description: "Sporty sneakers for a casual and active lifestyle",
    price: 1899.99,
    category: "Casual",
    product: "footwear",
    images: ["image_url_10a", "image_url_10b"],
    variants: [
      { name: "Color", options: ["Black", "Gray", "Blue"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 80,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["White", "Blue", "Red"] },
    ],
    model3D: "casual_sporty_sneakers.obj",
  },
  /* Sneakers shoes  */
  {
    name: "Air Max 270",
    description: "Nike Air Max 270 Sneakers",
    price: 6999.99,
    category: "Sneakers",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71ykJbX6WjL._AC_UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71LdR6N8h3L._AC_UL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Black", "White", "Red"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 120,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["White", "Black", "Red"] },
    ],
    model3D: "air_max_270.obj",
  },
  {
    name: "Ultra Boost",
    description: "Adidas Ultra Boost Sneakers",
    price: 8999.99,
    category: "Sneakers",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71MqLA8Gz-L._AC_UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71zqZ0TbGSL._AC_UL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["White", "Black", "Blue"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 100,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["Black", "Blue", "Gray"] },
    ],
    model3D: "ultra_boost.obj",
  },
  {
    name: "Air Force 1",
    description: "Nike Air Force 1 Sneakers",
    price: 7499.99,
    category: "Sneakers",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/61JH-v1TEnL._AC_UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71G4uhKgGeL._AC_UL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["White", "Black", "Red"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 90,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["White", "Black", "Red"] },
    ],
    model3D: "air_force_1.obj",
  },
  {
    name: "Yeezy Boost 350",
    description: "Adidas Yeezy Boost 350 Sneakers",
    price: 11999.99,
    category: "Sneakers",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/81Gy8u9rslL._AC_UL1500_.jpg",
      "https://m.media-amazon.com/images/I/81beH2BcY3L._AC_UL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Gray", "Black", "Cream"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 80,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["Black", "Gray", "White"] },
    ],
    model3D: "yeezy_boost_350.obj",
  },
  {
    name: "React Element 55",
    description: "Nike React Element 55 Sneakers",
    price: 6599.99,
    category: "Sneakers",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71pYm3HUj5L._AC_UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71S1AwWPSxL._AC_UL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Blue", "Black", "White"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 85,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["White", "Black", "Blue"] },
    ],
    model3D: "react_element_55.obj",
  },
  {
    name: "Air Zoom Pegasus",
    description: "Nike Air Zoom Pegasus Sneakers",
    price: 7299.99,
    category: "Sneakers",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71NDBjnvY5L._AC_UL1500_.jpg",
      "https://m.media-amazon.com/images/I/81PngGJN8pL._AC_UL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Black", "White", "Blue"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 95,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["White", "Black", "Blue"] },
    ],
    model3D: "air_zoom_pegasus.obj",
  },
  {
    name: "Epic React Flyknit",
    description: "Nike Epic React Flyknit Sneakers",
    price: 7799.99,
    category: "Sneakers",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71OvFnS1e4L._AC_UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71gOwY8ntvL._AC_UL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Gray", "Black", "Red"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 100,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["Red", "Black", "Gray"] },
    ],
    model3D: "epic_react_flyknit.obj",
  },
  {
    name: "Zoom Freak 1",
    description: "Nike Zoom Freak 1 Sneakers",
    price: 8499.99,
    category: "Sneakers",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/81tZeHtoCRL._AC_UL1500_.jpg",
      "https://m.media-amazon.com/images/I/81-9-gS4V9L._AC_UL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Green", "Black", "White"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 90,
    customizationOptions: [
      {
        name: "Lace Color",
        type: "color",
        values: ["White", "Black", "Green"],
      },
    ],
    model3D: "zoom_freak_1.obj",
  },
  {
    name: "Joyride Run Flyknit",
    description: "Nike Joyride Run Flyknit Sneakers",
    price: 7899.99,
    category: "Sneakers",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71C0QD1Pt1L._AC_UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71nBM9vS-lL._AC_UL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Black", "Blue", "Red"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 80,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["Red", "Black", "Blue"] },
    ],
    model3D: "joyride_run_flyknit.obj",
  },
  {
    name: "Chuck Taylor All Star",
    description: "Converse Chuck Taylor All Star Sneakers",
    price: 5999.99,
    category: "Sneakers",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/81o0flZ+GyL._AC_UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71ULsT1JH2L._AC_UL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["White", "Black", "Red"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 85,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["White", "Black", "Red"] },
    ],
    model3D: "chuck_taylor_all_star.obj",
  },
  /*FORMAL SHOES */

  {
    name: "Classic Leather Oxfords",
    description: "Timeless leather oxfords for a sophisticated look",
    price: 2999.99,
    category: "Formal",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71M++gy1YHL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81JzFDDm7TL._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Black", "Brown", "Tan"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 95,
    customizationOptions: [
      {
        name: "Lace Color",
        type: "color",
        values: ["Black", "Brown", "Beige"],
      },
    ],
    model3D: "leather_oxfords.obj",
  },
  {
    name: "Wingtip Brogue Shoes",
    description: "Stylish wingtip brogue shoes for a refined appearance",
    price: 2599.99,
    category: "Formal",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71bbDp9uOQL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81RLjeL+2iL._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Black", "Burgundy", "Cognac"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 85,
    customizationOptions: [
      {
        name: "Lace Color",
        type: "color",
        values: ["Black", "Brown", "White"],
      },
    ],
    model3D: "wingtip_brogue.obj",
  },
  {
    name: "Cap Toe Derby Shoes",
    description: "Elegant cap toe derby shoes for formal occasions",
    price: 3199.99,
    category: "Formal",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71RrYg3SMvL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81A8FlZIy1L._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Black", "Chestnut", "Mahogany"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 90,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["Black", "Brown", "Gray"] },
    ],
    model3D: "cap_toe_derby.obj",
  },
  {
    name: "Monk Strap Dress Shoes",
    description: "Sophisticated monk strap dress shoes for a distinctive look",
    price: 3499.99,
    category: "Formal",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71K5fDsRtJL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81VGi9mUc4L._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Black", "Brown", "Tan"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 80,
    customizationOptions: [
      { name: "Buckle Color", type: "color", values: ["Silver", "Gold"] },
    ],
    model3D: "monk_strap_dress.obj",
  },
  {
    name: "Plain Toe Oxford Shoes",
    description: "Classic plain toe oxford shoes for a timeless style",
    price: 2899.99,
    category: "Formal",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71UJ66T1MiL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/810fCS3kKnL._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Black", "Brown", "Cognac"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 100,
    customizationOptions: [
      {
        name: "Lace Color",
        type: "color",
        values: ["Black", "Brown", "White"],
      },
    ],
    model3D: "plain_toe_oxford.obj",
  },
  {
    name: "Derby Shoes with Brogue",
    description: "Derby shoes with brogue detailing for a sophisticated touch",
    price: 3099.99,
    category: "Formal",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71pHZrt3rxL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81y8PVtOplL._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Black", "Chestnut", "Mahogany"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 95,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["Black", "Brown", "Gray"] },
    ],
    model3D: "derby_brogue.obj",
  },
  {
    name: "Tassel Loafers",
    description: "Stylish tassel loafers for a polished and comfortable look",
    price: 2699.99,
    category: "Formal",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71jxH10bYtL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81TlwUqFbQL._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Black", "Brown", "Tan"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 85,
    customizationOptions: [
      {
        name: "Tassel Color",
        type: "color",
        values: ["Black", "Brown", "Gold"],
      },
    ],
    model3D: "tassel_loafers.obj",
  },
  {
    name: "Wholecut Leather Shoes",
    description: "Wholecut leather shoes for a sleek and modern appearance",
    price: 3299.99,
    category: "Formal",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71RFtWwGgDL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81I8qjTBR-L._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Black", "Brown", "Cognac"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 90,
    customizationOptions: [
      { name: "Lace Color", type: "color", values: ["Black", "Brown", "Gray"] },
    ],
    model3D: "wholecut_leather.obj",
  },
  {
    name: "Double Monk Strap Shoes",
    description: "Double monk strap shoes for a bold and fashionable statement",
    price: 2899.99,
    category: "Formal",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71WZWqEbz6L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81r1lNJNVuL._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Black", "Brown", "Tan"] },
      { name: "Size", options: ["7", "8", "9, 10"] },
    ],
    stock: 80,
    customizationOptions: [
      { name: "Buckle Color", type: "color", values: ["Silver", "Gold"] },
    ],
    model3D: "double_monk_strap.obj",
  },
  {
    name: "Formal Loafers",
    description: "Classic formal loafers for a comfortable and refined look",
    price: 2499.99,
    category: "Formal",
    product: "footwear",
    images: [
      "https://m.media-amazon.com/images/I/71R-LQFHz2L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Kr5wjYYZL._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Black", "Brown", "Chestnut"] },
      { name: "Size", options: ["7", "8", "9", "10"] },
    ],
    stock: 75,
    customizationOptions: [
      {
        name: "Tassel Color",
        type: "color",
        values: ["Black", "Brown", "Gold"],
      },
    ],
    model3D: "formal_loafers.obj",
  },

  {
    name: "Casual Cotton Shirt",
    description: "A stylish and comfortable cotton shirt for casual occasions",
    price: 29.99,
    category: "Apparel",
    images: [
      "https://m.media-amazon.com/images/I/71zgBPS4RdL._SL1440_.jpg",
      "https://m.media-amazon.com/images/I/71Ic4PPR-QL._SL1440_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Blue", "White", "Striped"] },
      { name: "Size", options: ["S", "M", "L", "XL"] },
    ],
    stock: 80,
    customizationOptions: [],
    model3D: "",
  },
  {
    name: "Classic Leather Watch",
    description:
      "An elegant and classic leather watch for both casual and formal wear",
    price: 79.99,
    category: "Accessories",
    images: [
      "https://m.media-amazon.com/images/I/61brXeJQH9L._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/715Xi2s2pxL._SL1025_.jpg",
    ],
    variants: [{ name: "Color", options: ["Brown", "Black", "Silver"] }],
    stock: 50,
    customizationOptions: [],
    model3D: "",
  },
  {
    name: "Waterproof Winter Jacket",
    description: "Stay warm and dry with this stylish waterproof winter jacket",
    price: 99.99,
    category: "Apparel",
    images: [
      "https://m.media-amazon.com/images/I/71FpYA79bCL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71u7iQU9+1L._SL1500_.jpg",
    ],
    variants: [
      { name: "Color", options: ["Black", "Gray", "Navy"] },
      { name: "Size", options: ["M", "L", "XL"] },
    ],
    stock: 60,
    customizationOptions: [],
    model3D: "",
  },
  {
    name: "Luxury Floral Perfume",
    description:
      "Indulge in the captivating scent of this luxury floral perfume",
    price: 49.99,
    category: "Fragrance",
    images: [
      "https://m.media-amazon.com/images/I/41uvXAeZUbL._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/71d7eDQhA2L._SY450_.jpg",
    ],
    variants: [{ name: "Volume", options: ["50ml", "100ml"] }],
    stock: 70,
    customizationOptions: [],
    model3D: "",
  },
];

export default sampleProducts;
