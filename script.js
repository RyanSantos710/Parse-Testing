$(function() {
  console.log("Document Ready");
  Parse.initialize("mUp5BBq77XQgNeJDYzkF8Rqe5zWTOG7DggPVOowf", "I62H5dysrHAeKBCiem7sSmoNLF6YLXsSKXwbxvFl");
    
    function addResults(email, target, problem, solution, cost){
        var SurveyResults = Parse.Object.extend("SurveyResults");
        var surveyResults = new SurveyResults();
        var parsePromise = surveyResults.save({email: email, target: target, problem: problem, solution: solution, cost: cost});
    
    
    
    }
    
    $("form").on("submit", function() {
    var contactEmail = $("input[name=email]").val();
    var contactTarget = $("input[name=target]").val();
    var contactProblem = $("input[name=problem]").val();        
    var contactSolution = $("input[name=solution]").val();
    var contactCost = $("input[name=cost]").val(); 
        
    addResults(contactEmail, contactTarget, contactProblem, contactSolution, contactCost);
    return false;    
    });
    
    /* Initial Tester
    surveyResults.save({email: "testEmail", target: "testTarget", problem: "testProblem", solution: "testSolution", cost: "testCost"}).then(function(object) {
    alert("Logged, Thank you."); 
    }); */
    
  
});
