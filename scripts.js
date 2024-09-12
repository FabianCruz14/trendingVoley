document.getElementById('dataForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los valores de los inputs y convertirlos a números
    const aspect1 = parseFloat(document.getElementById('aspect1').value);
    const aspect2 = parseFloat(document.getElementById('aspect2').value);
    const aspect3 = parseFloat(document.getElementById('aspect3').value);
    const aspect4 = parseFloat(document.getElementById('aspect4').value);
    const aspect5 = parseFloat(document.getElementById('aspect5').value);

    // Asegurarnos que todos los valores sean números válidos
    if (isNaN(aspect1) || isNaN(aspect2) || isNaN(aspect3) || isNaN(aspect4) || isNaN(aspect5)) {
        alert("Por favor ingresa valores numéricos válidos");
        return;
    }

    // Datos para la gráfica de radar
    const data = [{
        type: 'scatterpolar',
        r: [aspect1, aspect2, aspect3, aspect4, aspect5, aspect1],  // Cerramos el ciclo volviendo al inicio
        theta: ['Aspecto 1', 'Aspecto 2', 'Aspecto 3', 'Aspecto 4', 'Aspecto 5', 'Aspecto 1'],
        fill: 'toself'
    }];

    // Layout para la gráfica
    const layout = {
        polar: {
            radialaxis: {
                visible: true,
                range: [0, 100]  // Ajusta el rango de acuerdo a tus necesidades
            }
        },
        showlegend: false
    };

    // Renderizar la gráfica
    Plotly.newPlot('radarChart', data, layout);
});