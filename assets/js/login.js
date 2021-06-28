import {
  login
  } from './llamadasApi.js';
        let email = document.getElementById('exampleInputEmail1').value;
        let password = document.getElementById('exampleInputPassword1').value;
        data = {
            email : email,
            password: password,
            _token : token

        }
       login(token, data = {})
                    setTimeout(
                        function(){
                            window.location.href = "assets/registroAsistencia.html";
                        }, 3000);
   