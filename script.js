function Register(){
let userData ={
    name : username1.value,
    pwd : password1.value
}

    if(email1.value=='' ||password1.value==''||username1.value==''){
        alert('Please enter values in all fields');
        document.getElementById('form2').reset(); 
    } else{
        if(userData.name in localStorage){
            alert('Account already exists. Please choose a different username.')
            document.getElementById('form2').reset(); 
        }
        else{
        localStorage.setItem(userData.name,JSON.stringify(userData));
        alert('Registration successful!');
        window.location ='./index.html';
    }
    }
}

function logIn(){
    const loginDetails = {
        name :username.value,
        pwd : password.value
    }
    if(username.value=='' ||password.value==''){
        alert('Please enter values in all fields');
        document.getElementById('form1').reset();
    }
    else{
        
        if(loginDetails.name in localStorage){
            let data=JSON.parse(localStorage.getItem(loginDetails.name));
            if(loginDetails.pwd == data.pwd){
                alert('Login successful!');
                window.location ='./calc.html';
            }else{
                alert('Password does not match'); 
            }
        }
        else {
            alert('Username does not exist')
          }
       
        
         
    }

}