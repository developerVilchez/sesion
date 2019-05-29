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
                <p class="light">${psico.bio}</p>
                <p>${psico.percepcion}</p>
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
  <div id="modal1" class="modal contact-modal">
    <div class="modal-content">
      
      <div class="row">
        <form class="col s12 m10 offset-m1">
          <h5>Información Previa</h5>
          <div class="input-field">
            <i class="material-icons prefix">account_circle</i>
            <input id="icon_prefix" type="text" class="validate">
            <label for="icon_prefix">Nombres y Apellidos</label>
          </div>
          <div class="input-field">
            <i class="material-icons prefix">phone_iphone</i>
            <input id="icon_telephone" type="tel" class="validate">
            <label for="icon_telephone">Celular</label>
            <span class="helper-text" data-error="Ingresa un número telefónico válido"></span>
          </div>
          <div class="input-field">
            <i class="material-icons prefix">email</i>
            <input id="icon_email" type="email" class="validate">
            <label for="icon_email">Email</label>
            <span class="helper-text" data-error="Ingresa un email válido"></span>
          </div>
          <h5>¿Cuántas sesiones deseas tomar?</h5>
          <div class="input-field">
            <p>
              <label>
                <input class="with-gap" name="planes" type="radio" value="1"/>
                <span>Una sesión</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="planes" type="radio" value="4"/>
                <span>Paquete de 4 sesiones</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="planes" type="radio" value="0"/>
                <span>Todavía no lo decido</span>
              </label>
            </p>
          </div>
          <h5>¿Qué te animó a iniciar una sesión?</h5>
          <div class="input-field">
            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
            <label for="icon_prefix2">Cuéntame</label>
          </div>

          <a href="#!" class="modal-close button-primary" id=${psico.id}-wasap data-phone=${psico.celular}>Inicia Sesión</a>
        </form>

      </div>
    </div>
  </div>  
</div>`
}
