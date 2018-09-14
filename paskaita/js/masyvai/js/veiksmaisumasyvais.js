/
function spausdintiMasyvaISarasa(array) {
  document.write("<ol>");
  for (var i = 0; i < array.length; i++) {
    document.write("<li>"+array[i]+"</li>");
  }
  document.write("</ol>");
}

// komentaras apie funkcija
function spausdintiObjektuMasyvaILentele(objectArray){
  document.write("<table border=1>");
  for (var i = 0; i < objectArray.length; i++) {
    document.write("<tr>");
    document.write("<td>"+objectArray[i].name+"</td>");
    document.write("<td>"+objectArray[i].surname+"</td>");
    document.write("<td>"+objectArray[i].age+"</td>");
    document.write("</tr>");
  }
  document.write("</table>");
}
