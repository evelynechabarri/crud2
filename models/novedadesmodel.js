var pool = require('./bd');

/*Sirve para listar novedades */
async function getNovedades(){
    var query = "select * from novedades";
    var rows = await pool.query(query);
    return rows;
}

async function deleteNovedadesByid(id){
    var query = "delete from novedades where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function insertNovedad (obj){
 try {
     var query = "insert into novedades set ?";
     var rows = await pool.query(query, [obj])
     return rows;

 }catch (error) {
     console.log(error);
     throw error;
 }   //cierre catch
}   //cierra insert

//modificar solo-traer una novedad por id
async function getNovedadById(id) {
    var query = "select * from novedades where id=?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}
//update

async function modificarNovedadById(obj, id) {
    try {
        var query = "update novedades set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;

    } catch (error) {
        throw error;
    }
}//cierra update



module.exports = { getNovedades, deleteNovedadesByid, insertNovedad, getNovedadById, modificarNovedadById }