document.getElementById('payment-method').addEventListener('change', function () {
    const details = document.getElementById('payment-details');
    if (this.value === 'pix') {
        details.innerHTML = '<input type="text" id="pix-key" placeholder="Chave PIX">';
    } else {
        details.innerHTML = '<input type="text" id="card-details" placeholder="Detalhes do Cartão">';
    }
});

document.getElementById('payment-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Pagamento realizado com sucesso!');
});
