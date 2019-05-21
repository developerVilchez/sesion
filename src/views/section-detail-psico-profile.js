const SectionDetailPsicoProfile = (psico) => {
  return `
  <div class="container">
    <section class="row">
      <div class="col s12">
        <div class="card">
          <div class="icon-profile">
            <div class="row icon-profile-wrapper">
              <div class="col s12 l4">
                <h2 class="center brown-text"><img class="circle responsive-img profile" src=${psico.imagen} /></h2>
              </div>
              <div class="col s12 l8">
                <h5 class="center">${psico.nombre}</h5>
                <p class="light">${psico.formacion}</p>
              </div>
            </div>
          </div>
          <div class="info-profile container">
            <div class="row">
              <div class="col s10 offset-s1 m12">
                <h5>Especialista en: </h5> 
                <ul class="bullet-list">
                  ${listaEspecialidadProfile(psico.especilidades)}
                </ul>


                <!-- Modal Trigger -->
                <a class="button-primary modal-trigger" href="#modal1" id=${psico.id}>Contactar</a>
              </div>
            </div> 
          </div>
        </div>  
      </div>
    </section>
   </div>

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
      <a href="#!" class="modal-close waves-effect waves-green btn-flat" id=${psico.id}-wasap data-phone=${psico.celular}>Inicia Sesión</a>
    </div>
  </div>  
</div>`
}
