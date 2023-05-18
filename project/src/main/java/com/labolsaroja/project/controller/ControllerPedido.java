package com.labolsaroja.project.controller;

import java.util.Date;
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
import com.labolsaroja.project.model.Pedido;
import com.labolsaroja.project.service.PedidoService;

@RestController
@RequestMapping (path="/api/pedido/")

public class ControllerPedido {

	private final PedidoService pedidoService;
	@Autowired
	public ControllerPedido(PedidoService pedidoService) {
		this.pedidoService = pedidoService;
	}

	
	@PostMapping 
	public Pedido addPedido(@RequestBody Pedido pedido) {
		return pedidoService.addPedido(pedido);		
	}//addPedido
 
	@GetMapping
 	public List<Pedido> getAllPedidos() {
 		return pedidoService.getAllPedidos();}
 
	@GetMapping (path="{pedidoId}")
	public Pedido getPedido(@PathVariable ("pedidoId") Long id) {
		return pedidoService.getPedido(id);
	}//getPedido
	
	@DeleteMapping (path="{pedidoId}")
	public Pedido deletePedido(@PathVariable ("pedidoId") Long id) {
		return pedidoService.deletePedido(id);
	}//deletePedido

	@PutMapping (path="{pedidoId}")
	public Pedido updatePedido(@PathVariable ("pedidoId") Long idPedido,
			@RequestParam (required=false)Date fecha,
			@RequestParam (required=false)float total
			)
			 {
			
		return pedidoService.updatePedido(idPedido, fecha,total);
	}//updatePedido

	
}