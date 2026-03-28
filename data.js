// ============================================================
// BASE DE DONNÉES — SENSAS ALLERGÈNE CHECKER
// Pour AJOUTER un aliment : copie un bloc { name:... } et modifie
// "rouge" = contient cet allergène à coup sûr
// "orange" = variable selon marque / recette
// ============================================================

const ALLERGEN_KEYS = [
  "gluten","oeuf","lait","arachides","fruitsCoque",
  "soja","celeri","moutarde","sesame","lupin",
  "poisson","crustaces","mollusques","sulfites",
  "vegan","vegetarien","halal","casher"
];

const ALLERGEN_LABELS = {
  gluten:"Gluten", oeuf:"Œuf", lait:"Lait",
  arachides:"Arachides", fruitsCoque:"Fruits à coque",
  soja:"Soja", celeri:"Céleri", moutarde:"Moutarde",
  sesame:"Sésame", lupin:"Lupin", poisson:"Poisson",
  crustaces:"Crustacés", mollusques:"Mollusques",
  sulfites:"Sulfites", vegan:"Végan",
  vegetarien:"Végétarien", halal:"Halal", casher:"Casher"
};

const ALLERGEN_EXPL = {
  gluten:"Protéine de blé/seigle/orge. Danger pour cœliaques.",
  oeuf:"Allergène fréquent, présent dans beaucoup de préparations.",
  lait:"Lactose + protéines du lait. Distinct de l'intolérance au lactose.",
  arachides:"Allergie souvent sévère (choc anaphylactique possible).",
  fruitsCoque:"Noix, noisettes, amandes, noix de cajou...",
  soja:"Légumineuse, présente souvent comme émulsifiant (lécithine).",
  celeri:"Présent dans aromates, bouillons, sauces.",
  moutarde:"Épice et condiment, parfois cachée dans les marinades.",
  sesame:"Graines, huile, tahini.",
  lupin:"Farine de lupin dans certains pains et pâtes.",
  poisson:"Allergie distincte des crustacés.",
  crustaces:"Crevettes, homards, crabes. Réactivité croisée avec insectes.",
  mollusques:"Huîtres, moules, calmars. Réactivité croisée avec insectes.",
  sulfites:"Conservateur (E220-E228). Présent dans vin, cornichons, fruits secs.",
  vegan:"Ne contient aucun produit animal.",
  vegetarien:"Ne contient pas de viande/poisson mais peut contenir œuf/lait.",
  halal:"Conforme aux règles alimentaires islamiques.",
  casher:"Conforme aux règles alimentaires juives."
};

// ============================================================
// LISTE DES ALIMENTS — modifie ici !
// ============================================================
const foods = [
  { name: "Carambar", allergens: {
    gluten:"rouge", lait:"rouge", soja:"orange",
    arachides:"orange", fruitsCoque:"orange", vegan:"rouge", halal:"orange"
  }},
  { name: "Grillons", allergens: {
    crustaces:"orange", mollusques:"orange",
    halal:"rouge", casher:"rouge", vegan:"rouge", vegetarien:"rouge"
  }},
  { name: "Piment", allergens: {} },
  { name: "Soja", allergens: { soja:"rouge" } },
  { name: "Haricots verts", allergens: {} },
  { name: "Raisin", allergens: { sulfites:"orange" } },
  { name: "Olives", allergens: { sulfites:"orange" } },
  { name: "Câpres", allergens: { sulfites:"orange", moutarde:"orange" } },
  { name: "Réglisse", allergens: {
    gluten:"orange", lait:"orange", halal:"orange",
    vegan:"orange", vegetarien:"orange"
  }},
  { name: "Cornichons", allergens: { sulfites:"orange", moutarde:"orange" } },
  { name: "Vers de farine", allergens: {
    gluten:"orange", crustaces:"orange", mollusques:"orange",
    halal:"rouge", casher:"rouge", vegan:"rouge", vegetarien:"rouge"
  }},
  { name: "Gingembre", allergens: {} },
  { name: "Chocolat", allergens: {
    lait:"rouge", soja:"orange", fruitsCoque:"orange",
    arachides:"orange", gluten:"orange", vegan:"rouge", halal:"orange"
  }},
  { name: "Champignons", allergens: {} },
  { name: "Chamallow", allergens: {
    oeuf:"orange", gluten:"orange", lait:"orange",
    halal:"rouge", casher:"rouge", vegan:"rouge", vegetarien:"rouge"
  }},
  // ← AJOUTE TES ALIMENTS ICI
  // Exemple :
  // { name: "Nouvel aliment", allergens: { gluten:"rouge", lait:"orange" } },
];