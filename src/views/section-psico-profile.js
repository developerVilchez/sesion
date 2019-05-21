const SectionPsicoProfile = (psicos) => {
  let string = ``;
  const keysData = Object.keys(psicos);
  keysData.forEach((key, ind) => {
   string += `
   <div class="row" id=${ind}>
     <div class="col s12 m6 xl4">
       <div class="profile-preview card">
         <div class="icon-profile">
           <div class="center"><img class="circle responsive-img profile" src=${data[key].imagen} /></div>
           <h4 class="center">${data[key].nombre}</h4>
           <p class="caption light">${data[key].formacion}</p>
         </div>
         <div class="profile-content-block">
              <ul class="bullet-list">
                ${listaEspecialidadProfile(data[key].especilidades)}
              </ul>
            <a id=${keysData[ind]} class="button-secondary">Ver Perfil</a>
        </div>
     </div>
   </div>`
  })
  return string;
 }
 
 