$(function() {
  console.log("Document Ready");
  Parse.initialize("mUp5BBq77XQgNeJDYzkF8Rqe5zWTOG7DggPVOowf", "I62H5dysrHAeKBCiem7sSmoNLF6YLXsSKXwbxvFl");
    
    function addResults(email, target, problem, solution, cost, successCb){
        var SurveyResults = Parse.Object.extend("SurveyResults");
        var surveyResults = new SurveyResults();
        var parsePromise = surveyResults.save({email: email, target: target, problem: problem, solution: solution, cost: cost});

        parsePromise.then(successCb, function(error) {
            alert("could not save record");
        });    
    
    }
    
    $("form").on("submit", function() {
    var contactEmail = $("input[name=email]").val();
    var contactTarget = $("input[name=target]").val();
    var contactProblem = $("input[name=problem]").val();        
    var contactSolution = $("input[name=solution]").val();
    var contactCost = $("input[name=cost]").val(); 
    
    var onSuccess = function(){
        resetForm($("form")[0]);
        console.log("Success!");
    }
        
    addResults(contactEmail, contactTarget, contactProblem, contactSolution, contactCost, onSuccess);
    return false;
            
    });

  function resetForm(formElement) {
    formElement.reset();
  }
    
 var loadContacts = function(){
    var SurveyResults = Parse.Object.extend("SurveyResults");
    var query = new Parse.Query(SurveyResults);
    query.find({
      success: function(results) {
          var newLIs = results.map(function(element){
            return $("li", {text: element.attributes.name + ": " + element.attributes.email })                        
          });
        $("ul#list").html(newLIs);
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
    console.log("Loading from Parse");
 };

 if ($("ul#list")[0]){
    loadContacts();    
 }


    
  
});