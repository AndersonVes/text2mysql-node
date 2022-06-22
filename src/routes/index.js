import express from "express";
import stores from "./storesRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ title: "desafio dev, baby!!" })
    })

    app.use(
        express.json(),
        stores,
    )
}

export default routes