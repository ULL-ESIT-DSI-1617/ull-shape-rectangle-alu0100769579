"use strict";

let Shape = require('@alu0100769579/ull-shape-alu0100769579');

/**
 *Paquete npm de Rectangle
 * 
 * Autor: Raúl Martín Morales
 * 
 * Aquí creamos la clase Rectangle que hereda de Shape
 * 
 * @class Rectangle
 * @param {hash} options Ancho y Alto
 * 
 */
 
class Rectangle extends Shape {
  
    /**
    * @construct Rectangle
    * @param{hash} options Ancho y Alto
    */
    
    constructor(options) {
      super(options)
    }
    
    /**
    * @function getArea
    * @return {value} retorna el valor del area del rectangle
    */
    
    area() {
      return this.width * this.height;
    }
}
Shape.Shapes.Rectangle = Rectangle;
module.exports = Rectangle;
