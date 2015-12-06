/* 
* @File: core.js
* @Author: Sujith_G
* @Date:   2014-06-28 01:03:32
* @Last Modified time: 2014-06-29 08:55:31
* @Email: sujith3g@gmail.com 
*/
//Kadira.connect('48jiwsakE94BNusZM', 'b838ad8c-5ddd-46f3-b5a3-27dd27462d19');
Meteor.methods({
  sample: function (keyword) {
    apiUrl = "http://it-ebooks-api.info/v1/search/"+escape(keyword);
    responsePage = HTTP.get(apiUrl);
    // console.log(JSON.parse(responsePage.content));
    return JSON.parse(responsePage.content);
  },
  getBook:function(bookId){
    apiUrl = "http://it-ebooks-api.info/v1/book/"+escape(bookId);
    responsePage = HTTP.get(apiUrl);
    // console.log(JSON.parse(responsePage.content));
    return JSON.parse(responsePage.content);	
  },
  getLink: function(url){
    var response = HTTP.get(url,{
      npmRequestOptions: {
        headers: {
          'referer': 'http://it-ebooks.info/'
        },
        followRedirect: false
      }
    });
    if(response.statusCode === 302){
        //console.log(response.headers.location);
        return response.headers.location;
      }
  }
});
