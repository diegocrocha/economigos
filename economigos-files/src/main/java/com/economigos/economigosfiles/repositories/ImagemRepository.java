package com.economigos.economigosfiles.repositories;

import com.economigos.economigosfiles.models.Imagem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ImagemRepository extends JpaRepository<Imagem, Long> {
    Optional<Imagem> findByNome(String nome);
}
