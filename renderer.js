const remote = require('electron').remote;
let val  = remote.getGlobal('msg');
document.body.innerHTML = val;
