package com.labolsaroja.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="producto")
public class Producto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="idproducto", unique = true, nullable = false)
	private long id;
	@Column(nullable = false)
	private String nombre;
	private int largo;
	private int ancho;
	private int fuelle;
	@Column(nullable = false)
	private String descripcion;
	@Column(nullable = false)
	private double precio;
	@Column(nullable = false)
	private String img;
	
	public Producto(long id, String nombre, int largo, int ancho, int fuelle, String descripcion, double precio,
			String img) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.largo = largo;
		this.ancho = ancho;
		this.fuelle = fuelle;
		this.descripcion = descripcion;
		this.precio = precio;
		this.img = img;
	}//Constructor de Producto
	
	public Producto() {	
	}//COnstructor vacio

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getLargo() {
		return largo;
	}

	public void setLargo(int largo) {
		this.largo = largo;
	}

	public int getAncho() {
		return ancho;
	}

	public void setAncho(int ancho) {
		this.ancho = ancho;
	}

	public int getFuelle() {
		return fuelle;
	}

	public void setFuelle(int fuelle) {
		this.fuelle = fuelle;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	@Override
	public String toString() {
		return "Producto [id=" + id + ", nombre=" + nombre + ", largo=" + largo + ", ancho=" + ancho + ", fuelle="
				+ fuelle + ", descripcion=" + descripcion + ", precio=" + precio + ", img=" + img + "]";
	}
}//class Producto
