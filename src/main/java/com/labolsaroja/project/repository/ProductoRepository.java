package com.labolsaroja.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.labolsaroja.project.model.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long>{

}
