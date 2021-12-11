const os = require("os");
const luasSegitiga = require("./luasSegitiga");
const fs = require("fs");
const stephanie = require("./person.json");
const isi = fs.readFileSync("./text.txt", "utf-8");

fs.writeFileSync("./test.txt", "i love binar");

console.log(stephanie);
console.log(isi);
console.log("free memory:", os.freemem());
console.log("luas segitiga adalah ", luasSegitiga(4, 3));
