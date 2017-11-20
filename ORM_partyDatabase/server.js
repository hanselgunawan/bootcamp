var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
orm.selectPartiesOrderByPartyCost("parties", "party_cost");

// Find a pet in the pets table by an animal_name of Rachel.
orm.findPartyByName("parties", "Big Bang Theory");

// Find the buyer with the most pets.
orm.findWhoHasMost("client_id", "client_id", "parties", "client_id", "count");
