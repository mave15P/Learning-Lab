const pantalla = document.getElementById('pantalla');

function agregarAlPantalla(valor) {
    pantalla.value = pantalla.value + valor;
}

    document.getElementById('boton-cero').addEventListener('click', function() {
        agregarAlPantalla('0');
    });

    document.getElementById('boton-uno').addEventListener('click', function() {
        agregarAlPantalla('1');
    });

    document.getElementById('boton-dos').addEventListener('click', function() {
        agregarAlPantalla('2');
    });

    document.getElementById('boton-tres').addEventListener('click', function() {
        agregarAlPantalla('3');
    });

    document.getElementById('boton-cuatro').addEventListener('click', function() {
    agregarAlPantalla('4');
    });

    document.getElementById('boton-cinco').addEventListener('click', function() {
        agregarAlPantalla('5');
    });

    document.getElementById('boton-seis').addEventListener('click', function() {
        agregarAlPantalla('6');
    });

    document.getElementById('boton-siete').addEventListener('click', function() {
        agregarAlPantalla('7');
    });

    document.getElementById('boton-ocho').addEventListener('click', function() {
        agregarAlPantalla('8');
    });

    document.getElementById('boton-nueve').addEventListener('click', function() {
        agregarAlPantalla('9');
    });


    //simbolos
document.getElementById('boton-mas').addEventListener('click', function() {
    agregarAlPantalla('+');
});

document.getElementById('boton-punto').addEventListener('click', function() {
    agregarAlPantalla('.');
});

document.getElementById('boton-asterisco').addEventListener('click', function() {
    agregarAlPantalla('*'); 
});

document.getElementById('boton-diagonal').addEventListener('click', function() {
    agregarAlPantalla('/'); 
});

document.getElementById('boton-menos').addEventListener('click', function() {
    agregarAlPantalla('-');
});


    //borrado
document.getElementById('boton-borrar-todo').addEventListener('click', function() {
    pantalla.value = ""; 
});

document.getElementById('boton-borrar').addEventListener('click', function() {
    pantalla.value = pantalla.value.slice(0, -1);
});


    //logica matematica
document.getElementById('boton-igual').addEventListener('click', function() {
    try {
        // Usamos el constructor de Function, que es un poco más restringido que eval()
        // y permite calcular operaciones matemáticas básicas
        const resultado = new Function('return ' + pantalla.value)();
        
        // Verificamos si el resultado es un número válido
        if (isFinite(resultado)) {
            pantalla.value = resultado;
        } else {
            pantalla.value = "Error";
        }
    } catch (e) {
        pantalla.value = "Error";
    }
});

