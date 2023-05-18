package com.labolsaroja.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.labolsaroja.project.model.Categoria;
import com.labolsaroja.project.repository.CategoriaRepository;
@Service
public class CategoriaService {
	private final CategoriaRepository categoriaRepository;
	@Autowired
	public CategoriaService(CategoriaRepository categoriaRepository) {
		this.categoriaRepository=categoriaRepository;
	}
	
	public Categoria addCategoria(Categoria categoria) {
		// TODO Auto-generated method stub
		return categoriaRepository.save(categoria);
	}

	public Categoria getCategoria(Long id) {
		// TODO Auto-generated method stub
		Categoria tmp= null;
		if (categoriaRepository.existsById(id)) {
			tmp = categoriaRepository.findById(id).get();
		}
		return tmp;
	}

	public Categoria deleteCategoria(Long id) {
		// TODO Auto-generated method stub
		Categoria tmp= null;
		if (categoriaRepository.existsById(id)) {
			tmp = categoriaRepository.findById(id).get();
					categoriaRepository.deleteById(id);
		}
		return tmp;
	}

	public Categoria updateCategoria(Long id, String tipo) {
		// TODO Auto-generated method stub
		Categoria tmp= null;
		if (categoriaRepository.existsById(id)) {
			tmp = categoriaRepository.findById(id).get();
			if (tipo!=null) {
				tmp.setTipo(tipo);
			}
		}
		return tmp;
	}
	
	public List<Categoria> getAllCategorias() {
		return categoriaRepository.findAll();
	}


}
