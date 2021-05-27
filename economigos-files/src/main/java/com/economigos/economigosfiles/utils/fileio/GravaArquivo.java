package com.economigos.economigosfiles.utils.fileio;

import com.economigos.economigosfiles.dtos.ContabilUltimasAtividades;
import com.economigos.economigosfiles.utils.structures.PilhaObj;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.FormatterClosedException;

public class GravaArquivo {

    private static File file;

    public static File getFile() {
        return file;
    }

    public static void gravaRegistro(String nomeArq, String registro) {
        BufferedWriter saida = null;

        try {
            saida = new BufferedWriter(new FileWriter(nomeArq, true));
        } catch (IOException e) {
            System.err.printf("Erro na abertura do arquivo: %s.\n", e.getMessage());
        }

        try {
            saida.append(registro + "\n");
            saida.close();

        } catch (IOException e) {
            System.err.printf("Erro ao gravar arquivo: %s.\n", e.getMessage());
        }
    }

    public static void gravaPilha(PilhaObj<ContabilUltimasAtividades> pilha, String nomeDoArquivo, Boolean csvFile) throws IOException {
        String registro = "";
        boolean crashed = false;

        if (csvFile) {
            nomeDoArquivo = nomeDoArquivo + ".csv";
            file = new File(nomeDoArquivo);
            FileWriter arquivo = new FileWriter(file);
            arquivo.flush();

            try {
                for (int i = 0; i < pilha.getSize(); i++) {
                    ContabilUltimasAtividades atividadeDaVez = pilha.pop();
                    registro = String.format
                            ("%-5s;%05.2f;%-30s;%s;",
                                    atividadeDaVez.getTipo(),
                                    atividadeDaVez.getValor(),
                                    atividadeDaVez.getDescricao(),
                                    atividadeDaVez.getData()
                            );
                    gravaRegistro(nomeDoArquivo, registro);
                }
            } catch (FormatterClosedException erro) {
                System.err.println("Erro ao gravar no arquivo");
                crashed = true;
            } finally {
                try {
                    arquivo.close();
                } catch (IOException erro) {
                    System.err.println("Erro ao fechar arquivo.");
                    crashed = true;
                }
                if (crashed)
                    System.exit(1);
            }

        } else {
            nomeDoArquivo = nomeDoArquivo + ".txt";
            file = new File(nomeDoArquivo);
            FileWriter arquivo = new FileWriter(file);
            arquivo.flush();
            gravarTxt(nomeDoArquivo, pilha);
        }

    }

    public static void gravarTxt(String nomeArq, PilhaObj<ContabilUltimasAtividades> pilha) {

        String header = "";
        String corpo = "";
        String trailer = "";
        int contRegDados = 0;

        Date dataDeHoje = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");

        header += "00EXTRATO";
        header += formatter.format(dataDeHoje);
        header += "01";
        gravaRegistro(nomeArq, header);

        for (int i = 0; i < pilha.getSize(); i++) {
            ContabilUltimasAtividades atividadeDaVez = pilha.pop();

            corpo = "";
            if (atividadeDaVez.getTipo().equals("Gasto")) {
                corpo += "02";
            } else {
                corpo += "03";
            }
            corpo += String.format("%-5s", atividadeDaVez.getTipo());
            corpo += String.format("%010.2f", atividadeDaVez.getValor());
            corpo += String.format("%-50s", atividadeDaVez.getDescricao());
            corpo += String.format("%-10s", atividadeDaVez.getData());
            corpo += String.format("%-25s", atividadeDaVez.getCategoria());
            corpo += String.format("%-15s", atividadeDaVez.getFonte());

            contRegDados++;
            gravaRegistro(nomeArq, corpo);
        }

        trailer += "01";
        trailer += String.format("%010d", contRegDados);
        gravaRegistro(nomeArq, trailer);
    }

}
