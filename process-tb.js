const fs = require("fs");

const dict = fs.readFileSync("./sudachi-synonyms-dictionary.json");
const full = JSON.parse(dict);
