

const viewProfiles = () => {
  return `<header class="hero">
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
  <div class="container>
  <div class="section" id="section-container-psico-view">
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
</div>
</header>`  
}

const viewPaloma = () => {
  return `
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
  <div class="section">
  <div class="row">
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
            <div class="row">
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
            </div>
            <h4>¿Cuántas sesiones deseas tomar?</h4>
            <input type="radio" name="planes" value="1">Una sesión<br>
            <input type="radio" name="planes" value="4">Paquete de 4 sesiones<br>
            <input type="radio" name="planes" value="0">Todavía no lo decido
            <h4>¿Qué te animó a iniciar una sesión?</h4>
            <div class="row">
            <div class="input-field col s6">
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
      </div>
      </div>`
}


const viewSantiago = () => {
 return ` <nav class="container navbar" id="navbar-container-psico-view-santiago">
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
 <div class="section">
 <div class="row">
   <div class="col s12">
     <div class="icon-block">
       <h2 class="center brown-text"><img class="circle responsive-img profile" src="images/santiago.png"/></h2>
       <h5 class="center">Santiago Joseph</h5>
       <p class="light">Lic. En Psicología Clínica y Mg. en Estudios Teóricos en Psicoanálisis</p>
     </div>
     </div>
     </div>
     </div>`
}

const viewAmelie = () => {
  return `
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
  <div class="section">
  <div class="row">
    <div class="col s12">
      <div class="icon-block">
        <h2 class="center brown-text"><img class="circle responsive-img profile" src="images/amelie.png"/></h2>
        <h5 class="center">Amelie</h5>
        <p class="light">Bachiller en Psicología y psicoterapeuta psicoanalítica</p>
      </div>
      </div>
      </div>
      </div>`
}

const htmlContainer = document.getElementById('navbar-container');

htmlContainer.addEventListener('click', (event) => {
  const root = document.getElementById('root');
  if(event.target.id === 'start-now'){
      root.innerHTML = viewProfiles();
    }; 
  const htmlContainerProfileView = document.getElementById('navbar-container-psico-view');
  const htmlSectionProfileView = document.getElementById('section-container-psico-view');
  htmlContainerProfileView.addEventListener('click', (event) => {
      if(event.target.className === 'img-logo'){
        window.location = 'index.html';
      };
   });
   htmlSectionProfileView.addEventListener('click', (event) => {
    if(event.target.id === 'psico-paloma'){
      root.innerHTML = viewPaloma();
      const navbarPaloma = document.getElementById('navbar-container-psico-view-paloma');
      navbarPaloma.addEventListener('click', (event) => {
        if(event.target.className === 'img-logo'){
          window.location = 'index.html';
        };
      });
      const contactarWasap = document.getElementById('contacto-paloma');
      contactarWasap.addEventListener('click', () => {
          $('.modal').modal();
      })
      const wasap = document.getElementById('contacta-paloma-wasap');
      wasap.addEventListener('click', () => {
        window.open('https://api.whatsapp.com/send?phone=51955412932&text=Hola!%20Quiero%20generar%20mas%20ventas')
      })
    }
    //   const contactarWasap = document.getElementById('contacto-paloma');
    //   contactarWasap.addEventListener('click', () => {
    //     });
    //    // window.open('https://api.whatsapp.com/send?phone=51955412932&text=Hola!%20Quiero%20generar%20mas%20ventas')
    // }
    else if(event.target.id === 'psico-santiago'){
      root.innerHTML = viewSantiago();
      const navbarSantiago = document.getElementById('navbar-container-psico-view-santiago');
      navbarSantiago.addEventListener('click', (event) => {
        if(event.target.className === 'img-logo'){
          window.location = 'index.html';
        };
      })
    }
    else {
      root.innerHTML = viewAmelie();
      const navbarAmelie = document.getElementById('navbar-container-psico-view-amelie');
      navbarAmelie.addEventListener('click', (event) => {
        if(event.target.className === 'img-logo'){
          window.location = 'index.html';
        };
      });
    };
   })
});