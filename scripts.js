// ploty has been added by the superfast link in a index File, for this,   
// only we added the data and layout to use this library.

// data contain type of chart, in 'r' we add a all values previously computed
// in 'theta' we add the differents games actions 

data = [{
    type: 'scatterpolar',

    // adding a data of diferents games actions
    r: [56, 69, 85, 80, 90, 56],

    // adding the types of games actions
    theta: ['serve', 'atack', 'block', 'defense', 'setter', 'serve'],
    fill: 'toself',
}]

layout = {
    polar: {
        radialaxis: {
            visible: true,
            range: [0, 100]
        }
    },
    showlegend: false
}

Plotly.newPlot("static", data, layout, { displaylogo: false }, { responsive: true });
