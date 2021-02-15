/*
  Creamos tres colecciones dentro de una misma base de datos.
  Una primera colección "productos", una segunda colección "proveedores" y una tercera colección "categoría"

  Relacionaremos las 3 colecciones mediante distintos campos


Estructura de la colección de Productos:

      _id: Id
      detallesProducto: {
          nombre: String
          stock: Int
          descripcion: String
      }
      idCategoria
      idProveedor
*/

//Drop es una instrucción que nos permite eliminar toda la colección facilitándonos el Insertar nuevos datos o datos actualizados.
db.productos.drop()

//Insert many es una instrucción que ya hemos visto en multitud de ocasiones, nos permite introducir datos de forma ilimitada (a diferencia del insertOne)
db.productos.insertMany([
    {
        _id: 1,
        detallesProducto: {
            "nombre": "Leche",
            stock: 15,
            "descripcion": "Leche provinciana Semidesnatada"
        },
        idProveedor: [2,4],
        idCategoria: 3
    },
    {_id: 2, detallesProducto: {"nombre": "Chocolate", stock: 30, "descripcion":"Barras de chocolate con nueces"}, idProveedor: [3,5], idCategoria: 3},
    {_id: 3, detallesProducto: {"nombre": "Tarta", stock: 5, "descripcion":"Tarda para bodas, comuniones..."}, idProveedor: [1,4,5], idCategoria: 3},
    {_id: 4, detallesProducto: {"nombre": "Chorizo", stock: 45, "descripcion":"Embutido picante"}, idProveedor: [2,5], idCategoria: 2},
    {_id: 5, detallesProducto: {"nombre": "Filetes", stock: 25, "descripcion":"Filetes de tarnera"}, idProveedor: [2,6], idCategoria: 1},
    {_id: 6, detallesProducto: {"nombre": "Arroz", stock: 55, "descripcion":"Embutido"}, idProveedor: [1,4], idCategoria: 2},
    {_id: 7, detallesProducto: {"nombre": "Vainilla", stock: 25, "descripcion":"Embutido"}, idProveedor: [1,2], idCategoria: 2},
    {_id: 8, detallesProducto: {"nombre": "Galletas", stock: 45, "descripcion":"Embutido"}, idProveedor: [1,6], idCategoria: 1},
    {_id: 9, detallesProducto: {"nombre": "Bizcocho", stock: 35, "descripcion":"Embutido"}, idProveedor: [2,3,5], idCategoria: 1},
    {_id: 10, detallesProducto: {"nombre": "Espagettis", stock: 10, "descripcion":"Embutido"}, idProveedor: [3,4], idCategoria: 2},
    {_id: 11, detallesProducto: {"nombre": "Macarrones", stock: 10, "descripcion":"Embutido"}, idProveedor: [2,6], idCategoria: 3},
    {_id: 12, detallesProducto: {"nombre": "Chocolate", stock: 20, "descripcion":"Embutido"}, idProveedor: [4,5,6], idCategoria: 2},
    {_id: 13, detallesProducto: {"nombre": "Sopa", stock: 30, "descripcion":"Embutido"}, idProveedor: [2,6], idCategoria: 1},
]);

/*
Estructura de categorías: 
      _id: Id
      Categoria: String
*/

//Drop es una instrucción que nos permite eliminar toda la colección facilitándonos el Insertar nuevos datos o datos actualizados.
db.categorias.drop()

//Insert many es una instrucción que ya hemos visto en multitud de ocasiones, nos permite introducir datos de forma ilimitada (a diferencia del insertOne)
db.categorias.insertMany([
    {
        _id: 1,
        "Categoria": "Dulces"
    },
    {_id: 2, Categoria: "Refrescos"},
    {_id: 3, Categoria: "Alimentación"},
]);

/*
Estructura de Proveedores: 
      _id: Id
      NombreProveedor: String
      Tlfno: Int
      Ciudad: String
*/

//Drop es una instrucción que nos permite eliminar toda la colección facilitándonos el Insertar nuevos datos o datos actualizados.
db.Proveedores.drop()

//Insert many es una instrucción que ya hemos visto en multitud de ocasiones, nos permite introducir datos de forma ilimitada (a diferencia del insertOne)
db.Proveedores.insertMany([
    {
        _id: 1,
        "NombreProveedor": "Alimentacion SA",
        Tlfno: 999563544,
        Ciudad: "Barcelona"
    },
    {_id: 2, NombreProveedor: "Refrigerios SL", Tlfno: 943943942, Ciudad: "Sevilla"},
    {_id: 3, NombreProveedor: "Producciones", Tlfno: 3943943943, Ciudad: "Madrid"},
    {_id: 4, NombreProveedor: "Manutenciones", Tlfno: 3943943943, Ciudad: "Barcelona"},
    {_id: 5, NombreProveedor: "Alimentación", Tlfno: 3943943943, Ciudad: "Madrid"},
    {_id: 6, NombreProveedor: "AmberCumber", Tlfno: 3943943943, Ciudad: "Madrid"},
]);