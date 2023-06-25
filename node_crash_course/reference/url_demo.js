const url = require('url');
const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active ");

// serialized URL
console.log(myUrl.href);
console.log(myUrl.toString);
// host(root domain);
console.log(myUrl.host);
// host name doesn't get port
console.log(myUrl.hostname);
// pathname
console.log(myUrl.pathname);
//serialized querry
console.log(myUrl.search);
// params object
console.log(myUrl.searchParams);
//add params
console.log(myUrl.search.append('sammy',23));
