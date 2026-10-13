// BANCO DE DADOS DOS VEÍCULOS (5 CARROS E 5 MOTOS COM FIPES E IMAGENS REAIS)
const vehiclesData = [
  // CARROS
  {
    id: 1,
    type: 'carro',
    title: 'Porsche 911 Carrera S',
    year: '2022/2022',
    km: '12.500 km',
    fuel: 'Gasolina',
    transmission: 'Automático PDK',
    color: 'Vermelho Rosso',
    fipe: 'R$ 980.000,00',
    price: 945000,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80',
    desc: 'Exemplar impecável na cor clássica de alta performance. Revisado em concessionária oficial, laudo cautelar 100% aprovado.'
  },
  {
    id: 2,
    type: 'carro',
    title: 'BMW M4 Competition Coupe',
    year: '2021/2022',
    km: '18.000 km',
    fuel: 'Gasolina',
    transmission: 'Automático',
    color: 'Preto Cadastrado',
    fipe: 'R$ 685.000,00',
    price: 660000,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    desc: 'Motor bi-turbo de alta resposta, acabamento interno em fibra de carbono, bancos esportivos e escapamento esportivo original.'
  },
  {
    id: 3,
    type: 'carro',
    title: 'Audi RS6 Avant Quattro',
    year: '2023/2023',
    km: '8.200 km',
    fuel: 'Gasolina/Híbrido',
    transmission: 'Automático',
    color: 'Branco Glacier',
    fipe: 'R$ 1.150.000,00',
    price: 1090000,
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
    desc: 'Super perua esportiva com tração integral Quattro. Espaço familiar com o desempenho lendário da linha RS Audi.'
  },
  {
    id: 4,
    type: 'carro',
    title: 'Mercedes-AMG GT R',
    year: '2020/2020',
    km: '15.400 km',
    fuel: 'Gasolina',
    transmission: 'Automático DCT',
    color: 'Amarelo / Dourado Matte',
    fipe: 'R$ 1.400.000,00',
    price: 1350000,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
    desc: 'Besta de Affalterbach. Design aerodinâmico avançado, freios de cerâmica e suspensão adaptativa para circuito.'
  },
  {
    id: 5,
    type: 'carro',
    title: 'Ford Mustang GT V8 Black Edition',
    year: '2021/2021',
    km: '22.000 km',
    fuel: 'Gasolina',
    transmission: 'Automático 10v',
    color: 'Preto Shadow',
    fipe: 'R$ 440.000,00',
    price: 419000,
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=800&q=80',
    desc: 'Puro Muscle Car americano com ronco inconfundível do motor V8 5.0. Pacote visual escurecido e modo pista de pilotagem.'
  },

  // MOTOS
  {
    id: 6,
    type: 'moto',
    title: 'Ducati Panigale V4 S',
    year: '2023/2023',
    km: '3.100 km',
    fuel: 'Gasolina',
    transmission: 'Manual 6v',
    color: 'Vermelho Ducati',
    fipe: 'R$ 162.000,00',
    price: 155000,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    desc: 'Tecnologia derivada diretamente da MotoGP. Carenagem aerodinâmica com asas laterais, suspensão eletrônica Öhlins.'
  },
  {
    id: 7,
    type: 'moto',
    title: 'BMW S1000RR M Package',
    year: '2022/2022',
    km: '9.500 km',
    fuel: 'Gasolina',
    transmission: 'Manual 6v',
    color: 'Branco/Azul/Vermelho M',
    fipe: 'R$ 128.000,00',
    price: 122000,
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
    desc: 'Rodas de carbono M, Quickshifter bidirecional e múltiplos modos de pilotagem configuráveis para pista e estrada.'
  },
  {
    id: 8,
    type: 'moto',
    title: 'Kawasaki Ninja ZX-10R',
    year: '2021/2022',
    km: '11.000 km',
    fuel: 'Gasolina',
    transmission: 'Manual 6v',
    color: 'Preto / Verde KRT',
    fipe: 'R$ 105.000,00',
    price: 99800,
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80',
    desc: 'Hexacampeã do Mundial de Superbike. Piloto automático, painel TFT com conectividade e controle de tração avançado.'
  },
  {
    id: 9,
    type: 'moto',
    title: 'Harley-Davidson Fat Boy 114',
    year: '2020/2021',
    km: '14.200 km',
    fuel: 'Gasolina',
    transmission: 'Manual 6v',
    color: 'Preto Vivid Black',
    fipe: 'R$ 98.000,00',
    price: 93500,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    desc: 'Ícone das estradas. Rodas disco sólidas de alumínio, pneu traseiro largo de 240mm e forte torque do motor Milwaukee-Eight 114.'
  },
  {
    id: 10,
    type: 'moto',
    title: 'Yamaha YZF-R1 World GP Edition',
    year: '2022/2022',
    km: '5.800 km',
    fuel: 'Gasolina',
    transmission: 'Manual 6v',
    color: 'Branco / Dourado',
    fipe: 'R$ 138.000,00',
    price: 132000,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    desc: 'Edição comemorativa de 60 anos em corridas. Motor com virabrequim Crossplane e sistema de controle de frenagem BC.'
  }
];

// UTILITÁRIO DE FORMATAÇÃO DE MOEDA
function formatCurrency(val) {
  return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// INICIALIZAÇÃO QUANDO O DOM ESTIVER PRONTO
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog('all');
  renderDownloadSection();
  setupFilters();
  setupSimulator();
  setupModal();
});

// FUNÇÃO PARA RENDERIZAR O CATÁLOGO
function renderCatalog(filter) {
  const container = document.getElementById('vehiclesContainer');
  container.innerHTML = '';

  const filtered = filter === 'all' 
    ? vehiclesData 
    : vehiclesData.filter(v => v.type === filter);

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'vehicle-card';
    card.innerHTML = `
      <div class="vehicle-img-wrapper">
        <span class="badge-type">${item.type === 'carro' ? 'Carro' : 'Moto'}</span>
        <img src="${item.image}" alt="${item.title}" loading="lazy">
      </div>
      <div class="vehicle-details">
        <h3 class="vehicle-title">${item.title}</h3>
        <div class="specs-grid">
          <div><i class="fa-solid fa-calendar"></i> ${item.year}</div>
          <div><i class="fa-solid fa-gauge-high"></i> ${item.km}</div>
          <div><i class="fa-solid fa-gas-pump"></i> ${item.fuel}</div>
          <div><i class="fa-solid fa-palette"></i> ${item.color}</div>
        </div>
        <div class="fipe-badge">
          Tabela FIPE: <strong>${item.fipe}</strong>
        </div>
        <div class="price-box">
          <div>
            <div class="price-label">Preço Scuderia</div>
            <div class="price-value">${formatCurrency(item.price)}</div>
          </div>
        </div>
        <div class="card-actions">
          <button class="btn btn-outline" onclick="openVehicleModal(${item.id})">Detalhes</button>
          <a href="https://wa.me/5511999998888?text=Olá,%20tenho%20interesse%20no%20veículo%20${encodeURIComponent(item.title)}" target="_blank" class="btn btn-red"><i class="fa-brands fa-whatsapp"></i> Tenho Interesse</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// FILTROS
function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCatalog(btn.dataset.filter);
    });
  });
}

// SIMULADOR DE FINANCIAMENTO
function setupSimulator() {
  const priceInput = document.getElementById('simVehiclePrice');
  const downInput = document.getElementById('simDownPayment');
  const termInput = document.getElementById('simTerm');
  const resultDiv = document.getElementById('simResultValue');
  const btnWhatsapp = document.getElementById('btnSolicitarFinan');

  function calculate() {
    const price = parseFloat(priceInput.value) || 0;
    const down = parseFloat(downInput.value) || 0;
    const term = parseInt(termInput.value) || 48;
    
    const financed = price - down;
    if (financed <= 0) {
      resultDiv.innerText = 'R$ 0,00';
      return;
    }

    // Taxa de juros estimada: 1.49% a.m.
    const monthlyRate = 0.0149;
    const pmt = (financed * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
    
    resultDiv.innerText = formatCurrency(pmt);
  }

  priceInput.addEventListener('input', calculate);
  downInput.addEventListener('input', calculate);
  termInput.addEventListener('change', calculate);
  calculate();

  btnWhatsapp.addEventListener('click', () => {
    const text = `Olá! Gostaria de solicitar análise de financiamento:%0A` +
      `- Valor do Veículo: ${formatCurrency(parseFloat(priceInput.value))}%0A` +
      `- Entrada: ${formatCurrency(parseFloat(downInput.value))}%0A` +
      `- Prazo: ${termInput.value} parcelas%0A` +
      `- Estimativa da Parcela: ${resultDiv.innerText}`;
    window.open(`https://wa.me/5511999998888?text=${text}`, '_blank');
  });
}

// MODAL DE DETALHES
function setupModal() {
  const modal = document.getElementById('vehicleModal');
  const closeBtn = document.getElementById('modalClose');

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
}

function openVehicleModal(id) {
  const item = vehiclesData.find(v => v.id === id);
  if (!item) return;

  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <img src="${item.image}" class="modal-img" alt="${item.title}">
    <h2 class="modal-title">${item.title}</h2>
    <div class="modal-price-tag">${formatCurrency(item.price)}</div>
    
    <div class="modal-details-grid">
      <div><strong>Tipo:</strong> ${item.type === 'carro' ? 'Carro' : 'Moto'}</div>
      <div><strong>Ano:</strong> ${item.year}</div>
      <div><strong>Quilometragem:</strong> ${item.km}</div>
      <div><strong>Combustível:</strong> ${item.fuel}</div>
      <div><strong>Câmbio:</strong> ${item.transmission}</div>
      <div><strong>Cor:</strong> ${item.color}</div>
      <div><strong>Ref. Tabela FIPE:</strong> ${item.fipe}</div>
    </div>

    <p style="color: var(--text-gray); margin-bottom: 25px;">${item.desc}</p>

    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
      <a href="https://wa.me/5511999998888?text=Quero%20negociar%20o%20${encodeURIComponent(item.title)}" target="_blank" class="btn btn-red" style="flex: 1;"><i class="fa-brands fa-whatsapp"></i> Falar com Consultor</a>
      <a href="${item.image}" target="_blank" download class="btn btn-gold"><i class="fa-solid fa-download"></i> Baixar Foto HD</a>
    </div>
  `;

  document.getElementById('vehicleModal').classList.add('active');
}

// SEÇÃO DE DOWNLOADS DAS IMAGENS
function renderDownloadSection() {
  const dlContainer = document.getElementById('downloadContainer');
  dlContainer.innerHTML = '';

  vehiclesData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'dl-card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h4>${item.title}</h4>
      <p><i class="fa-solid fa-shield"></i> Domínio Público / Unsplash</p>
      <a href="${item.image}" target="_blank" download class="btn btn-gold btn-outline" style="font-size: 0.75rem; padding: 6px 12px;">
        <i class="fa-solid fa-download"></i> Abrir / Download
      </a>
    `;
    dlContainer.appendChild(card);
  });
}