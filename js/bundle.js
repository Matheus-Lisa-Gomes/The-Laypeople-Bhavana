/**
 * The Lay Dharma Household BhÄvanÄ â€” Standalone Universal Web Bundle
 * Runs directly on file:// as well as HTTPS / local servers.
 */

(function() {
  'use strict';

  // ==========================================
  // 1. MEDITATION LINEAGES DATA
  // ==========================================
/**
 * The Lay Dharma Household Bhāvanā — Theravāda Meditation Aggregate
 * Comprehensive Lineage Dataset: Traditions, Masters, Methods, Steps, Canonical Suttas & Householder Integration.
 * Bilingual: English (EN) and Portuguese (PT-BR).
 */
const LINEAGE_CLUSTERS = [
  { id: "all", en: "All Traditions", pt: "Todas as Tradições", icon: "☸" },
  { id: "ebt", en: "Canonical EBT Suttas", pt: "Suttas Canônicos (EBT)", icon: "📜" },
  { id: "thai-forest", en: "Thai Forest (Kammaṭṭhāna)", pt: "Floresta Tailandesa", icon: "🌲" },
  { id: "burmese", en: "Burmese Vipassanā & Samatha", pt: "Tradições Birmanesas", icon: "🇲🇲" },
  { id: "sri-lanka", en: "Sri Lankan Hermitage", pt: "Eremitério do Sri Lanka", icon: "🇱🇰" },
  { id: "contemporary", en: "Modern & Sutta Integrations", pt: "Integrações Modernas", icon: "🧘" },
  { id: "tools", en: "Comparative Tools & Diagnostics", pt: "Ferramentas & Diagnósticos", icon: "⚖️" }
];
const MEDITATION_LINEAGES = [
  // ==========================================
  // 1. CANONICAL SUTTA FOUNDATIONS
  // ==========================================
  {
    id: "ebt-anapanasati",
    cluster: "ebt",
    number: "01",
    paliTitle: "Ānāpānasati",
    title: {
      en: "Mindfulness of In-and-Out Breathing",
      pt: "Atenção Plena na Respiração (Inspiração e Expiração)"
    },
    lineageTradition: {
      en: "Canonical Early Buddhist Texts (EBT)",
      pt: "Textos Budistas Antigos (EBT Canônico)"
    },
    primaryMasters: "Gotama Buddha, Ven. Sāriputta, Ven. Ānanda",
    canonicalRef: "MN 118 (Ānāpānasati Sutta), SN 54 (Ānāpāna Saṁyutta)",
    coreFocus: {
      en: "16 Progressive Contemplations across 4 Tetrads unifying Samatha and Vipassanā",
      pt: "16 Contemplações Progressivas em 4 Tétrades unindo Samatha e Vipassanā"
    },
    primaryAnchor: {
      en: "The natural tactile sensation of the in-and-out breath at the nose-tip or upper lip",
      pt: "A sensação tátil natural da respiração na ponta do nariz ou lábio superior"
    },
    approachToJhana: {
      en: "Organic tranquility deepening naturally through calming bodily and mental formations, leading to absorption and insight",
      pt: "Tranquilidade orgânica que se aprofunda pelo acalmar das formações corpóreas e mentais, conduzindo à absorção e ao insight"
    },
    useOfNoting: {
      en: "Discerning directly without verbal labels ('He discerns: I breathe in long; I breathe in short')",
      pt: "Discernimento direto sem rotulação verbal ('Ele discerne: inspiro longo; inspiro curto')"
    },
    tagline: {
      en: "The Buddha's own foundational meditation method: sixteen steps that fulfill the Four Establishments of Mindfulness.",
      pt: "O método meditativo do próprio Buda: dezesseis passos que realizam os Quatro Fundamentos da Atenção Plena."
    },
    overview: {
      en: "In the Ānāpānasati Sutta (MN 118), the Buddha teaches sixteen sequential contemplations organized into four tetrads corresponding exactly to the Four Satipaṭṭhānas. Breathing is not treated as a mechanical breathing exercise, but as a living bridge between body, feeling, mind, and awakening. Developed and cultivated, Ānāpānasati fulfills the Four Satipaṭṭhānas; the Four Satipaṭṭhānas fulfill the Seven Factors of Awakening; and the Seven Factors of Awakening fulfill true knowledge and liberation.",
      pt: "No Ānāpānasati Sutta (MN 118), o Buda ensina dezesseis contemplações sequenciais organizadas em quatro tétrades correspondentes exatamente aos Quatro Satipaṭṭhānas. A respiração não é tratada como um exercício mecânico, mas como uma ponte viva entre corpo, sensação, mente e despertar. Desenvolvida e cultivada, a Ānāpānasati realiza os Quatro Satipaṭṭhānas; os Quatro Satipaṭṭhānas realizam os Sete Fatores do Despertar; e estes realizam o verdadeiro conhecimento e a libertação."
    },
    steps: [
      {
        step: 1,
        pali: "Dīghaṁ assasanto 'dīghaṁ assasāmī'ti pajānāti",
        title: { en: "Discerning Long Breath", pt: "Discernindo a Respiração Longa" },
        desc: {
          en: "Breathing in long, one discerns: 'I breathe in long'; breathing out long, one discerns: 'I breathe out long'. Simply noticing duration without forcing.",
          pt: "Inspirando longo, discerne: 'Inspiro longo'; expirando longo, discerne: 'Expiro longo'. Notando a duração natural sem forçar."
        }
      },
      {
        step: 2,
        pali: "Rassaṁ assasanto 'rassaṁ assasāmī'ti pajānāti",
        title: { en: "Discerning Short Breath", pt: "Discernindo a Respiração Curta" },
        desc: {
          en: "Breathing in short, one discerns: 'I breathe in short'; breathing out short, one discerns: 'I breathe out short'.",
          pt: "Inspirando curto, discerne: 'Inspiro curto'; expirando curto, discerne: 'Expiro curto'."
        }
      },
      {
        step: 3,
        pali: "Sabbakāyapaṭisaṁvedī assasissāmīti sikkhati",
        title: { en: "Experiencing the Whole Breath Body", pt: "Vivenciando o Corpo Inteiro da Respiração" },
        desc: {
          en: "One trains: 'I will breathe in sensitive to the entire body of breath'; 'I will breathe out sensitive to the entire body of breath'.",
          pt: "Treina-se: 'Inspirarei sensível a todo o corpo da respiração'; 'Expirarei sensível a todo o corpo da respiração'."
        }
      },
      {
        step: 4,
        pali: "Passambhayaṁ kāyasaṅkhāraṁ assasissāmīti sikkhati",
        title: { en: "Calming the Bodily Formation", pt: "Pacificando a Formação Corpórea" },
        desc: {
          en: "One trains: 'I will breathe in calming bodily activity (the coarse breath and bodily tensions)'; 'I will breathe out calming bodily activity'.",
          pt: "Treina-se: 'Inspirarei acalmando a atividade corpórea (respiração grosseira e tensões)'; 'Expirarei acalmando a atividade corpórea'."
        }
      },
      {
        step: 5,
        pali: "Pītipaṭisaṁvedī assasissāmīti sikkhati",
        title: { en: "Experiencing Rapture (Pīti)", pt: "Vivenciando o Arrebatamento (Pīti)" },
        desc: {
          en: "One trains: 'I will breathe in experiencing spiritual joy and refreshment'; 'I will breathe out experiencing rapture'.",
          pt: "Treina-se: 'Inspirarei vivenciando a alegria e frescor espiritual'; 'Expirarei vivenciando o arrebatamento'."
        }
      },
      {
        step: 6,
        pali: "Sukhapaṭisaṁvedī assasissāmīti sikkhati",
        title: { en: "Experiencing Pleasure/Bliss (Sukha)", pt: "Vivenciando a Felicidade/Paz (Sukha)" },
        desc: {
          en: "One trains: 'I will breathe in experiencing subtle tranquility and bliss'; 'I will breathe out experiencing bliss'.",
          pt: "Treina-se: 'Inspirarei vivenciando a sutil tranquilidade e felicidade'; 'Expirarei vivenciando a felicidade'."
        }
      },
      {
        step: 7,
        pali: "Cittasaṅkhārapaṭisaṁvedī assasissāmīti sikkhati",
        title: { en: "Experiencing Mental Formations", pt: "Vivenciando as Formações Mentais" },
        desc: {
          en: "One trains: 'I will breathe in sensitive to mental formations (feelings and perceptions that color the mind)'.",
          pt: "Treina-se: 'Inspirarei sensível às formações mentais (sensações e percepções que colorem a mente)'."
        }
      },
      {
        step: 8,
        pali: "Passambhayaṁ cittasaṅkhāraṁ assasissāmīti sikkhati",
        title: { en: "Calming Mental Formations", pt: "Pacificando as Formações Mentais" },
        desc: {
          en: "One trains: 'I will breathe in calming mental formations'; soothing emotional agitation into pristine stillness.",
          pt: "Treina-se: 'Inspirarei acalmando as formações mentais'; suavizando a agitação emocional em quietude transparente."
        }
      },
      {
        step: 9,
        pali: "Cittapaṭisaṁvedī assasissāmīti sikkhati",
        title: { en: "Experiencing the Mind (Citta)", pt: "Vivenciando o Estado da Mente (Citta)" },
        desc: {
          en: "One trains: 'I will breathe in sensitive to the mind state' (whether concentrated, scattered, or lustrous).",
          pt: "Treina-se: 'Inspirarei sensível ao estado mental' (seja concentrado, disperso ou luminoso)."
        }
      },
      {
        step: 10,
        pali: "Abhippamodayaṁ cittaṁ assasissāmīti sikkhati",
        title: { en: "Gladdening the Mind", pt: "Alegrando a Mente" },
        desc: {
          en: "One trains: 'I will breathe in uplifting and cheering the mind' whenever dullness or sluggishness arises.",
          pt: "Treina-se: 'Inspirarei elevando e alegrando a mente' sempre que surgir apatia ou letargia."
        }
      },
      {
        step: 11,
        pali: "Samādahaṁ cittaṁ assasissāmīti sikkhati",
        title: { en: "Concentrating the Mind", pt: "Concentrando a Mente" },
        desc: {
          en: "One trains: 'I will breathe in steadying the mind in unified stillness'.",
          pt: "Treina-se: 'Inspirarei estabilizando a mente em quietude unificada'."
        }
      },
      {
        step: 12,
        pali: "Vimocayaṁ cittaṁ assasissāmīti sikkhati",
        title: { en: "Releasing the Mind", pt: "Libertando a Mente" },
        desc: {
          en: "One trains: 'I will breathe in liberating the mind from hindrances, subtle grasping, and mental attachments'.",
          pt: "Treina-se: 'Inspirarei libertando a mente dos obstáculos, apegos sutis e amarras mentais'."
        }
      },
      {
        step: 13,
        pali: "Aniccānupassī assasissāmīti sikkhati",
        title: { en: "Contemplating Impermanence", pt: "Contemplando a Inconstância (Anicca)" },
        desc: {
          en: "One trains: 'I will breathe in contemplating the rising and falling nature of all conditioned phenomena'.",
          pt: "Treina-se: 'Inspirarei contemplando o surgimento e cessação de todos os fenômenos condicionados'."
        }
      },
      {
        step: 14,
        pali: "Virāgānupassī assasissāmīti sikkhati",
        title: { en: "Contemplating Dispassion/Fading", pt: "Contemplando o Desapego / Desvanecimento" },
        desc: {
          en: "One trains: 'I will breathe in contemplating the fading away of lust, craving, and entanglement'.",
          pt: "Treina-se: 'Inspirarei contemplando o desvanecimento do anseio, desejo febril e emaranhamento'."
        }
      },
      {
        step: 15,
        pali: "Nirodhānupassī assasissāmīti sikkhati",
        title: { en: "Contemplating Cessation", pt: "Contemplando a Cessação (Nirodha)" },
        desc: {
          en: "One trains: 'I will breathe in contemplating cessation'; witnessing the quiet extinction of stress.",
          pt: "Treina-se: 'Inspirarei contemplando a cessação'; testemunhando a extinção serena do sofrimento."
        }
      },
      {
        step: 16,
        pali: "Paṭinissaggānupassī assasissāmīti sikkhati",
        title: { en: "Contemplating Relinquishment", pt: "Contemplando a Renúncia / Desprendimento Total" },
        desc: {
          en: "One trains: 'I will breathe in contemplating letting go and relinquishing all clinging'; returning all conditioned phenomena back to nature.",
          pt: "Treina-se: 'Inspirarei contemplando o abandono e renúncia de todo apego'; devolvendo todos os agregados à natureza."
        }
      }
    ],
    layApplication: {
      en: "Establish a 25-minute morning anchor sit. Use steps 1-4 to reset the nervous system before work meetings or stressful parenting demands. Throughout the day, remember the 4th step: consciously calming physical tension during transitions (traffic lights, waiting in lines, between emails).",
      pt: "Estabeleça uma prática matinal de 25 minutos. Use os passos 1 a 4 para redefinir o sistema nervoso antes de reuniões ou exigências familiares. Ao longo do dia, lembre-se do 4º passo: relaxar conscientemente a tensão física nas transições cotidianas (semáforos, filas, intervalos de trabalho)."
    },
    keyPaliTerms: [
      { term: "Ānāpānasati", meaning: "Mindfulness of in-and-out breathing" },
      { term: "Kāyasaṅkhāra", meaning: "Bodily formation (the in-and-out breath itself and somatic tensions)" },
      { term: "Cittasaṅkhāra", meaning: "Mental formations (feelings/vedanā and perceptions/saññā)" },
      { term: "Paṭinissagga", meaning: "Relinquishment, giving back, radical non-possession" }
    ]
  },

  {
    id: "ebt-satipatthana",
    cluster: "ebt",
    number: "02",
    paliTitle: "Cattāro Satipaṭṭhānā",
    title: {
      en: "The Four Foundations of Mindfulness",
      pt: "Os Quatro Fundamentos da Atenção Plena"
    },
    lineageTradition: {
      en: "Canonical Early Buddhist Texts (EBT)",
      pt: "Textos Budistas Antigos (EBT Canônico)"
    },
    primaryMasters: "Gotama Buddha, Ven. Sāriputta, Ven. Mahā Moggallāna",
    canonicalRef: "DN 22 (Mahāsatipaṭṭhāna Sutta), MN 10 (Satipaṭṭhāna Sutta), SN 47",
    coreFocus: {
      en: "Comprehensive fourfold mindful investigation: Body (Kāya), Feeling (Vedanā), Mind (Citta), Phenomena (Dhammā)",
      pt: "Investigação consciente quádrupla: Corpo (Kāya), Sensação (Vedanā), Mente (Citta), Fenômenos (Dhammā)"
    },
    primaryAnchor: {
      en: "The present experiential field observed with ardency (ātāpī), clear comprehension (sampajāno), and mindfulness (satimā)",
      pt: "O campo experiencial presente observado com ardência (ātāpī), clara compreensão (sampajāno) e atenção plena (satimā)"
    },
    approachToJhana: {
      en: "The four foundations serve as the essential qualitative soil from which Right Samādhi arises naturally",
      pt: "Os quatro fundamentos servem como o solo qualitativo fértil de onde o Correto Samādhi brota espontaneamente"
    },
    useOfNoting: {
      en: "Clear direct recognition of phenomena internally (ajjhattaṁ) and externally (bahiddhā) without discursive speculation",
      pt: "Reconhecimento direto interno e externo dos fenômenos sem especulação discursiva"
    },
    tagline: {
      en: "'Ekāyano maggo' — The direct, convergence path for the purification of beings and direct realization of Nibbāna.",
      pt: "'Ekāyano maggo' — O caminho direto e convergente para a purificação dos seres e a realização direta de Nibbāna."
    },
    overview: {
      en: "Satipaṭṭhāna is the master experiential curriculum of the Buddha. Rather than an intellectual philosophy, it is an exhaustive methodology for establishing continuous mindfulness across four biological and psychological domains: 1. Body (kāyānupassanā), 2. Feelings (vedanānupassanā), 3. States of Mind (cittānupassanā), and 4. Mental Qualities and Principles (dhammānupassanā). In each domain, the practitioner remains ardent, clearly comprehending, and mindful, putting aside greed and distress concerning the world.",
      pt: "Satipaṭṭhāna é a matriz prática fundamental do Buda. Longe de ser filosofia abstrata, é uma metodologia exaustiva para ancorar a atenção contínua em quatro domínios biológicos e mentais: 1. Corpo (kāyānupassanā), 2. Sensações (vedanānupassanā), 3. Estados Mentais (cittānupassanā) e 4. Fenômenos Doutrinários (dhammānupassanā). Em cada domínio, permanece-se ardente, claramente lúcido e consciente, superando a cobiça e o pesar pelo mundo."
    },
    steps: [
      {
        step: 1,
        pali: "Kāyānupassanā",
        title: { en: "1. Contemplation of the Body", pt: "1. Contemplação do Corpo" },
        desc: {
          en: "Investigating the breath, the 4 postures (walking, standing, sitting, lying down), clear comprehension in all actions, the 31 anatomical parts, the 4 primary elements (earth, water, fire, wind), and charnel ground impermanence.",
          pt: "Investigação da respiração, das 4 posturas, clara lucidez em todas as ações diárias, 31 partes anatômicas, 4 elementos primários (terra, água, fogo, ar) e impermanência orgânica."
        }
      },
      {
        step: 2,
        pali: "Vedanānupassanā",
        title: { en: "2. Contemplation of Feeling", pt: "2. Contemplação das Sensações" },
        desc: {
          en: "Discerning feelings as pleasant (sukha), painful (dukkha), or neutral (adukkham-asukha). Distinguishing between worldly (sāmisa) and spiritual/unworldly (nirāmisa) feelings.",
          pt: "Discernimento do tom afetivo: agradável, desagradável ou neutro. Distinção crucial entre sensações mundanas e sensações espirituais (decorrentes da renúncia e calma)."
        }
      },
      {
        step: 3,
        pali: "Cittānupassanā",
        title: { en: "3. Contemplation of the Mind", pt: "3. Contemplação da Mente" },
        desc: {
          en: "Knowing the mind as with lust or without lust; with aversion or without aversion; with delusion or without delusion; constricted, distracted, enlarged, surpassed, or concentrated.",
          pt: "Reconhecimento lúcido da mente com cobiça ou livre dela; com aversão ou livre dela; com ilusão ou lúcida; contraída, dispersa, ampla ou concentrada."
        }
      },
      {
        step: 4,
        pali: "Dhammānupassanā",
        title: { en: "4. Contemplation of Phenomena", pt: "4. Contemplação dos Fenômenos" },
        desc: {
          en: "Investigating experience through canonical diagnostic lenses: The Five Hindrances, The Five Clinging-Aggregates, The Six Sense Bases, The Seven Factors of Awakening, and The Four Noble Truths.",
          pt: "Investigação pelas lentes canônicas: Os Cinco Obstáculos, Os Cinco Agregados do Apego, As Seis Bases dos Sentidos, Os Sete Fatores do Despertar e As Quatro Nobres Verdades."
        }
      }
    ],
    layApplication: {
      en: "Practice clear comprehension (sampajañña) during manual chores: washing dishes, driving, typing. When physical pain arises from desk sitting, apply Vedanānupassanā: observe the pure physical sensation without constructing an emotional drama around it.",
      pt: "Pratique a clara lucidez (sampajañña) nas tarefas domésticas: lavar pratos, dirigir, digitar. Quando surgir dor física pela postura de trabalho, aplique Vedanānupassanā: observe a sensação física pura sem fabricar uma narrativa de queixa mental."
    },
    keyPaliTerms: [
      { term: "Satipaṭṭhāna", meaning: "Establishment or foundation of mindfulness" },
      { term: "Ātāpī", meaning: "Ardent, persistent, energetic in practice" },
      { term: "Sampajañña", meaning: "Clear comprehension of purpose, suitability, domain, and reality" },
      { term: "Ekāyano maggo", meaning: "The direct path / the one-way path" }
    ]
  },

  // ==========================================
  // 2. THAI FOREST TRADITION (KAMMAṬṬHĀNA)
  // ==========================================
  {
    id: "thai-forest-ajahn-chah",
    cluster: "thai-forest",
    number: "03",
    paliTitle: "Ajahn Chah Kammaṭṭhāna",
    title: {
      en: "Ajahn Chah — Natural Awareness & Still Flowing Water",
      pt: "Ajahn Chah — Consciência Natural & A Água Parada que Flui"
    },
    lineageTradition: {
      en: "Thai Forest Tradition (Wat Nong Pah Pong / Amaravati)",
      pt: "Tradição das Florestas da Tailândia (Wat Nong Pah Pong)"
    },
    primaryMasters: "Ven. Ajahn Chah Subhaddo, Ven. Ajahn Sumedho, Ven. Ajahn Amaro, Ven. Ajahn Pasanno",
    canonicalRef: "Rooted in AN 4.170, Dhammapada, Sutta Nipāta",
    coreFocus: {
      en: "Unconditional letting go (cāga), non-clinging awareness, welcoming suffering as the supreme teacher",
      pt: "Renúncia incondicional (cāga), atenção sem apego, acolher o sofrimento como supremo mestre"
    },
    primaryAnchor: {
      en: "The natural knowing awareness (the 'One Who Knows' / Phū Rū), watching thoughts and feelings rise and vanish like visitors",
      pt: "A consciência que sabe ('Aquele que Sabe' / Phū Rū), assistindo pensamentos e sensações surgirem e sumirem como visitantes"
    },
    approachToJhana: {
      en: "Deep calm arises naturally as a consequence of non-clinging; warning against getting hooked on meditative peace without investigating anicca",
      pt: "A calma profunda brota como consequência do desapego; alerta constante contra viciar-se na paz meditativa sem investigar a inconstância"
    },
    useOfNoting: {
      en: "Simple, immediate recognition: 'It's not sure' (Aniccam / Mai nae), dropping analytical rumination instantly",
      pt: "Reconhecimento simples e cortante: 'Não é certo' (Mai nae / Anicca), abandonando ruminações analíticas"
    },
    tagline: {
      en: "'If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace. If you let go completely, you will have complete peace.'",
      pt: "'Se você soltar um pouco, terá um pouco de paz. Se soltar muito, terá muita paz. Se soltar completamente, terá paz completa.'"
    },
    overview: {
      en: "Ajahn Chah's teaching cuts straight to the bone of everyday delusion. Rather than isolating meditation to quiet cushions, he insisted that wisdom is forged right in the heat of daily frustrations, work, and monastic labor. His central metaphor of 'Still Flowing Water' reconciles tranquility and insight: the mind remains unshakeably still and peaceful, yet flows effortlessly to respond to whatever conditions present themselves. Everything that arises in the mind is seen with the master phrase: 'Mai nae' (It's not certain).",
      pt: "O ensinamento de Ajahn Chah vai direto à raiz da ilusão. Em vez de isolar a meditação em almofadas silenciosas, ele insistia que a sabedoria é forjada no calor das frustrações diárias e do trabalho manual. Sua metáfora da 'Água Parada que Flui' reconcilia tranquilidade e insight: a mente repousa em serenidade inabalável, mas flui dinamicamente para responder à realidade. Tudo o que surge é acolhido com a expressão mestra: 'Mai nae' (Isto é incerto)."
    },
    steps: [
      {
        step: 1,
        pali: "Phū Rū",
        title: { en: "1. Finding the 'One Who Knows'", pt: "1. Despertar 'Aquele que Sabe'" },
        desc: {
          en: "Step back from the movie of thinking. Become the impartial witness that notices thinking. The thoughts are not you; they are natural events passing through.",
          pt: "Dê um passo atrás do filme mental. Torne-se a testemunha imparcial que percebe o pensamento. Os pensamentos não são você; são eventos que passam."
        }
      },
      {
        step: 2,
        pali: "Mai Nae (Anicca)",
        title: { en: "2. The Universal Universal Mantra: 'It's Uncertain'", pt: "2. O Mantra Universal: 'Não é Certo'" },
        desc: {
          en: "Whenever greed, frustration, panic, or pride arises, apply the needle of wisdom: 'Mai nae' (It's uncertain / It's impermanent). This cuts the root of attachment instantly.",
          pt: "Quando surgir desejo, raiva, pânico ou orgulho, aplique o corte da sabedoria: 'Mai nae' (Isto não é permanente). Corta-se o apego imediatamente."
        }
      },
      {
        step: 3,
        pali: "Cāga / Paṭinissagga",
        title: { en: "3. Radical Letting Go", pt: "3. O Soltar Radical" },
        desc: {
          en: "Don't try to become anything. Don't try to become a meditator or an enlightened being. Just sit like a dead leaf falling on the ground.",
          pt: "Não tente se tornar nada. Não tente ser um 'grande meditador'. Apenas sente-se como uma folha seca que repousa no chão."
        }
      },
      {
        step: 4,
        pali: "Yuganaddha in Action",
        title: { en: "4. Still Flowing Water in Daily Life", pt: "4. Água Parada que Flui no Cotidiano" },
        desc: {
          en: "Engage fully with household duties, cleaning, family, and conversations without accumulating mental residue. Do the work and leave no tracks.",
          pt: "Engaje-se com afinco nas tarefas familiares e profissionais sem acumular resíduo mental. Trabalhe e não deixe rastros de queixa."
        }
      }
    ],
    layApplication: {
      en: "Whenever your partner, child, or coworker behaves unexpectedly, drop the urge to control: whisper 'Mai nae' (uncertain). Treat household cleaning, washing dishes, and commuting as equal arenas of meditation. Keep your mind like a spittoon: things fall in, but you don't own them.",
      pt: "Quando seu parceiro, filho ou colega agir de forma imprevista, solte o impulso de controle: lembre-se 'Mai nae' (isto é incerto). Trate a limpeza da casa, lavar pratos e o trânsito como sessões autênticas de prática meditativa."
    },
    keyPaliTerms: [
      { term: "Phū Rū", meaning: "The One Who Knows (the innate knowing nature of awareness)" },
      { term: "Anicca (Mai nae)", meaning: "Impermanent, uncertain, unstable" },
      { term: "Cāga", meaning: "Relinquishment, generous abandonment of ego" }
    ]
  },

  {
    id: "thai-forest-ajahn-lee",
    cluster: "thai-forest",
    number: "04",
    paliTitle: "Ajahn Lee Ānāpāna-Kammaṭṭhāna",
    title: {
      en: "Ajahn Lee Dhammadharo — Breath Energy & Somatic Circulation",
      pt: "Ajahn Lee Dhammadharo — Energia da Respiração & Circulação Somática"
    },
    lineageTradition: {
      en: "Thai Forest Tradition (Wat Asokaram / Thanissaro Bhikkhu Lineage)",
      pt: "Tradição das Florestas (Wat Asokaram / Linhagem de Thanissaro Bhikkhu)"
    },
    primaryMasters: "Ven. Ajahn Lee Dhammadharo, Ven. Thanissaro Bhikkhu (Metta Forest Monastery)",
    canonicalRef: "Rooted in MN 118, MN 119 (Kāyagatāsati Sutta), MN 140",
    coreFocus: {
      en: "Breath energy (vāyodhātu) active circulation throughout the entire nervous system to induce buoyant Samādhi and deep healing",
      pt: "Circulação ativa da energia da respiração (vāyodhātu) por todo o sistema nervoso gerando Samādhi radiante e cura somática"
    },
    primaryAnchor: {
      en: "The breath sensation explored at multiple energy focal points (base of skull, solar plexus, throat, bridge of nose)",
      pt: "A sensação da respiração explorada em múltiplos pontos focais energéticos (nuca, plexo solar, garganta, dorso nasal)"
    },
    approachToJhana: {
      en: "Systematic entry into the 4 Jhānas by expanding refined, comfortable breath energy until it completely fills the whole biological frame",
      pt: "Entrada metódica nos 4 Jhānas pela expansão da energia da respiração confortável até preencher todo o corpo biológico"
    },
    useOfNoting: {
      en: "Somatic evaluation (vicāra) and directed thought (vitakka): actively experimenting with breath length, heaviness, lightness, and temperature",
      pt: "Avaliação somática (vicāra) e pensamento direcionado (vitakka): ajustando ativamente o ritmo, leveza e temperatura do ar"
    },
    tagline: {
      en: "Transforming the breath into an organic home, a medicinal nectar, and a vehicle for sublime meditative absorption.",
      pt: "Transformando a respiração em refúgio orgânico, remédio natural e veículo para a sublime absorção meditativa."
    },
    overview: {
      en: "Ajahn Lee Dhammadharo, one of the foremost disciples of Ajahn Mun, revolutionized breath meditation by treating the breath not merely as air entering nostrils, but as an all-pervading dynamic life energy (vāyo). In his famous 'Method 2' (Keeping the Breath in Mind), the practitioner learns to direct and spread breath sensations down the spine, into the brain, through the chest, internal organs, and out to the tips of fingers and toes. This eliminates physical fatigue, dissolves bodily knots, and establishes an unshakeable foundation for Jhāna.",
      pt: "Ajahn Lee Dhammadharo, eminente discípulo de Ajahn Mun, revolucionou a meditação da respiração ao tratá-la não apenas como ar nas narinas, mas como energia vital dinâmica (vāyo) que permeia o corpo inteiro. Em seu célebre 'Método 2', o praticante aprende a direcionar a respiração pela coluna, cérebro, peito, órgãos internos e extremidades. Isso elimina a fadiga física, dissolve couraças corporais e estabelece uma base inabalável para os Jhānas."
    },
    steps: [
      {
        step: 1,
        pali: "Vitakka-Vicāra Ānāpāna",
        title: { en: "1. Three Long Deep Reset Breaths", pt: "1. Três Respirações Longas e Profundas" },
        desc: {
          en: "Take a few long, deep in-and-out breaths, keeping the mind focused on the sensation. If comfortable, continue; if strained, adjust length.",
          pt: "Dê algumas respirações bem profundas e lentas. Se for confortável, mantenha; se houver opressão, ajuste o ritmo para maior alívio."
        }
      },
      {
        step: 2,
        pali: "Thāna-Vavatthāna",
        title: { en: "2. Locating the Base Energy Resting Spot", pt: "2. Escolhendo a Base Energética" },
        desc: {
          en: "Choose a comfortable resting point for attention: the tip of the nose, the center of the forehead, the base of the skull, the throat, or the solar plexus.",
          pt: "Escolha um centro de descanso confortável: ponta do nariz, centro da testa, nuca, garganta ou plexo solar."
        }
      },
      {
        step: 3,
        pali: "Vāyo-Pharaṇa",
        title: { en: "3. Spreading Breath Down the Spine & Nerves", pt: "3. Irradiando a Respiração pela Coluna e Nervos" },
        desc: {
          en: "Let the soothing, buoyant quality of the breath spread down the neck, through each vertebra of the spine, down into the pelvis, legs, and feet.",
          pt: "Deixe a qualidade suave e relaxante da respiração descer pelo pescoço, passar por cada vértebra da coluna e irradiar até os pés."
        }
      },
      {
        step: 4,
        pali: "Sabbakāya-Paripuṇṇa",
        title: { en: "4. The Whole-Body Cocoon of Breath", pt: "4. O Casulo de Respiração no Corpo Inteiro" },
        desc: {
          en: "Experience the body as a porous sponge: every pore breathing in and out simultaneously. Sensations of rapture (pīti) and ease (sukha) fill every cell.",
          pt: "Sinta o corpo como uma esponja porosa: cada poro respirando em uníssono. Sensações de alegria (pīti) e bem-estar (sukha) preenchem todas as células."
        }
      }
    ],
    layApplication: {
      en: "Ideal for relieving physical exhaustion, headaches, and computer fatigue. Before sitting down to meditate after work, spend 10 minutes intentionally sweeping warm, gentle breath energy through tense neck and shoulder muscles.",
      pt: "Excepcional para combater exaustão física, cefaleias e fadiga visual de telas. Antes de meditar após o trabalho, dedique 10 minutos varrendo a respiração suave pelos ombros e trapézios tensos."
    },
    keyPaliTerms: [
      { term: "Vāyodhātu", meaning: "The wind or motion element; subtle somatic breath energy" },
      { term: "Vitakka & Vicāra", meaning: "Directed thought and evaluation (adjusting the breath comfort)" },
      { term: "Pharaṇa", meaning: "Pervasion, suffusion of breath and rapture throughout the physical frame" }
    ]
  },

  {
    id: "thai-forest-ajahn-brahm",
    cluster: "thai-forest",
    number: "05",
    paliTitle: "Ajahn Brahm Samādhi-Jhāna",
    title: {
      en: "Ajahn Brahm — The 7 Stages to Stillness & Luminous Jhānas",
      pt: "Ajahn Brahm — Os 7 Estágios para a Quietude & Jhānas Luminosos"
    },
    lineageTradition: {
      en: "Western Thai Forest Tradition (Bodhinyana Monastery, Australia)",
      pt: "Tradição das Florestas Ocidental (Mosteiro Bodhinyana, Austrália)"
    },
    primaryMasters: "Ven. Ajahn Brahmavamso (disciple of Ajahn Chah)",
    canonicalRef: "DN 2, MN 118, AN 9.35, AN 9.36",
    coreFocus: {
      en: "Radical surrender of the 'doer', unconditional kindness to the mind, step-by-step entry into luminous Nimitta and deep canonical Jhānas",
      pt: "Rendição radical do 'controlador', gentileza irrestrita para com a mente, entrada progressiva no Nimitta luminoso e Jhānas profundos"
    },
    primaryAnchor: {
      en: "Gentle awareness transitioning from the silent present moment to the 'Beautiful Breath', then to the mental sign (Nimitta)",
      pt: "Atenção afetuosa transitando do momento presente silencioso para a 'Respiração Bela' e desta para o signo mental luminoso (Nimitta)"
    },
    approachToJhana: {
      en: "Profound absorption where physical senses shut down completely; the mind experiences unshakeable cosmic bliss without physical body awareness",
      pt: "Absorção profunda onde os cinco sentidos externos cessam completamente; a mente experimenta êxtase inabalável sem consciência corporal"
    },
    useOfNoting: {
      en: "No verbal noting. Pure silent appreciation, cultivating joy (pīti) and content (santuṭṭhi) with present stillness",
      pt: "Sem rotulação verbal. Puro deleite silencioso, cultivando contentamento (santuṭṭhi) e alegria com a quietude"
    },
    tagline: {
      en: "'Meditation is the art of disappearing. When the doer stops doing, the knower becomes still.'",
      pt: "'Meditar é a arte de desaparecer. Quando quem controla para de agir, quem sabe alcança o repouso.'"
    },
    overview: {
      en: "Ajahn Brahm offers one of the most celebrated and systematic roadmaps for accessing deep Samādhi and the four Jhānas. Emphasizing 'kindfulness' (mindfulness blended with unconditional acceptance and goodwill), he presents meditation as a journey of letting go rather than striving. You do not force the mind to be still; you make stillness so delightful that the mind never wants to leave. Through seven sequential stages, the mind sheds the burden of the past, the future, words, and bodily sensations until it merges with the luminous Nimitta.",
      pt: "Ajahn Brahm estruturou um dos mapas mais didáticos e célebres para acessar o Samādhi profundo e os quatro Jhānas. Enfatizando a 'atenção gentil' (kindfulness — atenção plena aliada à bondade incondicional), ele aborda a prática como um soltar de fardos e não como luta. Não se força a mente à quietude; torna-se a quietude tão deleitosa que a mente não deseja sair dela. Por meio de sete estágios graduais, solta-se o passado, o futuro, a fala interna e o corpo, até o surgimento do Nimitta luminoso."
    },
    steps: [
      {
        step: 1,
        pali: "Paccuppannānupassanā",
        title: { en: "Stage 1: Present Moment Awareness", pt: "Estágio 1: Atenção ao Momento Presente" },
        desc: {
          en: "Drop the heavy baggage of the past (guilt, memories) and the future (anxiety, plans). Settle into the reality of right here, right now.",
          pt: "Abandone o fardo do passado (remorsos, histórias) e do futuro (projetos, ansiedades). Descanse plenamente no agora."
        }
      },
      {
        step: 2,
        pali: "Tunhībhāva",
        title: { en: "Stage 2: Silent Present Moment Awareness", pt: "Estágio 2: Presença Silenciosa" },
        desc: {
          en: "Cease the inner commentator. Experience this moment without putting words, labels, or judgments onto it. Silence deepens confidence.",
          pt: "Desligue a tagarelice interna. Vivencie o momento sem etiquetar nem julgar. O silêncio gera enorme autoconfiança."
        }
      },
      {
        step: 3,
        pali: "Ānāpāna-Sati",
        title: { en: "Stage 3: Silent Present Breath Awareness", pt: "Estágio 3: Consciência Silenciosa da Respiração" },
        desc: {
          en: "When silence is stable, gently welcome the breath. Don't look for it; let the breath float naturally into the illuminated space of stillness.",
          pt: "Com o silêncio estável, acolha a respiração suavemente. Não a persiga; deixe-a surgir no espaço sereno da atenção."
        }
      },
      {
        step: 4,
        pali: "Ānāpāna-Satata",
        title: { en: "Stage 4: Full Sustained Breath Awareness", pt: "Estágio 4: Consciência Sustentada da Respiração" },
        desc: {
          en: "Attention tracks every millimeter of the in-breath and out-breath unbroken, from start to pause to finish, like a mother watching her sleeping child.",
          pt: "Atenção contínua e sem interrupções em cada milímetro do ciclo respiratório, como uma mãe atenta que vela o sono do filho."
        }
      },
      {
        step: 5,
        pali: "Sobhana-Assāsa",
        title: { en: "Stage 5: The Beautiful Breath", pt: "Estágio 5: A Respiração Bela" },
        desc: {
          en: "Effort falls away completely. The breath transforms into a golden, delicious sensation. The mind experiences ecstatic peaceful joy (sukha).",
          pt: "Todo esforço cessa. A respiração transforma-se numa experiência dourada e deliciosa. A mente transborda de paz e júbilo."
        }
      },
      {
        step: 6,
        pali: "Obhāsa-Nimitta",
        title: { en: "Stage 6: The Luminous Nimitta", pt: "Estágio 6: O Nimitta Luminoso" },
        desc: {
          en: "As the physical breath disappears, an inner light or radiance shines in the mental field. Do not grab it; surrender completely to the light.",
          pt: "Ao cessar a percepção da respiração física, uma luz ou radiância pura brilha na mente. Não a agarre; renda-se docemente à luz."
        }
      },
      {
        step: 7,
        pali: "Appanā-Jhāna",
        title: { en: "Stage 7: Absorption (The Jhānas)", pt: "Estágio 7: Absorção (Os Jhānas)" },
        desc: {
          en: "The mind sinks effortlessly into the center of the Nimitta. Entry into the First, Second, Third, and Fourth Jhānas with unshakeable stillness.",
          pt: "A mente mergulha sem esforço no coração do Nimitta. Entrada estável nos Jhānas com imobilidade mental plena e arrebatadora."
        }
      }
    ],
    layApplication: {
      en: "Never begin a meditation session with willpower or frustration. Spend the first 5 minutes practicing 'kindfulness': smiling inward to yourself, thanking your body for carrying you all day, and giving yourself permission to put down all adult responsibilities.",
      pt: "Nunca inicie uma sessão com autoritarismo mental. Dedique os primeiros 5 minutos à gentileza consciente: sorria internamente, agradeça ao corpo pelo esforço do dia e dê a si mesmo permissão para suspender todas as cobranças."
    },
    keyPaliTerms: [
      { term: "Nimitta", meaning: "The mental sign or radiant reflection of a unified, concentrated mind" },
      { term: "Jhāna", meaning: "Profound meditative absorptions born of seclusion and rapture" },
      { term: "Santuṭṭhi", meaning: "Supreme contentment with whatever is present" }
    ]
  },

  {
    id: "thai-forest-ajahn-maha-boowa",
    cluster: "thai-forest",
    number: "06",
    paliTitle: "Ajahn Maha Boowa Kammaṭṭhāna",
    title: {
      en: "Ajahn Maha Boowa — Buddho Parikamma & The Indomitable Citta",
      pt: "Ajahn Maha Boowa — Mantram Buddho & A Citta Indomável"
    },
    lineageTradition: {
      en: "Thai Forest Ascetic Tradition (Wat Pa Baan Taad)",
      pt: "Tradição Ascética das Florestas (Wat Pa Baan Taad)"
    },
    primaryMasters: "Ven. Ajahn Maha Boowa Ñāṇasampanno, Ven. Ajahn Mun Bhūridatto",
    canonicalRef: "Dhammacakkappavattana Sutta, SN 22.59 (Anattalakkhaṇa Sutta), MN 128",
    coreFocus: {
      en: "Uncompromising heroic effort (viriya), continuous repetition of the Buddho mantra, heroic confrontation with bodily pain to pierce through defilements",
      pt: "Esforço heroico inabalável (viriya), repetição incessante de Buddho, confronto desassombrado da dor física para dissecar as impurezas"
    },
    primaryAnchor: {
      en: "The rapid mental repetition of the parikamma word 'Bud-dho' synchronized with breath, anchoring the mind like an iron post",
      pt: "A repetição mental ritmada do termo 'Bud-dho' sincronizado com o fluxo respiratório, ancorando a mente como um pilar de ferro"
    },
    approachToJhana: {
      en: "The mind 'drops' suddenly and decisively into the center of the chest into luminous, diamond-like unshakeable concentration",
      pt: "A mente 'cai' de forma súbita e resoluta no centro do peito em concentração diamantina e inabalável"
    },
    useOfNoting: {
      en: "Using the Buddho mantra to cut through wandering thoughts with razor-sharp vigilance",
      pt: "Uso do termo Buddho para ceifar pensamentos dispersos com prontidão cortante"
    },
    tagline: {
      en: "'Fight like a warrior! If you die sitting on the cushion, let the bones tell the story of a Dhamma warrior.'",
      pt: "'Lute como um guerreiro! Se tiver de tombar na almofada, que seus ossos contem a história de um herói do Dhamma.'"
    },
    overview: {
      en: "Ajahn Maha Boowa represents the fiery, uncompromising wing of the Thai Forest lineage. Known for his legendary all-night sits during which he dissected severe physical pain with surgical wisdom, his method harnesses the Buddho parikamma to tether the wild elephant of the worldly mind. When severe pain arises, he teaches practitioners not to flee or shift postures, but to investigate: 'Where is the pain? Is the bone pain? Is the flesh pain? Is the knowing awareness pain?' Through this relentless inquiry, the knowing citta detaches permanently from physical suffering.",
      pt: "Ajahn Maha Boowa representa a ala resoluta e heroica da Tradição das Florestas. Célebre por suas vigílias noturnas dissecando dores atrozes com bisturi analítico, seu método utiliza o mantram Buddho para domar o elefante selvagem da mente mundana. Quando a dor severa surge, ele ensina a não fugir nem trocar de postura, mas inquirir: 'Onde está a dor? O osso é a dor? A carne é a dor? A consciência que sabe é a dor?' Por essa investigação, a mente liberta-se da identificação com o sofrimento somático."
    },
    steps: [
      {
        step: 1,
        pali: "Parikamma-Buddho",
        title: { en: "1. Repeating the Buddho Anchor", pt: "1. Repetição do Mantram Buddho" },
        desc: {
          en: "Inhale 'Bud-', exhale '-dho'. Do not allow a single second of mental gap where a stray thought could sneak in.",
          pt: "Inspire 'Bud-', expire '-dho'. Não conceda um único instante de hiato para a intrusão de devaneios."
        }
      },
      {
        step: 2,
        pali: "Citta-Samatikkama",
        title: { en: "2. The Mind Drops into Stillness", pt: "2. O Mergulho da Mente na Calma" },
        desc: {
          en: "Eventually, the mantra dissolves. The citta drops into a profound luminous well of peace inside the chest, isolated from sense impressions.",
          pt: "O mantram dissolve-se naturalmente. A citta mergulha num manancial límpido de paz no peito, desacoplada das sensações externas."
        }
      },
      {
        step: 3,
        pali: "Vedanā-Vibhāga",
        title: { en: "3. Dissecting Severe Pain", pt: "3. Dissecação Anatômica da Dor" },
        desc: {
          en: "When pain burns in the knees or back, confront it directly. Ask: Does the knee know it hurts? No, it's just physical matter. The knowing mind is separate.",
          pt: "Ao queimar dor nos joelhos ou costas, confronte-a: O joelho sabe que dói? Não, é matéria inanimada. A mente que sabe é distinta da sensação."
        }
      }
    ],
    layApplication: {
      en: "Whenever acute panic, anger, or acute physical illness strikes in daily life, replace the frantic inner narrative with continuous, steady repetition of 'Buddho, Buddho, Buddho' until mental equilibrium is restored.",
      pt: "Diante de crises agudas de pânico, raiva súbita ou mal-estar físico, substitua a narrativa aflita pela repetição firme de 'Buddho, Buddho, Buddho' até restabelecer a compostura."
    },
    keyPaliTerms: [
      { term: "Parikamma", meaning: "Preparatory object or word repeated to steady the mind (e.g. Buddho)" },
      { term: "Citta", meaning: "The fundamental knowing nature of mind, distinct from mental formations" },
      { term: "Viriya", meaning: "Unyielding spiritual energy and courage" }
    ]
  },

  // ==========================================
  // 3. BURMESE VIPASSANĀ & SAMATHA LINEAGES
  // ==========================================
  {
    id: "burmese-mahasi",
    cluster: "burmese",
    number: "07",
    paliTitle: "Mahāsi Vipassanā-Ñāṇa",
    title: {
      en: "Mahāsi Sayādaw — Momentary Noting & The 16 Stages of Insight",
      pt: "Mahāsi Sayādaw — Rotulação Momentânea & Os 16 Estágios de Insight"
    },
    lineageTradition: {
      en: "Burmese Dry-Insight Lineage (Mahāsi Sāsana Yeiktha)",
      pt: "Linhagem Birmanesa de Vipassanā Direta (Mahāsi Sāsana Yeiktha)"
    },
    primaryMasters: "Ven. Mahāsi Sayādaw, Ven. Sayadaw U Pandita, Ven. Sayadaw U Silananda",
    canonicalRef: "DN 22 (Mahāsatipaṭṭhāna Sutta), Visuddhimagga, Abhidhammattha Saṅgaha",
    coreFocus: {
      en: "Moment-to-moment verbal noting (nāmarūpa-pariccheda), observation of abdominal movement, systematic navigation of the 16 Insight Knowledges (Visuddhiñāṇa)",
      pt: "Rotulação verbal momento a momento (nāmarūpa-pariccheda), observação do abdômen e navegação dos 16 Conhecimentos de Insight (Visuddhiñāṇa)"
    },
    primaryAnchor: {
      en: "The physical movement of the abdomen rising and falling with natural respiration (wind element / vāyodhātu)",
      pt: "O movimento físico do abdômen subindo e descendo com a respiração natural (elemento ar / vāyodhātu)"
    },
    approachToJhana: {
      en: "Focus on Momentary Concentration (Khaṇika Samādhi) and Vipassanā-Jhāna rather than fixed absorption (Appanā-Jhāna)",
      pt: "Ênfase na Concentração Momentânea (Khaṇika Samādhi) e nos Jhānas de Insight em vez de absorção estática rígida"
    },
    useOfNoting: {
      en: "Systematic, relentless mental labeling of every sensory and mental event: 'rising', 'falling', 'thinking', 'hearing', 'itching', 'lifting'",
      pt: "Etiquetagem mental metódica de cada evento: 'subindo', 'descendo', 'pensando', 'ouvindo', 'coçando', 'erguendo'"
    },
    tagline: {
      en: "The premier modern Vipassanā map: tracking the mind through the brilliant lights of arising and passing to the serene release of Equanimity towards Formations.",
      pt: "O mapa clássico de Vipassanā: da efervescência das luzes do surgimento e cessação à equanimidade serena que precede a libertação."
    },
    overview: {
      en: "The Mahāsi Sayādaw method is arguably the most influential Vipassanā technique of the 20th century. By anchoring attention to the abdominal rise and fall and applying precise mental labels ('noting'), it creates a continuous laser-like momentary concentration (khaṇika samādhi). As mindfulness accelerates, the meditator distinguishes physical phenomena (rūpa) from the knowing mental act (nāma), penetrates cause and effect, passes through the rapturous Knowledge of Arising and Passing Away (udayabbaya-ñāṇa), endures the sobering 'Dukkha Knowledges', reaches Equanimity towards Formations (saṅkhārupekkhā-ñāṇa), and realizes Nibbāna.",
      pt: "O método de Mahāsi Sayādaw é indiscutivelmente o mais influente da era contemporânea. Ao ancorar a mente na subida e descida abdominal e aplicar rótulos mentais precisos ('noting'), forja-se uma concentração momentânea contínua e penetrante. Conforme a atenção ganha velocidade, o praticante distingue matéria (rūpa) de mente (nāma), desvenda causa e efeito, atravessa o eufórico Conhecimento do Surgimento e Fim (udayabbaya-ñāṇa), enfrenta as purificadoras fases da noite escura (dukkha-ñāṇas), atinge a Equanimidade ante as Formações e alcança o fruto de Nibbāna."
    },
    steps: [
      {
        step: 1,
        pali: "Vāyodhātu-Olokana",
        title: { en: "1. Primary Abdominal Anchor", pt: "1. Âncora Primária Abdominal" },
        desc: {
          en: "Place awareness at the abdomen. When it expands on inhalation, mentally note 'rising'. When it recedes on exhalation, note 'falling'.",
          pt: "Foque no abdômen. Quando inflar na inspiração, rotule mentalmente 'subindo'. Quando recuar na expiração, rotule 'descendo'."
        }
      },
      {
        step: 2,
        pali: "Sabbanimitta-Vavatthāna",
        title: { en: "2. Secondary Noting", pt: "2. Rotulação Secundária" },
        desc: {
          en: "When a distinct sensation, itch, sound, or thought interrupts the breath, shift attention to it and note it three times ('thinking, thinking, thinking'), then return to rising/falling.",
          pt: "Quando um som, coceira, dor ou pensamento desviar a atenção, encare-o e rotule ('pensando, pensando'), retornando em seguida ao abdômen."
        }
      },
      {
        step: 3,
        pali: "Caṅkama-Sati",
        title: { en: "3. Slow Walking Meditation", pt: "3. Meditação Andando Meticulosa" },
        desc: {
          en: "Divide each footstep into distinct phases: 'lifting', 'moving', 'placing'. Observe the physical sensations of lightness, pressure, and touch.",
          pt: "Decomponha cada passo: 'erguendo', 'avançando', 'pousando'. Observe as sensações de peso, deslocamento e contato com o solo."
        }
      },
      {
        step: 4,
        pali: "Visuddhiñāṇa-Magga",
        title: { en: "4. The 16 Insight Stages", pt: "4. A Travessia dos 16 Ñāṇas" },
        desc: {
          en: "Navigate the classical stages: Discerning Mind & Matter, Cause & Effect, Arising & Passing, Dissolution, Fear, Disgust, Desire for Release, and Equanimity.",
          pt: "Travessia dos estágios: Discernimento de Mente e Matéria, Causa e Efeito, Surgimento e Dissolução, Temor, Desencanto, Desejo de Libertação e Equanimidade."
        }
      }
    ],
    layApplication: {
      en: "Noting provides an instant brake against runaway mental storylines during the day. When irritation flares in traffic, note: 'annoyed, annoyed, annoyed'. Labeling immediately dis-identifies the ego from the emotional storm.",
      pt: "A rotulação é um freio de emergência contra narrativas obsessivas. Quando surgir irritação no trânsito ou no trabalho, rotule internamente: 'irritação, irritação'. O ato de nomear desfaz a fusão imediata entre o ego e a emoção."
    },
    keyPaliTerms: [
      { term: "Khaṇika Samādhi", meaning: "Momentary concentration that moves smoothly from object to object" },
      { term: "Nāma-Rūpa", meaning: "Mentality (the knowing) and Materiality (the object known)" },
      { term: "Saṅkhārupekkhā-ñāṇa", meaning: "The supreme insight knowledge of Equanimity towards all conditioned formations" }
    ]
  },

  {
    id: "burmese-goenka-ledi",
    cluster: "burmese",
    number: "08",
    paliTitle: "Goenka-Ledi Vedanānupassanā",
    title: {
      en: "S.N. Goenka & Ledi Sayādaw — Body Sweeping & Somatic Vedanā",
      pt: "S.N. Goenka & Ledi Sayādaw — Varredura Corporal & Vedanā Somática"
    },
    lineageTradition: {
      en: "Burmese Lay Tradition (Ledi Sayādaw -> U Ba Khin -> Goenka)",
      pt: "Tradição Leiga Birmanesa (Ledi Sayādaw -> U Ba Khin -> Goenka)"
    },
    primaryMasters: "Ven. Ledi Sayādaw, Saya Thetgyi, Sayagyi U Ba Khin, S.N. Goenka",
    canonicalRef: "DN 22 (Vedanānupassanā), SN 36 (Vedanā Saṁyutta)",
    coreFocus: {
      en: "Systematic, sequential bodily sweeping from head to feet; direct experiential observation of impermanence (anicca) through physical sensations",
      pt: "Varredura sistemática e sequencial da cabeça aos pés; observação empírica direta de anicca através das sensações corporais"
    },
    primaryAnchor: {
      en: "Sensations (vedanā) on the surface and deep inside the physical body: heat, cold, tingling, pulsation, pressure, pain, vibration",
      pt: "Sensações (vedanā) na superfície e profundidade do corpo: calor, frio, formigamento, pulsação, pressão, dor, vibração"
    },
    approachToJhana: {
      en: "3 days of refined Ānāpāna concentration (at the triangular area between nose and upper lip) establishing Access Concentration before commencing Vipassanā",
      pt: "3 dias de Ānāpāna refinada (na área triangular entre nariz e lábio) estabelecendo Concentração de Acesso antes do início de Vipassanā"
    },
    useOfNoting: {
      en: "Strictly NO verbal labels, NO visualization, NO mantras. Pure silent observation of whatever somatic sensation is present with total equanimity (upekkhā)",
      pt: "Rigorosamente SEM palavras mentais, SEM visualizações e SEM mantras. Observação silenciosa pura com total equanimidade (upekkhā)"
    },
    tagline: {
      en: "'Anicca, anicca, anicca. Observe objectively without craving pleasant sensations or averting unpleasant ones.'",
      pt: "'Anicca, anicca, anicca. Observe com neutralidade sem desejar o agradável nem rejeitar o desagradável.'"
    },
    overview: {
      en: "Revived by Ven. Ledi Sayādaw to preserve the Dhamma for laypeople and popularized globally by S.N. Goenka, this technique focuses exclusively on bodily sensation (vedanā) as the direct juncture where craving (taṇhā) and clinging (upādāna) arise in Dependent Arising. Through disciplined part-by-part scanning from crown to toes, the practitioner dissolves the illusion of a solid body (ghanasaññā), experiencing sensations as ephemeral subatomic vibrations (bhaṅga). Realizing anicca in every cell rewires subconscious reactivity.",
      pt: "Ressuscitada pelo Ven. Ledi Sayādaw para democratizar o Dhamma e difundida mundialmente por S.N. Goenka, esta técnica eleva a sensação corporal (vedanā) ao papel de elo primordial onde o anseio (taṇhā) se engatilha no Surgimento Dependente. Por meio de varreduras minuciosas do topo da cabeça à ponta dos pés, o meditador dissolve a ilusão da solidez corpórea (ghanasaññā), sentindo o corpo como um fluxo de vibrações subatômicas transitórias (bhaṅga). Compreender anicca a nível celular extingue a reatividade inconsciente."
    },
    steps: [
      {
        step: 1,
        pali: "Ānāpāna-Ekaggatā",
        title: { en: "1. Three Days of Respiration Focus", pt: "1. Três Dias de Foco Respiratório" },
        desc: {
          en: "Focus exclusively on the breath passing through the nostrils and above the upper lip. Sharpen concentration until subtle sensations can be felt.",
          pt: "Foque exclusivamente no ar tocando as narinas e o buço. Afie a atenção até perceber sensações sutis de temperatura e formigamento."
        }
      },
      {
        step: 2,
        pali: "Vedanā-Vicāraṇa",
        title: { en: "2. Systematic Part-by-Part Sweep", pt: "2. Varredura Minuciosa Parte a Parte" },
        desc: {
          en: "Move attention systematically: top of the head, scalp, face, neck, shoulders, arms, chest, back, abdomen, pelvis, thighs, knees, calves, feet.",
          pt: "Mova a atenção de forma metódica: topo da cabeça, couro cabeludo, rosto, pescoço, braços, peito, costas, abdômen, pernas e pés."
        }
      },
      {
        step: 3,
        pali: "Upekkhā-Bhāvanā",
        title: { en: "3. Unshakable Equanimity", pt: "3. Equanimidade Inabalável" },
        desc: {
          en: "Whether sensations are coarse and painful (grosso) or subtle and tingling (sūkshma), do not react. Know that this sensation too will pass.",
          pt: "Seja a sensação dolorosa ou agradável, permaneça impassível. Testemunhe a verdade inegociável de que ela também irá cessar."
        }
      },
      {
        step: 4,
        pali: "Bhaṅga-Ñāṇa",
        title: { en: "4. Experiencing Dissolution (Bhaṅga)", pt: "4. Vivência da Dissolução (Bhaṅga)" },
        desc: {
          en: "Gross physical blockages dissolve into a free-flowing wave of subtle vibrations throughout the body, shattering the illusion of self.",
          pt: "A solidez corpórea dissolve-se num fluxo livre de vibrações sutis, desmoronando a ilusão de um ego autônomo e permanente."
        }
      }
    ],
    layApplication: {
      en: "Whenever emotional stress or anger manifests as physical constriction (tight chest, clenched jaw, knot in the stomach), bypass the mental drama. Scan the physical knot directly and let it vibrate and dissipate under the light of objective equanimity.",
      pt: "Sempre que o estresse ou a mágoa se manifestarem somaticamente (peito apertado, mandíbula travada, nó no estômago), ignore a historinha mental. Observe o nó físico diretamente até que ele se disperse sob o olhar neutro da equanimidade."
    },
    keyPaliTerms: [
      { term: "Vedanā", meaning: "Sensation, the feeling tone that triggers conditioned craving" },
      { term: "Bhaṅga", meaning: "Dissolution, the crumbling of apparent solidity into subtle vibrating flux" },
      { term: "Ghanasaññā", meaning: "The distorted perception of compactness and solidity" }
    ]
  },

  {
    id: "burmese-pa-auk",
    cluster: "burmese",
    number: "09",
    paliTitle: "Pa-Auk Samatha-Vipassanā",
    title: {
      en: "Pa-Auk Sayādaw — Classical Visuddhimagga, 40 Kammaṭṭhānas & Kalāpas",
      pt: "Pa-Auk Sayādaw — Visuddhimagga Clássico, 40 Kammaṭṭhānas & Kalāpas"
    },
    lineageTradition: {
      en: "Burmese Classical Hermitage Tradition (Pa-Auk Forest Monastery)",
      pt: "Tradição Erudita de Floresta de Mianmar (Mosteiro de Pa-Auk)"
    },
    primaryMasters: "Ven. Pa-Auk Tawya Sayādaw (Ven. Āciṇṇa)",
    canonicalRef: "Visuddhimagga, Abhidhammattha Saṅgaha, MN 118, DN 16",
    coreFocus: {
      en: "Rigorous Samatha-Yānika progression: white nostril-tip Nimitta, mastery of 4 Rūpa Jhānas and 4 Arūpa Jhānas, Four Elements analysis into Kalāpas, Abhidhamma Vipassanā",
      pt: "Progressão estrita de Samatha-Yānika: Nimitta branco, domínio dos 4 Rūpa e 4 Arūpa Jhānas, dissecação em Kalāpas e Vipassanā do Abhidhamma"
    },
    primaryAnchor: {
      en: "Bright white luminous Nimitta stabilized right at the nostril entrance, followed by the internal Four Elements (Catudhātu-vavatthāna)",
      pt: "Nimitta luminoso e estável na entrada das narinas, seguido pela análise dos Quatro Elementos (Catudhātu-vavatthāna)"
    },
    approachToJhana: {
      en: "Exhaustive mastery of all 8 Jhānas with five masteries (āvajjanā, samāpajjanā, adhiṭṭhānā, vuṭṭhānā, paccavekkhaṇā) before starting Vipassanā",
      pt: "Domínio rigoroso dos 8 Jhānas com as cinco mestrias antes de avançar para a investigação de insight"
    },
    useOfNoting: {
      en: "Systematic analytical discernment of ultimate realities (paramattha dhammas) rather than superficial verbal labeling",
      pt: "Discernimento analítico sistemático das realidades últimas (paramattha dhammas) sem rotulação superficial"
    },
    tagline: {
      en: "The most uncompromising classical lineage: rebuilding the Visuddhimagga's complete roadmap to supreme purity with microscopic precision.",
      pt: "A tradição mais rigorosa e enciclopédica: reconstruindo o caminho do Visuddhimagga até a pureza com precisão microscópica."
    },
    overview: {
      en: "The Pa-Auk tradition is renowned worldwide for its complete fidelity to the classical Visuddhimagga commentarial system. Rejecting shortcuts, Pa-Auk Sayādaw guides students to develop deep absorption through the breath until an unmistakable white luminous sign (paṭibhāga-nimitta) emerges. After mastering the four material and four immaterial absorptions, the meditator applies the Four Elements meditation to dissolve the body into minute subatomic particles known as rūpa-kalāpas, analyzing their constituent elements, mental factors (cetasikas), and tracing past and future Dependent Arising.",
      pt: "A tradição Pa-Auk é respeitada internacionalmente pela fidelidade irrestrita ao tratado do Visuddhimagga. Recusando atalhos, o método guia o praticante no desenvolvimento de absorção profunda pela respiração até a consolidação do signo luminoso translúcido (paṭibhāga-nimitta). Após dominar os quatro Jhānas materiais e quatro imateriais, aplica-se a meditação dos Quatro Elementos para decompor o corpo em partículas subatômicas chamadas rūpa-kalāpas, dissecando fatores mentais e as vidas passadas no Surgimento Dependente."
    },
    steps: [
      {
        step: 1,
        pali: "Paṭibhāga-Nimitta",
        title: { en: "1. The White Luminous Sign", pt: "1. O Signo Luminoso Translúcido" },
        desc: {
          en: "Focus on the breath touch until the greyish uggaha-nimitta clarifies into a brilliant, crystal-clear paṭibhāga-nimitta. Merge into Jhāna.",
          pt: "Estabilize o foco na respiração até que a luz cinzenta se transforme em um paṭibhāga-nimitta brilhante como cristal. Mergulhe no Jhāna."
        }
      },
      {
        step: 2,
        pali: "Aṭṭhasamāpatti",
        title: { en: "2. The Eight Classical Absorptions", pt: "2. As Oito Absorções Clássicas" },
        desc: {
          en: "Master the 4 Rūpa Jhānas and 4 Arūpa Jhānas with the five masteries: entering, determining length, exiting, adverting, and reviewing.",
          pt: "Domine os 4 Jhānas da forma e os 4 Jhānas sem forma com as cinco mestrias: entrar à vontade, sustentar, sair, focar e revisar os fatores."
        }
      },
      {
        step: 3,
        pali: "Kalāpa-Vibhedana",
        title: { en: "3. Discerning Rūpa-Kalāpas", pt: "3. Discernimento dos Rūpa-Kalāpas" },
        desc: {
          en: "Using the luminous light of Jhāna, examine the 4 elements in the body until matter breaks down into kalāpas, analyzing earth, water, fire, wind, color, smell, taste, and nutritive essence.",
          pt: "Com a luz do Jhāna, examine os 4 elementos até a matéria se decompor em kalāpas, analisando os 8 ou 10 fatores materiais constituintes."
        }
      },
      {
        step: 4,
        pali: "Nāma-Rūpa-Pariggahe",
        title: { en: "4. Discerning Nāma and Dependent Arising", pt: "4. Discernimento de Nāma e Causalidade" },
        desc: {
          en: "Analyze every consciousness moment (citta) and mental concomitant (cetasika), then trace conditions back into past lives to verify Dependent Arising.",
          pt: "Analise cada momento de consciência e fatores mentais associados, rastreando as causas e condições pelas vidas pregressas."
        }
      }
    ],
    layApplication: {
      en: "Even for busy householders who cannot spend years in forest seclusion, Pa-Auk's Four Elements meditation (detecting hardness, softness, warmth, cooling, motion, tension) can be practiced anywhere to immediately break the hallucination of bodily ego.",
      pt: "Mesmo para o leigo com rotina agitada, a meditação dos Quatro Elementos de Pa-Auk (detectar dureza, maciez, calor, frio, peso, pressão) pode ser praticada em qualquer lugar para quebrar a alucinação de solidez corpórea."
    },
    keyPaliTerms: [
      { term: "Paṭibhāga-Nimitta", meaning: "The purified, luminous counterpart sign of absorption" },
      { term: "Rūpa-Kalāpa", meaning: "Submicroscopic units of matter arising and passing away trillions of times per second" },
      { term: "Samatha-Yānika", meaning: "One who takes serene tranquility as their initial vehicle to reach insight" }
    ]
  },

  {
    id: "burmese-tejaniya",
    cluster: "burmese",
    number: "10",
    paliTitle: "U Tejaniya Citta-Vipassanā",
    title: {
      en: "Sayadaw U Tejaniya — Mind Awareness & Right Attitude",
      pt: "Sayadaw U Tejaniya — Consciência da Mente & Atitude Correta"
    },
    lineageTradition: {
      en: "Burmese Cittānupassanā Tradition (Shwe Oo Min Forest Center)",
      pt: "Tradição Birmanesa de Cittānupassanā (Centro Shwe Oo Min)"
    },
    primaryMasters: "Ven. Sayadaw U Tejaniya, Ven. Shwe Oo Min Sayādaw",
    canonicalRef: "DN 22 (Cittānupassanā), AN 1.49 (Pabhassara Sutta)",
    coreFocus: {
      en: "Continuous, relaxed awareness of the observing mind; investigating the attitude behind the meditation; converting daily activity into effortless practice",
      pt: "Atenção contínua e relaxada da mente que observa; investigar a atitude interna; transformar o dia a dia em prática fluida"
    },
    primaryAnchor: {
      en: "The state of the observing mind (citta) and its underlying view (diṭṭhi): Is there greed, aversion, or expectation in the mind that is meditating?",
      pt: "O estado da mente que observa e sua intenção profunda: Há cobiça, aversão ou ansiedade de resultado na mente que pratica?"
    },
    approachToJhana: {
      en: "Emphasizes natural mental stability throughout 24 hours of wakefulness rather than isolated, trance-like absorptions",
      pt: "Prioriza a estabilidade mental natural ao longo das 24 horas do dia em vez de transes absorvidos isolados"
    },
    useOfNoting: {
      en: "Gentle inquiry without rigid labels: 'What is the mind doing? What is the quality of the observing mind?'",
      pt: "Inquérito gentil sem rótulos mecânicos: 'O que a mente está fazendo? Qual a atitude da mente que observa?'"
    },
    tagline: {
      en: "'Meditation is not about having a quiet mind; it is about knowing whatever is happening with a wise, non-reactive attitude.'",
      pt: "'Meditar não é ter uma mente silenciosa; é saber o que quer que esteja acontecendo com uma atitude sábia e sem reatividade.'"
    },
    overview: {
      en: "Sayadaw U Tejaniya, having practiced as a textile merchant and householder before ordaining as a monk, created a breakthrough approach for modern people. Rather than forcing the mind onto a single sensation, he emphasizes watching the mind itself (cittānupassanā). The critical secret is 'Right Attitude': you don't meditate to get rid of thoughts, sleepiness, or defilements. You meditate to understand them. When greed, anger, or confusion appears, U Tejaniya asks: 'Can you know that greed is present without hating the greed?' This makes practice seamless from waking to sleeping.",
      pt: "Sayadaw U Tejaniya, tendo vivido como comerciante leigo antes do monacato, criou uma abordagem libertadora para os tempos atuais. Em vez de forçar a mente em um único ponto, ele enfatiza a observação da própria mente (cittānupassanā). O segredo capital é a 'Atitude Correta': não se medita para eliminar pensamentos ou impurezas, mas para compreendê-los. Quando a cobiça ou irritação surgem, ele indaga: 'Você consegue saber que a raiva está presente sem odiar a raiva?' Isso torna a prática contínua do acordar ao dormir."
    },
    steps: [
      {
        step: 1,
        pali: "Yoniso Manasikāra",
        title: { en: "1. Checking the Attitude", pt: "1. Calibrar a Atitude" },
        desc: {
          en: "Before sitting or working, ask: What does the mind expect? Am I trying to make something happen, or am I simply acknowledging what is?",
          pt: "Antes de sentar ou trabalhar, cheque: O que a mente espera? Estou tentando forçar a paz ou estou apenas ciente da realidade?"
        }
      },
      {
        step: 2,
        pali: "Adosa-Samācāra",
        title: { en: "2. No Rejection of Defilements", pt: "2. Não Rejeitar as Impurezas" },
        desc: {
          en: "Do not fight thoughts or restlessness. A defilement is just a natural phenomenon (dhamma), not 'you'. Observe it like a scientist observing weather.",
          pt: "Não lute contra distrações. Uma impureza é apenas um fenômeno da natureza condicionado, não 'você'. Observe-a como quem observa o clima."
        }
      },
      {
        step: 3,
        pali: "Satata-Sampajañña",
        title: { en: "3. Continuous Effortless Awareness", pt: "3. Continuidade sem Esforço" },
        desc: {
          en: "Keep reminding yourself gently throughout the day: 'Is the mind aware right now?' Maintain the relaxed posture of knowing.",
          pt: "Lembre-se suavemente ao longo do dia: 'A mente está ciente agora?' Mantenha a presença serena sem tensão física."
        }
      }
    ],
    layApplication: {
      en: "The single best method for busy professionals. You don't need a meditation room to check your attitude during a corporate meeting, while cooking dinner, or during an argument. Ask: 'What is the quality of the knowing mind right now?'",
      pt: "O método mais acessível para a vida profissional moderna. Não é preciso isolamento para checar a atitude em reuniões de negócios ou lavando a louça. Questione-se: 'Qual a qualidade da mente que sabe agora?'"
    },
    keyPaliTerms: [
      { term: "Yoniso Manasikāra", meaning: "Wise, appropriate attention that investigates conditionality" },
      { term: "Diṭṭhi", meaning: "View or attitude; having Right View prevents meditational striving and frustration" },
      { term: "Dhamma-Niyāma", meaning: "The natural cosmic law: seeing all mental states as impersonal natural events" }
    ]
  },

  // ==========================================
  // 4. SRI LANKAN FOREST HERMITAGE TRADITION
  // ==========================================
  {
    id: "sri-lanka-nanananda",
    cluster: "sri-lanka",
    number: "11",
    paliTitle: "Ñāṇananda Papañca-Nirodha",
    title: {
      en: "Ven. Ñāṇananda — Papañca-Nirodha, Concept & Emptiness",
      pt: "Ven. Ñāṇananda — A Cessação da Proliferação Mental & Vacuidade"
    },
    lineageTradition: {
      en: "Sri Lankan Forest Hermitage (Meetirigala Nissarana Vanaya)",
      pt: "Eremitérios de Floresta do Sri Lanka (Nissarana Vanaya)"
    },
    primaryMasters: "Ven. Kaṭukurunde Ñāṇananda, Ven. Matara Sri Ñāṇārāma, Ven. Nyanaponika Thera",
    canonicalRef: "MN 18 (Madhupiṇḍika Sutta), SN 12.15 (Kaccānagotta Sutta), MN 121 (Cūḷasuññata Sutta)",
    coreFocus: {
      en: "The cessation of conceptual proliferation (papañca-nirodha), deconstruction of linguistic conventions (paññatti), radical realization of Non-Self and Emptiness (Suññatā)",
      pt: "Cessação da proliferação conceitual (papañca-nirodha), desconstrução das convenções linguísticas e realização da Vacuidade (Suññatā)"
    },
    primaryAnchor: {
      en: "The unconditioned signless dimension (animitta cetovimutti) where conceptual labels collapse and reality is seen as dependently arisen flux",
      pt: "A dimensão sem-signo (animitta cetovimutti) onde os rótulos conceituais colapsam e a realidade é vista como fluxo dependente"
    },
    approachToJhana: {
      en: "Jhanas viewed not as permanent realms or mystical escapes, but as refined, conditioned stages of emptiness (suññata-vihāra)",
      pt: "Jhānas vistos não como refúgios místicos, mas como estágios refinados e condicionados de vacuidade (suññata-vihāra)"
    },
    useOfNoting: {
      en: "Seeing through the trick of language itself: stopping the mind's automatic reflex to turn experiences into nouns, 'me' and 'mine'",
      pt: "Ver através do truque da linguagem: desarmar o reflexo mental que transforma eventos em substantivos, 'eu' e 'meu'"
    },
    tagline: {
      en: "'Consciousness is like a magic show; the world of concepts is an optical illusion. When proliferation stops, Nibbāna is right here.'",
      pt: "'A consciência é um truque de mágica; o mundo dos conceitos é uma ilusão de ótica. Cessada a proliferação, Nibbāna resplandece.'"
    },
    overview: {
      en: "Ven. Kaṭukurunde Ñāṇananda was one of the deepest contemplative scholars of Theravāda Buddhism. In his masterwork 'Concept and Reality' and his 33 'Nibbāna Sermons', delivered at the remote Nissarana Vanaya hermitage, he exposed the mechanics of mental proliferation (papañca): sensory contact triggers feelings, feelings trigger perceptions, perceptions trigger thoughts, and thoughts explode into an overwhelming web of ego-delusion. His meditation method trains the student to rest in the gap before conceptuality crystallizes, realizing the peaceful cessation of the illusion of an observer.",
      pt: "Ven. Kaṭukurunde Ñāṇananda foi um dos maiores monges contemplativos do Sri Lanka contemporâneo. Em seus 33 Sermões sobre Nibbāna, proferidos no eremitério de Nissarana Vanaya, ele desnudou a mecânica da proliferação conceitual (papañca): o contato sensorial engendra sensação, sensação engendra percepção, percepção engendra pensamento, e o pensamento prolifera numa teia avassaladora de ilusão do 'eu'. Seu método treina o discípulo a repousar no intervalo que antecede a cristalização dos conceitos, desarmando a ilusão de um 'observador'."
    },
    steps: [
      {
        step: 1,
        pali: "Papañca-Vibhāvana",
        title: { en: "1. Catching the Proliferation Spark", pt: "1. Flagrar o Estopim da Proliferação" },
        desc: {
          en: "Notice how a raw sensory perception (a sound or sight) instantly triggers an avalanche of memory, projection, and self-concern. Catch the spark before the blaze.",
          pt: "Perceba como um contato sensorial puro (um som ou visão) engatilha instantaneamente memórias e queixas. Flagra-se a fagulha antes do incêndio."
        }
      },
      {
        step: 2,
        pali: "Māyā-Viññāṇa",
        title: { en: "2. Exposing the Magician's Trick", pt: "2. Desmascarar o Truque da Mágica" },
        desc: {
          en: "Contemplate consciousness (viññāṇa) according to the Buddha's simile: a magician creating apparitions in the public square. Do not trust mental appearances.",
          pt: "Contemple a consciência como um mágico exibindo ilusões na praça pública. Não tome as projeções mentais como verdades sólidas."
        }
      },
      {
        step: 3,
        pali: "Suññatā-Vihāra",
        title: { en: "3. Abiding in Emptiness", pt: "3. Repouso na Vacuidade" },
        desc: {
          en: "Rest in the empty nature of experience: devoid of an 'I', devoid of permanent substance, peaceful, unentangled, unconditioned.",
          pt: "Descanse na natureza vazia da experiência: desprovida de um 'eu', livre de substância permanente, serena e incondicionada."
        }
      }
    ],
    layApplication: {
      en: "Whenever your mind begins fabricating catastrophic future scenarios or obsessing over past conversations, recognize: 'This is papañca (proliferation)'. Stop fueling the story; return to raw sensory reality without the commentary.",
      pt: "Quando sua mente começar a fabricar cenários trágicos futuros ou remoer discussões passadas, diagnostique: 'Isto é papañca (proliferação mental)'. Pare de alimentar a ficção; retorne à realidade sensorial crua sem o comentário."
    },
    keyPaliTerms: [
      { term: "Papañca", meaning: "Mental proliferation, the conceptual fabrication that traps awareness in delusion" },
      { term: "Animitta", meaning: "Signless, free from the signs and distortions of conditioned perceptions" },
      { term: "Suññatā", meaning: "Emptiness of self and anything pertaining to self" }
    ]
  },

  // ==========================================
  // 5. CONTEMPORARY & SUTTA-BASED INTEGRATIONS
  // ==========================================
  {
    id: "contemporary-twim",
    cluster: "contemporary",
    number: "12",
    paliTitle: "TWIM (Tranquil Wisdom)",
    title: {
      en: "Bhante Vimalaramsi — TWIM, The 6Rs & Sutta-Jhānas",
      pt: "Bhante Vimalaramsi — TWIM, Os 6Rs & Sutta-Jhānas"
    },
    lineageTradition: {
      en: "Tranquil Wisdom Insight Meditation (Dhamma Sukha Meditation Center)",
      pt: "Meditação do Insight e Sabedoria Tranquila (TWIM)"
    },
    primaryMasters: "Ven. Bhante Vimalaramsi",
    canonicalRef: "MN 118, MN 21 (Kakacūpama Sutta), MN 31, AN 11.16",
    coreFocus: {
      en: "Integration of Samatha and Vipassanā using Loving-Kindness (Mettā), relaxing physical tension in the head and body ('The 6Rs')",
      pt: "Integração de Samatha e Vipassanā através de Mettā (Bondade), relaxando a tensão física na cabeça e no corpo ('Os 6Rs')"
    },
    primaryAnchor: {
      en: "Radiant warmth of Loving-Kindness (Mettā) in the spiritual heart center, combined with relaxing the tension in the head/brain",
      pt: "A radiância calorosa de Bondade Amorosa (Mettā) no centro do peito, aliada ao relaxamento da tensão na cabeça"
    },
    approachToJhana: {
      en: "Sutta-based 'Light' Jhānas where awareness remains expansive, awake, and alert with peripheral vision, rather than narrow one-pointed absorption",
      pt: "Sutta-Jhānas 'leves', onde a atenção permanece espaçosa, desperta e consciente ao redor, sem absorção rígida unifocal"
    },
    useOfNoting: {
      en: "No labeling. Instead, apply the '6Rs' sequence as soon as a distraction or craving pulls the mind away",
      pt: "Sem rotulação. Aplica-se a sequência dos '6Rs' assim que qualquer distração ou anseio desviar a mente"
    },
    tagline: {
      en: "'Remember to relax! If you do not release the subtle tension in the brain, craving remains anchored in the physical body.'",
      pt: "'Lembre-se de relaxar! Se não soltar a tensão sutil na cabeça, o anseio permanece ancorado no corpo físico.'"
    },
    overview: {
      en: "Bhante Vimalaramsi discovered what he considered a vital missing link in modern meditation: the word 'passambhayaṁ' (relaxing / calming bodily formations). In the TWIM system, when a distraction arises, practitioners do not push it away or tighten focus. Instead, they apply the 6Rs: Recognize the distraction, Release it, RELAX the physical tightness in the head and chest, Re-smile, Return to the object (Mettā or breath), and Repeat. Loving-kindness is taught not as an ancillary practice, but as the master highway carrying the mind straight into all eight Jhānas and Awakening.",
      pt: "Bhante Vimalaramsi resgatou o que considerava um elo negligenciado em muitos retiros modernos: o termo canônico 'passambhayaṁ' (relaxar e acalmar as tensões físicas). No sistema TWIM, quando surge uma distração, não se força a atenção. Aplica-se o ciclo dos 6Rs: Reconhecer a distração, Soltar (Release), RELAXAR a microtensão na cabeça e no peito, Re-sorrir, Retornar ao objeto (Mettā) e Repetir. A Bondade Amorosa é praticada como a via real capaz de conduzir a mente por todos os oito Jhānas até o despertar."
    },
    steps: [
      {
        step: 1,
        pali: "1. Recognize (Pajānāti)",
        title: { en: "1. Recognize", pt: "1. Reconhecer (Recognize)" },
        desc: {
          en: "Notice that the mind has drifted into thinking, restlessness, or craving.",
          pt: "Perceba com lucidez que a atenção se desviou para um pensamento ou anseio."
        }
      },
      {
        step: 2,
        pali: "2. Release (Pahāna)",
        title: { en: "2. Release", pt: "2. Soltar (Release)" },
        desc: {
          en: "Do not continue feeding the thought. Gently allow it to be without getting tangled in it.",
          pt: "Pare de alimentar a história. Permita que ela fique sem alimentá-la."
        }
      },
      {
        step: 3,
        pali: "3. Relax (Passambhana)",
        title: { en: "3. Relax the Tightness", pt: "3. Relaxar a Microtensão (Relax)" },
        desc: {
          en: "THE CRITICAL STEP: Feel the subtle physical tension or tightness in the head/brain and chest, and consciously relax it.",
          pt: "O PASSO CRÍTICO: Sinta a microtensão contraída no topo da cabeça/cérebro e solte-a conscientemente."
        }
      },
      {
        step: 4,
        pali: "4. Re-Smile (Hāsa)",
        title: { en: "4. Re-Smile", pt: "4. Re-sorrir (Re-smile)" },
        desc: {
          en: "Smile gently with your eyes, mouth, and heart. A light smile uplifts dopamine, gladdens the citta, and dissolves frustration.",
          pt: "Sorria suavemente com os olhos e o coração. O sorriso eleva o ânimo, alegra a citta e extingue a frustração."
        }
      },
      {
        step: 5,
        pali: "5. Return (Āgacchati)",
        title: { en: "5. Return", pt: "5. Retornar (Return)" },
        desc: {
          en: "Gently bring your warm awareness back to your meditation object (radiating Mettā or peaceful breath).",
          pt: "Traga a atenção calorosa de volta ao objeto de meditação (irradiar Mettā ou respiração)."
        }
      },
      {
        step: 6,
        pali: "6. Repeat (Punappunaṁ)",
        title: { en: "6. Repeat", pt: "6. Repetir (Repeat)" },
        desc: {
          en: "Stay with the tranquil object. Whenever the next distraction arises, repeat the 6Rs without disappointment.",
          pt: "Permaneça com o objeto de tranquilidade. Se surgir nova distração, aplique os 6Rs com serenidade."
        }
      }
    ],
    layApplication: {
      en: "The 6Rs are an extraordinary lay stress antidote. When an upsetting email arrives, don't react: Recognize irritation, Release the urge to type, RELAX your tense shoulders and forehead, Re-smile, and respond from wisdom.",
      pt: "Os 6Rs são uma ferramenta excepcional contra o estresse cotidiano. Ao receber uma mensagem irritante: Reconheça a raiva, Solte o impulso de digitar, RELAXE a testa e os ombros, Re-sorria e responda com clareza."
    },
    keyPaliTerms: [
      { term: "Passambhana", meaning: "Calming and relaxing physical tension and mental tightness" },
      { term: "Mettā", meaning: "Unconditional, warm loving-kindness for all living beings" },
      { term: "Muditā", meaning: "Altruistic, appreciative joy that overcomes envy and comparison" }
    ]
  },

  {
    id: "contemporary-analayo",
    cluster: "contemporary",
    number: "13",
    paliTitle: "Bhikkhu Anālayo Satipaṭṭhāna",
    title: {
      en: "Bhikkhu Anālayo — Compassionate Satipaṭṭhāna & Early Buddhist Synthesis",
      pt: "Bhikkhu Anālayo — Satipaṭṭhāna Compassivo & Síntese Budista Antiga"
    },
    lineageTradition: {
      en: "Contemporary Canonical Monastic Scholarship & Practice",
      pt: "Monacato e Erudição Canônica Contemporânea"
    },
    primaryMasters: "Ven. Bhikkhu Anālayo, Ven. Bhikkhu Bodhi",
    canonicalRef: "MN 10, DN 22, Chinese Madhyama-āgama, Ekottarika-āgama",
    coreFocus: {
      en: "Balancing all four Satipaṭṭhānas as a cohesive, open-field contemplation; historical comparison of Pāli Nikāyas with Chinese Āgamas; integrating compassion with emptiness",
      pt: "Equilíbrio dos quatro Satipaṭṭhānas como contemplação integrada; comparação histórica com os Āgamas chineses; união de compaixão e vacuidade"
    },
    primaryAnchor: {
      en: "Panoramic open awareness anchoring in bodily presence, feeling tones, and awakening factors",
      pt: "Atenção panorâmica aberta ancorada na presença corpórea, no tom afetivo e nos fatores de despertar"
    },
    approachToJhana: {
      en: "Integrated approach where tranquility and insight support each other harmoniously without dogmatic sectarian disputes",
      pt: "Abordagem integrativa onde calma e discernimento se nutrem mutuamente sem disputas sectárias dogmáticas"
    },
    useOfNoting: {
      en: "Clear, non-verbal open observation; using structured contemplation sheets and guided introspective frameworks",
      pt: "Observação aberta e não-verbal; roteiros contemplativos lúcidos e balanceados"
    },
    tagline: {
      en: "Bridging the earliest textual layers of human Buddhist history with direct, gentle, and profoundly balanced contemporary practice.",
      pt: "Construindo pontes entre as camadas mais antigas da história budista e uma prática contemporânea serena e equilibrada."
    },
    overview: {
      en: "Ven. Bhikkhu Anālayo is universally respected as one of the world's preeminent scholars and practitioners of early Buddhist meditation. By comparing the Pāli suttas with their parallel Chinese Āgama and Sanskrit texts, he isolates the universal core of early Buddhist meditation. In his practical teaching, Satipaṭṭhāna is not practiced in narrow fragmented silos, but as a sweeping panoramic movement from the physical body through affective feeling and mental attitude, culminating in the Awakening Factors.",
      pt: "Ven. Bhikkhu Anālayo é mundialmente reverenciado como um dos maiores monges pesquisadores e praticantes de meditação canônica. Ao confrontar os suttas em Pāli com seus paralelos em chinês antigo (Āgamas) e sânscrito, ele resgata o núcleo autêntico da prática dos primeiros séculos. Em seu método, Satipaṭṭhāna não é fragmentado em caixas rígidas, mas flui panoramicamente do corpo às sensações, mente e fatores de despertar."
    },
    steps: [
      {
        step: 1,
        pali: "Kāyabhāvanā",
        title: { en: "1. Somatic Grounding", pt: "1. Ancoragem Somática" },
        desc: {
          en: "Establish bodily awareness as a stable anchor: feeling posture, breath, and anatomical presence.",
          pt: "Estabeleça a consciência corporal como um porto seguro: sinta a postura, a respiração e a presença física."
        }
      },
      {
        step: 2,
        pali: "Vedanā-Upekkhā",
        title: { en: "2. Tracking the Feeling Tone", pt: "2. Rastreamento do Tom Afetivo" },
        desc: {
          en: "Recognize how subtle pleasure or displeasure instantly primes the mind for greed or aversion.",
          pt: "Reconheça como sutis sensações de agrado ou desagrado preparam o terreno para o desejo ou aversão."
        }
      },
      {
        step: 3,
        pali: "Bojjhaṅga-Bhāvanā",
        title: { en: "3. Feeding the Awakening Factors", pt: "3. Alimentar os Fatores do Despertar" },
        desc: {
          en: "Nurture mindfulness, investigation, energy, joy, tranquility, concentration, and equanimity.",
          pt: "Cultive os 7 fatores: atenção, investigação, energia, alegria, tranquilidade, concentração e equanimidade."
        }
      }
    ],
    layApplication: {
      en: "Use the Awakening Factors as an emotional balancing toolkit. When depressed or sluggish, stimulate investigation, energy, and joy. When stressed or hyperactive, cultivate tranquility, concentration, and equanimity.",
      pt: "Use os Fatores do Despertar como uma caixa de ferramentas para equilíbrio emocional. Se sentir desânimo, ative a investigação e a alegria. Se estiver ansioso, cultive a calma e a equanimidade."
    },
    keyPaliTerms: [
      { term: "Bojjhaṅga", meaning: "The Seven Factors of Awakening (Mindfulness, Investigation, Energy, Joy, Tranquility, Concentration, Equanimity)" },
      { term: "Sampajañña", meaning: "Clear comprehension with holistic perspective" },
      { term: "Āgama", meaning: "Parallel Early Buddhist collections preserved in Chinese translations" }
    ]
  }
];


  // ==========================================
  // 2. COMPARATIVE TOOLS & DIAGNOSTICS DATA
  // ==========================================
/**
 * The Lay Dharma Household Bhāvanā — Comparative Tools & Diagnostics Data
 * Contains: 40 Classical Kammaṭṭhānas with Temperament mappings,
 * The 16 Stages of Insight (Visuddhiñāṇa),
 * The Five Hindrances (Nīvaraṇa) Diagnostic,
 * and the Master Lineage Comparison Matrix.
 * Bilingual: English (EN) and Portuguese (PT-BR).
 */
const TEMPERAMENTS = [
  { id: "all", en: "All Temperaments", pt: "Todos os Temperamentos" },
  { id: "raga", en: "Greed / Passion (Rāga)", pt: "Cobiça / Paixão (Rāga)", icon: "🔥" },
  { id: "dosa", en: "Aversion / Anger (Dosa)", pt: "Aversão / Raiva (Dosa)", icon: "⚡" },
  { id: "moha", en: "Delusion / Confusion (Moha)", pt: "Ilusão / Confusão (Moha)", icon: "🌫️" },
  { id: "saddha", en: "Devotion / Faith (Saddhā)", pt: "Fé / Devoção (Saddhā)", icon: "💎" },
  { id: "buddhi", en: "Intellect / Wisdom (Buddhi)", pt: "Intelecto / Sabedoria (Buddhi)", icon: "💡" },
  { id: "vitakka", en: "Restlessness / Agitation (Vitakka)", pt: "Agitação / Devaneio (Vitakka)", icon: "🌪️" }
];
const FORTY_KAMMATTHANAS = [
  // 10 KASINAS
  {
    id: "kasina-earth",
    category: { en: "10 Kasiṇas (Colored & Elemental Disks)", pt: "10 Kasiṇas (Discos e Elementos)" },
    pali: "Paṭhavī-kasiṇa",
    name: { en: "Earth Kasiṇa", pt: "Kasiṇa da Terra" },
    temperament: ["moha", "vitakka"],
    maxAttainment: "4th Jhāna",
    desc: {
      en: "Meditation on a smooth disk of clay/earth or natural soil patch, focusing on the solidity and stability of earth until the nimitta shines.",
      pt: "Meditação num disco liso de argila ou solo natural, focando na solidez e estabilidade da terra até que o nimitta resplandeça."
    }
  },
  {
    id: "kasina-water",
    category: { en: "10 Kasiṇas (Colored & Elemental Disks)", pt: "10 Kasiṇas (Discos e Elementos)" },
    pali: "Āpo-kasiṇa",
    name: { en: "Water Kasiṇa", pt: "Kasiṇa da Água" },
    temperament: ["moha", "vitakka"],
    maxAttainment: "4th Jhāna",
    desc: {
      en: "Contemplating a clear bowl of still water, absorbing the visual fluidity and cohesiveness into deep stillness.",
      pt: "Contemplação de uma tigela límpida de água parada, absorvendo a fluidez e coesão em calma profunda."
    }
  },
  {
    id: "kasina-fire",
    category: { en: "10 Kasiṇas (Colored & Elemental Disks)", pt: "10 Kasiṇas (Discos e Elementos)" },
    pali: "Tejo-kasiṇa",
    name: { en: "Fire Kasiṇa", pt: "Kasiṇa do Fogo" },
    temperament: ["moha", "vitakka"],
    maxAttainment: "4th Jhāna",
    desc: {
      en: "Gazing through an aperture at a steady flame, focusing on the quality of luminosity and thermal energy.",
      pt: "Olhar através de uma abertura para uma chama estável, focando na luminosidade e energia térmica."
    }
  },
  {
    id: "kasina-wind",
    category: { en: "10 Kasiṇas (Colored & Elemental Disks)", pt: "10 Kasiṇas (Discos e Elementos)" },
    pali: "Vāyo-kasiṇa",
    name: { en: "Air / Wind Kasiṇa", pt: "Kasiṇa do Ar" },
    temperament: ["moha", "vitakka"],
    maxAttainment: "4th Jhāna",
    desc: {
      en: "Perceiving the motion of wind rustling leaves or touching the skin, tracking the sensation of movement.",
      pt: "Perceber o vento farfalhando folhas ou tocando a pele, rastreando a sensação pura de movimento."
    }
  },
  {
    id: "kasina-blue",
    category: { en: "10 Kasiṇas (Colored & Elemental Disks)", pt: "10 Kasiṇas (Discos e Elementos)" },
    pali: "Nīla-kasiṇa",
    name: { en: "Blue Kasiṇa", pt: "Kasiṇa Azul" },
    temperament: ["dosa"],
    maxAttainment: "4th Jhāna",
    desc: {
      en: "A disk of pure indigo or sapphire blue. Highly cooling and soothing; recommended as an antidote for anger and irritability.",
      pt: "Disco de azul anil ou safira. Extremamente calmante e refrescante; indicado como antídoto para ira e irritabilidade."
    }
  },
  {
    id: "kasina-yellow",
    category: { en: "10 Kasiṇas (Colored & Elemental Disks)", pt: "10 Kasiṇas (Discos e Elementos)" },
    pali: "Pīta-kasiṇa",
    name: { en: "Yellow Kasiṇa", pt: "Kasiṇa Amarelo" },
    temperament: ["dosa"],
    maxAttainment: "4th Jhāna",
    desc: {
      en: "A disk of radiant golden-yellow (like turmeric or marigolds). Promotes bright serene clarity and dispels agitation.",
      pt: "Disco amarelo dourado radiante (como açafrão ou calêndula). Promove serenidade luminosa e dissipa conflitos."
    }
  },
  {
    id: "kasina-red",
    category: { en: "10 Kasiṇas (Colored & Elemental Disks)", pt: "10 Kasiṇas (Discos e Elementos)" },
    pali: "Lohita-kasiṇa",
    name: { en: "Red Kasiṇa", pt: "Kasiṇa Vermelho" },
    temperament: ["dosa"],
    maxAttainment: "4th Jhāna",
    desc: {
      en: "A disk of pure ruby or vermilion red. Calms hot emotional reactivity when contemplated with detached awareness.",
      pt: "Disco de cor rubi ou carmim puro. Apazigua a reatividade emocional colérica sob olhar equânime."
    }
  },
  {
    id: "kasina-white",
    category: { en: "10 Kasiṇas (Colored & Elemental Disks)", pt: "10 Kasiṇas (Discos e Elementos)" },
    pali: "Odāta-kasiṇa",
    name: { en: "White Kasiṇa", pt: "Kasiṇa Branco" },
    temperament: ["dosa", "moha"],
    maxAttainment: "4th Jhāna",
    desc: {
      en: "A disk of dazzling, pure white. The supreme color kasiṇa for banishing mental dullness, sleepiness, and sluggish darkness.",
      pt: "Disco de branco imaculado. O supremo kasiṇa de cor para dissipar torpor, sono e escuridão mental."
    }
  },
  {
    id: "kasina-light",
    category: { en: "10 Kasiṇas (Colored & Elemental Disks)", pt: "10 Kasiṇas (Discos e Elementos)" },
    pali: "Āloka-kasiṇa",
    name: { en: "Light Kasiṇa", pt: "Kasiṇa da Luz" },
    temperament: ["moha", "vitakka"],
    maxAttainment: "4th Jhāna",
    desc: {
      en: "Focusing on a pool of sunlight on a wall, moonlight through a window, or lantern glow to generate the perception of radiant light.",
      pt: "Foco no feixe de luz solar ou luar projetado numa parede para gerar a percepção contínua de luminosidade."
    }
  },
  {
    id: "kasina-space",
    category: { en: "10 Kasiṇas (Colored & Elemental Disks)", pt: "10 Kasiṇas (Discos e Elementos)" },
    pali: "Ākāsa-kasiṇa",
    name: { en: "Limited Space Kasiṇa", pt: "Kasiṇa do Espaço Limitado" },
    temperament: ["moha", "vitakka"],
    maxAttainment: "4th Jhāna",
    desc: {
      en: "Gazing through an aperture (window, doorway, or circular opening) at empty space, cultivating boundless spatial openness.",
      pt: "Olhar através de uma abertura ou portal para o espaço vazio, cultivando a abertura espacial desobstruída."
    }
  },

  // 10 ASUBHA (FOULNESS / ANATOMICAL CONTEMPLATION)
  {
    id: "asubha-contemplations",
    category: { en: "10 Asubhas (Impurities & Charnel Ground Contemplations)", pt: "10 Asubhas (Impurezas e Decomposição Corpórea)" },
    pali: "Asubha-bhāvanā (10 Stages)",
    name: { en: "The 10 Charnel Ground Contemplations", pt: "As 10 Contemplações do Cemitério" },
    temperament: ["raga"],
    maxAttainment: "1st Jhāna",
    desc: {
      en: "Contemplating the stages of decomposition of the physical body: bloated, livid, festering, cut up, gnawed, scattered bones, skeleton, bleached bones. Master antidote for sexual obsession and vanity.",
      pt: "Contemplação dos estágios de decomposição do corpo: inchado, descolorido, devorado, esqueleto esbranquiçado. O antídoto definitivo para luxúria obsessiva e vaidade estética."
    }
  },

  // 10 ANUSSATI (RECOLLECTIONS)
  {
    id: "anussati-buddha",
    category: { en: "10 Anussatis (Recollections)", pt: "10 Anussatis (Recordações)" },
    pali: "Buddhānussati",
    name: { en: "Recollection of the Buddha", pt: "Recordação do Buda" },
    temperament: ["saddha"],
    maxAttainment: "Access Concentration (Upacāra)",
    desc: {
      en: "Recollecting the 9 supreme qualities of the Awakened One (Arahant, Sammā-sambuddho, Vijjācaraṇasampanno, Sugato...). Inspires profound faith and dispels fear.",
      pt: "Recordação das 9 qualidades supremas do Buda (Arahant, Sammā-sambuddho, Sugato...). Inspira devoção e erradica temores noturnos."
    }
  },
  {
    id: "anussati-dhamma",
    category: { en: "10 Anussatis (Recollections)", pt: "10 Anussatis (Recordações)" },
    pali: "Dhammānussati",
    name: { en: "Recollection of the Dhamma", pt: "Recordação do Dhamma" },
    temperament: ["saddha", "buddhi"],
    maxAttainment: "Access Concentration (Upacāra)",
    desc: {
      en: "Reflecting on the 6 pristine attributes of the Teaching: well-expounded (svākkhāto), directly visible (sandiṭṭhiko), timeless (akāliko), inviting inspection (ehipassiko)...",
      pt: "Reflexão sobre os 6 atributos do Ensinamento: bem proclamado, visível aqui e agora, atemporal, que convida à verificação prática..."
    }
  },
  {
    id: "anussati-sangha",
    category: { en: "10 Anussatis (Recollections)", pt: "10 Anussatis (Recordações)" },
    pali: "Saṅghānussati",
    name: { en: "Recollection of the Noble Sangha", pt: "Recordação da Nobre Sangha" },
    temperament: ["saddha"],
    maxAttainment: "Access Concentration (Upacāra)",
    desc: {
      en: "Remembering the virtues of the Community of the Buddha's Noble Disciples, the four pairs, the eight kinds of noble persons worthy of gifts.",
      pt: "Lembrança das virtudes da Nobre Sangha: os quatro pares de discípulos, os oito tipos de nobres dignos de oferendas e reverência."
    }
  },
  {
    id: "anussati-sila",
    category: { en: "10 Anussatis (Recollections)", pt: "10 Anussatis (Recordações)" },
    pali: "Sīlānussati",
    name: { en: "Recollection of One's Own Virtue", pt: "Recordação da Própria Virtude Ética" },
    temperament: ["saddha"],
    maxAttainment: "Access Concentration (Upacāra)",
    desc: {
      en: "Reviewing one's ethical precepts as unbroken, untorn, unspotted, leading to liberation. Produces pure spiritual joy (pāmojja) and dissolves remorse.",
      pt: "Revisar a pureza dos próprios preceitos éticos guardados sem mácula. Gera júbilo espiritual (pāmojja) e extingue o remorso da mente."
    }
  },
  {
    id: "anussati-caga",
    category: { en: "10 Anussatis (Recollections)", pt: "10 Anussatis (Recordações)" },
    pali: "Cāgānussati",
    name: { en: "Recollection of Generosity", pt: "Recordação da Generosidade (Cāga)" },
    temperament: ["saddha"],
    maxAttainment: "Access Concentration (Upacāra)",
    desc: {
      en: "Recalling one's acts of open-handed generosity, sharing resources with others without stinginess amidst a selfish world.",
      pt: "Recordar os próprios atos de partilha e caridade desprendida, alegrando-se por viver sem avareza em meio a um mundo apegado."
    }
  },
  {
    id: "anussati-deva",
    category: { en: "10 Anussatis (Recollections)", pt: "10 Anussatis (Recordações)" },
    pali: "Devatānussati",
    name: { en: "Recollection of Devas / Heavenly Virtues", pt: "Recordação das Virtudes Celestiais" },
    temperament: ["saddha"],
    maxAttainment: "Access Concentration (Upacāra)",
    desc: {
      en: "Remembering that celestial beings attained heavenly realms through faith, virtue, learning, generosity, and wisdom, and affirming those exact virtues in oneself.",
      pt: "Lembrar que os seres celestes alcançaram mundos luminosos cultivando fé, ética, generosidade e sabedoria, reconhecendo tais virtudes em si."
    }
  },
  {
    id: "anussati-marana",
    category: { en: "10 Anussatis (Recollections)", pt: "10 Anussatis (Recordações)" },
    pali: "Maraṇassati",
    name: { en: "Mindfulness of Death", pt: "Atenção Plena na Morte (Maraṇassati)" },
    temperament: ["buddhi"],
    maxAttainment: "Access Concentration (Upacāra)",
    desc: {
      en: "Contemplating the certainty of death and the uncertainty of lifespan: 'Death is certain, life is uncertain.' Shatters procrastination and activates urgent spiritual energy (saṁvega).",
      pt: "Contemplar a certeza inegociável da morte e a brevidade da vida: 'A morte é certa, o instante é incerto'. Destrói a procrastinação e acende o fervor espiritual (saṁvega)."
    }
  },
  {
    id: "anussati-kayagata",
    category: { en: "10 Anussatis (Recollections)", pt: "10 Anussatis (Recordações)" },
    pali: "Kāyagatāsati (31 Body Parts)",
    name: { en: "Mindfulness Immersed in Body Parts", pt: "Atenção Plena nas 31 Partes do Corpo" },
    temperament: ["raga"],
    maxAttainment: "1st Jhāna",
    desc: {
      en: "Anatomical dissection of the 31 parts of the body: head hairs, body hairs, nails, teeth, skin, flesh, sinews, bones, bone marrow, kidneys, heart, liver...",
      pt: "Dissecação anatômica das 31 partes: cabelos, pelos, unhas, dentes, pele, carne, tendões, ossos, medula, rins, coração, fígado... Cura definitiva para o apego estético corpóreo."
    }
  },
  {
    id: "anussati-anapana",
    category: { en: "10 Anussatis (Recollections)", pt: "10 Anussatis (Recordações)" },
    pali: "Ānāpānasati",
    name: { en: "Mindfulness of Breathing", pt: "Atenção Plena na Respiração" },
    temperament: ["moha", "vitakka"],
    maxAttainment: "4th Jhāna",
    desc: {
      en: "The master contemplation praised above all by the Buddha: anchoring on the natural respiration, soothing formations, and developing all four Jhānas.",
      pt: "A contemplação mestra louvada pelo Buda: ancorar na respiração natural, pacificar as formações e atingir todos os 4 Jhānas."
    }
  },
  {
    id: "anussati-upasama",
    category: { en: "10 Anussatis (Recollections)", pt: "10 Anussatis (Recordações)" },
    pali: "Upasamānussati",
    name: { en: "Recollection of Peace / Nibbāna", pt: "Recordação da Paz de Nibbāna" },
    temperament: ["buddhi"],
    maxAttainment: "Access Concentration (Upacāra)",
    desc: {
      en: "Contemplating the supreme peace of Nibbāna: the stilling of all formations, relinquishment of all acquisitions, destruction of craving, dispassion, cessation.",
      pt: "Contemplar a paz suprema de Nibbāna: a cessação de todas as formações, abandono de apegos, extinção do anseio febril e desapego imaculado."
    }
  },

  // 4 BRAHMAVIHARAS (SUBLIME ABODES)
  {
    id: "brahmavihara-metta",
    category: { en: "4 Brahmavihāras (Sublime Abodes)", pt: "4 Brahmavihāras (Moradas Sublimes)" },
    pali: "Mettā-bhāvanā",
    name: { en: "Loving-Kindness", pt: "Bondade Amorosa (Mettā)" },
    temperament: ["dosa"],
    maxAttainment: "3rd Jhāna",
    desc: {
      en: "Wishing welfare, safety, and happiness for all beings without boundary or enmity: 'May all beings be free from animosity, free from distress, and live happily.' The direct antidote for anger.",
      pt: "Desejar paz, segurança e felicidade para todos os seres sem exceção nem inimizade. O antídoto absoluto para a cólera e o ressentimento."
    }
  },
  {
    id: "brahmavihara-karuna",
    category: { en: "4 Brahmavihāras (Sublime Abodes)", pt: "4 Brahmavihāras (Moradas Sublimes)" },
    pali: "Karuṇā-bhāvanā",
    name: { en: "Compassion", pt: "Compaixão (Karuṇā)" },
    temperament: ["dosa"],
    maxAttainment: "3rd Jhāna",
    desc: {
      en: "Resonating with the suffering of living beings, wishing for their complete relief from agony and distress. Overcomes cruelty and indifference.",
      pt: "Ressoar com o sofrimento alheio, desejando a libertação da dor de todos os seres. Erradica a crueldade e o cinismo."
    }
  },
  {
    id: "brahmavihara-mudita",
    category: { en: "4 Brahmavihāras (Sublime Abodes)", pt: "4 Brahmavihāras (Moradas Sublimes)" },
    pali: "Muditā-bhāvanā",
    name: { en: "Appreciative / Altruistic Joy", pt: "Alegria Altruísta (Muditā)" },
    temperament: ["dosa"],
    maxAttainment: "3rd Jhāna",
    desc: {
      en: "Rejoicing in the success, virtue, and good fortune of other beings: 'May your good fortune never diminish!' Direct antidote for jealousy, envy, and toxic rivalry.",
      pt: "Regozijar-se com as bênçãos e êxitos alheios: 'Que sua fortuna jamais decaia!'. Antídoto soberano para inveja e rivalidade amarga."
    }
  },
  {
    id: "brahmavihara-upekkha",
    category: { en: "4 Brahmavihāras (Sublime Abodes)", pt: "4 Brahmavihāras (Moradas Sublimes)" },
    pali: "Upekkhā-bhāvanā",
    name: { en: "Equanimity", pt: "Equanimidade (Upekkhā)" },
    temperament: ["dosa", "raga"],
    maxAttainment: "4th Jhāna",
    desc: {
      en: "Viewing all beings with supreme balance: 'All beings are owners of their kamma, heirs to their kamma.' Dispels passionate clinging and cold aversion alike.",
      pt: "Visão límpida e equilibrada: 'Todos os seres são herdeiros de suas próprias ações'. Neutraliza o apego parcial e o desespero."
    }
  },

  // 4 ARUPPAS (FORMLESS ATTAINMENTS)
  {
    id: "aruppa-akasanancayatana",
    category: { en: "4 Āruppas (Formless Attainments)", pt: "4 Āruppas (Absorções Sem Forma)" },
    pali: "Ākāsānañcāyatana",
    name: { en: "Base of Infinite Space", pt: "Esfera do Espaço Infinito" },
    temperament: ["buddhi", "moha"],
    maxAttainment: "5th (1st Formless) Jhāna",
    desc: {
      en: "Transcending all physical material perceptions and color kasiṇas, the mind expands into boundless, unobstructed space: 'Space is infinite.'",
      pt: "Transcendendo todas as percepções materiais de forma, a mente expande-se no espaço imensurável: 'O espaço é infinito'."
    }
  },
  {
    id: "aruppa-vinnanancayatana",
    category: { en: "4 Āruppas (Formless Attainments)", pt: "4 Āruppas (Absorções Sem Forma)" },
    pali: "Viññāṇañcāyatana",
    name: { en: "Base of Infinite Consciousness", pt: "Esfera da Consciência Infinita" },
    temperament: ["buddhi"],
    maxAttainment: "6th (2nd Formless) Jhāna",
    desc: {
      en: "Taking infinite space itself as the object, awareness shifts to the knowing consciousness that cognized that space: 'Consciousness is infinite.'",
      pt: "Tomando a própria consciência que abarca o espaço infinito como objeto: 'A consciência é infinita'."
    }
  },
  {
    id: "aruppa-akincannayatana",
    category: { en: "4 Āruppas (Formless Attainments)", pt: "4 Āruppas (Absorções Sem Forma)" },
    pali: "Ākiñcaññāyatana",
    name: { en: "Base of Nothingness", pt: "Esfera do Nada" },
    temperament: ["buddhi"],
    maxAttainment: "7th (3rd Formless) Jhāna",
    desc: {
      en: "Turning away from infinite consciousness to the subtle absence of that consciousness: 'There is nothing whatever.' Profound unshakeable peace.",
      pt: "Afastando-se da consciência infinita para a sutil ausência desta: 'Não há coisa alguma'. Serenidade inabalável."
    }
  },
  {
    id: "aruppa-nevasannanasannayatana",
    category: { en: "4 Āruppas (Formless Attainments)", pt: "4 Āruppas (Absorções Sem Forma)" },
    pali: "Nevasaññānāsaññāyatana",
    name: { en: "Base of Neither-Perception-Nor-Non-Perception", pt: "Esfera de Nem-Percepção-Nem-Não-Percepção" },
    temperament: ["buddhi"],
    maxAttainment: "8th (4th Formless) Jhāna",
    desc: {
      en: "Perception is so refined that it cannot be said to exist, yet not entirely absent. The pinnacle of conditioned mundane mental concentration.",
      pt: "A percepção torna-se tão sutil que não se pode afirmar que exista, nem que esteja ausente. O cume da concentração condicionada."
    }
  },

  // 1 AHAREPATIKKULASANNA
  {
    id: "aharepatikkulasanna",
    category: { en: "Physical Specific Contemplations", pt: "Contemplações Específicas Físicas" },
    pali: "Āhārepaṭikkūlasaññā",
    name: { en: "Perception of Repulsiveness in Nutriment", pt: "Percepção da Repugnância do Alimento" },
    temperament: ["raga", "buddhi"],
    maxAttainment: "Access Concentration (Upacāra)",
    desc: {
      en: "Reflecting on food during procurement, preparation, mastication with saliva, digestive acids, and bodily waste. Overcomes gluttony and food addiction.",
      pt: "Refletir sobre o alimento: busca, mastigação, digestão ácida e excreção. Cura o vício alimentar, gula e escravidão gustativa."
    }
  },

  // 1 CATUDHATUVAVATTHANA
  {
    id: "catudhatuvavatthana",
    category: { en: "Physical Specific Contemplations", pt: "Contemplações Específicas Físicas" },
    pali: "Catudhātu-vavatthāna",
    name: { en: "Analysis of the Four Elements", pt: "Análise dos Quatro Elementos" },
    temperament: ["buddhi"],
    maxAttainment: "Access Concentration (Upacāra)",
    desc: {
      en: "Investigating the biological body in terms of Earth (hardness/softness), Water (cohesion/fluidity), Fire (warmth/cooling), and Wind (motion/pressure). Master bridge to Vipassanā.",
      pt: "Investigar o corpo biológico como Terra (solidez), Água (coesão), Fogo (temperatura) e Ar (pressão e movimento). A ponte mestra para o Insight."
    }
  }
];
const SIXTEEN_INSIGHT_NANAS = [
  {
    stage: 1,
    pali: "Nāmarūpapariccheda-ñāṇa",
    name: { en: "Knowledge of Delimiting Mentality and Materiality", pt: "Conhecimento do Discernimento de Mente e Matéria" },
    desc: {
      en: "Directly perceiving that experience consists exclusively of material physical processes (rūpa) and mental knowing processes (nāma). Dissolves the belief in an indivisible monolithic self.",
      pt: "Percepção direta de que a existência é composta unicamente de processos físicos (rūpa) e eventos mentais que conhecem (nāma). Desmorona a crença num 'eu' monolítico."
    },
    symptoms: {
      en: "Clearly seeing physical movement separate from the intention to move; hearing separate from sound.",
      pt: "Ver com nitidez o movimento corporal separado da intenção de mover; o som separado do ato de ouvir."
    }
  },
  {
    stage: 2,
    pali: "Paccayatpariggaha-ñāṇa",
    name: { en: "Knowledge of Discerning Cause and Condition", pt: "Conhecimento do Discernimento de Causa e Efeito" },
    desc: {
      en: "Seeing that mental and physical events do not happen by chance or by a creator's whim, but are condition-driven (Dependent Arising). Dispels past, present, and future existential doubts.",
      pt: "Compreensão lúcida de que eventos mentais e corporais não surgem ao acaso nem por desígnio divino, mas por causas e condições mútuas. Erradica dúvidas céticas."
    },
    symptoms: {
      en: "Direct verification that eye + visible form -> eye-consciousness arises.",
      pt: "Verificação empírica de que olho + forma visual -> consciência visual brota."
    }
  },
  {
    stage: 3,
    pali: "Sammasana-ñāṇa",
    name: { en: "Knowledge of Comprehension by Groups", pt: "Conhecimento da Apreensão pelas Três Marcas" },
    desc: {
      en: "Directly testing all five aggregates across the three universal marks: Impermanence (anicca), Unsatisfactoriness (dukkha), and Not-Self (anattā).",
      pt: "Investigação sistemática dos cinco agregados sob as três características: Inconstância (anicca), Insatisfatoriedade (dukkha) e Não-Eu (anattā)."
    },
    symptoms: {
      en: "Sensations are experienced in flashes and rhythmic bursts rather than smooth blocks.",
      pt: "Sensações começam a ser vivenciadas em lampejos e pulsações rítmicas e não como blocos compactos."
    }
  },
  {
    stage: 4,
    pali: "Udayabbaya-ñāṇa",
    name: { en: "Knowledge of Arising and Passing Away", pt: "Conhecimento do Surgimento e Dissolução" },
    desc: {
      en: "The watershed insight. Meditator perceives the instantaneous flashing into being and instantaneous vanishing of every thought, sound, and sensation.",
      pt: "O marco divisor das águas. O praticante testemunha o surgimento fulgurante e o desaparecimento instantâneo de cada sensação e pensamento."
    },
    symptoms: {
      en: "Accompanied by the 'Pitfalls of Insight' (Vipassanupakkilesa): brilliant golden light, ecstatic rapture, goosebumps, profound peacefulness, and unbounded faith. Meditators often mistakenly believe they are fully enlightened here.",
      pt: "Acompanhado pelas 'Corrupções do Insight' (Vipassanupakkilesa): luz dourada intensa, arrebatamento eufórico, paz sublime. Muitos acreditam equivocadamente que alcançaram a iluminação neste ponto."
    }
  },
  {
    stage: 5,
    pali: "Bhaṅga-ñāṇa",
    name: { en: "Knowledge of Dissolution", pt: "Conhecimento da Dissolução" },
    desc: {
      en: "Attention shifts entirely from the arising to the vanishing and crumbling of all phenomena. The world appears like bubbles popping or mist dissipating.",
      pt: "O foco desloca-se inteiramente para a cessação e o desmoronamento dos fenômenos. O mundo parece feito de bolhas de sabão estourando instantaneamente."
    },
    symptoms: {
      en: "Lights and visions vanish. Objects crumble before they can fully form. Clear perception of universal decay.",
      pt: "As luzes místicas cessam. Os objetos dissolvem-se antes de se completarem. Percepção visceral da mortalidade."
    }
  },
  {
    stage: 6,
    pali: "Bhaya-ñāṇa",
    name: { en: "Knowledge of Fearfulness / Dread", pt: "Conhecimento do Terror / Temor Reverente" },
    desc: {
      en: "Seeing that all formations in every realm of existence disintegrate continuously, the mind experiences a holy dread: there is no safe refuge in conditioned reality.",
      pt: "Ao testemunhar que tudo o que existe desmorona sem cessar, a mente sente um pavor cósmico: não há refúgio seguro em nada condicionado."
    },
    symptoms: {
      en: "Sober visceral realization that worldly possessions, family, and physical body offer zero lasting security.",
      pt: "Desilusão lúcida e sóbria de que riqueza, carreira e corpo físico oferecem zero refúgio definitivo."
    }
  },
  {
    stage: 7,
    pali: "Ādīnava-ñāṇa",
    name: { en: "Knowledge of Disadvantage / Danger", pt: "Conhecimento do Perigo / Desvantagem" },
    desc: {
      en: "Formations are recognized as fundamentally defective, perilous, and inherently flawed. Grasping after any conditioned object is seen as picking up glowing coals.",
      pt: "As formações são reconhecidas como inerentemente perigosas e defectivas. Apegar-se ao mundo é visto como agarrar carvões em brasa."
    },
    symptoms: {
      en: "Loss of interest in petty entertainment, superficial gossip, and worldly ambitions.",
      pt: "Perda total de fascínio por distrações superficiais, fofocas e vaidades mundanas."
    }
  },
  {
    stage: 8,
    pali: "Nibbidā-ñāṇa",
    name: { en: "Knowledge of Disenchantment", pt: "Conhecimento do Desencanto" },
    desc: {
      en: "The mind turns away with profound dispassion and healthy disenchantment from all sensory stimulation, like a golden swan turning away from a muddy puddle.",
      pt: "A mente recua com desapego imaculado de todo estímulo sensorial, como um cisne que evita uma poça de lama pútrida."
    },
    symptoms: {
      en: "Not clinical depression, but a pristine, cool, sober dispassion towards sensory indulgence.",
      pt: "Não se confunde com depressão patológica, mas expressa uma sobriedade fresca e límpida diante dos prazeres efêmeros."
    }
  },
  {
    stage: 9,
    pali: "Muñcitukamyatā-ñāṇa",
    name: { en: "Knowledge of Desire for Deliverance", pt: "Conhecimento do Desejo de Libertação" },
    desc: {
      en: "An overwhelming yearning to be delivered from the burning house of saṁsāra, like a bird caught in a hunter's cage seeking the open sky.",
      pt: "Um anseio comovente por escapar da casa em chamas do saṁsāra, como um pássaro que busca o céu livre da gaiola do caçador."
    },
    symptoms: {
      en: "Deep spiritual urgency (saṁvega) and unbending determination to find absolute freedom.",
      pt: "Urgência espiritual ardente (saṁvega) e determinação irrestrita para encontrar a liberdade real."
    }
  },
  {
    stage: 10,
    pali: "Paṭisaṅkhā-ñāṇa",
    name: { en: "Knowledge of Re-Observation / Re-Investigation", pt: "Conhecimento da Re-Investigação Reflexiva" },
    desc: {
      en: "To find deliverance, the meditator renews meditation with immense fortitude, re-examining the three characteristics with surgical precision.",
      pt: "Para alcançar a libertação, o meditador redobra o esforço, reinvestigando as três características com bisturi analítico."
    },
    symptoms: {
      en: "Intense physical sensations or restless pain may reappear, but are penetrated with heroic patience.",
      pt: "Dores intensas podem reaparecer, sendo atravessadas com paciência heroica e lucidez cirúrgica."
    }
  },
  {
    stage: 11,
    pali: "Saṅkhārupekkhā-ñāṇa",
    name: { en: "Knowledge of Equanimity towards Formations", pt: "Conhecimento da Equanimidade ante as Formações" },
    desc: {
      en: "The supreme peak of mundane insight. The mind becomes completely effortless, balanced, and serene. It neither grasps pleasant nor resists unpleasant formations.",
      pt: "O ápice supremo do insight mundano. A mente repousa em equilíbrio perfeito e sem esforço. Nem se apega ao agradável, nem teme o desagradável."
    },
    symptoms: {
      en: "Effortless sits for hours. Panoramic, diamond-like stillness. All mental states flow past like clouds without causing a ripple.",
      pt: "Horas de meditação fluida sem esforço. Serenidade diamantina. Todas as coisas passam como nuvens sem perturbar a calma."
    }
  },
  {
    stage: 12,
    pali: "Anuloma-ñāṇa",
    name: { en: "Conformity / Adaptation Knowledge", pt: "Conhecimento da Conformidade" },
    desc: {
      en: "The mind harmonizes the insights of the lower knowledges with the transcendent threshold, preparing for the leap beyond saṁsāra.",
      pt: "A mente harmoniza os insights anteriores preparando-se para o salto além das fronteiras do saṁsāra."
    },
    symptoms: {
      en: "Last three cognitive moments before the breakthrough to the Unconditioned.",
      pt: "Últimos momentos cognitivos antes do romper do Véu para o Incondicionado."
    }
  },
  {
    stage: 13,
    pali: "Gotrabhu-ñāṇa",
    name: { en: "Change of Lineage Knowledge", pt: "Conhecimento da Mudança de Linhagem" },
    desc: {
      en: "The bridge moment: awareness cuts the lineage of the ordinary worldling (puthujjana) and enters the lineage of the Noble Ones (ariya).",
      pt: "O instante da travessia: a consciência corta os laços da linhagem mundana e ingressa na linhagem dos Nobres Discípulos (Ariya)."
    },
    symptoms: {
      en: "Taking Nibbāna (cessation of all formations) as object for the first time.",
      pt: "Toma Nibbāna (a cessação de toda fabricação) como objeto pela primeira vez."
    }
  },
  {
    stage: 14,
    pali: "Magga-ñāṇa",
    name: { en: "The Path Knowledge (Stream-Entry / Sakadāgāmī / Anāgāmī / Arahant)", pt: "O Conhecimento do Nobre Caminho (Sotāpatti / Arahant)" },
    desc: {
      en: "The transcendent flash of the Noble Path consciousness, severing lower defilements (identity view, doubt, clinging to rites) permanently.",
      pt: "O lampejo transcendental da consciência do Caminho, erradicando para sempre as impurezas de base (ilusão do eu, dúvida, apego a ritos)."
    },
    symptoms: {
      en: "Radical unbinding, instantaneous cessation of all cognitive fabrication.",
      pt: "Desatamento radical de grilhões, cessação instantânea de toda fabricação cognitiva."
    }
  },
  {
    stage: 15,
    pali: "Phala-ñāṇa",
    name: { en: "The Fruition Knowledge", pt: "O Conhecimento do Fruto do Despertar" },
    desc: {
      en: "The direct experiential tasting of the peace of Nibbāna as the immediate result of the Path.",
      pt: "A degustação experiencial direta da paz imaculada de Nibbāna como fruto imediato do Caminho."
    },
    symptoms: {
      en: "Supreme stillness, relief, and unconditioned bliss.",
      pt: "Quietude sublime, alívio incomensurável e bênção incondicionada."
    }
  },
  {
    stage: 16,
    pali: "Paccavekkhaṇa-ñāṇa",
    name: { en: "Knowledge of Retrospection / Reviewing", pt: "Conhecimento da Revisão Retrospectiva" },
    desc: {
      en: "The meditator returns to conventional awareness and reviews: the Path attained, the Fruit experienced, Nibbāna realized, and the defilements abandoned.",
      pt: "O praticante retorna à consciência comum e revisa: o Caminho alcançado, o Fruto colhido, Nibbāna contemplado e os grilhões rompidos."
    },
    symptoms: {
      en: "Unshakeable confidence in the Buddha, Dhamma, and Sangha; end of all religious doubt forever.",
      pt: "Confiança inabalável nas Três Joias e extinção definitiva de qualquer dúvida existencial."
    }
  }
];
const FIVE_HINDRANCES = [
  {
    id: "kamacchanda",
    pali: "Kāmacchanda",
    name: { en: "Sensual Desire", pt: "Desejo Sensual / Cobiça" },
    simile: {
      en: "Water dyed with variegated colors: you cannot see your true reflection in it.",
      pt: "Água tingida com tintas coloridas: você não consegue enxergar seu próprio reflexo nela."
    },
    canonicalCause: {
      en: "Unwise attention (ayoniso manasikāra) given to the attractive feature (subhanimitta) of worldly objects.",
      pt: "Atenção tola (ayoniso manasikāra) concedida ao aspecto sedutor e aparente das coisas do mundo."
    },
    antidotes: [
      {
        lineage: "Canonical EBT / Visuddhimagga",
        remedy: {
          en: "Asubha meditation: anatomically visualizing the 31 body parts or decay to shatter lustful idealization.",
          pt: "Meditação Asubha: visualizar as partes anatômicas internas ou a decomposição para dissolver a ilusão sensual."
        }
      },
      {
        lineage: "Thai Forest (Ajahn Chah)",
        remedy: {
          en: "Say 'Mai Nae' (It's not sure / impermanent). If you get the object of your desire, it will decay and cause grief.",
          pt: "Diga 'Mai Nae' (Isto é incerto). Se obtiver o objeto desejado, ele irá se degradar e trazer tristeza."
        }
      },
      {
        lineage: "Burmese (Goenka)",
        remedy: {
          en: "Notice the biological craving as tingling heat or nervous energy in the chest and genitals. Observe without moving or indulging.",
          pt: "Perceba o desejo como calor somático ou energia nervosa no peito e baixo-ventre. Observe sem se mexer nem alimentá-lo."
        }
      },
      {
        lineage: "TWIM (Bhante Vimalaramsi)",
        remedy: {
          en: "Apply the 6Rs: Recognize the pull, Release the fantasy, RELAX the tightness in the brain, Re-smile, and Return to Mettā.",
          pt: "Aplique os 6Rs: Reconheça o impulso, Solte a fantasia, RELAXE a tensão na cabeça, Re-sorria e Retorne a Mettā."
        }
      }
    ]
  },
  {
    id: "byapada",
    pali: "Byāpāda",
    name: { en: "Ill-Will / Aversion / Anger", pt: "Má-Vontade / Aversão / Raiva" },
    simile: {
      en: "Boiling water bubbling over fire: completely obscured by turbulent steam and fury.",
      pt: "Água fervente borbulhando sobre as chamas: turvada pelo vapor turbulento e fúria."
    },
    canonicalCause: {
      en: "Giving unwise attention to irritating qualities (paṭighanimitta) and perceived injuries.",
      pt: "Atenção negligente focada nos defeitos alheios e ofensas percebidas."
    },
    antidotes: [
      {
        lineage: "Canonical EBT / Visuddhimagga",
        remedy: {
          en: "Mettā-bhāvanā: radiate loving-kindness first to a respected benefactor, then to a dear friend, neutral person, and finally to the antagonist.",
          pt: "Mettā-bhāvanā: irradiar bondade primeiro a um mestre reverenciado, depois a um amigo, a uma pessoa neutra e ao desafeto."
        }
      },
      {
        lineage: "Thai Forest (Ajahn Brahm)",
        remedy: {
          en: "Practice 'The Door of My Heart Is Always Open to You'. Anger is punishing yourself for someone else's mistake.",
          pt: "Pratique 'A porta do meu coração está sempre aberta para você'. Raiva é punir a si mesmo pelo erro alheio."
        }
      },
      {
        lineage: "Burmese (U Tejaniya)",
        remedy: {
          en: "Investigate: 'Can the mind know that anger is present without getting angry at the anger?' Treat anger as a psychological weather pattern.",
          pt: "Investigue: 'A mente consegue saber que a raiva está presente sem sentir raiva da raiva?' Trate-a como clima meteorológico."
        }
      }
    ]
  },
  {
    id: "thina-middha",
    pali: "Thīna-Middha",
    name: { en: "Sloth & Torpor (Mental & Physical Dullness)", pt: "Preguiça & Torpor (Letargia Mental e Física)" },
    simile: {
      en: "Water choked with thick green algae and weeds: dense, stagnant, suffocating light.",
      pt: "Água sufocada por algas densas e lodo: estagnada, pesada e escura."
    },
    canonicalCause: {
      en: "Unwise attention given to boredom, sluggishness, overeating, and mental heaviness (arandi, tandi).",
      pt: "Atenção negligente dada ao enfado, indolência, digestão pesada e moleza física."
    },
    antidotes: [
      {
        lineage: "Canonical EBT (AN 7.58 Moggallāna Sutta)",
        remedy: {
          en: "The Buddha's 7 remedies to Ven. Moggallāna: 1. Change your mental theme, 2. Chant verses aloud, 3. Pull your earlobes and rub limbs, 4. Wash eyes with cold water, 5. Stand up and gaze at stars, 6. Walking meditation (caṅkama), 7. Mindful rest with clear resolve to arise.",
          pt: "Os 7 remédios do Buda a Moggallāna: 1. Mudar o tema de reflexão, 2. Recitar em voz alta, 3. Puxar as orelhas e massagear os braços, 4. Lavar os olhos com água gelada, 5. Olhar para as estrelas, 6. Meditar andando, 7. Deitar-se lúcido com hora marcada para acordar."
        }
      },
      {
        lineage: "Pa-Auk / Visuddhimagga",
        remedy: {
          en: "Āloka-kasiṇa: intentionally generate the perception of brilliant white light inside the mind to illuminate sluggish dark brain fog.",
          pt: "Āloka-kasiṇa: gerar conscientemente a imagem mental de uma luz branca deslumbrante para varrer a névoa mental."
        }
      },
      {
        lineage: "Thai Forest (Ajahn Lee)",
        remedy: {
          en: "Take 5 deep, forceful in-and-out breaths, pushing the breath energy up into the crown of the head to supercharge the nervous system.",
          pt: "Dê 5 respirações vigorosas e profundas, projetando a energia respiratória para o topo do crânio para energizar o cérebro."
        }
      }
    ]
  },
  {
    id: "uddhacca-kukkucca",
    pali: "Uddhacca-Kukkucca",
    name: { en: "Restlessness & Remorse / Anxiety", pt: "Inquietação & Remorso / Ansiedade" },
    simile: {
      en: "Water whipped by violent gale-force winds: churning with furious waves, unable to settle.",
      pt: "Água açoitada por vendavais violentos: agitada por ondas encapeladas, incapaz de acalmar."
    },
    canonicalCause: {
      en: "Giving unwise attention to unpeaceful, racing thoughts and brooding over past moral blunders or future tasks.",
      pt: "Focar em pensamentos acelerados e remoer erros éticos passados ou tarefas futuras pendentes."
    },
    antidotes: [
      {
        lineage: "Canonical EBT / Sīlānussati",
        remedy: {
          en: "Clean up ethical behavior. For past mistakes, resolve: 'I recognize this error, I will not repeat it', then forgive yourself and move forward.",
          pt: "Alinhe a conduta moral. Diante de erros passados, declare: 'Reconheço o deslize, não o repetirei', perdoe-se e siga adiante."
        }
      },
      {
        lineage: "Thai Forest (Ajahn Chah)",
        remedy: {
          en: "Anchor physically to the floor. Notice that restless thoughts are just clouds passing through an enormous sky.",
          pt: "Ancore-se no solo. Observe que pensamentos acelerados são apenas nuvens passando num céu incomensuravelmente vasto."
        }
      },
      {
        lineage: "TWIM (Bhante Vimalaramsi)",
        remedy: {
          en: "Restlessness is pure physical tension in the meninges/head. Consciously relax the forehead and skull muscles; smile gently.",
          pt: "A inquietação é tensão física nas meninges. Relaxe ativamente a testa, a nuca e o couro cabeludo; esboce um leve sorriso."
        }
      }
    ]
  },
  {
    id: "vicikiccha",
    pali: "Vicikicchā",
    name: { en: "Skeptical Doubt / Paralysis of Indecision", pt: "Dúvida Cética / Paralisia da Indecisão" },
    simile: {
      en: "Water placed in deep darkness and thick mud: unable to discern what lies beneath.",
      pt: "Água no fundo de um poço escuro e lamacento: impossível discernir o que há no fundo."
    },
    canonicalCause: {
      en: "Unwise attention paid to speculative, unanswerable philosophical questions without doing empirical practice.",
      pt: "Alimentar especulações filosóficas insolúveis em vez de dedicar-se à verificação empírica do método."
    },
    antidotes: [
      {
        lineage: "Canonical EBT (MN 2 Sabbāsava Sutta)",
        remedy: {
          en: "Study canonical definitions. Clarify the path with a trusted monastic teacher. Recognize doubt as just another passing hindrance, not truth.",
          pt: "Estudo canônico diligente. Tirar dúvidas com mestres experientes. Reconhecer a dúvida como mais um obstáculo transitório e não como verdade."
        }
      },
      {
        lineage: "Burmese (Mahāsi)",
        remedy: {
          en: "Note: 'doubting, doubting, doubting'. Do not answer the question; simply observe the emotion of uncertainty.",
          pt: "Rotule: 'duvidando, duvidando'. Não responda ao dilema mental; observe a sensação física da incerteza no peito."
        }
      },
      {
        lineage: "Thai Forest (Ajahn Maha Boowa)",
        remedy: {
          en: "Throw yourself into the meditation object with unbending determination: 'Let doubt die, I will stay with Buddho.'",
          pt: "Mergulhe com determinação heroica no mantram: 'Que a dúvida morra, permanecerei inabalável com Buddho.'"
        }
      }
    ]
  }
];
const LINEAGE_COMPARISON_MATRIX = [
  {
    lineageId: "ebt-anapanasati",
    name: "Canonical Ānāpānasati (MN 118)",
    anchor: "Tactile breath at nostrils",
    notingStyle: "None (Direct discernment)",
    jhanaView: "Natural organic absorption",
    vedanaApproach: "Experiencing pīti & sukha",
    dailyLifeIntegration: "High (Breath resets anywhere)",
    keyStrength: "Pure canonical Buddha root"
  },
  {
    lineageId: "thai-forest-ajahn-chah",
    name: "Ajahn Chah (Wat Nong Pah Pong)",
    anchor: "Natural awareness / The One Who Knows",
    notingStyle: "Minimal ('Mai Nae' - It's uncertain)",
    jhanaView: "Consequence of letting go, warns against clinging to peace",
    vedanaApproach: "Accept pain as supreme teacher",
    dailyLifeIntegration: "Exceptional ('Still Flowing Water' in work)",
    keyStrength: "Radical non-clinging in worldly life"
  },
  {
    lineageId: "thai-forest-ajahn-lee",
    name: "Ajahn Lee (Wat Asokaram)",
    anchor: "Breath energy circulating through nerves",
    notingStyle: "Somatic evaluation (Vitakka-Vicāra)",
    jhanaView: "Fills whole body with energy to enter 4 Jhānas",
    vedanaApproach: "Uses breath energy to dissolve pain knots",
    dailyLifeIntegration: "High (Relieves physical fatigue)",
    keyStrength: "Somatic vitality and natural healing"
  },
  {
    lineageId: "thai-forest-ajahn-brahm",
    name: "Ajahn Brahm (Bodhinyana)",
    anchor: "Gentle breath -> Beautiful breath -> Nimitta",
    notingStyle: "None (Silent, delighting in stillness)",
    jhanaView: "Deep fixed absorption (senses shut down)",
    vedanaApproach: "Letting go of body entirely",
    dailyLifeIntegration: "Moderate (Deep sits required for nimitta)",
    keyStrength: "Systematic 7-step map to Jhānas"
  },
  {
    lineageId: "burmese-mahasi",
    name: "Mahāsi Sayādaw (Burmese Dry-Insight)",
    anchor: "Rising & falling of abdomen",
    notingStyle: "Relentless mental labeling of every event",
    jhanaView: "Momentary concentration (Khaṇika Samādhi)",
    vedanaApproach: "Note pain directly until it dissolves",
    dailyLifeIntegration: "High (Noting brakes runaway thoughts)",
    keyStrength: "Laser-like 16 Insight Knowledges map"
  },
  {
    lineageId: "burmese-goenka-ledi",
    name: "S.N. Goenka & Ledi Sayādaw",
    anchor: "Part-by-part somatic body sweep",
    notingStyle: "Strictly forbidden (Pure silent equanimity)",
    jhanaView: "Access concentration via 3-day Ānāpāna",
    vedanaApproach: "Primary laboratory: observing somatic anicca",
    dailyLifeIntegration: "High (Equanimity in physical stress)",
    keyStrength: "Direct somatic rewiring of craving"
  },
  {
    lineageId: "burmese-pa-auk",
    name: "Pa-Auk Sayādaw (Classical Visuddhimagga)",
    anchor: "White nostril-tip Nimitta & 4 Elements",
    notingStyle: "Microscopic Abhidhamma discernment",
    jhanaView: "Exhaustive mastery of all 8 Jhānas + masteries",
    vedanaApproach: "Dissects pain into kalāpa subatomic units",
    dailyLifeIntegration: "Challenging (Demands intensive monastic time)",
    keyStrength: "Unmatched classical erudition and rigor"
  },
  {
    lineageId: "burmese-tejaniya",
    name: "Sayadaw U Tejaniya (Cittānupassanā)",
    anchor: "The observing mind's attitude",
    notingStyle: "Gentle inquiry ('What is mind doing?')",
    jhanaView: "Continuous 24-hr awareness over transes",
    vedanaApproach: "Check if mind dislikes the pain",
    dailyLifeIntegration: "Supreme (Designed by former lay merchant)",
    keyStrength: "Effortless continuity all day long"
  },
  {
    lineageId: "sri-lanka-nanananda",
    name: "Ven. Ñāṇananda (Meetirigala Hermitage)",
    anchor: "Signless unconditioned (Animitta) & Emptiness",
    notingStyle: "Deconstructing linguistic concepts",
    jhanaView: "Stages of conditioned emptiness",
    vedanaApproach: "Exposes feeling as magician's trick",
    dailyLifeIntegration: "High (Cuts mental stories/overthinking)",
    keyStrength: "Radical deconstruction of ego-illusions"
  },
  {
    lineageId: "contemporary-twim",
    name: "Bhante Vimalaramsi (TWIM)",
    anchor: "Loving-Kindness (Mettā) & head relaxation",
    notingStyle: "The 6Rs cycle",
    jhanaView: "Light Sutta-Jhānas with expansive awareness",
    vedanaApproach: "Relax the physical tension in the chest/brain",
    dailyLifeIntegration: "Exceptional (6Rs apply in any situation)",
    keyStrength: "Gentle, joyful, heart-centered liberation"
  }
];


  // ==========================================
  // 3. CANONICAL SUTTA MEDITATION CORPUS
  // ==========================================
/**
 * The Lay Dharma Household Bhāvanā — Canonical Sutta Meditation Corpus
 * Primary discourses on Bhāvanā (mental development, tranquility & insight).
 * Bilingual: English (EN) and Portuguese (PT-BR) with Pāli root texts.
 */
const SUTTA_MEDITATION_CORPUS = [
  {
    code: "MN 118",
    paliTitle: "Ānāpānasati Sutta",
    title: {
      en: "Mindfulness of Breathing",
      pt: "Atenção Plena na Respiração"
    },
    suttaCentralUrl: "https://suttacentral.net/mn118",
    role: {
      en: "The master roadmap: sixteen sequential contemplations fulfilling the Four Foundations of Mindfulness and the Seven Awakening Factors.",
      pt: "O mapa mestre: dezesseis contemplações que realizam os Quatro Fundamentos da Atenção Plena e os Sete Fatores do Despertar."
    },
    keyPassage: {
      pali: "Ānāpānasati, bhikkhave, bhāvitā bahulīkatā cattāro satipaṭṭhāne paripūreti. Cattāro satipaṭṭhānā bhāvitā bahulīkatā satta bojjhaṅge paripūrenti. Satta bojjhaṅgā bhāvitā bahulīkatā vijjāvimuttiṁ paripūrenti.",
      en: "Mindfulness of breathing, monks, when developed and cultivated, fulfills the four establishments of mindfulness. The four establishments of mindfulness fulfill the seven factors of awakening. The seven factors of awakening fulfill true knowledge and liberation.",
      pt: "A atenção plena na respiração, monges, quando desenvolvida e cultivada, realiza plenamente os quatro fundamentos da atenção plena. Os quatro fundamentos realizam os sete fatores do despertar. E estes realizam o verdadeiro conhecimento e a libertação."
    }
  },
  {
    code: "MN 10",
    paliTitle: "Satipaṭṭhāna Sutta",
    title: {
      en: "The Establishments of Mindfulness",
      pt: "Os Fundamentos da Atenção Plena"
    },
    suttaCentralUrl: "https://suttacentral.net/mn10",
    role: {
      en: "The direct convergence path for the purification of beings, overcoming grief, ending pain, and realizing Nibbāna.",
      pt: "O caminho direto para a purificação dos seres, superação da tristeza, cessação da dor e realização de Nibbāna."
    },
    keyPassage: {
      pali: "Ekāyano ayaṁ, bhikkhave, maggo sattānaṁ visuddhiyā, sokaparidevānaṁ samatikkamāya, dukkhadomanassānaṁ atthaṅgamāya, ñāyassa adhigamāya, nibbānassa sacchikiriyāya, yadidaṁ cattāro satipaṭṭhānā.",
      en: "This is the direct path for the purification of beings, for the surmounting of sorrow and lamentation, for the ending of pain and grief, for reaching the true way, for the realization of Nibbāna — namely, the four establishments of mindfulness.",
      pt: "Este é o caminho direto para a purificação dos seres, para a superação do pesar e da lamentação, para a extinção da dor e da aflição, para alcançar o nobre método e realizar Nibbāna — a saber, os quatro fundamentos da atenção plena."
    }
  },
  {
    code: "AN 4.170",
    paliTitle: "Yuganaddha Sutta",
    title: {
      en: "In Tandem (Samatha & Vipassanā Yoked Together)",
      pt: "Em Pareamento (Calma & Discernimento Conduzidos Juntos)"
    },
    suttaCentralUrl: "https://suttacentral.net/an4.170",
    role: {
      en: "Ven. Ānanda explains the four authentic ways meditators reach Arahantship through tranquility and insight.",
      pt: "O Ven. Ānanda elucida as quatro formas canônicas pelas quais a calma e o insight conduzem ao fruto de Arahant."
    },
    keyPassage: {
      pali: "Idhāvuso, bhikkhu samathapubbaṅgamaṁ vipassanaṁ bhāveti... vipassanāpubbaṅgamaṁ samathaṁ bhāveti... samathavipassanaṁ yuganaddhaṁ bhāveti...",
      en: "Here, a practitioner develops insight preceded by tranquility... or tranquility preceded by insight... or develops tranquility and insight in tandem (yuganaddha)... As they cultivate these, the path is born, and defilements are abandoned.",
      pt: "Aqui, um praticante desenvolve o discernimento precedido pela calma... ou a calma precedida pelo discernimento... ou desenvolve calma e discernimento pareados em uníssono (yuganaddha)... Ao cultivá-los, o Caminho nasce e os grilhões são desfeitos."
    }
  },
  {
    code: "MN 119",
    paliTitle: "Kāyagatāsati Sutta",
    title: {
      en: "Mindfulness Immersed in the Body & The Jhana Similes",
      pt: "Atenção Plena Imersa no Corpo & Os Símiles dos Jhānas"
    },
    suttaCentralUrl: "https://suttacentral.net/mn119",
    role: {
      en: "Describes how deep physical mindfulness suffuses the entire bodily frame with celestial rapture and peaceful ease throughout the four Jhānas.",
      pt: "Descreve como a presença corpórea profunda banha todo o corpo físico com arrebatamento e bem-estar ao longo dos quatro Jhānas."
    },
    keyPassage: {
      pali: "Seyyathāpi, bhikkhave, puriso unhodakāvāṭe nhāyeyya... evam'eva kho, bhikkhave, bhikkhu imameva kāyaṁ vivekajena pītisukhena abhisandeti parisandeti paripūreti parippharati.",
      en: "Just as a skilled bathman kneads moisture into soap clay until it is thoroughly saturated inside and out... so too the meditator permeates and suffuses this very body with the rapture and bliss born of seclusion.",
      pt: "Assim como um atendente de banho amassa sabão em pó com água até saturar cada partícula... assim também o meditador impregna e satura este próprio corpo com o êxtase e a paz nascidos do recolhimento."
    }
  },
  {
    code: "AN 9.36",
    paliTitle: "Jhāna Sutta",
    title: {
      en: "Meditative Absorption as Basis for Insight",
      pt: "A Absorção Meditativa como Base para o Insight"
    },
    suttaCentralUrl: "https://suttacentral.net/an9.36",
    role: {
      en: "Proves that any Jhāna (from 1st to 8th) serves as an immediate platform to examine the five aggregates as impermanent, unsatisfactory, and not-self.",
      pt: "Comprova que qualquer Jhāna (do 1º ao 8º) serve como plataforma imediata para dissecar os cinco agregados como inconstantes e não-eu."
    },
    keyPassage: {
      pali: "So te dhamme aniccato dukkhato rogato gaṇḍato sallato aghato ābādhato parato palokato suññato anattato samanupassati.",
      en: "Whatever phenomena exist in that absorption — form, feeling, perception, volitional formations, consciousness — one contemplates them as impermanent, suffering, a disease, an arrow, alien, disintegrating, empty, not-self.",
      pt: "Quaisquer fenômenos presentes naquela absorção — forma, sensação, percepção, formações, consciência — o meditador os contempla como inconstantes, dolorosos, uma enfermidade, uma flecha, alienígenas, vazios e desprovidos de um eu."
    }
  }
];


  // ==========================================
  // 4. APPLICATION CONTROLLER
  // ==========================================
/**
 * The Lay Dharma Household Bhāvanā — Theravāda Meditation Aggregate
 * Main Application Controller: Traditions Explorer, Deep Study Portal,
 * Master Comparative Matrix, 40 Kammaṭṭhānas Explorer, 16 Stages of Insight,
 * Five Hindrances Diagnostic, Sutta Library, Practice Journal, and Meditation Timer.
 */
// Global App State
const state = {
  lang: localStorage.getItem('bhavana_lang') || 'en',
  activeCluster: 'all',
  selectedLineageId: null,
  activePortalTab: 'method',
  temperamentFilter: 'all',
  activeToolTab: 'comparison',
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
    tabLayLife: "Householder Practice",
    tabPali: "Pāli Terminology",
    tabJournal: "Practice Journal",
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
    journalHeading: "Personal Meditation Practice Journal",
    journalIntro: "Record your session insights, observations of hindrances, and reflections. Data remains 100% private and saved locally on this device.",
    journalPlaceholder: "Enter your sit reflection (e.g., breath sensation, posture, obstacle met, antidote applied)...",
    journalSaveBtn: "Save Reflection",
    journalSavedNotice: "✓ Reflection saved locally",
    journalPastTitle: "Past Recorded Sits:",
    noPastJournals: "No journal reflections recorded yet. Complete a meditation sit and save your observations above.",
    colTradition: "Tradition / Lineage",
    colAnchor: "Primary Anchor",
    colNoting: "Noting Style",
    colJhana: "Approach to Jhāna",
    colVedana: "Vedanā (Sensation)",
    colLay: "Lay Feasibility",
    readSuttaCentral: "Read Full Text on SuttaCentral ↗"
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
    tabLayLife: "Prática na Vida Leiga",
    tabPali: "Terminologia Pāli",
    tabJournal: "Diário de Prática",
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
    journalHeading: "Diário Pessoal de Prática Meditativa",
    journalIntro: "Registre seus insights, obstáculos encontrados e resoluções. Seus registros permanecem 100% privados e armazenados localmente neste aparelho.",
    journalPlaceholder: "Registre sua reflexão após a sentada (sensações corporais, dispersões, calma, antídoto utilizado)...",
    journalSaveBtn: "Salvar Registro",
    journalSavedNotice: "✓ Registro salvo localmente",
    journalPastTitle: "Registros de Práticas Anteriores:",
    noPastJournals: "Nenhuma reflexão registrada ainda. Conclua uma prática meditativa e anote suas percepções acima.",
    colTradition: "Tradição / Linhagem",
    colAnchor: "Âncora Primária",
    colNoting: "Estilo de Rotulação",
    colJhana: "Visão sobre Jhānas",
    colVedana: "Manejo de Sensações (Vedanā)",
    colLay: "Praticabilidade Leiga",
    readSuttaCentral: "Ler Texto Completo no SuttaCentral ↗"
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

  if (state.activeCluster === 'tools') {
    if (grid) grid.style.display = 'none';
    if (portalWrap) portalWrap.style.display = 'none';
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
    if (portalWrap) {
      portalWrap.style.display = 'block';
      renderDeepStudyPortal();
    }
  } else {
    if (portalWrap) portalWrap.style.display = 'none';
    if (grid) {
      grid.style.display = 'grid';
      renderTraditionsGrid();
    }
  }
}

// Render Traditions Grid
function renderTraditionsGrid() {
  const grid = document.getElementById('traditionsGrid');
  if (!grid) return;

  let list = MEDITATION_LINEAGES;
  if (state.activeCluster !== 'all' && state.activeCluster !== 'tools') {
    list = list.filter(item => item.cluster === state.activeCluster);
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
        <span class="tradition-pali-badge">${item.paliTitle}</span>
      </div>
      <h3 class="tradition-title">${state.lang === 'pt' ? item.title.pt : item.title.en}</h3>
      <div class="tradition-meta">
        <span class="meta-label">${str.primaryMastersLabel}</span>
        <span class="meta-val">${item.primaryMasters}</span>
      </div>
      <div class="tradition-meta">
        <span class="meta-label">${str.canonicalSourceLabel}</span>
        <span class="meta-val highlight">${item.canonicalRef}</span>
      </div>
      <p class="tradition-tagline">“${state.lang === 'pt' ? item.tagline.pt : item.tagline.en}”</p>
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
    state.activeCluster = item.cluster || 'all';
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

    <div class="portal-hero">
      <h2 class="portal-title">${state.lang === 'pt' ? item.title.pt : item.title.en}</h2>
      <div class="portal-lineage-badge">${state.lang === 'pt' ? item.lineageTradition.pt : item.lineageTradition.en} • ${item.primaryMasters}</div>
      <p class="portal-overview">${state.lang === 'pt' ? item.overview.pt : item.overview.en}</p>
    </div>

    <nav class="portal-subtabs-nav" role="tablist">
      <button class="portal-tab-btn ${state.activePortalTab === 'method' ? 'active' : ''}" data-tab="method">${str.tabMethod}</button>
      <button class="portal-tab-btn ${state.activePortalTab === 'attainments' ? 'active' : ''}" data-tab="attainments">${str.tabAttainments}</button>
      <button class="portal-tab-btn ${state.activePortalTab === 'laylife' ? 'active' : ''}" data-tab="laylife">${str.tabLayLife}</button>
      <button class="portal-tab-btn ${state.activePortalTab === 'pali' ? 'active' : ''}" data-tab="pali">${str.tabPali}</button>
      <button class="portal-tab-btn ${state.activePortalTab === 'journal' ? 'active' : ''}" data-tab="journal">${str.tabJournal}</button>
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

  bindJournalEvents(item.id);
}

function renderPortalTabContent(item) {
  const str = I18N[state.lang];

  if (state.activePortalTab === 'method') {
    return `
      <div class="method-section">
        <div class="method-controls-bar">
          <span class="method-info-badge">${item.steps.length} Sequenced Practice Contemplations</span>
        </div>
        <div class="steps-timeline">
          ${item.steps.map(s => `
            <div class="step-card">
              <div class="step-num-pill">${s.step}</div>
              <div class="step-body">
                <div class="step-pali">${s.pali}</div>
                <h4 class="step-title">${state.lang === 'pt' ? s.title.pt : s.title.en}</h4>
                <p class="step-desc">${state.lang === 'pt' ? s.desc.pt : s.desc.en}</p>
              </div>
            </div>
          `).join('')}
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

  if (state.activePortalTab === 'laylife') {
    return `
      <div class="laylife-section">
        <div class="lay-guidance-card">
          <div class="lay-icon">🏡</div>
          <div class="lay-content">
            <h3>Integrating this Method into Everyday Household Life</h3>
            <p>${state.lang === 'pt' ? item.layApplication.pt : item.layApplication.en}</p>
          </div>
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

  if (state.activePortalTab === 'journal') {
    const savedKey = `bhavana_journal_${item.id}`;
    const pastEntries = JSON.parse(localStorage.getItem(savedKey) || '[]');

    return `
      <div class="journal-section">
        <h3>${str.journalHeading}</h3>
        <p class="journal-intro">${str.journalIntro}</p>
        <div class="journal-form">
          <textarea id="journalInput" rows="5" placeholder="${str.journalPlaceholder}"></textarea>
          <div class="journal-actions">
            <button class="btn-save-journal" id="btnSaveJournal">${str.journalSaveBtn}</button>
            <span class="journal-saved-feedback" id="journalFeedback" style="display:none">${str.journalSavedNotice}</span>
          </div>
        </div>

        <h4 class="past-journals-heading">${str.journalPastTitle}</h4>
        <div class="past-entries-list">
          ${pastEntries.length === 0 ? `<p class="no-entries">${str.noPastJournals}</p>` : pastEntries.map(e => `
            <div class="past-entry-card">
              <span class="entry-date">${e.date}</span>
              <p class="entry-text">${e.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  return '';
}

function bindJournalEvents(lineageId) {
  const saveBtn = document.getElementById('btnSaveJournal');
  const input = document.getElementById('journalInput');
  const feedback = document.getElementById('journalFeedback');

  saveBtn?.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) return;
    const key = `bhavana_journal_${lineageId}`;
    const past = JSON.parse(localStorage.getItem(key) || '[]');
    past.unshift({
      date: new Date().toLocaleDateString(state.lang === 'pt' ? 'pt-BR' : 'en-US', {
        year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
      }),
      text
    });
    localStorage.setItem(key, JSON.stringify(past));
    input.value = '';
    if (feedback) {
      feedback.style.display = 'inline';
      setTimeout(() => { feedback.style.display = 'none'; }, 2500);
    }
    renderDeepStudyPortal();
  });
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
      state.activeCluster = 'all';
      renderClusterTabs();
    }
    renderAppView();
  });

  // Initial Renders
  setLanguage(state.lang);
});


})();