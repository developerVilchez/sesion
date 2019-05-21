const root = document.querySelector('#root');

root.addEventListener('click', (event) => {
  if (event.target.id === 'start-now' || event.target.id === 'start-now-mobile' || event.target.id === 'start-now-info' || event.target.id === 'choose-psico') {
    event.currentTarget.innerHTML = HeaderProfile() + SectionPsicoProfile(data)
  }; 
})