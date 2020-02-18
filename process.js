const fs = require("fs");

const dict = fs.readFileSync("./sudachi-synonyms-dictionary.json");
const full = JSON.parse(dict);

const min = full.map(i => i.items.map(w => w.midashi));

const out = min.filter(i => {
  if (i.length === 2 && i[1].match(/[a-z ]+/)) {
    return false;
  }
  return true;
});

fs.writeFileSync("./min.json", JSON.stringify(out));
console.log(out.length);
