# univ-pagination
Simple pagination plugin for html tables 

# Description

The jQuery Paging plugin aims to be as simple as possible by a native callback design, which in turn allows to design a pagination 
navigation in almost every feasible variation.

In order to use the Paging plugin, you're done by defining the following param values :
 * @param tblName : Provide the Table ID where you want to show the pagination
 * @param tBodyName : Provide the Tbody ID for the same table 
 * @param maxRows : Provide max number or rows to be shown for each page
 * @param cssClass : Provide extra class for pagination DIV, you can add multiple classes by giving a space in between
 * @param uniqueIdentifier : Provide Unique Identifier (Unique ID) for elements inside the pagination
 * @param type : default / minimal (Creates the pagination according to the type)
 
 # Inti / Calling to plugin to create your pagination :

 # Default View
		$('#tblMain').univpagination({
			tblName: 'tblMain',
			tBodyName: 'tbodyMain',
			maxRows: 4,
			cssClass: 'pull-right',
			uniqueIdentifier: '_SL',
			type:'default'
		});

