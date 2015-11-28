/* 
* @File: router.js
* @Author: Sujith_G
* @Date:   2014-06-27 11:24:12
* @Last Modified time: 2014-06-29 08:43:53
* @Email: sujith3g@gmail.com 
*/

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'	
});
Router.map(function () {
	this.route('home',{'path':'/'});
	this.route('books',{
		'path':'/books/:bookId',
		waitOn : function(){
			Session.set('bookId', this.params.bookId);
		}
	});
});
Router.onBeforeAction('loading');

