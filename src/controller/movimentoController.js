const data = require('../model/data');

const start = new Date();

module.exports = {
  searchMovement(req,res){
      try{
        const { tipo_evento, competencia_inicial, competencia_final} = req.query;
        const filtros = {};

        if(tipo_evento){
          filtros['tipo_inscricao'] = tipo_evento;
        }

        if(competencia_inicial){
          filtros['competencia'] = competencia_inicial;
        }

        if(competencia_final){
          filtros['competencia'] = competencia_final;
        }

        console.log('Acionado ..:', start);

        const filtroMovimento = data.filter(movimento =>{
          let isValid = true;
          for(let key in filtros){
            console.log(key, movimento[key], filtros[key]);
            isValid = isValid && movimento[key] == filtros[key];
          }
          return isValid
        });

        if(filtroMovimento.length){
          const movimento = filtroMovimento;
          res.json({movimento})
        }else{
          res.status(403).send({error: 'NOT FOUND'})
        }

      }catch(e){
        console.log(e);
        res.status(500).send({ error: 'Error'})
      }
  }
}