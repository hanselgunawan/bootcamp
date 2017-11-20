var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectPartiesOrderByPartyCost: function(tableInput, colToSearch) {
    var queryString = "SELECT * FROM ?? ORDER BY ?? ASC";
    connection.query(queryString, [tableInput, colToSearch], function(err, result) {
      console.log("NOMOR 1: " + JSON.stringify(result, null, 2));
    });
  },
  findPartyByName: function(table, colName) {
    var queryString = "SELECT * FROM ?? WHERE party_name = ?";
    console.log(queryString);
    connection.query(queryString, [table, colName], function(err, result) {
        console.log("NOMOR 2: " + JSON.stringify(result, null, 2));
    });
  },
  findWhoHasMost: function(client_id, client_id_2, parties, groupBy, count) {
    var queryString = "SELECT ??, COUNT(??) as count FROM ?? GROUP BY ?? ORDER BY ? DESC LIMIT 1";

    connection.query(queryString, [client_id, client_id_2, parties, groupBy, count], function(err, result) {
        console.log("NOMOR 3: " + JSON.stringify(result, null, 2));
    });
  }
};

module.exports = orm;
