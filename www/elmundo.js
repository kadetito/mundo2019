// JavaScript Document;
// Rellotges

var resfreshID1; 
var resfreshID2; 

// -------------------------------------------------------------------------------------------------------

function get_html_translation_table (table, quote_style) {
    // http://kevin.vanzonneveld.net
    // +   original by: Philip Peterson
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: noname
    // +   bugfixed by: Alex
    // +   bugfixed by: Marco
    // +   bugfixed by: madipta
    // +   improved by: KELAN
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Frank Forte
    // +   bugfixed by: T.Wild
    // +      input by: Ratheous
    // %          note: It has been decided that we're not going to add global
    // %          note: dependencies to php.js, meaning the constants are not
    // %          note: real constants, but strings instead. Integers are also supported if someone
    // %          note: chooses to create the constants themselves.
    // *     example 1: get_html_translation_table('HTML_SPECIALCHARS');
    // *     returns 1: {'"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;'}
    
    var entities = {}, hash_map = {}, decimal = 0, symbol = '';
    var constMappingTable = {}, constMappingQuoteStyle = {};
    var useTable = {}, useQuoteStyle = {};
    
    // Translate arguments
    constMappingTable[0]      = 'HTML_SPECIALCHARS';
    constMappingTable[1]      = 'HTML_ENTITIES';
    constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
    constMappingQuoteStyle[2] = 'ENT_COMPAT';
    constMappingQuoteStyle[3] = 'ENT_QUOTES';

    useTable       = !isNaN(table) ? constMappingTable[table] : table ? table.toUpperCase() : 'HTML_SPECIALCHARS';
    useQuoteStyle = !isNaN(quote_style) ? constMappingQuoteStyle[quote_style] : quote_style ? quote_style.toUpperCase() : 'ENT_COMPAT';

    if (useTable !== 'HTML_SPECIALCHARS' && useTable !== 'HTML_ENTITIES') {
        throw new Error("Table: "+useTable+' not supported');
        // return false;
    }

    entities['38'] = '&amp;';
    if (useTable === 'HTML_ENTITIES') {
        entities['160'] = '&nbsp;';
        entities['161'] = '&iexcl;';
        entities['162'] = '&cent;';
        entities['163'] = '&pound;';
        entities['164'] = '&curren;';
        entities['165'] = '&yen;';
        entities['166'] = '&brvbar;';
        entities['167'] = '&sect;';
        entities['168'] = '&uml;';
        entities['169'] = '&copy;';
        entities['170'] = '&ordf;';
        entities['171'] = '&laquo;';
        entities['172'] = '&not;';
        entities['173'] = '&shy;';
        entities['174'] = '&reg;';
        entities['175'] = '&macr;';
        entities['176'] = '&deg;';
        entities['177'] = '&plusmn;';
        entities['178'] = '&sup2;';
        entities['179'] = '&sup3;';
        entities['180'] = '&acute;';
        entities['181'] = '&micro;';
        entities['182'] = '&para;';
        entities['183'] = '&middot;';
        entities['184'] = '&cedil;';
        entities['185'] = '&sup1;';
        entities['186'] = '&ordm;';
        entities['187'] = '&raquo;';
        entities['188'] = '&frac14;';
        entities['189'] = '&frac12;';
        entities['190'] = '&frac34;';
        entities['191'] = '&iquest;';
        entities['192'] = '&Agrave;';
        entities['193'] = '&Aacute;';
        entities['194'] = '&Acirc;';
        entities['195'] = '&Atilde;';
        entities['196'] = '&Auml;';
        entities['197'] = '&Aring;';
        entities['198'] = '&AElig;';
        entities['199'] = '&Ccedil;';
        entities['200'] = '&Egrave;';
        entities['201'] = '&Eacute;';
        entities['202'] = '&Ecirc;';
        entities['203'] = '&Euml;';
        entities['204'] = '&Igrave;';
        entities['205'] = '&Iacute;';
        entities['206'] = '&Icirc;';
        entities['207'] = '&Iuml;';
        entities['208'] = '&ETH;';
        entities['209'] = '&Ntilde;';
        entities['210'] = '&Ograve;';
        entities['211'] = '&Oacute;';
        entities['212'] = '&Ocirc;';
        entities['213'] = '&Otilde;';
        entities['214'] = '&Ouml;';
        entities['215'] = '&times;';
        entities['216'] = '&Oslash;';
        entities['217'] = '&Ugrave;';
        entities['218'] = '&Uacute;';
        entities['219'] = '&Ucirc;';
        entities['220'] = '&Uuml;';
        entities['221'] = '&Yacute;';
        entities['222'] = '&THORN;';
        entities['223'] = '&szlig;';
        entities['224'] = '&agrave;';
        entities['225'] = '&aacute;';
        entities['226'] = '&acirc;';
        entities['227'] = '&atilde;';
        entities['228'] = '&auml;';
        entities['229'] = '&aring;';
        entities['230'] = '&aelig;';
        entities['231'] = '&ccedil;';
        entities['232'] = '&egrave;';
        entities['233'] = '&eacute;';
        entities['234'] = '&ecirc;';
        entities['235'] = '&euml;';
        entities['236'] = '&igrave;';
        entities['237'] = '&iacute;';
        entities['238'] = '&icirc;';
        entities['239'] = '&iuml;';
        entities['240'] = '&eth;';
        entities['241'] = '&ntilde;';
        entities['242'] = '&ograve;';
        entities['243'] = '&oacute;';
        entities['244'] = '&ocirc;';
        entities['245'] = '&otilde;';
        entities['246'] = '&ouml;';
        entities['247'] = '&divide;';
        entities['248'] = '&oslash;';
        entities['249'] = '&ugrave;';
        entities['250'] = '&uacute;';
        entities['251'] = '&ucirc;';
        entities['252'] = '&uuml;';
        entities['253'] = '&yacute;';
        entities['254'] = '&thorn;';
        entities['255'] = '&yuml;';
    }

    if (useQuoteStyle !== 'ENT_NOQUOTES') {
        entities['34'] = '&quot;';
    }
    if (useQuoteStyle === 'ENT_QUOTES') {
        entities['39'] = '&#39;';
    }
    entities['60'] = '&lt;';
    entities['62'] = '&gt;';


    // ascii decimals to real symbols
    for (decimal in entities) {
        symbol = String.fromCharCode(decimal);
        hash_map[symbol] = entities[decimal];
    }
    
    return hash_map;
}

// -------------------------------------------------------------------------------------------------------

function htmlentities (string, quote_style) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: nobbler
    // +    tweaked by: Jack
    // +   bugfixed by: Onno Marsman
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Ratheous
    // -    depends on: get_html_translation_table
    // *     example 1: htmlentities('Kevin & van Zonneveld');
    // *     returns 1: 'Kevin &amp; van Zonneveld'
    // *     example 2: htmlentities("foo'bar","ENT_QUOTES");
    // *     returns 2: 'foo&#039;bar'

    var hash_map = {}, symbol = '', tmp_str = '', entity = '';
    tmp_str = string.toString();
    
    if (false === (hash_map = this.get_html_translation_table('HTML_ENTITIES', quote_style))) {
        return false;
    }
    hash_map["'"] = '&#039;';
    for (symbol in hash_map) {
        entity = hash_map[symbol];
        tmp_str = tmp_str.split(symbol).join(entity);
    }
    
    return tmp_str;
}

// -------------------------------------------------------------------------------------------------------

function html_entity_decode (string, quoteStyle) { // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/html_entity_decode/
  // original by: john (http://www.jd-tech.net)
  //    input by: ger
  //    input by: Ratheous
  //    input by: Nick Kolosov (http://sammy.ru)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: marc andreu
  //  revised by: Kevin van Zonneveld (http://kvz.io)
  //  revised by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Fox
  //   example 1: html_entity_decode('Kevin &amp; van Zonneveld')
  //   returns 1: 'Kevin & van Zonneveld'
  //   example 2: html_entity_decode('&amp;lt;')
  //   returns 2: '&lt;'
  var tmpStr = '';
  var entity = '';
  var symbol = '';
  tmpStr = string.toString();
  var hashMap = get_html_translation_table('HTML_ENTITIES', quoteStyle);
  if (hashMap === false) {
    return false;
  }
  // @todo: &amp; problem
  // http://locutus.io/php/get_html_translation_table:416#comment_97660
  delete (hashMap['&']);
  hashMap['&'] = '&amp;';
  for (symbol in hashMap) {
    entity = hashMap[symbol];
    tmpStr = tmpStr.split(entity).join(symbol);
  }
  tmpStr = tmpStr.split('&#039;').join("'");
  return tmpStr;
}

// -------------------------------------------------------------------------------------------------------

// Converteix  time en formar 00h00m00s o AGOTADO quan s'acaba
function strtotime(time)
{
var horas = Math.floor(time / 3600);	
var minutos = Math.floor((time - horas*3600)/60);	
var segundos = time - horas * 3600 - minutos * 60;
var txt = '';

if (horas>0) {
	if (horas<10) {txt = txt + '0'+ horas +'h ';} else {txt = txt + horas +'h ';}
}
if (horas>0 || minutos>0) {
	if (minutos<10) {txt = txt + '0'+ minutos +'m ';} else {txt = txt + minutos +'m ';}
}
if (horas>0 || minutos>0 || segundos>0) {
	if (segundos<10) {txt = txt + '0' +segundos +'s ';} else {txt = txt + segundos +'s ';}
}
	
if (time <=0) txt = '00h 00m 00s';
	
return txt;	
}

// Actualitza tots els cronos

function update_time()
{
	$('.cronos').each(function() {
		var name = $(this).attr("name");
		var estado = parseInt($(this).attr("estado"));
		var time = $(this).val();
		var ID = name.substring(6); // a partir de la 6 posicio
		var capa = '#time_'+ID;
		var capabotons = '#capabotons_'+ID;
		
		// color
		var color = "blue";
		if (time<3600) color = "orange";
		if (time<300) color = "red";
//		var blink = '';
//		if (time<0) blink = " class='blink_me'";
		
		$(capa).html(maquetar(strtotime(time, color)));
		$(capa).css("color", color);
		$(this).val(time-1);
		if (time<0 && estado < 5)
			$(capabotons).hide();	
	});	
}

// -------------------------------------------------------------------------------------------------------
function strpos (haystack, needle, offset) {
  var i = (haystack+'').indexOf(needle, (offset || 0));
  return i === -1 ? false : i;
}
// -------------------------------------------------------------------------------------------------------


// Parar rellotges

function parar_reloj()
{
clearInterval(resfreshID1);	
clearInterval(resfreshID2);	
};

// Engegar rellotges

function arrancar_reloj_missubastas()
{
resfreshID1 = setInterval("update_time()", 1000);	
resfreshID2 = setInterval("update_lista()", 6000);	
};

function arrancar_reloj()
{
resfreshID1 = setInterval("update_time()", 1000);	
resfreshID2 = setInterval("update_lista_subastas()", 6000);	
};	

function arrancar_reloj_ventas()
{
resfreshID2 = setInterval("update_lista_ventas()", 15000);	
};	

function maquetar(s, color)
{
// recibimos dd MMM hh:mm
var pos1 = strpos(s, ' ',0); // primer espacio
var pos2 = strpos(s, ' ',3); // segundo espacio

var r = '<div class="hora" style="color:' +color+ '">'+ s.substr(0, pos1) + '</div>';
r = r + '<div class="minutos" style="color:' +color+ '">'+ s.substr(pos1+1, (pos2-pos1)) + '</div>';
r = r + '<div class="minutos" style="color:' +color+ '">'+ s.substr(pos2+1, 9999) + '</div>';

//	alert(r);
return r;
}


function monta_oferta_usuarios(TxtRemainTime, color, Estat, data) {
	txt = "<tr><td rowspan='3' width='30%'>";
	if (parseInt(data.Status) > 0 && parseInt(data.Status) < 6)
		txt = txt + "<div id='time_"+data.Id+"' style='color:"+color+"'>"+maquetar(TxtRemainTime)+"</div>";
	
	txt = txt + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'>";
	// <input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'>";
	txt = txt + "</td><td width='27%'>"+data.CreationDate+"</td><td width='34%'><strong>"+data.Price+"&nbsp;&euro;</strong></td>";

	return (txt);
}
function monta_oferta_asociados(TxtRemainTime, color, Estat, data) {
	txt = "<tr><td rowspan='3' width='30%'>";
	if (parseInt(data.Status) > 0 && parseInt(data.Status) < 6)
		txt = txt + "<div id='time_"+data.Id+"' style='color:"+color+"'>"+maquetar(TxtRemainTime)+"</div>";
	
	txt = txt + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td width='27%'>"+data.CreationDate+"</td><td width='34%'><strong>"+data.Price+"&nbsp;&euro;</strong></td>";

	return (txt);
}

function monta_botons_usuarios(Id, Status, soyyo, TxtDisplay) {
//  var txt = "<tr><td class='text-left' colspan='3'>[" + Status + "]<div class='grupbtns' id='capabotons_"+ Id +"'>"; //" style='display:"+ TxtDisplay +">";
	var txt = "<td rowspan='3' width='9%'><div class='grupbtns' id='capabotons_"+ Id +"'>"; // style='display:"+ TxtDisplay +">";
	
	switch (Status) {
		case "0":
			txt = txt     + '<button type="button" class="btn btn-danger"  id="cancelar_' + Id + '"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button>';
			break;

		case "1":
		case "2":
		case "3":
			txt = txt     + '<button type="button" class="btn btn-success" id="editar_'   + Id + '"><i class="fa fa-pencil-square fa-2x" aria-hidden="true"></i></button>';
			txt = txt     + '<button type="button" class="btn btn-danger"  id="cancelar_' + Id + '"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button>';
			break;
			
		case "5":
		case "8":
			break;
			
		case "10":
			txt = txt + '<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#my-modal" id="valorar_' + Id + '"><i class="fa fa-star-o fa-2x" aria-hidden="true"></i></button>';
			txt = txt + '<button type="button" class="btn btn-danger" id="borrar_'     + Id + '"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button>';
			break;

		case "18":
			txt = txt + "<button type='button' class='btn btn-danger' id='ocultar_"    + Id + "'><i class='fa fa-trash fa-2x' aria-hidden='true'></i></button>";
			break;	
			
		case "20":
			break;
			
		case "25":
			txt = txt + '<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#my-modal" id="valorar_' + Id + '"><i class="fa fa-star-o fa-2x" aria-hidden="true"></i></button>';
			txt = txt + '<button type="button" class="btn btn-danger" id="borrar_'     + Id + '"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button>';
			break;
			
		case "26":
		case "30":
		case "94":
			txt = txt + '<button type="button" class="btn btn-danger" id="borrar_'     + Id + '"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button>';
			break;
			
		case "90":
		case "91":
			txt = txt + "<button type='button' class='btn btn-danger' id='ocultar_"    + Id + "'><i class='fa fa-trash fa-2x' aria-hidden='true'></i></button>";
			break;	
			
		case "92":
			if (soyyo) {
				txt = txt + '<button type="button" class="btn btn-info" id="verdatos_'+ Id + '"><i class="fa fa-users fa-2x" aria-hidden="true"></i></button>';
				txt = txt + '<button type="button" class="btn btn-danger" id="borrar_'+ Id + '"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button>';
			}
			break;
		case "18":
			break;
	}	

	txt = txt + "</div></td></tr>";
	return(txt);
}

function monta_botons_asociados(Id, Status, soyyo, TxtDisplay) {
//  var txt = "<tr><td class='text-left' colspan='3'>[" + Status + "]<div class='grupbtns' id='capabotons_"+ Id +"'>"; //" style='display:"+ TxtDisplay +">";
	var txt = "<tr><td class='text-left' colspan='3'><div class='grupbtns' id='capabotons_"+ Id +"'>"; // style='display:"+ TxtDisplay +">";
	
	switch (Status) {
			
		case "1":
		case "2":
		case "3":
			txt = txt     + '<button type="button" class="btn btn-success" id="aceptar_'   + Id + '"><i class="fa fa-check-square fa-2x" aria-hidden="true"></i></button>';
			break;
			
		case "5":
			if (soyyo) {
				txt = txt + '<button type="button" class="btn btn-info"    id="verdatos_'  + Id + '"><i class="fa fa-users fa-2x"        aria-hidden="true"></i></button>';
				txt = txt + '<button type="button" class="btn btn-success" id="confirmar_' + Id + '"><i class="fa fa-check-square fa-2x" aria-hidden="true"></i></button>';
				txt = txt + '<button type="button" class="btn btn-warning" id="liberar_'   + Id + '"><i class="fa fa-undo fa-2x"         aria-hidden="true"></i></button>';
			} 
			break;

		case "8":
			if (soyyo) {
				txt = txt + '<button type="button" class="btn btn-info"    id="verdatos_'  + Id + '"><i class="fa fa-users fa-2x"        aria-hidden="true"></i></button>';
				txt = txt + '<button type="button" class="btn btn-success" id="cerrar_'    + Id + '"><i class="fa fa-check-square fa-2x" aria-hidden="true"></i></button>';
				txt = txt + '<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal2" id="rechazar_'+ Id +'"><i class="fa fa-times fa-2x" aria-hidden="true"></i></button>'; 
			}
			break;
			
		case "10":
			if (soyyo) {
				txt = txt + '<button type="button" class="btn btn-info" id="verdatos_'+ Id +'"><i class="fa fa-users fa-2x" aria-hidden="true"></i></button>';
				txt = txt + '<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#my-modal3" id="valorar_'+ Id +'"><i class="fa fa-star-o fa-2x" aria-hidden="true"></i></button>';
				txt = txt + '<button type="button" class="btn btn-danger" id="borrar_'+ Id +'"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button>'; 
			}
			break;
			
		case "20":
		case "21":
			if (soyyo) {
				txt = txt + '<button type="button" class="btn btn-info" id="verdatos_'+ Id +'"><i class="fa fa-users fa-2x" aria-hidden="true"></i></button>';
				txt = txt + '<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#my-modal3" id="valorar_'+ Id +'"><i class="fa fa-star-o fa-2x" aria-hidden="true"></i></button>';
				txt = txt + '<button type="button" class="btn btn-danger" id="borrar_'+ Id +'"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button>'; 
			}
		
			break;
			
		case "25":
			if (soyyo) {
				txt = txt + '<button type="button" class="btn btn-info" id="verdatos_'    + Id + '"><i class="fa fa-users fa-2x" aria-hidden="true"></i></button>';
			}
			break;
			
		case "30":
			if (soyyo) {
				txt = txt + '<button type="button" class="btn btn-info" id="verdatos_'+ Id + '"><i class="fa fa-users fa-2x" aria-hidden="true"></i></button>';
				txt = txt + '<button type="button" class="btn btn-danger" id="borrar_'+ Id + '"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button>';
			}
			
			break;
			
		case "90":
			if (soyyo) {
				txt = txt + "<button type='button' class='btn btn-danger' id='borrar_"    + Id + "'><i class='fa fa-trash fa-2x' aria-hidden='true'></i></button>";
			}
			break;	
			
		case "92":
			if (soyyo) {
				txt = txt + '<button type="button" class="btn btn-info" id="verdatos_'+ Id + '"><i class="fa fa-users fa-2x" aria-hidden="true"></i></button>';
				txt = txt + '<button type="button" class="btn btn-danger" id="borrar_'+ Id + '"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button>';
			}
			break;
		case "18":
			break;
	}	

	txt = txt + "</div></td></tr>";
	return(txt);
}

function monta_imatge(img, Id, Description) {
	return ("<tr><td colspan='2' class='minnst'><a href='#' class='pop'><img src='" + img + "' id='image_" + Id + "' class='thumb'/></a></td></tr><tr><td colspan='2' class='descrclass'>" + Description + "</td></tr>"); // imatge
}




// -------------------------------------------------------------------------------------------------------------------
// funcion update lista, se ejecuta cada pocos segundos. MIS SUBASTAS.PHP
// -------------------------------------------------------------------------------------------------------------------
	
function update_lista()
{
	// Recupera los datos
	var datosUsuario	= sessionStorage.getItem('datosUsuario');
	var datosPassword	= sessionStorage.getItem('datosPassword');
	
	// Actualitza listasubastas
	
	var url="https://elmundo.webexpo.es/subastas.php";
	url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&accion=listar";
	$.getJSON(url,function(mensaje, validacion) {
		
		var newRow = '';

		if (mensaje.lista === null) {
			newRow = newRow + "<tr class='success'><td colspan=6 class='videfech text-center'><strong>En estos momentos no dispone de ninguna subasta activa de las categorías contradadas</strong></td></tr>";
			$("#mostrarsubastas").empty();
			$(newRow).appendTo("#mostrarsubastas");
			
		}
		else {

			$.each(mensaje.lista, function(ID, data) {
			
				// Preparación de datos
				var img = data.Image;

				if (!img || img === null || img === 'null')  // Si vuelve nulo
					{var img = 'https://elmundo.webexpo.es/pix.gif';}	
				
				var time = data.RemainTime;
				// color
				var color = "blue";
				if (time<3600) color = "orange";
				if (time<300) color = "red";
				var TxtRemainTime = strtotime(time);
				
				var soyyo = true;
				
				if (time>=0)
					var TxtDisplay = 'inline';
				else
					var TxtDisplay = 'none';


				switch (Number(data.Status)) {
					case 0: // Agotado, finalizado
						var  Estat = " <i class='fa fa-pencil-square-o fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Cancelada por el usuario</em></div>";

//						newRow = newRow + "<tr><td rowspan='3' width='30%'><div id='time_"+data.Id+"' style='color:"+color+"' >"+maquetar(TxtRemainTime)+"</div>"+Estat+"<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td width='27%'>"+data.CreationDate+"</td><td width='34%'><strong>"+data.Price+"&nbsp;&euro;</strong></td><td rowspan='3' width='9%'>" + 
//						"<div class='grupbtns' id='capabotons' style='display:"+ TxtDisplay +"'></div>" + 
//						"<div class='grupbtns'><button type='button' class='btn btn-danger' id='cancelar_"+data.Id+"'><i class='fa fa-trash fa-2x' aria-hidden='true'></i></button></div></td></tr><tr><td colspan='2' class='minnst'><a href='#' class='pop'><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></a></td></tr><tr><td colspan='2' class='descrclass'>"+data.Description+"</td></tr>";
   
						newRow = newRow + monta_oferta_usuarios(TxtRemainTime, color, Estat, data);		
						newRow = newRow + monta_botons_usuarios(data.Id, data.Status, soyyo, TxtDisplay);
						newRow = newRow + monta_imatge(img, data.Id, data.Description);   						
						
						break;

					case 1: // Activa
					case 2: // Modificada
					case 3: // Lliberada

						switch (Number(data.Status)) {
							case 2: Estat = " <i class='fa fa-pencil-square-o fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>modificada</em></div>"; break;
							case 3:	Estat = " <i class='fa fa-undo fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>liberada por asociado</em></div>"; break;
							default : Estat = '';	
						}

						//001 modificado
//						newRow = newRow + "<tr><td rowspan='3' width='30%'><div id='time_"+data.Id+"' style='color:"+color+"'>"+maquetar(TxtRemainTime)+"</div>"+Estat+"<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+ data.RemainTime +"' estado='"+data.Status+"'></td><td width='27%'>"+data.CreationDate+"</td><td width='34%'><strong>"+data.Price+"&nbsp;&euro;</strong></td><td rowspan='3' width='9%'><div class='grupbtns' id='capabotons' style='display:"+ TxtDisplay +"'></div><div class='grupbtns'>" + 
						
//						"<button type='button' class='btn btn-success' id='editar_"+data.Id+"'><i class='fa fa-pencil-square fa-2x' aria-hidden='true'></i></button>" +
//						"<button type='button' class='btn btn-danger' id='cancelar_"+data.Id+"'><i class='fa fa-trash fa-2x' aria-hidden='true'></i></button>" +
//						"</div></td></tr><tr><td colspan='2' class='minnst'><a href='#' class='pop'><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></a></td></tr><tr><td colspan='2' class='descrclass'>"+data.Description+"</td></tr>";
						
						newRow = newRow + monta_oferta_usuarios(TxtRemainTime, color, Estat, data);		
						newRow = newRow + monta_botons_usuarios(data.Id, data.Status, soyyo, TxtDisplay);
						newRow = newRow + monta_imatge(img, data.Id, data.Description);  						
						break;

					case 5: // Asignada
						 Estat = " <i class='fa fa-thumbs-o-up fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Asignada</em></div>";
						
						//002 modificado
//						newRow = newRow + "<tr><td rowspan='3' width='30%'><div id='time_"+data.Id+"' style='color:"+color+"'>"+maquetar(TxtRemainTime)+"</div>"+Estat+"<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td width='27%'>"+data.CreationDate+"</td><td width='34%'><strong>"+data.Price+"&nbsp;&euro;</strong></td><td rowspan='3' width='9%'><div class='grupbtns' id='capabotons' style='display:"+ TxtDisplay +"'></div><div class='grupbtns'><div class='grupbtns' id='capabotons_"+data.Id+"'></div></div></td></tr><tr><td colspan='2' class='minnst'><a href='#' class='pop'><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></a></td></tr><tr><td colspan='2' class='descrclass'>"+data.Description+"</td></tr>";
						newRow = newRow + monta_oferta_usuarios(TxtRemainTime, color, Estat, data);		
						newRow = newRow + monta_botons_usuarios(data.Id, data.Status, soyyo, TxtDisplay);
						newRow = newRow + monta_imatge(img, data.Id, data.Description);  						
						break;


					case 8: // Confirmada
						 Estat = " <i class='fa fa-thumbs-o-up fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Confirmada por vendedor</em></div>";

						//003 modificado						
//						newRow = newRow + "<tr><td rowspan='3' width='30%'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td width='27%'>&nbsp;</td><td width='34%'><strong>"+data.Price+"&nbsp;&euro;</strong></td><td rowspan='3' width='9%'><div class='grupbtns' id='capabotons_"+data.Id+"'></div><div class='grupbtns'></div></td></tr><tr><td colspan='2' class='minnst'><a href='#' class='pop'><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></a></td></tr><tr><td colspan='2' class='descrclass'>"+data.Description+"</td></tr>";
						newRow = newRow + monta_oferta_usuarios(TxtRemainTime, color, Estat, data);		
						newRow = newRow + monta_botons_usuarios(data.Id, data.Status, soyyo, TxtDisplay);
						newRow = newRow + monta_imatge(img, data.Id, data.Description);
						
						break;

					case 10: // Conpletada
						 Estat = " <i class='fa fa-thumbs-o-up fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Completado por vendedor</em></div>";

						//004
//						newRow = newRow + "<tr><td rowspan='3' width='30%'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td width='27%'>"+data.CreationDate+"</td><td width='34%'><strong>"+data.Price+"&nbsp;&euro;</strong></td><td rowspan='3' width='9%'><div class='grupbtns' id='capabotons_"+data.Id+"'><button type='button' class='btn btn-warning' data-toggle='modal' data-target='#my-modal' id='valorar_"+data.Id+"'><i class='fa fa-star-o fa-2x' aria-hidden='true'></i></button><button type='button' class='btn btn-danger' id='borrar_"+data.Id+"'><i class='fa fa-trash fa-2x' aria-hidden='true'></i></button></div></td></tr><tr><td colspan='2' class='minnst'><a href='#' class='pop'><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></a></td></tr><tr><td colspan='2' class='descrclass'>"+data.Description+"</td></tr>";
						newRow = newRow + monta_oferta_usuarios(TxtRemainTime, color, Estat, data);		
						newRow = newRow + monta_botons_usuarios(data.Id, data.Status, soyyo, TxtDisplay);
						newRow = newRow + monta_imatge(img, data.Id, data.Description);
   						
						break;


					case 18: // Cancelada
						 Estat = " <i class='fa fa-thumbs-o-down fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Cancelada por el vendedor</em></div>";

						//005
//						newRow = newRow + "<tr><td rowspan='3' width='30%'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td width='27%'>"+data.CreationDate+"</td><td width='34%'><strong>"+data.Price+"&nbsp;&euro;</strong></td><td rowspan='3' width='9%'><div class='grupbtns' id='capabotons_"+data.Id+"'><button type='button' class='btn btn-danger' id='ocultar_"+data.Id+"'><i class='fa fa-trash fa-2x' aria-hidden='true'></i></button></div></td></tr><tr><td colspan='2' class='minnst'><a href='#' class='pop'><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></a></td></tr><tr><td colspan='2' class='descrclass'>"+data.Description+"</td></tr>";
						newRow = newRow + monta_oferta_usuarios(TxtRemainTime, color, Estat, data);		
						newRow = newRow + monta_botons_usuarios(data.Id, data.Status, soyyo, TxtDisplay);
						newRow = newRow + monta_imatge(img, data.Id, data.Description);
						
						break;

					case 20: // Valorada por el cliente
						 Estat = " <i class='fa fa-star-o fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Valorada por mi, esperamos valoración del vendedor</em></div>";
						
						//006
//						newRow = newRow + "<tr><td rowspan='3' width='30%'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td width='27%' class='success'>"+data.CreationDate+"</td><td width='34%'><strong>"+data.Price+"&nbsp;&euro;</strong></td><td rowspan='3' width='9%'><div class='grupbtns' id='capabotons_"+data.Id+"'></div></td></tr><tr><td colspan='2' class='minnst'><a href='#' class='pop'><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></a></td></tr><tr><td colspan='2' class='descrclass'>"+data.Description+"</td></tr>";

						newRow = newRow + monta_oferta_usuarios(TxtRemainTime, color, Estat, data);		
						newRow = newRow + monta_botons_usuarios(data.Id, data.Status, soyyo, TxtDisplay);
						newRow = newRow + monta_imatge(img, data.Id, data.Description);
						
						break;

					case 25: // Valorada por el asociado
						 Estat = " <i class='fa fa-star-o fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Valorada por el vendendor</em></div>";
						//007
//						newRow = newRow + "<tr><td rowspan='3' width='30%'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td width='27%'>"+data.CreationDate+"</td><td width='34%'><strong>"+data.Price+"&nbsp;&euro;</strong></td><td rowspan='3' width='9%'><div class='grupbtns' id='capabotons_"+data.Id+"'><button type='button' class='btn btn-warning' data-toggle='modal' data-target='#my-modal' id='valorar_"+data.Id+"'><i class='fa fa-star-o fa-2x' aria-hidden='true'></i></button><button type='button' class='btn btn-danger' id='borrar_"+data.Id+"'><i class='fa fa-trash fa-2x' aria-hidden='true'></i></button></div></td></tr><tr><td colspan='2' class='minnst'><a href='#' class='pop'><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></a></td></tr><tr><td colspan='2' class='descrclass'>"+data.Description+"</td></tr>";

						newRow = newRow + monta_oferta_usuarios(TxtRemainTime, color, Estat, data);		
						newRow = newRow + monta_botons_usuarios(data.Id, data.Status, soyyo, TxtDisplay);
						newRow = newRow + monta_imatge(img, data.Id, data.Description);
						
						break;

					case 30: // Valorados por ambos
					case 26: // Borrado por el cliente
					case 94: // Borrado por el cliente
						 Estat = " <i class='fa fa-star-o fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Valorado</em></div>";
						//008
//						newRow = newRow + "<tr><td rowspan='3' width='30%'>" + Estat + "<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td width='27%'>"+data.CreationDate+"</td><td width='34%'><strong>"+data.Price+"&nbsp;&euro;</strong></td><td rowspan='3' width='9%'><div class='grupbtns' id='capabotons_"+data.Id+"'><button type='button' class='btn btn-danger' id='borrar_"+data.Id+"'><i class='fa fa-trash fa-2x' aria-hidden='true'></i></button></div></td></tr><tr><td colspan='2' class='minnst'><a href='#' class='pop'><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></a></td></tr><tr><td colspan='2' class='descrclass'>"+data.Description+"</td></tr>";

						newRow = newRow + monta_oferta_usuarios(TxtRemainTime, color, Estat, data);		
						newRow = newRow + monta_botons_usuarios(data.Id, data.Status, soyyo, TxtDisplay);
						newRow = newRow + monta_imatge(img, data.Id, data.Description);
						
						break;

					case 90: // Cancelada por el cliente
					case 91: // Cancelada por el cliente
						Estat = " <i class='fa fa-thumbs-o-down fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Cancelada por el usuario</em></div>";

						//009
//						newRow = newRow + "<tr><td rowspan='3' width='30%'>" + Estat + "</td><td width='27%'>&nbsp;</td><td width='34%'><strong>"+data.Price+"&nbsp;&euro;</strong></td><td rowspan='3' width='9%'><div class='grupbtns' id='capabotons_"+data.Id+"'><button type='button' class='btn btn-danger' id='ocultar_"+data.Id+"'><i class='fa fa-trash fa-2x' aria-hidden='true'></i></button></div></td></tr><tr><td colspan='2' class='minnst'><a href='#' class='pop'><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></a></td></tr><tr><td colspan='2' class='descrclass'>"+data.Description+"</td></tr>";
						
						newRow = newRow + monta_oferta_usuarios(TxtRemainTime, color, Estat, data);		
						newRow = newRow + monta_botons_usuarios(data.Id, data.Status, soyyo, TxtDisplay);
						newRow = newRow + monta_imatge(img, data.Id, data.Description);

						break;

					case 21: // Borrado por el cliente
					case 92: // Borrado por el cliente
					case 98: // Historificado
					case 99: // Borrado, no sale nada.
						break;
						
					default: // Otro Estado
						 Estat = " <i class='fa fa-exclamation-triangle fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Estado no definido correctamente. Estado " + data.Status + "</em></div>";

						//010						
//						newRow = newRow + "<tr><td rowspan='3' width='30%'>" + Estat + "</td><td width='27%'>"+data.CreationDate+"</td><td width='34%'><strong>"+data.Price+"&nbsp;&euro;</strong></td><td rowspan='3' width='9%'></td></tr><tr><td colspan='2' class='minnst'><a href='#' class='pop'><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></a></td></tr><tr><td colspan='2' class='descrclass'>"+data.Description+"</td></tr>";
						
						newRow = newRow + monta_oferta_usuarios(TxtRemainTime, color, Estat, data);		
						newRow = newRow + monta_botons_usuarios(data.Id, data.Status, soyyo, TxtDisplay);
						newRow = newRow + monta_imatge(img, data.Id, data.Description);
						
						break;
				}
			});
					   
			$("#mostrarsubastas").empty();
			$(newRow).appendTo("#mostrarsubastas");

			// Botones de acción
			$.each(mensaje.lista, function(ID, data) {

				var nom = '';
				// Edicio per 'usuari
				if (data.Status == 1 || data.Status==2 || data.Status ==3) {
					nom = '#editar_' + data.Id;
					$(nom).click(function () {
					
						sessionStorage.setItem('Explicacion', data.Description);
						sessionStorage.setItem('imgData', data.Image);	

						sessionStorage.setItem('CategoriaBase', data.CategoryCodes[0].substring(0,4)); 
						sessionStorage.setItem('CategoriaNivel1', data.CategoryCodes[0].substring(0,6));
						sessionStorage.setItem('CategoriaNivel2', 0);

						if (data.CategoryCodes[0].length>6)
							sessionStorage.setItem('CategoriaNivel2', data.CategoryCodes[0]);

						sessionStorage.setItem('idsubasta', data.Id);
						sessionStorage.setItem('precio', data.Price);
						sessionStorage.setItem('periodo', data.Period);
						sessionStorage.setItem('actualitzacio', 1);
						window.location.href = 'segunda.html?update='+data.Id;
					});
				}

				// Cancelar per l'usuari
				if (data.Status == 0 || data.Status == 1 || data.Status == 2 || data.Status == 3) {
					nom = '#cancelar_' + data.Id;
					$(nom).click(function () {
						parar_reloj();
						confirmar = confirm ('Deseas cancelar la oferta de "' + data.Description + '" ?');
						if (confirmar) {
							var url = "https://elmundo.webexpo.es/subastas.php";
							url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=cancelar";
							$.getJSON(url,function(mensaje, validacion) {
								if (validacion == 'success') {
									alert ('La oferta ha sido cancelada');
									window.location.href = 'mis_subastas.html';
								} else {
									alert ('Ha habido algun problema para cancelar la oferta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
								}
							});
						} else {
							arrancar_reloj();
						}
					});
				}

				if (data.Status == 10 || data.Status == 25 || data.Status == 30 || data.Status == 94) {
					nom = '#borrar_' + data.Id;
					$(nom).click(function () {
	//					confirmar = confirm ('Deseas cancelar la oferta de "' + data.Description + '"');
	//					if (confirmar) {
							var url = "https://elmundo.webexpo.es/subastas.php";
							url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=ocultar";
							$.getJSON(url,function(mensaje, validacion) {
								if (validacion == 'success') {
	//								alert ('La oferta ha sido cancelada');
									window.location.href = 'mis_subastas.html';
								} else {
									alert ('Ha habido algun problema para borrar esta oferta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
								}
							});
	//					}
					});
				}

				if (data.Status == 10 || data.Status == 25) {
					nom = '#valorar_' + data.Id;
					$(nom).click(function () {
						sessionStorage.setItem("subastaseleccionada", data.Id);
						//$('#my-modal').modal('show');
					});
				}

				// Ocultar per l'usuari
				if (data.Status == 18  || data.Status == 90 || data.Status == 91) {
					nom = '#ocultar_' + data.Id;
					$(nom).click(function () {
	//					confirmar = confirm ('Deseas cancelar la oferta de "' + data.Description + '"');
	//					if (confirmar) {
							var url = "https://elmundo.webexpo.es/subastas.php";
							url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=ocultar";
							$.getJSON(url,function(mensaje, validacion) {
								if (validacion == 'success') {
	//								alert ('La oferta ha sido cancelada');
									window.location.href = 'mis_subastas.html';
								} else {
									alert ('Ha habido algun problema para ocultar esta oferta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
								}
							});
	//					}
					});
				}


			});
			
			// Clic sobre imatge
			$(".pop").click(function() {
				$('.imagepreview').attr('src', $(this).find('img').attr('src'));
				$('#imagemodal').modal('show');   
			});			
		}
	});	
}

// -------------------------------------------------------------------------------------------------------------------
// funcion update lista, se ejecuta cada pocos segundos. SUBASTAS ASOCIADOS
// -------------------------------------------------------------------------------------------------------------------

function update_lista_subastas()	
{

	// Recupera los datos
	var datosUsuario	= sessionStorage.getItem('datosUsuario');
	var datosPassword	= sessionStorage.getItem('datosPassword');
	
	// Actualitza listasubastas
	
	var url="https://elmundo.webexpo.es/subastas.php";
	url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&accion=asociado";
	$.getJSON(url,function(mensaje, validacion){

		var newRow = '';
		
		if (validacion === 'success') {
			if (mensaje.validacion === 'ok') {
				
				if (mensaje.lista === null)
					{
					newRow = newRow + "<tr class='success'><td colspan=6 class='videfech text-center'><strong>En estos momentos no hay ninguna subasta activa de las categorías contradadas</strong></td></tr>";
					newRow = newRow + "<tr class='success'><td colspan=6 class='videfech text-center'><strong>Existen un total de "+ mensaje.total +" subastas actualmente activas en la aplicaci&oacute;n</strong></td></tr>";
					
					$("#mostrarsubastas").empty();
					$(newRow).appendTo("#mostrarsubastas");
					}
				else
					{
					$.each(mensaje.lista, function(ID, data) {

						var img = data.Image;
						if (!img || img === null || img === 'null')  // Si vuelve nulo
							img = 'https://elmundo.webexpo.es/pix.gif';	
						
						var time = data.RemainTime;
						// color
						var color = "blue";
						if (time<3600) color = "orange";
						if (time<300) color = "red";
						var TxtRemainTime = strtotime(time);

						if (time >= 0)
							var TxtDisplay = 'inline';
						else
							var TxtDisplay = 'none';						
						
						var soyyo = data.Itsme;
						var Estat = '';
	
						switch (Number(data.Status)) {
							case 0: // Agotado, finalizado
							case 1: // Activa
							case 2: // Modificada
							case 3: // Lliberada
	
									switch (Number(data.Status)) {
										case 2: Estat = "<i class='fa fa-pencil-square-o fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>modificada por el usuario</em></div>"; break;
										case 3:	Estat = "<i class='fa fa-undo fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>liberada por asociado</em></div>";break;
										default : Estat = '';	
									}

//									newRow = newRow + "<tr><td rowspan='3' width='30%'><div id='time_"+data.Id+"' style='color:"+color+"'>"+maquetar(TxtRemainTime)+"</div>"+Estat+"<input class='cronos' type='hidden' name='limit_"+data.Id+"' value='"+data.RemainTime+"' estado='"+data.Status+"'></td><td width='27%'>"+data.CreationDate+"</td><td width='34%'><strong>"+data.Price+"&nbsp;&euro;</strong></td>";

									newRow = newRow + monta_oferta_asociados(TxtRemainTime, color, Estat, data);		
									newRow = newRow + monta_imatge(img, data.Id, data.Description);
									newRow = newRow + monta_botons_asociados(data.Id, data.Status, soyyo, TxtDisplay);
									
									break;


							case 5: // Asignada para mi
									if (soyyo) {
										Estat = " <i class='fa fa-thumbs-o-up fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Aceptada por mí</em></div>";
									} else {
										Estat = " <i class='fa fa-thumb-tack fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Aceptada por otro asociado</em></div>";
									}
								
									newRow = newRow + monta_oferta_asociados(TxtRemainTime, color, Estat, data);		
									newRow = newRow + monta_imatge(img, data.Id, data.Description);
									newRow = newRow + monta_botons_asociados(data.Id, data.Status, soyyo, TxtDisplay);
								
									break;

							case 8: // Confirmada por mi
									if (soyyo) {
										 Estat = " <i class='fa fa-thumbs-o-up fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Confirmada por mí</em></div>";
									} else {
										 Estat = " <i class='fa fa-thumb-tack fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Confirmada por otro asociado</em></div>";
									}									
								
									newRow = newRow + monta_oferta_asociados(TxtRemainTime, color, Estat, data);		
									newRow = newRow + monta_imatge(img, data.Id, data.Description);
									newRow = newRow + monta_botons_asociados(data.Id, data.Status, soyyo, TxtDisplay);
								
									break;

							case 10: // Completada
									if (soyyo) {
										 Estat = " <i class='fa fa-thumbs-o-up fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Completada por mi</em></div>";
									} else {
										 Estat = " <i class='fa fa-times-circle-o fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Cerrada</em></div>";
									}									
								
									newRow = newRow + monta_oferta_asociados(TxtRemainTime, color, Estat, data);		
									newRow = newRow + monta_imatge(img, data.Id, data.Description);
									newRow = newRow + monta_botons_asociados(data.Id, data.Status, soyyo, TxtDisplay);
									
									break;
									
							case 18: // Cancelada por el associado
									if (soyyo) {
										 Estat = " <i class='fa fa-thumbs-o-down fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Cancelada por mí</em></div>";
									} else {
										 Estat = " <i class='fa fa-thumbs-o-down fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Cancelada por otro asociado</em></div>";
									}									
								
									newRow = newRow + monta_oferta_asociados(TxtRemainTime, color, Estat, data);		
									newRow = newRow + monta_imatge(img, data.Id, data.Description);
									newRow = newRow + monta_botons_asociados(data.Id, data.Status, soyyo, TxtDisplay);
									
									
									break;

							case 20: // Valorada por el cliente
							case 21: // Borrado por el cliente
									if (soyyo) {
										 Estat = " <i class='fa fa-thumbs-o-up fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Completada por mi</em></div>";
									} else {
										 Estat = " <i class='fa fa-times-circle-o fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Cerrada</em></div>";
									}									
								
									newRow = newRow + monta_oferta_asociados(TxtRemainTime, color, Estat, data);		
									newRow = newRow + monta_imatge(img, data.Id, data.Description);
									newRow = newRow + monta_botons_asociados(data.Id, data.Status, soyyo, TxtDisplay);
								
									break;

							case 25: // Valorada por el asociado
									if (soyyo) {
										 Estat = " <i class='fa fa-star-o fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Valorada por mí</em></div>";
									} else {
										 Estat = " <i class='fa fa-times-circle-o fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Cerrada</em></div>";
									}									
								
									newRow = newRow + monta_oferta_asociados(TxtRemainTime, color, Estat, data);		
									newRow = newRow + monta_imatge(img, data.Id, data.Description);
									newRow = newRow + monta_botons_asociados(data.Id, data.Status, soyyo, TxtDisplay);

									break;

							case 30: // Valorada por el asociado
									if (soyyo) {
										 Estat = " <i class='fa fa-star-o fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Valorada por mí y por el cliente</em></div>";
									} else {
										 Estat = " <i class='fa fa-times-circle-o fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Cerrada</em></div>";
									}									
								
									newRow = newRow + monta_oferta_asociados(TxtRemainTime, color, Estat, data);		
									newRow = newRow + monta_imatge(img, data.Id, data.Description);
									newRow = newRow + monta_botons_asociados(data.Id, data.Status, soyyo, TxtDisplay);
								
									break;

							case 92: // Valorada por el asociado
									if (soyyo) {
										 Estat = " <i class='fa fa-star-o fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Valorada por mí y por el cliente</em></div>";
									} else {
										 Estat = " <i class='fa fa-times-circle-o fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Cerrada</em></div>";
									}									
								
									newRow = newRow + monta_oferta_asociados(TxtRemainTime, color, Estat, data);		
									newRow = newRow + monta_imatge(img, data.Id, data.Description);
									newRow = newRow + monta_botons_asociados(data.Id, data.Status, soyyo, TxtDisplay);
								
									break;


							case 90: // Cancelada por el cliente
									 Estat = " <i class='fa fa-times-circle-o fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Cancelada recientemente por el usuario</em></div>";									
								
									newRow = newRow + monta_oferta_asociados(TxtRemainTime, color, Estat, data);		
									newRow = newRow + monta_imatge(img, data.Id, data.Description);
									newRow = newRow + monta_botons_asociados(data.Id, data.Status, soyyo, TxtDisplay);
								
									break;
							
							case 99: // Borrado
							case 98: // Historificado
							case 94: // Borrado por el asociado
							case 26: // Borrado por el asociado
									break;
									
							default:
									Estat = " <i class='fa fa-exclamation-triangle fa-2x' aria-hidden='true'></i><div style='font-size:12px'><em>Estado no definido correctamente. Estado " + data.Status + "</em></div>";	
								
									newRow = newRow + monta_oferta_asociados(TxtRemainTime, color, Estat, data);		
									newRow = newRow + monta_imatge(img, data.Id, data.Description);
									newRow = newRow + monta_botons_asociados(data.Id, data.Status, soyyo, TxtDisplay);

						}

					});

					$("#mostrarsubastas").empty();
					$(newRow).appendTo("#mostrarsubastas");

					// Botones de acción
					$.each(mensaje.lista, function(ID, data) {

						var soyyo = data.Itsme;

						// Botones de acción

						if (data.Status ==1 || data.Status==2 || data.Status ==3) {
							var nom = '#aceptar_' + data.Id;
							$(nom).click(function () {
								var url = "https://elmundo.webexpo.es/subastas.php";
								url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=aceptar";
								$.getJSON(url,function(mensaje, validacion) {
									if (validacion == 'success') {
										alert ('Has aceptado la oferta. Ahora podrás ver los datos del ofertante.');
										window.location.href = 'subastas_asociados.html';
									} else {
										alert ('Ha habido algun problema para aceptar la oferta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
									}
								});
							});
						}

						// Botón ver datos
						//if ((data.Status ==5 || data.Status ==8 || data.Status ==10 || data.Status ==20 || data.Status ==25 || data.Status ==30 || data.Status ==92 || data.Status ==94 || data.Status ==98) && soyyo) {
							var nom1 = '#verdatos_' + data.Id;

							$(nom1).click(function () {
									sessionStorage.setItem('subastaseleccionada', data.Id);
									window.location.href = 'esta_subasta.html';
							});
						//}

						if (data.Status ==5 && soyyo) {
							var nom2 = '#confirmar_' + data.Id;
							var nom3 = '#liberar_' + data.Id;

							$(nom2).click(function () {
								var url = "https://elmundo.webexpo.es/subastas.php";
								url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=confirmar";
								$.getJSON(url,function(mensaje, validacion) {
									if (validacion == 'success') {
										alert ('Has confirmado que aceptas la oferta. Esta oferta solo podrá cerrarse o cancelarse.');
										window.location.href = 'subastas_asociados.html';
									} else {
										alert ('Ha habido algun problema para aceptar la oferta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
									}
								});
							});

							$(nom3).click(function () {
								var url = "https://elmundo.webexpo.es/subastas.php";
								url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=liberar";
								$.getJSON(url,function(mensaje, validacion) {
									if (validacion == 'success') {
										alert ('Has liberado esta oferta. La oferta sigue su curso.');
										window.location.href = 'subastas_asociados.html';
									} else {
										alert ('Ha habido algun problema para liberar la oferta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
									}
								});
							});
						}

						if (data.Status ==8 && soyyo) {
							var nom2 = '#cerrar_' + data.Id;
							var nom3 = '#rechazar_' + data.Id;

							$(nom2).click(function () {
								var url = "https://elmundo.webexpo.es/subastas.php";
								url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=cerrar";
								$.getJSON(url,function(mensaje, validacion) {
									if (validacion == 'success') {
										alert ('Has confirmado que se ha efecturado correctamente la venta y la oferta se marcará como completada.');
										window.location.href = 'subastas_asociados.html';
									} else {
										alert ('Ha habido algun problema para completar la oferta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
									}
								});
							});

							$(nom3).click(function () {
								sessionStorage.setItem('subastaseleccionada', data.Id);
								window.location.href = 'insert_motivo.html';
								
								/*
								var resultado = confirm('¿Realmente quieres cancelar esta oferta ? Esta oferta quedará completamente cancelada y afectará a la valoración del cliente, para ello vamos a pedirte que expliques el motivo de la cancelación, habiéndola confirmado anteriormente.');
								if (resultado)
									{
									var url = "https://elmundo.webexpo.es/subastas.php";
									url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=rechazar";
									$.getJSON(url,function(mensaje, validacion) {
										if (validacion == 'success') {
											alert ('Has rechazado la venta una vez confirmada, necesitaremos que nos expliques el motivo.');
											window.location.href = 'insert_motivo.html';
										} else {
											alert ('Ha habido algun problema para rechazar la oferta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
										}
									}
								});
								*/
							});

						}

						// Botón valorar
						if ((data.Status ==10 || data.Status ==20 ) && soyyo) {
							var nom2 = '#valorar_' + data.Id;

							$(nom2).click(function () {
								sessionStorage.setItem("subastaseleccionada", data.Id);
								//$('#my-modal').modal('show');
							});
						}
						

						// Botón borrar
						
						if ((data.Status ==10 || data.Status ==30) && soyyo) {
							var nom3 = '#borrar_' + data.Id;
							
							$(nom3).click(function () {
								sessionStorage.setItem('subastaseleccionada', data.Id);
								var url = "https://elmundo.webexpo.es/subastas.php";
								url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=ocultarventa";
								$.getJSON(url,function(mensaje, validacion) {
									if (validacion == 'success') {
										window.location.href = 'subastas_asociados.html';
									} else {
										alert ('Ha habido algun problema para borrar la venta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
									}
								});
							});

						}

						// Botón borrar
						
						if (data.Status ==90) {
							var nom3 = '#borrar_' + data.Id;
							
							$(nom3).click(function () {
								sessionStorage.setItem('subastaseleccionada', data.Id);
								var url = "https://elmundo.webexpo.es/subastas.php";
								url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=borradoasociado";
								$.getJSON(url,function(mensaje, validacion) {
									if (validacion == 'success') {
										window.location.href = 'subastas_asociados.html';
									} else {
										alert ('Ha habido algun problema para borrar la venta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
									}
								});
							});

						}

						// Botón REACTIVAR /para pruebas solamente
						if (data.Status ==98 && soyyo) {
							var nom2 = '#reactivar_' + data.Id;

							$(nom2).click(function () {
								var url = "https://elmundo.webexpo.es/subastas.php";
								url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&idsubasta="+ data.Id +"&accion=reactivar";
								$.getJSON(url,function(mensaje, validacion) {
									if (validacion == 'success') {
										alert ('Has reactivado la valoración de la venta.');
										window.location.href = 'subastas_asociados.html';
									} else {
										alert ('Ha habido algun problema para reactivar la venta. El motivo es : ' + html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));
									}
								});
							});
						}




					});
						
					// Clic sobre imatge
					$(".pop").click(function() {
						$('.imagepreview').attr('src', $(this).find('img').attr('src'));
						$('#imagemodal').modal('show');   
					});			
						
				    }
					
			} else { alert ('Ha habido un error, motivo '+ html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));}
		} else { alert ('Ha habido un error, motivo '+ html_entity_decode(validacion, 'ENT_QUOTES'));}
	});
			
	
}

// -------------------------------------------------------------------------------------------------------------------
// funcion update lista, se ejecuta cada pocos segundos. VENTAS ASOCIADOS
// -------------------------------------------------------------------------------------------------------------------

function update_lista_ventas()	
{

	// Recupera los datos
	var datosUsuario	= sessionStorage.getItem('datosUsuario');
	var datosPassword	= sessionStorage.getItem('datosPassword');
	
	// Actualitza listasubastas
	
	var url="https://elmundo.webexpo.es/subastas.php";
	url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&accion=misventas";
	$.getJSON(url,function(mensaje, validacion){

		var newRow = '';
		
		if (validacion === 'success') {
			if (mensaje.validacion === 'ok') {
				
				if (mensaje.lista === null)
					{
					newRow = newRow + "<tr class='success'><td colspan=6 class='videfech text-center'><strong>Hasta el momento no hemos registrado ninguna venta</strong></td></tr>";
					newRow = newRow + "<tr class='success'><td colspan=6 class='videfech text-center'></td></tr>";
					
					$("#mostrarventas").empty();
					$(newRow).appendTo("#mostrarventas");
					}
				else
					{
					$.each(mensaje.lista, function(ID, data) {

						var img = data.Image;
						if (!img || img === null || img === 'null')  // Si vuelve nulo
							img = 'https://elmundo.webexpo.es/pix.gif';	
						
						var soyyo = data.Itsme;
	
						switch (Number(data.Status)) {
							case 94:
							case 98:
								var Txt = "";

								
								//001 modificado
								newRow = newRow + "<tr><td width='27%'>"+data.ConfirmationDate+"</td><td width='34%'><strong>"+data.Price+"&nbsp;&euro;</strong></td><td rowspan='3' width='9%'><div class='grupbtns' id='capabotons'></div><div class='grupbtns'>" + 

								"<button type='button' class='btn btn-info' id='verdatos_"+data.Id+"'><i class='fa fa-users fa-2x' aria-hidden='true'></i></button></div>" +
								
								"</div></td></tr><tr><td colspan='2' class='minnst'><a href='#' class='pop'><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></a></td></tr><tr><td colspan='2' class='descrclass'>"+data.Description+"</td></tr>";								

// newRow = newRow + "<tr><td width='30%'>"+data.ConfirmationDate+"</td><td width='60%'><table><tr><td><strong>"+data.Price+"&nbsp;&euro;</strong></td></tr><tr><td><a href='#' class='pop'><img src='"+img+"' id='image_"+data.Id+"' class='thumb'/></a></td><td>"+data.Description+"</td></tr></table></td><td width='10%'><div class='grupbtns' id='capabotons_"+data.Id+"'><button type='button' class='btn btn-info' id='verdatos_"+data.Id+"'><i class='fa fa-users fa-2x' aria-hidden='true'></i></button></div></td></tr>";							
									
									
									
									break;
						}

					});

					$("#mostrarventas").empty();
					$(newRow).appendTo("#mostrarventas");

					// Botones de acción
					$.each(mensaje.lista, function(ID, data) {

						var soyyo = data.Itsme;
						// Botón ver datos
						if (data.Status ==94 || data.Status ==98) {
							var nom1 = '#verdatos_' + data.Id;

							$(nom1).click(function () {
									sessionStorage.setItem('subastaseleccionada', data.Id);
									window.location.href = 'esta_subasta.html';
							});
						}
				    });
						
					// Clic sobre imatge
					$(".pop").click(function() {
						$('.imagepreview').attr('src', $(this).find('img').attr('src'));
						$('#imagemodal').modal('show');   
					});							
					}
				
					
			} else { alert ('Ha habido un error, motivo '+ html_entity_decode(mensaje.mensaje, 'ENT_QUOTES'));}
		} else { alert ('Ha habido un error, motivo '+ html_entity_decode(validacion, 'ENT_QUOTES'));}
	});
			
	
}

// -------------------------------------------------------------------------------------------------------------------

function update_lista_facturas()
{
	// Recupera los datos
	var datosUsuario	= sessionStorage.getItem('datosUsuario');
	var datosPassword	= sessionStorage.getItem('datosPassword');
	
	// Actualitza listasubastas
	
	var url="https://elmundo.webexpo.es/profesionales.php";
	url = url + "?usuario=" + datosUsuario + "&password=" + datosPassword + "&accion=facturas";
	$.getJSON(url,function(mensaje, validacion) {
		
		var newRow = '';

		if (mensaje.lista === null)
			{
			newRow = newRow + "<tr class='success'><td colspan=3 class='videfech text-center'><strong>No hemos encontrado facturas para ud.</strong></td></tr>";
			}
		else
			{
			$.each(mensaje.lista, function(ID, data) {

				var Txt = "Cancelada por el usuario";

				newRow = newRow + "<tr class='success'><td class='videfech text-center'>"+data.fecha+"</td><td>"+data.numero+"</td><td><a href='"+data.link+"' class='enlacefacturas'><i class='fa fa-file-pdf-o fa-2x'></i></a></td></tr>"; 

			});
		}
			   
		$("#facturas").empty();
		$(newRow).appendTo("#facturas");

	});	
}
	
// -------------------------------------------------------------------------------------------------------------------

function definiciones_comunes() {

// Si es "profesional", activamos el acceso a la lista de subastas

	var response_nivel  = sessionStorage.getItem('respuestaServer.nivel');

	if (response_nivel == 50) {
		$('#subastaspublicadas').show();
	}

// Boton desconectar bueno	
	$("#closeapp_2").click(function() {
	
  	archivoValidacion = "https://elmundo.webexpo.es/validacion_de_datos.php?jsoncallback=?"

	$.getJSON( archivoValidacion, {logout:1})
	.done(function(respuestaServer) {
		/// si el logout es correcto, borramos el sessionStorage volvemos a inicio
		sessionStorage.removeItem('datosUsuario');
		sessionStorage.removeItem('datosPassword');
		sessionStorage.removeItem('respuestaServer.validacion');                            	
		sessionStorage.removeItem('respuestaServer.nom');
		sessionStorage.removeItem('respuestaServer.cognom');
		sessionStorage.removeItem('respuestaServer.ide');
		sessionStorage.removeItem('respuestaServer.nivel');			
		sessionStorage.removeItem('CategoriaBase');	
		sessionStorage.removeItem('CategoriaNivel1');
		sessionStorage.removeItem('CategoriaNivel2');
		sessionStorage.removeItem('Explicacion');
		sessionStorage.removeItem('imgData');

		window.location.href="index.html";
		});
	});	
		
// Boton desconectar - parece que no funciona...
	$('#closeapp').submit(function() {	 
		navigator.app.exitApp();
	});	
}



$(function() {
		$('.pop').on('click', function() {
			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');   
		});		
});
