package br.com.economigos.service.dto.models;

import br.com.economigos.service.model.Meta;

import java.util.List;
import java.util.stream.Collectors;

public class MetaDto {

    private Long id;
    private String nome;
    private String descricao;
    private Boolean metaGasto;
    private Double valorAtual;
    private Double valorFinal;
    private Boolean ativa;
    private Boolean finalizada;

    public MetaDto(Meta meta) {
        this.id = meta.getId();
        this.nome = meta.getNome();
        this.descricao = meta.getDescricao();
        this.metaGasto = meta.getMetaGasto();
        this.valorAtual = meta.getValorAtual();
        this.valorFinal = meta.getValorFinal();
        this.ativa = meta.getAtiva();
        this.finalizada = meta.getFinalizada();
    }

    public static List<MetaDto> converter(List<Meta> metas) {
        return metas.stream().map(MetaDto::new).collect(Collectors.toList());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Boolean getMetaGasto() {
        return metaGasto;
    }

    public void setMetaGasto(Boolean metaGasto) {
        this.metaGasto = metaGasto;
    }

    public Double getValorAtual() {
        return valorAtual;
    }

    public void setValorAtual(Double valorAtual) {
        this.valorAtual = valorAtual;
    }

    public Double getValorFinal() {
        return valorFinal;
    }

    public void setValorFinal(Double valorFinal) {
        this.valorFinal = valorFinal;
    }

    public Boolean getAtiva() {
        return ativa;
    }

    public void setAtiva(Boolean ativa) {
        this.ativa = ativa;
    }

    public Boolean getFinalizada() {
        return finalizada;
    }

    public void setFinalizada(Boolean finalizada) {
        this.finalizada = finalizada;
    }
}
