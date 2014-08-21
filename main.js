var myApp = new Framework7({
    modalTitle: 'Framework7',
    animateNavBackIcon: true,
});

var $$ = Dom7;

var viewMain = myApp.addView('.view-main', {
	dynamicNavbar: true
});

var viewLeft = myApp.addView('.view-left', {
	dynamicNavbar: true
});

$$(document).on('pageInit', function (e) {
	(viewMain.history.length < 2) ? myApp.openPanel('left') : myApp.closePanel();
});

$$(document).on('pageBeforeAnimation', function (e) {
	(viewMain.history.length - 1 < 2) ? myApp.openPanel('left') : myApp.closePanel();
});

if(window.navigator.standalone) $$("meta[name='apple-mobile-web-app-status-bar-style']")[0].remove();

viewLeft.loadPage('menu.html');
myApp.openPanel('left');

