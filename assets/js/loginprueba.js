import {
  login
  } from './llamadasApi.js';
        let email = document.getElementById('exampleInputEmail1').value;
        let password = document.getElementById('exampleInputPassword1').value;
        let token;
        let data = {
            email : email,
            password: password,
            _token : token
        
        }
       login(email, password)
       if(status == 200){
                    setTimeout(
                        function(){
                            window.location.href = "assets/registroAsistencia.html";
                        }, 3000);
                    }
        else{
            alert('Ha habido un problema')
            console.log(login)
        }