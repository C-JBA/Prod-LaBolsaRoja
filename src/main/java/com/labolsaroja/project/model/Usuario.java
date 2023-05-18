package com.labolsaroja.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="usuario")
public class Usuario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="idusuarios", unique = true, nullable = false)
	private long idUsuarios;
	@Column(nullable = false)
	private String nombre;
	@Column(nullable = false)
	private String email;
	@Column(nullable = false)
	private String telefono;
	@Column(nullable = false)
	private String contrasena;
	
	public Usuario(long idUsuarios, String nombre, String email, String telefono, String contrasena) {
		super();
		this.idUsuarios = idUsuarios;
		this.nombre = nombre;
		this.email = email;
		this.telefono = telefono;
		this.contrasena = contrasena;
	}
	
	public Usuario() {
	}

	public long getIdUsuarios() {
		return idUsuarios;
	}

	public void setIdUsuarios(long idUsuarios) {
		this.idUsuarios = idUsuarios;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getContrasena() {
		return contrasena;
	}

	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}

	@Override
	public String toString() {
		return "Usuario [idUsuarios=" + idUsuarios + ", nombre=" + nombre + ", email=" + email + ", telefono="
				+ telefono + ", contrasena=" + contrasena + "]";
	}
}
