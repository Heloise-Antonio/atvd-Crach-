// Adiciona o evento de clique ao botão
document.getElementById("btnEnviar").addEventListener("click", gerarCracha);

function gerarCracha() {
    const mensagemErro = document.getElementById("mensagem-erro");
    mensagemErro.style.display = "none";
    mensagemErro.innerHTML = "";

    // Coleta os dados do formulário
    const nome = document.getElementById("inNome").value.trim();
    const telefone = document.getElementById("inFone").value.trim();
    const email = document.getElementById("inMail").value.trim();
    const cargo = document.getElementById("inCargo").value.trim();
    const departamento = document.getElementById("inDepto").value.trim();
    const imagemInput = document.getElementById("inImg");
    const qrCodeInput = document.getElementById("inQRCode");
    
    // Valida os campos
    if (nome.length < 5) {
        mensagemErro.innerHTML += "O nome deve ter pelo menos 5 caracteres!<br>";
    }
    if (telefone.length === 0) {
        mensagemErro.innerHTML += "O campo 'Telefone' não pode estar vazio!<br>";
    }
    if (email.length === 0) {
        mensagemErro.innerHTML += "O campo 'E-mail' não pode estar vazio!<br>";
    }
    if (cargo.length === 0) {
        mensagemErro.innerHTML += "O campo 'Cargo' não pode estar vazio!<br>";
    }
    if (departamento.length === 0) {
        mensagemErro.innerHTML += "O campo 'Departamento' não pode estar vazio!<br>";
    }

    // Mensagem de erro
    if (mensagemErro.innerHTML !== "") {
        mensagemErro.style.display = "block";
        return;
    }

    // dados do crachá
    document.getElementById("spNome").innerText = nome;
    document.getElementById("spCargo").innerText = cargo;
    document.getElementById("spDepto").innerText = departamento;

    // Coloca a imagem no crachá
    const file = imagemInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const areaFoto = document.getElementById("area-foto");
            areaFoto.innerHTML = `<img src="${e.target.result}" alt="Foto do Funcionário" width="100">`;
        };
        reader.readAsDataURL(file);
    }

    // Exibe QR Code
    
    const qrFile = qrCodeInput.files[0];
    if (qrFile) {
        const qrReader = new FileReader();
        qrReader.onload = function (e) {
            const qrCode = document.getElementById("qrCode");
            qrCode.innerHTML = `<img src="${e.target.result}" alt="QRCode" width="100">`;
        };
        qrReader.readAsDataURL(qrFile);
    }
}