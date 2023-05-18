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
import com.labolsaroja.project.model.Detalle_pedido;
import com.labolsaroja.project.service.DetalleService;
 
@RestController
@RequestMapping (path="/api/detalle/")
public class ControllerDetalle {

	private final DetalleService detalleService;
	@Autowired
	public ControllerDetalle(DetalleService detalleService) {
		this.detalleService = detalleService;
	}

	
 @PostMapping 
public Detalle_pedido addDetalle(@RequestBody Detalle_pedido detalle) {
	return detalleService.addDetalle(detalle);
 }//addDetalle
 
 @GetMapping
	public List<Detalle_pedido> getAll() {
		return detalleService.getAllDetalle_pedidos();
	}
 
 @GetMapping (path="{detId}")
	public Detalle_pedido getDetalle(@PathVariable ("detId") Long id) {
		return detalleService.getDetalle(id);
	}//getDetalle
	
	@DeleteMapping (path="{detId}")
	public Detalle_pedido deleteDetalle(@PathVariable ("detId") Long id) {
		return detalleService.deleteDetalle(id);
	}//deleteDetalle

	@PutMapping (path="{detId}")
	public Detalle_pedido updateDetalle(@PathVariable ("detId") Long id,
			@RequestParam (required=false) int cantidad)
			 {
			
		return detalleService.updateDetalle(id, cantidad);
	}//updateDetalle
}