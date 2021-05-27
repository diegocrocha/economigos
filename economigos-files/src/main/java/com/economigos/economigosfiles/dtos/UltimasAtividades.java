package com.economigos.economigosfiles.dtos;

import java.util.List;

public class UltimasAtividades {

    private String fonte;
    private Long id;
    private List<ContabilUltimasAtividades> contabilUltimasAtividadesDtos;

    public UltimasAtividades() {
    }

    public UltimasAtividades(String fonte, Long id, List<ContabilUltimasAtividades> contabilUltimasAtividadesDtos) {
        this.fonte = fonte;
        this.id = id;
        this.contabilUltimasAtividadesDtos = contabilUltimasAtividadesDtos;
    }

    public String getFonte() {
        return fonte;
    }

    public void setFonte(String fonte) {
        this.fonte = fonte;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<ContabilUltimasAtividades> getContabilUltimasAtividadesDtos() {
        return contabilUltimasAtividadesDtos;
    }

    public void setContabilUltimasAtividadesDtos(List<ContabilUltimasAtividades> contabilUltimasAtividadesDtos) {
        this.contabilUltimasAtividadesDtos = contabilUltimasAtividadesDtos;
    }

    @Override
    public String toString() {
        return "UltimasAtividades{" +
                "fonte='" + fonte + '\'' +
                ", id=" + id +
                ", contabilUltimasAtividades=" + contabilUltimasAtividadesDtos +
                '}';
    }
}
