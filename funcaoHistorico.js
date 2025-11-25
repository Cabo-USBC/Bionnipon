// Exibe histórico de clientes para a data selecionada
async function ExibirHistorico(data) {
  const container = document.getElementById('listaHistorico');
  if (!container) return;

  container.innerHTML = '<p>Carregando...</p>';

  // Ajuste a URL abaixo conforme a rota real do seu cliente.routes.ts
  // Exemplo esperado: GET /clientes/historico?data=2025-11-25
  const url = `/clientes/historico?data=${encodeURIComponent(data)}`;

  try {
    const res = await fetch(url, { method: 'GET' });
    if (!res.ok) {
      throw new Error(`Erro no servidor: ${res.status} ${res.statusText}`);
    }
    const json = await res.json();

    renderizarLista(json, container);

  } catch (err) {
    console.error(err);
    container.innerHTML = `<p class="erro">Não foi possível carregar o histórico: ${err.message}</p>`;
  }
}

function renderizarLista(data, container) {
  container.innerHTML = ''; // limpa

  if (!data || (Array.isArray(data) && data.length === 0)) {
    container.innerHTML = '<p>Nenhum cliente atendido nessa data.</p>';
    return;
  }

  // Se o backend retornar um objeto com propriedade (ex: { clientes: [...] }), normalize:
  let lista = Array.isArray(data) ? data : (data.clientes || data.items || []);

  if (!Array.isArray(lista) || lista.length === 0) {
    container.innerHTML = '<p>Nenhum cliente atendido nessa data.</p>';
    return;
  }

  const ul = document.createElement('ul');
  ul.className = 'historico-lista';

  lista.forEach(item => {
    const li = document.createElement('li');
    li.className = 'historico-item';

    // Suporta nomes de campos comuns; ajuste conforme seu JSON real
    const nome = item.nome || item.name || '—';
    const horario = item.horario || item.time || item.hora || '—';
    const procedimento = item.procedimento || item.procedure || item.servico || '—';
    const observacao = item.observacao || item.obs || '';

    li.innerHTML = `
      <div class="item-header">
        <strong class="item-nome">${escapeHtml(nome)}</strong>
        <span class="item-horario">${escapeHtml(horario)}</span>
      </div>
      <div class="item-body">
        <span class="item-procedimento">Procedimento: ${escapeHtml(procedimento)}</span>
        ${observacao ? `<div class="item-obs">Obs: ${escapeHtml(observacao)}</div>` : ''}
      </div>
    `;

    ul.appendChild(li);
  });

  container.appendChild(ul);
}

// Pequena função para escapar HTML e evitar injeções
function escapeHtml(str) {
  if (!str && str !== 0) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Inicialização: seta data atual e liga eventos
document.addEventListener('DOMContentLoaded', () => {
  const inputData = document.getElementById('dataHistorico');
  const btn = document.getElementById('btnConsultar');

  if (!inputData) return;

  // Define hoje como padrão
  const hoje = new Date();
  const yyyy = hoje.getFullYear();
  const mm = String(hoje.getMonth() + 1).padStart(2, '0');
  const dd = String(hoje.getDate()).padStart(2, '0');
  inputData.value = `${yyyy}-${mm}-${dd}`;

  // Consultar ao carregar a página
  ExibirHistorico(inputData.value);

  // Consultar ao clicar no botão
  if (btn) {
    btn.addEventListener('click', () => {
      if (inputData.value) ExibirHistorico(inputData.value);
    });
  }

  // Também consultar automaticamente quando a data mudar
  inputData.addEventListener('change', () => {
    if (inputData.value) ExibirHistorico(inputData.value);
  });
});