package com.labolsaroja.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.labolsaroja.project.model.Material;
import com.labolsaroja.project.service.MaterialService;
@RestController
@RequestMapping (path="/api/material/")
public class ControllerMaterial {

	private final MaterialService materialService;
	@Autowired
	public ControllerMaterial(MaterialService materialService) {
		this.materialService = materialService;
	}

	
 @PostMapping 
public Material addMaterial(@RequestBody Material material) {
	return materialService.addMaterial(material);
			
 }//addMaterial
	@GetMapping
 	public List<Material> getAll() {
 		return materialService.getAllMaterials();}
 
 @GetMapping (path="{matId}")
	public Material getMaterial(@PathVariable ("matId") Long id) {
		return materialService.getMaterial(id);
	}//getMaterial
	
	@DeleteMapping (path="{matId}")
	public Material deleteMaterial(@PathVariable ("matId") Long id) {
		return materialService.deleteMaterial(id);
	}//deleteMaterial

	@PutMapping (path="{matId}")
	public Material updateMaterial(@PathVariable ("matId") Long IdMaterial,
			@RequestParam (required=false)String material)
			 {
			
		return materialService.updateMaterial(IdMaterial, material);
	}//updateMaterial
}
