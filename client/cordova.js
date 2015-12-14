/* 
* @Author: sg
* @Date:   2014-11-20 21:35:18
* @Last Modified by:   sg
* @Last Modified time: 2014-11-20 22:08:37
*/
if (Meteor.isCordova) {
    document.addEventListener("deviceready", function() {
        document.addEventListener("backbutton", backbutton, false);      
    }, false);

    lastBackButtonPress = null;

    function backbutton() {
        if (lastBackButtonPress == null){
          lastBackButtonPress = moment().format("YYYY-MM-DD HH:mm:ss");
              var pages = document.querySelector("#pages");
              if(pages.selected == 1){
                pages.selected = 0;
              }
        }else {
            var A = moment().diff(moment(lastBackButtonPress, "YYYY-MM-DD HH:mm:ss"), "seconds");

            lastBackButtonPress = moment().format("YYYY-MM-DD HH:mm:ss");

            function onConfirm(buttonIndex) {
                if (buttonIndex == 2)
                    navigator.app.exitApp();
            }

            if (A < 2) navigator.notification.confirm("Do you really want to exit ?", onConfirm, "Warning", ["No", "Yes"]);
            else {
              var pages = document.querySelector("#pages");
              if(pages.selected == 1){
                pages.selected = 0;
              }
              //navigator.app.backHistory();
            }
        }
    }
}
Meteor.startup(function() {
    function onConfirm(buttonIndex) {
        if (buttonIndex == 2)
            navigator.app.exitApp();
    }
if(Meteor.isCordova)
    if (navigator.connection.type == "none")
        navigator.notification.confirm("No Internet Connection Found !!", onConfirm, "Warning..!", ["Continue", "Exit"]);
});
