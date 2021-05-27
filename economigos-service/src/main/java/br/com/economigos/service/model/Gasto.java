package br.com.economigos.service.model;

import br.com.economigos.service.repository.GastoRepository;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import java.util.List;

@Entity
public class Gasto extends Contabil {

    private Boolean pago;
    @ManyToOne
    private Cartao cartao;

    public Gasto(Conta conta, Categoria categoria, Double valor, String descricao, Boolean fixo, Boolean pago, String dataPagamento) {
        super(conta, categoria, valor, descricao, fixo, dataPagamento, "Gasto");
        this.pago = pago;
    }

    public Gasto(Cartao cartao, Categoria categoria, Double valor, String descricao, Boolean fixo, Boolean pago, String dataPagamento, String a) {
        super(categoria, valor, descricao, fixo, dataPagamento, "Gasto");
        this.pago = pago;
        this.cartao = cartao;
    }

    public Gasto() {
    }

    public static Double getUltimosMeses(String anoMes, GastoRepository gastoRepository, Long idConta) {
        Double soma = 0.0;

        List<Gasto> gastosMes01 = gastoRepository.findByDataPagamentoIsStartingWithByConta(anoMes, idConta);
        for (Gasto gasto : gastosMes01) {
            soma += gasto.getValor();
        }
        return soma;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getPago() {
        return pago;
    }

    public void setPago(Boolean pago) {
        this.pago = pago;
    }

    public Cartao getCartao() {
        return cartao;
    }

    public void setCartao(Cartao cartao) {
        this.cartao = cartao;
    }

}
