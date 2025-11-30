// funcoes.js
// Adapte BASE_URL se necessário
const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
  "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const postsContainer = document.querySelector("#tarefaDia"); // container onde os dados serão renderizados

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

  let liTag = "";

  // dias do mês anterior (inativos)
  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  // dias do mês atual
  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday = i === date.getDate() && currMonth === new Date().getMonth()
      && currYear === new Date().getFullYear() ? "active" : "";
    // removi id duplicado e não uso um botão extra: o próprio clique no dia chama abrirDiv
    liTag += `<li class="${isToday}" onclick="abrirDiv(${i}, ${currMonth}, ${currYear})">${i}</li>`;
  }

  // dias do próximo mês (inativos)
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};

renderCalendar();

prevNextIcon.forEach(icon => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});

function fecharDiv() {
  const tarefaDiaEl = document.getElementById('tarefaDia');
  const semDivEl = document.getElementById('semDiv');
  if (tarefaDiaEl) tarefaDiaEl.style.display = 'none';
  if (semDivEl) semDivEl.style.display = 'none';
}

async function fetchAndRenderClients(dataKey) {
  const BASE_URL = "http://localhost:3000/client";

  try {
    const apiResponse = await fetch(BASE_URL);
    if (!apiResponse.ok) throw new Error(`Erro na requisição: ${apiResponse.status} ${apiResponse.statusText}`);
    const parsedResponse = await apiResponse.json();
    console.log("parsedResponse", parsedResponse);

    if (!postsContainer) {
      console.warn("#tarefaDia não encontrado para renderizar itens.");
      return;
    }

    // Limpa antes de renderizar (mantém um título com a data)
    postsContainer.innerHTML = `<strong>Tarefa diária: ${dataKey}</strong><div class="itens"></div>`;
    const itensContainer = postsContainer.querySelector('.itens');

    // Se o servidor retornar um campo de data nos objetos, filtramos por dataKey.
    // Ajuste os nomes ('data', 'date', 'dataKey') conforme o formato real dos seus objetos.
    let items = parsedResponse;
    if (dataKey) {
      items = parsedResponse.filter(p => {
        if (p.data) return p.data === dataKey;
        if (p.date) return p.date === dataKey;
        if (p.dataKey) return p.dataKey === dataKey;
        // se não houver campo de data, mantemos todos (ou mude para `return false;` se preferir nenhum)
        return true;
      });
    }

    if (items.length === 0) {
      itensContainer.innerHTML = "<p>Não há tarefas para esta data.</p>";
      return;
    }

    items.forEach((post) => {
      const div = document.createElement("div");
      div.className = "tarefa-item";

      const title = document.createElement("h2");
      const body = document.createElement("p");
      const link = document.createElement("a");

      title.innerText = post.nome ?? "Sem nome";
      body.innerText = post.endereco ?? "Sem endereço";
      link.innerText = post.id ? `ID: ${post.id}` : "";

      // Se quiser um link funcional:
      if (post.id) {
        link.href = `#cliente-${post.id}`;
      }

      div.appendChild(title);
      div.appendChild(body);
      div.appendChild(link);
      itensContainer.appendChild(div);
    });
  } catch (err) {
    console.error("Falha ao carregar dados:", err);
    if (postsContainer) postsContainer.innerHTML = `<p>Erro ao carregar dados: ${err.message}</p>`;
  }
}

function abrirDiv(dia, mes, ano) {

  const tarefaDiaEl = document.getElementById('tarefaDia');
  const semDivEl = document.getElementById('semDiv');
  if (tarefaDiaEl) tarefaDiaEl.style.display = 'block';
  if (semDivEl) semDivEl.style.display = 'block';


  const diaFormatado = dia.toString().padStart(2, '0');
  const mesFormatado = (mes + 1).toString().padStart(2, '0');
  const dataKey = `${ano}-${mesFormatado}-${diaFormatado}`;
  console.log("Abrindo div para data:", dataKey);


  fetchAndRenderClients(dataKey);
}


// document.addEventListener('DOMContentLoaded', () => abrirDiv(new Date().getDate(), new Date().getMonth(), new Date().getFullYear()));