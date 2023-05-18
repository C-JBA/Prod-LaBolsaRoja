package com.labolsaroja.project.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="pedido")
public class Pedido {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="idpedido", unique = true, nullable = false)
	private long idPedido;
	@Column(nullable = false)
	private Date fecha;
	@Column(nullable = false)
	private float total;
	
	public Pedido(long idPedido, Date fecha, float total) {
		super();
		this.idPedido = idPedido;
		this.fecha = fecha;
		this.total = total;
	}

	

	public long getIdPedido() {
		return idPedido;
	}



	public void setIdPedido(long idPedido) {
		this.idPedido = idPedido;
	}



	public Date getFecha() {
		return fecha;
	}



	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}



	public float getTotal() {
		return total;
	}



	public void setTotal(float total) {
		this.total = total;
	}



	@Override
	public String toString() {
		return "Pedido [idPedido=" + idPedido + ", fecha=" + fecha + ", total=" + total + "]";
	}	

}
