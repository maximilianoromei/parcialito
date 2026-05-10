// ════════════════════════════════════════════
//  config.js — generado por Panel Docente
//  10/5/2026, 04:12:13
// ════════════════════════════════════════════

const EXAM_CONFIG = {
  titulo:    "Derecho Crediticio Bursatil e Insolvencia",
  subtitulo: "Cátedra Favier Dubois - Facultad de Ciencias Económicas - UBA",
  timerMinutos: 12,
  sheetsWebhookUrl: "https://script.google.com/macros/s/AKfycbwpx-n8-Lj10bWrP5l9Hl_4LsCFhYY3MlDnVJwApHCU5iEcRx6pUxa97OKhLk_FiV4/exec",
  feedbackHabilitado: true,
  preguntas: [
    {
      tipo: "simple",
      puntaje: 2,
      pregunta: "¿Cuál de los siguientes es un presupuesto objetivo de la quiebra según la LCQ?",
      opciones: [
        { texto: "El incumplimiento generalizado de obligaciones exigibles", correcta: true },
        { texto: "La presentación de estados contables desactualizados", correcta: false },
        { texto: "La falta de inscripción en el Registro Público de Comercio", correcta: false },
        { texto: "La existencia de más de tres acreedores", correcta: false }
      ]
    },
    {
      tipo: "simple",
      puntaje: 2,
      pregunta: "El período de sospecha en la quiebra se retrotrae, como regla general, a partir de:",
      opciones: [
        { texto: "La fecha de presentación en concurso preventivo", correcta: false },
        { texto: "La fecha de cesación de pagos fijada judicialmente", correcta: true },
        { texto: "La fecha del primer incumplimiento documentado", correcta: false },
        { texto: "La fecha de la sentencia de quiebra", correcta: false }
      ]
    },
    {
      tipo: "multiple",
      puntaje: 3,
      pregunta: "Seleccione los requisitos que debe cumplir el acreedor para solicitar la quiebra de su deudor:",
      opciones: [
        { texto: "Acreditar la existencia del crédito", correcta: true },
        { texto: "Demostrar el estado de cesación de pagos del deudor", correcta: true },
        { texto: "Haber obtenido sentencia de condena previa", correcta: false },
        { texto: "Indicar la causa de la cesación de pagos", correcta: false },
        { texto: "Probar que el deudor es sujeto concursable", correcta: true }
      ]
    },
    {
      tipo: "simple",
      puntaje: 2,
      pregunta: "¿Qué efecto produce la apertura del concurso preventivo sobre las ejecuciones individuales de acreedores quirografarios?",
      opciones: [
        { texto: "Se suspenden pero pueden reiniciarse a los 90 días", correcta: false },
        { texto: "Quedan radicadas ante el juez concursal y se suspenden", correcta: true },
        { texto: "Continúan ante el juez originario sin restricciones", correcta: false },
        { texto: "Se extinguen de pleno derecho", correcta: false }
      ]
    },
    {
      tipo: "simple",
      puntaje: 1,
      pregunta: "El acuerdo preventivo homologado produce efectos respecto de:",
      opciones: [
        { texto: "Solo los acreedores que votaron favorablemente", correcta: false },
        { texto: "Todos los acreedores quirografarios, incluso los ausentes y disidentes", correcta: true },
        { texto: "Solo los acreedores con verificación definitiva", correcta: false },
        { texto: "Los acreedores privilegiados que adhirieron expresamente", correcta: false }
      ]
    }
  ]
};
