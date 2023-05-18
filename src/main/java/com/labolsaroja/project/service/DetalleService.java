package com.labolsaroja.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.labolsaroja.project.model.Detalle_pedido;
import com.labolsaroja.project.repository.Detalle_PedidoRepository;
@Service

public class DetalleService {
	private final Detalle_PedidoRepository detalleRepository;
	@Autowired
	public DetalleService(Detalle_PedidoRepository detalleRepository) {
		this.detalleRepository=detalleRepository;
	}
	public Detalle_pedido addDetalle(Detalle_pedido detalle) {
		Detalle_pedido tmpdet=null;
		if(detalleRepository.findById(detalle.getId()).isEmpty()) {
			tmpdet=detalleRepository.save(detalle);
					}//if
		return tmpdet;
	}

	public Detalle_pedido getDetalle(Long id) {
		return detalleRepository.findById(id).orElseThrow(
				()-> new IllegalArgumentException("Usuario con id"
	+id+" no existe.")
);
	}

	public Detalle_pedido deleteDetalle(Long id) {
		Detalle_pedido tmpdet=null;
		if(detalleRepository.existsById(id)) {
			tmpdet=detalleRepository.findById(id).get();
detalleRepository.deleteById(id);
		}
		return tmpdet;
	}

	public Detalle_pedido updateDetalle(Long id, int cantidad) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public List<Detalle_pedido> getAllDetalle_pedidos() {
		return detalleRepository.findAll();
	}

}
