// En este archivo enumero las funciones propias.

function createList()
{
  // Esta función crea una lista HTML con los archivos disponibles.
  console.log("FALTA COMPLETAR createList()")
  // Si o si hace falta de una backend
  // const targetFolder = './pdf/';
  // const fs = require('fs');
  //
  // fs.readdir(targetFolder, (err, files) => {
  //   files.forEach(file => {
  //     console.log(file);
  //   });
  // });
}

function modificarEstadoNavbar()
{
  if(navbarResponsive.className == "navbar-collapse collapse show")
  {
    navbarResponsive.className = "navbar-collapse collapse";
  }else{
    navbarResponsive.className = "navbar-collapse collapse show";
  }
}
