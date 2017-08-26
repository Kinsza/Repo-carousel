// scripts.js

//Task - Mod 10.3
$(function() {
    var carouselList = $('#carousel ul'); //pobieramy listę elementów
    setInterval(changeSlide, 3000); //every 3 seconds, it performs a function to change the slide
    function changeSlide() {  //odpowiada za zmianę slajdów
    	carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);  //parametry: 1. dobrać aby nie było przeskoków, 2.czas animacji
    }

function moveFirstSlide() {  //wykonuje się na końcu animacji (callback) - pierwszy slajd wskoczy za ostatni
	carouselList.find('li:last')  //metoda find - znajdzie na liście ostatni element
		.after(carouselList.find('li:first'));  //metoda after i find
	carouselList.css({marginLeft:0});  //metoda css
};
});