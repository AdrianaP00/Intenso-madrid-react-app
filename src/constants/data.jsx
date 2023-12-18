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
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1700138199/d9aa8b0abf49c6632dd76b9b96e0398a_mcivoy.jpg",
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
      description: "Sorry Spain, but ‘With Pasta is Better!'",
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699832744/inverso-madrid/TORTILLA_DE_PASTA_uxkoac.jpg",
      alergenics: ["gluten", "cerdo", "lactosa", "huevo"],
      price: 9,
    },
    {
      name: "Polpette",
      description: "No! no como las hacía tu abuela!",
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699833772/inverso-madrid/comida/photo_2023-11-13_01-02-23_lsh91x.jpg",
      alergenics: ["gluten", "cerdo", "lactosa", "huevo"],
      price: 13,
    },
    {
      name: "Burrata d’Inverno",
      description: "Chorreada 100% Italiana?!",
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699826071/inverso-madrid/BURRATA_D_INVERNO_srjda2.jpg",
      alergenics: ["lactosa", "frutos-secos"],
      price: 14,
    },
    {
      name: "Fresella",
      description: "Aquí la Tostas se llama Fresella!",
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699833647/inverso-madrid/comida/FRESELLA_qox7og.jpg",
      alergenics: ["gluten"],
      price: 12,
    },
    {
      name: "Patata Cacio&Pancetta",
      description: "Frita, Guarra .. ¿qué más quieres?!",
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699832743/inverso-madrid/PATATA_CACIO_PANCETTA_ekep7q.webp",
      alergenics: ["gluten", "lactosa", "cerdo"],
      price: 8,
    },
    {
      name: "Sepia PoP",
      description: "Mojas y Muerdes!",
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699216799/inverso-madrid/sm8pydqnjgjyskkrqpuj.jpg",
      alergenics: ["pescado"],
      price: 18,
    },
    {
      name: "Marenna 3.0",
      description: "Fatt na Marenn ca’ Murtadell!’",
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699833646/inverso-madrid/comida/LA_MARENNA_3.0_ldcyvb.jpg",
      alergenics: ["cerdo"],
      price: 14,
    },
    {
      name: "Pic Nic (2pax)",
      description: "Ven al parque con nosotros?!",
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699833645/inverso-madrid/comida/PIC_NIC_eizj3t.webp",
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
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699833646/inverso-madrid/comida/TIRAMISPRITZ_b7tecy.jpg",
      alergenics: ["alcool", "huevo", "lactosa", "gluten"],
      price: 7,
    },
    {
      name: "U’ Siciliano",
      description: "Crujiente y Goloso",
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699833772/inverso-madrid/comida/photo_2023-11-13_01-02-25_fz5g3o.jpg",
      alergenics: ["gluten", "lactosa"],
      price: 7,
    },
    {
      name: "Affogato al Caffè",
      description: "Dulce, Italiano, Intenso",
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699833647/inverso-madrid/comida/Affogato_al_Caff%C3%A8_2_g7yrxj.jpg",
      alergenics: ["gluten", "lactosa"],
      price: 7,
    },
  ],
};

const cocktails = [
  {
    title: "Lujuriosos",
    price: "10",
    img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1700141725/5a305a53f28235196d9496e00c820562_xwzowb.jpg",
    description: "‘Apasionadamente fresco ‘",
    tags: "Vodka | Jarabe de Melocotón | Vainilla | Lemonada",
  },
  {
    title: "Golosos",
    price: "10",
    img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1700138286/Golosos_hzti9b.jpg",
    description: "‘Excesivamente bueno’",
    tags: "Ron añejo | Licor 43 | Licor de café | Chocolate Blanco | Nata",
  },
  {
    title: "Avaros",
    price: "11",
    img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1700138287/Avaros_agkmnf.jpg",
    description: "'No querrás compartirlo con nadie'",
    tags: "Gin | Saint Germain | Jarabe casero de Pepino | Limon | Prosecco",
  },
  {
    title: "Iracundos",
    price: "10",
    img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1700138286/Iracundos_crj6qa.jpg",
    description: " ‘Definitivamente Spicy’",
    tags: "Tequila infundida con chile | Agave | Limon | Campari",
  },
  {
    title: "Herejes",
    price: "10",
    img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1700138286/Herejes_molayo.jpg",
    description: "‘¿Quién dice que la verdad es una?‘",
    tags: "Maraschino | Vermouth Extra Dry | Bitter Blanco",
  },
  {
    title: "Violentos",
    price: "11",
    img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1700138289/Violentos_ozadnp.jpg",
    description: "‘Sabemos que en el fondo eres un tierno‘",
    tags: "Whiskey | Frangelico | Jarabe casero | Lemonada | Angostura",
  },
  {
    title: "Traidores",
    price: "10",
    img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1700138286/Traidores_xe8iw2.jpg",
    description: "‘Traidor*,Mentiros*.. otras cualidades?!‘",
    tags: "Cachaça | Limon | Cordial de Lapsang Souchong y Jengibre",
  },
  {
    title: "Lucifer",
    price: "10",
    img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1700141725/6c2062864a7cb81b2b79f14605838096_v2tomb.jpg",
    description: "‘Una vez fuiste el más hermoso de los ángeles, ¿recuerdas?‘",
    tags: "Tequila de Miso Rojo | Vino Tinto | Jarabe casero | Limon",
  },
];

const bebidas = {
  title: "Agua y Cerveza",
  items: [
    {
      title: "San Pellegrino",
      description: "50 cl",
      price: " 2,5",
    },
    {
      title: "Acqua Panna",
      description: "50 cl",
      price: " 2,5",
    },

    {
      title: "Moretti",
      description: "33 cl",
      price: " 3",
    },
    {
      title: "Peroni",
      description: "33 cl",
      price: " 3",
    },
  ],
};

const VinosBlancos = {
  title: "Vinos blancos",
  items: [
    {
      title: "Grillo DOC Alagna Baglio Baiata",
      description: "Sicilia",
      price: (
        <>
          <p className="p__cormorant">4,5/copa</p>
          <p className="p__cormorant">19/botella</p>
        </>
      ),
    },
    {
      title: "Pinot Grigio DOC San Marco",
      description: "Veneto",
      price: (
        <>
          <p className="p__cormorant">4,5/copa</p>
          <p className="p__cormorant">21/botella</p>
        </>
      ),
    },
    {
      title: "Falanghina IGP Campostellato",
      description: "Campania",
      price: (
        <>
          <p className="p__cormorant">4,5/copa</p>
          <p className="p__cormorant">23/botella</p>
        </>
      ),
    },
    {
      title: "Chardonnay DOC Conti d'Arco",
      description: "Trentino",
      price: (
        <>
          <p className="p__cormorant">5/copa</p>
          <p className="p__cormorant">25/botella</p>
        </>
      ),
    },
    {
      title: "Passione & Sentimento IGT Pasqua",
      description: "Veneto",
      price: (
        <>
          <p className="p__cormorant">28/botella</p>
        </>
      ),
    },
    {
      title: "Moscato d’Asti DOC",
      description: "Piemonte",
      price: (
        <>
          <p className="p__cormorant">4,5/copa</p>
          <p className="p__cormorant">30/botella</p>
        </>
      ),
    },
  ],
};

const VinosRosado = {
  title: "Vinos rosados",
  items: [
    {
      title: "Bardolino Chiaretto DOC Pasqua, Veneto:",
      description: "Veneto",
      price: (
        <>
          <p className="p__cormorant">5/copa</p>
          <p className="p__cormorant">21/botella</p>
        </>
      ),
    },
    {
      title: "Kreos Castello Monaci IGT",
      description: "Puglia",
      price: (
        <>
          <p className="p__cormorant"> 24/botella</p>
        </>
      ),
    },
    {
      title: "Lambrusco Argento Rosato DOC: ",
      description: "Emilia Romagna",
      price: (
        <>
          <p className="p__cormorant">5/copa</p>
          <p className="p__cormorant">18/botella</p>
        </>
      ),
    },
  ],
};

const VinosTintos = {
  title: "Vinos tintos",
  items: [
    {
      title: "Shiraz Nero d'Avola DOC Solandia",
      description: "Sicilia",
      price: (
        <>
          <p className="p__cormorant">4,5/copa</p>
          <p className="p__cormorant">19/botella</p>
        </>
      ),
    },
    {
      title: "Campostellato Aglianico IGP",
      description: "Campania",
      price: (
        <>
          <p className="p__cormorant">4,5/copa</p>
          <p className="p__cormorant">23/botella</p>
        </>
      ),
    },
    {
      title: "Barbera d'Asti DOCG Rinaldi",
      description: "Piemonte",
      price: (
        <>
          <p className="p__cormorant">5/copa</p>
          <p className="p__cormorant">25/botella</p>
        </>
      ),
    },
    {
      title: "Passione & Sentimento IGT Pasqua",
      description: "Veneto",
      price: (
        <>
          <p className="p__cormorant">28/botella</p>
        </>
      ),
    },
    {
      title: "Maurleo DOC Beconcini",
      description: "Toscana",
      price: (
        <>
          <p className="p__cormorant">5/copa</p>
          <p className="p__cormorant">30/botella</p>
        </>
      ),
    },
    {
      title: "MezzaPezza Primitivo IGP Trullo di Pezza",
      description: "Puglia",
      price: (
        <>
          <p className="p__cormorant">6/copa</p>
          <p className="p__cormorant">40/botella</p>
        </>
      ),
    },
    {
      title: "Falerno del Massico DOC Villa Matilde",
      description: "Campania",
      price: (
        <>
          <p className="p__cormorant">25/botella</p>
        </>
      ),
    },
  ],
};

const Prosecco = {
  title: "PROSECCO & CHAMPAGNE",
  items: [
    {
      title: "Lambrusco Argento Rosato DOC",
      description: "Emilia Romagna",
      price: (
        <>
          <p className="p__cormorant">5/copa</p>
          <p className="p__cormorant">18/botella</p>
        </>
      ),
    },
    {
      title: "Prosecco DOC Millesimato",
      description: "Borgo Imperiale, Veneto",
      price: (
        <>
          <p className="p__cormorant">5/copa</p>
          <p className="p__cormorant">21/botella</p>
        </>
      ),
    },
    {
      title: "Prosecco Teresa Rizzi DOC",
      description: "Veneto",
      price: (
        <>
          <p className="p__cormorant">6/copa</p>
          <p className="p__cormorant">25/botella</p>
        </>
      ),
    },
    {
      title: "Falanghina Brut Feudi San Gregorio",
      description: "Campania",
      price: (
        <>
          <p className="p__cormorant">40/botella</p>
        </>
      ),
    },
    {
      title: "Bellavista Alma Grande Cuvée Brut DOCG",
      description: "Franciacorta",
      price: (
        <>
          <p className="p__cormorant">60/botella</p>
        </>
      ),
    },
    {
      title: "Laurent Perrier La Cuvée Brut",
      price: (
        <>
          <p className="p__cormorant">70/botella</p>
        </>
      ),
    },
    {
      title: "Mumm Gran Cordon Rouge Brut",
      price: (
        <>
          <p className="p__cormorant">80/botella</p>
        </>
      ),
    },
    {
      title: "Moët & Chandon Rosé Impérial",
      price: (
        <>
          <p className="p__cormorant">90/botella</p>
        </>
      ),
    },
  ],
};

const data = {
  montanare,
  tapas,
  dolci,
  cocktails,
  bebidas,
  VinosBlancos,
  VinosTintos,
  VinosRosado,
  Prosecco,
};

export default data;
