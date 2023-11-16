import images from "./images";

const montanare = {
  title: "Not The Classic Pizza",
  items: [
    {
      name: "La Montanara ‘Classic’",
      description: "con Salsa de Tomate S.Marzano, Parmigiano y Albahaca",
      alergenics: ["gluten"],
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699832744/inverso-madrid/LA_MONTANARA_pjnepq.jpg",
      price: 12,
    },
    {
      name: "La Golosa",
      description: "con Mortadella, Ricotta y Pistacho",
      tags: "¿Ya te han dicho que lo frito sabe mejor?",
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699216797/inverso-madrid/owxxrmb3wnl0pekayjpw.jpg",
      alergenics: ["gluten", "lactosa", "cerdo", "frutos-secos"],
      price: 14,
    },
    {
      name: "La Pija",
      description:
        "No sé si lo has entendido, pero ¡Lo frito siempre sabe mejor!",
      tags: "con Salsa de Trufa",
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699832744/inverso-madrid/PIZZA_CON_TRUFA_LA_PIJA_klrjk3.jpg",
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
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699832744/inverso-madrid/TORTILLA_DE_PASTA_uxkoac.jpg",
      alergenics: ["gluten", "cerdo", "lactosa", "huevo"],
      price: 9,
    },
    {
      name: "Polpette",
      description: "No! no como las hacía tu abuela",
      tags: "queso, gluten, carne, ajo, pimienta negra",
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699833772/inverso-madrid/comida/photo_2023-11-13_01-02-23_lsh91x.jpg",
      alergenics: ["gluten", "cerdo", "lactosa", "huevo"],
      price: 13,
    },
    {
      name: "Burrata d’Inverno",
      description: "Chorreada 100% Italiana",
      tags: "queso, nueces",
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699826071/inverso-madrid/BURRATA_D_INVERNO_srjda2.jpg",
      alergenics: ["lactosa", "frutos-secos"],
      price: 14,
    },
    {
      name: "Fresella",
      description: "Aquí la Tostas se llama Fresella!",
      tags: "gluten, champignon",
      img:"https://res.cloudinary.com/dlybwinmd/image/upload/v1699833647/inverso-madrid/comida/FRESELLA_qox7og.jpg",
      alergenics: ["gluten"],
      price: 12,
    },
    {
      name: "Patata Cacio&Pancetta",
      description: "Frita, Guarra .. ¿qué más quieres?!",
      tags: "queso, cerdo, pimienta negra",
      img:"https://res.cloudinary.com/dlybwinmd/image/upload/v1699832743/inverso-madrid/PATATA_CACIO_PANCETTA_ekep7q.webp",
      alergenics: ["gluten", "lactosa", "cerdo"],
      price: 8,
    },
    {
      name: "Sepia PoP",
      description: "Mojas y Muerdes",
      tags: "pescado",
      img:"https://res.cloudinary.com/dlybwinmd/image/upload/v1699216799/inverso-madrid/sm8pydqnjgjyskkrqpuj.jpg",
      alergenics: ["pescado"],
      price: 18,
    },
    {
      name: "Marenna 3.0",
      description: "Fatt na Marenn ca’ Murtadell’",
      tags: "cerdo, pimiento verde",
      img:"https://res.cloudinary.com/dlybwinmd/image/upload/v1699833646/inverso-madrid/comida/LA_MARENNA_3.0_ldcyvb.jpg",
      alergenics: ["cerdo"],
      price: 14,
    },
    {
      name: "Pic Nic (2pax)",
      description: "Ven al parque con nosotros",
      tags: "carne, queso",
      img:"https://res.cloudinary.com/dlybwinmd/image/upload/v1699833645/inverso-madrid/comida/PIC_NIC_eizj3t.webp",
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
      img:"https://res.cloudinary.com/dlybwinmd/image/upload/v1699833646/inverso-madrid/comida/TIRAMISPRITZ_b7tecy.jpg",
      alergenics: ["alcool", "huevo", "lactosa", "gluten"],
      price: 7,
    },
    {
      name: "U’ Siciliano",
      description: "Crujiente y Goloso",
      img:"https://res.cloudinary.com/dlybwinmd/image/upload/v1699833772/inverso-madrid/comida/photo_2023-11-13_01-02-25_fz5g3o.jpg",
      tags: "gluten, queso",
      alergenics: ["gluten", "lactosa"],
      price: 7,
    },
    {
      name: "Affogato al Caffè",
      description: "Dulce, Italiano, Intenso",
      tags: "queso, gluten",
      img:"https://res.cloudinary.com/dlybwinmd/image/upload/v1699833647/inverso-madrid/comida/Affogato_al_Caff%C3%A8_2_g7yrxj.jpg",
      alergenics: ["gluten", "lactosa"],
      price: 7,
    },
  ],
};

const cocktails = [
  {
    title: "Lujuriosos ‘Apasionadamente fresco ‘",
    price: "10",
    img:"https://res.cloudinary.com/dlybwinmd/image/upload/v1700141725/5a305a53f28235196d9496e00c820562_xwzowb.jpg",
    tags: "Vodka | Jarabe de Melocotón | Vainilla | Lemonada",
  },
  {
    title: "Golosos ‘Excesivamente bueno’",
    price: "10",
    img:"https://res.cloudinary.com/dlybwinmd/image/upload/v1700138286/Golosos_hzti9b.jpg",
    tags: "Ron añejo | Licor 43 | Licor de café | Chocolate Blanco | Nata",
  },
  {
    title: "Avaros 'No querrás compartirlo con nadie'",
    price: "11",
    img:"https://res.cloudinary.com/dlybwinmd/image/upload/v1700138287/Avaros_agkmnf.jpg",
    tags: "Gin | Saint Germain | Jarabe casero de Pepino | Limon | Prosecco",
  },
  {
    title: "Iracundos ‘Definitivamente Spicy’",
    price: "10",
    img:"https://res.cloudinary.com/dlybwinmd/image/upload/v1700138286/Iracundos_crj6qa.jpg",
    tags: "Tequila infundida con chile | Agave | Limon | Campari",
  },
  {
    title: "Herejes '¿Quién dice que la verdad es una?'",
    price: "10",
    img:"https://res.cloudinary.com/dlybwinmd/image/upload/v1700138286/Herejes_molayo.jpg",
    tags: "Maraschino | Vermouth Extra Dry | Bitter Blanco",
  },
  {
    title: "Violentos ‘Sabemos que en el fondo eres un tierno’",
    price: "11",
    img:"https://res.cloudinary.com/dlybwinmd/image/upload/v1700138289/Violentos_ozadnp.jpg",
    tags: "Whiskey | Frangelico | Jarabe casero | Lemonada | Angostura",
  },
  {
    title: "Traidores 'Traidor*,Mentiros*.. otras cualidades?!'",
    price: "10",
    img:"https://res.cloudinary.com/dlybwinmd/image/upload/v1700138286/Traidores_xe8iw2.jpg",
    tags: "Cachaça | Limon | Cordial de Lapsang Souchong y Jengibre",
  },
  {
    title:"Lucifer 'Una vez fuiste el más hermoso de los ángeles, ¿recuerdas?'",
    price: "10",
    img:"https://res.cloudinary.com/dlybwinmd/image/upload/v1700141725/6c2062864a7cb81b2b79f14605838096_v2tomb.jpg",
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
