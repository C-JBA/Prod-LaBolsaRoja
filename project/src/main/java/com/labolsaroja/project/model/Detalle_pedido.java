package com.labolsaroja.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="detalle_pedido")
public class Detalle_pedido {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id", unique = true, nullable = false)
	private long id;
	@Column(nullable = false)
	private int cantidad;
	
	public Detalle_pedido(long id, int cantidad) {
		super();
		this.id = id;
		this.cantidad = cantidad;
	}
	
	public Detalle_pedido() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	@Override
	public String toString() {
		return "Detalle_pedido [id=" + id + ", cantidad=" + cantidad + "]";
	}
}
