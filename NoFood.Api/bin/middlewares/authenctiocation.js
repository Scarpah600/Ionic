const jwt = require('jsonwebtoken');
const variables = require('../configuration/variables');
module.exports = async (req,res,next) =>{
    let token = req.body.token || req.query.query || req.headers['x-acess-token'];
    if(token){
        try{
            let decoded = await jwt.verify(token,variables.Security.SecurityKey);
            console.log(decoded);
            req.usuarioLogado = decoded;
            next();
        }catch(error){
            res.status(401).send({message: 'Token informado invalido'});
        }
    }else {
        res.status(401).send({message:'Acessado negado! Você precisa informar um token valido para poder acessar esse recurso.'});
        return;
    }
}