/**
	**options to have following keys:
		**searchText: this should hold the value of search text
		**searchPlaceHolder: this should hold the value of search input box placeholder
**/
(function($){
	$.fn.tableSearch = function(options){
		if(!$(this).is('table')){
			return;
		}
		var tableObj = $(this),
			searchText = (options.searchText)?options.searchText:'',
			searchPlaceHolder = (options.searchPlaceHolder)?options.searchPlaceHolder:'',
			divObj = $('<div style="float:right;margin-right:16px;width:176px;margin-top: 3px;">'+searchText+'</div><br /><br />'),
			//AN03062016 Code commented to customise the search box
			//inputObj = $('<input type="text" class="form-control form_lginput form-42hg font12" placeholder="'+searchPlaceHolder+'" />'),
			inputObj=$('#searchTable');
			//eoc AN03062015
			caseSensitive = (options.caseSensitive===true)?true:false,
			searchFieldVal = '',
			pattern = '';
		inputObj.off('keyup').on('keyup', function(){
			searchFieldVal = $(this).val();
			//alert(searchFieldVal);
			if(searchFieldVal == ''){
				//alert('entered');
				$('#pgBtn_0').click();
			}
			pattern = (caseSensitive)?RegExp(searchFieldVal):RegExp(searchFieldVal, 'i');
			tableObj.find('tbody tr').hide().each(function(){
				var currentRow = $(this);
				currentRow.find('td').each(function(){
					if(pattern.test($(this).html())){
						currentRow.show();
						return false;
					}/* else{
						currentRow.hide();
						return false;
					}*/
					
				});
			});
		});
		//AN03062015
		//tableObj.before(divObj.append(inputObj));
		//eoc AN03062015
		return tableObj;
	}
}(jQuery));