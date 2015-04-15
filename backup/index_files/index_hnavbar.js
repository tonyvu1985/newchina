//©Xara Ltd
if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML;var ml=tt.match(/["']([^'"]*)index_hnavbar.js["']/i);if(ml && ml.length > 1) loc=ml[1];}}

var bd=0
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
document.write(".index_hnavbar_menu {z-index:999;border-color:#000000;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#000000;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write(".index_hnavbar_plain, a.index_hnavbar_plain:link, a.index_hnavbar_plain:visited{text-align:left;background-color:#000000;color:#ffffff;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:8pt;font-family:Arial, Helvetica, sans-serif;font-weight:bold;}");
document.write("a.index_hnavbar_plain:hover, a.index_hnavbar_plain:active{background-color:#f1e815;color:#000000;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:8pt;font-family:Arial, Helvetica, sans-serif;font-weight:bold;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0x000000;
var bc=0xf1e815;
if(typeof(frames)=="undefined"){var frames=0;}

startMainMenu("",0,0,2,0,0)
mainMenuItem("index_hnavbar_b1",".gif",25,47,loc+"../"+"index.html","","Home",2,2,"index_hnavbar_plain");
mainMenuItem("index_hnavbar_b2",".gif",25,94,loc+"../"+"Hoc.htm","","Hoc Ku Huynh",2,2,"index_hnavbar_plain");
mainMenuItem("index_hnavbar_b3",".gif",25,87,loc+"../"+"Acu.htm","","Acupuncture",2,2,"index_hnavbar_plain");
mainMenuItem("index_hnavbar_b4",".gif",25,48,loc+"../"+"Herbs.htm","","Herbs",2,2,"index_hnavbar_plain");
mainMenuItem("index_hnavbar_b5",".gif",25,76,loc+"../"+"Conditions.htm","","Conditions",2,2,"index_hnavbar_plain");
mainMenuItem("index_hnavbar_b6",".gif",25,40,loc+"../"+"Faq.htm","","FAQ",2,2,"index_hnavbar_plain");
mainMenuItem("index_hnavbar_b7",".gif",25,59,"javascript:;","","Contact",2,2,"index_hnavbar_plain");
mainMenuItem("index_hnavbar_b8",".gif",25,45,"mailto:hoc@newchinaacupuncture.com.au","","Email",2,2,"index_hnavbar_plain");
mainMenuItem("index_hnavbar_b9",".gif",25,40,loc+"../"+"Links.htm","","Links",2,2,"index_hnavbar_plain");
endMainMenu("",0,0);

startSubmenu("index_hnavbar_b7","index_hnavbar_menu",59);
submenuItem("City",loc+"../"+"City.htm","","index_hnavbar_plain");
submenuItem("Fairfield ",loc+"../"+"Fair.htm","","index_hnavbar_plain");
endSubmenu("index_hnavbar_b7");

loc="";
