/**
 * The Lay Dharma Household Bhāvanā — Theravāda Meditation Aggregate
 * Comprehensive Lineage Dataset: Traditions, Masters, Methods, Steps, Canonical Suttas & Householder Integration.
 * Bilingual: English (EN) and Portuguese (PT-BR).
 */

export const LINEAGE_CLUSTERS = [
  { id: "all", en: "All Traditions", pt: "Todas as Tradições", icon: "☸" },
  { id: "ebt", en: "Canonical EBT Suttas", pt: "Suttas Canônicos (EBT)", icon: "📜" },
  { id: "thai-forest", en: "Thai Forest (Kammaṭṭhāna)", pt: "Floresta Tailandesa", icon: "🌲" },
  { id: "burmese", en: "Burmese Vipassanā & Samatha", pt: "Tradições Birmanesas", icon: "🇲🇲" },
  { id: "sri-lanka", en: "Sri Lankan Hermitage", pt: "Eremitério do Sri Lanka", icon: "🇱🇰" },
  { id: "contemporary", en: "Modern & Sutta Integrations", pt: "Integrações Modernas", icon: "🧘" },
  { id: "tools", en: "Comparative Tools & Diagnostics", pt: "Ferramentas & Diagnósticos", icon: "⚖️" }
];

export const MEDITATION_LINEAGES = [
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
