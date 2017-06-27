
var reviewItems = document.querySelectorAll('.site .reviewItem');
var reviewImages = document.querySelectorAll('.site .reviewImage');

for (var i = 0; i < reviewImages.length; i++) {
	reviewImages[i].addEventListener("click", function() {
		var newReviewPopup = new Popup(this.closest('.reviewItem'));
		newReviewPopup.open();
	});
};

var btnItem = document.querySelector('.site .btnItem');
var newBtnPopup = new Popup(btnItem);
btnItem.onclick = newBtnPopup.open;

function Popup(obj) {

	var contentTitle = obj.getElementsByClassName('elementPopupTitle')[0].innerHTML;
	var contentText = obj.getElementsByClassName('elementPopupContent')[0].innerHTML;
	
	var site = document.querySelector('.site');
	var dlPopup = document.querySelector('.dlPopup');
	var dlPopupOverlay = document.querySelector('.dlPopupOverlay');

	var p = this;

	// show pop-up
	this.open = function() {
		// blur site content:
		// add .dlPopupBlur to site
		site.classList.add('dlPopupBlur');
		// show pop-up:
		// add .dlPopupOpen / .dlPopupOverlayOpen to modal and overlay
		dlPopup.classList.add('dlPopupOpen');
		dlPopupOverlay.classList.add('dlPopupOverlayOpen');
		// add content into the title and ContentText
		dlPopup.getElementsByClassName('dlPopupTitle')[0].innerHTML = contentTitle;
		dlPopup.getElementsByClassName('dlPopupContentText')[0].innerHTML = contentText;
	}

	// hide pop-up
	this.close = function() {
		// remove .dlPopupBlur / .dlPopupOpen / .dlPopupOverlayOpen
		site.classList.remove('dlPopupBlur');
		dlPopup.classList.remove('dlPopupOpen');
		dlPopupOverlay.classList.remove('dlPopupOverlayOpen');
	}

	dlPopupOverlay.onclick = this.close;
}