fetch('https://api.stripe.com/v1/payment_intents', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer SUA_CHAVE_SECRETA',
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
        amount: '2500', // Valor em centavos (R$25,00)
        currency: 'brl',
        payment_method_types: ['card'],
    }),
})
    .then(response => response.json())
    .then(data => {
        console.log('Pagamento criado:', data);
        // Redirecionar para página de sucesso ou mostrar feedback ao cliente
    })
    .catch(error => {
        console.error('Erro no pagamento:', error);
    });

fetch('https://api.mercadopago.com/instore/orders/qr/seller/your_store_id', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer SUA_CHAVE_SECRETA',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        external_reference: '123456789', // ID do pedido
        title: 'Plano Basic',
        description: 'Hospedagem NightHost',
        total_amount: 25.0,
    }),
})
    .then(response => response.json())
    .then(data => {
        console.log('QR Code gerado:', data);
        // Exibir QR Code no site
        document.getElementById('payment-details').innerHTML = `
            <img src="${data.qr_code_image}" alt="QR Code para PIX">
        `;
    })
    .catch(error => {
        console.error('Erro ao gerar QR Code:', error);
    });
