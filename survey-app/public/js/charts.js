document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('surveyChart').getContext('2d');
    const surveyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Reading', 'Sports'],
            datasets: [{
                label: 'Hobbies',
                data: [2, 3], // Example data
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
