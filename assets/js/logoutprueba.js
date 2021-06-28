
let confirmar = document.getElementById('confirmar')
confirmar.addEventListener('submit', ()=>{

    // const logOutUser = JSON.parse(localStorage.getItem('token'));
    // logOutUser.forEach((token, index) => {
    //   if(token.token === token){
    //   logOutUser.splice(index, 1)
    //   }
    // });
    // localStorage.setItem('token',JSON.stringify(logOutUser));
    setTimeout(
      function(){
          window.location.href = "index.html";
      }, 3000);
  
  }); 