# Projet ETL et Cube OLAP

## Version Talend: 7.3.1
## Entrepôt utilisé pour le TP OLAP: basic_datawarehouse

### Pour le projet Talend :

1. Extraire le fichier `tp_ETL.zip`.

2. Importer le projet dans Talend.

3. Créer une base de données SQLite en exécutant la commande suivante :

   ```bash
   sqlite3 daraWareHouse.db
   ```
   
4. Exécuter les requêtes disponibles dans le fichier SQLqueries.txt afin de créer les tables de dimensions et la table des faits.

5. Configurer une connexion de base de données operational_db et dataWarehouse via le référentiel des métadonnées.

6. Lier les fichiers geography.csv, date.csv, et prestation.csv via le référentiel des métadonnées.

7. Lancer les jobs suivants afin d’alimenter l’entrepôt de données : Dim_Dates, Dim_Lieux, Dim_Prestations, Dim_Client_Insert et Fait_Ventes.

### Pour le cube OLAP :

1. Le schéma du cube (fichier XML) : tp_schema.xml

2. Le fichier contenant les requêtes MDX : tp_queries.mdx

---

# ETL and OLAP Cube Project

## Talend Version: 7.3.1
## Data Warehouse Used for OLAP Exercise: basic_datawarehouse

### For the Talend Project:

1. Extract the file tp_ETL.zip.

2. Import the project into Talend.

3. Create an SQLite database by running the following command:

   ```bash
     sqlite3 daraWareHouse.db
   ```

4. Execute the queries available in the SQLqueries.txt file to create the dimension tables and the fact table.

5. Set up database connections for operational_db and dataWarehouse via the metadata repository.

6. Link the files geography.csv, date.csv, and prestation.csv via the metadata repository.

7. Run the following jobs to populate the data warehouse: Dim_Dates, Dim_Lieux, Dim_Prestations, Dim_Client_Insert, and Fait_Ventes.

### For the OLAP Cube:

1. The cube schema (XML file): tp_schema.xml

2. The file containing MDX queries: tp_queries.mdx





