/**
 * The Lay Dharma Household Bhāvanā — Theravāda Meditation Aggregate
 * Main Application Controller: Traditions Explorer, Deep Study Portal,
 * Master Comparative Matrix, 40 Kammaṭṭhānas Explorer, 16 Stages of Insight,
 * Five Hindrances Diagnostic, Sutta Library, Practice Journal, and Meditation Timer.
 */

import { LINEAGE_CLUSTERS, MEDITATION_LINEAGES } from './data/meditationLineagesData.js';
import { TEMPERAMENTS, FORTY_KAMMATTHANAS, SIXTEEN_INSIGHT_NANAS, FIVE_HINDRANCES, LINEAGE_COMPARISON_MATRIX } from './data/comparativeToolsData.js';
import { SUTTA_MEDITATION_CORPUS } from './data/suttaMeditationCorpusData.js';

// Global App State
const state = {
  lang: localStorage.getItem('bhavana_lang') || 'en',
  activeCluster: 'ebt',
  selectedLineageId: null,
  activePortalTab: 'method',
  temperamentFilter: 'all',
  activeToolTab: 'comparison',
  ebtDifficultyFilter: 'all',
  searchQuery: ''
};

// UI Strings Dictionary
const I18N = {
  en: {
    siteTitle: "The Lay Dharma Household Bhāvanā",
    siteSubtitle: "Theravāda Meditation Aggregate & Lineage Study Portal",
    badgeCluster: "TRADITIONS & LINEAGES",
    searchPlaceholder: "Search lineages, methods, masters, Pāli terms...",
    allCluster: "All Traditions",
    primaryMastersLabel: "Lineage Masters:",
    canonicalSourceLabel: "Canonical Root:",
    primaryAnchorLabel: "Primary Anchor:",
    approachJhanaLabel: "Approach to Jhāna:",
    notingStyleLabel: "Noting / Verbalization:",
    exploreTraditionBtn: "Study Method & Teachings →",
    backToListBtn: "← Back to Lineages Explorer",
    tabMethod: "Method & Steps",
    tabAttainments: "Obstacles & Jhāna",
    tabPali: "Pāli Terminology",
    toolsSectionTitle: "Master Comparative Tools & Diagnostics",
    toolsSubtitle: "Encyclopedic comparative frameworks across all Theravāda branches",
    tabToolComparison: "Lineage Comparison Table",
    tabTool40: "40 Kammaṭṭhānas Explorer",
    tabTool16Nanas: "16 Stages of Insight (Visuddhiñāṇa)",
    tabToolHindrances: "Five Hindrances Diagnostic",
    tabToolSuttas: "Canonical Sutta Corpus",
    filterTemperamentLabel: "Filter by Dominant Temperament (Carita):",
    maxAttainmentLabel: "Max Attainment:",
    pitfallsLabel: "Key Symptoms & Pitfalls:",
    simileLabel: "Canonical Simile:",
    canonicalCauseLabel: "Root Condition / Cause:",
    lineageRemediesLabel: "Tradition-Specific Antidotes:",

    colTradition: "Tradition / Lineage",
    colAnchor: "Primary Anchor",
    colNoting: "Noting Style",
    colJhana: "Approach to Jhāna",
    colVedana: "Vedanā (Sensation)",
    colLay: "Lay Feasibility",
    readSuttaCentral: "Read Full Text on SuttaCentral ↗",
    curriculumTitle: "Gradual Training Study Path (Anupubbasikkhā)",
    curriculumSubtitle: "Systematic canonical progression: somatic grounding → core concentration → deep insight & emptiness",
    curriculumTitleThai: "Thai Forest Kammaṭṭhāna Study Path",
    curriculumSubtitleThai: "Systematic wilderness progression: solitary grounding → breath & fear transcendence → radiant emptiness",
    curriculumTitleBurmese: "Burmese Vipassanā & Samatha Study Path",
    curriculumSubtitleBurmese: "Classical Visuddhimagga & noting methodologies: bare attention → somatic scanning → insight knowledges",
    curriculumTitleSriLanka: "Sri Lankan Forest Hermitage Study Path",
    curriculumSubtitleSriLanka: "Island Hermitage & analytical deep wisdom: solitary presence → deconstructing concepts → radical emptiness",
    curriculumTitleModern: "Modern & Sutta Integration Study Path",
    curriculumSubtitleModern: "Contemporary bridges for householders: accessible jhāna & plain English → psychological wisdom → ways of looking",
    lvlAll: "All",
    lvlFoundational: "Foundations",
    lvlIntermediate: "Intermediate",
    lvlAdvanced: "Advanced",
    phaseOrderPrefix: "Step",
    phaseOrderOf: "in Study Path",
    prereqLabel: "Suggested Foundation:",
    whyStudyLabel: "Why Study at This Stage:"
  },
  pt: {
    siteTitle: "O Mārga da Bhāvanā Leiga",
    siteSubtitle: "Agregador de Estudos de Meditação & Linhagens do Theravāda",
    badgeCluster: "TRADIÇÕES & LINHAGENS",
    searchPlaceholder: "Pesquisar linhagens, métodos, mestres, termos Pāli...",
    allCluster: "Todas as Tradições",
    primaryMastersLabel: "Mestres da Linhagem:",
    canonicalSourceLabel: "Fonte Canônica:",
    primaryAnchorLabel: "Âncora Primária:",
    approachJhanaLabel: "Abordagem dos Jhānas:",
    notingStyleLabel: "Rotulação Mental:",
    exploreTraditionBtn: "Estudar Método & Ensinamentos →",
    backToListBtn: "← Retornar ao Explorador de Linhagens",
    tabMethod: "Método & Passos",
    tabAttainments: "Obstáculos & Jhāna",
    tabPali: "Terminologia Pāli",
    toolsSectionTitle: "Ferramentas Comparativas & Diagnósticos",
    toolsSubtitle: "Estruturas analíticas e comparativas de todas as vertentes do Theravāda",
    tabToolComparison: "Tabela Comparativa de Linhagens",
    tabTool40: "Os 40 Kammaṭṭhānas",
    tabTool16Nanas: "Os 16 Estágios de Insight (Visuddhiñāṇa)",
    tabToolHindrances: "Diagnóstico dos Cinco Obstáculos",
    tabToolSuttas: "Corpus Canônico de Suttas",
    filterTemperamentLabel: "Filtrar por Temperamento Predominante (Carita):",
    maxAttainmentLabel: "Nível Máximo:",
    pitfallsLabel: "Sintomas & Armadilhas:",
    simileLabel: "Símile Canônico:",
    canonicalCauseLabel: "Causa Condicional Primária:",
    lineageRemediesLabel: "Antídotos por Tradição:",

    colTradition: "Tradição / Linhagem",
    colAnchor: "Âncora Primária",
    colNoting: "Estilo de Rotulação",
    colJhana: "Visão sobre Jhānas",
    colVedana: "Manejo de Sensações (Vedanā)",
    colLay: "Praticabilidade Leiga",
    readSuttaCentral: "Ler Texto Completo no SuttaCentral ↗",
    curriculumTitle: "Caminho do Treinamento Gradual (Anupubbasikkhā)",
    curriculumSubtitle: "Progressão canônica sistemática: enraizamento somático → concentração profunda → sabedoria & vacuidade",
    curriculumTitleThai: "Caminho de Estudo Kammaṭṭhāna da Floresta",
    curriculumSubtitleThai: "Progressão canônica da selva: solitude e enraizamento → superação do medo e respiração → vacuidade radiante",
    curriculumTitleBurmese: "Caminho de Estudo Vipassanā & Samatha da Birmânia",
    curriculumSubtitleBurmese: "Metodologias clássicas do Visuddhimagga & rotulação: atenção nua → varredura somática → estágios de insight",
    curriculumTitleSriLanka: "Caminho de Estudo dos Eremitérios do Sri Lanka",
    curriculumSubtitleSriLanka: "Eremitério da Ilha & sabedoria analítica profunda: presença solitária → desconstrução conceitual → vacuidade radical",
    curriculumTitleModern: "Caminho de Integração Contemporânea & Suttas",
    curriculumSubtitleModern: "Pontes contemporâneas para leigos: jhānas acessíveis & clareza direta → sabedoria psicológica → modos de contemplação",
    lvlAll: "Todos",
    lvlFoundational: "Fundamentos",
    lvlIntermediate: "Intermediário",
    lvlAdvanced: "Avançado",
    phaseOrderPrefix: "Passo",
    phaseOrderOf: "no Caminho de Estudo",
    prereqLabel: "Fundamento Sugerido:",
    whyStudyLabel: "Por Que Estudar nesta Fase:"
  }
};

// Render Cluster Filter Tabs
function renderClusterTabs() {
  const container = document.getElementById('clusterTabsContainer');
  if (!container) return;

  container.innerHTML = LINEAGE_CLUSTERS.map(c => `
    <button class="cluster-pill ${state.activeCluster === c.id ? 'active' : ''}" data-cluster="${c.id}">
      <span class="cluster-icon">${c.icon}</span>
      <span class="cluster-label">${state.lang === 'pt' ? c.pt : c.en}</span>
    </button>
  `).join('');

  container.querySelectorAll('.cluster-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const clusterId = btn.getAttribute('data-cluster');
      state.activeCluster = clusterId;
      state.ebtDifficultyFilter = 'all';
      state.selectedLineageId = null; // Return to list view
      renderClusterTabs();
      renderAppView();
      const mainFlow = document.getElementById('mainContentFlow');
      if (mainFlow) mainFlow.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// Master App View Router
function renderAppView() {
  const grid = document.getElementById('traditionsGrid');
  const portalWrap = document.getElementById('deepStudyPortalWrap');
  const toolsSec = document.getElementById('masterToolsSection');
  const ebtCurriculum = document.getElementById('ebtCurriculumContainer');

  if (state.activeCluster === 'tools') {
    if (grid) grid.style.display = 'none';
    if (portalWrap) portalWrap.style.display = 'none';
    if (ebtCurriculum) ebtCurriculum.style.display = 'none';
    if (toolsSec) {
      toolsSec.style.display = 'block';
      renderMasterTools();
    }
    return;
  }

  // Hide tools section when on lineage traditions clusters
  if (toolsSec) toolsSec.style.display = 'none';

  if (state.selectedLineageId) {
    if (grid) grid.style.display = 'none';
    if (ebtCurriculum) ebtCurriculum.style.display = 'none';
    if (portalWrap) {
      portalWrap.style.display = 'block';
      renderDeepStudyPortal();
    }
  } else {
    if (portalWrap) portalWrap.style.display = 'none';
    if (ebtCurriculum) {
      if (state.activeCluster !== 'tools') {
        ebtCurriculum.style.display = 'block';
        renderEbtCurriculumNav();
      } else {
        ebtCurriculum.style.display = 'none';
      }
    }
    if (grid) {
      grid.style.display = 'grid';
      renderTraditionsGrid();
    }
  }
}

// Render EBT Curriculum Progression Navigator
function renderEbtCurriculumNav() {
  const container = document.getElementById('ebtCurriculumContainer');
  if (!container) return;
  const str = I18N[state.lang];

  let icon = '🧭';
  let title = str.curriculumTitle;
  let subtitle = str.curriculumSubtitle;

  if (state.activeCluster === 'thai-forest') {
    icon = '🌲';
    title = str.curriculumTitleThai;
    subtitle = str.curriculumSubtitleThai;
  } else if (state.activeCluster === 'burmese') {
    icon = '🇲🇲';
    title = str.curriculumTitleBurmese;
    subtitle = str.curriculumSubtitleBurmese;
  } else if (state.activeCluster === 'sri-lanka') {
    icon = '🇱🇰';
    title = str.curriculumTitleSriLanka;
    subtitle = str.curriculumSubtitleSriLanka;
  } else if (state.activeCluster === 'contemporary') {
    icon = '🧘';
    title = str.curriculumTitleModern;
    subtitle = str.curriculumSubtitleModern;
  }

  container.innerHTML = `
    <div class="curriculum-header">
      <div class="curriculum-title-wrap">
        <span class="curriculum-icon">${icon}</span>
        <div>
          <h3 class="curriculum-title">${title}</h3>
          <p class="curriculum-subtitle">${subtitle}</p>
        </div>
      </div>
    </div>
    <div class="curriculum-level-pills">
      <button class="level-pill ${state.ebtDifficultyFilter === 'all' ? 'active' : ''}" data-diff="all">
        <span>${str.lvlAll}</span>
      </button>
      <button class="level-pill stage-foundational ${state.ebtDifficultyFilter === 'foundational' ? 'active' : ''}" data-diff="foundational">
        <span>${str.lvlFoundational}</span>
      </button>
      <button class="level-pill stage-intermediate ${state.ebtDifficultyFilter === 'intermediate' ? 'active' : ''}" data-diff="intermediate">
        <span>${str.lvlIntermediate}</span>
      </button>
      <button class="level-pill stage-advanced ${state.ebtDifficultyFilter === 'advanced' ? 'active' : ''}" data-diff="advanced">
        <span>${str.lvlAdvanced}</span>
      </button>
    </div>
  `;

  container.querySelectorAll('.level-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      state.ebtDifficultyFilter = btn.getAttribute('data-diff');
      renderEbtCurriculumNav();
      renderTraditionsGrid();
    });
  });
}

// Render Traditions Grid
function renderTraditionsGrid() {
  const grid = document.getElementById('traditionsGrid');
  if (!grid) return;

  let list = MEDITATION_LINEAGES.slice();
  if (state.activeCluster !== 'tools') {
    list = list.filter(item => item.cluster === state.activeCluster);
  }

  // Curriculum Filtering & Progression Ordering for all specific traditions
  if (state.activeCluster !== 'tools') {
    if (state.ebtDifficultyFilter !== 'all') {
      list = list.filter(item => item.difficulty === state.ebtDifficultyFilter);
    }
    // Sort in recommended progressive curriculum order
    list.sort((a, b) => (a.curriculumOrder || 99) - (b.curriculumOrder || 99));
  }

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase().trim();
    list = list.filter(item => {
      const matchPali = item.paliTitle.toLowerCase().includes(q);
      const matchEn = item.title.en.toLowerCase().includes(q) || item.overview.en.toLowerCase().includes(q);
      const matchPt = item.title.pt.toLowerCase().includes(q) || item.overview.pt.toLowerCase().includes(q);
      const matchMasters = item.primaryMasters.toLowerCase().includes(q);
      return matchPali || matchEn || matchPt || matchMasters;
    });
  }

  const str = I18N[state.lang];

  grid.innerHTML = list.map(item => `
    <article class="tradition-card" data-id="${item.id}">
      <div class="tradition-card-header">
        <span class="tradition-num">${item.number}</span>
        <div class="tradition-badge-row">
          <span class="tradition-pali-badge">${item.paliTitle}</span>
          ${item.difficulty ? `
            <span class="difficulty-badge badge-${item.difficulty}">
              ${state.lang === 'pt' ? item.difficultyLabel.pt : item.difficultyLabel.en}
            </span>
          ` : ''}
        </div>
      </div>
      <h3 class="tradition-title">${state.lang === 'pt' ? item.title.pt : item.title.en}</h3>
      ${item.curriculumOrder ? `
        <div class="curriculum-step-tag">
          <span class="step-num-pill">${str.phaseOrderPrefix} ${item.curriculumOrder}</span>
          <span class="step-desc-text">${str.phaseOrderOf}</span>
        </div>
      ` : ''}
      <div class="tradition-meta">
        <span class="meta-label">${str.primaryMastersLabel}</span>
        <span class="meta-val">${item.primaryMasters}</span>
      </div>
      <div class="tradition-meta">
        <span class="meta-label">${str.canonicalSourceLabel}</span>
        <span class="meta-val highlight">${item.canonicalRef}</span>
      </div>
      <p class="tradition-tagline">“${state.lang === 'pt' ? item.tagline.pt : item.tagline.en}”</p>
      ${item.whyStudy ? `
        <div class="why-study-callout">
          <span class="why-study-label">${str.whyStudyLabel}</span>
          <p class="why-study-text">${state.lang === 'pt' ? item.whyStudy.pt : item.whyStudy.en}</p>
        </div>
      ` : ''}
      <div class="tradition-preview-grid">
        <div class="preview-box">
          <span class="box-label">${str.primaryAnchorLabel}</span>
          <p class="box-text">${state.lang === 'pt' ? item.primaryAnchor.pt : item.primaryAnchor.en}</p>
        </div>
        <div class="preview-box">
          <span class="box-label">${str.approachJhanaLabel}</span>
          <p class="box-text">${state.lang === 'pt' ? item.approachToJhana.pt : item.approachToJhana.en}</p>
        </div>
      </div>
      <button class="btn-study-tradition" data-open-id="${item.id}">
        ${str.exploreTraditionBtn}
      </button>
    </article>
  `).join('');

  grid.querySelectorAll('.btn-study-tradition').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-open-id');
      selectTradition(id);
    });
  });

  grid.querySelectorAll('.tradition-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      selectTradition(id);
    });
  });
}

function selectTradition(id) {
  const item = MEDITATION_LINEAGES.find(x => x.id === id);
  if (item && state.activeCluster === 'tools') {
    state.activeCluster = item.cluster || 'ebt';
    renderClusterTabs();
  }
  state.selectedLineageId = id;
  state.activePortalTab = 'method';
  renderAppView();
  const portalWrap = document.getElementById('deepStudyPortalWrap');
  if (portalWrap) portalWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Render Deep Study Portal
function renderDeepStudyPortal() {
  const portal = document.getElementById('deepStudyPortalWrap');
  if (!portal || !state.selectedLineageId) return;

  const item = MEDITATION_LINEAGES.find(x => x.id === state.selectedLineageId);
  if (!item) return;

  const str = I18N[state.lang];

  portal.innerHTML = `
    <div class="portal-header-bar">
      <button class="btn-back-nav" id="btnBackToGrid">${str.backToListBtn}</button>
      <div class="portal-header-meta">
        <span class="portal-pali">${item.paliTitle}</span>
        <span class="portal-source">${item.canonicalRef}</span>
      </div>
    </div>

    ${item.curriculumOrder ? `
      <div class="portal-curriculum-banner">
        <div class="banner-phase">
          <span class="phase-pill badge-${item.difficulty}">
            ${state.lang === 'pt' ? item.difficultyLabel.pt : item.difficultyLabel.en}
          </span>
          <span class="phase-count">${str.phaseOrderPrefix} ${item.curriculumOrder} ${str.phaseOrderOf}</span>
        </div>
        <div class="banner-flow">
          ${item.recommendedPrereq ? `
            <div class="flow-item">
              <span class="flow-label">${str.prereqLabel}</span>
              <span class="flow-val">${state.lang === 'pt' ? item.recommendedPrereq.pt : item.recommendedPrereq.en}</span>
            </div>
          ` : ''}
          ${item.whyStudy ? `
            <div class="flow-item">
              <span class="flow-label">${str.whyStudyLabel}</span>
              <span class="flow-val">${state.lang === 'pt' ? item.whyStudy.pt : item.whyStudy.en}</span>
            </div>
          ` : ''}
        </div>
      </div>
    ` : ''}

    <div class="portal-hero">
      <h2 class="portal-title">${state.lang === 'pt' ? item.title.pt : item.title.en}</h2>
      <div class="portal-lineage-badge">${state.lang === 'pt' ? item.lineageTradition.pt : item.lineageTradition.en} • ${item.primaryMasters}</div>
      <p class="portal-overview">${state.lang === 'pt' ? item.overview.pt : item.overview.en}</p>
    </div>

    <nav class="portal-subtabs-nav" role="tablist">
      <button class="portal-tab-btn ${state.activePortalTab === 'method' ? 'active' : ''}" data-tab="method">${str.tabMethod}</button>
      <button class="portal-tab-btn ${state.activePortalTab === 'attainments' ? 'active' : ''}" data-tab="attainments">${str.tabAttainments}</button>
      <button class="portal-tab-btn ${state.activePortalTab === 'pali' ? 'active' : ''}" data-tab="pali">${str.tabPali}</button>
    </nav>

    <div class="portal-tab-content">
      ${renderPortalTabContent(item)}
    </div>
  `;

  document.getElementById('btnBackToGrid')?.addEventListener('click', () => {
    state.selectedLineageId = null;
    renderAppView();
    document.getElementById('traditionsGrid')?.scrollIntoView({ behavior: 'smooth' });
  });

  portal.querySelectorAll('.portal-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activePortalTab = btn.getAttribute('data-tab');
      renderDeepStudyPortal();
    });
  });
}

function renderPortalTabContent(item) {
  const str = I18N[state.lang];
  const isPt = state.lang === 'pt';

  if (state.activePortalTab === 'method') {
    return `
      <div class="method-section">
        <div class="method-controls-bar">
          <span class="method-info-badge">${item.steps.length} ${isPt ? 'Contemplações Práticas Sequenciadas' : 'Sequenced Practice Contemplations'}</span>
        </div>
        <div class="steps-timeline">
          ${item.steps.map(s => {
            const hasExtra = s.practiceInstructions || s.canonicalBasis || s.canonicalSimile;
            return `
            <div class="step-card ${hasExtra ? 'step-card-expanded' : ''}">
              <div class="step-card-num">${s.step}</div>
              <div class="step-body">
                <div class="step-pali">${s.pali}</div>
                <h4 class="step-title">${isPt ? s.title.pt : s.title.en}</h4>
                <div class="step-desc">${isPt ? s.desc.pt : s.desc.en}</div>

                ${hasExtra ? `
                  <div class="step-details-grid">
                    ${s.practiceInstructions ? `
                      <div class="step-detail-box step-practice-box">
                        <div class="step-box-header">
                          <span class="step-box-icon">🎯</span>
                          <span class="step-box-title">${isPt ? 'Instruções Práticas Precisas' : 'Precise Practical Teachings'}</span>
                        </div>
                        <div class="step-box-content">${isPt ? s.practiceInstructions.pt : s.practiceInstructions.en}</div>
                      </div>
                    ` : ''}

                    ${s.canonicalBasis ? `
                      <div class="step-detail-box step-canonical-box">
                        <div class="step-box-header">
                          <span class="step-box-icon">📜</span>
                          <span class="step-box-title">${isPt ? 'Base Canônica & Comentários' : 'Canonical Basis & Commentarial Insight'}</span>
                        </div>
                        <div class="step-box-content">${isPt ? s.canonicalBasis.pt : s.canonicalBasis.en}</div>
                      </div>
                    ` : ''}

                    ${s.canonicalSimile ? `
                      <div class="step-detail-box step-simile-box">
                        <div class="step-box-header">
                          <span class="step-box-icon">🏺</span>
                          <span class="step-box-title">${isPt ? 'Símile Canônico & Aplicação Prática' : 'Canonical Simile & Meditative Application'}</span>
                        </div>
                        <div class="step-box-content">${isPt ? s.canonicalSimile.pt : s.canonicalSimile.en}</div>
                      </div>
                    ` : ''}
                  </div>
                ` : ''}
              </div>
            </div>
          `;
          }).join('')}
        </div>
      </div>
    `;
  }

  if (state.activePortalTab === 'attainments') {
    return `
      <div class="attainments-section">
        <div class="attainment-card">
          <h4 class="attainment-heading">${str.approachJhanaLabel}</h4>
          <p class="attainment-text">${state.lang === 'pt' ? item.approachToJhana.pt : item.approachToJhana.en}</p>
        </div>
        <div class="attainment-card">
          <h4 class="attainment-heading">${str.notingStyleLabel}</h4>
          <p class="attainment-text">${state.lang === 'pt' ? item.useOfNoting.pt : item.useOfNoting.en}</p>
        </div>
        <div class="attainment-card">
          <h4 class="attainment-heading">${str.primaryAnchorLabel}</h4>
          <p class="attainment-text">${state.lang === 'pt' ? item.primaryAnchor.pt : item.primaryAnchor.en}</p>
        </div>
      </div>
    `;
  }

  if (state.activePortalTab === 'pali') {
    return `
      <div class="pali-terms-grid">
        ${item.keyPaliTerms.map(t => `
          <div class="pali-card">
            <span class="pali-word">${t.term}</span>
            <span class="pali-def">${t.meaning}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  return '';
}

// Master Tools Rendering
function renderMasterTools() {
  renderToolsTabs();
  renderActiveToolContent();
}

function renderToolsTabs() {
  const container = document.getElementById('toolsSubtabsNav');
  if (!container) return;
  const str = I18N[state.lang];

  const tabs = [
    { id: 'comparison', label: str.tabToolComparison, icon: '⚖️' },
    { id: 'forty', label: str.tabTool40, icon: '☸' },
    { id: 'nanas', label: str.tabTool16Nanas, icon: '🗺️' },
    { id: 'hindrances', label: str.tabToolHindrances, icon: '🛡️' },
    { id: 'suttas', label: str.tabToolSuttas, icon: '📜' }
  ];

  container.innerHTML = tabs.map(t => `
    <button class="tool-subtab-btn ${state.activeToolTab === t.id ? 'active' : ''}" data-tool="${t.id}">
      <span class="tool-icon">${t.icon}</span>
      <span>${t.label}</span>
    </button>
  `).join('');

  container.querySelectorAll('.tool-subtab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeToolTab = btn.getAttribute('data-tool');
      renderToolsTabs();
      renderActiveToolContent();
    });
  });
}

function renderActiveToolContent() {
  const container = document.getElementById('toolTabContentArea');
  if (!container) return;
  const str = I18N[state.lang];

  // Tool 1: Master Lineage Comparison Table
  if (state.activeToolTab === 'comparison') {
    container.innerHTML = `
      <div class="tool-view-box">
        <div class="table-responsive-wrapper">
          <table class="master-matrix-table">
            <thead>
              <tr>
                <th>${str.colTradition}</th>
                <th>${str.colAnchor}</th>
                <th>${str.colNoting}</th>
                <th>${str.colJhana}</th>
                <th>${str.colVedana}</th>
                <th>${str.colLay}</th>
              </tr>
            </thead>
            <tbody>
              ${LINEAGE_COMPARISON_MATRIX.map(row => `
                <tr class="matrix-row" data-lineage-jump="${row.lineageId}">
                  <td class="cell-tradition"><strong>${row.name}</strong></td>
                  <td>${row.anchor}</td>
                  <td>${row.notingStyle}</td>
                  <td>${row.jhanaView}</td>
                  <td>${row.vedanaApproach}</td>
                  <td><span class="badge-feasibility">${row.dailyLifeIntegration}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    container.querySelectorAll('.matrix-row').forEach(tr => {
      tr.addEventListener('click', () => {
        const jumpId = tr.getAttribute('data-lineage-jump');
        selectTradition(jumpId);
      });
    });
    return;
  }

  // Tool 2: 40 Kammaṭṭhānas Explorer
  if (state.activeToolTab === 'forty') {
    let items = FORTY_KAMMATTHANAS;
    if (state.temperamentFilter !== 'all') {
      items = items.filter(k => k.temperament.includes(state.temperamentFilter));
    }

    container.innerHTML = `
      <div class="tool-view-box">
        <div class="temperament-selector-wrap">
          <label class="filter-label">${str.filterTemperamentLabel}</label>
          <div class="temperament-pill-list">
            ${TEMPERAMENTS.map(t => `
              <button class="temperament-pill ${state.temperamentFilter === t.id ? 'active' : ''}" data-temp="${t.id}">
                ${t.icon ? `<span class="temp-icon">${t.icon}</span>` : ''}
                <span>${state.lang === 'pt' ? t.pt : t.en}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="kammatthana-grid">
          ${items.map(k => `
            <div class="kammatthana-card">
              <span class="k-category">${state.lang === 'pt' ? k.category.pt : k.category.en}</span>
              <h4 class="k-pali">${k.pali}</h4>
              <h5 class="k-name">${state.lang === 'pt' ? k.name.pt : k.name.en}</h5>
              <div class="k-badges">
                <span class="k-attainment">${str.maxAttainmentLabel} ${k.maxAttainment}</span>
              </div>
              <p class="k-desc">${state.lang === 'pt' ? k.desc.pt : k.desc.en}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    container.querySelectorAll('.temperament-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        state.temperamentFilter = btn.getAttribute('data-temp');
        renderActiveToolContent();
      });
    });
    return;
  }

  // Tool 3: 16 Stages of Insight (Visuddhiñāṇa)
  if (state.activeToolTab === 'nanas') {
    container.innerHTML = `
      <div class="tool-view-box">
        <div class="nana-timeline">
          ${SIXTEEN_INSIGHT_NANAS.map(n => `
            <div class="nana-card">
              <div class="nana-header">
                <span class="nana-num">Stage ${n.stage}</span>
                <span class="nana-pali">${n.pali}</span>
              </div>
              <h4 class="nana-title">${state.lang === 'pt' ? n.name.pt : n.name.en}</h4>
              <p class="nana-desc">${state.lang === 'pt' ? n.desc.pt : n.desc.en}</p>
              <div class="nana-symptoms">
                <strong>${str.pitfallsLabel}</strong> ${state.lang === 'pt' ? n.symptoms.pt : n.symptoms.en}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    return;
  }

  // Tool 4: Five Hindrances (Nīvaraṇa) Diagnostic
  if (state.activeToolTab === 'hindrances') {
    container.innerHTML = `
      <div class="tool-view-box">
        <div class="hindrance-accordion">
          ${FIVE_HINDRANCES.map(h => `
            <details class="hindrance-card">
              <summary class="hindrance-summary">
                <span class="h-pali">${h.pali}</span>
                <span class="h-name">${state.lang === 'pt' ? h.name.pt : h.name.en}</span>
              </summary>
              <div class="hindrance-details-body">
                <div class="h-callout simile">
                  <strong>${str.simileLabel}</strong> ${state.lang === 'pt' ? h.simile.pt : h.simile.en}
                </div>
                <div class="h-callout cause">
                  <strong>${str.canonicalCauseLabel}</strong> ${state.lang === 'pt' ? h.canonicalCause.pt : h.canonicalCause.en}
                </div>
                <h5 class="h-remedies-heading">${str.lineageRemediesLabel}</h5>
                <div class="remedies-list">
                  ${h.antidotes.map(a => `
                    <div class="remedy-item">
                      <span class="remedy-lineage">${a.lineage}</span>
                      <p class="remedy-text">${state.lang === 'pt' ? a.remedy.pt : a.remedy.en}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            </details>
          `).join('')}
        </div>
      </div>
    `;
    return;
  }

  // Tool 5: Canonical Sutta Corpus
  if (state.activeToolTab === 'suttas') {
    container.innerHTML = `
      <div class="tool-view-box">
        <div class="sutta-corpus-list">
          ${SUTTA_MEDITATION_CORPUS.map(s => `
            <article class="sutta-card">
              <div class="sutta-header">
                <span class="sutta-code">${s.code}</span>
                <span class="sutta-pali">${s.paliTitle}</span>
                ${s.difficulty ? `
                  <span class="difficulty-badge badge-${s.difficulty}">
                    ${state.lang === 'pt' ? s.stageLabel.pt : s.stageLabel.en}
                  </span>
                ` : ''}
              </div>
              <h4 class="sutta-title">${state.lang === 'pt' ? s.title.pt : s.title.en}</h4>
              <p class="sutta-role">${state.lang === 'pt' ? s.role.pt : s.role.en}</p>
              <div class="sutta-passages">
                <blockquote class="pali-passage">${s.keyPassage.pali}</blockquote>
                <p class="trans-passage">${state.lang === 'pt' ? s.keyPassage.pt : s.keyPassage.en}</p>
              </div>
              <a href="${s.suttaCentralUrl}" target="_blank" rel="noopener" class="sutta-link">
                ${str.readSuttaCentral}
              </a>
            </article>
          `).join('')}
        </div>
      </div>
    `;
  }
}

// Language Switching
function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('bhavana_lang', lang);

  // Update UI Titles & Labels
  const str = I18N[lang];
  const siteTitle = document.getElementById('siteTitle');
  const siteSubtitle = document.getElementById('siteSubtitle');
  const searchInput = document.getElementById('searchInput');

  if (siteTitle) siteTitle.textContent = str.siteTitle;
  if (siteSubtitle) siteSubtitle.textContent = str.siteSubtitle;
  if (searchInput) searchInput.placeholder = str.searchPlaceholder;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  renderClusterTabs();
  renderAppView();
}

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // Setup Language Buttons
  document.getElementById('langBtnEn')?.addEventListener('click', () => setLanguage('en'));
  document.getElementById('langBtnPt')?.addEventListener('click', () => setLanguage('pt'));

  // Setup Search Input
  const searchInput = document.getElementById('searchInput');
  searchInput?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    if (state.activeCluster === 'tools' && state.searchQuery.trim()) {
      state.activeCluster = 'ebt';
      renderClusterTabs();
    }
    renderAppView();
  });

  // Initial Renders
  setLanguage(state.lang);
});
