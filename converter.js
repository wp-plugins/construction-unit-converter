var AreaArray=new Array();
AreaArray[0]=new calcData(1,0,"('meter"+String.fromCharCode(178)+"')");
AreaArray[1]=new calcData(0.0001,0,"('centimeter"+String.fromCharCode(178)+"')");
AreaArray[2]=new calcData(0.09290304,0,"('foot"+String.fromCharCode(178)+"')");
AreaArray[3]=new calcData(0.00064516,0,"('inch"+String.fromCharCode(178)+"')");
AreaArray[4]=new calcData(0.8361274,0,"('yard"+String.fromCharCode(178)+"')");
AreaArray[5]=new calcData(4046.825,0,"('acre')");
AreaArray[6]=new calcData(10000,0,"('hectare')");

var LengthArray=new Array();
LengthArray[0]=new calcData(1,0,"('meter')");
LengthArray[1]=new calcData(0.01,0,"('centimeter')");
LengthArray[2]=new calcData(0.3048,0,"('foot')");
LengthArray[3]=new calcData(0.0254,0,"('inch')");
LengthArray[4]=new calcData(5.0292,0,"('rod')");
LengthArray[5]=new calcData(0.9144,0,"('yard')");

var MassArray=new Array();
MassArray[0]=new calcData(0.001,0,"('gram')");
MassArray[1]=new calcData(1,0,"('kilogram')");
MassArray[2]=new calcData(0.02834952,0,"('ounce (oz)')");
MassArray[3]=new calcData(0.4535924,0,"('pound (lbs)')");
MassArray[4]=new calcData(907.1847,0,"('ton (short)')");
MassArray[5]=new calcData(1016.047,0,"('ton (long)')");
MassArray[6]=new calcData(1000,0,"('tonne (metric)')");


var TemperatureArray=new Array();
TemperatureArray[0]=new calcData(1,0,"('celsius')");
TemperatureArray[1]=new calcData(0.555555555555556,-32,"('fahrenheit')");

var VolumeArray=new Array();
VolumeArray[0]=new calcData(1,0,"('litre')");
VolumeArray[1]=new calcData(0.001,0,"('millilitre')");
VolumeArray[2]=new calcData(0.001,0,"('centimeter" + String.fromCharCode(179) + "')");
VolumeArray[3]=new calcData(1000,0,"('meter" + String.fromCharCode(179) + "')");
VolumeArray[4]=new calcData(0.01638706,0,"('inch" + String.fromCharCode(179) + "')");
VolumeArray[5]=new calcData(28.31685,0,"('foot" + String.fromCharCode(179) + "')");
VolumeArray[6]=new calcData(764.5549,0,"('yard" + String.fromCharCode(179) + "')");
VolumeArray[7]=new calcData(3.785412,0,"('gallon (US)')");
VolumeArray[8]=new calcData(4.55,0,"('gallon (UK)')");
VolumeArray[9]=new calcData(0.02957353,0,"('ounce (US)')");
VolumeArray[10]=new calcData(0.02841307,0,"('ounce (UK)')");
VolumeArray[11]=new calcData(0.0049285,0,"('teaspoon')");
VolumeArray[12]=new calcData(0.01478633,0,"('tablespoon')");
VolumeArray[13]=new calcData(0.4731765,0,"('pint (US)')");
VolumeArray[14]=new calcData(0.568261,0,"('pint (UK)')");
VolumeArray[15]=new calcData(0.9463529,0,"('quart')");
VolumeArray[16]=new calcData(6.48524e-05,0,"('drop')");

var VolumeDryArray=new Array();
VolumeDryArray[0]=new calcData(1.0,0,"('boardfeet (fbm)')");
VolumeDryArray[1]=new calcData(12,0,"('feet" + String.fromCharCode(179) + "')");
VolumeDryArray[2]=new calcData(0.00694444444444,0,"('inches" + String.fromCharCode(179) + "')");
VolumeDryArray[3]=new calcData(324.0446999,0,"('yard" + String.fromCharCode(179) + "')");
VolumeDryArray[4]=new calcData(423.7288135,0,"('meter" + String.fromCharCode(179) + "')");
VolumeDryArray[5]=new calcData(0.00004237288,0,"('centimeter" + String.fromCharCode(179) + "')");
VolumeDryArray[6]=new calcData(1536,0,"('cord (firewood)')");
VolumeDryArray[7]=new calcData(192.0122887865,0,"('cord feet (timber)')");
VolumeDryArray[8]=new calcData(423.7288135,0,"('stere')");

var VolumeWoodArray=new Array();
VolumeWoodArray[0]=new calcData(1.0,0,"('boardfeet (fbm)')");
VolumeWoodArray[1]=new calcData(12,0,"('feet" + String.fromCharCode(179) + "')");
VolumeWoodArray[2]=new calcData(324.04406999,0,"('yard" + String.fromCharCode(179) + "')");
VolumeWoodArray[3]=new calcData(423.7288135,0,"('meter" + String.fromCharCode(179) + "')");
VolumeWoodArray[4]=new calcData(1536,0,"('cord (firewood)')");
VolumeWoodArray[5]=new calcData(192.0122887865,0,"('cord feet (timber)')");
VolumeWoodArray[6]=new calcData(423.7288135,0,"('stere')");

// var CTArray=new Array("('Area', 'Area')","('Length', 'Length')","('Mass', 'Mass')","('Temperature', 'Temperature')","('Volume Liquid', 'Volume')","('Volume Solid', 'VolumeDry')","('Volume Piled Wood', 'VolumeWood')");
var CTArray=new Array("('Area', 'Area')","('Length', 'Length')","('Mass', 'Mass')","('Temperature', 'Temperature')","('Volume Liquid', 'Volume')","('Volume Solid', 'VolumeDry')");

function calcData(c,b,a) { 
	this.conv=c;
	this.adj=b;
	this.calc2=a
}

function PopulateComboBox(vType,sInitUnit){
	var oLocation=document.getElementById("uc_conversiontype");
	var vOpt1;
	var vNumUnits;
	var oTypeArray;
	var vSelected;
	var vNonCalc;
	oTypeArray=eval(vType+"Array");
	vNumUnits=oTypeArray.length;
	vNonCalc=vType.substring(0,2);
	if(vNonCalc=="CT"){
		for(var i=0;i<vNumUnits;i++){
			vOpt1=eval("new Option"+oTypeArray[i]);
			oLocation.options[i]=vOpt1
		}
		oLocation.options[0].selected=true
	} else { 
		for(var j=0;j<vNumUnits;j++){
			vOpt1=eval("new Option"+oTypeArray[j].calc2);
			oLocation.options[j]=vOpt1;
			if(oLocation.options[j].text==sInitUnit){
				oLocation.options[j].selected=true;
				vSelected=true;
			}
		}
		if(vSelected!=true){
			oLocation.options[0].selected=true
		}
	}
}

function loadCategory(){
	var a="CT";
	PopulateComboBox(a,"");
	PopulateUnitTypes("")
}

function PopulateUnitTypes(sInitUnit){
	var oSelected=document.getElementById("uc_conversiontype");
	//var oInForm=document.forms[0];
	var oSelectedArray;
	var vLength;
	var vOpt1;
	var vOpt2;
	var vSelected;
	oSelectedArray=eval(oSelected.options[oSelected.selectedIndex].value+"Array");
	vLength=oSelectedArray.length;
	vSelected=false;
	
	for(var i=0;i<vLength;i++){
		while(vLength< document.getElementById("uc_ResultUnit").length){
			document.getElementById("uc_SourceUnit").options[vLength-i]=null;
			document.getElementById("uc_ResultUnit").options[vLength-i]=null
		}
		vOpt1 = eval("new Option"+oSelectedArray[i].calc2);
		vOpt2 = eval("new Option"+oSelectedArray[i].calc2);
		document.getElementById("uc_SourceUnit").options[i]=vOpt1;
		document.getElementById("uc_ResultUnit").options[i]=vOpt2;
		
		if(document.getElementById("uc_SourceUnit").options[i].text==sInitUnit){
			document.getElementById("uc_SourceUnit").options[i].selected=true;
			document.getElementById("uc_ResultUnit").options[i].selected=true;
			vSelected=true;
		}
	}
	if(vSelected!=true){
		document.getElementById("uc_SourceUnit").options[0].selected=true;
		document.getElementById("uc_ResultUnit").options[0].selected=true;
	}
	
	document.getElementById("uc_txtSourceQty").value = "";
	document.getElementById("uc_txtResultQty").value = "";
}

function CalculateNow(){
	var vCategoryIndex;
	var vCategoryValue;
	var oSearch;
	var vInputValue;
	var vSConv;
	var vSAdj;
	var vTConv;
	var vTAdj;
	var vResult;
	var x;
	var y;
	
	vInputValue = document.getElementById("uc_txtSourceQty").value;
	
	//Check ifthe input value is numeric
	if(IsNumeric(vInputValue)) {
		vCategoryIndex = document.getElementById("uc_conversiontype").options.selectedIndex;
		vCategoryValue = document.getElementById("uc_conversiontype").options[vCategoryIndex].value;
		oSearch = eval(vCategoryValue+"Array");
		
		x = document.getElementById("uc_SourceUnit").selectedIndex;
		vSConv = oSearch[x].conv;
		vSAdj = oSearch[x].adj;
		
		y = document.getElementById("uc_ResultUnit").selectedIndex;
		vTConv = oSearch[y].conv;
		vTAdj = oSearch[y].adj;
		
		vResult = roundResult(-1*(-vInputValue-vSAdj)*vSConv*1/vTConv-vTAdj,6);
	} else {
		vResult = "invalid quantity";
	}
	document.getElementById("uc_txtResultQty").value = vResult;
}

function IsNumeric(sText) {
   var ValidChars = "0123456789.";
   var IsNumber=true;
   var Char;
 
   for (i = 0; i < sText.length && IsNumber == true; i++) { 
      Char = sText.charAt(i); 
      if (ValidChars.indexOf(Char) == -1) 
      {
         IsNumber = false;
      }
   }
   return IsNumber;
}


function roundResult(b,a){
	a=(!a?6:a);
	return Math.round(b*Math.pow(10,a))/Math.pow(10,a)
};

window.onload = loadCategory;
