package com.labolsaroja.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="material")
public class Material {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="idmaterial", unique = true, nullable = false)
	private long IdMaterial;
	@Column(nullable = false)
	private String material;
	
	public Material(long idMaterial, String material) {
		super();
		IdMaterial = idMaterial;
		this.material = material;
	}
	
	public Material() {
	}

	public long getIdMaterial() {
		return IdMaterial;
	}

	public void setIdMaterial(long idMaterial) {
		IdMaterial = idMaterial;
	}

	public String getMaterial() {
		return material;
	}

	public void setMaterial(String material) {
		this.material = material;
	}

	@Override
	public String toString() {
		return "Material [IdMaterial=" + IdMaterial + ", material=" + material + "]";
	}
}
