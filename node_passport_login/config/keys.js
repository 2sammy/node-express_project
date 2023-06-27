//module.exports ={
  //  MongoURI:'mongodb+srv://say@6102:<password>@test1.xoolb7i.mongodb.net/?retryWrites=true&w=majority'
//}

dbPassword = 'mongodb+srv://YOUR_USERNAME_HERE:'+ encodeURIComponent('YOUR_PASSWORD_HERE') + '@CLUSTER_NAME_HERE.mongodb.net/test?retryWrites=true';

module.exports = {
    mongoURI: dbPassword
};
