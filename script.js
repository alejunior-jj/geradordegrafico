const chartType = document.getElementById('chartType').value;

if (chartType === 'pie') {
  const data = {
    labels: results.data.slice(1).map(row => row[0]),
    datasets: [{
      label: results.data[0][1],
      data: results.data.slice(1).map(row => row[1]),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 0, 0, 0.2)',
        'rgba(0, 255, 0, 0.2)',
        'rgba(0, 0, 255, 0.2)'
      ]
      ,
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  const ctx = document.getElementById('chart').getContext('2d');
  if (chart !== null) {
    chart.destroy(); // destruir o gráfico antigo antes de criar um novo
  }
  chart = new Chart(ctx, {
    type: chartType,
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            callback: function(value, index, values) {
              return 'R$ ' + value.toLocaleString('pt-BR');
            }
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true,
            callback: function(value, index, values) {
              return 'R$ ' + value.toLocaleString('pt-BR');
            }
          }
        }]
      }
    }
  });
} else {
  let chart = null;

  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const input = document.querySelector('input[type=file]');
    const file = input.files[0];

    Papa.parse(file, {
      complete: function(results) {
        const chartType = document.getElementById('chartType').value;

        const data = {
          labels: results.data.slice(1).map(row => row[0]),
          datasets: [{
            label: results.data[0][1],
            data: results.data.slice(1).map(row => row[1]),
            
        
          }]
        };
      
        const ctx = document.getElementById('chart').getContext('2d');
        if (chart !== null) {
          chart.destroy(); // destruir o gráfico antigo antes de criar um novo
        }
        chart = new Chart(ctx, {
          type: chartType,
          data: data,
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  callback: function(value, index, values) {
                    return 'R$ ' + value.toLocaleString('pt-BR');
                  }
                }
              }],
              xAxes: [{
                ticks: {
                  beginAtZero: true,
                  callback: function(value, index, values) {
                    return 'R$ ' + value.toLocaleString('pt-BR');
                  }
                }
              }]
            },
            legend: {
              display: true,
              position: 'bottom'
            },
            responsive: true,
            maintainAspectRatio: false
          }
        });
          } 
        })})}
