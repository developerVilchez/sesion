const listaEspecialidadProfile = (arr) => {
  let string = '';
   arr.forEach(str => {
     string += `<li>${str}</li>`
   });
 return string;
}