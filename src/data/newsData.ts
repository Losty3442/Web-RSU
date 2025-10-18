export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  day: string;
  month: string;
  views: string;
  image: string;
  content: string;
  gallery: string[];
  category?: string;
  author?: string;
}

export const newsData: NewsItem[] = [
  {
    id: 2762,
    title: "DRSU y Defensa Civil organizaron \"Seminario de Gestión Reactiva del Riesgo de Desastre\"",
    excerpt: "Importante seminario que reúne a expertos en gestión de riesgos y defensa civil para capacitar a la comunidad universitaria en protocolos de emergencia.",
    date: "04 Oct 2025",
    day: "04",
    month: "OCT",
    views: "1,245",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/10/Foto_05-edited.jpg",
    category: "capacitacion",
    author: "DRSU",
    content: `
      <p>La Dirección de Responsabilidad Social Universitaria (DRSU) junto a Defensa Civil llevaron a cabo el seminario "Gestión Reactiva del Riesgo de Desastres", evento que congregó a estudiantes, docentes y personal administrativo de la Universidad Nacional de Piura.</p>
      
      <p>Durante la jornada, expertos en gestión de emergencias compartieron conocimientos fundamentales sobre protocolos de actuación ante situaciones de riesgo, enfatizando la importancia de la preparación y la respuesta coordinada.</p>
      
      <h2>Objetivos del Seminario</h2>
      
      <p>El evento tuvo como principales objetivos fortalecer las capacidades de respuesta de la comunidad universitaria y establecer lineamientos claros de actuación en caso de emergencias.</p>
      
      <ul>
        <li>Fortalecer las capacidades de la comunidad universitaria en gestión de riesgos</li>
        <li>Promover la cultura de prevención y preparación ante desastres</li>
        <li>Establecer protocolos de acción en situaciones de emergencia</li>
        <li>Crear redes de apoyo interinstitucional</li>
      </ul>
      
      <blockquote>
        "La preparación es la clave para minimizar el impacto de los desastres naturales en nuestra comunidad universitaria" - Dra. Sara Chunga Palomino
      </blockquote>
      
      <p>Los participantes destacaron la importancia de este tipo de capacitaciones para estar preparados ante cualquier eventualidad y proteger a la comunidad universitaria.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/10/Foto_05-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/10/Foto_02-1-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/10/Foto_03-1-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/10/Foto_01-1-edited.jpg"
    ]
  },
  {
    id: 2716,
    title: "DRSU y Gore unirán esfuerzos por el agua potable en zonas rurales",
    excerpt: "Alianza estratégica para llevar agua potable a comunidades rurales de la región Piura, beneficiando a miles de familias.",
    date: "03 Oct 2025",
    day: "03",
    month: "OCT",
    views: "987",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/10/Foto_03-800x533.jpg",
    category: "alianzas",
    author: "DRSU",
    content: `
      <p>La DRSU de la Universidad Nacional de Piura firmó un importante convenio con el Gobierno Regional para desarrollar proyectos de acceso al agua potable en zonas rurales de la región.</p>
      
      <p>Esta iniciativa busca garantizar el derecho fundamental al agua de comunidades que históricamente han carecido de este servicio básico, mejorando significativamente su calidad de vida.</p>
      
      <h2>Impacto en la Comunidad</h2>
      
      <p>Se estima que más de 5,000 familias serán beneficiadas directamente con la implementación de sistemas de agua potable sostenibles y de bajo costo.</p>
      
      <p>El proyecto incluye capacitación a las comunidades en mantenimiento de sistemas de agua y gestión sostenible del recurso hídrico.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/10/Foto_03-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/10/Foto_01-800x533.jpg"
    ]
  },
  {
    id: 2650,
    title: "DRSU UNP camina contra la Trata de Personas",
    excerpt: "Caminata de concientización que reunió a cientos de estudiantes y docentes en contra de la trata de personas y la explotación.",
    date: "26 Sep 2025",
    day: "26",
    month: "SEP",
    views: "1,532",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_07-800x533.jpg",
    category: "eventos",
    author: "DRSU",
    content: `
      <p>La comunidad universitaria de la UNP se movilizó en una masiva caminata de concientización contra la trata de personas, encabezada por la DRSU y organizaciones de derechos humanos.</p>
      
      <h2>Compromiso Social</h2>
      
      <p>El evento contó con charlas informativas sobre prevención, identificación de situaciones de riesgo y rutas de denuncia para combatir este flagelo social.</p>
      
      <p>Se distribuyeron más de 2,000 folletos informativos y se realizaron activaciones en redes sociales para amplificar el mensaje de prevención.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_07-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_01-2-800x533.jpg"
    ]
  },
  {
    id: 2592,
    title: "Ciclo de Conferencias RSU: Proyectos que transforman la sociedad",
    excerpt: "Destacados ponentes nacionales e internacionales compartieron experiencias exitosas de responsabilidad social universitaria.",
    date: "22 Sep 2025",
    day: "22",
    month: "SEP",
    views: "2,103",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_01_Ciclo-edited.jpg",
    category: "eventos",
    author: "DRSU",
    content: `
      <p>El Ciclo de Conferencias RSU reunió a expertos de diversas universidades latinoamericanas para compartir proyectos innovadores que están generando impacto social positivo.</p>
      
      <p>Las presentaciones abarcaron temas de sostenibilidad ambiental, inclusión social, desarrollo comunitario y emprendimiento social.</p>
      
      <h2>Proyectos Destacados</h2>
      
      <ol>
        <li>Proyecto de agua potable en comunidades rurales</li>
        <li>Programa de alfabetización digital para adultos mayores</li>
        <li>Iniciativa de huertos urbanos sostenibles</li>
        <li>Red de apoyo psicológico comunitario</li>
      </ol>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_01_Ciclo-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/004_Agronomia-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/013_Civil-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/001_Pesqueria-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/002_Derecho-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/015_Educacion-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/019_Administracion-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/017_Arquitectura-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/027_Minas-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/028_Contabilidad-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/031_Economia-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/036_Ciencias-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/054_Ciencias-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/058_Zootecnia-edited.jpeg"
    ]
  },
  {
    id: 2623,
    title: "¡Formación integral para voluntarios: ¡lenguaje de señas, seguridad y más!",
    excerpt: "Programa de capacitación integral que prepara a voluntarios en múltiples áreas de servicio comunitario.",
    date: "18 Sep 2025",
    day: "18",
    month: "SEP",
    views: "1,876",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_01_Voluntarios-edited.jpg",
    category: "voluntariado",
    author: "DRSU",
    content: `
      <p>La DRSU lanzó un ambicioso programa de capacitación para voluntarios que incluye formación en lengua de señas, primeros auxilios, seguridad y atención a poblaciones vulnerables.</p>
      
      <p>Más de 150 estudiantes se inscribieron en los talleres, demostrando el compromiso de la juventud universitaria con el servicio a la comunidad.</p>
      
      <h2>Áreas de Capacitación</h2>
      
      <p>Los voluntarios reciben certificación en diversas áreas que les permiten brindar un servicio de calidad y profesional a quienes más lo necesitan.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_01_Voluntarios-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_02_Voluntarios-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_04_Voluntarios-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_05_Voluntarios-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_Gore-965x611.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_03_Voluntarios-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_OSST-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_07_Voluntarios-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_09_Voluntarios-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_08_Voluntarios-edited.jpg"
    ]
  },
  {
    id: 2583,
    title: "¡Proyectos, alegría y compromiso en la Feria RSU!",
    excerpt: "La Feria de Responsabilidad Social Universitaria mostró los mejores proyectos estudiantiles de impacto social.",
    date: "15 Sep 2025",
    day: "15",
    month: "SEP",
    views: "2,456",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_05_Feria-RSU-edited.jpg",
    category: "eventos",
    author: "DRSU",
    content: `
      <p>La Feria RSU se consolidó como el espacio principal para visibilizar los proyectos sociales desarrollados por estudiantes de todas las facultades.</p>
      
      <p>Durante dos días, el campus universitario se llenó de stands, presentaciones y actividades interactivas que mostraron el talento y compromiso social de los futuros profesionales.</p>
      
      <h2>Proyectos Presentados</h2>
      
      <p>Más de 40 proyectos fueron presentados, abarcando temáticas de educación, salud, medio ambiente, tecnología social y desarrollo comunitario.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_05_Feria-RSU-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_03_Feria-RSU-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_04_Feria-RSU-edited.jpg"
    ]
  },
  {
    id: 2572,
    title: "¡Así se vivió nuestro II Encuentro de RS!",
    excerpt: "Segundo encuentro regional de responsabilidad social universitaria que reunió a 15 instituciones de educación superior.",
    date: "10 Sep 2025",
    day: "10",
    month: "SEP",
    views: "1,654",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_03_Encuentro_RSU-800x533.jpg",
    category: "eventos",
    author: "DRSU",
    content: `
      <p>El II Encuentro RSU fue un espacio de diálogo, aprendizaje y construcción de redes entre universidades comprometidas con la responsabilidad social.</p>
      
      <p>Delegaciones de universidades del norte del Perú compartieron experiencias, desafíos y buenas prácticas en la gestión de programas de RSU.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_03_Encuentro_RSU-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_04_Encuentro_RSU-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_05_Encuentro_RSU-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_07_Encuentro_RSU-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_08_Encuentro_RSU-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_13_Encuentro_RSU-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_12_Encuentro_RSU-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_14_Encuentro_RSU-800x533.jpg"
    ]
  },
  {
    id: 2567,
    title: "Directora DRSU participó del \"II Encuentro Regional de Municipios, Ciudades y Comunidades Saludables\"",
    excerpt: "Participación destacada en evento regional sobre promoción de entornos saludables y prevención de enfermedades.",
    date: "05 Sep 2025",
    day: "05",
    month: "SEP",
    views: "1,321",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_04_Encuentro_Regional-800x533.jpg",
    category: "salud",
    author: "DRSU",
    content: `
      <p>La directora de la DRSU representó a la universidad en el encuentro regional que abordó estrategias para promover estilos de vida saludables en comunidades urbanas y rurales.</p>
      
      <p>El evento contó con la participación de autoridades municipales, organizaciones de salud y representantes de la sociedad civil.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_04_Encuentro_Regional-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_01_Encuentro_Regional-800x533.jpg"
    ]
  },
  {
    id: 2561,
    title: "DRSU anuncia \"Semana RSU\" en conferencia de prensa",
    excerpt: "Lanzamiento oficial de la Semana de la Responsabilidad Social Universitaria con actividades para toda la comunidad.",
    date: "01 Sep 2025",
    day: "01",
    month: "SEP",
    views: "1,987",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_01_Conferencia-801x535.jpg",
    category: "eventos",
    author: "DRSU",
    content: `
      <p>En conferencia de prensa, la DRSU presentó la programación completa de la Semana RSU, que incluirá conferencias, talleres, ferias y actividades de voluntariado.</p>
      
      <p>El evento promete ser el más grande del año en términos de participación estudiantil y proyección comunitaria.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_01_Conferencia-801x535.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_03_Conferencia-801x535.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_04_Conferencia-801x535.jpg"
    ]
  },
  {
    id: 2548,
    title: "DRSU Y Docentes UNP participaron en el X ENARSU en Chachapoyas",
    excerpt: "Programa integral de promoción de la salud física, mental y emocional en la comunidad universitaria.",
    date: "28 Ago 2025",
    day: "28",
    month: "AGO",
    views: "2,234",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_01-1-800x533.jpg",
    category: "salud",
    author: "DRSU",
    content: `
      <p>La iniciativa Universidad Saludable busca crear un entorno que promueva hábitos de vida saludables entre estudiantes, docentes y trabajadores administrativos.</p>
      
      <p>El programa incluye actividades deportivas, talleres de nutrición, servicios de consejería psicológica y espacios de recreación.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_01-1-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_02-1-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_03-800x533.jpg"
    ]
  },
  {
    id: 2542,
    title: "Primera reunión de coordinación con nueva directora DRSU",
    excerpt: "Alianza estratégica con organización internacional potenciará iniciativas ambientales en la región.",
    date: "25 Ago 2025",
    day: "25",
    month: "AGO",
    views: "1,567",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_02-800x533.jpg",
    category: "alianzas",
    author: "DRSU",
    content: `<p>La DRSU firmó un importante convenio con una ONG internacional especializada en sostenibilidad ambiental, que permitirá implementar proyectos de conservación y educación ambiental en comunidades de la región Piura.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_02-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/Foto_01-800x533.jpg"
    ]
  },
  {
    id: 2534,
    title: "Semana RSU 2025",
    excerpt: "Más de 200 voluntarios se sumaron a la campaña de limpieza de playas del litoral piurano.",
    date: "20 Ago 2025",
    day: "20",
    month: "AGO",
    views: "1,789",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/09/POR-DIA-SEMANA-RSU_Mesa-de-trabajo-1-1024x1024.png",
    category: "voluntariado",
    author: "DRSU",
    content: `<p>Voluntarios de la DRSU participaron en una masiva jornada de limpieza de playas, recolectando más de 2 toneladas de residuos y promoviendo la conciencia ambiental en la población.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/09/POR-DIA-SEMANA-RSU_Mesa-de-trabajo-1-1024x1024.png",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/POR-DIA-SEMANA-RSU-02-1024x1024.png",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/POR-DIA-SEMANA-RSU-03-1024x1024.png",
      "https://rsu.webunp.online/wp-content/uploads/2025/09/POR-DIA-SEMANA-RSU-04-1024x1024.png"
    ]
  },
  {
    id: 2526,
    title: "DRSU-UNP y GORE PIURA articulan esfuerzos en favor de la población vulnerable.",
    excerpt: "Formación especializada en atención de emergencias para miembros de brigadas universitarias.",
    date: "15 Ago 2025",
    day: "15",
    month: "AGO",
    views: "1,432",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/08/Foto_01-2-edited.jpg",
    category: "capacitacion",
    author: "DRSU",
    content: `<p>Las brigadas voluntarias de la UNP recibieron capacitación intensiva en primeros auxilios, RCP y manejo de emergencias, certificada por profesionales de salud.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/08/Foto_01-2-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/08/Foto_02-2-edited.jpg"
    ]
  },
  {
    id: 2519,
    title: "Estudiantes de Educación Primaria desarrollan actividades de Responsabilidad Social Universitaria",
    excerpt: "Innovadora aplicación móvil facilita la conexión entre voluntarios y organizaciones sociales.",
    date: "10 Ago 2025",
    day: "10",
    month: "AGO",
    views: "2,145",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/08/Foto_03-1-edited.jpg",
    category: "tecnologia",
    author: "DRSU",
    content: `<p>Estudiantes de Ingeniería de Sistemas desarrollaron una aplicación móvil que permite a voluntarios encontrar y participar en proyectos sociales de manera sencilla y eficiente.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/08/Foto_03-1-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/08/Foto_02-1-edited.jpg"
    ]
  },
  {
    id: 2510,
    title: "DRSU-UNP modernizará su gestión con nuevo sistema «Enchúfate»",
    excerpt: "Premio regional destaca el trabajo de la DRSU en promoción de la educación inclusiva.",
    date: "05 Ago 2025",
    day: "05",
    month: "AGO",
    views: "1,876",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/08/Foto_02-edited.jpeg",
    category: "reconocimientos",
    author: "DRSU",
    content: `<p>La DRSU fue reconocida por el Gobierno Regional por su destacado trabajo en la promoción de la educación inclusiva y el acceso a la educación superior de poblaciones vulnerables.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/08/Foto_02-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/08/Foto_01-1-edited.jpeg"
    ]
  },
  {
    id: 2504,
    title: "Voluntarios DRSU comprometidos con el cambio social",
    excerpt: "Programa de capacitación en agricultura urbana para la seguridad alimentaria familiar.",
    date: "01 Ago 2025",
    day: "01",
    month: "AGO",
    views: "1,543",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/08/Foto_01-800x533.jpg",
    category: "capacitacion",
    author: "DRSU",
    content: `<p>La DRSU implementó talleres de huertos urbanos en comunidades periurbanas, enseñando técnicas de cultivo sostenible que mejoran la alimentación familiar y generan ingresos.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/08/Foto_01-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/08/Foto_05-1-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/08/Foto_02-800x533.jpg"
    ]
  },
  {
    id: 2498,
    title: "Docentes de la Facultad de Ciencias Sociales y Educación participarán en proyecto RSU en Narihualá",
    excerpt: "Estudiantes destacados se convierten en mentores de jóvenes en situación de vulnerabilidad.",
    date: "28 Jul 2025",
    day: "28",
    month: "JUL",
    views: "1,298",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/08/Foto_03-800x533.jpg",
    category: "educacion",
    author: "DRSU",
    content: `<p>El programa de mentoría académica conecta a estudiantes universitarios destacados con jóvenes de escasos recursos, brindándoles apoyo en su formación y desarrollo personal.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/08/Foto_03-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/08/Foto_05-800x533.jpg"
    ]
  },
  {
    id: 2491,
    title: "Participa en el X ENARSU",
    excerpt: "Celebración multicultural que visibiliza la riqueza de la diversidad en nuestra comunidad.",
    date: "22 Jul 2025",
    day: "22",
    month: "JUL",
    views: "2,087",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/08/Flyer_UNP_General_X_ENARSU-691x868.jpg",
    category: "eventos",
    author: "DRSU",
    content: `<p>El Festival de la Diversidad reunió expresiones culturales de diferentes regiones del país, promoviendo el respeto y la valoración de la diversidad cultural en la universidad.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/08/Flyer_UNP_General_X_ENARSU-691x868.jpg"
    ]
  },
  {
    id: 2463,
    title: "DRSU-UNP en el Foro Taller \"Aportes para el abordaje de la problemática de los Residuos Sólidos\"",
    excerpt: "Solidaridad universitaria logra recolectar más de 300 unidades de sangre para hospitales regionales.",
    date: "18 Jul 2025",
    day: "18",
    month: "JUL",
    views: "1,765",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/07/Foto_01-800x533.jpg",
    category: "salud",
    author: "DRSU",
    content: `<p>La campaña anual de donación de sangre organizada por la DRSU superó todas las expectativas, recolectando 320 unidades que salvarán vidas en hospitales de la región.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/07/Foto_01-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/07/Foto_05-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/07/Foto_03-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/07/Foto_Roxana-477x468.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/07/foto_Jessy-1-826x602.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/07/Foto_Apu-522x529.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/07/Foto_Saavedra-531x527.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/07/Foto_Andy_sechura-588x575.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/07/Foto_Gregoria-560x495.jpg"
    ]
  },
  {
    id: 2448,
    title: "DRSU en los 50 años del Coto de Caza El Angolo",
    excerpt: "Biblioteca móvil lleva libros y programas de lectura a comunidades alejadas.",
    date: "12 Jul 2025",
    day: "12",
    month: "JUL",
    views: "1,432",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_01-3-800x533.jpg",
    category: "educacion",
    author: "DRSU",
    content: `<p>La biblioteca comunitaria móvil recorre comunidades rurales llevando el mundo de la lectura a niños que no tienen acceso a libros, fomentando el amor por el aprendizaje.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_01-3-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_Alcalde-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_Aldo-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_Tovar-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_03-2-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_04-1-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_Marco-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_05-800x533.jpg"
    ]
  },
  {
    id: 2439,
    title: "DRSU participó en conferencia de prensa sobre problemática de residuos sólidos",
    excerpt: "Capacitación en emprendimiento empodera a mujeres de comunidades campesinas.",
    date: "08 Jul 2025",
    day: "08",
    month: "JUL",
    views: "1,654",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_Principal-2-800x533.jpg",
    category: "capacitacion",
    author: "DRSU",
    content: `<p>Mujeres rurales participaron en talleres de emprendimiento social, aprendiendo herramientas para desarrollar negocios sostenibles que mejoren sus condiciones de vida.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_Principal-2-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_04-800x533.jpg"
    ]
  },
  {
    id: 2432,
    title: "Niños del INABIF disfrutaron de evento artístico en la UNP",
    excerpt: "Innovación tecnológica al servicio de pequeños agricultores de la región.",
    date: "03 Jul 2025",
    day: "03",
    month: "JUL",
    views: "1,987",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_02-800x533.jpg",
    category: "tecnologia",
    author: "DRSU",
    content: `<p>Estudiantes de Ingeniería Agrícola diseñaron un sistema de riego tecnificado accesible para pequeños agricultores, optimizando el uso del agua y aumentando la productividad.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_02-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_01-2-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_03-800x533.jpg"
    ]
  },
  {
    id: 2428,
    title: "Directores URSU reciben avances de proyecto RSU en Narihualá",
    excerpt: "Adultos mayores aprenden a usar tecnología para mantenerse conectados con sus familias.",
    date: "28 Jun 2025",
    day: "28",
    month: "JUN",
    views: "1,543",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_01-1-800x533.jpg",
    category: "educacion",
    author: "DRSU",
    content: `<p>El programa de alfabetización digital enseña a adultos mayores a usar smartphones, redes sociales y aplicaciones de comunicación, reduciendo la brecha digital generacional.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_01-1-800x533.jpg"
    ]
  },
  {
    id: 2424,
    title: "Estrechando vínculos académicos",
    excerpt: "Talleres interactivos promueven la convivencia pacífica en escuelas de Piura.",
    date: "22 Jun 2025",
    day: "22",
    month: "JUN",
    views: "2,234",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_01-800x533.jpg",
    category: "educacion",
    author: "DRSU",
    content: `<p>Voluntarios de la DRSU visitaron colegios de la región para realizar talleres de prevención del bullying, promoviendo el respeto y la empatía entre estudiantes.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_01-800x533.jpg"
    ]
  },
  {
    id: 2420,
    title: "Personal DRSU recibe atenciones médicas de la OCSST UNP",
    excerpt: "Servicio gratuito de apoyo emocional para la comunidad universitaria.",
    date: "18 Jun 2025",
    day: "18",
    month: "JUN",
    views: "1,876",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/06/001_Consulta_Psicologico-800x533.jpg",
    category: "salud",
    author: "DRSU",
    content: `<p>La DRSU lanzó una red de apoyo psicológico que brinda atención gratuita a estudiantes que enfrentan dificultades emocionales, promoviendo la salud mental en la universidad.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/06/001_Consulta_Psicologico-800x533.jpg"
    ]
  },
  {
    id: 2414,
    title: "DRSU presente en desfile de Aniversario de la Fac. de Ciencias Administrativas",
    excerpt: "Iniciativa creativa transforma materiales reciclados en obras artísticas.",
    date: "12 Jun 2025",
    day: "12",
    month: "JUN",
    views: "1,432",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/05/Foto_01-1024x1024.jpeg",
    category: "arte",
    author: "DRSU",
    content: `<p>Estudiantes de Arte y Diseño crearon una exposición con obras elaboradas completamente con materiales reciclados, promoviendo la economía circular y la conciencia ambiental.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/05/Foto_01-1024x1024.jpeg"
    ]
  },
  {
    id: 2407,
    title: "DRSU y Municipalidad de Piura avanzan en coordinaciones para Cruzada Verde",
    excerpt: "Jornada de trabajo comunitario embellece parques y áreas recreativas.",
    date: "08 Jun 2025",
    day: "08",
    month: "JUN",
    views: "1,654",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/05/Foto_02-1-800x533.jpeg",
    category: "voluntariado",
    author: "DRSU",
    content: `<p>Más de 100 voluntarios participaron en la restauración de espacios públicos en comunidades de escasos recursos, pintando paredes, plantando árboles y creando áreas de juego para niños.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/05/Foto_02-1-800x533.jpeg"
    ]
  },
  {
    id: 2402,
    title: "Presentan Proyectos Narihualá Y Cruzada Verde a Directores URSU de la UNP",
    excerpt: "Expertos internacionales debaten sobre el cumplimiento de la Agenda 2030.",
    date: "03 Jun 2025",
    day: "03",
    month: "JUN",
    views: "2,103",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/05/Foto_02-800x533.jpg",
    category: "eventos",
    author: "DRSU",
    content: `<p>El seminario internacional sobre ODS reunió a expertos de América Latina para analizar avances, desafíos y estrategias en el cumplimiento de los Objetivos de Desarrollo Sostenible.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/05/Foto_02-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/05/Foto_01-800x533.jpg"
    ]
  },
  {
    id: 2389,
    title: "DRSU registra a 137 nuevos voluntarios en campaña de activación",
    excerpt: "Apoyo económico y académico para jóvenes de comunidades nativas.",
    date: "28 May 2025",
    day: "28",
    month: "MAY",
    views: "1,765",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/05/Foto_General-edited.jpeg",
    category: "educacion",
    author: "DRSU",
    content: `<p>La universidad lanzó un programa de becas integrales para estudiantes de comunidades indígenas, garantizando su acceso y permanencia en la educación superior.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/05/Foto_General-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/05/Foto_05_av-edited-scaled.jpeg"
    ]
  },
  {
    id: 2345,
    title: "\"Trabajaremos incansablemente para convertir la UNP en un pulmón verde\"",
    excerpt: "Proyectos innovadores abordan desafíos sociales con creatividad y tecnología.",
    date: "22 May 2025",
    day: "22",
    month: "MAY",
    views: "1,987",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/04/Ponente_01-edited.jpeg",
    category: "eventos",
    author: "DRSU",
    content: `<p>La Feria de Innovación Social showcaseó proyectos estudiantiles que ofrecen soluciones creativas a problemas de salud, educación, ambiente y desarrollo comunitario en la región.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/04/Ponente_01-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/04/Ponente_02-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/04/Ponnete_03-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-23-at-10.06.02-2-edited-1.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/04/sernanp-01-edited.jpg"
    ]
  },
  {
    id: 2338,
    title: "DRSU presenta proyectos y actividades 2025 a directores URSU de la UNP",
    excerpt: "Acción ambiental masiva contribuye a la recuperación de ecosistemas.",
    date: "18 May 2025",
    day: "18",
    month: "MAY",
    views: "2,456",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/04/Foto_02-800x533.jpg",
    category: "ambiente",
    author: "DRSU",
    content: `<p>Voluntarios, estudiantes y comunidades locales se unieron para plantar 5,000 árboles nativos en zonas degradadas, contribuyendo a la restauración ecológica de la región.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/04/Foto_02-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/04/Narihuala-1-1024x1024.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/04/Flyer_Cruzada_Verde-2025-1024x1024.jpeg"
    ]
  },
  {
    id: 2331,
    title: "La Hora del Planeta 2025",
    excerpt: "Formación de líderes comunitarios comprometidos con el cambio social.",
    date: "12 May 2025",
    day: "12",
    month: "MAY",
    views: "1,543",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/03/La-Hora-del-Planeta-DRSU-UNP-1024x1024.jpeg",
    category: "capacitacion",
    author: "DRSU",
    content: `<p>Jóvenes de barrios periféricos participaron en talleres de liderazgo que los preparan para convertirse en agentes de cambio en sus comunidades.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/03/La-Hora-del-Planeta-DRSU-UNP-1024x1024.jpeg"
    ]
  },
  {
    id: 2325,
    title: "Trabajadores de la 𝐃𝐑𝐒𝐔 reciben capacitación 𝐞𝐧 𝐮𝐬𝐨 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨 𝐲 𝐦𝐚𝐧𝐞𝐣𝐨 𝐝𝐞 𝐞𝐱𝐭𝐢𝐧𝐭𝐨𝐫𝐞𝐬",
    excerpt: "Tecnología sostenible lleva electricidad a zona sin acceso a red eléctrica.",
    date: "08 May 2025",
    day: "08",
    month: "MAY",
    views: "1,876",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/03/Foto_01-edited.jpg",
    category: "tecnologia",
    author: "DRSU",
    content: `<p>Estudiantes de Ingeniería implementaron un sistema de energía solar que proporciona electricidad a una comunidad rural que nunca había tenido acceso a este servicio básico.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/03/Foto_01-edited.jpg"
    ]
  },
  {
    id: 2314,
    title: "Director DRSU presenta proyecto multidisciplinario a especialistas UNP",
    excerpt: "Iniciativa solidaria garantiza alimentación nutritiva para familias vulnerables.",
    date: "03 May 2025",
    day: "03",
    month: "MAY",
    views: "1,654",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/03/Foto_02-edited.jpeg",
    category: "alimentacion",
    author: "DRSU",
    content: `<p>La DRSU apoya la creación de una red de comedores comunitarios que brindan alimentación nutritiva a familias en situación de vulnerabilidad, mejorando su calidad de vida.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/03/Foto_02-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/03/Foto_03-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/03/Foto_05-edited.jpeg"
    ]
  },
  {
    id: 2291,
    title: "¡Capacitándonos para nuestros proyectos 2025!",
    excerpt: "Tecnología conecta artesanos con mercados nacionales e internacionales.",
    date: "28 Abr 2025",
    day: "28",
    month: "ABR",
    views: "2,087",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/03/Fundamentos_01-edited.jpeg",
    category: "tecnologia",
    author: "DRSU",
    content: `<p>Una plataforma digital desarrollada por estudiantes permite a artesanos locales vender sus productos en línea, accediendo a nuevos mercados y mejorando sus ingresos.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/03/Fundamentos_01-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2025/03/Voluntariado_01-edited.jpeg"
    ]
  },
  {
    id: 2278,
    title: "Fortalecen Convenio Interinstitucional para el Desarrollo de Capacidades en Gobiernos Locales",
    excerpt: "Actividades deportivas adaptadas promueven la inclusión y el bienestar.",
    date: "22 Abr 2025",
    day: "22",
    month: "ABR",
    views: "1,432",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/02/Foto_04-edited.jpg",
    category: "inclusion",
    author: "DRSU",
    content: `<p>El programa de deporte inclusivo ofrece actividades físicas adaptadas para personas con discapacidad, promoviendo la integración social y el desarrollo de habilidades.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/02/Foto_04-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/02/Foto_03-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/02/Foto_02-edited.jpg"
    ]
  },
  {
    id: 2270,
    title: "Coordinaciones para el Proyecto RSU en Narihualá",
    excerpt: "Brigadas médicas ofrecen atención gratuita en zonas rurales.",
    date: "18 Abr 2025",
    day: "18",
    month: "ABR",
    views: "1,765",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/02/Foto03_GGAMMP-DRSU-edited.jpg",
    category: "salud",
    author: "DRSU",
    content: `<p>Brigadas médicas conformadas por estudiantes y profesionales de la salud visitaron comunidades alejadas para ofrecer atención preventiva gratuita y educación en salud.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/02/Foto03_GGAMMP-DRSU-edited.jpg"
    ]
  },
  {
    id: 2262,
    title: "DRSU realizará Cruzada Verde para recuperar de áreas verdes de la UNP",
    excerpt: "Expresión artística como herramienta de reinserción social.",
    date: "12 Abr 2025",
    day: "12",
    month: "ABR",
    views: "1,543",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/02/Foto03_GGAMMP-DRSU-edited.jpg",
    category: "arte",
    author: "DRSU",
    content: `<p>Talleres de música y arte brindan a niños en situación de calle un espacio seguro para expresarse creativamente y desarrollar habilidades que faciliten su reinserción social.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/02/Foto03_GGAMMP-DRSU-edited.jpg"
    ]
  },
  {
    id: 2257,
    title: "UNP inicia coordinaciones para el X ENARSU",
    excerpt: "Arquitectura sostenible ofrece soluciones habitacionales dignas.",
    date: "08 Abr 2025",
    day: "08",
    month: "ABR",
    views: "2,234",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/02/Foto_03-ENARSU01-edited.jpg",
    category: "vivienda",
    author: "DRSU",
    content: `<p>Estudiantes de Arquitectura diseñaron y construyeron viviendas sostenibles de bajo costo para familias afectadas por desastres naturales, utilizando materiales locales y técnicas ecológicas.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/02/Foto_03-ENARSU01-edited.jpg"
    ]
  },
  {
    id: 2244,
    title: "IX ENARSU &#8211; Dimensión Económica",
    excerpt: "Diálogo intergeneracional preserva conocimientos tradicionales.",
    date: "03 Abr 2025",
    day: "03",
    month: "ABR",
    views: "1,654",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/01/007_Dim_Economica_02-edited.jpg",
    category: "cultura",
    author: "DRSU",
    content: `<p>La red de intercambio de saberes conecta a adultos mayores portadores de conocimientos ancestrales con jóvenes interesados en preservar y valorar estas tradiciones.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/01/007_Dim_Economica_02-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/01/006_Dim_Economica_01-edited.jpg"
    ]
  },
  {
    id: 2238,
    title: "IX ENARSU &#8211; Dimensión Ambiental",
    excerpt: "Debate académico sobre desafíos actuales en materia de derechos humanos.",
    date: "28 Mar 2025",
    day: "28",
    month: "MAR",
    views: "1,987",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/01/009_Deleg_UNP_01-1024x1024.jpg",
    category: "derechos",
    author: "DRSU",
    content: `<p>El foro reunió a académicos, activistas y autoridades para debatir sobre derechos humanos, justicia social y el rol de la universidad en la defensa de estos principios.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/01/009_Deleg_UNP_01-1024x1024.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/01/012_Deleg_UNP_04-720x480.jpg"
    ]
  },
  {
    id: 2228,
    title: "IX ENARSU &#8211; Encuentro Nacional de Directores RSU",
    excerpt: "Gestión sostenible de residuos genera abono natural para huertos urbanos.",
    date: "22 Mar 2025",
    day: "22",
    month: "MAR",
    views: "1,432",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/01/001_DIRECTIVOS_ENARSU_dia-01-720x480.jpg",
    category: "ambiente",
    author: "DRSU",
    content: `<p>El programa de compostaje comunitario enseña a las familias a transformar residuos orgánicos en abono natural, reduciendo la basura y mejorando los huertos urbanos.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/01/001_DIRECTIVOS_ENARSU_dia-01-720x480.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/01/002_Burgos_palabras01-720x480.jpg"
    ]
  },
  {
    id: 2220,
    title: "Visita DRSU a USAT por el IX ENARSU",
    excerpt: "Material didáctico innovador mejora el aprendizaje en zonas alejadas.",
    date: "18 Mar 2025",
    day: "18",
    month: "MAR",
    views: "1,876",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/11/Foto02_USAT-edited.jpeg",
    category: "educacion",
    author: "DRSU",
    content: `<p>Estudiantes de Educación crearon juegos educativos adaptados a la realidad rural, facilitando el aprendizaje de matemáticas, ciencias y lenguaje de manera lúdica.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/11/Foto02_USAT-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-12-at-2.36.11-PM-edited.jpeg"
    ]
  },
  {
    id: 2215,
    title: "Premio a ganadores del concurso \"Semilleros de Investigación\"",
    excerpt: "Acciones de sensibilización promueven espacios seguros y libres de violencia.",
    date: "12 Mar 2025",
    day: "12",
    month: "MAR",
    views: "2,103",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/11/Foto_02-semilleros-edited.jpg",
    category: "genero",
    author: "DRSU",
    content: `<p>La campaña contra la violencia de género incluyó talleres, conversatorios y acciones de visibilización para crear una cultura de respeto e igualdad en la universidad.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/11/Foto_02-semilleros-edited.jpg"
    ]
  },
  {
    id: 2208,
    title: "Curso «Formulación y Ejecución de Proyectos de RSU»",
    excerpt: "Acuicultura sostenible genera alimento e ingresos para familias locales.",
    date: "08 Mar 2025",
    day: "08",
    month: "MAR",
    views: "1,543",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/11/Flyer_Curso-2024-854x851.jpg",
    category: "alimentacion",
    author: "DRSU",
    content: `<p>El proyecto de piscicultura implementado en comunidades amazónicas mejora la seguridad alimentaria y genera ingresos adicionales para las familias participantes.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/11/Flyer_Curso-2024-854x851.jpg"
    ]
  },
  {
    id: 2203,
    title: "¡Nuestros voluntarios listos para hacer la diferencia!",
    excerpt: "Capacitación en comunicación fortalece la voz de las comunidades.",
    date: "03 Mar 2025",
    day: "03",
    month: "MAR",
    views: "1,654",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-05-at-12.45.44-PM-3-edited.jpeg",
    category: "comunicacion",
    author: "DRSU",
    content: `<p>Líderes comunitarios aprendieron técnicas de periodismo para documentar y comunicar las realidades de sus territorios, amplificando sus voces en medios locales.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-05-at-12.45.44-PM-3-edited.jpeg"
    ]
  },
  {
    id: 2191,
    title: "Voluntarios UNP realizan avistamiento de aves en el Humedal de Santa Julia",
    excerpt: "Pequeños espacios de lectura acercan los libros a la comunidad.",
    date: "28 Feb 2025",
    day: "28",
    month: "FEB",
    views: "1,765",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/11/Foto_04-1-edited-scaled.jpeg",
    category: "educacion",
    author: "DRSU",
    content: `<p>La red de micro bibliotecas instaladas en barrios periféricos facilita el acceso a la lectura y promueve la educación en comunidades con limitado acceso a bibliotecas formales.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/11/Foto_04-1-edited-scaled.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2024/11/Foto_01-1-edited.jpeg"
    ]
  },
  {
    id: 2139,
    title: "Juramentan medio millar de \"Voluntarios Universitarios\"",
    excerpt: "Formación técnica ofrece oportunidades de empleo e inserción social.",
    date: "22 Feb 2025",
    day: "22",
    month: "FEB",
    views: "1,987",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/09/001_JuramentoV_II_001-edited.jpg",
    category: "capacitacion",
    author: "DRSU",
    content: `<p>Jóvenes en situación de riesgo social reciben capacitación en oficios como carpintería, gastronomía y electricidad, mejorando sus oportunidades de empleo formal.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/09/001_JuramentoV_II_001-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/002_JuramentoV_II_002-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/007_JuramentoV_II_007-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/006_JuramentoV_II_006-1-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/005_JuramentoV_II_005-edited.jpg"
    ]
  },
  {
    id: 2108,
    title: "Con éxito se realizó Feria de Responsabilidad Social Universitaria",
    excerpt: "Documentales y cortometrajes generan conciencia sobre el cambio climático.",
    date: "18 Feb 2025",
    day: "18",
    month: "FEB",
    views: "2,234",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/09/005_FeriaRS_II_General-edited.jpg",
    category: "ambiente",
    author: "DRSU",
    content: `<p>El festival de cine ambiental presentó documentales y cortometrajes sobre crisis climática, biodiversidad y sostenibilidad, seguidos de debates con expertos ambientales.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/09/005_FeriaRS_II_General-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/010_FeriaRS_II_Palabras-Bienvenida-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/012_FeriaRS_II_DRSU-Practicantes-1-1024x1024.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/011_FeriaRS_II_Contabilidad-1-1024x1024.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/007_2_FeriaRS_II_Administracion-1-1024x1024.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/004_3_FeriaRS_II_Medicina-1-1024x1024.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/004_2_FeriaRS_II_Medicina-scaled.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/009_2_FeriaRS_II_Agronomia-1024x1024.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/013_Feria_RS_II_GoRe.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/001_FeriaRS_II_Arquitectura-1024x1024.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/004_FeriaRS_II_Medicina-1024x1024.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/009_FeriaRS_II_Agronomia-1024x1024.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/006_FeriaRS_II_Minas-1024x1024.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/008_FeriaRS_II_Administracion-1024x1024.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/003_FeriaRS_II_Economia-1024x1024.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/007_FeriaRS_II_INABIF-871x856.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/002_FeriaRS_II_Ciencias-1024x1024.jpg"
    ]
  },
  {
    id: 2082,
    title: "Instituciones públicas y privadas presentan iniciativas de Responsabilidad Social",
    excerpt: "Tecnología apropiada mejora acceso al agua en zonas semiáridas.",
    date: "12 Feb 2025",
    day: "12",
    month: "FEB",
    views: "1,876",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/09/001-P_Encuentro_II_GoRe_Desarrollo-Social-edited.jpg",
    category: "tecnologia",
    author: "DRSU",
    content: `<p>Un sistema de captación y almacenamiento de agua de lluvia diseñado por estudiantes proporciona agua para consumo y agricultura en comunidades de zonas semiáridas.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/09/001-P_Encuentro_II_GoRe_Desarrollo-Social-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/002_P_Encuentro_II_CARE-2-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/003_P_Encuentro_II_Burgos-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/grrnn-604x786.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/Muni_Piura-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/OIG-Peru-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/CIPCA-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/INDECI-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/CIP-1-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/VDO-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/UNF-2-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/NEGRO-edited.jpg"
    ]
  },
  {
    id: 2068,
    title: "CICLO DE CONFERENCIAS DRSU &#8211; 2024",
    excerpt: "Arte dramático como herramienta de resiliencia y cambio personal.",
    date: "08 Feb 2025",
    day: "08",
    month: "FEB",
    views: "1,432",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/09/Ponencia_Sofia_lavado-1-edited.jpeg",
    category: "arte",
    author: "DRSU",
    content: `<p>Talleres de teatro social ofrecen a adolescentes en conflicto con la ley un espacio para reflexionar sobre sus experiencias y proyectar cambios positivos en sus vidas.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/09/Ponencia_Sofia_lavado-1-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/001_CicloCRSU_II_001-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/Ponencia_FAU-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/09/FOTO_003-edited.jpeg"
    ]
  },
  {
    id: 2008,
    title: "DESFILE POR LA SEMANA DE LA RSU–2024",
    excerpt: "Iniciativa turística sostenible beneficia a comunidades campesinas.",
    date: "03 Feb 2025",
    day: "03",
    month: "FEB",
    views: "1,654",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/08/005_Izamiento_Autoridades-edited.jpg",
    category: "turismo",
    author: "DRSU",
    content: `<p>El proyecto de turismo comunitario permite a familias rurales generar ingresos mostrando su cultura, gastronomía y paisajes a visitantes nacionales e internacionales.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/08/005_Izamiento_Autoridades-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/08/007_Izamiento_Directores_URSU-1-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/08/009_Izamiento_Directores_URSU-3-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/08/002_DRSU-edited.jpg"
    ]
  },
  {
    id: 1974,
    title: "Semana de Aniversario DRSU 2024",
    excerpt: "Programa integral apoya a jóvenes madres en su desarrollo personal y académico.",
    date: "28 Ene 2025",
    day: "28",
    month: "ENE",
    views: "1,987",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/08/DRSU_UNP_002-1024x1024.jpeg",
    category: "apoyo",
    author: "DRSU",
    content: `<p>La red de apoyo para madres adolescentes cumple un año brindando orientación psicológica, apoyo académico y capacitación en crianza positiva a jóvenes madres.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/08/DRSU_UNP_002-1024x1024.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2024/08/DRSU_UNP_003-1024x1024.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2024/08/DRSU_UNP_004-1024x1024.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2024/08/DRSU_UNP_005-1024x1024.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2024/08/DRSU_UNP_006-1024x1024.jpeg"
    ]
  },
  {
    id: 1968,
    title: "DRSU-UNP y SERFOR unidos para cuidar los bosques",
    excerpt: "Educación sanitaria y eliminación de criaderos reducen casos de dengue.",
    date: "22 Ene 2025",
    day: "22",
    month: "ENE",
    views: "2,103",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/07/Foto_02-1-edited.jpeg",
    category: "salud",
    author: "DRSU",
    content: `<p>Voluntarios realizaron una campaña intensiva de prevención del dengue, educando a la población y eliminando criaderos de mosquitos en barrios de alto riesgo.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/07/Foto_02-1-edited.jpeg"
    ]
  },
  {
    id: 1963,
    title: "El MIMP implementa el programa «Brillando Perú» para niños, niñas y adolescentes &#8211; CCONNA en la región Piura",
    excerpt: "Tecnología accesible purifica agua para consumo humano en zonas sin servicios.",
    date: "18 Ene 2025",
    day: "18",
    month: "ENE",
    views: "1,876",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/07/Foto_02-edited.jpeg",
    category: "tecnologia",
    author: "DRSU",
    content: `<p>Filtros de agua de bajo costo diseñados por estudiantes de Ingeniería permiten a familias sin acceso a agua potable purificar el agua de manera efectiva y económica.</p>`,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/07/Foto_02-edited.jpeg"
    ]
  },
  {
    id: 1944,
    title: "Triptico Voluntariado UNP",
    excerpt: "Material informativo sobre el programa de voluntariado universitario y cómo participar.",
    date: "12 Ene 2025",
    day: "12",
    month: "ENE",
    views: "1,543",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/07/Triptico_lado_11-986x764.jpg",
    category: "voluntariado",
    author: "DRSU",
    content: `
      <p>La DRSU presentó el tríptico informativo del Programa de Voluntariado UNP, que detalla las áreas de trabajo, requisitos y beneficios de participar en actividades de responsabilidad social universitaria.</p>
      
      <p>Este material educativo facilita la comprensión del programa y motiva a los estudiantes a involucrarse en proyectos de impacto social.</p>
      
      <h2>Áreas de Voluntariado</h2>
      
      <p>El tríptico describe las diferentes áreas donde los voluntarios pueden participar: educación, salud, medio ambiente, apoyo comunitario y desarrollo social.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/07/Triptico_lado_11-986x764.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/07/Triptico_lado_22-984x753.jpg"
    ]
  },
  {
    id: 1941,
    title: "Inscribete en el Voluntariado UNP",
    excerpt: "Convocatoria abierta para estudiantes interesados en participar en el programa de voluntariado universitario.",
    date: "08 Ene 2025",
    day: "08",
    month: "ENE",
    views: "2,234",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/07/02_Flyer-02-2024.jpeg",
    category: "voluntariado",
    author: "DRSU",
    content: `
      <p>La DRSU abrió la convocatoria para que estudiantes de todas las facultades se inscriban en el Programa de Voluntariado UNP y participen en proyectos de responsabilidad social universitaria.</p>
      
      <p>Esta iniciativa busca formar estudiantes comprometidos con el desarrollo social y fortalecer el vínculo entre la universidad y la comunidad.</p>
      
      <h2>Beneficios del Voluntariado</h2>
      
      <p>Los voluntarios desarrollan habilidades blandas, adquieren experiencia en trabajo comunitario y contribuyen al bienestar de la sociedad, además de obtener certificación de sus horas de servicio.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/07/02_Flyer-02-2024.jpeg"
    ]
  },
  {
    id: 1933,
    title: "Reunión con Directores URSU",
    excerpt: "Encuentro de coordinación para alinear estrategias de responsabilidad social en las facultades.",
    date: "03 Ene 2025",
    day: "03",
    month: "ENE",
    views: "1,654",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/07/Foto_ViceAcad.jpg",
    category: "eventos",
    author: "DRSU",
    content: `
      <p>La DRSU realizó una reunión de coordinación con los directores de las Unidades de Responsabilidad Social Universitaria (URSU) de las diferentes facultades de la UNP.</p>
      
      <p>Este encuentro permitió alinear estrategias, compartir experiencias y coordinar acciones conjuntas para fortalecer la responsabilidad social universitaria en toda la institución.</p>
      
      <h2>Objetivos de la Reunión</h2>
      
      <p>Se establecieron lineamientos comunes, se revisaron los avances de cada facultad y se planificaron actividades integradas para maximizar el impacto social de los programas de RSU.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/07/Foto_ViceAcad.jpg"
    ]
  },
  {
    id: 1930,
    title: "Reunión Vicerrector Académico y la DRSU",
    excerpt: "Encuentro estratégico para fortalecer la responsabilidad social en el ámbito académico.",
    date: "28 Dic 2024",
    day: "28",
    month: "DIC",
    views: "1,765",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/07/Foto_ViceAcad.jpg",
    category: "eventos",
    author: "DRSU",
    content: `
      <p>El Vicerrector Académico y la Dirección de Responsabilidad Social Universitaria sostuvieron una reunión de coordinación para fortalecer la integración de la RSU en el ámbito académico.</p>
      
      <p>Este encuentro permitió establecer lineamientos para incorporar la responsabilidad social en los currículos y actividades académicas de la universidad.</p>
      
      <h2>Acuerdos Establecidos</h2>
      
      <p>Se acordaron estrategias para integrar proyectos de RSU en los programas de estudio y promover la participación estudiantil en actividades de impacto social.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/07/Foto_ViceAcad.jpg"
    ]
  },
  {
    id: 1908,
    title: "Reunión Vicerrector de Investigación y DRSU",
    excerpt: "Coordinación para integrar la responsabilidad social en proyectos de investigación universitaria.",
    date: "22 Dic 2024",
    day: "22",
    month: "DIC",
    views: "2,456",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/06/Foto_1-edited.jpeg",
    category: "investigacion",
    author: "DRSU",
    content: `
      <p>El Vicerrector de Investigación y la DRSU sostuvieron una reunión de trabajo para coordinar la integración de la responsabilidad social en los proyectos de investigación universitaria.</p>
      
      <p>Este encuentro busca promover investigaciones que generen impacto social y contribuyan al desarrollo sostenible de la región.</p>
      
      <h2>Líneas de Acción</h2>
      
      <p>Se establecieron lineamientos para que las investigaciones aborden problemáticas sociales relevantes y tengan aplicación directa en beneficio de la comunidad.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/06/Foto_1-edited.jpeg"
    ]
  },
  {
    id: 1905,
    title: "En miras a un Convenio entre la UNP y el MIDIS",
    excerpt: "Alianza estratégica para fortalecer programas sociales y de desarrollo en la región.",
    date: "18 Dic 2024",
    day: "18",
    month: "DIC",
    views: "1,432",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/06/Foto_1-edited.jpeg",
    category: "alianzas",
    author: "DRSU",
    content: `
      <p>La Universidad Nacional de Piura y el Ministerio de Desarrollo e Inclusión Social (MIDIS) iniciaron conversaciones para establecer un convenio de cooperación interinstitucional.</p>
      
      <p>Esta alianza estratégica permitirá fortalecer los programas sociales y de desarrollo en la región, articulando esfuerzos entre la academia y el Estado.</p>
      
      <h2>Áreas de Colaboración</h2>
      
      <p>El convenio contempla acciones conjuntas en investigación social, capacitación y desarrollo de programas que beneficien a las poblaciones más vulnerables de la región.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/06/Foto_1-edited.jpeg"
    ]
  },
  {
    id: 1900,
    title: "Ponencia por el Día del Padre Unepino",
    excerpt: "Evento académico que reflexiona sobre la paternidad responsable y el rol del padre en la familia.",
    date: "12 Dic 2024",
    day: "12",
    month: "DIC",
    views: "1,987",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/06/003_Foto_01-edited.jpeg",
    category: "eventos",
    author: "DRSU",
    content: `
      <p>La DRSU organizó una ponencia especial en conmemoración del Día del Padre Unepino, evento que reflexiona sobre la paternidad responsable y el importante rol del padre en la familia.</p>
      
      <p>La actividad contó con la participación de docentes, trabajadores administrativos y padres de familia de la comunidad universitaria.</p>
      
      <h2>Temas Abordados</h2>
      
      <p>Se discutieron temas como la paternidad activa, la importancia de la presencia paterna en el desarrollo de los hijos y la conciliación entre vida laboral y familiar.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/06/003_Foto_01-edited.jpeg"
    ]
  },
  {
    id: 1895,
    title: "Activación Ciudadana por el Día Mundial Contra el Trabajo Infantil",
    excerpt: "Campaña de sensibilización sobre los derechos de la niñez y la erradicación del trabajo infantil.",
    date: "08 Dic 2024",
    day: "08",
    month: "DIC",
    views: "1,543",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/06/002_Foto_02-Activaciones-edited.jpeg",
    category: "derechos",
    author: "DRSU",
    content: `
      <p>La DRSU realizó una activación ciudadana en conmemoración del Día Mundial contra el Trabajo Infantil, con el objetivo de sensibilizar a la población sobre los derechos de la niñez.</p>
      
      <p>La actividad incluyó stands informativos, distribución de material educativo y dinámicas interactivas que promovieron la reflexión sobre la erradicación del trabajo infantil.</p>
      
      <h2>Mensaje de Sensibilización</h2>
      
      <p>La campaña buscó crear conciencia sobre la importancia de proteger a los niños y garantizar su derecho a la educación, el juego y el desarrollo integral.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/06/002_Foto_02-Activaciones-edited.jpeg"
    ]
  },
  {
    id: 1876,
    title: "JORNADA ARTÍSTICO CULTURAL POR EL DÍA MUNDIAL CONTRA EL TRABAJO INFANTIL",
    excerpt: "Evento artístico cultural que sensibiliza sobre los derechos de la niñez y la erradicación del trabajo infantil.",
    date: "03 Dic 2024",
    day: "03",
    month: "DIC",
    views: "2,087",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/06/Foto_01-08062024-1024x473.jpeg",
    category: "derechos",
    author: "DRSU",
    content: `
      <p>La DRSU organizó una jornada artístico cultural en conmemoración del Día Mundial contra el Trabajo Infantil, con el objetivo de sensibilizar a la comunidad sobre los derechos de la niñez.</p>
      
      <p>El evento contó con presentaciones artísticas, obras de teatro y actividades culturales que promovieron la reflexión sobre la erradicación del trabajo infantil.</p>
      
      <h2>Actividades Realizadas</h2>
      
      <p>Se realizaron presentaciones de danza, teatro, música y actividades interactivas que involucraron a la comunidad universitaria y población en general.</p>
      
      <p>Esta iniciativa busca crear conciencia sobre la importancia de proteger los derechos de los niños y garantizar su desarrollo integral.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/06/Foto_01-08062024-1024x473.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2024/06/Foto_04-08062024-edited.jpeg"
    ]
  },
  {
    id: 1871,
    title: "Reunión entre la DRSU y ONGs de la localidad",
    excerpt: "Coordinación interinstitucional para fortalecer alianzas estratégicas en beneficio de la comunidad.",
    date: "28 Nov 2024",
    day: "28",
    month: "NOV",
    views: "1,654",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/06/Foto_02-28052024-edited.jpg",
    category: "alianzas",
    author: "DRSU",
    content: `
      <p>La DRSU realizó una reunión estratégica con organizaciones no gubernamentales de la localidad para coordinar acciones conjuntas en beneficio de la comunidad.</p>
      
      <p>Este encuentro permitió establecer alianzas estratégicas y coordinar esfuerzos para maximizar el impacto social de los proyectos.</p>
      
      <h2>Objetivos de la Reunión</h2>
      
      <p>La reunión buscó identificar áreas de colaboración y establecer mecanismos de coordinación interinstitucional.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/06/Foto_02-28052024-edited.jpg"
    ]
  },
  {
    id: 1860,
    title: "DRSU implementa sistemas de acuaponía en centros educativos",
    excerpt: "Sistema integrado produce alimentos de manera sostenible en espacios reducidos para mejorar la nutrición escolar.",
    date: "22 Nov 2024",
    day: "22",
    month: "NOV",
    views: "1,876",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_02-800x533.jpg",
    category: "agricultura",
    author: "DRSU",
    content: `
      <p>La DRSU implementó sistemas de acuaponía en escuelas y centros comunitarios que demuestran cómo producir peces y vegetales de manera sostenible en espacios urbanos limitados.</p>
      
      <p>Esta tecnología permite a las comunidades producir alimentos frescos y nutritivos, mejorando la seguridad alimentaria local.</p>
      
      <h2>Beneficios del Sistema</h2>
      
      <p>Los sistemas de acuaponía combinan la cría de peces con el cultivo de vegetales, creando un ecosistema sostenible que maximiza la producción de alimentos.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_02-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_01-2-800x533.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/06/Foto_03-800x533.jpg"
    ]
  },
  {
    id: 1859,
    title: "DRSU y Municipalidad de Piura coordinan acciones para la Cruzada Verde 2025",
    excerpt: "Alianza estratégica para la recuperación de áreas verdes y espacios públicos en la ciudad de Piura.",
    date: "18 Nov 2024",
    day: "18",
    month: "NOV",
    views: "1,765",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/05/Foto_02-1-800x533.jpeg",
    category: "ambiente",
    author: "DRSU",
    content: `
      <p>La DRSU y la Municipalidad de Piura establecieron una alianza estratégica para coordinar la Cruzada Verde 2025, iniciativa que busca recuperar y mantener las áreas verdes de la ciudad.</p>
      
      <p>Esta colaboración permitirá implementar programas de reforestación, mantenimiento de parques y educación ambiental en la comunidad piurana.</p>
      
      <h2>Objetivos de la Cruzada Verde</h2>
      
      <p>La iniciativa tiene como principales objetivos mejorar la calidad del aire, crear espacios de recreación y fomentar la conciencia ambiental entre los ciudadanos.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/05/Foto_02-1-800x533.jpeg"
    ]
  },
  {
     id: 1858,
     title: "DRSU implementa programa de economía solidaria para productores locales",
     excerpt: "Iniciativa que conecta a productores, artesanos y consumidores en un sistema de comercio justo.",
     date: "12 Nov 2024",
     day: "12",
     month: "NOV",
     views: "1,432",
     image: "https://rsu.webunp.online/wp-content/uploads/2024/09/001-P_Encuentro_II_GoRe_Desarrollo-Social-edited.jpg",
     category: "economia",
     author: "DRSU",
     content: `
       <p>La DRSU lanzó un programa de economía solidaria que conecta a productores locales, artesanos y consumidores en un sistema de comercio justo que beneficia a toda la comunidad.</p>
       
       <p>Esta iniciativa promueve el desarrollo económico sostenible y fortalece las cadenas de valor locales.</p>
       
       <h2>Beneficios del Programa</h2>
       
       <p>Los participantes pueden acceder a nuevos mercados, mejorar sus ingresos y contribuir al desarrollo económico de la región.</p>
     `,
     gallery: [
       "https://rsu.webunp.online/wp-content/uploads/2024/09/001-P_Encuentro_II_GoRe_Desarrollo-Social-edited.jpg",
       "https://rsu.webunp.online/wp-content/uploads/2024/09/002_P_Encuentro_II_CARE-2-edited.jpg",
       "https://rsu.webunp.online/wp-content/uploads/2024/09/003_P_Encuentro_II_Burgos-edited.jpg"
     ]
   },
   {
     id: 1857,
     title: "DRSU promueve tecnología limpia para mejorar la salud familiar",
     excerpt: "Talleres comunitarios enseñan construcción de estufas ecológicas que reducen contaminación.",
     date: "08 Nov 2024",
     day: "08",
     month: "NOV",
     views: "1,654",
     image: "https://rsu.webunp.online/wp-content/uploads/2025/03/Foto_01-edited.jpg",
     category: "tecnologia",
     author: "DRSU",
     content: `
       <p>La DRSU implementó talleres comunitarios para enseñar la construcción de estufas ecológicas que reducen el consumo de leña en un 60% y eliminan el humo intradomiciliario.</p>
       
       <p>Esta tecnología limpia mejora significativamente la salud respiratoria de las familias y contribuye a la conservación del medio ambiente.</p>
       
       <h2>Impacto en la Salud</h2>
       
       <p>Las estufas ecológicas reducen las enfermedades respiratorias y mejoran la calidad de vida de las familias rurales.</p>
     `,
     gallery: [
       "https://rsu.webunp.online/wp-content/uploads/2025/03/Foto_01-edited.jpg"
     ]
   },
   {
     id: 1856,
     title: "DRSU facilita inclusión laboral de personas con discapacidad",
     excerpt: "Programa especializado promueve la inserción laboral a través de capacitación y alianzas empresariales.",
     date: "03 Nov 2024",
     day: "03",
     month: "NOV",
     views: "1,987",
     image: "https://rsu.webunp.online/wp-content/uploads/2025/02/Foto_04-edited.jpg",
     category: "inclusion",
     author: "DRSU",
     content: `
       <p>La DRSU implementó un programa especializado que facilita la inserción laboral de personas con discapacidad a través de capacitación especializada y alianzas con empresas comprometidas con la inclusión.</p>
       
       <p>Esta iniciativa promueve la igualdad de oportunidades y el desarrollo profesional de personas con discapacidad.</p>
       
       <h2>Componentes del Programa</h2>
       
       <p>El programa incluye capacitación técnica, desarrollo de habilidades blandas y acompañamiento en el proceso de inserción laboral.</p>
     `,
     gallery: [
       "https://rsu.webunp.online/wp-content/uploads/2025/02/Foto_04-edited.jpg",
       "https://rsu.webunp.online/wp-content/uploads/2025/02/Foto_03-edited.jpg",
       "https://rsu.webunp.online/wp-content/uploads/2025/02/Foto_02-edited.jpg"
     ]
   },
   {
     id: 1855,
     title: "DRSU organiza festival gastronómico para preservar recetas tradicionales",
     excerpt: "Evento culinario reúne a cocineras tradicionales para compartir recetas ancestrales y promover la cultura regional.",
     date: "28 Oct 2024",
     day: "28",
     month: "OCT",
     views: "2,234",
     image: "https://rsu.webunp.online/wp-content/uploads/2024/06/Foto_01-08062024-1024x473.jpeg",
     category: "cultura",
     author: "DRSU",
     content: `
       <p>La DRSU organizó un festival gastronómico que reunió a cocineras tradicionales para compartir recetas ancestrales y promover la valoración de la cocina regional.</p>
       
       <p>Este evento busca preservar el patrimonio culinario de la región y apoyar a las cocineras locales en su desarrollo económico.</p>
       
       <h2>Objetivos del Festival</h2>
       
       <p>El festival promueve la identidad cultural, fortalece las tradiciones culinarias y genera oportunidades económicas para las participantes.</p>
     `,
     gallery: [
       "https://rsu.webunp.online/wp-content/uploads/2024/06/Foto_01-08062024-1024x473.jpeg",
       "https://rsu.webunp.online/wp-content/uploads/2024/06/Foto_04-08062024-edited.jpeg"
     ]
   },
   {
     id: 1854,
     title: "DRSU organiza brigadas de salud para zonas de difícil acceso",
     excerpt: "Brigadas médicas llevan vacunas esenciales y atención preventiva a comunidades alejadas.",
     date: "22 Oct 2024",
     day: "22",
     month: "OCT",
     views: "1,876",
     image: "https://rsu.webunp.online/wp-content/uploads/2024/07/Foto_02-1-edited.jpeg",
     category: "salud",
     author: "DRSU",
     content: `
       <p>La DRSU organizó brigadas médicas que recorrieron comunidades alejadas para completar esquemas de vacunación, protegiendo especialmente a niños y adultos mayores.</p>
       
       <p>Esta iniciativa garantiza el acceso a servicios de salud esenciales en zonas donde la atención médica es limitada.</p>
       
       <h2>Impacto de las Brigadas</h2>
       
       <p>Las brigadas han logrado vacunar a más de 500 personas en comunidades rurales, mejorando significativamente la cobertura de salud en la región.</p>
     `,
     gallery: [
       "https://rsu.webunp.online/wp-content/uploads/2024/07/Foto_02-1-edited.jpeg"
     ]
   },
   {
     id: 1853,
     title: "DRSU implementa biodigestores familiares para energía sostenible",
     excerpt: "Tecnología sostenible convierte residuos orgánicos en biogás para cocinar, reduciendo dependencia de combustibles fósiles.",
     date: "18 Oct 2024",
     day: "18",
     month: "OCT",
     views: "1,543",
     image: "https://rsu.webunp.online/wp-content/uploads/2024/07/Foto_02-edited.jpeg",
     category: "tecnologia",
     author: "DRSU",
     content: `
       <p>La DRSU implementó biodigestores familiares que transforman residuos orgánicos en biogás, proporcionando energía limpia para cocinar y reduciendo la dependencia de combustibles fósiles.</p>
       
       <p>Esta tecnología sostenible mejora la calidad de vida de las familias rurales y contribuye a la conservación del medio ambiente.</p>
       
       <h2>Beneficios de los Biodigestores</h2>
       
       <p>Los biodigestores reducen costos de energía, mejoran la gestión de residuos y proporcionan fertilizante orgánico para la agricultura.</p>
     `,
     gallery: [
       "https://rsu.webunp.online/wp-content/uploads/2024/07/Foto_02-edited.jpeg"
     ]
   },
   {
     id: 1852,
     title: "DRSU brinda apoyo especializado a comunidades afectadas por emergencias",
     excerpt: "Psicólogos y trabajadores sociales facilitan la recuperación emocional de familias afectadas por desastres naturales.",
     date: "12 Oct 2024",
     day: "12",
     month: "OCT",
     views: "1,765",
     image: "https://rsu.webunp.online/wp-content/uploads/2024/06/003_Foto_01-edited.jpeg",
     category: "apoyo",
     author: "DRSU",
     content: `
       <p>La DRSU implementó un programa de apoyo especializado donde psicólogos y trabajadores sociales brindan atención a familias afectadas por desastres naturales, facilitando su recuperación emocional.</p>
       
       <p>Este servicio es fundamental para ayudar a las comunidades a superar los traumas y reconstruir sus vidas después de emergencias.</p>
       
       <h2>Servicios de Apoyo</h2>
       
       <p>El programa incluye terapia psicológica, apoyo social, orientación familiar y acompañamiento en el proceso de recuperación.</p>
     `,
     gallery: [
       "https://rsu.webunp.online/wp-content/uploads/2024/06/003_Foto_01-edited.jpeg"
     ]
   },
   {
     id: 1851,
     title: "DRSU certifica primera promoción de voluntarios en responsabilidad social universitaria",
     excerpt: "Ceremonia histórica reconoce a 150 estudiantes que completaron 200 horas de servicio comunitario.",
     date: "08 Oct 2024",
     day: "08",
     month: "OCT",
     views: "2,456",
     image: "https://rsu.webunp.online/wp-content/uploads/2024/08/005_Izamiento_Autoridades-edited.jpg",
     category: "eventos",
     author: "DRSU",
     content: `
       <p>La DRSU realizó la primera ceremonia de graduación de voluntarios RSU, certificando a 150 estudiantes que completaron 200 horas de servicio comunitario, marcando un hito en la historia de la responsabilidad social universitaria.</p>
       
       <p>Este evento representa un logro significativo en el compromiso de la universidad con el desarrollo social de la región.</p>
       
       <h2>Reconocimiento Histórico</h2>
       
       <p>La certificación formaliza el compromiso de los estudiantes con la responsabilidad social y establece un precedente para futuras generaciones.</p>
     `,
     gallery: [
       "https://rsu.webunp.online/wp-content/uploads/2024/08/005_Izamiento_Autoridades-edited.jpg",
       "https://rsu.webunp.online/wp-content/uploads/2024/08/007_Izamiento_Directores_URSU-1-edited.jpg",
       "https://rsu.webunp.online/wp-content/uploads/2024/08/009_Izamiento_Directores_URSU-3-edited.jpg"
     ]
   },
  {
    id: 2721,
    title: "DRSU-UNP e INDECI organizan Seminario de Gestión Reactiva del Riesgo de Desastres",
    excerpt: "Seminario especializado que fortalece las capacidades de respuesta ante emergencias y desastres naturales.",
    date: "09 Oct 2025",
    day: "09",
    month: "OCT",
    views: "1,156",
    image: "https://rsu.webunp.online/wp-content/uploads/2025/10/Foto_02-edited.jpg",
    category: "capacitacion",
    author: "DRSU",
    content: `
      <p>La DRSU-UNP en colaboración con INDECI organizó un seminario especializado sobre "Gestión Reactiva del Riesgo de Desastres", dirigido a fortalecer las capacidades de respuesta ante emergencias.</p>
      
      <p>El evento contó con la participación de expertos en gestión de riesgos, autoridades locales y representantes de organizaciones de primera respuesta.</p>
      
      <h2>Objetivos del Seminario</h2>
      
      <p>El seminario busca mejorar la coordinación interinstitucional y fortalecer los protocolos de respuesta ante desastres naturales en la región Piura.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2025/10/Foto_02-edited.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2025/10/INDECI_Flyer_09102025-1024x1024.jpg"
    ]
  },
  {
    id: 1763,
    title: "Conferencias sobre la Diversidad Biológica de la Región Piura",
    excerpt: "Evento académico que destaca la importancia de la biodiversidad regional y su conservación.",
    date: "23 May 2024",
    day: "23",
    month: "MAY",
    views: "1,234",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/05/Afiche_Biodiversidad-2024-para-UNP-1024x1024.jpg",
    category: "ambiente",
    author: "DRSU",
    content: `
      <p>La DRSU organizó conferencias especializadas sobre la diversidad biológica de la región Piura, destacando la importancia de la conservación de nuestros ecosistemas únicos.</p>
      
      <p>El evento reunió a biólogos, conservacionistas y estudiantes para analizar las estrategias de protección de la biodiversidad regional.</p>
      
      <h2>Importancia de la Biodiversidad</h2>
      
      <p>La región Piura alberga ecosistemas únicos que requieren protección y conservación para las futuras generaciones.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/05/Afiche_Biodiversidad-2024-para-UNP-1024x1024.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2024/05/Foto_01-edited.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2024/05/Foto_2-edited.jpeg"
    ]
  },
  {
    id: 1749,
    title: "Formación del Comité de Responsabilidad Social Interinstitucional",
    excerpt: "Creación de red interinstitucional para apoyar a niños, adolescentes y jóvenes en situación de vulnerabilidad.",
    date: "15 May 2024",
    day: "15",
    month: "MAY",
    views: "987",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/05/441530564_17893410672002071_8341304383441376397_n-edited.jpg",
    category: "alianzas",
    author: "DRSU",
    content: `
      <p>Se constituyó el Comité de Responsabilidad Social Interinstitucional para coordinar esfuerzos en apoyo a niños, adolescentes y jóvenes en situación de vulnerabilidad en la región Piura.</p>
      
      <p>Esta alianza estratégica reúne a instituciones públicas, privadas y organizaciones civiles comprometidas con el desarrollo social.</p>
      
      <h2>Objetivos del Comité</h2>
      
      <p>El comité busca articular acciones conjuntas para mejorar la calidad de vida de los grupos más vulnerables de la sociedad.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/05/441530564_17893410672002071_8341304383441376397_n-edited.jpg"
    ]
  },
  {
    id: 1706,
    title: "DRSU-UNP organiza reunión para atender problemática de niños y adolescentes vulnerables",
    excerpt: "Iniciativa que busca articular respuestas integrales para la protección de la niñez y adolescencia en riesgo.",
    date: "26 Abr 2024",
    day: "26",
    month: "ABR",
    views: "1,456",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-26-at-9.46.47-AM-1-edited.jpeg",
    category: "apoyo",
    author: "DRSU",
    content: `
      <p>La DRSU-UNP organizó una reunión estratégica para abordar la problemática de niños, adolescentes y jóvenes en estado de vulnerabilidad en la región Piura.</p>
      
      <p>El encuentro reunió a representantes de diversas instituciones para coordinar acciones de protección y desarrollo integral.</p>
      
      <h2>Compromiso Institucional</h2>
      
      <p>Las instituciones participantes se comprometieron a trabajar de manera coordinada para mejorar las condiciones de vida de los grupos vulnerables.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-26-at-9.46.47-AM-1-edited.jpeg"
    ]
  },
  {
    id: 1701,
    title: "Visita de la ONG Plan Internacional a la DRSU",
    excerpt: "Reunión de coordinación para fortalecer alianzas estratégicas en beneficio de la niñez y adolescencia.",
    date: "25 Abr 2024",
    day: "25",
    month: "ABR",
    views: "1,123",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-26-at-9.47.53-AM-edited.jpeg",
    category: "alianzas",
    author: "DRSU",
    content: `
      <p>Representantes de la ONG Plan Internacional visitaron la DRSU para coordinar acciones conjuntas en beneficio de la niñez y adolescencia de la región.</p>
      
      <p>Esta alianza estratégica permitirá implementar programas de desarrollo integral para niños y jóvenes en situación de vulnerabilidad.</p>
      
      <h2>Áreas de Colaboración</h2>
      
      <p>Se identificaron áreas prioritarias de trabajo conjunto en educación, salud, protección y desarrollo comunitario.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-26-at-9.47.53-AM-edited.jpeg"
    ]
  },
  {
    id: 1644,
    title: "Encuesta dirigida a estudiantes de la UNP",
    excerpt: "Investigación para conocer las necesidades y expectativas de los estudiantes en materia de responsabilidad social universitaria.",
    date: "15 Abr 2024",
    day: "15",
    month: "ABR",
    views: "2,345",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/04/Encuesta_Estudiantes-1024x1024.jpg",
    category: "investigacion",
    author: "DRSU",
    content: `
      <p>La DRSU lanzó una encuesta dirigida a estudiantes de la UNP para conocer sus necesidades y expectativas en materia de responsabilidad social universitaria.</p>
      
      <p>Los resultados de esta investigación permitirán mejorar los programas y servicios ofrecidos a la comunidad estudiantil.</p>
      
      <h2>Objetivos de la Encuesta</h2>
      
      <p>La encuesta busca identificar áreas de mejora y nuevas oportunidades de participación estudiantil en proyectos de responsabilidad social.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/04/Encuesta_Estudiantes-1024x1024.jpg"
    ]
  },
  {
    id: 1639,
    title: "Encuesta dirigida a docentes de la UNP",
    excerpt: "Investigación para evaluar la participación docente en programas de responsabilidad social universitaria.",
    date: "12 Abr 2024",
    day: "12",
    month: "ABR",
    views: "1,876",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/04/Encuesta_Docentes-1024x899.jpg",
    category: "investigacion",
    author: "DRSU",
    content: `
      <p>La DRSU realizó una encuesta dirigida a docentes de la UNP para evaluar su participación en programas de responsabilidad social universitaria.</p>
      
      <p>Esta investigación permitirá identificar oportunidades de fortalecimiento de la participación docente en proyectos sociales.</p>
      
      <h2>Importancia de la Participación Docente</h2>
      
      <p>Los docentes son actores clave en la formación de estudiantes comprometidos con la responsabilidad social.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/04/Encuesta_Docentes-1024x899.jpg"
    ]
  },
  {
    id: 1631,
    title: "Curso Taller sobre Evaluación de Daños y Análisis de Necesidades",
    excerpt: "Capacitación especializada en gestión de riesgos de desastres para fortalecer las capacidades de respuesta ante emergencias.",
    date: "08 Abr 2024",
    day: "08",
    month: "ABR",
    views: "1,654",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/04/INDECI_001-edited.jpg",
    category: "capacitacion",
    author: "DRSU",
    content: `
      <p>La DRSU organizó un curso taller especializado sobre "Evaluación de Daños y Análisis de Necesidades" en colaboración con INDECI.</p>
      
      <p>Esta capacitación fortalece las capacidades de los participantes en la gestión de riesgos de desastres y respuesta ante emergencias.</p>
      
      <h2>Contenido del Curso</h2>
      
      <p>El curso incluye metodologías de evaluación de daños, análisis de necesidades y protocolos de respuesta ante desastres naturales.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/04/INDECI_001-edited.jpg"
    ]
  },
  {
    id: 1626,
    title: "La Importancia del Autodiagnóstico en la UNP",
    excerpt: "Proceso de autoevaluación institucional para identificar fortalezas y áreas de mejora en responsabilidad social universitaria.",
    date: "05 Abr 2024",
    day: "05",
    month: "ABR",
    views: "1,432",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/04/Autodiagnostico_002-edited.jpg",
    category: "investigacion",
    author: "DRSU",
    content: `
      <p>La DRSU implementó un proceso de autodiagnóstico institucional para evaluar el estado actual de la responsabilidad social universitaria en la UNP.</p>
      
      <p>Este proceso permite identificar fortalezas, debilidades y oportunidades de mejora en la gestión de la RSU.</p>
      
      <h2>Beneficios del Autodiagnóstico</h2>
      
      <p>El autodiagnóstico proporciona una base sólida para la planificación estratégica y el mejoramiento continuo de los programas de RSU.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/04/Autodiagnostico_002-edited.jpg"
    ]
  },
  {
    id: 1620,
    title: "Primera Reunión de Directores de Unidades de Responsabilidad Social Universitaria",
    excerpt: "Encuentro estratégico para fortalecer el compromiso social de las facultades y unidades académicas.",
    date: "02 Abr 2024",
    day: "02",
    month: "ABR",
    views: "1,789",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/04/Reu_Directores-002-edited.jpg",
    category: "eventos",
    author: "DRSU",
    content: `
      <p>Se realizó la primera reunión de directores de unidades de responsabilidad social universitaria de las facultades de la UNP.</p>
      
      <p>Este encuentro estratégico busca fortalecer el compromiso social de las facultades y coordinar acciones conjuntas.</p>
      
      <h2>Objetivos de la Reunión</h2>
      
      <p>La reunión permitió establecer lineamientos comunes y coordinar esfuerzos para el desarrollo de la RSU en toda la universidad.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/04/Reu_Directores-002-edited.jpg"
    ]
  },
  {
    id: 1614,
    title: "Delegación de la Universidad Nacional de Huancavelica realiza pasantía en la UNP",
    excerpt: "Intercambio académico que fortalece las relaciones interuniversitarias y promueve el aprendizaje mutuo en RSU.",
    date: "28 Mar 2024",
    day: "28",
    month: "MAR",
    views: "1,567",
    image: "https://rsu.webunp.online/wp-content/uploads/2024/04/Huancavelica_001-edited.jpg",
    category: "alianzas",
    author: "DRSU",
    content: `
      <p>Una delegación de la Universidad Nacional de Huancavelica realizó una pasantía en la UNP para conocer las experiencias en responsabilidad social universitaria.</p>
      
      <p>Este intercambio académico fortalece las relaciones interuniversitarias y promueve el aprendizaje mutuo en materia de RSU.</p>
      
      <h2>Beneficios del Intercambio</h2>
      
      <p>La pasantía permite compartir buenas prácticas y fortalecer las capacidades institucionales en responsabilidad social universitaria.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2024/04/Huancavelica_001-edited.jpg"
    ]
  },
  {
    id: 1599,
    title: "VIII Encuentro de Directores de RSU",
    excerpt: "Evento nacional que reúne a directores de responsabilidad social universitaria de todo el país para intercambiar experiencias.",
    date: "16 Nov 2023",
    day: "16",
    month: "NOV",
    views: "2,234",
    image: "https://rsu.webunp.online/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-16-at-12.32.10-1024x1024.jpeg",
    category: "eventos",
    author: "DRSU",
    content: `
      <p>Se realizó el VIII Encuentro de Directores de RSU, evento nacional que reúne a representantes de universidades de todo el país.</p>
      
      <p>Este encuentro permite el intercambio de experiencias y buenas prácticas en responsabilidad social universitaria.</p>
      
      <h2>Objetivos del Encuentro</h2>
      
      <p>El evento busca fortalecer las redes interuniversitarias y promover la colaboración en proyectos de impacto social.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-16-at-12.32.10-1024x1024.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-16-at-12.32.09-1024x1024.jpeg"
    ]
  },
  {
    id: 1595,
    title: "VIII ENARSU 2023",
    excerpt: "Encuentro Nacional de Responsabilidad Social Universitaria que reúne a universidades de todo el país.",
    date: "15 Nov 2023",
    day: "15",
    month: "NOV",
    views: "3,456",
    image: "https://rsu.webunp.online/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-16-at-09.16.51-1-1-1024x1024.jpeg",
    category: "eventos",
    author: "DRSU",
    content: `
      <p>Se realizó el VIII Encuentro Nacional de Responsabilidad Social Universitaria (ENARSU) 2023, evento que reúne a universidades de todo el país.</p>
      
      <p>Este encuentro nacional promueve el intercambio de experiencias y fortalece las redes de colaboración interuniversitaria.</p>
      
      <h2>Importancia del ENARSU</h2>
      
      <p>El ENARSU es el evento más importante del país en materia de responsabilidad social universitaria, reuniendo a los principales actores del sector.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-16-at-09.16.51-1-1-1024x1024.jpeg",
      "https://rsu.webunp.online/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-16-at-09.16.51-2-1024x1024.jpeg"
    ]
  },
  {
    id: 1583,
    title: "Entrevista exclusiva con el Dr. Manuel Burgos sobre el VIII ENARSU",
    excerpt: "Medios regionales entrevistan al Director General de RSU sobre el impacto del VIII ENARSU en la comunidad académica.",
    date: "23 Oct 2023",
    day: "23",
    month: "OCT",
    views: "1,876",
    image: "https://rsu.webunp.online/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-23-at-10.39.26-1024x768.jpeg",
    category: "comunicacion",
    author: "DRSU",
    content: `
      <p>Medios de la región como Revista Encuentro, Piura TV y Cabildo Noticias realizaron una entrevista exclusiva con el Dr. Manuel Burgos, Director General de RSU.</p>
      
      <p>La entrevista abordó el impacto del VIII ENARSU en la comunidad académica y el compromiso de las universidades con la sociedad.</p>
      
      <h2>Temas Abordados</h2>
      
      <p>Se discutieron temas como el rol de las universidades en el desarrollo social y las estrategias para fortalecer la responsabilidad social universitaria.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-23-at-10.39.26-1024x768.jpeg"
    ]
  },
  {
    id: 1568,
    title: "VIII ENARSU - Evento Nacional de Responsabilidad Social Universitaria",
    excerpt: "Encuentro nacional que reúne a universidades de todo el país para fortalecer la responsabilidad social universitaria.",
    date: "20 Oct 2023",
    day: "20",
    month: "OCT",
    views: "2,567",
    image: "https://rsu.webunp.online/wp-content/uploads/2023/10/Flyer-QR-940x788.jpg",
    category: "eventos",
    author: "DRSU",
    content: `
      <p>Se realizó el VIII ENARSU, evento nacional que reúne a universidades de todo el país para fortalecer la responsabilidad social universitaria.</p>
      
      <p>Este encuentro promueve el intercambio de experiencias y fortalece las redes de colaboración interuniversitaria.</p>
      
      <h2>Objetivos del Evento</h2>
      
      <p>El ENARSU busca promover la responsabilidad social universitaria como eje fundamental del quehacer universitario.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2023/10/Flyer-QR-940x788.jpg"
    ]
  },
  {
    id: 1476,
    title: "Conferencia Magistral: Responsabilidad Social Universitaria, Fundamento de la Vida Universitaria",
    excerpt: "Conferencia magistral que aborda la importancia de la RSU como pilar fundamental de la educación superior.",
    date: "19 Sep 2023",
    day: "19",
    month: "SEP",
    views: "1,654",
    image: "https://rsu.webunp.online/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-19-at-09.49.07-1024x1024.jpeg",
    category: "eventos",
    author: "DRSU",
    content: `
      <p>Se realizó la conferencia magistral "Responsabilidad Social Universitaria, Fundamento de la Vida Universitaria" dirigida a la comunidad académica.</p>
      
      <p>Esta conferencia aborda la importancia de la RSU como pilar fundamental de la educación superior y su impacto en la sociedad.</p>
      
      <h2>Importancia de la Conferencia</h2>
      
      <p>La conferencia busca sensibilizar a la comunidad universitaria sobre la importancia de la responsabilidad social en la formación profesional.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-19-at-09.49.07-1024x1024.jpeg"
    ]
  },
  {
    id: 1439,
    title: "Conferencia de Prensa por el I Aniversario de la DRSU",
    excerpt: "Evento de prensa que presenta los logros y avances de la DRSU en su primer año de funcionamiento.",
    date: "15 Jul 2023",
    day: "15",
    month: "JUL",
    views: "1,987",
    image: "https://rsu.webunp.online/wp-content/uploads/2023/07/Conferencia_Prensa_02-1005x429.jpg",
    category: "eventos",
    author: "DRSU",
    content: `
      <p>Se realizó una conferencia de prensa para conmemorar el primer aniversario de la DRSU, presentando los logros y avances alcanzados.</p>
      
      <p>El evento contó con la participación de medios de comunicación regionales y autoridades universitarias.</p>
      
      <h2>Logros Presentados</h2>
      
      <p>Se destacaron los principales logros del primer año de funcionamiento de la DRSU y las proyecciones para el futuro.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2023/07/Conferencia_Prensa_02-1005x429.jpg"
    ]
  },
  {
    id: 1432,
    title: "UNP organizará Encuentro Nacional de Responsabilidad Social Universitaria ENARSU 2023",
    excerpt: "Anuncio oficial de la organización del ENARSU 2023 por parte de la Universidad Nacional de Piura.",
    date: "12 Jul 2023",
    day: "12",
    month: "JUL",
    views: "2,345",
    image: "https://rsu.webunp.online/wp-content/uploads/2023/07/Foto_reunion_ENARSU-002-1-1024x1024.jpg",
    category: "eventos",
    author: "DRSU",
    content: `
      <p>La Universidad Nacional de Piura anunció oficialmente la organización del Encuentro Nacional de Responsabilidad Social Universitaria ENARSU 2023.</p>
      
      <p>Este evento nacional reunirá a universidades de todo el país para fortalecer la responsabilidad social universitaria.</p>
      
      <h2>Importancia del Evento</h2>
      
      <p>El ENARSU 2023 representa una oportunidad única para fortalecer las redes interuniversitarias y promover la colaboración en proyectos de impacto social.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2023/07/Foto_reunion_ENARSU-002-1-1024x1024.jpg"
    ]
  },
  {
    id: 1390,
    title: "I Aniversario de la DRSU",
    excerpt: "Celebración del primer aniversario de la Dirección de Responsabilidad Social Universitaria de la UNP.",
    date: "10 Jul 2023",
    day: "10",
    month: "JUL",
    views: "3,456",
    image: "https://rsu.webunp.online/wp-content/uploads/2023/07/1-1024x1024.jpg",
    category: "eventos",
    author: "DRSU",
    content: `
      <p>Se celebró el primer aniversario de la Dirección de Responsabilidad Social Universitaria de la UNP, marcando un hito importante en la historia institucional.</p>
      
      <p>Este evento conmemora los logros alcanzados en el primer año de funcionamiento de la DRSU.</p>
      
      <h2>Logros del Primer Año</h2>
      
      <p>Durante su primer año, la DRSU ha logrado implementar diversos programas y proyectos de impacto social en la región.</p>
    `,
    gallery: [
      "https://rsu.webunp.online/wp-content/uploads/2023/07/1-1024x1024.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2023/07/2-1-1024x1024.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2023/07/3-1024x1024.jpg",
      "https://rsu.webunp.online/wp-content/uploads/2023/07/4-1024x1024.jpg"
    ]
  }
];

// Función para obtener noticias por categoría
export const getNewsByCategory = (category: string): NewsItem[] => {
  if (category === 'all') return newsData;
  return newsData.filter(news => news.category === category);
};

// Función para obtener una noticia por ID
export const getNewsById = (id: string): NewsItem | undefined => {
  return newsData.find(news => news.id.toString() === id);
};

// Función para obtener las últimas noticias
export const getLatestNews = (limit: number = 3): NewsItem[] => {
  return newsData.slice(0, limit);
};

// Función para formatear fecha
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Categorías disponibles
export const newsCategories = [
  { id: 'all', name: 'Todas', color: 'bg-gray-100 text-gray-800' },
  { id: 'eventos', name: 'Eventos', color: 'bg-blue-100 text-blue-800' },
  { id: 'alianzas', name: 'Alianzas', color: 'bg-green-100 text-green-800' },
  { id: 'voluntariado', name: 'Voluntariado', color: 'bg-purple-100 text-purple-800' },
  { id: 'capacitacion', name: 'Capacitación', color: 'bg-orange-100 text-orange-800' },
  { id: 'reconocimientos', name: 'Reconocimientos', color: 'bg-yellow-100 text-yellow-800' },
  { id: 'salud', name: 'Salud', color: 'bg-pink-100 text-pink-800' },
  { id: 'tecnologia', name: 'Tecnología', color: 'bg-indigo-100 text-indigo-800' },
  { id: 'educacion', name: 'Educación', color: 'bg-teal-100 text-teal-800' },
  { id: 'arte', name: 'Arte', color: 'bg-red-100 text-red-800' },
  { id: 'ambiente', name: 'Ambiente', color: 'bg-emerald-100 text-emerald-800' },
  { id: 'inclusion', name: 'Inclusión', color: 'bg-violet-100 text-violet-800' },
  { id: 'cultura', name: 'Cultura', color: 'bg-amber-100 text-amber-800' },
  { id: 'derechos', name: 'Derechos Humanos', color: 'bg-rose-100 text-rose-800' },
  { id: 'alimentacion', name: 'Alimentación', color: 'bg-lime-100 text-lime-800' },
  { id: 'vivienda', name: 'Vivienda', color: 'bg-cyan-100 text-cyan-800' },
  { id: 'genero', name: 'Género', color: 'bg-fuchsia-100 text-fuchsia-800' },
  { id: 'comunicacion', name: 'Comunicación', color: 'bg-sky-100 text-sky-800' },
  { id: 'turismo', name: 'Turismo', color: 'bg-stone-100 text-stone-800' },
  { id: 'apoyo', name: 'Apoyo Social', color: 'bg-slate-100 text-slate-800' },
  { id: 'emprendimiento', name: 'Emprendimiento', color: 'bg-orange-200 text-orange-900' },
  { id: 'mentoria', name: 'Mentoría', color: 'bg-blue-200 text-blue-900' },
  { id: 'bienestar', name: 'Bienestar Animal', color: 'bg-green-200 text-green-900' },
  { id: 'agricultura', name: 'Agricultura', color: 'bg-yellow-200 text-yellow-900' },
  { id: 'economia', name: 'Economía Solidaria', color: 'bg-purple-200 text-purple-900' },
  { id: 'investigacion', name: 'Investigación', color: 'bg-indigo-200 text-indigo-900' }
];