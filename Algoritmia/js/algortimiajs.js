//vamos a tener que obtener los valores de los input

function problema1(){
    var p1_input = document.querySelector('#p1-input').value;

    /*
    tenemos que identificar el espacio
    tenemos que invertir la cadena
    hola como
    como hola
    */ 

    var p1_array = p1_input.split(' ').reverse();

    //contruir una nueva cadena a partir del array invertido

    //comohola

    var p1_res = '';

    p1_array.forEach(function (palabra, i){
        //si estamos al princio o final de la palabra
        // como hola 
        if(i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });

    document.querySelector('#p1-output').textContent = p1_res;
}

function problema2(){
    /*
    Para encontrar el minimo producto escalar entre 2 vectores, tenemos que realizar
    las operaciones correspondientes que son el maximo valor de un vector por
    el minimo vector del otro valor 
    
    */ 

    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    //contruir el vector
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //ordenar los elementos del vector

    v1 = v1.sort(function (a, b){
        return b-a;
    });

    v2 = v2.sort(function (a, b){
        return b-a;
    });

    //invertir el vector
    v2 = v2.reverse();

    //producto
    var p2_producto = 0;

    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }

    document.querySelector('#p2-output').textContent = 'Producto escalar minimo :' + p2_producto;


}

function problema3(){
    let abc = [];
    var avance = true;
    /* 29.- Se consigue la cadena de texto */
    var result = document.getElementById('p3-input').value;
    /* Se verifica que no tenga espacios y tiene que terminar con una "," (30-36) */
    if (result.includes(' ')) {
        alert('Borre los espacios')
        avance = false;
    } else { avance = true }
    /* Ultimo caracter ingresado debe ser una coma */
    if (result.charAt(result.length - 1) == ',' && avance == true) {
        /* Elimina las comas y crea un array con las palabras */
        var diccionary = result.split(',');
        console.log(diccionary)
        /* Variables contar el numero de caracteres unicos */
        let palabra = '';
        let letra = '';
        /* Recorre el array de palabras (input) */
        diccionary.forEach((element) => {
            /* Cada ciclo se borrara los caracteres de palabra */
            palabra = '';
            /* Obtener el caracter de cada palabra y lo suma al string de palabra (50-51)
            si este caracter ya lo posee no se le suma(53-55) */
            for (var i = 0; i <= element.length - 1; i++) {
                letra = element.charAt(i)
                if (palabra.includes(letra) == false) {
                    palabra += letra
                }
                if (i == 50) { break }
            }
            /* Se cuenta los caracteres de la variable 'palabra' (ya no contiene caracteres repetidos) */
            /* Este numero se agrega al array (61) */
            abc.push(palabra.length)
        });
        /* 'mayor' se usara para saber cual es el numero mayor que se le stuvieron agrgando los numeros  */
        var mayor = Math.max(...abc);
        var posiscionPalabra = abc.indexOf(mayor);
        /* Lo unico que falta es que actualizen el valor de la palabra con mas caracteres unicos
        seria algo asi: 
        

        document.getElementById('p3-output').value = `La palabra con mas caracteres es: 
        ${diccionary[posicionPalabra]}
        `*/
        console.log(Math.max(...abc))
    } else { alert('Tiene que terminar en coma') }

}
/*
problema 3
primero mi alfabeto a - z
identificar la coma   varible.split(',')
eliminar los espacios   
habia, un, patito, que, decia, miau, miau
4 (h, a, b, i)
2 (u, n)
5 (p, a, t, i, o)
variable que se encargue de iterar la palabra
guardando los caracteres unicos
un bucle dentro de otro bucle
wiiiiiiiiiiiiiiii uwu/
*/