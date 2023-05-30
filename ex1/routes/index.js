var express = require("express");
var Planta = require("../controllers/planta");
var router = express.Router();

/* GET home page. */

router.get("/plantas", function (req, res, next) {
  if (req.query.especie) {
    Planta.getPlantasPorEspecie(req.query.especie)
      .then((plantas) => {
        res.jsonp(plantas);
      })
      .catch((erro) => {
        res.json("error", {
          error: erro,
          message:
            "Erro na obtenção da lista de plantas da espécie" +
            req.query.especie,
        });
      });
  } else {
    next();
  }
});

router.get("/plantas", function (req, res, next) {
  if (req.query.implant) {
    Planta.getPlantasComImplantacao(req.query.implant)
      .then((plantas) => {
        res.jsonp(plantas);
      })
      .catch((erro) => {
        res.json("error", {
          error: erro,
          message:
            "Erro na obtenção da lista de plantas cujo modo de implantação foi " +
            req.query.freguesias,
        });
      });
  } else {
    next();
  }
});

router.get("/plantas", function (req, res, next) {
  Planta.list()
    .then((plantas) => {
      res.jsonp(plantas);
    })
    .catch((erro) => {
      res.json("error", {
        error: erro,
        message: "Erro na obtenção da lista de plantas",
      });
    });
});

router.get("/plantas/freguesias", function (req, res, next) {
  Planta.getPlantaFreguesias()
    .then((plantas) => {
      res.jsonp(plantas);
    })
    .catch((erro) => {
      res.json("error", {
        error: erro,
        message: "Erro na obtenção da lista de freguesias",
      });
    });
});

router.get("/plantas/especies", function (req, res, next) {
  Planta.getPlantaEspecies()
    .then((plantas) => {
      res.jsonp(plantas);
    })
    .catch((erro) => {
      res.json("error", {
        error: erro,
        message: "Erro na obtenção da lista de espécies",
      });
    });
});

router.get("/plantas/:id", function (req, res, next) {
  Planta.getPlanta(req.params.id)
    .then((planta) => {
      res.jsonp(planta);
    })
    .catch((erro) => {
      res.json("error", {
        error: erro,
        message: "Erro na obtenção da planta",
      });
    });
});

router.post("/plantas", function (req, res, next) {
  Planta.addPlanta(req.body)
    .then((planta) => {
      res.jsonp(planta);
    })
    .catch((erro) => {
      res.json("error", {
        error: erro,
        message: "Não foi possível adicionar a nova planta",
      });
    });
});

router.delete("/plantas/:id", function (req, res, next) {
  Planta.deletePlanta(req.params.id)
    .then((planta) => {
      res.jsonp(planta);
    })
    .catch((erro) => {
      res.json("error", {
        error: erro,
        message: "Não foi possível apagar o registo da planta",
      });
    });
});
module.exports = router;
