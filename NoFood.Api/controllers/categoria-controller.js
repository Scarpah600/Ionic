'use strict'

const repository = require('../repositories/categoria-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();


function categoriaController() {

}

categoriaController.prototype.post = async (req, res) => {

    let _validationContract = new validation();

    _validationContract.isRequired(req.body.titulo, 'o Titulo é obrigatorio');
    _validationContract.isRequired(req.body.foto, 'A Foto é obrigatorio');

    ctrlBase.post(_repo, _validationContract, req,res);
};

categoriaController.prototype.put = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.titulo, 'o Titulo é obrigatorio');
    _validationContract.isRequired(req.body.foto, 'A Foto é obrigatorio');
    _validationContract.isRequired(req.params.id,'Id que será atualizado é obrigatorio');
    ctrlBase.put(_repo, _validationContract, req,res);
};

categoriaController.prototype.get = async (req, res) => {
   ctrlBase.get(_repo, req, res);
};

categoriaController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

categoriaController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = categoriaController;