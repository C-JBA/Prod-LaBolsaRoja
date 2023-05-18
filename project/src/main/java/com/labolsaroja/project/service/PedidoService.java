package com.labolsaroja.project.service;

import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.labolsaroja.project.model.Pedido;
import com.labolsaroja.project.repository.PedidoRepository;

@Service
public class PedidoService {
	private final PedidoRepository pedidoRepository;
	@Autowired
	public PedidoService(PedidoRepository pedidoRepository) {
		this.pedidoRepository=pedidoRepository;
	}

	public Pedido addPedido(Pedido pedido) {
		Pedido tmpped=null;
		if(pedidoRepository.findById(pedido.getIdPedido()).isEmpty()) {
			tmpped=pedidoRepository.save(pedido);
					}//if
		return tmpped;
	}

	public Pedido getPedido(Long id) {
		return pedidoRepository.findById(id).orElseThrow(
				()-> new IllegalArgumentException("Usuario con id"
	+id+" no existe.")
);
	}

	public Pedido deletePedido(Long id) {
		Pedido tmpped=null;
		if(pedidoRepository.existsById(id)) {
			tmpped=pedidoRepository.findById(id).get();
pedidoRepository.deleteById(id);
		}
		return tmpped;
	}

	public Pedido updatePedido(Long idPedido, Date fecha, float total) {
		return null;
	}
	
	public List<Pedido> getAllPedidos() {
		return pedidoRepository.findAll();
	}

}
