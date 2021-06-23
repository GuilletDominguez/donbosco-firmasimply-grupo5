CREATE TABLE asistencias (
   id int NOT NULL AUTO_INCREMENT, 
   coder_id int NOT NULL, 
   nota VARCHAR(255),
   estado BOOLEAN,
   PRIMARY KEY (id),
   FOREIGN KEY (coder_id) REFERENCES users(id)
);

SELECT * FROM tareas;

UPDATE pildoras 
SET 
nombre='Introducción a TypeScript',
descripcion='Pon a prueba tus conocimientos sobre las nuevas tecnologías',
coder_id=1,
fecha_presentacion='2021-07-02'
WHERE id=1;

DELETE FROM tareas WHERE id=1;