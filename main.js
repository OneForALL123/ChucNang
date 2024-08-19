// Tạo biểu đồ đường
const ctx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
        datasets: [{
            label: 'Nhiệt độ cơ thể (°C)',
            data: [36.5, 36.7, 36.8, 36.6, 36.9, 37.0],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

// Cập nhật chỉ số bên cạnh (đây là dữ liệu tĩnh để minh họa)
document.getElementById('temperature').innerText = '36.8°C';
document.getElementById('heartRate').innerText = '80 bpm';
document.getElementById('bloodPressure').innerText = '125/85 mmHg';
