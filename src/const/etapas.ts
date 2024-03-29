interface ETAPA {
  titleTab: string
  titleContent: string
  content: string
  icon: string
}

import IconPrefactibilidad from '@/assets/icons/icon-prefactibilidad.svg'
import IconEvaluacion from '@/assets/icons/icon-evaluacion.svg'
import IconConstruccion from '@/assets/icons/icon-construccion.svg'
import IconOperacion from '@/assets/icons/icon-operaciones.svg'

const ETAPAS: ETAPA[] = [
  {
    titleTab: 'Prefactibilidad',
    titleContent: 'Qué considera esta etapa?',
    content: `El Estudio de Prefactibilidad del Proyecto Vizcachitas (PFS) fue terminado en abril de 2024. Dicho Estudio contempló todos los ámbitos mineros y ambientales del proyecto, incluyendo prospección, métodos mineros, procesamiento y metalurgia, infraestructura, mercado, permisos y medio ambiente, entre otros. El PFS demostró la viabilidad minera, económica y financiera del proyecto, permitiendo que el proyecto pueda avanzar a las siguientes etapas que se describen más adelante. El PFS es público, y puede ser descargado aquí [hiperlink].
Como parte de la etapa de prefactibilidad, se realizaron estudios y trabajos geológicos orientados a comprender el cuerpo mineralizado ubicado en el sector Las Tejas. En la campaña de 2021-2022 (noviembre de 2021 a marzo de 2022) habilitamos 16 plataformas, logrando perforar 8.668 metros lineales.  En la campaña de 2021-2022 no se construyeron caminos nuevos, sino que solo se habilitaron los existentes. El actual proyecto de sondajes mineros fue aprobado por la Comisión de Evaluación Ambiental de la Región de Valparaíso en abril de 2021, mediante la RCA N° 14/2021. 
Actualmente la empresa se encuentra evaluando la realización de trabajos de optimización de su estudio de prefactibilidad, a efectos de agregar valor al proyecto, tanto desde un punto de vista económico y financiero como de sostenibilidad. La realización de nuevos sondajes está actualmente en estudio.
`,
    icon: IconPrefactibilidad,
  },
  {
    titleTab: `Estudio de${'\n'}impacto ambiental`,
    titleContent: 'Qué considera esta etapa?',
    content: `Es el procedimiento técnico y administrativo que tiene por objeto identificar, evaluar y describir los impactos ambientales que producirá un proyecto en su entorno en caso de ser ejecutado, todo ello con el fin de que la Comisión de Evaluación Regional, el SEA y los órganos administrativos competentes puedan aceptarlo, rechazarlo o modificarlo. Durante esta etapa existirán instancias de participación activa de la comunidad para presentar preguntas y aclarar dudas. 
De manera anticipada, estamos realizando un activo trabajo de vinculación con la comunidad, con el objeto de poder entregar información oportuna a los vecinos sobre el proyecto minero y poder recoger sus inquietudes. 
`,
    icon: IconEvaluacion,
  },
  {
    titleTab: 'Construcción',
    titleContent: '',
    content: `Corresponde a la etapa de implementación del proyecto minero en el territorio, según las definiciones establecidas en el Estudio de Impacto Ambiental. Durante esta etapa, se trabajará articuladamente con la comunidad para priorizar la contratación de talento local y provisión de bienes y servicios por empresas de la comuna de Putaendo, Provincia de San Felipe y Región de Valparaíso.`,
    icon: IconConstruccion,
  },
  {
    titleTab: 'Inicio de la operación',
    titleContent: '',
    content: `Corresponde a la puesta en marcha del proyecto construido, la cual a través de la operación del proyecto se generaría mayormente concentrado de cobre y molibdeno en una menor cantidad.`,
    icon: IconOperacion,
  },
]

export { ETAPAS }
