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
  {
    "id": "ebt",
    "en": "Canonical EBT Suttas",
    "pt": "Suttas Canônicos (EBT)",
    "icon": "📜"
  },
  {
    "id": "thai-forest",
    "en": "Thai Forest (Kammaṭṭhāna)",
    "pt": "Floresta Tailandesa",
    "icon": "🌲"
  },
  {
    "id": "burmese",
    "en": "Burmese Vipassanā & Samatha",
    "pt": "Tradições Birmanesas",
    "icon": "🇲🇲"
  },
  {
    "id": "sri-lanka",
    "en": "Sri Lankan Hermitage",
    "pt": "Eremitério do Sri Lanka",
    "icon": "🇱🇰"
  },
  {
    "id": "contemporary",
    "en": "Modern & Sutta Integrations",
    "pt": "Integrações Modernas",
    "icon": "🧘"
  },
  {
    "id": "tools",
    "en": "Comparative Tools & Diagnostics",
    "pt": "Ferramentas & Diagnósticos",
    "icon": "⚖️"
  }
];
const MEDITATION_LINEAGES = [
  {
    "id": "ebt-anapanasati",
    "cluster": "ebt",
    "number": "01",
    "paliTitle": "Ānāpānasati",
    "title": {
      "en": "Mindfulness of In-and-Out Breathing",
      "pt": "Atenção Plena na Respiração (Inspiração e Expiração)"
    },
    "lineageTradition": {
      "en": "Canonical Early Buddhist Texts (EBT)",
      "pt": "Textos Budistas Antigos (EBT Canônico)"
    },
    "primaryMasters": "Gotama Buddha, Ven. Sāriputta, Ven. Ānanda",
    "canonicalRef": "MN 118 (Ānāpānasati Sutta), SN 54 (Ānāpāna Saṁyutta)",
    "difficulty": "intermediate",
    "curriculumOrder": 6,
    "difficultyLabel": {
      "en": "Intermediate",
      "pt": "Intermediário"
    },
    "recommendedPrereq": {
      "en": "DN 2 (Sāmaññaphala Sutta)",
      "pt": "DN 2 (Sāmaññaphala Sutta)"
    },
    "whyStudy": {
      "en": "The Buddha's own practice: 16 sequential steps linking body, feeling, mind, and awakening through breath.",
      "pt": "A prática do próprio Buda: 16 passos sequenciais unindo corpo, sensação, mente e despertar através da respiração."
    },
    "coreFocus": {
      "en": "16 Progressive Contemplations across 4 Tetrads unifying Samatha and Vipassanā",
      "pt": "16 Contemplações Progressivas em 4 Tétrades unindo Samatha e Vipassanā"
    },
    "primaryAnchor": {
      "en": "The natural tactile sensation of the in-and-out breath at the nose-tip or upper lip",
      "pt": "A sensação tátil natural da respiração na ponta do nariz ou lábio superior"
    },
    "approachToJhana": {
      "en": "Organic tranquility deepening naturally through calming bodily and mental formations, leading to absorption and insight",
      "pt": "Tranquilidade orgânica que se aprofunda pelo acalmar das formações corpóreas e mentais, conduzindo à absorção e ao insight"
    },
    "useOfNoting": {
      "en": "Discerning directly without verbal labels ('He discerns: I breathe in long; I breathe in short')",
      "pt": "Discernimento direto sem rotulação verbal ('Ele discerne: inspiro longo; inspiro curto')"
    },
    "tagline": {
      "en": "The Buddha's own foundational meditation method: sixteen steps that fulfill the Four Establishments of Mindfulness.",
      "pt": "O método meditativo do próprio Buda: dezesseis passos que realizam os Quatro Fundamentos da Atenção Plena."
    },
    "overview": {
      "en": "In the Ānāpānasati Sutta (MN 118), the Buddha teaches sixteen sequential contemplations organized into four tetrads corresponding exactly to the Four Satipaṭṭhānas. Breathing is not treated as a mechanical breathing exercise, but as a living bridge between body, feeling, mind, and awakening. Developed and cultivated, Ānāpānasati fulfills the Four Satipaṭṭhānas; the Four Satipaṭṭhānas fulfill the Seven Factors of Awakening; and the Seven Factors of Awakening fulfill true knowledge and liberation.",
      "pt": "No Ānāpānasati Sutta (MN 118), o Buda ensina dezesseis contemplações sequenciais organizadas em quatro tétrades correspondentes exatamente aos Quatro Satipaṭṭhānas. A respiração não é tratada como um exercício mecânico, mas como uma ponte viva entre corpo, sensação, mente e despertar. Desenvolvida e cultivada, a Ānāpānasati realiza os Quatro Satipaṭṭhānas; os Quatro Satipaṭṭhānas realizam os Sete Fatores do Despertar; e estes realizam o verdadeiro conhecimento e a libertação."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Dīghaṁ assasanto 'dīghaṁ assasāmī'ti pajānāti",
                "title": {
                      "en": "1. Discerning Long In-and-Out Breaths",
                      "pt": "1. Discernindo as Respirações Longas"
                },
                "desc": {
                      "en": "Breathing in long, one discerns: 'I breathe in long'; breathing out long, one discerns: 'I breathe out long'. Simply noticing the extended duration of the natural somatic respiration without forcing or regulating.",
                      "pt": "Inspirando longo, discerne: 'Inspiro longo'; expirando longo, discerne: 'Expiro longo'. Apenas reconhecendo a duração estendida da respiração natural sem forçar, comprimir ou controlar."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Physical Touchpoint Anchor:</strong> Rest attention lightly at the primary tactile contact zone—the nostril rim or upper lip (<em>nāsikagga / mukhanimitta</em>). Feel the cool friction of the incoming air and the warm whisper of the outgoing air.</p><p><strong>Unforced Observation:</strong> Do not artificially deepen or hold the breath. Allow the lung capacity to fill and empty naturally. Notice that when the body is settling down from physical exertion or mental agitation, the breath is organically long and deep.</p>",
                      "pt": "<p><strong>Ponto de Contato Tátil:</strong> Pouse a atenção na zona de fricção primária—a borda das narinas ou lábio superior (<em>nāsikagga / mukhanimitta</em>). Sinta o frescor suave do ar entrando e o calor tépido do ar saindo.</p><p><strong>Observação Espontânea:</strong> Não force a respiração a ser funda. Permita que os pulmões expandam e recolham no próprio ritmo. Note que enquanto o corpo assenta do cansaço ou tensão mental, a respiração se manifesta organicamente longa.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Foundational formula of <strong>MN 118 §17</strong> and <strong>SN 54.1</strong>. Buddhaghosa in the <em>Papañcasūdanī</em> explains that 'long' refers both to spatial extent and temporal duration: the mind simply observes duration without applying conceptual measurement.</p>",
                      "pt": "<p>Fórmula de abertura de <strong>MN 118 §17</strong> e <strong>SN 54.1</strong>. Buddhaghosa na <em>Papañcasūdanī</em> esclarece que 'longo' refere-se tanto à extensão espacial quanto à duração temporal: a mente reconhece o tempo sem formular cálculos conceituais.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Skilled Turner (Bhamakāro, MN 118 / DN 22):</strong> 'Just as a skilled turner or his apprentice, when making a long turn, discerns: <em>I make a long turn</em>; so too the practitioner discerns a long breath.'</p>",
                      "pt": "<p><strong>O Torneiro Perito (Bhamakāro, MN 118 / DN 22):</strong> 'Assim como um torneiro experiente ou seu aprendiz, ao dar uma volta longa no torno, discerne: <em>Estou dando uma volta longa</em>; assim também o meditador discerne a respiração longa.'</p>"
                }
          },
          {
                "step": 2,
                "pali": "Rassaṁ assasanto 'rassaṁ assasāmī'ti pajānāti",
                "title": {
                      "en": "2. Discerning Short In-and-Out Breaths",
                      "pt": "2. Discernindo as Respirações Curtas"
                },
                "desc": {
                      "en": "Breathing in short, one discerns: 'I breathe in short'; breathing out short, one discerns: 'I breathe out short'. As bodily tranquility sets in, the oxygen requirement decreases, and breathing becomes subtle and brief.",
                      "pt": "Inspirando curto, discerne: 'Inspiro curto'; expirando curto, discerne: 'Expiro curto'. Conforme o corpo se pacifica, a demanda por oxigênio cai e a respiração torna-se naturalmente sutil, breve e leve."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Recognizing the Calming Shift:</strong> Do not panic or gasp if the breath becomes faint and shallow. Recognize short breath as a natural sign of somatic stillness. Keep attention centered at the touchpoint with refined sensitivity.</p>",
                      "pt": "<p><strong>Reconhecendo a Mudança de Ritmo:</strong> Não tente forçar ar se a respiração ficar muito tênue. Encare a respiração curta como sintoma benéfico de quietude muscular. Mantenha a presença serena no ponto de contato.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Canonical in <strong>MN 118 §18</strong>. The <em>Visuddhimagga</em> (Ch. VIII) notes that as mindfulness sharpens, coarse chest movement subsides, and the breath becomes gentle like a drifting thread of silk.</p>",
                      "pt": "<p>Canônico em <strong>MN 118 §18</strong>. O <em>Visuddhimagga</em> (Cap. VIII) pontua que conforme a atenção refina, os movimentos torácicos diminuem e o fluxo aéreo assemelha-se a um fio de seda flutuando.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Quick Short Cut of the Lathe (MN 118):</strong> Just as the woodturner making a quick short cut knows precisely the shortness of the motion, the mind discerns subtle, brief inhalations and exhalations with immediate clarity.</p>",
                      "pt": "<p><strong>O Corte Curto do Torneiro (MN 118):</strong> Tal como o torneiro ao realizar um giro rápido e curto no torno reconhece com clareza o corte breve, a mente reconhece respirações curtas e sutis sem hesitação.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Sabbakāyapaṭisaṁvedī assasissāmīti sikkhati",
                "title": {
                      "en": "3. Experiencing the Entire Body of Breath",
                      "pt": "3. Vivenciando o Corpo Inteiro da Respiração"
                },
                "desc": {
                      "en": "One trains: 'I will breathe in sensitive to the entire body [of breath]'; 'I will breathe out sensitive to the entire body'. Developing panoramic awareness encompassing the whole physical organism nourished by breath.",
                      "pt": "Treina-se: 'Inspirarei sensível a todo o corpo'; 'Expirarei sensível a todo o corpo'. Expandindo a presença para abraçar toda a extensão do ciclo respiratório e todo o organismo físico vitalizado pelo ar."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Three Phases of Breath:</strong> Track the breath continuously through its three stations: the beginning (<em>ādi</em> at the nostrils), the middle (<em>majjha</em> filling the chest), and the end (<em>pariyosāna</em> expanding the abdomen). Avoid mental gaps where awareness lapses.</p><p><strong>Somatic Cellular Permeation:</strong> Alternatively, as highlighted in the Thai Forest and commentarial traditions, feel the vital breath energy (<em>prāṇa / vāyo</em>) rippling through every pore, tendon, and tissue in the physical body.</p>",
                      "pt": "<p><strong>As Três Fases da Respiração:</strong> Acompanhe o fluxo ininterrupto em suas três fases: início (<em>ādi</em> nas narinas), meio (<em>majjha</em> no tórax) e ápice (<em>pariyosāna</em> no abdômen). Elimine lapsos de distração entre a inspiração e a expiração.</p><p><strong>Permeação Celular:</strong> Conforme ensinado na Tradição da Floresta, sinta a energia da respiração (<em>vāyodhātu</em>) nutrindo cada músculo, fibra e poro do corpo simultaneamente.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 118 §19</strong>: Ven. Buddhaghosa clarifies that <em>kāya</em> here designates the whole breath-body (beginning, middle, end) while Sutta teachings indicate the living bodily organism (<em>rūpakāya</em>) harmonized with respiration.</p>",
                      "pt": "<p><strong>MN 118 §19</strong>: Buddhaghosa esclarece que <em>kāya</em> designa todo o corpo da respiração (início, meio e fim), enquanto os suttas apontam para a estrutura corpórea inteira (<em>rūpakāya</em>) unificada com o fôlego.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Bellows of the Blacksmith (Papañcasūdanī):</strong> Just as air filling a blacksmith's bellows inflates the whole skin uniformly, the incoming breath infuses vitality across the whole torso.</p>",
                      "pt": "<p><strong>O Fole do Ferreiro (Papañcasūdanī):</strong> Tal como o ar preenche o fole do ferreiro de modo uniforme em toda a sua câmara, o fôlego expande a presença viva por todo o tronco.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Passambhayaṁ kāyasaṅkhāraṁ assasissāmīti sikkhati",
                "title": {
                      "en": "4. Calming the Bodily Formation (Coarse Breath & Tension)",
                      "pt": "4. Pacificando a Formação Corpórea (Respiração & Tensão)"
                },
                "desc": {
                      "en": "One trains: 'I will breathe in calming the bodily formation'; 'I will breathe out calming the bodily formation'. Dissolving gross somatic agitation until the breath becomes tranquil and whisper-quiet.",
                      "pt": "Treina-se: 'Inspirarei acalmando a formação corpórea'; 'Expirarei acalmando a formação corpórea'. Dissolvendo tensões residuais, microespasmos e agitação até que a respiração fique translúcida e suave."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Conscious Muscular Release:</strong> On each exhalation, actively release tension from the forehead, eyes, jaw, shoulders, and belly. As physical contraction subsides, the breath calms to the point where it feels as if the body is breathing on its own without effort.</p><p><strong>Arising of the Luminous Sign (Nimitta):</strong> In deep calming, an inner radiance, mist, or bright star-like point of light may appear before the mind's eye. Do not chase or grasp it; remain peacefully anchored at the breath touchpoint.</p>",
                      "pt": "<p><strong>Soltura Muscular Consciente:</strong> A cada expiração, libere conscientemente as sobrancelhas, mandíbula, trapézio e abdômen. À medida que o corpo relaxa, o fôlego pacifica tanto que parece ocorrer espontaneamente sem esforço.</p><p><strong>Surgimento do Sinal Luminoso (Nimitta):</strong> Com a pacificação profunda, uma luz sutil, névoa luminosa ou ponto brilhante pode surgir na mente. Não salte sobre ela; continue sereno na âncora respiratória.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 118 §20</strong> and <strong>MN 44 (Cūḷavedalla Sutta)</strong>, which defines in-and-out breathing as the primary 'bodily formation' (<em>kāyasaṅkhāra</em>) because it is tethered to the physical organism.</p>",
                      "pt": "<p><strong>MN 118 §20</strong> e <strong>MN 44 (Cūḷavedalla Sutta)</strong>, que define a respiração como a 'formação corpórea' primária (<em>kāyasaṅkhāra</em>) por estar intimamente ligada à matéria física viva.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Stilled Bell Vibration (Visuddhimagga VIII):</strong> When a great bronze bell is struck, there is a loud sound, followed by a resonant hum, which gradually tapers into silence. The breath begins coarse and finishes in serene quietude.</p>",
                      "pt": "<p><strong>A Vibração do Grande Sino (Visuddhimagga VIII):</strong> Quando um sino de bronze é tocado, surge um som sonoro, seguido por uma ressonância sutil que vai se tornando inaudível até o silêncio. A respiração inicia rústica e silencia em profunda paz.</p>"
                }
          },
          {
                "step": 5,
                "pali": "Pītipaṭisaṁvedī assasissāmīti sikkhati",
                "title": {
                      "en": "5. Experiencing Energetic Rapture (Pīti)",
                      "pt": "5. Vivenciando o Arrebatamento Energético (Pīti)"
                },
                "desc": {
                      "en": "One trains: 'I will breathe in sensitive to rapture'; 'I will breathe out sensitive to rapture'. Entering the Second Tetrad (contemplation of feeling): mind experiences spiritual joy, lightness, and energetic thrill.",
                      "pt": "Treina-se: 'Inspirarei sensível ao arrebatamento'; 'Expirarei sensível ao arrebatamento'. Inaugurando a Segunda Tétrade (sensações): a mente experimenta alegria espiritual, frescor elétrico e leveza sublime."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Welcoming Somatic Rapture:</strong> Recognize signs of <em>pīti</em>: hair standing on end, gentle tingling in the spine, a cool breeze across the scalp, or a buoyant feeling of floating. Do not fear or suppress these sensations; breathe through them smoothly.</p>",
                      "pt": "<p><strong>Acolhendo o Arrebatamento:</strong> Identifique os sinais de <em>pīti</em>: arrepios suaves, cócegas bioelétricas na coluna, frescor na cabeça ou sensação de flutuar. Não estranhe nem reprima; respire através da vibração com leveza.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 118 §21</strong>: Rapture born of seclusion (<em>vivekajaṁ pītiṁ</em>) characterizes the first two Jhānas (DN 2, MN 119).</p>",
                      "pt": "<p><strong>MN 118 §21</strong>: O arrebatamento nascido do recolhimento mental (<em>vivekajaṁ pītiṁ</em>) caracteriza os dois primeiros Jhānas (DN 2, MN 119).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Desert Traveler Reaching an Oasis (Atthasālinī):</strong> Rapture is like the thrilling joy of a parched desert wanderer who spots an emerald lake in the distance.</p>",
                      "pt": "<p><strong>O Viajante no Oásis (Atthasālinī):</strong> O arrebatamento é a alegria eufórica do viajante sedento que avista um lago cristalino ao longe no deserto.</p>"
                }
          },
          {
                "step": 6,
                "pali": "Sukhapaṭisaṁvedī assasissāmīti sikkhati",
                "title": {
                      "en": "6. Experiencing Deep Bodily Pleasure & Ease (Sukha)",
                      "pt": "6. Vivenciando o Bem-Estar Profundo & Paz (Sukha)"
                },
                "desc": {
                      "en": "One trains: 'I will breathe in sensitive to pleasure/ease'; 'I will breathe out sensitive to pleasure/ease'. As the buzzing excitation of rapture softens, it settles into profound, restful somatic well-being.",
                      "pt": "Treina-se: 'Inspirarei sensível à paz/bem-estar'; 'Expirarei sensível à paz/bem-estar'. Conforme a efervescência de pīti se aquieta, ela decanta em conforto corporal pleno, aveludado e repousante."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Shifting from Excitation to Restful Peace:</strong> Notice the distinction between rapture (excitement) and sukha (contentment). Allow the breath to bathe every organ in ease, entering the blissful stillness of the Second and Third Jhānas.</p>",
                      "pt": "<p><strong>Transição para o Conforto:</strong> Observe a diferença entre o estímulo de pīti (alegria energética) e sukha (conforto doce). Deixe o fôlego banhar cada órgão com paz, aproximando a mente do 2º e 3º Jhānas.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 118 §22</strong>: Sukha is the unshakeable ease described in the 3rd Jhāna where one abides equanimous and mindful (MN 119).</p>",
                      "pt": "<p><strong>MN 118 §22</strong>: Sukha é a paz corporal descrita no 3º Jhāna onde o praticante repousa equânime e lúcido (MN 119).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Traveler Drinking the Cool Waters (Atthasālinī):</strong> If rapture is spotting the water, sukha is drinking deeply, resting under shade, and experiencing total relief.</p>",
                      "pt": "<p><strong>Bebendo da Água Fresca (Atthasālinī):</strong> Se o arrebatamento é avistar a água, sukha é bebê-la até saciar-se, descansando sob a sombra frondosa em alívio total.</p>"
                }
          },
          {
                "step": 7,
                "pali": "Cittasaṅkhārapaṭisaṁvedī assasissāmīti sikkhati",
                "title": {
                      "en": "7. Experiencing Mental Formations (Perception & Feeling)",
                      "pt": "7. Vivenciando as Formações Mentais (Percepção & Sensação)"
                },
                "desc": {
                      "en": "One trains: 'I will breathe in sensitive to mental formations'; 'I will breathe out sensitive to mental formations'. Discerning how perceptions (saññā) and feelings (vedanā) shape and color the flow of thoughts.",
                      "pt": "Treina-se: 'Inspirarei sensível às formações mentais'; 'Expirarei sensível às formações mentais'. Discernindo como as percepções (saññā) e sensações (vedanā) colorem e acionam o diálogo interior."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Witnessing the Mind's Modulators:</strong> Observe how a subtle feeling of pleasure or displeasure instantly triggers reactive labels or mental stories. Notice that perception and feeling are the architects of mental moods.</p>",
                      "pt": "<p><strong>Testemunhando os Moduladores da Mente:</strong> Observe como uma sutil sensação de agrado ou desagrado gera instantaneamente um rótulo ou história mental. Perceba que sensação e percepção são os motores do humor interior.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 118 §23</strong> and <strong>MN 44</strong>: The Buddha defines perception and feeling explicitly as the 'mental formation' (<em>cittasaṅkhāra</em>).</p>",
                      "pt": "<p><strong>MN 118 §23</strong> e <strong>MN 44</strong>: O Buda define explicitamente percepção e sensação como as 'formações mentais' (<em>cittasaṅkhāra</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Dye in the Clear Water (Papañcasūdanī):</strong> Just as colored dye tinting clear water changes its appearance, perceptions tint the pristine awareness of consciousness.</p>",
                      "pt": "<p><strong>O Pigmento na Água Pura (Papañcasūdanī):</strong> Tal como uma gota de tinta colorida tinge a água pura alterando sua aparência, percepções mentais colorem a clareza da consciência.</p>"
                }
          },
          {
                "step": 8,
                "pali": "Passambhayaṁ cittasaṅkhāraṁ assasissāmīti sikkhati",
                "title": {
                      "en": "8. Calming Mental Formations into Equanimity",
                      "pt": "8. Pacificando as Formações Mentais em Serenidade"
                },
                "desc": {
                      "en": "One trains: 'I will breathe in calming mental formations'; 'I will breathe out calming mental formations'. Quelling agitated perceptions and feelings, bringing the mind into profound, unshakable emotional balance.",
                      "pt": "Treina-se: 'Inspirarei pacificando as formações mentais'; 'Expirarei pacificando as formações mentais'. Acalmando percepções reativas e sensações turbulentas, estabelecendo equanimidade imperturbável."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Softening Internal Reaction:</strong> When feelings arise, do not grasp or push them away. Breathe through them with equanimous detachment until mental waves flatten into glass-like stillness.</p>",
                      "pt": "<p><strong>Desarmando a Reação Interna:</strong> Ao notar sensações brotando, não se agarre nem as repila. Respire com serenidade através delas até que a superfície mental se torne calma como um espelho d'água.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 118 §24</strong>: Concludes the Second Tetrad (<em>vedanānupassanā</em>), paving the way for direct observation of consciousness itself.</p>",
                      "pt": "<p><strong>MN 118 §24</strong>: Conclui a Segunda Tétrade (<em>vedanānupassanā</em>), abrindo caminho para o escrutínio lúcido da própria consciência.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Wind Dying Down on a Lake:</strong> As the gusting wind ceases, waves on the lake subside into glassy mirror-like calm reflecting the open sky.</p>",
                      "pt": "<p><strong>O Vento que Cessa sobre o Lago:</strong> Quando o vento tempestuoso cessa, as ondas do lago se aquietam até formarem um espelho d'água cristalino refletindo o firmamento.</p>"
                }
          },
          {
                "step": 9,
                "pali": "Cittapaṭisaṁvedī assasissāmīti sikkhati",
                "title": {
                      "en": "9. Experiencing the State of the Mind (Citta)",
                      "pt": "9. Vivenciando o Estado da Mente (Citta)"
                },
                "desc": {
                      "en": "One trains: 'I will breathe in sensitive to the mind'; 'I will breathe out sensitive to the mind'. Entering the Third Tetrad (cittānupassanā): directly observing the overall quality and tone of consciousness.",
                      "pt": "Treina-se: 'Inspirarei sensível à mente'; 'Expirarei sensível à mente'. Abrindo a Terceira Tétrade (cittānupassanā): contemplando a qualidade geral e a atmosfera da consciência no momento."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Mirror-like Introspection:</strong> Discerning without judging whether the mind is contracted, expanded, distracted, unified, sleepy, or lucid. Knowing the mind as it truly is.</p>",
                      "pt": "<p><strong>Introspecção Espelhada:</strong> Reconhecer sem autocrítica se a mente está contraída, ampla, dispersa, focada, sonolenta ou desperta. Conhecer a mente como ela realmente se encontra.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 118 §25</strong>, parallel to the mental diagnostic section of <strong>MN 10 §27</strong>.</p>",
                      "pt": "<p><strong>MN 118 §25</strong>, paralelo ao diagnóstico dos estados da mente em <strong>MN 10 §27</strong>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Looking in a Polished Mirror (DN 2):</strong> A person looking at their own face in a spotless mirror knows instantly if there is a mark or blemish on the forehead.</p>",
                      "pt": "<p><strong>O Rosto Diante do Espelho Polido (DN 2):</strong> Uma pessoa olhando seu próprio reflexo num espelho límpido reconhece imediatamente qualquer mancha ou marca na testa.</p>"
                }
          },
          {
                "step": 10,
                "pali": "Abhippamodayaṁ cittaṁ assasissāmīti sikkhati",
                "title": {
                      "en": "10. Gladdening & Brightening the Mind",
                      "pt": "10. Iluminando & Alegrando a Mente"
                },
                "desc": {
                      "en": "One trains: 'I will breathe in gladdening the mind'; 'I will breathe out gladdening the mind'. Uplifting consciousness with spiritual joy when sluggishness or dry boredom threatens concentration.",
                      "pt": "Treina-se: 'Inspirarei alegrando a mente'; 'Expirarei alegrando a mente'. Elevando a consciência com júbilo espiritual quando o tédio, a sonolência ou a aridez ameaçarem o retiro interior."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Uplifting Remedies:</strong> If the mind becomes sluggish, bring to mind the virtues of the Buddha, Dhamma, or past acts of generosity (<em>cāgānussati</em>). Rekindle inspiring clarity with the breath.</p>",
                      "pt": "<p><strong>Antídotos Inspiradores:</strong> Se a mente esmorecer, rememore as qualidades sublimes do Buda, do Dhamma ou a própria generosidade passada (<em>cāgānussati</em>). Reacenda a chama lúcida na respiração.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 118 §26</strong> and <strong>AN 11.12</strong> on recollecting wholesome qualities to ignite joy.</p>",
                      "pt": "<p><strong>MN 118 §26</strong> e <strong>AN 11.12</strong> sobre cultivar memórias salutares para inflamar o entusiasmo meditativo.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Kindling Fire with Dry Wood (SN 46.53):</strong> When fire burns low, a person adds dry grass and sticks to fan the flames into brilliant light.</p>",
                      "pt": "<p><strong>Alimentando a Fogueira com Madeira Seca (SN 46.53):</strong> Quando a chama enfraquece, adiciona-se folhas e galhos secos para fazê-la reluzir com vigor.</p>"
                }
          },
          {
                "step": 11,
                "pali": "Samādahaṁ cittaṁ assasissāmīti sikkhati",
                "title": {
                      "en": "11. Concentrating & Unifying the Mind",
                      "pt": "11. Concentrando & Unificando a Mente"
                },
                "desc": {
                      "en": "One trains: 'I will breathe in steadying the mind'; 'I will breathe out steadying the mind'. Anchoring consciousness in one-pointed, undisturbed absorption (samādhi).",
                      "pt": "Treina-se: 'Inspirarei unificando a mente'; 'Expirarei unificando a mente'. Ancorando a consciência em foco unificado e absorção inabalável (samādhi)."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Deepening Unification:</strong> Seamlessly merge attention and breath into a single, cohesive field of stillness. The mind rests effortless and still on the meditation object.</p>",
                      "pt": "<p><strong>Aprofundando a Unificação:</strong> Funda a atenção e o fôlego num único campo coeso de quietude. A mente descansa estável e sem esforço no objeto meditativo.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 118 §27</strong>: Relates directly to achieving absorption states (<em>jhānas</em>) through stable breath mindfulness.</p>",
                      "pt": "<p><strong>MN 118 §27</strong>: Relaciona-se diretamente à estabilização nos estados de absorção meditativa (<em>jhānas</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Steady Candle Flame in a Windless Room (Visuddhimagga):</strong> The flame burns upright, bright, and utterly motionless when sheltered from air drafts.</p>",
                      "pt": "<p><strong>A Chama da Vela em Sala Sem Vento (Visuddhimagga):</strong> A chama queima ereta, brilhante e totalmente imóvel quando protegida de qualquer rajada de ar.</p>"
                }
          },
          {
                "step": 12,
                "pali": "Vimocayaṁ cittaṁ assasissāmīti sikkhati",
                "title": {
                      "en": "12. Releasing the Mind from Subtle Clinging",
                      "pt": "12. Libertando a Mente de Apegos Sutis"
                },
                "desc": {
                      "en": "One trains: 'I will breathe in freeing the mind'; 'I will breathe out freeing the mind'. Releasing consciousness from subtle hindrances, identification with meditative states, and mental tension.",
                      "pt": "Treina-se: 'Inspirarei libertando a mente'; 'Expirarei libertando a mente'. Soltando a consciência de obstáculos sutis, desidentificando-se dos próprios estados de absorção e nós mentais."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Letting Go of the Grip:</strong> Observe if the mind is grasping onto concentration or bliss. Gently release the grip, opening into spacious, unconfined awareness.</p>",
                      "pt": "<p><strong>Soltando o Controle:</strong> Observe se há apego sutil à própria concentração ou êxtase. Solte o aperto, abrindo a mente para um espaço ilimitado e desobstruído.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 118 §28</strong>: Concludes the Third Tetrad, transitioning into profound insight (*vipassanā*).</p>",
                      "pt": "<p><strong>MN 118 §28</strong>: Conclui a Terceira Tétrade, preparando o salto para a sabedoria penetrante (*vipassanā*).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Bird Released from the Cage:</strong> The door of the wicker cage opens, and the bird soars freely into the wide open sky without tether.</p>",
                      "pt": "<p><strong>O Pássaro Liberto da Gaiola:</strong> Abre-se a portinhola da gaiola e o pássaro alça voo no céu aberto e límpido, livre de amarras.</p>"
                }
          },
          {
                "step": 13,
                "pali": "Aniccānupassī assasissāmīti sikkhati",
                "title": {
                      "en": "13. Contemplating Impermanence (Anicca)",
                      "pt": "13. Contemplando a Impermanência (Anicca)"
                },
                "desc": {
                      "en": "One trains: 'I will breathe in contemplating impermanence'; 'I will breathe out contemplating impermanence'. Entering the Fourth Tetrad (dhammānupassanā): witnessing the ceaseless arising and vanishing of breath, body, and consciousness.",
                      "pt": "Treina-se: 'Inspirarei contemplando a impermanência'; 'Expirarei contemplando a impermanência'. Abrindo a Quarta Tétrade (dhammānupassanā): testemunhando o incessante surgir e perecer da respiração, do corpo e da consciência."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Microscopic Impermanence:</strong> Watch the breath at the cellular level: every millimeter of inhalation is born, alters, and dissolves instantly. Nothing remains static for a microsecond.</p>",
                      "pt": "<p><strong>Impermanência Microscópica:</strong> Examine a respiração em detalhe: cada milímetro do ar inalado nasce, muda e falece instantaneamente. Nada permanece estático por um microssegundo.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 118 §29</strong>: The primary gateway to liberation across the entire Nikāya corpus.</p>",
                      "pt": "<p><strong>MN 118 §29</strong>: O portal supremo para a libertação ao longo de todos os discursos antigos.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Water Bubbles Bursting in Heavy Rain (SN 22.95):</strong> Just as bubbles form on the surface of water during heavy downpours and burst the instant they appear, so do all mental and physical phenomena.</p>",
                      "pt": "<p><strong>Bolhas de Chuva no Chão Molhado (SN 22.95):</strong> Tal como bolhas de água brotam na poça sob chuva forte e estouram no mesmíssimo instante, assim fenecem todos os fenômenos da mente e do corpo.</p>"
                }
          },
          {
                "step": 14,
                "pali": "Virāgānupassī assasissāmīti sikkhati",
                "title": {
                      "en": "14. Contemplating the Fading of Passion & Disenchantment",
                      "pt": "14. Contemplando o Desvanecer da Cobiça & Desapego"
                },
                "desc": {
                      "en": "One trains: 'I will breathe in contemplating dispassion/fading'; 'I will breathe out contemplating dispassion'. As impermanence is deeply seen, desire for conditioned phenomena loses its seductive hold.",
                      "pt": "Treina-se: 'Inspirarei contemplando o desvanecer'; 'Expirarei contemplando o desvanecer'. Vendo a fugacidade de tudo, o apego pelos fenômenos condicionados perde seu poder de sedução."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Experiencing the Cooling of Grasping:</strong> Witness craving lose its momentum. Notice how the compulsion to chase sensations subsides into cool, sober freedom.</p>",
                      "pt": "<p><strong>Vivenciando o Resfriamento do Desejo:</strong> Testemunhe a cessação do impulso de agarrar. Perceba como a compulsão de perseguir sensações desvanece em sobriedade libertadora.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 118 §30</strong>: <em>Virāga</em> literally means 'de-coloring' or fading of passion.</p>",
                      "pt": "<p><strong>MN 118 §30</strong>: <em>Virāga</em> significa literalmente a perda da cor, o desbotar das paixões e desilusão salutar.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>A Smeared Cloth Cleaned in Pure Water:</strong> Just as dirt washed out of cloth leaves it bright and unblemished, dispassion washes away compulsive grasping.</p>",
                      "pt": "<p><strong>O Tecido Manchado Lavado em Água Pura:</strong> Tal como a poeira e fuligem lavadas de um manto o deixam imaculado, o desapego limpa as impurezas da cobiça.</p>"
                }
          },
          {
                "step": 15,
                "pali": "Nirodhānupassī assasissāmīti sikkhati",
                "title": {
                      "en": "15. Contemplating Cessation (Nirodha)",
                      "pt": "15. Contemplando a Cessação (Nirodha)"
                },
                "desc": {
                      "en": "One trains: 'I will breathe in contemplating cessation'; 'I will breathe out contemplating cessation'. Focusing not on the arising of phenomena, but on their vanishing, pointing towards the peace of Nibbāna.",
                      "pt": "Treina-se: 'Inspirarei contemplando a cessação'; 'Expirarei contemplando a cessação'. Fixando a atenção não no nascimento dos fenômenos, mas em seu desaparecimento total, inclinando a mente para o Nibbāna."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Attending to the Gap of Non-Becoming:</strong> Notice the vanishing edge of each exhalation before the new inhalation begins. Turn the mind towards that sublime stillness of non-arising.</p>",
                      "pt": "<p><strong>Atentando para a Ausência do Devir:</strong> Observe o ponto final de dissolução de cada expiração antes do novo fôlego brotar. Incline o coração para a paz incondicionada da cessação.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 118 §31</strong>: Contemplating the ending of suffering, dukkha-nirodha.</p>",
                      "pt": "<p><strong>MN 118 §31</strong>: Contemplação da extinção do sofrimento (dukkha-nirodha).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Extinguished Oil Lamp (MN 140):</strong> When oil and wick run out, the flame goes out and cannot be said to have gone east, west, north, or south. It simply ceases.</p>",
                      "pt": "<p><strong>A Lâmpada de Óleo que se Extingue (MN 140):</strong> Esgotados o azeite e o pavio, a chama apaga-se e não se pode dizer que foi para o leste, oeste, norte ou sul. Apenas cessou.</p>"
                }
          },
          {
                "step": 16,
                "pali": "Paṭinissaggānupassī assasissāmīti sikkhati",
                "title": {
                      "en": "16. Contemplating Relinquishment & Total Letting Go",
                      "pt": "16. Contemplando a Renúncia & Desapego Total"
                },
                "desc": {
                      "en": "One trains: 'I will breathe in contemplating relinquishment'; 'I will breathe out contemplating relinquishment'. Complete surrender of all claims of 'me' and 'mine', casting off all fetters into full liberation.",
                      "pt": "Treina-se: 'Inspirarei contemplando a renúncia total'; 'Expirarei contemplando a renúncia total'. Entrega irrestrita de todas as noções de 'eu' e 'meu', soltando todas as amarras no despertar pleno."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Absolute Relinquishment (Vossagga):</strong> Give the breath, the body, and consciousness back to nature. Abandon even the identity of 'being a meditator'. Rest in unconditioned freedom.</p>",
                      "pt": "<p><strong>Renúncia Incondicional (Vossagga):</strong> Entregue a respiração, o corpo e a consciência de volta à natureza. Abandone até a identidade de 'ser um meditador'. Repouse na liberdade incondicionada.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 118 §32</strong>: Fulfills the 7 Factors of Awakening leading to true knowledge and final deliverance.</p>",
                      "pt": "<p><strong>MN 118 §32</strong>: Coroa os Sete Fatores do Despertar culminando no conhecimento supremo e libertação definitiva.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Dropping a Heavy Burden at the Journey's End (SN 22.22):</strong> A traveler carrying a massive rock over steep mountain passes finally arrives and casts it down forever, weeping with relief.</p>",
                      "pt": "<p><strong>Depondo o Fardo Pesado no Fim da Jornada (SN 22.22):</strong> Um viajante que carregou um rochedo esmagador por desfiladeiros chega finalmente ao destino e o larga no chão para sempre, aliviado e livre.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "Establish a 25-minute morning anchor sit. Use steps 1-4 to reset the nervous system before work meetings or stressful parenting demands. Throughout the day, remember the 4th step: consciously calming physical tension during transitions (traffic lights, waiting in lines, between emails).",
      "pt": "Estabeleça uma prática matinal de 25 minutos. Use os passos 1 a 4 para redefinir o sistema nervoso antes de reuniões ou exigências familiares. Ao longo do dia, lembre-se do 4º passo: relaxar conscientemente a tensão física nas transições cotidianas (semáforos, filas, intervalos de trabalho)."
    },
    "keyPaliTerms": [
      {
        "term": "Ānāpānasati",
        "meaning": "Mindfulness of in-and-out breathing"
      },
      {
        "term": "Kāyasaṅkhāra",
        "meaning": "Bodily formation (the in-and-out breath itself and somatic tensions)"
      },
      {
        "term": "Cittasaṅkhāra",
        "meaning": "Mental formations (feelings/vedanā and perceptions/saññā)"
      },
      {
        "term": "Paṭinissagga",
        "meaning": "Relinquishment, giving back, radical non-possession"
      }
    ]
  },
  {
    "id": "ebt-satipatthana",
    "cluster": "ebt",
    "number": "02",
    "paliTitle": "Cattāro Satipaṭṭhānā",
    "title": {
      "en": "The Four Foundations of Mindfulness",
      "pt": "Os Quatro Fundamentos da Atenção Plena"
    },
    "lineageTradition": {
      "en": "Canonical Early Buddhist Texts (EBT)",
      "pt": "Textos Budistas Antigos (EBT Canônico)"
    },
    "primaryMasters": "Gotama Buddha, Ven. Sāriputta, Ven. Mahā Moggallāna",
    "canonicalRef": "DN 22 (Mahāsatipaṭṭhāna Sutta), MN 10 (Satipaṭṭhāna Sutta), SN 47",
    "difficulty": "intermediate",
    "curriculumOrder": 7,
    "difficultyLabel": {
      "en": "Intermediate",
      "pt": "Intermediário"
    },
    "recommendedPrereq": {
      "en": "MN 118 (Ānāpānasati Sutta)",
      "pt": "MN 118 (Ānāpānasati Sutta)"
    },
    "whyStudy": {
      "en": "The master curriculum for continuous mindfulness across all 4 experiential domains: body, feelings, mind, and phenomena.",
      "pt": "A matriz fundamental para a atenção plena contínua nos 4 domínios: corpo, sensações, mente e fenômenos."
    },
    "coreFocus": {
      "en": "Comprehensive fourfold mindful investigation: Body (Kāya), Feeling (Vedanā), Mind (Citta), Phenomena (Dhammā)",
      "pt": "Investigação consciente quádrupla: Corpo (Kāya), Sensação (Vedanā), Mente (Citta), Fenômenos (Dhammā)"
    },
    "primaryAnchor": {
      "en": "The present experiential field observed with ardency (ātāpī), clear comprehension (sampajāno), and mindfulness (satimā)",
      "pt": "O campo experiencial presente observado com ardência (ātāpī), clara compreensão (sampajāno) e atenção plena (satimā)"
    },
    "approachToJhana": {
      "en": "The four foundations serve as the essential qualitative soil from which Right Samādhi arises naturally",
      "pt": "Os quatro fundamentos servem como o solo qualitativo fértil de onde o Correto Samādhi brota espontaneamente"
    },
    "useOfNoting": {
      "en": "Clear direct recognition of phenomena internally (ajjhattaṁ) and externally (bahiddhā) without discursive speculation",
      "pt": "Reconhecimento direto interno e externo dos fenômenos sem especulação discursiva"
    },
    "tagline": {
      "en": "'Ekāyano maggo' — The direct, convergence path for the purification of beings and direct realization of Nibbāna.",
      "pt": "'Ekāyano maggo' — O caminho direto e convergente para a purificação dos seres e a realização direta de Nibbāna."
    },
    "overview": {
      "en": "Satipaṭṭhāna is the master experiential curriculum of the Buddha. Rather than an intellectual philosophy, it is an exhaustive methodology for establishing continuous mindfulness across four biological and psychological domains: 1. Body (kāyānupassanā), 2. Feelings (vedanānupassanā), 3. States of Mind (cittānupassanā), and 4. Mental Qualities and Principles (dhammānupassanā). In each domain, the practitioner remains ardent, clearly comprehending, and mindful, putting aside greed and distress concerning the world.",
      "pt": "Satipaṭṭhāna é a matriz prática fundamental do Buda. Longe de ser filosofia abstrata, é uma metodologia exaustiva para ancorar a atenção contínua em quatro domínios biológicos e mentais: 1. Corpo (kāyānupassanā), 2. Sensações (vedanānupassanā), 3. Estados Mentais (cittānupassanā) e 4. Fenômenos Doutrinários (dhammānupassanā). Em cada domínio, permanece-se ardente, claramente lúcido e consciente, superando a cobiça e o pesar pelo mundo."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Kāyānupassanā",
                "title": {
                      "en": "1. Contemplation of the Body in the Body",
                      "pt": "1. Contemplação do Corpo no Corpo"
                },
                "desc": {
                      "en": "One abides contemplating the body as a body—ardent, clearly comprehending, mindful, putting away greed and distress regarding the world. Observing physical phenomena from within without conceptualizing.",
                      "pt": "Permanece-se contemplando o corpo no corpo—ardente, com clara compreensão, atento, afastando a cobiça e o desprazer em relação ao mundo. Observando os fenômenos físicos por dentro sem conceitualização."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Physical Grounding Method:</strong> Scan systematically through the six anatomical and postural domains: respiration, the 4 postures (walking, standing, sitting, lying down), clear comprehension in daily motor actions, the 32 biological parts, the 4 material elements (solidity, cohesion, heat, motion), and the cemetery reflections on mortality.</p><p><strong>Internal Non-Identification:</strong> Observe sensations purely as raw tactile data. Do not think 'my arm hurts', but note 'throbbing, heat, pressure'.</p>",
                      "pt": "<p><strong>Método de Enraizamento Físico:</strong> Percorra sistematicamente os seis domínios corpóreos: respiração, as 4 posturas, clara compreensão nas ações motoras, as 32 partes biológicas, os 4 elementos da matéria e as reflexões da decomposição. Observe sensações puramente como dados táteis neutros.</p><p><strong>Desidentificação Interna:</strong> Não pense 'meu braço dói', mas registre 'pulsação, calor, pressão'.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 10 §4–10</strong> and <strong>DN 22</strong>. The <em>Papañcasūdanī</em> stresses the repetitive phrasing 'kāye kāyānupassī' (the body in the body) to prevent taking the body as a soul, woman, man, or permanent self.</p>",
                      "pt": "<p><strong>MN 10 §4–10</strong> e <strong>DN 22</strong>. A <em>Papañcasūdanī</em> frisa que a repetição enfática 'no corpo, o corpo' visa impedir a ilusão de ver ali uma alma, homem, mulher ou eu imutável.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Sieve-Bag of Grains (MN 10):</strong> A person with sharp eyes examines a sack of mixed grains: 'This is rice, this is barley, these are beans'; so one examines the components of the body.</p>",
                      "pt": "<p><strong>O Saco de Grãos (MN 10):</strong> Um homem de boa visão inspeciona um saco aberto com grãos sortidos: 'Isto é arroz, isto é cevada, isto são favas'; assim discerne-se as partes do corpo.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Vedanānupassanā",
                "title": {
                      "en": "2. Contemplation of Feelings in Feelings",
                      "pt": "2. Contemplação das Sensações nas Sensações"
                },
                "desc": {
                      "en": "Feeling a pleasant, painful, or neutral feeling, one discerns it immediately. Distinguishing worldly sensations tied to sensual desire from unworldly sensations born of spiritual seclusion.",
                      "pt": "Ao vivenciar uma sensação agradável, dolorosa ou neutra, discerne-se de imediato. Diferenciando sensações mundanas ligadas ao desejo sensorial de sensações sublimes nascidas do recolhimento espiritual."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Catching the Hedonic Tone (Vedanā):</strong> Notice the split-second tonal valence at the moment of sensory contact (<em>phassa</em>). Before desire or aversion ignites, catch the raw feeling tone: agreeable (+), disagreeable (-), or neutral (0). Watch how craving is conditioned by feeling.</p>",
                      "pt": "<p><strong>Flagrando o Tom Hedônico:</strong> Perceba a tonalidade de valência no milissegundo do contato sensorial (<em>phassa</em>). Antes que o desejo ou a aversão inflamem, reconheça o tom cru: agradável (+), doloroso (-) ou neutro (0). Veja como o apego brota da sensação.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 10 §11–12</strong> and <strong>SN 36.6 (Salla Sutta)</strong>: The uninstructed worldling struck by pain feels two darts (physical and mental). The mindful practitioner feels only the first dart (bare physical sensation).</p>",
                      "pt": "<p><strong>MN 10 §11–12</strong> e <strong>SN 36.6 (Salla Sutta)</strong>: A pessoa comum ao sentir dor é atingida por duas flechas (a física e a mental). O praticante desperto sente apenas a primeira flecha (o dado físico bruto).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Traveler's Guest House (SN 36.14):</strong> Sensations of various kinds arrive in the body like guests from the east, west, north, and south entering a bustling resthouse; they stay briefly and depart.</p>",
                      "pt": "<p><strong>A Hospedaria dos Viajantes (SN 36.14):</strong> Sensações diversas chegam ao corpo como viajantes vindos do leste, oeste, norte e sul que entram numa estalagem; hospedam-se brevemente e partem.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Cittānupassanā",
                "title": {
                      "en": "3. Contemplation of Mind in the Mind",
                      "pt": "3. Contemplação da Mente na Mente"
                },
                "desc": {
                      "en": "One knows a mind with passion as with passion; mind without passion as without passion; with aversion, without aversion; contracted, distracted, exalted, or unexcelled. Observing mental states without guilt or pride.",
                      "pt": "Conhece-se a mente com cobiça como com cobiça; sem cobiça como sem cobiça; com aversão, sem aversão; contraída, dispersa, elevada ou sem igual. Observando o estado mental sem culpa nem soberba."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Non-Reactive Mental Inventory:</strong> Step back and observe the psychological climate like a neutral meteorologist. Do not try to forcefully suppress negative states; the act of clear, non-identified seeing dissolves their power.</p>",
                      "pt": "<p><strong>Inventário Mental Neutro:</strong> Dê um passo atrás e observe o clima psicológico como um meteorologista neutro. Não tente suprimir à força os estados negativos; o mero ato de ver com clareza desfaz a energia deles.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 10 §27–28</strong>: Sixteen diagnostic dyads and triads analyzing the operational condition of consciousness.</p>",
                      "pt": "<p><strong>MN 10 §27–28</strong>: Dezesseis díades e tríades diagnósticas examinando as condições operacionais da consciência.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Pure Water Vessel Reflecting the Sky:</strong> When the water is not stirred by mud or dyed with colors, the face of the sky is seen with utter fidelity.</p>",
                      "pt": "<p><strong>A Bacia de Água Pura Refletindo o Céu:</strong> Quando a água não está agitada pela lama nem tingida por corantes, a face do firmamento é refletida com nitidez absoluta.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Dhammānupassanā",
                "title": {
                      "en": "4. Contemplation of Dhammas in Dhammas",
                      "pt": "4. Contemplação dos Fenômenos nos Fenômenos"
                },
                "desc": {
                      "en": "Contemplating phenomena in terms of the Five Hindrances, Five Clinging Aggregates, Six Sense Bases, Seven Factors of Awakening, and the Four Noble Truths. Aligning internal reality with structural liberating wisdom.",
                      "pt": "Contemplando os fenômenos através dos Cinco Obstáculos, Cinco Agregados, Seis Bases dos Sentidos, Sete Fatores do Despertar e Quatro Nobres Verdades. Alinhando a realidade com a sabedoria libertadora."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Structural Insight Investigation:</strong> When a hindrance arises, discern: 'Sensual desire is present within me; its cause is attending to attractive features; its abandoning is observing impermanence.' When an awakening factor arises, nourish its growth until liberation ripens.</p>",
                      "pt": "<p><strong>Investigação Estrutural de Insight:</strong> Quando surgir um obstáculo, discerne-se: 'O desejo sensual está presente em mim; sua causa é a atenção à beleza aparente; seu abandono é contemplar a impermanência'. Quando brotar um fator do despertar, nutra seu amadurecimento.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 10 §36–46</strong>: The pinnacle of the Satipaṭṭhāna Sutta, where contemplation matures directly into Awakening.</p>",
                      "pt": "<p><strong>MN 10 §36–46</strong>: O ápice do Satipaṭṭhāna Sutta, onde a contemplação amadurece diretamente nos frutos da Iluminação.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Fortress Commander at the Frontier (SN 35.204):</strong> The mindful sentry guards the gateway, receiving swift messengers (calm and insight) who deliver the message of reality to the city lord.</p>",
                      "pt": "<p><strong>O Comandante da Fortaleza na Fronteira (SN 35.204):</strong> A sentinela atenta guarda o portão e recebe mensageiros velozes (a calma e o insight) que entregam a mensagem da verdade ao senhor da cidade.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "Practice clear comprehension (sampajañña) during manual chores: washing dishes, driving, typing. When physical pain arises from desk sitting, apply Vedanānupassanā: observe the pure physical sensation without constructing an emotional drama around it.",
      "pt": "Pratique a clara lucidez (sampajañña) nas tarefas domésticas: lavar pratos, dirigir, digitar. Quando surgir dor física pela postura de trabalho, aplique Vedanānupassanā: observe a sensação física pura sem fabricar uma narrativa de queixa mental."
    },
    "keyPaliTerms": [
      {
        "term": "Satipaṭṭhāna",
        "meaning": "Establishment or foundation of mindfulness"
      },
      {
        "term": "Ātāpī",
        "meaning": "Ardent, persistent, energetic in practice"
      },
      {
        "term": "Sampajañña",
        "meaning": "Clear comprehension of purpose, suitability, domain, and reality"
      },
      {
        "term": "Ekāyano maggo",
        "meaning": "The direct path / the one-way path"
      }
    ]
  },
  {
    "id": "ebt-samannaphala",
    "cluster": "ebt",
    "number": "03",
    "paliTitle": "Sāmaññaphala Sutta",
    "title": {
      "en": "The Fruits of the Contemplative Life & The Gradual Training",
      "pt": "Os Frutos da Vida Contemplativa & O Treinamento Gradual"
    },
    "lineageTradition": {
      "en": "Canonical Early Buddhist Texts (EBT)",
      "pt": "Textos Budistas Antigos (EBT Canônico)"
    },
    "primaryMasters": "Gotama Buddha, King Ajātasattu",
    "canonicalRef": "DN 2 (Dīgha Nikāya 2)",
    "difficulty": "intermediate",
    "curriculumOrder": 5,
    "difficultyLabel": {
      "en": "Intermediate",
      "pt": "Intermediário"
    },
    "recommendedPrereq": {
      "en": "Stage 1 Foundations (MN 119, MN 20)",
      "pt": "Fundamentos da Etapa 1 (MN 119, MN 20)"
    },
    "whyStudy": {
      "en": "The canonical overview of the Gradual Training: ethics, sense restraint, overcoming the 5 hindrances, and the 4 Jhānas.",
      "pt": "A visão panorâmica do Treinamento Gradual: ética, guarda dos sentidos, superação dos obstáculos e os 4 Jhānas."
    },
    "coreFocus": {
      "en": "The comprehensive gradual training: Sīla, Sense Restraint, Overcoming the 5 Hindrances, and the 4 Jhāna Similes",
      "pt": "O treinamento gradual completo: Ética, Guarda dos Sentidos, Abandono dos 5 Obstáculos e os Símiles dos 4 Jhānas"
    },
    "primaryAnchor": {
      "en": "Guarding the six sense doors (indriyasaṁvara), somatic joy from seclusion, and pervasive full-body awareness",
      "pt": "Guarda das seis portas dos sentidos (indriyasaṁvara), alegria do recolhimento e saturação corporal total"
    },
    "approachToJhana": {
      "en": "The definitive canonical foundation for the 4 Jhānas with the classic bodily suffusion similes (bathman, spring, lotuses, white cloth)",
      "pt": "A matriz canônica definitiva dos 4 Jhānas com os clássicos símiles de saturação física (atendente, nascente, lótus, pano branco)"
    },
    "useOfNoting": {
      "en": "Silent, vivid experiential awareness of the body suffused with rapture and bliss, followed by direct insight knowledge (ñāṇadassana)",
      "pt": "Consciência experiencial límpida e silenciosa do corpo saturado de êxtase e paz, seguida pelo insight direto (ñāṇadassana)"
    },
    "tagline": {
      "en": "'Just as a cool mountain lake fed by an underground spring overflows from within... so the meditator drenches this very body with rapture and joy.'",
      "pt": "'Assim como um lago límpido na montanha alimentado por uma nascente subterrânea transborda de dentro para fora... assim o meditador satura este próprio corpo com êxtase e paz.'"
    },
    "overview": {
      "en": "The Sāmaññaphala Sutta (DN 2) delivers the most complete, magnificent architectural blueprint of contemplative development in the early canon. Addressed to King Ajātasattu, the Buddha outlines the Gradual Training (anupubbikathā): establishing unblemished ethical purity, guarding the sense faculties so sensory input doesn't ignite craving or irritation, developing mindfulness and clear comprehension in every posture, and resting in joyful contentment with the barest essentials. When retiring to meditate in seclusion, the practitioner systematically recognizes and abandons the Five Hindrances—experiencing the exhilarating relief of a person who has cleared a heavy debt, recovered from a wasting illness, emerged from a harsh prison, been freed from slavery, or safely crossed a treacherous desert. This immense relief gives birth to spiritual rapture (pīti) and physical ease (passaddhi), naturally opening the doors to the four Jhānas, which suffuse every cell of the physical frame before being turned toward penetrating insight.",
      "pt": "O Sāmaññaphala Sutta (DN 2) apresenta o mais completo e magnífico mapa arquitetônico do desenvolvimento contemplativo em todo o cânone inicial. Dirigido ao Rei Ajātasattu, o Buda delineia o Treinamento Gradual (anupubbikathā): o estabelecimento da pureza ética, a guarda atenta das portas sensoriais para que impressões visuais ou sonoras não alimentem a cobiça ou a aversão, o florescimento da plena consciência em cada gesto, e o contentamento alegre com o essencial. Ao assentar-se em recolhimento, o praticante identifica e abandona os Cinco Obstáculos — vivenciando o alívio radiante de quem quita uma dívida esmagadora, cura-se de uma doença grave, sai dos grilhões de uma prisão, alcança a liberdade da escravidão ou atravessa com segurança um deserto perigoso. Desse alívio inefável nascem o arrebatamento espiritual (pīti) e a tranquilidade física (passaddhi), conduzindo naturalmente aos quatro Jhānas, que banham cada poro do corpo antes de serem direcionados à visão intuitiva libertadora."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Sīlasampannatā & Santuṭṭhi",
                "title": {
                      "en": "1. Ethical Purity & Radiant Contentment",
                      "pt": "1. Pureza Ética & Nobre Contentamento"
                },
                "desc": {
                      "en": "Establishing unblemished virtue: harmlessness, truthfulness, integrity, and radical contentment with minimal requisites. Blamelessness creates the psychological foundation of fearlessness.",
                      "pt": "Estabelecendo conduta ética imaculada: não-violência, integridade e contentamento radical com o necessário. A ausência de culpa cria o alicerce psicológico do destemor."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Cultivating Inward Blameless Ease (Anavajjasukha):</strong> Reflect on your ethical decisions throughout the day. Rejoice in harmlessness. Live simply, letting go of consumerist clutter.</p>",
                      "pt": "<p><strong>Cultivando a Paz da Inocência (Anavajjasukha):</strong> Reflita sobre suas escolhas éticas cotidianas. Alegre-se na não-violência e viva com simplicidade, desapegando-se do excesso material.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>DN 2 §43–63</strong>: Ethical restraint creates unblemished inward joy that makes meditation effortless.</p>",
                      "pt": "<p><strong>DN 2 §43–63</strong>: A virtude ética gera um bem-estar interior imaculado que torna o recolhimento natural.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Bird Flying with Only Its Wings (DN 2 §66):</strong> Content with basic requisites, wherever a bird flies, it goes bearing only its feathers and wings. So too the unburdened meditator.</p>",
                      "pt": "<p><strong>O Pássaro que Voa Apenas com Suas Asas (DN 2 §66):</strong> Contente com o essencial, para onde quer que o pássaro voe, leva apenas a carga de suas asas e penas. Assim vive o meditador desimpedido.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Indriyasaṁvara",
                "title": {
                      "en": "2. Guarding the Sense Doors",
                      "pt": "2. Guardando as Portas dos Sentidos"
                },
                "desc": {
                      "en": "On seeing a form with the eye, hearing a sound with the ear, smelling an aroma, tasting, touching, or cognizing a thought: one does not grasp at signs or secondary features that fuel greed and distress.",
                      "pt": "Ao ver uma forma com os olhos, ouvir um som, cheirar, degustar, tocar ou conceber um pensamento: não se agarra aos sinais aparentes ou detalhes secundários que alimentam a cobiça e o desprazer."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Restraint at the Sensory Threshold:</strong> Notice the initial visual sign (<em>nimitta</em>) before reactive evaluation (<em>anuvyañjana</em>) takes place. Keep the senses sheltered from emotional hijack.</p>",
                      "pt": "<p><strong>Contenção no Limiar dos Sentidos:</strong> Perceba o sinal visual inicial (<em>nimitta</em>) antes que a avaliação reativa (<em>anuvyañjana</em>) tome posse. Mantenha os sentidos protegidos do contágio emocional.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>DN 2 §64</strong>: If left unguarded, unwholesome states of covetousness and sorrow would flood consciousness.</p>",
                      "pt": "<p><strong>DN 2 §64</strong>: Se deixadas desprotegidas, contaminações de cobiça e angústia invadem a consciência.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Guarded City on the Border (AN 7.63):</strong> A city with stout walls, deep moat, and vigilant gatekeeper turns away hostile invaders with ease.</p>",
                      "pt": "<p><strong>A Fortaleza de Fronteira (AN 7.63):</strong> Uma cidade fortificada com muralhas sólidas, fosso fundo e sentinela vigilante rechaça os invasores sem dificuldade.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Nīvaraṇappahāna",
                "title": {
                      "en": "3. Abandoning the Five Hindrances",
                      "pt": "3. Abandonando os Cinco Obstáculos"
                },
                "desc": {
                      "en": "Sitting in seclusion, one cleanses the mind of sensual desire, ill will, sluggishness, restlessness/worry, and skeptical doubt. Seeing the hindrances as temporary defilements rather than permanent traits.",
                      "pt": "Sentando-se em recolhimento, limpa-se a mente do desejo sensual, má vontade, preguiça, inquietação/remorso e dúvida cética. Enxergando os obstáculos como contaminações passageiras e não traços fixos."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Applying Specific Antidotes:</strong> Meet sensual desire with contemplation of impermanence; meet anger with loving-kindness (<em>mettā</em>); meet sluggishness with perception of light; meet restlessness with breath settling; meet doubt with Dhamma reflection.</p>",
                      "pt": "<p><strong>Aplicando os Antídotos Específicos:</strong> Enfrente o apego com a impermanência; desarme a raiva com bondade amorosa (<em>mettā</em>); combata a sonolência com luminosidade; acalme a agitação na respiração; dissipe a dúvida no estudo do Dhamma.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>DN 2 §68–74</strong>: The famous section containing the five dramatic parables of liberation from hindrances.</p>",
                      "pt": "<p><strong>DN 2 §68–74</strong>: O célebre trecho que apresenta as cinco parábolas da libertação dos obstáculos mentais.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Five Great Parables of Relief (DN 2 §69–73):</strong> Overcoming the 5 hindrances is like paying off a crushing debt, recovering from severe illness, being freed from prison, released from slavery, and crossing a perilous wilderness into safety.</p>",
                      "pt": "<p><strong>As Cinco Parábolas de Alívio (DN 2 §69–73):</strong> Superar os 5 obstáculos é como quitar uma dívida esmagadora, curar-se de doença grave, sair da prisão, ser liberto da escravidão e atravessar um deserto perigoso até a segurança.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Catu-Jhāna Samāpatti",
                "title": {
                      "en": "4. The Four Absorptions (Jhāna Suffusions)",
                      "pt": "4. As Quatro Absorções (Saturações dos Jhānas)"
                },
                "desc": {
                      "en": "Free of hindrances, one ascends through the 4 Jhānas: 1st with applied/sustained thought, rapture, and pleasure; 2nd with inner confidence and joyful unity; 3rd with equanimous ease; 4th with pure mindfulness beyond pleasure and pain.",
                      "pt": "Livre dos obstáculos, o meditador ascende pelos 4 Jhānas: o 1º com pensamento aplicado e sustentado, êxtase e paz; o 2º com confiança e unificação serena; o 3º com bem-estar equânime; o 4º com pureza imaculada além de prazer e dor."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Step-by-Step Somatic Saturation:</strong> Allow rapture and bliss to permeate every cell of the physical body, maintaining unwavering attention without straining.</p>",
                      "pt": "<p><strong>Saturação Somática Passo a Passo:</strong> Permita que o arrebatamento e o bem-estar permeiem cada fibra e célula viva do corpo, sustentando foco inabalável sem tensão mecânica.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>DN 2 §75–84</strong>: The core canonical formulation of the Jhāna similes parallel to MN 119.</p>",
                      "pt": "<p><strong>DN 2 §75–84</strong>: A formulação canônica central dos símiles dos Jhānas paralela ao MN 119.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Bathman, Spring Lake, Lotus Flowers, and White Robe (DN 2):</strong> Moisture permeating bath powder, water bubbling in an alpine lake, lotuses steeped under water, and a person wrapped in a pristine white sheet.</p>",
                      "pt": "<p><strong>O Banhista, o Lago Alpino, os Lótus e o Manto Branco (DN 2):</strong> O pó de banho sovado com água, a nascente pura no leito do lago, flores imersas na água fresca e o homem coberto por um linho branco imaculado.</p>"
                }
          },
          {
                "step": 5,
                "pali": "Ñāṇadassana",
                "title": {
                      "en": "5. Direct Knowledge and Vision of Mind and Body",
                      "pt": "5. Conhecimento Direto da Mente e do Corpo"
                },
                "desc": {
                      "en": "With mind concentrated, purified, spotless, and unshakeable, one directs attention to knowledge and vision: 'This body of mine is material, composed of the four elements... and this consciousness of mine is tied to it.'",
                      "pt": "Com a mente concentrada, purificada e inabalável, inclina-se para a visão direta: 'Este meu corpo é material, composto dos quatro elementos... e esta minha consciência está atada a ele'."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Investigating the Relation of Matter and Mind:</strong> Emerging from Jhāna stillness, observe how consciousness is anchored in physical sensory bases, conditioned, and subject to breakup.</p>",
                      "pt": "<p><strong>Investigando a Relação Mente-Matéria:</strong> Emergindo da calma do Jhāna, observe como a consciência está atada à base física sensorial, condicionada e sujeita ao perecimento.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>DN 2 §85–86</strong>: The breakthrough from meditative tranquility into liberating Vipassanā.</p>",
                      "pt": "<p><strong>DN 2 §85–86</strong>: O salto da tranquilidade meditativa para a sabedoria penetrante de Vipassanā.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Lapis Lazuli Gem on a Colored String (DN 2 §86):</strong> A clear eight-faceted beryl or lapis lazuli gem strung with a red, blue, or yellow thread; a person inspecting it sees: 'Here is the gem, here is the thread running through it.'</p>",
                      "pt": "<p><strong>A Gema de Berilo em Fio Colorido (DN 2 §86):</strong> Uma gema translúcida de oito facetas atravessada por um fio vermelho ou dourado; uma pessoa de olhos lúcidos vê: 'Aqui está a gema, aqui está o fio que a atravessa.'</p>"
                }
          },
          {
                "step": 6,
                "pali": "Āsavakkhaya-ñāṇa",
                "title": {
                      "en": "6. Destruction of the Mental Taints (Full Liberation)",
                      "pt": "6. Destruição das Contaminações (Libertação Plena)"
                },
                "desc": {
                      "en": "Directing the purified mind to the destruction of the taints: one knows as it truly is: 'This is suffering; this is its origin; this is its cessation; this is the path.' Knowing: 'Birth is ended; the spiritual life lived; done is what had to be done.'",
                      "pt": "Inclinando a mente purificada para a extinção das contaminações: conhece-se a verdade nua: 'Isto é sofrimento; esta é a sua origem; esta é a sua cessação; este é o nobre caminho'. Sabe-se: 'Extinto é o renascimento; vivida a vida santa; feito o que devia ser feito'."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Uprooting the Three Deepest Drives:</strong> Directly discern the ending of the taint of sensuality (<em>kāmāsava</em>), taint of becoming (<em>bhavāsava</em>), and taint of ignorance (<em>avijjāsava</em>). Rest in unconditioned liberation.</p>",
                      "pt": "<p><strong>Erradicando os Impulsos Subjacentes:</strong> Discernir diretamente a extinção da contaminação do apego sensual (<em>kāmāsava</em>), do devir (<em>bhavāsava</em>) e da ignorância (<em>avijjāsava</em>). Repousar na libertação incondicionada.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>DN 2 §97–98</strong>: The ultimate fruit (<em>sāmaññaphala</em>) of the contemplative journey.</p>",
                      "pt": "<p><strong>DN 2 §97–98</strong>: O fruto supremo (<em>sāmaññaphala</em>) de toda a jornada contemplativa.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Crystal Pool in the Mountains (DN 2 §98):</strong> A pool of water on a mountain ridge, crystal clear, where a person standing on the bank sees shells, gravel, and shoals of fish swimming within it with total clarity.</p>",
                      "pt": "<p><strong>O Lago Cristalino no Topo da Montanha (DN 2 §98):</strong> Um lago límpido no cume de uma montanha, tão translúcido que quem estiver na margem vê as conchas, o cascalho e os cardumes nadando no fundo com nitidez total.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "Use sense restraint (Indriyasaṁvara) directly with smartphones, social media feeds, and visual advertising: pause before clicking and feel the initial tug of craving or aversion. Before every sit, deliberately review the 5 Hindrance Similes—especially the 'clearing of debt' and 'release from prison'—to bring joyful lightness to the meditation cushion rather than grim striving.",
      "pt": "Aplique a guarda dos sentidos (Indriyasaṁvara) diretamente com smartphones e redes sociais: faça uma pausa antes de clicar e reconheça o puxão da cobiça ou da irritação. Antes de meditar, rememore os 5 símiles dos obstáculos — sobretudo o alívio da quitação de uma dívida e da saída de uma prisão — trazendo leveza e alegria à prática."
    },
    "keyPaliTerms": [
      {
        "term": "Indriyasaṁvara",
        "meaning": "Guarding the doors of the sense faculties against reactive contamination"
      },
      {
        "term": "Nīvaraṇappahāna",
        "meaning": "The conscious abandoning and cutting off of the five hindrances"
      },
      {
        "term": "Santuṭṭhi",
        "meaning": "Contentment with what is present and minimal necessary requisites"
      },
      {
        "term": "Ñāṇadassana",
        "meaning": "Direct knowledge and vision into the conditioned nature of body and consciousness"
      }
    ]
  },
  {
    "id": "ebt-kayagatasati",
    "cluster": "ebt",
    "number": "04",
    "paliTitle": "Kāyagatāsati Sutta",
    "title": {
      "en": "Mindfulness Immersed in the Body & The 10 Blessings",
      "pt": "Atenção Plena Imersa no Corpo & As Dez Bênçãos"
    },
    "lineageTradition": {
      "en": "Canonical Early Buddhist Texts (EBT)",
      "pt": "Textos Budistas Antigos (EBT Canônico)"
    },
    "primaryMasters": "Gotama Buddha, Ven. Ānanda",
    "canonicalRef": "MN 119 (Majjhima Nikāya 119)",
    "difficulty": "foundational",
    "curriculumOrder": 1,
    "difficultyLabel": {
      "en": "Foundations",
      "pt": "Fundamentos"
    },
    "recommendedPrereq": {
      "en": "None (The best somatic starting point)",
      "pt": "Nenhum (O melhor ponto de partida somático)"
    },
    "whyStudy": {
      "en": "Establishes somatic grounding in the living body and postures before attempting subtle mental states.",
      "pt": "Estabelece o enraizamento no corpo vivo e nas posturas antes de tentar estados mentais sutis."
    },
    "coreFocus": {
      "en": "Comprehensive somatic embodiment across postures, physical elements, anatomical components, and the 10 supreme blessings of mastery",
      "pt": "Presença somática integral nas posturas, elementos físicos, partes anatômicas e as 10 bênçãos supremas de domínio mental"
    },
    "primaryAnchor": {
      "en": "The immediate tactile, proprioceptive reality of the living physical body in all four postures",
      "pt": "A realidade tátil e proprioceptiva imediata do corpo físico vivo em todas as quatro posturas"
    },
    "approachToJhana": {
      "en": "Jhānas are experienced not as disembodied trances, but as organic, full-bodied saturations of rapture, ease, and pristine equanimity",
      "pt": "Os Jhānas são vivenciados não como transes desincorporados, mas como saturação orgânica de todo o corpo com êxtase, paz e lucidez"
    },
    "useOfNoting": {
      "en": "Direct somatic recognition without mental verbalization ('When bending or stretching the limbs, one acts with situational clarity')",
      "pt": "Reconhecimento somático direto sem verbalização discursiva ('Ao dobrar ou esticar os membros, age-se com lucidez situacional')"
    },
    "tagline": {
      "en": "'Whoever penetrates bodily mindfulness with clarity has embraced within themselves all wholesome qualities leading to awakening.'",
      "pt": "'Aquele que penetra a atenção plena no corpo com clareza abrangeu em si todas as qualidades salutares que conduzem ao despertar.'"
    },
    "overview": {
      "en": "In the Kāyagatāsati Sutta (MN 119), the Buddha provides the ultimate practical guide to somatic grounding. Far from regarding the body as a mere hindrance to be bypassed, the Buddha presents bodily awareness as the unshakeable foundation for all spiritual mastery. The sutta details progressive bodily contemplations: breath awareness, the four primary postures, clear comprehension in eating, drinking, and daily movement, examining the 31 anatomical parts, meditating on the four material elements (earth, water, fire, wind), the cemetery reflections on decay, and the four somatic Jhāna suffusions. Most inspiringly, the Buddha concludes with the Ten Great Blessings of bodily mindfulness: it conquers discontent and delight, subdues fear and dread, enables one to endure cold, heat, hunger, thirst, and severe physical pain without agony, and makes the mind instantly receptive to liberating realizations.",
      "pt": "No Kāyagatāsati Sutta (MN 119), o Buda fornece o guia definitivo para o enraizamento somático. Longe de tratar o corpo como mero obstáculo a ser ignorado, o Buda o estabelece como a âncora inabalável para o domínio espiritual. O sutta percorre contemplações progressivas: a respiração consciente, as quatro posturas, a lucidez ao alimentar-se, caminhar e mover-se, o escaneamento das 31 partes anatômicas, a percepção dos quatro elementos materiais (terra, água, fogo, ar), as reflexões nos cemitérios sobre a transitoriedade e a saturação somática dos quatro Jhānas. O Buda coroa o discurso com as Dez Grandes Bênçãos da atenção plena no corpo: ela conquista o desprazer e o apego, subjuga o pânico e o medo, capacita o praticante a suportar frio, calor, fome e dores físicas intensas sem desespero mental, tornando a mente fértil para a libertação."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Catur-iriyāpatha Manasikāra",
                "title": {
                      "en": "1. The Four Somatic Postures & Proprioceptive Grounding",
                      "pt": "1. As Quatro Posturas Somáticas & Enraizamento Proprioceptivo"
                },
                "desc": {
                      "en": "The Buddha instructs that when walking, standing, sitting, or lying down, one knows directly: 'I am walking', 'I am standing', 'I am sitting', 'I am lying down'. The practice is not an abstract verbal repetition, but continuous, non-reactive somatic presence in the musculoskeletal framework of the living organism as it navigates space.",
                      "pt": "O Buda instrui que ao andar, ficar em pé, sentar ou deitar, discerne-se diretamente: 'Estou andando', 'Estou de pé', 'Estou sentado', 'Estou deitado'. Não se trata de uma repetição verbal mecânica, mas de uma presença somática ininterrupta e não reativa na estrutura musculoesquelética viva enquanto ela navega pelo espaço."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Physical Alignment & Posture:</strong> In sitting, establish an upright spine without rigid strain. Align ears directly over shoulders, and shoulders over hips. In standing, balance body weight evenly across both feet—feeling the tripod formed by the heel, the ball of the big toe, and the base of the little toe.</p><p><strong>Caṅkama (Walking Meditation) Protocol:</strong> Designate a straight, unobstructed path of 15 to 30 paces. Lower the gaze 2 to 3 meters ahead without fixing eyes on objects. Walk at a measured, unhurried pace. Break movement into somatic phases: lifting (<em>uddharaṇa</em>), shifting forward (<em>atiharana</em>), lowering (<em>vossajjana</em>), and resting/touching (<em>sannidhiyāna</em>). Feel the weight transfer directly through the soles of the feet.</p><p><strong>Silent Anchor, No Verbalization:</strong> As taught in the commentaries, avoid converting the practice into an analytical internal dialogue. When the foot presses the ground, feel the direct tactile firmness, temperature, and muscle tension without mental commentary.</p><p><strong>Mindfulness of Transitions:</strong> When shifting from sitting to standing or lying down, maintain unbroken awareness across the transitional shifts of the center of gravity and muscular recruitment.</p>",
                      "pt": "<p><strong>Alinhamento Físico & Postura:</strong> Ao sentar, firme a coluna ereta sem rigidez mecânica. Alinhe os ouvidos com os ombros e os ombros com o quadril. De pé, distribua o peso uniformemente entre ambos os pés—sentindo o tripé formado pelo calcanhar, a base do polegar e a base do dedo mindinho.</p><p><strong>Protocolo de Caṅkama (Meditação Andando):</strong> Escolha um trajeto reto e desobstruído de 15 a 30 passos. Mantenha os olhos suavemente abertos voltados a cerca de 2 a 3 metros adiante no chão sem fixar em objetos. Caminhe em ritmo medido e regular. Sinta a mecânica somática: elevar (<em>uddharaṇa</em>), mover à frente (<em>atiharana</em>), baixar (<em>vossajjana</em>) e tocar o chão (<em>sannidhiyāna</em>). Sinta a transferência de peso diretamente pelas solas dos pés.</p><p><strong>Âncora Silenciosa, Sem Verbalização:</strong> Conforme ensinado nos comentários, não converta a prática em discurso analítico interior. Quando o pé pressionar o solo, sinta diretamente a firmeza tátil, a temperatura e a tensão muscular sem narrativa mental.</p><p><strong>Atenção Plena nas Transições:</strong> Ao transitar de sentado para de pé ou deitado, mantenha a atenção ininterrupta durante todo o deslocamento do centro de gravidade e recrutamento muscular.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Rooted in <strong>MN 119 §4</strong> and <strong>MN 10 §4</strong> (Satipaṭṭhāna Sutta). In the <em>Papañcasūdanī</em> (Buddhaghosa's Commentary), it is explained that this contemplation directly dismantles the pervasive illusion of a permanent 'soul' (<em>jīva</em>) orchestrating bodily motion: <em>'Who walks? No being or person walks. Movement occurs solely by the diffusion of the air-element (vāyodhātu) produced by mental intention (cittakiriyā-vāyodhātuvappārena).'</em></p><p>Supported by <strong>SN 47.20 (Sedaka Sutta)</strong>, where somatic vigilance is equated to holding a vessel brimming with oil with unwavering focus amid worldly distractions.</p>",
                      "pt": "<p>Fundamentado em <strong>MN 119 §4</strong> e <strong>MN 10 §4</strong> (Satipaṭṭhāna Sutta). Na <em>Papañcasūdanī</em> (Comentário de Buddhaghosa), explica-se que esta contemplação desconstrói diretamente a ilusão pervasiva de uma 'alma' (<em>jīva</em>) que comanda o movimento: <em>'Quem caminha? Nenhuma entidade ou pessoa caminha. O movimento ocorre unicamente pela difusão do elemento ar (vāyodhātu) nascido da intenção mental (cittakiriyā-vāyodhātuvappārena).'</em></p><p>Apoiado pelo <strong>SN 47.20 (Sedaka Sutta)</strong>, onde a vigilância somática é equiparada a segurar uma tigela de óleo transbordante com foco inabalável em meio às distrações do mundo.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Acrobat's Balance Pole & The Brim-Full Bowl of Oil (SN 47.20 / MN 119):</strong> Just as an acrobat in the circus balances their own pole securely before coordinating with their partner, anchoring awareness in the four postures provides an unshakeable somatic gyroscope. Distractions cannot topple a mind rooted firmly in the physical base.</p>",
                      "pt": "<p><strong>A Vara de Equilíbrio do Acrobata & A Tigela Transbordante de Óleo (SN 47.20 / MN 119):</strong> Tal como o acrobata no circo estabiliza a própria vara de equilíbrio com firmeza antes de coordenar com seu parceiro, ancorar a mente nas quatro posturas cria um giroscópio somático inabalável. As distrações não conseguem derrubar uma mente enraizada no corpo físico.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Sampajañña-pabba & Catuvidha-sampajañña",
                "title": {
                      "en": "2. Dynamic Clear Comprehension & The 4 Diagnostic Filters",
                      "pt": "2. Clara Compreensão Dinâmica & Os Quatro Filtros Diagnósticos"
                },
                "desc": {
                      "en": "Clear comprehension (<em>sampajañña</em>) extends meditative vigilance into every biological and mundane operation: stepping forward, looking back, extending and flexing limbs, wearing clothes, chewing, savoring, swallowing, urinating, defecating, falling asleep, and waking. The mind does not operate on autopilot; every gesture is saturated with lucid awareness.",
                      "pt": "A clara compreensão (<em>sampajañña</em>) estende a vigilância meditativa a todas as operações biológicas e cotidianas: avançar, olhar em redor, estender e dobrar membros, vestir roupas, mastigar, engolir, urinar, defecar, adormecer e despertar. A mente não opera em piloto automático; cada gesto é banhado de lucidez."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Micro-Pause Before Action:</strong> Before initiating an intentional motor action (e.g., reaching for a glass, standing up from a desk, turning a door handle), introduce a deliberate 1-second pause to witness the mental volition (<em>cetanā</em>) arising before the muscles contract.</p><p><strong>Applying the 4 Classical Filters (Papañcasūdanī / Atthasālinī):</strong><ol><li><strong>Sātthaka-sampajañña (Purpose):</strong> Is this bodily movement genuinely wholesome and aligned with Dhamma, or driven by restless craving and agitation?</li><li><strong>Sappāya-sampajañña (Suitability):</strong> Is this the appropriate time, place, and measure to carry it out?</li><li><strong>Gocara-sampajañña (Domain/Pasture):</strong> Can somatic mindfulness be maintained continuously during the action without losing the anchor?</li><li><strong>Asammoha-sampajañña (Non-Delusion):</strong> Seeing clearly that within the action there is no permanent 'doer'—only biological processes actuated by volitional impulses.</li></ol></p><p><strong>Mindful Eating Protocol:</strong> During daily meals, track the complete physical chain: the visual perception of food, arm reaching, food contact, saliva secretion, the mechanical crushing of chewing, taste fading on the tongue, and swallowing.</p>",
                      "pt": "<p><strong>A Micro-Pausa Antes da Ação:</strong> Antes de iniciar qualquer movimento intencional (ex.: pegar um copo, levantar-se da cadeira, girar a maçaneta), introduza uma pausa consciente de 1 segundo para testemunhar a volição mental (<em>cetanā</em>) antes que os músculos se contraiam.</p><p><strong>Aplicação dos Quatro Filtros Clássicos (Papañcasūdanī / Atthasālinī):</strong><ol><li><strong>Sātthaka-sampajañña (Propósito):</strong> Este movimento corporal é genuinamente salutar e alinhado com o Dhamma, ou é fruto de inquietação e cobiça reativa?</li><li><strong>Sappāya-sampajañña (Adequação):</strong> É o momento, o lugar e a medida apropriada para realizá-lo?</li><li><strong>Gocara-sampajañña (Domínio/Pastagem):</strong> Consigo manter a presença somática ininterrupta durante a ação sem perder a âncora?</li><li><strong>Asammoha-sampajañña (Não-Ilusão):</strong> Enxergar com clareza que na ação não há um 'agente' ou 'eu' permanente operando, mas processos biológicos acionados por impulsos volitivos.</li></ol></p><p><strong>Protocolo de Alimentação Consciente:</strong> Durante as refeições diárias, acompanhe a cadeia física completa: percepção visual do alimento, extensão do braço, contato na boca, salivação, mastigação mecânica, dissolução do sabor e deglutição esofágica.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Canonical foundation in <strong>MN 119 §5</strong>, <strong>MN 10 §5</strong>, and <strong>DN 2 §65</strong> (Sāmaññaphala Sutta). Explicated in depth in the <em>Atthasālinī</em> (§311–317) and <em>Papañcasūdanī</em>. The commentators emphasize that non-delusion clear comprehension (<em>asammoha-sampajañña</em>) is the direct antidote to the belief in a personal agent: <em>'He does not see an agent who moves; he recognizes the interaction of consciousness, volition, and the wind-element.'</em></p>",
                      "pt": "<p>Base canônica em <strong>MN 119 §5</strong>, <strong>MN 10 §5</strong> e <strong>DN 2 §65</strong> (Sāmaññaphala Sutta). Explicado em profundidade no <em>Atthasālinī</em> (§311–317) e na <em>Papañcasūdanī</em>. Os comentadores enfatizam que a clara compreensão da não-ilusão (<em>asammoha-sampajañña</em>) é o antídoto direto à crença em um agente pessoal: <em>'Ele não vê um agente que se move; ele reconhece a interação entre consciência, volição e o elemento ar.'</em></p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Skillful Charioteer Reigning in Thorough-bred Horses (MN 119):</strong> The mindful practitioner steers physical faculties like an expert charioteer holding taut reins on an open road, neither lashing the steeds frantically nor letting the reins drop in negligence.</p>",
                      "pt": "<p><strong>O Cocheiro Hábil Controlando Cavalos de Raça (MN 119):</strong> O praticante atento guia as faculdades físicas como um cocheiro perito segurando as rédeas firmes em estrada aberta, sem chicotear os cavalos com afobação nem soltar as rédeas em negligência.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Dvattiṁsākāra & Aṭṭhisaṅkhalikā",
                "title": {
                      "en": "3. The 32 Anatomical Parts & Skeletal Deconstruction",
                      "pt": "3. As 32 Partes Anatômicas & Desconstrução do Esqueleto"
                },
                "desc": {
                      "en": "The Buddha instructs the meditator to examine this very body from the soles of the feet up and from the crown of the head down, bounded by skin and full of manifold biological substances. This contemplation systematically dismantles erotic infatuation, aesthetic vanity, narcissism, and somatic grasping by confronting biological reality directly.",
                      "pt": "O Buda instrui o meditador a examinar este exato corpo desde as solas dos pés até o topo da cabeça, envolvido pela pele e repleto de substâncias biológicas. Esta prática desmantela sistematicamente o apego erótico, a vaidade estética e o narcisismo somático, confrontando a realidade biológica sem filtros."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Visuddhimagga Seven-Fold Recitation Method (Ch. VIII, §44–144):</strong><ol><li><strong>Tacamattapañcaka (The Skin Pentad):</strong> Begin by mentally locating and visualizing the first five components: head hairs (<em>kesā</em>), body hairs (<em>lomā</em>), nails (<em>nakhā</em>), teeth (<em>dantā</em>), skin (<em>taco</em>).</li><li>Cycle forward and backward (<em>anuloma-paṭiloma</em>): hairs of the head, hairs of the body, nails, teeth, skin — skin, teeth, nails, hairs of the body, hairs of the head. Repeat until the image is crisp.</li><li>Progress to internal organs: flesh (<em>maṁsaṁ</em>), sinews (<em>nhāru</em>), bones (<em>aṭṭhi</em>), bone-marrow (<em>aṭṭhimiñjaṁ</em>), kidneys (<em>vakkaṁ</em>), heart (<em>hadayaṁ</em>), liver (<em>yakanaṁ</em>), pleura (<em>kilomakaṁ</em>), spleen (<em>pihakaṁ</em>), lungs (<em>papphāsaṁ</em>).</li><li>Survey bodily fluids: bile, phlegm, pus, blood, sweat, fat, tears, grease, saliva, snot, synovial joint fluid, urine (<em>muttaṁ</em>).</li></ol></p><p><strong>Internal Radiographic Scanning (X-Ray Vision):</strong> Sit motionless and penetrate beneath the skin. Visualize and feel the calcium armature of the skull, jawbone, collarbone, ribcage, spine, and leg bones. Note how the skeleton is a mechanical framework held together by sinews.</p><p><strong>Dispassionate Equilibrium (Nibbida):</strong> If repulsion or aversion arises, balance it immediately with compassionate clarity. The purpose is never morbid disgust, but serene disenchantment and freedom from the tyranny of physical vanity.</p>",
                      "pt": "<p><strong>Método de Recitação do Visuddhimagga (Cap. VIII, §44–144):</strong><ol><li><strong>Tacamattapañcaka (A Pêntade da Pele):</strong> Comece localizando mentalmente as primeiras cinco partes: cabelos (<em>kesā</em>), pelos (<em>lomā</em>), unhas (<em>nakhā</em>), dentes (<em>dantā</em>), pele (<em>taco</em>).</li><li>Percorra em ordem direta e reversa (<em>anuloma-paṭiloma</em>): cabelos, pelos, unhas, dentes, pele — pele, dentes, unhas, pelos, cabelos. Repita até a imagem interna tornar-se nítida.</li><li>Progrida para os órgãos internos: carne (<em>maṁsaṁ</em>), tendões (<em>nhāru</em>), ossos (<em>aṭṭhi</em>), medula óssea (<em>aṭṭhimiñjaṁ</em>), rins (<em>vakkaṁ</em>), coração (<em>hadayaṁ</em>), fígado (<em>yakanaṁ</em>), pleura (<em>kilomakaṁ</em>), baço (<em>pihakaṁ</em>), pulmões (<em>papphāsaṁ</em>).</li><li>Examine os fluidos corporais: bílis, catarro, pus, sangue, suor, gordura, lágrimas, saliva, muco, líquido sinovial articular, urina (<em>muttaṁ</em>).</li></ol></p><p><strong>Varredura Radiográfica Interior (Visão de Raio-X):</strong> Sente-se imóvel e penetre abaixo da superfície dérmica. Visualize e sinta a estrutura de cálcio do crânio, mandíbula, clavículas, caixa torácica, vértebras e ossos das pernas. Observe o esqueleto como uma armação mecânica sustentada por ligamentos fibrosos.</p><p><strong>Equilíbrio Desapegado (Nibbida):</strong> Se surgir aversão ou asco, equilibre imediatamente com lucidez compassiva. O objetivo nunca é o desgosto doentio, mas o desatamento sereno e a libertação da vaidade corpórea.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Canonical text in <strong>MN 119 §7</strong>, parallel to <strong>MN 10 §5</strong> and <strong>AN 10.60 (Girimānanda Sutta)</strong>. The <em>Visuddhimagga</em> (Ch. VIII) instructs the meditator to investigate each part across five criteria: color (<em>vaṇṇa</em>), shape (<em>saṇṭhāna</em>), direction (<em>disā</em>), location (<em>okāsa</em>), and delimitation (<em>pariccheda</em>). This destroys the hallucinatory perception of beauty (<em>subha-saññā</em>) and dissolves sensual lust at its roots.</p>",
                      "pt": "<p>Texto canônico em <strong>MN 119 §7</strong>, paralelo ao <strong>MN 10 §5</strong> e ao <strong>AN 10.60 (Girimānanda Sutta)</strong>. O <em>Visuddhimagga</em> (Cap. VIII) orienta o meditador a investigar cada parte sob cinco critérios: cor (<em>vaṇṇa</em>), formato (<em>saṇṭhāna</em>), direção (<em>disā</em>), localização (<em>okāsa</em>) e delimitação (<em>pariccheda</em>). Isso aniquila a percepção ilusória de beleza (<em>subha-saññā</em>) e extirpa o apego sensual em sua raiz.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Bag of Mixed Grains (MN 119 / MN 10):</strong> 'Just as if there were a bag open at both ends, filled with various kinds of grain—hill rice, red rice, beans, peas, millet, and sesame—and a person with keen eyesight opened it and examined the contents: <em>This is hill rice, this is red rice, these are beans...</em>; so too the meditator inspects the 32 parts of this living body.'</p>",
                      "pt": "<p><strong>O Saco de Grãos Mistos com Duas Aberturas (MN 119 / MN 10):</strong> 'Assim como se houvesse um saco aberto em ambas as extremidades, repleto de vários grãos—arroz de montanha, arroz vermelho, feijão, ervilhas, sésamo—e um homem de olhos lúcidos o abrisse e inspecionasse: <em>Isto é arroz, isto é feijão, isto é sésamo...</em>; assim também o meditador inspeciona as 32 partes deste corpo vivo.'</p>"
                }
          },
          {
                "step": 4,
                "pali": "Dhātumanasikāra & Catudhātuvavatthāna",
                "title": {
                      "en": "4. Discerning the Four Elemental Realities (Solidity, Fluidity, Heat, Motion)",
                      "pt": "4. Discernindo as Quatro Realidades Elementares (Solidez, Fluidez, Calor, Movimento)"
                },
                "desc": {
                      "en": "The Buddha instructs to contemplate the body however it is situated or disposed in terms of the fundamental material properties (<em>dhātu</em>): Earth (<em>pathavī</em>), Water (<em>āpo</em>), Fire (<em>tejo</em>), and Wind (<em>vāyo</em>). Matter ceases to be conceived as 'my body' and is directly experienced as universal physical dynamics.",
                      "pt": "O Buda instrui a contemplar o corpo, qualquer que seja sua posição, sob a ótica de suas propriedades materiais fundamentais (<em>dhātu</em>): Terra (<em>pathavī</em>), Água (<em>āpo</em>), Fogo (<em>tejo</em>) e Vento/Ar (<em>vāyo</em>). A matéria deixa de ser rotulada como 'meu corpo' e passa a ser vivenciada diretamente como dinâmicas físicas impessoais."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Discerning the Four Specific Elemental Characteristics:</strong><ol><li><strong>Earth Element (Pathavī-dhātu — Hardness & Softness):</strong> Direct tactile attention to density, firmness, and resistance. Notice the pressure of the pelvic bones into the cushion, the hardness of the teeth, and the tensile rigidity of the spine.</li><li><strong>Water Element (Āpo-dhātu — Cohesion & Fluidity):</strong> Tune into the cohesive binding holding tissues together, and the actual fluids: saliva in the mouth, moisture behind the eyelids, the fluid flow of blood through veins and arteries.</li><li><strong>Fire Element (Tejo-dhātu — Heat & Cold):</strong> Feel thermal energy directly: the warmth radiating from the center of the palms and abdomen, the coolness of the incoming breath against the philtrum, and the metabolic warmth maintaining biological life.</li><li><strong>Wind Element (Vāyo-dhātu — Pressure & Movement):</strong> Sense vibration, expansion, and propulsion. Notice the chest expanding and contracting, peristaltic pulses, joint mobility, and the bio-electric tingling rippling through nerve endings.</li></ol></p><p><strong>Deconstructing Ownership:</strong> Reflect deeply: <em>'The earth element inside this body is of the identical physical nature as the earth element of mountains and soil outside. Neither is me, neither is mine, neither is my eternal soul.'</em></p>",
                      "pt": "<p><strong>Discernindo as Características de Cada Elemento:</strong><ol><li><strong>Elemento Terra (Pathavī-dhātu — Solidez & Dureza):</strong> Foque a atenção tátil na densidade, firmeza e resistência. Observe a pressão dos ossos da bacia contra a almofada, a dureza dos dentes e a rigidez sustentadora da coluna.</li><li><strong>Elemento Água (Āpo-dhātu — Coesão & Fluidez):</strong> Sintonize a força coesiva que mantém os tecidos unidos e os líquidos vitais: a salivação, a umidade nas córneas e o fluxo contínuo do sangue pelas artérias.</li><li><strong>Elemento Fogo (Tejo-dhātu — Calor & Temperatura):</strong> Sinta a energia térmica diretamente: o calor irradiando nas palmas das mãos e abdômen, o ar fresco tocando o septo na inalação e o calor metabólico da digestão.</li><li><strong>Elemento Vento (Vāyo-dhātu — Pressão & Movimento):</strong> Perceba vibração, expansão e propulsão. Sinta o tórax expandindo e retraindo, pulsos circulatórios nos tecidos e formigamentos bioelétricos nos nervos.</li></ol></p><p><strong>Desconstruindo a Ideia de Propriedade:</strong> Reflita profundamente: <em>'O elemento terra dentro deste corpo é da mesmíssima natureza que o elemento terra das rochas e do solo do planeta. Nenhum deles sou eu, nenhum deles é meu, nenhum deles é uma alma eterna.'</em></p>"
                },
                "canonicalBasis": {
                      "en": "<p>Rooted in <strong>MN 119 §8</strong>, <strong>MN 140 (Dhātuvibhaṅga Sutta)</strong>, <strong>MN 62 (Mahārāhulovāda Sutta)</strong>, and <strong>Visuddhimagga Ch. XI</strong>. The commentators explain that element meditation directly fractures the 'perception of compactness' (<em>ghana-saññā</em>). When the illusion of an unbroken solid entity is dissolved, access concentration (<em>upacāra-samādhi</em>) is swiftly attained and anattā (non-self) becomes an immediate experiential fact.</p>",
                      "pt": "<p>Fundamentado em <strong>MN 119 §8</strong>, <strong>MN 140 (Dhātuvibhaṅga Sutta)</strong>, <strong>MN 62 (Mahārāhulovāda Sutta)</strong> e no <strong>Visuddhimagga Cap. XI</strong>. Os comentadores esclarecem que a meditação nos elementos fratura a 'percepção de compacidade' (<em>ghana-saññā</em>). Quando a ilusão de um bloco sólido indivisível é dissolvida, a concentração de acesso (<em>upacāra-samādhi</em>) é rapidamente alcançada e anattā (não-eu) torna-se evidência imediata.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Skilled Butcher at the Crossroads (MN 119 / MN 140):</strong> 'Just as a skilled butcher or his apprentice, having slaughtered a cow and divided it into cuts, sits at the major crossroads displaying the meat; while the cow was whole, the label <em>cow</em> was used. But once cut up, the thought <em>cow</em> disappears, and there is only <em>meat</em>. So too, when the body is analyzed into the four elements, the notion of <em>a self or person</em> vanishes completely.'</p>",
                      "pt": "<p><strong>O Açougueiro Perito no Cruzamento (MN 119 / MN 140):</strong> 'Assim como um açougueiro experiente ou seu aprendiz, tendo abatido uma vaca e cortado-a em porções, senta-se num cruzamento movimentado exibindo a carne: enquanto a vaca estava inteira, vigorava a ideia de <em>vaca</em>. Cortada em pedaços, o rótulo <em>vaca</em> desaparece e há apenas <em>carne</em>. Da mesma forma, analisado o corpo nos quatro elementos, a ilusão de <em>uma pessoa ou eu</em> cessa por completo.'</p>"
                }
          },
          {
                "step": 5,
                "pali": "Kāyaparipūraṇa Jhāna & Catu-Jhānasukha",
                "title": {
                      "en": "5. Full-Body Jhāna Saturation & The 4 Canonical Similes",
                      "pt": "5. Saturação Corpórea nos Jhānas & Os Quatro Símiles Canônicos"
                },
                "desc": {
                      "en": "The Buddha reveals that Jhāna is not an escapist, disembodied trance where somatic awareness is extinguished. In MN 119, each of the four form Jhānas is experienced as an organic, full-bodied saturation: permeating, drenching, suffocating, and suffusing the entire physical body with rapture (<em>pīti</em>), pleasure (<em>sukha</em>), and radiant luminous awareness (<em>cetaso pariyodātā</em>).",
                      "pt": "O Buda revela que os Jhānas não são transes desincorporados e anestésicos onde a sensibilidade somática é extinta. No MN 119, cada um dos quatro Jhānas da forma é vivenciado como uma saturação física orgânica: permeando, inundando e preenchendo cada poro e tecido vivo com êxtase (<em>pīti</em>), bem-estar pacífico (<em>sukha</em>) e luminosidade lúcida (<em>cetaso pariyodātā</em>)."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Four Steps of Full-Body Immersion:</strong><ol><li><strong>1st Jhāna (Seclusion-Born Rapture & Pleasure):</strong> As mental chatter subsides through steady concentration, an energetic warmth and tingling (<em>pīti</em>) emerges in the chest or abdomen. Consciously relax and guide this vibrant energy downward into the pelvic floor, thighs, calves, and feet, and upward into the neck, head, and arms until the entire living organism is suffused with joyful ease.</li><li><strong>2nd Jhāna (Internal Unification & Stillness):</strong> Applied and sustained thought (<em>vitakka-vicāra</em>) dissolve into noble silence. The rapture becomes velvety and deeply peaceful, welling up from within the body like water bubbling from an underground aquifer.</li><li><strong>3rd Jhāna (Equanimous Bodily Bliss):</strong> The excitement of rapture fades completely into serene physical contentment. One experiences with the physical body that sublime bliss (<em>sukha</em>) praised by the Noble Ones: <em>'Equanimous and mindful, he dwells in ease.'</em></li><li><strong>4th Jhāna (Purity of Mind & Translucent Stillness):</strong> Beyond pleasure and pain, the body is suffused with a bright, spotless, translucent stillness—cool, immovable, and crystal clear.</li></ol></p>",
                      "pt": "<p><strong>Os Quatro Estágios de Imersão Somática Integral:</strong><ol><li><strong>1º Jhāna (Êxtase & Prazer Nascidos do Recolhimento):</strong> Conforme o diálogo interno silencia na concentração contínua, uma vibração energética calorosa (<em>pīti</em>) brota no peito ou abdômen. Relaxe conscientemente e conduza essa vitalidade para o quadril, pernas, pés, e para cima pelo pescoço, cabeça e braços até que todo o organismo esteja banhado em bem-estar.</li><li><strong>2º Jhāna (Paz Interior & Unificação):</strong> O pensamento direcionado e sustentado (<em>vitakka-vicāra</em>) cessam no silêncio nobre. O êxtase torna-se suave, aveludado e sereno, brotando do próprio núcleo do corpo como água puríssima de uma fonte subterrânea.</li><li><strong>3º Jhāna (Equanimidade & Bem-Estar Corpóreo):</strong> O arrebatamento se dissolve em serenidade pacífica. Vivencia-se no corpo físico aquele bem-estar supremo (<em>sukha</em>) louvado pelos Nobres: <em>'Equânime e atento, repousa em paz.'</em></li><li><strong>4º Jhāna (Pureza da Mente & Quietude Translúcida):</strong> Além do prazer e da dor física, todo o organismo é envolvido por uma quietude lúcida e imaculada—fresca, imóvel e cristalina.</li></ol></p>"
                },
                "canonicalBasis": {
                      "en": "<p>Directly stated in <strong>MN 119 §18–21</strong>, parallel to <strong>DN 2 §77–84</strong> and <strong>AN 5.28</strong>. Buddhaghosa in the <em>Papañcasūdanī</em> states explicitly: <em>'There is no part of his whole physical body that is not suffused (nāssa kiñci sabbāvato kāyassa apphuṭaṁ hoti).'</em> This establishes that in Early Buddhist meditation, deep samādhi does not mean abandoning the body, but purifying it into an instrument of profound peace.</p>",
                      "pt": "<p>Exposto diretamente em <strong>MN 119 §18–21</strong>, correspondendo a <strong>DN 2 §77–84</strong> e <strong>AN 5.28</strong>. Buddhaghosa na <em>Papañcasūdanī</em> afirma categoricamente: <em>'Não há parte alguma de todo o seu corpo que permaneça desassistida (nāssa kiñci sabbāvato kāyassa apphuṭaṁ hoti).'</em> Isso estabelece que no Budismo Antigo, o samādhi profundo não anula o corpo, mas o purifica como veículo de paz inabalável.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Four Classic Jhāna Similes (MN 119 / DN 2):</strong><ul><li><em>1st Jhāna:</em> A bath attendant working water into bath powder until a moist, cohesive ball forms, permeated with moisture inside and out.</li><li><em>2nd Jhāna:</em> A deep mountain lake with cool water welling up from its own subterranean spring, without incoming rain or rivers.</li><li><em>3rd Jhāna:</em> Water-lilies growing completely submerged under water, steeped and saturated from root to petal.</li><li><em>4th Jhāna:</em> A person sitting wrapped from head to foot in a pristine white cloth, with no part of the body left exposed.</li></ul></p>",
                      "pt": "<p><strong>Os Quatro Símiles Clássicos dos Jhānas (MN 119 / DN 2):</strong><ul><li><em>1º Jhāna:</em> Um banhista misturando pó de banho com água até formar uma esfera macia e maleável, inteiramente permeada por umidade por dentro e por fora.</li><li><em>2º Jhāna:</em> Um lago alpino profundo alimentado por sua própria nascente límpida subterrânea, sem afluentes externos nem tempestades.</li><li><em>3º Jhāna:</em> Flores de lótus crescendo totalmente submersas na água límpida, banhadas e saturadas da raiz até as pétalas.</li><li><em>4º Jhāna:</em> Uma pessoa sentada totalmente envolta da cabeça aos pés por um manto branco puríssimo, sem nenhum ponto do corpo exposto.</li></ul></p>"
                }
          },
          {
                "step": 6,
                "pali": "Dasa Ānisaṁsā & Ceto-vimutti",
                "title": {
                      "en": "6. Realizing the 10 Somatic Blessings & Unshakeable Liberation",
                      "pt": "6. Colhendo as Dez Bênçãos Somáticas & Libertação Inabalável"
                },
                "desc": {
                      "en": "When mindfulness immersed in the body is cultivated, developed, made a vehicle, and established as an unshakeable foundation, ten extraordinary blessings (<em>dasa ānisaṁsā</em>) naturally ripen. The practitioner becomes an invulnerable master of their mental faculties, immune to emotional volatility, visceral fear, and physical agony.",
                      "pt": "Quando a atenção plena imersa no corpo é cultivada, desenvolvida, convertida em veículo e consolidada como fundamento inabalável, dez bênçãos extraordinárias (<em>dasa ānisaṁsā</em>) amadurecem. O praticante torna-se senhor invulnerável de suas faculdades mentais, imune à volatilidade emocional, ao terror visceral e à agonia da dor física."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Cultivating the Blessings in Daily Crisis:</strong><ol><li><strong>Subduing Attraction and Discontent (Aratiratisaho):</strong> When restlessness, boredom, or obsessive craving arises in daily life, immediately drop attention into the physical sensation of the feet on the floor. Craving and aversion starve when deprived of mental storylines.</li><li><strong>Overcoming Panic and Dread (Bhayabheravasaho):</strong> In moments of acute anxiety, shock, or dread, do not wrestle with fearful thoughts. Relax the solar plexus, soften the belly, drop the shoulders, and feel the solid ground. Fear dissolves as muscular contraction is released.</li><li><strong>Somatic Endurance of Pain (Adhivāsana-khantī):</strong> When facing acute physical discomfort, cold, heat, hunger, or illness, view sensations purely as sensory data (temperature, throbbing, pressure) without adding mental lamentation (<em>papañca</em>).</li><li><strong>Effortless Access to Wisdom (Abhiññā-sacchikiriya):</strong> Because the mind is steady, malleable, and supple like gold refined in a crucible, it can be directed toward insight into the three marks of existence (<em>anicca, dukkha, anattā</em>) and total liberation.</li></ol></p>",
                      "pt": "<p><strong>Cultivando as Bênçãos nas Crises Cotidianas:</strong><ol><li><strong>Subjugando o Desprazer e a Cobiça (Aratiratisaho):</strong> Quando o tédio, a agitação ou o apego obsessivo surgirem, traga a atenção imediatamente para o contato dos pés com o solo. O desejo e a aversão esmorecem quando privados da narrativa mental.</li><li><strong>Superando o Pânico e o Terror (Bhayabheravasaho):</strong> Em sobressaltos, sustos ou ansiedade aguda, não debata com pensamentos catastróficos. Solte o plexo solar, relaxe o ventre, baixe os ombros e sinta a firmeza da terra. O pavor colapsa quando a tensão muscular é desfeita.</li><li><strong>Paciência Somática diante da Dor (Adhivāsana-khantī):</strong> Ao enfrentar dores agudas, frio, calor, fome ou doenças, encare as sensações como dados táteis neutros (temperatura, pulsação, pressão), sem projetar queixa ou aflição mental (<em>papañca</em>).</li><li><strong>Acesso Natural à Sabedoria (Abhiññā-sacchikiriya):</strong> Como a mente tornou-se maleável e reluzente como ouro purificado no cadinho, ela pode ser direcionada com destreza para a compreensão das três características (<em>anicca, dukkha, anattā</em>) e libertação total.</li></ol></p>"
                },
                "canonicalBasis": {
                      "en": "<p>Enumerated exhaustively in <strong>MN 119 §30–41</strong>: (1) Conquering discontent/delight, (2) Conquering fear/dread, (3) Enduring cold/heat/pain without dismay, (4) Attaining the 4 Jhānas at will, (5–10) Experiencing transcendent direct knowledges culminating in the destruction of the mental taints (<em>āsavakkhaya</em>). Also supported by <strong>SN 35.206 (Chappāṇaka Sutta)</strong> on taming the six sense doors by tethering them to bodily presence.</p>",
                      "pt": "<p>Enumeradas minuciosamente em <strong>MN 119 §30–41</strong>: (1) Vitória sobre o desgosto/deleite, (2) Vitória sobre o medo/pânico, (3) Serenidade diante de frio/calor/dores agudas, (4) Domínio espontâneo dos 4 Jhānas, (5–10) Despertar das faculdades superiores de conhecimento direto culminando na destruição das contaminações mentais (<em>āsavakkhaya</em>). Apoiado também pelo <strong>SN 35.206 (Chappāṇaka Sutta)</strong> sobre domar os seis sentidos ancorando-os no corpo.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Post Buried Deep & The Six Wild Beasts (SN 35.206 / MN 119):</strong> Six wild animals—a snake, crocodile, bird, dog, jackal, and monkey—are bound by ropes to a stout pillar driven deep into the earth. Though each pulls desperately toward its own domain (hole, water, sky, village, charnel ground, forest), none can dislodge the pillar. Eventually exhausted, they lie quietly beside the post. The stout post is mindfulness immersed in the body; the ropes are mindful restraint.</p>",
                      "pt": "<p><strong>O Poste Profundo & As Seis Feras Selvagens (SN 35.206 / MN 119):</strong> Seis animais selvagens—uma cobra, um crocodilo, um pássaro, um cão, um chacal e um macaco—são atados por cordas a um poste sólido fincado na terra. Embora cada animal puxe desesperadamente em direção ao seu habitat (buraco, água, céu, aldeia, cemitério, floresta), nenhum consegue mover o poste. Exaustos, deitam-se tranquilos ao lado da estaca. O poste inabalável é a atenção plena imersa no corpo; as cordas são a contenção atenta.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "Whenever intense emotional distress or anxiety strikes during the day, do not wrestle with obsessive thoughts in the head. Immediately drop attention into physical sensations: feel the weight of the feet pressing on the floor, the hands resting on the lap, or the chest rising and falling. Somatic embodiment instantly short-circuits the runaway loops of conceptual rumination.",
      "pt": "Sempre que surgir ansiedade, estresse ou angústia emocional no cotidiano, não tente debater com os pensamentos na cabeça. Traga a atenção imediatamente para as sensações do corpo: sinta o peso dos pés no chão, o toque das mãos no colo ou o tórax expandindo. A presença somática corta pela raiz o ciclo do excesso de pensamento."
    },
    "keyPaliTerms": [
      {
        "term": "Kāyagatāsati",
        "meaning": "Mindfulness immersed and grounded in the physical body"
      },
      {
        "term": "Dhātu-manasikāra",
        "meaning": "Attention directed to the four material elements (earth, water, fire, wind)"
      },
      {
        "term": "Abhirati-arati-saha",
        "meaning": "The capacity of somatic awareness to conquer both sensual craving and aversion"
      },
      {
        "term": "Adhivāsanakhantī",
        "meaning": "Endurance and equanimity in the face of harsh sensations and bodily discomfort"
      }
    ]
  },
  {
    "id": "ebt-vitakkasanthana",
    "cluster": "ebt",
    "number": "05",
    "paliTitle": "Vitakkasaṇṭhāna Sutta",
    "title": {
      "en": "The Removal of Distracting Thoughts & Cognitive Restructuring",
      "pt": "A Remoção dos Pensamentos Perturbadores"
    },
    "lineageTradition": {
      "en": "Canonical Early Buddhist Texts (EBT)",
      "pt": "Textos Budistas Antigos (EBT Canônico)"
    },
    "primaryMasters": "Gotama Buddha",
    "canonicalRef": "MN 20 (Majjhima Nikāya 20)",
    "difficulty": "foundational",
    "curriculumOrder": 2,
    "difficultyLabel": {
      "en": "Foundations",
      "pt": "Fundamentos"
    },
    "recommendedPrereq": {
      "en": "MN 119 (Kāyagatāsati Sutta)",
      "pt": "MN 119 (Kāyagatāsati Sutta)"
    },
    "whyStudy": {
      "en": "Gives practitioners practical emergency tools to disarm racing thoughts and mental restlessness on the cushion.",
      "pt": "Oferece aos praticantes ferramentas de emergência para desarmar pensamentos acelerados e inquietação na almofada."
    },
    "coreFocus": {
      "en": "The five-step tactical escalation protocol for extinguishing obsessive thoughts of lust, anger, and delusion during meditation",
      "pt": "Protocolo tático em 5 etapas progressivas para extinguir pensamentos obsessivos de cobiça, raiva e confusão na meditação"
    },
    "primaryAnchor": {
      "en": "Mindful cognitive observation and the deliberate skillful substitution of mental objects",
      "pt": "Observação cognitiva consciente e a substituição deliberada e hábil de objetos mentais"
    },
    "approachToJhana": {
      "en": "A prerequisite psychological de-cluttering tool: clearing the intrusive mental weeds so the mind can settle into unified absorption",
      "pt": "Ferramenta indispensável para desobstruir a mente dos ruídos intrusivos para que ela alcance a absorção unificada"
    },
    "useOfNoting": {
      "en": "Immediate recognition of the ethical valence of a thought (wholesome vs. unwholesome) and immediate tactical intervention",
      "pt": "Reconhecimento imediato do tom do pensamento (salutar vs. prejudicial) e intervenção prática imediata"
    },
    "tagline": {
      "en": "'Just as a skilled carpenter knocks out a coarse peg with a fine peg, so too the meditator drives out an unwholesome thought with a wholesome theme.'",
      "pt": "'Assim como um carpinteiro habilidoso desaloja um pino rústico com um pino fino, assim o meditador expulsa um pensamento prejudicial com um tema benéfico.'"
    },
    "overview": {
      "en": "In the Vitakkasaṇṭhāna Sutta (MN 20), the Buddha addresses the universal challenge of every meditator: what to do when obsessive, intrusive, or compulsive thoughts of desire, irritation, or anxiety refuse to subside despite breath mindfulness. The Buddha does not advocate passive resignation. Instead, he lays out a precise five-tier tactical escalation protocol. The meditator begins with the gentlest intervention (replacing the unwholesome thought with an opposite wholesome theme, like knocking out a coarse wooden peg with a fine peg). If that fails, one proceeds to the second tier (examining the degradation and danger of the thought, like wearing a foul carcass around one's neck). If still unsuccessful, the third tier is applied (deliberately turning away attention and ignoring it). If thoughts persist, the fourth tier steps down the thought's kinetic momentum (tracing the thought back to its source, from running to walking, walking to sitting). Finally, as an ultimate emergency resort, one uses forceful resolve—clenching the teeth and subduing the mind by raw willpower. By mastering these five tools, one attains total mastery over thoughts: thinking what one wishes to think, and refusing to think what one does not wish to think.",
      "pt": "No Vitakkasaṇṭhāna Sutta (MN 20), o Buda aborda o desafio universal de todo meditador: o que fazer quando pensamentos obsessivos de desejo, irritação ou ansiedade recusam-se a cessar. O Buda não recomenda resignação passiva. Em vez disso, estabelece um protocolo tático de intervenção em cinco etapas. Começa-se pela abordagem mais suave (substituir o pensamento nocivo pelo seu oposto benéfico, como um carpinteiro que expulsa um pino de madeira rústica com um pino fino). Se isso não bastar, avança-se para o segundo nível (contemplar o perigo e a degradação daquele pensamento, como carregar uma carcaça podre no pescoço). Se persistir, aplica-se o terceiro nível (desviar a atenção e ignorá-lo deliberadamente). Se continuar, o quarto passo desacelera o ímpeto cinético do pensamento (passar do correr ao andar, do andar ao sentar). Por fim, em última instância, utiliza-se a determinação firme com os dentes cerrados para subjugar a mente. Dominando essas cinco chaves, o praticante conquista a maestria mental: pensando o que deseja pensar e descartando o que não deseja."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Añña-nimitta-manasikāra",
                "title": {
                      "en": "1. Replacing with an Alternative Wholesome Theme",
                      "pt": "1. Substituindo por um Tema Salutar Alternativo"
                },
                "desc": {
                      "en": "When an unwholesome, harmful thought connected with desire, hatred, or delusion arises, replace it by focusing attention on a different wholesome theme.",
                      "pt": "Quando surgir um pensamento prejudicial ligado ao desejo, aversão ou ilusão, substitua-o imediatamente focalizando a atenção num tema salutar construtivo."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Cognitive Substitution Protocol:</strong> If lust arises, switch to anatomical parts or breath; if resentment arises, switch to loving-kindness (<em>mettā</em>); if anxious planning arises, drop into the feet touching the floor.</p>",
                      "pt": "<p><strong>Protocolo de Substituição Cognitiva:</strong> Se surgir cobiça, volte-se para o esqueleto ou respiração; se surgir raiva, envie bondade amorosa (<em>mettā</em>); se surgir ansiedade, sinta os pés no chão.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 20 §3</strong>: The first line of defense in cognitive restructuring.</p>",
                      "pt": "<p><strong>MN 20 §3</strong>: A primeira linha de defesa na reestruturação cognitiva budista.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Fine Wooden Peg (MN 20):</strong> Just as a carpenter knocks out an old, coarse wooden peg by tapping in a new, fine peg, wholesome thoughts drive out unwholesome thoughts.</p>",
                      "pt": "<p><strong>O Pino de Madeira Fina (MN 20):</strong> Tal como um carpinteiro experiente expulsa um pino de madeira rústica e lascada martelando no lugar um pino novo e fino, pensamentos salutares expulsam os nocivos.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Ādīnavānupassanā",
                "title": {
                      "en": "2. Scrutinizing the Peril & Distress",
                      "pt": "2. Examinando o Perigo & Desvantagem"
                },
                "desc": {
                      "en": "If distracting thoughts persist, examine their danger and drawbacks: 'These thoughts are unwholesome, blameworthy, and result in mental suffering.'",
                      "pt": "Se os pensamentos persistirem, examine sua nocividade e perigo: 'Estes pensamentos são destrutivos, geram sofrimento e sabotam a paz'."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Visceral Reality Check:</strong> Ask yourself: 'Where does following this thought loop lead? Does it bring calm or exhaustion and regret?' Awaken healthy moral shame (<em>hiri</em>) and dread of harm (<em>ottappa</em>).</p>",
                      "pt": "<p><strong>Confronto com a Realidade:</strong> Pergunte-se: 'Para onde este devaneio me leva? Gera tranquilidade ou exaustão e remorso?' Desperte o pudor saudável (<em>hiri</em>) e o receio do dano (<em>ottappa</em>).</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 20 §4</strong>: Penetrating the drawback (<em>ādīnava</em>) severs the compulsive attraction.</p>",
                      "pt": "<p><strong>MN 20 §4</strong>: Ver a desvantagem (<em>ādīnava</em>) corta a atração obsessiva pela raiz.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Dead Animal Around the Neck (MN 20):</strong> A handsome youth fond of ornaments would be utterly horrified and disgusted if the carcass of a snake or dog were hung around his neck, shaking it off instantly.</p>",
                      "pt": "<p><strong>A Carcaça no Pescoço (MN 20):</strong> Um jovem elegante apreciador de adornos ficaria horrorizado e tomado de repulsa se a carcaça de uma cobra ou cão morto fosse pendurada em seu pescoço, sacudindo-a fora num sobressalto.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Asati-amanasikāra",
                "title": {
                      "en": "3. Conscious Non-Attention & Ignoring",
                      "pt": "3. Não-Atenção Consciente & Ignorar Deliberado"
                },
                "desc": {
                      "en": "If the thoughts continue, cultivate non-attention and deliberate unmindfulness towards them. Refuse to engage, argue, or supply mental fuel to the narrative.",
                      "pt": "Se os pensamentos ainda continuarem, cultive a não-atenção deliberada. Recuse-se a debater, dialogar ou fornecer combustível mental à narrativa."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Starving the Thought of Attention:</strong> Treat obsessive thoughts like background radio chatter. Do not fight them; simply redirect 100% of interest back to physical breath sensations.</p>",
                      "pt": "<p><strong>Privando o Pensamento de Combustível:</strong> Encare o diálogo mental como um rádio chiando ao fundo. Não debata; redirecione 100% do interesse para a sensação física da respiração.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 20 §5</strong>: Depriving thoughts of attention starves their fueling condition (<em>āhāra</em>).</p>",
                      "pt": "<p><strong>MN 20 §5</strong>: Negar atenção aos pensamentos retira seu alimento condicional (<em>āhāra</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Closing the Eyes or Looking Away (MN 20):</strong> A person with good eyesight who does not want to see forms in their visual field simply closes their eyes or looks in another direction.</p>",
                      "pt": "<p><strong>Fechar os Olhos ou Virar o Rosto (MN 20):</strong> Uma pessoa de boa visão que não deseja contemplar uma cena desagradável diante de si simplesmente fecha as pálpebras ou vira o rosto para o outro lado.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Vitakka-saṅkhāra-saṇṭhāna",
                "title": {
                      "en": "4. Quieting the Thought-Formations to Their Origin",
                      "pt": "4. Acalmando as Formações de Pensamento na Origem"
                },
                "desc": {
                      "en": "Attend to relaxing and stilling the root mental construction: 'What is the cause of this thought? What fuels it? Why am I thinking this?' Progressively de-escalating mental momentum.",
                      "pt": "Atente para pacificar a estrutura do pensamento: 'Qual a causa raiz deste pensamento? O que o propulsiona? Por que estou pensando isto?' Desacelerando gradualmente a inércia mental."
                },
                "practiceInstructions": {
                      "en": "<p><strong>De-Escalating Mental Momentum:</strong> Notice the mental urgency. Deliberately slow down the speed of mental syllables until the thought dissolves into silent space.</p>",
                      "pt": "<p><strong>Desaceleração Gradual da Inércia:</strong> Perceba a urgência ansiosa. Reduza deliberadamente a velocidade das palavras internas até que a frase se dissipe no silêncio.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 20 §6</strong>: Investigating the causal chain of mental formations allows thoughts to unwind organically.</p>",
                      "pt": "<p><strong>MN 20 §6</strong>: Investigar a cadeia causal das formações mentais permite que o diálogo interno desmonte suavemente.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>From Running to Lying Down (MN 20):</strong> A person walking fast thinks: 'Why am I running? I could walk slow.' Walking slow: 'Why walk? I could stand.' Standing: 'Why stand? I could sit.' Sitting: 'Why sit? I could lie down.' Progressively calming action.</p>",
                      "pt": "<p><strong>Do Correr ao Deitar (MN 20):</strong> Um homem correndo reflete: 'Por que corro? Posso andar devagar.' Andando: 'Por que andar? Posso parar em pé.' De pé: 'Por que em pé? Posso sentar.' Sentado: 'Por que sentar? Posso deitar.' Desacelerando a ação até a quietude.</p>"
                }
          },
          {
                "step": 5,
                "pali": "Abhiniggaṇhana",
                "title": {
                      "en": "5. Forceful Subjugation with Clenched Teeth",
                      "pt": "5. Contenção Enérgica com Dentes Cerrados"
                },
                "desc": {
                      "en": "As an emergency last resort: with teeth clenched and tongue pressed against the roof of the mouth, beat down, restrain, and crush the unwholesome mind with awareness.",
                      "pt": "Como último recurso de emergência: com dentes cerrados e a língua pressionada contra o palato, contenha, esmague e subjugue a mente nociva com firmeza resoluta."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Emergency Intervention:</strong> Use physical determination to halt destructive downward spirals. Press the tongue firmly to the palate, take a firm posture, and mentally declare: 'NO! This thought will not rule me.'</p>",
                      "pt": "<p><strong>Intervenção de Emergência:</strong> Use determinação física para travar espirais destrutivas. Pressione a língua no céu da boca, firme a postura e declare interiormente: 'NÃO! Este pensamento não governará minha mente.'</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 20 §7</strong>: The Buddha's ultimate tactical measure to protect the mind from being overwhelmed.</p>",
                      "pt": "<p><strong>MN 20 §7</strong>: A medida tática extrema do Buda para blindar a mente contra o colapso moral.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Strong Wrestler Pinning a Weaker Opponent (MN 20):</strong> Just as a strong wrestler seizes a weaker man by the head and shoulders, pins him down, and subdues him, so the mind masters the unwholesome impulse.</p>",
                      "pt": "<p><strong>O Lutador Vigoroso Imobilizando o Adversário (MN 20):</strong> Tal como um lutador forte agarra um homem frágil pela cabeça e ombros, imobilizando-o no chão com firmeza, a mente lúcida subjuga o impulso nocivo.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "This is the ultimate toolkit for ending nighttime insomnia, rumination over work disputes, or intrusive spirals of anxiety. Never jump directly to willpower (Step 5); always start with replacement (Step 1) or stepping down the kinetic energy (Step 4). When replaying an angry argument in bed, immediately ask: 'Why am I running? Can I walk? Can I simply lie still?'",
      "pt": "Esta é a melhor caixa de ferramentas para vencer a insônia, ruminações sobre o trabalho ou espirais de ansiedade. Nunca salte direto para o esforço bruto (Passo 5); comece sempre pela substituição (Passo 1) ou desaceleração do ritmo (Passo 4). Ao repassar uma discussão na cama, pergunte-se: 'Por que estou correndo tanto por dentro? Posso simplesmente descansar?'"
    },
    "keyPaliTerms": [
      {
        "term": "Vitakkasaṇṭhāna",
        "meaning": "The stilling, settling, and strategic removal of discursive thoughts"
      },
      {
        "term": "Aññaṁ Nimittaṁ",
        "meaning": "A different, opposite wholesome mental sign or object"
      },
      {
        "term": "Ādīnava",
        "meaning": "Danger, misery, defect, or degrading consequence"
      },
      {
        "term": "Cetaso Abhiniggaha",
        "meaning": "Direct resolute subdual of the unwholesome mind state by willpower"
      }
    ]
  },
  {
    "id": "ebt-yuganaddha",
    "cluster": "ebt",
    "number": "06",
    "paliTitle": "Yuganaddha Sutta",
    "title": {
      "en": "Samatha & Vipassanā Yoked in Tandem",
      "pt": "Calma & Discernimento Conduzidos em Pareamento"
    },
    "lineageTradition": {
      "en": "Canonical Early Buddhist Texts (EBT)",
      "pt": "Textos Budistas Antigos (EBT Canônico)"
    },
    "primaryMasters": "Ven. Ānanda, Gotama Buddha",
    "canonicalRef": "AN 4.170 (Aṅguttara Nikāya 4.170)",
    "difficulty": "intermediate",
    "curriculumOrder": 8,
    "difficultyLabel": {
      "en": "Intermediate",
      "pt": "Intermediário"
    },
    "recommendedPrereq": {
      "en": "MN 10 (Satipaṭṭhāna Sutta)",
      "pt": "MN 10 (Satipaṭṭhāna Sutta)"
    },
    "whyStudy": {
      "en": "Shows how to intelligently balance stillness (Samatha) with active investigation (Vipassanā) according to present conditions.",
      "pt": "Ensina a equilibrar com inteligência a quietude (Samatha) e a investigação ativa (Vipassanā) conforme o momento."
    },
    "coreFocus": {
      "en": "The four canonical dynamic pathways through which Tranquility (Samatha) and Insight (Vipassanā) unite to realize full awakening",
      "pt": "As quatro rotas canônicas pelas quais a Calma (Samatha) e o Discernimento (Vipassanā) se unem rumo à libertação plena"
    },
    "primaryAnchor": {
      "en": "Balanced cooperation between mental stillness (cittassa ekaggatā) and investigative wisdom (dhammavicaya)",
      "pt": "Cooperação equilibrada entre a quietude mental (cittassa ekaggatā) e a sabedoria investigativa (dhammavicaya)"
    },
    "approachToJhana": {
      "en": "Reconciles historical debates: Jhāna may precede insight, follow insight, or develop simultaneously in harmonic synchronization",
      "pt": "Reconcilia os debates históricos: os Jhānas podem preceder o insight, segui-lo ou desenvolver-se em sincronia harmônica"
    },
    "useOfNoting": {
      "en": "Flexible: noting and analytical contemplation operate during the insight phase, settling into pristine silence during samatha",
      "pt": "Flexível: investigação e rotulação operam na fase de insight, dissolvendo-se no silêncio na fase de samatha"
    },
    "tagline": {
      "en": "'Whoever declares the realization of final knowledge in my presence has done so through one of these four authentic paths.'",
      "pt": "'Qualquer pessoa que declare a realização do conhecimento supremo em minha presença o fez por uma dessas quatro vias autênticas.'"
    },
    "overview": {
      "en": "The Yuganaddha Sutta (AN 4.170) is the supreme canonical authority reconciling the age-old debate between Samatha (tranquility/absorption) and Vipassanā (insight/discernment). Delivered by the Buddha's beloved personal attendant, Ven. Ānanda, the sutta declares that all monks and nuns who attained Arahantship did so through one of four authentic pathways: 1. Insight preceded by Tranquility (cultivating deep jhanic stillness first, then examining the conditioned nature of that state); 2. Tranquility preceded by Insight (investigating impermanence and non-self first until the exhausted, disenchanted mind settles into deep samādhi); 3. Tranquility and Insight cultivated in Tandem (yoked together like a matched pair of oxen, alternating smoothly between stillness and investigation); and 4. Settling Agitation regarding the Dhamma (for practitioners overwhelmed by spiritual enthusiasm, overthinking doctrine, or intense restlessness, whose minds eventually settle into unified peace). This sutta proves that meditation is a flexible, living balance rather than a rigid, sectarian dogma.",
      "pt": "O Yuganaddha Sutta (AN 4.170) é a autoridade canônica máxima que pacifica o debate histórico entre Samatha (calma/absorção) e Vipassanā (insight/discernimento). Proferido pelo Ven. Ānanda, companheiro íntimo do Buda, o discurso atesta que todos os praticantes que alcançaram a iluminação o fizeram por uma de quatro vias autênticas: 1. O insight precedido pela calma (cultivando primeiro a quietude profunda dos jhānas e depois dissecando a inconstância da mente); 2. A calma precedida pelo insight (investigando a transitoriedade e o não-eu até que a mente, desiludida do apego, pouse em profundo samādhi); 3. Calma e insight pareados em uníssono (yuganaddha, conduzidos como uma parelha de bois em perfeita harmonia); e 4. A pacificação da agitação doutrinária (para praticantes aflitos por excesso de estudo ou ansiedade espiritual, cuja mente finalmente silencia). O sutta comprova que a meditação budista é um equilíbrio dinâmico e flexível, e não um dogma estreito."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Samatha-pubbaṅgamaṁ vipassanaṁ bhāveti",
                "title": {
                      "en": "1. Insight Preceded by Tranquility",
                      "pt": "1. O Insight Precedido pela Calma"
                },
                "desc": {
                      "en": "First unifying the mind in deep samādhi or absorption, then emerging to dissect the constituent factors of experience as impermanent, unsatisfactory, and non-self.",
                      "pt": "Primeiro unifica-se a mente em samādhi profundo ou absorção, emergindo em seguida para examinar os fatores constituintes da experiência como impermanentes, insatisfatórios e impessoais."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Tranquility as the Launchpad:</strong> Anchor firmly in the breath until access concentration or Jhāna stabilizes. Upon emerging, do not jump into thinking; maintain the serene lens and observe the impermanence of mental factors.</p>",
                      "pt": "<p><strong>Tranquilidade como Base de Lançamento:</strong> Ancore na respiração até estabilizar o samādhi. Ao emergir, não caia no diálogo disperso; use a lente lúcida da calma para contemplar o perecimento dos fatores mentais.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 4.170 §2</strong>: The classical route described by Ven. Ānanda where calm leads directly to liberating vision.</p>",
                      "pt": "<p><strong>AN 4.170 §2</strong>: A rota clássica elucidada pelo Ven. Ānanda onde a calma profunda gera a clareza para o discernimento.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Lantern in the Dark Cave:</strong> A person carrying a steady, windless lantern into a dark cave sees carvings on the rock walls with unmistakable clarity.</p>",
                      "pt": "<p><strong>A Lanterna na Caverna Escura:</strong> Uma pessoa carregando uma tocha protegida do vento dentro de uma caverna escura vê as pinturas na rocha com nitidez inconfundível.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Vipassanā-pubbaṅgamaṁ samathaṁ bhāveti",
                "title": {
                      "en": "2. Tranquility Preceded by Insight",
                      "pt": "2. A Calma Precedida pelo Insight"
                },
                "desc": {
                      "en": "Investigating the rising and falling of sensations and thoughts, observing their transparent emptiness. As the mind tires of chasing phenomena, it naturally settles into profound stillness.",
                      "pt": "Investigando o surgir e o cessar das sensações e pensamentos, reconhecendo sua vacuidade. À medida que a mente se desilude das aparências, decanta espontaneamente em quietude profunda."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Insight Driving Calming:</strong> Scan experiences for the 3 marks (<em>anicca, dukkha, anattā</em>). When the futility of clinging becomes obvious, consciousness naturally relaxes into unified peace.</p>",
                      "pt": "<p><strong>Sabedoria Conduzindo à Paz:</strong> Examine as experiências sob as 3 marcas da existência. Quando a futilidade de se apegar torna-se evidente, a consciência relaxa espontaneamente em paz unificada.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 4.170 §3</strong>: Demonstrates that active wisdom can be the direct doorway into one-pointed concentration.</p>",
                      "pt": "<p><strong>AN 4.170 §3</strong>: Demonstra que a investigação lúcida da sabedoria pode ser o portal direto para a concentração unificada.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Weary Runner Sitting in the Shade:</strong> Having actively explored every corner of a burning field, the traveler discerns its danger and sits motionless in the cool shade of a tree.</p>",
                      "pt": "<p><strong>O Caminhante que Repousa sob a Sombra:</strong> Tendo inspecionado o perigo de um campo árido e escaldante, o viajante reconhece a desvantagem e senta-se imóvel sob a sombra fresca de uma árvore.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Samatha-vipassanaṁ yuganaddhaṁ bhāveti",
                "title": {
                      "en": "3. Tranquility & Insight Yoked in Tandem",
                      "pt": "3. Calma & Insight Pareados em Harmonia"
                },
                "desc": {
                      "en": "Calm and insight operate simultaneously in balanced partnership: stillness supports sharp seeing, and sharp seeing deepens stillness. Neither lagging behind the other.",
                      "pt": "Calma e insight operam simultaneamente em harmonia mútua: a quietude sustenta a visão penetrante, e a visão penetrante aprofunda a quietude. Nenhuma faculdade atrasa ou sobrepuja a outra."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Seamless Dynamic Balance:</strong> When noticing agitation, lean slightly into the tranquil anchor; when noticing dullness or lack of clarity, lean into mindful investigation (<em>dhammavicaya</em>).</p>",
                      "pt": "<p><strong>Equilíbrio Dinâmico Fluido:</strong> Ao notar agitação, incline-se na âncora de calma; ao notar torpor ou falta de discernimento, incline-se na investigação dos fenômenos (<em>dhammavicaya</em>).</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 4.170 §4</strong>: The balanced synthesis (<em>yuganaddha</em>) that brings the Noble Eightfold Path to swift fulfillment.</p>",
                      "pt": "<p><strong>AN 4.170 §4</strong>: A síntese perfeita (<em>yuganaddha</em>) que conduz o Nobre Caminho Óctuplo ao rápido amadurecimento.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Pair of Strong Bullocks Yoked to the Cart:</strong> Two matched oxen pull the laden cart in perfect rhythm, moving smoothly forward without veering left or right.</p>",
                      "pt": "<p><strong>A Parelha de Bois Conduzindo a Carreta:</strong> Dois bois fortes atados ao mesmo jugo puxam a carreta em ritmo compassado, avançando em linha reta sem descarrilar.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Dhammuddhacca-viggahitaṁ mānasaṁ hoti",
                "title": {
                      "en": "4. Resolving High Spiritual Agitation",
                      "pt": "4. Pacificando a Inquietação pelo Dhamma"
                },
                "desc": {
                      "en": "When the mind is dazzled or agitated by powerful spiritual insights, lights, or intense zeal, one recognizes this subtle agitation, calms internal excitement, and settles into liberation.",
                      "pt": "Quando a mente fica deslumbrada ou inquieta com intuições espirituais elevadas, luzes ou excesso de fervor, reconhece-se essa agitação sutil, aquietando a excitação para atingir a libertação."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Cooling Spiritual Euphoria:</strong> Do not mistake meditative visions, lights, or profound intellectual epiphanies for final awakening. Anchor back in bare presence until all conceptual fireworks subside.</p>",
                      "pt": "<p><strong>Resfriando a Euforia Espiritual:</strong> Não confunda visões luminosas, raptos ou grandes epifanias teóricas com o despertar final. Reancore na presença pura até que todo o entusiasmo conceitual serene.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 4.170 §5</strong>: Explains how meditators overcome spiritual over-excitement (<em>dhammuddhacca</em>) to attain Arahantship.</p>",
                      "pt": "<p><strong>AN 4.170 §5</strong>: Explica como o praticante vence a exaltação espiritual sutil (<em>dhammuddhacca</em>) para alcançar o despertar definitivo.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Swift Ship Reaching Harbor Waters:</strong> After racing through turbulent high seas, the sailing ship enters the calm inner harbor, drops anchor, and rests motionless on the still tide.</p>",
                      "pt": "<p><strong>O Veleiro que Entra nas Águas Calmas do Porto:</strong> Tendo singrado mares bravios com ímpeto, a embarcação cruza as muralhas do porto seguro, recolhe as velas e repousa serena na água mansa.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "Household meditators often fall into the trap of forcing their sit into a single rigid template. Yuganaddha teaches intelligent diagnosis: if you arrive home with an exhausted, stressed nervous system, do not force analytical insight—nurture Samatha (Path 1). If you are calm but daydreaming, stimulate active contemplation of impermanence (Path 2).",
      "pt": "Praticantes leigos frequentemente caem no erro de forçar suas práticas num molde único e rígido. Yuganaddha ensina o diagnóstico flexível: se você chegar do trabalho com o sistema nervoso esgotado, não force análises intelectuais — cultive a calma pura (Via 1). Se estiver descansado mas disperso, estimule a contemplação ativa da impermanência (Via 2)."
    },
    "keyPaliTerms": [
      {
        "term": "Yuganaddha",
        "meaning": "Yoked together in tandem, operating in harmonic synchrony"
      },
      {
        "term": "Samatha",
        "meaning": "Tranquility, serenity, stilling of mental formations"
      },
      {
        "term": "Vipassanā",
        "meaning": "Insight, clear intuitive seeing of the three marks of existence"
      },
      {
        "term": "Dhammuddhacca",
        "meaning": "Restlessness or agitation arising from spiritual experiences or doctrinal debate"
      }
    ]
  },
  {
    "id": "ebt-samadhibhavana",
    "cluster": "ebt",
    "number": "07",
    "paliTitle": "Samādhibhāvanā Sutta",
    "title": {
      "en": "The Four Developments of Concentration",
      "pt": "Os Quatro Modos de Cultivar a Concentração"
    },
    "lineageTradition": {
      "en": "Canonical Early Buddhist Texts (EBT)",
      "pt": "Textos Budistas Antigos (EBT Canônico)"
    },
    "primaryMasters": "Gotama Buddha",
    "canonicalRef": "AN 4.41 (Aṅguttara Nikāya 4.41)",
    "difficulty": "intermediate",
    "curriculumOrder": 9,
    "difficultyLabel": {
      "en": "Intermediate",
      "pt": "Intermediário"
    },
    "recommendedPrereq": {
      "en": "AN 4.170 (Yuganaddha Sutta)",
      "pt": "AN 4.170 (Yuganaddha Sutta)"
    },
    "whyStudy": {
      "en": "Provides a precise 4-way compass for selecting the right type of concentration for your current spiritual objective.",
      "pt": "Oferece uma bússola de 4 vias para selecionar o tipo de concentração ideal para o seu objetivo espiritual atual."
    },
    "coreFocus": {
      "en": "The Buddha's definitive categorization of 4 distinct ways concentration is developed, each mapped to a specific spiritual fruition",
      "pt": "A classificação canônica definitiva dos 4 modos de desenvolver o samādhi, mapeados para seus respectivos frutos espirituais"
    },
    "primaryAnchor": {
      "en": "Context-dependent: breath/joy for pleasant abiding; light (āloka) for knowledge & vision; rising/passing events for mindfulness; 5 aggregates for liberation",
      "pt": "Conforme o propósito: respiração/paz para bem-estar; luz (āloka) para visão; eventos presentes para lucidez; 5 agregados para libertação"
    },
    "approachToJhana": {
      "en": "Directly positions the 4 Jhānas as the primary cultivation for 'Pleasant Abiding in the Here-and-Now' (diṭṭhadhammasukhavihāra)",
      "pt": "Posiciona formalmente os 4 Jhānas como o cultivo primordial para o 'Viver Feliz no Aqui e Agora' (diṭṭhadhammasukhavihāra)"
    },
    "useOfNoting": {
      "en": "Employed with laser precision in the 3rd development (knowing feelings, perceptions, and thoughts as they arise, persist, and vanish)",
      "pt": "Empregado com precisão cirúrgica no 3º modo (discernindo sensações, percepções e pensamentos ao surgirem, persistirem e cessarem)"
    },
    "tagline": {
      "en": "'There are these four developments of concentration: for pleasant dwelling here-and-now, for knowledge and vision, for mindfulness and situational awareness, and for the destruction of the taints.'",
      "pt": "'Existem estes quatro modos de cultivar a concentração: para o viver agradável aqui e agora, para o conhecimento e visão, para a atenção plena e lucidez, e para a destruição dos grilhões.'"
    },
    "overview": {
      "en": "In the Samādhibhāvanā Sutta (AN 4.41), the Buddha eliminates confusion about the ultimate purpose of meditation by mapping concentration into four distinct operational modes, each geared toward a unique spiritual dividend: 1. Concentration developed for pleasant dwelling in the present life (diṭṭhadhammasukhavihāra): the four Jhānas, which provide restorative rest, physiological rejuvenation, and freedom from sensual stress; 2. Concentration developed for gaining knowledge and vision (ñāṇadassanapaṭilābha): attending to the perception of light (ālokasaññā) and maintaining an open, luminous mind by day and night; 3. Concentration developed for mindfulness and clear comprehension (satisampajaññāya): tracking feelings (vedanā), perceptions (saññā), and applied thoughts (vitakka) in real-time as they arise, become known, and pass away; and 4. Concentration developed for the final destruction of the taints (āsavānaṁ khayāya): observing the constant arising and passing away of the Five Clinging-Aggregates (rūpa, vedanā, saññā, saṅkhārā, viññāṇa). This provides practitioners with an unambiguous diagnostic compass.",
      "pt": "No Samādhibhāvanā Sutta (AN 4.41), o Buda elimina ambiguidades sobre o propósito da meditação ao mapear a concentração em quatro modos práticos, cada qual com um objetivo espiritual específico: 1. Concentração para o viver feliz no presente momento (diṭṭhadhammasukhavihāra): os quatro Jhānas, que proporcionam regeneração física, alívio de estresse e recolhimento sereno; 2. Concentração para o conhecimento e a visão intuitiva (ñāṇadassanapaṭilābha): cultivando a percepção da luminosidade (ālokasaññā) de dia e de noite; 3. Concentração para a atenção plena e discernimento situacional (satisampajaññāya): rastreando em tempo real as sensações, percepções e pensamentos à medida que surgem, permanecem e cessam; e 4. Concentração para a erradicação dos contaminantes mentais (āsavānaṁ khayāya): contemplando o constante nascer e fenecer dos Cinco Agregados do Apego. O sutta é uma bússola de clareza indispensável para o praticante."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Diṭṭhadhammasukhavihārāya",
                "title": {
                      "en": "1. Concentration for Abiding in Present Ease",
                      "pt": "1. Concentração para o Viver em Bem-Estar no Presente"
                },
                "desc": {
                      "en": "Developing the 4 Jhānas to provide nourishing, stress-free shelter for mind and body in this very life, free from the scorching fires of sensuality.",
                      "pt": "Desenvolvendo os 4 Jhānas como refúgio nutritivo e desanuviado para a mente e o corpo nesta mesma vida, a salvo das fogueiras do desejo sensorial."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Resting in Seclusion-Born Peace:</strong> Cultivate Jhānas as a wholesome sanctuary. Replenish mental vitality without grasping onto the bliss as an eternal refuge.</p>",
                      "pt": "<p><strong>Repousando na Paz do Recolhimento:</strong> Cultive os Jhānas como um santuário salutar. Restaure a vitalidade da mente sem transformar o êxtase num refúgio eterno.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 4.41 §2</strong>: Identifies the 4 Jhānas as the supreme present-life ease (<em>diṭṭhadhammasukhavihāra</em>).</p>",
                      "pt": "<p><strong>AN 4.41 §2</strong>: Define os 4 Jhānas como a morada suprema de bem-estar na vida presente (<em>diṭṭhadhammasukhavihāra</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Shaded Pavilion in Midday Heat:</strong> Stepping out of a blazing tropical sun into an airy marble pavilion with cool fountains.</p>",
                      "pt": "<p><strong>O Pavilhão Sombreado ao Meio-Dia:</strong> Sair do sol tórrido do meio-dia e adentrar um pavilhão arejado de mármore fresco com fontes cristalinas.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Ñāṇadassanapaṭilābhāya",
                "title": {
                      "en": "2. Concentration for Knowledge & Luminous Vision",
                      "pt": "2. Concentração para a Obtenção do Conhecimento & Visão"
                },
                "desc": {
                      "en": "Attending to the perception of light (ālokasaññā) and fixing on the perception of daytime by day and by night. Developing an open, radiant, uncluttered mind.",
                      "pt": "Atentando para a percepção da luz (ālokasaññā) e estabelecendo a percepção diurna tanto de dia quanto à noite. Desenvolvendo uma mente aberta, radiante e desobstruída."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Cultivating Inner Illumination:</strong> Direct attention to brightness in the visual field with eyes closed. Dispel sluggishness and heaviness by cultivating an expansive, sunlit awareness.</p>",
                      "pt": "<p><strong>Cultivando a Claridade Interior:</strong> Projete a atenção na luminosidade sutil no campo mental de olhos fechados. Dissipe a letargia mantendo a mente banhada em claridade solar.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 4.41 §3</strong>: The training in perception of light (<em>ālokasaññā</em>) to eliminate sloth and torpor.</p>",
                      "pt": "<p><strong>AN 4.41 §3</strong>: O treinamento na percepção da claridade (<em>ālokasaññā</em>) para erradicar o torpor e a sonolência.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Full Moon in a Cloudless Night Sky:</strong> Shining bright and unclouded, shedding pure silvery illumination over the entire earth.</p>",
                      "pt": "<p><strong>A Lua Cheia no Céu sem Nuvens:</strong> Brilhando pura e desimpedida, derramando iluminação prateada sobre toda a extensão da terra.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Satisampajaññāya",
                "title": {
                      "en": "3. Concentration for Mindfulness & Clear Comprehension",
                      "pt": "3. Concentração para a Atenção Plena & Clara Compreensão"
                },
                "desc": {
                      "en": "Knowing feelings as they arise, persist, and vanish; knowing perceptions as they arise, persist, and vanish; knowing thoughts as they arise, persist, and vanish.",
                      "pt": "Conhecendo as sensações à medida que surgem, permanecem e fenecem; conhecendo as percepções ao nascer, persistir e passar; conhecendo os pensamentos ao brotar, durar e cessar."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Tracking the Life Cycle of Mind-Moments:</strong> Focus on the exact boundaries of experiential events. Witness their birth, momentary plateau, and inevitable dissolution.</p>",
                      "pt": "<p><strong>Mapeando o Ciclo de Vida dos Estados Mentais:</strong> Foque nos limites temporais dos eventos mentais. Testemunhe seu nascimento, breve estabilização e inevitável dissolução.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 4.41 §4</strong>: The specific cultivation of concentration that powers microscopic satipaṭṭhāna discernment.</p>",
                      "pt": "<p><strong>AN 4.41 §4</strong>: O desenvolvimento meditativo que capacita a atenção plena microscópica de satipaṭṭhāna.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Stationmaster Watching Passing Trains:</strong> Standing on the platform, clearly seeing each carriage approach, halt at the station, and roll away down the tracks.</p>",
                      "pt": "<p><strong>O Inspetor na Estação Ferroviária:</strong> De pé na plataforma, observando cada vagão se aproximar, parar na estação e partir pelos trilhos rumo ao horizonte.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Āsavānaṁ khayāya",
                "title": {
                      "en": "4. Concentration for the Destruction of Taints",
                      "pt": "4. Concentração para a Extinção das Contaminações"
                },
                "desc": {
                      "en": "Abiding contemplating the arising and falling of the Five Clinging Aggregates: form, feeling, perception, choices, and consciousness. Direct breakthrough to Arahantship.",
                      "pt": "Permanecendo na contemplação do surgir e cessar dos Cinco Agregados do Apego: matéria, sensação, percepção, volições e consciência. Rompimento direto rumo à libertação final."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Deconstructing the Five Bundles:</strong> Discern: 'Such is form, such its arising, such its disappearance; such is feeling... perception... volitions... consciousness.' Realizing none is self.</p>",
                      "pt": "<p><strong>Desconstruindo os Cinco Fardos:</strong> Discerne: 'Assim é a matéria, assim seu surgir, assim seu passar; assim é a sensação... percepção... volições... consciência.' Notando que nenhum deles é o 'eu'.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 4.41 §5</strong>: The crowning goal of Buddhist mental development, culminating in full enlightenment.</p>",
                      "pt": "<p><strong>AN 4.41 §5</strong>: A meta suprema do treinamento mental budista, culminando na libertação definitiva.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Lightning Flash Slicing Through Midnight (AN 3.25):</strong> A dazzling flash of lightning illuminates every crevice of the dark landscape in an instantaneous revelation of reality.</p>",
                      "pt": "<p><strong>O Relâmpago Cortando a Noite Escura (AN 3.25):</strong> Um clarão fulminante de relâmpago ilumina cada detalhe da paisagem noturna numa revelação instantânea da realidade.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "This discourse provides a clear diagnostic map for daily life: When burned out or physically exhausted from family and corporate pressure, utilize Mode 1 (sitting purely for restorative jhanic ease). When feeling sleepy or mentally foggy, utilize Mode 2 (perception of light). When dealing with emotional flare-ups, utilize Mode 3 (watching feelings rise and fade). When seeking spiritual breakthrough, practice Mode 4.",
      "pt": "Este discurso fornece um mapa prático de discernimento para a vida cotidiana: quando exausto pelas pressões do trabalho e família, utilize o Modo 1 (sentar-se para o alívio e descanso meditativo). Quando sonolento ou embotado, use o Modo 2 (percepção da luminosidade). Diante de conflitos emocionais, ative o Modo 3 (acompanhando sensações nascerem e sumirem). Na busca da sabedoria final, pratique o Modo 4."
    },
    "keyPaliTerms": [
      {
        "term": "Diṭṭhadhammasukhavihāra",
        "meaning": "Pleasant, blissful dwelling in the present life here and now"
      },
      {
        "term": "Ālokasaññā",
        "meaning": "The perception of radiant light, overcoming dullness and obscurity"
      },
      {
        "term": "Satisampajañña",
        "meaning": "Mindfulness and clear situational comprehension of internal states"
      },
      {
        "term": "Āsavakkhaya",
        "meaning": "The total destruction and eradication of mental taints and defilements"
      }
    ]
  },
  {
    "id": "ebt-girimananda",
    "cluster": "ebt",
    "number": "08",
    "paliTitle": "Girimānanda Sutta",
    "title": {
      "en": "The Ten Contemplations for Mind-Body Healing",
      "pt": "As Dez Contemplações para a Cura da Mente e do Corpo"
    },
    "lineageTradition": {
      "en": "Canonical Early Buddhist Texts (EBT)",
      "pt": "Textos Budistas Antigos (EBT Canônico)"
    },
    "primaryMasters": "Gotama Buddha, Ven. Ānanda, Ven. Girimānanda",
    "canonicalRef": "AN 10.60 (Aṅguttara Nikāya 10.60)",
    "difficulty": "foundational",
    "curriculumOrder": 4,
    "difficultyLabel": {
      "en": "Foundations",
      "pt": "Fundamentos"
    },
    "recommendedPrereq": {
      "en": "SN 36.31 (Nirāmisa Sutta)",
      "pt": "SN 36.31 (Nirāmisa Sutta)"
    },
    "whyStudy": {
      "en": "Prepares the mind to face illness, physical pain, and life crises with calm equanimity and healing breath.",
      "pt": "Prepara a mente para enfrentar dores físicas, doenças e crises com serenidade e respiração terapêutica."
    },
    "coreFocus": {
      "en": "Ten profound therapeutic and liberating contemplations given to alleviate severe somatic disease and catalyze awakening",
      "pt": "Dez contemplações terapêuticas e libertadoras transmitidas para curar enfermidades graves e conduzir ao despertar"
    },
    "primaryAnchor": {
      "en": "Universal existential marks (Anicca, Anattā, Asubha, Ādīnava) integrated with the complete 16-step breath meditation",
      "pt": "Marcas existenciais universais (Anicca, Anattā, Asubha, Ādīnava) integradas à prática completa da respiração consciente"
    },
    "approachToJhana": {
      "en": "Combines serene contemplation of cessation (nirodha) and dispassion (virāga) with somatic healing ease",
      "pt": "Combina a contemplação serena da cessação (nirodha) e desapego (virāga) com alívio e cura somática"
    },
    "useOfNoting": {
      "en": "Deep thematic reflection followed by silent breath cultivation across all sixteen steps",
      "pt": "Profunda reflexão temática seguida de cultivo silencioso da respiração em todas as dezesseis etapas"
    },
    "tagline": {
      "en": "'When the venerable Girimānanda heard these ten contemplations, his affliction was immediately subdued, and he rose healed from his sickbed.'",
      "pt": "'Quando o venerável Girimānanda ouviu estas dez contemplações, sua enfermidade foi imediatamente apaziguada e ele ergueu-se curado de seu leito.'"
    },
    "overview": {
      "en": "The Girimānanda Sutta (AN 10.60) is one of the most revered healing discourses in the Theravāda world. When the monk Girimānanda was stricken with a severe, agonizing bodily illness, the Buddha instructed Ven. Ānanda to visit him and recite ten specific contemplations (dasa saññā). Upon hearing and contemplating them with deep mindfulness, Girimānanda's somatic suffering miraculously vanished. The ten contemplations form a complete master curriculum of Buddhist practice: 1. Perception of impermanence (aniccasaññā); 2. Perception of non-self (anattasaññā); 3. Perception of unattractiveness (asubhasaññā); 4. Perception of danger/illness in the body (ādīnavasaññā, noting that the body is prone to hundreds of diseases); 5. Perception of abandoning unwholesome thoughts (pahānasaññā); 6. Perception of dispassion/fading (virāgasaññā); 7. Perception of cessation (nirodhasaññā); 8. Perception of non-delight in the whole world (sabbaloke anabhiratasaññā); 9. Perception of impermanence in all conditioned things (sabbasaṅkhāresu aniccasaññā); and 10. Mindfulness of in-and-out breathing (ānāpānasati in all 16 steps). This sutta demonstrates how wisdom can transform physical pain into spiritual release.",
      "pt": "O Girimānanda Sutta (AN 10.60) é um dos discursos de cura mais reverenciados da tradição Theravāda. Quando o monge Girimānanda caiu gravemente enfermo, afligido por dores intensas, o Buda encarregou o Ven. Ānanda de visitá-lo e recitar dez contemplações profundas (dasa saññā). Ao ouvi-las e contemplá-las com atenção plena, o sofrimento físico de Girimānanda foi apaziguado e ele se levantou curado de sua enfermidade. As dez contemplações formam um curso completo de libertação: 1. A percepção da inconstância (aniccasaññā); 2. A percepção do não-eu (anattasaññā); 3. A percepção da natureza orgânica perecível (asubhasaññā); 4. A percepção do perigo e vulnerabilidade do corpo (ādīnavasaññā, reconhecendo suas inúmeras fragilidades); 5. A percepção do abandono de pensamentos tóxicos (pahānasaññā); 6. A percepção do desapego (virāgasaññā); 7. A percepção da cessação (nirodhasaññā); 8. A percepção do desencanto com as vaidades mundanas (sabbaloke anabhiratasaññā); 9. A percepção da transitoriedade em todas as coisas condicionadas (sabbasaṅkhāresu aniccasaññā); e 10. A atenção plena na respiração (ānāpānasati em seus 16 passos). Mostra como a sabedoria converte a dor física em liberação espiritual."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Anicca & Anatta Saññā",
                "title": {
                      "en": "1. Perceptions of Impermanence & Non-Self",
                      "pt": "1. Percepções da Impermanência & Não-Eu"
                },
                "desc": {
                      "en": "Contemplating the five aggregates as fleeting and impersonal. Seeing that this body and mind are conditioned, changing processes without an enduring owner or soul.",
                      "pt": "Contemplando os cinco agregados como processos fugazes e impessoais. Enxergando que este corpo e esta mente são dinâmicas condicionadas em mutação, sem dono ou alma eterna."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Somatic Disentanglement:</strong> In moments of bodily distress, observe sensations with the reflection: 'This pain is impermanent; it is not mine, not me, not my self.' This removes psychological panic from physical pain.</p>",
                      "pt": "<p><strong>Desatamento Somático:</strong> Em momentos de desconforto físico, observe as sensações com a reflexão: 'Esta dor é impermanente; não é minha, não sou eu, não é meu eu'. Isso dissipa o desespero psicológico da dor física.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 10.60 §2–3</strong>: The Buddha sends Ven. Ānanda to recite these perceptions to heal Ven. Girimānanda of severe illness.</p>",
                      "pt": "<p><strong>AN 10.60 §2–3</strong>: O Buda envia o Ven. Ānanda para transmitir estas reflexões para curar o Ven. Girimānanda de enfermidade grave.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Mirage in Desert Heat:</strong> A shimmering mirage appears to be water from afar, but on closer inspection, dissolves into bare refraction.</p>",
                      "pt": "<p><strong>A Miragem no Deserto:</strong> Uma miragem reluzente parece ser água ao longe, mas sob inspeção lúcida desfaz-se em mera refração do ar.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Asubha & Ādīnava Saññā",
                "title": {
                      "en": "2. Perceptions of the Anatomical Reality & Peril",
                      "pt": "2. Percepções da Anatomia Biológica & Desvantagem"
                },
                "desc": {
                      "en": "Reviewing the 31 bodily parts full of impurities, and reflecting on the body as a site of manifold afflictions, diseases, and vulnerabilities.",
                      "pt": "Examinando as 31 partes anatômicas repletas de substâncias biológicas e contemplando o corpo como morada de inúmeras aflições, doenças e vulnerabilidades."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Healing Realism:</strong> Accept physical illness without moral shame or anger. The body is an organism composed of elements subject to wear, fever, and decay.</p>",
                      "pt": "<p><strong>Realismo Terapêutico:</strong> Encare a doença sem revolta ou vergonha. O organismo é um composto biológico naturalmente sujeito a desgastes, febres e declínio.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 10.60 §4–5</strong>: Enumerates the bodily parts and the long canonical list of physical illnesses.</p>",
                      "pt": "<p><strong>AN 10.60 §4–5</strong>: Enumera as partes do corpo e o extenso catálogo canônico de enfermidades físicas.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Clay Vessel Prone to Cracking:</strong> A delicate ceramic pot carried over rocky paths is inherently fragile; caring for it gently without delusion.</p>",
                      "pt": "<p><strong>O Vaso de Argila Frágil:</strong> Um jarro cerâmico carregado por trilhas rochosas é naturalmente frágil; cuidando dele com carinho sem ilusão de solidez eterna.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Pahāna & Virāga Saññā",
                "title": {
                      "en": "3. Perceptions of Abandoning & Dispassion",
                      "pt": "3. Percepções do Abandono & Desapego"
                },
                "desc": {
                      "en": "Actively renouncing thoughts of sensuality, resentment, and cruelty as soon as they arise, and delighting in the dispassionate cooling of mental craving.",
                      "pt": "Renunciando ativamente a pensamentos de sensualidade, ressentimento e crueldade no instante em que brotam, encontrando deleite no desapego e no resfriamento do apego."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Renouncing the Toxic Spark:</strong> Instantly cast out thoughts of bitterness or retaliation before they poison your mental health. Rest in the cooling ease of forgiveness.</p>",
                      "pt": "<p><strong>Extinguindo a Fagulha Tóxica:</strong> Expulse de pronto pensamentos de mágoa ou revide antes que envenenem sua saúde mental. Repouse no alívio revigorante do perdão.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 10.60 §6–7</strong>: Emphasizes that abandoning unwholesome thoughts relieves psychosomatic stress.</p>",
                      "pt": "<p><strong>AN 10.60 §6–7</strong>: Enfatiza que o abandono de pensamentos hostis alivia o estresse psicossomático do corpo.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Water Falling on a Red-Hot Pan (MN 66):</strong> When water drops on a searing iron griddle, it boils up, hisses, and vanishes in an instant. So too abandon toxic thoughts.</p>",
                      "pt": "<p><strong>A Gota de Água na Chapa Incandescente (MN 66):</strong> Quando uma gota toca o ferro em brasa, ferve, chia e desaparece num piscar de olhos. Assim devem ser dissipados os rancores.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Nirodha & Sabbaloke Anabhirata Saññā",
                "title": {
                      "en": "4. Perceptions of Cessation & Worldly Disenchantment",
                      "pt": "4. Percepções da Cessação & Desencanto pelo Mundo"
                },
                "desc": {
                      "en": "Contemplating the complete cessation of all suffering and conditioning, and letting go of entanglement with worldly gossip, status, and transient drama.",
                      "pt": "Contemplando a cessação definitiva de todo sofrimento e condicionalidade, desprendendo-se de dramas passageiros, disputas de status e ruídos mundanos."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Releasing Worldly Entanglement:</strong> Notice the compulsive urge to be affirmed by society. Deliberately step back, realizing the peace of non-involvement.</p>",
                      "pt": "<p><strong>Soltando o Enredo Mundano:</strong> Observe a compulsão de ser aprovado pelo mundo. Dê um passo atrás deliberadamente, desfrutando da paz do desprendimento.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 10.60 §8–9</strong>: Contemplating the tranquil end of construction (<em>sabbasaṅkhārasamatha</em>).</p>",
                      "pt": "<p><strong>AN 10.60 §8–9</strong>: Contemplando o fim pacificado de todas as construções (<em>sabbasaṅkhārasamatha</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Traveler Escaping a Burning City:</strong> Leaving behind the noise, smoke, and blazing rooftops to breathe pure air on open rolling hills.</p>",
                      "pt": "<p><strong>O Viajante que Deixa a Cidade em Chamas:</strong> Deixando para trás a fumaça, o clamor e os telhados em brasas para respirar o ar puro nas colinas verdejantes.</p>"
                }
          },
          {
                "step": 5,
                "pali": "Sabbasaṅkhāresu Aniccasaññā & Ānāpānasati",
                "title": {
                      "en": "5. Universal Impermanence & Healing Breath",
                      "pt": "5. Impermanência Universal & Respiração Curativa"
                },
                "desc": {
                      "en": "Seeing all conditioned things as impermanent, and returning to the sixteen stages of mindful breathing to integrate somatic healing and spiritual deliverance.",
                      "pt": "Reconhecendo todas as formações condicionadas como impermanentes e retornando à atenção plena na respiração para integrar cura somática e libertação espiritual."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Integrative Healing Sitting:</strong> Breathe in, soothing both pain and emotion. Upon hearing these ten contemplations, Ven. Girimānanda's illness was completely cured.</p>",
                      "pt": "<p><strong>Sentada de Cura Integrativa:</strong> Respire suavemente, acalmando tanto as sensações físicas quanto as dores emocionais. Ao ouvir estas 10 percepções, a doença do Ven. Girimānanda foi curada.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 10.60 §10–12</strong>: Concludes with Ānāpānasati, after which Girimānanda rose completely healed.</p>",
                      "pt": "<p><strong>AN 10.60 §10–12</strong>: Conclui com a respiração consciente, após a qual Girimānanda ergueu-se curado.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Medicine Revitalizing a Fainting Warrior:</strong> Just as potent nectar revives a wounded warrior on the field, these contemplations restore vigor and clarity to mind and body.</p>",
                      "pt": "<p><strong>O Elixir Restaurando o Guerreiro Ferido:</strong> Tal como um bálsamo reanima o soldado exausto no campo de batalha, estas contemplações restauram o vigor e a serenidade do corpo e da mente.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "This is the premier Buddhist practice to rely upon during illness, chronic pain, medical hospitalizations, or caring for aging parents. Instead of viewing bodily pain with anger or self-pity ('Why is this happening to me?'), apply Ādīnavasaññā: understand that pain is simply the natural behavior of an organic physical body. Couple this with the 4th step of Ānāpānasati: consciously calming physical tension on the exhalation.",
      "pt": "Esta é a prática suprema para momentos de dor crônica, hospitalizações ou cuidados com familiares doentes. Em vez de reagir à dor física com raiva ou queixa ('Por que comigo?'), aplique Ādīnavasaññā: compreenda que o desconforto é a natureza inerente do corpo biológico. Associe isso ao 4º passo da respiração: relaxando a tensão muscular a cada expiração."
    },
    "keyPaliTerms": [
      {
        "term": "Dasa Saññā",
        "meaning": "The ten transformative meditative perceptions taught for healing and awakening"
      },
      {
        "term": "Ādīnavasaññā",
        "meaning": "Perception of the inherent dangers, afflictions, and vulnerability of the physical body"
      },
      {
        "term": "Virāgasaññā",
        "meaning": "Perception of the peaceful fading away of craving and passion"
      },
      {
        "term": "Nirodhasaññā",
        "meaning": "Perception of cessation and the untroubled extinction of suffering"
      }
    ]
  },
  {
    "id": "ebt-jhana-insight",
    "cluster": "ebt",
    "number": "09",
    "paliTitle": "Jhāna Sutta",
    "title": {
      "en": "Absorption as the Platform for Penetrating Insight",
      "pt": "A Absorção Meditativa como Plataforma para o Insight"
    },
    "lineageTradition": {
      "en": "Canonical Early Buddhist Texts (EBT)",
      "pt": "Textos Budistas Antigos (EBT Canônico)"
    },
    "primaryMasters": "Gotama Buddha",
    "canonicalRef": "AN 9.36 (Aṅguttara Nikāya 9.36)",
    "difficulty": "advanced",
    "curriculumOrder": 11,
    "difficultyLabel": {
      "en": "Advanced",
      "pt": "Avançado"
    },
    "recommendedPrereq": {
      "en": "MN 128 (Upakkilesa Sutta)",
      "pt": "MN 128 (Upakkilesa Sutta)"
    },
    "whyStudy": {
      "en": "Teaches how to directly turn absorption into liberating insight using the 7-fold diagnostic formula without getting stuck.",
      "pt": "Ensina a transformar a absorção em insight libertador através da fórmula analítica sétupla sem estagnar."
    },
    "coreFocus": {
      "en": "Direct textual evidence that any Jhāna (from 1st to 8th) serves as an immediate springboard for dissecting the aggregates and attaining Arahantship",
      "pt": "Prova canônica de que qualquer nível de Jhāna (do 1º ao 8º) serve como base imediata para dissecar os agregados e alcançar a libertação"
    },
    "primaryAnchor": {
      "en": "The five aggregates (form, feeling, perception, volitions, consciousness) as they exist within or immediately upon emerging from absorption",
      "pt": "Os cinco agregados presentes na absorção ou imediatamente após emergir da quietude"
    },
    "approachToJhana": {
      "en": "Absorptions are treated not as an end in themselves, but as the steady, razor-sharp laboratory in which insight dissects all conditioned phenomena",
      "pt": "Os Jhānas são valorizados não como fim estático, mas como o laboratório nítido onde a sabedoria investiga os fenômenos condicionados"
    },
    "useOfNoting": {
      "en": "The sevenfold insight diagnostic formula: seeing states as impermanent, painful, a disease, an arrow, alien, empty, and not-self",
      "pt": "A fórmula analítica sétupla: discernindo os estados como inconstantes, dolorosos, uma doença, uma flecha, alienígenas, vazios e não-eu"
    },
    "tagline": {
      "en": "'Whatever phenomena exist in that absorption — form, feeling, perception, formations, consciousness — one contemplates them as impermanent, a disease, a dart, empty, not-self.'",
      "pt": "'Quaisquer fenômenos presentes naquela absorção — forma, sensação, percepção, formações, consciência — contempla-se como inconstantes, uma enfermidade, uma flecha, vazios e não-eu.'"
    },
    "overview": {
      "en": "In the Jhāna Sutta (AN 9.36), the Buddha delivers a masterstroke of practical clarity that resolves centuries of sectarian debates regarding concentration. Some modern schools assert that Jhāna is unnecessary for awakening; others claim that one must emerge completely from absorption before insight can begin. In AN 9.36, the Buddha demonstrates that within or directly upon the foundation of any absorption—from the 1st Jhāna up to the Dimension of Nothingness—the practitioner examines whatever phenomena are present: physical form, pleasant feeling, perception, mental formations, and consciousness. The meditator contemplates them through seven diagnostic lenses: as impermanent (anicca), suffering (dukkha), a sickness (roga), a boil (gaṇḍa), a dart (salla), disintegrating (paloka), empty (suñña), and non-self (anattā). By turning the mind away from those conditioned states, one directs the heart to the Deathless (amata-dhātu): 'This is peaceful, this is sublime: the stilling of all formations, Nibbāna.' Through this direct method, Stream-Entry, Non-Returning, or full Arahantship is realized.",
      "pt": "No Jhāna Sutta (AN 9.36), o Buda oferece uma clarificação cirúrgica que pacifica séculos de debates doutrinários sobre a relação entre concentração e sabedoria. Algumas escolas afirmam que os Jhānas são desnecessários; outras sustentam que não é possível investigar enquanto há absorção. No AN 9.36, o Buda demonstra que, apoiado em qualquer nível de absorção — do 1º Jhāna até a Dimensão do Nada —, o praticante examina os fenômenos ali presentes: forma física, sensações agradáveis, percepção, formações mentais e consciência. O meditador contempla esses fatores através de sete lentes de insight: como inconstantes (anicca), dolorosos (dukkha), uma doença (roga), uma chaga (gaṇḍa), uma flecha (salla), vazios (suñña) e desprovidos de um eu (anattā). Ao desviar o coração desses fatores condicionados, volta a mente para o Elemento Imorredouro (amata-dhātu): 'Isto é a paz suprema: o silenciar de todas as formações, Nibbāna.' Por essa via direta, o praticante alcança os frutos da libertação."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Jhānasamāpatti",
                "title": {
                      "en": "1. Entering Absorption Free of Hindrances",
                      "pt": "1. Acessando a Absorção Livre de Obstáculos"
                },
                "desc": {
                      "en": "Secluded from sensual desires, secluded from unwholesome states, one enters and dwells in the 1st, 2nd, 3rd, or 4th Jhāna, establishing unshakeable mental clarity.",
                      "pt": "Afastado dos desejos sensuais e estados prejudiciais, entra-se e permanece-se no 1º, 2º, 3º ou 4º Jhāna, consolidando uma estabilidade mental imperturbável."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Establishing Stability:</strong> Settle attention on your anchor until mental wandering ceases and the mind is luminous, steady, and peaceful.</p>",
                      "pt": "<p><strong>Estabelecendo a Estabilidade:</strong> Fixe a atenção na âncora até que as dispersões cessem e a mente fique radiante, serena e estável.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 9.36 (Jhāna Sutta)</strong> and <strong>MN 52 (Aṭṭhakanāgara Sutta)</strong>: The canonical blueprint for using Jhāna as the basis for Awakening.</p>",
                      "pt": "<p><strong>AN 9.36 (Jhāna Sutta)</strong> e <strong>MN 52 (Aṭṭhakanāgara Sutta)</strong>: O mapa canônico para utilizar os Jhānas como plataforma direta para o despertar.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Secure High Lookout Tower:</strong> From an elevated, fortified stone tower, a person looks down upon the surrounding plain with clear, unobstructed panoramic vision.</p>",
                      "pt": "<p><strong>A Torre Alta de Vigia:</strong> Do alto de uma torre de pedra sólida e protegida, uma pessoa contempla toda a planície ao redor com visão panorâmica desobstruída.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Dhammavavatthāna",
                "title": {
                      "en": "2. Dissecting the Constituent Factors of Absorption",
                      "pt": "2. Decompondo os Fatores Constituintes do Jhāna"
                },
                "desc": {
                      "en": "Stepping back to inspect the absorption: whatever phenomena are present—applied thought, joy, pleasure, one-pointedness, or equanimity—one regards them with detached wisdom.",
                      "pt": "Dando um passo atrás para examinar o estado: quaisquer fenômenos presentes—pensamento aplicado, êxtase, paz, unificação ou equanimidade—são contemplados com discernimento desapegado."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Reflective Observation:</strong> Without falling into agitation, discern the distinct mental components sustaining the state. See that absorption is an assembled composite.</p>",
                      "pt": "<p><strong>Observação Reflexiva:</strong> Sem perder a calma, discirna os diferentes componentes mentais que mantêm o estado. Reconheça que a absorção é uma estrutura montada.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 9.36 §2</strong>: Ven. Sāriputta's method of factor-by-factor discernment detailed also in <strong>MN 111 (Anupada Sutta)</strong>.</p>",
                      "pt": "<p><strong>AN 9.36 §2</strong>: O método de discernimento passo a passo do Ven. Sāriputta detalhado também no <strong>MN 111 (Anupada Sutta)</strong>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Expert Jeweler Inspecting Stones:</strong> An expert gemologist examining cut jewels under bright light discerns each facet, clarity, and setting with total precision.</p>",
                      "pt": "<p><strong>O Joalheiro Inspecionando as Gemas:</strong> Um especialista examinando pedras preciosas sob luz brilhante identifica cada faceta, pureza e engaste com precisão cirúrgica.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Tilakkhaṇa-anupassanā",
                "title": {
                      "en": "3. Applying the Three Marks within the Jhāna",
                      "pt": "3. Aplicando as Três Marcas da Existência no Jhāna"
                },
                "desc": {
                      "en": "One reflects: 'Even this sublime state of Jhāna is conditioned, produced by volitional effort, impermanent, and subject to cessation.' Shattering subtle clinging to meditative bliss.",
                      "pt": "Reflete-se com lucidez: 'Mesmo este estado sublime de Jhāna é condicionado, produzido por esforço volitivo, impermanente e sujeito à cessação.' Desfazendo o apego sutil ao êxtase meditativo."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Seeing the Construct:</strong> Recognize that bliss and stillness are conditioned phenomena. Do not take absorption to be a permanent 'True Self' or cosmic soul.</p>",
                      "pt": "<p><strong>Enxergando a Estrutura Condicionada:</strong> Reconheça que mesmo a paz mais sublime é um fenômeno condicionado. Não tome a absorção como um 'Eu Cósmico' ou alma eterna.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 52 §4</strong>: 'He understands: This first jhāna is conditioned and volitionally produced; whatever is conditioned is impermanent.'</p>",
                      "pt": "<p><strong>MN 52 §4</strong>: 'Ele compreende: Este primeiro jhāna é condicionado e produzido pela volição; tudo o que é condicionado é impermanente.'</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Royal Palace Made of Assembled Beams:</strong> Even the most magnificent palace rests on mortal timbers and nails that will eventually weather and decay.</p>",
                      "pt": "<p><strong>O Palácio Real de Vigas Encaixadas:</strong> Mesmo o castelo mais imponente e suntuoso depende de madeiras e encaixes que um dia envelhecerão e fenecerão.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Amatadhātu-adhigama",
                "title": {
                      "en": "4. The Archer Simile & Reaching the Deathless",
                      "pt": "4. O Símile do Arqueiro & Atingindo o Imortal (Nibbāna)"
                },
                "desc": {
                      "en": "Firmly grounded in the insight of impermanence, the mind turns away from all conditioned formations and inclines towards the Unconditioned Element: the stilling of all formations, Nibbāna.",
                      "pt": "Firme no discernimento da impermanência, a mente desvia-se de todas as construções condicionadas e inclina-se para o Elemento Incondicionado: a cessação de todas as formações, Nibbāna."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Liberating Pivot:</strong> In deep calm, release all clinging to states of becoming. Let consciousness pivot towards the silent, unconditioned peace of cessation.</p>",
                      "pt": "<p><strong>A Virada Libertadora:</strong> Em profunda quietude, solte todo apego a estados de devir. Deixe a consciência inclinar-se para a paz incondicionada da cessação.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 9.36 §3</strong> and <strong>MN 64 §9–12</strong> (Mahāmālukya Sutta): The standard canonical breakthrough to non-returning (<em>anāgāmitā</em>) or arahantship.</p>",
                      "pt": "<p><strong>AN 9.36 §3</strong> e <strong>MN 64 §9–12</strong> (Mahāmālukya Sutta): A fórmula canônica para o salto decisivo rumo ao não-retorno ou libertação completa.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Archer Training at the Target (AN 9.36):</strong> An archer or his apprentice trains upon a straw dummy or clay target until his arrows strike with flawless precision; so the meditator strikes the Deathless by turning from formations.</p>",
                      "pt": "<p><strong>O Arqueiro Treinando no Alvo (AN 9.36):</strong> Um arqueiro atira flechas repetidamente contra um alvo de palha até que seus disparos atinjam o centro com perfeição infalível; assim o meditador atinge o Imortal ao voltar-se contra as formações condicionadas.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "Do not get trapped in spiritual addiction to peaceful sitting sessions. When you experience profound tranquility, calmness, or joy during a sit, do not grasp at it as 'my achievement' or try to freeze it in time. Instead, immediately run the insight diagnostic: observe that even this magnificent tranquility is conditioned and transient. This protects you from spiritual pride and transforms calm into wisdom.",
      "pt": "Evite o apego cego às experiências de paz na almofada. Quando vivenciar um estado profundo de quietude, leveza ou êxtase, não se apegue a ele como 'minha conquista' nem tente eternizá-lo. Imediatamente aplique o discernimento: reconheça que até mesmo essa serenidade sublime é condicionada e mutável. Isso liberta do orgulho espiritual e transforma a calma em sabedoria."
    },
    "keyPaliTerms": [
      {
        "term": "Amata-dhātu",
        "meaning": "The Deathless element, the unconditioned reality of Nibbāna"
      },
      {
        "term": "Salla",
        "meaning": "A dart, arrow, or thorn (recognizing that even subtle mental states contain subtle stress)"
      },
      {
        "term": "Paloka",
        "meaning": "Disintegrating, liable to break up, fragile"
      },
      {
        "term": "Suññato",
        "meaning": "Empty of an enduring, autonomous, self-existent entity"
      }
    ]
  },
  {
    "id": "ebt-culasunnata",
    "cluster": "ebt",
    "number": "10",
    "paliTitle": "Cūḷasuññata Sutta",
    "title": {
      "en": "The Shorter Discourse on Emptiness (The Gradual Descent into Voidness)",
      "pt": "O Discurso Breve sobre o Vazio (O Mergulho Gradual na Vacuidade)"
    },
    "lineageTradition": {
      "en": "Canonical Early Buddhist Texts (EBT)",
      "pt": "Textos Budistas Antigos (EBT Canônico)"
    },
    "primaryMasters": "Gotama Buddha, Ven. Ānanda",
    "canonicalRef": "MN 121 (Majjhima Nikāya 121)",
    "difficulty": "advanced",
    "curriculumOrder": 12,
    "difficultyLabel": {
      "en": "Advanced",
      "pt": "Avançado"
    },
    "recommendedPrereq": {
      "en": "AN 9.36 (Jhāna Sutta)",
      "pt": "AN 9.36 (Jhāna Sutta)"
    },
    "whyStudy": {
      "en": "The authentic canonical reduction method into Emptiness (Suññatā) and Signless Immersion leading to final unbinding.",
      "pt": "O método canônico autêntico de redução rumo à Vacuidade (Suññatā) e à Imersão Sem Sinais para a libertação final."
    },
    "coreFocus": {
      "en": "The genuine canonical method of contemplating Emptiness (Suññatā): gradually peeling back layers of perception to reach the signless liberation",
      "pt": "O método canônico autêntico de contemplação do Vazio (Suññatā): descascar progressivamente camadas de percepção rumo à libertação"
    },
    "primaryAnchor": {
      "en": "Discerning what is absent (suñña) vs. what slight residue remains present at each level of meditative refinement",
      "pt": "Discernir o que já está ausente (vazio) versus o resíduo sutil que ainda permanece presente em cada estágio"
    },
    "approachToJhana": {
      "en": "Traverses beyond the 4 Rūpa Jhānas into the Formless Dimensions (Āyatanas) culminating in Signless Immersion (Animitta Samādhi)",
      "pt": "Avança além dos 4 Jhānas materiais rumo às Dimensões Imateriais (Āyatanas), culminando na Imersão Sem Sinais (Animitta)"
    },
    "useOfNoting": {
      "en": "Lucid analytical subtraction: noting the absence of turbulence and resting in the remaining degree of undisturbed openness",
      "pt": "Subtração analítica lúcida: registrando a ausência de perturbação e repousando no espaço desimpedido restante"
    },
    "tagline": {
      "en": "'One regards whatever is not there as empty of it; but whatever remains, one discerns that as present: this is genuine, undistorted entry into emptiness.'",
      "pt": "'Considera-se vazio daquilo que não está presente; mas do que permanece, discerne-se que está ali: esta é a entrada autêntica e sem distorções na vacuidade.'"
    },
    "overview": {
      "en": "In the Cūḷasuññata Sutta (MN 121), the Buddha explains to Ven. Ānanda the authentic, uncontrived practice of Emptiness (suññatāvihāra). Rather than treating emptiness as a philosophical concept, the Buddha presents it as an experiential meditative reduction—like looking at a lecture hall and recognizing that it is empty of elephants, horses, and noisy crowds, yet not empty of the monks sitting within it. The meditator begins by dropping thoughts of village, city, and social concerns, resting in the perception of the quiet forest wilderness. Next, one drops the unevenness of trees and valleys, perceiving only the uniform, flat earth element. Progressively, the meditator peels back perception: entering the Dimension of Infinite Space, Infinite Consciousness, Nothingness, Neither-Perception-Nor-Non-Perception, and finally Signless Concentration (animitta cetosamādhi). At each stage, the practitioner accurately notes: 'Whatever disturbances existed before are now absent; only this slight degree of disturbance remains.' Finally, discerning that even the signless state is conditioned and fabricated, the mind is liberated from the taints of sensual desire, becoming, and ignorance, attaining the supreme, unsurpassable emptiness of Arahantship.",
      "pt": "No Cūḷasuññata Sutta (MN 121), o Buda explica ao Ven. Ānanda a prática autêntica e descomplicada da Vacuidade (suññatāvihāra). Em vez de abordá-la como abstração filosófica, o Buda a ensina como uma redução meditativa progressiva — como alguém que entra num salão e nota que ele está vazio de elefantes, cavalos e multidões ruidosas, mas não está vazio dos praticantes sentados em silêncio. O meditador começa soltando as preocupações com cidades e relações sociais, repousando na percepção da floresta serena. Em seguida, descarta a irregularidade da vegetação e das colinas, mantendo apenas a percepção uniforme do elemento terra. Gradualmente, o praticante descasca a percepção: mergulhando no Espaço Infinito, Consciência Infinita, Nada, Nem-Percepção-Nem-Não-Percepção e, por fim, na Concentração Sem Sinais (animitta cetosamādhi). Em cada etapa, observa com lucidez: 'As perturbações anteriores estão agora ausentes; resta apenas este grau sutil de presença.' Por fim, reconhecendo que até o estado sem sinais é fabricado, a mente liberta-se dos contaminantes da cobiça e da ignorância, alcançando o vazio supremo da libertação."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Araññasaññā",
                "title": {
                      "en": "1. The Perception of the Wilderness (Absence of Urban Agitation)",
                      "pt": "1. A Percepção da Selva (Ausência do Clamor Urbano)"
                },
                "desc": {
                      "en": "One does not attend to the perception of the village, people, or buildings; one attends single-mindedly to the perception of wilderness. Seeing what is absent and what remains present.",
                      "pt": "Não se atenta para a agitação da cidade, multidões ou afazeres; atenta-se exclusivamente para a solitude da selva. Reconhecendo o que está ausente e o que permanece presente."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Contemplating the Relief of Absence:</strong> Notice the silence when worldly noise ceases. Reflect: 'Whatever distress existed based on urban commotion is absent here; only the simple disturbance of nature remains.'</p>",
                      "pt": "<p><strong>Contemplando o Alívio da Ausência:</strong> Observe o silêncio quando cessa o tumulto mundano. Reflita: 'Todo o estresse da agitação urbana está ausente aqui; resta apenas a simplicidade da natureza.'</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 121 §4</strong>: The opening stage of the Buddha's gradual entry into voidness (<em>suññatāvihāra</em>).</p>",
                      "pt": "<p><strong>MN 121 §4</strong>: O estágio inicial da entrada gradual do Buda na vacuidade sublime (<em>suññatāvihāra</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Quiet Palace of Migāra's Mother (MN 121):</strong> Just as the lecture hall is empty of cattle, horses, and gold, and only contains the community of monks, one sees what is absent and what is present.</p>",
                      "pt": "<p><strong>O Palácio de Migāra (MN 121):</strong> Assim como o salão está vazio de gado, cavalos e ouro, contendo apenas a comunidade monástica, reconhece-se o que está ausente e o que persiste.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Pathavīsaññā",
                "title": {
                      "en": "2. The Perception of Earth as Pure Horizon",
                      "pt": "2. A Percepção da Terra como Puro Horizonte"
                },
                "desc": {
                      "en": "Setting aside perceptions of trees, rivers, and mountains; one attends single-mindedly to the perception of earth: vast, flat, and unbounded.",
                      "pt": "Deixando de lado árvores, rios, desfiladeiros e montanhas; atenta-se exclusivamente para a percepção da terra: vasta, plana e ilimitada."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Smoothing Internal Complexities:</strong> Visualize the earth stretched out smoothly in all directions. Let mental clutter flatten into vast, open ground.</p>",
                      "pt": "<p><strong>Nivelando as Complexidades Mentais:</strong> Visualize a terra estendida suavemente em todas as direções. Permita que as rugosidades mentais se aplainem num horizonte aberto.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 121 §5</strong>: Progressing from external solitude to internal spatial unification.</p>",
                      "pt": "<p><strong>MN 121 §5</strong>: Progredindo da solitude física externa para a unificação espacial interior.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Stretched Bull's Hide Free of Wrinkles (MN 121):</strong> Just as a bull's hide staked out with pegs is pulled taut and flat, freed of all folds and creases.</p>",
                      "pt": "<p><strong>O Couro de Boi Esticado (MN 121):</strong> Assim como um couro de boi fincado com estacas é puxado até ficar perfeitamente liso e plano, sem pregas ou dobras.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Ārūppa-samāpatti",
                "title": {
                      "en": "3. Ascending through the Immaterial Spheres",
                      "pt": "3. Ascendendo pelas Esferas Imateriais"
                },
                "desc": {
                      "en": "Stepping progressively from Infinite Space, to Infinite Consciousness, to Nothingness, to Neither-Perception-Nor-Non-Perception. Discarding coarser layers of perception at each step.",
                      "pt": "Avançando do Espaço Infinito para a Consciência Infinita, o Nada e Nem-Percepção-Nem-Não-Percepção. Abandonando camadas mais grosseiras de percepção a cada passo."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Progressive Subtraction:</strong> At each stage, notice what layer of mental construction has dropped away and enjoy the increasing lightness of non-manifestation.</p>",
                      "pt": "<p><strong>Subtração Progressiva:</strong> A cada estágio, observe qual camada de fabricação mental caiu e desfrute da leveza crescente da não-manifestação.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 121 §6–9</strong>: The ascent through the four formless dimensions (<em>ārūppā</em>).</p>",
                      "pt": "<p><strong>MN 121 §6–9</strong>: A ascensão através das quatro dimensões imateriais (<em>ārūppā</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Ascending Above the Clouds in Flight:</strong> Rising above ground, above weather, above the atmosphere into the pure, silent void of starry space.</p>",
                      "pt": "<p><strong>Subindo Acima das Nuvens:</strong> Elevando-se acima do solo, acima das tempestades e da atmosfera, penetrando o vácuo silencioso do espaço sideral.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Animitta-cetosamādhi",
                "title": {
                      "en": "4. The Theme-less Concentration of the Mind",
                      "pt": "4. A Concentração da Mente Sem Sinais (Animitta)"
                },
                "desc": {
                      "en": "Setting aside all signs and perceptual markers. Attending solely to the signless immersion of consciousness.",
                      "pt": "Deixando de lado todas as representações e sinais conceituais. Atentando exclusivamente para a imersão da consciência livre de sinais."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Dropping All Mental Markers:</strong> Rest in the gap where no signs (color, shape, concept, boundary) are grasped. Notice: 'Even this signless state is constructed and conditioned.'</p>",
                      "pt": "<p><strong>Soltando os Marcadores Mentais:</strong> Repouse no espaço onde nenhum sinal (cor, forma, conceito, fronteira) é retido. Reconheça: 'Mesmo esta ausência de sinais é condicionada.'</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 121 §10</strong>: The signless immersion (<em>animitta cetosamādhi</em>) as the threshold of liberating insight.</p>",
                      "pt": "<p><strong>MN 121 §10</strong>: A imersão sem sinais (<em>animitta cetosamādhi</em>) como o limiar do insight libertador.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Boundless Ocean Without Shoreline:</strong> Water extending infinitely in all directions without a single island, landmark, or navigation buoy.</p>",
                      "pt": "<p><strong>O Oceano Imenso Sem Margens:</strong> Águas azuis estendendo-se ao infinito sem uma única ilha, farol ou boia de demarcação.</p>"
                }
          },
          {
                "step": 5,
                "pali": "Paramānuttarā Suññatā",
                "title": {
                      "en": "5. Genuine, Supreme, Undistorted Emptiness",
                      "pt": "5. A Vacuidade Genuína, Suprema e Inquestionável"
                },
                "desc": {
                      "en": "Discerning the destruction of the taints: the mind is empty of sensual desire, empty of becoming, empty of ignorance. Knowing: 'This body alive with six senses remains, but it is empty of self, mine, and craving.'",
                      "pt": "Discernindo a extinção definitiva das contaminações: a mente está vazia de desejo, vazia de devir, vazia de ignorância. Sabe-se: 'Este corpo vivo dotado de seis sentidos permanece, mas está inteiramente vazio de um eu, de meu e de cobiça'."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Final Clean Void:</strong> Live and function in everyday reality knowing that everything is completely empty of personal ownership. Total freedom in the midst of life.</p>",
                      "pt": "<p><strong>A Vacuidade Viva Cotidiana:</strong> Viva e atue no mundo sabendo que tudo está totalmente vazio de posse pessoal ou substância permanente. Liberdade absoluta no coração da vida.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 121 §11–12</strong>: The supreme, undistorted realization of voidness (<em>paramānuttarā suññatā</em>).</p>",
                      "pt": "<p><strong>MN 121 §11–12</strong>: A realização suprema e imaculada da vacuidade (<em>paramānuttarā suññatā</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Spotless Transparent Crystal Globe:</strong> Perfectly clear, transmitting light freely in every direction without casting a shadow or trapping dust.</p>",
                      "pt": "<p><strong>A Esfera de Cristal Puro Translúcido:</strong> Perfeitamente límpida, transmitindo a luz em todas as direções sem projetar sombra nem reter poeira.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "Whenever your apartment, home, or office feels overwhelmingly noisy, crowded, or chaotic, do not fight the external clutter. Close your eyes and run the reduction method: look at the room and deliberately register what is absent (there are no wild tigers, no bombs falling, no war). Notice the empty space between the furniture. This immediately calms nervous system overwhelm.",
      "pt": "Sempre que seu lar ou ambiente de trabalho parecer sufocante, barulhento ou caótico, não lute contra a desordem externa. Feche os olhos e aplique a redução: observe o que NÃO está ali (não há animais selvagens, não há bombas caindo). Perceba o espaço vazio entre os móveis e pessoas. Isso acalma instantaneamente a sobrecarga sensorial."
    },
    "keyPaliTerms": [
      {
        "term": "Suññatāvihāra",
        "meaning": "Dwelling in genuine meditative emptiness and unconditioned voidness"
      },
      {
        "term": "Animitta Samādhi",
        "meaning": "Signless concentration, devoid of sensory marks and conceptual constructs"
      },
      {
        "term": "Daratha",
        "meaning": "Disturbance, stress, turbulence, or agitation remaining in perception"
      },
      {
        "term": "Yathābhucca",
        "meaning": "Real, factual, genuine, undistorted (accurate entry into emptiness)"
      }
    ]
  },
  {
    "id": "ebt-niramisa-vedana",
    "cluster": "ebt",
    "number": "11",
    "paliTitle": "Nirāmisa Sutta",
    "title": {
      "en": "Worldly, Unworldly & Ultra-Unworldly Feelings",
      "pt": "Sensações Mundanas, Espirituais & Transmundanas"
    },
    "lineageTradition": {
      "en": "Canonical Early Buddhist Texts (EBT)",
      "pt": "Textos Budistas Antigos (EBT Canônico)"
    },
    "primaryMasters": "Gotama Buddha",
    "canonicalRef": "SN 36.31 (Saṁyutta Nikāya 36.31)",
    "difficulty": "foundational",
    "curriculumOrder": 3,
    "difficultyLabel": {
      "en": "Foundations",
      "pt": "Fundamentos"
    },
    "recommendedPrereq": {
      "en": "MN 20 (Vitakkasaṇṭhāna Sutta)",
      "pt": "MN 20 (Vitakkasaṇṭhāna Sutta)"
    },
    "whyStudy": {
      "en": "Clarifies the crucial difference between worldly sensory craving and clean meditative joy, removing ascetic guilt.",
      "pt": "Clarifica a diferença entre desejos sensuais mundanos e o prazer limpo da meditação, eliminando a culpa ascética."
    },
    "coreFocus": {
      "en": "The anatomical taxonomy of feeling (Vedanā): distinguishing worldly sensations of the senses from the unworldly spiritual bliss of meditation",
      "pt": "A taxonomia anatômica das sensações (Vedanā): diferenciando estímulos sensuais do prazer espiritual e do êxtase da libertação"
    },
    "primaryAnchor": {
      "en": "The affective valence (pleasant, painful, neutral) of present sensory and mental contact",
      "pt": "O tom afetivo (agradável, desagradável, neutro) do contato sensorial e mental presente"
    },
    "approachToJhana": {
      "en": "Validates meditative bliss as 'Unworldly Pleasure' (Nirāmisa Sukha) that must be cultivated, not feared or repressed",
      "pt": "Valida o prazer dos Jhānas como 'Felicidade Espiritual' (Nirāmisa Sukha) que deve ser desenvolvida, sem medo ou aversão"
    },
    "useOfNoting": {
      "en": "Clear discernment of the origin of every feeling: is it rooted in sensual appetite or in meditative renunciation?",
      "pt": "Discernimento claro da raiz de cada sensação: está fundamentada no apetite sensual ou na renúncia meditativa?"
    },
    "tagline": {
      "en": "'There is worldly pleasure, there is unworldly pleasure, and there is pleasure more unworldly than the unworldly.'",
      "pt": "'Existe a felicidade mundana, existe a felicidade espiritual, e existe uma felicidade mais espiritual do que a espiritual.'"
    },
    "overview": {
      "en": "In the Nirāmisa Sutta (SN 36.31), the Buddha clarifies one of the most misunderstood areas of Buddhist practice: the nature of pleasure and joy. Ascetic extremists historically taught that all pleasure is dangerous and must be eliminated. The Buddha corrects this error by differentiating feelings (vedanā) into three progressive orders: 1. Worldly feelings (sāmisa vedanā): pleasant, painful, or neutral sensations dependent on the five cords of sensual pleasure (food, sex, entertainment, visual beauty, praise), which keep beings chained to craving and irritation; 2. Unworldly feelings (nirāmisa vedanā): the profound joy (pīti), ease (sukha), and serene equanimity born of renunciation and the four Jhānas. The Buddha explicitly commands that this unworldly pleasure is to be cultivated, developed, and frequently practiced, because it replaces coarse sensual desires without causing defilement; and 3. Feelings more unworldly than the unworldly (nirāmisā nirāmisatarā): the unshakeable peace and freedom that arises in the heart of an Arahant reviewing their liberation from greed, aversion, and delusion.",
      "pt": "No Nirāmisa Sutta (SN 36.31), o Buda esclarece um dos pontos mais mal interpretados da prática espiritual: a natureza do prazer e da alegria. Extremistas ascéticos historicamente defendiam que todo prazer deveria ser combatido e erradicado. O Buda corrige esse engano ao categorizar as sensações (vedanā) em três ordens progressivas: 1. Sensações mundanas (sāmisa vedanā): prazeres, dores ou neutralidades atrelados aos cinco sentidos (alimentos, entretenimento, elogios, sensualidade), que alimentam a dependência e a frustração; 2. Sensações espirituais (nirāmisa vedanā): o arrebatamento (pīti), bem-estar (sukha) e equanimidade profunda nascidos do recolhimento e dos quatro Jhānas. O Buda ordena expressamente que essa felicidade espiritual seja cultivada, repetida e desenvolvida com frequência, pois ela sacia a mente sem alimentar os venenos da cobiça; e 3. Sensações mais espirituais que as espirituais (nirāmisatarā): a serenidade inabalável do sábio que contempla sua mente completamente livre de amarras e delírios."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Sāmisa-vedanā",
                "title": {
                      "en": "1. Recognizing Worldly Sensation",
                      "pt": "1. Reconhecendo as Sensações Mundanas"
                },
                "desc": {
                      "en": "Discerning pleasant, painful, or neutral feelings that are rooted in the pursuit of sensual sights, sounds, flavors, and material attachments.",
                      "pt": "Discernindo sensações agradáveis, dolorosas ou neutras que estão atadas à busca por estímulos sensoriais, sabores, aparências e posses materiais."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Diagnosing Sensory Enslavement:</strong> Notice how worldly pleasure is always shadowed by fear of loss, and how worldly pain triggers reactive anger. See their instability.</p>",
                      "pt": "<p><strong>Diagnosticando a Dependência Sensorial:</strong> Observe como o prazer mundano é sempre assombrado pelo medo da perda, e como a dor mundana gera aversão reativa. Veja sua instabilidade.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>SN 36.31 §2</strong>: Defining sensory pleasure (<em>sāmisa-sukha</em>) dependent on material stimuli.</p>",
                      "pt": "<p><strong>SN 36.31 §2</strong>: Definindo o prazer dos sentidos (<em>sāmisa-sukha</em>) dependente de estímulos materiais.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>A Meat Scrap Thrown to a Hungry Dog (MN 54):</strong> A dog chewing on a dry, blood-smeared bone gets only exhaustion and hunger without real nourishment.</p>",
                      "pt": "<p><strong>O Osso Seco Atirado ao Cão Faminto (MN 54):</strong> Um cão roendo um osso seco e desprovido de carne ganha apenas cansaço e dentes feridos sem nutrição real.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Nirāmisa-vedanā",
                "title": {
                      "en": "2. Cultivating Unworldly Spiritual Ease",
                      "pt": "2. Cultivando o Bem-Estar Espiritual Imaterial"
                },
                "desc": {
                      "en": "Cultivating pleasant, peaceful feelings that arise from renunciation, solitude, ethical blamelessness, and the meditative absorptions (Jhāna).",
                      "pt": "Cultivando sensações de paz e júbilo que brotam da renúncia, da solitude, da conduta ética e das absorções meditativas (Jhānas)."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Nourishing with Pure Joy:</strong> Allow the mind to feed on the wholesome joy of meditation. This unworldly joy gives you the strength to abandon worldly addictions.</p>",
                      "pt": "<p><strong>Nutrindo-se da Alegria Pura:</strong> Permita que a mente se sacie na alegria salutar da meditação. Esse conforto imaterial dá forças para romper vícios mundanos.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>SN 36.31 §3</strong>: Defining the bliss born of seclusion in the first three Jhānas.</p>",
                      "pt": "<p><strong>SN 36.31 §3</strong>: Definindo o bem-estar nascido do recolhimento nos três primeiros Jhānas.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Cool Mountain Spring Water:</strong> Drinking clear, pure water from a remote mountain stream, free from urban chemical runoff.</p>",
                      "pt": "<p><strong>A Água Límpida da Nascente da Montanha:</strong> Bebendo da água pura e cristalina de um riacho remoto, livre de qualquer poluição urbana.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Nirāmisatarā-vedanā",
                "title": {
                      "en": "3. Experiencing Ultra-Unworldly Stillness",
                      "pt": "3. Vivenciando a Serenidade Ultra-Imaterial"
                },
                "desc": {
                      "en": "The sublime peace that arises when looking back on a mind that has extinguished greed, hatred, and delusion. The ease of liberated awareness.",
                      "pt": "A paz sublime que surge ao contemplar a mente que extinguiu a cobiça, a aversão e a ilusão. O bem-estar supremo da consciência libertada."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Resting in Freedom:</strong> Experience the profound relief of having no cravings, no defenses, and no mental grasping. Rest in pristine liberation.</p>",
                      "pt": "<p><strong>Repousando na Liberdade:</strong> Experimente o alívio profundo de não ter exigências, defesas nem apegos mentais. Descanse na pureza da libertação.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>SN 36.31 §4</strong>: Explaining the supreme unworldly ease of the taint-free noble one.</p>",
                      "pt": "<p><strong>SN 36.31 §4</strong>: Elucidando a paz inigualável do nobre desperto livre de contaminações.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Prisoner Walking Out the Gates:</strong> Stepping outside the prison walls into open air, feeling the shackles fall away forever.</p>",
                      "pt": "<p><strong>O Prisioneiro Atravessando os Portões:</strong> Cruzando as muralhas da prisão para o ar livre, vendo os grilhões de ferro caírem no chão para sempre.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Saññāvedayitanirodha",
                "title": {
                      "en": "4. The Ultimate Surpassing of All Feeling",
                      "pt": "4. A Superação Definitiva de Toda Sensação"
                },
                "desc": {
                      "en": "Transcending even subtle feelings in the attainment of the cessation of perception and feeling (nirodha-samāpatti). The unconditioned peace of Nibbāna.",
                      "pt": "Transcendendo até mesmo as sensações mais sutis ao tocar a cessação da percepção e sensação (nirodha-samāpatti). A paz incondicionada de Nibbāna."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Absolute Quenching:</strong> Let go of all interest in sensory signals. Surrender everything to the unconditioned cessation where suffering is extinguished.</p>",
                      "pt": "<p><strong>A Extinção Absoluta:</strong> Desapegue-se de qualquer interesse por sinais sensoriais. Entregue tudo à cessação incondicionada onde todo sofrimento falece.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>SN 36.31 §5</strong>: The Buddha's declaration that non-feeling in cessation is higher than all pleasant sensations.</p>",
                      "pt": "<p><strong>SN 36.31 §5</strong>: A declaração do Buda de que a não-sensação na cessação é superior a qualquer sensação agradável.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Flame Gone Out:</strong> Total cooling, where no heat, no smoke, and no disturbance remain.</p>",
                      "pt": "<p><strong>A Fogueira Apagada:</strong> Resfriamento total, onde não restam calor, fumaça nem qualquer perturbação.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "This teaching rescues practitioners from ascetic guilt: you do not need to feel guilty for enjoying the peace, stillness, and rapture of your meditation cushion! That is Nirāmisa Sukha (unworldly pleasure). Cultivating daily meditation pleasure is precisely what protects you from seeking cheap, addictive worldly dopamine hits (junk food, compulsive scrolling, impulse purchases) during the workday.",
      "pt": "Este ensinamento liberta o meditador da culpa puritana: você não precisa se sentir culpado por desfrutar da paz e do êxtase da meditação! Isso é Nirāmisa Sukha (felicidade espiritual). Ter uma fonte diária de prazer e paz na prática meditativa é o que protege você de buscar dopamina mundana compulsiva (redes sociais, comida em excesso, compras impulsivas) ao longo do dia."
    },
    "keyPaliTerms": [
      {
        "term": "Sāmisa Vedanā",
        "meaning": "Worldly feelings dependent on sensual objects and material stimuli"
      },
      {
        "term": "Nirāmisa Sukha",
        "meaning": "Unworldly, spiritual pleasure born of seclusion, stillness, and jhānas"
      },
      {
        "term": "Nirāmisatarā",
        "meaning": "More unworldly than the unworldly: the unconditioned peace of liberation"
      },
      {
        "term": "Vimuttisukha",
        "meaning": "The bliss and joy of spiritual freedom from defilements"
      }
    ]
  },
  {
    "id": "ebt-upakkilesa-anuruddha",
    "cluster": "ebt",
    "number": "12",
    "paliTitle": "Upakkilesa Sutta",
    "title": {
      "en": "Overcoming the 11 Corruptions of Meditative Light & Vision",
      "pt": "Superando as 11 Corrupções da Luz Meditativa (Nimitta)"
    },
    "lineageTradition": {
      "en": "Canonical Early Buddhist Texts (EBT)",
      "pt": "Textos Budistas Antigos (EBT Canônico)"
    },
    "primaryMasters": "Gotama Buddha, Ven. Anuruddha, Ven. Nandiya, Ven. Kimbila",
    "canonicalRef": "MN 128 (Majjhima Nikāya 128), AN 3.100",
    "difficulty": "advanced",
    "curriculumOrder": 10,
    "difficultyLabel": {
      "en": "Advanced",
      "pt": "Avançado"
    },
    "recommendedPrereq": {
      "en": "Stage 2 Concentration mastery",
      "pt": "Domínio da Concentração da Etapa 2"
    },
    "whyStudy": {
      "en": "Cures the 11 subtle mental distortions that cause meditation light (obhāsa) and nimittas to destabilize and collapse.",
      "pt": "Cura as 11 distorções mentais sutis que fazem a luz meditativa e os nimittas colapsarem."
    },
    "coreFocus": {
      "en": "The Buddha coaches Ven. Anuruddha on diagnosing and curing the 11 subtle mental distortions that cause meditation light (obhāsa) and visions to collapse",
      "pt": "O Buda instrui o Ven. Anuruddha a diagnosticar e curar as 11 corrupções sutis que fazem a luz meditativa (obhāsa) e o nimitta colapsarem"
    },
    "primaryAnchor": {
      "en": "The luminous sign of the mind (obhāsa/nimitta) and balancing energy like a master goldsmith",
      "pt": "O sinal luminoso da mente (obhāsa/nimitta) e o equilíbrio de energia como um ourives mestre"
    },
    "approachToJhana": {
      "en": "Addresses the precise intermediate threshold where luminous nimittas appear and instructs how to stabilize them into unwavering absorption",
      "pt": "Aborda o limiar exato em que surgem os nimittas luminosos e ensina como estabilizá-los em absorção inabalável"
    },
    "useOfNoting": {
      "en": "Subtle micro-tuning of effort: detecting when the mind is pushing too hard vs. slacking into inertia",
      "pt": "Micro-ajuste sutil do esforço: detectando quando a mente força demais versus quando cai em letargia"
    },
    "tagline": {
      "en": "'Just as a master goldsmith heats the ore, sprinkles water, and blows on it until it is pliant, radiant, and pure... so the meditator purges the 11 mental taints until light shines undiminished.'",
      "pt": "'Assim como um mestre ourives aquece o minério, borrifa água e sopra até torná-lo maleável, radiante e puro... assim o meditador elimina as 11 impurezas até que a luz brilhe sem oscilar.'"
    },
    "overview": {
      "en": "In the Upakkilesa Sutta (MN 128), the Buddha visits the venerable Anuruddha, Nandiya, and Kimbila practicing in the Eastern Bamboo Park. Ven. Anuruddha confesses a subtle obstacle: 'Lord, while meditating, we perceive luminous light (obhāsa) and the vision of forms (rūpa); but soon the light and the vision disappear. Why does this happen?' In response, the Buddha shares his own personal pre-awakening breakthroughs, systematically cataloging the Eleven Subtle Corruptions (upakkilesa) of the mind that cause meditation light to fade: 1. Doubt (vicikicchā); 2. Inattention (amanasikāra); 3. Sloth and torpor (thīnamiddha); 4. Fear (chambhitatta, when terrifying visions arise); 5. Elation (ubbilāvita, getting overly excited when light appears); 6. Inertia/clumsiness (duṭṭhulla); 7. Excessive energy (accāraddhavīriya, grasping at the light like squeezing a fragile bird); 8. Slack energy (atilīnavīriya, causing the mind to drift); 9. Longing/expectation (abhijappā, craving for the nimitta to grow); 10. Perception of diversity (nānattasaññā, paying attention to shifting details); and 11. Excessive pondering over forms (atidijjhāyitatta). Like a master goldsmith refining raw gold (AN 3.100), the meditator cleanses these eleven taints until the mind becomes utterly pliant, radiant, and steady.",
      "pt": "No Upakkilesa Sutta (MN 128), o Buda visita os veneráveis Anuruddha, Nandiya e Kimbila que praticavam no Parque dos Bambus. O Ven. Anuruddha relata um obstáculo sutil: 'Senhor, enquanto meditamos, percebemos uma luz resplandecente (obhāsa) e formas luminosas; mas logo essa luz desaparece. Por que isso ocorre?' Em resposta, o Buda revela suas próprias experiências anteriores ao despertar e cataloga as Onze Corrupções Sutis (upakkilesa) que fazem o nimitta esmaecer: 1. A dúvida (vicikicchā); 2. A desatenção (amanasikāra); 3. A moleza e o torpor (thīnamiddha); 4. O medo ou susto (chambhitatta); 5. A euforia (ubbilāvita, empolgar-se quando a luz surge); 6. A inércia pesada (duṭṭhulla); 7. O excesso de esforço (accāraddhavīriya, segurar a luz com tanta força que a esmaga); 8. O esforço frouxo (atilīnavīriya, deixando a mente divagar); 9. A expectativa ansiosa (abhijappā); 10. A percepção da diversidade (nānattasaññā, distrair-se com variações); e 11. O excesso de análise sobre as formas (atidijjhāyitatta). Como um ourives que purifica o ouro (AN 3.100), o praticante elimina essas impurezas até que a mente se torne maleável, radiante e inabalavelmente absorvida."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Obhāsa & Rūpadassana",
                "title": {
                      "en": "1. Establishing Inner Light & Vision",
                      "pt": "1. Estabelecendo a Luz Interior & Visão"
                },
                "desc": {
                      "en": "Cultivating meditative light (obhāsa) and the vision of forms. The mind becomes bright and luminous as mental clarity consolidates.",
                      "pt": "Cultivando a luminosidade meditativa (obhāsa) e a visão lúcida de formas. A mente torna-se clara e radiante conforme a estabilidade se firma."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Opening to Radiance:</strong> Allow the inner field of awareness to become bright. Do not grasp at lights; let them shine naturally as a sign of mental purification.</p>",
                      "pt": "<p><strong>Abrindo-se para a Claridade:</strong> Deixe o campo interior da consciência iluminar-se. Não se apegue aos clarões; permita que brilhem naturalmente como reflexo da pureza mental.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 128 §15</strong>: Ven. Anuruddha reports experiencing meditative light and visions that suddenly vanish.</p>",
                      "pt": "<p><strong>MN 128 §15</strong>: O Ven. Anuruddha relata ao Buda que experienciava luzes e visões sublimes que repentinamente sumiam.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Morning Sun Rising Over Mist:</strong> The sun's golden rays cut through morning valley fog, revealing the landscape in vibrant detail.</p>",
                      "pt": "<p><strong>O Sol Matinal Dissolvendo a Névoa:</strong> Raios dourados rompem o nevoeiro do vale, revelando a paisagem com nitidez vibrante.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Ekādasa Upakkilesā",
                "title": {
                      "en": "2. Diagnosing the 11 Corruptions of Concentration",
                      "pt": "2. Diagnosticando as 11 Corrupções da Concentração"
                },
                "desc": {
                      "en": "Identifying the 11 subtle obstacles that cause light and vision to disappear: doubt, inattention, sluggishness, fear, elation, inertia, excessive energy, slack energy, longing, perception of diversity, and excessive fascination.",
                      "pt": "Identificando os 11 obstáculos sutis que fazem a luz e a visão se apagarem: dúvida, desatenção, torpor, medo, euforia, inércia, excesso de esforço, frouxidão, anseio, dispersão da diversidade e fascínio excessivo."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Subtle Obstacle Elimination:</strong> If the light fades, check: Did I get excited (elation)? Did I push too hard (excessive energy)? Did I become slack? Balance effort with precision.</p>",
                      "pt": "<p><strong>Eliminação de Obstáculos Sutis:</strong> Se a claridade sumir, investigue: Houve euforia? Pressionei com força demais? Fiquei desatento? Ajuste o esforço com precisão milimétrica.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 128 §16–26</strong>: The Buddha's masterclass in troubleshooting refined concentration.</p>",
                      "pt": "<p><strong>MN 128 §16–26</strong>: A aula magna do Buda sobre diagnóstico de falhas na concentração refinada.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Stringing of the Lute (AN 6.55):</strong> If lute strings are too tight, they snap; if too loose, they cannot produce melody. Tuned just right, music flows effortlessly.</p>",
                      "pt": "<p><strong>A Afinação do Alaúde (AN 6.55):</strong> Se as cordas do alaúde estiverem muito esticadas, arrebentam; se muito frouxas, não emitem som. Afinadas no ponto justo, a música ressoa perfeita.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Kammāra-dhātu-sobhana",
                "title": {
                      "en": "3. The Goldsmith Refining Pure Gold",
                      "pt": "3. O Ourives Purificando o Ouro Maciço"
                },
                "desc": {
                      "en": "Just as a skilled goldsmith heats the crucible, blows on the fire, sprinkles water to cool, and inspects the molten ore, the meditator balances energy, calm, and equanimity.",
                      "pt": "Tal como um ourives experiente aquece o cadinho, sopra o fogo, borrifa água para resfriar e examina o metal fundido, o meditador calibra energia, calma e equanimidade."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Mastering the Three Faculties:</strong> When the mind is sluggish, apply energy (blow on the fire); when agitated, apply calming (sprinkle water); when balanced, abide in equanimity (inspect the gold).</p>",
                      "pt": "<p><strong>Dominando as Três Faculdades:</strong> Se a mente esmorecer, aplique energia (sopre o fogo); se agitar, aplique calma (borrife água); se equilibrada, permaneça em equanimidade (contemple o ouro).</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 128 §27</strong> and <strong>AN 3.100</strong>: The goldsmith simile demonstrating dynamic meditative modulation.</p>",
                      "pt": "<p><strong>MN 128 §27</strong> e <strong>AN 3.100</strong>: O símile do ourives demonstrando a modulação meditativa dinâmica.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Pure Pliable Gold (AN 3.100):</strong> Cleansed of dross, the gold becomes radiant, malleable, and ready to be fashioned into any exquisite ornament.</p>",
                      "pt": "<p><strong>O Ouro Maleável e Puro (AN 3.100):</strong> Purificado de escórias, o ouro torna-se radiante, dúctil e pronto para ser trabalhado em qualquer ornamento nobre.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Tividha-samādhi",
                "title": {
                      "en": "4. The Threefold Unshakeable Concentration",
                      "pt": "4. A Concentração Tríplice Inabalável"
                },
                "desc": {
                      "en": "Mastering concentration with applied and sustained thought, without applied thought but with sustained thought, and free of both. Unshakeable liberation and supreme vision.",
                      "pt": "Dominando a concentração com pensamento aplicado e sustentado, sem pensamento aplicado mas com sustentação, e livre de ambos. Libertação inabalável e visão suprema."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Effortless Absorption Mastery:</strong> Abide steadily in any degree of absorption without losing clarity or falling into subtle corruptions. Total meditative sovereignty.</p>",
                      "pt": "<p><strong>Domínio Espontâneo da Absorção:</strong> Permaneça firme em qualquer nível de absorção sem perder a lucidez nem cair em corrupções sutis. Soberania meditativa total.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 128 §30–32</strong>: Ven. Anuruddha attains arahantship, becoming foremost in the divine eye (<em>dibbacakkhu</em>).</p>",
                      "pt": "<p><strong>MN 128 §30–32</strong>: O Ven. Anuruddha atinge o estado de Arahant, tornando-se o discípulo supremo na visão divina (<em>dibbacakkhu</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Great Diamond Crown:</strong> Cut with exquisite symmetry, flashing brilliant light in all directions, impossible to scratch or shatter.</p>",
                      "pt": "<p><strong>A Coroa de Diamantes Puros:</strong> Lapidada com simetria impecável, emitindo clarões brilhantes em todas as direções, impossível de riscar ou quebrar.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "This discourse provides the golden rule for meditation effort: whenever a meditator begins experiencing light, tingles, or profound calm, the instinct is to try to 'hold onto it' or get excited ('Wow, it's working!'). That sudden surge of grasping and elation is precisely what destroys the state. Treat meditative signs like a butterfly resting on your open palm: if you close your fist to grasp it, you crush it; remain utterly still and let it rest.",
      "pt": "Este discurso ensina a regra de ouro do esforço meditativo: quando surgem luzes, arrepios de paz ou tranquilidade profunda, o reflexo instintivo é tentar 'segurar' ou comemorar ('Uau, consegui!'). Esse impulso de posse e euforia é exatamente o que desfaz a concentração. Trate as experiências meditativas como uma borboleta que pousa na palma aberta: se fechar a mão para segurá-la, você a esmaga; mantenha-se sereno e permita que ela repouse."
    },
    "keyPaliTerms": [
      {
        "term": "Upakkilesa",
        "meaning": "Subtle corruptions, taints, or distortions of meditative concentration"
      },
      {
        "term": "Obhāsa",
        "meaning": "Inner meditative luminosity, radiance, or illumination"
      },
      {
        "term": "Accāraddhavīriya",
        "meaning": "Excessive, strained effort that leads to agitation and disturbance"
      },
      {
        "term": "Atilīnavīriya",
        "meaning": "Overly slack, sluggish effort that leads to drowsiness and drifting"
      }
    ]
  },
  {
    "id": "thai-forest-snp-khaggavisana",
    "cluster": "thai-forest",
    "number": "13",
    "paliTitle": "Khaggavisāṇa Sutta",
    "title": {
      "en": "The Rhinoceros Horn Discourse — Fearless Solitude in the Wild",
      "pt": "O Discurso do Chifre do Rinoceronte — A Solitude Destemida na Selva"
    },
    "lineageTradition": {
      "en": "Thai Forest Wilderness Lineage (Thudong Kammaṭṭhāna)",
      "pt": "Linhagem de Floresta Tailandesa (Thudong Kammaṭṭhāna)"
    },
    "primaryMasters": "Gotama Buddha, Solitary Hermits (Paccekabuddhas), Ven. Ajahn Mun Bhūridatto",
    "canonicalRef": "Khuddaka Nikāya, Sutta Nipāta 1.3 (Snp 35–75)",
    "difficulty": "foundational",
    "curriculumOrder": 1,
    "difficultyLabel": {
      "en": "Foundations",
      "pt": "Fundamentos"
    },
    "recommendedPrereq": {
      "en": "Willingness to establish daily digital and social silence",
      "pt": "Disposição para estabelecer silêncio digital e social diário"
    },
    "whyStudy": {
      "en": "The ancient anthem of wilderness recluses: dissolves the fear of being alone, cuts people-pleasing, and builds fierce spiritual self-reliance.",
      "pt": "O hino primordial dos ascetas da selva: dissolve o medo da solidão, corta a dependência de aprovação alheia e edifica a autossuficiência espiritual."
    },
    "coreFocus": {
      "en": "Physical and mental seclusion (kāya & citta-viveka), dropping social entanglements (saṁsagga), solitary fearlessness",
      "pt": "Isolamento físico e mental (kāya & citta-viveka), desapego de emaranhados sociais (saṁsagga), coragem solitária"
    },
    "primaryAnchor": {
      "en": "The unentangled, self-contained witness mind that rests quietly in its own presence without craving stimulation",
      "pt": "A mente testemunha, desvencilhada e autocontida, que repousa na própria presença sem ansiar por estímulos"
    },
    "approachToJhana": {
      "en": "Physical seclusion naturally calms social friction; the unagitated mind settles into Jhāna with minimal friction",
      "pt": "A solitude física acalma o atrito social; a mente livre de perturbações ingressa em Jhāna com facilidade natural"
    },
    "useOfNoting": {
      "en": "Noting the subtle itch for company, gossiping, or texting: recognizing it as danger (bhaya) and returning to stillness",
      "pt": "Notar o anseio por companhia, conversas fúteis ou mensagens: reconhecer como perigo (bhaya) e regressar ao silêncio"
    },
    "tagline": {
      "en": "'Renouncing all bonds of society, wealth, and praise, wander alone like a rhinoceros horn.'",
      "pt": "'Renunciando aos laços sociais, riquezas e elogios mundanos, caminhe só como o chifre de um rinoceronte.'"
    },
    "overview": {
      "en": "The Khaggavisāṇa Sutta is revered across the Thai Forest tradition as the ultimate charter of the solitary practitioner. Ven. Ajahn Mun encouraged disciples to retreat deep into remote mountains and caves specifically to sever their addiction to social validation and chatter. For the modern householder, this discourse provides essential psychological armor against social media overload, gossip, and the constant fear of missing out.",
      "pt": "O Khaggavisāṇa Sutta é reverenciado na tradição das florestas como a carta de alforria do praticante solitário. Ven. Ajahn Mun enviava seus discípulos para cavernas e florestas ermas precisamente para romper o vício da validação social e da fala fútil. Para o leigo contemporâneo, este sutta fornece uma couraça psicológica indispensável contra a sobrecarga digital, as redes sociais e o pânico de ficar de fora."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Saṁsagga-dosa-dassana",
                "title": {
                      "en": "1. Discerning the Peril of Social Enmeshment",
                      "pt": "1. Discernindo o Perigo do Enredamento Social"
                },
                "desc": {
                      "en": "Recognizing that social entanglements bring affection, affection brings attachment, and attachment brings grief. Resolving to cultivate inner solitude like a rhinoceros horn.",
                      "pt": "Reconhecendo que o enredamento social gera apego, o apego gera dependência e a dependência gera aflição. Resolvendo caminhar com solitude serena como o chifre do rinoceronte."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Psychological Independence:</strong> Step back from the compulsive need for validation and endless social chatter. Cultivate comfortable, grounded inner silence.</p>",
                      "pt": "<p><strong>Independência Psicológica:</strong> Dê um passo atrás da compulsão por validação e ruído social. Cultive um silêncio interior calmo e autossuficiente.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>Sutta Nipāta 1.3 §35–40</strong>: The foundational EBT anthem on solitary wilderness asceticism.</p>",
                      "pt": "<p><strong>Sutta Nipāta 1.3 §35–40</strong>: O clássico hino do Budismo Antigo sobre a solitude monástica na floresta.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Two Golden Bangles Clashing (Snp 1.3 §48):</strong> Two golden bangles on a wrist constantly clash and jingle; a single bangle rests in perfect silence.</p>",
                      "pt": "<p><strong>Os Dois Braceletes de Ouro (Snp 1.3 §48):</strong> Dois braceletes no pulso chocam-se e tilintam sem cessar; um único bracelete repousa em silêncio absoluto.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Pahāna-saṅga",
                "title": {
                      "en": "2. Severing the Nets of Sensual Attachment",
                      "pt": "2. Rompendo as Redes do Desejo Sensual"
                },
                "desc": {
                      "en": "Seeing through sensual pleasures: sweet, captivating, yet churning the mind with craving. Breaking free like an elephant in rut tearing its chains.",
                      "pt": "Enxergando a armadilha dos prazeres dos sentidos: sedutores, mas que agitam a mente com cobiça. Libertando-se como um elefante em fúria arrebentando as amarras."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Cutting Habitual Loops:</strong> When a sensory craving pulls at your mind, cut the mental leash immediately. Do not bargain with addiction.</p>",
                      "pt": "<p><strong>Cortando Hábitos Compulsivos:</strong> Quando o desejo sensorial puxar sua atenção, corte a corda imediatamente. Não negocie com o vício mental.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>Snp 1.3 §45–50</strong>: Emphasizes that sensual pleasures are disguised hooks leading to bondage.</p>",
                      "pt": "<p><strong>Snp 1.3 §45–50</strong>: Enfatiza que os prazeres sensoriais são anzóis disfarçados que aprisionam a mente.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Fish Tearing the Net (Snp 1.3 §62):</strong> Just as a powerful fish bursts through the fisherman's mesh into the open river, one shatters the nets of craving.</p>",
                      "pt": "<p><strong>O Peixe Rompendo a Rede (Snp 1.3 §62):</strong> Tal como um peixe vigoroso rasga a malha do pescador e mergulha no rio aberto, o meditador rasga as redes do apego.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Mettā-karuṇā-vihāra",
                "title": {
                      "en": "3. Boundless Benevolence from Solitude",
                      "pt": "3. Benevolência Ilimitada a Partir da Solitude"
                },
                "desc": {
                      "en": "Abiding in seclusion does not mean cold cynicism. One radiates loving-kindness, compassion, sympathetic joy, and equanimity to all living beings in all directions.",
                      "pt": "Habitar em solitude não significa cinismo ou frieza. Irradia-se bondade amorosa, compaixão, alegria altruísta e equanimidade a todos os seres em todas as direções."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Warm Heart, Still Mind:</strong> Bathe the world in unconditional goodwill. True solitude is warm, luminous, and completely harmless.</p>",
                      "pt": "<p><strong>Coração Acolhedor, Mente em Paz:</strong> Banhe o mundo em boa vontade incondicional. A solitude verdadeira é calorosa, luminosa e inofensiva.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>Snp 1.3 §73</strong>: Balancing fierce solitude with the four Brahma-vihāras.</p>",
                      "pt": "<p><strong>Snp 1.3 §73</strong>: Equilibrando a solitude rigorosa com as quatro moradas divinas (Brahma-vihāras).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Wind Blowing Freely Through the Trees (Snp 1.3 §71):</strong> Like wind unobstructed by nets, benevolent awareness moves everywhere without snagging.</p>",
                      "pt": "<p><strong>O Vento Soprando Livre pelas Árvores (Snp 1.3 §71):</strong> Como o vento que não fica preso em redes, a consciência benevolente permeia tudo sem se apegar.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Khaggavisāṇa-kappa",
                "title": {
                      "en": "4. Wandering Free Like the Rhinoceros Horn",
                      "pt": "4. Vagueando Livre como o Chifre do Rinoceronte"
                },
                "desc": {
                      "en": "Firmly established in awakening, unshaken by storms, blame, or praise. Wandering alone, unattached, fearless, and liberated.",
                      "pt": "Firmemente estabelecido no despertar, inabalável diante de tempestades, louvores ou censuras. Vagueando solitário, livre de amarras e em paz suprema."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Resting in Self-Luminous Sovereignty:</strong> Abide with zero spiritual dependency. The mind is its own island, resting in the unconditioned.</p>",
                      "pt": "<p><strong>Repousando na Soberania Luminosa:</strong> Permaneça sem dependência psicológica. A mente é sua própria ilha, ancorada no incondicionado.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>Snp 1.3 §75</strong>: The crowning verse concluding the Rhinoceros Horn Discourse.</p>",
                      "pt": "<p><strong>Snp 1.3 §75</strong>: O verso culminante que coroa o Discurso do Chifre do Rinoceronte.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Solitary Rhinoceros Horn:</strong> Single, upright, unbending, and solid; walking through the dense jungle without entangled branches.</p>",
                      "pt": "<p><strong>O Chifre Solitário do Rinoceronte:</strong> Único, ereto, inflexível e sólido; caminhando pela selva espessa sem se prender nos galhos.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "High Samādhi & Non-Clinging to Social Identity (Anattā)",
      "hindrances": [
        {
          "name": "Loneliness & Fear of Isolation",
          "remedy": "Recognize that craving for company is an addiction to defilements; Dhamma is the true refuge."
        },
        {
          "name": "Boredom & Restlessness",
          "remedy": "Watch boredom directly as mental hunger; do not feed it with phone screens."
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Sudden anxiety about being left behind or forgotten by friends",
          "remedy": "Reflect on how worldly relationships cannot protect you at the moment of death. Real peace must be found within."
        }
      ]
    },
    "layLife": {
      "feasibility": "Supreme (Essential for mental health in modern noisy cities)",
      "dailySchedule": "Dedicate 30–60 minutes daily to complete solitude (no phone, no music, no conversations).",
      "householdObstacles": "Family feeling rejected by your quiet time; counter by explaining calmly that silence makes you more loving and patient.",
      "ethicsDuty": "Harmlessness and speech purity: refraining completely from gossip, slander, and harsh argument."
    },
    "paliTerms": [
      {
        "term": "Khaggavisāṇa",
        "meaning": "Rhinoceros horn (metaphor for resolute solitary practice)"
      },
      {
        "term": "Paviveka",
        "meaning": "Deep solitude and mental seclusion from defilements"
      },
      {
        "term": "Saṁsagga",
        "meaning": "Entangling social association that creates distraction and compromise"
      }
    ]
  },
  {
    "id": "thai-forest-mn19-dvedhavitakka",
    "cluster": "thai-forest",
    "number": "14",
    "paliTitle": "Dvedhāvitakka Sutta",
    "title": {
      "en": "Two Kinds of Thought — Calming the Bounded Mind",
      "pt": "Dois Tipos de Pensamento — Acalmando a Mente Dividida"
    },
    "lineageTradition": {
      "en": "Thai Forest Wilderness Lineage (Kammaṭṭhāna)",
      "pt": "Linhagem de Floresta Tailandesa (Kammaṭṭhāna)"
    },
    "primaryMasters": "Gotama Buddha, Ven. Ajahn Chah Subhaddo",
    "canonicalRef": "MN 19 (Majjhima Nikāya 19)",
    "difficulty": "foundational",
    "curriculumOrder": 2,
    "difficultyLabel": {
      "en": "Foundations",
      "pt": "Fundamentos"
    },
    "recommendedPrereq": {
      "en": "Snp 1.3 (Khaggavisāṇa Sutta)",
      "pt": "Snp 1.3 (Khaggavisāṇa Sutta)"
    },
    "whyStudy": {
      "en": "The Buddha's own practice prior to awakening: reveals how thoughts groove the mind's neuroplasticity and how to partition thoughts without violent suppression.",
      "pt": "A prática do próprio Buda antes do despertar: revela como os pensamentos moldam os hábitos mentais e ensina a dividi-los sem repressão violenta."
    },
    "coreFocus": {
      "en": "Classifying thoughts into unwholesome (craving, ill-will, harm) vs wholesome (renunciation, goodwill, harmlessness); stepping back into stillness",
      "pt": "Classificar pensamentos em prejudiciais (desejo, rancor, violência) vs benéficos (renúncia, bondade, não-violência); repousar na serenidade"
    },
    "primaryAnchor": {
      "en": "The vigilant guardian of awareness (Sati) inspecting thought-currents at the mental gate",
      "pt": "O guardião vigilante da atenção (Sati) inspecionando os fluxos de pensamentos no portão da mente"
    },
    "approachToJhana": {
      "en": "Once unwholesome thoughts are abandoned, even wholesome thoughts are stilled through wearying, leading directly into the 1st Jhāna",
      "pt": "Abandonados os pensamentos nocivos, até os pensamentos benéficos são acalmados, conduzindo suavemente ao 1º Jhāna"
    },
    "useOfNoting": {
      "en": "Immediate classification: 'This leads to affliction (byābādhāya saṁvattati)' vs 'This leads to peace (anibbādhāya saṁvattati)'",
      "pt": "Classificação imediata: 'Isto gera aflição' vs 'Isto conduz à paz interior'"
    },
    "tagline": {
      "en": "'Whatever a person frequently thinks and ponders upon, that becomes the inclination of their mind.'",
      "pt": "'Aquilo sobre o qual uma pessoa frequentemente pensa e reflete torna-se a inclinação de sua própria mente.'"
    },
    "overview": {
      "en": "In MN 19, the Buddha recounts his pre-awakening wilderness training in Magadha. Sitting under forest trees, he divided all emerging thoughts into two distinct categories: the destructive (sensual craving, malice, cruelty) and the constructive (renunciation, kindness, harmlessness). Ajahn Chah used this sutta as his master teaching on handling mental chatter: do not wage war against thoughts; simply observe which direction they incline your heart, and discard what poisons your well.",
      "pt": "No MN 19, o Buda relata seu treinamento pré-despertar nas selvas de Magadha. Sentado sob copas de árvores, dividiu os pensamentos emergentes em duas classes: os destrutivos (desejo sensual, aversão, crueldade) e os luminosos (renúncia, benevolência, não-violência). Ajahn Chah usava este sutta como instrução mestra para lidar com pensamentos obsessivos: não declare guerra aos pensamentos; apenas veja para onde inclinam seu coração e cesse de alimentar o que envenena sua mente."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Dvedhā-vitakka-vibhāga",
                "title": {
                      "en": "1. Sorting Thoughts into Two Streams",
                      "pt": "1. Dividindo os Pensamentos em Dois Fluxos"
                },
                "desc": {
                      "en": "The Bodhisatta's discovery: dividing thoughts into two classes—those rooted in sensuality, ill will, and harm vs those rooted in renunciation, good will, and harmlessness.",
                      "pt": "A descoberta fundamental do Bodhisatta: separar pensamentos em duas classes—os arraigados no desejo, má vontade e crueldade contra os de renúncia, benevolência e não-violência."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Dual-Stream Mental Sorting:</strong> When a thought arises, label its ethical root immediately: 'Is this greed/aversion, or is this wholesome letting-go?'</p>",
                      "pt": "<p><strong>Triagem de Fluxo Duplo:</strong> Ao notar um pensamento surgindo, rotule sua raiz ética: 'Isto é cobiça/aversão, ou é renúncia e bondade?'</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 19 §3</strong>: The historical Bodhisatta's method prior to his full Awakening under the Bodhi tree.</p>",
                      "pt": "<p><strong>MN 19 §3</strong>: O método empregado pelo Bodhisatta antes de alcançar a Iluminação sob a árvore Bodhi.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Cowherd in Autumn Guarding the Crops (MN 19 §4):</strong> A cowherd with a stick taps and prods cows away from ripe corn crops to prevent them from eating the farmer's grain.</p>",
                      "pt": "<p><strong>O Pastor Vigiando a Lavoura no Outono (MN 19 §4):</strong> Um pastor com um cajado enxota as vacas para longe dos trigais maduros para impedir que destruam as colheitas alheias.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Vitakka-vūpasama",
                "title": {
                      "en": "2. Stilling Even Wholesome Thoughts",
                      "pt": "2. Pacificando Até os Pensamentos Salutares"
                },
                "desc": {
                      "en": "Even thoughts of renunciation and harmlessness, when indulged in for too long, tire the body and agitate the mind. Stilling thought-formations into noble silence.",
                      "pt": "Mesmo pensamentos nobres e compassivos, quando prolongados em excesso, cansam o corpo e desgastam a mente. Pacificando o diálogo interno no silêncio nobre."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Stepping from Good Thinking into Stillness:</strong> Do not just collect good thoughts; let thinking itself rest. Drop discourse and enter silent presence.</p>",
                      "pt": "<p><strong>Passando do Bom Pensamento para a Quietude:</strong> Não fique apenas colecionando boas ideias; permita que o pensar descanse. Largue o diálogo e entre na quietude pura.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 19 §6–7</strong>: 'Too much thinking and evaluating tires the body; when the body is tired, the mind is perturbed.'</p>",
                      "pt": "<p><strong>MN 19 §6–7</strong>: 'Pensar e avaliar em demasia cansa o corpo; com o corpo cansado, a mente se perturba.'</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Cowherd Resting Under the Tree in Summer (MN 19 §8):</strong> In summer, when crops are harvested, the cowherd sits comfortably under a tree, mindful only: 'The cows are there.'</p>",
                      "pt": "<p><strong>O Pastor Repousando sob a Árvore no Verão (MN 19 §8):</strong> No verão, colhidos os grãos, o pastor senta-se tranquilo à sombra de uma árvore, apenas ciente: 'O gado está ali.'</p>"
                }
          },
          {
                "step": 3,
                "pali": "Dutiyajjhāna-pavesa",
                "title": {
                      "en": "3. Entering the Second Jhāna (Noble Silence)",
                      "pt": "3. Acessando o Segundo Jhāna (Silêncio Nobre)"
                },
                "desc": {
                      "en": "With the stilling of applied and sustained thought, one enters and abides in the 2nd Jhāna, with internal confidence, unification of mind, and joy born of concentration.",
                      "pt": "Com a cessação do pensamento aplicado e sustentado, adentra-se e permanece-se no 2º Jhāna, com confiança interior, unificação mental e êxtase nascido do samādhi."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Sinking into Noble Silence:</strong> Enjoy the sweet relief of a mind with zero inner verbalization. Rest in the pure glow of samādhi.</p>",
                      "pt": "<p><strong>Mergulhando no Silêncio Nobre:</strong> Desfrute do alívio sublime de uma mente sem qualquer diálogo interno. Repouse na luminosidade do samādhi.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 19 §11–13</strong>: Traces the progression from moral thought regulation into the deep Jhānas.</p>",
                      "pt": "<p><strong>MN 19 §11–13</strong>: Traça a progressão direta da regulação dos pensamentos para as absorções dos Jhānas.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Deep Spring Lake without Incoming Rivers:</strong> Feeding on its own subterranean cool waters in untroubled peace.</p>",
                      "pt": "<p><strong>O Lago Profundo sem Afluentes:</strong> Alimentado por suas próprias águas límpidas subterrâneas em paz cristalina.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Tevijjā-sacchikiriya",
                "title": {
                      "en": "4. Breakthrough to the Three True Knowledges",
                      "pt": "4. Concretização dos Três Conhecimentos Supremos"
                },
                "desc": {
                      "en": "From unwavering concentration, the mind penetrates past lives, the rebirth of beings according to kamma, and the destruction of the taints, attaining full awakening.",
                      "pt": "A partir da concentração inabalável, a mente penetra vidas passadas, a transmigração dos seres pelo kamma e a destruição das contaminações, atingindo a Iluminação plena."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Penetrating Reality:</strong> Turn the concentrated, diamond-sharp mind towards the Four Noble Truths, seeing origin and cessation directly.</p>",
                      "pt": "<p><strong>Penetrando a Realidade:</strong> Incline a mente afiada como diamante para as Quatro Nobres Verdades, contemplando a origem e a cessação diretamente.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 19 §15–27</strong>: The Bodhisatta's night of Awakening under the Bodhi tree.</p>",
                      "pt": "<p><strong>MN 19 §15–27</strong>: A vigília noturna da Iluminação do Bodhisatta sob a árvore Bodhi.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Clear Mountain Stream Displaying All Pebbles (MN 19):</strong> All secrets of conditioning and liberation revealed in spotless lucidity.</p>",
                      "pt": "<p><strong>O Riacho da Montanha Revelando Cada Seixo (MN 19):</strong> Todos os segredos do sofrimento e da libertação revelados em transparência imaculada.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Mastery of Vitakka/Vicāra and 1st Jhāna Absorption",
      "hindrances": [
        {
          "name": "Obsessive Rumination",
          "remedy": "Label the thought as dangerous; remember the cow-herder metaphor and let it dissolve."
        },
        {
          "name": "Guilt about Having Negative Thoughts",
          "remedy": "Thoughts are not self (anattā); they are conditioned weather passing through."
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Replaying workplace insults or arguments endlessly in the head",
          "remedy": "Apply MN 19 directly: 'This thought stems from ill-will; it obstructs my peace.' Immediately ground awareness in the soles of the feet."
        }
      ]
    },
    "layLife": {
      "feasibility": "Exceptional (Direct cognitive therapy for householder stress)",
      "dailySchedule": "Conduct periodic 30-second 'thought-audits' during work meetings or commutes.",
      "householdObstacles": "Becoming reactive when family members trigger frustration; catch the anger thought before it turns into words.",
      "ethicsDuty": "Right Thought (Sammā Saṅkappa): renunciation, good-will, harmlessness."
    },
    "paliTerms": [
      {
        "term": "Vitakka",
        "meaning": "Directed thought / applying the mind to an object"
      },
      {
        "term": "Vicāra",
        "meaning": "Sustained evaluation and mental wandering"
      },
      {
        "term": "Nekkhamma",
        "meaning": "Renunciation / letting go of worldly grasping"
      }
    ]
  },
  {
    "id": "thai-forest-mn119-asubha",
    "cluster": "thai-forest",
    "number": "15",
    "paliTitle": "Kāyagatāsati & Asubha Sutta",
    "title": {
      "en": "Contemplation of the 32 Body Parts & The Bone Skeleton (Mūla-Kammaṭṭhāna)",
      "pt": "Contemplação das 32 Partes do Corpo & O Esqueleto Ósseo (Mūla-Kammaṭṭhāna)"
    },
    "lineageTradition": {
      "en": "Thai Forest Wilderness Lineage (Wat Pa Ban Tad / Wat Nong Pah Pong)",
      "pt": "Linhagem de Floresta Tailandesa (Wat Pa Ban Tad / Wat Nong Pah Pong)"
    },
    "primaryMasters": "Ven. Ajahn Mun Bhūridatto, Ven. Ajahn Sao Kantasīlo, Ven. Ajahn Maha Boowa",
    "canonicalRef": "MN 119, Snp 1.11 (Vijaya Sutta), AN 1.296–305",
    "difficulty": "foundational",
    "curriculumOrder": 3,
    "difficultyLabel": {
      "en": "Foundations",
      "pt": "Fundamentos"
    },
    "recommendedPrereq": {
      "en": "Emotional stability and basic breath mindfulness",
      "pt": "Estabilidade emocional e atenção básica à respiração"
    },
    "whyStudy": {
      "en": "The primary ordination contemplation given by Ajahn Mun. Radically dismantles sexual craving, physical vanity, hypochondria, and fear of sickness by looking beneath the skin.",
      "pt": "A meditação de ordenação dada por Ajahn Mun. Desmantela a obsessão sexual, a vaidade estética e o pânico de doenças ao contemplar a anatomia sob a pele."
    },
    "coreFocus": {
      "en": "Deconstruction of the body into 32 anatomical components, bone visualization, and un-glamorizing the flesh",
      "pt": "Desconstrução do corpo nas 32 partes anatômicas, visualização dos ossos e desmistificação da carne"
    },
    "primaryAnchor": {
      "en": "The inner skeleton (aṭṭhika) or the basic 5 parts: hair of head, hair of body, nails, teeth, skin (kesā, lomā, nakhā, dantā, taco)",
      "pt": "O esqueleto interno (aṭṭhika) ou as 5 partes fundamentais: cabelos, pelos, unhas, dentes e pele (kesā, lomā, nakhā, dantā, taco)"
    },
    "approachToJhana": {
      "en": "Body contemplation cools sensual fire (rāga), bringing profound relief and leading into deep 1st Jhāna free from physical lust",
      "pt": "A contemplação do corpo apaga as chamas da luxúria (rāga), trazendo serenidade límpida e abrindo o 1º Jhāna"
    },
    "useOfNoting": {
      "en": "Stripping off the external aesthetic illusion: 'Bones inside, blood beneath, urine, feces, sweat—where is the permanent beauty?'",
      "pt": "Remover a maquiagem estética: 'Ossos por dentro, sangue sob a pele, fluidos e excreções — onde está a beleza permanente?'"
    },
    "tagline": {
      "en": "'Immerse mindfulness in the body, and the defilements of sensual desire wither like scorched grass.'",
      "pt": "'Mergulhe a atenção plena no corpo, e os desejos sensuais fenecerão como capim sob o fogo.'"
    },
    "overview": {
      "en": "Upon ordination in the Thai Forest tradition, every monk is commanded to memorize five words: Kesā (hair), Lomā (body hair), Nakhā (nails), Dantā (teeth), Taco (skin). This is the Mūla-Kammaṭṭhāna (Root Meditation). Ajahn Mun taught that all human infatuation, romance, and sexual compulsion are founded on an optical illusion: we only ever see the outermost fraction of a millimeter of dead skin. By training the mind's eye to see the teeth in the skull, the internal organs, and the skeleton, lust is uprooted and fear of death is dissolved.",
      "pt": "Na tradição das florestas, todo monge ao raspar a cabeça recebe do preceptor cinco palavras em Pāli: Kesā (cabelos), Lomā (pelos), Nakhā (unhas), Dantā (dentes), Taco (pele). Este é o Mūla-Kammaṭṭhāna (Objeto Raiz de Meditação). Ajahn Mun ensinava que toda paixão romântica cega e a compulsão sexual repousam sobre uma ilusão de ótica: nós só enxergamos a fração de milímetro da pele externa. Ao treinar a mente para visualizar o crânio sob o rosto, os dentes e os órgãos internos, a luxúria é extirpada e o medo da velhice evapora."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Tacamattapañcaka",
                "title": {
                      "en": "1. The Five Hair-and-Skin Roots (Mūla-Kammaṭṭhāna)",
                      "pt": "1. As Cinco Raízes de Pele e Cabelo (Mūla-Kammaṭṭhāna)"
                },
                "desc": {
                      "en": "The five foundational meditation themes given at ordination in the Thai Forest tradition: head hairs, body hairs, nails, teeth, skin. Reciting and visualizing them to undo physical vanity.",
                      "pt": "Os cinco temas dados na ordenação na tradição tailandesa: cabelos, pelos, unhas, dentes e pele. Recitando-os e visualizando-os para dissolver a vaidade física."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Ordination Pentad Recitation:</strong> Mentally sweep: <em>kesā, lomā, nakhā, dantā, taco</em> — and reverse: <em>taco, dantā, nakhā, lomā, kesā</em>. Notice that removed from the body, none of these are considered attractive.</p>",
                      "pt": "<p><strong>Recitação da Pêntade:</strong> Percorra mentalmente: <em>kesā, lomā, nakhā, dantā, taco</em> — e reverso: <em>taco, dantā, nakhā, lomā, kesā</em>. Note que arrancados do corpo, nenhum deles é atraente.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 119 §7</strong> and Thai Forest Vinaya ordination liturgy.</p>",
                      "pt": "<p><strong>MN 119 §7</strong> e a liturgia de ordenação do Vinaya na Floresta Tailandesa.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Paint on a Clay Doll:</strong> Scraping off the thin layer of pigment on a painted doll reveals only damp mud underneath.</p>",
                      "pt": "<p><strong>A Tinta no Boneco de Argila:</strong> Raspando a fina película de tinta colorida de um boneco, encontra-se apenas barro úmido por baixo.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Aṭṭhika-saññā",
                "title": {
                      "en": "2. The Bone Skeleton Meditation",
                      "pt": "2. A Meditação no Esqueleto Ósseo"
                },
                "desc": {
                      "en": "Penetrating beneath the flesh to see the calcium skeleton: skull, jaw, ribs, vertebrae, pelvis, and limbs. A mechanical armature held together by sinews.",
                      "pt": "Penetrando abaixo da carne para enxergar o esqueleto de cálcio: crânio, mandíbula, costelas, coluna e membros. Uma armadura mecânica sustentada por tendões."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Internal X-Ray Visualization:</strong> While sitting or walking, view yourself as an articulated skeleton walking through space. Observe people without seeing gender or status, only walking bone-frameworks.</p>",
                      "pt": "<p><strong>Visão Radiográfica Interior:</strong> Ao sentar ou andar, contemple-se como um esqueleto articulado movendo-se no espaço. Olhe para as pessoas vendo armações ósseas sem fetiches de gênero ou vaidade.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 5.61 (Aṭṭhikasaññā Sutta)</strong>: The bone meditation producing profound detachment from sensual lust.</p>",
                      "pt": "<p><strong>AN 5.61 (Aṭṭhikasaññā Sutta)</strong>: A meditação no esqueleto como antídoto fulminante contra a cobiça erótica.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Ven. Mahā-Tissa and the Laughing Woman (Visuddhimagga I):</strong> A monk seeing a woman laugh did not see a woman, but a set of white teeth in a skull, attaining arahantship on the spot.</p>",
                      "pt": "<p><strong>O Ven. Mahā-Tissa e a Mulher que Sorriu (Visuddhimagga I):</strong> Um monge ao ver uma mulher sorrir não viu uma mulher, mas dentes brancos brilhando num crânio, atingindo o despertar naquele instante.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Sīvathikā-manasikāra",
                "title": {
                      "en": "3. Charnel Ground Reflections on Mortality",
                      "pt": "3. Reflexões no Cemitério sobre a Mortalidade"
                },
                "desc": {
                      "en": "Contemplating bodies decaying in the cemetery: bloated, discolored, festering, stripped to bones scattered in all directions. Applying this directly: 'This body too will become like that.'",
                      "pt": "Contemplando corpos decompondo-se no crematório: inchados, azulados, roídos por vermes e reduzidos a ossos espalhados. Aplicando a si: 'Este meu corpo também tem essa natureza e terá esse mesmo fim'."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Ego Mortality Confrontation:</strong> Face the unvarnished biological destiny of your organism. Free yourself from the terror of aging and physical decline.</p>",
                      "pt": "<p><strong>Confronto com a Finitude:</strong> Encare o destino biológico inevitável do seu corpo. Liberte-se do pavor da velhice e da decadência física.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 119 §9–14</strong> and <strong>MN 10 §14–24</strong> (The Nine Charnel Ground Contemplations).</p>",
                      "pt": "<p><strong>MN 119 §9–14</strong> e <strong>MN 10 §14–24</strong> (As Nove Contemplações do Cemitério).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Decaying Log Cast into the Ditch:</strong> Once lifeless, the body is discarded like a piece of rotten driftwood, worthless and abandoned.</p>",
                      "pt": "<p><strong>O Tronco Podre Lançado na Vala:</strong> Sem vida, o corpo é abandonado como madeira carcomida levada pela correnteza, desprovido de valor.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Rāgakkhaya & Citta-visuddhi",
                "title": {
                      "en": "4. Total Destruction of Lust & Radiant Purity",
                      "pt": "4. Destruição Total da Cobiça & Pureza Radiante"
                },
                "desc": {
                      "en": "Through relentless investigation of the unattractive, the fever of sensual craving breaks. The mind rests in radiant, immaculate clarity, untouched by lust or repulsion.",
                      "pt": "Pela contemplação profunda do corpo nu, a febre do apego sensual se extingue. A mente repousa em claridade pura e imaculada, intocada pela cobiça ou repulsa."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Abiding in Pristine Coolness:</strong> Experience the liberation of having no sexual obsessions or bodily insecurities. Rest in the luminous freedom of the natural mind.</p>",
                      "pt": "<p><strong>Repousando no Frescor Puro:</strong> Experimente o alívio supremo de estar livre de obsessões eróticas e inseguranças estéticas. Descanse na pureza luminosa da mente natural.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 119 §17</strong>: Subduing attraction and revulsion completely (<em>aratiratisaho</em>).</p>",
                      "pt": "<p><strong>MN 119 §17</strong>: Superação definitiva de todo apego e aversão corpórea (<em>aratiratisaho</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Lotus Blossom Untouched by Muddy Water:</strong> Born from the mud and growing through murky water, the white blossom rests above the surface, spotless and pure.</p>",
                      "pt": "<p><strong>A Flor de Lótus Intocada pelo Lodo:</strong> Nascida na lama e crescendo na água turva, a flor branca desabrocha acima da superfície, imaculada e resplandecente.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Subjugation of Kāmarāga (Sensual Lust) & Anāgāmī Insight",
      "hindrances": [
        {
          "name": "Repulsion / Aversion",
          "remedy": "Do not cultivate disgust; cultivate objective clinical seeing like a surgeon examining anatomy."
        },
        {
          "name": "Sexual Compulsion (Kāmacchanda)",
          "remedy": "Immediately dissect the object of desire into skeleton, teeth, intestines, and bile."
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Obsessive sexual thoughts or addiction to pornography",
          "remedy": "Picture the person as an x-ray skeleton with internal organs; observe how desire instantly drops when the skin is stripped away."
        }
      ]
    },
    "layLife": {
      "feasibility": "High (Supreme antidote for consumer vanity and hyper-sexualized culture)",
      "dailySchedule": "Contemplate the 5 parts while brushing teeth, showering, or cutting nails.",
      "householdObstacles": "Fearing that body contemplation will ruin marital love; in reality, it removes selfish lust and deepens genuine affectionate care.",
      "ethicsDuty": "Sexual integrity (Kāmesu micchācārā veramaṇī): seeing bodies as Dhamma, not as toys for craving."
    },
    "paliTerms": [
      {
        "term": "Asubha",
        "meaning": "Unattractive / non-beautiful (anatomical reality of flesh)"
      },
      {
        "term": "Aṭṭhika",
        "meaning": "The bone skeleton contemplation"
      },
      {
        "term": "Kesā, Lomā, Nakhā, Dantā, Taco",
        "meaning": "Hair of head, body hair, nails, teeth, skin (the 5 ordination contemplations)"
      }
    ]
  },
  {
    "id": "thai-forest-ajahn-chah",
    "cluster": "thai-forest",
    "number": "16",
    "paliTitle": "Ajahn Chah Kammaṭṭhāna",
    "title": {
      "en": "Ajahn Chah — Natural Awareness & Still Flowing Water",
      "pt": "Ajahn Chah — Consciência Natural & A Água Parada que Flui"
    },
    "lineageTradition": {
      "en": "Thai Forest Tradition (Wat Nong Pah Pong / Amaravati)",
      "pt": "Tradição das Florestas da Tailândia (Wat Nong Pah Pong)"
    },
    "primaryMasters": "Ven. Ajahn Chah Subhaddo, Ven. Ajahn Sumedho, Ven. Ajahn Amaro, Ven. Ajahn Pasanno",
    "canonicalRef": "Rooted in AN 4.170, Dhammapada, Sutta Nipāta",
    "difficulty": "foundational",
    "difficultyLabel": {
      "en": "Foundations",
      "pt": "Fundamentos"
    },
    "recommendedPrereq": {
      "en": "Basic breath & posture",
      "pt": "Respiração básica e postura"
    },
    "whyStudy": {
      "en": "Supreme instruction for radical non-clinging in the midst of ordinary household and work activities.",
      "pt": "Instrução suprema para o desapego radical em meio às atividades cotidianas e profissionais."
    },
    "coreFocus": {
      "en": "Unconditional letting go (cāga), non-clinging awareness, welcoming suffering as the supreme teacher",
      "pt": "Renúncia incondicional (cāga), atenção sem apego, acolher o sofrimento como supremo mestre"
    },
    "primaryAnchor": {
      "en": "The natural knowing awareness (the 'One Who Knows' / Phū Rū), watching thoughts and feelings rise and vanish like visitors",
      "pt": "A consciência que sabe ('Aquele que Sabe' / Phū Rū), assistindo pensamentos e sensações surgirem e sumirem como visitantes"
    },
    "approachToJhana": {
      "en": "Deep calm arises naturally as a consequence of non-clinging; warning against getting hooked on meditative peace without investigating anicca",
      "pt": "A calma profunda brota como consequência do desapego; alerta constante contra viciar-se na paz meditativa sem investigar a inconstância"
    },
    "useOfNoting": {
      "en": "Simple, immediate recognition: 'It's not sure' (Aniccam / Mai nae), dropping analytical rumination instantly",
      "pt": "Reconhecimento simples e cortante: 'Não é certo' (Mai nae / Anicca), abandonando ruminações analíticas"
    },
    "tagline": {
      "en": "'If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace. If you let go completely, you will have complete peace.'",
      "pt": "'Se você soltar um pouco, terá um pouco de paz. Se soltar muito, terá muita paz. Se soltar completamente, terá paz completa.'"
    },
    "overview": {
      "en": "Ajahn Chah's teaching cuts straight to the bone of everyday delusion. Rather than isolating meditation to quiet cushions, he insisted that wisdom is forged right in the heat of daily frustrations, work, and monastic labor. His central metaphor of 'Still Flowing Water' reconciles tranquility and insight: the mind remains unshakeably still and peaceful, yet flows effortlessly to respond to whatever conditions present themselves. Everything that arises in the mind is seen with the master phrase: 'Mai nae' (It's not certain).",
      "pt": "O ensinamento de Ajahn Chah vai direto à raiz da ilusão. Em vez de isolar a meditação em almofadas silenciosas, ele insistia que a sabedoria é forjada no calor das frustrações diárias e do trabalho manual. Sua metáfora da 'Água Parada que Flui' reconcilia tranquilidade e insight: a mente repousa em serenidade inabalável, mas flui dinamicamente para responder à realidade. Tudo o que surge é acolhido com a expressão mestra: 'Mai nae' (Isto é incerto)."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Poo Roo (The One Who Knows)",
                "title": {
                      "en": "1. Resting in the 'One Who Knows' (Natural Awareness)",
                      "pt": "1. Repousando no 'Aquele Que Sabe' (Consciência Natural)"
                },
                "desc": {
                      "en": "Shifting identity from thoughts and emotions to bare awareness itself. Becoming the spectator of mental events rather than the actor caught in the drama.",
                      "pt": "Deslocando a identidade dos pensamentos e humores para a consciência testemunha pura. Tornando-se o espectador dos eventos mentais em vez de protagonista do drama."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Neutral Observer:</strong> Whatever arises—anger, joy, boredom—recognize: 'This is just a visitor passing through.' Do not welcome them, do not fight them; simply know.</p>",
                      "pt": "<p><strong>O Observador Imparcial:</strong> Seja o que for que brote—raiva, euforia, tédio—reconheça: 'Isto é apenas um visitante que passa'. Não convide para o chá nem brigue; apenas saiba.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Core teaching of Ajahn Chah: resting in the unconstructed knower (<em>buddho / poo roo</em>).</p>",
                      "pt": "<p>Ensinamento basilar de Ajahn Chah: descansar no conhecedor espontâneo (<em>buddho / poo roo</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Still Forest Pool (Ajahn Chah):</strong> A clear, still pool in the deep jungle: all kinds of wonderful and strange animals come to drink; you sit quietly under a tree and see them clearly without moving.</p>",
                      "pt": "<p><strong>A Lagoa Serena na Selva (Ajahn Chah):</strong> Uma lagoa límpida e mansa na floresta profunda: todos os animais selvagens e raros vêm beber de suas águas; você permanece sentado quieto sob a árvore e vê tudo sem se mover.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Mai Nae (Uncertainty / Anicca)",
                "title": {
                      "en": "2. The Universal Mantra: 'It's Not Certain' (Mai Nae)",
                      "pt": "2. O Mantra Universal: 'Não é Certo' (Mai Nae)"
                },
                "desc": {
                      "en": "Whenever the mind forms a rigid opinion, expectation, desire, or complaint, meet it instantly with Ajahn Chah's master key: 'Not sure!' (Mai Nae). Shattering dogmatism.",
                      "pt": "Sempre que a mente formar uma opinião rígida, queixa, expectativa ou apego, confronte-a na hora com a chave-mestra de Ajahn Chah: 'Não é certo!' (Mai Nae). Desfazendo o dogmatismo."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Disarming Mental Certainty:</strong> When you think 'I love this' or 'I hate this', apply: 'Mai Nae—it's impermanent, not certain.' Watch the emotional charge instantly deflate.</p>",
                      "pt": "<p><strong>Desarmando Certezas Rígidas:</strong> Quando pensar 'eu amo isto' ou 'não suporto aquilo', aplique: 'Mai Nae—isto não é certo, é impermanente'. Veja a carga emocional desinchar no mesmo instante.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Direct colloquial Thai rendering of the canonical truth of <em>anicca</em> (AN 3.136).</p>",
                      "pt": "<p>Tradução coloquial e direta da verdade canônica de <em>anicca</em> (AN 3.136).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Picking Up a Poisonous Snake:</strong> Grasping at anything in the world as 'mine' is like picking up a venomous cobra by the tail; if you don't drop it immediately, it bites.</p>",
                      "pt": "<p><strong>Agarrar a Cobra Venenosa:</strong> Agarrar-se a qualquer coisa no mundo como 'minha' é como segurar uma cobra venenosa pelo rabo; se não soltá-la de imediato, ela morde.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Still Flowing Water",
                "title": {
                      "en": "3. Experiencing 'Still, Flowing Water'",
                      "pt": "3. Vivenciando 'A Água Serena que Flui'"
                },
                "desc": {
                      "en": "Ajahn Chah's central paradox: have you ever seen still water? Yes. Have you ever seen flowing water? Yes. But have you ever seen still, flowing water? Still from within, flowing with conditions.",
                      "pt": "O paradoxo central de Ajahn Chah: você já viu água parada? Sim. Já viu água fluindo? Sim. Mas já viu água parada fluindo? Imóvel por dentro, fluindo com as circunstâncias."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Dynamic Equanimity in Action:</strong> The mind remains tranquil like deep spring water, yet responds effortlessly to conversation, chores, and difficulties without getting stuck.</p>",
                      "pt": "<p><strong>Equanimidade Dinâmica em Ação:</strong> A mente permanece mansa como água profunda de poço, mas responde sem esforço a conversas, tarefas e imprevistos sem ficar presa em nada.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>The integration of samatha (stillness) and vipassanā (flow) in everyday activity.</p>",
                      "pt": "<p>A integração viva de samatha (quietude) e vipassanā (fluxo) nas ações do cotidiano.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Still Flowing Water (Ajahn Chah):</strong> Wisdom arises right here: awareness is completely motionless, yet sights, sounds, and feelings flow smoothly through it like a stream over pebbles.</p>",
                      "pt": "<p><strong>A Água Serena que Flui (Ajahn Chah):</strong> A sabedoria brota aqui: a consciência está totalmente imóvel, enquanto visões, sons e sensações fluem por ela como um riacho sobre pedras lisas.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Dhammata (The Broken Glass)",
                "title": {
                      "en": "4. Seeing the Glass as Already Broken",
                      "pt": "4. Enxergando o Copo como Já Quebrado"
                },
                "desc": {
                      "en": "Ajahn Chah's celebrated glass contemplation: 'You see this drinking glass? To me, it is already broken. I enjoy it, I drink from it, but when the wind knocks it over, I say: Of course. It was already broken from the start.'",
                      "pt": "A célebre contemplação do copo de Ajahn Chah: 'Vê este copo de vidro? Para mim, ele já está quebrado. Eu o uso, bebo dele, mas quando o vento o derruba e ele se espatifa, eu digo: Claro. Desde o início ele já estava quebrado'."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Preemptive Radical Acceptance:</strong> Apply this to your possessions, health, relationships, and body: seeing their finite, fragile nature allows you to love and care for them fully without grasping.</p>",
                      "pt": "<p><strong>Aceitação Radical Antecipada:</strong> Aplique isto aos seus pertences, saúde, laços e corpo: ver sua natureza frágil permite cuidar e amar com plenitude, livre do desespero do apego.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>The ultimate fruition of <em>khayavayānupassanā</em> (contemplating dissolution).</p>",
                      "pt": "<p>O fruto maduro de <em>khayavayānupassanā</em> (a contemplação profunda da dissolução dos fenômenos).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Broken Glass (Ajahn Chah):</strong> When you understand that the glass is already broken, every moment drinking from it is precious, and its breaking brings zero grief.</p>",
                      "pt": "<p><strong>O Copo Já Quebrado (Ajahn Chah):</strong> Ao compreender que o copo já carrega sua quebra inevitável, cada gole bebido nele é precioso, e sua quebra não traz lágrima alguma.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "Whenever your partner, child, or coworker behaves unexpectedly, drop the urge to control: whisper 'Mai nae' (uncertain). Treat household cleaning, washing dishes, and commuting as equal arenas of meditation. Keep your mind like a spittoon: things fall in, but you don't own them.",
      "pt": "Quando seu parceiro, filho ou colega agir de forma imprevista, solte o impulso de controle: lembre-se 'Mai nae' (isto é incerto). Trate a limpeza da casa, lavar pratos e o trânsito como sessões autênticas de prática meditativa."
    },
    "keyPaliTerms": [
      {
        "term": "Phū Rū",
        "meaning": "The One Who Knows (the innate knowing nature of awareness)"
      },
      {
        "term": "Anicca (Mai nae)",
        "meaning": "Impermanent, uncertain, unstable"
      },
      {
        "term": "Cāga",
        "meaning": "Relinquishment, generous abandonment of ego"
      }
    ],
    "curriculumOrder": 4
  },
  {
    "id": "thai-forest-mn4-bhayabherava",
    "cluster": "thai-forest",
    "number": "17",
    "paliTitle": "Bhayabherava Sutta",
    "title": {
      "en": "Fear & Dread in the Wild Jungle — Conquering Panic in Solitude",
      "pt": "Medo e Pavor na Selva — A Conquista do Pânico na Solitude"
    },
    "lineageTradition": {
      "en": "Thai Forest Wilderness Lineage (Thudong Asceticism)",
      "pt": "Linhagem de Floresta Tailandesa (Ascetismo Thudong)"
    },
    "primaryMasters": "Gotama Buddha, Ven. Ajahn Mun Bhūridatto, Ven. Ajahn Maha Boowa",
    "canonicalRef": "MN 4 (Majjhima Nikāya 4)",
    "difficulty": "intermediate",
    "curriculumOrder": 5,
    "difficultyLabel": {
      "en": "Intermediate",
      "pt": "Intermediário"
    },
    "recommendedPrereq": {
      "en": "Foundations (Snp 1.3, MN 19, MN 119)",
      "pt": "Fundamentos (Snp 1.3, MN 19, MN 119)"
    },
    "whyStudy": {
      "en": "The supreme training on facing panic and terror. The Buddha's golden rule for conquering fear: never change posture when fear strikes; stay still until fear dies.",
      "pt": "O treinamento supremo sobre enfrentar o pânico e o terror. A regra de ouro do Buda: nunca mude de postura quando o medo atacar; fique imóvel até que o pavor morra."
    },
    "coreFocus": {
      "en": "Direct confrontation with fear, somatic panic, darkness, and danger in total solitude without fleeing",
      "pt": "Confronto direto com o medo, o pânico somático, a escuridão e o perigo na solitude sem fugir"
    },
    "primaryAnchor": {
      "en": "The motionless posture and unyielding anchor in Buddho / Breath right in the center of trembling sensation",
      "pt": "A postura imóvel e a âncora inabalável em Buddho / Respiração bem no olho do furacão do tremor somático"
    },
    "approachToJhana": {
      "en": "When terror is investigated without moving, the adrenaline crashes and the mind collapses inward into unbreakable heroic stillness",
      "pt": "Quando o terror é investigado sem fuga física, a adrenalina colapsa e a mente mergulha numa quietude heróica inabalável"
    },
    "useOfNoting": {
      "en": "Catching the monkey mind projecting ghosts or predators: 'A twig snapped, wind blew—why fabricate monsters?'",
      "pt": "Flagrar a mente projetando monstros ou perigos: 'Um galho quebrou, o vento soprou — por que inventar demônios?'"
    },
    "tagline": {
      "en": "'While I walked, if fear and dread came upon me, I neither stood nor sat nor lay down until I had subdued that fear while still walking.'",
      "pt": "'Se o medo e o pavor surgissem enquanto eu caminhava, não parava nem sentava até ter subjugado aquele medo ainda andando.'"
    },
    "overview": {
      "en": "MN 4 is the sacred charter of the Thai Forest wandering monk (Thudong). Disciples of Ajahn Mun were sent into wild jungles inhabited by tigers, poisonous vipers, and superstitious villagers believing in ghosts. The Buddha's instruction in this sutta is absolute: if fear strikes while you are walking, keep walking until it ceases; if it strikes while sitting, do not move a muscle until the panic dissolves. When fear dies, fearlessness takes its place.",
      "pt": "O MN 4 é a carta sagrada do monge peregrino da selva (Thudong). Os discípulos de Ajahn Mun eram enviados para florestas densas povoadas por tigres, cobras venenosas e mitos sobre espíritos. A instrução do Buda neste sutta é absoluta: se o pânico surgir enquanto você caminha, continue caminhando até que ele cesse; se surgir sentado, não mova um músculo até que o tremor se desfaça. Quando o medo morre, a intrepidez assume o seu lugar."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Arañña-senāsana",
                "title": {
                      "en": "1. Dwelling in Deep, Haunting Jungle Solitude",
                      "pt": "1. Habitando na Solitude Assombrosa da Selva"
                },
                "desc": {
                      "en": "Entering remote jungle tracts on terrifying nights—the new moon, the fourteenth, the full moon—to face raw primal fear and psychological dread directly.",
                      "pt": "Penetrando clareiras remotas da selva em noites apavorantes—lua nova, décimo quarto dia e lua cheia—para confrontar o terror primal e o pânico psicológico de frente."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Stepping into the Edge:</strong> Do not run away from discomfort or fear. Choose moments of quiet darkness to sit face-to-face with anxiety.</p>",
                      "pt": "<p><strong>Dando um Passo no Limite:</strong> Não fuja do desconforto ou do medo. Escolha momentos de silêncio e escuridão para sentar-se cara a cara com a ansiedade.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 4 §3–5</strong>: The Buddha describes his pre-Awakening ascetic jungle trials.</p>",
                      "pt": "<p><strong>MN 4 §3–5</strong>: O Buda relata suas provas ascéticas na selva pré-Iluminação.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Twig Snapping in the Dark Jungle (MN 4 §20):</strong> A peacock breaks a twig, the wind rustles leaves, or an animal scurries: the fearful mind screams: 'Here comes the demon!'</p>",
                      "pt": "<p><strong>O Galho que Estala na Escuridão (MN 4 §20):</strong> Um pavão quebra um galho, o vento agita folhas ou um bicho corre: a mente apavorada grita: 'Lá vem o demônio!'</p>"
                }
          },
          {
                "step": 2,
                "pali": "Iriyāpatha-adhitthāna",
                "title": {
                      "en": "2. Freezing in the Exact Posture When Terror Strikes",
                      "pt": "2. Mantendo a Mesma Postura Quando o Pânico Ataca"
                },
                "desc": {
                      "en": "The Buddha's iron rule of fearlessness: 'If fear and dread came upon me while walking, I would not sit, stand, or lie down until I had subdued that fear and dread while walking.'",
                      "pt": "A regra de ferro do Buda contra o medo: 'Se o medo e o pavor me sobreviessem caminhando, eu não sentava, parava ou deitava até ter subjugado aquele medo caminhando'."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Non-Reactive Somatic Resolve:</strong> If fear strikes while sitting, remain sitting! Do not fidget, reach for your phone, or pace. Hold your ground until panic burns out its own fuel.</p>",
                      "pt": "<p><strong>Determinação Somática Firme:</strong> Se o pânico bater enquanto você está sentado, continue sentado! Não mexa no celular nem fuja. Fique firme até que o medo queime todo o combustível.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 4 §20</strong>: The Bodhisatta's supreme somatic confrontation with fear across the four postures.</p>",
                      "pt": "<p><strong>MN 4 §20</strong>: O método somático inabalável do Bodhisatta enfrentando o medo nas quatro posturas.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Immovable Boulder in the Gale:</strong> A giant granite boulder resting on bedrock does not shudder, lean, or roll away when lashed by gale-force winds.</p>",
                      "pt": "<p><strong>O Rochedo de Granito na Vendaval:</strong> Um rochedo maciço fincado na rocha viva não treme, inclina ou rola ao ser chicoteado por ventos uivantes.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Parisuddha-sīla & Akodhata",
                "title": {
                      "en": "3. Conquering Fear through Inward Purity & Goodwill",
                      "pt": "3. Vencendo o Medo pela Pureza Interior & Benevolência"
                },
                "desc": {
                      "en": "Investigating the root of dread: fear only grips those with unpurified ethics, unabandoned cruelty, covetousness, or dullness. Pure ethics and boundless loving-kindness make the heart lion-like.",
                      "pt": "Investigando a raiz do pânico: o terror só subjuga quem tem conduta manchada, rancores não abandonados ou cobiça. A integridade ética e a benevolência tornam o coração corajoso como o do leão."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Shield of Harmlessness:</strong> Radiate pure love toward the wilderness and all creatures. Harmlessness removes the biological anticipation of retaliation.</p>",
                      "pt": "<p><strong>O Escudo da Não-Violência:</strong> Irradie afeto puro para a selva e todos os seres. Não cultivar ódio elimina o medo visceral de revide.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 4 §6–19</strong>: Analyzing the sixteen psychological flaws that make forest dwellers cowardly.</p>",
                      "pt": "<p><strong>MN 4 §6–19</strong>: Analisando as dezesseis falhas mentais que tornam o eremita medroso.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Lion Roaring in the Jungle (AN 10.21):</strong> The lion steps out of its lair, looks around fearlessly, and roars three times without dread of any beast.</p>",
                      "pt": "<p><strong>O Rugido do Leão na Selva (AN 10.21):</strong> O leão sai de sua caverna, olha ao redor sem susto e ruge três vezes sem temer qualquer predador da floresta.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Catuttha-jhāna & Tevijjā",
                "title": {
                      "en": "4. The 4th Jhāna & The Threefold True Knowledge",
                      "pt": "4. O 4º Jhāna & O Triplo Conhecimento Supremo"
                },
                "desc": {
                      "en": "With fear totally subdued and energy unflagging, mindfulness becomes pure and equanimous in the 4th Jhāna. The mind breaks through into the three transcendent knowledges.",
                      "pt": "Com o medo totalmente subjugado e a determinação inabalável, a atenção torna-se pura e equânime no 4º Jhāna. A mente rompe rumo aos três conhecimentos transcendentais."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Reaping the Fruits of Courage:</strong> The energy previously consumed by anxiety is now harnessed for diamond-like samādhi and penetrating insight.</p>",
                      "pt": "<p><strong>Colhendo a Vitória da Coragem:</strong> A energia antes drenada pelo pânico é agora convertida em foco afiado e discernimento libertador.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 4 §27–34</strong>: Detailed account of the Bodhisatta entering the 4 Jhānas and attaining Awakening.</p>",
                      "pt": "<p><strong>MN 4 §27–34</strong>: O relato detalhado do Bodhisatta adentrando os 4 Jhānas e realizando a Iluminação.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Sunrise Banishing All Shadows:</strong> The sun climbs over the mountain peak, flooding the darkest jungle valleys with blazing light and warmth.</p>",
                      "pt": "<p><strong>A Aurora Dissipando Todas as Sombras:</strong> O sol ergue-se sobre o cume da montanha, inundando os vales mais escuros com luz dourada e calor.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Complete Eradication of Terror & Access to 4th Jhāna",
      "hindrances": [
        {
          "name": "Panic & Fight-or-Flight Reactions",
          "remedy": "Anchor in the Buddha's posture rule: do not move until the adrenaline peak subsides."
        },
        {
          "name": "Paranoid Mental Projections",
          "remedy": "See imagination as anicca and empty fabrications (saṅkhārā)."
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Nighttime panic attacks, fear of darkness, or health anxiety",
          "remedy": "Sit upright in dark room; repeat 'Buddho' continuously; allow the sensations to peak without fleeing. They always collapse within minutes."
        }
      ]
    },
    "layLife": {
      "feasibility": "High (Direct medicine for panic attacks, agoraphobia, and medical fear)",
      "dailySchedule": "Sit in complete darkness for 20 minutes without checking phone or turning on lights.",
      "householdObstacles": "Panicking over financial uncertainty or medical diagnoses; remember the physical body was never guaranteed safety.",
      "ethicsDuty": "Fearlessness through harmlessness: refusing to act out of cowardice or panic."
    },
    "paliTerms": [
      {
        "term": "Bhayabherava",
        "meaning": "Fear and dread / wild terror in isolation"
      },
      {
        "term": "Abhaya",
        "meaning": "Fearlessness / the state of unshakeable refuge"
      },
      {
        "term": "Thudong",
        "meaning": "Ascetic wandering practice in remote wilderness"
      }
    ]
  },
  {
    "id": "thai-forest-mn36-mahasaccaka",
    "cluster": "thai-forest",
    "number": "18",
    "paliTitle": "Mahāsaccaka Sutta",
    "title": {
      "en": "The Bodhisatta's Jungle Quest & The Rose-Apple Tree Jhāna",
      "pt": "As Austeridades do Bodhisatta & A Macieira-Rosa"
    },
    "lineageTradition": {
      "en": "Thai Forest Wilderness Lineage (Kammaṭṭhāna)",
      "pt": "Linhagem de Floresta Tailandesa (Kammaṭṭhāna)"
    },
    "primaryMasters": "Gotama Buddha, Saccaka the debater, Ven. Ajahn Brahmavamso",
    "canonicalRef": "MN 36 (Majjhima Nikāya 36)",
    "difficulty": "intermediate",
    "curriculumOrder": 6,
    "difficultyLabel": {
      "en": "Intermediate",
      "pt": "Intermediário"
    },
    "recommendedPrereq": {
      "en": "MN 4 (Bhayabherava Sutta)",
      "pt": "MN 4 (Bhayabherava Sutta)"
    },
    "whyStudy": {
      "en": "The central discourse demonstrating that harsh self-mortification fails, and that blameless, peaceful joy (sukha) through Jhāna is the genuine vehicle for liberating insight.",
      "pt": "O discurso central que demonstra que a auto-tortura e a culpa religiosa falham, e que a alegria mansa e límpida (sukha) dos Jhānas é o veículo real do despertar."
    },
    "coreFocus": {
      "en": "Transcending self-punishing spiritual aggression, rediscovering spontaneous unworldly bliss, the 4 Jhānas as the Middle Way",
      "pt": "Superar o ascetismo punitivo, resgatar a alegria meditativa não-sensual, os 4 Jhānas como o Caminho do Meio"
    },
    "primaryAnchor": {
      "en": "The blameless, peaceful delight of quiet presence (Nirāmisa Sukha) untainted by sensual greed",
      "pt": "A alegria pura e pacífica da quietude meditativa (Nirāmisa Sukha), livre de cobiça mundana"
    },
    "approachToJhana": {
      "en": "Recognizing that spiritual bliss is not a dangerous trap: relaxing the nervous system so joy coalesces naturally into absorption",
      "pt": "Reconhecer que a alegria meditativa não é um pecado ou armadilha: relaxar o sistema nervoso para que a alegria se una em absorção"
    },
    "useOfNoting": {
      "en": "Checking for subtle spiritual masochism or guilt: 'Why am I afraid of pleasure that has nothing to do with sensual craving?'",
      "pt": "Verificar a culpa ou masoquismo espiritual: 'Por que temo um contentamento que nada tem a ver com prazeres mundanos?'"
    },
    "tagline": {
      "en": "'Why do I fear that pleasure which has nothing to do with sensual desires and unwholesome states? I do not fear that pleasure!'",
      "pt": "'Por que temo eu esse prazer que nada tem a ver com os desejos sensuais e estados prejudiciais? Eu não temo esse prazer!'"
    },
    "overview": {
      "en": "In MN 36, the Buddha gives the definitive account of his six years of extreme austerities in the jungle of Uruvelā: clenching teeth until sweat poured, stopping his breath until his skull felt pierced, and starving until his spine looked like a row of beads. Realizing this brings only physical exhaustion without insight, he remembers sitting under the cool shade of a rose-apple tree as a boy and entering the 1st Jhāna. He asks the historic question: 'Could this be the path to awakening?' Ajahn Brahm and Thai masters treat this sutta as the antidote to spiritual burnout and grim meditation.",
      "pt": "No MN 36, o Buda relata os seis anos de austeridades extremas na selva de Uruvelā: trincar os dentes até escorrer suor, prender a respiração até sentir a cabeça furada e jejuar até sua coluna parecer um colar de contas. Percebendo que isso só gerava exaustão corporal sem sabedoria, ele recordou quando, menino, sentou-se à sombra fresca de uma macieira-rosa e atingiu espontaneamente o 1º Jhāna. Fez a pergunta histórica: 'Seria este o caminho para o despertar?' Ajahn Brahm e os mestres da floresta tratam este sutta como o antídoto à queima espiritual e à meditação austera amarga."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Attakilamathānuyoga-pahāna",
                "title": {
                      "en": "1. The Futility of Severe Bodily Mortification",
                      "pt": "1. A Futilidade da Mortificação Corpórea Extrema"
                },
                "desc": {
                      "en": "The Bodhisatta pushes physical asceticism to the brink: teeth clenching, non-breathing meditation, extreme starvation until skin sticks to spine. Realizing: this is not the path to awakening.",
                      "pt": "O Bodhisatta leva a mortificação ao limite: travar mandíbulas, reter a respiração, jejuar até a pele colar na espinha. Reconhecendo: este não é o caminho da libertação."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Abandoning Ascetic Aggression:</strong> Recognize that punishing the body through harsh tension does not destroy spiritual ignorance. Release mechanical self-torture.</p>",
                      "pt": "<p><strong>Abandonando a Agressividade Ascética:</strong> Compreenda que punir o corpo com tensão rígida não extingue a ignorância. Abandone a autoflagelação mecânica.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 36 §20–30</strong>: The three similes of lighting fire with wet saplings vs dry wood on dry ground.</p>",
                      "pt": "<p><strong>MN 36 §20–30</strong>: Os três símiles de tentar acender fogo com gravetos úmidos na água versus madeira seca em terra firme.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Wet Sapling in Water (MN 36 §17):</strong> Trying to light a fire by rubbing a damp stick retrieved from water; only exhaustion and smoke result.</p>",
                      "pt": "<p><strong>O Graveto Molhado na Água (MN 36 §17):</strong> Tentar produzir fogo friccionando um pedaço de madeira verde recém-tirado da água; só colhe cansaço e fumaça.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Jambu-cchāyā-jhāna",
                "title": {
                      "en": "2. The Rose-Apple Tree Jhāna Epiphany",
                      "pt": "2. A Epifania do Jhāna sob a Macieira-Rosa"
                },
                "desc": {
                      "en": "Recalling the spontaneous childhood experience sitting under the cool shade of the rose-apple tree: entering the 1st Jhāna effortlessly. 'Could this be the true path to Awakening?'",
                      "pt": "Rememorando a experiência espontânea de infância sob a sombra fresca da macieira-rosa: entrando no 1º Jhāna sem esforço violento. 'Seria este o verdadeiro caminho do Despertar?'"
                },
                "practiceInstructions": {
                      "en": "<p><strong>Reconnecting with Natural Joy:</strong> Allow concentration to be sweet, spacious, and organic rather than forced and strained. Joy born of seclusion is the gateway.</p>",
                      "pt": "<p><strong>Reconectando com a Alegria Natural:</strong> Permita que a concentração seja doce, espaçosa e orgânica, não rígida. O júbilo do recolhimento é a porta de entrada.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 36 §31</strong>: 'Following that memory came the realization: That is the path to Awakening.'</p>",
                      "pt": "<p><strong>MN 36 §31</strong>: 'Seguindo aquela memória veio a certeza: Esse é o verdadeiro caminho para a Iluminação.'</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Shade of the Rose-Apple Tree:</strong> Sheltered from the burning midday sun while the king plowed the fields; pure, gentle, and refreshing stillness.</p>",
                      "pt": "<p><strong>A Sombra da Macieira-Rosa:</strong> Abrigado do sol incandescente do meio-dia enquanto os lavradores aravam a terra; quietude suave e revigorante.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Sukha-anallīnatā",
                "title": {
                      "en": "3. Embracing the Blameless Bliss of Seclusion",
                      "pt": "3. Abraçando o Bem-Estar Imaculado do Recolhimento"
                },
                "desc": {
                      "en": "The Bodhisatta overcomes his fear of pleasure: 'Why should I fear that pleasure that has nothing to do with sensual desire and unwholesome states?' Nourishing the body with solid food.",
                      "pt": "O Bodhisatta supera o medo do bem-estar meditativo: 'Por que temeria eu esse bem-estar que nada tem a ver com cobiça sensual ou estados nocivos?' Nutrindo o corpo com alimento."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Befriending Meditation Joy:</strong> Do not be afraid of feeling joy, peaceful bliss, and emotional warmth in sitting. This blameless ease is your greatest ally.</p>",
                      "pt": "<p><strong>Acolhendo o Conforto Meditativo:</strong> Não tema sentir alegria e bem-estar na prática. Essa paz sem culpa é a maior aliada para aprofundar o silêncio.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 36 §32–33</strong>: Abandoning the ascetic neurosis against pleasure.</p>",
                      "pt": "<p><strong>MN 36 §32–33</strong>: Abandonando a aversão neurótica ascética contra o bem-estar espiritual.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Dry Stick on Dry Land (MN 36 §19):</strong> Rubbing dry wood on dry land easily kindles bright, pure, warming flames.</p>",
                      "pt": "<p><strong>A Madeira Seca em Terra Firme (MN 36 §19):</strong> Friccionando gravetos secos longe da umidade, acende-se facilmente uma chama pura e calorosa.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Majjhimā-paṭipadā-bodhi",
                "title": {
                      "en": "4. The Middle Way & Supreme Awakening",
                      "pt": "4. O Caminho do Meio & O Despertar Supremo"
                },
                "desc": {
                      "en": "Ascending through the 4 Jhānas, applying the unified mind to the 3 True Knowledges: remembering past lives, divine eye of kamma, and destroying the taints.",
                      "pt": "Ascendendo pelos 4 Jhānas, aplicando a mente unificada aos Três Conhecimentos: vidas passadas, olho divino do kamma e destruição das contaminações."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Balanced Liberation:</strong> Walk the Middle Path avoiding both sensual self-indulgence and aggressive self-mortification. Rest in awakened freedom.</p>",
                      "pt": "<p><strong>Libertação Equilibrada:</strong> Trilhe o Caminho do Meio evitando tanto a indulgência sensorial quanto a autoflagelação agressiva. Repouse na sabedoria desperta.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 36 §34–44</strong>: The comprehensive canonical narrative of Siddhartha Gautama's full enlightenment.</p>",
                      "pt": "<p><strong>MN 36 §34–44</strong>: O relato canônico completo da Iluminação de Siddhartha Gautama.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Full Moon Emerging from Behind Dark Clouds:</strong> Pure, untroubled, illuminating all world systems in flawless equanimity.</p>",
                      "pt": "<p><strong>A Lua Cheia Emergindo de Nuvens Escuras:</strong> Pura, inabalável, iluminando o universo com serenidade absoluta.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Mastery of 4 Jhānas & Realization of the Middle Way",
      "hindrances": [
        {
          "name": "Spiritual Guilt / Ascetic Rigidity",
          "remedy": "Remember the Buddha's question: 'Why fear a pleasure that has nothing to do with sensual craving?'"
        },
        {
          "name": "Restlessness & Straining",
          "remedy": "Soften the body and open the chest; meditation flourishes in ease, not tension."
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Severe headaches or tension in the forehead during meditation sits",
          "remedy": "You are pushing too hard with mental force. Open your hands, breathe with your whole body, and smile slightly."
        }
      ]
    },
    "layLife": {
      "feasibility": "Exceptional (Liberates meditators from grim effort and perfectionism)",
      "dailySchedule": "Start each sit by deliberately cultivating ease and gratitude before focusing on breath.",
      "householdObstacles": "Viewing meditation as another chore or performance goal; treat it as the coolest sanctuary of your day.",
      "ethicsDuty": "Compassion toward oneself: abandoning harsh self-criticism."
    },
    "paliTerms": [
      {
        "term": "Nirāmisa Sukha",
        "meaning": "Spiritual joy / unworldly pleasure free from sensual appetite"
      },
      {
        "term": "Attakilamatha",
        "meaning": "Self-mortification and punitive asceticism"
      },
      {
        "term": "Majjhimā Paṭipadā",
        "meaning": "The Middle Way between hedonism and self-harm"
      }
    ]
  },
  {
    "id": "thai-forest-ajahn-lee",
    "cluster": "thai-forest",
    "number": "19",
    "paliTitle": "Ajahn Lee Ānāpāna-Kammaṭṭhāna",
    "title": {
      "en": "Ajahn Lee Dhammadharo — Breath Energy & Somatic Circulation",
      "pt": "Ajahn Lee Dhammadharo — Energia da Respiração & Circulação Somática"
    },
    "lineageTradition": {
      "en": "Thai Forest Tradition (Wat Asokaram / Thanissaro Bhikkhu Lineage)",
      "pt": "Tradição das Florestas (Wat Asokaram / Linhagem de Thanissaro Bhikkhu)"
    },
    "primaryMasters": "Ven. Ajahn Lee Dhammadharo, Ven. Thanissaro Bhikkhu (Metta Forest Monastery)",
    "canonicalRef": "Rooted in MN 118, MN 119 (Kāyagatāsati Sutta), MN 140",
    "difficulty": "intermediate",
    "difficultyLabel": {
      "en": "Intermediate",
      "pt": "Intermediário"
    },
    "recommendedPrereq": {
      "en": "Basic breath awareness",
      "pt": "Consciência básica da respiração"
    },
    "whyStudy": {
      "en": "Teaches how to spread breath energy through the somatic nerves to dissolve physical knots and enter jhāna.",
      "pt": "Ensina a circular a energia da respiração pelos nervos para dissolver bloqueios físicos e entrar em jhāna."
    },
    "coreFocus": {
      "en": "Breath energy (vāyodhātu) active circulation throughout the entire nervous system to induce buoyant Samādhi and deep healing",
      "pt": "Circulação ativa da energia da respiração (vāyodhātu) por todo o sistema nervoso gerando Samādhi radiante e cura somática"
    },
    "primaryAnchor": {
      "en": "The breath sensation explored at multiple energy focal points (base of skull, solar plexus, throat, bridge of nose)",
      "pt": "A sensação da respiração explorada em múltiplos pontos focais energéticos (nuca, plexo solar, garganta, dorso nasal)"
    },
    "approachToJhana": {
      "en": "Systematic entry into the 4 Jhānas by expanding refined, comfortable breath energy until it completely fills the whole biological frame",
      "pt": "Entrada metódica nos 4 Jhānas pela expansão da energia da respiração confortável até preencher todo o corpo biológico"
    },
    "useOfNoting": {
      "en": "Somatic evaluation (vicāra) and directed thought (vitakka): actively experimenting with breath length, heaviness, lightness, and temperature",
      "pt": "Avaliação somática (vicāra) e pensamento direcionado (vitakka): ajustando ativamente o ritmo, leveza e temperatura do ar"
    },
    "tagline": {
      "en": "Transforming the breath into an organic home, a medicinal nectar, and a vehicle for sublime meditative absorption.",
      "pt": "Transformando a respiração em refúgio orgânico, remédio natural e veículo para a sublime absorção meditativa."
    },
    "overview": {
      "en": "Ajahn Lee Dhammadharo, one of the foremost disciples of Ajahn Mun, revolutionized breath meditation by treating the breath not merely as air entering nostrils, but as an all-pervading dynamic life energy (vāyo). In his famous 'Method 2' (Keeping the Breath in Mind), the practitioner learns to direct and spread breath sensations down the spine, into the brain, through the chest, internal organs, and out to the tips of fingers and toes. This eliminates physical fatigue, dissolves bodily knots, and establishes an unshakeable foundation for Jhāna.",
      "pt": "Ajahn Lee Dhammadharo, eminente discípulo de Ajahn Mun, revolucionou a meditação da respiração ao tratá-la não apenas como ar nas narinas, mas como energia vital dinâmica (vāyo) que permeia o corpo inteiro. Em seu célebre 'Método 2', o praticante aprende a direcionar a respiração pela coluna, cérebro, peito, órgãos internos e extremidades. Isso elimina a fadiga física, dissolve couraças corporais e estabelece uma base inabalável para os Jhānas."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Satta-kāyānupassanā-ṭhāna",
                "title": {
                      "en": "1. Locating the 7 Primary Breath Centers",
                      "pt": "1. Localizando os 7 Centros Primários da Respiração"
                },
                "desc": {
                      "en": "Ajahn Lee's Method 2: anchoring awareness at 7 subtle breath hubs in the body: base of the skull, middle of the head, palate/throat, solar plexus, navel, base of spine, chest.",
                      "pt": "O Método 2 de Ajahn Lee: ancorar a atenção em 7 centros sutis de energia no corpo: base do crânio, centro da cabeça, garganta, plexo solar, umbigo, base da coluna e peito."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Breath Hub Grounding:</strong> Choose one base center (e.g. the solar plexus or base of skull). Breathe in and out gently, establishing a comfortable warmth and softness at that spot.</p>",
                      "pt": "<p><strong>Ancoragem nos Centros:</strong> Escolha um ponto base (ex.: plexo solar ou base do crânio). Respire suavemente, estabelecendo calor e maciez naquele ponto exato.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Ajahn Lee Dhammadharo's master manual: <em>Keeping the Breath in Mind & Lessons in Samādhi</em>.</p>",
                      "pt": "<p>O clássico manual de Ajahn Lee Dhammadharo: <em>Guardando a Respiração na Mente & Lições de Samādhi</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Weaver Connecting the Threads:</strong> Carefully tying the warp and weft threads together on the loom so the cloth forms without gaps or tears.</p>",
                      "pt": "<p><strong>O Tecelão Unindo os Fios:</strong> Entrelaçando os fios no tear com precisão para que o tecido se forme macio e sem falhas.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Assāsa-passāsa-samatā",
                "title": {
                      "en": "2. Refining & Balancing the In-and-Out Breath",
                      "pt": "2. Refinando & Harmonizando o Fôlego"
                },
                "desc": {
                      "en": "Experimenting with breath textures: long in and long out; short in and short out; long in and short out; heavy, light, cool, warm. Tuning until the breath is completely harmonious.",
                      "pt": "Experimentando texturas respiratórias: longo e longo; curto e curto; longo e curto; leve, denso, fresco ou quente. Ajustando até o fôlego fluir em harmonia total."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Somatic Airflow Calibration:</strong> Do not force an uncomfortable rhythm. Find the exact depth and speed that makes the heart and lungs feel nourished and at ease.</p>",
                      "pt": "<p><strong>Calibração Somática do Fôlego:</strong> Não force ritmos artificiais. Encontre a profundidade que nutre o peito e traz alívio imediato ao sistema nervoso.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Steps 1–4 of Ānāpānasati Sutta (MN 118) applied as practical internal bio-energetic calibration.</p>",
                      "pt": "<p>Passos 1 a 4 do Ānāpānasati Sutta (MN 118) aplicados como calibração bioenergética prática.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Adjusting the Tuning Pegs of a Violin:</strong> Turning the pegs micro-millimeter by micro-millimeter until every string sounds in resonant, sweet concord.</p>",
                      "pt": "<p><strong>Ajustando as Cravelhas do Violino:</strong> Girando milímetro a milímetro até que cada corda vibre em harmonia doce e perfeita.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Vāyodhātu-vitthārikā",
                "title": {
                      "en": "3. Spreading Breath Energy Through the Whole Body",
                      "pt": "3. Irradiando a Energia da Respiração por Todo o Corpo"
                },
                "desc": {
                      "en": "Guiding the refined breath energy from the spine out through nerves, down shoulders, arms, hands, fingers, hips, legs, feet, and toes. Permeating every organ with oxygenated vitality.",
                      "pt": "Conduzindo a energia sutil da respiração da coluna para os nervos, ombros, braços, mãos, quadris, pernas e pés. Permeando cada órgão com vitalidade oxigenada."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Whole-Body Breath Circulation:</strong> Direct the pleasant sensations along nerve channels like irrigation water flooding parched soil. Dissolve blockages, knots, and headaches.</p>",
                      "pt": "<p><strong>Circulação Energética Plena:</strong> Conduza a sensação agradável pelos canais nervosos como água irrigando terra ressecada. Desfaça nós musculares e dores de cabeça.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 119 §18</strong>: The first Jhāna simile of water kneaded into bath powder until all parts are moistened.</p>",
                      "pt": "<p><strong>MN 119 §18</strong>: O símile do 1º Jhāna da água sovada no pó de banho até permeá-lo por completo.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Water Flowing Through Irrigation Canals:</strong> Sluice gates open in the paddy fields, and water streams smoothly into every thirsty furrow.</p>",
                      "pt": "<p><strong>A Água Fluindo pelos Canais de Irrigação:</strong> As comportas se abrem e a água fresca irriga cada sulco da plantação ressecada.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Ekībhāva & Citta-samādhi",
                "title": {
                      "en": "4. Merging into Pristine Porous Stillness",
                      "pt": "4. Fundindo-se na Quietude Pura e Translúcida"
                },
                "desc": {
                      "en": "Coarse inhalation and exhalation quiet down completely. The body breathes effortlessly through every pore. Consciousness merges with an all-pervading, radiant field of peace.",
                      "pt": "A inspiração e expiração grosseiras silenciam por completo. O corpo parece respirar suavemente pelos poros. A consciência funde-se num campo radiante de paz profunda."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Effortless Absorption:</strong> Stop manipulating the breath. Rest in the luminous spaciousness of the unified mind (<em>samādhi</em>).</p>",
                      "pt": "<p><strong>Absorção sem Esforço:</strong> Cesse qualquer controle da respiração. Repouse na amplitude luminosa da mente unificada (<em>samādhi</em>).</p>"
                },
                "canonicalBasis": {
                      "en": "<p>The 4th Jhāna where in-and-out breath ceases (<em>assāsapassāsā niruddhā honti</em>, SN 36.11).</p>",
                      "pt": "<p>O 4º Jhāna onde a respiração física pulmonar aquieta-se por completo (SN 36.11).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Luminous Moon Reflected in a Mountain Lake:</strong> Still, bright, vast, and utterly untroubled by currents.</p>",
                      "pt": "<p><strong>O Luar Refletido no Lago da Montanha:</strong> Imóvel, translúcido, imenso e sem qualquer ondulação perturbadora.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "Ideal for relieving physical exhaustion, headaches, and computer fatigue. Before sitting down to meditate after work, spend 10 minutes intentionally sweeping warm, gentle breath energy through tense neck and shoulder muscles.",
      "pt": "Excepcional para combater exaustão física, cefaleias e fadiga visual de telas. Antes de meditar após o trabalho, dedique 10 minutos varrendo a respiração suave pelos ombros e trapézios tensos."
    },
    "keyPaliTerms": [
      {
        "term": "Vāyodhātu",
        "meaning": "The wind or motion element; subtle somatic breath energy"
      },
      {
        "term": "Vitakka & Vicāra",
        "meaning": "Directed thought and evaluation (adjusting the breath comfort)"
      },
      {
        "term": "Pharaṇa",
        "meaning": "Pervasion, suffusion of breath and rapture throughout the physical frame"
      }
    ],
    "curriculumOrder": 7
  },
  {
    "id": "thai-forest-ajahn-brahm",
    "cluster": "thai-forest",
    "number": "20",
    "paliTitle": "Ajahn Brahm Samādhi-Jhāna",
    "title": {
      "en": "Ajahn Brahm — The 7 Stages to Stillness & Luminous Jhānas",
      "pt": "Ajahn Brahm — Os 7 Estágios para a Quietude & Jhānas Luminosos"
    },
    "lineageTradition": {
      "en": "Western Thai Forest Tradition (Bodhinyana Monastery, Australia)",
      "pt": "Tradição das Florestas Ocidental (Mosteiro Bodhinyana, Austrália)"
    },
    "primaryMasters": "Ven. Ajahn Brahmavamso (disciple of Ajahn Chah)",
    "canonicalRef": "DN 2, MN 118, AN 9.35, AN 9.36",
    "difficulty": "intermediate",
    "difficultyLabel": {
      "en": "Intermediate",
      "pt": "Intermediário"
    },
    "recommendedPrereq": {
      "en": "Sustained sitting practice",
      "pt": "Prática meditativa sustentada"
    },
    "whyStudy": {
      "en": "A step-by-step 7-stage roadmap from present-moment awareness to beautiful breath, nimittas, and deep absorptions.",
      "pt": "Mapa progressivo em 7 etapas da presença atenta à respiração bela, aos nimittas e aos jhānas profundos."
    },
    "coreFocus": {
      "en": "Radical surrender of the 'doer', unconditional kindness to the mind, step-by-step entry into luminous Nimitta and deep canonical Jhānas",
      "pt": "Rendição radical do 'controlador', gentileza irrestrita para com a mente, entrada progressiva no Nimitta luminoso e Jhānas profundos"
    },
    "primaryAnchor": {
      "en": "Gentle awareness transitioning from the silent present moment to the 'Beautiful Breath', then to the mental sign (Nimitta)",
      "pt": "Atenção afetuosa transitando do momento presente silencioso para a 'Respiração Bela' e desta para o signo mental luminoso (Nimitta)"
    },
    "approachToJhana": {
      "en": "Profound absorption where physical senses shut down completely; the mind experiences unshakeable cosmic bliss without physical body awareness",
      "pt": "Absorção profunda onde os cinco sentidos externos cessam completamente; a mente experimenta êxtase inabalável sem consciência corporal"
    },
    "useOfNoting": {
      "en": "No verbal noting. Pure silent appreciation, cultivating joy (pīti) and content (santuṭṭhi) with present stillness",
      "pt": "Sem rotulação verbal. Puro deleite silencioso, cultivando contentamento (santuṭṭhi) e alegria com a quietude"
    },
    "tagline": {
      "en": "'Meditation is the art of disappearing. When the doer stops doing, the knower becomes still.'",
      "pt": "'Meditar é a arte de desaparecer. Quando quem controla para de agir, quem sabe alcança o repouso.'"
    },
    "overview": {
      "en": "Ajahn Brahm offers one of the most celebrated and systematic roadmaps for accessing deep Samādhi and the four Jhānas. Emphasizing 'kindfulness' (mindfulness blended with unconditional acceptance and goodwill), he presents meditation as a journey of letting go rather than striving. You do not force the mind to be still; you make stillness so delightful that the mind never wants to leave. Through seven sequential stages, the mind sheds the burden of the past, the future, words, and bodily sensations until it merges with the luminous Nimitta.",
      "pt": "Ajahn Brahm estruturou um dos mapas mais didáticos e célebres para acessar o Samādhi profundo e os quatro Jhānas. Enfatizando a 'atenção gentil' (kindfulness — atenção plena aliada à bondade incondicional), ele aborda a prática como um soltar de fardos e não como luta. Não se força a mente à quietude; torna-se a quietude tão deleitosa que a mente não deseja sair dela. Por meio de sete estágios graduais, solta-se o passado, o futuro, a fala interna e o corpo, até o surgimento do Nimitta luminoso."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Paccuppannaddhā-sati",
                "title": {
                      "en": "1. Present-Moment Awareness & Silent Presence",
                      "pt": "1. Consciência do Momento Presente & Presença Silenciosa"
                },
                "desc": {
                      "en": "Stages 1 & 2 of Ajahn Brahm's method: leaving behind past memories and future plans. Abandoning inner commentary and resting in silent awareness of the here and now.",
                      "pt": "Estágios 1 e 2 do método de Ajahn Brahm: largar o passado e planos futuros. Abandonar o diálogo interno e descansar na presença silenciosa do aqui e agora."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Turning Off the Inner Narrator:</strong> Realize that commentary about life is not life itself. Drop luggage from the past, lay down anxiety for the future, and enjoy silent presence.</p>",
                      "pt": "<p><strong>Desligando a Tagarelice Interna:</strong> Perceba que comentar sobre a vida não é viver. Largue as malas do passado, solte o futuro e desfrute do silêncio lúcido.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Ajahn Brahm's manual: <em>Mindfulness, Bliss, and Beyond: A Meditator's Handbook</em>.</p>",
                      "pt": "<p>O manual de Ajahn Brahm: <em>Mindfulness, Bliss, and Beyond (O Manual do Meditador)</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Throwing Away the Heavy Luggage:</strong> A weary hiker takes off a 50kg backpack at the mountain cabin and exhales in blissful lightness.</p>",
                      "pt": "<p><strong>Largando a Mochila Pesada:</strong> O caminhante exausto retira a mochila de 50kg ao chegar no chalé e suspira em alívio indescritível.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Sati-samanvesanā",
                "title": {
                      "en": "2. Sustained Awareness of the Natural Breath",
                      "pt": "2. Conexão Sustentada com a Respiração Natural"
                },
                "desc": {
                      "en": "Stage 3 & 4: connecting awareness smoothly with the natural breath. Following every breath from birth to finish without gaps or force.",
                      "pt": "Estágios 3 e 4: conectando a atenção continuamente com o fôlego natural. Acompanhando cada ciclo do início ao fim sem lapsos ou força."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Gentle Gliding Attention:</strong> Do not pounce on the breath like an eagle; glide alongside it like an albatross riding warm thermal air currents.</p>",
                      "pt": "<p><strong>Atenção Flutuante e Suave:</strong> Não ataque o fôlego como uma águia; plane ao lado dele como um albatroz deslizando nas correntes de ar térmico.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Corresponds to the 3rd and 4th steps of Ānāpānasati (MN 118).</p>",
                      "pt": "<p>Corresponde aos passos 3 e 4 de Ānāpānasati (MN 118).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Driver on the Highway:</strong> Seamlessly keeping hands relaxed on the steering wheel while the car glides smoothly down an empty highway.</p>",
                      "pt": "<p><strong>O Motorista na Estrada Aberta:</strong> Mãos relaxadas no volante enquanto o carro desliza suavemente pela rodovia vazia ao entardecer.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Kalyāṇa-assāsa (The Beautiful Breath)",
                "title": {
                      "en": "3. Savoring the 'Beautiful Breath'",
                      "pt": "3. Saboreando a 'Respiração Encantadora'"
                },
                "desc": {
                      "en": "Stage 5: the breath becomes delicious, sweet, and enchanting. Effort dissolves as the mind is magnetically drawn to the joy of respiration.",
                      "pt": "Estágio 5: o fôlego torna-se doce, encantador e prazeroso. O esforço se dissolve conforme a mente é atraída magneticamente pela beleza do ar."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Effortless Attraction:</strong> You no longer have to 'try' to watch the breath; the beauty of the breath holds the mind effortlessly spellbound.</p>",
                      "pt": "<p><strong>Atração Espontânea:</strong> Você não precisa mais 'tentar' prestar atenção; a beleza do fôlego fascina a mente sem esforço volitivo.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>The awakening of <em>pīti</em> and <em>sukha</em> in the 2nd Tetrad of MN 118.</p>",
                      "pt": "<p>O despertar de <em>pīti</em> e <em>sukha</em> na 2ª Tétrade do MN 118.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>A Child Listening to a Magic Story:</strong> Leaning forward in wonder, completely captivated, unwilling to look away for even a second.</p>",
                      "pt": "<p><strong>A Criança Ouvindo um Conto Mágico:</strong> Inclinando-se encantada, completamente fascinada, sem querer desviar o olhar por um segundo sequer.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Obhāsa-nimitta & Jhānas",
                "title": {
                      "en": "4. The Luminous Nimitta & Deep Jhānas",
                      "pt": "4. O Nimitta Luminoso & Os Jhānas Profundos"
                },
                "desc": {
                      "en": "Stages 6 & 7: the breath disappears into a dazzling sphere of mental light (the nimitta). Releasing the doer completely, falling into the ocean of Jhāna bliss.",
                      "pt": "Estágios 6 e 7: a respiração física desaparece numa esfera radiante de luz mental (o nimitta). Soltando o controlador por completo, mergulhando no oceano de êxtase dos Jhānas."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Surrendering the Doer:</strong> Do not touch the nimitta or try to control its brightness. Let go of all doing. Allow the mind to be swallowed up in bliss.</p>",
                      "pt": "<p><strong>Entregando o Controlador:</strong> Não tente manipular o nimitta ou clarear sua luz. Largue todo controle e permita que a mente mergulhe no êxtase da absorção.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Classical formulation of samādhi leading into the form absorptions (<em>rūpajjhānā</em>).</p>",
                      "pt": "<p>Formulação clássica de samādhi culminando nas absorções da forma (<em>rūpajjhānā</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Falling into a Feather Bed:</strong> Leaping backwards off a cliff and landing gently on a cloud of velvet feathers.</p>",
                      "pt": "<p><strong>Caindo num Leito de Penas:</strong> Lançar-se de costas e aterrissar suavemente sobre uma nuvem aveludada de conforto indescritível.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "Never begin a meditation session with willpower or frustration. Spend the first 5 minutes practicing 'kindfulness': smiling inward to yourself, thanking your body for carrying you all day, and giving yourself permission to put down all adult responsibilities.",
      "pt": "Nunca inicie uma sessão com autoritarismo mental. Dedique os primeiros 5 minutos à gentileza consciente: sorria internamente, agradeça ao corpo pelo esforço do dia e dê a si mesmo permissão para suspender todas as cobranças."
    },
    "keyPaliTerms": [
      {
        "term": "Nimitta",
        "meaning": "The mental sign or radiant reflection of a unified, concentrated mind"
      },
      {
        "term": "Jhāna",
        "meaning": "Profound meditative absorptions born of seclusion and rapture"
      },
      {
        "term": "Santuṭṭhi",
        "meaning": "Supreme contentment with whatever is present"
      }
    ],
    "curriculumOrder": 8
  },
  {
    "id": "thai-forest-mn140-dhatuvibhanga",
    "cluster": "thai-forest",
    "number": "21",
    "paliTitle": "Dhātuvibhaṅga Sutta",
    "title": {
      "en": "Analysis of the Six Elements — Dissolving into Unshakable Stillness",
      "pt": "Análise dos Seis Elementos — Dissolução na Serenidade Inabalável"
    },
    "lineageTradition": {
      "en": "Thai Forest Wilderness Lineage (Wat Asokaram)",
      "pt": "Linhagem de Floresta Tailandesa (Wat Asokaram)"
    },
    "primaryMasters": "Gotama Buddha, Ven. Pukkusāti, Ven. Ajahn Lee Dhammadharo",
    "canonicalRef": "MN 140 (Majjhima Nikāya 140)",
    "difficulty": "advanced",
    "curriculumOrder": 9,
    "difficultyLabel": {
      "en": "Advanced",
      "pt": "Avançado"
    },
    "recommendedPrereq": {
      "en": "Ajahn Lee Breath Energy (MN 118) or Jhāna Foundations (MN 36)",
      "pt": "Energia da Respiração de Ajahn Lee ou Fundamentos de Jhāna (MN 36)"
    },
    "whyStudy": {
      "en": "The master sutta for somatic element meditation. Teaches the complete dissolution of physical pain and bodily boundaries into spacious tranquility.",
      "pt": "O sutta mestre para a meditação nos elementos somáticos. Ensina a dissolução da dor física e dos limites corpóreos na amplidão espacial."
    },
    "coreFocus": {
      "en": "Systematic deconstruction into the 6 elements: Earth, Water, Fire, Wind, Space, and Consciousness (Dhātu); uprooting 'I am' conceits",
      "pt": "Decomposição sistemática nos 6 elementos: Terra, Água, Fogo, Vento, Espaço e Consciência (Dhātu); extirpação do 'Eu sou'"
    },
    "primaryAnchor": {
      "en": "The spacious, boundless consciousness element (Viññāṇa-dhātu) detached from elemental vibrations",
      "pt": "O elemento consciência límpido e espaçoso (Viññāṇa-dhātu), desvencilhado das vibrações materiais"
    },
    "approachToJhana": {
      "en": "Dissolving gross physical sensation through element balancing, passing through the formless realms (Space & Consciousness) into unshakeable peace",
      "pt": "Dissolver a rigidez corporal pelo equilíbrio dos elementos, transitando pelos reinos imateriais até o ápice da equanimidade"
    },
    "useOfNoting": {
      "en": "Seeing each physical quality as borrowed property: 'This hardness is not mine; this warmth is not me; this pulse is just wind.'",
      "pt": "Enxergar cada sensação como propriedade emprestada da natureza: 'Esta solidez não é minha; este calor não sou eu; é apenas vento.'"
    },
    "tagline": {
      "en": "'A person consists of six elements... when one knows this, the mental tremors of identity cease.'",
      "pt": "'Uma pessoa é composta de seis elementos... compreendendo isso com sabedoria, cessam os tremores da presunção de um Eu.'"
    },
    "overview": {
      "en": "In a lonely potter's shed during a stormy night, the Buddha meets the wanderer Pukkusāti and delivers one of the most profound discourses on meditation in the Canon. He guides him through the dissolution of the entire human experience into six elements: Earth (solidity), Water (cohesion/fluids), Fire (temperature/metabolism), Wind (breath/motion), Space (interstices/openness), and Consciousness. Ajahn Lee used this discourse to formulate his famous element-cleansing methods, allowing meditators to transcend agonizing pain and discover radiant stillness.",
      "pt": "Na olaria de um artesão durante a noite, o Buda encontra o peregrino Pukkusāti e ensina um dos discursos mais profundos do Cânone Pāli. Conduz o discípulo pela dissolução de toda a experiência nos seis elementos: Terra (solidez), Água (coesão/líquidos), Fogo (calor/temperatura), Vento (movimento/ar), Espaço (vacuidade) e Consciência. Ajahn Lee utilizou este sutta para estruturar suas famosas purificações elementais, capacitando o meditador a transcender dores físicas intensas e despertar a serenidade radiante."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Catu-dhātu-vavatthāna",
                "title": {
                      "en": "1. The Four Great Physical Elements",
                      "pt": "1. Os Quatro Grandes Elementos Físicos"
                },
                "desc": {
                      "en": "Investigating the internal and external earth (solidity), water (cohesion), fire (temperature), and wind (pressure/movement). Deconstructing bodily ownership.",
                      "pt": "Investigando os elementos internos e externos: terra (solidez), água (coesão), fogo (temperatura) e ar (movimento). Desconstruindo a posse do corpo."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Impersonal Matter Realization:</strong> Recognize: 'This earth element inside is of the same nature as the mountains outside. Neither is mine, neither is my self.'</p>",
                      "pt": "<p><strong>Percepção da Matéria Impessoal:</strong> Reconheça: 'Este elemento terra dentro de mim é da mesma natureza das rochas externas. Nenhum é meu, nenhum é meu eu.'</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 140 §8–12</strong>: Discoursed to Pukkusāti in the potter's shed on an unshakeable night.</p>",
                      "pt": "<p><strong>MN 140 §8–12</strong>: Ensinado a Pukkusāti na olaria numa vigília noturna inabalável.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Master Butcher at the Crossroads:</strong> Having slaughtered a cow and cut it into portions, there is no longer a 'cow', only piles of meat.</p>",
                      "pt": "<p><strong>O Açougueiro no Cruzamento:</strong> Tendo fatiado a vaca em porções, não há mais a ilusão de 'vaca', apenas pedaços de carne dispostos no chão.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Ākāsa-dhātu",
                "title": {
                      "en": "2. The Fifth Element: Space (Ākāsa)",
                      "pt": "2. O Quinto Elemento: O Espaço (Ākāsa)"
                },
                "desc": {
                      "en": "Discerning the cavities within: ear canals, nostrils, mouth, throat, digestive tract, and the microscopic emptiness separating atoms. Seeing that matter is mostly void.",
                      "pt": "Discernindo as cavidades internas: ouvidos, narinas, esôfago, estômago e o vazio microscópico entre as partículas. Enxergando que a matéria é majoritariamente espaço."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Somatic De-Solidification:</strong> Tune into the hollow interior of the body. Feel the body become airy, transparent, and weightless like a woven reed basket.</p>",
                      "pt": "<p><strong>Dessolidificação Somática:</strong> Sintonize o interior oco do corpo. Sinta a estrutura tornar-se arejada e transparente como um cesto de vime aberto ao vento.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 140 §13</strong>: Discerning the internal space element (<em>ajjhattikā ākāsadhātu</em>).</p>",
                      "pt": "<p><strong>MN 140 §13</strong>: Discernindo o elemento espaço interior (<em>ajjhattikā ākāsadhātu</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Bird Flying in Open Sky:</strong> Space has no markers, leaves no footprints, and cannot be captured or wounded by a sword.</p>",
                      "pt": "<p><strong>O Pássaro Voando no Céu Aberto:</strong> O espaço não deixa pegadas, não tem fronteiras e não pode ser ferido por espada alguma.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Viññāṇa-dhātu",
                "title": {
                      "en": "3. The Sixth Element: Consciousness (Viññāṇa)",
                      "pt": "3. O Sexto Elemento: A Consciência (Viññāṇa)"
                },
                "desc": {
                      "en": "Discerning consciousness as dependently arisen: consciousness arises based on eye and form, ear and sound, mind and thought. It is not an eternal soul, but a stream of knowing.",
                      "pt": "Discernindo a consciência como condicionada e dependente: ela brota do contato entre olho e forma, ouvido e som, mente e ideia. Não é uma alma, mas um fluxo vivo de cognição."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Witnessing the Stream:</strong> Observe that consciousness itself arises and dies with every sensory impact. Consciousness too is impermanent and not-self.</p>",
                      "pt": "<p><strong>Testemunhando o Fluxo:</strong> Observe que a consciência surge e fenece a cada faísca sensorial. A própria consciência é impermanente e vazia de um 'eu'.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 140 §14–17</strong>: Transitioning from the material elements to the breakdown of the observer.</p>",
                      "pt": "<p><strong>MN 140 §14–17</strong>: Transição dos elementos materiais para o desmonte do próprio observador.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Fire Dependent on Fuel (MN 38):</strong> A fire burning dependent on logs is called a log fire; dependent on grass, a grass fire. So too consciousness depends on conditions.</p>",
                      "pt": "<p><strong>O Fogo Dependente da Lenha (MN 38):</strong> O fogo alimentado por toras chama-se fogo de lenha; alimentado por capim, fogo de capim. Assim a consciência depende das bases sensoriais.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Asmimāna-samugghāta",
                "title": {
                      "en": "4. Uprooting the Conceit 'I Am' (Asmīti)",
                      "pt": "4. Erradicando o Conceito 'Eu Sou' (Asmīti)"
                },
                "desc": {
                      "en": "When all six elements are seen as not mine, not I, not my self, the root conceit 'I am' is uprooted forever. The sage of peace (muni santa) dwells in the unshakeable truth.",
                      "pt": "Quando os seis elementos são vistos como não meus, não eu, não meu eu, o conceito básico 'eu sou' é arrancado pela raiz. O sábio da paz (muni santa) repousa na verdade inabalável."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Final Dissolution of Identity:</strong> 'He does not construct, he does not will for becoming or non-becoming.' Abide as the pure unconditioned peace of Nibbāna.</p>",
                      "pt": "<p><strong>A Dissolução Final da Identidade:</strong> 'Ele não fabrica mais nada, não projeta devir nem aniquilação.' Repouse na paz inabalável do Nibbāna.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 140 §18–29</strong>: 'The sage at peace is not born, does not age, does not die, is not agitated, does not crave.'</p>",
                      "pt": "<p><strong>MN 140 §18–29</strong>: 'O sábio pacificado não nasce, não envelhece, não morre, não se agita nem anseia por nada.'</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Oil Lamp Going Out When Fuel is Exhausted (MN 140 §24):</strong> Just as an oil lamp burns out when the oil and wick are finished, feelings cool down in the body.</p>",
                      "pt": "<p><strong>A Lâmpada de Óleo que se Apaga (MN 140 §24):</strong> Assim como a lamparina se apaga quando o óleo e o pavio chegam ao fim, todas as sensações resfriam no corpo.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Transcendence of Pain, 4th Jhāna & Non-Clinging Consciousness",
      "hindrances": [
        {
          "name": "Identification with Physical Pain",
          "remedy": "Separate the pain: pain is water/fire/wind element; consciousness is just knowing it."
        },
        {
          "name": "Disorientation in Boundless Space",
          "remedy": "Anchor in pure equanimity (upekkhā); the knowing mind is completely safe."
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Severe knee, back, or chronic nerve pain during sitting meditation",
          "remedy": "Ask: 'Which element hurts? Is hardness in pain? Is heat in pain?' The pain uncouples from 'me' and becomes mere vibration."
        }
      ]
    },
    "layLife": {
      "feasibility": "Moderate to Advanced (Essential for dealing with illness, aging, and physical injury)",
      "dailySchedule": "Practice the 6-element dissolution during long sits or when experiencing physical fatigue.",
      "householdObstacles": "Becoming frightened when body sensations dissolve; remember you are discovering freedom from the meat body.",
      "ethicsDuty": "Humility and radical non-arrogance (Māna-pahāna)."
    },
    "paliTerms": [
      {
        "term": "Dhātu",
        "meaning": "Fundamental natural element / property of reality"
      },
      {
        "term": "Ākāsa-dhātu",
        "meaning": "The space element / openness and unboundedness"
      },
      {
        "term": "Viññāṇa-dhātu",
        "meaning": "The consciousness element / bare knowing faculty"
      }
    ]
  },
  {
    "id": "thai-forest-ud8-asankhata",
    "cluster": "thai-forest",
    "number": "22",
    "paliTitle": "Asaṅkhata Sutta",
    "title": {
      "en": "The Unborn, Uncreated & Unconditioned — The Nature of Nibbāna",
      "pt": "O Não-Nascido & Incondicionado — A Natureza do Nibbāna"
    },
    "lineageTradition": {
      "en": "Thai Forest Wilderness Lineage (Wat Pa Ban Tad)",
      "pt": "Linhagem de Floresta Tailandesa (Wat Pa Ban Tad)"
    },
    "primaryMasters": "Gotama Buddha, Ven. Ajahn Mun Bhūridatto, Ven. Ajahn Maha Boowa",
    "canonicalRef": "Khuddaka Nikāya, Udāna 8.1, 8.3, Itivuttaka 43",
    "difficulty": "advanced",
    "curriculumOrder": 10,
    "difficultyLabel": {
      "en": "Advanced",
      "pt": "Avançado"
    },
    "recommendedPrereq": {
      "en": "MN 140 (Dhātuvibhaṅga Sutta) and profound grounding in Anattā",
      "pt": "MN 140 (Dhātuvibhaṅga Sutta) e sólida compreensão de Anattā"
    },
    "whyStudy": {
      "en": "The ultimate canonical description of Nibbāna. Confirms there is an unborn, unmade reality beyond the 5 aggregates, providing absolute clarity on the goal of forest meditation.",
      "pt": "A descrição canônica suprema de Nibbāna. Confirma que há uma realidade não-nascida além dos 5 agregados, dando clareza absoluta ao objetivo da meditação."
    },
    "coreFocus": {
      "en": "Realization of the unconditioned (Asaṅkhata Dhātu); stepping beyond all arising, falling, and constructed reality",
      "pt": "Realização do incondicionado (Asaṅkhata Dhātu); ultrapassar todo nascimento, decadência e realidade fabricada"
    },
    "primaryAnchor": {
      "en": "The cessation of all fabrications (Saṅkhāra-nirodha) and resting in the Deathless (Amata)",
      "pt": "A cessação de todas as construções mentais (Saṅkhāra-nirodha) e o repouso no Imortal (Amata)"
    },
    "approachToJhana": {
      "en": "Deep Jhāna provides the calm platform to observe the cessation of all perceptions, opening directly to the unconditioned",
      "pt": "O samādhi profundo fornece a base estável para contemplar a cessação de toda percepção, abrindo-se ao incondicionado"
    },
    "useOfNoting": {
      "en": "Recognizing that whatever is born must die: 'This too is conditioned (saṅkhata); this too must end.' Turning toward the Unborn.",
      "pt": "Reconhecer que tudo o que nasce está fadado à morte: 'Isto também é condicionado; isto também cessará.' Voltar-se para o Não-Nascido."
    },
    "tagline": {
      "en": "'There is, monks, an unborn, unbecome, unmade, unconditioned... Were there not, no escape would be known from what is born.'",
      "pt": "'Há, monges, um não-nascido, não-tornado, não-fabricado, incondicionado... Se não houvesse, não haveria escape para o que nasce.'"
    },
    "overview": {
      "en": "In Udāna 8.1 and 8.3, the Buddha breaks into profound utterance concerning the highest fruit of spiritual life. He declares that beyond all realms of form, formlessness, and consciousness, there is a dimension that is neither coming nor going, neither standing nor dying—the Unborn (Ajāta), the Unconditioned (Asaṅkhata). Ven. Ajahn Mun and Ven. Ajahn Maha Boowa constantly cited these verses when describing the liberated mind that has shattered the husk of ignorance (avijjā).",
      "pt": "Nos Udānas 8.1 e 8.3, o Buda pronuncia um dos seus mais solenes versos sobre o fruto supremo do caminho. Afirma que além de todos os reinos da matéria, da mente e da imaginação, existe uma dimensão onde não há vinda nem ida, nem permanência nem morte — o Não-Nascido (Ajāta), o Incondicionado (Asaṅkhata). Ven. Ajahn Mun e Ven. Ajahn Maha Boowa citavam estes versos constantemente para descrever a mente liberta que destruiu a casca da ignorância primordial (avijjā)."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Saṅkhata-ādīnava-dassana",
                "title": {
                      "en": "1. Discerning the Inherent Fragility of All Formations",
                      "pt": "1. Discernindo a Fragilidade de Todas as Construções"
                },
                "desc": {
                      "en": "Investigating whatever is born, created, constructed, and conditioned. Seeing that all conditioned states are unstable, prone to breakup, and inherently unsatisfactory.",
                      "pt": "Investigando tudo o que é nascido, criado, construído e condicionado. Reconhecendo que todas as construções são instáveis, sujeitas ao colapso e insatisfatórias."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Seeing the Structural Flaw:</strong> Observe that anything that has a beginning must have an ending. Stop seeking permanent security in transient things.</p>",
                      "pt": "<p><strong>Enxergando a Falha Estrutural:</strong> Reconheça que tudo o que teve um começo inevitavelmente terá um fim. Não procure segurança eterna em coisas que mudam.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>Udāna 8.1–8.3</strong>: The Buddha's solemn declarations on the Unconditioned realm (<em>asaṅkhata-dhātu</em>).</p>",
                      "pt": "<p><strong>Udāna 8.1–8.3</strong>: As proclamações solenes do Buda sobre a dimensão incondicionada (<em>asaṅkhata-dhātu</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The House of Cards in a Breeze:</strong> No matter how intricately balanced, the first gentle draft sends it tumbling to the table.</p>",
                      "pt": "<p><strong>O Castelo de Cartas na Brisa:</strong> Não importa quão meticuloso seja o equilíbrio, a primeira brisa faz desabar toda a estrutura sobre a mesa.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Ajāta-abhūta-saññā",
                "title": {
                      "en": "2. The Unborn, Unbecome, Unmade & Unconditioned",
                      "pt": "2. O Não-Nascido, Não-Devir, Não-Criado & Incondicionado"
                },
                "desc": {
                      "en": "'There is, mendicants, an unborn, unbecome, unmade, unconditioned. If there were not, no escape would be known from what is born, become, made, and conditioned.'",
                      "pt": "'Há, ó monges, o não-nascido, o não-devir, o não-criado, o incondicionado. Se não houvesse, não se discerniria escape algum do que nasce, fenece e é condicionado'."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Opening to the Deathless:</strong> In meditation, look for that which is not produced by causes, not moving, and not disappearing. Rest in that pristine stillness.</p>",
                      "pt": "<p><strong>Abrindo-se para o Imortal:</strong> Na meditação, atente para aquilo que não é fabricado por causas, que não se move nem perece. Descanse nessa quietude pura.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>Udāna 8.3 (Tatiya Nibbāna Sutta)</strong>: The definitive philosophical anchor of Nibbāna as a real attainment.</p>",
                      "pt": "<p><strong>Udāna 8.3 (Tatiya Nibbāna Sutta)</strong>: A âncora filosófica definitiva de Nibbāna como uma realização tangível e suprema.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Bedrock Underneath the Shifting Sand:</strong> While dunes shift with the desert winds, the ancient bedrock beneath remains untouched and immovable.</p>",
                      "pt": "<p><strong>A Rocha Matriz sob a Areia Movediça:</strong> Enquanto as dunas se deslocam ao sabor das tempestades, a rocha sólida por baixo permanece intocada e firme.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Appatiṭṭha-vimokkha",
                "title": {
                      "en": "3. The Dimension Without Coming, Going, or Standing",
                      "pt": "3. A Dimensão Sem Idas, Vindas ou Apoio"
                },
                "desc": {
                      "en": "'There is a dimension where there is neither earth, nor water, nor fire, nor wind... neither this world nor the next... no coming, no going, no standing. It is without support.'",
                      "pt": "'Há uma dimensão onde não há terra, nem água, nem fogo, nem ar... nem este mundo nem o outro... nem vir, nem ir, nem parar. É sem apoio, sem devir, o fim do sofrimento'."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Letting Go of Footholds:</strong> Release every conceptual foothold. Do not grasp onto 'being' or 'non-being'. Pure unconditioned awareness.</p>",
                      "pt": "<p><strong>Soltando os Apoios Mentais:</strong> Largue qualquer suporte conceitual. Não se apegue a noções de 'existência' ou 'não-existência'. Consciência liberta.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>Udāna 8.1 (Paṭhama Nibbāna Sutta)</strong>: The negative dialectic describing Nibbāna beyond sensory dimensionality.</p>",
                      "pt": "<p><strong>Udāna 8.1 (Paṭhama Nibbāna Sutta)</strong>: A dialética apofática descrevendo Nibbāna além das dimensões sensoriais.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Sunlight Not Striking Any Wall (SN 12.64):</strong> A ray of sunlight entering through a window in an open field strikes no wall, no post, no ground; it is unestablished.</p>",
                      "pt": "<p><strong>O Raio de Sol que Não Toca Parede Alguma (SN 12.64):</strong> Um raio solar cruzando uma janela numa planície aberta não atinge parede, poste ou chão; permanece sem apoio.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Dukkhass'anta-sacchikiriya",
                "title": {
                      "en": "4. The Ultimate Ending of Suffering (Nibbāna)",
                      "pt": "4. A Concretização do Fim Definitivo do Sofrimento"
                },
                "desc": {
                      "en": "With craving extinguished, consciousness is unfettered. The cycle of saṁsāra is severed. The mind abides in the supreme, unshakeable freedom of Nibbāna.",
                      "pt": "Com a extinção da sede de devir, a mente é desatada. O ciclo do saṁsāra é partido. Permanece-se na liberdade incondicionada e imutável de Nibbāna."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Living the Unconditioned:</strong> Walk through daily life with zero craving and zero fear. Total inner peace in the midst of worldly storms.</p>",
                      "pt": "<p><strong>Vivendo o Incondicionado:</strong> Caminhe pelo mundo com zero dependência e zero medo. Paz interior definitiva no meio de todas as tempestades.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>Udāna 8.4</strong>: 'For one who clings, there is movement; for one who does not cling, there is no movement... this is the end of suffering.'</p>",
                      "pt": "<p><strong>Udāna 8.4</strong>: 'Para quem se apega, há oscilação; para quem não se apega, não há oscilação... este é o fim do sofrimento.'</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Island Safe from the Raging Flood (Snp 5.11):</strong> In the midst of terrifying floods sweeping away villages, a solid high granite island stands safe, dry, and immovable.</p>",
                      "pt": "<p><strong>A Ilha Inabalável na Torrente Furiosa (Snp 5.11):</strong> No meio de inundações assustadoras que arrastam vilarejos, uma ilha sólida de granito permanece seca e segura.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Realization of Nibbāna & Uprooting of All Asavas",
      "hindrances": [
        {
          "name": "Subtle Clinging to the 'Knower'",
          "remedy": "Ajahn Maha Boowa's warning: even the luminous mind must be surrendered as anattā."
        },
        {
          "name": "Fear of Non-Existence (Vibhava-taṇhā)",
          "remedy": "Nibbāna is not annihilation; it is the death of suffering and the birth of true freedom."
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Spiritual nihilism or feeling that practice leads to blank nothingness",
          "remedy": "Reflect on the Buddha's words in Ud 8.3: Nibbāna is peace, bliss, and supreme refuge, not an empty void."
        }
      ]
    },
    "layLife": {
      "feasibility": "Advanced Contemplative Goal (The supreme compass for daily values)",
      "dailySchedule": "Take 10 minutes at the end of meditation to rest in total non-fabrication (anabhisaṅkhāra).",
      "householdObstacles": "Living with worldly ambitions while valuing Nibbāna; balance this by doing duty responsibly without existential clinging.",
      "ethicsDuty": "Sammā Diṭṭhi (Right View): knowing what is conditioned and what is unconditioned."
    },
    "paliTerms": [
      {
        "term": "Asaṅkhata",
        "meaning": "The unconditioned / that which is not fabricated by causes"
      },
      {
        "term": "Ajāta",
        "meaning": "The unborn / free from arising and ceasing"
      },
      {
        "term": "Amata",
        "meaning": "The deathless / Nibbāna"
      }
    ]
  },
  {
    "id": "thai-forest-ajahn-mun",
    "cluster": "thai-forest",
    "number": "23",
    "paliTitle": "Ācariya Mun Kammaṭṭhāna",
    "title": {
      "en": "Phra Ācariya Mun Bhūridatto — Mutodaya & The Forest Root",
      "pt": "Phra Ācariya Mun Bhūridatto — Mutodaya & A Raiz da Floresta"
    },
    "lineageTradition": {
      "en": "Thai Forest Tradition (Founding Patriarch / Thudong Kammaṭṭhāna)",
      "pt": "Tradição de Floresta da Tailândia (Patriarca Fundador / Thudong Kammaṭṭhāna)"
    },
    "primaryMasters": "Ven. Phra Ācariya Mun Bhūridatto (1870–1949), Ven. Phra Ācariya Sao Kantasīlo",
    "canonicalRef": "Mutodaya ('A Heart Released'), AN 4.170, Dhammapada 368–382",
    "difficulty": "advanced",
    "curriculumOrder": 11,
    "difficultyLabel": {
      "en": "Advanced",
      "pt": "Avançado"
    },
    "recommendedPrereq": {
      "en": "Deep grounding in ascetic wilderness discipline and body contemplation",
      "pt": "Sólida base na disciplina ascética da floresta e contemplação do corpo"
    },
    "whyStudy": {
      "en": "The founding father of the modern Thai Forest Tradition. Revived the direct path of the Buddha in the jungle, proving that Arahantship is achievable in the modern era.",
      "pt": "O pai fundador da tradição de floresta moderna. Reviveu o caminho direto do Buda na selva, provando que o estado de Arahant é plenamente alcançável na era moderna."
    },
    "coreFocus": {
      "en": "Direct confrontation with wilderness hardship, relentless mental repetition of 'Buddho', cutting the root of defilements in the Citta",
      "pt": "Confronto direto com as agruras da selva, repetição incansável de 'Buddho', corte da raiz das impurezas no Citta"
    },
    "primaryAnchor": {
      "en": "The continuous pulse of the mantra 'Buddho' coupled seamlessly with breath, anchoring the mind deep in the heart center",
      "pt": "O pulsar contínuo do mantra 'Buddho' fundido à respiração, ancorando a mente no centro do coração"
    },
    "approachToJhana": {
      "en": "Uncompromising samādhi cultivated through all-night sits and vigorous walking meditation (cankama) until the mind collapses into deep convergence (appanā)",
      "pt": "Samādhi intransigente forjado em vigílias noturnas e caminhadas meditativas intensas até a mente convergir em appanā-samādhi"
    },
    "useOfNoting": {
      "en": "Seeing defilements (kilesas) as treacherous thieves entering the house of the heart: using Buddho as a sword to cut them instantly",
      "pt": "Ver as impurezas (kilesas) como ladrões traiçoeiros invadindo a casa do coração: usar o Buddho como espada para ceifá-las"
    },
    "tagline": {
      "en": "'The Citta is inherently radiant, but it is obscured by visiting defilements. Clean the house and the light shines forth.'",
      "pt": "'O Citta é luminoso por natureza, mas obscurecido por impurezas visitantes. Limpe a casa e a luz brilhará soberana.'"
    },
    "overview": {
      "en": "Phra Ācariya Mun Bhūridatto (1870–1949) is the giant of modern Theravāda. In an era when Buddhist authorities in Bangkok declared that the path to Jhāna and Enlightenment was closed, Ajahn Mun walked barefoot into the jungles of Isan, Laos, and Burma with only a bowl and three robes. Living among tigers and malaria, he rediscovered the Buddha's direct path: extreme ethical purity, continuous walking and sitting meditation, and fierce investigation of the body and mind. His disciples—including Ajahn Chah, Ajahn Lee, and Ajahn Maha Boowa—built the world's most vibrant meditation lineages.",
      "pt": "Phra Ācariya Mun Bhūridatto (1870–1949) é o gigante do Theravāda moderno. Numa época em que as autoridades eclesiásticas de Bangkok declaravam que o caminho para Jhānas e Iluminação estava extinto, Ajahn Mun caminhou descalço para as florestas selvagens de Isan, Laos e Birmânia levando apenas uma tigela e três mantos. Convivendo com tigres e malária, redescobriu o caminho direto do Buda: pureza moral absoluta, meditação sentada e caminhando até a madrugada, e a investigação cortante do corpo e da mente. Seus discípulos fundaram os mosteiros mais respeitados do mundo budista."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Dhutaṅga-cariyā",
                "title": {
                      "en": "1. The 13 Forest Ascetic Resolves (Dhutaṅga)",
                      "pt": "1. Os 13 Votos Ascéticos da Selva (Dhutaṅga)"
                },
                "desc": {
                      "en": "Phra Ācariya Mun's relentless discipline: dwelling at tree-roots, wearing cast-off rags, eating one meal a day from the alms bowl, refusing luxury and soft living.",
                      "pt": "A disciplina implacável de Phra Ācariya Mun: habitar ao pé de árvores, vestir mantos de trapos remendados, comer uma só refeição diária na tigela e recusar comodidades."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Radical Simplicity:</strong> Cut down worldly clutter. Train yourself to be content with whatever requisites are present without complaint.</p>",
                      "pt": "<p><strong>Simplicidade Radical:</strong> Reduza o excesso de pertences. Acostume-se a estar satisfeito com o essencial sem queixas ou exigências de conforto.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>The 13 canonical ascetic practices (<em>dhutaṅga</em>) detailed in <em>Visuddhimagga</em> Ch. II.</p>",
                      "pt": "<p>As 13 práticas ascéticas canônicas (<em>dhutaṅga</em>) detalhadas no <em>Visuddhimagga</em> Cap. II.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Wild Boar in the Forest:</strong> Free, resilient, feeding on roots, needing no palace or human shelter to survive with vigor.</p>",
                      "pt": "<p><strong>O Javali na Floresta Selvagem:</strong> Livre, robusto, alimentando-se de raízes, sem precisar de palácios ou confortos para viver com vigor.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Mūla-Kammaṭṭhāna-vicāra",
                "title": {
                      "en": "2. The Five Body Roots as the Sword of Wisdom",
                      "pt": "2. As Cinco Raízes do Corpo como Espada de Sabedoria"
                },
                "desc": {
                      "en": "Ajahn Mun's primary weapon: meditating on hair, nails, teeth, skin, and bones until the illusion of gender, beauty, and physical pride is completely pulverized.",
                      "pt": "A arma primária de Ajahn Mun: meditar em cabelos, unhas, dentes, pele e ossos até que a fascinação estética e o apego corpóreo sejam totalmente pulverizados."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Incinerating Vanity:</strong> Direct the mind to the internal bones and organs with fierce determination until desire loses its footing.</p>",
                      "pt": "<p><strong>Incinerando a Vaidade:</strong> Projete a mente nos ossos e órgãos com foco cirúrgico até que o apego carnal perca todo o apoio.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Ajahn Mun's teachings recorded in <em>Mutodaya (A Heart Released)</em>.</p>",
                      "pt": "<p>Os ensinamentos de Ajahn Mun registrados em <em>Mutodaya (Um Coração Liberto)</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Sharp Diamond Drill Slicing Granite:</strong> Drilling straight through the outer stone to expose the core beneath.</p>",
                      "pt": "<p><strong>A Broca de Diamante Perfurando o Granito:</strong> Cortando a rocha dura sem hesitação para revelar o interior desprovido de encanto.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Pabhassara-citta",
                "title": {
                      "en": "3. The Radiant Mind & The Pitfall of Light",
                      "pt": "3. A Mente Radiante & A Armadilha da Luz"
                },
                "desc": {
                      "en": "As hindrances fall away, the mind shines with staggering, supernatural radiance (pabhassara citta). Ajahn Mun warned: do not mistake this golden light for Nibbāna!",
                      "pt": "Conforme os obstáculos desabam, a mente reluz com claridade sobrenatural (pabhassara citta). Ajahn Mun alertava: não tome esta luz dourada como Nibbāna!"
                },
                "practiceInstructions": {
                      "en": "<p><strong>Shattering the Luminous Ego:</strong> When extraordinary brilliance arises in samādhi, realize: 'Even this radiance is impermanent and conditioned!' Do not cling to the light.</p>",
                      "pt": "<p><strong>Desfazendo o Ego Luminoso:</strong> Ao notar um clarão sublime em samādhi, compreenda: 'Mesmo esta luz dourada é condicionada!' Não se apegue ao espetáculo interior.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 1.49</strong>: 'Luminous is this mind, but it is defiled by visiting defilements.'</p>",
                      "pt": "<p><strong>AN 1.49</strong>: 'Luminosa é esta mente, mas ela é maculada por contaminações adventícias.'</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Golden Cocoon (Ajahn Mun):</strong> The silkworm spins a dazzling golden thread around itself, but if it stays inside admiring the cocoon, it perishes; it must break free to fly.</p>",
                      "pt": "<p><strong>O Casulo Dourado (Ajahn Mun):</strong> O bicho-da-seda tece um casulo reluzente ao redor de si, mas se ficar dentro admirando o ouro morre asfixiado; é preciso rompê-lo para voar livre.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Mutodaya (A Heart Released)",
                "title": {
                      "en": "4. Mutodaya: The Heart Released in Absolute Truth",
                      "pt": "4. Mutodaya: O Coração Desperto na Verdade Absoluta"
                },
                "desc": {
                      "en": "Shattering the final delusion of the knowing mind itself. The unconditioned heart stands free of all cosmic coordinates: birth is ended, the holy life fulfilled.",
                      "pt": "Estilhaçando a última ilusão do próprio 'conhecedor' interior. O coração incondicionado ergue-se livre de amarras: findou-se a ilusão, plena é a paz."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Total Liberation:</strong> The observer and the observed dissolve into unshakeable truth. Rest as the deathless Dhamma itself.</p>",
                      "pt": "<p><strong>Libertação Plena:</strong> O observador e o observado dissolvem-se na verdade pura. Repouse na paz definitiva do Dhamma imutável.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>The historical life and attainments of Phra Ācariya Mun Bhūridatto (1870–1949).</p>",
                      "pt": "<p>A vida e realizações espirituais de Phra Ācariya Mun Bhūridatto (1870–1949).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Lightning Strike Shattering the Mountain Peak:</strong> In a single blinding flash, the boulder of ignorance is disintegrated into dust that blows away forever.</p>",
                      "pt": "<p><strong>O Raio que Fragmenta o Cume da Montanha:</strong> Num clarão definitivo, o rochedo da ignorância é pulverizado em poeira dispersa pelo vento para sempre.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Complete Arahantship (Arahattaphala)",
      "hindrances": [
        {
          "name": "Sloth & Torpor (Thīna-middha)",
          "remedy": "Ajahn Mun's remedy: get up immediately and do vigorous walking meditation in the dark or near a ledge."
        },
        {
          "name": "Fear of Wilderness Death",
          "remedy": "Surrender your life to the Triple Gem: 'If I die meditating in this forest, it is the most noble death.'"
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Lethargy, chronic spiritual procrastination, making excuses about lack of time",
          "remedy": "Read the life of Ajahn Mun; remember death is stalking you every moment; meditate as if your hair were on fire."
        }
      ]
    },
    "layLife": {
      "feasibility": "Challenging (High-inspiration model for serious retreats and dedication)",
      "dailySchedule": "Incorporate periods of strict simplicity, fasting from entertainment, and walking meditation.",
      "householdObstacles": "Living in a world that glorifies comfort, luxury, and soft living; resist cultural softness with joyful discipline.",
      "ethicsDuty": "Supreme devotion to the Dhamma above all worldly fame and profit."
    },
    "paliTerms": [
      {
        "term": "Ācariya",
        "meaning": "Revered spiritual master / teacher"
      },
      {
        "term": "Mutodaya",
        "meaning": "A heart released / spontaneous wisdom of liberation"
      },
      {
        "term": "Cankama",
        "meaning": "Formal pacing walking meditation path"
      }
    ]
  },
  {
    "id": "thai-forest-ajahn-maha-boowa",
    "cluster": "thai-forest",
    "number": "24",
    "paliTitle": "Ajahn Maha Boowa Kammaṭṭhāna",
    "title": {
      "en": "Ajahn Maha Boowa — Buddho Parikamma & The Indomitable Citta",
      "pt": "Ajahn Maha Boowa — Mantram Buddho & A Citta Indomável"
    },
    "lineageTradition": {
      "en": "Thai Forest Ascetic Tradition (Wat Pa Baan Taad)",
      "pt": "Tradição Ascética das Florestas (Wat Pa Baan Taad)"
    },
    "primaryMasters": "Ven. Ajahn Maha Boowa Ñāṇasampanno, Ven. Ajahn Mun Bhūridatto",
    "canonicalRef": "Dhammacakkappavattana Sutta, SN 22.59 (Anattalakkhaṇa Sutta), MN 128",
    "difficulty": "advanced",
    "difficultyLabel": {
      "en": "Advanced",
      "pt": "Avançado"
    },
    "recommendedPrereq": {
      "en": "Strong samādhi foundation",
      "pt": "Firme base de samādhi"
    },
    "whyStudy": {
      "en": "Fierce, uncompromising investigation of bodily pain and dismantling the subtle core of ignorance in the citta.",
      "pt": "Investigação intransigente da dor física e desmantelamento do núcleo sutil de ignorância na mente (citta)."
    },
    "coreFocus": {
      "en": "Uncompromising heroic effort (viriya), continuous repetition of the Buddho mantra, heroic confrontation with bodily pain to pierce through defilements",
      "pt": "Esforço heroico inabalável (viriya), repetição incessante de Buddho, confronto desassombrado da dor física para dissecar as impurezas"
    },
    "primaryAnchor": {
      "en": "The rapid mental repetition of the parikamma word 'Bud-dho' synchronized with breath, anchoring the mind like an iron post",
      "pt": "A repetição mental ritmada do termo 'Bud-dho' sincronizado com o fluxo respiratório, ancorando a mente como um pilar de ferro"
    },
    "approachToJhana": {
      "en": "The mind 'drops' suddenly and decisively into the center of the chest into luminous, diamond-like unshakeable concentration",
      "pt": "A mente 'cai' de forma súbita e resoluta no centro do peito em concentração diamantina e inabalável"
    },
    "useOfNoting": {
      "en": "Using the Buddho mantra to cut through wandering thoughts with razor-sharp vigilance",
      "pt": "Uso do termo Buddho para ceifar pensamentos dispersos com prontidão cortante"
    },
    "tagline": {
      "en": "'Fight like a warrior! If you die sitting on the cushion, let the bones tell the story of a Dhamma warrior.'",
      "pt": "'Lute como um guerreiro! Se tiver de tombar na almofada, que seus ossos contem a história de um herói do Dhamma.'"
    },
    "overview": {
      "en": "Ajahn Maha Boowa represents the fiery, uncompromising wing of the Thai Forest lineage. Known for his legendary all-night sits during which he dissected severe physical pain with surgical wisdom, his method harnesses the Buddho parikamma to tether the wild elephant of the worldly mind. When severe pain arises, he teaches practitioners not to flee or shift postures, but to investigate: 'Where is the pain? Is the bone pain? Is the flesh pain? Is the knowing awareness pain?' Through this relentless inquiry, the knowing citta detaches permanently from physical suffering.",
      "pt": "Ajahn Maha Boowa representa a ala resoluta e heroica da Tradição das Florestas. Célebre por suas vigílias noturnas dissecando dores atrozes com bisturi analítico, seu método utiliza o mantram Buddho para domar o elefante selvagem da mente mundana. Quando a dor severa surge, ele ensina a não fugir nem trocar de postura, mas inquirir: 'Onde está a dor? O osso é a dor? A carne é a dor? A consciência que sabe é a dor?' Por essa investigação, a mente liberta-se da identificação com o sofrimento somático."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Buddho-parikamma",
                "title": {
                      "en": "1. Relentless Repetition of the Mantra 'Bud-dho'",
                      "pt": "1. Repetição Incansável do Mantra 'Bud-dho'"
                },
                "desc": {
                      "en": "Ajahn Maha Boowa's fierce starting method: gluing the mind to the inner repetition of 'Bud-' on the in-breath and '-dho' on the out-breath with zero gaps for discursive thought.",
                      "pt": "O método vigoroso de Ajahn Maha Boowa: atar a mente à repetição interior de 'Bud-' ao inalar e '-dho' ao exalar, sem deixar um milissegundo livre para pensamentos dispersos."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Relentless Focus:</strong> Do not allow the mind to wander for even a second. Repeat 'Buddho' with total earnestness until thoughts are pinned down and stillness arrives.</p>",
                      "pt": "<p><strong>Foco Implacável:</strong> Não permita que a mente divague por um segundo. Repita 'Buddho' com seriedade total até que os devaneios cessem e o silêncio se estabeleça.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Ajahn Maha Boowa's classic guide: <em>To the Last Breath & Kammatthana</em>.</p>",
                      "pt": "<p>A obra clássica de Ajahn Maha Boowa: <em>Até o Último Suspiro & Kammaṭṭhāna</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Iron Nail Driven with a Sledgehammer:</strong> Each repetition drives the spike deeper into the rock until it cannot be moved by any wind.</p>",
                      "pt": "<p><strong>O Cravo de Ferro Marretado na Rocha:</strong> Cada repetição crava a estaca mais fundo até que nenhum vendaval consiga movê-la.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Vedanā-pariccheda",
                "title": {
                      "en": "2. Dissecting Severe Pain (Sitting through the Fire)",
                      "pt": "2. Dissecando a Dor Intensa (Sentando Através do Fogo)"
                },
                "desc": {
                      "en": "Ajahn Maha Boowa's legendary all-night sits through excruciating pain: dissecting pain into three distinct realities—the physical body, the feeling (vedanā), and the knowing mind.",
                      "pt": "As sentadas noturnas de Ajahn Maha Boowa enfrentando dores agudas: dissecando a dor em três realidades separadas—o corpo físico, a sensação (vedanā) e a mente conhecedora."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Surgical Scalpel of Wisdom:</strong> Ask: 'Is the bone in pain? No, bone has no awareness. Is the flesh in pain? No. Is the feeling the mind? No, feeling arises and dies, while the mind knows it.' Pain loses its sting.</p>",
                      "pt": "<p><strong>O Bisturi Cirúrgico da Sabedoria:</strong> Pergunte-se: 'O osso está doendo? Não, osso é matéria sem senciência. A carne sabe da dor? Não. A dor é a mente? Não, a sensação muda e a mente apenas sabe'. A dor perde o veneno.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>SN 36.6</strong>: Dissecting the physical sensation from the psychological reaction.</p>",
                      "pt": "<p><strong>SN 36.6</strong>: Separando o dado físico da sensação da reação psicológica de aversão.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Blacksmith Holding Glowing Red Iron in Tongs:</strong> The iron is red hot, but the smith holds it securely with long tongs and suffers zero burns.</p>",
                      "pt": "<p><strong>O Ferreiro Segurando o Ferro em Brasa com a Tenaz:</strong> A barra de ferro incandesce em brasa viva, mas o ferreiro a manipula com a tenaz de aço e não sofre queimadura alguma.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Avijjā-bhedana",
                "title": {
                      "en": "3. Shattering the Core of Avijjā in the Citta",
                      "pt": "3. Estilhaçando o Núcleo da Ignorância (Avijjā) no Citta"
                },
                "desc": {
                      "en": "Turning the weapon of wisdom inward to examine the luminous, radiant 'One Who Knows' itself. Recognizing that this brilliant center is the ultimate hiding place of subtle delusion.",
                      "pt": "Voltando a espada da sabedoria para examinar o próprio 'Conhecedor' radiante. Reconhecendo que esse ponto reluzente e fascinante é o último esconderijo da ignorância sutil."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Shattering the Final Seed:</strong> Recognize: 'Even this radiant knower is a construct, a point of delusion.' In a flash of insight, the center shatters, and unconditioned liberation bursts forth.</p>",
                      "pt": "<p><strong>Destruindo a Semente Final:</strong> Reconheça: 'Mesmo este conhecedor reluzente é uma construção, o ponto central do apego.' Num raio de clareza, o núcleo se desfaz e a liberdade absoluta resplandece.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Ajahn Maha Boowa's autobiographical account of his breakthrough on the mountain peak of Wat Doi Dhammachedi.</p>",
                      "pt": "<p>O relato autobiográfico de Ajahn Maha Boowa sobre sua libertação final no cume da montanha em Wat Doi Dhammachedi.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Light Bulb Shattering into Pure Space:</strong> The brilliant glass filament shatters; light is no longer confined to a bulb, but merges with the boundless cosmos.</p>",
                      "pt": "<p><strong>O Bulbo de Vidro que Estilhaça no Espaço Aberto:</strong> O filamento luminoso da lâmpada quebra-se; a luz deixa de estar presa a um bulbo e funde-se com a imensidão do cosmos.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "Whenever acute panic, anger, or acute physical illness strikes in daily life, replace the frantic inner narrative with continuous, steady repetition of 'Buddho, Buddho, Buddho' until mental equilibrium is restored.",
      "pt": "Diante de crises agudas de pânico, raiva súbita ou mal-estar físico, substitua a narrativa aflita pela repetição firme de 'Buddho, Buddho, Buddho' até restabelecer a compostura."
    },
    "keyPaliTerms": [
      {
        "term": "Parikamma",
        "meaning": "Preparatory object or word repeated to steady the mind (e.g. Buddho)"
      },
      {
        "term": "Citta",
        "meaning": "The fundamental knowing nature of mind, distinct from mental formations"
      },
      {
        "term": "Viriya",
        "meaning": "Unyielding spiritual energy and courage"
      }
    ],
    "curriculumOrder": 12
  },
  {
    "id": "burmese-tejaniya",
    "cluster": "burmese",
    "number": "25",
    "paliTitle": "U Tejaniya Citta-Vipassanā",
    "title": {
      "en": "Sayadaw U Tejaniya — Mind Awareness & Right Attitude",
      "pt": "Sayadaw U Tejaniya — Consciência da Mente & Atitude Correta"
    },
    "lineageTradition": {
      "en": "Burmese Cittānupassanā Tradition (Shwe Oo Min Forest Center)",
      "pt": "Tradição Birmanesa de Cittānupassanā (Centro Shwe Oo Min)"
    },
    "primaryMasters": "Ven. Sayadaw U Tejaniya, Ven. Shwe Oo Min Sayādaw",
    "canonicalRef": "DN 22 (Cittānupassanā), AN 1.49 (Pabhassara Sutta)",
    "difficulty": "foundational",
    "difficultyLabel": {
      "en": "Foundations",
      "pt": "Fundamentos"
    },
    "recommendedPrereq": {
      "en": "None (Designed for lay householders)",
      "pt": "Nenhum (Criado para leigos)"
    },
    "whyStudy": {
      "en": "Effortless, continuous 24-hour awareness of the mind's attitude, ideal for busy work, family, and social life.",
      "pt": "Atenção plena relaxada e contínua de 24 horas sobre a atitude da mente, ideal para o trabalho e a rotina familiar."
    },
    "coreFocus": {
      "en": "Continuous, relaxed awareness of the observing mind; investigating the attitude behind the meditation; converting daily activity into effortless practice",
      "pt": "Atenção contínua e relaxada da mente que observa; investigar a atitude interna; transformar o dia a dia em prática fluida"
    },
    "primaryAnchor": {
      "en": "The state of the observing mind (citta) and its underlying view (diṭṭhi): Is there greed, aversion, or expectation in the mind that is meditating?",
      "pt": "O estado da mente que observa e sua intenção profunda: Há cobiça, aversão ou ansiedade de resultado na mente que pratica?"
    },
    "approachToJhana": {
      "en": "Emphasizes natural mental stability throughout 24 hours of wakefulness rather than isolated, trance-like absorptions",
      "pt": "Prioriza a estabilidade mental natural ao longo das 24 horas do dia em vez de transes absorvidos isolados"
    },
    "useOfNoting": {
      "en": "Gentle inquiry without rigid labels: 'What is the mind doing? What is the quality of the observing mind?'",
      "pt": "Inquérito gentil sem rótulos mecânicos: 'O que a mente está fazendo? Qual a atitude da mente que observa?'"
    },
    "tagline": {
      "en": "'Meditation is not about having a quiet mind; it is about knowing whatever is happening with a wise, non-reactive attitude.'",
      "pt": "'Meditar não é ter uma mente silenciosa; é saber o que quer que esteja acontecendo com uma atitude sábia e sem reatividade.'"
    },
    "overview": {
      "en": "Sayadaw U Tejaniya, having practiced as a textile merchant and householder before ordaining as a monk, created a breakthrough approach for modern people. Rather than forcing the mind onto a single sensation, he emphasizes watching the mind itself (cittānupassanā). The critical secret is 'Right Attitude': you don't meditate to get rid of thoughts, sleepiness, or defilements. You meditate to understand them. When greed, anger, or confusion appears, U Tejaniya asks: 'Can you know that greed is present without hating the greed?' This makes practice seamless from waking to sleeping.",
      "pt": "Sayadaw U Tejaniya, tendo vivido como comerciante leigo antes do monacato, criou uma abordagem libertadora para os tempos atuais. Em vez de forçar a mente em um único ponto, ele enfatiza a observação da própria mente (cittānupassanā). O segredo capital é a 'Atitude Correta': não se medita para eliminar pensamentos ou impurezas, mas para compreendê-los. Quando a cobiça ou irritação surgem, ele indaga: 'Você consegue saber que a raiva está presente sem odiar a raiva?' Isso torna a prática contínua do acordar ao dormir."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Sammā-Diṭṭhi & Citta-santāna",
                "title": {
                      "en": "1. Right Attitude & Relaxed Presence",
                      "pt": "1. Atitude Correta & Presença Descontraída"
                },
                "desc": {
                      "en": "Sayadaw U Tejaniya's primary foundation: checking the attitude of the mind before meditating. 'Is there greed to get something? Is there aversion to what is here? If there is tension, there is wrong view.'",
                      "pt": "O alicerce de Sayadaw U Tejaniya: checar a atitude da mente antes de meditar. 'Há cobiça querendo um estado sublime? Há aversão ao que está presente? Se houver tensão, há visão errônea'."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Checking the Mind's Posture:</strong> Relax the body and check: 'How is the mind approaching this moment?' Meditate with a light, curious touch. Do not try to make anything happen.</p>",
                      "pt": "<p><strong>Checando a Postura Mental:</strong> Relaxe o corpo e investigue: 'Com que atitude a mente encara este momento?' Pratique com leveza e curiosidade. Não tente fabricar nada especial.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Teachings from <em>Don't Look at the Light: What is the Mind Doing?</em> by Sayadaw U Tejaniya.</p>",
                      "pt": "<p>Ensinamentos da obra <em>Don't Look at the Light: What is the Mind Doing?</em> de Sayadaw U Tejaniya.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Scientist in the Laboratory:</strong> Looking through the microscope without cheering for pleasant bacteria or crying over unpleasant ones; simply recording data.</p>",
                      "pt": "<p><strong>O Cientista no Laboratório:</strong> Olhando pelas lentes do microscópio sem torcer pelas bactérias bonitas nem lamentar as feias; apenas registrando dados neutros.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Satata-sati",
                "title": {
                      "en": "2. Continuous Natural Awareness in Daily Life",
                      "pt": "2. Atenção Contínua e Natural no Cotidiano"
                },
                "desc": {
                      "en": "Awareness should not be confined to a cushion. Cultivating continuous mindfulness while eating, showering, driving, conversing, and working, with relaxed open eyes.",
                      "pt": "A atenção plena não deve ficar restrita à almofada. Cultivando presença ininterrupta ao comer, tomar banho, dirigir, conversar e trabalhar, de olhos abertos e postura natural."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Micro-Check Reminder:</strong> Frequently ask during the day: 'Is the mind aware right now?' The moment you ask, awareness is already present.</p>",
                      "pt": "<p><strong>Lembrete de Micro-Checagem:</strong> Pergunte-se com frequência durante o dia: 'A mente está consciente agora?' No instante em que você pergunta, a presença já despertou.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Direct application of <em>sampajañña-pabba</em> in MN 10 for householder practice.</p>",
                      "pt": "<p>Aplicação direta do <em>sampajañña-pabba</em> do MN 10 para a vida diária leiga.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Gentle Dripping Water Filling a Giant Jar:</strong> Drop by drop, continuous gentle dripping fills a massive ceramic cistern until it overflows.</p>",
                      "pt": "<p><strong>O Gotejar Contínuo Enchendo o Jarro:</strong> Gota a gota, o gotejar constante enche um tonel imenso de cerâmica até transbordar de água pura.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Dhammatā-ñāṇa",
                "title": {
                      "en": "3. Discerning Mind as an Impersonal Nature",
                      "pt": "3. Discernindo a Mente como Natureza Impessoal"
                },
                "desc": {
                      "en": "Understanding that thoughts, sensations, and consciousness itself are nature (Dhamma), operating according to conditions. They do not belong to you; they are not an 'I'.",
                      "pt": "Compreendendo que pensamentos, sensações e a própria consciência são processos naturais (Dhamma) regidos por condições. Não pertencem a você; não são um 'eu'."
                },
                "practiceInstructions": {
                      "en": "<p><strong>De-Personalizing Experience:</strong> When anger arises, note: 'Anger is nature arising due to causes.' Do not identify with it: 'I am angry'. Rest in unshakeable understanding.</p>",
                      "pt": "<p><strong>Despersonalizando a Experiência:</strong> Quando a raiva surgir, veja: 'A raiva é uma natureza que brotou por causas'. Não tome posse: 'Eu estou com raiva'. Repouse na sabedoria impessoal.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>SN 12.20</strong>: The fixed law of dependent origination (<em>dhammatā / dhammaniyāmatā</em>).</p>",
                      "pt": "<p><strong>SN 12.20</strong>: A lei imutável da originação dependente (<em>dhammatā / dhammaniyāmatā</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Leaves Falling from Autumn Trees:</strong> Watching leaves fall in the wind; you don't feel grief or responsibility for the falling of each leaf, for it is simply nature.</p>",
                      "pt": "<p><strong>Folhas Caindo das Árvores no Outono:</strong> Vendo as folhas voarem ao vento; você não sente culpa nem se apega a cada folha que cai, pois é apenas a natureza atuando.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "The single best method for busy professionals. You don't need a meditation room to check your attitude during a corporate meeting, while cooking dinner, or during an argument. Ask: 'What is the quality of the knowing mind right now?'",
      "pt": "O método mais acessível para a vida profissional moderna. Não é preciso isolamento para checar a atitude em reuniões de negócios ou lavando a louça. Questione-se: 'Qual a qualidade da mente que sabe agora?'"
    },
    "keyPaliTerms": [
      {
        "term": "Yoniso Manasikāra",
        "meaning": "Wise, appropriate attention that investigates conditionality"
      },
      {
        "term": "Diṭṭhi",
        "meaning": "View or attitude; having Right View prevents meditational striving and frustration"
      },
      {
        "term": "Dhamma-Niyāma",
        "meaning": "The natural cosmic law: seeing all mental states as impersonal natural events"
      }
    ],
    "curriculumOrder": 1
  },
  {
    "id": "burmese-webu",
    "cluster": "burmese",
    "number": "26",
    "paliTitle": "Webu Sayādaw Ānāpāna",
    "title": {
      "en": "Webu Sayādaw — Continuous Ānāpāna & Unbroken Vigilance",
      "pt": "Webu Sayādaw — Ānāpāna Contínuo & Vigilância Ininterrupta"
    },
    "lineageTradition": {
      "en": "Burmese Forest & Solitary Contemplative Tradition",
      "pt": "Tradição Contemplativa e Solitária da Birmânia"
    },
    "primaryMasters": "Ven. Webu Sayādaw (1896–1977), Sayagyi U Ba Khin",
    "canonicalRef": "MN 118, SN 54 (Ānāpāna Saṁyutta)",
    "difficulty": "foundational",
    "curriculumOrder": 2,
    "difficultyLabel": {
      "en": "Foundations",
      "pt": "Fundamentos"
    },
    "recommendedPrereq": {
      "en": "Willingness to anchor awareness on breath throughout daily activities",
      "pt": "Disposição para ancorar a atenção na respiração durante as atividades"
    },
    "whyStudy": {
      "en": "The supreme exemplar of single-pointed simplicity. Webu Sayādaw taught that focusing continuously on the in-and-out breath at the nostrils without a single second's lapse leads directly to liberation.",
      "pt": "O exemplo supremo de simplicidade focal. Webu Sayādaw ensinava que manter a atenção contínua na respiração nas narinas sem perder um único segundo conduz diretamente à libertação."
    },
    "coreFocus": {
      "en": "Unbroken awareness of the touch of breath at the nose-tip, absolute earnestness (Appamāda), day-and-night practice",
      "pt": "Atenção ininterrupta ao toque do ar nas narinas, diligência absoluta (Appamāda), prática contínua dia e noite"
    },
    "primaryAnchor": {
      "en": "The exact contact spot of the breath on the upper lip or nostrils (Nāsikagga)",
      "pt": "O ponto exato de contato da respiração no lábio superior ou na borda das narinas (Nāsikagga)"
    },
    "approachToJhana": {
      "en": "Effortless, rock-solid Samādhi arising naturally from continuous contact without permitting the mind to wander for even one breath",
      "pt": "Samādhi inabalável e espontâneo gerado pelo contato ininterrupto, sem permitir devaneios por uma única respiração"
    },
    "useOfNoting": {
      "en": "No labeling. Pure immediate awareness of the tactile impact of air entering and leaving",
      "pt": "Sem rotulação. Pura atenção imediata ao impacto tátil do ar entrando e saindo"
    },
    "tagline": {
      "en": "'Is the breath going in? You know it. Is it coming out? You know it. Stay right there without moving away.'",
      "pt": "'O ar está entrando? Você sabe. O ar está saindo? Você sabe. Permaneça aí sem se afastar um instante sequer.'"
    },
    "overview": {
      "en": "Webu Sayādaw was revered across Myanmar as one of the modern era's undisputed arahants. Living in simple bamboo huts and traveling on foot, he preached only one message: do not waste your human birth. By keeping the mind anchored to the physical touch of breath while sitting, walking, eating, and working, the mind cuts through all conceptual thinking and penetrates the three characteristics of impermanence, suffering, and non-self.",
      "pt": "Webu Sayādaw era reverenciado em toda Mianmar como um arahant autêntico da era moderna. Vivendo em cabanas simples de bambu e caminhando a pé pelas vilas, pregava uma única mensagem: não desperdice sua existência humana. Mantendo a mente ancorada no toque físico do ar ao sentar, caminhar, comer e trabalhar, a mente dissolve toda conceituação e penetra a inconstância, o sofrimento e a ausência de um Eu."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Nāsikagga-nimitta",
                "title": {
                      "en": "1. Pinpoint Focus at the Nostril Tip",
                      "pt": "1. Foco Preciso na Ponta das Narinas"
                },
                "desc": {
                      "en": "Webu Sayādaw's uncompromising anchor: anchoring attention exclusively at the small spot on the upper lip or nostril rim where the breath strikes physically.",
                      "pt": "A âncora rigorosa de Webu Sayādaw: fixar a atenção exclusivamente no pequeno ponto do lábio superior ou narinas onde o fôlego toca fisicamente."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Point-Blank Physical Contact:</strong> Feel the direct impact of air touching the skin. Do not follow the breath into the body or out into the room; stay at the gatepost.</p>",
                      "pt": "<p><strong>Contato Físico Direto:</strong> Sinta o toque imediato do ar na pele. Não acompanhe o fôlego para dentro dos pulmões nem para o exterior; permaneça firme no portal.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Webu Sayādaw's discourses in <em>The Essential Practice</em>.</p>",
                      "pt": "<p>Os discursos de Webu Sayādaw reunidos em <em>The Essential Practice</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Gatekeeper at the City Gate (Visuddhimagga):</strong> The gatekeeper does not wander into the city or roam into the countryside; he inspects people right as they pass the gate.</p>",
                      "pt": "<p><strong>O Guarda no Portão da Cidade (Visuddhimagga):</strong> O sentinela não entra nas ruas da cidade nem vagueia pelos campos; inspeciona cada viajante exatamente no limiar do portão.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Avicchindana-sati",
                "title": {
                      "en": "2. Unbroken Vigilance without Missing a Breath",
                      "pt": "2. Vigilância Ininterrupta sem Perder uma Respiração"
                },
                "desc": {
                      "en": "Webu Sayādaw's famous challenge: 'Can you keep your mind on the breath for just three consecutive in-and-out breaths without a single stray thought?' Building up unbroken continuity.",
                      "pt": "O célebre desafio de Webu Sayādaw: 'Você consegue manter a mente no fôlego por apenas três respirações consecutivas sem um único devaneio?' Forjando continuidade inquebrantável."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Consecutive Vigilance:</strong> Count 1, 2, 3 breaths with 100% focus. If attention wanders, start over immediately. Train the mind like an iron soldier.</p>",
                      "pt": "<p><strong>Vigilância Consecutiva:</strong> Conte 1, 2, 3 ciclos com foco absoluto. Se a mente escapar, recomece na hora. Treine a determinação como um soldado de aço.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>The canonical requirement of unbroken ardency (<em>ātāpī sampajāno satimā</em>, MN 10).</p>",
                      "pt": "<p>A exigência canônica de esforço contínuo e ardente (<em>ātāpī sampajāno satimā</em>, MN 10).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Rubbing Two Firesticks Without Pausing:</strong> If you stop rubbing for even a moment to rest, the heat dissipates and fire is never born.</p>",
                      "pt": "<p><strong>Friccionando Gravetos de Fogo sem Pausas:</strong> Se você parar de esfregar a madeira por um segundo sequer para descansar, o calor se perde e a chama nunca acende.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Adhivāsana-khantī",
                "title": {
                      "en": "3. Enduring Severe Physical Agony Without Shifting",
                      "pt": "3. Suportando Dores Agudas sem Mudar de Posição"
                },
                "desc": {
                      "en": "When burning knee, hip, or back pain arrives during long sits, do not shift or fidget! Stand your ground with the breath. Witness pain reach a crescendo and disintegrate.",
                      "pt": "Quando dores ardentes nos joelhos ou coluna surgirem, não mude a postura! Mantenha a guarda na respiração. Testemunhe a dor atingir o pico e desintegrar-se."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Immovable Discipline:</strong> Lock the posture like a bronze statue. Let the pain burn without adding mental resentment. Pain is just sensations arising and passing.</p>",
                      "pt": "<p><strong>Disciplina Imóvel:</strong> Firme a postura como uma estátua de bronze. Deixe a dor queimar sem adicionar queixa mental. A dor é apenas vibração passageira.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 119 §33</strong>: Enduring acute, piercing, racking bodily pains without dismay.</p>",
                      "pt": "<p><strong>MN 119 §33</strong>: Suportando dores lancinantes e agudas sem perturbação da mente.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Battle Elephant Receiving Arrows:</strong> The royal tusker marching straight into the barrage of enemy arrows without flinching or turning back.</p>",
                      "pt": "<p><strong>O Elefante Real Sob Chuva de Flechas:</strong> O poderoso elefante de batalha marchando em linha reta sob a tempestade de dardos inimigos sem recuar um milímetro.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Khippābhiññā-phala",
                "title": {
                      "en": "4. Seizing the Immediate Fruit of Awakening",
                      "pt": "4. Colhendo o Fruto Imediato do Despertar"
                },
                "desc": {
                      "en": "Webu Sayādaw's urgent plea: 'The Buddha's teaching is right here! Why postpone your freedom to future lives? Practice with your whole heart and cross over now!'",
                      "pt": "O apelo urgente de Webu Sayādaw: 'O ensinamento do Buda está vivo aqui e agora! Por que adiar a liberdade para vidas futuras? Pratique com todo o coração e liberte-se já!'"
                },
                "practiceInstructions": {
                      "en": "<p><strong>Urgent Determination:</strong> Realize the precious rarity of human birth and the Dhamma. Practice every sitting as if it were your last hour on earth.</p>",
                      "pt": "<p><strong>Determinação Urgente:</strong> Compreenda a raridade preciosa da vida humana e do Dhamma. Pratique cada sentada como se fosse sua última hora nesta terra.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 6.20 (Maraṇassati Sutta)</strong>: Mindfulness of death practiced with urgency.</p>",
                      "pt": "<p><strong>AN 6.20 (Maraṇassati Sutta)</strong>: A atenção plena na morte praticada com urgência salvífica.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Extinguishing Fire on Your Clothes (MN 63):</strong> If your turban or hair caught fire, with what lightning urgency would you extinguish it? Practice with that same resolve.</p>",
                      "pt": "<p><strong>Extinguindo o Fogo no Próprio Turbante (MN 63):</strong> Se suas roupas ou cabelos pegassem fogo, com que rapidez fulminante você apagaria as chamas? Pratique com essa mesma determinação.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "High Samādhi & Penetration of the 3 Characteristics",
      "hindrances": [
        {
          "name": "Sloth / Mind Wandering",
          "remedy": "Intensify attention on the sharpness of the physical touch; breathe slightly firmer for a few cycles."
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Feeling that simple breath is 'too basic' and wanting complex techniques",
          "remedy": "Webu Sayādaw's reminder: the Buddha awakened under the Bodhi tree with this exact breath. Simplicity is the fastest sword."
        }
      ]
    },
    "layLife": {
      "feasibility": "Exceptional (Can be practiced while waiting in lines, commuting, and typing)",
      "dailySchedule": "Take 10 conscious breaths at the nostrils every time you look at your watch or phone.",
      "householdObstacles": "Distractions of modern entertainment; treat every moment of stillness as a diamond.",
      "ethicsDuty": "Constant earnestness (Appamāda) in moral duties."
    },
    "paliTerms": [
      {
        "term": "Appamāda",
        "meaning": "Heedfulness / non-negligence / constant spiritual vigilance"
      },
      {
        "term": "Nāsikagga",
        "meaning": "The tip of the nose or upper lip contact point"
      }
    ]
  },
  {
    "id": "burmese-goenka-ledi",
    "cluster": "burmese",
    "number": "27",
    "paliTitle": "Goenka-Ledi Vedanānupassanā",
    "title": {
      "en": "S.N. Goenka & Ledi Sayādaw — Body Sweeping & Somatic Vedanā",
      "pt": "S.N. Goenka & Ledi Sayādaw — Varredura Corporal & Vedanā Somática"
    },
    "lineageTradition": {
      "en": "Burmese Lay Tradition (Ledi Sayādaw -> U Ba Khin -> Goenka)",
      "pt": "Tradição Leiga Birmanesa (Ledi Sayādaw -> U Ba Khin -> Goenka)"
    },
    "primaryMasters": "Ven. Ledi Sayādaw, Saya Thetgyi, Sayagyi U Ba Khin, S.N. Goenka",
    "canonicalRef": "DN 22 (Vedanānupassanā), SN 36 (Vedanā Saṁyutta)",
    "difficulty": "intermediate",
    "difficultyLabel": {
      "en": "Intermediate",
      "pt": "Intermediário"
    },
    "recommendedPrereq": {
      "en": "3 days of breath concentration",
      "pt": "3 dias de concentração na respiração"
    },
    "whyStudy": {
      "en": "Systematic, part-by-part somatic body sweep developing equanimity in the presence of physical sensations.",
      "pt": "Varredura corporal sistemática parte a parte cultivando equanimidade diante de sensações físicas."
    },
    "coreFocus": {
      "en": "Systematic, sequential bodily sweeping from head to feet; direct experiential observation of impermanence (anicca) through physical sensations",
      "pt": "Varredura sistemática e sequencial da cabeça aos pés; observação empírica direta de anicca através das sensações corporais"
    },
    "primaryAnchor": {
      "en": "Sensations (vedanā) on the surface and deep inside the physical body: heat, cold, tingling, pulsation, pressure, pain, vibration",
      "pt": "Sensações (vedanā) na superfície e profundidade do corpo: calor, frio, formigamento, pulsação, pressão, dor, vibração"
    },
    "approachToJhana": {
      "en": "3 days of refined Ānāpāna concentration (at the triangular area between nose and upper lip) establishing Access Concentration before commencing Vipassanā",
      "pt": "3 dias de Ānāpāna refinada (na área triangular entre nariz e lábio) estabelecendo Concentração de Acesso antes do início de Vipassanā"
    },
    "useOfNoting": {
      "en": "Strictly NO verbal labels, NO visualization, NO mantras. Pure silent observation of whatever somatic sensation is present with total equanimity (upekkhā)",
      "pt": "Rigorosamente SEM palavras mentais, SEM visualizações e SEM mantras. Observação silenciosa pura com total equanimidade (upekkhā)"
    },
    "tagline": {
      "en": "'Anicca, anicca, anicca. Observe objectively without craving pleasant sensations or averting unpleasant ones.'",
      "pt": "'Anicca, anicca, anicca. Observe com neutralidade sem desejar o agradável nem rejeitar o desagradável.'"
    },
    "overview": {
      "en": "Revived by Ven. Ledi Sayādaw to preserve the Dhamma for laypeople and popularized globally by S.N. Goenka, this technique focuses exclusively on bodily sensation (vedanā) as the direct juncture where craving (taṇhā) and clinging (upādāna) arise in Dependent Arising. Through disciplined part-by-part scanning from crown to toes, the practitioner dissolves the illusion of a solid body (ghanasaññā), experiencing sensations as ephemeral subatomic vibrations (bhaṅga). Realizing anicca in every cell rewires subconscious reactivity.",
      "pt": "Ressuscitada pelo Ven. Ledi Sayādaw para democratizar o Dhamma e difundida mundialmente por S.N. Goenka, esta técnica eleva a sensação corporal (vedanā) ao papel de elo primordial onde o anseio (taṇhā) se engatilha no Surgimento Dependente. Por meio de varreduras minuciosas do topo da cabeça à ponta dos pés, o meditador dissolve a ilusão da solidez corpórea (ghanasaññā), sentindo o corpo como um fluxo de vibrações subatômicas transitórias (bhaṅga). Compreender anicca a nível celular extingue a reatividade inconsciente."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Ānāpāna-samādhi",
                "title": {
                      "en": "1. Three Days of Focused Nostril Ānāpāna",
                      "pt": "1. Três Dias de Ānāpāna Focado nas Narinas"
                },
                "desc": {
                      "en": "The first phase of the 10-day retreat: focusing exclusively on natural breath sensations within the triangular zone from the bridge of the nose down to the upper lip.",
                      "pt": "A primeira fase do retiro de 10 dias: concentrando a mente exclusivamente na área triangular entre a raiz do nariz e o lábio superior, aguçando a sensibilidade tátil."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Refining the Surgical Knife:</strong> Notice subtle sensations: touch, temperature, perspiration, tingling, itching. Sharpen attention from gross sensations to refined subtle data.</p>",
                      "pt": "<p><strong>Afiando o Bisturi da Atenção:</strong> Perceba sensações sutis: toque, temperatura, cócegas, suor, vibração. Refine a atenção do dado grosseiro para o micro-sutil.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>S.N. Goenka's 10-day Vipassanā discourse curriculum based on Ven. Ledi Sayādaw's lineage.</p>",
                      "pt": "<p>O currículo de discursos de 10 dias de S.N. Goenka baseado na linhagem do Ven. Ledi Sayādaw.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Sharpening a Razor on an Oily Stone:</strong> Honing the blade back and forth until it can slice a hair floating on water.</p>",
                      "pt": "<p><strong>Afiando a Navalha na Pedra de Óleo:</strong> Esfregando a lâmina com firmeza até que consiga cortar um fio de cabelo flutuando na água.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Kāyānupassanā & Vedanā-vicāra",
                "title": {
                      "en": "2. Systematic Body Sweeping (Part by Part)",
                      "pt": "2. Varredura Corporal Sistemática (Parte por Parte)"
                },
                "desc": {
                      "en": "Day 4 onwards: moving attention systematically from the top of the head down to the tips of the toes, and from toes up to the crown, observing sensations without reaction.",
                      "pt": "Do 4º dia em diante: movendo a atenção metodicamente do topo da cabeça até a ponta dos pés, e dos pés ao topo da cabeça, observando todas as sensações sem reagir."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Methodical Somatic Survey:</strong> Cover every square inch of skin. Don't jump around. If there is pain, observe it; if numbness, wait patiently until a sensation is felt.</p>",
                      "pt": "<p><strong>Varredura Metódica:</strong> Cubra cada centímetro de pele. Não salte áreas. Se houver dor intensa, observe; se houver dormência, aguarde com paciência até sentir o toque.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>SN 36.11</strong>: Tracing feeling throughout the material aggregate.</p>",
                      "pt": "<p><strong>SN 36.11</strong>: Mapeando as sensações através de todo o agregado material.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>A Beam of Sunlight Scanning a Room:</strong> Shining slowly from ceiling to floor, illuminating every dust particle without getting snagged on any object.</p>",
                      "pt": "<p><strong>O Facho de Luz Varrendo o Aposento:</strong> Iluminando lentamente do teto ao chão, revelando cada partícula de poeira sem ficar preso em móvel algum.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Bhaṅga-ñāṇa",
                "title": {
                      "en": "3. Dissolution of Solid Matter (Bhaṅga-ñāṇa)",
                      "pt": "3. Dissolução da Matéria Sólida (Bhaṅga-ñāṇa)"
                },
                "desc": {
                      "en": "As concentration deepens, the gross solidity of the body dissolves. One experiences a rapid, free-flowing stream of subtle electrical vibrations throughout the whole organism.",
                      "pt": "Conforme a mente refina, a compacidade sólida do corpo colapsa. Vivencia-se um fluxo contínuo de microvibrações bioelétricas sutis permeando todo o organismo."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Experiencing Microscopic Impermanence:</strong> Witness the body as a cloud of subatomic particles arising and bursting. Do not crave this blissful vibration!</p>",
                      "pt": "<p><strong>Vivenciando a Impermanência Atômica:</strong> Contemple o corpo como uma nuvem de partículas brotando e estourando. Não se apegue a essa vibração prazerosa!</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Stage 6 of the classical 16 Visuddhiñāṇas (Knowledge of Dissolution).</p>",
                      "pt": "<p>Estágio 6 dos 16 estágios clássicos de insight (Conhecimento da Dissolução - Bhaṅga-ñāṇa).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Ice Sculpture Melting in the Desert Sun:</strong> The solid, carved shape of ice loses its form, melting completely into flowing, sparkling water.</p>",
                      "pt": "<p><strong>A Escultura de Gelo Derretendo ao Sol:</strong> A forma sólida de gelo perde suas bordas, desfazendo-se inteiramente em água corrente cintilante.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Upekkhā & Saṅkhārakkhiya",
                "title": {
                      "en": "4. Absolute Equanimity & Eradication of Saṅkhāras",
                      "pt": "4. Equanimidade Absoluta & Erradicação de Saṅkhāras"
                },
                "desc": {
                      "en": "The master lesson of Goenka's path: observing pleasant sensations without craving (rāga) and painful sensations without aversion (dosa). Breaking the automatic cycle of conditioning.",
                      "pt": "A lição mestra do método Goenka: observar sensações agradáveis sem apego (rāga) e dores sem aversão (dosa). Quebrando o ciclo condicionado de reações cegas (saṅkhāras)."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Sitting with Strong Determination (Adhiṭṭhāna):</strong> Sit for one hour without moving a single finger. Treat sensation as sensation, knowing: 'Anicca, anicca—this too will change.'</p>",
                      "pt": "<p><strong>Sentada de Firme Determinação (Adhiṭṭhāna):</strong> Sente-se por uma hora sem mover um dedo sequer. Trate sensação como sensação, sabendo: 'Anicca, anicca—isto também mudará'.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>SN 36.6</strong>: Severing the habit of reacting to feelings with craving and aversion.</p>",
                      "pt": "<p><strong>SN 36.6</strong>: Rompendo o hábito atávico de reagir às sensações com cobiça e revolta.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>A Line Drawn on Water (SN 22.84):</strong> Reaction in an untrained mind is like a line carved in stone (lasts years); in an equanimous mind, it is like a line drawn on water (vanishes instantly).</p>",
                      "pt": "<p><strong>A Linha Traçada na Água (SN 22.84):</strong> A reação na mente comum é como uma linha gravada na pedra (dura eras); na mente equânime, é como um risco traçado na água (some no mesmo instante).</p>"
                }
          }
    ],
    "layApplication": {
      "en": "Whenever emotional stress or anger manifests as physical constriction (tight chest, clenched jaw, knot in the stomach), bypass the mental drama. Scan the physical knot directly and let it vibrate and dissipate under the light of objective equanimity.",
      "pt": "Sempre que o estresse ou a mágoa se manifestarem somaticamente (peito apertado, mandíbula travada, nó no estômago), ignore a historinha mental. Observe o nó físico diretamente até que ele se disperse sob o olhar neutro da equanimidade."
    },
    "keyPaliTerms": [
      {
        "term": "Vedanā",
        "meaning": "Sensation, the feeling tone that triggers conditioned craving"
      },
      {
        "term": "Bhaṅga",
        "meaning": "Dissolution, the crumbling of apparent solidity into subtle vibrating flux"
      },
      {
        "term": "Ghanasaññā",
        "meaning": "The distorted perception of compactness and solidity"
      }
    ],
    "curriculumOrder": 3
  },
  {
    "id": "burmese-mahasi",
    "cluster": "burmese",
    "number": "28",
    "paliTitle": "Mahāsi Vipassanā-Ñāṇa",
    "title": {
      "en": "Mahāsi Sayādaw — Momentary Noting & The 16 Stages of Insight",
      "pt": "Mahāsi Sayādaw — Rotulação Momentânea & Os 16 Estágios de Insight"
    },
    "lineageTradition": {
      "en": "Burmese Dry-Insight Lineage (Mahāsi Sāsana Yeiktha)",
      "pt": "Linhagem Birmanesa de Vipassanā Direta (Mahāsi Sāsana Yeiktha)"
    },
    "primaryMasters": "Ven. Mahāsi Sayādaw, Ven. Sayadaw U Pandita, Ven. Sayadaw U Silananda",
    "canonicalRef": "DN 22 (Mahāsatipaṭṭhāna Sutta), Visuddhimagga, Abhidhammattha Saṅgaha",
    "difficulty": "intermediate",
    "difficultyLabel": {
      "en": "Intermediate",
      "pt": "Intermediário"
    },
    "recommendedPrereq": {
      "en": "Foundational mindfulness",
      "pt": "Atenção plena básica"
    },
    "whyStudy": {
      "en": "Laser-like mental noting of all sensory events, navigating the classical 16 stages of insight knowledges (ñāṇas).",
      "pt": "Rotulação mental minuciosa de cada evento sensorial, percorrendo os 16 estágios clássicos de insight (ñāṇas)."
    },
    "coreFocus": {
      "en": "Moment-to-moment verbal noting (nāmarūpa-pariccheda), observation of abdominal movement, systematic navigation of the 16 Insight Knowledges (Visuddhiñāṇa)",
      "pt": "Rotulação verbal momento a momento (nāmarūpa-pariccheda), observação do abdômen e navegação dos 16 Conhecimentos de Insight (Visuddhiñāṇa)"
    },
    "primaryAnchor": {
      "en": "The physical movement of the abdomen rising and falling with natural respiration (wind element / vāyodhātu)",
      "pt": "O movimento físico do abdômen subindo e descendo com a respiração natural (elemento ar / vāyodhātu)"
    },
    "approachToJhana": {
      "en": "Focus on Momentary Concentration (Khaṇika Samādhi) and Vipassanā-Jhāna rather than fixed absorption (Appanā-Jhāna)",
      "pt": "Ênfase na Concentração Momentânea (Khaṇika Samādhi) e nos Jhānas de Insight em vez de absorção estática rígida"
    },
    "useOfNoting": {
      "en": "Systematic, relentless mental labeling of every sensory and mental event: 'rising', 'falling', 'thinking', 'hearing', 'itching', 'lifting'",
      "pt": "Etiquetagem mental metódica de cada evento: 'subindo', 'descendo', 'pensando', 'ouvindo', 'coçando', 'erguendo'"
    },
    "tagline": {
      "en": "The premier modern Vipassanā map: tracking the mind through the brilliant lights of arising and passing to the serene release of Equanimity towards Formations.",
      "pt": "O mapa clássico de Vipassanā: da efervescência das luzes do surgimento e cessação à equanimidade serena que precede a libertação."
    },
    "overview": {
      "en": "The Mahāsi Sayādaw method is arguably the most influential Vipassanā technique of the 20th century. By anchoring attention to the abdominal rise and fall and applying precise mental labels ('noting'), it creates a continuous laser-like momentary concentration (khaṇika samādhi). As mindfulness accelerates, the meditator distinguishes physical phenomena (rūpa) from the knowing mental act (nāma), penetrates cause and effect, passes through the rapturous Knowledge of Arising and Passing Away (udayabbaya-ñāṇa), endures the sobering 'Dukkha Knowledges', reaches Equanimity towards Formations (saṅkhārupekkhā-ñāṇa), and realizes Nibbāna.",
      "pt": "O método de Mahāsi Sayādaw é indiscutivelmente o mais influente da era contemporânea. Ao ancorar a mente na subida e descida abdominal e aplicar rótulos mentais precisos ('noting'), forja-se uma concentração momentânea contínua e penetrante. Conforme a atenção ganha velocidade, o praticante distingue matéria (rūpa) de mente (nāma), desvenda causa e efeito, atravessa o eufórico Conhecimento do Surgimento e Fim (udayabbaya-ñāṇa), enfrenta as purificadoras fases da noite escura (dukkha-ñāṇas), atinge a Equanimidade ante as Formações e alcança o fruto de Nibbāna."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Udara-vuṭṭhāna-nissita",
                "title": {
                      "en": "1. Primary Anchor: Noting the Abdomen Rising & Falling",
                      "pt": "1. Âncora Primária: Notando o Subir e Descer do Abdômen"
                },
                "desc": {
                      "en": "Focusing attention on the bodily movement of the abdomen during breathing. Silently mentally labeling: 'rising' as the belly expands, and 'falling' as it contracts.",
                      "pt": "Focalizando o movimento físico do abdômen durante a respiração. Rotulando mentalmente em silêncio: 'subindo' quando a barriga expande, e 'descendo' quando contrai."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Precise Momentary Contact:</strong> Keep the mental note synchronized with the physical expansion. Do not visualize the stomach; feel the direct sensations of pressure and tension.</p>",
                      "pt": "<p><strong>Sincronia Precisa:</strong> Mantenha o rótulo mental perfeitamente casado com a expansão física. Não visualize o estômago; sinta a pressão e a tensão muscular direta.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Mahāsi Sayādaw's <em>Practical Vipassanā Meditative Exercises</em> and <em>Manual of Insight</em>.</p>",
                      "pt": "<p>A obra seminal de Mahāsi Sayādaw: <em>Manual of Insight (Tratado de Vipassanā Prática)</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Stamping a Date on a Letter:</strong> Bringing down the stamp right on the paper at the precise moment it slides across the desk.</p>",
                      "pt": "<p><strong>O Carimbo no Envelope:</strong> Batendo o carimbo no papel no segundo exato em que ele passa pela bancada de trabalho.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Āgantuka-lakkhaṇa-noting",
                "title": {
                      "en": "2. Secondary Noting: Tracking Stray Events",
                      "pt": "2. Rotulação Secundária: Mapeando Distrações e Sons"
                },
                "desc": {
                      "en": "When a distinct physical sensation, wandering thought, external sound, or emotion interrupts the abdominal rhythm, shift attention to it and note it: 'thinking, thinking', 'hearing, hearing', 'itching, itching'.",
                      "pt": "Quando uma sensação forte, pensamento errante, som ou emoção interromper o ritmo abdominal, desloque o foco para lá e rotule: 'pensando, pensando', 'ouvindo, ouvindo', 'coçando, coçando'."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Neutral Labeling:</strong> Label the intruder 2 or 3 times without frustration, witness its fading, then return smoothly to 'rising, falling'.</p>",
                      "pt": "<p><strong>Rotulação Neutra:</strong> Rotule a distração duas ou três vezes com serenidade, veja-a desvanecer e retorne suavemente para 'subindo, descendo'.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Continuous mindfulness across the four Satipaṭṭhānas using mental verbalization as an anchoring tether.</p>",
                      "pt": "<p>Atenção contínua através dos quatro Satipaṭṭhānas usando o rótulo verbal como âncora estabilizadora.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Cat Watching the Mouse Hole:</strong> The cat sits motionless by the hole; the moment the mouse pokes its nose out, the cat pounces with laser precision.</p>",
                      "pt": "<p><strong>O Gato à Espreita da Toca do Rato:</strong> O felino vigia imóvel o buraco; no milissegundo em que o rato põe o focinho para fora, ele dá o bote infalível.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Udayabbaya-ñāṇa & Bhaṅga",
                "title": {
                      "en": "3. Traversing the Arising & Passing of Phenomena",
                      "pt": "3. Atravessando o Surgimento & Dissolução dos Fenômenos"
                },
                "desc": {
                      "en": "Noting speeds up organically. One penetrates the 4th insight stage (udayabbaya-ñāṇa): seeing birth and death of mind-moments. Then entering dissolution (bhaṅga), where shapes vanish into flashing dissolutions.",
                      "pt": "A rotulação acelera espontaneamente. Penetra-se o 4º estágio de insight (udayabbaya-ñāṇa): o nascimento e morte de cada microssegundo. Depois a dissolução (bhaṅga), onde as formas se desmancham."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Riding the Insight Wave:</strong> Do not get distracted by inner lights or spiritual joy (corruptions of insight). Keep noting through the rapid dissolution of reality.</p>",
                      "pt": "<p><strong>Navegando na Onda de Insight:</strong> Não se deixe seduzir por luzes ou arrebatamentos passageiros. Continue notando através da rápida dissolução dos dados sensoriais.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Stages 4 to 6 of the classical 16 Visuddhiñāṇa system detailed in <em>Visuddhimagga</em> Ch. XX–XXI.</p>",
                      "pt": "<p>Estágios 4 a 6 dos 16 estágios do <em>Visuddhimagga</em> Cap. XX–XXI.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Watching Raindrops Hitting a Pond:</strong> Each drop hits the water, makes a tiny ripple, and disappears instantly into the depths.</p>",
                      "pt": "<p><strong>Pingos de Chuva no Lago:</strong> Cada gota atinge a superfície, forma uma ondulação efêmera e desaparece instantaneamente nas profundezas.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Saṅkhārupekkhā & Magga-Phala",
                "title": {
                      "en": "4. Equanimity Towards Formations & Stream-Entry",
                      "pt": "4. Equanimidade com as Formações & Entrada na Corrente"
                },
                "desc": {
                      "en": "Passing through the Dukkha-ñāṇas (fear, misery, desire for release) into supreme equanimity regarding all formations (saṅkhārupekkhā). The mind drops all noting and touches Nibbāna in the fruit of Sotāpanna.",
                      "pt": "Superando os Dukkha-ñāṇas (medo, perigo e desencanto) rumo à equanimidade suprema diante de todas as formações (saṅkhārupekkhā). A mente cessa os rótulos e toca Nibbāna na Entrada na Corrente."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Effortless Equanimous Surrender:</strong> Effort drops away completely. The mind sits balanced, indifferent to pleasure and pain, until consciousness pivots to the Unconditioned.</p>",
                      "pt": "<p><strong>Entrega Equânime sem Esforço:</strong> O esforço cessa por completo. A mente permanece em equilíbrio absoluto, até que a consciência salta para o Incondicionado.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Stages 11–14 of the 16 Insight Knowledges culminating in path and fruition (<em>magga-phala</em>).</p>",
                      "pt": "<p>Estágios 11 a 14 dos 16 estágios de insight culminando no caminho e fruto de nobreza (<em>magga-phala</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Crow Released from the Sea Ship (DN 11):</strong> Sailors launch a crow to find land; it flies in all directions, finds no shore, and returns. Finally, it spots the coast and flies straight to freedom.</p>",
                      "pt": "<p><strong>O Corvo Solto da Caravela no Oceano (DN 11):</strong> Marinheiros soltam um corvo; ele voa para todos os lados sem achar terra e volta. Quando avista a praia, voa em linha reta e não retorna mais ao navio.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "Noting provides an instant brake against runaway mental storylines during the day. When irritation flares in traffic, note: 'annoyed, annoyed, annoyed'. Labeling immediately dis-identifies the ego from the emotional storm.",
      "pt": "A rotulação é um freio de emergência contra narrativas obsessivas. Quando surgir irritação no trânsito ou no trabalho, rotule internamente: 'irritação, irritação'. O ato de nomear desfaz a fusão imediata entre o ego e a emoção."
    },
    "keyPaliTerms": [
      {
        "term": "Khaṇika Samādhi",
        "meaning": "Momentary concentration that moves smoothly from object to object"
      },
      {
        "term": "Nāma-Rūpa",
        "meaning": "Mentality (the knowing) and Materiality (the object known)"
      },
      {
        "term": "Saṅkhārupekkhā-ñāṇa",
        "meaning": "The supreme insight knowledge of Equanimity towards all conditioned formations"
      }
    ],
    "curriculumOrder": 4
  },
  {
    "id": "burmese-sunlun",
    "cluster": "burmese",
    "number": "29",
    "paliTitle": "Sunlun Vipassanā",
    "title": {
      "en": "Sunlun Sayādaw — Intense Sensation & Breath of Steel",
      "pt": "Sunlun Sayādaw — Sensação Intensa & Respiração de Aço"
    },
    "lineageTradition": {
      "en": "Burmese Vipassanā (Intensive Sensation Lineage)",
      "pt": "Vipassanā Birmanês (Linhagem de Sensação Intensa)"
    },
    "primaryMasters": "Ven. Sunlun Sayādaw U Kavi (1878–1952)",
    "canonicalRef": "MN 10 (Kāyānupassanā), SN 36 (Vedanā Saṁyutta)",
    "difficulty": "intermediate",
    "curriculumOrder": 5,
    "difficultyLabel": {
      "en": "Intermediate",
      "pt": "Intermediário"
    },
    "recommendedPrereq": {
      "en": "Physical sitting stamina and determination to face bodily discomfort",
      "pt": "Resistência física para sentar e determinação para encarar desconforto"
    },
    "whyStudy": {
      "en": "A vigorous, uncompromising method that uses rapid, forceful breathing followed by total physical stillness to penetrate intense physical pain and break mental reactivity.",
      "pt": "Método vigoroso e intransigente que utiliza respiração rápida e firme seguida de imobilidade total para penetrar dores físicas e romper reatividades mentais."
    },
    "coreFocus": {
      "en": "Forceful rhythmic respiration to clear sluggishness, freezing the posture, penetrating agonizing bodily sensations without squirming",
      "pt": "Respiração rítmica intensa para quebrar a letargia, congelamento da postura, penetração em sensações corporais intensas sem hesitar"
    },
    "primaryAnchor": {
      "en": "The friction and sound of rapid breath, transitioning into the direct center of intense sensation (Vedanā)",
      "pt": "O atrito e o som da respiração ritmada, transitando para o centro da sensação física intensa (Vedanā)"
    },
    "approachToJhana": {
      "en": "Deep access concentration (Upacāra) forged through intense sensory endurance, leading directly into bare Vipassanā knowledges",
      "pt": "Concentração de acesso profunda forjada na resistência sensorial, abrindo diretamente os estágios de insight de Vipassanā"
    },
    "useOfNoting": {
      "en": "Strictly non-verbal. No thinking, no conceptualizing: hold awareness directly on the raw sensation without adding 'pain' or 'hurting'",
      "pt": "Estritamente não-verbal. Sem narrativas: sustentar a mente no cerne da sensação crua sem rotular 'dor' ou 'sofrimento'"
    },
    "tagline": {
      "en": "'Be rigorous with the breath. When sensation arises, do not shift. Pierce straight into the sensation.'",
      "pt": "'Seja vigoroso na respiração. Quando a sensação queimar, não se mova. Atravesse o centro da sensação.'"
    },
    "overview": {
      "en": "Sunlun Sayādaw was an illiterate farmer who achieved deep realization through raw, relentless sitting. The Sunlun technique begins with 45 minutes of vigorous, rhythmic, rapid in-and-out breathing through the nose, creating high alertness and charging the nervous system. The practitioner then suddenly halts the breath and sits in absolute, stone-like immobility, meeting whatever pain, burning, or throbbing sensations arise without flinching. By refusing to run away from discomfort, the mind penetrates beneath pain to discover pure, unconditioned freedom.",
      "pt": "Sunlun Sayādaw era um agricultor simples que atingiu elevado despertar através da meditação crua e destemida. A técnica Sunlun inicia com 45 minutos de respiração vigorosa e ritmada pelas narinas, elevando a energia mental. Em seguida, cessa-se o esforço e senta-se em imobilidade de pedra, acolhendo queimações, dores e pulsações sem mover um dedo. Ao recusar a fuga do desconforto, a mente penetra além da dor e atinge a libertação pura."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Balavā-vāyo-samanvesanā",
                "title": {
                      "en": "1. Rapid, Forceful Respiration (Breath of Steel)",
                      "pt": "1. Respiração Rápida e Vigorosa (Fôlego de Aço)"
                },
                "desc": {
                      "en": "Sunlun Sayādaw's vigorous entry: breathing forcefully, rapidly, and rhythmically through the nose like a roaring blacksmith's bellows, generating immense bio-electric energy and concentration.",
                      "pt": "A entrada vigorosa de Sunlun Sayādaw: respirar com força, rapidez e ritmo pelas narinas como o fole de uma forja incandescente, gerando tremenda energia e concentração."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Aggressive Sensory Awakening:</strong> Keep the rhythm steady and fearless. Let the friction of the breath ignite intense heat at the nostrils, blasting away all sluggishness.</p>",
                      "pt": "<p><strong>Despertar Sensorial Vigoroso:</strong> Mantenha o ritmo firme e destemido. Deixe a fricção do ar inflamar calor nas narinas, varrendo qualquer rastro de torpor.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Sunlun Sayādaw's method of using strong tactile friction to establish instantaneous access samādhi.</p>",
                      "pt": "<p>O método de Sunlun Sayādaw utilizando forte fricção tátil para forjar concentração de acesso imediata.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Locomotive Building Up Full Steam:</strong> Churning power into the boilers until the train surges forward at top speed, unstoppable by obstacles.</p>",
                      "pt": "<p><strong>A Locomotiva Acumulando Pressão Total:</strong> Alimentando a caldeira de vapor até que o trem avance com potência máxima, imparável por qualquer barreira.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Thambhana & Vedanā-pavesa",
                "title": {
                      "en": "2. Sudden Halting & Dropping into the Sensation",
                      "pt": "2. Parada Abrupta & Mergulho na Sensação Crua"
                },
                "desc": {
                      "en": "When the breath reaches maximum intensity, halt completely! Do not relax; drop attention like an anchor directly into the most severe sensation or piercing pain in the body.",
                      "pt": "Quando o fôlego atingir a intensidade máxima, pare abruptamente! Não relaxe; lance a atenção como uma âncora pesada diretamente na dor ou sensação mais intensa do corpo."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Direct Impact:</strong> Do not retreat into fantasy. Meet the pain head-on at the exact center of its burning core with unblinking vigilance.</p>",
                      "pt": "<p><strong>Impacto Frontal:</strong> Não fuja para devaneios. Encare a dor de frente exatamente no epicentro do fogo, com vigilância sem piscar.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Direct confrontation with <em>dukkha-vedanā</em> as taught in the Sunlun tradition.</p>",
                      "pt": "<p>O confronto direto com <em>dukkha-vedanā</em> preconizado na linhagem de Sunlun.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Diver Plunging into Icy Waters:</strong> Leaping straight off the rocky cliff into the freezing mountain pool without hesitation.</p>",
                      "pt": "<p><strong>O Mergulhador Saltando nas Águas Glaciais:</strong> Lançando-se do penhasco rochoso diretamente no lago gelado sem qualquer vacilo.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Accanta-adhivāsana",
                "title": {
                      "en": "3. No Flinching, No Avoidance, No Thinking",
                      "pt": "3. Sem Esquivar, Sem Fugir, Sem Conceitualizar"
                },
                "desc": {
                      "en": "Sunlun's iron discipline: do not shift the body, do not label, do not intellectualize. Hold fast inside the burning pain with unyielding courage.",
                      "pt": "A disciplina de aço de Sunlun: não mude de postura, não rotule, não filosofe. Permaneça firme dentro da dor que queima com coragem inabalável."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Stripping the Mental Story:</strong> Refuse to think: 'This is my leg; this pain is killing me.' Stay with the bare raw sensation until conceptual boundaries shatter.</p>",
                      "pt": "<p><strong>Desnudando a Narrativa Mental:</strong> Recuse-se a pensar: 'Esta é minha perna; esta dor vai me matar'. Fique com o dado bruto até que as barreiras conceituais quebrem.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 119 §33</strong>: Developing hero-like endurance (<em>adhivāsana-khantī</em>).</p>",
                      "pt": "<p><strong>MN 119 §33</strong>: Desenvolvendo a paciência heroica (<em>adhivāsana-khantī</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Iron Anvil Under the Hammer:</strong> The heavy anvil receives thousands of crushing hammer blows without denting, complaining, or splitting.</p>",
                      "pt": "<p><strong>A Bigorna de Ferro Sob o Martelo:</strong> A bigorna pesada recebe milhares de marretadas brutas sem amassar, reclamar ou partir-se ao meio.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Bhedana & Santi-adhigama",
                "title": {
                      "en": "4. Piercing the Pain into Sudden Liberation",
                      "pt": "4. Perfurando a Dor Rumo à Libertação Repentina"
                },
                "desc": {
                      "en": "As the meditator refuses to budge, the pain intensifies to an absolute crescendo, and then—in an instantaneous breakthrough—shatters completely into pristine, cooling liberation.",
                      "pt": "Conforme o meditador recusa recuar, a dor atinge um clímax absoluto e então—num rompimento fulminante—estilhaça por completo numa paz fresca e indescritível."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Breakthrough:</strong> Experience the sudden disappearance of physical boundaries. The fire turns into crystalline coolness. Rest in triumphant freedom.</p>",
                      "pt": "<p><strong>O Rompimento Libertador:</strong> Experimente o desaparecimento súbito das barreiras corpóreas. O fogo converte-se em frescor cristalino. Descanse na vitória da liberdade.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Sunlun Sayādaw's personal attainment of Arahantship through radical confrontation with vedanā.</p>",
                      "pt": "<p>A realização espiritual de Sunlun Sayādaw alcançando a libertação pelo confronto visceral com a sensação.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Dam Bursting Open into Cool Valleys:</strong> The colossal pressure of the backed-up water bursts the concrete dam, flooding the dry valley with life-giving water.</p>",
                      "pt": "<p><strong>A Barragem que Rompe e Irriga o Vale:</strong> A pressão colossal das águas represadas rompe a barreira, inundando a planície sedenta com rios de alívio e vida.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Uprooting of Dosa (Aversion) & Arising of Bhanga-Ñāṇa (Dissolution)",
      "hindrances": [
        {
          "name": "Physical Flinching / Restlessness",
          "remedy": "Make a firm resolution (Adhiṭṭhāna): 'I will not move until the bell sounds.'"
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Fear that intense sitting pain will permanently injure knees or spine",
          "remedy": "Check your physical safety beforehand; understand that sitting pain is neurological reactivity, not tissue damage."
        }
      ]
    },
    "layLife": {
      "feasibility": "Moderate to Challenging (Supreme training for mental toughness and resilience)",
      "dailySchedule": "One 60-minute session on weekends where you vow absolute zero movement.",
      "householdObstacles": "Giving in to minor discomforts; apply Sunlun stamina when dealing with difficult tasks or stress.",
      "ethicsDuty": "Patience and forbearance (Khantī Parami)."
    },
    "paliTerms": [
      {
        "term": "Adhiṭṭhāna",
        "meaning": "Unwavering resolve / firm determination to maintain posture"
      },
      {
        "term": "Khantī",
        "meaning": "Patient endurance in the face of physical and mental adversity"
      }
    ]
  },
  {
    "id": "burmese-mogok",
    "cluster": "burmese",
    "number": "30",
    "paliTitle": "Mogok Paṭiccasamuppāda",
    "title": {
      "en": "Mogok Sayādaw — Severing the Wheel of Paṭiccasamuppāda",
      "pt": "Mogok Sayādaw — Rompendo a Roda do Paṭiccasamuppāda"
    },
    "lineageTradition": {
      "en": "Burmese Vipassanā (Dependent Origination Lineage)",
      "pt": "Vipassanā Birmanês (Linhagem de Originação Dependente)"
    },
    "primaryMasters": "Ven. Mogok Sayādaw U Vimala (1899–1962)",
    "canonicalRef": "SN 12.1–12.2 (Paṭiccasamuppāda Sutta), SN 36.1",
    "difficulty": "advanced",
    "curriculumOrder": 6,
    "difficultyLabel": {
      "en": "Advanced",
      "pt": "Avançado"
    },
    "recommendedPrereq": {
      "en": "Understanding of the 12 links of Dependent Origination and Satipaṭṭhāna",
      "pt": "Compreensão dos 12 elos de Originação Dependente e Satipaṭṭhāna"
    },
    "whyStudy": {
      "en": "Translates the Buddha's most complex doctrine—Dependent Origination—into a practical diagnostic map. Teaches meditators exactly how to sever the link between Vedanā (feeling) and Taṇhā (craving) in real time.",
      "pt": "Traduz a doutrina mais profunda do Buda — a Originação Dependente — em um mapa prático. Ensina a cortar o elo entre Vedanā (sensação) e Taṇhā (desejo) no instante do surgimento."
    },
    "coreFocus": {
      "en": "Real-time inspection of feelings (Vedanā) and mind-states (Cittānupassanā), seeing arising (Uppāda) and passing away (Vaya), preventing Craving",
      "pt": "Inspeção em tempo real das sensações e estados mentais, observando o surgimento e a cessação para impedir o apego"
    },
    "primaryAnchor": {
      "en": "The junction where sensory contact (Phassa) produces feeling (Vedanā), catching the heart before Craving (Taṇhā) ignites",
      "pt": "O ponto de junção onde o contato gera sensação, interceptando a mente antes que o desejo inflamado (Taṇhā) nasça"
    },
    "approachToJhana": {
      "en": "Access concentration focused on observing the rapid birth and death of mental states, transitioning directly into Noble Path Insight (Magga-Ñāṇa)",
      "pt": "Concentração focada em discernir o nascimento e morte vertiginosos dos estados mentais, conduzindo ao insight do Nobre Caminho"
    },
    "useOfNoting": {
      "en": "Analytical recognition: 'Arising, vanishing, not permanent; why crave it?' Cutting the chain of suffering on the spot",
      "pt": "Discernimento analítico: 'Surge, some, inconstante; por que cobiçar?' Cortando a corrente do sofrimento no ato"
    },
    "tagline": {
      "en": "'Between Feeling and Craving lies the sword of Wisdom. Cut there, and the wheel of Samsara stops turning.'",
      "pt": "'Entre a Sensação e o Desejo repousa a espada da Sabedoria. Corte aí, e a roda do Samsara cessa de girar.'"
    },
    "overview": {
      "en": "Ven. Mogok Sayādaw is universally renowned across Burma for his circular chart of Paṭiccasamuppāda. He pointed out that while we cannot stop sensory contacts (the eye sees, the ear hears), we have complete power at the critical intersection where Feeling (Vedanā) gives birth to Craving (Taṇhā). By observing pleasant feeling with wisdom (seeing it arise and vanish) rather than craving, and unpleasant feeling with wisdom rather than anger, the circular momentum of karmic rebirth is halted.",
      "pt": "Ven. Mogok Sayādaw é célebre por seu diagrama circular de Paṭiccasamuppāda. Demonstrou que, embora não possamos evitar o contato dos sentidos (os olhos veem, os ouvidos ouvem), temos total soberania na encruzilhada onde a Sensação (Vedanā) dá à luz o Desejo (Taṇhā). Observando a sensação agradável com sabedoria em vez de apego, e a desagradável sem aversão, a roda de renascimentos do sofrimento cessa de girar."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Paṭiccasamuppāda-ñāṇa",
                "title": {
                      "en": "1. Mapping the 12 Links of Dependent Origination",
                      "pt": "1. Mapeando os 12 Elos da Originação Dependente"
                },
                "desc": {
                      "en": "Studying Mogok Sayādaw's circular diagram: seeing how ignorance (avijjā) drives volitional formations, which condition consciousness, mentality-materiality, sense bases, contact, and feeling.",
                      "pt": "Estudando o diagrama circular de Mogok Sayādaw: compreendendo como a ignorância (avijjā) propulsiona as volições, que condicionam consciência, mente-matéria, sentidos, contato e sensação."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Structural Understanding:</strong> Do not view your life as a random drama. Recognize the exact mechanical gears driving your rebirth and emotional suffering.</p>",
                      "pt": "<p><strong>Compreensão Estrutural:</strong> Não encare sua vida como um drama aleatório. Reconheça as engrenagens precisas que produzem seu renascimento e angústia.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>SN 12.1 (Paṭiccasamuppāda Sutta)</strong> as expounded in Mogok Sayādaw's discourses.</p>",
                      "pt": "<p><strong>SN 12.1 (Paṭiccasamuppāda Sutta)</strong> conforme exposto nos ensinamentos de Mogok Sayādaw.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Interlocking Clockwork Gears:</strong> Turn gear A (ignorance), and gear B (formations) turns gear C (consciousness) with mechanical inevitability.</p>",
                      "pt": "<p><strong>As Engrenagens do Relógio de Precisão:</strong> Ao girar a roda A (ignorância), a roda B (volições) gira a roda C (consciência) com exatidão mecânica.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Vedanā-taṇhā-viccheda",
                "title": {
                      "en": "2. Severing the Link Between Feeling and Craving",
                      "pt": "2. Rompendo o Elo Entre Sensação e Cobiça"
                },
                "desc": {
                      "en": "Mogok Sayādaw's crucial pivot: feeling (vedanā) inevitably arises from past kamma, but craving (taṇhā) is the choice made in the present. Inserting wisdom right here severs the wheel.",
                      "pt": "O pivô fundamental de Mogok Sayādaw: a sensação (vedanā) brota inevitavelmente do kamma passado, mas o apego (taṇhā) é uma escolha do presente. Inserir sabedoria aqui parte a roda."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Tactical Interception:</strong> When a feeling arises (pleasant or painful), do not let craving grab it. See it as anicca; craving starves and dies.</p>",
                      "pt": "<p><strong>A Intercepção Tática:</strong> Quando uma sensação brotar (boa ou ruim), não deixe o desejo abraçá-la. Enxergue sua impermanência; o apego definha sem alimento.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>SN 12.2</strong>: The specific link where saṁsāra can be dismantled in real-time meditation.</p>",
                      "pt": "<p><strong>SN 12.2</strong>: O elo estratégico exato onde o saṁsāra pode ser desmontado na meditação em tempo real.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Severing the Wire of the Bomb:</strong> Slicing the single colored wire that detonates the explosive charge, rendering the entire apparatus completely inert.</p>",
                      "pt": "<p><strong>Cortando o Fio do Pavio:</strong> Cortando o fio preciso que detonaria a carga explosiva, desativando todo o mecanismo num instante.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Citta-aniccānupassanā",
                "title": {
                      "en": "3. Catching the Death of Every Mind-State",
                      "pt": "3. Flagrando a Morte de Cada Estado Mental"
                },
                "desc": {
                      "en": "Observing that whatever mind arises—greed-mind, anger-mind, wandering-mind—dies before the next mind arises. Consciousness is not a solid person; it is a relay of births and deaths.",
                      "pt": "Observando que todo estado mental—mente com cobiça, mente com raiva, mente dispersa—morre antes que o próximo estado nasça. A consciência não é uma pessoa sólida, mas um revezamento de vidas e mortes."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Catching the Passing Moment:</strong> When a thought vanishes, clearly register: 'It died!' Witnessing universal cessation shatters the illusion of continuity.</p>",
                      "pt": "<p><strong>Registrando o Fim do Pensamento:</strong> Ao notar um pensamento sumir, registre com clareza: 'Morreu!' Testemunhar o cessar contínuo quebra a ilusão de um eu eterno.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>SN 22.95</strong>: Contemplating the dissolution of consciousness.</p>",
                      "pt": "<p><strong>SN 22.95</strong>: A contemplação da dissolução ininterrupta da consciência.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Sparks Flying from a Grinding Wheel:</strong> Glowing sparks fly off, shine for a fraction of a second, and vanish into darkness.</p>",
                      "pt": "<p><strong>Fagulhas Saindo do Esmeril:</strong> Centelhas incandescentes saltam da lâmina, brilham por uma fração de segundo e desaparecem no escuro.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Saṁsāra-cakka-bhedana",
                "title": {
                      "en": "4. Shattering the Wheel of Rebirth",
                      "pt": "4. Quebrando a Roda do Renascimento"
                },
                "desc": {
                      "en": "With the cessation of craving, clinging ceases; with the cessation of clinging, becoming ceases; with the cessation of becoming, birth, aging, and death cease. Total liberation.",
                      "pt": "Cessando o apego, cessa a apropriação; cessando a apropriação, cessa o devir; cessando o devir, cessa o renascimento, velhice e morte. Libertação definitiva."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Resting in Freedom:</strong> Experience the stopping of the cosmic wheel. The burden is laid down; Nibbāna is realized.</p>",
                      "pt": "<p><strong>Repousando na Vitória:</strong> Experimente o travamento da roda do sofrimento. O fardo foi deposto; Nibbāna é realizado com clareza cristalina.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>Udāna 1.1–1.3</strong>: The Buddha's joyful victory song at the foot of the Bodhi tree.</p>",
                      "pt": "<p><strong>Udāna 1.1–1.3</strong>: O hino de triunfo do Buda ao desvendar a Originação Dependente sob a árvore Bodhi.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Wagon Wheel Smashed to Kindling:</strong> The axle is snapped, spokes are broken, and the cart can never roll forward into danger again.</p>",
                      "pt": "<p><strong>A Roda da Carreta Desfeita em Gravetos:</strong> O eixo partiu-se, os raios quebraram e a roda nunca mais poderá rodar rumo ao abismo.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Mastery of Paṭiccasamuppāda & Sotāpatti Realization",
      "hindrances": [
        {
          "name": "Intellectualizing without Seeing",
          "remedy": "Do not lecture yourself on philosophy; watch the micro-second birth and death of sensations."
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Compulsive urges to eat, shop, or browse social media when feeling bored",
          "remedy": "Notice: boredom is Vedanā; the urge to shop is Taṇhā. Watch boredom arise and vanish for 60 seconds without acting."
        }
      ]
    },
    "layLife": {
      "feasibility": "Exceptional (The premier behavioral tool for conquering addiction and impulse habits)",
      "dailySchedule": "Conduct 'Vedanā checkpoints' before meals or opening apps: observe the feeling before acting.",
      "householdObstacles": "Emotional reactivity in family disputes; break the chain between hurt feelings and angry replies.",
      "ethicsDuty": "Right Livelihood and mindful consumption."
    },
    "paliTerms": [
      {
        "term": "Paṭiccasamuppāda",
        "meaning": "Dependent Origination / the 12-linked chain of conditioned suffering"
      },
      {
        "term": "Taṇhā",
        "meaning": "Craving / thirst for pleasant sensation and existence"
      },
      {
        "term": "Upādāna",
        "meaning": "Clinging / grasping / fuel that sustains karmic becoming"
      }
    ]
  },
  {
    "id": "burmese-ledi",
    "cluster": "burmese",
    "number": "31",
    "paliTitle": "Ledi Sayādaw Dīpanī",
    "title": {
      "en": "Ven. Ledi Sayādaw — The Dīpanīs & Paramattha Dhamma",
      "pt": "Ven. Ledi Sayādaw — Os Dīpanīs & O Dhamma Último"
    },
    "lineageTradition": {
      "en": "Burmese Scholarly-Vipassanā Lineage (Founding Patriarch of Modern Vipassanā)",
      "pt": "Linhagem Erudita de Vipassanā (Patriarca Fundador da Vipassanā Moderna)"
    },
    "primaryMasters": "Ven. Ledi Sayādaw Aggamahāpaṇḍita (1846–1923), Sayagyi U Ba Khin",
    "canonicalRef": "Bodhipakkhiya Dīpanī, Anatta Dīpanī, SN 22.59, SN 35.28",
    "difficulty": "advanced",
    "curriculumOrder": 7,
    "difficultyLabel": {
      "en": "Advanced",
      "pt": "Avançado"
    },
    "recommendedPrereq": {
      "en": "Solid grounding in Buddhist psychology and body observation",
      "pt": "Base sólida em psicologia budista e observação corporal"
    },
    "whyStudy": {
      "en": "The historic architect of modern mass meditation. Ledi Sayādaw broke monastic tradition in the 1890s to teach profound Vipassanā and the 37 Requisites of Enlightenment directly to lay householders.",
      "pt": "O arquiteto histórico do movimento mundial de meditação leiga. Na década de 1890, Ledi Sayādaw quebrou o monopólio monástico e ensinou os 37 Fatores do Despertar diretamente aos chefes de família."
    },
    "coreFocus": {
      "en": "Seeing ultimate reality (Paramattha) beneath conventional names (Paññatti), developing the 37 Bodhipakkhiya Dhammas in daily life",
      "pt": "Discernir a realidade última (Paramattha) sob os rótulos convencionais (Paññatti), cultivando os 37 Fatores do Despertar no cotidiano"
    },
    "primaryAnchor": {
      "en": "The direct experience of subatomic physical change (Anicca-dhātu) throughout the somatic body",
      "pt": "A experiência direta da inconstância física subatômica (Anicca-dhātu) em todo o corpo somático"
    },
    "approachToJhana": {
      "en": "Balancing Samatha and pure dry insight (Sukkha-Vipassanā), converting scholastic mastery of Dhamma into razor-sharp meditation",
      "pt": "Equilíbrio de Samatha e insight puro (Sukkha-Vipassanā), transformando a erudição em navalha meditativa"
    },
    "useOfNoting": {
      "en": "Penetrating conventional concepts: 'Body is not a man, woman, or person; it is four elements flashing in and out of existence.'",
      "pt": "Perfurar conceitos convencionais: 'O corpo não é homem, mulher ou pessoa; são quatro elementos pulsando e cessando.'"
    },
    "tagline": {
      "en": "'Do not wait for old age or retirement. The fire of death is burning your roof right now; cultivate Vipassanā today.'",
      "pt": "'Não espere a velhice ou a aposentadoria. O fogo da morte queima seu teto agora; cultive Vipassanā hoje mesmo.'"
    },
    "overview": {
      "en": "Ven. Ledi Sayādaw is perhaps the most influential figure in modern Buddhist history. In the late 19th century, recognizing that colonization was threatening Burmese heritage, he made a revolutionary decision: he began writing Dhamma manuals (Dīpanīs) in clear Burmese prose for lay householders and established meditation centers where ordinary men and women could practice. His lineage passed to Saya Thet Gyi, Sayagyi U Ba Khin, and S.N. Goenka, planting Vipassanā on every continent.",
      "pt": "Ven. Ledi Sayādaw é uma das figuras mais influentes da história budista moderna. No final do século XIX, percebendo que o colonialismo ameaçava a transmissão do Dhamma, tomou uma decisão revolucionária: passou a escrever manuais (Dīpanīs) em linguagem acessível para leigos e fundou os primeiros centros de meditação para cidadãos comuns. Sua linhagem formou Saya Thet Gyi, U Ba Khin e S.N. Goenka, semeando Vipassanā em todos os continentes."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Paramattha-vibhāga",
                "title": {
                      "en": "1. Distinguishing Concept from Ultimate Reality",
                      "pt": "1. Distinguindo Conceito de Realidade Última"
                },
                "desc": {
                      "en": "Ven. Ledi Sayādaw's analytical rigor: stripping away conventional labels (paññatti: 'man, woman, table, tree') to penetrate the four ultimate realities (paramattha: citta, cetasika, rūpa, Nibbāna).",
                      "pt": "O rigor analítico do Ven. Ledi Sayādaw: rasgar os rótulos convencionais (paññatti: 'homem, mulher, mesa, corpo') para penetrar as quatro realidades últimas (paramattha: citta, cetasika, rūpa e Nibbāna)."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Conceptual Deconstruction:</strong> When touching a table, see that 'table' is a concept; the direct reality is hardness (earth element) and temperature (fire element).</p>",
                      "pt": "<p><strong>Desconstrução Conceitual:</strong> Ao tocar um móvel, compreenda que 'madeira' é um rótulo; a realidade crua é dureza (terra) e temperatura (fogo).</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Ven. Ledi Sayādaw's <em>Paramattha Dīpanī</em> and Abhidhammattha Saṅgaha commentaries.</p>",
                      "pt": "<p>A obra monumental <em>Paramattha Dīpanī</em> do Ven. Ledi Sayādaw.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Dismantled Chariot (SN 5.10):</strong> Just as with an assemblage of parts the word 'chariot' is used, so when aggregates are present, convention says 'a person'.</p>",
                      "pt": "<p><strong>A Carruagem Desmontada (SN 5.10):</strong> Tal como pela junção de rodas, eixo e rédeas usa-se a palavra 'carruagem', pela junção dos agregados diz-se 'um ser'.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Catu-vīsa-rūpa-vicāra",
                "title": {
                      "en": "2. Analyzing the 28 Material Phenomena",
                      "pt": "2. Analisando os 28 Fenômenos Materiais"
                },
                "desc": {
                      "en": "Investigating the 4 primary elements (solidity, cohesion, heat, motion) and the 24 derived material phenomena (eye-sensitivity, ear-sensitivity, nutritive essence, physical life faculty).",
                      "pt": "Investigando os 4 elementos fundamentais e os 24 fenômenos materiais derivados (sensibilidade ocular, auditiva, essência nutritiva e faculdade de vida física)."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Microscopic Somatic Inspection:</strong> Scan bodily sensory faculties: see that eyesight is merely sensitive nerve matter meeting light rays. No soul resides within the eyeball.</p>",
                      "pt": "<p><strong>Inspeção Somática Precisa:</strong> Examine as bases sensoriais: perceba que a visão é apenas matéria nervosa sensível em contato com fótons. Nenhuma alma habita o globo ocular.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Abhidhamma material classification detailed in Ledi Sayādaw's <em>Rūpa Dīpanī</em>.</p>",
                      "pt": "<p>Classificação do Abhidhamma detalhada no <em>Rūpa Dīpanī</em> de Ledi Sayādaw.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Clockmaker Inspecting Tiny Screws:</strong> Laying out every spring, cog, and pin on velvet; none of them is the 'time', yet together they produce ticking.</p>",
                      "pt": "<p><strong>O Relojoeiro Examinando os Parafusos:</strong> Dispondo cada engrenagem, mola e pino sobre o veludo; nenhum deles é o 'tempo', mas juntos produzem o tique-taque.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Rūpa-kalāpa-pariccheda",
                "title": {
                      "en": "3. Discerning Subatomic Kalāpa Units",
                      "pt": "3. Discernindo as Unidades Subatômicas (Kalāpas)"
                },
                "desc": {
                      "en": "Penetrating the compact illusion of matter (ghana): discerning that matter is made of microscopic packets called kalāpas, flashing into existence and decaying billions of times per second.",
                      "pt": "Penetrando a ilusão de solidez da matéria (ghana): discernindo que o corpo físico é composto de pacotes microscópicos chamados kalāpas, surgindo e morrendo bilhões de vezes por segundo."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Breaking the Ghana:</strong> Observe physical sensations dissolving into rapid micro-quivering particles. The solid body becomes transparent and fluid.</p>",
                      "pt": "<p><strong>Rompendo a Compacidade:</strong> Observe a solidez física dissolvendo-se em micropartículas oscilantes. O corpo rígido torna-se translúcido e fluido.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Ledi Sayādaw's <em>Vipassanā Dīpanī (The Manual of Insight)</em>.</p>",
                      "pt": "<p>O clássico <em>Vipassanā Dīpanī (Manual do Insight)</em> de Ledi Sayādaw.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Cinema Film Frame:</strong> Individual static frames flash past so rapidly that the eye hallucinates continuous fluid motion on screen.</p>",
                      "pt": "<p><strong>Os Fotogramas do Projetor de Cinema:</strong> Imagens estáticas passam pela lâmpada com tanta velocidade que o olho projeta a ilusão de movimento contínuo na tela.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Magga-ñāṇa-dīpanī",
                "title": {
                      "en": "4. The Brilliant Light of Liberating Insight",
                      "pt": "4. A Luz Radiante do Insight Libertador"
                },
                "desc": {
                      "en": "With all illusions of self, permanence, and compactness shattered, the practitioner breaks through into the supramundane path knowledge (magga-ñāṇa), securing the deathless peace of Nibbāna.",
                      "pt": "Com todas as ilusões de um eu, permanência e solidez pulverizadas, o praticante alcança o conhecimento supramundano do caminho (magga-ñāṇa), colhendo a paz imortal de Nibbāna."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Resting in Noble Fruition:</strong> The mind rests in the destruction of delusion. You have verified the Buddha's Dhamma with your own direct vision.</p>",
                      "pt": "<p><strong>Repousando no Nobre Fruto:</strong> A mente repousa na extinção da ilusão. Você comprovou o Dhamma do Buda por sua própria visão direta.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Ven. Ledi Sayādaw's historic role reviving lay insight practice throughout modern Asia.</p>",
                      "pt": "<p>O papel histórico do Ven. Ledi Sayādaw revitalizando a prática meditativa leiga na Ásia moderna.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Lightning Flash Striking the Midnight Sky:</strong> Piercing the darkness, revealing the entire mountain range in flawless daylight clarity.</p>",
                      "pt": "<p><strong>O Relâmpago Cortando o Céu da Meia-Noite:</strong> Rasgando as trevas e revelando toda a cadeia de montanhas em claridade diurna absoluta.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Mastery of Paramattha Dhamma & Noble Path Attainment",
      "hindrances": [
        {
          "name": "Scholastic Distraction",
          "remedy": "Do not just read the Dīpanīs; sit down and directly feel the rising and falling of elements."
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Intellectual exhaustion from trying to memorize too many Dhamma terms",
          "remedy": "Reduce practice to one universal truth: Anicca (impermanence). Ledi taught that real seeing of Anicca contains all 37 factors."
        }
      ]
    },
    "layLife": {
      "feasibility": "Exceptional (Specifically designed for busy professionals, clerks, and parents)",
      "dailySchedule": "Dedicate 45 minutes daily to observing Anicca across the physical sensations of the body.",
      "householdObstacles": "Believing enlightenment is only for monastics; remember Ledi Sayādaw's mission was to prove laypeople can awaken.",
      "ethicsDuty": "Sīla as the foundation: non-negotiable adherence to the 5 precepts."
    },
    "paliTerms": [
      {
        "term": "Paramattha",
        "meaning": "Ultimate reality / irreducible natural phenomena (Rūpa, Citta, Cetasika, Nibbāna)"
      },
      {
        "term": "Paññatti",
        "meaning": "Conventional truth / concepts, names, and labels created by society"
      },
      {
        "term": "Dīpanī",
        "meaning": "Exposition / manual that illuminates profound spiritual truths"
      }
    ]
  },
  {
    "id": "burmese-pa-auk",
    "cluster": "burmese",
    "number": "32",
    "paliTitle": "Pa-Auk Samatha-Vipassanā",
    "title": {
      "en": "Pa-Auk Sayādaw — Classical Visuddhimagga, 40 Kammaṭṭhānas & Kalāpas",
      "pt": "Pa-Auk Sayādaw — Visuddhimagga Clássico, 40 Kammaṭṭhānas & Kalāpas"
    },
    "lineageTradition": {
      "en": "Burmese Classical Hermitage Tradition (Pa-Auk Forest Monastery)",
      "pt": "Tradição Erudita de Floresta de Mianmar (Mosteiro de Pa-Auk)"
    },
    "primaryMasters": "Ven. Pa-Auk Tawya Sayādaw (Ven. Āciṇṇa)",
    "canonicalRef": "Visuddhimagga, Abhidhammattha Saṅgaha, MN 118, DN 16",
    "difficulty": "advanced",
    "difficultyLabel": {
      "en": "Advanced",
      "pt": "Avançado"
    },
    "recommendedPrereq": {
      "en": "4th Jhāna mastery & Abhidhamma study",
      "pt": "Domínio do 4º Jhāna e estudo do Abhidhamma"
    },
    "whyStudy": {
      "en": "Exhaustive mastery of the 40 kammaṭṭhānas, 8 jhānas, and dissecting mind-matter into microscopic kalāpas.",
      "pt": "Domínio exaustivo dos 40 kammaṭṭhānas, 8 jhānas e dissecação de mente e matéria em kalāpas microscópicos."
    },
    "coreFocus": {
      "en": "Rigorous Samatha-Yānika progression: white nostril-tip Nimitta, mastery of 4 Rūpa Jhānas and 4 Arūpa Jhānas, Four Elements analysis into Kalāpas, Abhidhamma Vipassanā",
      "pt": "Progressão estrita de Samatha-Yānika: Nimitta branco, domínio dos 4 Rūpa e 4 Arūpa Jhānas, dissecação em Kalāpas e Vipassanā do Abhidhamma"
    },
    "primaryAnchor": {
      "en": "Bright white luminous Nimitta stabilized right at the nostril entrance, followed by the internal Four Elements (Catudhātu-vavatthāna)",
      "pt": "Nimitta luminoso e estável na entrada das narinas, seguido pela análise dos Quatro Elementos (Catudhātu-vavatthāna)"
    },
    "approachToJhana": {
      "en": "Exhaustive mastery of all 8 Jhānas with five masteries (āvajjanā, samāpajjanā, adhiṭṭhānā, vuṭṭhānā, paccavekkhaṇā) before starting Vipassanā",
      "pt": "Domínio rigoroso dos 8 Jhānas com as cinco mestrias antes de avançar para a investigação de insight"
    },
    "useOfNoting": {
      "en": "Systematic analytical discernment of ultimate realities (paramattha dhammas) rather than superficial verbal labeling",
      "pt": "Discernimento analítico sistemático das realidades últimas (paramattha dhammas) sem rotulação superficial"
    },
    "tagline": {
      "en": "The most uncompromising classical lineage: rebuilding the Visuddhimagga's complete roadmap to supreme purity with microscopic precision.",
      "pt": "A tradição mais rigorosa e enciclopédica: reconstruindo o caminho do Visuddhimagga até a pureza com precisão microscópica."
    },
    "overview": {
      "en": "The Pa-Auk tradition is renowned worldwide for its complete fidelity to the classical Visuddhimagga commentarial system. Rejecting shortcuts, Pa-Auk Sayādaw guides students to develop deep absorption through the breath until an unmistakable white luminous sign (paṭibhāga-nimitta) emerges. After mastering the four material and four immaterial absorptions, the meditator applies the Four Elements meditation to dissolve the body into minute subatomic particles known as rūpa-kalāpas, analyzing their constituent elements, mental factors (cetasikas), and tracing past and future Dependent Arising.",
      "pt": "A tradição Pa-Auk é respeitada internacionalmente pela fidelidade irrestrita ao tratado do Visuddhimagga. Recusando atalhos, o método guia o praticante no desenvolvimento de absorção profunda pela respiração até a consolidação do signo luminoso translúcido (paṭibhāga-nimitta). Após dominar os quatro Jhānas materiais e quatro imateriais, aplica-se a meditação dos Quatro Elementos para decompor o corpo em partículas subatômicas chamadas rūpa-kalāpas, dissecando fatores mentais e as vidas passadas no Surgimento Dependente."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Jhāna-vasi-bhāvanā",
                "title": {
                      "en": "1. Mastering the Four Rūpa Jhānas with Kasina Light",
                      "pt": "1. Dominando os Quatro Rūpa Jhānas com a Luz Kasina"
                },
                "desc": {
                      "en": "Pa-Auk Sayādaw's classical Visuddhimagga foundation: cultivating deep samādhi through Ānāpānasati or white kasina until brilliant dazzling light arises, entering the 1st through 4th Jhānas.",
                      "pt": "O alicerce clássico do Visuddhimagga segundo Pa-Auk Sayādaw: cultivar samādhi profundo na respiração ou kasina branco até brotar luz brilhante, dominando do 1º ao 4º Jhānas."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Five Jhāna Masteries:</strong> Train in the 5 masteries: entering absorption at will (<em>samāpajjana</em>), staying as long as determined (<em>adhiṭṭhāna</em>), emerging instantly (<em>vuṭṭhāna</em>), adverting (<em>āvajjana</em>), and reviewing (<em>paccavekkhaṇa</em>).</p>",
                      "pt": "<p><strong>Os Cinco Domínios dos Jhānas:</strong> Treine os 5 domínios: entrar na absorção à vontade, permanecer pelo tempo determinado, emergir na hora marcada, inclinar a mente e revisar os fatores.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Pa-Auk Sayādaw's master manual: <em>Knowing and Seeing</em> and <em>Visuddhimagga</em> Ch. IV–V.</p>",
                      "pt": "<p>O tratado <em>Knowing and Seeing (Conhecendo e Vendo)</em> de Pa-Auk Sayādaw e <em>Visuddhimagga</em> Cap. IV–V.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Royal Archer Hitting the Bullseye Every Time:</strong> Drawing the heavy bow and hitting a distant silver coin in the dark with effortless mastery.</p>",
                      "pt": "<p><strong>O Arqueiro Real Acertando o Centro do Alvo:</strong> Puxando o arco pesado e atingindo uma moeda de prata distante no escuro com precisão impecável.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Rūpa-kammatthāna (Kalāpa Dissection)",
                "title": {
                      "en": "2. Dissecting Material Kalāpas under Jhāna Light",
                      "pt": "2. Dissecando Kalāpas Materiais sob a Luz do Jhāna"
                },
                "desc": {
                      "en": "Emerging from 4th Jhāna with dazzling mental light, the meditator turns this light onto the 32 parts of the body, dissecting the body down into microscopic particles called kalāpas.",
                      "pt": "Emergindo do 4º Jhāna com luz mental deslumbrante, o meditador projeta esse facho nas 32 partes do corpo, dissecando a matéria em partículas microscópicas (kalāpas)."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Elemental Subatomic Analysis:</strong> Analyze each kalāpa: see the 8 basic properties (earth, water, fire, wind, color, smell, taste, nutritive essence). Break the compactness of matter forever.</p>",
                      "pt": "<p><strong>Análise Subatômica dos Elementos:</strong> Examine cada kalāpa: identifique as 8 qualidades básicas (terra, água, fogo, ar, cor, cheiro, sabor e nutrição). Quebre a ilusão da matéria para sempre.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><em>Visuddhimagga</em> Ch. XI and <em>Sammohavinodanī</em> (Abhidhamma commentary).</p>",
                      "pt": "<p><em>Visuddhimagga</em> Cap. XI e <em>Sammohavinodanī</em> (comentário do Abhidhamma).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The High-Powered Electron Microscope:</strong> Turning on the focused beam of radiation to resolve crystalline atomic lattices with crystal-clear magnification.</p>",
                      "pt": "<p><strong>O Microscópio Eletrônico de Alta Potência:</strong> Ligando o feixe focado de elétrons para revelar as redes cristalinas dos átomos com ampliação cristalina.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Nāma-kammatthāna (Citta-vīthi Dissection)",
                "title": {
                      "en": "3. Dissecting Mental Cognitive Series (Citta-Vīthi)",
                      "pt": "3. Dissecando as Séries Cognitivas Mentais (Citta-Vīthi)"
                },
                "desc": {
                      "en": "Tracking the microscopic sequence of 17 mind-moments (citta-vīthi) occurring at every eye, ear, and mind-door contact. Analyzing every single consciousness and its co-arising mental factors (cetasikas).",
                      "pt": "Mapeando a sequência microscópica de 17 momentos mentais (citta-vīthi) disparados a cada contato nos olhos, ouvidos e mente. Analisando cada consciência e seus fatores mentais (cetasikas)."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Microscopic Psychological Deconstruction:</strong> See contact, feeling, perception, intention, and one-pointedness arise and perish in a nanosecond. No soul exists anywhere in the mind.</p>",
                      "pt": "<p><strong>Desconstrução Psicológica Microscópica:</strong> Veja contato, sensação, percepção, volição e atenção nascerem e morrerem num nanossegundo. Nenhuma alma existe na mente.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><em>Visuddhimagga</em> Ch. XIV and <em>Abhidhammattha Saṅgaha</em> Ch. IV.</p>",
                      "pt": "<p><em>Visuddhimagga</em> Cap. XIV e <em>Abhidhammattha Saṅgaha</em> Cap. IV.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Slow-Motion High-Speed Film of a Hummingbird:</strong> Slowing down thousands of frames per second to see each individual flutter of the wing that is invisible to the naked eye.</p>",
                      "pt": "<p><strong>Câmera Lenta de Alta Velocidade Filmando o Beija-Flor:</strong> Desacelerando milhares de quadros por segundo para enxergar cada batimento de asa invisível a olho nu.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Paccaya-pariggaha & Tilakkhaṇa",
                "title": {
                      "en": "4. Tracing Past Lives Kamma & The 16 Insight Stages",
                      "pt": "4. Rastreando o Kamma das Vidas Passadas & Os 16 Estágios de Insight"
                },
                "desc": {
                      "en": "Using Jhāna light to trace the causes of current life into past lives through Dependent Origination (paccaya-pariggaha-ñāṇa), then applying the 3 marks to all formations to attain noble fruition.",
                      "pt": "Usando a luz do Jhāna para rastrear as causas da vida presente em vidas passadas através da Originação Dependente (paccaya-pariggaha), aplicando as 3 marcas para alcançar o despertar."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Final Breakthrough:</strong> Having investigated past, present, and future mind-and-matter, apply impermanence, suffering, and non-self until the mind touches Nibbāna.</p>",
                      "pt": "<p><strong>O Salto Final:</strong> Tendo inspecionado mente e matéria no passado, presente e futuro, aplique anicca, dukkha e anattā até que a consciência salte para Nibbāna.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Full classical completion of the Seven Purifications (<em>Satta Visuddhi</em>) in Pa-Auk monasteries.</p>",
                      "pt": "<p>A realização clássica completa das Sete Purificações (<em>Satta Visuddhi</em>) nos mosteiros de Pa-Auk.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Master Key Unlocking Every Chamber of the Castle:</strong> Inserting the golden key into the inner sanctum, throwing open the doors to boundless, unshakeable peace.</p>",
                      "pt": "<p><strong>A Chave-Mestra Abrindo o Santuário do Castelo:</strong> Inserindo a chave de ouro na última porta secreta, escancarando os portões para a paz inabalável e eterna.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "Even for busy householders who cannot spend years in forest seclusion, Pa-Auk's Four Elements meditation (detecting hardness, softness, warmth, cooling, motion, tension) can be practiced anywhere to immediately break the hallucination of bodily ego.",
      "pt": "Mesmo para o leigo com rotina agitada, a meditação dos Quatro Elementos de Pa-Auk (detectar dureza, maciez, calor, frio, peso, pressão) pode ser praticada em qualquer lugar para quebrar a alucinação de solidez corpórea."
    },
    "keyPaliTerms": [
      {
        "term": "Paṭibhāga-Nimitta",
        "meaning": "The purified, luminous counterpart sign of absorption"
      },
      {
        "term": "Rūpa-Kalāpa",
        "meaning": "Submicroscopic units of matter arising and passing away trillions of times per second"
      },
      {
        "term": "Samatha-Yānika",
        "meaning": "One who takes serene tranquility as their initial vehicle to reach insight"
      }
    ],
    "curriculumOrder": 8
  },
  {
    "id": "sri-lanka-mn131-bhaddekaratta",
    "cluster": "sri-lanka",
    "number": "33",
    "paliTitle": "Bhaddekaratta Sutta",
    "title": {
      "en": "Bhaddekaratta Sutta — One Fine Night in Forest Solitude",
      "pt": "Bhaddekaratta Sutta — Uma Noite Auspiciosa na Solitude"
    },
    "lineageTradition": {
      "en": "Sri Lankan Forest Hermitage Tradition (Vanavāsi)",
      "pt": "Tradição dos Eremitérios de Floresta do Sri Lanka (Vanavāsi)"
    },
    "primaryMasters": "Gotama Buddha, Ven. Mahākaccāna, Island Hermitage Monastics",
    "canonicalRef": "MN 131 (Majjhima Nikāya 131)",
    "difficulty": "foundational",
    "curriculumOrder": 1,
    "difficultyLabel": {
      "en": "Foundations",
      "pt": "Fundamentos"
    },
    "recommendedPrereq": {
      "en": "Willingness to release future anxiety and past regrets",
      "pt": "Disposição para soltar ansiedades do futuro e remorsos do passado"
    },
    "whyStudy": {
      "en": "The cherished anthem of the Sri Lankan forest hermit. Instructs the meditator how to live 'one fine night' by severing longing for the past and speculation about the future.",
      "pt": "O hino mais querido do monge eremita do Sri Lanka. Ensina a viver 'uma noite auspiciosa' rompendo a saudade do passado e as especulações sobre o futuro."
    },
    "coreFocus": {
      "en": "Present-moment clarity (Paccuppannā dhammā), cutting nostalgia and anticipation, unshakeable solitary presence",
      "pt": "Clareza do momento presente (Paccuppannā dhammā), cortar nostalgia e antecipação, presença solitária inabalável"
    },
    "primaryAnchor": {
      "en": "The immediate experiential reality of the present moment, unswayed by mental projections",
      "pt": "A realidade experiencial imediata do instante presente, inabalável pelas projeções mentais"
    },
    "approachToJhana": {
      "en": "Dropping temporal entanglement allows the mind to settle into serene, unhurried Samādhi with complete ease",
      "pt": "Soltar os laços do tempo permite que a mente pouse num Samādhi sereno e sem pressa com extrema facilidade"
    },
    "useOfNoting": {
      "en": "Immediate detection of mental time-travel: 'Past is gone (atītaṁ nānvāgameyya); future is unreached (nappaṭikaṅkhe anāgataṁ)'",
      "pt": "Detecção imediata de viagens no tempo da mente: 'O passado já foi; o futuro ainda não chegou'"
    },
    "tagline": {
      "en": "'Do not chase after the past, do not place hopes in the future. The past is gone; the future not yet reached. Clearly see the present as it is.'",
      "pt": "'Não persiga o passado, não deposite esperanças no futuro. O passado cessou; o futuro não chegou. Veja com clareza o presente tal como é.'"
    },
    "overview": {
      "en": "In the famous hermitages of Sri Lanka (such as Polgasduwa Island Hermitage and Meetirigala), the Bhaddekaratta verses are chanted daily as a reminder of the forest life's supreme virtue. The Buddha calls a meditator who stays ardently in the present moment without mental yearning 'the solitary one who has had one fine night' (bhaddekaratto). For the modern layperson, this is the foundational antidote to overthinking, planning fatigue, and depressive rumination.",
      "pt": "Nos famosos eremitérios da ilha do Sri Lanka (como Polgasduwa e Meetirigala), os versos do Bhaddekaratta são cantados diariamente como bússola da vida na floresta. O Buda chama aquele que permanece ardentemente ancorado no presente, sem devaneios temporais, de 'o eremita que viveu uma noite auspiciosa' (bhaddekaratto). Para o leigo contemporâneo, é o remédio definitivo contra a fadiga de planejamento e a ruminação depressiva."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Atītaṁ nānvāgameyya",
                "title": {
                      "en": "1. Do Not Chase After the Past",
                      "pt": "1. Não Persiga o Passado Morto"
                },
                "desc": {
                      "en": "'One should not chase after the past, for what is past is left behind and gone.' Releasing memories, nostalgia, old grievances, and bygone identities.",
                      "pt": "'Não se deve perseguir o passado, pois o passado já se foi e foi deixado para trás.' Libertando-se de nostalgias, mágoas antigas, arrependimentos e identidades caducas."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Dropping Memory Loops:</strong> Whenever the mind replays past dialogues, triumphs, or humiliations, declare: 'That is dead and finished.' Return attention to the immediate breath.</p>",
                      "pt": "<p><strong>Abandonando Ruminações:</strong> Sempre que a mente reprisar diálogos antigos, vitórias ou humilhações, declare: 'Isto morreu e acabou'. Retorne à respiração presente.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 131 §3</strong>: The opening verse of the Bhaddekaratta Sutta on non-entanglement with time.</p>",
                      "pt": "<p><strong>MN 131 §3</strong>: O verso de abertura do Bhaddekaratta Sutta sobre o desatamento temporal.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Dream Vanishing Upon Waking (Snp 4.6):</strong> Just as a vivid dream of flying vanishes into nothingness when opening the eyes, the past is bare mental mist.</p>",
                      "pt": "<p><strong>O Sonho que Desvanece ao Despertar (Snp 4.6):</strong> Tal como um sonho nítido em que se voava desaparece no nada ao abrir os olhos, o passado é mera névoa mental.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Nappaṭikaṅkhe anāgataṁ",
                "title": {
                      "en": "2. Do Not Yearn for the Unarrived Future",
                      "pt": "2. Não Crie Expectativas pelo Futuro que Não Chegou"
                },
                "desc": {
                      "en": "'Nor build expectations on the future, for what is future has not yet arrived.' Laying down anxious forecasting, hypothetical planning, and anticipatory worry.",
                      "pt": "'Nem crie expectativas pelo futuro, pois o futuro ainda não chegou.' Largando projeções ansiosas, planejamentos obsessivos e cenários hipotéticos de preocupação."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Halting Future Projections:</strong> Recognize that 99% of future anxieties are fictional phantoms created by the unquiet mind. Ground in the physical weight of your posture.</p>",
                      "pt": "<p><strong>Travando Projeções Ansiosas:</strong> Reconheça que a maioria das ansiedades futuras são fantasmas criados pela mente inquieta. Ancore no peso do corpo no solo.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 131 §3</strong>: Cutting the second temporal chain that binds consciousness to saṁsāra.</p>",
                      "pt": "<p><strong>MN 131 §3</strong>: Cortando o segundo grilhão temporal que aprisiona a consciência no sofrimento.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>A Mirage in the Distance:</strong> Chasing after water glistening on the distant road; the closer you run, the farther the illusion recedes.</p>",
                      "pt": "<p><strong>A Miragem no Horizonte:</strong> Correndo atrás da água cintilante na estrada árida; quanto mais você corre, mais a ilusão recua.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Paccuppanna-dhamma-vipassanā",
                "title": {
                      "en": "3. Discerning the Present Phenomenon with Laser Clarity",
                      "pt": "3. Discernindo o Fenômeno Presente com Clareza Cirúrgica"
                },
                "desc": {
                      "en": "'Whatever phenomenon is present right here, right now, one discerns that with insight—invulnerable, unshakeable, undefeated.' Abiding in diamond-like present presence.",
                      "pt": "'O fenômeno que está presente aqui e agora, esse o meditador investiga com insight—invulnerável, inabalável, sem hesitação.' Repousando na presença lúcida inquebrantável."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Laser of the Present:</strong> Cut through mental drift. Feel the immediate sensation, the sound, the breath right in this microsecond. Unconquered by distraction.</p>",
                      "pt": "<p><strong>O Foco do Agora:</strong> Rompa a dispersão. Sinta a sensação tátil, o som ambiente, o fôlego neste exato microssegundo. Imbatível pela distração.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 131 §3</strong>: The heart formula of the Bhaddekaratta Sutta.</p>",
                      "pt": "<p><strong>MN 131 §3</strong>: A fórmula central que dá título e poder ao Bhaddekaratta Sutta.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Skilled Swordsman Parrying an Arrow:</strong> Slicing the incoming arrow out of the air at the exact moment of impact with flawless reflex.</p>",
                      "pt": "<p><strong>O Espadachim Aparando a Flecha:</strong> Cortando a flecha que se aproxima em pleno ar no instante exato do impacto com reflexo perfeito.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Ajjeva kiccamātappaṁ",
                "title": {
                      "en": "4. Ardent Urgency Today: 'One Fine Night'",
                      "pt": "4. Esforço Ardente Hoje: 'Uma Noite Sublime'"
                },
                "desc": {
                      "en": "'Today the effort must be made; who knows if death will strike tomorrow? There is no bargaining with the great host of death.' One who lives thus ardent is praised as having lived One Fine Night.",
                      "pt": "'Hoje o esforço deve ser feito; quem sabe se a morte virá amanhã? Não há negociação com o exército da morte.' Quem assim vive com ardor é louvado como tendo vivido Uma Noite Sublime."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Final Dedicated Resolve:</strong> Practice this very session as if death stood at the door. Live awake, harmless, lucid, and liberated.</p>",
                      "pt": "<p><strong>Determinação Nobre Final:</strong> Pratique esta sentada como se a morte estivesse à espreita na porta. Viva desperto, inofensivo, lúcido e liberto.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 131 §4–5</strong>: The definition of the Bhaddekaratta: a solitary contemplative who masters time.</p>",
                      "pt": "<p><strong>MN 131 §4–5</strong>: A definição de Bhaddekaratta: o contemplativo que transcendeu as algemas do tempo.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Lone Lamp Burning Through the Night in a Storm:</strong> A solitary brass lamp resting sheltered in a mountain cave, burning with bright, untroubled flame until dawn.</p>",
                      "pt": "<p><strong>A Lâmpada Solitária Queimando na Tempestade:</strong> Uma lamparina de bronze abrigada numa caverna de pedra, queimando com chama dourada e imperturbável até o alvorecer.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Access to 1st/2nd Jhāna & Freedom from Temporal Anxiety",
      "hindrances": [
        {
          "name": "Temporal Daydreaming",
          "remedy": "Repeat the sutta's verse: 'The past is gone, the future not reached; only this breath is real.'"
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Severe sleep insomnia caused by spinning thoughts about tomorrow's workday",
          "remedy": "Apply Bhaddekaratta: recognize that tomorrow does not physically exist tonight. Lie completely in the physical sensations of the mattress."
        }
      ]
    },
    "layLife": {
      "feasibility": "Exceptional (Fundamental for householder stress reduction)",
      "dailySchedule": "Take 5 minutes every evening to intentionally declare: 'The workday is in the past; tomorrow does not exist yet.'",
      "householdObstacles": "Balancing healthy planning with compulsive worry; plan objectively, then drop the mental story completely.",
      "ethicsDuty": "Living sincerely without deceit or anxiety."
    },
    "paliTerms": [
      {
        "term": "Bhaddekaratta",
        "meaning": "A single excellent night / the ideal solitary meditator in the present"
      },
      {
        "term": "Asaṁhīra",
        "meaning": "Unconquered / unshakeable / not carried away by mental winds"
      }
    ]
  },
  {
    "id": "sri-lanka-nyanaponika",
    "cluster": "sri-lanka",
    "number": "34",
    "paliTitle": "Nyanaponika Satipaṭṭhāna",
    "title": {
      "en": "Ven. Nyanaponika Mahāthera — The Heart of Buddhist Meditation & Bare Attention",
      "pt": "Ven. Nyanaponika Mahāthera — O Coração da Meditação Budista & Atenção Nua"
    },
    "lineageTradition": {
      "en": "Island Hermitage & Buddhist Publication Society (BPS, Kandy)",
      "pt": "Eremitério da Ilha & Buddhist Publication Society (BPS, Kandy)"
    },
    "primaryMasters": "Ven. Nyanaponika Mahāthera (1901–1994), Ven. Nyanatiloka Mahāthera",
    "canonicalRef": "DN 22 (Mahāsatipaṭṭhāna), MN 10, 'The Heart of Buddhist Meditation'",
    "difficulty": "foundational",
    "curriculumOrder": 2,
    "difficultyLabel": {
      "en": "Foundations",
      "pt": "Fundamentos"
    },
    "recommendedPrereq": {
      "en": "Basic interest in objective self-observation without judgment",
      "pt": "Interesse em auto-observação objetiva sem julgamento"
    },
    "whyStudy": {
      "en": "The classic text that introduced 'Bare Attention' to global meditators. Teaches the art of registering facts without adding emotional commentary, prejudices, or neurotic reactions.",
      "pt": "O clássico que apresentou a 'Atenção Nua' (Bare Attention) ao mundo. Ensina a arte de registrar fatos sem acrescentar comentários emocionais, preconceitos ou neuroses."
    },
    "coreFocus": {
      "en": "Bare Attention (observing the facts of experience before emotional reactivity sets in), non-judgmental awareness, clear comprehension",
      "pt": "Atenção Nua (registrar os fatos da experiência antes que a reatividade emocional nasça), consciência sem julgamento, clara compreensão"
    },
    "primaryAnchor": {
      "en": "The receptive, neutral mirror of awareness reflecting whatever enters the sense doors without tilting toward liking or disliking",
      "pt": "O espelho límpido e neutro da consciência refletindo o que entra pelos sentidos sem inclinar-se para apego ou aversão"
    },
    "approachToJhana": {
      "en": "Bare attention silences the chatter of likes and dislikes; the absence of emotional turbulence allows the mind to settle naturally into deep peace",
      "pt": "A atenção nua silencia o debate de simpatias e antipatias; a ausência de turbulência emocional permite que a mente pouse em paz profunda"
    },
    "useOfNoting": {
      "en": "Silent registration of reality as it is, without labeling it 'good' or 'bad': 'A sound is heard; anger is felt; tension is present.'",
      "pt": "Registro silencioso da realidade como ela é, sem carimbos de 'bom' ou 'mau': 'Um som é ouvido; a raiva é sentida; há tensão.'"
    },
    "tagline": {
      "en": "'Bare Attention is the clear, single-minded awareness of what actually happens to us and in us, at the successive moments of perception.'",
      "pt": "'A Atenção Nua é a percepção clara e direta do que realmente acontece conosco e dentro de nós, momento a momento.'"
    },
    "overview": {
      "en": "Ven. Nyanaponika was a German-born scholar-monk who lived for over five decades in the forest hermitages of Sri Lanka and served as the founding editor of the Buddhist Publication Society (BPS). His magnum opus, 'The Heart of Buddhist Meditation', is considered one of the most lucid expositions of Satipaṭṭhāna ever written. He coined the phrase 'Bare Attention': training the mind to behave like a clean mirror, showing things exactly as they are without adding distortion, judgment, or self-criticism.",
      "pt": "Ven. Nyanaponika foi um monge e erudito de origem alemã que viveu por mais de cinco décadas nos eremitérios de floresta do Sri Lanka e presidiu a renomada Buddhist Publication Society (BPS). Sua obra-prima, 'O Coração da Meditação Budista', é considerada uma das exposições mais lúcidas de Satipaṭṭhāna já escritas. Ele cunhou o termo 'Atenção Nua': treinar a mente para atuar como um espelho límpido, refletindo as coisas exatamente como são, sem distorções, julgamentos ou autocrítica."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Sakkā-sati (Bare Attention)",
                "title": {
                      "en": "1. Establishing Bare Attention (The Clear Mirror)",
                      "pt": "1. Estabelecendo a Atenção Pura (O Espelho Límpido)"
                },
                "desc": {
                      "en": "Ven. Nyanaponika Mahāthera's fundamental technique: observing facts as bare facts without adding personal opinions, emotional reactions, condemnation, or praise.",
                      "pt": "A técnica clássica do Ven. Nyanaponika Mahāthera: observar os fatos como fatos nus, sem adicionar opiniões pessoais, reações emocionais, censuras ou louvores."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Mirror of Awareness:</strong> A mirror reflects the beautiful and the ugly without rejoicing or rejecting. Cultivate that same pure, non-reactive registration of sensory contact.</p>",
                      "pt": "<p><strong>O Espelho da Consciência:</strong> O espelho reflete o belo e o feio sem se alegrar nem rejeitar. Cultive esse mesmo registro puro e imparcial diante do contato sensorial.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Ven. Nyanaponika's seminal classic: <em>The Heart of Buddhist Meditation</em>.</p>",
                      "pt": "<p>A obra-prima seminal do Ven. Nyanaponika: <em>The Heart of Buddhist Meditation (O Coração da Meditação Budista)</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Pristine Mirror (Nyanaponika):</strong> The mirror lets images enter, clearly depicts them, and remains entirely unstained when they depart.</p>",
                      "pt": "<p><strong>O Espelho Imaculado (Nyanaponika):</strong> O espelho permite que as imagens cheguem, reflete-as com nitidez e permanece absolutamente limpo quando partem.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Mita-nāma-saññā",
                "title": {
                      "en": "2. Restrained Mental Labeling",
                      "pt": "2. Rotulação Mental Sóbria & Contida"
                },
                "desc": {
                      "en": "Using silent verbal notes sparingly: applying simple, non-philosophical tags ('hearing', 'tightness', 'wandering') only to steady attention, and dropping the words as soon as presence stabilizes.",
                      "pt": "Usando rótulos verbais com sobriedade: aplicando notas simples ('ouvindo', 'tensão', 'dispersão') apenas para ancorar o foco, soltando as palavras assim que a presença se firmar."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Words as Stepping Stones:</strong> Do not turn meditation into an internal monologue. Use the label as a light finger touch, then rest in direct non-verbal perception.</p>",
                      "pt": "<p><strong>Palavras como Pontes Provisórias:</strong> Não transforme a prática em monólogo interior. Use o rótulo como um toque leve, repousando na percepção direta não-verbal.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>The distinction between conventional designation (<em>paññatti</em>) and direct tactile reality in the Theravāda Abhidhamma.</p>",
                      "pt": "<p>A distinção entre designação convencional (<em>paññatti</em>) e percepção tátil direta no Abhidhamma Theravāda.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Walking Stick on a Rocky Slope:</strong> You use the walking stick for balance when stepping over loose stones, but carry it lightly when walking on smooth turf.</p>",
                      "pt": "<p><strong>A Bengala na Trilha Rochosa:</strong> Usa-se o bordão para apoio ao pisar em cascalho solto, mas caminha-se livremente ao pisar na grama macia.</p>"
                }
          },
          {
                "step": 3,
                "pali": "The Great Pause (Non-Action)",
                "title": {
                      "en": "3. The 'Great Pause' & Restraint of Impulse",
                      "pt": "3. A 'Grande Pausa' & Contenção do Impulso Reativo"
                },
                "desc": {
                      "en": "Introducing a conscious, non-acting pause between sensory impact and muscular reaction. Breaking the robotic loop of habitual impulsiveness.",
                      "pt": "Inserindo uma pausa consciente e sem ação entre o impacto sensorial e a reação muscular. Quebrando o reflexo automático da impulsividade habitual."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Intercepting Pause:</strong> When triggered by an annoying remark or sudden craving, freeze for 3 seconds. Watch the fiery impulse without acting. The fire starves.</p>",
                      "pt": "<p><strong>A Pausa que Salva:</strong> Ao ser provocado por um comentário hostil ou impulso urgente, pause por 3 segundos. Observe a queimação sem reagir. O fogo apaga sem combustível.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Nyanaponika's famous chapter: <em>The Power of Mindfulness: The Great Pause</em>.</p>",
                      "pt": "<p>O famoso capítulo de Nyanaponika: <em>The Power of Mindfulness: The Great Pause (O Poder da Atenção: A Grande Pausa)</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Breakwaters Taming the Ocean Surge:</strong> Heavy concrete sea-walls absorb the violent crashing waves, turning chaotic surf into gentle harbor waters.</p>",
                      "pt": "<p><strong>Os Quebra-Mares Amansando as Ondas:</strong> Paredões maciços de concreto absorvem a violência das ondas furiosas, transformando a ressaca em mar calmo no porto.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Anattā-ñāṇa-bodhi",
                "title": {
                      "en": "4. Direct Realization of Non-Self (Anattā)",
                      "pt": "4. Realização Direta do Não-Eu (Anattā)"
                },
                "desc": {
                      "en": "Through relentless bare attention, one sees that there is no 'thinker' behind the thought, no 'feeler' behind the sensation. Consciousness is an impersonal, transparent river.",
                      "pt": "Através da atenção nua ininterrupta, enxerga-se que não há um 'pensador' por trás do pensamento, nem um 'senciente' por trás da dor. A consciência é um rio impessoal e transparente."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Resting in Selfless Reality:</strong> 'In the seen, only the seen; in the heard, only the heard.' No ego to defend, no self to bruise. Complete peace.</p>",
                      "pt": "<p><strong>Repousando na Realidade Sem Ego:</strong> 'No visto, apenas o visto; no ouvido, apenas o ouvido.' Nenhum ego para defender ou magoar. Paz profunda.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>Udāna 1.10 (Bāhiya Sutta)</strong> as interpreted by Ven. Nyanaponika.</p>",
                      "pt": "<p><strong>Udāna 1.10 (Bāhiya Sutta)</strong> conforme interpretado pelo Ven. Nyanaponika.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Pure Blue Sky After Thunderstorms:</strong> All dark clouds have drifted away; the vast blue expanse remains untouched, luminous, and boundless.</p>",
                      "pt": "<p><strong>O Céu Azul Após a Tempestade:</strong> Todas as nuvens pesadas se dissiparam; a abóbada azul celeste permanece intocada, luminosa e sem limites.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Mastery of Sati (Mindfulness) & Emotional Freedom",
      "hindrances": [
        {
          "name": "Compulsive Judgmentalism",
          "remedy": "Observe the judgment itself with Bare Attention: 'Judging is arising; judging is passing.'"
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Harsh internal critic berating yourself for having distracted thoughts",
          "remedy": "Nyanaponika's reminder: the mirror does not judge the dust on its surface. Notice the critic with gentle, neutral awareness."
        }
      ]
    },
    "layLife": {
      "feasibility": "Supreme (The foundation of all modern psychological mindfulness)",
      "dailySchedule": "Practice 10 minutes of pure Bare Attention sitting before reading news or beginning work.",
      "householdObstacles": "Rushing into arguments with spouses or coworkers; insert a 3-second Bare Attention pause.",
      "ethicsDuty": "Right Mindfulness (Sammā Sati) protecting the doors of speech and action."
    },
    "paliTerms": [
      {
        "term": "Sammā Sati",
        "meaning": "Right Mindfulness / bare non-judgmental presence"
      },
      {
        "term": "Sampajañña",
        "meaning": "Clear comprehension of purpose, suitability, and reality"
      }
    ]
  },
  {
    "id": "sri-lanka-nyanatiloka",
    "cluster": "sri-lanka",
    "number": "35",
    "paliTitle": "Nyanatiloka Sutta-Magga",
    "title": {
      "en": "Ven. Nyanatiloka Mahāthera — Island Hermitage & The Path to Deliverance",
      "pt": "Ven. Nyanatiloka Mahāthera — O Eremitério da Ilha & O Caminho da Libertação"
    },
    "lineageTradition": {
      "en": "Island Hermitage (Polgasduwa, Sri Lanka — Founded 1911)",
      "pt": "Eremitério da Ilha (Polgasduwa, Sri Lanka — Fundado em 1911)"
    },
    "primaryMasters": "Ven. Nyanatiloka Mahāthera (1878–1957)",
    "canonicalRef": "The Path to Deliverance, Buddhist Dictionary, Pāli Sutta Syntheses",
    "difficulty": "intermediate",
    "curriculumOrder": 3,
    "difficultyLabel": {
      "en": "Intermediate",
      "pt": "Intermediário"
    },
    "recommendedPrereq": {
      "en": "Basic familiarity with the Noble Eightfold Path structure",
      "pt": "Familiaridade básica com a estrutura do Nobre Caminho Óctuplo"
    },
    "whyStudy": {
      "en": "The historic father of Western monastic Theravāda. His anthology 'The Path to Deliverance' maps the entire spiritual journey from ethics to Jhāna and Nibbāna using only the Buddha's original discourses.",
      "pt": "O pai histórico do monasticismo Theravāda ocidental. Sua obra 'O Caminho da Libertação' mapeia toda a jornada espiritual da ética aos Jhānas e Nibbāna usando apenas palavras do Buda."
    },
    "coreFocus": {
      "en": "Rigorous systematic harmonization of Sīla, Samādhi, and Paññā; direct reliance on canonical Pali suttas without medieval sectarian distortions",
      "pt": "Harmonização sistemática e rigorosa de Sīla, Samādhi e Paññā; fidelidade direta aos suttas canônicos sem distorções sectárias medievais"
    },
    "primaryAnchor": {
      "en": "The serene seclusion of forest island contemplation, anchoring in classical canonical breathing and contemplation of elements",
      "pt": "A serenidade do eremitério na ilha florestal, ancorando na respiração canônica e contemplação elemental"
    },
    "approachToJhana": {
      "en": "Classical Pāli Sutta Jhāna: tranquility and insight developed in tandem (Yuganaddha), leading to clear seeing of the 5 aggregates",
      "pt": "Jhāna canônico clássico: tranquilidade e insight cultivados em harmonia (Yuganaddha), abrindo a visão nítida dos 5 agregados"
    },
    "useOfNoting": {
      "en": "Clear analytical discernments rooted in the Buddha's definitions: seeing Nama (mentality) and Rupa (materiality) with precision",
      "pt": "Discernimento analítico claro ancorado nas definições do Buda: distinguir Náma (mente) e Rúpa (matéria) com precisão cirúrgica"
    },
    "tagline": {
      "en": "'The Dhamma is self-contained and clear. Return to the original words of the Master, and the path to deliverance opens before you.'",
      "pt": "'O Dhamma é autossuficiente e límpido. Retorne às palavras originais do Mestre, e o caminho da libertação se descortinará diante de você.'"
    },
    "overview": {
      "en": "Ven. Nyanatiloka was a German violin prodigy who abandoned Europe in 1903 to become the first continental European ordained as a Theravāda monk. In 1911, he rowed a small wooden boat into the lagoon of Dodanduwa, Sri Lanka, and founded the legendary Island Hermitage (Polgasduwa). He insisted that practice must return to the genuine Early Buddhist Texts, cutting away later scholastic superstitions. His disciples—including Nyanaponika, Bhikkhu Ñāṇamoli, and Ven. Ñāṇavīra—became the world's most brilliant Dhamma translators.",
      "pt": "Ven. Nyanatiloka foi um violinista virtuoso alemão que abandonou a Europa em 1903 para se tornar o primeiro monge Theravāda ordenado da Europa continental. Em 1911, remou um pequeno barco pela lagoa de Dodanduwa, no Sri Lanka, e fundou o lendário Eremitério da Ilha (Polgasduwa). Defendia que a meditação devia retornar aos Textos Budistas Antigos genuínos, eliminando superstições e escolásticas tardias. Seus discípulos tornaram-se os tradutores mais brilhantes do cânone no Ocidente."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Polgasduwa-sīla",
                "title": {
                      "en": "1. Island Hermitage Ethical Discipline",
                      "pt": "1. Disciplina Ética do Eremitério da Ilha"
                },
                "desc": {
                      "en": "Ven. Nyanatiloka's hermitage standard on the lake island of Polgasduwa: strict monastic silence, renouncing social visits, establishing the stainless foundation of virtue.",
                      "pt": "O padrão ascético do Ven. Nyanatiloka na ilha lacustre de Polgasduwa: silêncio estrito, renúncia a visitas sociais e consolidação de uma integridade moral inabalável."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Setting Sacred Boundaries:</strong> Protect your meditation space from digital interruptions and casual chatter. Virtue is the bedrock of mental focus.</p>",
                      "pt": "<p><strong>Estabelecendo Limites Sagrados:</strong> Blinde seu refúgio de prática contra distrações digitais e conversas vazias. A virtude é o alicerce de todo samādhi.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Ven. Nyanatiloka's manual: <em>The Path to Deliverance</em> and <em>Buddhist Dictionary</em>.</p>",
                      "pt": "<p>As obras capitais do Ven. Nyanatiloka: <em>The Path to Deliverance (O Caminho para a Libertação)</em> e o <em>Buddhist Dictionary</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Stone Foundation of the Temple:</strong> Sunk deep into bedrock, capable of bearing the massive weight of pillars and gilded roofs without settling.</p>",
                      "pt": "<p><strong>O Alicerce de Pedra do Templo:</strong> Fincado fundo na rocha matriz, capaz de sustentar o peso monumental de colunas e telhados sem ceder um milímetro.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Samādhi-kammaṭṭhāna",
                "title": {
                      "en": "2. Systematic Purification of Consciousness",
                      "pt": "2. Purificação Sistemática da Consciência (Samādhi)"
                },
                "desc": {
                      "en": "Cultivating one-pointed absorption using the classical forty subjects (kammaṭṭhāna), subduing the 5 hindrances and purifying consciousness into pristine calm.",
                      "pt": "Cultivando a absorção unificada através dos quarenta temas clássicos (kammaṭṭhāna), subjugando os 5 obstáculos e purificando a mente em serenidade límpida."
                },
                "practiceInstructions": {
                      "en": "<p><strong>One-Pointed Deepening:</strong> Select your primary meditation object (breath, kasina, or mettā). Hold the object until the mind unifies in effortless absorption.</p>",
                      "pt": "<p><strong>Aprofundamento Unificado:</strong> Escolha seu objeto primário (respiração, kasina ou mettā). Sustente a atenção até que a mente unifique em absorção estável.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><em>Visuddhimagga</em> Ch. III–XI as translated and systematized by Nyanatiloka.</p>",
                      "pt": "<p><em>Visuddhimagga</em> Cap. III–XI conforme traduzido e estruturado por Nyanatiloka.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Filtering Muddy Water with Alum:</strong> Stirring the cloudy water; the sediment settles to the bottom, leaving the upper water crystal clear.</p>",
                      "pt": "<p><strong>Decantando a Água com Alúmen:</strong> Agitando a água turva; a terra assenta no fundo do cântaro, deixando a água superior perfeitamente translúcida.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Diṭṭhi-visuddhi (Anattā)",
                "title": {
                      "en": "3. Purification of View: The Anatomy of Anattā",
                      "pt": "3. Purificação da Visão: A Anatomia de Anattā"
                },
                "desc": {
                      "en": "Nyanatiloka's defining scholarly and experiential insight: 'Whosoever does not understand Anattā does not understand the Buddha's Dhamma.' Dissecting mind-and-matter into bare impersonal phenomena.",
                      "pt": "O insight definitivo do Ven. Nyanatiloka: 'Quem não compreende Anattā não compreende o Dhamma do Buda.' Decompondo mente e matéria em processos puramente impessoais."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Seeing the Impersonal Machine:</strong> Recognize: 'No agent walks; there is only walking. No thinker thinks; there are only thoughts.' Destroy the phantom of selfhood.</p>",
                      "pt": "<p><strong>Enxergando a Máquina Impessoal:</strong> Reconheça: 'Ninguém caminha; há apenas o caminhar. Nenhum pensador pensa; há apenas pensamentos.' Desfaça a ilusão do 'eu'.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Nyanatiloka's famous essay: <em>Anattā: The Central Conception of Buddhism</em>.</p>",
                      "pt": "<p>O famoso tratado de Nyanatiloka: <em>Anattā: O Conceito Central do Budismo</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Marionette Puppet:</strong> Wood, strings, and cloth dancing on stage; children believe it is alive, but the wise person sees only string tensions and wooden levers.</p>",
                      "pt": "<p><strong>O Boneco de Marionete:</strong> Madeira, barbantes e panos dançando no palco; crianças acham que tem vida própria, mas o sábio vê apenas alavancas e cordinhas puxadas.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Satta-visuddhi-niṭṭhāna",
                "title": {
                      "en": "4. Completing the Seven Purifications to Deliverance",
                      "pt": "4. Conclusão das Sete Purificações Rumo à Libertação"
                },
                "desc": {
                      "en": "Traversing the 7 stages of purification: virtue, mind, view, overcoming doubt, knowledge of path and non-path, knowledge of practice, and knowledge and vision. Touching the Deathless.",
                      "pt": "Percorrendo as 7 etapas de purificação: virtude, mente, visão, superação da dúvida, discernimento do caminho, discernimento da prática e visão libertadora. Realizando o Imortal."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Final Relay:</strong> Step from one purification to the next until the chariot relay reaches the final destination of Nibbāna.</p>",
                      "pt": "<p><strong>O Revezamento dos Carros:</strong> Avance de uma purificação à seguinte até que o revezamento das carruagens atinja o destino final de Nibbāna.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 24 (Rathavinīta Sutta)</strong>: The Relay Chariots framework structuring the entire <em>Visuddhimagga</em>.</p>",
                      "pt": "<p><strong>MN 24 (Rathavinīta Sutta)</strong>: A parábola dos Carros de Revezamento que estrutura todo o <em>Visuddhimagga</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Seven Relay Chariots (MN 24):</strong> King Pasenadi rushes from Sāvatthī to Sāketa using seven relay chariots; each chariot carries him one stage closer to his goal.</p>",
                      "pt": "<p><strong>As Sete Carruagens de Revezamento (MN 24):</strong> O rei viaja com urgência usando sete carruagens consecutivas; cada veículo o transporta por uma etapa até a meta final.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Mastery of the Noble Eightfold Path & Deliverance (Vimutti)",
      "hindrances": [
        {
          "name": "Intellectual Speculation",
          "remedy": "Nyanatiloka's warning: scholarship without sitting is empty theory. Sit down and meditate."
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Confusion caused by conflicting modern Buddhist teachers and opinions",
          "remedy": "Anchor directly in Nyanatiloka's 'Path to Deliverance': let the Buddha's own words be your final judge."
        }
      ]
    },
    "layLife": {
      "feasibility": "High (Provides a crystal-clear, structured roadmap for serious practitioners)",
      "dailySchedule": "Study 1 sutta passage daily; follow immediately with 45 minutes of quiet sitting.",
      "householdObstacles": "Information overload; limit your reading to authoritative translations of the Nikāyas.",
      "ethicsDuty": "Sammā Vācā (Right Speech) and unwavering moral truthfulness."
    },
    "paliTerms": [
      {
        "term": "Vimutti",
        "meaning": "Deliverance / complete spiritual liberation from suffering"
      },
      {
        "term": "Polgasduwa",
        "meaning": "Island Hermitage (the historic forest sanctuary in Dodanduwa lagoon)"
      }
    ]
  },
  {
    "id": "sri-lanka-mitirigala",
    "cluster": "sri-lanka",
    "number": "36",
    "paliTitle": "Nissarana Vanaya Kammaṭṭhāna",
    "title": {
      "en": "Ven. Mātara Sri Ñāṇārāma — Nissarana Vanaya & The 7 Purifications",
      "pt": "Ven. Mātara Sri Ñāṇārāma — Nissarana Vanaya & As 7 Purificações"
    },
    "lineageTradition": {
      "en": "Meetirigala Nissarana Vanaya Forest Hermitage (Sri Lanka)",
      "pt": "Eremitério de Floresta Meetirigala Nissarana Vanaya (Sri Lanka)"
    },
    "primaryMasters": "Ven. Mātara Sri Ñāṇārāma Mahāthera (1901–1992), Ven. Bhikkhu Anālayo, Ven. Ñāṇananda",
    "canonicalRef": "MN 24 (Rathavinīta Sutta / Relay Chariots), The Seven Stages of Purification",
    "difficulty": "intermediate",
    "curriculumOrder": 4,
    "difficultyLabel": {
      "en": "Intermediate",
      "pt": "Intermediário"
    },
    "recommendedPrereq": {
      "en": "Familiarity with Visuddhimagga purification stages and Satipaṭṭhāna",
      "pt": "Familiaridade com as etapas de purificação do Visuddhimagga e Satipaṭṭhāna"
    },
    "whyStudy": {
      "en": "The master teacher behind Ven. Ñāṇananda and Bhikkhu Anālayo. Mastered both deep Samatha absorption and razor-sharp Vipassanā, integrating the 7 Purifications with forest rigor.",
      "pt": "O mestre por trás de Ven. Ñāṇananda e Bhikkhu Anālayo. Dominava tanto o Samatha profundo quanto o Vipassanā cortante, integrando os 7 Estágios de Purificação com rigor ascético."
    },
    "coreFocus": {
      "en": "The Seven Stages of Purification (Satta Visuddhi), balancing serenity and insight, dismantling the stages of delusion",
      "pt": "Os Sete Estágios de Purificação (Satta Visuddhi), equilíbrio harmônico entre serenidade e insight, superação das fases da ilusão"
    },
    "primaryAnchor": {
      "en": "The breath coupled with profound mindfulness of physical sensations and the purification of mind (Citta-Visuddhi)",
      "pt": "A respiração aliada à atenção plena profunda das sensações corporais e a purificação da mente (Citta-Visuddhi)"
    },
    "approachToJhana": {
      "en": "Clean, secluded absorptions cultivated in dense forest hermitages, used strictly as stepping stones (Relay Chariots) for insight",
      "pt": "Absorções límpidas forjadas em eremitérios densos, utilizadas estritamente como carruagens de revezamento para o insight"
    },
    "useOfNoting": {
      "en": "Precise discernment of Nama and Rupa without confusion; tracking the stages of knowledge up to equanimity regarding formations (Saṅkhārupekkhā)",
      "pt": "Discernimento preciso de Náma e Rúpa sem hesitação; acompanhamento dos estágios de sabedoria até a equanimidade suprema"
    },
    "tagline": {
      "en": "'Purification of virtue is for the sake of purification of mind; purification of mind is for wisdom; wisdom is for unconditioned freedom.'",
      "pt": "'A purificação da virtude serve à purificação da mente; a purificação da mente serve à sabedoria; a sabedoria serve à libertação plena.'"
    },
    "overview": {
      "en": "Ven. Mātara Sri Ñāṇārāma Mahāthera was the spiritual director of Meetirigala Nissarana Vanaya (The Forest Hermitage of Deliverance), Sri Lanka's premier strict meditation monastery. Known for his profound scholarship and formidable meditative attainment, he taught that concentration and insight are like two chariot wheels: if either is defective, the vehicle crashes. His treatise 'The Seven Stages of Purification' remains a master manual for diagnosing insight knowledges without delusion.",
      "pt": "Ven. Mātara Sri Ñāṇārāma Mahāthera foi o diretor espiritual de Meetirigala Nissarana Vanaya (O Eremitério da Libertação), o mais rigoroso mosteiro de meditação do Sri Lanka. Conhecido por sua vasta erudição e formidável realização meditativa, ensinava que concentração e insight são como as duas rodas de uma carruagem: se uma falhar, o veículo tomba. Seu tratado 'Os Sete Estágios de Purificação' permanece como manual mestre para diagnosticar estágios de sabedoria sem autoengano."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Arañña-samatha",
                "title": {
                      "en": "1. Forest Immersion in Nissarana Vanaya",
                      "pt": "1. Imersão na Selva de Nissarana Vanaya"
                },
                "desc": {
                      "en": "Ven. Mātara Sri Ñāṇārāma's hermitage sanctuary: establishing deep, undisturbed mindfulness under ancient trees in absolute forest silence, quelling the 5 hindrances.",
                      "pt": "O santuário do Ven. Mātara Sri Ñāṇārāma: estabelecendo atenção profunda sob as copas das árvores na quietude da floresta cingalesa, silenciando os 5 obstáculos."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Jungle Grounding:</strong> Anchor deeply in the natural breath. Absorb the soothing stillness of the forest into the nervous system.</p>",
                      "pt": "<p><strong>Enraizamento na Natureza:</strong> Ancore com serenidade na respiração natural. Permita que a tranquilidade profunda da floresta acalme seu sistema nervoso.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Ven. Ñāṇārāma's master handbook: <em>The Seven Stages of Purification and the Insight Knowledges</em>.</p>",
                      "pt": "<p>O tratado clássico do Ven. Ñāṇārāma: <em>As Sete Etapas da Purificação e os Conhecimentos de Insight</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Anchor in Deep Ocean Sand:</strong> A heavy forged anchor bites deep into the ocean bed, keeping the ship rock-steady through the night.</p>",
                      "pt": "<p><strong>A Âncora Fincada no Fundo do Oceano:</strong> A pesada âncora de ferro morde a areia profunda, mantendo a embarcação estável durante toda a noite.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Udayabbaya-pariggaha",
                "title": {
                      "en": "2. Microscopic Observation of Arising & Dissolution",
                      "pt": "2. Observação Microscópica do Surgir & Dissolver"
                },
                "desc": {
                      "en": "Refining Vipassanā to catch the micro-moments of arising (udaya) and passing away (vaya) of every physical sensation, breath pulse, and mind-state.",
                      "pt": "Refinando a visão de Vipassanā para flagrar os micro-instantes de nascimento (udaya) e desaparecimento (vaya) de cada sensação corporal, pulso e pensamento."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Watching the Boundary:</strong> Track the exact instant a sensation appears, the peak of its duration, and its instantaneous dissolution. See universal impermanence in action.</p>",
                      "pt": "<p><strong>Mapeando os Limiares:</strong> Acompanhe o segundo em que a sensação brota, o ápice da duração e sua dissolução instantânea. Veja a impermanência viva em ação.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Stage 4 of insight: <em>Udayabbaya-ñāṇa</em> as analyzed in Sri Lankan forest hermitage pedagogy.</p>",
                      "pt": "<p>Estágio 4 de insight: <em>Udayabbaya-ñāṇa</em> conforme ensinado na pedagogia dos eremitérios do Sri Lanka.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Lightning Bugs Flashing in the Dark:</strong> Tiny fireflies flickering on for half a second and going dark, puncturing the night with momentary points of light.</p>",
                      "pt": "<p><strong>Vaga-Lumes Cintilando na Noite:</strong> Pequenos vaga-lumes acendendo por meio segundo e apagando no breu, pontuando a escuridão com clarões efêmeros.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Dukkha-ñāṇa-taraṇa",
                "title": {
                      "en": "3. Navigating the Dukkha-Ñāṇas with Courage",
                      "pt": "3. Atravessando os Estágios de Desencanto (Dukkha-Ñāṇas)"
                },
                "desc": {
                      "en": "Crossing the formidable knowledges of fear (bhaya), misery (ādīnava), and disenchantment (nibbidā). Ven. Ñāṇārāma's compassionate map for enduring existential dark nights.",
                      "pt": "Cruzando os estágios de terror (bhaya), perigo (ādīnava) e desencanto (nibbidā). O mapa compassivo de Ven. Ñāṇārāma para atravessar a noite escura existencial."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Equanimity in the Storm:</strong> When deep disillusionment with conditioned existence arrives, do not despair. This is not depression; this is the ego's house crumbling. Keep meditating!</p>",
                      "pt": "<p><strong>Equanimidade no Deserto:</strong> Quando surgir profundo desespero com a impermanência do mundo, não desanime. Não é depressão; é a carcaça do ego caindo. Continue firme!</p>"
                },
                "canonicalBasis": {
                      "en": "<p>The five knowledges of suffering (<em>dukkha-ñāṇā</em>) described in <em>Visuddhimagga</em> XXI.</p>",
                      "pt": "<p>Os cinco conhecimentos do sofrimento (<em>dukkha-ñāṇā</em>) descritos no <em>Visuddhimagga</em> XXI.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Prisoner Crawling Through the Drainage Pipe:</strong> Crawling through mud and narrow darkness, knowing that daylight and open air await right at the exit.</p>",
                      "pt": "<p><strong>O Prisioneiro no Túnel de Fuga:</strong> Rastejando no escuro e na poeira, sabendo com certeza que a luz do sol e o ar livre estão logo na saída.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Saṅkhārupekkhā-phala",
                "title": {
                      "en": "4. Equanimity Towards Formations & Noble Breakthrough",
                      "pt": "4. Equanimidade com as Formações & Salto Libertador"
                },
                "desc": {
                      "en": "Reaching supreme, effortless equanimity towards all formations (saṅkhārupekkhā). All spiritual struggle ends. The mind lets go, and Nibbāna is directly realized.",
                      "pt": "Alcançando a equanimidade suprema e sem esforço diante de todas as construções (saṅkhārupekkhā). Toda a luta cessa. A mente solta tudo e Nibbāna é realizado diretamente."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Effortless Rest:</strong> Abide as pure, unmoving peace. The mind has laid down every burden. Complete freedom.</p>",
                      "pt": "<p><strong>Repouso sem Esforço:</strong> Permaneça como paz pura e imóvel. A mente depôs todo e qualquer fardo. Liberdade absoluta.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>The final threshold before the attainment of Stream-Entry (<em>sotāpatti-magga</em>).</p>",
                      "pt": "<p>O limiar supremo que antecede a Entrada na Corrente (<em>sotāpatti-magga</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Soaring Glider Catching the High Wind:</strong> The pilot turns off the engine; the glider rides silent thermals effortlessly above the mountain range.</p>",
                      "pt": "<p><strong>O Planador nas Correntes de Ar Superior:</strong> O piloto desliga o motor; a aeronave flutua suavemente nas correntes térmicas acima de todas as cordilheiras.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Complete Mastery of the 16 Insight Knowledges (Visuddhiñāṇa)",
      "hindrances": [
        {
          "name": "Corruptions of Insight (Vipassanupakkilesa)",
          "remedy": "Do not mistake bright lights, rapture, or calm for enlightenment; observe them as anicca."
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Sudden existential dread or fear when sensations begin dissolving rapidly",
          "remedy": "Recognize Bhaya-ñāṇa (knowledge of fear): fear is a natural stage of wisdom; stay calm and grounded."
        }
      ]
    },
    "layLife": {
      "feasibility": "Intermediate to Advanced (High-precision manual for serious retreat meditators)",
      "dailySchedule": "Balance 30 minutes of breath calming with 30 minutes of analytical Nama-Rupa observation.",
      "householdObstacles": "Impatience to reach higher stages; build the chariot from the ground up.",
      "ethicsDuty": "Sīla-visuddhi (purification of morality) as the essential foundation."
    },
    "paliTerms": [
      {
        "term": "Satta Visuddhi",
        "meaning": "The Seven Stages of Purification from the Rathavinīta Sutta"
      },
      {
        "term": "Nissarana",
        "meaning": "Deliverance / departure from the burning house of Samsara"
      }
    ]
  },
  {
    "id": "sri-lanka-mn18-madhupindika",
    "cluster": "sri-lanka",
    "number": "37",
    "paliTitle": "Madhupiṇḍika Sutta",
    "title": {
      "en": "Madhupiṇḍika Sutta — The Honeyball & The Arrest of Papañca",
      "pt": "Madhupiṇḍika Sutta — A Bola de Mel & A Extinção do Papañca"
    },
    "lineageTradition": {
      "en": "Sri Lankan Deep Insight Lineage (Sutta Analysis)",
      "pt": "Linhagem de Insight Profundo do Sri Lanka (Análise Canônica)"
    },
    "primaryMasters": "Gotama Buddha, Ven. Mahākaccāna, Ven. Kaṭukurunde Ñāṇananda",
    "canonicalRef": "MN 18 (Majjhima Nikāya 18)",
    "difficulty": "advanced",
    "curriculumOrder": 5,
    "difficultyLabel": {
      "en": "Advanced",
      "pt": "Avançado"
    },
    "recommendedPrereq": {
      "en": "Stage 2 Sri Lankan Foundations and solid understanding of perception (Saññā)",
      "pt": "Fundamentos de Sri Lanka e compreensão sólida da percepção (Saññā)"
    },
    "whyStudy": {
      "en": "The seminal master sutta on how sensory perception spirals into catastrophic mental proliferation (Papañca). Unpacks the psychological machinery that creates ego, conflict, and existential suffering.",
      "pt": "O sutta fundamental sobre como o contato sensorial se transforma na proliferação mental descontrolada (Papañca). Desvenda a engrenagem que cria o ego e os conflitos humanos."
    },
    "coreFocus": {
      "en": "The perceptual formula: Contact → Feeling → Perception → Thought → Mental Proliferation (Papañca-saññā-saṅkhā); arresting the chain at perception",
      "pt": "A fórmula da percepção: Contato → Sensação → Percepção → Pensamento → Proliferação Conceitual (Papañca); estancar a cadeia na percepção"
    },
    "primaryAnchor": {
      "en": "The razor-edge of sensory contact (Phassa) before the thinking mind invents 'me' and 'mine'",
      "pt": "A borda afiada do contato sensorial (Phassa) antes que o intelecto invente o 'eu' e o 'meu'"
    },
    "approachToJhana": {
      "en": "By stopping conceptual proliferation, the mind achieves radical, pristine stillness free from mental projections, opening to profound absorptions",
      "pt": "Ao estancar o papañca, a mente alcança uma quietude pura, sem projeções mentais, abrindo-se a absorções profundas"
    },
    "useOfNoting": {
      "en": "Detecting the exact moment perception becomes ego-centered: 'Perception is just perception; do not spin a novel out of it.'",
      "pt": "Detectar o instante em que a percepção vira apego do ego: 'Percepção é apenas percepção; não crie uma novela sobre ela.'"
    },
    "tagline": {
      "en": "'Dependent on eye and forms, eye-consciousness arises... what one feels, one perceives; what one perceives, one thinks about; what one thinks about, one proliferates.'",
      "pt": "'Dependendo do olho e das formas, a consciência visual surge... o que se sente, se percebe; o que se percebe, se pensa; o que se pensa, se prolifera.'"
    },
    "overview": {
      "en": "When a haughty ascetic challenges the Buddha in an orchard, the Buddha gives a cryptic reply and walks away. When the monks ask Ven. Mahākaccāna to explain, he delivers the famous perceptual formula of MN 18: Eye + Form = Eye-Consciousness → Contact → Feeling → Perception → Thought → Papañca (Obsessive Mental Proliferation). Once Papañca takes over, a person is assaulted by memories and anxieties past, present, and future. The Buddha praised this explanation as delicious as a 'honeyball' (madhupiṇḍika). Ven. Ñāṇananda dedicated his life to teaching this sutta as the direct cure for human conflict and delusion.",
      "pt": "Quando um asceta arrogante desafia o Buda num pomar, o Buda responde com um enigma e se retira. Ao pedirem explicação a Ven. Mahākaccāna, ele elucida a célebre fórmula perceptiva do MN 18: Olho + Forma = Consciência Visual → Contato → Sensação → Percepção → Pensamento → Papañca (Proliferação Conceitual Incessante). Quando o Papañca assume o comando, a pessoa é assaltada por projeções, mágoas e medos. O Buda elogiou a explicação dizendo que era saborosa como uma 'bola de mel'. Ven. Ñāṇananda dedicou sua vida a ensinar este sutta como o antídoto definitivo para a ilusão e a guerra mental."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Phassa-samudaya",
                "title": {
                      "en": "1. The Primary Spark: Contact & Sensation",
                      "pt": "1. A Faísca Primária: Contato & Sensação"
                },
                "desc": {
                      "en": "The Buddha's causal breakdown: eye and form meet → eye-consciousness arises; the meeting of the three is contact (phassa); conditioned by contact, feeling arises.",
                      "pt": "A cadeia causal do Buda: olho e forma se encontram → a consciência visual desperta; a reunião dos três é o contato (phassa); do contato brota a sensação."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Tracking the Sensory Flash:</strong> Notice the bare moment of sensory contact before thoughts or stories begin. Recognize: 'This is just sensory contact and raw feeling.'</p>",
                      "pt": "<p><strong>Mapeando o Contato Bruto:</strong> Perceba o milissegundo do contato sensorial antes que pensamentos ou julgamentos se formem. Reconheça: 'Isto é apenas contato e sensação'.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 18 §16</strong>: The famous epistemological chain expounded by Ven. Mahākaccāna.</p>",
                      "pt": "<p><strong>MN 18 §16</strong>: A célebre cadeia epistemológica detalhada pelo Ven. Mahākaccāna.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Striking Flint Against Steel:</strong> The stone strikes the steel, and an instantaneous spark of fire jumps into the air.</p>",
                      "pt": "<p><strong>A Pederneira Batendo no Aço:</strong> A pedra choca-se contra o ferro e uma fagulha instantânea de fogo salta no ar.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Papañca-pavaṭṭa",
                "title": {
                      "en": "2. The Runaway Proliferation of Thoughts (Papañca)",
                      "pt": "2. A Proliferação Desenfreada de Pensamentos (Papañca)"
                },
                "desc": {
                      "en": "'What one feels, one perceives; what one perceives, one thinks about; what one thinks about, one mentally proliferates (papañceti).' The avalanche of conceptual obsession.",
                      "pt": "'O que se sente, percebe-se; o que se percebe, pensa-se a respeito; o que se pensa a respeito, prolifera-se mentalmente (papañceti).' A avalanche obsessiva de conceitos."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Catching the Avalanche:</strong> Watch how a simple sound or ache triggers an entire mental novel of grievance, worry, or fantasy. See how papañca enslaves the mind.</p>",
                      "pt": "<p><strong>Flagrando a Avalanche:</strong> Veja como um mero barulho ou desconforto dispara um romance interior de queixa, medo ou fantasia. Veja como papañca escraviza a mente.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 18 §16</strong>: 'What a person mentally proliferates assails him with conceptual memories past, future, and present.'</p>",
                      "pt": "<p><strong>MN 18 §16</strong>: 'O que a pessoa prolifera assalta sua mente com memórias conceituais do passado, futuro e presente.'</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Tangle of Thorns (SN 1.23):</strong> A tangled thicket of briars in which every branch catches upon another until no passage is possible.</p>",
                      "pt": "<p><strong>O Emaranhado de Espinheiros (SN 1.23):</strong> Uma moita espessa de espinhos onde cada galho enrosca no outro até bloquear qualquer passagem.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Papañca-nirodha",
                "title": {
                      "en": "3. Arresting Proliferation at the Sensory Gate",
                      "pt": "3. Travando a Proliferação no Portal dos Sentidos"
                },
                "desc": {
                      "en": "If one does not delight in, welcome, or cling to sensory feeling, then obsessive tendencies to lust, aversion, and conceit find no footing. Papañca is arrested at its birth.",
                      "pt": "Se não nos deleitamos, acolhemos ou nos apegamos à sensação sensorial, as tendências de cobiça, aversão e vaidade não encontram solo. Papañca é abortada no nascimento."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Non-Proliferating Rest:</strong> In sensory contact, let perception be bare perception. Refuse to weave narratives around what is seen or heard. Snip the wire.</p>",
                      "pt": "<p><strong>Repouso Não-Proliferativo:</strong> No contato sensorial, deixe o visto ser apenas o visto. Recuse-se a tecer histórias sobre o que foi ouvido ou sentido. Corte o fio.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 18 §17–19</strong>: The complete cessation of the latent tendencies (<em>anusaya-samugghāta</em>).</p>",
                      "pt": "<p><strong>MN 18 §17–19</strong>: A cessação definitiva das tendências subjacentes latentes (<em>anusaya-samugghāta</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Snuffed Candle:</strong> Blowing out the match before it touches dry tinder; no forest fire can ever break out.</p>",
                      "pt": "<p><strong>O Fósforo Apagado:</strong> Soprando o palito antes que toque o capim seco; nenhum incêndio florestal pode eclodir.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Madhupiṇḍika-rasa",
                "title": {
                      "en": "4. Savoring the Sweet Honeyball of Peace",
                      "pt": "4. Saboreando a Doçura do Bolo de Mel (Nirvāṇa)"
                },
                "desc": {
                      "en": "Resting in the unproliferated freedom of the Dhamma. Tasting the exquisite relief of a mind entirely free of conceptual agitation, pure like a delicious honey cake.",
                      "pt": "Descansando na liberdade desanuviada do Dhamma. Saboreando o alívio supremo de uma mente totalmente livre da agitação conceitual, pura como um bolo de mel."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Tasting Freedom:</strong> Savor the stillness. When mental concepts cease, unconditioned peace is directly tasted.</p>",
                      "pt": "<p><strong>Degustando a Liberdade:</strong> Saboreie a quietude. Quando os conceitos mentais calam, a paz incondicionada é saboreada diretamente.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 18 §20</strong>: The Buddha names the sutta the 'Honeyball Discourse' (<em>Madhupiṇḍika Sutta</em>).</p>",
                      "pt": "<p><strong>MN 18 §20</strong>: O Buda coroa o discurso nomeando-o 'O Símile do Bolo de Mel' (<em>Madhupiṇḍika Sutta</em>).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Delicious Honey Cake (MN 18 §20):</strong> A starving traveler comes upon a cake made of pure honey; from whatever side he nibbles it, he tastes only delicious sweetness.</p>",
                      "pt": "<p><strong>O Delicioso Bolo de Mel (MN 18 §20):</strong> Um viajante faminto encontra um doce feito de mel puro; de qualquer lado que ele morda, saboreia apenas doçura deliciosa e nutritiva.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Cessation of Papañca & Insight into Emptiness (Suññatā)",
      "hindrances": [
        {
          "name": "Runaway Overthinking (Vitakka-vicāra)",
          "remedy": "Anchor in bodily contact; ask: 'Where did the sensory fact end and the dramatic novel begin?'"
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Obsessive replay of social conflicts, online arguments, or perceived slights",
          "remedy": "Apply MN 18: recognize that the other person only produced sound waves; your own Papañca fabricated the internal war."
        }
      ]
    },
    "layLife": {
      "feasibility": "Exceptional (The premier cognitive antidote for workplace politics and relational conflict)",
      "dailySchedule": "Whenever you feel outraged or offended, pause and dissect the experience using MN 18.",
      "householdObstacles": "Family misunderstandings; stop attributing hostile motives to words; stick strictly to sensory facts.",
      "ethicsDuty": "Speech free from malicious fantasy and gossip."
    },
    "paliTerms": [
      {
        "term": "Papañca",
        "meaning": "Conceptual proliferation / runaway mental storytelling that creates ego and conflict"
      },
      {
        "term": "Madhupiṇḍika",
        "meaning": "A sweet honeyball (metaphor for a teaching delicious at every level)"
      }
    ]
  },
  {
    "id": "sri-lanka-nanananda",
    "cluster": "sri-lanka",
    "number": "38",
    "paliTitle": "Ñāṇananda Papañca-Nirodha",
    "title": {
      "en": "Ven. Ñāṇananda — Papañca-Nirodha, Concept & Emptiness",
      "pt": "Ven. Ñāṇananda — A Cessação da Proliferação Mental & Vacuidade"
    },
    "lineageTradition": {
      "en": "Sri Lankan Forest Hermitage (Meetirigala Nissarana Vanaya)",
      "pt": "Eremitérios de Floresta do Sri Lanka (Nissarana Vanaya)"
    },
    "primaryMasters": "Ven. Kaṭukurunde Ñāṇananda, Ven. Matara Sri Ñāṇārāma, Ven. Nyanaponika Thera",
    "canonicalRef": "MN 18 (Madhupiṇḍika Sutta), SN 12.15 (Kaccānagotta Sutta), MN 121 (Cūḷasuññata Sutta)",
    "difficulty": "advanced",
    "difficultyLabel": {
      "en": "Advanced",
      "pt": "Avançado"
    },
    "recommendedPrereq": {
      "en": "Strong familiarity with EBT suttas",
      "pt": "Familiaridade com suttas canônicos"
    },
    "whyStudy": {
      "en": "Deconstructs linguistic concepts, mental proliferation (papañca), and exposes consciousness as a magical illusion.",
      "pt": "Desconstrói conceitos linguísticos, proliferação mental (papañca) e expõe a consciência como ilusão de ótica."
    },
    "coreFocus": {
      "en": "The cessation of conceptual proliferation (papañca-nirodha), deconstruction of linguistic conventions (paññatti), radical realization of Non-Self and Emptiness (Suññatā)",
      "pt": "Cessação da proliferação conceitual (papañca-nirodha), desconstrução das convenções linguísticas e realização da Vacuidade (Suññatā)"
    },
    "primaryAnchor": {
      "en": "The unconditioned signless dimension (animitta cetovimutti) where conceptual labels collapse and reality is seen as dependently arisen flux",
      "pt": "A dimensão sem-signo (animitta cetovimutti) onde os rótulos conceituais colapsam e a realidade é vista como fluxo dependente"
    },
    "approachToJhana": {
      "en": "Jhanas viewed not as permanent realms or mystical escapes, but as refined, conditioned stages of emptiness (suññata-vihāra)",
      "pt": "Jhānas vistos não como refúgios místicos, mas como estágios refinados e condicionados de vacuidade (suññata-vihāra)"
    },
    "useOfNoting": {
      "en": "Seeing through the trick of language itself: stopping the mind's automatic reflex to turn experiences into nouns, 'me' and 'mine'",
      "pt": "Ver através do truque da linguagem: desarmar o reflexo mental que transforma eventos em substantivos, 'eu' e 'meu'"
    },
    "tagline": {
      "en": "'Consciousness is like a magic show; the world of concepts is an optical illusion. When proliferation stops, Nibbāna is right here.'",
      "pt": "'A consciência é um truque de mágica; o mundo dos conceitos é uma ilusão de ótica. Cessada a proliferação, Nibbāna resplandece.'"
    },
    "overview": {
      "en": "Ven. Kaṭukurunde Ñāṇananda was one of the deepest contemplative scholars of Theravāda Buddhism. In his masterwork 'Concept and Reality' and his 33 'Nibbāna Sermons', delivered at the remote Nissarana Vanaya hermitage, he exposed the mechanics of mental proliferation (papañca): sensory contact triggers feelings, feelings trigger perceptions, perceptions trigger thoughts, and thoughts explode into an overwhelming web of ego-delusion. His meditation method trains the student to rest in the gap before conceptuality crystallizes, realizing the peaceful cessation of the illusion of an observer.",
      "pt": "Ven. Kaṭukurunde Ñāṇananda foi um dos maiores monges contemplativos do Sri Lanka contemporâneo. Em seus 33 Sermões sobre Nibbāna, proferidos no eremitério de Nissarana Vanaya, ele desnudou a mecânica da proliferação conceitual (papañca): o contato sensorial engendra sensação, sensação engendra percepção, percepção engendra pensamento, e o pensamento prolifera numa teia avassaladora de ilusão do 'eu'. Seu método treina o discípulo a repousar no intervalo que antecede a cristalização dos conceitos, desarmando a ilusão de um 'observador'."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Māyā-lakkhaṇa-dassana",
                "title": {
                      "en": "1. Deconstructing the Magic Show of Perception",
                      "pt": "1. Desconstruindo o Espetáculo Mágico da Percepção"
                },
                "desc": {
                      "en": "Ven. Kaṭukurunde Ñāṇananda's revolutionary insight: words and concepts are like a magician's trick. They project an illusion of permanent substances where there are only dependently arisen processes.",
                      "pt": "O insight revolucionário do Ven. Kaṭukurunde Ñāṇananda: palavras e conceitos funcionam como truques de mágica. Projetam a ilusão de coisas sólidas onde há apenas processos condicionados."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Exposing the Mirage:</strong> Notice how naming an object creates a false sense of permanence. Strip away the label and see the trembling, momentary nature of sensory data.</p>",
                      "pt": "<p><strong>Desmascarando a Miragem:</strong> Veja como rotular um objeto cria uma falsa ideia de solidez eterna. Rasgue o rótulo e veja o tremor impermanente dos dados sensoriais.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Ven. Ñāṇananda's master lectures: <em>Concept and Reality in Early Buddhist Thought</em> and <em>Nibbāna Sermons</em>.</p>",
                      "pt": "<p>Os tratados seminais do Ven. Ñāṇananda: <em>Concept and Reality</em> e os 33 sermões de <em>Nibbāna</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Magician's Illusory Palace (SN 22.95):</strong> A magician conjures an illusory palace at a crossroads; fools believe it is real, while the wise know it is a trick of mirrors and light.</p>",
                      "pt": "<p><strong>O Palácio Ilusório do Ilusionista (SN 22.95):</strong> Um mágico projeta um palácio de ouro num cruzamento; os tolos acreditam que é real, mas o sábio sabe que são espelhos e fumaça.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Papañca-vūpasama",
                "title": {
                      "en": "2. The Radical Stilling of Conceptual Proliferation",
                      "pt": "2. A Pacificação Radical da Proliferação Conceitual"
                },
                "desc": {
                      "en": "Severing the linguistic feedback loop that creates the split between 'I' (subject) and 'World' (object). Consciousness rests in non-proliferation (nippapañca).",
                      "pt": "Cortando o circuito linguístico que fabrica a falsa cisão entre 'Eu' (sujeito) e 'Mundo' (objeto). A consciência repousa na não-proliferação (nippapañca)."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Collapsing the Duality:</strong> Stop constructing an 'internal meditator' looking at an 'external breath'. There is only the knowing of sensation; no split exists.</p>",
                      "pt": "<p><strong>Colapsando a Dualidade:</strong> Pare de construir um 'eu meditador' observando uma 'respiração externa'. Há apenas o conhecer da sensação; nenhuma cisão existe.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Ven. Ñāṇananda's analysis of <em>papañca-saṅkhā-samudācaraṇa</em> in the Nikāyas.</p>",
                      "pt": "<p>A análise do Ven. Ñāṇananda sobre <em>papañca-saṅkhā-samudācaraṇa</em> nos Nikāyas canônicos.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Echo in the Canyon:</strong> A person shouts into the canyon, hears the echo, and angrily shouts back at the 'other person' in the mountain, fighting their own voice.</p>",
                      "pt": "<p><strong>O Eco no Desfiladeiro:</strong> Uma pessoa grita na garganta da montanha, ouve o eco e grita furiosa de volta contra a 'outra pessoa', brigando com a própria voz.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Anidassana-viññāṇa",
                "title": {
                      "en": "3. Non-Manifestative, Luminous Consciousness (Nibbāna)",
                      "pt": "3. A Consciência Sem Sinais & Radiante (Nibbāna)"
                },
                "desc": {
                      "en": "'Consciousness non-manifestative, infinite, luminous all around; here earth, water, fire, and wind find no footing; here name and form are completely cut off.' (DN 11).",
                      "pt": "'Consciência não-manifestativa, infinita, luminosa em toda parte; aqui terra, água, fogo e ar não encontram apoio; aqui nome e forma são cortados sem deixar rastro.' (DN 11)."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Resting in Unconditioned Awareness:</strong> Release all landing places for consciousness. Awareness does not cling, does not land, does not take birth. Total Nibbāna.</p>",
                      "pt": "<p><strong>Repousando na Consciência Desatada:</strong> Solte qualquer ponto de aterrissagem para a mente. A consciência não pousa, não se apropria, não renasce. Nibbāna absoluto.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>DN 11 §85 (Kevaṭṭa Sutta)</strong> and <strong>MN 49 (Brahmanimantanika Sutta)</strong>.</p>",
                      "pt": "<p><strong>DN 11 §85 (Kevaṭṭa Sutta)</strong> e <strong>MN 49 (Brahmanimantanika Sutta)</strong>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Sunbeam in the Void of Space:</strong> Beaming through empty outer space; because it hits no solid surface, it casts no shadow and is unestablished everywhere.</p>",
                      "pt": "<p><strong>O Raio Solar no Vácuo do Espaço:</strong> Viajando pelo vácuo sideral; como não atinge nenhuma poeira ou parede, não projeta sombra e permanece sem apoio em toda parte.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "Whenever your mind begins fabricating catastrophic future scenarios or obsessing over past conversations, recognize: 'This is papañca (proliferation)'. Stop fueling the story; return to raw sensory reality without the commentary.",
      "pt": "Quando sua mente começar a fabricar cenários trágicos futuros ou remoer discussões passadas, diagnostique: 'Isto é papañca (proliferação mental)'. Pare de alimentar a ficção; retorne à realidade sensorial crua sem o comentário."
    },
    "keyPaliTerms": [
      {
        "term": "Papañca",
        "meaning": "Mental proliferation, the conceptual fabrication that traps awareness in delusion"
      },
      {
        "term": "Animitta",
        "meaning": "Signless, free from the signs and distortions of conditioned perceptions"
      },
      {
        "term": "Suññatā",
        "meaning": "Emptiness of self and anything pertaining to self"
      }
    ],
    "curriculumOrder": 6
  },
  {
    "id": "contemporary-gunaratana",
    "cluster": "contemporary",
    "number": "39",
    "paliTitle": "Gunaratana Sati-Samādhi",
    "title": {
      "en": "Bhante Henepola Gunaratana — Mindfulness in Plain English & Bhavana Forest",
      "pt": "Bhante Henepola Gunaratana — Atenção Plena em Palavras Simples & Floresta Bhavana"
    },
    "lineageTradition": {
      "en": "Bhavana Society Forest Monastery (High View, West Virginia, USA)",
      "pt": "Mosteiro de Floresta Bhavana Society (West Virginia, EUA)"
    },
    "primaryMasters": "Ven. Dr. Henepola Gunaratana Nayaka Thera (born 1927)",
    "canonicalRef": "MN 118, 'Mindfulness in Plain English', 'Beyond Mindfulness in Plain English'",
    "difficulty": "foundational",
    "curriculumOrder": 1,
    "difficultyLabel": {
      "en": "Foundations",
      "pt": "Fundamentos"
    },
    "recommendedPrereq": {
      "en": "Open mind and desire for practical, jargon-free meditation instructions",
      "pt": "Mente aberta e desejo de instruções meditativas práticas sem jargões"
    },
    "whyStudy": {
      "en": "Author of the world's most widely read meditation handbook ('Mindfulness in Plain English'). Teaches how to demystify mindfulness and step effortlessly from daily breath awareness into deep canonical Jhāna.",
      "pt": "Autor do livro de meditação mais lido do planeta ('Atenção Plena em Palavras Simples'). Ensina a desmistificar a prática e avançar da respiração diária aos Jhānas canônicos."
    },
    "coreFocus": {
      "en": "Demystifying mindfulness (Sati), non-judgmental observation of breath, transitioning gently into calm Jhāna absorption and Vipassanā",
      "pt": "Desmistificar a atenção plena (Sati), observação acolhedora da respiração, transição harmoniosa para Jhāna e Vipassanā"
    },
    "primaryAnchor": {
      "en": "The rim of the nostrils or upper lip where the physical breath touches, observed with gentle patience and zero force",
      "pt": "A borda das narinas ou lábio superior onde o ar toca, observado com paciência afetuosa e sem força artificial"
    },
    "approachToJhana": {
      "en": "Clear, systematic entry into the 4 Sutta Jhānas: tranquilizing bodily and mental fabrications without tense straining or esoteric jargon",
      "pt": "Entrada serena e metódica nos 4 Jhānas dos Suttas: pacificando as formações corpóreas e mentais sem esforço tenso"
    },
    "useOfNoting": {
      "en": "Gentle mental noting when distracted: acknowledge 'thinking, thinking' or 'wandering, wandering' with warmth, then return to breath",
      "pt": "Rotulação gentil ao se distrair: reconhecer 'pensando, pensando' ou 'planejando' com carinho e retornar docemente à respiração"
    },
    "tagline": {
      "en": "'Mindfulness is like a loving grandmother who observes everything her grandchild does with gentle patience, without yelling or judging.'",
      "pt": "'A atenção plena é como uma avó amorosa que observa tudo o que o netinho faz com paciência afetuosa, sem gritos ou reprimendas.'"
    },
    "overview": {
      "en": "Bhante Henepola Gunaratana ('Bhante G') is a living legend of modern Buddhism. Ordained as a monk in Sri Lanka at age 12, he traveled to the United States in the 1960s and co-founded the Bhavana Society forest monastery in West Virginia. His landmark book, 'Mindfulness in Plain English', stripped away centuries of cultural baggage and medieval superstition, explaining meditation as a natural human capacity accessible to anyone. His sequel, 'Beyond Mindfulness in Plain English', made the canonical Jhānas understandable and attainable for lay householders.",
      "pt": "Bhante Henepola Gunaratana ('Bhante G') é uma lenda viva do budismo moderno. Ordenado monge no Sri Lanka aos 12 anos, viajou aos Estados Unidos na década de 1960 e fundou o mosteiro de floresta Bhavana Society nas montanhas de West Virginia. Seu livro seminal, 'Atenção Plena em Palavras Simples', despiu a prática de séculos de complexidades esotéricas, apresentando a meditação como uma faculdade natural humana. Sua continuação demonstrou que os Jhānas canônicos são perfeitamente acessíveis aos chefes de família contemporâneos."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Avisārada-sati",
                "title": {
                      "en": "1. Sitting in Plain English (No Pretense)",
                      "pt": "1. Praticando sem Rodeios (Sem Prepotência)"
                },
                "desc": {
                      "en": "Bhante Gunaratana's core principle: approaching meditation without mystical inflation or rigid posturing. Finding a balanced, natural posture and cultivating friendly, patient mindfulness.",
                      "pt": "O princípio de Bhante Gunaratana: abordar a meditação sem afetações místicas ou rigidez artificial. Encontrando uma postura equilibrada e cultivando atenção paciente e acolhedora."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Natural Posture:</strong> Sit upright without strain. Do not expect cosmic lights or instant bliss. Approach the sit with the simple attitude of making friends with your own mind.</p>",
                      "pt": "<p><strong>Postura Natural:</strong> Sente-se ereto sem rigidez. Não exija clarões cósmicos ou êxtase imediato. Encare a prática como o simples ato de fazer amizade com a própria mente.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Bhante Gunaratana's worldwide bestseller: <em>Mindfulness in Plain English</em>.</p>",
                      "pt": "<p>O best-seller clássico de Bhante Gunaratana: <em>Mindfulness in Plain English (Atenção Plena em Palavras Simples)</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>A Gentle Friend Sitting Beside You:</strong> Listening without interrupting, without judging, without offering unsolicited advice; simply holding warm space.</p>",
                      "pt": "<p><strong>O Amigo Sincero Sentado ao Lado:</strong> Escutando em silêncio, sem interromper, sem julgar, sem dar lições de moral; apenas presente com carinho.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Nāsikā-samphassa",
                "title": {
                      "en": "2. The Nostril Rim Touchpoint Anchor",
                      "pt": "2. A Âncora no Ponto de Contato das Narinas"
                },
                "desc": {
                      "en": "Focusing attention on the light, natural touch of air at the rim of the nostrils or upper lip. When the mind wanders, gently bringing it back without irritation.",
                      "pt": "Focalizando o toque suave e natural do ar na borda das narinas ou lábio superior. Quando a mente divagar, trazendo-a de volta com gentileza e sem autocrítica."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Gentle Return:</strong> When you notice thinking, smile softly and think: 'Thinking, thinking', then return smoothly to the tactile breath. Never fight with thoughts.</p>",
                      "pt": "<p><strong>O Retorno Gentil:</strong> Ao notar devaneios, sorria interiormente, pense 'pensando, pensando' e volte macio para a respiração. Nunca lute contra os pensamentos.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>The foundational instructions of Ānāpānasati Sutta (MN 118) simplified for modern lay practitioners.</p>",
                      "pt": "<p>As instruções basilares do Ānāpānasati Sutta (MN 118) desmistificadas para praticantes leigos.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Training a Lively Puppy to Sit:</strong> You place the puppy on the mat; it runs away; you gently pick it up and place it back on the mat 100 times with love until it rests.</p>",
                      "pt": "<p><strong>Treinando o Filhote de Cachorro a Ficar:</strong> Você coloca o cachorrinho na almofada; ele corre; você o pega no colo com carinho e o coloca de volta 100 vezes até ele deitar.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Nīvaraṇa-paccavekkhaṇā",
                "title": {
                      "en": "3. Unmasking the Disguises of the Five Hindrances",
                      "pt": "3. Desmascarando os Disfarces dos Cinco Obstáculos"
                },
                "desc": {
                      "en": "Recognizing how the hindrances sneak in disguised as reasonable ideas: restlessness pretending to be 'important chores', doubt pretending to be 'philosophical scrutiny', and sleepiness as 'needing rest'.",
                      "pt": "Reconhecendo como os obstáculos se infiltram disfarçados de ideias lógicas: a inquietação fingindo ser 'tarefa urgente', a dúvida fingindo ser 'análise crítica' e o sono fingindo ser 'cansaço'."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Catching the Impostors:</strong> When an urge whispers 'You should stop meditating and fix that email right now', recognize it: 'Ah, restlessness, I see your disguise!'</p>",
                      "pt": "<p><strong>Flagrando o Impostor:</strong> Quando uma voz interior sussurrar 'Você precisa parar de meditar agora e responder aquele email', identifique: 'Ah, inquietação, reconheço seu disfarce!'</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Chapter on <em>Dealing with Distractions</em> in Bhante Gunaratana's practical manual.</p>",
                      "pt": "<p>O capítulo sobre <em>Lidando com Distrações</em> no manual prático de Bhante Gunaratana.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Thief Dressed in a Monk's Robe:</strong> Approaching with an innocent greeting, but whose pockets are stuffed with stolen jewelry.</p>",
                      "pt": "<p><strong>O Ladrão Disfarçado em Trajes Nobres:</strong> Aproximando-se com fala mansa e respeitosa, mas cujos bolsos estão cheios de joias surrupiadas.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Samatha-vipassanā-saṅgama",
                "title": {
                      "en": "4. Flowing from Calm into Clear Insight",
                      "pt": "4. Fluindo da Calma para a Visão Clara (Vipassanā)"
                },
                "desc": {
                      "en": "Once calm is steady, turning awareness onto the sensations themselves: noticing how every itch, pain, and joy rises, peaks, and dissolves. Seeing anicca, dukkha, and anattā in everyday life.",
                      "pt": "Uma vez que a calma se estabilize, voltando a atenção para as próprias sensações: vendo como cada coceira, dor e alegria brota, atinge o auge e falece. Vendo anicca, dukkha e anattā no cotidiano."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Insight in the Kitchen:</strong> Wash dishes, listen to your family, walk to work with this same seeing. Meditation becomes the way you live your entire life.</p>",
                      "pt": "<p><strong>Insight na Cozinha:</strong> Lave pratos, escute sua família, caminhe na rua com este mesmo olhar. A meditação torna-se o modo de viver a vida inteira.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Bhante Gunaratana's companion book: <em>Eight Mindful Steps to Happiness</em>.</p>",
                      "pt": "<p>A obra complementar de Bhante Gunaratana: <em>Eight Mindful Steps to Happiness (Os Oito Passos da Atenção Plena para a Felicidade)</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Gentle Spring Breeze Clearing the Sky:</strong> Blowing through the house, airing out stale rooms, leaving the entire atmosphere fresh, clean, and bright.</p>",
                      "pt": "<p><strong>A Brisa Suave da Primavera Arejando a Casa:</strong> Soprando pelas janelas abertas, limpando o ar viciado dos quartos e deixando toda a atmosfera fresca, límpida e luminosa.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Mastery of 4 Jhānas & Plain English Vipassanā Insight",
      "hindrances": [
        {
          "name": "Impatience & Expectation",
          "remedy": "Bhante G's rule: expectation is the biggest obstacle. Sit without expecting anything special."
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Falling asleep within 5 minutes of sitting down",
          "remedy": "Straighten the spine, open your eyes slightly, take three deep full breaths, then return to gentle noticing."
        }
      ]
    },
    "layLife": {
      "feasibility": "Supreme (The single best starting point for any modern beginner or seasoned layperson)",
      "dailySchedule": "Sit for 20–30 minutes every morning before turning on your computer or phone.",
      "householdObstacles": "Thinking meditation is about stopping all thoughts; realize meditation is about not fighting your thoughts.",
      "ethicsDuty": "Sīla practiced with gentleness: truthfulness, kindness, and generosity."
    },
    "paliTerms": [
      {
        "term": "Bhavana",
        "meaning": "Cultivation / mental development / meditation"
      },
      {
        "term": "Sati",
        "meaning": "Mindfulness / bare non-reactive remembering"
      }
    ]
  },
  {
    "id": "contemporary-kalama",
    "cluster": "contemporary",
    "number": "40",
    "paliTitle": "Kālāma Sutta",
    "title": {
      "en": "Kālāma Sutta — The Charter of Free Inquiry & Direct Verification",
      "pt": "Kālāma Sutta — A Carta do Livre Exame & Verificação Empírica"
    },
    "lineageTradition": {
      "en": "Early Buddhist Epistemology & Modern Rational Inquiry",
      "pt": "Epistemologia Budista Antiga & Investigação Racional Moderna"
    },
    "primaryMasters": "Gotama Buddha, The Kālāma Citizens of Kesaputta",
    "canonicalRef": "AN 3.65 (Aṅguttara Nikāya 3.65 / Kesamutti Sutta)",
    "difficulty": "foundational",
    "curriculumOrder": 2,
    "difficultyLabel": {
      "en": "Foundations",
      "pt": "Fundamentos"
    },
    "recommendedPrereq": {
      "en": "Willingness to question blind dogma, cultural conditioning, and religious superstition",
      "pt": "Disposição para questionar dogmas cegos, tradições familiares e crenças cegas"
    },
    "whyStudy": {
      "en": "The historic Magna Carta of free spiritual inquiry. The Buddha commands seekers not to believe through hearsay, lineage, scripture, or charisma, but to test teachings directly in their own psychological experience.",
      "pt": "A Carta Magna da espiritualidade livre. O Buda ordena não acreditar por ouvir dizer, linhagem, tradição ou autoridade, mas testar diretamente na própria experiência se um estado gera paz ou sofrimento."
    },
    "coreFocus": {
      "en": "Direct empirical testing (Ehipassiko), testing mental states by their fruits (absence of greed, hatred, delusion), the 4 Solaces of a noble heart",
      "pt": "Investigação empírica direta (Ehipassiko), avaliar estados mentais pelos seus frutos (ausência de ganância, ódio e ilusão), os 4 Confortos Nobres"
    },
    "primaryAnchor": {
      "en": "The honest, discerning intelligence of your own mind verifying whether a practice leads to peace or affliction",
      "pt": "A inteligência honesta e lúcida da própria mente verificando se uma prática gera serenidade ou aflição"
    },
    "approachToJhana": {
      "en": "Freedom from dogmatic anxiety and blind faith creates a relaxed, authentic confidence (Saddhā) that allows the mind to enter deep Samādhi with zero guilt",
      "pt": "A liberdade de dogmas e de culpa religiosa cria uma confiança límpida e madura que permite à mente mergulhar em Samādhi com leveza"
    },
    "useOfNoting": {
      "en": "Evaluating mental states: 'When greed arises in me, does it lead to welfare or harm? It leads to harm. Drop it.'",
      "pt": "Avaliar os estados mentais: 'Quando a cobiça surge, gera bem-estar ou sofrimento? Gera dano. Abandone-a.'"
    },
    "tagline": {
      "en": "'Do not go by reports, by legend, by traditions, or by authority. When you know for yourselves: \"These things are wholesome\"—then undertake them and abide in them.'",
      "pt": "'Não creiais por boatos, tradições, escrituras ou autoridade de mestres. Quando vós mesmos souberdes: \"Estes ensinamentos são benéficos\" — então abraçai-os e vivei neles.'"
    },
    "overview": {
      "en": "When the Buddha visited the town of Kesaputta, the Kālāma citizens approached him in deep distress: dozens of visiting gurus had passed through, each claiming their doctrine was supreme and denouncing everyone else. The Buddha delivered one of the most revolutionary discourses in religious history. He laid down ten criteria of what NOT to rely upon (tradition, scriptures, logical deduction, charismatic gurus) and gave the golden scientific criterion: observe for yourself whether cultivating a state reduces greed, hatred, and delusion. If it brings clarity and harmlessness, adopt it.",
      "pt": "Ao visitar a cidade de Kesaputta, os cidadãos Kālāma procuraram o Buda em grande aflição: dezenas de sacerdotes e gurus passavam por ali, cada qual afirmando ter a verdade exclusiva e condenando os demais. O Buda proclamou um dos discursos mais revolucionários da história da humanidade. Estabeleceu dez critérios sobre o que NÃO deve ser base para a fé cega (tradição, escrituras, deduções lógicas, carisma de mestres) e entregou a regra científica: examine em sua própria mente se a prática extingue o ódio, a cobiça e a ilusão. Se produzir serenidade e bondade, adote-a."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Dasa-aṭṭhāna-pahāna",
                "title": {
                      "en": "1. The 10 Inadequate Grounds for Dogmatic Belief",
                      "pt": "1. Os 10 Critérios Insuficientes para a Crença Cega"
                },
                "desc": {
                      "en": "The Buddha's Charter of Free Inquiry: do not go upon oral tradition, lineage, hearsay, scripture, logical conjecture, probability, speculative theories, or the authority of a revered teacher.",
                      "pt": "A Carta Magna da Livre Investigação do Buda: não creia por tradição oral, linhagem, boatos, textos sagrados, especulação lógica, probabilidades teóricas ou autoridade de um mestre."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Sovereign Critical Thinking:</strong> Question every spiritual claim. Do not accept dogmas because someone famous said so. Real truth must be verified directly in your own experience.</p>",
                      "pt": "<p><strong>Pensamento Crítico Soberano:</strong> Questione todo dogma espiritual. Não aceite crenças cegas por tradição ou autoridade. A verdade real precisa ser comprovada na sua própria experiência.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 3.65 §3 (Kālāma Sutta / Kesamutti Sutta)</strong>: The definitive canonical charter of free intellectual inquiry.</p>",
                      "pt": "<p><strong>AN 3.65 §3 (Kālāma Sutta / Kesamutti Sutta)</strong>: A proclamação canônica de livre exame e honestidade intelectual.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Testing Gold with Fire and Touchstone (Catuḥśataka):</strong> Just as an expert jeweler tests gold by burning it in fire, cutting it, and rubbing it on a touchstone, test the Dhamma before accepting it.</p>",
                      "pt": "<p><strong>Testando o Ouro no Fogo e na Pedra de Toque:</strong> Tal como o ourives experiente testa o ouro aquecendo no fogo, cortando e raspando na pedra de toque, examine os ensinamentos antes de abraçá-los.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Paccatta-vedanīya-ñāṇa",
                "title": {
                      "en": "2. Direct Verification in Your Own Heart",
                      "pt": "2. Verificação Direta no Próprio Coração"
                },
                "desc": {
                      "en": "'When you know for yourselves: These things are unwholesome, blameworthy, censured by the wise, leading to harm and suffering—then abandon them. When wholesome, cultivate them.'",
                      "pt": "'Quando souberdes por vós mesmos: Estas qualidades são nocivas, censuradas pelos sábios, conduzem ao sofrimento—então abandonai-as. Quando salutares, cultivai-as.'"
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Empirical Test:</strong> Observe in real time: When greed rules my mind, do I feel happy or anxious? When kindness rules, do I feel peaceful? Base your practice on direct evidence.</p>",
                      "pt": "<p><strong>O Teste Empírico:</strong> Observe em tempo real: Quando a ganância me domina, sinto paz ou ansiedade? Quando a bondade brota, sinto serenidade? Firme sua prática na evidência direta.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 3.65 §4–14</strong>: The psychological dialogue between the Buddha and the Kālāmas of Kesaputta.</p>",
                      "pt": "<p><strong>AN 3.65 §4–14</strong>: O diálogo psicológico do Buda com os Kālāmas de Kesaputta.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Tasting Fresh Water After Thirst:</strong> You don't need a philosopher to prove the water quenched your thirst; you know it by immediate bodily satisfaction.</p>",
                      "pt": "<p><strong>Bebendo Água Fresca com Sede:</strong> Você não precisa de um filósofo para provar que a água saciou sua sede; você sabe pelo alívio imediato no corpo.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Cattāro Brahma-vihārā",
                "title": {
                      "en": "3. Radiating the Four Immeasurable States",
                      "pt": "3. Irradiando as Quatro Moradas Divinas (Brahma-Vihāras)"
                },
                "desc": {
                      "en": "Free from covetousness and ill will, the noble disciple radiates a mind imbued with loving-kindness, compassion, sympathetic joy, and equanimity to all directions without hostility.",
                      "pt": "Livre de cobiça e rancores, o nobre discípulo irradia uma mente repleta de bondade amorosa, compaixão, alegria altruísta e equanimidade a todas as direções, sem hostilidade."
                },
                "practiceInstructions": {
                      "en": "<p><strong>All-Pervading Goodwill:</strong> Radiate warmth outward from the heart center: above, below, around, everywhere. A mind without enemies has nothing to fear.</p>",
                      "pt": "<p><strong>Boa Vontade Abrangente:</strong> Irradie calor a partir do centro do peito: acima, abaixo, em redor, em toda parte. Uma mente sem inimigos nada tem a temer.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 3.65 §15</strong>: The systematic radiation of the 4 Brahma-vihāras in the Kālāma Sutta.</p>",
                      "pt": "<p><strong>AN 3.65 §15</strong>: A irradiação dos 4 Brahma-vihāras como coroamento ético no Kālāma Sutta.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Powerful Horn-Blower (DN 13):</strong> A mighty trumpeter sounds a conch in all four directions, filling the valley with resonant sound without hindrance.</p>",
                      "pt": "<p><strong>O Tocheiro na Noite Escura (DN 13):</strong> Um tocador vigoroso sopra a trombeta nas quatro direções, preenchendo o vale com som cristalino sem obstáculo algum.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Cattāro Assāsā",
                "title": {
                      "en": "4. The Four Assurances of the Noble Disciple",
                      "pt": "4. As Quatro Garantias Inabaláveis do Nobre Discípulo"
                },
                "desc": {
                      "en": "The Buddha's famous wager: if there is an afterlife and kamma, you will reap celestial joy; if there is no afterlife, you live here and now happy, blameless, and free from hostility.",
                      "pt": "A célebre aposta do Buda: se houver além-túmulo e kamma, você colherá bem-estar sublime; se não houver pós-vida, você vive aqui e agora em paz, inocente e livre de rancor."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Fearless Present Living:</strong> Ethical goodness and mental purity are their own reward in the present moment, completely immune to theological anxiety about the afterlife.</p>",
                      "pt": "<p><strong>Vida Destemida no Presente:</strong> A bondade ética e a pureza mental são sua própria recompensa no agora, imunes a neuroses e terrores teológicos sobre o além.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 3.65 §16–17</strong>: The Four Solaces (<em>cattāro assāsā</em>) of the untroubled mind.</p>",
                      "pt": "<p><strong>AN 3.65 §16–17</strong>: Os Quatro Confortos (<em>cattāro assāsā</em>) da mente pacificada.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Invulnerable Castle on Granite:</strong> Built with deep roots and solid walls; whatever the weather outside, inside is warmth, light, and safety.</p>",
                      "pt": "<p><strong>O Castelo de Granito Inexpugnável:</strong> Construído com alicerces profundos; seja qual for a tempestade externa, dentro há luz, lareira e segurança total.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Freedom from Dogmatic Attachment (Sīlabbata-parāmāsa Uprooted)",
      "hindrances": [
        {
          "name": "Cynicism vs Lucid Skepticism",
          "remedy": "Do not confuse healthy inquiry with arrogant cynicism; investigate with sincere desire to end suffering."
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Spiritual guilt for questioning religious rituals or conflicting dogmas",
          "remedy": "Remember the Buddha praised the Kālāmas for doubting: 'It is fitting for you to be perplexed, Kālāmas; when there is reason for doubt, doubt arises.'"
        }
      ]
    },
    "layLife": {
      "feasibility": "Exceptional (The premier charter for modern secular and householder practitioners)",
      "dailySchedule": "Conduct periodic honesty checks: 'Has my meditation made me more patient, generous, and calm at home?'",
      "householdObstacles": "Pressure from religious family members; respond with quiet kindness rather than argumentative debate.",
      "ethicsDuty": "Empirical virtue: refraining from harm because you directly see it destroys your own peace."
    },
    "paliTerms": [
      {
        "term": "Ehipassiko",
        "meaning": "Come and see for yourself / inviting direct empirical verification"
      },
      {
        "term": "Saddhā",
        "meaning": "Lucid confidence based on experiential evidence, not blind faith"
      }
    ]
  },
  {
    "id": "contemporary-twim",
    "cluster": "contemporary",
    "number": "41",
    "paliTitle": "TWIM (Tranquil Wisdom)",
    "title": {
      "en": "Bhante Vimalaramsi — TWIM, The 6Rs & Sutta-Jhānas",
      "pt": "Bhante Vimalaramsi — TWIM, Os 6Rs & Sutta-Jhānas"
    },
    "lineageTradition": {
      "en": "Tranquil Wisdom Insight Meditation (Dhamma Sukha Meditation Center)",
      "pt": "Meditação do Insight e Sabedoria Tranquila (TWIM)"
    },
    "primaryMasters": "Ven. Bhante Vimalaramsi",
    "canonicalRef": "MN 118, MN 21 (Kakacūpama Sutta), MN 31, AN 11.16",
    "difficulty": "foundational",
    "difficultyLabel": {
      "en": "Foundations",
      "pt": "Fundamentos"
    },
    "recommendedPrereq": {
      "en": "None (Gentle and joyful)",
      "pt": "Nenhum (Suave e alegre)"
    },
    "whyStudy": {
      "en": "Combines warm loving-kindness with the 6Rs relaxation cycle, keeping meditation light, smiling, and joyful.",
      "pt": "Combina amor-bondade acolhedor com o ciclo de relaxamento dos 6Rs, mantendo a prática leve, sorridente e alegre."
    },
    "coreFocus": {
      "en": "Integration of Samatha and Vipassanā using Loving-Kindness (Mettā), relaxing physical tension in the head and body ('The 6Rs')",
      "pt": "Integração de Samatha e Vipassanā através de Mettā (Bondade), relaxando a tensão física na cabeça e no corpo ('Os 6Rs')"
    },
    "primaryAnchor": {
      "en": "Radiant warmth of Loving-Kindness (Mettā) in the spiritual heart center, combined with relaxing the tension in the head/brain",
      "pt": "A radiância calorosa de Bondade Amorosa (Mettā) no centro do peito, aliada ao relaxamento da tensão na cabeça"
    },
    "approachToJhana": {
      "en": "Sutta-based 'Light' Jhānas where awareness remains expansive, awake, and alert with peripheral vision, rather than narrow one-pointed absorption",
      "pt": "Sutta-Jhānas 'leves', onde a atenção permanece espaçosa, desperta e consciente ao redor, sem absorção rígida unifocal"
    },
    "useOfNoting": {
      "en": "No labeling. Instead, apply the '6Rs' sequence as soon as a distraction or craving pulls the mind away",
      "pt": "Sem rotulação. Aplica-se a sequência dos '6Rs' assim que qualquer distração ou anseio desviar a mente"
    },
    "tagline": {
      "en": "'Remember to relax! If you do not release the subtle tension in the brain, craving remains anchored in the physical body.'",
      "pt": "'Lembre-se de relaxar! Se não soltar a tensão sutil na cabeça, o anseio permanece ancorado no corpo físico.'"
    },
    "overview": {
      "en": "Bhante Vimalaramsi discovered what he considered a vital missing link in modern meditation: the word 'passambhayaṁ' (relaxing / calming bodily formations). In the TWIM system, when a distraction arises, practitioners do not push it away or tighten focus. Instead, they apply the 6Rs: Recognize the distraction, Release it, RELAX the physical tightness in the head and chest, Re-smile, Return to the object (Mettā or breath), and Repeat. Loving-kindness is taught not as an ancillary practice, but as the master highway carrying the mind straight into all eight Jhānas and Awakening.",
      "pt": "Bhante Vimalaramsi resgatou o que considerava um elo negligenciado em muitos retiros modernos: o termo canônico 'passambhayaṁ' (relaxar e acalmar as tensões físicas). No sistema TWIM, quando surge uma distração, não se força a atenção. Aplica-se o ciclo dos 6Rs: Reconhecer a distração, Soltar (Release), RELAXAR a microtensão na cabeça e no peito, Re-sorrir, Retornar ao objeto (Mettā) e Repetir. A Bondade Amorosa é praticada como a via real capaz de conduzir a mente por todos os oito Jhānas até o despertar."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Mettā-ceto-vimutti",
                "title": {
                      "en": "1. Radiating Loving-Kindness at the Heart Center",
                      "pt": "1. Irradiando Bondade Amorosa a Partir do Coração"
                },
                "desc": {
                      "en": "Bhante Vimalaramsi's foundation: cultivating a warm, golden feeling of unconditional loving-kindness (mettā) in the physical chest, wishing oneself and a spiritual friend well.",
                      "pt": "O alicerce de Bhante Vimalaramsi: cultivar uma sensação calorosa e dourada de bondade amorosa incondicional (mettā) no centro do peito, desejando paz a si e a um amigo espiritual."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Heart Spark:</strong> Remember a time you smiled with pure innocence. Feel that warmth expand across your chest like soft sunlight. Send it gently to your friend.</p>",
                      "pt": "<p><strong>A Chama do Coração:</strong> Rememore um momento em que você sorriu com ternura pura. Sinta esse calor expandir pelo peito como luz suave. Envie ao seu amigo com carinho.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>TWIM (Tranquil Wisdom Insight Meditation) manual based on <em>Majjhima Nikāya</em> suttas.</p>",
                      "pt": "<p>O manual TWIM (Tranquil Wisdom Insight Meditation) baseado estritamente nos suttas do <em>Majjhima Nikāya</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Mother Protecting Her Only Child (Karaniya Metta Sutta):</strong> Just as a mother shields her only child with her life, radiate boundless love to all beings.</p>",
                      "pt": "<p><strong>A Mãe Protegendo o Filho Único (Karaniya Metta Sutta):</strong> Tal como uma mãe arriscaria a vida para proteger seu filho único, irradie amor irrestrito a todos os seres vivos.</p>"
                }
          },
          {
                "step": 2,
                "pali": "The 6Rs Protocol",
                "title": {
                      "en": "2. The 6Rs Tactical Harmonic Protocol",
                      "pt": "2. O Protocolo Tático dos 6Rs"
                },
                "desc": {
                      "en": "The hallmark technique of TWIM when distraction arises: 1. Recognize → 2. Release → 3. Relax → 4. Re-smile → 5. Return → 6. Repeat.",
                      "pt": "A técnica clássica de TWIM ao notar distrações: 1. Reconhecer (Recognize) → 2. Liberar (Release) → 3. Relaxar (Relax) → 4. Re-sorrir (Re-smile) → 5. Retornar (Return) → 6. Repetir (Repeat)."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Step-by-Step 6Rs Execution:</strong> When a thought distracts you: <strong>Recognize</strong> it; <strong>Release</strong> engagement; <strong>Relax</strong> tightness in your head; <strong>Re-smile</strong> with lips and eyes; <strong>Return</strong> to mettā; <strong>Repeat</strong> continuously.</p>",
                      "pt": "<p><strong>Execução Prática dos 6Rs:</strong> Ao se distrair: <strong>Reconheça</strong> o pensamento; <strong>Solte</strong> a história; <strong>Relaxe</strong> a tensão na cabeça; <strong>Re-sorria</strong> suavemente; <strong>Retorne</strong> à bondade; <strong>Repita</strong> com leveza.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Corresponds to the 4th step of Ānāpānasati: calming the bodily formation (<em>passambhayaṁ kāyasaṅkhāraṁ</em>, MN 118).</p>",
                      "pt": "<p>Corresponde ao 4º passo de Ānāpānasati: acalmar a formação corpórea (<em>passambhayaṁ kāyasaṅkhāraṁ</em>, MN 118).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Releasing a Taut Bowstring:</strong> Letting the tight string spring back into gentle slackness, ending all tension in the wooden bow.</p>",
                      "pt": "<p><strong>Soltando a Corda Esticada do Arco:</strong> Deixando a corda retesada voltar à folga suave, desarmando toda a pressão na madeira.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Sīsakāyasaṅkhāra-vūpasama",
                "title": {
                      "en": "3. Releasing Cranial Tension (The Secret of 6Rs)",
                      "pt": "3. Liberando a Micro-Tensão Craniana (O Segredo do Relax)"
                },
                "desc": {
                      "en": "Bhante Vimalaramsi's crucial observation: whenever a thought arises, a subtle physical micro-contraction forms in the brain and meninges. Releasing this physical tightness dissolves the mental pull.",
                      "pt": "A observação crucial de Bhante Vimalaramsi: todo pensamento cria uma microcontração física na cabeça e couro cabeludo. Relaxar essa tensão física desfaz o magnetismo do pensamento."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Softening the Brain:</strong> Deliberately feel the crown, scalp, temples, and forehead soften like melting butter on a warm plate. Watch the thought evaporate.</p>",
                      "pt": "<p><strong>Amolecendo a Mente:</strong> Sinta deliberadamente o topo da cabeça, têmporas e testa amolecerem como manteiga no prato morno. Veja o pensamento evaporar no mesmo instante.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 111 (Anupada Sutta)</strong> on pacifying formations to achieve true mental liberation.</p>",
                      "pt": "<p><strong>MN 111 (Anupada Sutta)</strong> sobre a pacificação das tensões corpóreas para libertar a mente.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Butter Melting in the Warm Pan:</strong> A hard cube of cold butter placed on a warm skillet softens instantly into clear, flowing liquid.</p>",
                      "pt": "<p><strong>A Manteiga Derretendo na Frigideira:</strong> Um cubo rígido de manteiga gelada toca a panela morna e derrete em líquido dourado e fluido num instante.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Sutta-Jhāna-samāpatti",
                "title": {
                      "en": "4. Ascending Through Tranquil Sutta-Jhānas",
                      "pt": "4. Ascendendo pelos Sutta-Jhānas Tranquilos"
                },
                "desc": {
                      "en": "Unlike rigid one-pointed absorptions, Sutta-Jhānas are wide, open, relaxed states where awareness remains expansive and sensory perception is softly present without disturbance.",
                      "pt": "Diferente de absorções fixas de um só ponto, os Sutta-Jhānas são estados amplos, descontraídos e luminosos, onde a consciência permanece aberta e em paz profunda."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Expansive Absorption:</strong> Let the joy and peace expand outward to fill the room, the neighborhood, the entire planet. Rest in effortless, smiling stillness.</p>",
                      "pt": "<p><strong>Absorção Expansiva:</strong> Deixe a alegria e a paz expandirem para preencher o aposento, a cidade e todo o planeta. Repouse num silêncio sorridente e sem esforço.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Early Buddhist Text descriptions of Jhāna in MN 119, where awareness permeates the entire body.</p>",
                      "pt": "<p>As descrições canônicas de Jhāna no MN 119, onde a lucidez permeia todo o corpo vivo.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Wide Mountain Breeze:</strong> Blowing gently across sunny ridges, refreshing everything it touches without hitting any obstacle.</p>",
                      "pt": "<p><strong>A Brisa Ampla da Colina:</strong> Soprando suave pelas montanhas ensolaradas, refrescando tudo o que toca sem encontrar resistência.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "The 6Rs are an extraordinary lay stress antidote. When an upsetting email arrives, don't react: Recognize irritation, Release the urge to type, RELAX your tense shoulders and forehead, Re-smile, and respond from wisdom.",
      "pt": "Os 6Rs são uma ferramenta excepcional contra o estresse cotidiano. Ao receber uma mensagem irritante: Reconheça a raiva, Solte o impulso de digitar, RELAXE a testa e os ombros, Re-sorria e responda com clareza."
    },
    "keyPaliTerms": [
      {
        "term": "Passambhana",
        "meaning": "Calming and relaxing physical tension and mental tightness"
      },
      {
        "term": "Mettā",
        "meaning": "Unconditional, warm loving-kindness for all living beings"
      },
      {
        "term": "Muditā",
        "meaning": "Altruistic, appreciative joy that overcomes envy and comparison"
      }
    ],
    "curriculumOrder": 3
  },
  {
    "id": "contemporary-goldstein-ims",
    "cluster": "contemporary",
    "number": "42",
    "paliTitle": "IMS Vipassanā",
    "title": {
      "en": "Joseph Goldstein & Jack Kornfield — Insight Meditation Society & Psychological Integration",
      "pt": "Joseph Goldstein & Jack Kornfield — Insight Meditation Society & Integração Psicológica"
    },
    "lineageTradition": {
      "en": "Insight Meditation Society (IMS, Barre, MA) & Spirit Rock (California)",
      "pt": "Insight Meditation Society (IMS, Barre, MA) & Spirit Rock (Califórnia)"
    },
    "primaryMasters": "Joseph Goldstein, Jack Kornfield, Sharon Salzberg",
    "canonicalRef": "DN 22 (Satipaṭṭhāna), 'Seeking the Heart of Wisdom', 'A Path with Heart'",
    "difficulty": "intermediate",
    "curriculumOrder": 4,
    "difficultyLabel": {
      "en": "Intermediate",
      "pt": "Intermediário"
    },
    "recommendedPrereq": {
      "en": "Basic familiarity with mindfulness and emotional awareness",
      "pt": "Familiaridade básica com atenção plena e autopercepção emocional"
    },
    "whyStudy": {
      "en": "The historic pioneers who transplanted Theravāda Vipassanā into the West in the 1970s. Harmonized Burmese Mahāsi noting and Thai Forest non-clinging with modern psychological trauma awareness and emotional honesty.",
      "pt": "Os pioneiros que transplantaram a Vipassanā Theravāda para o Ocidente na década de 1970. Harmonizaram a rotulação birmanesa e o desapego da floresta tailandesa com a psicologia profunda."
    },
    "coreFocus": {
      "en": "Integrating spiritual practice with psychological maturity, mindful noting of emotional weather, compassion, seeing thought as 'secretaries'",
      "pt": "Integrar prática espiritual com maturidade emocional, rotulação consciente das emoções, compaixão e ver pensamentos como secretários da mente"
    },
    "primaryAnchor": {
      "en": "The natural somatic breathing, coupled with compassionate noting of emotional and mental states",
      "pt": "A respiração somática natural aliada à rotulação afetuosa das emoções e estados da mente"
    },
    "approachToJhana": {
      "en": "Focusing on Momentary Concentration (Khaṇika Samādhi) in Vipassanā, allowing deep insights into impermanence and non-self to arise in ordinary experience",
      "pt": "Foco na concentração momentânea (Khaṇika Samādhi) em Vipassanā, permitindo que insights profundos de impermanência e anattā surjam no cotidiano"
    },
    "useOfNoting": {
      "en": "Gentle mental labeling with a tone of warm curiosity: 'Sadness, sadness', 'Planning, planning', 'Judgment, judgment'",
      "pt": "Rotulação mental calorosa com curiosidade gentil: 'Tristeza, tristeza', 'Planejando, planejando', 'Julgamento, julgamento'"
    },
    "tagline": {
      "en": "'You don't have to believe your thoughts. Thoughts are like visitors coming and going in a vast room.'",
      "pt": "'Você não precisa acreditar em seus pensamentos. Pensamentos são como visitantes que entram e saem de uma sala imensa.'"
    },
    "overview": {
      "en": "In 1976, Joseph Goldstein, Jack Kornfield, and Sharon Salzberg founded the Insight Meditation Society (IMS) in Barre, Massachusetts, after spending years in Burma and Thailand studying under Mahāsi Sayādaw, Munindra, and Ajahn Chah. They pioneered the modern Western Vipassanā movement, making intensive silent retreats accessible to lay householders without monastic ordination. Their great contribution was integrating spiritual insight with emotional honesty: understanding that you cannot bypass unresolved emotional wounds with spiritual dogmas.",
      "pt": "Em 1976, Joseph Goldstein, Jack Kornfield e Sharon Salzberg fundaram o Insight Meditation Society (IMS) em Barre, Massachusetts, após anos de treinamento na Birmânia e Tailândia com Mahāsi Sayādaw, Munindra e Ajahn Chah. Foram os arquitetos do movimento de Vipassanā no Ocidente, tornando retiros silenciosos acessíveis a cidadãos comuns sem necessidade de ordenação monástica. Sua maior contribuição foi integrar o insight espiritual à honestidade psicológica: compreender que não se pode curar feridas emocionais com espiritualismos superficiais."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Cetovimutti & Cittānupassanā",
                "title": {
                      "en": "1. Meeting the Visiting Guests with Compassion",
                      "pt": "1. Acolhendo as Visitas Emocionais com Compaixão"
                },
                "desc": {
                      "en": "Joseph Goldstein and Jack Kornfield's psychological synthesis: greeting emotional visitors—grief, fear, anxiety, unworthiness—with spacious friendliness rather than shame or suppression.",
                      "pt": "A síntese psicológica de Joseph Goldstein e Jack Kornfield: acolher emoções difíceis—luto, medo, ansiedade, autocrítica—com compaixão espaçosa em vez de vergonha ou repressão."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Emotional Hospitality:</strong> When anxiety strikes, say to it: 'Welcome, I see you. You belong to the human condition.' Let it breathe in your open heart.</p>",
                      "pt": "<p><strong>Hospitalidade Interior:</strong> Ao notar angústia, acolha: 'Bem-vinda, eu vejo você. Você faz parte da condição humana'. Deixe-a respirar no seu peito aberto.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>SN 36.14 (Āgantuka Sutta)</strong>: The sutta of the guest house where feelings arrive and depart.</p>",
                      "pt": "<p><strong>SN 36.14 (Āgantuka Sutta)</strong>: A parábola da estalagem onde sensações chegam, hospedam-se e partem.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Rumi's Guest House:</strong> 'This being human is a guest house; every morning a new arrival: a joy, a depression, a meanness... Welcome and entertain them all!'</p>",
                      "pt": "<p><strong>A Casa de Hóspedes de Rumi:</strong> 'O ser humano é uma estalagem; a cada manhã uma nova visita: alegria, tristeza, desânimo... Acolha e honre a todas!'</p>"
                }
          },
          {
                "step": 2,
                "pali": "Just This (Idam-sati)",
                "title": {
                      "en": "2. The 'Just This' Somatic Ground",
                      "pt": "2. A Âncora do 'Apenas Isto' (Presença Somática)"
                },
                "desc": {
                      "en": "Joseph Goldstein's minimalist mantra: whenever lost in conceptual labyrinth, return to 'Just This'—just this breath, just this pressure, just this hearing. Reality stripped of story.",
                      "pt": "O mantra minimalista de Joseph Goldstein: ao se perder em labirintos mentais, retorne ao 'Apenas Isto'—apenas esta respiração, apenas este peso, apenas este som. A realidade nua."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Dropping the Novel:</strong> Ask: 'In this exact microsecond, stripped of thoughts about tomorrow, what is actually happening?' Just this.</p>",
                      "pt": "<p><strong>Largando a Narrativa:</strong> Pergunte-se: 'Neste exato microssegundo, sem as histórias sobre amanhã, o que está realmente acontecendo?' Apenas isto.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Direct application of <em>diṭṭhe diṭṭhamattaṁ</em> (in the seen, only the seen, Ud 1.10).</p>",
                      "pt": "<p>Aplicação direta de <em>diṭṭhe diṭṭhamattaṁ</em> (no visto, apenas o visto, Ud 1.10).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>A Droplet of Water on a Lotus Leaf:</strong> Resting purely on the leaf without soaking in, rolling freely without leaving a stain.</p>",
                      "pt": "<p><strong>A Gota de Orvalho na Folha de Lótus:</strong> Repousando sobre a folha sem ensopá-la, deslizando livre sem deixar marca ou mancha.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Atta-vāda-vicāra",
                "title": {
                      "en": "3. Investigating the Architecture of 'Me'",
                      "pt": "3. Investigando a Construção do 'Eu'"
                },
                "desc": {
                      "en": "Inquiring into the sense of identity: 'Is this thought true? Who is the one who feels inadequate? Where is the permanent self located?' Deconstructing psychological conditioning.",
                      "pt": "Inquirindo o senso de identidade: 'Este pensamento é verdadeiro? Quem é este que se sente inseguro? Onde está o eu permanente?' Desconstruindo o condicionamento psicológico."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Self-Inquiry:</strong> Look for the owner of the thoughts. You will find sensations, perceptions, and consciousness, but not a single solid 'self' inside.</p>",
                      "pt": "<p><strong>Auto-Investigação Lúcida:</strong> Procure o proprietário dos pensamentos. Você encontrará sensações, ideias e consciência, mas nem um único 'eu' sólido lá dentro.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Joseph Goldstein's treatise: <em>Mindfulness: A Practical Guide to Awakening</em>.</p>",
                      "pt": "<p>O tratado de Joseph Goldstein: <em>Mindfulness: A Practical Guide to Awakening</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Banana Tree Trunk (SN 22.95):</strong> Peeling away layer after layer of the trunk looking for solid heartwood, only to find it is completely hollow.</p>",
                      "pt": "<p><strong>O Tronco da Bananeira (SN 22.95):</strong> Descascando camada após camada em busca de madeira maciça, descobrindo que o interior é inteiramente oco.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Lokiya-dhammānupassanā",
                "title": {
                      "en": "4. Living the Dhamma in Relationships & Work",
                      "pt": "4. Vivendo o Dhamma no Trabalho & Relações"
                },
                "desc": {
                      "en": "Taking wisdom off the cushion: practicing wise speech, deep listening, ethical livelihood, and meeting modern life's challenges with non-reactive presence.",
                      "pt": "Levando a sabedoria para fora da almofada: praticando fala correta, escuta profunda, meios de vida éticos e encarando desafios cotidianos com presença lúcida."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Householder Dharma:</strong> In difficult conversations, stay grounded in your feet. Listen to others without mentally preparing your rebuttal. Act from kindness.</p>",
                      "pt": "<p><strong>Dhamma na Vida Prática:</strong> Em conversas tensas, ancore no chão. Escute sem preparar respostas de revide na cabeça. Aja a partir da compaixão lúcida.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Jack Kornfield's celebrated classic: <em>A Path with Heart & After the Ecstasy, the Laundry</em>.</p>",
                      "pt": "<p>Os clássicos de Jack Kornfield: <em>Um Caminho com o Coração & Depois do Êxtase, a Roupa Suja</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Tree Spreading Shade Over All Travelers:</strong> Standing tall, giving shade to the weary, the woodcutter, and the animals equally without discrimination.</p>",
                      "pt": "<p><strong>A Árvore Frondosa Oferecendo Sombra a Todos:</strong> Erguendo-se frondosa, acolhendo o lenhador, o viajante e os pássaros com a mesma generosidade serena.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Psychological Maturation & Realization of Non-Self (Anattā)",
      "hindrances": [
        {
          "name": "Spiritual Bypassing",
          "remedy": "Do not use meditation to suppress anger or trauma; turn toward difficult emotions with gentle curiosity."
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Feeling emotionally numb or detached from loved ones while meditating",
          "remedy": "Jack Kornfield's prescription: balance Vipassanā with daily Mettā (loving-kindness) and relational presence."
        }
      ]
    },
    "layLife": {
      "feasibility": "Exceptional (Specially tailored for modern relationships, careers, and urban life)",
      "dailySchedule": "Sit 30–45 minutes daily; practice conscious relational pauses before conversations.",
      "householdObstacles": "Perfectionism and self-criticism; remember practice is about progress, not flawless execution.",
      "ethicsDuty": "Compassionate speech and relational integrity."
    },
    "paliTerms": [
      {
        "term": "Khaṇika Samādhi",
        "meaning": "Momentary concentration moving fluidly from object to object"
      },
      {
        "term": "Mettā",
        "meaning": "Loving-kindness / unconditional friendliness toward all life"
      }
    ]
  },
  {
    "id": "contemporary-brasington",
    "cluster": "contemporary",
    "number": "43",
    "paliTitle": "Sutta-Jhāna Kammaṭṭhāna",
    "title": {
      "en": "Leigh Brasington & Ayya Khema — Accessible Sutta Jhānas for Householders",
      "pt": "Leigh Brasington & Ayya Khema — Jhānas Acessíveis para Praticantes Leigos"
    },
    "lineageTradition": {
      "en": "Sutta-Based Jhāna Lineage (Ayya Khema / Buddha-Haus)",
      "pt": "Linhagem de Jhānas dos Suttas (Ayya Khema / Buddha-Haus)"
    },
    "primaryMasters": "Leigh Brasington, Ayya Khema (1923–1997)",
    "canonicalRef": "DN 2 (Jhāna Similes), AN 9.35, 'Right Concentration: A Practical Guide'",
    "difficulty": "intermediate",
    "curriculumOrder": 5,
    "difficultyLabel": {
      "en": "Intermediate",
      "pt": "Intermediário"
    },
    "recommendedPrereq": {
      "en": "Ability to establish access concentration on breath for 15–20 minutes",
      "pt": "Capacidade de sustentar concentração na respiração por 15–20 minutos"
    },
    "whyStudy": {
      "en": "Demystifies the four canonical Jhānas for ordinary laypeople. Teaches how to transition from access concentration into the physical pleasant sensations of joy (pīti) and peaceful ease (sukha).",
      "pt": "Desmistifica os quatro Jhānas canônicos para praticantes leigos comuns. Ensina a transitar da concentração de acesso para as sensações corporais de êxtase (pīti) e bem-estar (sukha)."
    },
    "coreFocus": {
      "en": "Accessible Sutta-Jhānas based directly on the canonical similes, pivoting from breath to pleasant somatic sensations (Pīti/Sukha)",
      "pt": "Jhānas acessíveis baseados diretamente nos símiles canônicos, migrando da respiração para sensações de alegria física e bem-estar"
    },
    "primaryAnchor": {
      "en": "The subtle pleasant physical sensations (tingling, warmth, smiling, light energy) arising in the hands, face, or chest once the breath is calm",
      "pt": "A sutil sensação física agradável (formigamento doce, calor no peito, sorriso) que surge quando a respiração assenta"
    },
    "approachToJhana": {
      "en": "Pivoting attention away from breath directly onto a pleasant sensation, allowing the feedback loop of pleasure to pull the mind into absorption",
      "pt": "Mudar o foco da respiração diretamente para a sensação agradável, deixando que o deleite absorva a mente espontaneamente no 1º Jhāna"
    },
    "useOfNoting": {
      "en": "Dropping words. Holding subtle awareness on the texture of joy (Pīti in 1st/2nd Jhāna), then quiet contentment (Sukha in 3rd), then pure stillness (Upekkhā in 4th)",
      "pt": "Sem palavras. Sustentar a atenção na textura da alegria (Pīti), depois no contentamento suave (Sukha) e na pura paz equânime (Upekkhā)"
    },
    "tagline": {
      "en": "'Find a pleasant sensation, put your attention on it, and don't do anything else. Absorption happens naturally.'",
      "pt": "'Encontre uma sensação agradável, pouse sua atenção sobre ela e não faça mais nada. A absorção acontece por si mesma.'"
    },
    "overview": {
      "en": "Ayya Khema, the legendary German-born nun, was one of the first modern teachers to demonstrate that the Jhānas are not mythical states reserved only for forest hermits in caves, but are the natural birthright of any meditator who calms the mind. Her student Leigh Brasington formalized her instructions into a step-by-step curriculum in his book 'Right Concentration'. Once access concentration is reached via breath, the meditator pivots attention to a subtle pleasant feeling in the body (a smile, warm hands, or a tingling heart). By resting on the pleasure without grasping, the mind is pulled effortlessly into the four Jhānas.",
      "pt": "Ayya Khema, a lendária monja de origem alemã, foi pioneira em provar que os Jhānas não são estados míticos inalcançáveis restritos a cavernas medievais, mas o direito natural de qualquer meditador que pacifica a mente. Seu aluno Leigh Brasington formalizou o método em seu livro 'Right Concentration'. Uma vez alcançada a concentração de acesso na respiração, o praticante transfere a atenção para uma sensação física agradável (um sorriso suave, calor nas mãos ou no peito). Repousando no bem-estar sem avidez, a mente é absorvida naturalmente nos quatro Jhānas."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Upacāra-samādhi-sukha",
                "title": {
                      "en": "1. Access Concentration via Pleasant Sensation",
                      "pt": "1. Concentração de Acesso via Sensação Agradável"
                },
                "desc": {
                      "en": "Leigh Brasington and Ayya Khema's method: watching the natural breath until discursive thinking calms down and an unmistakable, pleasant physical sensation (pīti/sukha) arises.",
                      "pt": "O método de Leigh Brasington e Ayya Khema: observar a respiração natural até o diálogo interno silenciar e uma sensação física agradável evidente (pīti/sukha) brotar no corpo."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Locating the Pleasure Spark:</strong> Check your hands, face, or chest for a gentle tingle, cool breeze, or warm glow. Settle attention on that pleasant feeling.</p>",
                      "pt": "<p><strong>Localizando a Faísca de Conforto:</strong> Observe as mãos, rosto ou coração; note um leve formigamento, frescor ou calor doce. Aqueça a atenção nessa sensação boa.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Leigh Brasington's manual: <em>Right Concentration: A Practical Guide to the Jhānas</em>.</p>",
                      "pt": "<p>O guia de Leigh Brasington: <em>Right Concentration: A Practical Guide to the Jhānas</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Spotting the Golden Coin in the Sand:</strong> Sifting through gray river gravel until a bright gleam of pure gold catches the eye.</p>",
                      "pt": "<p><strong>Avistando a Moeda de Ouro no Cascalho:</strong> Peneirando a areia do rio até que um brilho dourado e cintilante salte aos olhos.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Nimitta-pīti-pavesa",
                "title": {
                      "en": "2. Shifting Attention from Breath to Pleasure (1st Jhāna)",
                      "pt": "2. Mudando o Foco do Ar para o Prazer (1º Jhāna)"
                },
                "desc": {
                      "en": "The decisive leap: completely letting go of the breath! Shifting 100% of attention onto the pleasant sensation. Feeding it with gentle focus until it blooms into the 1st Jhāna.",
                      "pt": "O salto decisivo: largar a respiração por completo! Transferir 100% do foco para a sensação agradável, alimentando-a com presença suave até que floresça no 1º Jhāna."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Leaping onto Pleasure:</strong> Forget the breath entirely. Bathe in the tingling, joyful energy. Let rapture (<em>pīti</em>) vibrate through every cell.</p>",
                      "pt": "<p><strong>Mergulhando no Prazer:</strong> Esqueça o ar entrando e saindo. Banhe-se na vibração energética gostosa. Deixe o arrebatamento (<em>pīti</em>) ecoar pelas células.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>MN 119 §18</strong>: Seclusion-born rapture and pleasure pervading the whole body.</p>",
                      "pt": "<p><strong>MN 119 §18</strong>: O êxtase e o bem-estar nascidos do recolhimento permeando todo o organismo.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Catching the Rolling Wave on a Surfboard:</strong> Paddling into position, feeling the ocean swell lift you, and riding the wave of joy with effortless balance.</p>",
                      "pt": "<p><strong>Pegando a Onda na Prancha de Surf:</strong> Remando no ponto certo, sentindo a onda do oceano te erguer e deslizando na crista da alegria com equilíbrio leve.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Jhāna-saṅkama (1 to 4)",
                "title": {
                      "en": "3. Climbing the Jhāna Ladder (1st → 2nd → 3rd → 4th)",
                      "pt": "3. Subindo a Escada dos Jhānas (1º → 2º → 3º → 4º)"
                },
                "desc": {
                      "en": "Progressively refining the state: from physical rapture (1st), to emotional joy (2nd), to quiet restful peace (3rd), to spotless, neutral equanimity (4th).",
                      "pt": "Refinando o estado progressivamente: do êxtase físico (1º) para a alegria emocional (2º), a paz descansada (3º) e a equanimidade neutra e pura (4º)."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Refining the Fuel:</strong> When rapture feels too noisy, drop it and sink into quiet happiness (2nd). When happiness is too exciting, drop it and rest in peace (3rd). Drop peace for still equanimity (4th).</p>",
                      "pt": "<p><strong>Decantando o Combustível:</strong> Se o arrebatamento estiver agitado, solte-o e mergulhe na alegria doce (2º). Se a alegria for intensa, decante na paz (3º). Solte a paz na pura quietude (4º).</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Ayya Khema's teachings in <em>Who Is My Self? A Guide to Buddhist Meditation</em>.</p>",
                      "pt": "<p>Os ensinamentos de Ayya Khema reunidos em <em>Who Is My Self? A Guide to Buddhist Meditation</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Shifting Gears in a Sports Car:</strong> Smoothly clutching from first to second, second to third, third to fourth; the engine hums quieter while the car glides faster.</p>",
                      "pt": "<p><strong>Trocando as Marchas do Carro:</strong> Passando suavemente da primeira para a segunda, terceira e quarta marcha; o motor silencia enquanto o veículo desliza veloz.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Paccavekkhaṇā-vipassanā",
                "title": {
                      "en": "4. Using the Post-Jhāna Mind for Liberating Insight",
                      "pt": "4. Usando a Mente Pós-Jhāna para o Insight Libertador"
                },
                "desc": {
                      "en": "Emerging from absorption with a super-charged, pliable, diamond-bright mind. Immediately directing that stillness onto the Three Characteristics and Dependent Origination.",
                      "pt": "Emergindo da absorção com uma mente maleável, potente e brilhante como diamante. Aplicando essa quietude imediatamente para investigar as Três Marcas e a Originação Dependente."
                },
                "practiceInstructions": {
                      "en": "<p><strong>The Insight Harvest:</strong> After Jhāna, observe physical sensations or your sense of self. Watch them dissolve instantly. Liberating wisdom cuts through delusion.</p>",
                      "pt": "<p><strong>A Colheita da Sabedoria:</strong> Após o Jhāna, observe as sensações ou o senso de ego. Veja-os dissolverem-se na hora. A sabedoria liberta corta a ilusão pela raiz.</p>"
                },
                "canonicalBasis": {
                      "en": "<p><strong>AN 9.36</strong>: Absorption as the springboard for destroying mental taints.</p>",
                      "pt": "<p><strong>AN 9.36</strong>: A absorção como trampolim direto para extinguir as contaminações mentais.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Sharpened Samurai Sword:</strong> Polished and sharpened to molecular perfection, slicing effortlessly through thick bamboo stalks in a single stroke.</p>",
                      "pt": "<p><strong>A Espada Samurai Afiada no Cadinho:</strong> Polida e afiada com perfeição molecular, cortando bambus grossos com um único golpe limpo e sem resistência.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Mastery of the 4 Sutta Jhānas & Transition to Vipassanā",
      "hindrances": [
        {
          "name": "Trying Too Hard / Greed for Pleasure",
          "remedy": "Do not grab the pleasure; merely let your awareness rest upon it like a butterfly on a petal."
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Pleasant sensation disappears the instant you focus on it",
          "remedy": "You are looking with too much aggressive tension. Soften your gaze; let the feeling come to you."
        }
      ]
    },
    "layLife": {
      "feasibility": "High (The most accessible and practical roadmap to canonical Jhāna for laypeople)",
      "dailySchedule": "Dedicate 20 minutes to breath calming, then spend 20 minutes exploring pleasant somatic sensations.",
      "householdObstacles": "Fearing that Jhāna is too holy or difficult; realize the Buddha taught it as a natural human capacity.",
      "ethicsDuty": "Sīla as the foundation: clean conscience allows the heart to feel uninhibited joy."
    },
    "paliTerms": [
      {
        "term": "Pīti",
        "meaning": "Rapture / physical energetic joy arising from mental seclusion"
      },
      {
        "term": "Sukha",
        "meaning": "Bliss / serene happiness and peaceful contentment"
      },
      {
        "term": "Upacāra-Samādhi",
        "meaning": "Access concentration / threshold where absorption becomes possible"
      }
    ]
  },
  {
    "id": "contemporary-analayo",
    "cluster": "contemporary",
    "number": "44",
    "paliTitle": "Bhikkhu Anālayo Satipaṭṭhāna",
    "title": {
      "en": "Bhikkhu Anālayo — Compassionate Satipaṭṭhāna & Early Buddhist Synthesis",
      "pt": "Bhikkhu Anālayo — Satipaṭṭhāna Compassivo & Síntese Budista Antiga"
    },
    "lineageTradition": {
      "en": "Contemporary Canonical Monastic Scholarship & Practice",
      "pt": "Monacato e Erudição Canônica Contemporânea"
    },
    "primaryMasters": "Ven. Bhikkhu Anālayo, Ven. Bhikkhu Bodhi",
    "canonicalRef": "MN 10, DN 22, Chinese Madhyama-āgama, Ekottarika-āgama",
    "difficulty": "intermediate",
    "difficultyLabel": {
      "en": "Intermediate",
      "pt": "Intermediário"
    },
    "recommendedPrereq": {
      "en": "Basic Satipaṭṭhāna practice",
      "pt": "Prática básica de Satipaṭṭhāna"
    },
    "whyStudy": {
      "en": "Scholarly, compassionate integration of the Pāli suttas and Chinese Āgamas into an open, balanced mindfulness practice.",
      "pt": "Integração compassiva e erudita dos suttas Pāli e Āgamas chineses numa prática aberta e equilibrada de atenção plena."
    },
    "coreFocus": {
      "en": "Balancing all four Satipaṭṭhānas as a cohesive, open-field contemplation; historical comparison of Pāli Nikāyas with Chinese Āgamas; integrating compassion with emptiness",
      "pt": "Equilíbrio dos quatro Satipaṭṭhānas como contemplação integrada; comparação histórica com os Āgamas chineses; união de compaixão e vacuidade"
    },
    "primaryAnchor": {
      "en": "Panoramic open awareness anchoring in bodily presence, feeling tones, and awakening factors",
      "pt": "Atenção panorâmica aberta ancorada na presença corpórea, no tom afetivo e nos fatores de despertar"
    },
    "approachToJhana": {
      "en": "Integrated approach where tranquility and insight support each other harmoniously without dogmatic sectarian disputes",
      "pt": "Abordagem integrativa onde calma e discernimento se nutrem mutuamente sem disputas sectárias dogmáticas"
    },
    "useOfNoting": {
      "en": "Clear, non-verbal open observation; using structured contemplation sheets and guided introspective frameworks",
      "pt": "Observação aberta e não-verbal; roteiros contemplativos lúcidos e balanceados"
    },
    "tagline": {
      "en": "Bridging the earliest textual layers of human Buddhist history with direct, gentle, and profoundly balanced contemporary practice.",
      "pt": "Construindo pontes entre as camadas mais antigas da história budista e uma prática contemporânea serena e equilibrada."
    },
    "overview": {
      "en": "Ven. Bhikkhu Anālayo is universally respected as one of the world's preeminent scholars and practitioners of early Buddhist meditation. By comparing the Pāli suttas with their parallel Chinese Āgama and Sanskrit texts, he isolates the universal core of early Buddhist meditation. In his practical teaching, Satipaṭṭhāna is not practiced in narrow fragmented silos, but as a sweeping panoramic movement from the physical body through affective feeling and mental attitude, culminating in the Awakening Factors.",
      "pt": "Ven. Bhikkhu Anālayo é mundialmente reverenciado como um dos maiores monges pesquisadores e praticantes de meditação canônica. Ao confrontar os suttas em Pāli com seus paralelos em chinês antigo (Āgamas) e sânscrito, ele resgata o núcleo autêntico da prática dos primeiros séculos. Em seu método, Satipaṭṭhāna não é fragmentado em caixas rígidas, mas flui panoramicamente do corpo às sensações, mente e fatores de despertar."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Aparihāniya-sati",
                "title": {
                      "en": "1. Panoramic Open Monitoring of the Present",
                      "pt": "1. Monitoramento Panorâmico Aberto do Presente"
                },
                "desc": {
                      "en": "Bhikkhu Anālayo's early Buddhist synthesis: balancing focused concentration with wide-angle awareness, observing the interplay of body, feeling, and mind without tunnel vision.",
                      "pt": "A síntese do Bhikkhu Anālayo a partir dos textos antigos: equilibrar foco pontual com visão panorâmica aberta, observando a dança entre corpo, sensação e mente sem visão de túnel."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Wide-Angle Field:</strong> Keep the breath in the center while maintaining soft peripheral awareness of the body posture and soundscape. Balanced, alert, and spacious.</p>",
                      "pt": "<p><strong>Campo Amplo:</strong> Mantenha a respiração no centro enquanto sustenta consciência periférica do corpo e dos sons. Equilibrado, vigilante e espaçoso.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Bhikkhu Anālayo's landmark scholarly study: <em>Satipaṭṭhāna: The Direct Path to Realization</em>.</p>",
                      "pt": "<p>O estudo acadêmico seminal de Bhikkhu Anālayo: <em>Satipaṭṭhāna: O Caminho Direto para a Realização</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Bird Gliding on High Thermals:</strong> Seeing the entire landscape below—rivers, forests, roads—in one unified, effortless, panoramic gaze.</p>",
                      "pt": "<p><strong>O Pássaro Flutuando nas Alturas:</strong> Contemplando toda a paisagem abaixo—rios, matas, estradas—num único olhar panorâmico e desimpedido.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Catu-satipaṭṭhāna-saṅgama",
                "title": {
                      "en": "2. The Organic Interconnection of the 4 Foundations",
                      "pt": "2. A Interconexão Orgânica dos Quatro Satipaṭṭhānas"
                },
                "desc": {
                      "en": "Seeing that body, feeling, mind, and dharmas are not four isolated boxes, but an organic continuum: bodily posture affects feelings; feelings trigger mental states; mental states shape dharmas.",
                      "pt": "Reconhecendo que corpo, sensação, mente e dhammas não são quatro gavetas separadas, mas um fluxo contínuo: a postura afeta as sensações; sensações disparam estados mentais; estados mentais moldam dhammas."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Tracing the Feedback Loop:</strong> Notice how a tight shoulder (body) creates an unpleasant sensation (feeling), which triggers irritation (mind), which feeds ill will (dhamma). Intervene early!</p>",
                      "pt": "<p><strong>Mapeando o Circuito:</strong> Veja como o ombro tenso (corpo) gera desconforto (sensação), que dispara irritação (mente), que alimenta a aversão (dhamma). Intervenha no início!</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Anālayo's companion practice manual: <em>Perspectives on Satipaṭṭhāna</em>.</p>",
                      "pt": "<p>O manual prático de Anālayo: <em>Perspectives on Satipaṭṭhāna</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Symphony Orchestra:</strong> Strings, woodwinds, brass, and percussion playing together; each instrument influences the acoustic harmony of the whole piece.</p>",
                      "pt": "<p><strong>A Orquestra Sinfônica:</strong> Cordas, sopros e percussão tocando juntos; cada naipe de instrumentos afeta a harmonia viva da obra inteira.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Karuṇā-upekkhā-samatha",
                "title": {
                      "en": "3. Compassionate Equanimity as the Master Key",
                      "pt": "3. Equanimidade Compassiva como Chave-Mestra"
                },
                "desc": {
                      "en": "Steeping rigorous insight in warmth, compassion, and non-judgmental equanimity. Avoiding cold, intellectual detachment by grounding contemplation in boundless goodwill.",
                      "pt": "Banhando a investigação analítica em calor, compaixão e acolhimento. Evitando a frieza intelectual ao enraizar toda a prática meditativa na boa vontade imensurável."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Warm Insight:</strong> Whatever weakness you discover in yourself, meet it with compassionate understanding: 'This is the conditioned human heart.' Rest in liberating peace.</p>",
                      "pt": "<p><strong>Sabedoria Compassiva:</strong> Qualquer fraqueza que você descubra em si, acolha com compaixão lúcida: 'Este é o coração humano condicionado'. Descanse na paz libertadora.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Bhikkhu Anālayo's research on integrating the <em>Brahma-vihāras</em> with <em>Satipaṭṭhāna</em>.</p>",
                      "pt": "<p>As pesquisas de Bhikkhu Anālayo integrando os <em>Brahma-vihāras</em> com <em>Satipaṭṭhāna</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Sun Warming the Earth:</strong> Shining equally upon gardens and wastelands, melting frost and coaxing seedlings into radiant growth.</p>",
                      "pt": "<p><strong>O Sol Aquecendo a Terra:</strong> Brilhando com a mesma ternura sobre jardins floridos e solos pedregosos, derretendo o gelo e fazendo brotar a vida.</p>"
                }
          }
    ],
    "layApplication": {
      "en": "Use the Awakening Factors as an emotional balancing toolkit. When depressed or sluggish, stimulate investigation, energy, and joy. When stressed or hyperactive, cultivate tranquility, concentration, and equanimity.",
      "pt": "Use os Fatores do Despertar como uma caixa de ferramentas para equilíbrio emocional. Se sentir desânimo, ative a investigação e a alegria. Se estiver ansioso, cultive a calma e a equanimidade."
    },
    "keyPaliTerms": [
      {
        "term": "Bojjhaṅga",
        "meaning": "The Seven Factors of Awakening (Mindfulness, Investigation, Energy, Joy, Tranquility, Concentration, Equanimity)"
      },
      {
        "term": "Sampajañña",
        "meaning": "Clear comprehension with holistic perspective"
      },
      {
        "term": "Āgama",
        "meaning": "Parallel Early Buddhist collections preserved in Chinese translations"
      }
    ],
    "curriculumOrder": 6
  },
  {
    "id": "contemporary-burbea",
    "cluster": "contemporary",
    "number": "45",
    "paliTitle": "Burbea Suññatā-Vipassanā",
    "title": {
      "en": "Rob Burbea — Seeing That Frees, Emptiness & The Unmaking of Perception",
      "pt": "Rob Burbea — Visão que Liberta, Vacuidade & A Desfabricação da Percepção"
    },
    "lineageTradition": {
      "en": "Gaia House (Devon, UK — Contemporary Early Buddhist & Emptiness Lineage)",
      "pt": "Gaia House (Devon, Reino Unido — Linhagem Contemporânea de Vacuidade)"
    },
    "primaryMasters": "Rob Burbea (1965–2020)",
    "canonicalRef": "MN 121 (Cūḷasuññata), SN 22.95 (Pheṇapiṇḍūpama), 'Seeing That Frees'",
    "difficulty": "advanced",
    "curriculumOrder": 7,
    "difficultyLabel": {
      "en": "Advanced",
      "pt": "Avançado"
    },
    "recommendedPrereq": {
      "en": "Deep familiarity with Anattā, Dependent Origination, and stable meditation practice",
      "pt": "Familiaridade profunda com Anattā, Originação Dependente e prática estável"
    },
    "whyStudy": {
      "en": "One of the most revolutionary meditation texts of the 21st century ('Seeing That Frees'). Demonstrates how all perception is fabricated by our 'ways of looking', and teaches how to unfabricate suffering into complete, radiant Emptiness.",
      "pt": "Uma das obras mais revolucionárias do século XXI ('Seeing That Frees'). Demonstra como toda percepção é fabricada pelos nossos 'modos de olhar', ensinando a desfabricar o sofrimento na vacuidade plena."
    },
    "coreFocus": {
      "en": "Ways of looking (Diṭṭhi), the dependent co-arising of self and world, unfabricating perception (Saṅkhāra-nirodha), deep Emptiness (Suññatā)",
      "pt": "Modos de olhar (Diṭṭhi), co-surgimento dependente de eu e mundo, desfabricação da percepção (Saṅkhāra-nirodha), vacuidade profunda"
    },
    "primaryAnchor": {
      "en": "The spacious, transparent nature of awareness observing the dependency of all objects upon the mind's way of looking",
      "pt": "A natureza transparente e espaçosa da consciência observando a dependência de todos os objetos em relação ao modo de olhar"
    },
    "approachToJhana": {
      "en": "Energy body practices and playful mastery of deep Jhana, used as a laboratory to witness how the mind constructs and deconstructs physical and mental realities",
      "pt": "Práticas do corpo de energia e domínio dos Jhānas, usados como laboratório para testemunhar como a mente constrói e desfaz realidades"
    },
    "useOfNoting": {
      "en": "Noting fabrication: 'This object appears solid only because of the way I am looking at it. Soften the way of looking; the solidity dissolves.'",
      "pt": "Notar a fabricação: 'Isto parece sólido apenas pelo modo como olho. Se suavizo o modo de olhar, a solidez se desfaz.'"
    },
    "tagline": {
      "en": "'There is no way of looking that reveals a truly existing, independent thing. Emptiness is not a blank void; it is the miraculous freedom of perception.'",
      "pt": "'Não há modo de olhar que revele uma coisa que exista por si mesma. A vacuidade não é um vazio cinzento; é a liberdade milagrosa da percepção.'"
    },
    "overview": {
      "en": "Rob Burbea served as the resident guiding teacher at Gaia House in the UK. His landmark work, 'Seeing That Frees: Meditations on Emptiness and Dependent Arising', transformed the landscape of contemporary Buddhist practice. Burbea demonstrated that suffering is not an inherent property of things; it is created by the rigid, clinging 'ways of looking' we adopt. By learning to play with perception—seeing things as impermanent, seeing them as not-self, seeing them as unfabricated—the mind discovers that neither the 'self' nor the 'world' possesses inherent, independent existence. Experience becomes luminous, playful, and completely free.",
      "pt": "Rob Burbea foi o respeitado professor residente da Gaia House no Reino Unido. Sua obra-prima, 'Seeing That Frees: Meditations on Emptiness and Dependent Arising', transformou o panorama meditativo contemporâneo. Burbea demonstrou que o sofrimento não é uma propriedade das coisas, mas o produto de 'modos de olhar' rígidos e apegados. Ao treinar a mente para brincar com a percepção — vendo tudo como inconstante, como desprovido de Eu, como insubstancial — descobre-se que nem o 'eu' nem o 'mundo' possuem existência separada e rígida. A experiência torna-se luminosa, leve e liberta."
    },
    "steps": [
          {
                "step": 1,
                "pali": "Diṭṭhi-vibhāga (Ways of Looking)",
                "title": {
                      "en": "1. Recognizing the 'Way of Looking'",
                      "pt": "1. Reconhecendo o 'Modo de Olhar'"
                },
                "desc": {
                      "en": "Rob Burbea's foundational premise: perception is not an objective snapshot of an external world; perception is an active fabrication conditioned by the mind's current 'way of looking'.",
                      "pt": "A premissa basilar de Rob Burbea: a percepção não é um retrato neutro de um mundo externo fixo; a percepção é uma fabricação ativa moldada pelo 'modo de olhar' da mente."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Experimenting with Lenses:</strong> Notice that when looking with aversion, the world appears hostile and irritating; when looking with mettā, the same world appears tender and lovable.</p>",
                      "pt": "<p><strong>Experimentando as Lentes:</strong> Observe que ao olhar com irritação, o mundo parece hostil e chato; ao olhar com bondade amorosa, o mesmíssimo mundo parece terno e amável.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Rob Burbea's modern masterpiece: <em>Seeing That Frees: Meditations on Emptiness and Dependent Arising</em>.</p>",
                      "pt": "<p>A obra-prima moderna de Rob Burbea: <em>Seeing That Frees (Visão que Liberta: Meditações sobre a Vacuidade e a Originação Dependente)</em>.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Wearing Tinted Glasses:</strong> Put on yellow sunglasses and the snowy landscape turns golden; put on blue glasses and it turns cobalt; neither color belongs inherently to the snow.</p>",
                      "pt": "<p><strong>Os Óculos com Lentes Coloridas:</strong> Coloque óculos amarelos e a neve parecerá dourada; coloque lentes azuis e ela parecerá cobalto; nenhuma cor pertence à neve em si.</p>"
                }
          },
          {
                "step": 2,
                "pali": "Saṅkhāra-vighāta",
                "title": {
                      "en": "2. Deconstructing Fabrication (Saṅkhāra)",
                      "pt": "2. Desconstruindo a Fabricação (Saṅkhāra)"
                },
                "desc": {
                      "en": "Deliberately shifting ways of looking—from viewing phenomena as solid entities to viewing them as impermanent, unsatisfactory, and empty of self. Watching their solidity dissolve.",
                      "pt": "Alterando conscientemente os modos de contemplação—de ver as coisas como entidades sólidas para vê-las como impermanentes, insatisfatórias e vazias de um eu. Vendo a solidez derreter."
                },
                "practiceInstructions": {
                      "en": "<p><strong>De-Fabricating Reality:</strong> When an emotion feels overwhelming, look at it as changing sensations. Watch how the 'thingness' of the problem thins out and loses its weight.</p>",
                      "pt": "<p><strong>Desfabricando o Problema:</strong> Quando uma dor ou mágoa parecer esmagadora, examine-a como vibrações em mutação. Veja a 'solidez' do problema afinar e perder o peso.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>The practice of insight as progressive de-fabrication (<em>visaṅkhāra</em>) taught in the Nikāyas.</p>",
                      "pt": "<p>A prática de insight como desfabricação progressiva (<em>visaṅkhāra</em>) ensinada nos Nikāyas canônicos.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Holographic Image:</strong> It appears solid and three-dimensional, but wave your hand through it and your fingers meet only empty air.</p>",
                      "pt": "<p><strong>A Projeção Holográfica:</strong> Parece sólida e tridimensional, mas ao passar a mão através dela seus dedos encontram apenas o ar vazio.</p>"
                }
          },
          {
                "step": 3,
                "pali": "Virāga-nirodha-anupassanā",
                "title": {
                      "en": "3. Less Grasping = Less Fabrication",
                      "pt": "3. Menos Apego = Menos Fabricação"
                },
                "desc": {
                      "en": "Burbea's central discovery: the more grasping there is, the more solid and problematic the world appears; the less grasping there is, the less the world is fabricated.",
                      "pt": "A descoberta central de Burbea: quanto mais apego houver, mais sólido e problemático o mundo parece; quanto menos apego, menos o mundo é fabricado como problema."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Releasing the Grip:</strong> Deliberately relax craving and aversion. Notice that as grasping drops, the appearance of solid suffering simply vanishes.</p>",
                      "pt": "<p><strong>Soltando o Aperto:</strong> Relaxe conscientemente o desejo e a revolta. Note que ao soltar o aperto, a aparência de sofrimento sólido simplesmente desvanece.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>Dependent cessation: <em>Taṇhā-nirodhā upādāna-nirodho, upādāna-nirodhā bhava-nirodho</em> (SN 12.2).</p>",
                      "pt": "<p>Cessação dependente: cessando o desejo, cessa o apego; cessando o apego, cessa o devir (SN 12.2).</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>Unclamping a Tight Fist:</strong> Your hand was clenched so hard the fingernails drew blood; unclench the fingers, and the pain instantly disappears.</p>",
                      "pt": "<p><strong>Abrindo o Punho Fechado:</strong> Sua mão estava tão cerrada que as unhas cravavam na palma gerando dor; abra os dedos e o sofrimento cessa na hora.</p>"
                }
          },
          {
                "step": 4,
                "pali": "Suññatā-vimokkha",
                "title": {
                      "en": "4. Resting in Radical Emptiness (Suññatā)",
                      "pt": "4. Repousando na Vacuidade Radical (Suññatā)"
                },
                "desc": {
                      "en": "When all grasping and all ways of looking are abandoned, fabrication ceases completely. Reality is experienced as utterly empty of inherent existence: luminous, ungraspable, playful freedom.",
                      "pt": "Quando todo apego e todos os modos de olhar são soltos, a fabricação cessa por completo. A realidade é vivenciada como vazia de essência inerente: luminosa, insubstancial e liberta."
                },
                "practiceInstructions": {
                      "en": "<p><strong>Boundless Freedom:</strong> Live in the world seeing all things as dreams, rainbows, and echoes. Love fully, act compassionately, and cling to nothing whatsoever.</p>",
                      "pt": "<p><strong>Liberdade Ilimitada:</strong> Viva no mundo contemplando todas as coisas como sonhos, ecos e arco-íris. Ame com plenitude, aja com compaixão e não se apegue a coisa alguma.</p>"
                },
                "canonicalBasis": {
                      "en": "<p>The ultimate realization of Suññatā in the Early Buddhist Texts and Prajñāpāramitā synthesis.</p>",
                      "pt": "<p>A realização última da Vacuidade (Suññatā) nos Textos Antigos e sua culminância libertadora.</p>"
                },
                "canonicalSimile": {
                      "en": "<p><strong>The Rainbow in the Sunlight:</strong> Vividly colorful, breathtakingly beautiful, inspiring wonder, yet completely insubstantial; reach for it and your hand touches empty space.</p>",
                      "pt": "<p><strong>O Arco-Íris no Céu Ensopado de Sol:</strong> Vibrante de cores, deslumbrante de se ver, inspirando encantamento, mas totalmente insubstancial; toque nele e sua mão tocará apenas o ar aberto.</p>"
                }
          }
    ],
    "attainments": {
      "maxAttainment": "Realization of Emptiness (Suññatā) & Cessation of Mental Fabrication",
      "hindrances": [
        {
          "name": "Nihilistic Misunderstanding of Emptiness",
          "remedy": "Emptiness is not nothingness; it is the freedom and luminosity of experience freed from grasping."
        }
      ],
      "symptomsAndRemedies": [
        {
          "symptom": "Feeling disoriented or ungrounded when boundaries of identity dissolve",
          "remedy": "Re-anchor in the physical energy body and cultivate warm Mettā; emptiness and compassion are inseparable."
        }
      ]
    },
    "layLife": {
      "feasibility": "Advanced (A profound philosophical and practical summit for mature meditators)",
      "dailySchedule": "Take 15 minutes during ordinary work to ask: 'How am I fabricating this situation right now?'",
      "householdObstacles": "Taking life's dramas too seriously; laugh at how the mind manufactures crises out of thin air.",
      "ethicsDuty": "Universal compassion born of understanding that all suffering is an empty fabrication."
    },
    "paliTerms": [
      {
        "term": "Suññatā",
        "meaning": "Emptiness / the lack of inherent, independent existence in all things"
      },
      {
        "term": "Saṅkhāra",
        "meaning": "Fabrication / mental construction / conditioned formation"
      }
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


  // ==========================================
  // 3. CANONICAL SUTTA MEDITATION CORPUS
  // ==========================================
/**
 * The Lay Dharma Household Bhāvanā — Canonical Sutta Meditation Corpus
 * Primary discourses on Bhāvanā (mental development, tranquility & insight).
 * Bilingual: English (EN) and Portuguese (PT-BR) with Pāli root texts and SuttaCentral URLs.
 */
const SUTTA_MEDITATION_CORPUS = [
  {
    code: "MN 118",
    difficulty: "intermediate",
    stage: 2,
    stageLabel: { en: "Intermediate", pt: "Intermediário" },
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
    difficulty: "intermediate",
    stage: 2,
    stageLabel: { en: "Intermediate", pt: "Intermediário" },
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
    code: "DN 2",
    difficulty: "intermediate",
    stage: 2,
    stageLabel: { en: "Intermediate", pt: "Intermediário" },
    paliTitle: "Sāmaññaphala Sutta",
    title: {
      en: "The Fruits of the Contemplative Life & The Jhāna Similes",
      pt: "Os Frutos da Vida Contemplativa & Os Símiles dos Jhānas"
    },
    suttaCentralUrl: "https://suttacentral.net/dn2",
    role: {
      en: "The definitive gradual training curriculum: from sense restraint to abandoning the 5 hindrances and the 4 bodily jhāna suffusions.",
      pt: "O currículo definitivo do treinamento gradual: da guarda dos sentidos ao abandono dos 5 obstáculos e saturação dos 4 jhānas."
    },
    keyPassage: {
      pali: "So vivicceva kāmehi vivicca akusalehi dhammehi savitakkaṁ savicāraṁ vivekajaṁ pītisukhaṁ paṭhamaṁ jhānaṁ upasampajja viharati. So imameva kāyaṁ vivekajena pītisukhena abhisandeti parisandeti paripūreti parippharati.",
      en: "Quite secluded from sensual pleasures, secluded from unwholesome states, a mendicant enters and abides in the first jhāna. They suffuse, drench, fill, and radiate through this very body with the rapture and pleasure born of seclusion.",
      pt: "Afastado dos prazeres sensuais e das impurezas, o mendicante entra e permanece no primeiro jhāna. Ele banha, satura, preenche e permeia este próprio corpo com o êxtase e a paz nascidos do recolhimento."
    }
  },
  {
    code: "MN 119",
    difficulty: "foundational",
    stage: 1,
    stageLabel: { en: "Foundations", pt: "Fundamentos" },
    paliTitle: "Kāyagatāsati Sutta",
    title: {
      en: "Mindfulness Immersed in the Body & The 10 Blessings",
      pt: "Atenção Plena Imersa no Corpo & As Dez Bênçãos"
    },
    suttaCentralUrl: "https://suttacentral.net/mn119",
    role: {
      en: "Describes how deep physical mindfulness across postures, elements, and jhānas conquers fear, pain, and restlessness.",
      pt: "Descreve como a presença corpórea profunda nas posturas, elementos e jhānas vence o medo, a dor e a agitação."
    },
    keyPassage: {
      pali: "Kāyagatāya, bhikkhave, satiyā āsevitāya bhāvitāya bahulīkatāya... ime dasa ānisaṁsā pāṭikaṅkhā. Aratiratisaho hoti, na ca taṁ arati sahati; bhayabheravasaho hoti, na ca taṁ bhayabheravaṁ sahati; khamo hoti sītassa uṇhassa...",
      en: "When mindfulness immersed in the body is frequently cultivated, these ten blessings can be expected: One conquers discontent and delight; one conquers fear and dread; one endures cold and heat, hunger and thirst, and acute bodily pains without dismay.",
      pt: "Quando a atenção plena imersa no corpo é cultivada com frequência, dez bênçãos são colhidas: Conquista-se o desprazer e o apego; subjuga-se o medo e o pavor; suporta-se com serenidade o frio, o calor, a fome e dores físicas agudas."
    }
  },
  {
    code: "MN 20",
    difficulty: "foundational",
    stage: 1,
    stageLabel: { en: "Foundations", pt: "Fundamentos" },
    paliTitle: "Vitakkasaṇṭhāna Sutta",
    title: {
      en: "The Removal of Distracting Thoughts (The 5 Pegs)",
      pt: "A Remoção dos Pensamentos Perturbadores (Os 5 Pinos)"
    },
    suttaCentralUrl: "https://suttacentral.net/mn20",
    role: {
      en: "The Buddha's emergency protocol: five progressive tactical methods to dismantle obsessive, agitated thoughts during sitting meditation.",
      pt: "O protocolo de emergência do Buda: cinco métodos táticos progressivos para desarmar pensamentos obsessivos e perturbadores."
    },
    keyPassage: {
      pali: "Seyyathāpi, bhikkhave, dakkho palagaṇḍo vā palagaṇḍantevāsī vā sukhumāya āṇiyā oḷārikaṁ āṇiṁ abhinīhareyya abhinīhāreyya abhinīvaṭṭeyya; evameva kho, bhikkhave, bhikkhuno yaṁ nimittaṁ āgamma... aññaṁ nimittaṁ manasikaroto...",
      en: "Just as a skilled carpenter knocks out a coarse peg with a fine peg, so too when a mendicant attends to an alternative wholesome theme, unwholesome thoughts are abandoned and subside, and the mind becomes steady, tranquil, and unified.",
      pt: "Assim como um carpinteiro experiente expulsa um pino de madeira rústica com um pino fino, assim quando o meditador atende a um tema salutar alternativo, os pensamentos prejudiciais cessam e a mente se unifica em quietude."
    }
  },
  {
    code: "AN 4.170",
    difficulty: "intermediate",
    stage: 2,
    stageLabel: { en: "Intermediate", pt: "Intermediário" },
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
    code: "AN 4.41",
    difficulty: "intermediate",
    stage: 2,
    stageLabel: { en: "Intermediate", pt: "Intermediário" },
    paliTitle: "Samādhibhāvanā Sutta",
    title: {
      en: "The Four Developments of Concentration",
      pt: "Os Quatro Modos de Cultivar a Concentração"
    },
    suttaCentralUrl: "https://suttacentral.net/an4.41",
    role: {
      en: "The Buddha classifies 4 distinct ways to cultivate concentration: for pleasant dwelling here-and-now, divine vision, mindfulness, and the destruction of taints.",
      pt: "O Buda classifica 4 formas de cultivar o samādhi: para o bem-estar presente, visão radiante, lucidez rápida e a destruição dos grilhões."
    },
    keyPassage: {
      pali: "Cattāromā, bhikkhave, samādhibhāvanā. Katamā catasso? Atthi, bhikkhave, samādhibhāvanā bhāvitā bahulīkatā diṭṭhadhammasukhavihārāya saṁvattati... ñāṇadassanapaṭilābhāya... satisampajaññāya... āsavānaṁ khayāya saṁvattati.",
      en: "There are these four developments of concentration: one developed for pleasant abiding here and now; one developed for gaining knowledge and vision; one developed for mindfulness and clear awareness; and one developed for the total destruction of taints.",
      pt: "Existem estes quatro modos de cultivar a concentração: um que conduz ao viver feliz no presente momento; outro que conduz ao conhecimento e à visão; outro que aprimora a atenção plena e lucidez; e outro que leva à destruição total das contaminações."
    }
  },
  {
    code: "AN 10.60",
    difficulty: "foundational",
    stage: 1,
    stageLabel: { en: "Foundations", pt: "Fundamentos" },
    paliTitle: "Girimānanda Sutta",
    title: {
      en: "The Ten Contemplations for Mind-Body Healing",
      pt: "As Dez Contemplações para a Cura da Mente e do Corpo"
    },
    suttaCentralUrl: "https://suttacentral.net/an10.60",
    role: {
      en: "Ten profound contemplations (Anicca, Anattā, Asubha, Ādīnava, Pahāna, Virāga, Nirodha, Non-Delight, Ānāpānasati) that cured Ven. Girimānanda's severe disease.",
      pt: "Dez contemplações profundas (Inconstância, Não-Eu, Vulnerabilidade, Desapego, Cessação e Respiração) que curaram a grave enfermidade do monge Girimānanda."
    },
    keyPassage: {
      pali: "Sace kho tvaṁ, ānanda, girimānandassa bhikkhuno dasa saññā bhāseyyāsi, ṭhānaṁ kho panetaṁ vijjati yaṁ girimānandassa bhikkhuno dasa saññā sutvā so ābādho ṭhānaso paṭippassambheyya.",
      en: "If you recite these ten contemplations to the monk Girimānanda, it is possible that on hearing them his affliction will immediately subside. And upon hearing them, his sickness was cured.",
      pt: "Se você recitar estas dez contemplações ao monge Girimānanda, é bem possível que, ao ouvi-las, sua aflição seja apaziguada imediatamente. E, ao escutá-las, sua enfermidade foi curada."
    }
  },
  {
    code: "AN 9.36",
    difficulty: "advanced",
    stage: 3,
    stageLabel: { en: "Advanced", pt: "Avançado" },
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
      pali: "So te dhamme aniccato dukkhato rogato gaṇḍato sallato aghato ābādhato parato palokato suññato anattato samanupassati. So tehi dhammehi cittaṁ paṭivāpeti. So tehi dhammehi cittaṁ paṭivāpetvā amatāya dhātuyā cittaṁ upasaṁharati.",
      en: "Whatever phenomena exist in that absorption — form, feeling, perception, volitions, consciousness — one contemplates them as impermanent, suffering, a disease, an arrow, alien, disintegrating, empty, not-self. Turning away from them, one inclines the mind to the Deathless.",
      pt: "Quaisquer fenômenos presentes naquela absorção — forma, sensação, percepção, formações, consciência — o meditador os contempla como inconstantes, dolorosos, uma enfermidade, uma flecha, alienígenas, vazios e não-eu. Afastando-se deles, inclina a mente ao Imorredouro."
    }
  },
  {
    code: "MN 121",
    difficulty: "advanced",
    stage: 3,
    stageLabel: { en: "Advanced", pt: "Avançado" },
    paliTitle: "Cūḷasuññata Sutta",
    title: {
      en: "The Shorter Discourse on Emptiness",
      pt: "O Discurso Breve sobre o Vazio (Vacuidade)"
    },
    suttaCentralUrl: "https://suttacentral.net/mn121",
    role: {
      en: "The authentic canonical reduction method of Emptiness: gradually peeling back perceptions from social noise to signless absorption.",
      pt: "O método canônico de redução da Vacuidade: descascando progressivamente as percepções do ruído social à imersão sem sinais."
    },
    keyPassage: {
      pali: "Yañhi kho tattha na hoti, tena taṁ suññaṁ samanupassati. Yaṁ pana tattha avasiṭṭhaṁ hoti, taṁ 'santaṁ idaṁ atthī'ti pajānāti. Evam'pissa esā, ānanda, yathābhuccā avipallatthā pariyodātā paramānuttarā suññatāvakkanti bhavati.",
      en: "Whatever is not present there, one regards as empty of it. But whatever remains present there, one discerns: 'This is present.' Thus, Ānanda, this is the genuine, undistorted, pure, unsurpassable entry into emptiness.",
      pt: "Aquilo que não está presente ali, considera-se vazio disso. Mas o que permanece, discerne-se com lucidez: 'Isto está presente.' Assim, Ānanda, dá-se a entrada genuína, sem distorções, pura e insuperável no vazio."
    }
  },
  {
    code: "SN 36.31",
    difficulty: "foundational",
    stage: 1,
    stageLabel: { en: "Foundations", pt: "Fundamentos" },
    paliTitle: "Nirāmisa Sutta",
    title: {
      en: "Worldly, Unworldly & Ultra-Unworldly Feelings",
      pt: "Sensações Mundanas, Espirituais & Transmundanas"
    },
    suttaCentralUrl: "https://suttacentral.net/sn36.31",
    role: {
      en: "The taxonomy of sensation (Vedanā): validates meditative joy (nirāmisa sukha) as holy pleasure that replaces sensual craving without causing bondage.",
      pt: "A anatomia da sensação (Vedanā): valida a alegria meditativa (nirāmisa sukha) como prazer sagrado que substitui o apego sensual sem gerar contaminação."
    },
    keyPassage: {
      pali: "Atthi, bhikkhave, sāmisaṁ sukhaṁ, atthi nirāmisaṁ sukhaṁ, atthi nirāmisā nirāmisataraṁ sukhaṁ... Katamañca nirāmisaṁ sukhaṁ? Idha bhikkhu vivicceva kāmehi... Paṭhamaṁ jhānaṁ upasampajja viharati.",
      en: "There is worldly pleasure, there is unworldly pleasure, and there is pleasure more unworldly than the unworldly. And what is unworldly pleasure? When secluded from sensual desires, a mendicant enters and abides in the jhānas.",
      pt: "Existe o prazer mundano, existe o prazer espiritual e existe um prazer mais espiritual que o espiritual. E o que é o prazer espiritual? É quando, afastado dos desejos dos sentidos, o mendicante entra e permanece nos jhānas."
    }
  },
  {
    code: "MN 128",
    difficulty: "advanced",
    stage: 3,
    stageLabel: { en: "Advanced", pt: "Avançado" },
    paliTitle: "Upakkilesa Sutta",
    title: {
      en: "Overcoming the 11 Corruptions of Meditative Light (Nimitta)",
      pt: "Superando as 11 Corrupções da Luz Meditativa (Nimitta)"
    },
    suttaCentralUrl: "https://suttacentral.net/mn128",
    role: {
      en: "The Buddha coaches Ven. Anuruddha on why meditative radiance and nimittas vanish, diagnosing 11 subtle traps including excitement and excess force.",
      pt: "O Buda orienta o Ven. Anuruddha sobre o motivo pelo qual a luz e os nimittas esvaecem, diagnosticando 11 armadilhas como a euforia e a força excessiva."
    },
    keyPassage: {
      pali: "Yato kho me, anuruddhā, vicikicchā upakkileso pahīno ahosi, amanasikāro... Thīnamiddhaṁ... Chambhitattaṁ... Ubbilāvitaṁ... Duṭṭhullaṁ... Accāraddhavīriyaṁ... Atilīnavīriyaṁ... Abhijappā... Nānattasaññā... Atidijjhāyitattaṁ upakkileso pahīno ahosi, tato me samādhi na hāyati.",
      en: "When I had understood and abandoned these eleven subtle corruptions of the mind — doubt, inattention, sluggishness, fear, elation, inertia, excessive energy, slack energy, longing, perception of diversity, and excessive pondering — my concentration no longer declined.",
      pt: "Quando compreendi e abandonei essas onze corrupções sutis da mente — dúvida, desatenção, torpor, medo, euforia, inércia, esforço excessivo, esforço frouxo, anseio, percepção da diversidade e excesso de análise —, minha concentração nunca mais declinou."
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


})();