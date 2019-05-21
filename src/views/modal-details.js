const ModalDetails = (id, mobile) => {
  return `
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
      <a href="#!" class="modal-close waves-effect waves-green btn-flat" id=${id} data-phone=${mobile}>Inicia Sesión</a>
    </div>
  </div>  
</div>`
}