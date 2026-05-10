// ════════════════════════════════════════════════════════
//  config.js — CONFIGURACIÓN DEL EXAMEN
//  Edite este archivo para personalizar el examen.
//  No es necesario tocar examen.html ni panel.html.
// ════════════════════════════════════════════════════════

const EXAM_CONFIG = {

  // ── Datos del examen ──────────────────────────────────
  titulo:    "Derecho Comercial — Parcialito N° 1",
  subtitulo: "Cátedra Favier Dubois · UBA Derecho",

  // ── Tiempo total del examen (en minutos) ─────────────
  timerMinutos: 30,

  // ── Google Apps Script webhook URL ───────────────────
  // Pegue aquí la URL que obtiene al publicar el Apps Script
  sheetsWebhookUrl: "URL_DE_TU_GOOGLE_APPS_SCRIPT",

  // ── Habilitar resultados ──────────────────────────────
  // false → los alumnos NO pueden ver sus resultados todavía
  // true  → los alumnos SÍ pueden ver sus resultados
  // Cambie a true, genere y suba config.js cuando quiera habilitarlo.
  feedbackHabilitado: false,

  // ── Preguntas ─────────────────────────────────────────
  // tipo: "simple"   → una sola respuesta correcta
  // tipo: "multiple" → varias respuestas correctas
  // puntaje: número de puntos que vale la pregunta
  // opciones: array de { texto, correcta: true/false }
  // ─────────────────────────────────────────────────────
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
  // ─────────────────────────────────────────────────────
  // Para agregar más preguntas, copie un bloque de {}
  // y péguelo antes del cierre del array ] arriba.
  // ─────────────────────────────────────────────────────
};
