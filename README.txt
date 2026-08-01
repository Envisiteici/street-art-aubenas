CARNET D’EXPLORATION — STREET ART À AUBENAS — V2
====================================================

Cette version contient la vraie liste des huit œuvres, sans pictogrammes,
sans techniques et sans phrase supplémentaire en bas.

FICHIER À MODIFIER
------------------
Dans la majorité des cas, ouvre seulement « data.js ».

Tu peux y modifier :
- les textes ;
- le lien de la carte uMap ;
- la date de mise à jour ;
- les œuvres et leur ordre ;
- le texte de l’œuvre bonus.

AJOUTER UNE ŒUVRE
-----------------
Dans la partie « oeuvres », copie une ligne :

{ id: "nom-court-unique", nom: "Nom visible par les visiteurs" },

Puis adapte les deux valeurs.

SUPPRIMER UNE ŒUVRE
-------------------
Supprime simplement sa ligne.

CHANGER L’ORDRE
---------------
Déplace les lignes. L’ordre du fichier est l’ordre affiché.

CASES COCHÉES
-------------
La progression est enregistrée uniquement dans le navigateur du visiteur.

Lorsque tu modifies fortement la liste, augmente :
version: "2"
en :
version: "3"

Cela remet à zéro les cases conservées pour l’ancienne version.

CARTE
-----
Remplace dans « data.js » :
lienCarte: "https://umap.openstreetmap.fr/"

par le lien exact de ta carte.

TESTER
------
Double-clique sur « index.html ».

MISE EN LIGNE
-------------
Le dossier est prêt pour un hébergement statique gratuit.
Les cinq fichiers doivent rester ensemble au même niveau.
