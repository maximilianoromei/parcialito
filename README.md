# 📋 Sistema de Parcialito — Documentación

## Archivos del sistema

| Archivo | Quién lo usa | Para qué |
|---------|-------------|----------|
| `examen.html` | Alumnos | Hacer el examen |
| `panel.html` | Profesor | Configurar preguntas, generar config.js, habilitar feedback |
| `config.js` | Ambos (auto) | Configuración del examen (se regenera desde panel.html) |

---

## ⚡ Inicio rápido

### 1. Configurar Google Sheets

1. Abra [Google Sheets](https://sheets.google.com) y cree una planilla nueva.
2. Vaya a **Extensiones → Apps Script**.
3. Borre el contenido y pegue el código que encontrará en `panel.html` → pestaña **Apps Script**.
4. Guarde y publique como **Aplicación web** (ejecutar como: Yo / acceso: Cualquier usuario).
5. Copie la URL de implementación.

### 2. Configurar el examen

1. Abra `panel.html` en su navegador.
2. Pestaña **Configuración**: pegue la URL de Apps Script, defina título y tiempo.
3. Pestaña **Preguntas**: cargue sus preguntas con opciones y puntajes.
4. Pestaña **Generar config.js**: haga clic en *Generar* y luego *Descargar*.
5. Suba `config.js` a su repositorio GitHub (reemplaza el existente).

### 3. Publicar en GitHub Pages

1. Suba los 3 archivos (`examen.html`, `panel.html`, `config.js`) a un repositorio.
2. Vaya a **Settings → Pages → Source: main / root**.
3. El examen estará disponible en `https://[usuario].github.io/[repo]/examen.html`.

### 4. Habilitar feedback (post-examen)

1. Abra `panel.html` → pestaña **Feedback**.
2. Haga clic en **Generar nuevo código**.
3. Vaya a **Generar config.js** → Descargar y subir a GitHub.
4. Comparta el código con los alumnos.
5. Los alumnos van a `examen.html`, hacen clic en **Ver resultados**, ingresan el código y su DNI.

---

## 🔒 Restricciones de seguridad activas

- Bloqueado copiar / pegar / cortar dentro del examen
- Bloqueado clic derecho durante el examen
- Bloqueado Ctrl+C / Ctrl+X / Ctrl+V / Ctrl+A / Ctrl+U / F12
- Envío automático al agotarse el tiempo
- Pantalla de identificación obligatoria (apellido, nombre, DNI)

---

## 📊 Datos en Google Sheets

Cada entrega crea una fila con:
- Fecha y hora
- Apellido y nombre
- DNI
- Nombre del examen
- Puntaje obtenido / máximo
- Tiempo usado (segundos)
- Detalle JSON con pregunta por pregunta (respuestas, correctitud, puntaje)

---

## ❓ Preguntas frecuentes

**¿Puedo usar el mismo sistema para varias materias?**
Sí. Cree un repositorio (o carpeta) por materia, cada uno con su propio `config.js`.

**¿Los alumnos pueden ver las respuestas correctas antes de que yo lo habilite?**
No. El código de feedback es necesario para acceder. Sin él, no pueden ver nada.

**¿Qué pasa si un alumno cierra el navegador antes de terminar?**
Las respuestas se envían solo al hacer clic en "Entregar" o al agotarse el tiempo. Si cierra antes, se pierden.

**¿Puedo cambiar el tiempo después de publicar?**
Sí. Modifique `timerMinutos` en `panel.html` → **Configuración**, regenere y suba `config.js`.
