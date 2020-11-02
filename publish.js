const gh = require("gh-pages");
gh.publish("dist",(e) => console.log(e, 'done'));