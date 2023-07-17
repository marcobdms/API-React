'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var Producto = function (produdcto) {
    this.first_name = producto.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
};
Producto.create = function (newPro, result) {
    dbConn.query("INSERT INTO productos set ?", newPro, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Producto.findById = function (id, result) {
    dbConn.query("Select * from productos where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Producto.findAll = function (result) {
    dbConn.query("Select * from productos", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('productos : ', res);
            result(null, res);
        }
    });
};
Producto.update = function (id, employee, result) {
    dbConn.query("UPDATE productos SET Nombre=?, Precio=?, Stock=? WHERE id = ?", [producto.Nombre, producto.Precio, producto.Stock, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Producto.delete = function (id, result) {
    dbConn.query("DELETE FROM productos WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Producto;