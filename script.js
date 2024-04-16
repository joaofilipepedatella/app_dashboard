$(document).ready(() => {
  $("#documentacao").on("click", () => {
    //$('#pagina').load('documentacao.html');
    /* $.get('documentacao.html', data => {
      $('#pagina').html(data)
    }) */
    $.post("documentacao.html", (data) => {
      $("#pagina").html(data);
    });
  });

  $("#suporte").on("click", () => {
    //$('#pagina').load('suporte.html');
    /* $.get('suporte.html', data => {
      $('#pagina').html(data)
    }) */
    $.post("suporte.html", (data) => {
      $("#pagina").html(data);
    });
  });

  //ajax
  $("#competencia").on("change", (e) => {
    let competencia = $(e.target).val();

    $.ajax({
      //metodo da req, url, dados, success, erro
      type: "GET",
      url: "app.php",
      data: `competencia=${competencia}`, //x-www-form-urlencoded
      dataType: "json", //tipo de retorno do servidor
      success: (dados) => {
        $("#numeroVendas").html(dados.numeroVendas);
        $("#totalVendas").html(dados.totalVendas);
        $("#clientesAtivos").html(dados.clientesAtivos);
        $("#clientesInativos").html(dados.clientesInativos);
        $("#totalReclamacoes").html(dados.totalReclamacoes);
        $("#totalElogios").html(dados.totalElogios);
        $("#totalSugestoes").html(dados.totalSugestoes);
        $("#totalDespesas").html(dados.totalDespesas);
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  });
});
