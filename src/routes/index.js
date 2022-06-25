import express from "express";
import fileUpload from "express-fileupload"
import cors from 'cors'

import stores from "./storesRoutes.js";
import transactions from "./transactionsRoutes.js";
import upload from "./uploadRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ title: "desafio dev, baby!!" })
    })

    app.use(cors())

    app.use(fileUpload({
        createParentPath: true
    }));

    app.use(
        express.json(),
        stores,
        transactions,
        upload
    )
}

export default routes