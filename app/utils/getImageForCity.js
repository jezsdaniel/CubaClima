const images = {
  'Pinar%20Del%20Rio': require('../assets/img/pinar.jpg'),
  Artemisa: require('../assets/img/artemisa.jpg'),
  Habana: require('../assets/img/havana.jpg'),
  'Nueva%20Gerona': require('../assets/img/nueva-gerona.jpg'),
  Mayabeque: require('../assets/img/san-jose.jpg'),
  Matanzas: require('../assets/img/matanzas.jpg'),
  Cienfuegos: require('../assets/img/cienfuegos.jpg'),
  'Santa%20Clara': require('../assets/img/santa-clara.jpg'),
  'Sancti%20Spiritus': require('../assets/img/sancti-spiritus.jpg'),
  'Ciego%20de%20Avila': require('../assets/img/ciego-de-avila.jpg'),
  Camaguey: require('../assets/img/camaguey.jpg'),
  'Las%20Tunas': require('../assets/img/las-tunas.jpg'),
  Holguin: require('../assets/img/holguin.jpg'),
  Bayamo: require('../assets/img/bayamo.jpg'),
  'Santiago%20de%20cuba': require('../assets/img/santiago.jpg'),
  Guantanamo: require('../assets/img/guantanamo.jpg'),
};

export default city => images[city];
