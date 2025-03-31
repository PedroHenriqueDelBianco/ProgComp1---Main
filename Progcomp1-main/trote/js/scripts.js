function calcular(){
    // recupera o valora da ação social digitado

    // declaração variável sem tipo
    let acaoSocial = document.getElementById("acaoS0ocial").value

    // recupera o valor da homenagem digitado
    let homenagem = document.getElementById("homenagem").value

    // recupera a qtde de litros de leite
    let leite = document.getElementById("leite").value

    // vamos somar os valores
    let soma = Number(acaoSocial) + Number(homenagem) + (2 * Number)
    alert(soma);

    // devolve o resultado para o HTML
    document.getElementById("soma").innerHTML = soma.toFixed(2)

    
}