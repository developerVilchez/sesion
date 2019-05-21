$(document).ready(function(){
  $('.sidenav').sidenav();
});

const root = document.querySelector('#root');

root.addEventListener('click', (event) => {


  if (event.target.id === 'start-now' || event.target.id === 'start-now-mobile' || event.target.id === 'start-now-info' || event.target.id === 'choose-psico') {
    event.currentTarget.innerHTML = HeaderProfile() + SectionPsicoProfile(data); 
  };
   if (data.hasOwnProperty(event.target.id)){
    event.currentTarget.innerHTML = HeaderProfile() + SectionDetailPsicoProfile(data[event.target.id]);
    $('.modal').modal();
    const buttonWasap = document.querySelector('#psico-1-wasap');
    const reasonSesion = document.querySelector('#icon_prefix2');
    buttonWasap.addEventListener('click', (e) => {
      window.open(`https://api.whatsapp.com/send?phone=${e.target.dataset.phone}&text=${replaceString(reasonSesion.value)}`)
    })
   }
  });


