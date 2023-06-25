const os = require ('os');

//platform
console.log(os.platform());

// cpu arch
console.log(os.arch());

// cpu core info
console.log(os.cpus());

// free memory
console.log(os.freemem());
// total mem
console.log(os.totalmem());
//Home dir
console.log(os.homedir());
// uptime
console.log(os.uptime());