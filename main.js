document.getElementById("issueInputForm").addEventListener('submit',saveissue);

function saveissue(e){
  var DescIssue= document.getElementById('issueDescInput').value;
  var Severity = document.getElementById('issueSeverityInput').value;
  var assignedTo = document.getElementById('issueAssignedToInput').value;
  var issueId =  chance.guid;
  var issueStatus ='open';

  var issue={
    id:issueId,
    description:DescIssue,
    Severity,
    Assigned:assignedTo,
    status:issueStatus
  }
  if(localStorage.getItem('issues')=== null){
    var issues=[];
    issues.push(issue);
    localStorage.setItem('issues',JSON.stringify(issue))
  }
  else{
    var issues = JSON.parse(localStorage.getItem('issues'))
    issues.push(issue);
    localStorage.setItem('issues',JSON.stringify(issues))

  }
  document.getElementById('issueInputForm').reset();
fetchIssues();
e.preventDefault();
}


function fetchIssues() {
  var issues = JSON.parse(localStorage.getItem("issues"));
  var issueList = document.getElementById("issuesList");
  issueList.innerHTML = "";
  for (var i = 0; i < issues; i++) {
    var id = issues[i].id;
    var desc = issues[i].description;
    var severity = issues[i].Severity;
    var assgnedTo = issues[i].Assigned;
    var status = issues[i].status;
    issueList.innerHTML =
      '<div class="well">' +
      "<h6>Issue ID:" +
      id +
      "</h6>" +
      '<p><span class="label label-info">' +
      status +
      "</span></p>" +
      "<h3>" +
      desc +
      "</h3>" +
      '<p><span class="glyphicon glyphicon-time"></span>' +
      severity +
      "<p>" +
      '<p><span class="glyphicon glyphicon-time"</span>' +
      assignedTo +
      "</p>" +
      '<a href="#" onclick="setStatusClosed(\'' +
      id +
      '\')" class="btn btn-warning">Close</a>' +
      '<a href="#" onclick="deleteIssue()"class="btn btn-danger">Delete</a>' +
      "</div>";
  }
}
