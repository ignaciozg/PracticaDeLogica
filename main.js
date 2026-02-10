document.addEventListener('DOMContentLoaded', () => {
    
    // Boton y Contenedor
    const btn = document.getElementById('btnIniciar');
    const contenedor = document.getElementById('resultados');

    if (btn) {
        btn.addEventListener('click', () => {
            // Solicitud de numeros
            let num1 = Number(prompt("Ingresa el primer número:"));
            let num2 = Number(prompt("Ingresa el segundo número:"));
            let num3 = Number(prompt("Ingresa el tercer número:"));

            // validacion de numeros
            if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
                alert("Por favor, ingresa solo números válidos.");
                return;
            }

            const numeros = [num1, num2, num3];
            const mensajeElemento = document.getElementById('mensajeIguales');

            // --- LÓGICA DE COMPARACIÓN ACTUALIZADA ---
            if (num1 === num2 && num2 === num3) {
                // Caso: Los tres son iguales
                console.log("Los números son iguales.");
                mensajeElemento.innerText = "Los números son iguales.";
            } else if (num1 === num2 || num1 === num3 || num2 === num3) {
                // Caso: Al menos dos son iguales (ejemplo: 4, 4, 2)
                console.log("Hay números iguales.");
                mensajeElemento.innerText = "Hay números iguales.";
            } else {
                // Caso: Todos son diferentes
                mensajeElemento.innerText = "";
            }
            // -----------------------------------------

            // se ordenan de mayor a menor
            const mayorMenor = [...numeros].sort((a, b) => b - a);
            // se ordenan de menor a mayor
            const menorMayor = [...numeros].sort((a, b) => a - b);

            // Salida a consola
            console.log("Ordenados de mayor a menor: " + mayorMenor.join(", "));
            console.log("Ordenados de menor a mayor: " + menorMayor.join(", "));

            // Salida a DOM
            document.getElementById('mayorMenor').innerText = mayorMenor.join(", ");
            document.getElementById('menorMayor').innerText = menorMayor.join(", ");
            
            // contenedor de resultados
            contenedor.classList.remove('hidden');
        });
    } else {
        console.error("No se encontró el botón con ID 'btnIniciar'. Revisa tu HTML.");
    }
});