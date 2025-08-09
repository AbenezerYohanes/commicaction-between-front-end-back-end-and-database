let createForm=document.getElementById("create_form");


let  FUN_form= (e) =>{
    e.preventDefault();
    console.log("fecth send data")

 fetch("http://localhost:3000/registered", {
    method : "Post",
    headers : {"content-type" : "application/json"},
    body : JSON.stringify({
        first_name : $("#firstNameid").val(),
        last_name: $("#lastNameid").val(),
        phone_number:$("#phoneNumberid").val()

}),

 })

  .then(()=> alert("information sended successfully"))
  .catch((err)=> console.log(err));
}
createForm.addEventListener('submit' ,FUN_form);


