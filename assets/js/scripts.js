document.addEventListener('DOMContentLoaded', () => {
    const cpf = document.getElementById('cpf');
    const telefone = document.getElementById('telefone');
    const cep = document.getElementById('cep');

    // Máscara para CPF 
    cpf.addEventListener('input', () => {
        let value = cpf.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        
        // Aplica a máscara apenas quando estiver preenchendo, não no valor final
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        cpf.value = value;
    });

    // Máscara para Telefone 
    telefone.addEventListener('input', () => {
        let value = telefone.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);

        if (value.length > 10) {
            // Celular com 9º dígito (11 dígitos)
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (value.length > 6) {
            // Telefone com 8 dígitos ou celular incompleto (10 dígitos)
            value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (value.length > 2) {
            // Apenas o DDD
             value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        } else if (value.length > 0) {
             value = value.replace(/(\d{0,2})/, '($1');
        }
        
        telefone.value = value;
    });

    // Máscara para CEP 
    cep.addEventListener('input', () => {
        let value = cep.value.replace(/\D/g, '');
        if (value.length > 8) value = value.slice(0, 8);
        value = value.replace(/(\d{5})(\d{3})/, '$1-$2');
        cep.value = value;
    });
});