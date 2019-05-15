$(document).ready(function(){
  $('.sidenav').sidenav();
});
const replaceString = (string) => {
  let newString = '';
  for(let i = 0; i < string.length; i++){
     if(string[i] === ' '){
       newString +='%20'
     } else {
      newString += string[i];
     }
    }
    return newString
  }


const viewProfiles = () => {
  return `
  <header class="hero" id="hero">
    <nav class="container navbar" id="navbar-container-psico-view">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo logo"><img class="img-logo" alt="logo-sesion" src="images/sesion7_200x96.png"/></a>
        <ul id="nav-mobile" class="right list-items">
          <li class="item"><a class="font-black" href="#how-work">¿Cómo Funciona?</a></li>
          <li class="item"><a class="font-black" href="#team">El equipo</a></li>
          <li class="item"><a class="font-black" href="#faq">FAQ</a></li>
          <li class="item"><a  id="start-now" class="font-black" href="#sesion">Empezar ahora</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center brown-text"><img class="circle responsive-img profile" src="images/paloma.png"/></h2>
            <h5 class="center">Paloma Reaño</h5>
            <p class="light">Lic. En Psicología Clínica y Mg. en Estudios Teóricos en Psicoanálisis</p>
          </div>
          <div class="icon-block">
            <ul>
              <li>- Psicoterapeuta de niños, adolescentes y adultos.</li>
              <li>- Experiencia en trabajo vincular y asesoría de crianza a padres.</li>
            </ul>
            <a id="psico-paloma">Ver Perfil</a>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center brown-text"><img class="circle responsive-img profile" src="images/santiago.png"/></h2>
            <h5 class="center">Santiago Joseph</h5>
            <p class="light">Lic. En Psicología Clínica y Mg. en Estudios Teóricos en Psicoanálisis</p>
          </div>
          <div class="icon-block">
            <ul>
              <li>- Psicoterapeuta de adolescentes y adultos.</li>
              <li>- Experiencia en estrés laboral y crisis vitales.</li>
            </ul>
            <a id="psico-santiago">Ver Perfil</a>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center brown-text"><img class="circle responsive-img profile" src="images/amelie.png"/></h2>
            <h5 class="center">Amelie</h5>
            <p class="light">Bachiller en Psicología y psicoterapeuta psicoanalítica</p>
          </div>
          <div class="icon-block">
            <ul>
              <li>- Psicoterapeuta psicoanalítica egresada del Instituto Inter-Cambio.</li>
              <li>- Experiencia en asesoría pedagógica y orientación a padres de familia en estilos de crianza.</li>
            </ul>
            <a id="psico-amelie">Ver Perfil</a>
          </div>
        </div>
      </div>
  </div>
</header>`  
}

const viewPaloma = () => {
  return `
  <section id="psico-1">
    <nav class="container navbar" id="navbar-container-psico-view-paloma">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo logo"><img class="img-logo" alt="logo-sesion" src="images/sesion7_200x96.png"/></a>
        <ul id="nav-mobile" class="right list-items">
          <li class="item"><a class="font-black" href="#how-work">¿Cómo Funciona?</a></li>
          <li class="item"><a class="font-black" href="#team">El equipo</a></li>
          <li class="item"><a class="font-black" href="#faq">FAQ</a></li>
          <li class="item"><a  id="start-now" class="font-black" href="#sesion">Empezar ahora</a></li>
        </ul>
      </div>
    </nav>
    <section class="row">
      <div class="col s12">
        <div class="icon-block">
          <h2 class="center brown-text"><img class="circle responsive-img profile" src="images/paloma.png"/></h2>
          <h5 class="center">Paloma Reaño</h5>
          <p class="light">Lic. En Psicología Clínica y Mg. en Estudios Teóricos en Psicoanálisis</p>
        </div>
        <div>
          <h3>Bio</h3>
          <p>Paloma es ...</p>
          <h3>Intereses</h3>
        </div>
        <div class="icon-block">
          <h3>Especialista en: </h3> 
          <ul>
           <li>- Psicoterapeuta de niños, adolescentes y adultos.</li>
           <li>- Experiencia en trabajo vincular y asesoría de crianza a padres.</li>
          </ul>
          <!-- Modal Trigger -->
          <a class="waves-effect waves-light btn modal-trigger" href="#modal1" id="contacto-paloma">Contactar</a>
          <!-- Modal Structure -->
          <div id="modal1" class="modal">
            <div class="modal-content">
              <h4>Información Previa</h4>
              <div class="row">
                <form class="col s12">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" class="validate">
                    <label for="icon_prefix">Nombres y Apellidos</label>
                  </div>
                  <div class="input-field col s12">
                    <i class="material-icons prefix">phone_iphone</i>
                    <input id="icon_telephone" type="tel" class="validate">
                    <label for="icon_telephone">Celular</label>
                  </div>
                  <div class="input-field col s12">
                    <i class="material-icons prefix">email</i>
                    <input id="icon_email" type="email" class="validate">
                    <label for="icon_email">Email</label>
                  </div>
                  <div class="input-field col s12">
                    <h4>¿Cuántas sesiones deseas tomar?</h4>
                    <input type="radio" name="planes" value="1">Una sesión<br>
                    <input type="radio" name="planes" value="4">Paquete de 4 sesiones<br>
                    <input type="radio" name="planes" value="0">Todavía no lo decido
                  </div>
                  <div class="input-field col s12">
                    <h4>¿Qué te animó a iniciar una sesión?</h4>
                    <i class="material-icons prefix">mode_edit</i>
                    <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                    <label for="icon_prefix2">Cuéntame</label>
                  </div>
                </form> 
              </div>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-close waves-effect waves-green btn-flat" id="contacta-paloma-wasap">Inicia Sesión</a>
            </div>
          </div>  
        </div>
      </div>
    </section>
  </section>`
}


const viewSantiago = () => {
 return `
 <section id="psico-2">
   <nav class="container navbar" id="navbar-container-psico-view-santiago">
     <div class="nav-wrapper">
       <a href="#" class="brand-logo logo"><img class="img-logo" alt="logo-sesion" src="images/sesion7_200x96.png"/></a>
       <ul id="nav-mobile" class="right list-items">
         <li class="item"><a class="font-black" href="#how-work">¿Cómo Funciona?</a></li>
         <li class="item"><a class="font-black" href="#team">El equipo</a></li>
         <li class="item"><a class="font-black" href="#faq">FAQ</a></li>
         <li class="item"><a  id="start-now" class="font-black" href="#sesion">Empezar ahora</a></li>
       </ul>
     </div>
    </nav>
    <section class="row">
     <div class="col s12">
       <div class="icon-block">
         <h2 class="center brown-text"><img class="circle responsive-img profile" src="images/santiago.png"/></h2>
         <h5 class="center">Santiago Joseph</h5>
         <p class="light">Lic. En Psicología Clínica y Mg. en Estudios Teóricos en Psicoanálisis</p>
       </div>
       <div>
         <h3>Bio</h3>
         <p>Santiago es ...</p>
         <h3>Intereses</h3>
       </div>
       <div class="icon-block">
         <h3>Especialista en: </h3> 
         <ul>
          <li>- Psicoterapeuta de adolescentes y adultos.</li>
          <li>- Experiencia en estrés laboral y crisis vitales.</li>
         </ul>
         <!-- Modal Trigger -->
         <a class="waves-effect waves-light btn modal-trigger" href="#modal1" id="contacto-santiago">Contactar</a>
         <!-- Modal Structure -->
         <div id="modal1" class="modal">
           <div class="modal-content">
             <h4>Información Previa</h4>
             <div class="row">
               <form class="col s12">
                 <div class="input-field col s12">
                   <i class="material-icons prefix">account_circle</i>
                   <input id="icon_prefix" type="text" class="validate">
                   <label for="icon_prefix">Nombres y Apellidos</label>
                 </div>
                 <div class="input-field col s12">
                   <i class="material-icons prefix">phone_iphone</i>
                   <input id="icon_telephone" type="tel" class="validate">
                   <label for="icon_telephone">Celular</label>
                 </div>
                 <div class="input-field col s12">
                   <i class="material-icons prefix">email</i>
                   <input id="icon_email" type="email" class="validate">
                   <label for="icon_email">Email</label>
                 </div>
                 <div class="input-field col s12">
                   <h4>¿Cuántas sesiones deseas tomar?</h4>
                   <input type="radio" name="planes" value="1">Una sesión<br>
                   <input type="radio" name="planes" value="4">Paquete de 4 sesiones<br>
                   <input type="radio" name="planes" value="0">Todavía no lo decido
                 </div>
                 <div class="input-field col s12">
                   <h4>¿Qué te animó a iniciar una sesión?</h4>
                   <i class="material-icons prefix">mode_edit</i>
                   <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                   <label for="icon_prefix2">Cuéntame</label>
                 </div>
               </form> 
             </div>
           </div>
           <div class="modal-footer">
             <a href="#!" class="modal-close waves-effect waves-green btn-flat" id="contacta-santiago-wasap">Inicia Sesión</a>
           </div>
         </div>  
       </div>
     </div>
   </section>
  </section>`
}

const viewAmelie = () => {
  return `
  <section id="psico-3">
    <nav class="container navbar" id="navbar-container-psico-view-amelie">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo logo"><img class="img-logo" alt="logo-sesion" src="images/sesion7_200x96.png"/></a>
        <ul id="nav-mobile" class="right list-items">
          <li class="item"><a class="font-black" href="#how-work">¿Cómo Funciona?</a></li>
          <li class="item"><a class="font-black" href="#team">El equipo</a></li>
          <li class="item"><a class="font-black" href="#faq">FAQ</a></li>
          <li class="item"><a  id="start-now" class="font-black" href="#sesion">Empezar ahora</a></li>
        </ul>
      </div>
     </nav>
     <section class="row">
       <div class="col s12">
         <div class="icon-block">
           <h2 class="center brown-text"><img class="circle responsive-img profile" src="images/amelie.png"/></h2>
           <h5 class="center">Amelie</h5>
           <p class="light">Psicóloga y psicoterapeuta psicoanalítica</p>
         </div>
       <div>
         <h3>Bio</h3>
         <p>Amelié es ...</p>
         <h3>Intereses</h3>
       </div>
       <div class="icon-block">
         <h3>Especialista en: </h3> 
         <ul>
           <li>- Psicoterapeuta psicoanalítica egresada del instituto Inter-Cambio.</li>
           <li>- Asesoria pedagógica y orientación a padres de familia en estilos de crianza.</li>
         </ul>
         <!-- Modal Trigger -->
         <a class="waves-effect waves-light btn modal-trigger" href="#modal1" id="contacto-amelie">Contactar</a>
         <!-- Modal Structure -->
         <div id="modal1" class="modal">
           <div class="modal-content">
             <h4>Información Previa</h4>
             <div class="row">
               <form class="col s12">
                 <div class="input-field col s12">
                   <i class="material-icons prefix">account_circle</i>
                   <input id="icon_prefix" type="text" class="validate">
                   <label for="icon_prefix">Nombres y Apellidos</label>
                 </div>
                 <div class="input-field col s12">
                   <i class="material-icons prefix">phone_iphone</i>
                   <input id="icon_telephone" type="tel" class="validate">
                   <label for="icon_telephone">Celular</label>
                 </div>
                 <div class="input-field col s12">
                   <i class="material-icons prefix">email</i>
                   <input id="icon_email" type="email" class="validate">
                   <label for="icon_email">Email</label>
                 </div>
                 <div class="input-field col s12">
                   <h4>¿Cuántas sesiones deseas tomar?</h4>
                   <input type="radio" name="planes" value="1">Una sesión<br>
                   <input type="radio" name="planes" value="4">Paquete de 4 sesiones<br>
                   <input type="radio" name="planes" value="0">Todavía no lo decido
                 </div>
                 <div class="input-field col s12">
                   <h4>¿Qué te animó a iniciar una sesión?</h4>
                   <i class="material-icons prefix">mode_edit</i>
                   <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                   <label for="icon_prefix2">Cuéntame</label>
                 </div>
               </form> 
             </div>
           </div>
           <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat" id="contacta-amelie-wasap">Inicia Sesión</a>
           </div>
         </div>  
       </div>
     </div>
   </section>
 </section>`
}

const mainView = document.getElementById('root');


mainView.addEventListener('click', (event) => {
  if (event.target.id === 'start-now' || event.target.id === 'start-now-mobile' || event.target.id === 'start-now-info' || event.target.id === 'choose-psico') {
      event.currentTarget.innerHTML = viewProfiles();
    }; 
  if (event.target.className === 'img-logo') {
      window.location = 'index.html';
    };
  if (event.target.id === 'psico-paloma') {
    event.currentTarget.innerHTML = viewPaloma();
  } else if (event.target.id === 'psico-santiago') {
    event.currentTarget.innerHTML = viewSantiago();
  } else if (event.target.id === 'psico-amelie'){
    event.currentTarget.innerHTML = viewAmelie();
  }
  if(event.target.id === 'psico-1' || event.target.id === 'psico-2' || event.target.id === 'psico3' ) {
    if(event.target.className === 'img-logo'){
      window.location = 'index.html';
    };
  }
  if(event.target.id === 'contacto-paloma'){ 
    console.log(event.target.id)
    $('.modal').modal();
  } else if (event.target.id === 'contacto-santiago'){
    console.log(event.target.id)
    $('.modal').modal();
  } else if (event.target.id === 'contacto-amelie') {
    console.log(event.target.id)
    $('.modal').modal();
  }
  if(event.target.id === 'contacta-paloma-wasap') {
    console.log(event.currentTarget)
    const reason = document.getElementById('icon_prefix2');
    window.open(`https://api.whatsapp.com/send?phone=51966422821&text=${replaceString(reason.value)}`)
  } else if (event.target.id === 'contacta-santiago-wasap') {
    const reason = document.getElementById('icon_prefix2');
    window.open(`https://api.whatsapp.com/send?phone=51984119144&text=${replaceString(reason.value)}`)
  } else if (event.target.id === 'contacta-amelie-wasap') {
    const reason = document.getElementById('icon_prefix2');
    window.open(`https://api.whatsapp.com/send?phone=51987959553&text=${replaceString(reason.value)}`)
  }
});
