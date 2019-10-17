(function(JQuery) {
    JQuery.fn.thanhfaceseo = function(options) {        
        var defaults = {  
	    	animation: 'fadeAndPop', //fade, fadeAndPop, none
		    animationspeed: 300, //how fast animtions are
		    closeonbackgroundclick: true, //if you click background will modal close?
		    dismissmodalclass: 'close-thanhfaceseo-modal' //the class of a button or element that will close an open modal
    	}; 

        var options = JQuery.extend({}, defaults, options); 
	
        return this.each(function() {
        	var modal = JQuery(this),
        		topMeasure  = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
          		locked = false,
				modalBG = JQuery('.thanhfaceseo-modal-bg');

			if(modalBG.length == 0) {
				modalBG = JQuery('<div class="thanhfaceseo-modal-bg" />').insertAfter(modal);
			}		    
			modal.bind('thanhfaceseo:open', function () {
			  modalBG.unbind('click.modalEvent');
				JQuery('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modal.css({'top': JQuery(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"top": JQuery(document).scrollTop()+topMeasure + 'px',
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					}
					if(options.animation == "fade") {
						modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': JQuery(document).scrollTop()+topMeasure});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					} 
					if(options.animation == "none") {
						modal.css({'visibility' : 'visible', 'top':JQuery(document).scrollTop()+topMeasure});
						modalBG.css({"display":"block"});	
						unlockModal()				
					}
				}
				modal.unbind('thanhfaceseo:open');
			}); 	

			modal.bind('thanhfaceseo:close', function () {
			  if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top":  JQuery(document).scrollTop()-topOffset + 'px',
							"opacity" : 0
						}, 0, function() {
							modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
							unlockModal();
						});					
					}  	
					if(options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity" : 0
						}, 0, function() {
							modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
							unlockModal();
						});					
					}  	
					if(options.animation == "none") {
						modal.css({'visibility' : 'hidden', 'top' : topMeasure});
						modalBG.css({'display' : 'none'});	
					}		
				}
				modal.unbind('thanhfaceseo:close');
			});     
   	
    	modal.trigger('thanhfaceseo:open')
			
			//Close Modal Listeners
			var closeButton = JQuery('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
			  modal.trigger('thanhfaceseo:close')
			});
			
			if(options.closeonbackgroundclick) {
				modalBG.css({"cursor":"pointer"})
				modalBG.bind('click.modalEvent', function () {
				  modal.trigger('thanhfaceseo:close')
				});
			}
			JQuery('body').keyup(function(e) {
        		if(e.which===27){ modal.trigger('thanhfaceseo:close'); } // 27 is the keycode for the Escape key
			});
			
			function unlockModal() { 
				locked = false;
			}
			function lockModal() {
				locked = true;
			}	
			
        });//each call
    }//orbit plugin call
})(jQuery);
        
var divpopup = document.createElement("div");
jQuery(divpopup).attr('id', 'myModalthanh');
jQuery(divpopup).attr('class', 'thanhfaceseo-modal');
jQuery( "body" ).append(divpopup);
var titleform='Đăng ký Form';
var urlform="https://docs.google.com/forms/d/e/1FAIpQLScMNM8WKKSjYK4moTtCGGPl8Cf_uaZGxJoshXCQFAeHMo-pXQ/formResponse";
var urlchuyen=window.location.href;
var hovaten="1527467156";
var dienthoai="682887884";
var email="461072691";
var duan="1012274451";
var submittitle='Đăng ký tư vấn khoá học Phong Thuỷ Cải Vận';
var submittedform=false;
var titleheader="ĐĂNG KÝ TƯ VẤN KHOÁ HỌC PHONG THUỶ CẢI VẬN";
var hotline="0903753718";
var linkhientai=window.location.href;
var thoigianhien=30000;
var formdiv='<div class="popup-body"><iframe id="hidden_iframethanh" name="hidden_iframethanh" onload="thanhxet()" style="display:none;"></iframe><div class="box-thanh-form"><div class="img"></div><div class="thanhform-level1"><h2><a class="close-thanhfaceseo-modal">X</a></h2></div><div id="cems-subscription" class="cems-subscription"><div class="sss-form-content thanhgform_wrapper"> <form class="form-hasBg" onsubmit="submittedform=true;" target="hidden_iframethanh" method="post" action="'+urlform+'"><div class="gform_body"><h2 class="form-title yellow-text-gradient">'+titleheader+'</h2><div class="description">					<p>Vui lòng điền chính xác các thông tin bên dưới để được tư vấn khóa học</p>				</div>     <ul class="thanhtop_label"> ';
formdiv+= '<li class="sss-form-control gfield ">  <div class="sss-form-control-inner">                               <div class="ginput_container">                  <input class="medium" name="entry.'+hovaten+'" maxlength="70" id="your_name" placeholder="Họ tên" value="" type="text">                </div>              </div>            </li> ';
formdiv+= '<li class="sss-form-control gfield ">              <div class="sss-form-control-inner">                              <div class="ginput_container">                  <input class="medium" name="entry.'+email+'" maxlength="320" id="email_addr" placeholder="Email" value="" type="email"/>                </div>              </div>            </li> ';
formdiv+= ' <li class="sss-form-control gfield ">              <div class="sss-form-control-inner">                                <div class="ginput_container">                  <input class="medium" name="entry.'+dienthoai+'" maxlength="15" id="your_phone" placeholder="Số điện thoại" value="" length="11" type="tel"/>                </div>              </div>            </li>';

formdiv+= ' <li class="sss-form-control gfield thanhan">              <div class="sss-form-control-inner">                                <div class="ginput_container">                  <input class="medium" name="entry.'+duan+'" maxlength="15" id="your_phone" placeholder="Dự án" value="'+linkhientai+'" length="11" type="tel"/>                </div>              </div>            </li>';


formdiv+= '</ul>        </div>        <div class="gform_footer">          <div class="sss-form-control last" style="text-align:center;">            <input value="'+submittitle+'" type="submit"/>          </div> <span style="display:inline-block">HOTLINE:</span> <a href="tel:'+hotline+'" class="hotlinegoi" style="display:inline-block"> '+hotline+'</a>       </div>      </form>    </div>  </div></div></div>';


jQuery("#myModalthanh").html(formdiv);		
		
function thanhxet(){

if(submittedform) {
	window.location="https://thayphongthuy.vn";
var linkhientai=window.location;
if(getCookie(linkhientai)){
                	
    }else{
                   
                    setCookie(linkhientai,'1',thoigianhien); 
    }



     jQuery('#myModalthanh').css('display','none');				   
	 jQuery('.thanhfaceseo-modal-bg').css('display','none');	
	
	}	
}


 function setCookie(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + exdays);
                var expires = "expires="+d.toUTCString();
                document.cookie = cname + "=" + cvalue + "; " + expires;
            }
             
            function getCookie(cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for(var i=0; i<ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0)==' ') c = c.substring(1);
                    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
                }
                return "";
            }
		
function showform(){
	var linkhientai=window.location;
	if(getCookie(linkhientai)){
                	
    }else{
                    jQuery('#myModalthanh').thanhfaceseo(jQuery('#myModalthanh').data());
                    setCookie(linkhientai,'1',thoigianhien); 
    }	
}

var myVar=setInterval(function () {showform()}, 1000);

