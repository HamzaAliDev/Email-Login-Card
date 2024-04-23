
let list = ["xyz@gmail.com","abc@gmail.com"]
let checker = false

// check registration
function registration() {
  let email =  document.getElementById('input-field').value
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if(email === element){
        checker = true
    } 
  }

  if(!checker){
    list.push(email)
    alert("Register successfully")
  }else{
    alert("Email is already Registered")
  }
    
    console.log(list);
    
    document.getElementById('input-field').value = " "
    checker = false
}

// login Function
function checkEmail() {
    let email = document.getElementById('input-field').value
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if(email === element){
            checker = true
        }
    }

    if(checker){
      alert("login successfully")
      let write = "<h1>Wellcome</h1>"
        document.write(write+email)
    }
    else{
        alert("Registered your Email!")
    }
}

