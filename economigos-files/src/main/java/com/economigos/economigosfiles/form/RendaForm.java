package com.economigos.economigosfiles.form;

import com.economigos.economigosfiles.services.EconomigosService;

public class RendaForm {

    private Long idConta;
    private Long idCategoria;
    private Double valor;
    private Boolean recebido;
    private String descricao;
    private Boolean fixo;
    private String dataPagamento;

    public RendaForm() {
    }

    public RendaForm(String contaApelido, String categoriaNome, Double valor, String descricao, String dataPagamento) {
        this.idConta = EconomigosService.requestContaByApelido(contaApelido).getId();
        this.idCategoria = EconomigosService.requestCategoriaByNome(categoriaNome).getId();
        this.valor = valor;
        this.recebido = true;
        this.descricao = descricao;
        this.fixo = false;
        this.dataPagamento = dataPagamento;
    }


    public Long getIdConta() {
        return idConta;
    }

    public void setIdConta(Long idConta) {
        this.idConta = idConta;
    }

    public Long getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(Long idCategoria) {
        this.idCategoria = idCategoria;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public Boolean getRecebido() {
        return recebido;
    }

    public void setRecebido(Boolean recebido) {
        this.recebido = recebido;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Boolean getFixo() {
        return fixo;
    }

    public void setFixo(Boolean fixo) {
        this.fixo = fixo;
    }

    public String getDataPagamento() {
        return dataPagamento;
    }

    public void setDataPagamento(String dataPagamento) {
        this.dataPagamento = dataPagamento;
    }
}
