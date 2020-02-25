// Add your code here
function submitData(){
  let  destinationURL = "http://localhost:3000/users"
  
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
  
  fetch(destinationURL,configObj)
  .then( (response) => response.json())
  .then( (obj) => console.log(obj))
}