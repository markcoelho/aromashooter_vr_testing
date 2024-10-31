document.getElementById('aromaButton').addEventListener('click', function() {
    const url = '/proxy/as2/diffuse';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            channels: [2],
            intensities: [100],
            durations: [100],
            booster: true
        })
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch((error) => console.error('Error:', error));
});
