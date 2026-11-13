(function () {
  "use strict";

  var STORAGE_KEY = "aura-menu-lang";
  var DEFAULT_LANG = "es";

  var UI = {
    es: {
      "nav.menu": "Carta",
      "menu.label": "Carta",
      "menu.title": "Nuestra carta",
      "menu.teaser.lead":
        "Brunch, pancakes, tostadas, smoothies y café de especialidad — carta variada para desayunar y comer en barrio.",
      "menu.teaser.detail": "Precios y alérgenos en la carta completa en español e inglés.",
      "menu.teaser.cta": "Ver carta completa",
      "menu.format.label": "Formato de la carta",
      "menu.format.text": "Texto",
      "menu.format.images": "Imágenes",
      "menu.format.imagesLabel": "Fotos",
      "menu.scan.title": "Carta impresa",
      "menu.scan.hint": "Toca una imagen para verla a tamaño completo",
      "menu.scan.brunch": "Brunch y smoothies",
      "menu.scan.pancakes": "Pancakes y cócteles",
      "menu.lightbox.close": "Cerrar",
      "lang.switchLabel": "Idioma de la carta",
      "menu.priceUnavailable": "—",
    },
    en: {
      "nav.menu": "Menu",
      "menu.label": "Menu",
      "menu.title": "Our menu",
      "menu.teaser.lead":
        "Brunch, pancakes, toast, smoothies, and specialty coffee — a varied menu for breakfast and lunch in the neighborhood.",
      "menu.teaser.detail": "Prices and allergens on the full menu in Spanish and English.",
      "menu.teaser.cta": "View full menu",
      "menu.format.label": "Menu format",
      "menu.format.text": "Text",
      "menu.format.images": "Images",
      "menu.format.imagesLabel": "Photos",
      "menu.scan.title": "Printed menu",
      "menu.scan.hint": "Tap an image to view full size",
      "menu.scan.brunch": "Brunch and smoothies",
      "menu.scan.pancakes": "Pancakes and cocktails",
      "menu.lightbox.close": "Close",
      "lang.switchLabel": "Menu language",
      "menu.priceUnavailable": "—",
    },
  };

  var GENERAL = {
    icon: "ℹ️",
    title: { es: "Información general", en: "General information" },
    body: {
      es: "Las consumiciones en terraza se piden dentro y se pagan al momento. Suplemento terraza 4%.",
      en: "Terrace orders are placed inside and paid when you order. Terrace supplement 4%.",
    },
  };

  /** @type {Array<object>} */
  var SECTIONS = [
    {
      id: "pancakes",
      icon: "🥞",
      title: { es: "Pancakes", en: "Pancakes" },
      items: [
        {
          name: { es: "Clásicas", en: "Classic" },
          price: "8,95€",
          desc: {
            es: "Pancakes con sirope de arce y mantequilla.",
            en: "Pancakes with maple syrup and butter.",
          },
          allergens: { es: "Lácteos, gluten, huevo", en: "Dairy, gluten, egg" },
        },
        {
          name: { es: "De la viña", en: "De la viña" },
          price: "10,95€",
          desc: {
            es: "Pancakes con crema de queso, mermelada de frutos rojos, fresas, arándanos y galleta Lotus.",
            en: "Pancakes with cream cheese, red-fruit jam, strawberries, blueberries and Lotus biscuit.",
          },
          allergens: { es: "Lácteos, gluten, huevo", en: "Dairy, gluten, egg" },
        },
        {
          name: { es: "Crumble de manzana", en: "Apple crumble" },
          price: "11,95€",
          desc: {
            es: "Pancakes con manzana caramelizada, canela, helado de vainilla y galletas Lotus.",
            en: "Pancakes with caramelised apple, cinnamon, vanilla ice cream and Lotus biscuits.",
          },
          allergens: { es: "Lácteos, gluten, huevo", en: "Dairy, gluten, egg" },
        },
        {
          name: { es: "Chococake", en: "Chococake" },
          price: "10,95€",
          desc: {
            es: "Pancakes con Nutella, galletas de chocolate y helado de chocolate.",
            en: "Pancakes with Nutella, chocolate cookies and chocolate ice cream.",
          },
          allergens: {
            es: "Lácteos, frutos secos, gluten, huevo",
            en: "Dairy, tree nuts, gluten, egg",
          },
        },
      ],
    },
    {
      id: "brunch",
      icon: "🍳",
      title: { es: "Brunch y más", en: "Brunch & more" },
      items: [
        {
          name: {
            es: "Huevos revueltos, bacon, pancakes, mantequilla y sirope de arce",
            en: "Scrambled eggs, bacon, pancakes, butter and maple syrup",
          },
          price: null,
          desc: {
            es: "Plato combinado de brunch.",
            en: "Combined brunch plate.",
          },
          allergens: { es: "Gluten, huevo, lácteos", en: "Gluten, egg, dairy" },
        },
        {
          name: { es: "Sunny Bacon Croissant", en: "Sunny Bacon Croissant" },
          price: "9,95€",
          desc: {
            es: "Croissant con mayonesa, lechuga, tomate, bacon y huevo frito.",
            en: "Croissant with mayo, lettuce, tomato, bacon and a fried egg.",
          },
          allergens: { es: "Gluten, huevo", en: "Gluten, egg" },
        },
        {
          name: { es: "Desayuno estrella", en: "Star breakfast" },
          price: "9,95€",
          desc: {
            es: "Tortilla francesa, tomates cherry, aguacate, bacon y tostadas.",
            en: "French omelette, cherry tomatoes, avocado, bacon and toast.",
          },
          allergens: { es: "Gluten, huevo", en: "Gluten, egg" },
        },
        {
          name: { es: "Club Sandwich", en: "Club sandwich" },
          price: "11,95€",
          desc: {
            es: "Bacon, pollo, queso, lechuga, tomate y mayonesa en pan de molde tostado, crujiente.",
            en: "Bacon, chicken, cheese, lettuce, tomato and mayo on toasted sandwich bread.",
          },
          allergens: { es: "Gluten, lácteos, huevo", en: "Gluten, dairy, egg" },
        },
        {
          name: { es: "La tentación", en: "La tentación" },
          price: "10,95€",
          desc: {
            es: "Pancakes con fresas, plátano y Nutella.",
            en: "Pancakes with strawberries, banana and Nutella.",
          },
          allergens: {
            es: "Gluten, lácteos, huevo, frutos secos",
            en: "Gluten, dairy, egg, tree nuts",
          },
        },
      ],
    },
    {
      id: "ensaladas",
      icon: "🥗",
      title: { es: "Ensaladas", en: "Salads" },
      items: [
        {
          name: { es: "Cabrito", en: "Cabrito" },
          price: "11,95€",
          desc: {
            es: "Ensalada con queso de cabra caramelizado, nueces y vinagreta de miel.",
            en: "Salad with caramelised goat’s cheese, walnuts and honey vinaigrette.",
          },
          allergens: { es: "Lácteos, frutos secos, sulfitos", en: "Dairy, tree nuts, sulphites" },
        },
        {
          name: { es: "Valle dorado", en: "Valle dorado" },
          price: "12,95€",
          desc: {
            es: "Ensalada con tomate, mozzarella, pollo a la plancha, salsa de miel y mostaza.",
            en: "Salad with tomato, mozzarella, grilled chicken, honey and mustard dressing.",
          },
          allergens: { es: "Lácteos, mostaza", en: "Dairy, mustard" },
        },
        {
          name: { es: "Aura frutal", en: "Aura frutal" },
          price: "10,95€",
          desc: {
            es: "Ensalada con melocotón, frutos secos, naranja, queso mató y jamón ibérico.",
            en: "Salad with peach, nuts, orange, mató cheese and Iberian ham.",
          },
          allergens: { es: "Lácteos, frutos secos, sulfitos", en: "Dairy, tree nuts, sulphites" },
        },
      ],
    },
    {
      id: "yogures",
      icon: "🥣",
      title: { es: "Yogures", en: "Yoghurt bowls" },
      items: [
        {
          name: { es: "Paseo por el bosque", en: "Paseo por el bosque" },
          price: null,
          desc: {
            es: "Yogur con granola, mango, uva, piña y puré de mango.",
            en: "Yoghurt with granola, mango, grapes, pineapple and mango purée.",
          },
          allergens: { es: "Lácteos, frutos secos, gluten", en: "Dairy, tree nuts, gluten" },
        },
        {
          name: { es: "El goloso", en: "El goloso" },
          price: "6,95€",
          desc: {
            es: "Yogur con granola, caramelo, Nutella, pepitas de chocolate y mantequilla de cacahuete.",
            en: "Yoghurt with granola, caramel, Nutella, chocolate chips and peanut butter.",
          },
          allergens: {
            es: "Lácteos, frutos secos, cacahuete, gluten",
            en: "Dairy, tree nuts, peanuts, gluten",
          },
        },
      ],
    },
    {
      id: "tostadas-build",
      icon: "🍞",
      title: { es: "Tostadas personalizadas", en: "Build-your-own toast" },
      buildSteps: [
        {
          title: {
            es: "Paso 1 — Escoge cómo empezar la tostada de tus sueños",
            en: "Step 1 — Choose your base",
          },
          lines: [
            { es: "Aguacate", en: "Avocado" },
            { es: "Hummus", en: "Hummus" },
            { es: "Queso crema", en: "Cream cheese" },
          ],
        },
        {
          title: { es: "Paso 2 — ¿Qué le añadimos?", en: "Step 2 — Add toppings" },
          toppings: [
            { name: { es: "Tomate cherry / de rama", en: "Cherry / vine tomato" }, price: "1,95€" },
            { name: { es: "Mezcla de lechugas", en: "Mixed lettuce" }, price: "1,25€" },
            { name: { es: "Espinaca", en: "Spinach" }, price: "1,80€" },
            { name: { es: "Pimiento verde", en: "Green pepper" }, price: "1,50€" },
            { name: { es: "Cebolla caramelizada", en: "Caramelised onion" }, price: "2,50€" },
            { name: { es: "Queso mató", en: "Mató cheese" }, price: "1,95€" },
            { name: { es: "Queso cabra", en: "Goat’s cheese" }, price: "2,50€" },
            { name: { es: "Huevo poché", en: "Poached egg" }, price: "1,95€" },
            { name: { es: "Huevo revuelto", en: "Scrambled egg" }, price: "2,50€" },
            { name: { es: "Huevo frito", en: "Fried egg" }, price: "1,95€" },
            { name: { es: "Jamón ibérico", en: "Iberian ham" }, price: "4,50€" },
            { name: { es: "Bacon", en: "Bacon" }, price: "2,50€" },
            { name: { es: "Salmón", en: "Salmon" }, price: "2,95€" },
            { name: { es: "Pollo / lomo", en: "Chicken / pork loin" }, price: "3,50€" },
          ],
        },
        {
          title: { es: "Paso 3 — ¡Que aproveche!", en: "Step 3 — Enjoy!" },
          lines: [],
        },
      ],
    },
    {
      id: "tostadas",
      icon: "🥑",
      title: { es: "Tostadas fijas", en: "Signature toasts" },
      items: [
        {
          name: { es: "Benebrioche", en: "Benebrioche" },
          price: "9,95€",
          desc: {
            es: "Pan de brioche con aguacate, bacon, huevo poché y salsa holandesa.",
            en: "Brioche with avocado, bacon, poached egg and hollandaise.",
          },
          allergens: { es: "Gluten, huevo, lácteos, sulfitos", en: "Gluten, egg, dairy, sulphites" },
        },
        {
          name: { es: "Salmón & Co.", en: "Salmón & Co." },
          price: "12,95€",
          desc: {
            es: "Pan de payés con aguacate, tomate, huevos revueltos y salmón flambeado.",
            en: "Country bread with avocado, tomato, scrambled eggs and torched salmon.",
          },
          allergens: { es: "Gluten, huevo, pescado, sulfitos", en: "Gluten, egg, fish, sulphites" },
        },
        {
          name: { es: "Verde Aura 🌱", en: "Verde Aura 🌱" },
          price: "12,65€",
          desc: {
            es: "Pan de payés con hummus, tomate cherry, espinaca baby, aguacate marinado en soja y aceite infusionado de chile.",
            en: "Country bread with hummus, cherry tomato, baby spinach, soy-marinated avocado and chilli-infused oil.",
          },
          allergens: { es: "Gluten, sésamo, soja, sulfitos", en: "Gluten, sesame, soy, sulphites" },
        },
        {
          name: { es: "Beicontinental", en: "Beicontinental" },
          price: "13,95€",
          desc: {
            es: "Pan de payés con aguacate, tomate cherry, espinaca baby, huevos revueltos, bacon y queso mató.",
            en: "Country bread with avocado, cherry tomato, baby spinach, scrambled eggs, bacon and mató cheese.",
          },
          allergens: { es: "Gluten, lácteos, huevo, sulfitos", en: "Gluten, dairy, egg, sulphites" },
        },
      ],
    },
    {
      id: "smoothies",
      icon: "🥤",
      title: { es: "Smoothies", en: "Smoothies" },
      intro: {
        es: "Fruta, agua, hielo, azúcar.",
        en: "Fruit, water, ice, sugar.",
      },
      items: [
        { name: { es: "Fresa", en: "Strawberry" }, price: "5,00€" },
        { name: { es: "Mango", en: "Mango" }, price: "5,50€" },
        { name: { es: "Frutos rojos", en: "Mixed berries" }, price: "5,95€" },
        { name: { es: "Mango y piña", en: "Mango & pineapple" }, price: "5,95€" },
        { name: { es: "Plátano y fresa", en: "Banana & strawberry" }, price: "5,50€" },
        { name: { es: "Fresa y lima", en: "Strawberry & lime" }, price: "5,50€" },
        { name: { es: "Uva, kiwi y lima", en: "Grape, kiwi & lime" }, price: "5,95€" },
        { name: { es: "Remolacha, naranja y zanahoria", en: "Beetroot, orange & carrot" }, price: "5,95€" },
        {
          name: { es: "Detox (lima, piña, espinacas, manzana)", en: "Detox (lime, pineapple, spinach, apple)" },
          price: "5,95€",
        },
        { name: { es: "Aguacate con leche de almendras", en: "Avocado with almond milk" }, price: "6,50€" },
      ],
    },
    {
      id: "frappes",
      icon: "🧊",
      title: { es: "Frappés", en: "Frappés" },
      intro: { es: "Café, agua, hielo, azúcar.", en: "Coffee, water, ice, sugar." },
      items: [
        { name: { es: "Frappé", en: "Frappé" }, price: "4,95€" },
        { name: { es: "Frappé caramelo", en: "Caramel frappé" }, price: "5,50€" },
        { name: { es: "Frappé chocolate", en: "Chocolate frappé" }, price: "5,50€" },
      ],
    },
    {
      id: "batidos",
      icon: "🥛",
      title: { es: "Batidos", en: "Milkshakes" },
      intro: { es: "Helado, leche, hielo, azúcar.", en: "Ice cream, milk, ice, sugar." },
      note: {
        es: "Pregunta en barra por sabores y precios del día.",
        en: "Ask at the bar for today’s flavours and prices.",
      },
    },
    {
      id: "cafes",
      icon: "☕",
      title: { es: "Cafés & Co.", en: "Coffee & more" },
      groups: [
        {
          subtitle: { es: "Caliente", en: "Hot" },
          items: [
            { name: { es: "Espresso", en: "Espresso" }, price: "1,45€" },
            { name: { es: "Doble espresso", en: "Double espresso" }, price: "2,40€" },
            { name: { es: "Americano", en: "Americano" }, price: "1,60€" },
            { name: { es: "Cortado", en: "Cortado" }, price: "1,55€" },
            { name: { es: "Capuchino", en: "Cappuccino" }, price: "2,50€" },
            { name: { es: "Café con leche", en: "Coffee with milk" }, price: "1,75€" },
            { name: { es: "Café con leche XL", en: "Large coffee with milk" }, price: "2,50€" },
            {
              name: { es: "Latte (doble espresso con leche)", en: "Latte (double espresso with milk)" },
              price: "2,95€",
            },
            { name: { es: "Mocha", en: "Mocha" }, price: "3,55€" },
            { name: { es: "Caramel latte", en: "Caramel latte" }, price: "3,55€" },
            { name: { es: "Vanilla latte", en: "Vanilla latte" }, price: "3,55€" },
            { name: { es: "Matcha latte", en: "Matcha latte" }, price: "3,55€" },
            { name: { es: "Chai latte", en: "Chai latte" }, price: "3,55€" },
          ],
        },
        {
          subtitle: { es: "Extras", en: "Extras" },
          items: [
            { name: { es: "Leche vegetal / sin lactosa", en: "Plant milk / lactose-free" }, price: "+0,20€" },
            { name: { es: "Nata montada", en: "Whipped cream" }, price: "+0,50€" },
            { name: { es: "Hielo", en: "Ice" }, price: "+0,10€" },
            { name: { es: "Shot de café", en: "Espresso shot" }, price: "+1,25€" },
          ],
        },
        {
          subtitle: { es: "Frío", en: "Iced" },
          note: {
            es: "Consulta opciones frías en barra.",
            en: "Ask at the bar for iced options.",
          },
        },
      ],
    },
    {
      id: "bebidas",
      icon: "🫧",
      title: { es: "Bebidas", en: "Soft drinks & water" },
      items: [
        {
          name: { es: "Refresco de lata", en: "Canned soft drink" },
          price: "2,35€",
          desc: {
            es: "Coca-Cola, Coca-Cola Cero, Fanta naranja/limón, TriNa, Seven Up, Nestea, FuzeTea (+0,15€), Aquarius Limón (+0,15€).",
            en: "Coca-Cola, Coca-Cola Zero, Fanta orange/lemon, TriNa, Seven Up, Nestea, FuzeTea (+€0.15), Aquarius Lemon (+€0.15).",
          },
        },
        {
          name: { es: "Refresco de botella", en: "Bottled soft drink" },
          price: "2,65€",
          desc: {
            es: "Coca-Cola, Coca-Cola Cero, Fanta naranja/limón, Nestea, FuzeTea, Aquarius limón/naranja/melocotón.",
            en: "Coca-Cola, Coca-Cola Zero, Fanta orange/lemon, Nestea, FuzeTea, Aquarius lemon/orange/peach.",
          },
        },
        { name: { es: "Agua Viladrau 0,5 L", en: "Viladrau water 0.5 L" }, price: "1,60€" },
        { name: { es: "Vichy Catalan", en: "Vichy Catalan" }, price: "2,65€" },
        { name: { es: "Cacaolat", en: "Cacaolat" }, price: "2,75€" },
        {
          name: { es: "Zumo Essential (piña o melocotón)", en: "Essential juice (pineapple or peach)" },
          price: "2,50€",
        },
        { name: { es: "Zumo de naranja natural", en: "Fresh orange juice" }, price: "3,95€" },
        { name: { es: "Zumo de naranja natural pequeño", en: "Small fresh orange juice" }, price: "2,50€" },
      ],
    },
    {
      id: "cervezas",
      icon: "🍺",
      title: { es: "Cervezas", en: "Beers" },
      items: [
        { name: { es: "Mediana", en: "Medium" }, price: "2,65€" },
        { name: { es: "Quinto", en: "Small (quinto)" }, price: "2,00€" },
        { name: { es: "Sin alcohol", en: "Non-alcoholic" }, price: "2,65€" },
        { name: { es: "Tostada sin alcohol", en: "Non-alcoholic dark" }, price: "2,65€" },
        { name: { es: "Clara sin alcohol", en: "Non-alcoholic shandy" }, price: "2,65€" },
        { name: { es: "Voll-Damm", en: "Voll-Damm" }, price: "2,95€" },
      ],
    },
    {
      id: "cocteles",
      icon: "🍸",
      title: { es: "Cócteles", en: "Cocktails" },
      items: [
        { name: { es: "Margarita", en: "Margarita" }, price: "8,50€" },
        { name: { es: "Margarita de fresa", en: "Strawberry margarita" }, price: "9,50€" },
        { name: { es: "Mimosa", en: "Mimosa" }, price: "6,50€" },
        { name: { es: "Aperol Spritz", en: "Aperol Spritz" }, price: "6,50€" },
        { name: { es: "Mojito", en: "Mojito" }, price: "6,95€" },
        { name: { es: "Mojito de fresa", en: "Strawberry mojito" }, price: "8,95€" },
        { name: { es: "Piña colada", en: "Piña colada" }, price: "8,95€" },
        { name: { es: "Gin tonic", en: "Gin & tonic" }, price: "8,95€" },
        { name: { es: "Daiquiri de fresa", en: "Strawberry daiquiri" }, price: "8,95€" },
        { name: { es: "Café irlandés", en: "Irish coffee" }, price: "6,95€" },
        { name: { es: "Tinto de verano", en: "Tinto de verano" }, price: "3,75€" },
      ],
    },
    {
      id: "vino",
      icon: "🍷",
      title: { es: "Vino", en: "Wine" },
      groups: [
        {
          subtitle: { es: "Rosado", en: "Rosé" },
          items: [
            { name: { es: "Lambrusco", en: "Lambrusco" }, price: "8,95€" },
            { name: { es: "Peñascal", en: "Peñascal" }, price: "14,95€" },
            { name: { es: "Mateus", en: "Mateus" }, price: "14,95€" },
            { name: { es: "Torres De Casta", en: "Torres De Casta" }, price: "14,95€" },
            { name: { es: "Cresta Rosa", en: "Cresta Rosa" }, price: "14,95€" },
          ],
        },
        {
          subtitle: { es: "Blanco", en: "White" },
          items: [
            { name: { es: "Viña Sol", en: "Viña Sol" }, price: "14,95€" },
            { name: { es: "Blanc Pescador", en: "Blanc Pescador" }, price: "14,95€" },
          ],
        },
        {
          subtitle: { es: "Tinto", en: "Red" },
          items: [
            { name: { es: "Siglo (Rioja)", en: "Siglo (Rioja)" }, price: "14,95€" },
            { name: { es: "Cune (Rioja)", en: "Cune (Rioja)" }, price: "14,95€" },
            { name: { es: "René Barbier Tinto Roble", en: "René Barbier Tinto Roble" }, price: "14,95€" },
            { name: { es: "Faustino VII (Rioja)", en: "Faustino VII (Rioja)" }, price: "14,95€" },
            { name: { es: "Sangre de Toro", en: "Sangre de Toro" }, price: "14,95€" },
            { name: { es: "Ederra (Rioja)", en: "Ederra (Rioja)" }, price: "14,95€" },
            { name: { es: "Protos (Ribera del Duero)", en: "Protos (Ribera del Duero)" }, price: "16,95€" },
            { name: { es: "Marqués de Cáceres (Rioja)", en: "Marqués de Cáceres (Rioja)" }, price: "16,95€" },
          ],
        },
      ],
    },
  ];

  var lang = DEFAULT_LANG;

  function t(key) {
    var bag = UI[lang] || UI[DEFAULT_LANG];
    return bag[key] || UI[DEFAULT_LANG][key] || key;
  }

  function pick(pair) {
    if (!pair) return "";
    return pair[lang] || pair[DEFAULT_LANG] || "";
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatPrice(price) {
    if (price) return price.replace("€", "&nbsp;€");
    return t("menu.priceUnavailable");
  }

  function renderItem(item) {
    var name = pick(item.name);
    var price = formatPrice(item.price);
    var desc = item.desc ? pick(item.desc) : "";
    var allergens = item.allergens ? pick(item.allergens) : "";
    var html =
      '<li class="menu-item menu-item--rich">' +
      '<div class="menu-item__row">' +
      '<span class="menu-item__name"><strong>' +
      escapeHtml(name) +
      "</strong></span>" +
      '<span class="menu-item__price">' +
      price +
      "</span>" +
      "</div>";
    if (desc) {
      html += '<p class="menu-item__desc">' + escapeHtml(desc) + "</p>";
    }
    if (allergens) {
      html += '<p class="menu-item__allergens">' + escapeHtml(allergens) + "</p>";
    }
    html += "</li>";
    return html;
  }

  function renderSimpleList(items) {
    return (
      '<ul class="menu-list">' + items.map(renderItem).join("") + "</ul>"
    );
  }

  function renderBuildSteps(steps) {
    var out = '<div class="menu-build">';
    steps.forEach(function (step) {
      out += '<div class="menu-build__step">';
      out += '<p class="menu-build__step-title">' + escapeHtml(pick(step.title)) + "</p>";
      if (step.lines && step.lines.length) {
        out += '<ul class="menu-build__bases">';
        step.lines.forEach(function (line) {
          out += "<li>" + escapeHtml(pick(line)) + "</li>";
        });
        out += "</ul>";
      }
      if (step.toppings) {
        out += '<ul class="menu-list menu-list--compact">';
        step.toppings.forEach(function (top) {
          out +=
            '<li class="menu-item menu-item--simple">' +
            '<span class="menu-item__name">' +
            escapeHtml(pick(top.name)) +
            "</span>" +
            '<span class="menu-item__price">' +
            formatPrice(top.price) +
            "</span>" +
            "</li>";
        });
        out += "</ul>";
      }
      out += "</div>";
    });
    return out + "</div>";
  }

  function renderGroupBlock(group) {
    var html = '<h4 class="menu-subheading">' + escapeHtml(pick(group.subtitle)) + "</h4>";
    if (group.note) {
      html += '<p class="menu-note">' + escapeHtml(pick(group.note)) + "</p>";
      return html;
    }
    if (group.items) {
      html += renderSimpleList(group.items);
    }
    return html;
  }

  function renderSection(section) {
    var icon = section.icon ? '<span class="menu-heading__icon" aria-hidden="true">' + section.icon + "</span>" : "";
    var wide =
      section.buildSteps || section.id === "cafes" || section.id === "vino" || section.id === "tostadas-build";
    var html =
      '<article class="menu-category' +
      (wide ? " menu-category--wide" : "") +
      '" id="menu-' +
      escapeHtml(section.id) +
      '">' +
      '<h3 class="menu-heading">' +
      icon +
      escapeHtml(pick(section.title)) +
      "</h3>";

    if (section.intro) {
      html += '<p class="menu-intro">' + escapeHtml(pick(section.intro)) + "</p>";
    }
    if (section.note) {
      html += '<p class="menu-note">' + escapeHtml(pick(section.note)) + "</p>";
    }
    if (section.buildSteps) {
      html += renderBuildSteps(section.buildSteps);
    } else if (section.groups) {
      section.groups.forEach(function (group) {
        html += renderGroupBlock(group);
      });
    } else if (section.items) {
      html += renderSimpleList(section.items);
    }

    html += "</article>";
    return html;
  }

  function renderMenu() {
    var root = document.getElementById("menu-root");
    if (!root) return;

    var general =
      '<div class="menu-general card-framed">' +
      '<h3 class="menu-heading">' +
      '<span class="menu-heading__icon" aria-hidden="true">' +
      GENERAL.icon +
      "</span>" +
      escapeHtml(pick(GENERAL.title)) +
      "</h3>" +
      '<p class="menu-general__body">' +
      escapeHtml(pick(GENERAL.body)) +
      "</p>" +
      "</div>";

    var categories = SECTIONS.map(renderSection).join("");
    root.innerHTML = general + '<div class="menu-categories">' + categories + "</div>";
  }

  function applyUiStrings() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (!key) return;
      el.setAttribute("aria-label", t(key));
    });

    var switcher = document.querySelector(".lang-switch");
    if (switcher && !switcher.getAttribute("data-i18n-aria")) {
      switcher.setAttribute("aria-label", t("lang.switchLabel"));
    }

    document.documentElement.lang = lang === "en" ? "en" : "es";
  }

  function setLang(next) {
    lang = next === "en" ? "en" : "es";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }

    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    applyUiStrings();
    renderMenu();
    refreshMenuScanTriggers();
  }

  function readStoredLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "es") return stored;
    } catch (e) {
      /* ignore */
    }
    return DEFAULT_LANG;
  }

  function initLangSwitch() {
    var switcher = document.querySelector(".lang-switch");
    if (!switcher) return;
    switcher.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-lang]");
      if (!btn) return;
      setLang(btn.getAttribute("data-lang"));
    });
  }

  function syncLangButtons() {
    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  /** Home page: nav labels, teaser copy, and lang persistence — no carta render. */
  function initNavI18n() {
    lang = readStoredLang();
    initLangSwitch();
    syncLangButtons();
    applyUiStrings();
  }

  function initMenuScanLightbox() {
    var dialog = document.getElementById("menu-lightbox");
    if (!dialog || !dialog.showModal) return;

    var img = dialog.querySelector(".menu-lightbox__img");
    var closeBtn = dialog.querySelector("[data-lightbox-close]");

    function open(src, alt) {
      if (!img || !src) return;
      img.src = src;
      img.alt = alt || "";
      if (!dialog.open) dialog.showModal();
    }

    function close() {
      if (dialog.open) dialog.close();
      if (img) {
        img.removeAttribute("src");
        img.alt = "";
      }
    }

    document.querySelectorAll("[data-menu-scan-open]").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var fullSrc = trigger.getAttribute("data-full-src");
        var caption = trigger.getAttribute("data-full-caption") || "";
        open(fullSrc, caption);
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", close);
    }

    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) close();
    });

    dialog.addEventListener("close", function () {
      if (img) {
        img.removeAttribute("src");
        img.alt = "";
      }
    });
  }

  function refreshMenuScanTriggers() {
    document.querySelectorAll("[data-menu-scan-open]").forEach(function (trigger) {
      var key = trigger.getAttribute("data-i18n-caption");
      var caption = key ? t(key) : "";
      trigger.setAttribute("data-full-caption", caption);
      var img = trigger.querySelector("img");
      if (img && caption) img.alt = caption;
    });

    var closeBtn = document.querySelector("[data-lightbox-close]");
    if (closeBtn) {
      closeBtn.setAttribute("aria-label", t("menu.lightbox.close"));
    }
  }

  var FORMAT_KEY = "aura-menu-format";

  function readMenuFormat() {
    var stored = null;
    try {
      stored = window.localStorage.getItem(FORMAT_KEY);
    } catch (e) {}
    return stored === "images" ? "images" : "text";
  }

  function setMenuFormat(format) {
    var textPanel = document.getElementById("menu-panel-text");
    var imagePanel = document.getElementById("menu-panel-images");
    var textTab = document.getElementById("menu-tab-text");
    var imageTab = document.getElementById("menu-tab-images");
    if (!textPanel || !imagePanel || !textTab || !imageTab) return;

    var isText = format !== "images";
    textPanel.classList.toggle("is-visible", isText);
    textPanel.hidden = !isText;
    imagePanel.classList.toggle("is-visible", !isText);
    imagePanel.hidden = isText;

    textTab.classList.toggle("is-active", isText);
    textTab.setAttribute("aria-selected", isText ? "true" : "false");
    textTab.tabIndex = isText ? 0 : -1;

    imageTab.classList.toggle("is-active", !isText);
    imageTab.setAttribute("aria-selected", isText ? "false" : "true");
    imageTab.tabIndex = isText ? -1 : 0;

    try {
      window.localStorage.setItem(FORMAT_KEY, isText ? "text" : "images");
    } catch (e) {}
  }

  function initMenuFormatSwitch() {
    var root = document.querySelector(".menu-format");
    if (!root) return;

    setMenuFormat(readMenuFormat());

    root.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-menu-format]");
      if (!btn) return;
      setMenuFormat(btn.getAttribute("data-menu-format"));
    });
  }

  /** Menu page: full carta, scan gallery, and lang switch. */
  function initMenuPage() {
    lang = readStoredLang();
    initLangSwitch();
    initMenuFormatSwitch();
    setLang(lang);
    refreshMenuScanTriggers();
    initMenuScanLightbox();
  }

  function init() {
    if (document.getElementById("menu-root")) {
      initMenuPage();
    } else {
      initNavI18n();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
