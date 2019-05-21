const root = document.querySelector('#root');

root.addEventListener('click', (event) => {
  if (event.target.id === 'start-now' || event.target.id === 'start-now-mobile' || event.target.id === 'start-now-info' || event.target.id === 'choose-psico') {
    event.currentTarget.innerHTML = HeaderProfile() + SectionPsicoProfile(data)
  };
   if (data.hasOwnProperty(event.target.id)){
    event.currentTarget.innerHTML = HeaderDetailProfile() + SectionDetailPsicoProfile(data[event.target.id]);
    $('.modal').modal();
   }
})