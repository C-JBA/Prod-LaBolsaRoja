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
import com.labolsaroja.project.model.Categoria;
import com.labolsaroja.project.service.CategoriaService;
@RestController
@RequestMapping (path="/api/categoria/")
public class ControllerCategoria {
	private final CategoriaService categoriaService;
	@Autowired
	public ControllerCategoria(CategoriaService categoriaService) {
		this.categoriaService = categoriaService;
	}

	
 @PostMapping 
public Categoria addCategoria(@RequestBody Categoria categoria) {
	return categoriaService.addCategoria(categoria);
 }//addCategoria
 
 @GetMapping
	public List<Categoria> getAll() {
		return categoriaService.getAllCategorias();
	}
 
 @GetMapping (path="{catId}")
	public Categoria getCategoria(@PathVariable ("catId") Long id) {
		return categoriaService.getCategoria(id);
	}//getCategoria
	
	@DeleteMapping (path="{catId}")
	public Categoria deleteCategoria(@PathVariable ("catId") Long id) {
		return categoriaService.deleteCategoria(id);
	}//deleteCategoria

	@PutMapping (path="{catId}")
	public Categoria updateCategoria(@PathVariable ("catId") Long id,
			@RequestParam (required=false)String tipo)
			 {
			
		return categoriaService.updateCategoria(id, tipo);
	}//updateCategoria

 
}