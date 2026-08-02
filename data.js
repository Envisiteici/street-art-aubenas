/*
============================================================
CE FICHIER EST CELUI QUE TU MODIFIERAS LE PLUS SOUVENT.
============================================================

- L'ordre ci-dessous est l'ordre de la visite.
- Pour retirer une œuvre disparue : supprime sa ligne.
- Pour ajouter une œuvre : copie une ligne et change l'id et le nom.
- Chaque id doit être unique, sans accent ni espace.
- Change "version" lorsque tu modifies fortement la liste :
  cela remettra les anciennes cases cochées à zéro.
*/

window.CARNET_DATA = {
  version: "2",

  visite: {
    titre: "Street Art à Aubenas",
    carnet: "Carnet d’exploration",
    introduction:
      "Pendant les déplacements de la visite, observez les rues et cochez les œuvres que vous repérez. Pas d’inquiétude si certaines vous échappent : la carte vous permettra de les retrouver ensuite.",
    texteCarte:
      "Vous n'avez pas tout repéré ? Poursuivez votre découverte à votre rythme.",
    lienCarte:
      "https://umap.openstreetmap.fr/fr/map/aubenas-street-art_1440976",
    lienCarteBonus:
      "https://umap.openstreetmap.fr/fr/map/aubenas-street-art_1440976",
    derniereMiseAJour: "Août 2026"
  },

  oeuvres: [
    { id: "crane-animal", nom: "Un crâne d’animal" },
    { id: "fantome-souriant", nom: "Un fantôme souriant" },
    { id: "pochoir-feministe", nom: "Un pochoir féministe" },
    { id: "bouddha-chaplin-winnie", nom: "Bouddha, Charlie Chaplin et Winnie l’Ourson" },
    { id: "armoiries-aubenas", nom: "Les armoiries d’Aubenas" },
    { id: "coeur-rouge", nom: "Un cœur rouge" },
    { id: "nichoir-fleuri", nom: "Un nichoir fleuri" },
    { id: "coeur-jaune", nom: "Un cœur jaune" }
  ],

  bonus: {
    nom: "Une dernière œuvre vous attend",
    texte:
      "Vous avez repéré toutes les œuvres de la visite. Une œuvre bonus, située hors du parcours, vous attend désormais sur la carte."
  }
};
