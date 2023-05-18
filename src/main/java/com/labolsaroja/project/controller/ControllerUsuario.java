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
import org.springframework.web.bind.annotation.RestController;

import com.labolsaroja.project.model.ChangePassword;
import com.labolsaroja.project.model.Usuario;
import com.labolsaroja.project.service.UsuarioService;
@RestController
@RequestMapping (path="/api/usuario/")

public class ControllerUsuario {

	private final UsuarioService usuarioService;
	@Autowired
	public ControllerUsuario(UsuarioService usuarioService) {
		this.usuarioService = usuarioService;
	}

	
	 @PostMapping 
	public Usuario addUsuario(@RequestBody Usuario usuario) {
		return usuarioService.addUsuario(usuario);
				
	 }//addUsuario
 	@GetMapping
 	public List<Usuario> getAll() {
 		return usuarioService.getAllUsuarios();
 	}
 
 	@GetMapping (path="{usrId}")
	public Usuario getUsuario(@PathVariable ("usrId") Long idUsuarios) {
		return usuarioService.getUsuario(idUsuarios);
	}//getUsuario
	
	@DeleteMapping (path="{usrId}")
	public Usuario deleteCategoria(@PathVariable ("usrId") Long idUsuarios) {
		return usuarioService.deleteUsuario(idUsuarios);
	}//deleteUsuario

	@PutMapping (path="{usrId}")
	public Usuario updateUsuario(@PathVariable ("usrId") Long idUsuarios,
			@RequestBody ChangePassword changePassword
			)
			 {
			
		return usuarioService.updateUsuario(idUsuarios,changePassword);
	}//updateUsuario
}
