# Donbosco-FirmaSimply-Grupo5.

feature/crear menu hamburguesa

### 📝 Registrar Asistencia (Dashboard) PÁGINA PRINCIPAL

Esta seria la página principal, inlcuye:

- Registrar la entrada y la salida a clase con la opción de añadir una nota
- Ver los últimos 4 registros de asistencia
- Ver las últimas 6 tareas pendientes
- Ver las últimas 4 píldoras pendientes

### 📌 CREAR Lista de Tareas SEGUNDA PÁGINA

En este apartado necesitamos:

- Crear una tarea nueva: nombre, categoría, descripción
- Ver las últimas 6 tareas, mostrando nombre, categoría, descripción, fecha de creación, estado (completada o pendiente)
- Marcar la tarea como completada o pendiente
- La opción borrar una tarea
- Estadísticas: cuantas tareas completadas en la ultima semana, por categoría, total pendientes

### 💊 CREAR Lista de Píldoras TERCERA PÁGINA

En este apartado necesitamos:

- Crear una píldora nueva: nombre, descripción, fecha de presentación
- Ver las últimas 6 píldoras, mostrando nombre, descripción, fecha de presentación, fecha de creación, estado (presentada o no).
- Marcar la píldora como presentada o pendiente
- La opción borrar una píldora
- Estadísticas: cuantas píldoras completadas en la ultima semana, total pendientes

### 🗃️ BD

Diagrama

- https://s3.us-west-2.amazonaws.com/secure.notion-static.com/13588738-3531-4aab-9f31-06df4f0cfe26/firmaSimply.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210622T100927Z&X-Amz-Expires=86400&X-Amz-Signature=3d45c01d71bb3f3ca82e227906d8d2536ffd13c73c5189c6f6eac1597a4da4a8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22firmaSimply.png%22

Partiendo del script sql dado por el equipo docente, hay que hacer lo siguiente:

- Completar las tablas, campos que faltan en el script
- Ejecutar el script en el phpmyadmin para crear la BD con las tablas y campos necesarios
- Utilizando las las sentencias DML:
    - Consultar mis píldoras y exportar el resultado en un Excel
    - Consultar mis tareas y exportar el resultado en un Excel
    - Insertar una píldora nueva
    - Actualizar esa píldora cambiando el nombre, descripción y la fecha de presentación
    - Borrar esa píldora

# Modalidades pedagógicas

- Duración: 2 sprint (2 semanas).
- Los coders trabajarán en grupos (los mismos grupos actuales)
- El backlog se creará en colaboración con el equipo docente en el primer día de cada sprint. Utilizar la herramienta de Trello o Notion para la organización del equipo.
- La parte diseño (Figma) será responsabilidad del equipo. Es importante tener en cuenta el tiempo que le vamos a dedicar a esta parte!!! (un wireframe también vale).

# Criterios de rendimiento

- El resultado final debe ser funcional
- Código limpio
- Estructura de carpetas ordenada respetando las buenas prácticas.
- Respetar las buenas prácticas mencionadas en el Front-End Checklist

# Modalidades de evaluación

Aparte del resultado final se valorará también el trabajo en equipo aplicando la metodología Scrum (daily, sprint retro)

# Entregables

- Enlace Heroku donde podemos ver la app LIVE
- Código de la web en un repositorio llamado "donbosco-firmasimply-grupoN" (donde N es el número de grupo) en github.
- Informes Excel de cada coder

# Recursos

- [https://losapuntesdemajo.vercel.app/](https://losapuntesdemajo.vercel.app/)
- [https://github.com/thedaviddias/Front-End-Checklist](https://github.com/thedaviddias/Front-End-Checklist)
