/* 
* @File: books.js
* @Author: Sujith_G
* @Date:   2014-06-29 08:44:33
* @Last Modified time: 2014-11-20 21:25:33
* @Email: sujith3g@gmail.com 
*/
Template.books.events({
	'load': function () {
		Meteor.call('getBook', Session.get('bookId'), function (error, result) {
			if(result.Error == "0"){
				$('.spinner').remove();
				$('#title').html(result.Title);
				$('#subtitle').html(result.SubTitle);
				$('#desc').html("&nbsp;&nbsp;"+result.Description);
				$('#publisher').html(result.Publisher);
				$('#year').html(result.Year);
				$('#download').attr('href', result.Download);
				$('#image').attr('src', result.Image);
			}
		});
	},
	'click #download':function(event,target){
		// console.log($(event.target).attr('href'));
		window.open(encodeURI($(event.target).attr('href')),"_system","location=yes");
	}
});