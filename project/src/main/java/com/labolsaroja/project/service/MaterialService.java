package com.labolsaroja.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.labolsaroja.project.model.Material;
import com.labolsaroja.project.repository.MaterialRepository;
@Service
public class MaterialService {
	private final MaterialRepository materialRepository;
	@Autowired
	public MaterialService(MaterialRepository materialRepository) {
		this.materialRepository=materialRepository;
	}
	public Material addMaterial(Material material) {
		Material tmpmat=null;
		if(materialRepository.findById(material.getIdMaterial()).isEmpty()) {
			tmpmat=materialRepository.save(material);
					}//if
		return tmpmat;
	}

	public Material getMaterial(Long id) {
		return materialRepository.findById(id).orElseThrow(
				()-> new IllegalArgumentException("Usuario con id"
	+id+" no existe.")
);
	}

	public Material deleteMaterial(Long id) {
		Material tmpmat=null;
		if(materialRepository.existsById(id)) {
			tmpmat = materialRepository.findById(id).get();
materialRepository.deleteById(id);
		}
		return tmpmat;
	}

	public Material updateMaterial(Long idMaterial, String material) {
		Material tmpmat = null;
		if(materialRepository.existsById(idMaterial)) {
			tmpmat = materialRepository.findById(idMaterial).get();
			if(material != null) {
				tmpmat.setMaterial(material); 
			}
		}
		return tmpmat;
	}
	
	public List<Material> getAllMaterials() {
		return materialRepository.findAll();
	}

}
