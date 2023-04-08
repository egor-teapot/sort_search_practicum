const data = {
  labels: ["49kb", "460kb", "920kb", '47mb'],
  datasets: [{
    label: 'Boyer-Moore',
    data: [0.4545, 0.4808, 0.5348, 0.7076],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1,
    borderWidth: 2.5
  },
  {
    label: 'Knut-Morris-Parrat',
    data: [0.4977, 0.6478, 0.7209, 1.2547],
    fill: false,
    borderColor: 'rgb(200, 70, 150)',
    tension: 0.1,
    borderWidth: 5
  },
  {
    label: 'Rubin-Karp',
    data: [0.6518, 0.7494, 0.934, 0.9352],
    fill: false,
    borderColor: 'rgb(80, 80, 200)',
    tension: 0.1,
    borderWidth: 5,
    borderDash: [7, 5]
  }
  ]
};