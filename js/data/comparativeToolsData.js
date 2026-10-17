/**
 * The Lay Dharma Household Bhāvanā — Comparative Tools & Diagnostics Data
 * Contains: 40 Classical Kammaṭṭhānas with Temperament mappings,
 * The 16 Stages of Insight (Visuddhiñāṇa),
 * The Five Hindrances (Nīvaraṇa) Diagnostic,
 * and the Master Lineage Comparison Matrix.
 * Bilingual: English (EN) and Portuguese (PT-BR).
 */

export const TEMPERAMENTS = [
  { id: "all", en: "All Temperaments", pt: "Todos os Temperamentos" },
  { id: "raga", en: "Greed / Passion (Rāga)", pt: "Cobiça / Paixão (Rāga)", icon: "🔥" },
  { id: "dosa", en: "Aversion / Anger (Dosa)", pt: "Aversão / Raiva (Dosa)", icon: "⚡" },
  { id: "moha", en: "Delusion / Confusion (Moha)", pt: "Ilusão / Confusão (Moha)", icon: "🌫️" },
  { id: "saddha", en: "Devotion / Faith (Saddhā)", pt: "Fé / Devoção (Saddhā)", icon: "💎" },
  { id: "buddhi", en: "Intellect / Wisdom (Buddhi)", pt: "Intelecto / Sabedoria (Buddhi)", icon: "💡" },
  { id: "vitakka", en: "Restlessness / Agitation (Vitakka)", pt: "Agitação / Devaneio (Vitakka)", icon: "🌪️" }
];

export const FORTY_KAMMATTHANAS = [
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

export const SIXTEEN_INSIGHT_NANAS = [
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

export const FIVE_HINDRANCES = [
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

export const LINEAGE_COMPARISON_MATRIX = [
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
    lineageId: "ebt-satipatthana",
    name: "Canonical Satipaṭṭhāna (MN 10 / DN 22)",
    anchor: "4 Fields: Body, Feeling, Mind, Dhammas",
    notingStyle: "Direct recognition (Internal & External)",
    jhanaView: "Essential soil from which right samādhi grows",
    vedanaApproach: "Discerns pleasant, painful, neutral & worldly vs unworldly",
    dailyLifeIntegration: "Exceptional (Sampajañña in all postures & duties)",
    keyStrength: "The direct convergence path (Ekāyano maggo)"
  },
  {
    lineageId: "ebt-samannaphala",
    name: "Sāmaññaphala Sutta (DN 2)",
    anchor: "Guarding 6 sense doors & full-body suffusion",
    notingStyle: "Silent awareness leading to insight knowledge",
    jhanaView: "Classical 4 Jhāna similes (bathman, spring, lotuses, cloth)",
    vedanaApproach: "Joy from abandoning 5 hindrances",
    dailyLifeIntegration: "High (Sense restraint with digital/sensory inputs)",
    keyStrength: "Complete canonical architecture of the contemplative life"
  },
  {
    lineageId: "ebt-kayagatasati",
    name: "Kāyagatāsati Sutta (MN 119)",
    anchor: "Living body in all 4 postures & 4 elements",
    notingStyle: "Direct somatic presence without verbalization",
    jhanaView: "Whole-body permeation with rapture, bliss, and light",
    vedanaApproach: "Equanimity enduring acute physical pain & sickness",
    dailyLifeIntegration: "Supreme (Grounding in walking, eating, and chores)",
    keyStrength: "10 blessings conquering fear, dread, and bodily pain"
  },
  {
    lineageId: "ebt-vitakkasanthana",
    name: "Vitakkasaṇṭhāna Sutta (MN 20)",
    anchor: "Cognitive replacement & stepping down momentum",
    notingStyle: "Wholesome peg substitution & danger appraisal",
    jhanaView: "Prerequisite de-cluttering so mind can settle into jhāna",
    vedanaApproach: "Relief when poisonous unwholesome thoughts subside",
    dailyLifeIntegration: "Exceptional (Cures insomnia, rumination & anger)",
    keyStrength: "The Buddha's 5-step emergency combat protocol"
  },
  {
    lineageId: "ebt-yuganaddha",
    name: "Yuganaddha Sutta (AN 4.170)",
    anchor: "Dynamic balance of stillness & inquiry",
    notingStyle: "Flexible: noting during insight, silent in samatha",
    jhanaView: "4 paths: jhāna before insight, after insight, or in tandem",
    vedanaApproach: "Disenchantment with conditioned sensations",
    dailyLifeIntegration: "High (Diagnostic flexibility based on nervous system)",
    keyStrength: "Harmonizes Samatha & Vipassanā without dogma"
  },
  {
    lineageId: "ebt-samadhibhavana",
    name: "Samādhibhāvanā Sutta (AN 4.41)",
    anchor: "4 Modes: Jhānas, Light, Real-time tracking, 5 Aggregates",
    notingStyle: "Real-time tracking of sensations, perceptions & thoughts",
    jhanaView: "Primary practice for 'Pleasant dwelling in the here-and-now'",
    vedanaApproach: "Tracking arising, presence, and vanishing of feeling",
    dailyLifeIntegration: "High (Select mode based on present spiritual need)",
    keyStrength: "Exact fourfold taxonomy of meditative concentration"
  },
  {
    lineageId: "ebt-girimananda",
    name: "Girimānanda Sutta (AN 10.60)",
    anchor: "Universal marks, bodily danger, and breath integration",
    notingStyle: "Thematic reflection followed by silent 16-step breath",
    jhanaView: "Contemplation of dispassion (virāga) & cessation (nirodha)",
    vedanaApproach: "Transforming bodily sickness into insight into non-self",
    dailyLifeIntegration: "Exceptional (Supreme solace during illness & aging)",
    keyStrength: "10 healing contemplations that cure severe disease"
  },
  {
    lineageId: "ebt-jhana-insight",
    name: "Jhāna Sutta (AN 9.36)",
    anchor: "The 5 aggregates within or directly upon absorption",
    notingStyle: "7-fold diagnostic formula: impermanent, dart, empty, not-self",
    jhanaView: "Direct springboard for insight; turning to the Deathless",
    vedanaApproach: "Dissecting absorption bliss as conditioned & impermanent",
    dailyLifeIntegration: "Moderate (Deep sits required for high absorption)",
    keyStrength: "Proves that absorptions lead directly to Arahantship"
  },
  {
    lineageId: "ebt-culasunnata",
    name: "Cūḷasuññata Sutta (MN 121)",
    anchor: "Gradual reduction from wilderness to signless immersion",
    notingStyle: "Noting what is absent vs what slight disturbance remains",
    jhanaView: "Surpasses rūpa-jhānas into formless & signless concentration",
    vedanaApproach: "Deepest peace of progressive mental subtraction",
    dailyLifeIntegration: "High (Reducing sensory overload in noisy cities)",
    keyStrength: "Authentic canonical practice of Emptiness (Suññatā)"
  },
  {
    lineageId: "ebt-niramisa-vedana",
    name: "Nirāmisa Sutta (SN 36.31)",
    anchor: "Affective tone: worldly vs unworldly vs ultra-unworldly",
    notingStyle: "Discerning the root source of every feeling",
    jhanaView: "Validates jhanic bliss as holy unworldly pleasure (nirāmisa)",
    vedanaApproach: "Core laboratory: cultivating holy bliss over sensual hits",
    dailyLifeIntegration: "High (Replaces addictive dopamine with calm joy)",
    keyStrength: "Removes ascetic guilt; maps the spiritual hierarchy of joy"
  },
  {
    lineageId: "ebt-upakkilesa-anuruddha",
    name: "Upakkilesa Sutta (MN 128 / AN 3.100)",
    anchor: "Luminous sign (obhāsa/nimitta) & middle-path effort",
    notingStyle: "Detecting elation, excess force, and slack drifting",
    jhanaView: "Stabilizes fragile luminous nimittas into unwavering jhāna",
    vedanaApproach: "Overcoming emotional excitement when peace arises",
    dailyLifeIntegration: "High (Master goldsmith metaphor for work & life effort)",
    keyStrength: "Cures the 11 subtle mental corruptions of meditation light"
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
