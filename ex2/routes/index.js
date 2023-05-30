var express = require("express");
var router = express.Router();
var axios = require("axios");

/* GET home page. */
router.get("/", function (req, res, next) {
  var data = new Date().toISOString().substring(0, 16);
  axios
    .get("http://localhost:15030/plantas")
    .then((resposta) => {
      res.render("index", { plantas: resposta.data, d: data });
    })
    .catch((error) => {
      res.render("error", { error: error });
    });
});

router.get("/especies/:id", function (req, res, next) {
  var data = new Date().toISOString().substring(0, 16);
  axios
    .get("http://localhost:15030/plantas?especie=" + req.params.id)
    .then((resposta) => {
      console.log(resposta.data);
      res.render("especie", { plantas: resposta.data, d: data });
    })
    .catch((error) => {
      res.render("error", { error: error });
    });
});

router.get("/:id", function (req, res, next) {
  var data = new Date().toISOString().substring(0, 16);
  axios
    .get("http://localhost:15030/plantas/" + req.params.id)
    .then((resposta) => {
      res.render("planta", { planta: resposta.data, d: data });
    })
    .catch((error) => {
      res.render("error", { error: error });
    });
});

module.exports = router;
