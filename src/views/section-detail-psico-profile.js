const SectionDetailPsicoProfile = (psico) => {
  return `
    <section class="row">
      <div class="col s12">
        <div class="icon-profile">
          <h2 class="center brown-text"><img class="circle responsive-img profile" src=${psico.imagen} /></h2>
          <h5 class="center">${psico.nombre}</h5>
          <p class="light">${psico.formacion}</p>
        </div>
        <div class="icon-profile">
          <h3>Especialista en: </h3> 
          <ul>
            ${listaEspecialidadProfile(psico.especilidades)}
          </ul>
          <!-- Modal Trigger -->
          <a class="waves-effect waves-light btn modal-trigger" href="#modal1" id=${psico.id}>Contactar</a>
           ${ModalDetails(psico.id, psico.celular)}
        </div>
    </section>`
}
