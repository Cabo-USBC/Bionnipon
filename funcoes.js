const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
              "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), 
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), 
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), 
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); 
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}" onclick="abrirDiv(${i}, ${currMonth}, ${currYear})">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`

    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();
prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => { 
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth(); 
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});


function abrirDiv(dia, mes, ano) {
  document.getElementById('tarefaDia').style.display = 'block';
  document.getElementById('semDiv').style.display = 'block';

  let diaFormatado = dia.toString().padStart(2, '0');
  let mesFormatado = (mes + 1).toString().padStart(2, '0');
  let dataKey = `${ano}-${mesFormatado}-${diaFormatado}`;


  fetch('https://bionnipon.com/servico.json')                  // ajustar para a rota correta
    .then(response => response.json())
    .then(eventos => {
      let info = eventos[dataKey];
      if (info) {                                           // ajustar para a estrutura correta do JSON
        document.getElementById('tarefaDia').innerHTML = `
          <strong>${info.tipo}</strong><br>
          <span>${info.prazo}</span><br>
          <span>${info.garantia}</span><br>
          <span>${info.clienteId}</span><br>
          <span>${info.id}</span><br>
          <span>${info.data}</span><br>
          <small>${dia}/${mes + 1}/${ano}</small>
        `;
      } else {
        document.getElementById('tarefaDia').innerHTML = `Sem evento<br><small>${dia}/${mes + 1}/${ano}</small>`;
      }
    })
    .catch(error => {
      document.getElementById('tarefaDia').innerHTML = `Erro ao carregar eventos.`;
      console.error(error);
    });
}
function fecharDiv() {
    document.getElementById('tarefaDia').style.display = 'none';
    document.getElementById('semDiv').style.display = 'none';
}