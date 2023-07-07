exports.seed = function (knex){
    return knex("autores").del()
    .then(function() {
        return knex("autores").insert([
            {
                nome:"Fernando",
                sobrenome: "Souza",
                idade: 27, 
                data_nascimento:"14/11/1995",
                sexo: "M",
                telefone: "48996467357"
            }
            
  
        ]);
    });
  }
  
  