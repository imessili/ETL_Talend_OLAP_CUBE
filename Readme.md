# Application de Visualisation des Données de Vente

Ce projet inclut une pile de containers conçue pour lancer une application de visualisation des données, en se concentrant sur les données de ventes étudiées lors de la première phase du processus ETL.

### La pile de containers comprend :
- **Base de données MongoDB** contenant les données de ventes.
- **Serveur Apache**.
- **Container GraphQL** avec le code du serveur et les résolveurs.

### L'application permet de visualiser :
- **Répartition Géographique des Ventes** par département et par région.
- **Nombre Total de Ventes**.
- **Répartition des Types de Prestations** par département et par région.
- **Répartition Géographique des Clients** par département et par région.
- **Nombre Total de Clients**.
- **Chiffre d'Affaires par Année**.
- **Chiffre d'Affaires par Mois**.
- **Répartition des Ventes par Jour de la Semaine**.
- **Répartition des Ventes par Heure du Jour**.
- **Ventes par Catégorie de Prestation**.

### Notes :
- Le zoom sur la page doit être réglé à **80%** pour une meilleure visualisation.
- Sur la page de répartition géographique, vous pouvez **cliquer sur les départements et les régions** pour afficher plus d'informations.
- **Sélectionnez ou désélectionnez plusieurs départements ou régions** pour voir le total.

---

## Instructions pour Lancer l'Application :

Exécutez la commande suivante pour démarrer la pile Docker :

```bash
docker-compose -f stack.yml up -d bash
```

## Lien du Serveur MongoDB :
- URL : http://127.0.0.1:8081/
- Login : root
- Mot de passe : example

## Pour importer les données sales.BSON dans le serveur MongoDB, exécutez :
```bash
docker exec -i mongo-dev sh -c 'mongoimport -d bda -c sales --authenticationDatabase admin -u root -p example' < sales.bson
```
Pour lancer le serveur Apache, exécutez :
```bash
node index.js
```

## URL de l'Application :
- http://127.0.0.1

## Liens du Serveur Apache :
- Serveur Apache : http://127.0.0.1:4000/
- Serveur Apache Local : http://localhost:4000/
- 
Pour arrêter la pile Docker, exécutez :
```bash
docker-compose -f stack.yml down
```

---


# Sales Data Visualization Application

This project includes a stack of containers designed to launch a data visualization application, focusing on sales data studied during the first phase of the ETL process.

### The container stack includes:
- **MongoDB database** containing the sales data.
- **Apache server**.
- **GraphQL container** with the server code and resolvers.

### The application allows you to visualize:
- **Geographic Distribution of Sales** by department and region.
- **Total Number of Sales**.
- **Distribution of Service Types** by department and region.
- **Geographic Distribution of Customers** by department and region.
- **Total Number of Customers**.
- **Revenue by Year**.
- **Revenue by Month**.
- **Sales Distribution by Day of the Week**.
- **Sales Distribution by Time of Day**.
- **Sales by Service Category**.

### Notes:
- The page zoom should be set to **80%** for optimal visualization.
- On the geographic distribution page, you can **click on departments and regions** to display more information.
- **Select or deselect multiple departments or regions** to see the total.

---

## Instructions to Launch the Application:

Run the following command to start the Docker stack:

```bash
docker-compose -f stack.yml up -d
```

### MongoDB Server Link:
- URL: [http://127.0.0.1:8081/](http://127.0.0.1:8081/)
- **Login**: root
- **Password**: example

To load the `sales.BSON` data into the MongoDB server, run:

```bash
docker exec -i mongo-dev sh -c 'mongoimport -d bda -c sales --authenticationDatabase admin -u root -p example' < sales.bson
```

To launch the Apache server, run:

```bash
node index.js
```

### Application URL:
- [http://127.0.0.1](http://127.0.0.1)

### Apache Server Links:
- Apache Server: [http://127.0.0.1:4000/](http://127.0.0.1:4000/)
- Local Apache Server: [http://localhost:4000/](http://localhost:4000/)

To stop the Docker stack, run:

```bash
docker-compose -f stack.yml down
```
