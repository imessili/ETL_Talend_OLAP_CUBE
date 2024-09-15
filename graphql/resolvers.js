import { MongoClient } from 'mongodb';

// Connection URI
// version container
const uri = 'mongodb://root:example@mongodb:27017'
// version runtime
//const uri = 'mongodb://root:example@localhost:27017';


// Database Name
const dbName = 'bda';

// Collection Name
const collectionName = 'sales';

// Create a new MongoClient
const client = new MongoClient(uri);

await client.connect();
console.log('Connected successfully to the server');
const db = client.db(dbName);
const collection = db.collection(collectionName);

/*collection.countDocuments().then((docs) =>{
  console.log('Number of documents are', docs);
      });*/

const aggregatePrestation = [
  {
    $group: {
      _id: {
        prestation_id: '$prestation.id',
        prestation_description: '$prestation.description'
      },
      sum: {
        $sum: '$price'
      },
      avg: {
        $avg: '$price'
      },
      count: {
        $sum: 1
      }
    }
  },
  {
    $project: {
      id: '$_id.prestation_id',
      description: '$_id.prestation_description',
      sum: 1,
      avg: 1,
      count: 1,
      _id: 0
    }
  }
]

const aggregateDepartments = [
  {
    $group: {
      _id: {
        prestation_department: '$address.department.id',
        department_name: '$address.department.name'
      },
      sum: {
        $sum: '$price'
      },
      avg: {
        $avg: '$price'
      },
      count: {
        $sum: 1
      },
      prestation_types: {
        $push: '$prestation.description'
      }
    }
  },
  {
    $project: {
      department: '$_id.prestation_department',
      name: '$_id.department_name',
      sum: 1,
      avg: 1,
      count: 1,
      prestation_types: 1,
      _id: 0
    }
  }
]

const aggregateRegions = [
  {
    $group: {
      _id: {
        prestation_region: '$address.region.id',
        region_name: '$address.region.name'
      },
      sum: {
        $sum: '$price'
      },
      avg: {
        $avg: '$price'
      },
      count: {
        $sum: 1
      },
      prestation_types: {
        $push: '$prestation.description'
      }
    }
  },
  {
    $project: {
      region: '$_id.prestation_region',
      name: '$_id.region_name',
      sum: 1,
      avg: 1,
      count: 1,
      prestation_types: 1,
      _id: 0
    }
  }
]

// calcule de chiffre d’affaires
const aggregateSales = [
  {
    $group: {
      _id: {

      },
      sum: {
        $sum: '$price'
      },
      count: {
        $sum: 1
      }
    }
  },
  {
    $project: {
      sum: 1,
      count: 1,
      _id: 0
    }
  }
]

// calcule de chiffre d’affaires par Annee
const aggregateSalesYear = [
  {
    $group: {
      _id: {
        sales_year: '$date.year'
      },
      sum: {
        $sum: '$price'
      },
      count: {
        $sum: 1
      }
    }
  },
  {
    $project: {
      year: '$_id.sales_year',
      sum: 1,
      count: 1,
      _id: 0
    }
  }
]

// calcule de chiffre d’affaires par mois
const aggregateSalesMonth = [
  {
    $group: {
      _id: {
        sales_month: '$date.month',
        sales_month_name: '$date.month_name',
        sales_month_year: '$date.year'
      },
      sum: {
        $sum: '$price'
      },
      count: {
        $sum: 1
      }
    }
  },
  {
    $project: {
      month: '$_id.sales_month',
      month_name: '$_id.sales_month_name',
      year: '$_id.sales_month_year',
      sum: 1,
      count: 1,
      _id: 0
    }
  }
]

// Nombre de clients par Departement
const aggregateClientsDepartement = [
  {
    $group: {
      _id: {
        department_id: '$client.city.department.id',
        department_name: '$client.city.department.name'
      },
      uniqueClients: {
        $addToSet: '$client.id'
      }
    }
  },
  {
    $project: {
      department: '$_id.department_id',
      department_name: '$_id.department_name',
      count: { $size: '$uniqueClients' },
      _id: 0
    }
  }
]

// Nombre de clients par Region
const aggregateClientsRegion = [
  {
    $group: {
      _id: {
        region_id: '$client.city.region.id',
        region_name: '$client.city.region.name'
      },
      uniqueClients: {
        $addToSet: '$client.id'
      }
    }
  },
  {
    $project: {
      client: '$_id.client_id',
      region: '$_id.region_id',
      region_name: '$_id.region_name',
      count: { $size: '$uniqueClients' },
      _id: 0
    }
  }
]

// calcule de nombre de ventes par jour
const aggregateSalesDay = [
  {
    $group: {
      _id: {

      },
      all_sales_days: {
        $push: '$date.day_name'
      }
      
    }
  },
  {
    $project: {  
      all_sales_days: 1,
      _id: 0
    }
  }
]

// calcule de nombre de ventes par heure
const aggregateSalesHour = [
  {
    $group: {
      _id: {

      },
      all_sales_hours: {
        $push: '$date.hour'
      }
      
    }
  },
  {
    $project: {  
      all_sales_hours: 1,
      _id: 0
    }
  }
]


// on définit une fonction qui effectue l'aggrégation voulue
async function aggregate(aggregation) {
  const result = await collection.aggregate(aggregation).toArray();
  return result;
}

// un résolveur simple pour la requête 'books' de type Query
// qui renvoie la variable 'books'
const resolvers = {
  Query: {
    prestations(root, args, context) {
      return aggregate(aggregatePrestation)
    },
    departments(root, args, context) {
      return aggregate(aggregateDepartments)
    },
    regions(root, args, context) {
      return aggregate(aggregateRegions)
    },
    sales(root, args, context) {
      return aggregate(aggregateSales)
    },
    years(root, args, context) {
      return aggregate(aggregateSalesYear)
    },
    months(root, args, context) {
      return aggregate(aggregateSalesMonth)
    },
    clientsdep(root, args, context) {
      return aggregate(aggregateClientsDepartement)
    },
    clientsreg(root, args, context) {
      return aggregate(aggregateClientsRegion)
    },
    days(root, args, context) {
      return aggregate(aggregateSalesDay)
    },
    hours(root, args, context) {
      return aggregate(aggregateSalesHour)
    }
  }
}

// on exporte la définition de 'resolvers'
export default resolvers;
