CC3 Realisé par: MESSILI Islem 22303045 et KHABBAZ Anas 22302264

Le projet comprend une pile de containers permettant de lancer 
une application de visualisation de données, en se concentrant 
sur les données de ventes étudiées lors de la première phase ETL.

La pile de containers comprend :
- Une base de données MongoDB contenant les données de ventes.
- Un serveur Apache.
- Un container GraphQL contenant le code du serveur et les résolveurs.

L'application permet de Visualiser:
- La Répartition Géographique des Prestations par Departement et par Région.
- Le Nombre de Ventes Total
- La Répartition des Types de Prestations par Departement et par Région.
- La Répartition Géographique des Clients par Departement et par Région.
- Le Nombre de Clients Total
- Le Chiffres d'affaires en Fonction des Années.
- Le Chiffres d'affaires en Fonction des Mois.
- La Répartition des Ventes par Jour de la Semaine.
- La Répartition des Ventes par Heurs du Jour.
- Les Ventes par Catégorie de Prestation.

Notes:
- Le zoom sur la page doit être réglé à 80% pour une meilleure visualisation.
- Sur la page de la répartition géographique, vous pouvez cliquer sur les départements et les régions 
  pour afficher plus d'informations.
- Sélectionnez ou desélectionnez plusieurs départements ou régions pour voir le total.


Instruction Pour lancer l'application:

Lancer la commande suivant pour lancer la pile docker:
docker-compose -f stack.yml up -d

Lien de serveur MongoDB: 
http://127.0.0.1:8081/

Login : root
Password : example 


Lancer la commande suivant pour charger les données sales.BSON dans le serveur MongoDB:
docker exec -i mongo-dev sh -c 'mongoimport -d bda -c sales --authenticationDatabase admin -u root -p example' < sales.bson

Lancer la commande suivant pour lancer le serveur Apache:
node index.js

Lien Pour lancer l'application:
http://127.0.0.1

Lien de serveur Apache:
http://127.0.0.1:4000/

Lien de serveur Apache Local:
http://localhost:4000/

Lancer la commande suivant pour fermer la pile docker:
docker-compose -f stack.yml down
