CARNET D’EXPLORATION — STREET ART À AUBENAS — V2.4
======================================================

Cette version contient :
- la vraie liste des huit œuvres ;
- une seule barre de progression, visible en haut pendant le défilement ;
- le bloc « Œuvre bonus débloquée » avant la carte ;
- deux liens de carte distincts : carte normale et carte avec bonus ;
- les cases cochées mémorisées dans le navigateur ;
- le design complet validé.

FICHIER À MODIFIER
------------------
Dans la majorité des cas, ouvre seulement « data.js ».

Tu peux y modifier :
- les textes ;
- le lien de la carte uMap normale ;
- le lien de la carte uMap avec l’œuvre bonus ;
- la date de mise à jour ;
- les œuvres et leur ordre.

AJOUTER UNE ŒUVRE
-----------------
Dans la partie « oeuvres », copie une ligne :

{ id: "nom-court-unique", nom: "Nom visible par les visiteurs" },

Puis adapte les deux valeurs.

L’« id » doit être unique, sans espace ni accent.

Exemple :

{ id: "lezard-bleu", nom: "Un lézard bleu" },

SUPPRIMER UNE ŒUVRE
-------------------
Supprime simplement sa ligne dans la partie « oeuvres ».

CHANGER L’ORDRE
---------------
Déplace les lignes dans « oeuvres ».

L’ordre du fichier est l’ordre affiché dans le carnet.

CASES COCHÉES
-------------
La progression est enregistrée uniquement dans le navigateur du visiteur.

Lorsque tu modifies fortement la liste, augmente :

version: "2"

en :

version: "3"

Cela remet à zéro les cases conservées pour l’ancienne version.

CARTES UMAP
-----------
Dans « data.js », tu trouveras deux liens :

lienCarte:
  "https://umap.openstreetmap.fr/fr/map/aubenas-street-art_1440976",

lienCarteBonus:
  "https://umap.openstreetmap.fr/fr/map/aubenas-street-art_1440976",

Pour l’instant, ils peuvent être identiques.

Lorsque ta seconde carte sera prête, remplace uniquement le lien après
« lienCarteBonus ».

- De 0 à 7 œuvres cochées : le bouton ouvre « lienCarte ».
- Quand toutes les œuvres sont cochées : le bouton ouvre « lienCarteBonus ».

ŒUVRE BONUS
-----------
Le bloc bonus apparaît automatiquement quand toutes les œuvres sont cochées.

Son texte est actuellement géré dans « script.js ».

Tu n’as normalement pas besoin de modifier ce fichier. Si tu souhaites
changer le texte du bonus plus tard, cherche dans « script.js » :

"Félicitations ! Vous avez repéré toutes les œuvres de la visite."

TESTER SUR ORDINATEUR
---------------------
Décompresse le dossier puis double-clique sur « index.html ».

Les polices Google peuvent nécessiter une connexion internet lors du premier
chargement.

MISE EN LIGNE SUR GITHUB
------------------------
Pour remplacer la version en ligne :

1. Ouvre ton dépôt GitHub.
2. Clique sur « Add file » puis « Upload files ».
3. Glisse ces quatre fichiers :
   - index.html
   - style.css
   - data.js
   - script.js
4. Clique sur « Commit changes ».
5. Attends le redéploiement de GitHub Pages.
6. Actualise la page sur ton téléphone.

Les cinq fichiers doivent rester ensemble au même niveau dans le dossier.

RÔLE DES FICHIERS
-----------------
index.html : structure de la page.
style.css  : couleurs, tailles, formes et mise en page.
data.js    : contenus, œuvres, textes et liens.
script.js  : fonctionnement, progression, sauvegarde et bonus.
README.txt : ce mode d’emploi.
