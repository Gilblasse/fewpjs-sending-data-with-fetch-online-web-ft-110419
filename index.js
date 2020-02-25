// Add your code here
function submitData(){
  
  let formData = {
    name: "bob",
    email: "bob@gmail.com"
  }
  let configObj = {
    method: "POST",
    header:{
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }
  
  fetch("http://localhost:3000/users",configObj)
  .then( (response) => response.json())
  .then()
}