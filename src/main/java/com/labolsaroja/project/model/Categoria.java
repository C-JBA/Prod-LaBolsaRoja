package com.labolsaroja.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="categoria")
public class Categoria {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="idcategoria", unique = true, nullable = false)
	private long id;
	@Column(nullable = false)
	private String tipo;
	
	public Categoria(long id, String tipo) {
		super();
		this.id = id;
		this.tipo = tipo;
	}
	
	public Categoria() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	@Override
	public String toString() {
		return "Categoria [id=" + id + ", tipo=" + tipo + "]";
	}
}
