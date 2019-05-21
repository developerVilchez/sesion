const listaEspecialidadProfile = (arr) => {
  let string = `<ul class="bullet-list">`;
   arr.forEach(str => {
     string += `<li>${str}</li>`
   });
  string += `<ul/>`
 return string;
}