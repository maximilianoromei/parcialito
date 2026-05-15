// ════════════════════════════════════════════
//  config.js — generado por Panel Docente
//  15/5/2026, 10:42:33
// ════════════════════════════════════════════

const EXAM_CONFIG = {
  titulo:    "Derecho Comercial — Parcialito N° 1",
  subtitulo: "Cátedra Favier Dubois · UBA Derecho",
  timerMinutos: 9,
  sheetsWebhookUrl: "https://script.google.com/macros/s/AKfycbwpx-n8-Lj10bWrP5l9Hl_4LsCFhYY3MlDnVJwApHCU5iEcRx6pUxa97OKhLk_FiV4/exec",
  cantSimples:   5,
  cantMultiples: 5,
  feedbackHabilitado: false,
  preguntas: [
    {
      tipo: "simple",
      puntaje: 1,
      pregunta: "Según el art. 957 del CCCN, el contrato es el acto jurídico mediante el cual dos o más partes manifiestan su consentimiento para:",
      opciones: [
        { texto: "Crear exclusivamente relaciones jurídicas patrimoniales.", correcta: false },
        { texto: "Crear, regular, modificar, transferir o extinguir relaciones jurídicas patrimoniales", correcta: true },
        { texto: "Crear o extinguir relaciones jurídicas, sean o no patrimoniales.", correcta: false },
        { texto: "Regular o modificar derechos reales y personales con efectos erga omnes.", correcta: false }
      ]
    },
    {
      tipo: "simple",
      puntaje: 1,
      pregunta: "En el contrato por adhesión (art. 984 CCCN), las cláusulas generales predispuestas son redactadas:",
      opciones: [
        { texto: "Por ambas partes conjuntamente antes de la suscripción", correcta: false },
        { texto: "Unilateralmente por el predisponente sin participación del adherente", correcta: true },
        { texto: "Por el juez o árbitro designado de común acuerdo.", correcta: false },
        { texto: "Por el Estado en ejercicio de su poder de policía comercial.", correcta: false }
      ]
    },
    {
      tipo: "simple",
      puntaje: 1,
      pregunta: "Conforme al art. 972 del CCCN, para que una proposición valga como oferta debe ser, entre otros requisitos:",
      opciones: [
        { texto: "Autosuficiente, vinculante y dirigida a persona determinada o determinable.", correcta: true },
        { texto: "Formulada por escrito, con plazo de vigencia y suscripta ante escribano público.", correcta: false },
        { texto: "Aceptada expresamente dentro de las 48 horas de su formulación", correcta: false },
        { texto: "Irrevocable y notificada mediante telegrama colacionado", correcta: false }
      ]
    },
    {
      tipo: "simple",
      puntaje: 1,
      pregunta: "De acuerdo al art. 1227 del CCCN, en el contrato de leasing el dador:",
      opciones: [
        { texto: "Transfiere el dominio pleno del bien al tomador a cambio del pago del canon", correcta: false },
        { texto: "Conviene transferir al tomador la tenencia de un bien para su uso y goce, contra el pago de un canon, confiriéndole una opción de compra por un precio.", correcta: true },
        { texto: "Se obliga a entregar el bien únicamente cuando el tomador haya pagado la totalidad del canon pactado.", correcta: false },
        { texto: "Cede la posesión del bien al tomador sin retribución, con obligación de restituirlo al vencimiento.", correcta: false }
      ]
    },
    {
      tipo: "simple",
      puntaje: 1,
      pregunta: "En el contrato de fideicomiso, la persona a quien se transmiten los bienes fideicomitidos al concluir el fideicomiso se denomina:",
      opciones: [
        { texto: "Fiduciante", correcta: false },
        { texto: "Fiduciario", correcta: false },
        { texto: "Beneficiario", correcta: false },
        { texto: "Fideicomisario", correcta: true }
      ]
    },
    {
      tipo: "simple",
      puntaje: 1,
      pregunta: "Respecto de la obligación del fiduciario de rendir cuentas, el art. 1675 del CCCN establece una regla que la diferencia de las normas generales sobre la materia. ¿Cuál es esa diferencia?",
      opciones: [
        { texto: "La obligación de rendir cuentas puede ser dispensada por el fiduciante en el contrato,", correcta: false },
        { texto: "La obligación de rendir cuentas del fiduciario no es dispensable", correcta: true },
        { texto: " La periodicidad de la rendición es libre en el fideicomiso", correcta: false },
        { texto: "Solo el fideicomisario puede requerir la rendición de cuentas, excluyendo al fiduciante y al beneficiario.", correcta: false }
      ]
    },
    {
      tipo: "simple",
      puntaje: 1,
      pregunta: "Si en un contrato de concesión las partes no fijan plazo o pactan uno inferior a cuatro años, el efecto que produce el art. 1506 del CCCN es:",
      opciones: [
        { texto: "La nulidad del contrato por ausencia de plazo determinado.", correcta: false },
        { texto: "Que se entiende convenido por cuatro años.", correcta: true },
        { texto: " Que el contrato se transforma automáticamente en uno por tiempo indeterminado.", correcta: false },
        { texto: "Que cualquiera de las partes puede resolverlo con un preaviso de noventa días.", correcta: false }
      ]
    },
    {
      tipo: "multiple",
      puntaje: 2,
      pregunta: "Son elementos esenciales del contrato según el CCCN: (Indicá todas las opciones correctas)",
      opciones: [
        { texto: "Consentimiento.", correcta: true },
        { texto: "Objeto", correcta: true },
        { texto: "Causa", correcta: true },
        { texto: "Forma solemne Absoluta", correcta: false },
        { texto: "Precio determinado en moneda nacional.", correcta: false }
      ]
    },
    {
      tipo: "multiple",
      puntaje: 2,
      pregunta: "Respecto del patrimonio fideicomitido, son afirmaciones correctas: (Indicá todas las opciones correctas)",
      opciones: [
        { texto: "Constituye un patrimonio separado del patrimonio propio del fiduciario.", correcta: true },
        { texto: "Está exento de la acción singular o colectiva de los acreedores del fiduciario.", correcta: true },
        { texto: "Está exento de la acción singular o colectiva de los acreedores del fiduciante", correcta: true },
        { texto: "La insuficiencia del patrimonio fideicomitido habilita la declaración de quiebra del fideicomiso", correcta: false }
      ]
    },
    {
      tipo: "multiple",
      puntaje: 2,
      pregunta: "Son características esenciales y tipificantes del contrato de agencia: (Indicá todas las opciones correctas)",
      opciones: [
        { texto: "El agente promueve negocios de manera estable y continuada.", correcta: true },
        { texto: "El agente actúa en forma independiente, sin relación laboral con el preponente", correcta: true },
        { texto: "El agente asume personalmente el riesgo de las operaciones que promueve", correcta: false },
        { texto: "El agente percibe una retribución por su tarea.", correcta: true },
        { texto: "El contrato debe instrumentarse por escrito", correcta: true }
      ]
    },
    {
      tipo: "multiple",
      puntaje: 2,
      pregunta: "Respecto de la evolución del sistema de control del mercado de capitales argentino, son afirmaciones correctas: (marcá todas las correctas)",
      opciones: [
        { texto: "Bajo la Ley 17.811, las bolsas de comercio ejercían el control de cotización y los mercados de valores tenían facultades sancionatorias sobre sus agentes, en un esquema denominado autorregulación.", correcta: true },
        { texto: "Bajo la Ley 17.811, la CNV no podía fiscalizar, sumariar ni sancionar directamente a los agentes y sociedades de bolsa, ya que esa función era exclusiva del mercado de valores respectivo.", correcta: true },
        { texto: " La Ley 26.831 mantuvo el esquema de autorregulación pero incorporó a la CNV como órgano de alzada ante las sanciones de los mercados.", correcta: false },
        { texto: "La Ley 26.831 eliminó la autorregulación y estableció a la CNV como único organismo de control de la oferta pública y de la cotización, obligando además a bolsas y mercados a reorganizarse como sociedades anónimas.", correcta: true },
        { texto: "Bajo la Ley 17.811, para operar en un mercado de valores el intermediario debía adquirir una acción del mercado donde actuaba.", correcta: true }
      ]
    },
    {
      tipo: "multiple",
      puntaje: 2,
      pregunta: "En relación a los activos financieros cotizantes, son afirmaciones correctas: (marcá todas las correctas)",
      opciones: [
        { texto: "Las acciones otorgan a su titular derechos políticos y económicos, y su rendimiento es variable según la performance de la sociedad emisora.", correcta: true },
        { texto: "Los bonos soberanos son títulos de deuda emitidos por el Estado; su flujo de fondos puede ser fijo, variable o indexado.", correcta: true },
        { texto: " Las Obligaciones Negociables convierten a su titular en socio de la sociedad emisora, con derecho a participar en las asambleas.", correcta: false },
        { texto: "Los futuros son contratos de compraventa a precio fijado hoy con entrega diferida, y operan en mercados estandarizados.", correcta: true },
        { texto: "Los derivados son instrumentos cuyo valor depende de un activo subyacente y pueden utilizarse tanto para cobertura como para especulación.", correcta: true }
      ]
    }
  ]
};