function toggleResponsive() {
	var navs = document.getElementById("navbuts");
	var logoimg = document.getElementById("logo");
	var icon = document.getElementById("adapt-icon");
	if (navs.className === "topnav") {
		navs.className += " responsive";
	} else {
		navs.className = "topnav";
	}	
	if (logoimg.className === "logo") {
		logoimg.className += " responsive";
	} else {
		logoimg.className = "logo";
	}
	if (icon.className === "fa fa-bars") {
		icon.className = "fa fa-angle-up";
	} else {
		icon.className = "fa fa-bars";
	}
}

function toggleExpandCollapse(elemId, icoId, headerId) {
	var blocks = document.getElementById(elemId);
	var head = document.getElementById(headerId);
	var icon = document.getElementById(icoId);
	if (blocks.className === "room-blocks wrapped next") {
		icon.className = "fa fa-angle-up";
		blocks.className = "room-blocks expanded wrapped next";
		head.className = "headline next dropdown";
	} else {
		blocks.className = "room-blocks wrapped next";
		icon.className = "fa fa-angle-down";
		head.className += " rounded";
	}
}

function toggleExpandCollapseNotWrapped(elemId, icoId, headerId) {
	var blocks = document.getElementById(elemId);
	var head = document.getElementById(headerId);
	var icon = document.getElementById(icoId);
	if (blocks.className === "room-blocks next") {
		icon.className = "fa fa-angle-up";
		blocks.className = "room-blocks expanded next";
		head.className = "headline next dropdown";
	} else {
		blocks.className = "room-blocks next";
		icon.className = "fa fa-angle-down";
		head.className += " rounded";
	}
}