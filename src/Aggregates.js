/*
    Crearemos dos lookup mediante la orden aggregate.

    Un primer lookup que establecerá una relación de tipo 1:N entre nuestras colecciones productos 
    y categorías

    Y un segundo lookup cuya relación será de tipo N:M entre Productos y proveedores
*/


/*
    Este sería un ejemplo de relación 1:N
*/

db.productos.aggregate([
    {
        $lookup:
        {
        from: "categorias",
        localField: "idCategoria",
        foreignField: "_id",
        as: "Su categoría es:"
        }
    },
    {
        $project:
        {
            idProveedor: 0,
            idCategoria: 0
        }
    }
]).pretty()

/*
    Este sería un ejemplo de relación N:M
*/

db.productos.aggregate([
    {
        $lookup:
        {
        from: "Proveedores",
        localField: "idProveedor",
        foreignField: "_id",
        as: "Su proveedor es:"
        }
    },
    {
        $project:
        {
            idProveedor: 0,
            idCategoria: 0
        }
    }
]).pretty()

/*
    Esto sería lo que obtendríamos si ejecutaramos esta relación N:M pero de forma inversa
*/

db.Proveedores.aggregate([
    {
        $lookup:
        {
        from: "productos",
        localField: "_id",
        foreignField: "idProveedor",
        as: "Sus productos son:"
        }
    },
    {
        $project:
        {
            idProveedor: 0,
            Tlfno:0,
            Ciudad:0,
        }
    }
]).pretty()

/*
    Por último, esto sería un ejercicio de lookup en el que utilizariamos otras etapas como Match o Sort
*/

db.productos.aggregate([
    {
        $lookup:
        {
        from: "categorias",
        localField: "idCategoria",
        foreignField: "_id",
        as: "Su categoría es:"
        }
    },
    {
        $match: {
            "detallesProducto.stock": {$gte: 30}
        }
    },
    {
        $project:
        {
            idProveedor: 0,
            "detallesProducto.descripcion":0,
            "detallesProducto.stock":0,
            idCategoria: 0
        }
    }
]).pretty()