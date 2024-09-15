Version Talend: 7.3.1
Entrepôt utilisé pour le TP OLAP: basic_datawarehouse

Pour le projet Talend:

1-  Extraire le fichier tp_ETL.zip

2-  Importer le projet sur Talend

3-	Crée une base de données SQLite en exécutant la commande suivante : sqlite3 daraWareHouse.db

4-	Exécuter les requêtes disponibles sur SQLqueries.txt afin de crée les tables de dimensions et la table des faits

5-	Faites une connexion de base de données operational_db et dataWarehouse via la référentiels métadonnées

6-	Faites un lien de fichier geography.csv, date.csv, prestation.csv via la référentiels métadonnées

7-	Lancer les jobs suivante afin d’alimenter entrepôt de données : Dim_Dates, Dim_Lieux, Dim_Prestations, Dim_Client_Insert et Fait_Ventes.

Pour le cube OLAP:

1-  le schéma du cube (fichier xml): tp_schema.xml
2-  Le fichier contenant les requêtes MDX: tp_queries.mdx