const ALLERGEN_KEYS = [
  "gluten","oeuf","lait","arachides","fruitsCoque",
  "soja","celeri","moutarde","sesame","lupin",
  "poisson","crustaces","mollusques","sulfites",
  "vegan","vegetarien","halal","casher"
];

const ALLERGEN_LABELS = {
  "gluten":"Gluten", "oeuf":"\u0152uf", "lait":"Lait",
  "arachides":"Arachides", "fruitsCoque":"Fruits \u00e0 coque",
  "soja":"Soja", "celeri":"C\u00e9leri", "moutarde":"Moutarde",
  "sesame":"S\u00e9same", "lupin":"Lupin", "poisson":"Poisson",
  "crustaces":"Crustac\u00e9s", "mollusques":"Mollusques",
  "sulfites":"Sulfites", "vegan":"Non v\u00e9gan",
  "vegetarien":"Non v\u00e9g\u00e9tarien", "halal":"Non halal", "casher":"Non casher"
};

const selection = [
  "Cornichons",
  "Grillons",
  "Litchis",
  "Haricot mungo (soja)",
  "Pêches",
  "Raisins secs",
  "Oignons blancs",
  "Dragibus",
  "Amandes",
  "Choux de Bruxelles",
  "Vers de farine",
  "Haricots verts",
  "Chocolat au lait",
  "Carottes",
  "Chamallows (carrefour classic)",
];

const foods = [
  { "name": "Cornichons", "allergens": {"moutarde":"rouge"}, "notes": {}, "image": "images/cornichons.jpg" },
  { "name": "Noix de coco", "allergens": {"fruitsCoque":"rouge"}, "notes": {}, "image": "images/coco.jpg" },
  { "name": "Chocolat au lait", "allergens": {"lait":"rouge", "fruitsCoque":"orange", "soja":"rouge"}, "notes": {"lait":"Lait en poudre et protéines de lait", "fruitsCoque":"Peut contenir des traces"}, "image": "images/chocolat.jpg" },
  { "name": "Calamars", "allergens": {"poisson":"orange", "mollusques":"rouge"}, "notes": {"poisson":"Peut contenir des traces"}, "image": "images/calamar.jpg" },
  { "name": "Cacao", "allergens": {"gluten":"orange", "lait":"orange", "arachides":"orange", "fruitsCoque":"orange", "soja":"orange"}, "notes": {"gluten":"Traces de céréales contenant du gluten", "lait":"Traces possibles", "arachides":"Traces possibles", "fruitsCoque":"Traces possibles", "soja":"Traces possibles"}, "image": "images/cacao.jpg" },
  { "name": "Chamallows (carrefour classic)", "allergens": {"vegan":"rouge", "vegetarien":"rouge", "halal":"rouge", "casher":"rouge"}, "notes": {"vegan":"Gélatine de porc", "vegetarien":"Gélatine de porc", "halal":"Gélatine de porc", "casher":"Gélatine de porc"}, "image": "images/chamallows.jpg" },
  { "name": "Carottes", "allergens": {}, "notes": {}, "image": "images/carottes.jpg" },
  { "name": "Asperges", "allergens": {}, "notes": {}, "image": "images/asperges.jpg" },
  { "name": "Pêches", "allergens": {}, "notes": {}, "image": "images/peche.jpg" },
  { "name": "Palmiers (gateau)", "allergens": {"gluten":"rouge", "oeuf":"orange", "lait":"orange", "fruitsCoque":"orange"}, "notes": {"oeuf":"Traces possibles", "lait":"Traces possibles", "fruitsCoque":"Traces possibles"}, "image": "images/palmier.jpg" },
  { "name": "Olives vertes", "allergens": {}, "notes": {}, "image": "images/olives.jpg" },
  { "name": "Oignons blancs", "allergens": {"sulfites":"rouge"}, "notes": {}, "image": "images/oignons.jpg" },
  { "name": "Madeleines", "allergens": {"gluten":"rouge", "oeuf":"rouge", "lait":"orange", "arachides":"orange", "fruitsCoque":"orange", "soja":"rouge"}, "notes": {"lait":"Traces possibles", "arachides":"Traces possibles", "fruitsCoque":"Traces possibles"}, "image": "images/madeleines.jpg" },
  { "name": "Haricots verts", "allergens": {}, "notes": {}, "image": "images/haricots_verts.jpg" },
  { "name": "Litchis", "allergens": {}, "notes": {}, "image": "images/litchi.jpg" },
  { "name": "Haricots blancs", "allergens": {}, "notes": {}, "image": "images/haricots_blancs.jpg" },
  { "name": "Haricot mungo (soja)", "allergens": {}, "notes": {}, "image": "images/haricot_mungo.jpg" },
  { "name": "Persil", "allergens": {}, "notes": {}, "image": "images/persil.jpg" },
  { "name": "Piment", "allergens": {"sulfites":"rouge"}, "notes": {}, "image": "images/piment.jpg" },
  { "name": "Choux de Bruxelles", "allergens": {}, "notes": {}, "image": "images/choux_de_bruxelles.jpg" },
  { "name": "Raisins secs", "allergens": {"sulfites":"rouge"}, "notes": {} },
  { "name": "Dragibus", "allergens": {"gluten":"orange", "vegan":"rouge"}, "notes": {"gluten":"Peut contenir des traces", "vegan":"Cire d'abeille"}, "image": "images/dragibus.jpg" },
  { "name": "Amandes", "allergens": {"fruitsCoque":"rouge"}, "notes": {} },
  { "name": "Vers de farine", "allergens": {"gluten":"orange", "crustaces":"rouge", "mollusques":"rouge", "vegan":"rouge", "vegetarien":"rouge", "halal":"rouge", "casher":"rouge"}, "notes": {"gluten":"Peut contenir des traces", "crustaces":"Allergie croisée", "mollusques":"Allergie croisée"}, "image": "images/vers_de_farine.jpg" },
  { "name": "Grillons", "allergens": {"gluten":"orange", "crustaces":"rouge", "mollusques":"rouge", "vegan":"rouge", "vegetarien":"rouge", "halal":"rouge", "casher":"rouge"}, "notes": {"gluten":"Peut contenir des traces", "crustaces":"Allergie croisée", "mollusques":"Allergie croisée"}, "image": "images/grillons.jpg" },
];
