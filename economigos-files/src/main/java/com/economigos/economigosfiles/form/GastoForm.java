package com.economigos.economigosfiles.form;

import com.economigos.economigosfiles.services.EconomigosService;

public class GastoForm {

    private Long idConta;
    private Long idCartao;
    private Long idCategoria;
    private Boolean gastoCartao;
    private Double valor;
    private Boolean pago;
    private String descricao;
    private Boolean fixo;
    private String dataPagamento;

    public GastoForm() {
    }

    public GastoForm(String contaApelido, String categoriaNome, Double valor, String descricao, String dataPagamento) {
        this.gastoCartao = false;
        this.idConta = EconomigosService.requestContaByApelido(contaApelido).getId();
        this.idCategoria = EconomigosService.requestCategoriaByNome(categoriaNome).getId();
        this.valor = valor;
        this.pago = true;
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

    public Boolean getGastoCartao() {
        return gastoCartao;
    }

    public void setGastoCartao(Boolean gastoCartao) {
        this.gastoCartao = gastoCartao;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public Boolean getPago() {
        return pago;
    }

    public void setPago(Boolean pago) {
        this.pago = pago;
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
