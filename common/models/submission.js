module.exports = function(Submission) {
  //Submission inherits from the PersistedModel base class

  // Turn defaults off
  var isStatic = true;
  var isNotStatic = false;
  var disabledNonStaticRemoteMethods = ['updateAttributes'];
  var disabledStaticRemoteMethods = ['create', 'upsert', 'exists', 'count',
    'update', 'find', 'findOne', 'findById',
    'deleteById'];
    //console.log(Submission.sharedClass);
    disabledStaticRemoteMethods.forEach(function(method){
      Submission.sharedClass.find(method, isStatic).shared = false; // this disables class level remote methods and deregisters it from Swagger
    });

    disabledNonStaticRemoteMethods.forEach(function(method){
      Submission.sharedClass.find(method, isNotStatic).shared = false; // this disables  object/instance level remote methods and deregisters them Swagger
    });

    // Custom Methods for our API
    Submission.findSubmission = function(params, cb) {
      cb(null, 'Attempting to create a custom method' + params);
    }

    Submission.remoteMethod(
      'findSubmission',
      {
        http: {path: '/', verb: 'get'},
        accepts: [{arg: 'state', type: 'string', required: true},
                  {arg: 'issuerId', type: 'string'}],
        returns: {arg: 'findSubmission', type: 'string'}
      }
    );
};


