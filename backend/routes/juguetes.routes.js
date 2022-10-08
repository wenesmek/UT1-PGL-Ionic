module.exports = app => {
    const juguetes = require("../controllers/juguetes.controller.js");


    var router = require("express").Router();


    router.post("/", juguetes.create);

    router.get("/", juguetes.findAll);

    router.get("/:id", juguetes.findOne);

    router.put("/:id", juguetes.update);

    router.delete("/:id", juguetes.delete);

    app.use('/api/juguetes', router);
};