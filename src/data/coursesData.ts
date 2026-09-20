import { Course } from '../types';

export const COURSE_CATEGORIES = [
  'Todos',
  'Cuerpo y anatomía',
  'Placer',
  'Salud sexual',
  'Salud reproductiva',
  'Relaciones',
  'Comunicación',
  'Consentimiento',
  'Diversidad sexual',
  'Sexualidad en pareja',
  'Sexualidad y emociones',
  'Prevención de infecciones de transmisión sexual',
  'Mitos y realidades',
  'Sexualidad a lo largo de la vida',
] as const;

export const COURSES: Course[] = [
  {
    id: 'anatomia-consciente',
    title: 'Anatomía y Cuerpo Consciente: Reconciliándonos con nuestra biología',
    category: 'Cuerpo y anatomía',
    level: 'Introductorio',
    duration: '2h 15m (4 módulos)',
    lessonsCount: 4,
    description: 'Aprende sobre la anatomía genital y corporal con rigor científico, ilustraciones pedagógicas y una mirada libre de estigmas o vergüenza.',
    highlight: 'Descubre estructuras a menudo invisibilizadas como el clítoris en su totalidad y el mapa de respuestas sensoriales.',
    badge: 'Curso gratuito',
    targetAudience: 'Cualquier persona que desee comprender su anatomía sin tabúes culturales.',
    lessons: [
      {
        id: 'c1-l1',
        title: 'Más allá de lo visible: La verdadera anatomía genital',
        duration: '25 min',
        summary: 'Comprender que la anatomía no es binaria en sus formas ni idéntica en cada cuerpo.',
        content: [
          'A lo largo de la historia, la educación anatómica tradicional se enfocó predominantemente en la reproducción, dejando de lado la arquitectura del placer y la diversidad natural de las vulvas, penes y zonas erógenas.',
          'El clítoris, por ejemplo, no es solo un botón externo de milímetros; posee una red interna de bulbos y cuerpos cavernosos que se extiende varios centímetros alrededor de la uretra y la vagina.',
          'Aprender a nombrar cada parte con su término biológico preciso es el primer paso para desarmar la culpa y apropiarse del propio bienestar corporal.'
        ],
        reflectionQuestion: '¿Alguna vez sentiste que tus dudas sobre tu propio cuerpo eran algo prohibido o vergonzoso?',
        keyTakeaway: 'La diversidad morfológica es la norma biológica. No hay una "forma correcta" de cuerpo genital.'
      },
      {
        id: 'c1-l2',
        title: 'La piel como órgano sensorial principal',
        duration: '35 min',
        summary: 'Cómo el sistema nervioso procesa el tacto, la temperatura y la excitación.',
        content: [
          'La piel es el órgano más extenso del cuerpo humano y alberga millones de mecanorreceptores que responden a la suavidad, la presión y el ritmo.',
          'Reducir la sexualidad a los genitales empobrece nuestra capacidad de sentir. El cuello, la espalda, las palmas y la respiración son vías centrales de activación del sistema parasimpático.',
          'Aprenderemos a realizar ejercicios de autoexploración táctil en estado de relajación sin la presión de un objetivo determinado.'
        ],
        reflectionQuestion: '¿Qué partes de tu cuerpo te transmiten calma o placer sensorial en tu vida cotidiana?',
        keyTakeaway: 'Todo el cuerpo participa en la respuesta sexual humana cuando la mente se encuentra en calma y seguridad.'
      },
      {
        id: 'c1-l3',
        title: 'Fisiología de la excitación: El ciclo de respuesta sexual',
        duration: '35 min',
        summary: 'Modelos de Masters & Johnson y el modelo circular de Rosemary Basson.',
        content: [
          'El deseo no siempre precede a la excitación física; en muchas personas, el deseo es receptivo y surge después de estímulos sensoriales agradables y conexión afectiva.',
          'La lubricación y la erección son respuestas reflejas vasculares y nerviosas, influenciadas por el estrés, el cansancio y los niveles de cortisol, no un examen de masculinidad o feminidad.',
          'Comprender esto alivia la ansiedad de desempeño y promueve el disfrute mutuo.'
        ],
        reflectionQuestion: '¿Te has presionado alguna vez para responder sexualmente cuando tu cuerpo estaba cansado o estresado?',
        keyTakeaway: 'El deseo receptivo es una respuesta completamente sana y natural en seres humanos.'
      },
      {
        id: 'c1-l4',
        title: 'Higiene, microbiota y cuidados cotidianos',
        duration: '40 min',
        summary: 'Cuidado respetuoso de la flora vaginal, uretra y zonas íntimas.',
        content: [
          'Las publicidades de jabones íntimos con fragancias a menudo promueven la idea tóxica de que los genitales deben oler a flores, dañando el pH y la microbiota protectora.',
          'Agua tibia, ventilación adecuada, ropa transpirable y orinar después de las relaciones sexuales son pilares basados en evidencia médica.',
          'Conocer las señales de alerta frente a infecciones cotidianas como candidiasis o vaginosis sin alarmismo.'
        ],
        reflectionQuestion: '¿Cuántos productos innecesarios te han hecho creer que necesitas para sentirte limpio/a?',
        keyTakeaway: 'Los genitales saludables tienen olores naturales. El respeto a la microbiota previene molestias.'
      }
    ]
  },
  {
    id: 'desmitificando-el-placer',
    title: 'Placer Consciente: Mucho más que llegar al orgasmo',
    category: 'Placer',
    level: 'Introductorio',
    duration: '1h 50m (3 módulos)',
    lessonsCount: 3,
    description: 'Explora una sexualidad despojada de presiones de rendimiento, donde el disfrute, la calma, la curiosidad y la presencia son el centro.',
    highlight: 'Aprende a transformar la mentalidad orientada a metas hacia una vivencia placentera del momento presente.',
    badge: 'Curso gratuito',
    targetAudience: 'Personas de cualquier experiencia que sientan ansiedad por "rendir" o alcanzar metas fijas.',
    lessons: [
      {
        id: 'c2-l1',
        title: 'La trampa del coitocentrismo y el "rendimiento"',
        duration: '30 min',
        summary: 'Cómo los mandatos culturales han reducido el placer a una carrera de velocidad.',
        content: [
          'Durante décadas, la ficción y la pornografía comercial instalaron la creencia de que un encuentro solo es válido si culmina en orgasmos simultáneos mediante penetración.',
          'La ciencia sexológica demuestra que para la inmensa mayoría de las mujeres y personas con vulva, la penetración sin estimulación clitoriana directa rara vez produce clímax, y eso es biológicamente normal.',
          'Ampliar el repertorio al juego, la caricia, la fantasía compartida y la complicidad elimina la tensión y multiplica la satisfacción.'
        ],
        reflectionQuestion: '¿Qué cambiaría en tu intimidad si no existiera la obligación de llegar al orgasmo cada vez?',
        keyTakeaway: 'El orgasmo es una opción deliciosa, pero nunca una obligación o un examen.'
      },
      {
        id: 'c2-l2',
        title: 'Mindfulness y presencia erótica: Estar en el cuerpo',
        duration: '40 min',
        summary: 'Desactivar el observador crítico interior (spectatoring).',
        content: [
          'El fenómeno del "espectador" ocurre cuando, en lugar de sentir, tu mente se coloca afuera juzgando cómo te ves, si tardas mucho o si tu pareja está aburrida.',
          'Mediante técnicas de anclaje sensorial en la respiración y el peso del cuerpo, entrenamos al sistema nervioso para volver a las sensaciones reales.',
          'La relajación es el lubricante universal de la sexualidad humana.'
        ],
        reflectionQuestion: '¿A qué pensamientos suele irse tu mente cuando intentas relajarte?',
        keyTakeaway: 'El placer requiere seguridad y calma; no puede florecer bajo el juicio de la autocrítica.'
      },
      {
        id: 'c2-l3',
        title: 'Autoerotismo como autocuidado e intimidad personal',
        duration: '40 min',
        summary: 'Conocerse para poder comunicar los propios gustos.',
        content: [
          'La masturbación o autoerotismo no es un reemplazo de la pareja, sino una práctica de salud, autoconocimiento y regulación emocional autónoma.',
          'Saber qué ritmos, intensidades y caricias te hacen bien te otorga la soberanía para orientar a un compañero o compañera sin misterios ni vergüenza.',
          'Celebrar el autoerotismo a cualquier edad sin culpa moral.'
        ],
        reflectionQuestion: '¿Te permites disfrutar de tu propio cuerpo con la misma amabilidad con que tratarías a un ser querido?',
        keyTakeaway: 'Conocer tu propio mapa de placer es un derecho y una base sólida para compartirlo con otros.'
      }
    ]
  },
  {
    id: 'comunicacion-y-relaciones',
    title: 'Comunicación Íntima: ¿Cómo hablar de sexo sin vergüenza ni rodeos?',
    category: 'Comunicación',
    level: 'Intermedio',
    duration: '2h 10m (3 módulos)',
    lessonsCount: 3,
    description: 'Aprende herramientas prácticas de asertividad, vulnerabilidad y escucha para expresar tus deseos, miedos y límites en tus relaciones.',
    highlight: 'Guías paso a paso para abrir conversaciones complejas sin caer en reproches ni silencios dolorosos.',
    badge: 'Curso gratuito',
    targetAudience: 'Personas solteras o en pareja que desean comunicarse mejor sobre su intimidad.',
    lessons: [
      {
        id: 'c3-l1',
        title: 'Identificar lo que quiero antes de pedirlo',
        duration: '40 min',
        summary: 'Claridad interna y vocabulario emocional para la intimidad.',
        content: [
          'A menudo esperamos que la otra persona adivine telepáticamente lo que nos gusta, frustrándonos cuando no ocurre.',
          'El primer paso de la comunicación sexual es el autoexamen: ¿qué me da curiosidad? ¿qué me incomoda hoy? ¿qué necesito emocionalmente para sentirme en confianza?',
          'Trabajamos con el ejercicio del semáforo: verde (me encanta), amarillo (curiosidad/con condiciones), rojo (límite no negociable).'
        ],
        reflectionQuestion: '¿Hay algo que siempre hayas querido proponer pero que callas por miedo al qué dirán?',
        keyTakeaway: 'Pedir no le quita espontaneidad al encuentro; le otorga precisión y seguridad.'
      },
      {
        id: 'c3-l2',
        title: 'El momento y el espacio: Conversar fuera de la cama',
        duration: '45 min',
        summary: 'Por qué hablar durante el acto puede generar defensiva y cómo elegir el momento oportuno.',
        content: [
          'Cuando intentamos corregir a una pareja en medio de la excitación o cuando algo sale mal, los niveles de vulnerabilidad están al máximo y es fácil herir susceptibilidades.',
          'Las conversaciones sobre preferencias, fantasías y límites se abren mejor en momentos neutros: un café tranquilo, un paseo o una cena relajada.',
          'Usar fórmulas de primera persona: "A mí me hace sentir muy bien cuando..." en lugar de "Tú nunca haces..."'
        ],
        reflectionQuestion: '¿Cómo reaccionas cuando alguien te dice amablemente que algo no le resultó placentero?',
        keyTakeaway: 'La comunicación asertiva cuida el vínculo mientras protege las necesidades de cada integrante.'
      },
      {
        id: 'c3-l3',
        title: 'Recibir el "No" con madurez y ternura',
        duration: '45 min',
        summary: 'Desvincular el rechazo de una propuesta del rechazo a tu persona.',
        content: [
          'Que alguien diga "hoy no tengo ganas" o "esa práctica no me atrae" no significa que ya no te quiera o que hayas dejado de ser atractivo.',
          'Celebrar que la otra persona sea honesta fortalece la confianza: si sabes que puede decir que no con tranquilidad, sabrás que sus "sí" son 100% genuinos.',
          'Cómo gestionar la desilusión sin aplicar castigos silenciosos ni manipular afectivamente.'
        ],
        reflectionQuestion: '¿Sabes crear un ambiente donde tu pareja se sienta libre de decirte que no sin miedo a tu enojo?',
        keyTakeaway: 'La libertad de decir "no" es la condición indispensable para que el "sí" tenga verdadero valor.'
      }
    ]
  },
  {
    id: 'consentimiento-activo',
    title: 'Consentimiento Continuo: El arte del acuerdo claro y entusiasta',
    category: 'Consentimiento',
    level: 'Introductorio',
    duration: '1h 30m (3 módulos)',
    lessonsCount: 3,
    description: 'Descubre por qué el consentimiento no es un trámite burocrático, sino la base viva del cuidado, la libertad mutua y el placer auténtico.',
    highlight: 'Aprende el modelo FRIES (Freely given, Reversible, Informed, Enthusiastic, Specific).',
    badge: 'Curso gratuito',
    targetAudience: 'Toda persona que busque relacionarse con respeto absoluto hacia los límites propios y ajenos.',
    lessons: [
      {
        id: 'c4-l1',
        title: 'Consentimiento libre y reversible',
        duration: '30 min',
        summary: 'La ausencia de un "no" jamás equivale a un "sí".',
        content: [
          'El consentimiento nunca es válido si media presión, culpa, chantaje emocional, insistencia agotadora o consumo excesivo de sustancias.',
          'Además, consentir un beso no autoriza a desvestir, y consentir al inicio no obliga a continuar si en cualquier momento alguien siente incomodidad.',
          'Detenerse cuando el ambiente cambia es una señal de empatía y madurez emocional.'
        ],
        reflectionQuestion: '¿Alguna vez dijiste que sí solo por cansancio o para no incomodar a la otra persona?',
        keyTakeaway: 'El consentimiento es dinámico: se puede pausar, renegociar o retirar en cualquier segundo.'
      },
      {
        id: 'c4-l2',
        title: 'Lectura del lenguaje no verbal y chequeos amables',
        duration: '30 min',
        summary: 'Aprender a sintonizar con la respiración, la mirada y las tensiones musculares.',
        content: [
          'La congelación o la desconexión motora son respuestas frecuentes del sistema nervioso ante la incomodidad.',
          'Preguntas cortas y cariñosas como "¿te gusta cómo se siente esto?", "¿vamos bien a este ritmo?", "¿quieres seguir o probamos otra cosa?" aumentan la intimidad.',
          'El consentimiento hablado no rompe el romance; al contrario, demuestra presencia y devoción.'
        ],
        reflectionQuestion: '¿Cómo sientes en tu cuerpo la diferencia entre el entusiasmo y la simple condescendencia?',
        keyTakeaway: 'Saber preguntar y calibrar el bienestar de quien te acompaña es la máxima expresión de cortesía erótica.'
      },
      {
        id: 'c4-l3',
        title: 'Consentimiento digital e intimidad en pantallas',
        duration: '30 min',
        summary: 'Sexting responsable, confidencialidad y acuerdos sobre imágenes íntimas.',
        content: [
          'Enviar o solicitar imágenes íntimas requiere pactos explícitos previos sin presiones.',
          'Compartir una imagen enviada en confianza con terceros es una vulneración grave de la intimidad y en la mayoría de países constituye delito.',
          'Cómo acordar reglas de archivo, borrado y discreción antes de iniciar intercambios digitales.'
        ],
        reflectionQuestion: '¿Tienes claros los límites de lo que deseas compartir en entornos virtuales?',
        keyTakeaway: 'La privacidad digital de los cuerpos ajenos merece el mismo respeto sagrado que la presencia física.'
      }
    ]
  },
  {
    id: 'prevencion-its-salud',
    title: 'Salud Sexual y Prevención de ITS: Información científica sin miedos',
    category: 'Salud sexual',
    level: 'Introductorio',
    duration: '2h 00m (4 módulos)',
    lessonsCount: 4,
    description: 'Información desestigmatizada sobre pruebas diagnósticas, barreras de látex y poliuretano, VPH, PrEP/PEP para VIH y salud integral.',
    highlight: 'Hablemos de las ITS como lo que son: condiciones de salud tratables, no castigos morales.',
    badge: 'Curso gratuito',
    targetAudience: 'Cualquier persona sexualmente activa que busque protegerse y proteger a sus parejas con calma y certeza.',
    lessons: [
      {
        id: 'c5-l1',
        title: 'Desarmar el estigma: Las ITS son condiciones de salud, no juicios de valor',
        duration: '30 min',
        summary: 'Cómo la culpa y el silencio aumentan las tasas de transmisión.',
        content: [
          'Cualquier persona sexualmente activa puede contraer una infección en algún momento de su vida, exactamente igual que se contrae una gripe o una faringitis.',
          'El estigma hace que muchas personas eviten realizarse chequeos anuales por miedo o vergüenza, postergando diagnósticos sencillos y tratamientos eficaces.',
          'Hablar de salud sexual con una nueva pareja debería ser tan natural como consultar sobre alergias alimentarias.'
        ],
        reflectionQuestion: '¿Qué emociones asocias a la palabra "ITS" y cómo fueron construidas culturalmente?',
        keyTakeaway: 'El cuidado de la salud sexual es un acto de amor propio y responsabilidad comunitaria.'
      },
      {
        id: 'c5-l2',
        title: 'Métodos de barrera: Uso correcto, lubricantes y opciones',
        duration: '30 min',
        summary: 'Preservativo externo, preservativo interno, barreras de látex para sexo oral y lubricantes con base acuosa/silicona.',
        content: [
          'El preservativo no "mata la sensibilidad" si se elige la talla correcta y se utiliza una cantidad generosa de lubricante de base acuosa o silicona.',
          'Nunca deben utilizarse aceites minerales, vaselina o lociones corporales con látex, ya que degradan el material en segundos.',
          'Cómo colocarlo sin cortar el clima y convertirlo en un paso compartido del juego erótico.'
        ],
        reflectionQuestion: '¿Sabías que existe una gran variedad de grosores y materiales antialérgicos como el poliisopreno?',
        keyTakeaway: 'El lubricante es el mejor aliado de la comodidad y la seguridad.'
      },
      {
        id: 'c5-l3',
        title: 'VIH moderno: Indetectable = Intransmisible (I=I), PrEP y PEP',
        duration: '30 min',
        summary: 'La revolución biomédica que cambió el VIH para siempre.',
        content: [
          'La evidencia científica internacional más rigurosa (ONUSIDA, CDC) confirma que una persona con VIH en tratamiento antirretroviral efectivo con carga viral indetectable NO transmite el virus por vía sexual.',
          'La profilaxis preexposición (PrEP) y la profilaxis postexposición de emergencia (PEP en las primeras 72 horas) son herramientas preventivas de alta efectividad.',
          'Actualizar nuestros conocimientos derrumba mitos dolorosos nacidos en los años 80.'
        ],
        reflectionQuestion: '¿Habías escuchado antes sobre la regla científica de I=I (Indetectable = Intransmisible)?',
        keyTakeaway: 'La ciencia moderna ha transformado el VIH en una condición crónica manejable con cero transmisión cuando se mantiene indetectable.'
      },
      {
        id: 'c5-l4',
        title: 'VPH, herpes y chequeos periódicos',
        duration: '30 min',
        summary: 'Vacunación contra el virus del papiloma humano, citología, autoexamen y calma diagnóstica.',
        content: [
          'El virus del papiloma humano (VPH) es tan común que casi todas las personas activas entrarán en contacto con alguna cepa a lo largo de su vida, y en la mayoría de los casos el sistema inmune lo resuelve.',
          'La vacuna previene las cepas de alto riesgo oncológico y las verrugas genitales; los chequeos periódicos permiten actuar a tiempo sin dramatismo.',
          'Aprender a dialogar con el personal médico sin dejarse amedrentar.'
        ],
        reflectionQuestion: '¿Cuándo fue la última vez que realizaste un chequeo serológico o citológico de rutina?',
        keyTakeaway: 'Hacerse exámenes de rutina es una muestra de adultez y serenidad.'
      }
    ]
  },
  {
    id: 'diversidad-e-identidades',
    title: 'Diversidad Sexual, Género y Afectos: Un mapa de la experiencia humana',
    category: 'Diversidad sexual',
    level: 'Introductorio',
    duration: '2h 15m (3 módulos)',
    lessonsCount: 3,
    description: 'Comprende la diferencia entre sexo asignado, identidad de género, expresión de género y orientación afectiva y sexual con calidez y respeto.',
    highlight: 'Un espacio pedagógico para desterrar confusiones y abrazar la pluralidad sin prejuicios.',
    badge: 'Curso gratuito',
    targetAudience: 'Cualquier persona que quiera comprender mejor sus propias vivencias o las de amigos, familiares y colegas.',
    lessons: [
      {
        id: 'c6-l1',
        title: 'El mapa de los cuatro ejes: Sexo, género, expresión y orientación',
        duration: '45 min',
        summary: 'Claridad conceptual para no mezclar conceptos independientes.',
        content: [
          'El sexo biológico se basa en cromosomas, gónadas y hormonas (incluyendo las realidades intersexuales naturales).',
          'La identidad de género es la vivencia interna y profunda del género tal como cada persona la siente.',
          'La orientación sexual describe hacia quién o quiénes sentimos atracción afectiva o erótica (heterosexualidad, homosexualidad, bisexualidad, pansexualidad, asexualidad, etc.).',
          'La expresión de género es cómo nos mostramos al mundo a través de la vestimenta, el lenguaje corporal y la estética.'
        ],
        reflectionQuestion: '¿Cómo ha evolucionado tu comprensión de estos temas a lo largo de tus años?',
        keyTakeaway: 'Nadie encaja en una caja fija; la experiencia humana es rica y multifacética.'
      },
      {
        id: 'c6-l2',
        title: 'El espectro de la atracción y la asexualidad',
        duration: '45 min',
        summary: 'Comprender que la atracción sexual no es obligatoria para ser una persona completa.',
        content: [
          'Las personas en el espectro asexual experimentan poca o ninguna atracción sexual, pero pueden desear vínculos afectivos, romance, amistad profunda o vivir con total plenitud.',
          'Despatologizar la falta de deseo persistente cuando no causa sufrimiento personal y es parte de la identidad de la persona.',
          'Diferenciar entre atracción sexual, romántica, estética y sensual.'
        ],
        reflectionQuestion: '¿Alguna vez sentiste que la sociedad te obligaba a sentir atracción constante para ser "normal"?',
        keyTakeaway: 'La validez de un ser humano jamás depende de su frecuencia o interés erótico.'
      },
      {
        id: 'c6-l3',
        title: 'Crear entornos seguros y empáticos',
        duration: '45 min',
        summary: 'Cómo apoyar a personas trans, no binarias y de la diversidad en nuestras familias y comunidades.',
        content: [
          'Respetar los nombres y pronombres elegidos no cuesta nada y reduce de manera drástica los índices de depresión y angustia en juventudes diversas.',
          'Evitar preguntas invasivas sobre procedimientos médicos o genitales ajenos.',
          'La empatía activa construye hogares donde cada miembro puede respirar con libertad.'
        ],
        reflectionQuestion: '¿Qué acciones cotidianas puedes tomar para que las personas a tu alrededor sepan que eres un lugar seguro?',
        keyTakeaway: 'El respeto no requiere que compartas la misma vivencia; solo requiere reconocer la dignidad del otro.'
      }
    ]
  },
  {
    id: 'emociones-y-apego',
    title: 'Sexualidad y Emociones: Apego, vulnerabilidad y autocompasión',
    category: 'Sexualidad y emociones',
    level: 'Intermedio',
    duration: '2h 30m (3 módulos)',
    lessonsCount: 3,
    description: 'Explora cómo las heridas del pasado, los estilos de apego y la autoexigencia moldean la forma en que sentimos y nos relacionamos íntimamente.',
    highlight: 'Aprende a reconocer cuando el cuerpo se cierra por miedo al abandono o a la invasión.',
    badge: 'Curso gratuito',
    targetAudience: 'Personas que experimentan bloqueos emocionales, inseguridad corporal o angustia en la intimidad.',
    lessons: [
      {
        id: 'c7-l1',
        title: 'Estilos de apego en la cama y en el corazón',
        duration: '50 min',
        summary: 'Apego seguro, ansioso y evitativo manifestados en la intimidad física.',
        content: [
          'El apego ansioso suele buscar en el sexo una reconfirmación constante de afecto ("si me desea, no me abandonará"), lo que puede opacar el propio disfrute.',
          'El apego evitativo puede utilizar el sexo como un mero desahogo físico sin intimidad emocional para protegerse de la vulnerabilidad.',
          'Reconocer estos patrones nos permite comunicarnos desde la compasión y no desde la reacción automática.'
        ],
        reflectionQuestion: '¿Tiendes a buscar aprobación o a poner distancia cuando una situación íntima se vuelve muy profunda?',
        keyTakeaway: 'Nombrar tus temores de apego es el primer paso para no dejar que controlen tus encuentros.'
      },
      {
        id: 'c7-l2',
        title: 'La culpa heredada y la autocompasión corporal',
        duration: '50 min',
        summary: 'Desarmar los mandatos morales y religiosos introyectados en la infancia.',
        content: [
          'Muchas personas crecieron escuchando que la sexualidad era algo "sucio" o "peligroso", y aunque de adultos racionalmente no lo crean, su cuerpo aprendió a contraerse.',
          'Ejercicios somáticos para notar la respiración cuando surge la culpa.',
          'Reemplazar la voz del juez interno por la de un mentor comprensivo.'
        ],
        reflectionQuestion: '¿Qué mensajes recibiste en tu infancia sobre el cuerpo y cómo resuenan hoy?',
        keyTakeaway: 'Tu cuerpo es tu hogar, no un territorio de castigo o vergüenza.'
      },
      {
        id: 'c7-l3',
        title: 'Integrar ternura, juego y erotismo',
        duration: '50 min',
        summary: 'Superar la dicotomía entre el amor tierno y el deseo intenso.',
        content: [
          'El mito de que la pasión solo existe con el conflicto o la distancia.',
          'Aprender a sostener la intimidad emocional mientras se exploran fantasías y novedades con confianza.',
          'El humor y la risa como los mejores reguladores frente a imprevistos en la intimidad.'
        ],
        reflectionQuestion: '¿Puedes reírte con tu pareja en medio de una torpeza íntima sin sentir vergüenza?',
        keyTakeaway: 'La risa y la complicidad son indicadores de una intimidad sana y resiliente.'
      }
    ]
  },
  {
    id: 'sexualidad-a-lo-largo-de-la-vida',
    title: 'Sexualidad a lo Largo de la Vida: Madurez, cambios y plenitud después de los 50',
    category: 'Sexualidad a lo largo de la vida',
    level: 'Intermedio',
    duration: '1h 45m (3 módulos)',
    lessonsCount: 3,
    description: 'La sexualidad no caduca con la juventud. Descubre cómo la menopausia, la andropausia y el paso de los años pueden abrir una etapa de enorme libertad.',
    highlight: 'Derribando el edadismo erótico y redescubriendo el cuerpo maduro con dignidad y disfrute.',
    badge: 'Curso gratuito',
    targetAudience: 'Personas mayores de 45 años, parejas maduras y profesionales del acompañamiento.',
    lessons: [
      {
        id: 'c8-l1',
        title: 'Desafiando el mito de la asexualidad en la vejez',
        duration: '35 min',
        summary: 'Por qué la cultura asocia erróneamente juventud con la única forma válida de erotismo.',
        content: [
          'Los estudios sociológicos demuestran que el interés por el afecto, la piel y el placer continúa a lo largo de toda la vida adulta.',
          'Liberarse de los imperativos de la reproducción y de la aprobación externa otorga con frecuencia a las personas maduras una soltura y autenticidad que no tenían a los 20.',
          'El derecho al placer como parte indiscutible del envejecimiento saludable.'
        ],
        reflectionQuestion: '¿Qué modelos positivos de sexualidad madura has visto en tu entorno?',
        keyTakeaway: 'El deseo cambia de forma y de ritmo, pero no se extingue por cumplir años.'
      },
      {
        id: 'c8-l2',
        title: 'Adaptaciones fisiológicas: Menopausia, sequedad y lubricación',
        duration: '35 min',
        summary: 'Soluciones prácticas médicas y naturales para el bienestar genital femenino maduro.',
        content: [
          'La disminución de estrógenos puede provocar adelgazamiento del epitelio vaginal y sequedad, pero existen humectantes diarios de ácido hialurónico, terapias locales y lubricantes específicos.',
          'El clítoris no pierde su inervación con la edad; lo que suele requerir es estímulos más prolongados, pacientes y suaves.',
          'Consultar a ginecólogos actualizados sin resignarse al dolor o la incomodidad.'
        ],
        reflectionQuestion: '¿Sabías que el dolor durante las relaciones nunca debe ser aceptado como algo "normal"?',
        keyTakeaway: 'Existen múltiples soluciones seguras para que la madurez sea una etapa libre de molestias físicas.'
      },
      {
        id: 'c8-l3',
        title: 'Andropausia, cambios en la erección y nuevo erotismo masculino',
        duration: '35 min',
        summary: 'Comprender que una erección más lenta no es el fin del placer ni de la masculinidad.',
        content: [
          'Con los años, el periodo refractario se alarga y la rigidez puede variar según la salud cardiovascular, la medicación y el descanso.',
          'Ampliar el erotismo más allá de la penetración quita una carga gigantesca a los varones y abre caminos de caricias mucho más ricos.',
          'Diálogo abierto en la pareja madura para sincronizar expectativas con serenidad.'
        ],
        reflectionQuestion: '¿Cómo influye la presión social sobre la virilidad en el bienestar de los hombres mayores?',
        keyTakeaway: 'Redefinir la intimidad más allá de la mecánica permite disfrutar de una conexión más profunda.'
      }
    ]
  },
  {
    id: 'mitos-y-realidades-populares',
    title: 'Mitos y Realidades: Lo que aprendimos mal sobre la sexualidad',
    category: 'Mitos y realidades',
    level: 'Introductorio',
    duration: '1h 30m (3 módulos)',
    lessonsCount: 3,
    description: 'Un recorrido ameno y fundamentado por las creencias falsas más comunes que nos han transmitido el cine, los rumores de patio y la desinformación.',
    highlight: 'Respuestas claras basadas en sexología científica contemporánea explicadas con sencillez.',
    badge: 'Curso gratuito',
    targetAudience: 'Cualquier persona que quiera contrastar lo que siempre le dijeron con lo que dice la ciencia.',
    lessons: [
      {
        id: 'c9-l1',
        title: 'Mitos sobre el tamaño, la virginidad y el himen',
        duration: '30 min',
        summary: 'Desmontando construcciones patriarcales sobre el cuerpo.',
        content: [
          'El himen no es un precinto de garantía ni una membrana cerrada; es un repliegue elástico con aperturas naturales que puede estirarse con el deporte, tampones o simplemente nacer con formas diversas.',
          'El tamaño del pene no guarda relación directa con la satisfacción sexual femenina, ya que la mayor concentración de terminaciones nerviosas se encuentra en los primeros centímetros externos de la vulva y clítoris.',
          'La virginidad es un concepto sociocultural e ideológico, no un marcador biológico verificable.'
        ],
        reflectionQuestion: '¿Cuánto sufrimiento innecesario han causado estas falsas creencias en tu historia o en la de tus conocidos?',
        keyTakeaway: 'La anatomía real derriba siglos de control y mitología sobre el cuerpo de las personas.'
      },
      {
        id: 'c9-l2',
        title: 'Mitos sobre el deseo: "Los hombres siempre quieren, las mujeres no"',
        duration: '30 min',
        summary: 'Cómo los estereotipos de género perjudican a todas las partes.',
        content: [
          'Los hombres sienten cansancio, ansiedad, tristeza y fluctuaciones hormonales que inhiben el deseo, pero la presión de "estar siempre listos" los lleva a fingir o callar.',
          'Las mujeres tienen una capacidad inmensa de placer y fantasía, históricamente censurada por el miedo a ser juzgadas o catalogadas.',
          'Ambos géneros comparten la misma arquitectura cerebral del deseo con variaciones individuales únicas.'
        ],
        reflectionQuestion: '¿Has sentido alguna vez la obligación de fingir ganas para cumplir con un rol esperado?',
        keyTakeaway: 'El deseo no tiene género; tiene contexto, seguridad y descanso.'
      },
      {
        id: 'c9-l3',
        title: 'Pornografía vs. Realidad: Diferenciando ficción de encuentros reales',
        duration: '30 min',
        summary: 'La pornografía comercial como entretenimiento con efectos especiales, no como manual de instrucciones.',
        content: [
          'Al igual que una película de superhéroes no enseña física real, el cine para adultos comercial exagera posturas, omite la lubricación, el consentimiento explícito y la preparación previa.',
          'Comparar el propio cuerpo con actores editados genera dismorfia y frustración.',
          'Desarrollar una mirada crítica nos permite disfrutar de la intimidad real, con sus pausas, torpezas y ternura.'
        ],
        reflectionQuestion: '¿Qué expectativas irreales has notado en ti o en tus parejas aprendidas de la pantalla?',
        keyTakeaway: 'Los cuerpos reales son imperfectos, cálidos, diversos y mucho más interesantes que cualquier guion.'
      }
    ]
  }
];
