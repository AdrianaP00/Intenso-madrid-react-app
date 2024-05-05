const montanare = {
  title: "Perfectas para compartir",
  items: [
    {
      name: "‘LA MONTANARA’",
      tags: "",
      description: <p>Pizza Frita con salsa de Tomate San Marzano y Parmigiano</p>,
      alergenics: ["gluten"],
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699833646/inverso-madrid/comida/LA_MONTANARA_kj1rch.jpg",
      price: 10.5,
    },
    {
      name: "LA PEPPERONI",
      tags: "",
      description: "Pizza Frita con crema de Ricotta y Spianata Calabrese",
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927370/inverso-madrid/2024-MAY/comida/LA_PEPPERONI.jpg",
      alergenics: ["gluten", "lactosa", "cerdo", "frutos-secos"],
      price: 13,
    },
    {
      name: "LA FRESCA",
      tags: "",
      description: <p>Pizza Frita con Tomate Beefsteak y Mayonesa de Albahaca</p>,
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927345/inverso-madrid/2024-MAY/comida/LA_FRESCA.jpg",
      alergenics: ["gluten", "lactosa"],
      price: 11,
    },
  ],
};

const caprichos = {
  title: "¿Un capricho para acompañar tu cerveza?",
  items: [
    {
      name: "UOVO & POMODORO",
      description: (
        <>
          <p>Huevo cocido , Mayonesa de Tomate confit , Pane Guttiau</p>
          <br />
          <p>* Suplemento 2.50€</p>
        </>
      ),
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927283/inverso-madrid/2024-MAY/comida/UOVO_POMODORO.jpg",
      alergenics: ["gluten", "cerdo", "lactosa", "huevo"],
      price: 5.5,
    },
    {
      name: "CANNOLO TONNATO",
      description: (
        <>
          <p>Cannolo crujiente relleno de Crema de Atún,Anchoas,Alcaparras y Tomate</p>
          <br />
          <p>* Suplemento 2.50€</p>
        </>
      ),
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927352/inverso-madrid/2024-MAY/comida/CANNOLO_TONNATO.jpg",
      alergenics: ["gluten", "cerdo", "lactosa", "huevo"],
      price: 7.5,
    },
    {
      name: "CROCCHETTA CACIO PEPE & LIMONE",
      description: (
        <>
          <p>Croquetas de Queso Pecorino y Pimienta negra , Gel de limón</p>
          <br />
          <p>* Suplemento 1.75€</p>
        </>
      ),
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927358/inverso-madrid/2024-MAY/comida/CROCCHETTA.jpg",
      alergenics: ["lactosa", "frutos-secos"],
      price: 7,
    },
  ],
};
const tapas = {
  title: "Classic Italian Tapas",
  items: [
    {
      name: "Tortilla de Pasta",
      description: (
        <>
          <p>‘Sorry Spain but with Pasta is Better’</p>
          <br />
          <p>Tortilla de Spaghetti y Salame Napoli.</p>
        </>
      ),
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699833646/inverso-madrid/comida/TORTILLA_DE_PASTA_ayr1nh.jpg",
      alergenics: ["gluten", "cerdo", "lactosa", "huevo"],
      price: 9,
    },
    {
      name: "Polpette",
      description: (
        <>
          <p>‘No! no como las hacía tu abuela’</p>
          <br />
          <p>Albóndigas en Salsa Tomate,Parmigiano, Ceniza de Pan</p>
        </>
      ),
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699833772/inverso-madrid/comida/photo_2023-11-13_01-02-23_lsh91x.jpg",
      alergenics: ["gluten", "cerdo", "lactosa", "huevo"],
      price: 12,
    },
    {
      name: "Burrata d’Estate",
      description: (
        <>
          <p>Chorreada 100% Italiana</p>
          <br />
          <p>Burrata de Puglia 200gr con ensalada de tomate y su salsa</p>
        </>
      ),
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927333/inverso-madrid/2024-MAY/comida/BURRATA_D_ESTATE.jpg",
      alergenics: ["lactosa", "frutos-secos"],
      price: 14,
    },
    {
      name: "Bruschetta Verde",
      description: (
        <>
          <p>Crujido Veraniego</p>
          <br />
          <p>Tostas Artesanal con Ricotta,Menta y Calabacin marinados a la Scapece</p>
        </>
      ),
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927327/inverso-madrid/2024-MAY/comida/BRUSCHETTA_VERDE.jpg",
      alergenics: ["gluten"],
      price: 10.5,
    },
    {
      name: "Patata marinara",
      description: (
        <>
          <p>‘Perfume de Italia’</p>
          <br />
          <p>Patatas Fritas con Salsa Alioli,Salsa de Tomate y Orégano fresco</p>
        </>
      ),
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927322/inverso-madrid/2024-MAY/comida/PATATA_MARINARA.jpg",
      alergenics: ["gluten", "lactosa", "cerdo"],
      price: 8,
    },
    {
      name: "Pane e salame",
      description: (
        <>
          <p>‘La merienda italiana’</p>
          <br />
          <p>Duo de Brioches tostados, rellenos de Salame Napoli,Parmigiano y Confitura de Higos</p>
        </>
      ),
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927316/inverso-madrid/2024-MAY/comida/PANE_E_SALAME.jpg",
      alergenics: ["pescado", "cerdo", "lactosa"],
      price: 14,
    },
    {
      name: "Pic Nic",
      description: (
        <>
          <p>‘Ven al parque con nosotros’</p>
          <br />
          <p>Tabla de Embutidos y Quesos Italianos</p>
        </>
      ),
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927311/inverso-madrid/2024-MAY/comida/PICNIC.jpg",
      alergenics: ["cerdo", "lactosa"],
      price: 24,
    },
  ],
};

const dolci = {
  title: "Dolci",
  items: [
    {
      name: "TIRAMISPRITZ",
      description: (
        <>
          <p>El único Tiramisù borracho de Madrid</p>
          <br />
          <p>Crema al Mascarpone , Savoiardi ,Gel de Aperol</p>
        </>
      ),
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927305/inverso-madrid/2024-MAY/comida/TIRAMISPRITZ.jpg",
      alergenics: ["alcool", "huevo", "lactosa", "gluten"],
      price: 7,
    },
    {
      name: "TIRAMISU BRÛLÉ",
      description: (
        <>
          <p>‘Ups, quemamos el postre’</p>
          <br />
          <p>Crema Mascarpone al Cacao, Savoiardi , Caffè , Azucar moreno</p>
        </>
      ),
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927299/inverso-madrid/2024-MAY/comida/TIRAMISU_br%C3%BBl%C3%A9.jpg",
      alergenics: ["alcool", "huevo", "gluten"],
      price: 7,
    },
    {
      name: "SORBETTO AL LIMONE",
      description: (
        <>
          <p>‘Fresco,Aromático,Italiano’</p>
          <br />
          <p>Sorbete Italiano al Limone , Albahaca y Galleta Crujiente</p>
        </>
      ),
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927288/inverso-madrid/2024-MAY/comida/SORBETTO_AL_LIMONE.jpg",
      alergenics: ["gluten", "lactosa"],
      price: 6.5,
    },
    {
      name: "BABA & VERMOUTH",
      description: (
        <>
          <p>‘Un baba paseando por Madrid’</p>
          <br />
          <p>Babà Napolitano , Bagna al Vermouth , Mousse al Pistacchio , Pistacchio crujiente y Cereza Amarena</p>
        </>
      ),
      img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927294/inverso-madrid/2024-MAY/comida/BABA_VERMOUTH.jpg",
      alergenics: ["gluten", "lactosa"],
      price: 7.5,
    },
  ],
};

const cocktails = [
  {
    title: "MACHO",
    price: "10",
    img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927259/inverso-madrid/2024-MAY/drink/MACHO.jpg",
    description: "‘El amor tiene mil formas, pero los hombres necesitan un par‘",
    tags: "RYE WHISKEY | SWEET VERMOUTH | LIMA | HOJAS DE MENTA",
  },
  {
    title: "CASALINGA",
    price: "9",
    img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927265/inverso-madrid/2024-MAY/drink/CASALINGA.jpg",
    description: "‘Casta fuit, lanam fecit, domum servavit.’",
    tags: "APEROL | PUREA DE MANGO | LEMONADA | ANGOSTURA",
  },
  {
    title: "MODELLA",
    price: "9",
    img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927254/inverso-madrid/2024-MAY/drink/MODA.jpg",
    description: "'La moda es lo que sigues cuando no sabes quién eres'",
    tags: "GIN | MARTINI FIERO | CAMPARI | PERFUME DE ROSA",
  },
  {
    title: "MAMMONE",
    price: "9",
    img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927249/inverso-madrid/2024-MAY/drink/MAMMONE.jpg",
    description: " ‘Nunca me casaría con un 'hombre de mamá',No me siento bien con el matrimonio.’",
    tags: "VERMOUTH ROSSO | NARANJA | JARABE DE FRESA Y FRUTA DE LA PASSION | PEYCHAUD’S BITTER",
  },
  {
    title: "TOMATE LOVER",
    price: "10",
    img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927376/inverso-madrid/2024-MAY/drink/TOMATE_LOVER.jpg",
    description: "‘Los italianos solo tienen dos cosas en mente: la otra es el tomate.‘",
    tags: "VODKA | ZUMO DE TOMATE | JARABE DE PAN TOSTADO| LIMÓN",
  },
  {
    title: "MAFIOSO",
    price: "11",
    img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927270/inverso-madrid/2024-MAY/drink/MAFIOSO.jpg",
    description: "‘Sabemos que en el fondo eres un tierno‘",
    tags: "TEQUILA | ZUMO LIMÓN | JARABE DE ALMENDRAS | BITTER NARANJA",
  },
  {
    title: "COFFEE LOVER",
    price: "10",
    img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927244/inverso-madrid/2024-MAY/drink/COFFE_LOVER.jpg",
    description: "‘Sea cual sea tu pregunta, mi respuesta es: café. ¡Buenos días!‘",
    tags: "RON ANEJO | SAMBUCA | CAFFE ESPRESSO | JARABE CASERO | LICOR DE CAFÉ",
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
  caprichos,
};

export default data;
