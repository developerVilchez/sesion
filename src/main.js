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
    //console.log(event.target.className);
    if(event.target.id === 'psico-paloma'){
      root.innerHTML = 'Paloma';
    }
    else if(event.target.id === 'psico-santiago'){
      root.innerHTML = 'santiago';
    }
    else {
      root.innerHTML = 'amelie';
    }
   })
});