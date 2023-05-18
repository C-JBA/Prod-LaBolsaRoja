-- Usar la base de datos la_bolsa_rojadb
use la_bolsa_rojadb;
-- Insertar datos en la tabla de categorias
INSERT INTO categoria(tipo) 
VALUES('Joyero'), ('Costal'),('Morral'),('Bolsa'),('Caja');
-- Insertar datos en la tabla de material
INSERT INTO material
(material)
VALUES ("Ecológico"),("Manta"),("Silver"),("Semicanasta"),('Poliéster');
-- Insertar datos en la tabla de productos
INSERT INTO producto
(nombre,largo,ancho,fuelle,descripcion,precio,Categoria_idCategoria,Material_idMaterial,img)
VALUES 
("Joyero ecológico de (10×10) con jareta",10,10,null,"Material non woven de 70 gramos 100% biodegradable",4.00,1,1,"imagen1"),
("Joyero de manta (9×7) con jareta",9,7,null,"Material 100% de algodón natural",6.00,1,2,"imagen2"),
("Joyero de manta (10×8) con jareta","10","8",null,"Material 100% de algodón natural",10.00,1,2,"imagen3"),
("Joyero de manta (10×10) con jareta","10","10",null,"Material 100% de algodón natural",10.00,1,2,"imagen4"),
("Joyero de manta (14×8) con jareta","14","8",null,"Material 100% de algodón natural",11.00,1,2,"imagen5");
-- Insertar datos en la tabla de usuario
INSERT INTO usuario
(nombre,email,telefono,contrasena)
VALUES 
("Jessica Salazar","jessi@gmail.com","5512345678","1234"),
("Alejandra Núñez","ale@gmail.com","5587654321","1234"),
("Gabriela Muñoz","gaby@gmail.com","5546781213","1234"),
("Cristobal Barajas","cris@gmail.com","5578654512","1234"),
("Fernando Gómez","fer@gmail.com","5556461231","1234");
-- Insertar datos en la tabla pedido
INSERT INTO pedido (fecha,total,Usuario_idUsuarios)
VALUES ("2023-05-04","92","1");
-- Insertar datos en la tabla de detalle_pedido
INSERT INTO detalle_pedido 
(cantidad,Pedido_idPedido,Producto_idProducto)
VALUES
("2","1","1"),
("2","1","2"),
("2","1","3"),
("3","1","4"),
("2","1","5");

