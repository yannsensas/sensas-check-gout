const ALLERGEN_KEYS = [
  "gluten","oeuf","lait","arachides","fruitsCoque",
  "soja","celeri","moutarde","sesame","lupin",
  "poisson","crustaces","mollusques","sulfites",
  "vegan","vegetarien","halal","casher"
];

const ALLERGEN_LABELS = {
  gluten:"Gluten", oeuf:"\u0152uf", lait:"Lait",
  arachides:"Arachides", fruitsCoque:"Fruits \u00e0 coque",
  soja:"Soja", celeri:"C\u00e9leri", moutarde:"Moutarde",
  sesame:"S\u00e9same", lupin:"Lupin", poisson:"Poisson",
  crustaces:"Crust\u00e0ces", mollusques:"Mollusques",
  sulfites:"Sulfites",
  vegan:"Non v\u00e9gan",
  vegetarien:"Non v\u00e9g\u00e9tarien",
  halal:"Non halal",
  casher:"Non casher"
};

const foods = [
  { name: "Test1", allergens: {oeuf:"orange", arachides:"rouge"}, notes: {oeuf:"Caca 1"} },
  { name: "Test2", allergens: {oeuf:"orange", lait:"rouge", arachides:"rouge", celeri:"rouge"}, notes: {oeuf:"Caca 2"} },
];
