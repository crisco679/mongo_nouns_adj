var express=require('express');
var mongoose=require('mongoose');
var RandomHandle=require('../../models/randomHandle.js');

var router = express.Router();

router.get('/noun', function(request, response){
  console.log('Request Recieved');
  RandomHandle.find({id:'noun'}, function(err, nouns){
    console.log('find started');
    if(err){
      console.log(err);
      response.sendStatus(500);
    }else{
      console.log("found nouns",nouns);
      response.send(nouns);
    }
  })

});


router.get('/noun', function(request, response){

})

module.exports = router;
