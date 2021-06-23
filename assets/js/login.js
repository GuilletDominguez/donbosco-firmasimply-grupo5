window.onload = () => {
    var mensaje = document.getElementById('mensaje');
    var form = document.getElementById('form');
    form.addEventListener('submit', function(e) {
        
        e.preventDefault();
        var email = document.getElementById('exampleInputEmail1').value;
        var password = document.getElementById('exampleInputPassword1').value;

        axios.post('http://localhost/127.0.0.1/firmasimply/users', {

                email: email,
                password: password,

            })
            .then(function(res) {
                console.log(res.data);
                if (res.status == 200) {
                    mensaje.innerHTML = '¡Bienvenido!';
                    localStorage.setItem('token', res.data.token);
                    setTimeout(
                        function(){
                            window.location.href = "assets/registroAsistencia.html";
                        }, 3000);
                }
            })
            .catch(function(err) {
                console.log(err);
            })
         
    });

}
