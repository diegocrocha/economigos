package com.economigos.economigosfiles.models;

import javax.persistence.*;
import java.nio.charset.StandardCharsets;

@Entity
public class Anexo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String tipo;
    private Integer qtdRegistros;
    private String dataGerado;
    private String versao;
    @Column(length = 500_000)
    private byte[] body;

    public Anexo() {
    }

    public Anexo(String nome, String tipo, Integer qtdRegistros, String dataGerado, String versao, String body) {
        this.nome = nome;
        this.tipo = tipo;
        this.qtdRegistros = qtdRegistros;
        this.dataGerado = dataGerado;
        this.versao = versao;
        this.body = body.getBytes(StandardCharsets.UTF_8);
    }
}
