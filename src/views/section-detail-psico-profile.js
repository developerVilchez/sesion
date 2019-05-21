const SectionDetailPsicoProfile = (psico) => {
  return `
    <section class="container">
      <div class="row">
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
                  <ul>
                    ${listaEspecialidadProfile(psico.especilidades)}
                  </ul>
                  <!-- Modal Trigger -->
                  <a class="waves-effect waves-light button-primary modal-trigger" href="#modal1" id=${psico.id}>Contactar</a>
                  ${ModalDetails(psico.id, psico.celular)}
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>`
}
