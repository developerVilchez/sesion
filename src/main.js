const htmlContainer = document.getElementById('navbar-container');
const root = document.getElementById('root');
const navbar = () => {
  return `<header class="hero">
  <nav class="container navbar" id="navbar-container">
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
  <div class="section">
    <!--   Icon Section   -->
    <div class="row">
      <div class="col s12 m4">
        <div class="icon-block">
          <h2 class="center brown-text"><i class="material-icons">flash_on</i></h2>
          <h5 class="center">Speeds up development</h5>
          <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="icon-block">
          <h2 class="center brown-text"><i class="material-icons">group</i></h2>
          <h5 class="center">User Experience Focused</h5>
          <p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="icon-block">
          <h2 class="center brown-text"><i class="material-icons">settings</i></h2>
          <h5 class="center">Easy to work with</h5>
          <p class="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</header>`  
}
htmlContainer.addEventListener('click', (event) => {
  console.log(event.target.id);
  if(event.target.id === 'start-now'){
    root.innerHTML = navbar();
  }
})