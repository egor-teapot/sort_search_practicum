const data = {
    labels: labels,
    datasets: [{
        label: 'Gnome sort',
        data: [0.2676, 0.2807, 0.6393, 0.8437, 0.9254],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        borderWidth: 2.5
    },
    {
        label: 'Shell sort',
        data: [0.3067, 0.4446, 0.271, 0.3076, 0.6973, 0.6693, 0.8836],
        fill: false,
        borderColor: 'rgb(200, 20, 192)',
        tension: 0.1,
        borderWidth: 4
    },
    {
        label: 'Heap sort',
        data: [0.27, 0.3069, 0.4091, 0.4392, 0.5459, 0.7071, 0.7096],
        fill: false,
        borderColor: 'rgb(100, 200, 50)',
        tension: 0.1,
        borderWidth: 4,
        borderDash: [7, 5]
    }
    ]
};