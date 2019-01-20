var express = require('express');
var router = express.Router();

var maps = []
maps["AGame"] =
  { "completedEvents": [], "map": [["Water", "Water", "Water"], ["Lumberyard", "Lumberyard", "Lumberyard"], ["Land", "Land", "Land"]], "name": "AGame", "undiscoveredEvents": { "2": { "values": ["W", "500"], "id": 2, "successorsIds": [], "title": "Test sedcond event", "type": "WinR", "description": "sfddsfsddfsfd", "actions": [] } }, "possibleEvents": [{ "values": ["W", "500"], "id": 1, "successorsIds": [2, 3], "title": "Wood Festival", "type": "WinR", "description": "Due to wood festival you will need to trade either gold or stone with other cities. Gain 500 but lose 500 of the chosen material", "actions": [{ "value": ["G", "1000"], "type": "LoseR", "description": "Lose Gold" }, { "value": ["S", "1000"], "type": "LoseR", "description": "Lose Stone" }] }] }
  maps["BGame"] =
  { "completedEvents": [], "map": [["Water", "Water", "Water"], ["Lumberyard", "Lumberyard", "Lumberyard"], ["Land", "Land", "Land"]], "name": "BGame", "undiscoveredEvents": { "2": { "values": ["W", "500"], "id": 2, "successorsIds": [], "title": "Test sedcond event", "type": "WinR", "description": "sfddsfsddfsfd", "actions": [] } }, "possibleEvents": [{ "values": ["Water", "Land", "2"], "id": 1, "successorsIds": [2, 3], "title": "Wood Festival", "type": "Change", "description": "Due to wood festival you will need to trade either gold or stone with other cities. Gain 500 but lose 500 of the chosen material", "actions": [{ "value": ["G", "1000"], "type": "LoseR", "description": "Lose Gold" }, { "value": ["S", "1000"], "type": "LoseR", "description": "Lose Stone" }] }] }


/* GET home page. */
router.get('/', function (req, res, next) {
    var keys = [];
for(var key in maps) {
  if(maps.hasOwnProperty(key)) { //to be safe
    keys.push(key);
  }
}
  res.json(keys)
});
router.get('/:game', function (req, res, next) {
  res.json(maps[req.params.game])
});
module.exports = router;
