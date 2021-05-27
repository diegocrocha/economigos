package com.economigos.economigosfiles.utils.fileio;

import com.economigos.economigosfiles.form.GastoForm;
import com.economigos.economigosfiles.form.RendaForm;
import com.economigos.economigosfiles.models.Anexo;
import com.economigos.economigosfiles.services.EconomigosService;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class LeArquivo {

    public static Anexo leArquivo(FileReader arquivo, String nomeArquivo) {
        BufferedReader entrada = new BufferedReader(arquivo);

        String leitura = "";
        String tipoArquivo = "";
        String tipoRegistro = "";
        String versao = "";
        String registro = "";
        String dataGerado = "";
        String valor = "";
        String descricao = "";
        String categoria = "";
        String conta = "";
        String data = "";
        String body = "";
        int contRegistro = 0;

        try {
            leitura = entrada.readLine();

            while (leitura != null) {
                tipoRegistro = leitura.substring(0, 2);

                if (tipoRegistro.equals("00")) {

                    tipoArquivo = leitura.substring(2, 9);
                    dataGerado = leitura.substring(9, 28);
                    versao = leitura.substring(28, 30);

                } else if (tipoRegistro.equals("01")) {

                    int qtdRegistro = Integer.parseInt(leitura.substring(2, 5));

                    if (qtdRegistro == contRegistro) {
                        System.out.println("Quantidade de leituras gravados compatível com quantidade lida");
                    } else {
                        System.out.println("Quantidade de leituras gravados não confere com quantidade lida");
                    }
                } else if (tipoRegistro.equals("02") || tipoRegistro.equals("03")) {

                    body += leitura;

                    registro = leitura.substring(2, 7);
                    valor = leitura.substring(7, 17);
                    descricao = leitura.substring(17, 67);
                    data = leitura.substring(67, 86);
                    categoria = leitura.substring(86, 111);
                    conta = leitura.substring(111, 126);

                    if (tipoRegistro.equals("02")) {
                        EconomigosService.createGasto(
                                new GastoForm(conta, categoria,
                                        Double.parseDouble(valor.replace(",", ".")), descricao,
                                        data));
                    } else {
                        EconomigosService.createRenda(
                                new RendaForm(conta, categoria,
                                        Double.parseDouble(valor.replace(",", ".")), descricao,
                                        data));
                    }

                    contRegistro++;
                } else {
                    System.out.println("Tipo de leitura inválido");
                }
                leitura = entrada.readLine();
            }

            entrada.close();

            Anexo anexo = new Anexo(nomeArquivo, tipoArquivo, contRegistro, dataGerado, versao, body);
            return anexo;
        } catch (IOException e) {
            System.err.printf("Erro ao ler arquivo: %s.\n", e.getMessage());
        }
        return null;
    }
}