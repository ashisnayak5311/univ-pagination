/**
 * @license UniV-Pagination v2.0.0 
 * Date : 2016-07-11
 * (c) 2016 Abzooba India Infotech Pvt. Ltd. 
 * Author : Ashis Kumar Nayak
 * License: Free
 * 
 * @description
 * Plug and play 'pagination control' for table pagination using basic java script and jQuery
 * ---------------- Read Me -----------------------
 * @param tblName : Provide the Table ID where you want to show the pagination
 * @param tBodyName : Provide the Tbody ID for the same table 
 * @param maxRows : Provide max number or rows to be shown for each page
 * @param cssClass : Provide extra class for pagination DIV, you can add multiple classes by giving a space in between
 * @param uniqueIdentifier : Provide Unique Identifier (Unique ID) for elements inside the pagination
 * @param type : default / minimal (Creates the pagination according to the type)
 */
//(function(window, document, undefined) {'use strict';

$.fn.univpagination = function( options ) {
    // default settings:
    var defaults = $.extend({
    	tblName: "tblDefault",
    	tBodyName: "tbodyDefault",
    	maxRows: 10,
    	cssClass: "no-class",
    	uniqueIdentifier: "_ABZ",
    	type:'default'
    }, options );
    
    return this.each(function() {
    	$('#paginationDiv'+defaults.uniqueIdentifier).remove();
    	var rowsTotal = $('#' + defaults.tBodyName +' tr').length;
    	
    	$('#'+ defaults.tblName).after('<input type="hidden" name="hidPagination'+defaults.uniqueIdentifier+'" id="hidPagination'+defaults.uniqueIdentifier+'" value="0" />')
    	
    	var rowsShown = defaults.maxRows;//parseInt($('#maxPage').val().trim());
      	var numPages = rowsTotal/rowsShown;
    	if(defaults.type == 'default'){
	    	//alert(defaults.tBodyName);
	    	if(rowsTotal > defaults.maxRows ){
	    		//$("#paginationSpecerRow").css('display','none');
	    		$('#'+ defaults.tblName).after('<div class="'+defaults.cssClass+' nbt-peger" id="paginationDiv'+defaults.uniqueIdentifier+'"><ul class="pagination" id="navp'+defaults.uniqueIdentifier+'"><li id="pgPrev'+defaults.uniqueIdentifier+'"><a aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li><li id="pgNext'+defaults.uniqueIdentifier+'"><a aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li></ul></div>');
	    	 
	         	for(i = 0;i < numPages;i++) {
	            	var pageNum = i + 1;
	            	$('#pgNext'+defaults.uniqueIdentifier).before('<li><a id="pgBtn'+defaults.uniqueIdentifier+'_'+i+'" rel="'+i+'" >'+pageNum+'</a></li>');
	         	}
	         	 $('#'+defaults.tBodyName+' tr').hide();
	         	 $('#'+defaults.tBodyName+ ' tr').slice(0, rowsShown).show();
	         	 $('#hidPagination'+defaults.uniqueIdentifier).val(0); 
	         	 $('#navp'+defaults.uniqueIdentifier+' [id^="pgBtn'+defaults.uniqueIdentifier+'_"]').bind('click', function(){
	    	         $('#navp'+defaults.uniqueIdentifier+' a').removeClass('active');
	    	         $('#navp'+defaults.uniqueIdentifier+' li').removeClass('active');
	    	         $(this).addClass('active');
	    	         $(this).parent().addClass('active');
	    	         var currPage = $(this).attr('rel');
	    	         $('#hidPagination'+defaults.uniqueIdentifier).val(currPage);
	    	         var startItem = currPage * rowsShown;
	    	         var endItem = startItem + rowsShown;
	    	         $('#'+defaults.tBodyName+' tr').css('opacity','0.0').hide().slice(startItem, endItem).css('display','table-row').animate({opacity:1}, 500);
	    	     });
	         	$('#pgBtn'+defaults.uniqueIdentifier+'_0').parent().addClass('active');
	         
	         	$('#pgNext'+defaults.uniqueIdentifier).click(function(){
	                var curClassBtn = $('#navp'+defaults.uniqueIdentifier+' li.active').find('a').attr('id');
	                var splitLiClass = curClassBtn.split(SYMBOLS.UNDERSCORE);
	                var newId = splitLiClass[2];
	                var newFinalId = parseInt(newId)+1;
	                $('#pgBtn'+defaults.uniqueIdentifier+'_' + newFinalId).click();  
	            });
	         
	         	$('#pgPrev'+defaults.uniqueIdentifier).click(function(){
	                var curClassBtn = $('#navp'+defaults.uniqueIdentifier+' li.active').find('a').attr('id');
	                var splitLiClass = curClassBtn.split(SYMBOLS.UNDERSCORE);
	                var newId = splitLiClass[2];
	                var newFinalId = parseInt(newId)-1;
	                $("#pgBtn"+defaults.uniqueIdentifier+"_" + newFinalId).click();  
	                return false;
	    		});
	    	} else {
	    		$("#paginationSpecerRow").css('display','block');
	    	} 
	    //End of Default View pagination	
    	} else {
    	//Start of Minimal view of pagination
    		if(rowsTotal > defaults.maxRows ){
    			$('#'+ defaults.tblName).after('<div class="'+defaults.cssClass+' nbt-peger" id="paginationDiv'+defaults.uniqueIdentifier+'"><ul class="pagination" id="navp'+defaults.uniqueIdentifier+'"><li id="pgPrev'+defaults.uniqueIdentifier+'"><a aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li><li id="pgNext'+defaults.uniqueIdentifier+'"><a aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li></ul></div>');
    	     	numPages = Math.ceil(numPages);
    	     	/*for(i = 0;i < numPages;i++) {
    	        	var pageNum = i + 1;
    	        	 if(pageNum < 2 || pageNum == numPages){
    	        		 $('#pgNext'+defaults.uniqueIdentifier).before('<li><a id="pgBtn'+defaults.uniqueIdentifier+'_'+i+'" rel="'+i+'" class="firstBtn">'+pageNum+'</a></li>');
    	        	} else {
    	        		$('.dotPages').remove();
    	        		$('#pgNext'+defaults.uniqueIdentifier).before('<li class="dotPages"><a id="dotPagesAnchor'+defaults.uniqueIdentifier+'" >...</a></li>');
    	        		$('#pgNext'+defaults.uniqueIdentifier).before('<li class="clsHiddenPages" id="idHiddenPages'+defaults.uniqueIdentifier+'_'+i+'" style="display:none;"><a id="pgBtn'+defaults.uniqueIdentifier+'_'+i+'" rel="'+i+'" onClick="unCheckAll()">'+pageNum+'</a></li>');
    	        	} 
    	     	}*/
    	     	for(i = 0;i < numPages;i++) {
                	var pageNum = i + 1;
                	 if(pageNum < 2 || pageNum == numPages){
                		 $('#pgNext'+defaults.uniqueIdentifier).before('<li><a id="pgBtn'+defaults.uniqueIdentifier+'_'+i+'" rel="'+i+'"  class="firstBtn">'+pageNum+'</a></li>');
                	} else {
                		$('.dotPages'+defaults.uniqueIdentifier).remove();
                		var newValDotPage = parseInt($('#hidPagination'+defaults.uniqueIdentifier).val())+1;
		        		var totalPages = parseInt(rowsTotal);
		        		if(newValDotPage <= totalPages && newValDotPage != 1){
		        			$('#pgNext'+defaults.uniqueIdentifier).removeClass('liDisabled');
	                		$('#pgNext'+defaults.uniqueIdentifier).before('<li class="dotPages'+defaults.uniqueIdentifier+'"><a id="dotPagesAnchor'+defaults.uniqueIdentifier+'" class="dotPagesAnchor" >'+(parseInt($('#hidPagination'+defaults.uniqueIdentifier).val())+1)+'</a></li>');
	                		$('#pgNext'+defaults.uniqueIdentifier).before('<li class="clsHiddenPages" id="idHiddenPages'+defaults.uniqueIdentifier+'_'+i+'" style="display:none;"><a id="pgBtn'+defaults.uniqueIdentifier+'_'+i+'" rel="'+i+'">'+pageNum+'</a></li>');
                		} else{
                			if(newValDotPage <= totalPages){$('#pgNext'+defaults.uniqueIdentifier).removeClass('liDisabled')}else{$('#pgNext'+defaults.uniqueIdentifier).addClass('liDisabled')}
                			$('#pgNext'+defaults.uniqueIdentifier).before('<li class="dotPages'+defaults.uniqueIdentifier+'"><a id="dotPagesAnchor'+defaults.uniqueIdentifier+'" class="dotPagesAnchor" >1</a></li>');
	                		$('#pgNext'+defaults.uniqueIdentifier).before('<li class="clsHiddenPages" id="idHiddenPages'+defaults.uniqueIdentifier+'_'+i+'" style="display:none;"><a id="pgBtn'+defaults.uniqueIdentifier+'_'+i+'" rel="'+i+'" >'+pageNum+'</a></li>');
                		}
             		}
             	}
    	     	
    	     	 $('#'+defaults.tBodyName+' tr').hide();
	         	 $('#'+defaults.tBodyName+ ' tr').slice(0, rowsShown).show();
	         	 
    	     	 $('#navp'+defaults.uniqueIdentifier+' a:first').addClass('active');
    	     	 $('#hidPagination'+defaults.uniqueIdentifier).val(0);
             	 $('#navp'+defaults.uniqueIdentifier+' [id^="pgBtn_"]').bind('click', function(){
        	         $('#navp'+defaults.uniqueIdentifier+' a').removeClass('active');
        	         $('#navp'+defaults.uniqueIdentifier+' li').removeClass('active');
        	         $(this).addClass('active');
        	         $(this).parent().addClass('active');
        	         var currPage = parseInt($(this).attr('rel'));
        	         $('#hidPagination'+defaults.uniqueIdentifier).val(currPage);
        	         $('#dotPagesAnchor'+defaults.uniqueIdentifier).html(currPage+1)
        	         var startItem = currPage * rowsShown;
    		         var endItem = startItem + rowsShown;
    		         //$('#'+defaults.tBodyName+' tr').css('opacity','0.0').hide().slice(startItem, endItem).css('display','table-row').animate({opacity:1}, 300);
    		         $('#'+defaults.tBodyName+' tr').css('opacity','0.0').hide().slice(startItem, endItem).css('display','table-row').animate({opacity:1}, 500);
        	         
        	     });
    	     	 
    	     	$('#pgBtn_0').parent().addClass('active');
    	     
    	     	$('#pgNext'+defaults.uniqueIdentifier).click(function(){
    	     		var curBtn = parseInt($('#hidPagination'+defaults.uniqueIdentifier).val());
    	            var newFinalId = parseInt(curBtn)+1;
    	            $('#pgBtn'+defaults.uniqueIdentifier+'_' + newFinalId).click();  
    	            //$('#pgPrev'+defaults.uniqueIdentifier+' a').removeClass('liDisabled');
    	            var lastBtnIndex = $('.firstBtn').eq(1).attr('id');
    	            var splitLastBtnIndex = lastBtnIndex.split(SYMBOLS.UNDERSCORE);
    	            var splitLastBtnIndex = splitLastBtnIndex[2];
    	            //alert(splitLastBtnIndex)
    	            if(splitLastBtnIndex >= newFinalId+1){
    	            	$('#dotPagesAnchor'+defaults.uniqueIdentifier).html(newFinalId+1);
    	            	$('.dotPages'+defaults.uniqueIdentifier).addClass('active');
    	            } else{
    	            	$('#pgNext'+defaults.uniqueIdentifier+' a').addClass('liDisabled');
    	            	//$('#dotPagesAnchor'+defaults.uniqueIdentifier).html("...");
    	            	$('#pgBtn'+defaults.uniqueIdentifier+'_' + newFinalId).click(); 
    	            	$('.dotPages'+defaults.uniqueIdentifier).removeClass('active');
    	            }
    	        });
    	     
    	     	$('#pgPrev'+defaults.uniqueIdentifier).click(function(){
    	     		var curBtn = parseInt($('#hidPagination'+defaults.uniqueIdentifier).val());
    	            var newFinalId = parseInt(curBtn)-1;
    	            $('#pgBtn'+defaults.uniqueIdentifier+'_' + newFinalId).click();  
    	            var firstBtnIndex = $('.firstBtn').eq(0).attr('id');
    	            //alert(firstBtnIndex)
    	            var splitFirstBtnIndex = firstBtnIndex.split(SYMBOLS.UNDERSCORE);
    	            var splitFirstBtnIndex = splitFirstBtnIndex[2];
    	            //alert(splitFirstBtnIndex)
    	            $('#pgNext a').removeClass('liDisabled');
    	            if(splitFirstBtnIndex <= newFinalId){
    	            	$('#dotPagesAnchor'+defaults.uniqueIdentifier).html(newFinalId+1);
    	            	//alert(splitFirstBtnIndex +'--'+newFinalId)
    	            	if(splitFirstBtnIndex != newFinalId){
    	            		$('.dotPages'+defaults.uniqueIdentifier).addClass('active');
    	            	}
    	            } else{  
    	            	$('#pgPrev'+defaults.uniqueIdentifier+' a').addClass('liDisabled');
    	            	//$('#dotPagesAnchor'+defaults.uniqueIdentifier).html("...");
    	            	$('#pgBtn'+defaults.uniqueIdentifier+'_' + newFinalId).click();
    	            	//alert(0)
    	            	$('.dotPages'+defaults.uniqueIdentifier).removeClass('active');
    	            }
    	            return false; 
    			});
    	     
    		} else {
    			$("#paginationSpecerRow").css('display','block');
    		}    		
    	//End of Minimal view of pagination	
    	}
    });
 
};