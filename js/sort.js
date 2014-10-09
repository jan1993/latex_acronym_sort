$( "#sort" ).click(function() {

	var loa_input = $("#acros").val();
  	var acros = readAcros(loa_input);
  	if(acros.length <= 0) 
  		{	
  			alert("Invalid Input");
  			return;
  		}

  	var acros_sorted = sort_array(acros);
  	var loa_sorted = makeLOA(acros_sorted);

	 $("#acros").val(loa_sorted);  	
});

function readAcros(loa_input)
{
	var acros = []; 
	var m, acro; //match, one acro
	var re = /.*?\\acro\{(.*?)\}\{(.*?)\}/g; 

	while ((m = re.exec(loa_input)) != null) {
    	if (m.index === re.lastIndex) {
        	re.lastIndex++;
    	}
    	acro = {short: m[1],
    			long: m[2]};

    	acros.push(acro)    
	}
	console.log(acros); 

	return acros;
}

function sort_array(acros)
{
	return acros.sort(compare);
}

function compare(a,b) {
  if (a.short < b.short)
     return -1;
  if (a.short > b.short)
    return 1;
  return 0;
}

function makeLOA(acros_sorted){

	var string = "";

	for(var i = 0; i < acros_sorted.length; i++)
	{
		string += "\acro{"+acros_sorted[i].short +"}{"+acros_sorted[i].long+"} \n";
	}
	return string;
}
