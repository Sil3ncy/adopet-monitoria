
//JS DO CADASTRO DE ANIMAIS


document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var peso = document.getElementById("peso").value;
    var endereco = document.getElementById("endereco").value;
    var raca = document.getElementById("raca").value;
    var whatsapp = document.getElementById("whatsapp").value;
    var personalidade = document.getElementById("personalidade").value;
    var descricao = document.getElementById("descricao").value;
 
    document.getElementById('imagem').addEventListener('click', function(){
        document.getElementById('inputImage').click();
    });

    //Objeto
    var animal = {
        nome: nome,
        idade: idade,
        peso: peso,
        endereco: endereco,
        raca: raca,
        whatsapp: whatsapp,
        personalidade: personalidade,
        descricao: descricao,
        foto: foto
        
    };
                                                                                                                            
    // Recupera o array de animais do localStorage
    let strdados = localStorage.getItem('db');
    let objdados = { animais: [] };

    if (strdados) {
        objdados = JSON.parse(strdados);
    }

    // Adiciona o novo animal ao array
    objdados.animais.push(animal);

    // Salva o array atualizado no localStorage
    localStorage.setItem('db', JSON.stringify(objdados));

    

    // Limpa o formulário
    //document.getElementById("form").reset();

    // document.getElementById('foto').addEventListener('click', function(event){
    //     document.getElementById()
    // })

    alert(`Cadastro do animal realizado com sucesso! ${nome}`);
 
   
    location.reload();

    


});
