package com.labolsaroja.project.controller;
import com.labolsaroja.project.service.UsuarioService;
import java.util.Calendar;
import java.util.Date;
import java.util.Optional;
import org.springframework.web.bind.annotation.GetMapping;
import javax.servlet.ServletException;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.labolsaroja.project.model.Usuario ;
import com.labolsaroja.project.repository.UsuarioRepository;
@RestController
@RequestMapping(path="/api/login/")
public class loginController {
private final UsuarioService usuarioService;
private final UsuarioRepository usuarioRepository;

@Autowired
public loginController(UsuarioService usuarioService,UsuarioRepository usuarioRepository) {
	this.usuarioService=usuarioService;
	this.usuarioRepository=usuarioRepository;
}//constructor

@PostMapping
//(path="{email}{contrasena}")
public Usuario loginUsuario(@RequestParam String email ,@RequestParam String contrasena) {
	
	Optional<Usuario> userByEmail=
			usuarioRepository.findByEmail(email);
	if (userByEmail.isPresent()) {
		Usuario user=userByEmail.get();
		
			if(user.getContrasena().equals(contrasena)){ 
			return user;
			}
	}//if isPresent
	return null;
	
}//loginUsuario


@GetMapping
public Usuario passwordReset(@RequestParam String email) {
	
	return usuarioService.passwordReset(email);
	
}//passwordReset






}
