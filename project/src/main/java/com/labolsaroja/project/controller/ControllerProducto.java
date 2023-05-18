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
import com.labolsaroja.project.model.Producto;
import com.labolsaroja.project.service.ProductoService;

@RestController
@RequestMapping (path="/api/producto/")
public class ControllerProducto {

	private final ProductoService productoService;
	@Autowired
	public ControllerProducto(ProductoService productoService) {
		this.productoService = productoService;
	}

	
	@PostMapping 
	public Producto addProducto(@RequestBody Producto producto) {
		return productoService.addProducto(producto);
				
	 }//addProducto
	
	@GetMapping
	public List<Producto> getAllProductos(){
		return productoService.getAllProductos();
	}//getAllProducts
 
 	@GetMapping (path="{prodId}")
	public Producto getProducto(@PathVariable ("prodId") Long id) {
		return productoService.getProducto(id);
	}//getProducto
	
	@DeleteMapping (path="{prodId}")
	public Producto deleteProducto(@PathVariable ("prodId") Long id) {
		return productoService.deleteProducto(id);
	}//deleteProducto

	@PutMapping (path="{prodId}")
	public Producto updateProducto(@PathVariable ("prodId") Long id,
			@RequestParam (required=false)String nombre,
			@RequestParam (required=false)String descripcion,
			@RequestParam (required=false)Double precio,
			@RequestParam (required=false)String img
			)
			 {
			
		return productoService.updateProducto(id, nombre,descripcion,precio, img);
	}//updateProducto
	
	
}
