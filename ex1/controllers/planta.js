var Planta = require("../models/planta");

// Shop list
module.exports.list = () => {
  return Planta.find()
    .then((resposta) => {
      return resposta;
    })
    .catch((erro) => {
      return erro;
    });
};

module.exports.getPlanta = (id) => {
  return Planta.findOne({ _id: id })
    .then((resposta) => {
      return resposta;
    })
    .catch((erro) => {
      return erro;
    });
};

module.exports.getPlantasPorEspecie = (especie) => {
  return Planta.find({
    Espécie: especie,
  })
    .then((resposta) => {
      return resposta;
    })
    .catch((erro) => {
      return erro;
    });
};

module.exports.getPlantasComImplantacao = (implantacao) => {
  return Planta.find({ Implantação: implantacao })
    .then((resposta) => {
      return resposta;
    })
    .catch((erro) => {
      return erro;
    });
};

module.exports.getPlantaFreguesias = () => {
  return Planta.distinct("Freguesia")
    .sort()
    .then((resposta) => {
      return resposta;
    })
    .catch((erro) => {
      return erro;
    });
};

module.exports.getPlantaEspecies = () => {
  return Planta.distinct("Espécie")
    .sort()
    .then((resposta) => {
      return resposta;
    })
    .catch((erro) => {
      return erro;
    });
};

module.exports.addPlanta = (p) => {
  return Planta.create(p)
    .then((resposta) => {
      return resposta;
    })
    .catch((erro) => {
      return erro;
    });
};

module.exports.deletePlanta = (id) => {
  return Planta.deleteOne({ _id: id })
    .then((resposta) => {
      return resposta;
    })
    .catch((erro) => {
      return erro;
    });
};
