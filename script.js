
// Crea un gráfico de ejemplo
const data = [
    {
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 3, 4, 5],
        type: 'scatter'
    }
];

const layout = {
    title: 'Gráfico de ejemplo',
    xaxis: { title: 'X' },
    yaxis: { title: 'Y' }
};

// Renderiza el gráfico en un elemento HTML
const myDiv = document.getElementById('myDiv');
Plotly.newPlot(myDiv, data, layout);