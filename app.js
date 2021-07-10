const express = require("express");
const exp = express();
const port = 3000;

exp.get("/",(req,res) => {
        res.send("ALÕ");
});

exp.listen(port, () => console.log(`Servidor iniciado na porta ${port}`));
