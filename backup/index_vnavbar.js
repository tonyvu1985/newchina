<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML><HEAD>
<META http-equiv=Content-Type content="text/html; charset=windows-1252">
<META content="MSHTML 6.00.2900.2995" name=GENERATOR></HEAD>
<BODY>//©Xara Ltd var clicked="";var gtype=".gif";var selstate="_over";if 
(typeof(loc)=="undefined" || loc==""){var loc="";if 
(document.body&amp;&amp;document.body.innerHTML){var 
tt=document.body.innerHTML;var 
ml=tt.match(/["']([^'"]*)index_vnavbar.js["']/i);if(ml &amp;&amp; ml.length &gt; 
1) loc=ml[1];}}document.write(" 
<TABLE cellSpacing='\"0\"' cellPadding='\"0\"' border='\"0\"'>
  <TBODY>
  <TR>");tr(false);writeButton(loc+"../","Diet.htm","index_vnavbar_b1",99,25,"Diet 
    &amp; 
    Lifestyle","",0);writeButton(loc+"../","Cup.htm","index_vnavbar_b2",99,25,"Cupping","",0);writeButton(loc+"../","Moxa.htm","index_vnavbar_b3",99,25,"Moxibustion","",0);writeButton(loc+"../","Tuina.htm","index_vnavbar_b4",99,25,"Tuina","",0);writeButton(loc+"../","Health.htm","index_vnavbar_b5",99,25,"Health 
    Funds","",0);writeButton(loc+"../","Media.htm","index_vnavbar_b6",99,25,"Media 
    Articles","",0);writeButton(loc+"../"</TR></TBODY></TABLE>");loc="";function 
tr(b){if (b) document.write("<TR>");else document.write("</TR>");}function 
turn_over(name) {if (document.images != null &amp;&amp; clicked != name) 
{document[name].src = document[name+"_over"].src;}}function turn_off(name) {if 
(document.images != null &amp;&amp; clicked != name) {document[name].src = 
document[name+"_off"].src;}}function reg(gname,name){if 
(document.images){document[name+"_off"] = new Image();document[name+"_off"].src 
= loc+gname+gtype;document[name+"_over"] = new 
Image();document[name+"_over"].src = loc+gname+"_over"+gtype;}}function 
evs(name){ return " onmouseover=\"turn_over('"+ name + "')\" 
onmouseout=\"turn_off('"+ name + "')\""}function 
writeButton(urld,url,name,w,h,alt,target,hsp){gname=name;while(typeof(document[name])!="undefined")name+="x";reg(gname,name);tr(true);document.write("<TD>");if(alt!="")alt=" 
alt=\""+alt+"\"";if(target!="")target=" target=\""+target+"\"";if(w&gt;0)w=" 
width=\""+w+"\"";else w="";if(h&gt;0)h=" height=\""+h+"\"";else h="";var 
l=clicked!=""||!isCurrentFile(url);if(url!="")url=" 
href=\""+urld+url+"\"";if(l){if(typeof(clx)!="undefined"){target="";url=" 
href=\"?"+clx+"\"";alt=" alt=\"Click to edit\"";}document.write("<A 
?+url+evs(name)+target+?>");}else gname+=selstate;gname+=gtype;if(hsp==-1)hsp=" 
align=\"right\"";else if(hsp&gt;0)hsp=" hspace=\""+hsp+"\"";else 
hsp="";document.write("<IMG src="../../../../%22%22+loc+gname+%22/%22" 
border='\"0\"' 
name='\""+name+"\""+w+h+alt+hsp+"'>");if(l)document.write("</A>");document.write("</TD>");tr(false);}function 
syncFile(f,nf){var matches='home.html*index.html*welcome.html*default.asp';var 
p=f.lastIndexOf('/');var 
sf=f;if(p&gt;=0)sf=f.substr(p+1,f.length-1);if(matches.indexOf(sf)==-1)return 
"";return sf;}function isCurrentFile(str){var 
p=str.lastIndexOf(':');if(p&gt;0)str=str.substr(p+1,str.length-1);str=escape(str);str=str.toLowerCase();while(str.length&gt;3&amp;&amp;str.substring(0,3)=="../")str=str.substr(3,str.length-1);var 
fstr=str.indexOf(".htm");if(fstr==-1)fstr=str.indexOf(".asp");if(fstr==-1)fstr=str.indexOf(".php");if(fstr==-1)fstr=str.indexOf(".jsp");if(fstr==-1)fstr=str.indexOf(".txt");if(fstr&lt;1&amp;&amp;str.charAt(str.length-1)!='/')str+="/";var 
current=document.location.href.toLowerCase();p=current.lastIndexOf('?');if(p&gt;0)current=current.substr(0,p);var 
fcurrent=current.indexOf(".htm");if(fcurrent==-1)fcurrent=current.indexOf(".asp");if(fcurrent==-1)fcurrent=current.indexOf(".php");if(fcurrent==-1)fcurrent=current.indexOf(".jsp");if(fcurrent==-1)fcurrent=current.indexOf(".txt");if(fcurrent&lt;1&amp;¤t.charAt(current.length-1)!='/')current+="/";if(fstr!=-1&amp;&amp;fcurrent==-1)current+=syncFile(str,current);if(fstr==-1&amp;&amp;fcurrent!=-1)str+=syncFile(current,str);var 
currsize=current.length;var 
strsize=str.length;while(strsize&gt;=0&amp;&amp;currsize&gt;=0){if(current.charAt(currsize)!=str.charAt(strsize))return 
false;currsize=currsize-1;strsize=strsize-1;}return true;} </BODY></HTML>
