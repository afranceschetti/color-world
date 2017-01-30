
var tangoPalette = 	{name:'Tango Desktop Project', desc: 'The palette used by the <a href="http://tango.freedesktop.org/" target="_blank" >Tango Desktop Project</a>', palette: 
						[{'name':'Butter ','colors':['fce94f ','edd400 ','c4a000']},
						{'name':'Orange ','colors':['fcaf3e ','f57900 ','ce5c00']},
						{'name':'Chocolate ','colors':['e9b96e ','c17d11 ','8f5902']},
						{'name':'Chameleon ','colors':['8ae234 ','73d216 ','4e9a06']},
						{'name':'Sky Blue ','colors':['729fcf ','3465a4 ','204a87']},
						{'name':'Plum ','colors':['ad7fa8 ','75507b ','5c3566']},
						{'name':'Scarlet Red ','colors':['ef2929 ','cc0000 ','a40000']},
						{'name':'Aluminium Light','colors':['eeeeec ','d3d7cf ','babdb6']},
						{'name':'Aluminium Dark','colors':['888a85 ','555753','2e3436']}
						]
					};
					
var alePalette = 	{name:'Generic found', desc: 'The palette used by the <a href="https://fedorahosted.org/echo-icon-theme/wiki/Guidelines/ColorPalette" target="_blank" >Fedora Echo Icon Theme</a>', palette: 
					[{'name':'Blue','colors':['19aeff','0047c8','005c94']},
					{'name':'Green','colors':['ccff42','9ade00','009100']},
					{'name':'Orange','colors':['ffff3e','ff9900','ff6600']},
					{'name':'Brown','colors':['eccd84','d49725','804d00']},
					{'name':'Red','colors':['ff4141','dc0000','b50000']},
					{'name':'Purple','colors':['f1caff','d76cff','ba00ff']},
					{'name':'Metallic','colors':['bdcdd4','9eabb0','364e59','0e232e']},
					{'name':'Gray','colors':['cccccc','999999','666666','2d2d2d']}
					]
				};
				
var metroPalette = 	{name:'Windows Phone', desc: 'Palette metro style used in winphone 7.5', palette: 
					[{'name':'Green','colors':['a4c400','60a917','008a00']},
						{'name':'Blue','colors':['00aba9','1ba1e2','0050ef']},
						{'name':'Violet','colors':['6a00ff','aa00ff','f472d0']},
						{'name':'Red','colors':['d80073','a20025','e51400']},
						{'name':'Yellow','colors':['fa6800','f0a30a','d8c100']},
						{'name':'Brown','colors':['825a2c','6d8764','7a3b3f']},
						{'name':'Sienna','colors':['647687','76608a']}	
					]
				};


var pantoneSpring2016 = {name:'Pantone Spring 2016', desc: ' <a href="http://www.pantone.com/pages/fcr/?season=spring&year=2016&pid=11" target="_blank" >Spring 2016</a>: A Transporting and Transformative Canvas', palette: 
					[{'name':'Rose Quartz','colors':['F7CAC9']},
						{'name':'Peach Echo','colors':['F7786B']},
						{'name':'Serenity','colors':['91A8D0']},
						{'name':'Snorkel Blue','colors':['034F84']},
						{'name':'Buttercup','colors':['FAE03C']},
						{'name':'Limpet Shell','colors':['98DDDE']},
						{'name':'Lilac Gray ','colors':['9896A4']},
						{'name':'Fiesta ','colors':['DD4132']},
						{'name':'Iced Coffee','colors':['B18F6A']},
						{'name':'Green Flash','colors':['79C753']},
					]
				};				




var palettes =[tangoPalette, alePalette, metroPalette];


var jackProductionPalette = { name: 'Jack Production', desc: 'Mini palette found on  <a href="http://www.jackproductions.com.au/" target="_blank" >Jack Production</a>', 
						palette: [{colors:['916ab1','8fca40','fff43b','f29524','f04090','55b9fc' ]}]};
						
var ios7Palette = { name: 'iOs 7 Palette', desc: 'Palette used on iPhone in iOs7', 
						palette: [{colors:['8e8e93','ff2252','ff342f','ff9422','ffcc34']},
						{colors:['2ada70','48c9f8','10abda','007afa','5855d1']}]};


var nimberPalette = {name: 'Nimber Palette', desc: 'Palette used by <a href="https://www.nimber.com/" target="_blank">Nimber</a>', palette: 
		 [{'colors':['c83321','ffffff','363C43','808A9d','b8c0ce']},
		 {'colors':['a41807','f2f2f2','21262d','6d788c','95a0b4']},
		 {'colors':['fec411','ffb900','72c700','f4511e','46a6eb']},
		 {'colors':['e5a904','e5a904','5a9d00','c73608','1979be']}]};	
			  
var pantoneSpring2016Small = {name:'Pantone Spring 2016', desc: ' <a href="http://www.pantone.com/pages/fcr/?season=spring&year=2016&pid=11" target="_blank" >Spring 2016</a>: A Transporting and Transformative Canvas', 
palette: [{'colors':['F7CAC9','F7786B','91A8D0','034F84','FAE03C']},{'colors':['98DDDE','9896A4','DD4132','B18F6A','79C753']}]};					

var smallPalettes =[ios7Palette, jackProductionPalette, pantoneSpring2016Small,nimberPalette];					

$(document).ready(function() {
	init();
});

function init(){

	$("#nav-light-button").click(function(){changeBodyColors("#333", "#fff");$('#main-navbar').removeClass("navbar-inverse");$('#nav-palette-dropdown').removeClass("inverse-dropdown");});
	$("#nav-dark-button").click(function(){changeBodyColors("#fff", "#000");$('#main-navbar').addClass("navbar-inverse");$('#nav-palette-dropdown').addClass("inverse-dropdown");});
	$("#nav-customcolor-button").click(function(){
		var foreground = $('#customcolor-input-fg').val();
		if(foreground==null || foreground==''){
			foreground="#fff43b";
			$('#customcolor-input-fg').val(foreground);
		}

			var background = $('#customcolor-input-bg').val();
		if(background==null || background==''){
			background="#5c3566";
			$('#customcolor-input-bg').val(background);
		}
			 
		changeBodyColors(foreground, background);
	});

	var paletteHtml = "";
	var accordionHtml = "";
	var navPaletteMenuItems = "";
	for (i = 0; i < palettes.length; i++) {
		var paletteId = "_p" + i;
		paletteHtml += createPaletteHtml(palettes[i], paletteId);
		//accordionHtml += createPanelAccordion(palettes[i], i);
		navPaletteMenuItems += "<li><a href='#" + paletteId + "'>" + palettes[i].name + "</a></li>";
			
	}
	navPaletteMenuItems += "<li class='divider'></li>";

	$("#palettes").html(paletteHtml);
	$("#palettesAccordion").html(accordionHtml);
	
	var smallPaletteHtml = "";
	for (i = 0; i < smallPalettes.length; i++) {
		var paletteId = "_s" + i;
		smallPaletteHtml += createPaletteHtml(smallPalettes[i],paletteId);
		navPaletteMenuItems += "<li><a href='#" + paletteId + "'>" + smallPalettes[i].name + "</a></li>";
	}
	$("#small-palettes").html(smallPaletteHtml);
	$("#nav-palette-dropdown").html(navPaletteMenuItems);
	
}

function createPaletteHtml(palette, palette_id){
	var paletteHtml = "<div id='"+palette_id+ "' class='palette_panel'><h3>"+palette.name+" <small>"+palette.desc+"</small></h3><p>";
	for (j = 0; j < palette.palette.length; j++) {
		var paletteRow = palette.palette[j];
		paletteHtml += "<div class='palette_row'>";
		if(paletteRow.name)
			paletteHtml += "<div class=' palette_item palette_name'>"+paletteRow.name+"</div>";
		for(k = 0; k < paletteRow.colors.length; k++) {
			var color = paletteRow.colors[k];
			foregroundColor = guessForegroundColor(color);
			paletteHtml += "<div class='palette_item' style='color:"+ foregroundColor + ";background-color:#"+ color + "'>#"+color+"</div>";
		}
		paletteHtml += "</div>";
	}
	paletteHtml += "</p></div>";
	return paletteHtml;
}

function createPanelAccordion(palette, index){
	var open = (index==0?"in":"");
	var accordion = "<div class='panel panel-default'>";
	accordion += "<div class='panel-heading' role='tab' id='heading"+index+"'>";
	accordion += "<h4 class='panel-title'><a data-toggle='collapse' data-parent='#accordion' href='#collapse"+index+"' aria-expanded='true' aria-controls='collapse"+index+"'>";
	accordion += palette.name;
	accordion += "</a></h4></div>";
	accordion += "<div id='collapse"+index+"' class='panel-collapse collapse "+ open+ "' role='tabpanel' aria-labelledby='heading"+index+"'>";
	accordion += "<div class='panel-body'>";
	
	var paletteHtml = "<div class='palette_panel'><h3>"+palette.name+" <small>"+palette.desc+"</small></h3><p>";
	for (j = 0; j < palette.palette.length; j++) {
		var paletteRow = palette.palette[j];
		paletteHtml += "<div class='palette_row'>";
		if(paletteRow.name)
			paletteHtml += "<div class=' palette_item palette_name'>"+paletteRow.name+"</div>";
		for(k = 0; k < paletteRow.colors.length; k++) {
			var color = paletteRow.colors[k];
			foregroundColor = guessForegroundColor(color);
			paletteHtml += "<div class='palette_item' style='color:"+ foregroundColor + ";background-color:#"+ color + "'>#"+color+"</div>";
		}
		paletteHtml += "</div>";
	}
	paletteHtml += "</p></div>";
	accordion += paletteHtml;
	accordion += "</div></div></div>";
	return accordion;
}



function guessForegroundColor(color){
	var rgb = parseInt(color, 16);   // convert rrggbb to decimal
	var r = (rgb >> 16) & 0xff;  // extract red
	var g = (rgb >>  8) & 0xff;  // extract green
	var b = (rgb >>  0) & 0xff;  // extract blue

	var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
	
	var foregroundColor = "white";
	if (luma > 164) {
		foregroundColor = "black";
	}
	return foregroundColor;
}

function changeBodyColors(foreground, background){
	if(foreground.substring(0, 1) !== "#")
		foreground = "#" + foreground;

	if(background.substring(0, 1) !== "#")
		background = "#" + background;

	$("body").css("color", foreground)
	$("body").css("background-color", background)
}
		
		


