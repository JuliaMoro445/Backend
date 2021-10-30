var express = require ("express")

var router = express.Router()

var userModel = require ("../models/users")

router.get("/", async function (req, res){
   var users = await userModel.find({})
   return res.send (users)
})

router.post("/", async function (req, res) {
   
    //verificando se todos os dados foram passados
    if (!req.body || !req.body.nome || !req.body.sobrenome || !req.body.email || !req.body.celular || !req.body.telefone || !req.body.senha) {
        //se chegar até aqui, é porque o usuário não enviou dados
        return res.sendStatus (400)
        

    }
    console.log (req.body)

   await userModel.create ({
       name: req.body.nome,
       lastName: req.body.sobrenome,
       email: req.body.email,
       phone: req.body. telefone,
       mobile: req.body.celular

   })

   return res.sendStatus (201)
})

module.exports = router
