'use strict'

const repository = require('../repositories/usuario-repository');
const validation = require('../bin/helpers/validation');
const ctlBase = require('../bin/base/controller-base');
const _repo = new repository();
const md5 = require ('md5');

function usuarioController() {

}

usuarioController.prototype.post = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome,'Iinforme seu Nome');
    _validationContract.isRequired(req.body.email,'Informe seu e-mail');
    _validationContract.isEmail(req.body.email,'Seu E-mail Informado é Inválido');
    _validationContract.isRequired(req.body.senha, 'Senha Informada é obrigatoria');
    _validationContract.isRequired(req.body.senhaConfirmacao, 'Sebga de confirmação é obrigatoria');
    _validationContract.isTrue(req.body.senha != data.senhaConfirmacao, 'A senha e a Confirmação não sãreq.bodyuais');

    let usuarioIsEmailExiste = await _repo.isEmailExiste(req.body.email);

    if(usuarioIsEmailExiste){
        _validationContract.isTrue((usuarioIsEmailExiste.nome != undefined),
         `Já Existe o e-mail ${data.email} cadastro em nosso sistema`);
    }
      req.body.senha = md5(req.body.senha);

    ctlBase.post(_repo,_validationContract,req,res);
    res.status(201).send(resultado);
};

usuarioController.prototype.put = async (req, res) => {
    let _validationContract = new validation();
    
    _validationContract.isRequired(req.body.nome,'Informe seu Nome');
    _validationContract.isRequired(req.body.email,'Informe seu e-mail');
    _validationContract.isEmailExiste(req.body.email,'O e-maill Informado é invalido');
    _validationContract.isRequired(req.params.id,'Informe o id do usuario será editado')
;
    let usuarioIsEmailExiste = await _repo.isEmailExiste(req.body.email);

    if(usuarioIsEmailExiste){
        _validationContract.isTrue((usuarioIsEmailExiste.nome != undefined )
        && (usuarioIsEmailExiste._id != req.params.id),
         `Já Existe o e-mail ${data.email} cadastro em nosso sistema`);        
    }

};

usuarioController.prototype.get = async (req, res) => {
    let lista = await _repo.getAll();
    res.status(200).send(lista);
};


usuarioController.prototype.getById = async (req, res) => {
    let usuario = await _repo.getById(req.params.id);
    res.status(200).send(produto);
};

usuarioController.prototype.delete = async (req, res) => {
    let deletado = await _repo.delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = usuarioController;