const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const menu_items = document.querySelector('.header .nav-bar .nav-list ul ');
const ham = document.querySelector('.header .nav-bar .nav-list .hamburger.active ul.active');

//Active navigation on scroll//
window.addEventListener('scroll', () => {
	let fromTop = window.scrollY;
   
	menu_item.forEach(link => {
	  let section = document.querySelector(link.hash);
	 
	  if (
		section.offsetTop <= fromTop &&
		section.offsetTop + section.offsetHeight > fromTop
	  ) {
		link.classList.add('act');
	  } else {
		link.classList.remove('act');
	  }
	});
  });

//Scroll up when button click//
const scrlup = document.querySelector('.scrollup');

document.addEventListener('scroll', () =>{
	var scroll = window.scrollY;
	if(scroll>200){
		scrlup.classList.add('active');
	}
	else{
		scrlup.classList.remove('active');
	}
});

scrlup.addEventListener('click', () =>{
	window.scrollTo(0,0);
});

//End of Scroll up//

hamburger.addEventListener('click', ()=>
{
    hamburger.classList.toggle('active'); 
    mobile_menu.classList.toggle('active'); 
})

//set shadow to header container while scrolling //
window.addEventListener('scroll', () => { 
    (window.scrollY >= 50) ? header.classList.add('scroll') : header.classList.remove('scroll');
});


menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

 
	//  var abc = document.getElementsByClassName("lnkItems");
 	// for (var i = 0; i < abc.length; i++) {
 	// 	abc[i].addEventListener("click", function() {
 	// 	var current = document.getElementsByClassName("act");
 	// 	current[0].className = current[0].className.replace("act", "");
 	// 	this.className += " act";
 	// });
	//  }
	 
	
	//active slider when click//
	 var xyz = document.getElementsByClassName("manual-btn");
 	for (var i = 0; i < xyz.length; i++) {
 		xyz[i].addEventListener("click", function() {
 		var current = document.getElementsByClassName("acts");
 		current[0].className = current[0].className.replace("acts", "");
 		this.className += " acts";
 	});
	 }
	 

	 //Scroll reveal animation//
	  const sr = ScrollReveal({
	 	 origin: 'top',
	 	 distance: '80px',
	 	 duration: 2000,
	 	 reset: true
	  });

	 sr.reveal(`.hero .text`,{});
	 sr.reveal(`.hero .btns`,{delay:200});
	 sr.reveal(`.hero .hero_img`,{delay:400});

	 //sr.reveal(`.skill .section-title`,{});
	 sr.reveal(`.skill img`,{});
	 sr.reveal(`.skill p`,{delay:200});
	 sr.reveal(`.skill .skill-item`,{delay:400,interval:200});

	 //sr.reveal(`.projects .section-title`,{});
	 sr.reveal(`.project-item`,{interval:200, distance:'50px'});

	 //sr.reveal(`.about .about-header`,{});
	 sr.reveal(`.about .slider`,{delay:200});
	 //sr.reveal(`.about .slider p`,{delay:400});
	 
	 //sr.reveal(`.contact .section-title`,{});
	 sr.reveal(`.contact .contact-item`,{interval:200});
	 sr.reveal(`.contact .contact-input`,{interval:200});
	 sr.reveal(`.contact .cta`,{});

//change theme when clicked the icon//
const themebutton = document.querySelector('.header #theme-button');
const icontheme = 'fa-sun'
themebutton.addEventListener('click', ()=>{
	document.body.classList.toggle('dark-theme');
	themebutton.classList.toggle(icontheme);
});

