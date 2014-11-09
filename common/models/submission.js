module.exports = function(Submission) {

  var isStatic = true;
  var disabledNonStaticRemoteMethods = ['updateAttributes'];
  var disabledStaticRemoteMethods = ['create', 'upsert', 'exists', 'count',
                               'update', 'find', 'findOne', 'findById',  'deleteById'];
  disabledStaticRemoteMethods.forEach(function(method){
    Submission.sharedClass.find(method, isStatic).shared = false; // this disables the remote method and deregisters it from Swagger
  });

  disabledNonStaticRemoteMethods.forEach(function(method){
    Submission.sharedClass.find(method, false).shared = false;
  });

};


