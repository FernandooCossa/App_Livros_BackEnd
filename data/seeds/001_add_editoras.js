exports.seed = function (knex){
    return knex("editoras").del()
    .then(function() {
        return knex("editoras").insert([
            {
                nome:"Vagalume",
                cidade: "Criciuma",
                estado: "santa catarina", 
                telefone:"4834444444",
                rua: "juarez de Souza",
                cep: 88806080
            }
        ]);
    });
  }
  
  