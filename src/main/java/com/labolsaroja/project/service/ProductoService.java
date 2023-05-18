package com.labolsaroja.project.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.labolsaroja.project.model.Producto;
import com.labolsaroja.project.repository.ProductoRepository;

@Service
public class ProductoService {
	private final ProductoRepository productoRepository;
	@Autowired
	public ProductoService(ProductoRepository productoRepository) {
		this.productoRepository=productoRepository;
	}

	public Producto getProducto(Long id) {
		return productoRepository.findById(id).orElseThrow(
				()-> new IllegalArgumentException("Usuario con id"
	+id+" no existe.")
);
	}

	public Producto deleteProducto(Long id) {
		Producto tmpProd=null;
		if(productoRepository.existsById(id)) {
			tmpProd=productoRepository.findById(id).get();
productoRepository.deleteById(id);
		}
		return tmpProd;
	}

	public Producto updateProducto(Long id, String nombre, String descripcion,
			Double precio, String img) {
		Producto tmpProd=null;
		if(productoRepository.existsById(id)) {
			tmpProd = productoRepository.findById(id).get();
			if(nombre != null) tmpProd.setNombre(nombre);
		//	if(largo != null) tmpProd.setLargo(largo);
		//	if(ancho != null) tmpProd.setAncho(ancho);
		//	if(fuelle != null) tmpProd.setFuelle(fuelle);
			if(descripcion != null) tmpProd.setDescripcion(descripcion);
			if(precio != null) tmpProd.setPrecio(precio);
			if(img != null) tmpProd.setImg(img);
			
		}
		return tmpProd;
	}

	public Producto addProducto(Producto producto) {
		Producto tmp=null;
		if(productoRepository.findById(producto.getId()).isEmpty()) {
			tmp=productoRepository.save(producto);
					}//if
		return tmp;
	}

	public List<Producto> getAllProductos() {
		return productoRepository.findAll();
	}



}
