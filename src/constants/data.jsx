import images from "./images";

const montanare = {
  title: "Not The Classic Pizza",
  items: [
    {
      name: "La Montanara ‘Classic’",
      description: "con Salsa de Tomate S.Marzano, Parmigiano y Albahaca",
      alergenics: ["gluten"],
      price: 12,
    },
    {
      name: "La Golosa",
      description: "con Mortadella, Ricotta y Pistacho",
      tags: "¿Ya te han dicho que lo frito sabe mejor?",
      alergenics: ["gluten", "lactosa", "cerdo", "frutos-secos"],
      price: 14,
    },
    {
      name: "La Pija",
      description:
        "No sé si lo has entendido, pero ¡Lo frito siempre sabe mejor!",
      tags: "con Salsa de Trufa",
      alergenics: ["gluten", "lactosa"],
      price: 15,
    },
  ],
};

const tapas = {
  title: "Classic Italian Tapas",
  items: [
    {
      name: "Tortilla de Pasta",
      description: "Sorry Spain, but ‘With Pasta is Better'",
      tags: "gluten, carne, queso, huevo, pimienta negra",
      alergenics: ["gluten", "cerdo", "lactosa", "huevo"],
      price: 9,
    },
    {
      name: "Polpette",
      description: "No! no como las hacía tu abuela",
      tags: "queso, gluten, carne, ajo, pimienta negra",
      alergenics: ["gluten", "cerdo", "lactosa", "huevo"],
      price: 13,
    },
    {
      name: "Burrata d’Inverno",
      description: "Chorreada 100% Italiana",
      tags: "queso, nueces",
      alergenics: ["lactosa", "frutos-secos"],
      price: 14,
    },
    {
      name: "Fresella",
      description: "Aquí la Tostas se llama Fresella!",
      tags: "gluten, champignon",
      alergenics: ["gluten"],
      price: 12,
    },
    {
      name: "Patata Cacio&Pancetta",
      description: "Frita, Guarra .. ¿qué más quieres?!",
      tags: "queso, cerdo, pimienta negra",
      alergenics: ["gluten", "lactosa", "cerdo"],
      price: 8,
    },
    {
      name: "Sepia PoP",
      description: "Mojas y Muerdes",
      tags: "pescado",
      alergenics: ["pescado"],
      price: 18,
    },
    {
      name: "Marenna 3.0",
      description: "Fatt na Marenn ca’ Murtadell’",
      tags: "cerdo, pimiento verde",
      alergenics: ["cerdo"],
      price: 14,
    },
    {
      name: "Pic Nic (2pax)",
      description: "Ven al parque con nosotros",
      tags: "carne, queso",
      alergenics: ["cerdo", "lactosa"],
      price: 26,
    },
  ],
};

const dolci = {
  title: "Dolci",
  items: [
    {
      name: "TiramiSpritz",
      description: "El único tiramisú borracho de Madrid",
      tags: "alcohol, huevo, queso, gluten",
      alergenics: ["alcool", "huevo", "lactosa", "gluten"],
      price: 7,
    },
    {
      name: "U’ Siciliano",
      description: "Crujiente y Goloso",
      tags: "gluten, queso",
      alergenics: ["gluten", "lactosa"],
      price: 7,
    },
    {
      name: "Affogato al Caffè",
      description: "Dulce, Italiano, Intenso",
      tags: "queso, gluten",
      alergenics: ["gluten", "lactosa"],
      price: 7,
    },
  ],
};

const cocktails = [
  {
    title: "Lujuriosos ‘Apasionadamente fresco ‘",
    price: "10",
    tags: "Vodka | Jarabe de Melocotón | Vainilla | Lemonada",
  },
  {
    title: "Golosos ‘Excesivamente bueno’",
    price: "10",
    tags: "Ron añejo | Licor 43 | Licor de café | Chocolate Blanco | Nata",
  },
  {
    title: "Avaros 'No querrás compartirlo con nadie'",
    price: "11",
    tags: "Gin | Saint Germain | Jarabe casero de Pepino | Limon | Prosecco",
  },
  {
    title: "Iracundos ‘Definitivamente Spicy’",
    price: "10",
    tags: "Tequila infundida con chile | Agave | Limon | Campari",
  },
  {
    title: "Herejes '¿Quién dice que la verdad es una?'",
    price: "10",
    tags: "Maraschino | Vermouth Extra Dry | Bitter Blanco",
  },
  {
    title: "Violentos ‘Sabemos que en el fondo eres un tierno’",
    price: "11",
    tags: "Whiskey | Frangelico | Jarabe casero | Lemonada | Angostura",
  },
  {
    title: "Traidores 'Traidor*,Mentiros*.. otras cualidades?!'",
    price: "10",
    tags: "Cachaca | Limon | Cordial de Lapsang Souchong y Jengibre",
  },
  {
    title:
      "Lucifer 'Una vez fuiste el más hermoso de los ángeles, ¿recuerdas?'",
    price: "10",
    tags: "Tequila de Miso Rojo | Vino Tinto | Jarabe casero | Limon",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Our Choma",
    subtitle: "Well-Seasoned Choma In Northern Bypass, Nairobi Area.",
  },
  {
    imgUrl: images.award01,
    title: "Ample Parking",
    subtitle: "Adequate Parking Space Available For Our Customers.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Quality Customer Service And Great Security.",
  },
  {
    imgUrl: images.award03,
    title: "Reasonable Prices",
    subtitle: "Have An Amazing Time Without Digging Too Deep.",
  },
];

const data = { montanare, tapas, dolci, cocktails, awards };

export default data;
