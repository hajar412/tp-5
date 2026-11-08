# TP 5 : Travail collaboratif avec Git et GitHub

**Application Task Manager et minuteur Pomodoro**

Application web réalisée en équipe pour mettre en pratique le travail collaboratif avec Git et GitHub : branches personnelles, Pull Requests, fusions et résolution de conflits.

| | |
|---|---|
| **Groupe** | EL KASRAOUI Hajar, ELAATIFI Sara, EL OUAFI Souad |
| **Encadrant** | Nefdaoui Aymane |
| **Année universitaire** | 2026/2027 |
| **Dépôt** | https://github.com/hajar412/tp-5 |

---

## Fonctionnalités

### Gestionnaire de tâches
- Ajouter une tâche (bouton **Add Task**, saisie, puis touche Entrée ou second clic)
- Cocher une tâche terminée
- Supprimer une tâche avec le bouton **x**
- Compteur dynamique du nombre de tâches

### Minuteur Pomodoro (25 minutes)
- **Start** : lance le minuteur
- **Pause** : met le décompte en pause (le bouton passe en corail pendant que le minuteur tourne)
- **Resume** : reprend le décompte
- **Reset** : remet le minuteur à 25:00

---

## Technologies et outils

| Outil | Rôle dans le projet |
|---|---|
| Git | Gestion de versions en local (branches, commits, fusions) |
| GitHub | Dépôt distant, Pull Requests et relecture du code |
| Visual Studio Code | Éditeur de code, terminal intégré, extension Git Graph |
| Live Server | Visualisation de la page en direct (port 5500) |
| HTML / CSS / JavaScript | Structure, mise en forme (variables CSS, Flexbox) et comportement |

---

## Structure du projet

```
tp-5/
├── index.html    # structure de la page (cartes Tasks et Pomodoro)
├── style.css     # mise en forme et palette de couleurs
├── app.js        # logique des tâches et du minuteur
└── README.md     # ce fichier
```

## Lancer le projet

```bash
git clone https://github.com/hajar412/tp-5.git
cd tp-5
```

Ouvrir `index.html` dans un navigateur, ou lancer **Live Server** depuis VS Code (clic droit sur `index.html`, puis *Open with Live Server*).

---

## Organisation de l'équipe

### Stratégie de branches

| Branche | Rôle |
|---|---|
| `main` | Branche stable, elle reçoit la version finale du projet |
| `dev` | Branche d'intégration, où le travail de chacune est regroupé |
| `feature/hajar`, `feature/sara`, `feature/souad` | Une branche personnelle par membre, créée depuis `dev` |

```
feature/hajar ─┐
feature/sara  ─┼──► dev ──► main
feature/souad ─┘
```

Chaque membre travaille uniquement sur sa branche, la publie sur GitHub, puis ouvre une Pull Request vers `dev`. Après relecture, la Pull Request est fusionnée. À la fin du projet, `dev` est fusionné dans `main` (Pull Request #10).

### Répartition des rôles

| Membre | Compte GitHub | Branche | Pull Requests |
|---|---|---|---|
| Hajar | `hajar412` | `feature/hajar` | #4, #8 ; gestion des fusions dans `dev` et `main` |
| Sara | `selaatifi` | `feature/sara` | #5, #6, #7 |
| Souad | `selouafi4985` | `feature/souad` | #9 |

---

## Travail de chaque membre

Contributions établies d'après l'historique des commits (Git Graph).

### Hajar (`hajar412`, commits signés `hajar412m`)
- Création du dépôt (*first commit*, *html first commit*) et de la structure HTML de départ
- Ajout du fichier `app.js` (commit « add app.js »), intégré par la Pull Request #4
- Palette de couleurs et mise en page des cartes avec Flexbox (commit « Ajout de la palette de couleurs et mise en page des cartes »), intégrés par la Pull Request #8
- Amélioration du minuteur Pomodoro : logique des boutons (Start devient Pause puis Resume), bouton Reset en version contour, corrections du style (commits « modification de pomodoro timer » et « ajout de logique au btn de timer & de style »)
- Correction de l'ensemble du code après la résolution des conflits (minuteur en double, bouton de suppression, style)
- Gestion du dépôt : relecture et fusion des Pull Requests dans `dev`, puis fusion finale de `dev` dans `main` depuis GitHub (Pull Request #10)

### Sara (`selaatifi`)
- Premiers ajouts de code sur sa branche (commit « add »)
- Modification de `index.html`, `style.css` et `app.js` (commit « Modification de index, style et app »)
- Résolution des conflits sur `index.html` et mise à jour du style, puis d'un second conflit après un pull de `dev`
- Pull Requests #5, #6 et #7 vers `dev`

### Souad (`selouafi4985`)
- Ajout du minuteur Pomodoro (commit « Ajout du timer »)
- Ajout de la logique du minuteur (commit « Add timer logic »)
- Mise à jour de sa branche avec `dev` et résolution du conflit de fusion (commits « Merge remote-tracking branch 'origin/dev' into feature/souad » et « Resolve merge conflict with dev »)
- Pull Request #9 vers `dev`

### Chronologie du projet

| Ordre | Événement | Détail |
|---|---|---|
| 1 | Création du dépôt | first commit et html first commit (Hajar), PR #1 |
| 2 | Premier minuteur | Ajout du timer (Souad) |
| 3 | Premières fusions | add app.js (Hajar) puis PR #4 |
| 4 | Fusions de Sara | PR #5, résolution de conflits, PR #6 et PR #7 |
| 5 | Palette et mise en page | Commit de Hajar puis PR #8 |
| 6 | Minuteur de Souad | Résolution du conflit avec `dev`, Add timer logic, PR #9 |
| 7 | Correction finale du code | Nettoyage après les conflits, logique des boutons du minuteur et du style (Hajar) |
| 8 | Livraison | Fusion de `dev` dans `main` depuis GitHub (PR #10) |

---

## Résolution des conflits

### Pourquoi des conflits apparaissent

Un conflit survient lorsque deux branches modifient les mêmes lignes d'un même fichier. Git ne peut pas choisir seul quelle version conserver et demande une résolution manuelle. Ici, les trois membres ont modifié les mêmes fichiers (`index.html`, `style.css` et `app.js`), ce qui a provoqué plusieurs conflits lors des fusions avec `dev`.

Git insère des marqueurs autour des zones en conflit. Exemple réel rencontré dans `app.js`, sur l'ajout d'une tâche :

```
<<<<<<< HEAD (Current Change)
const taskText = taskInput.value.trim();
if (taskText !== "") {
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;
  taskList.appendChild(taskItem);
  ...
}
=======
const taskText = taskInput.value.trim();
if (taskText !== "") {
  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox">
    <span>${taskText}</span>
    <button class="delete-button">x</button>
  `;
  taskList.appendChild(li);
  ...
>>>>>>> origin/dev (Incoming Change)
```

Deux membres avaient écrit deux versions différentes de la même fonctionnalité : l'une affichait seulement le texte, l'autre ajoutait une case à cocher et un bouton de suppression.

### Méthode de résolution

1. Mettre sa branche à jour : `git pull origin dev` (ou `git merge dev`). Git signale `CONFLICT (content): Merge conflict in ...`
2. Ouvrir chaque fichier en conflit dans VS Code. L'éditeur propose **Accept Current Change**, **Accept Incoming Change**, **Accept Both Changes** et **Compare Changes**
3. Choisir la bonne version, ou combiner les deux à la main, puis supprimer tous les marqueurs `<<<<<<<`, `=======` et `>>>>>>>`
4. Tester l'application dans le navigateur
5. Valider : `git add <fichier>`, puis `git commit` pour terminer la fusion
6. Publier : `git push origin <branche>` et ouvrir ou mettre à jour la Pull Request

### Conflits rencontrés

| Membre | Commit de résolution | Contexte |
|---|---|---|
| Sara | Résolution du conflit index.html et mise a jour du style | Conflit sur `index.html` et `style.css` après mise à jour avec `dev` |
| Sara | Résolution du conflit après pull | Nouveau conflit après un pull de `dev` |
| Souad | Resolve merge conflict with dev | Conflit entre sa branche et `dev`, sur le code du minuteur |

### Conséquence d'une résolution incomplète

Après plusieurs fusions, `app.js` contenait **deux versions du minuteur** : l'une utilisant `start-timer-button` et `reset-timer-button`, l'autre `timer-start`, `timer-pause` et `timer-reset`. Cela s'explique très probablement par le choix « Accept Both Changes » lors d'un conflit, qui garde les deux morceaux de code.

La seconde version cherchait des éléments inexistants dans le HTML. L'erreur `Cannot set properties of null` interrompait tout le script, et le bouton de suppression **x** des tâches ne fonctionnait plus car son code, placé plus bas, n'était jamais exécuté. La console du navigateur (F12) a permis de localiser la ligne fautive. La solution a été de ne garder qu'une seule version du minuteur.

> **Leçon :** « Accept Both » n'est pas toujours la bonne réponse. Après chaque résolution, il faut relire le fichier, supprimer les doublons et tester l'application.

### Correction finale du code et fusion depuis GitHub

Une fois les conflits résolus, le code de `dev` contenait encore des erreurs héritées des fusions. Hajar a repris l'ensemble du code :

- suppression de la version du minuteur en double dans `app.js` et correction des identifiants utilisés dans le HTML
- réparation du bouton de suppression **x** et du compteur de tâches
- ajout de la logique des boutons du minuteur (Start, Pause, Resume, Reset)
- harmonisation du style (palette de couleurs, contraste du texte, cartes de même hauteur)

Après ces corrections, testées dans le navigateur, la fusion finale a été faite directement depuis GitHub : une Pull Request de `dev` vers `main` (#10), validée avec le bouton **Merge pull request**, sans passer par la ligne de commande. Cette méthode garde une trace de la fusion dans l'historique du dépôt et permet une dernière relecture avant d'intégrer le code dans `main`.

### Autres difficultés

| Problème | Cause et solution |
|---|---|
| `fatal: not a git repository` | Le dossier ouvert n'avait pas été obtenu par `git clone`. Résolu en clonant le dépôt puis en ouvrant le bon dossier dans VS Code |
| `Your local changes would be overwritten` (pull refusé) | Modifications locales non sauvegardées. Résolu avec `git stash`, `git pull origin dev`, puis `git stash pop` |
| Identifiant HTML dupliqué | Deux éléments `task-container` imbriqués créaient deux cartes l'une dans l'autre. Un `id` doit être unique |
| Texte trop pâle | La couleur mauve avait un contraste insuffisant sur fond blanc, remplacée par un violet plus foncé |

### Bonnes pratiques pour limiter les conflits

- Mettre sa branche à jour avec `dev` régulièrement, avant de commencer et avant de pousser
- Faire des commits petits et fréquents, avec des messages clairs
- Se répartir les fichiers ou les parties du code pour éviter de modifier les mêmes lignes
- Ne jamais travailler directement sur `dev` ou `main`

---

## Conclusion

Ce projet de groupe a montré l'intérêt d'un workflow structuré : une branche par membre, des Pull Requests relues avant intégration dans `dev`, puis une livraison finale dans `main`. Les conflits, nombreux parce que les trois membres modifiaient les mêmes fichiers, ont été l'occasion d'apprendre à les lire et à les résoudre proprement. Une relecture et une correction complète du code ont été nécessaires après les fusions, ce qui confirme l'importance de tester après chaque fusion.

**Améliorations possibles :** sauvegarde des tâches avec `localStorage`, pause de 5 minutes entre les sessions, notification de fin de minuteur et mise en page adaptée aux petits écrans.

---

## Commandes Git utilisées

### Workflow quotidien

```bash
git clone https://github.com/hajar412/tp-5.git   # récupérer le projet
git checkout dev                                 # se placer sur dev
git pull origin dev                              # mettre dev à jour
git checkout -b feature/hajar                    # créer sa branche
# on code...
git add .                                        # préparer les changements
git commit -m "Message"                          # sauvegarder en local
git push origin feature/hajar                    # publier sa branche
# ouvrir une Pull Request vers dev sur GitHub
```

### Mise à jour et résolution de conflit

```bash
git checkout feature/hajar
git pull origin dev          # ou : git merge dev
# résoudre les conflits dans VS Code, supprimer les marqueurs
git add .
git commit -m "Résolution du conflit"
git push origin feature/hajar
```

### Mettre de côté des modifications non commitées

```bash
git stash
git pull origin dev
git stash pop
```

### Livraison finale dans `main`

La fusion finale a été réalisée depuis GitHub : onglet *Pull requests*, Pull Request #10 (`dev` vers `main`), bouton **Merge pull request**, puis **Confirm merge**. Pour récupérer le résultat en local :

```bash
git checkout main
git pull origin main
```

L'équivalent en ligne de commande, sans passer par GitHub :

```bash
git checkout main
git pull origin main
git merge dev
git push origin main
```

### Tableau récapitulatif

| Commande | Rôle |
|---|---|
| `git clone <lien>` | Récupérer le projet depuis GitHub |
| `git status` | Voir l'état du dépôt et la branche courante |
| `git branch -a` | Lister les branches locales et distantes |
| `git fetch` | Récupérer les infos distantes sans fusionner |
| `git checkout -b <branche>` | Créer et changer de branche |
| `git add .` | Préparer les modifications |
| `git commit -m "message"` | Enregistrer les modifications en local |
| `git push origin <branche>` | Publier la branche sur GitHub |
| `git pull origin dev` | Récupérer les changements de `dev` |
| `git merge <branche>` | Fusionner une branche dans la branche courante |
| `git stash` / `git stash pop` | Mettre de côté puis restaurer des modifications |
| `git log --oneline` | Afficher l'historique des commits |
