
var currentIndex = 1;
displaySlides(currentIndex);
var lm=true;
var reg=false;

function newcontent(num){
	
	if(num==1){
		$("#Band").text("Powerwolf");
		$("#Band_info").text("Niemiecki zespół tworzący muzykę powermetalową, powstały w 2003 roku w Saarbrücken. Członkowie zespołu posługują się pseudonimami. Charakteryzuje się motywami zaczerpniętymi z wierzeń i legend znanych z kultury rumuńskiej – to jest wilkołaków czy wampirów.");
		$("#Band_link").attr("href","https://www.powerwolf.net/");
	}
	if(num==2){
		$("#Band").text("Bloodbound");
		$("#Band_info").text("Szwedzki zespół power metalowy założony w 2004 roku w Bollnäs.W 2005 roku wydali swój pierwszy album studyjny, Nosferatu, a drugi, Book of the Dead, w maju 2007 roku. Pomysł byłego członka Street Talk, Fredrika Bergha i Tomasa Olssona, w skład zespołu wchodzili również Michael Bormann (Jaded Heart), Urban rasy (Tad Morose) i Pelle Åkerlind (Morgana Lefay).");
		$("#Band_link").attr("href","https://www.bloodbound.se/");
	}
	if(num==3){
		$("#Band").text("Twilight force");
		$("#Band_info").text("Szwedzki zespół symfoniczny power metal znany z bardzo fantastycznych tekstów i strojów w stylu LARP, w których zespół występuje na scenie. Główne tematy liryczne zespołu opierają się na tradycji fikcyjnego świata znanego jako The Twilight Kingdoms, stworzonego przez klawiszowca Daniela Beckmana.");
		$("#Band_link").attr("href","https://www.twilight-force.black-harbour.shop/merch?locale=en");	
	}
}


function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("imageSlides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}
function setSlides(num) {
    displaySlides(currentIndex += num);
	newcontent(currentIndex);
}

function change_mode(){
	if(!reg){
	if(lm){
		lm=false;
		$("#switchero_mods").attr("src","img/dm.png");
		$("#features").css({
			'backgroundColor' : 'black',
			'color' : 'white'
		});
		$("#forms").css({
		'color':'white',
		'backgroundColor':'black'
		});
		$("#forms_table").css({
			'borderColor':'white'
			
		});
		}
	else{
		lm=true;
		$("#switchero_mods").attr("src","img/lm.png");
		$("#features").css({
			'backgroundColor' : 'white',
			'color' : 'black'
		});
		$("#forms").css({
		'color':'black',
		'backgroundColor':'white'
		});
		$("#forms_table").css({
			'borderColor':'black'
			
		});
	}
	}
	else{
		if(lm){
		lm=false;
		$("#switchero_mods").attr("src","img/dm.png");
		$("#forms").css({
		'color':'white',
		'backgroundColor':'black'
		});
		$("#forms_table").css({
			'borderColor':'white'
		});
		$("body").css({
			'color':'white',
			'backgroundColor':'black'
		});
		}
		else{
		lm=true;
		$("#switchero_mods").attr("src","img/lm.png");
		$("#forms").css({
		'color':'black',
		'backgroundColor':'white'
		});
		$("#forms_table").css({
		'borderColor':'black'
		});
		$("body").css({
			'color':'black',
			'backgroundColor':'white'
		});
		}
		
		
	}
}
 
 function register(){
	reg=true;
	$("Header").css({
		'display':'none'
		
	});
	$("#features").css({
		'display':'none'
	});
	$("#forms").css({
		'display':'block'
	});
	$("body").css({'height':'100% !important'});
	
	$("#forms").html('<form method="post" id="form_form" onsubmit="mailto:b.panczyk@pollub.pl"><table id="forms_table"><tr><td><label for="name">Imie:</label><br><input type="text" id="name" placeholder="Michał"></td></tr><tr><td><label for="surname">Nazwisko:</label><br><input type="text" id="surname" placeholder="Billewicz"></td></tr><tr><td><label for="email">Email:</label><br><input type="text" id="email" placeholder="michal.billewicz@pollub.edu.pl"></td></tr><tr><td><label for="pass">Hasło:</label><br><input type="password" id="pass" placeholder="*******"></td></tr><tr><td><label for="pass2">Powtórz hasło:</label><br><input type="password" id="pass2" placeholder="*******"></td></tr><tr><td><button type="button" onclick="sprawdz_info()">Zarejestruj</button></td></tr></table></form>	');
	if(!lm){
		$("body").css({
			'color':'white',
			'backgroundColor':'black'
		});
	}
	else{
		$("body").css({
			'color':'black',
			'backgroundColor':'white'
		});
	}
	
	
	}
	
	
function sprawdzPole(pole_id,obiektRegex){
	var obiektPole = document.getElementById(pole_id);
	if(!obiektRegex.test(obiektPole.value)) return (false);
	else return (true);
}
	
function sprawdz_info(){
	var ok = true;
	var spr_im =/^[A-Za-ząęółćżźńĄĘÓŁĆŻŹŃ ]{3,32}/;
	var spr_nazw =/^([A-ZŁŚ][a-ząęłćśó]{1,20}(-[A-ZŁŚ][a-ząęłćśó]{3,20})?$)/;
	var spr_email =/^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
	var spr_pass =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,36}/;
	
	
	if(!sprawdzPole("name",spr_im)){
		ok=false;
		$("label[for='name'").html('Podano złe imie!');
		$("label[for='name'").css({
			'color':'red'
		});
	}
	else{
		ok=true;
		$("label[for='name'").html('Imie: ');
		if(!lm)$("label[for='name'").css({'color':'white',});
		else $("label[for='name'").css({'color':'black',});
	}
	
	if(!sprawdzPole("surname",spr_nazw)){
		ok=false;
		$("label[for='surname'").html('Podano złe Nazwisko!');
		$("label[for='surname'").css({
			'color':'red'
		});
	}
	else{
		ok=true;
		$("label[for='surname'").html('Nazwisko: ');
		if(!lm)$("label[for='surname'").css({'color':'white',});
		else $("label[for='surname'").css({'color':'black',});
	}
	
	if(!sprawdzPole("email",spr_email)){
		ok=false;
		$("label[for='email'").html('Podano zły email!');
		$("label[for='email'").css({
			'color':'red'
		});
	}
	else{
		ok=true;
		$("label[for='email'").html('Email: ');
		if(!lm)$("label[for='email'").css({'color':'white',});
		else $("label[for='email'").css({'color':'black',});
	}
	
	if(!sprawdzPole("pass",spr_pass)){
		ok=false;
		$("label[for='pass'").html('Podano złe hasło!');
		$("label[for='pass'").css({
			'color':'red'
		});
	}
	else{
		ok=true;
		$("label[for='pass'").html('Hasło: ');
		if(!lm)$("label[for='pass'").css({'color':'white',});
		else $("label[for='pass'").css({'color':'black',});
	}
	var p1 = $('#pass').val();
	var p2 =$('#pass2').val();
	if(p1 != p2 || !sprawdzPole("pass2",spr_pass)){
		ok=false;
		$("label[for='pass2'").html('Podane hasła różnią się!');
		$("label[for='pass2'").css({
			'color':'red'
		});
	}
	else{
		ok=true;
		$("label[for='pass2'").html('Powtórz hasło: ');
		if(!lm)$("label[for='pass2'").css({'color':'white',});
		else $("label[for='pass2'").css({'color':'black',});
	}
	
	if(ok){
		var komunikat="";
		komunikat+="Imie: "+$('#name').val()+"\n";
		komunikat+="Nazwisko: "+$('#surname').val()+"\n";
		komunikat+="Email: "+$('#email').val()+"\n";
		komunikat+="Hasło: "+$('#pass').val()+"\n";
		alert(komunikat);
		//var email = document.createElement("a");
		//email.href = "mailto:abc@mail.com";
		//email.click();
		
		var email = $('#email').val();
		var subject = 'Rejestracja';
		var emailBody = komunikat;
		
		window.location = 'mailto:' +email +'?subject='+subject+'&body='+emailBody;
		savelocalstorage();
		$('#form_form').submit();
	}
}

function savelocalstorage(){
	localStorage.setItem('email',$('#email').val());
	localStorage.setItem('name',$('#name').val());
	localStorage.setItem('surname',$('#surname').val());
	localStorage.setItem('pass',$('#pass').val());
	
}
 
 function checklocalstorage(){
	var email = localStorage.getItem('email');
	var name = localStorage.getItem('name');
	var surname = localStorage.getItem('surname');
	var pass = localStorage.getItem('pass');
	if(email && name && surname && pass){
	$("#Band").text("Dane użytkownika:");
	$("#Band_info").html("</br> Imie i Nazwisko: "+name+" "+surname+"</br> email:"+email+"</br> hasło:"+pass);
	$("#Band_link").css({'display':'none'});
	$(".images-slideshow").css({'display':'none'});
	}
 }
 