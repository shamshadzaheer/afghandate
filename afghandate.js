function pop(dest,breite,hoehe)
{
                var screen_width = screen.width;
                var screen_height= screen.height;
                var xOffset      = (screen_width-breite)/2;
                var yOffset      = (screen_height-hoehe)/2;

                newWindow = window.open(dest,'newWindow','left='+xOffset+',top='+yOffset+',width='+breite+',height='+hoehe+',directories=no,location=no,menubar=no,scrollbars=yes,status=no,toolbar=no,resizable=yes');
	        newWindow.focus();
		
           
}
function popUp(dest,breite,hoehe)
{
                var screen_width = screen.width;
                var screen_height= screen.height;
                var xOffset      = (screen_width-breite)/2;
                var yOffset      = (screen_height-hoehe)/2;

                newWindow = window.open(dest,'newWindow','left='+xOffset+',top='+yOffset+',width='+breite+',height='+hoehe+',directories=no,location=no,menubar=no,scrollbars=yes,status=no,toolbar=no,resizable=yes');
	        newWindow.focus();
		
           
}

function div(a,b) {
    return Math.floor((a / b));
}
function gregorian_to_jalali (g_y, g_m, g_d) 
{
    g_days_in_month = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); 
    j_days_in_month = new Array(31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29);     

   gy = g_y-1600; 
   gm = g_m-1; 
   gd = g_d-1; 

   g_day_no = 365*gy+div(gy+3,4)-div(gy+99,100)+div(gy+399,400); 

   for (i=0; i < gm; ++i) 
      g_day_no += g_days_in_month[i]; 
   if (gm>1 && ((gy%4==0 && gy%100!=0) || (gy%400==0))) 
      /* leap and after Feb */ 
      g_day_no++; 
   g_day_no += gd; 

   j_day_no = g_day_no-79; 

   j_np = div(j_day_no, 12053); /* 12053 = 365*33 + 32/4 */ 
   j_day_no = j_day_no % 12053; 

   jy = 979+33*j_np+4*div(j_day_no,1461); /* 1461 = 365*4 + 4/4 */ 

   j_day_no %= 1461; 

   if (j_day_no >= 366) { 
      jy += div(j_day_no-1, 365); 
      j_day_no = (j_day_no-1)%365; 
   } 

   for (i = 0; i < 11 && j_day_no >= j_days_in_month[i]; ++i) 
      j_day_no -= j_days_in_month[i]; 
   jm = i+1; 
   jd = j_day_no+1; 

   return new Array(jy, jm, jd); 
} 


function showdate() {
week= new Array("&#1610;&#1705;&#1588;&#1606;&#1576;&#1607;","&#1583;&#1608;&#1588;&#1606;&#1576;&#1607;","&#1587;&#1744;&#1588;&#1606;&#1576;&#1607;",
"&#1670;&#1575;&#1585;&#1588;&#1606;&#1576;&#1607;","&#1662;&#1606;&#1580;&#1588;&#1606;&#1576;&#1607;","&#1580;&#1605;&#1593;&#1607;","&#1588;&#1606;&#1576;&#1607;"
);
months = new Array("&#1608;&#1585;&#1610;","&#1594;&#1608;&#1610;&#1610;",
		  "&#1594;&#1576;&#1585;&#1707;&#1608;&#1604;&#1610;","&#1670;&#1606;&#1707;&#1575;&#1690;",
		  "&#1586;&#1605;&#1585;&#1610;","&#1608;&#1686;&#1610;","&#1578;&#1604;&#1744;","&#1604;&#1683;&#1605;",
		  "&#1604;&#1610;&#1606;&#1583;&#1741;","&#1605;&#1585;&#1594;&#1608;&#1605;&#1744;","&#1587;&#1604;&#1608;&#1575;&#1594;&#1744;",
		  "&#1705;&#1576;");
	a = new Date();
	d = a.getDay();
	day= a.getDate();
	month = a.getMonth()+1;
	year= a.getFullYear();
	


	afghan = gregorian_to_jalali(year,month,day);
	year = afghan[0];
	month= afghan[1];
	day = afghan[2];
	
	af_digits = new Array("&#1632;","&#1633;","&#1634;","&#1635;","&#1636;","&#1637;","&#1638;","&#1639;","&#1640;","&#1641;");
	year	  = year+"";
	af_first = parseInt(year.substring(0,1));
	af_second= parseInt(year.substring(1,2));
	af_third = parseInt(year.substring(2,3));
	af_fourth= parseInt(year.substring(3,4));
	
	day	 = day+"";
	
	if(day.length>1)
		day = af_digits[parseInt(day.substring(0,1))]+af_digits[parseInt(day.substring(1,2))];
	else
		day = af_digits[parseInt(day)];
	afyear = af_digits[af_first]+af_digits[af_second]+af_digits[af_third]+af_digits[af_fourth];
	document.write(week[d]+" &#1583; "+afyear+" &#1604;&#1605;&#1585;&#1610;&#1586; &#1705;&#1575;&#1604; &#1583; "+months[month-1]+" "+day);
}
function showHide(id) {
    obj = document.getElementsByTagName("div")
    var dis =    	obj[id].style.display;
    if(dis!="inline"){
	obj[id].style.display = "inline";
    }
    else {
    obj[id].style.display = "none";
    }
}


function popPlayer(id)
{
        var screen_width = screen.width;
        var screen_height= screen.height;
        var breite	= 600;
        var hoehe	= 200;
        var xOffset      = (screen_width-breite)/2;
        var yOffset      = (screen_height-hoehe)/2;
        
        var player	= "player.php?clips="+id;
        player_window = window.open(player,'player','left='+xOffset+',top='+yOffset+',width='+breite+',height='+hoehe+',directories=no,location=no,scrollbars=yes,menubar=no,resizable=yes,status=no,toolbar=no');
        player_window.focus();           
}

function buildList()
{
	var playList = "";
	for (var i=0;i<document.mediaForm.elements.length;i++)
		if (document.mediaForm.elements[i].name == 'trackSelector')
			if (document.mediaForm.elements[i].checked)
				playList += document.mediaForm.elements[i].value + ",";
	if (playList!="")
	{
		playList = playList.substring(0,playList.length-1);
		popPlayer(playList);
	}
	else
	{
		alert("Please select a song first");
	}

}
function selectAll() {
	for (var i=0;i<document.mediaForm.elements.length;i++)
		if (document.mediaForm.elements[i].name == 'trackSelector') 
			document.mediaForm.elements[i].checked = true;
}
function deSelectAll() {
	for (var i=0;i<document.mediaForm.elements.length;i++)
		if (document.mediaForm.elements[i].name == 'trackSelector') 
			if(document.mediaForm.elements[i].checked == true)
				document.mediaForm.elements[i].checked = false;
}
function popUp(dest,breite,hoehe)
{
                var screen_width = screen.width;
                var screen_height= screen.height;
                var xOffset      = (screen_width-breite)/2;
                var yOffset      = (screen_height-hoehe)/2;

                newWindow = window.open(dest,'newWindow','left='+xOffset+',top='+yOffset+',width='+breite+',height='+hoehe+',directories=no,location=no,menubar=no,scrollbars=yes,status=no,toolbar=no,resizable=yes');
	        newWindow.focus();
          
}
function popPrint(dest)
{		
		var breite	= 800;
		var hoehe	= 650;	
                var screen_width = screen.width;
                var screen_height= screen.height;
                var xOffset      = (screen_width-breite)/2;
                var yOffset      = 0;

                newWindow = window.open(dest,'newWindow','left='+xOffset+',top='+yOffset+',width='+breite+',height='+hoehe+',directories=no,location=no,menubar=yes,scrollbars=yes,status=no,toolbar=yes,resizable=yes');
	        newWindow.focus();
          
}
function popPrintDyn(id)
{		
		var breite	= 800;
		var hoehe	= 650;	
                var screen_width = screen.width;
                var screen_height= screen.height;
                var xOffset      = (screen_width-breite)/2;
                var yOffset      = 0;

                newWindow = window.open('print.php?id='+id,'newWindow','left='+xOffset+',top='+yOffset+',width='+breite+',height='+hoehe+',directories=no,location=no,menubar=yes,scrollbars=yes,status=no,toolbar=yes,resizable=yes');
	        newWindow.focus();
          
}
function EmailLink(){
window.location = "mailto:"+"?subject=Benawa :Online Pashto World" + "&body=please visit this link: "+window.location;
}
function na_open_window(name, url, left, top, width, height, toolbar, menubar, statusbar, scrollbar, resizable)
{
  toolbar_str = toolbar ? 'yes' : 'no';
  menubar_str = menubar ? 'yes' : 'no';
  statusbar_str = statusbar ? 'yes' : 'no';
  scrollbar_str = scrollbar ? 'yes' : 'no';
  resizable_str = resizable ? 'yes' : 'no';

  cookie_str = document.cookie;
  cookie_str.toString();

  pos_start  = cookie_str.indexOf(name);
  pos_end    = cookie_str.indexOf('=', pos_start);

  cookie_name = cookie_str.substring(pos_start, pos_end);

  pos_start  = cookie_str.indexOf(name);
  pos_start  = cookie_str.indexOf('=', pos_start);
  pos_end    = cookie_str.indexOf(';', pos_start);
  
  if (pos_end <= 0) pos_end = cookie_str.length;
  cookie_val = cookie_str.substring(pos_start + 1, pos_end);
  if (cookie_name == name && cookie_val  == "done")
    return;

  window.open(url, name, 'left='+left+',top='+top+',width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str);
}
function khalid(name, url, left, top, width, height, toolbar, menubar, statusbar, scrollbar, resizable)
{
  toolbar_str = toolbar ? 'yes' : 'no';
  menubar_str = menubar ? 'yes' : 'no';
  statusbar_str = statusbar ? 'yes' : 'no';
  scrollbar_str = scrollbar ? 'yes' : 'yes';
  resizable_str = resizable ? 'yes' : 'no';

  cookie_str = document.cookie;
  cookie_str.toString();

  pos_start  = cookie_str.indexOf(name);
  pos_end    = cookie_str.indexOf('=', pos_start);

  cookie_name = cookie_str.substring(pos_start, pos_end);

  pos_start  = cookie_str.indexOf(name);
  pos_start  = cookie_str.indexOf('=', pos_start);
  pos_end    = cookie_str.indexOf(';', pos_start);
  
  if (pos_end <= 0) pos_end = cookie_str.length;
  cookie_val = cookie_str.substring(pos_start + 1, pos_end);
  if (cookie_name == name && cookie_val  == "done")
    return;

  window.open(url, name, 'left='+left+',top='+top+',width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str);
}
function showHide(id)
{
    obj = document.getElementsByTagName("div")
    var dis =    	obj[id].style.display;
    if(dis!="inline"){
	obj[id].style.display = "inline";
    }
    else {
    obj[id].style.display = "none";
    }
}
// Title: tigra tables
function tigra_tables (
		str_tableid, // table id (req.)
		num_header_offset, // how many rows to skip before applying effects at the begining (opt.)
		num_footer_offset, // how many rows to skip at the bottom of the table (opt.)
		str_odd_color, // background color for odd rows (opt.)
		str_even_color, // background color for even rows (opt.)
		str_mover_color, // background color for rows with mouse over (opt.)
		str_onclick_color // background color for marked rows (opt.)
	) {

	// validate required parameters
	if (!str_tableid) return alert ("No table(s) ID specified in parameters");
	var obj_tables = (document.all ? document.all[str_tableid] : document.getElementById(str_tableid));
	if (!obj_tables) return alert ("Can't find table(s) with specified ID (" + str_tableid + ")");

	// set defaults for optional parameters
	var col_config = [];
	col_config.header_offset = (num_header_offset ? num_header_offset : 0);
	col_config.footer_offset = (num_footer_offset ? num_footer_offset : 0);
	col_config.odd_color = (str_odd_color ? str_odd_color : '#ffffff');
	col_config.even_color = (str_even_color ? str_even_color : '#dbeaf5');
	col_config.mover_color = (str_mover_color ? str_mover_color : '#6699cc');
	col_config.onclick_color = (str_onclick_color ? str_onclick_color : '#4C7DAB');
	
	// init multiple tables with same ID
	if (obj_tables.length)
		for (var i = 0; i < obj_tables.length; i++)
			tt_init_table(obj_tables[i], col_config);
	// init single table
	else
		tt_init_table(obj_tables, col_config);
}

function tt_init_table (obj_table, col_config) {
	var col_lconfig = [],
		col_trs = obj_table.rows;
	if (!col_trs) return;
	for (var i = col_config.header_offset; i < col_trs.length - col_config.footer_offset; i++) {
		col_trs[i].config = col_config;
		col_trs[i].lconfig = col_lconfig;
		col_trs[i].set_color = tt_set_color;
		col_trs[i].onmouseover = tt_mover; 
		col_trs[i].onmouseout = tt_mout;
		col_trs[i].onmousedown = tt_onclick;
		col_trs[i].order = (i - col_config.header_offset) % 2;
		col_trs[i].onmouseout();
	}
}
function tt_set_color(str_color) {
	this.style.backgroundColor = str_color;
}

// event handlers
function tt_mover () {
	if (this.lconfig.clicked != this)
		this.set_color(this.config.mover_color);
}
function tt_mout () {
	if (this.lconfig.clicked != this)
		this.set_color(this.order ? this.config.odd_color : this.config.even_color);
}
function tt_onclick () {
	if (this.lconfig.clicked == this) {
		this.lconfig.clicked = null;
		this.onmouseover();
	}
	else {
		var last_clicked = this.lconfig.clicked;
		this.lconfig.clicked = this;
		if (last_clicked) last_clicked.onmouseout();
		this.set_color(this.config.onclick_color);
	}
}
// Lekwal.js
function ValidateFields(n_Form,n_title,n_full)
{
    if( document.getElementById(n_title).value.length<1 || document.getElementById(n_full).value.length<1)
    {
        ShowDiv("SysMSGContainer");
        return false;        
    }
    document.forms[n_Form].submit();
    return true;
}
function ShowDiv(div)
{
    document.getElementById(div).style.display = "";
}
function ShowConfirm()
{
    return confirm("Are you sure ?");
}
function ToggleSelect(src,nForm,target)
{
	for (var i=0;i<document.forms[nForm].elements.length;i++)
		if (document.forms[nForm].elements[i].name == target) 
		    if (src.checked)
		        document.forms[nForm].elements[i].checked = true;
		    else
		        document.forms[nForm].elements[i].checked = false;    
}
function SelectAll(nForm,che)
{
	for (var i=0;i<document.forms[nForm].elements.length;i++)
		if (document.forms[nForm].elements[i].name == che) 
			document.forms[nForm].elements[i].checked = true;
	
}
function DeSelectAll(nForm,che)
{
	for (var i=0;i<document.forms[nForm].elements.length;i++)
		if (document.forms[nForm].elements[i].name == che) 
			document.forms[nForm].elements[i].checked = false;
}

function SwitchDiv(div)
{
    myDiv = document.getElementById(div);
    if(myDiv.style.display == "none")
        myDiv.style.display = "";
    else
        myDiv.style.display = "none";
}
function ShowItems(li)
{
	li.className += " mHover";
}
function HideItems(li)
{
	li.className = li.className.substring(0,li.className.indexOf("mHover"));
}

function changeAll() {
	
	if (document.deleteSelectedNews.Selection.value == 'true') {
		elval = false;
		document.deleteSelectedNews.Selection.value = "false";
		document.deleteSelectedNews.selectbutton.value = "Select All";
	} else {
		elval = true;
		document.deleteSelectedNews.Selection.value = "true";
		document.deleteSelectedNews.selectbutton.value = "De-Select All";
	}
	
	for (var i=0;i<document.deleteSelectedNews.elements.length;i++)
		if (document.deleteSelectedNews.elements[i].name == 'khabar[]') 
			document.deleteSelectedNews.elements[i].checked = elval;
}