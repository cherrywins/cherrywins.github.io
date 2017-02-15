 
function t121_setHeight(recid){
    var div=$("#youtubeiframe"+recid);
    var height=div.width() * 0.5625;
    div.height(height);
    div.parent().height(height);         
} 
function t071_unifyHeights(recid) {
    $('#rec'+recid+' .t071 .t-container').each(function() {
        var highestBox = 0;
        $('.t071__wrapper', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
        	$('.t071__wrapper',this).css('height', highestBox); 
        }else{
	        $('.t071__wrapper',this).css('height', "auto");    
        }
    });
} 
function t113_highlight(recid){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t113__list_item a[href='"+url+"']").addClass("t-active");
  $(".t113__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t113__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t113__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t113__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t113__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t113_showMenu(recid,pageid){
  var $flagmenudo = "2ok";
  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > 200) {
      if($flagmenudo != "1ok"){$flagmenudo="1";}
    }
    else {
      if($flagmenudo!="2ok"){$flagmenudo="2";}
    }

    if ($flagmenudo=="1") {
      $('.t113').addClass('t113__fixed');
      $('.t113').css('display','none');
      $('.t113').fadeIn( "slow" );

	  $('#rec'+recid).find('.t113__space').hide();
      $flagmenudo="1ok";
    }
    if ($flagmenudo=="2") {
      $('.t113').removeClass('t113__fixed');
	  $('#rec'+recid).find('.t113__space').show();
      $flagmenudo="2ok";
    }
  });

  var current_path = window.location.pathname.split('/').pop();
  if(current_path=="page"+pageid+".html"){
    $("#t113linktopage"+pageid).css("opacity",".7");
  }
}

function t113_setWidth(recid){
  var t113timer;
  var el=$('#rec'+recid);
  $(window).resize(function() {
    if(t113timer) {
        window.clearTimeout(t113timer);
    }
    t113timer = window.setTimeout(function() {
        if($(window).width()>640){
          var w1= el.find("div[data-hook-left]").width()+20+50;
          el.find(".t113__list").css("padding-right",w1+"px");
        }else{
          el.find(".t113__list").css("padding-right",10+"px");  
        }
    }, 100);
  });
  $(window).resize();
} 
function t126_unifyHeights() {
    $('.t126 .t-container').each(function() {
        var highestBox = 0;
        $('.t126__title', this).each(function(){
        	$(this).css("height","auto");
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
        	$('.t126__title',this).css('height', highestBox);   
        }else{
	        $('.t126__title',this).css('height', "auto");    
        }
        
        var highestBox = 0;
        $('.t126__descr', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
        	$('.t126__descr',this).css('height', highestBox);   
        }else{
	        $('.t126__descr',this).css('height', "auto");    
        }
                
    });
}

 
function t131_unifyHeights() {
    $('.t131 .t-container').each(function() {
        var highestBox = 0;
        $('.t131__title', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
        	$('.t131__title',this).css('height', highestBox);   
        }else{
	        $('.t131__title',this).css('height', "auto");    
        }
        
        var highestBox = 0;
        $('.t131__descr', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
        	$('.t131__descr',this).css('height', highestBox);   
        }else{
	        $('.t131__descr',this).css('height', "auto");    
        }
    });
} 
function t132_unifyHeights() {
    $('.t132__box').children('.t132__wrappper').each(function() {
        $(this).children('a').children('div').css('width', $(this).outerWidth()-1);
        $(this).children('a').children('div').css('height', $(this).outerHeight()-40);	        
    });
} 
if (! window.yashare2scriptLoaded){
    var scriptService = document.createElement('script');
    scriptService .src = "https://yastatic.net/share2/share.js";
    scriptService .type = "text/javascript";
    scriptService .charset = "UTF-8";
    document.documentElement.appendChild(scriptService);

    window.yashare2scriptLoaded = true;
}
 
function t142_checkSize(recid){
  var el=$("#rec"+recid).find(".t142__submit");
  if(el.length){
    var btnheight = el.height() + 5;
    var textheight = el[0].scrollHeight;
    if (btnheight < textheight) {
      var btntext = el.text();
      el.addClass("t142__submit-overflowed");
      el.html("<span class=\"t142__text\">" + btntext + "</span>");
    }
  }
} 
function t179_showvideo(recid){
  $("#rec"+recid+" .t179__playbutton").css("display","none");
  $("#rec"+recid+" .t179__videocontainer").css("display","block");
  var height=$("#rec"+recid+" .t179__videocontainer").attr("data-height");
  var youtubeid=$("#rec"+recid+" .t179__videocontainer").attr("data-youtube-id");
  if(height=="")height="540";

  $("#youtubeiframe_carier"+recid).html("<iframe id=\"youtubeiframe{$a.id}\" width=\"100%\" height=\""+height+"\" src=\"//www.youtube.com/embed/"+youtubeid+"?autoplay=1&rel=0&fmt=18\" frameborder=\"0\" allowfullscreen></iframe>");

  if(height==""){
    var div=$("#youtubeiframe"+recid);
    var height=div.width() * 0.5625;
    div.css("height",height);
  }
}
 
function t190_scrollToTop(){
    $('html, body').animate({scrollTop: 0}, 700);								
}	  
 
function t199_showMenu(recid){
  var el=$("#rec"+recid);
  el.find('.t199__js__menu').each(function() {
    var $toggler = el.find('.t199__js__menu-toggler'),
    $menu = $(this),
    $body = $('body'),
    CLASS_MENU = 't199__is__menu';
      
  $menu.find('.t199__menu-item').each(function() {
    if($(this).attr('href').indexOf('#') > -1 ){
      $(this).on('click', function(e) {
        $body.removeClass(CLASS_MENU);
        });
    }
  });      

    $toggler.on('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      $body.toggleClass(CLASS_MENU);
    });

    $(document).on('click', function() {
      $body.removeClass(CLASS_MENU);
    });

    $menu.on('click', function(e) {
      e.stopPropagation();
    });
  })
}

function t199_positionHeader(recid){
  var el=$("#rec"+recid);
  var $header = el.find('.t199__js__header'),

    isScrolling = false,

    CLASS_ACTIVE = 't199__is__active';

  function updateHeader() {
    isScrolling = true;

    if ($(window).scrollTop() > 0) $header.addClass(CLASS_ACTIVE);
    else $header.removeClass(CLASS_ACTIVE);
  }

  setInterval(function() {
    if(isScrolling) {
      isScrolling = false;
    }
  }, 100);

  $(window).on('scroll', updateHeader)
  updateHeader();
}

function t199_setPath(pageid){
}

function t199_highlight(recid){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t199__menu a[href='"+url+"']").addClass("t-active");
  $(".t199__menu a[href='"+url+"/']").addClass("t-active");
  $(".t199__menu a[href='"+pathname+"']").addClass("t-active");
  $(".t199__menu a[href='/"+pathname+"']").addClass("t-active");
  $(".t199__menu a[href='"+pathname+"/']").addClass("t-active");
  $(".t199__menu a[href='/"+pathname+"/']").addClass("t-active");
}
 
function t204_clickBurger(recid){
  var el=$("#rec"+recid);

  el.find('#t204__burger').click(function(e){
      t204_showMenu(recid);
      if(window.lazy=='y'){t_lazyload_update();}
  }); 

  el.find('#t204__closelayer').click(function(e){
      t204_hideMenu(recid);
  });
}

function t204_showMenu(recid) {  
  var el=$("#rec"+recid); 
  el.find("#t204__menu").finish();              
  el.find('#t204__menu').css("visibility","visible");
  el.find('#t204__menu').css("opacity","0");
  el.find('#t204__menu').css("right","-300px");
  el.find('#t204__menu').animate({"opacity": "1","right": "0px"}, 300);
  el.find('#t204__closelayer').css("visibility","visible"); 
}

function t204_hideMenu(recid) {
  var el=$("#rec"+recid);
  el.find("#t204__menu").finish();		          
  el.find('#t204__menu').css("visibility","hidden");
  el.find('#t204__closelayer').css("visibility","hidden");	
  el.find(".t204__item a").each(function() {
    $(this).on('click', function(e) {
      t204_hideMenu(recid);
    });
  });
} 
function t213_init(recid){
    var el = $("#t213-marker"+recid);
    var cotimer;
    var wnd=$(window);
    var bdy=$('body');
    var needcolor=el.attr("data-bg-color");
    bdy.css("transition", "background-color 1000ms linear");
    if(window.t213higher===undefined)window.t213higher=1000000;
    if(window.t213higher>el.offset().top){
        window.t213higher=el.offset().top;
        window.t213higher_id=recid;
    }
    var bodydefcolor=bdy.css("background-color");
    var timer_count=0;

    wnd.scroll(function() {
        if(cotimer) {
            window.clearTimeout(cotimer);
            if(timer_count>=15){
                t212_timer_do(el,wnd,bdy,needcolor,bodydefcolor,recid);
            }
            timer_count++;
        }
        cotimer = window.setTimeout(function() {
            t212_timer_do(el,wnd,bdy,needcolor,bodydefcolor,recid);
            timer_count=0;
        }, 100);
    });        

    wnd.scroll();         
}

function t212_timer_do(el,wnd,bdy,needcolor,bodydefcolor,recid){
    var a,c,d,bc;
    a = el.offset().top;
    c = wnd.scrollTop();
    d = wnd.height();                  
    bc = bdy.attr("data-bg-color");

    if((c+d) >= a){
      bdy.css("background-color",needcolor);
    }else{
      if(window.t213higher_id==recid){
        bdy.css("background-color",bodydefcolor);
      }
    }    
} 
function t219_showcomments(recid){
  $("#rec"+recid+" .t-btn").css("display","none");
  $("#rec"+recid+" .t219__blocktitle").css("display","block");

  var disqus_shortname = $("#rec"+recid+" .t219__disqusthread").attr('data-disqus-shortname');
console.log(disqus_shortname);
  if(disqus_shortname!==""){
	  var disqus_identifier = disqus_shortname;    
  }else{
	  var disqus_identifier = "t_page_" + $("#rec"+recid+" .t219__disqusthread").attr("data-page-id");
  }

  var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
} 
function t226_floating_init(el){
    console.log('floating_init');

    var wnd=$(window);
    var col=el.parent();

    el.css('max-width',el.width());
    el.css('width','100%');
    col.css('min-height',el.height());

    var timer;
    var timer_count=0;
    var timer_react=5;

    wnd.scroll(function() {
        if(timer) {
            window.clearTimeout(timer);
            if(timer_count>=timer_react){
                t226_floating_scroll(el,wnd,col);
                timer_count=0;
            }
            timer_count++;
        }

        timer = window.setTimeout(function() {
                t226_floating_scroll(el,wnd,col);
                timer_count=0;    
        }, 50);
    });        


    wnd.resize(function() {
         wnd.scroll();
    });

    wnd.scroll();
}

function t226_floating_scroll(el,wnd,col){
    var wnd_height = wnd.height();
    var wnd_width = wnd.width();

    if(wnd_width<=1024){
        el.removeClass('t226__fixedTop');
        el.removeClass('t226__fixedBottom');
        el.removeClass('t226__floating');
        return('');
    }

    el.css('max-width',col.width());

    if(col.height()<el.height() && col.height()>0){
        col.height(el.height());
    }

    var el_height = el.height();
    var col_top = col.offset().top;
    var col_width = col.width();
    var col_height = col.height();
    var col_bottom = col_top + col_height;

    var wnd_top = wnd.scrollTop();
    var wnd_bottom = wnd_top + wnd_height;  

    if(wnd_top+el_height+50 >= col_bottom){
        //console.log('fixedbottom');
        el.addClass('t226__fixedBottom');
        el.removeClass('t226__fixedTop');
        el.removeClass('t226__floating');
    }else if(wnd_top+50 > col_top){
        //console.log('floating');
        el.addClass('t226__floating');
        el.removeClass('t226__fixedBottom');
        el.removeClass('t226__fixedTop');
    }else{
        //console.log('fixedtop');
        el.addClass('t226__fixedTop');
        el.removeClass('t226__fixedBottom');  
        el.removeClass('t226__floating');
    }
} 
function t228_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t228__list_item a[href='"+url+"']").addClass("t-active");
  $(".t228__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t228__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t228__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t228__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t228__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t228_setPath(){
}

function t228_setWidth(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t228").each(function() {
      var el=$(this);
      var left_exist=el.find('.t228__leftcontainer').length;
      var left_w=el.find('.t228__leftcontainer').outerWidth(true);
      var max_w=left_w;
      var right_exist=el.find('.t228__rightcontainer').length;
      var right_w=el.find('.t228__rightcontainer').outerWidth(true);
	  var items_align=el.attr('data-menu-items-align');
      if(left_w<right_w)max_w=right_w;
      max_w=Math.ceil(max_w);
      var center_w=0;
      el.find('.t228__centercontainer').find('li').each(function() {
        center_w+=$(this).outerWidth(true);
      });
      var padd_w=40;
      var maincontainer_width=el.find(".t228__maincontainer").outerWidth(true);
      if(maincontainer_width-max_w*2-padd_w*2>center_w+20){
          //if(left_exist>0 && right_exist>0){
		  if(items_align=="center" || typeof items_align==="undefined"){
            el.find(".t228__leftside").css("min-width",max_w+"px");
            el.find(".t228__rightside").css("min-width",max_w+"px");
            el.find(".t228__list").removeClass("t228__list_hidden");
          }
       }else{
          el.find(".t228__leftside").css("min-width","");
          el.find(".t228__rightside").css("min-width","");  
          
      }
    });
  }
}

function t228_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t228").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);             
      }
      });
      }else{
        $(".t228").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t228_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t228").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");  
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });       
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t228_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t228").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || (typeof menushadow == "undefined" && menushadow == false)){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || (typeof menushadow == "undefined" && menushadow == false)){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t228_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t228"),
      burger=el.find(".t228__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t228_opened")
  })
  $(window).resize(function() {
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    } else {
      menu.fadeOut(0);
      burger.removeClass("t228_opened")
    }
  });
}



 
function t229_highlight(recid){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t229__list_item a[href='"+url+"']").addClass("t-active");
  $(".t229__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t229__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t229__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t229__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t229__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t229_setPath(pageid){
}

function t229_setBg(recid){
      var window_width=$(window).width();
      if(window_width>980){
          $(".t229").each(function() {
          	 var el=$(this);
             if(el.attr('data-bgcolor-setbyscript')=="yes"){
	             var bgcolor=el.attr("data-bgcolor-rgba");
	             el.css("background-color",bgcolor);             
             }
          });
      }else{
          $(".t229").each(function() {
             var el=$(this);
             var bgcolor=el.attr("data-bgcolor-hex");
             el.css("background-color",bgcolor);
             el.attr("data-bgcolor-setbyscript","yes");
		  });
      }
  }

function t229_appearMenu(recid) {
        var window_width=$(window).width();
        if(window_width>980){
	         $(".t229").each(function() {
					var el=$(this);
					var appearoffset=el.attr("data-appearoffset");
					if(appearoffset!=""){
			                if(appearoffset.indexOf('vh') > -1){
				                appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
			                }
					
							appearoffset=parseInt(appearoffset, 10);
		
							if ($(window).scrollTop() >= appearoffset) {
							  if(el.css('visibility') == 'hidden'){
								  el.finish();
								  el.css("top","-50px");	
								  el.css("visibility","visible");
								  el.animate({"opacity": "1","top": "0px"}, 200,function() {
								  });	  	  
							  }
							}else{
							  el.stop();
							  el.css("visibility","hidden");
							}
					}
	         });
        }
    
    }


function t229_changeBgOpacityMenu(recid) {
        var window_width=$(window).width();
        if(window_width>980){
	         $(".t229").each(function() {
					var el=$(this);
					var bgcolor=el.attr("data-bgcolor-rgba");
					var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
					if ($(window).scrollTop() > 20) {
						el.css("background-color",bgcolor_afterscroll);
					}else{
						el.css("background-color",bgcolor);
					}
	         });
        }
    
    } 
function t235__next(){
    if((cur+1)>=$(".r").not('[data-t263-block-notslide=yes]').size())return;    
    cur++;
    $(".r").not('[data-t263-block-notslide=yes]').each(function(i) {
        if((cur-1)==i){
            var el=$(this);
			var trans_out_y='-100px';
			if(el.height()+100>$(window).height())trans_out_y='0px';
			el.transition({ y: trans_out_y,opacity: 0},250,'out',function() {
				el.css('display','none');
		    });
        }        
        if(cur==i){
            var el=$(this);
            var speed='slow';
            if(cur==0){
                speed=0;
            }

            el.css('display','none');
			var trans_in_y='50px';
			if(el.height()+100>$(window).height())trans_in_y='0px';
			el.transition({y:trans_in_y},1,'ease',function() {});
			el.animate({opacity:"0"}, 300, function() {
                el.css('display','block');
                el.css('opacity','0');
                el.transition({y:'0px',opacity: 1},500,'ease',function() {});
				$('.r').removeClass('t235__active');
				el.addClass('t235__active');
                if(typeof lazyload_cover=='object')lazyload_cover.update();
                if(typeof lazyload_img=='object')lazyload_img.update();
                if(typeof lazyload_bgimg=='object')lazyload_bgimg.update();
			});


            if(el.height()>$(window).height()){
                $('#t235__scrldonwicon').fadeIn('slow',function(){
                    $('#t235__scrldonwicon').delay(1000).fadeOut('slow');	
                });
            }

            var bg=el.attr('data-bg-color');
            if(bg!==undefined && bg!=='none'){
                $('#allrecordstable').css('background-color',bg);
            }else{
                $('#allrecordstable').css('background-color','');
            }
        }
    });
    t235__update();
    setTimeout(function(){
      $(window).trigger('resize');
      $("#allrecords").css('width', $(window).width()+'px');
    },400);
}

function t235__prev(){
    if((cur-1)==-1)return;
    cur--;    
    $(".r").not('[data-t263-block-notslide=yes]').each(function(i) {
        if((cur+1)==i){
            var el=$(this);
            el.css('display','none');
        }        
        if(cur==i){
            var el=$(this);
            el.css('display','block');
			el.css('opacity','0');
			el.transition({ y: '0px'},1,'easeOutSine');
			el.animate({opacity:"1"}, 50, function() {});
            $('.r').removeClass('t235__active');
            el.addClass('t235__active');

            var bg=el.attr('data-bg-color');
            if(bg!==undefined && bg!=='none'){
                $('#allrecordstable').css('background-color',bg);
            }else{
                $('#allrecordstable').css('background-color','');
            }              
        }
    });
    t235__update();
    setTimeout(function(){
      $(window).trigger('resize');
      $("#allrecords").css('width', $(window).width()+'px');
    },400);
}  

function t235__galnext(){
	var elactive=$('.t235__active');
	var tplid=elactive.attr('data-record-type');
	if(tplid=='5')elactive.find('[data-slide=next]').trigger('click');
}

function t235__update(){
  var c=cur+1;
  var t=$(".r").not('[data-t263-block-notslide=yes]').size();
  $('.t235__count').html(c+'/'+t);
  if(typeof lazyload_cover=='object')lazyload_cover.update();
  if(typeof lazyload_img=='object')lazyload_img.update();
  if(typeof lazyload_bgimg=='object')lazyload_bgimg.update();
}

function t235__init(){
  $("#allrecords").wrap("<table id='allrecordstable' width='100%' height='100%' style='height:100vh; border:0px; margin:0px; padding:0px; border-spacing:0px;'><tr><td></td></tr></table>");
  $("#allrecords").css('width', $(window).width()+'px');
  var wnd = $(window);
  $(".r").not('[data-t263-block-notslide=yes]').each(function(i) {
      var el=$(this);
      el.css('padding','0px');
      if(el.height()>wnd.height()){
          el.css('padding-top','150px');
          el.css('padding-bottom','150px');            	
      }
      el.css('display','none');
      el.css('opacity','');   
	  el.css('background-color','');   
  });
  t235__next();
  $('#tildacopy').css('display','none');

  $('.t235').css('right','-=100');
  setTimeout(function() {
      $('.t235').addClass('t235_anim');
      $('.t235').css('right','+=100');    
  }, 800);   

  $(document).keydown(function(e) {
      switch(e.which) {
          case 38: t235__prev();
          break;

          case 40: t235__next();
          break;

          case 33: t235__prev();
          break;

          case 34: t235__next();
          break;

          case 32: t235__next();
          break;

          case 190: t235__galnext();
          break;

          default: return;
      }
      if(e.which!=190){
		e.preventDefault();
	  }
  });

  $('#allrecordstable').css('transition','background-color 500ms linear');
  $('.t-cover__carrier').css('background-attachment','scroll');
} 
function t232_expandtext(recid){
  $("#rec"+recid).find(".t232__text").toggle();
}
 
window.t256showvideo = function(recid){
    $(document).ready(function(){
        var el = $('#coverCarry'+recid);
        var videourl = '';

        var youtubeid=$("#rec"+recid+" .t256__video-container").attr('data-content-popup-video-url-youtube');
        if(youtubeid > '') {
            videourl = 'https://www.youtube.com/embed/' + youtubeid;
        }

        $("body").addClass("t256__overflow");
		$("#rec"+recid+" .t256__cover").addClass( "t256__hidden");
        $("#rec"+recid+" .t256__video-container").removeClass( "t256__hidden");
        $("#rec"+recid+" .t256__video-carier").html("<iframe id=\"youtubeiframe"+recid+"\" class=\"t256__iframe\" width=\"100%\" height=\"540\" src=\"" + videourl + "?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe><a class=\"t256__close-link\" href=\"javascript:t256hidevideo('"+recid+"');\"><div class=\"t256__close\"></div></a>");
    });
}

window.t256hidevideo = function(recid){
    $(document).ready(function(){
        $("body").removeClass("t256__overflow");
        $("#rec"+recid+" .t256__cover").removeClass( "t256__hidden");
        $("#rec"+recid+" .t256__video-container").addClass( "t256__hidden");
        $("#rec"+recid+" .t256__video-carier").html("<div class=\"t256__video-bg2\"></div>");
    });
} 
function t260_init(){
	$(".t260").each(function() {
		var el=$(this);
		if(el.attr('data-block-init')=='yes'){
		}else{
		  el.attr('data-block-init','yes');

          var toggler = el.find(".t260__header");
          var content = el.find(".t260__content");

          toggler.click(function() {
			$(this).toggleClass("t260__opened");
			if($(this).hasClass("t260__opened")==true){
				content.slideDown();
			}else{
				content.slideUp();
			}
          })

		}
	});
} 
function t262_appendGoogleMap(recid, key) {
	var grecid = recid;

	if (typeof google === 'object' && typeof google.maps === 'object') {
		t262_handleGoogleApiReady(grecid);
	} else {
		if(window.googleapiiscalled!==true){
			var runfunc = 'window.t262_handleGoogleApiReady_'+grecid+' = function () { t262_handleGoogleApiReady("'+grecid+'") }';
			eval(runfunc);

			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "//maps.google.com/maps/api/js?key="+jQuery.trim(key)+"&callback=t262_handleGoogleApiReady_"+grecid;
			document.body.appendChild(script);
			window.googleapiiscalled=true;
		} else {
			setTimeout(function(){
			  t262_appendGoogleMap(grecid, key);
			},200);
		}
	}
}

function t262_setMapHeight(recid) {
	var el=$('#rec'+recid);
	var map = el.find('.t262__map');
	var textwrapper = el.find('.t262__col_text').height();
	map.css('height', textwrapper);
}

function t262_handleGoogleApiReady(recid){
	$('#rec'+recid).find('.t262__map').each(function(index,Element) {
		var el=$(Element);
		var arMarkers = window['arMapMarkers'+recid];
		window.isDragMap = $isMobile ? false : true;
	
		var myLatLng = arMarkers.length > 0 ? new google.maps.LatLng(parseFloat(arMarkers[0].lat), parseFloat(arMarkers[0].lng)) : false;
		var myOptions = {
			zoom: parseInt(el.attr('data-map-zoom')),
			center:myLatLng,
			scrollwheel: false,
			draggable: window.isDragMap,
			zoomControl: true
		};

		var map = new google.maps.Map(Element, myOptions);

		var i, mrk, marker, markers=[], infowindow;
		var bounds = new google.maps.LatLngBounds();
		for(i in arMarkers) {
			mrk = arMarkers[i];
			myLatLng = new google.maps.LatLng(parseFloat(mrk.lat), parseFloat(mrk.lng));
			marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				title: mrk.title
			});
			bounds.extend(myLatLng);

			if (mrk.descr > '') {
				attachInfoMessage(marker, mrk.descr);
			} else {
				attachInfoMessage(marker, mrk.title);
			}

			markers[markers.length] = marker;
			infowindow='';
			marker='';
		}
		
		function attachInfoMessage(marker, descr) {
			var infowindow = new google.maps.InfoWindow({
				content:  $("<textarea/>").html(descr).text()
			});
		  
			marker.addListener('click', function() {
				infowindow.open(marker.get('map'), marker);
			});
		}
		
		if (arMarkers.length > 1) {
			map.fitBounds(bounds);
			if (map.getZoom() > parseInt(el.attr('data-map-zoom'))) {
				map.setZoom(parseInt(el.attr('data-map-zoom')));
			}
		}

	  
		// Resizing the map for responsive design
		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center); 
		}); 

		// DBL Click - activate on mobile      
		if ($isMobile) {
			google.maps.event.addDomListener(window, "dblclick", function() {
				if (window.isDragMap) {
					window.isDragMap = false;
				} else {
					window.isDragMap = true;
				}
				map.setOptions({draggable: window.isDragMap});
			}); 
		}

	}); 
}


function t262_appendYandexMap(recid,key) {
	var yarecid = recid;
	if (typeof ymaps === 'object' && typeof ymaps.Map === 'function') {
		t262_handleYandexApiReady(recid);
	} else {
		if(window.yandexmapsapiiscalled!==true){
			var runfunc = 'window.t262_handleYandexApiReady_'+yarecid+' = function () { return t262_handleYandexApiReady("'+yarecid+'") }';
			eval(runfunc);

			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "https://api-maps.yandex.ru/2.1/?lang=ru-RU&coordorder=latlong&onload=t262_handleYandexApiReady_"+yarecid;
			if (key > '') {
				script.src = script.src + '&apikey='+key;
			}
			document.body.appendChild(script);
			window.yandexmapsapiiscalled=true;
		} else {
		  setTimeout(function(){
			t262_appendYandexMap(yarecid,key);
		  },200);
	  }
	}
}

function t262_handleYandexApiReady(recid){
	$('#rec'+recid).find('.t262__map').each(function(index,Element) {
		var el=$(Element);
		var arMarkers = window['arMapMarkers'+recid];

		window.isDragMap = $isMobile ? false : true;
			
		if(el.attr('data-map-style')!=''){var mapstyle=eval(el.attr('data-map-style'));}else{var mapstyle='[]';}
		var myLatlng = arMarkers.length > 0 ? [parseFloat(arMarkers[0].lat), parseFloat(arMarkers[0].lng)] : false;
		var myStates = {
			zoom: parseInt(el.attr('data-map-zoom')),
			center:myLatlng,
			scrollZoom: false,
			controls: ['typeSelector','zoomControl'],
			drag: window.isDragMap
		};

		var map = new ymaps.Map(Element, myStates), i, mrk, marker;
		var myGroup = new ymaps.GeoObjectCollection({}) ;
		map.behaviors.disable('scrollZoom');
		for(i in arMarkers) {
			mrk = arMarkers[i];
			myLatlng = [parseFloat(mrk.lat), parseFloat(mrk.lng)];

			myGroup.add(new ymaps.Placemark(myLatlng, { hintContent: mrk.title, balloonContent: mrk.descr > '' ? $("<textarea/>").html(mrk.descr).text() : mrk.title }));			
		}
		map.geoObjects.add(myGroup);
		if (arMarkers.length > 1) {
			map.setBounds(myGroup.getBounds(), {checkZoomRange: true}) ;
		}
		
		$(window).resize(function(){
			map.container.fitToViewport();
		});

		// DBL Click - activate on mobile      
		if ($isMobile) {
			$(window).dblclick(function() {
				if (window.isDragMap) {
					window.isDragMap = false;
				} else {
					window.isDragMap = true;
				}
				if (window.isDragMap) {
					map.behaviors.enable('drag');
				} else {
					map.behaviors.disable('drag');
				}
			});
		}

	});
} 
window.t266showvideo = function(recid){
    $(document).ready(function(){
        var el = $('#coverCarry'+recid);
        var videourl = '';

        var youtubeid=$("#rec"+recid+" .t266__video-container").attr('data-content-popup-video-url-youtube');
        if(youtubeid > '') {
            videourl = 'https://www.youtube.com/embed/' + youtubeid;
        }

        $("body").addClass("t266__overflow");
		$("#rec"+recid+" .t266__cover").addClass("t266__hidden");
        $("#rec"+recid+" .t266__video-container").removeClass("t266__hidden");
        $("#rec"+recid+" .t266__video-carier").html("<iframe id=\"youtubeiframe"+recid+"\" class=\"t266__iframe\" width=\"100%\" height=\"540\" src=\"" + videourl + "?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe><a class=\"t266__close-link\" href=\"javascript:t266hidevideo('"+recid+"');\"><div class=\"t266__close\"></div></a>");
    });
}

window.t266hidevideo = function(recid){
    $(document).ready(function(){
        $("body").removeClass("t266__overflow");
        $("#rec"+recid+" .t266__cover").removeClass("t266__hidden");
        $("#rec"+recid+" .t266__video-container").addClass("t266__hidden");
        $("#rec"+recid+" .t266__video-carier").html("<div class=\"t266__video-bg2\"></div>");
    });
} 
function t268_init(recid){
  var el=$("#rec"+recid);
  el.find(".t268__col-left").css({'height':(el.find(".t268__col-right").height()+'px')});

  $(window).resize(function(){
    el.find(".t268__col-left").css({'height':(el.find(".t268__col-right").height()+'px')});
  });
}
 
function t300_init(){
  $(".t300").each(function() {
	var $hook=$(this).attr('data-tooltip-hook');
    if($hook!==''){
		var $obj = $('a[href*="'+$hook+'"]');
		var $content=$(this).find('.t300__content').html();
		if($hook.charAt(0)=='#'){var touchDevices=true;}else{var touchDevices=false;}
		var position=$(this).attr('data-tooltip-position');
		if(position!==''){}else{position='top';}
	    $obj.tooltipster({'theme':'t300__tooltipster-noir','contentAsHTML': true,'content': $content, interactive:true, touchDevices:touchDevices, position:position});
	}
  });
}

$(document).ready(function(){
	t300_init();
    setTimeout(function() { t300_init(); }, 500)
});
 
    var t279 = {};
    
    t279.equalheight = function(recid) {

        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
            
        $('#rec'+recid+' .t279__textwrapper').each(function() {
     
            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;
       
            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0;
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    };
 
function t280_showMenu(recid){
  var el=$("#rec"+recid);
  el.find('.t280__burger, .t280__menu__bg, .t280__menu__item:not(".tooltipstered")').click(function(){
    $('body').toggleClass('t280_opened');
  });
}

function t280_changeSize(recid){
  var el=$("#rec"+recid);
  var div = el.find(".t280__menu").height();
  var bottomheight = el.find(".t280__bottom").height();
  var headerheight = el.find(".t280__container").height();
  var wrapper = el.find(".t280__menu__wrapper");
  var win = $(window).height() - bottomheight - headerheight - 40;
  if (div > win ) {
    wrapper.addClass('t280__menu_static');
  }
  else {
    wrapper.removeClass('t280__menu_static');
  }
}

function t280_changeBgOpacityMenu(recid) {
  var window_width=$(window).width();
  var record = $("#rec"+recid);
  record.find(".t280__container__bg").each(function() {
        var el=$(this);
        var bgcolor=el.attr("data-bgcolor-rgba");
        var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
        var bgopacity=el.attr("data-bgopacity");
        var bgopacity_afterscroll=el.attr("data-bgopacity2");
        var menu_shadow=el.attr("data-menu-shadow");
        if ($(window).scrollTop() > 20) {
            el.css("background-color",bgcolor_afterscroll);
            if (bgopacity_afterscroll != "0" && bgopacity_afterscroll != "0.0") {
              el.css('box-shadow',menu_shadow);
            } else {
              el.css('box-shadow','none');
            }
        }else{
            el.css("background-color",bgcolor);
            if (bgopacity != "0" && bgopacity != "0.0") {
              el.css('box-shadow',menu_shadow);
            } else {
              el.css('box-shadow','none');
            }
        }
  });
}

function t280_appearMenu(recid) {
      var window_width=$(window).width();
           $(".t280").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");  
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });       
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });

}

function t280_highlight(recid){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t280__menu a[href='"+url+"']").addClass("t-active");
  $(".t280__menu a[href='"+url+"/']").addClass("t-active");
  $(".t280__menu a[href='"+pathname+"']").addClass("t-active");
  $(".t280__menu a[href='/"+pathname+"']").addClass("t-active");
  $(".t280__menu a[href='"+pathname+"/']").addClass("t-active");
  $(".t280__menu a[href='/"+pathname+"/']").addClass("t-active");
}
 
function t312_showPopup(tf_url){
  var el=$('.t312');

  var code="<iframe id=\"typeform-full\" width=\"100%\" height=\"700px\" frameborder=\"0\" src=\""+tf_url+"\" data-hook-iframe=\"t312\"></iframe>";
  code +="<script type=\"text/javascript\" src=\"https://s3-eu-west-1.amazonaws.com/share.typeform.com/embed.js\"></script>"
  var h=$(window).height()-100;
  el.find('[data-hook-typeform-carrier]').html(code);
  el.find('[data-hook-iframe]').height(h);

  $('body').addClass('t312__body_popupshowed');
  if(el.find('.t312__popup').attr('style') && el.find('.t312__popup').attr('style') > '') {
    el.find('.t312__popup').attr('style','');
  }
  el.addClass('t312__popup_show');
  el.find('.t312__close, .t312__bg').click(function(){
	 t312_closePopup();
  });
}

function t312_closePopup(){
  $('body').removeClass('t312__body_popupshowed');
  $('.t312').removeClass('t312__popup_show');
}

function t312_initPopup(){
  $("a[href*='typeform.com']").each(function() {
      var el=$(this);
      el.attr('data-mode','1');
      el.attr('target','_blank');
      //el.addClass('typeform-share link');
      if($(window).width()>980){
        el.click(function(e){
          var tf_url=el.attr('href');
          t312_showPopup(tf_url);
          t312_resizePopup();
          e.preventDefault();
        });
      }
  });
}

function t312_resizePopup(){
  var div = $(".t312__mainblock").height();
  var win = $(window).height();
  var popup = $(".t312__content");
  if (div > win ) {
    popup.addClass('t312__content_static');
  }
  else {
    popup.removeClass('t312__content_static');
  }
} 
function t315_showcomments(recid)
{
  var el=$("#rec"+recid);
  el.find(".t-btn").css("display","none");
  el.find(".t315__blocktitle").css("display","block");
  el.find(".t315__blockhtml").css("display","block");
}
 
function t281_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t281_showPopup(recid);
      t281_resizePopup(recid);
      e.preventDefault();
      if(window.lazy=='y'){t_lazyload_update();}
      if (analitics == 'yes') {
        t281_sendPopupEventToStatistics(hook);
      }
    });
  }
}

function t281_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t281_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t281_closePopup();
  });

  el.find('a[href*=#]').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t281_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t281_closePopup(); }
  });
}

function t281_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t281_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t281_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
} 
function t282_showMenu(recid){
  var el=$("#rec"+recid);
  el.find('.t282__burger, .t282__menu__item:not(".tooltipstered"), .t282__overlay').click(function(){
    $('body').toggleClass('t282_opened');
    el.find('.t282__menu__container, .t282__overlay').toggleClass('t282__closed');
    el.find(".t282__menu__container").css({'top':(el.find(".t282__container").height()+'px')});
  });
}

function t282_changeSize(recid){
  var el=$("#rec"+recid);
  var bottomheight = el.find(".t282__menu__container");
  var headerheight = el.find(".t282__container");
  var menu = bottomheight.height() + headerheight.height();
  var win = $(window).height();
  if (menu > win ) {
    $("#nav"+recid).addClass('t282__menu_static');
  }
  else {
    $("#nav"+recid).removeClass('t282__menu_static');
  }
}

function t282_changeBgOpacityMenu(recid) {
 var window_width=$(window).width();
 var record = $("#rec"+recid);
 record.find(".t282__container__bg").each(function() {
    var el=$(this);
    var bgcolor=el.attr("data-bgcolor-rgba");
    var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
    var bgopacity=el.attr("data-bgopacity");
    var bgopacity_afterscroll=el.attr("data-bgopacity2");
    var menu_shadow=el.attr("data-menu-shadow");
    if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if (bgopacity_afterscroll != "0" && bgopacity_afterscroll != "0.0") {
          el.css('box-shadow',menu_shadow);
        } else {
          el.css('box-shadow','none');
        }
    }else{
        el.css("background-color",bgcolor);
        if (bgopacity != "0" && bgopacity != "0.0") {
          el.css('box-shadow',menu_shadow);
        } else {
          el.css('box-shadow','none');
        }
    }
 });
}

function t282_highlight(recid){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t282__menu a[href='"+url+"']").addClass("t-active");
  $(".t282__menu a[href='"+url+"/']").addClass("t-active");
  $(".t282__menu a[href='"+pathname+"']").addClass("t-active");
  $(".t282__menu a[href='/"+pathname+"']").addClass("t-active");
  $(".t282__menu a[href='"+pathname+"/']").addClass("t-active");
  $(".t282__menu a[href='/"+pathname+"/']").addClass("t-active");
}

function t282_appearMenu(recid) {
      var window_width=$(window).width();
           $(".t282").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");  
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });       
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });

}

 
function t330_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t330_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t330_closePopup();
  });

  el.find('a[href*=#]').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t330_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t330_closePopup(); }
  });
}

function t330_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t330_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t330_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
}

function t330_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t330_showPopup(recid);
      t330_resizePopup(recid);
      e.preventDefault();
      if(window.lazy=='y'){t_lazyload_update();}
      if (analitics == 'yes') {
        t330_sendPopupEventToStatistics(hook);
      }
    });
  }
} 
function t331_setHeight(recid){
  var el=$('#rec'+recid);
  var div = el.find(".t331__video-carier");
  var height=div.width() * 0.5625;
  div.height(height);
  div.parent().height(height);
}

function t331_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t331_showPopup(recid);
      t331_resizePopup(recid);
      e.preventDefault();
      if (analitics == 'yes') {
        t331_sendPopupEventToStatistics(hook);
      }
    });
  }
}

function t331_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  var youtubeid = el.find(".t331__youtube").attr('data-content-popup-video-url-youtube');
  var videourl = 'https://www.youtube.com/embed/' + youtubeid;
  el.find(".t331__video-carier").html("<iframe id=\"youtubeiframe"+recid+"\" class=\"t331__iframe\" width=\"100%\" height=\"100%\" src=\"" + videourl + "?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>");

  popup.css('display', 'block');
  t331_setHeight(recid);
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) {
    t331_popup_close(recid);
    }
  });

  el.find('.t-popup__close').click(function(e){
    t331_popup_close(recid);
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t331_popup_close(recid); }
  });
}

function t331_popup_close(recid){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $("#rec"+recid+" .t331__video-carier").html("");
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t331_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height(),
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t331_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
} 
var t334 = {};
t334.initeffect = function (recid){
    $('#rec'+recid).find(".t334__cell").hover(function(){
      var sizer = $(this).find(".t334__button-container").height();
      $(this).find(".t334__textwrapper__content").css({'padding-bottom':(sizer+'px')});
      $(this).find(".t334__button-container").addClass("t334__button-container_show");
    }, function(){
      $(this).find(".t334__textwrapper__content").css("padding-bottom","0");
      $(this).find(".t334__button-container").removeClass("t334__button-container_show");
    });
};
  
 
	var t335 = {};
    t335.initeffect = function(recid) {
        $('#rec'+recid).find(".t335__cell").hover(function(){
            var sizer = $(this).find(".t335__button-container").height();
            $(this).find(".t335__textwrapper__content").css({'padding-bottom':(sizer+'px')});
            $(this).find(".t335__button-container").addClass("t335__button-container_show");
        }, function(){
            $(this).find(".t335__textwrapper__content").css("padding-bottom","0");
            $(this).find(".t335__button-container").removeClass("t335__button-container_show");
        });
    };
 
    var t336 = {};
    t336.initeffect = function(recid){
        $('#rec'+recid).find(".t336__cell").hover(function(){
            var sizer = $(this).find(".t336__button-container").height();
            $(this).find(".t336__textwrapper__content").css({'padding-bottom':(sizer+'px')});
            $(this).find(".t336__button-container").addClass("t336__button-container_show");
        }, function(){
            $(this).find(".t336__textwrapper__content").css("padding-bottom","0");
            $(this).find(".t336__button-container").removeClass("t336__button-container_show");
        });
    };
    
 
function t341_showCaptions(recid){
  var el=$("#t-carousel"+recid);
  var caption = el.find('.item:nth-child(1) .t-carousel__caption-inside');
  var captioncontainer = el.find('.t-carousel__caption__container');
  captioncontainer.html(caption.html());
  caption.css('display','none');

  $("#t-carousel"+recid).on('slide.bs.carousel', function(evt) {
    var el=$("#t-carousel"+recid);
    var caption = el.find('.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .t-carousel__caption-inside');
    var captioncontainer = el.find('.t-carousel__caption__container');
    captioncontainer.html(caption.html());
    caption.css('display','none');
  });
}

function t341_checkSize(recid){
  var el=$("#rec"+recid);
  var containerinside = el.find(".t-carousel__arrows__container_inside");
  var containeroutside = el.find(".t-carousel__arrows__container_outside");
  var inner = el.find(".t-carousel__inner");
  var arrowleft = el.find(".t-carousel__arrow_left");
  var arrowright = el.find(".t-carousel__arrow_right");
  containeroutside.css({'max-width':(arrowleft.width()+arrowright.width()+inner.width()+ 60 +'px')});
  containerinside.css({'max-width':(inner.width()+'px')});

  var sizer = el.find('.t-carousel__height');
  var height = sizer.height();
  var width = sizer.width();
  if (width==0) {
    var width = $(window).width();
  }
  var ratio = width/height;
  var gallerywrapper = el.find(".t-carousel__checksize");
  var gallerywidth = gallerywrapper.width();

  if (height != $(window).height()) {
    gallerywrapper.css({'height':((gallerywidth/ratio)+'px')});
  }
} 
function t341_sendPaymentEventToStatistics(product, price) {
    var virtPage = '/tilda/order/?product='+product+'&price='+price;
    var virtTtitle = 'Order: '+product+' = '+price;
    if(ga) {
        if (window.mainTracker == 'tilda') {
            ga('tilda.send', {'hitType':'pageview', 'page':virtPage,'title':virtTtitle});
        } else {
            ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTtitle});
        }
    }
    
    if (window.mainMetrika > '' && window[window.mainMetrika]) {
        window[window.mainMetrika].hit(virtPage, {title: virtTtitle,referer: window.location.href});
    }
}

function t341_initStripePayment(recid, publishableapi, companyname, logo) {
	
	if (typeof StripeCheckout === 'object' ) {
		t341_handleStripeApiReady(recid,publishableapi, companyname, logo);
	} else {
		if(window.stripeapiiscalled!==true){
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "https://checkout.stripe.com/checkout.js";
			document.body.appendChild(script);
			window.stripeapiiscalled=true;
		}
		
		setTimeout(function(){
			t341_initStripePayment(recid, publishableapi, companyname, logo)
		}, 10);
	}

}

function t341_handleStripeApiReady(recid,publishableapi, companyname, logo) {
	if(! window.stripehandler) {
		window.stripehandler = StripeCheckout.configure({
			key: publishableapi,
			image: logo,
			name: (companyname ? companyname : window.location.host),
			locale: 'auto',
			token: function(token) {
				if (token && token.id) {
					t341_sendPaymentEventToStatistics($('#rec'+recid+' .js-product-name').val(), parseInt($('#rec'+recid+' .js-amount').val())*100);

					var data = {};
					data.projectid = $('#allrecords').attr('data-tilda-project-id');
					data.token = token.id;
					if (token.email) {
						data.email = token.email;
					}
					data.amount = parseInt($('#rec'+recid+' .js-amount').val())*100;
					data.products = [{
						product: $('#rec'+recid+' .js-product-name').val(),
						amount: parseInt($('#rec'+recid+' .js-amount').val())*100
						}
					];
					data.currency = $('#rec'+recid+' .js-currency').val();
					
					$.post('https://forms.tildacdn.com/payment/stripe/', data, function(json){
						},
						'json'
					);

					if ($('#rec'+recid+' .js-success-url').val() > '') {
						window.location.href = $('#rec'+recid+' .js-success-url').val();
					} else {
						$('#rec'+recid+' .t341__submit').val('Payed');
					}

				}
			}
		});
		// Close Checkout on page navigation:
		$(window).on('popstate', function() {
			window.stripehandler.close();
		});
	}
	
	$('#rec'+recid+' .t341__submit').on('click', function(e) {
		e.preventDefault();
		// Open Checkout with further options:
		window.stripehandler.open({
			name: companyname,
			image: logo,
			description: $('#rec'+recid+' .js-product-name').val(),
			amount: parseInt($('#rec'+recid+' .js-amount').val()*100),
			currency: $('#rec'+recid+' .js-currency').val(),
			shippingAddress: $('#rec'+recid+' .js-need-shipping').val() == '1' ? true : false,
			billingAddress: $('#rec'+recid+' .js-need-shipping').val() == '1' ? true : false,
		});
	});
}


function t341_initCloudPayments(recid, publishableapi) {
	
	if (typeof cp == "object" && typeof cp.CloudPayments == "function") {
		t341_handleCloudPaymentsApiReady(recid,publishableapi);
	} else {
		if(window.cloudpaymentsapiiscalled!==true){
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "https://widget.cloudpayments.ru/bundles/cloudpayments";
			document.body.appendChild(script);
			window.cloudpaymentsapiiscalled=true;
		}
		
		setTimeout(function(){
			t341_initCloudPayments(recid, publishableapi);
		}, 10);
	}

}

function t341_handleCloudPaymentsApiReady(recid,publishableapi) {
	
	$('#rec'+recid+' .t341__submit').on('click', function(e) {
		e.preventDefault();
		
		var currency = $('#rec'+recid+' .js-currency').val();
		if(! window.cloudpaymentshandler) {
			var lang='';
			if ( $('#rec'+recid+' .js-language').length > 0) {
				lang = $('#rec'+recid+' .js-language').val();
			}
			if (lang == '') {
				lang = (currency == 'RUB' || currency == 'BYR' ? 'ru-RU' : 'en-US');
			}
			window.cloudpaymentshandler = new cp.CloudPayments({language: lang});
		}

		/* Open Checkout with further options:*/
		window.cloudpaymentshandler.charge(
			{
				publicId: publishableapi, 
				description: $('#rec'+recid+' .js-product-name').val(), 
				amount: parseFloat($('#rec'+recid+' .js-amount').val()),
				currency: currency, 
			},
			function (options) { /* success*/
				//действие при успешной оплате
				t341_sendPaymentEventToStatistics($('#rec'+recid+' .js-product-name').val(), parseInt($('#rec'+recid+' .js-amount').val()));
				if ($('#rec'+recid+' .js-success-url').val() > '') {
					window.location.href = $('#rec'+recid+' .js-success-url').val();
				} else {
					$('#rec'+recid+' .t341__submit').val('Payed');
				}
				
			},
			function (reason, options) { // fail
				if ($('#rec'+recid+' .js-failure-url').val() > '') {
					window.location.href = $('#rec'+recid+' .js-failure-url').val();
				}
			}
		);
	});
}
 
function t342_sendPaymentEventToStatistics(product, price) {
	var virtPage = '/tilda/order/?product='+product+'&price='+price;
	var virtTtitle = 'Order: '+product+' = '+price;
	if(ga) {
		if (window.mainTracker == 'tilda') {
			ga('tilda.send', {'hitType':'pageview', 'page':virtPage,'title':virtTtitle});
		} else {
			ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTtitle});
		}
	}
	
	if (window.mainMetrika > '' && window[window.mainMetrika]) {
		window[window.mainMetrika].hit(virtPage, {title: virtTtitle,referer: window.location.href});
	}
}

function t342_initStripePayment(recid, publishableapi, companyname, logo) {
	
	if (typeof StripeCheckout === 'object' ) {
		t342_handleStripeApiReady(recid,publishableapi, companyname, logo);
	} else {
		if(window.stripeapiiscalled!==true){
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "https://checkout.stripe.com/checkout.js";
			document.body.appendChild(script);
			window.stripeapiiscalled=true;
		}
		
		setTimeout(function(){
			t342_initStripePayment(recid, publishableapi, companyname, logo)
		}, 10);
	}

}

function t342_handleStripeApiReady(recid, publishableapi, companyname, logo) {
	if(! window.stripehandler) {
		window.stripehandler = StripeCheckout.configure({
			key: publishableapi,
			image: logo,
			name: (companyname ? companyname : window.location.host),
			locale: 'auto'
		});
		// Close Checkout on page navigation:
		$(window).on('popstate', function() {
			window.stripehandler.close();
		});
	}
	
	$('[href^="#price"]').click(function(e){
		e.preventDefault();

		var t342click = $(this);
		var tmp = $(this).attr('href');
		// format:  #price:Cost:Product name
		var arParam = tmp.split(':');
		var productprice = parseInt(arParam[1].replace(/[^0-9\.]/g,''));
		var productname = arParam[2];
		if (! productname) {
			var tmp=$(this).closest('.r').find('.title');
			if (tmp.length > 0) {
				productname = tmp.text();
			}
			productname = $(this).text();
		}
		
		window.stripehandler.open({
			name: companyname,
			image: logo,
			description: productname,
			amount: parseInt(productprice)*100,
			currency: $('#rec'+recid+' .js-stripe-currency').val(),
			shippingAddress: $('#rec'+recid+' .js-stripe-need-shipping').val() == '1' ? true : false,
			billingAddress: $('#rec'+recid+' .js-stripe-need-shipping').val() == '1' ? true : false,
			token: function(token, args) {
				if (token && token.id) {
					t342_sendPaymentEventToStatistics(productname, productprice*100);

					var data = {};
					data.projectid = $('#allrecords').attr('data-tilda-project-id');
					data.token = token.id;
					if (token.email) {
						data.email = token.email;
					}
					data.amount = parseInt(productprice)*100;
					data.products = [{
						product: productname,
						amount: parseInt(productprice)*100
						}
					];
					data.currency = $('#rec'+recid+' .js-stripe-currency').val();
					
					$.post('https://forms.tildacdn.com/payment/stripe/', data, function(json){
							if ($('#rec'+recid+' .js-success-url').val() > '') {
								window.location.href = $('#rec'+recid+' .js-success-url').val();
							} else {
								t342click.html('<span style="vertical-align: middle;">Payed</span>');
							}

						},
						'json'
					).fail(function(){

						if ($('#rec'+recid+' .js-success-url').val() > '') {
							window.location.href = $('#rec'+recid+' .js-success-url').val();
						} else {
							t342click.html('<span style="vertical-align: middle;">Try, again</span>');
						}
					});
				}
			}
			
		});

	});
}

function t342_initCloudPayments(recid, publishableapi) {
	
	if (typeof cp == "object" && typeof cp.CloudPayments == "function") {
		t342_handleCloudPaymentsApiReady(recid,publishableapi);
	} else {
		if(window.cloudpaymentsapiiscalled!==true){
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "https://widget.cloudpayments.ru/bundles/cloudpayments";
			document.body.appendChild(script);
			window.cloudpaymentsapiiscalled=true;
		}
		
		setTimeout(function(){
			t342_initCloudPayments(recid, publishableapi);
		}, 10);
	}

}

function t342_handleCloudPaymentsApiReady(recid,publishableapi) {
	
	$('[href^="#price"]').click(function(e){
		e.preventDefault();

		var currency = $('#rec'+recid+' .js-currency').val();
		if(! window.cloudpaymentshandler) {
			var lang='';
			if ( $('#rec'+recid+' .js-language').length > 0) {
				lang = $('#rec'+recid+' .js-language').val();
			}
			if (lang == '') {
				lang = (currency == 'RUB' || currency == 'BYR' ? 'ru-RU' : 'en-US');
			}
			window.cloudpaymentshandler = new cp.CloudPayments({language: lang});
		}

		var t342click = $(this);
		var tmp = $(this).attr('href');
		// format:  #price:Cost:Product name
		var arParam = tmp.split(':');
		var productprice = parseFloat(arParam[1].replace(/[^0-9\.]/g,''));
		var productname = arParam[2];
		if (! productname) {
			var tmp=$(this).closest('.r').find('.title');
			if (tmp.length > 0) {
				productname = tmp.text();
			}
			productname = $(this).text();
		}

		/* Open Checkout with further options:*/
		window.cloudpaymentshandler.charge(
			{
				publicId: publishableapi, 
				description: productname, 
				amount: productprice,
				currency: currency, 
			},
			function (options) { /* success*/
				//действие при успешной оплате
				t342_sendPaymentEventToStatistics(productname, productprice);
				if ($('#rec'+recid+' .js-success-url').val() > '') {
					window.location.href = $('#rec'+recid+' .js-success-url').val();
				} else {
					t342click.html('OK');
				}
				
			},
			function (reason, options) { // fail
				if ($('#rec'+recid+' .js-failure-url').val() > '') {
					window.location.href = $('#rec'+recid+' .js-failure-url').val();
				}
			}
		);
	});
}

function t342_initPayment(recid){
	if ($('#allrecords').find('.t362').length == 0) {

		if ($('.js-stripe-publishable-key').length > 0) {
			t342_initStripePayment(recid, $('.js-stripe-publishable-key').val(), $('.js-stripe-company-name').val(), $('.js-stripe-logo').val());
		} else {
			if ($('.js-cp-key').length > 0) {
				t342_initCloudPayments(recid, $('.js-cp-key').val());
			} else {
				$('[href^="#price"]').click(function(e){
					e.preventDefault();
		
					var tmp = $(this).attr('href');
					// format:  #price:Cost:Product name
					var arParam = tmp.split(':');
					var price = parseInt(arParam[1].replace(/[^0-9\.]/g,''));
					var name = arParam[2];
					if (! name) {
						var tmp=$(this).closest('.r').find('.title');
						if (tmp.length > 0) {
							name = tmp.text();
						}
						name = $(this).text();
					}
			
					var $form = $('#formpayment'+recid);
					$form.find('.js_payment_product').val(name);
					$form.find('.js_payment_price').val(price);
					
					var $yabox = $('.js-yapayment-paymentbox');
					if ( $yabox.length > 0) {
						var $parent = $(this).parent();
						$($parent).css('position','relative');
						$('.js-yapayment-paymentbox').appendTo($parent);
						$('.js-yapayment-paymentbox').show();
		
						$('.r').click(function(){ $('.js-yapayment-paymentbox').hide(); $('.r').off('click'); return false; });
		
						$('.js-yapayment-paymentbox a').click(function(){
							$form.find('input[name=paymentType]').val($(this).data('payment-currency'));
							var $ctrl=$form.find('[name=customerNumber]');
							if($ctrl.length > 0) {
								$ctrl.val(new Date().getTime());
							}
							t342_sendPaymentEventToStatistics(name,price);
							$form.submit();
							return false;
						});
					} else {
						t342_sendPaymentEventToStatistics(name,price);
						$form.submit();
					}
					return false;
				});
			}
		}
	}
} 
function t347_setHeight(recid){
  var el=$('#rec'+recid);
  var div = el.find(".t347__table");
  var height=div.width() * 0.5625;
  div.height(height);
}

window.t347showvideo = function(recid){
    $(document).ready(function(){
        var el = $('#rec'+recid);
        var videourl = '';

        var youtubeid=$("#rec"+recid+" .t347__video-container").attr('data-content-popup-video-url-youtube');
        if(youtubeid > '') {
            videourl = 'https://www.youtube.com/embed/' + youtubeid;
        }

        $("#rec"+recid+" .t347__video-container").removeClass( "t347__hidden");
        $("#rec"+recid+" .t347__video-carier").html("<iframe id=\"youtubeiframe"+recid+"\" class=\"t347__iframe\" width=\"100%\" height=\"100%\" src=\"" + videourl + "?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>");
    });
}

window.t347hidevideo = function(recid){
    $(document).ready(function(){
        $("#rec"+recid+" .t347__video-container").addClass( "t347__hidden");
        $("#rec"+recid+" .t347__video-carier").html("");
    });
} 
function t349_floating_init(el){
    console.log('floating_init');

    var wnd=$(window);
    var col=el.parent();

    el.css('max-width',el.width());
    el.css('width','100%');
    col.css('min-height',el.height());

    var timer;
    var timer_count=0;
    var timer_react=5;

    wnd.scroll(function() {
        if(timer) {
            window.clearTimeout(timer);
            if(timer_count>=timer_react){
                t349_floating_scroll(el,wnd,col);
                timer_count=0;
            }
            timer_count++;
        }

        timer = window.setTimeout(function() {
                t349_floating_scroll(el,wnd,col);
                timer_count=0;    
        }, 50);
    });        


    wnd.resize(function() {
         wnd.scroll();
    });

    wnd.scroll();
}

function t349_floating_scroll(el,wnd,col){
    var wnd_height = wnd.height();
    var wnd_width = wnd.width();

    if(wnd_width<=1024){
        el.removeClass('t349__fixedTop');
        el.removeClass('t349__fixedBottom');
        el.removeClass('t349__floating');
        return('');
    }

    el.css('max-width',col.width());

    if(col.height()<el.height() && col.height()>0){
        col.height(el.height());
    }

    var el_height = el.height();
    var col_top = col.offset().top;
    var col_width = col.width();
    var col_height = col.height();
    var col_bottom = col_top + col_height;

    var wnd_top = wnd.scrollTop();
    var wnd_bottom = wnd_top + wnd_height;  

    if(wnd_top+el_height+50 >= col_bottom){
        //console.log('fixedbottom');
        el.addClass('t349__fixedBottom');
        el.removeClass('t349__fixedTop');
        el.removeClass('t349__floating');
    }else if(wnd_top+50 > col_top){
        //console.log('floating');
        el.addClass('t349__floating');
        el.removeClass('t349__fixedBottom');
        el.removeClass('t349__fixedTop');
    }else{
        //console.log('fixedtop');
        el.addClass('t349__fixedTop');
        el.removeClass('t349__fixedBottom');  
        el.removeClass('t349__floating');
    }
} 
function t351_setSize(recid){
  var el=$("#rec"+recid);
  var height = el.find(".t351__sizer").height();
  var width = el.find(".t351__sizer").width();
  var ratio = width/height;
  var imgwrapper = el.find(".t351__imgwrapper");
  var imgwidth = imgwrapper.width();
  imgwrapper.css({'height':((imgwidth/ratio)+'px')});
} 
function t353_setSize(recid){
  var el=$("#rec"+recid);
  var height = el.find(".t353__sizer").height();
  var width = el.find(".t353__sizer").width();
  var ratio = width/height;
  var imgwrapper = el.find(".t353__imgwrapper");
  var imgwidth = imgwrapper.width();
  imgwrapper.css({'height':((imgwidth/ratio)+'px')});
}

function t353_setHeight(recid){
  var currentTallest = 0,
      currentRowStart = 0,
      rowDivs = new Array(),
      $el,
      topPosition = 0;

  $('#rec'+recid+' .t353__textwrapper').each(function() {

      $el = $(this);
      $($el).height('auto')
      topPostion = $el.position().top;
 
      if (currentRowStart != topPostion) {
          for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
              rowDivs[currentDiv].height(currentTallest);
          }
          rowDivs.length = 0;
          currentRowStart = topPostion;
          currentTallest = $el.height();
          rowDivs.push($el);
      } else {
          rowDivs.push($el);
          currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
      }
      for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
          rowDivs[currentDiv].height(currentTallest);
      }
  });
      
  $('#rec'+recid+' .t353__wrapper').each(function() {

      $el = $(this);
      $($el).height('auto')
      topPostion = $el.position().top;
 
      if (currentRowStart != topPostion) {
          for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
              rowDivs[currentDiv].height(currentTallest);
          }
          rowDivs.length = 0;
          currentRowStart = topPostion;
          currentTallest = $el.height();
          rowDivs.push($el);
      } else {
          rowDivs.push($el);
          currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
      }
      for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
          rowDivs[currentDiv].height(currentTallest);
      }
  });
} 
function t354_createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function t354_readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function t354_checkPosition(recid){
  var el = $('#rec'+recid).find('.t354__opener');
  var name = el.attr('data-cookie-name');
  var time = el.attr('data-cookie-time');
  var multiplier = el.attr('data-trigger-position');
  var position = $(window).height() * multiplier;
  var value = "t354cookie";
  var cookie = t354_readCookie(name);
  if (cookie) {
    $("#rec"+recid+" .t354").html("");
  }else if (el.length){
    var scroll = $(window).scrollTop() + position;
    var objoffset = el.offset().top;
    if (scroll >= objoffset) {
      el.trigger('click');
      $("#rec"+recid+" .t354").html("");
      t354_createCookie(name,value,time);
    }
  }
} 
function t358_setHeight(recid){
  var el=$('#rec'+recid);
  var div = el.find(".t358__video-carier");
  var height=div.width() * 0.5625;
  div.height(height);
  div.parent().height(height);
}

function t358_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t358_showPopup(recid);
      t358_resizePopup(recid);
      e.preventDefault();
      if (analitics == 'yes') {
        t358_sendPopupEventToStatistics(hook);
      }
    });
  }
}

function t358_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  var vimeoid=$("#rec"+recid+" .t358__vimeo").attr('data-content-popup-video-url-vimeo');
  var videourl = '//player.vimeo.com/video/' + vimeoid;
  $("#rec"+recid+" .t358__video-carier").html("<iframe id=\"vimeoiframe"+recid+"\" class=\"t358__iframe\" width=\"100%\" height=\"100%\" src=\"" + videourl + "?title=0&byline=0&portrait=0&badge=0&color=ffffff&autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");

  popup.css('display', 'block');
  t358_setHeight(recid);
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) {
    t358_popup_close(recid);
    }
  });

  el.find('.t-popup__close').click(function(e){
    t358_popup_close(recid);
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t358_popup_close(recid); }
  });
}

function t358_popup_close(recid){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $("#rec"+recid+" .t358__video-carier").html("");
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t358_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height(),
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t358_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
} 
function t359_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t359_showPopup(recid);
      t359_resizePopup(recid);
      e.preventDefault();
      if (analitics == 'yes') {
        t359_sendPopupEventToStatistics(hook);
      }
    });
  }
}

function t359_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  t359_resizeGallery(recid);
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t359_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t359_closePopup();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t359_closePopup(); }
  });
}

function t359_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t359_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t359_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
}

function t359_showCaptions(recid){
  var el=$("#t-carousel"+recid);
  var caption = el.find('.item:nth-child(1) .t-carousel__caption-inside');
  var captioncontainer = el.find('.t-carousel__caption__container');
  captioncontainer.html(caption.html());
  caption.css('display','none');

  $("#t-carousel"+recid).on('slide.bs.carousel', function(evt) {
    var el=$("#t-carousel"+recid);
    var caption = el.find('.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .t-carousel__caption-inside');
    var captioncontainer = el.find('.t-carousel__caption__container');
    captioncontainer.html(caption.html());
    caption.css('display','none');
  });
}

function t359_positionArrows(recid){
  var el=$("#rec"+recid);
  var containerinside = el.find(".t-carousel__arrows__container_inside");
  var containeroutside = el.find(".t-carousel__arrows__container_outside");
  var inner = el.find(".t-carousel__inner");
  var arrowleft = el.find(".t-carousel__arrow_left");
  var arrowright = el.find(".t-carousel__arrow_right");
  containeroutside.css({'max-width':(arrowleft.width()+arrowright.width()+inner.width()+ 60 +'px')});
  containerinside.css({'max-width':(inner.width()+'px')});
}

function t359_resizeGallery(recid){
  var el=$("#rec"+recid);
  var element = el.find('.t-carousel__checksize');
  var sizer = el.find('.t-carousel__height');
  if (window.matchMedia('(max-width: 800px)').matches) {
    var ratio = 0.9;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 700px)').matches) {
    var ratio = 0.8;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 600px)').matches) {
    var ratio = 0.7;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 500px)').matches) {
    var ratio = 0.6;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 400px)').matches) {
    var ratio = 0.5;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(min-width: 800px)').matches) {
    element.height(sizer.height());
  }
} 
function t362_sendPopupEventToStatistics(link_recid, popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Payment popup: ';
  if (popupname.substring(0,7) == '#price:') {
      popupname = popupname.substring(7);
  }
    
  virtPage = virtPage + link_recid + '/';
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }

}

function t362_sendPaymentEventToStatistics(product, price) {
  var virtPage = '/tilda/order/?product='+product+'&price='+price;
  var virtTtitle = 'Order: '+product+' = '+price;
  if(ga) {
    if (window.mainTracker == 'tilda') {
      ga('tilda.send', {'hitType':'pageview', 'page':virtPage,'title':virtTtitle});
    } else {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTtitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTtitle,referer: window.location.href});
  }
}

function t362_showPopup(recid,name,price){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  el.find('.js-product-title').html(name+' = ' + price);
  el.find('.js-successbox').hide();
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t362_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t362_closePopup();
  });
}

function t362_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t362_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

window.t362_sendPaymentForm = function($form) {
  var recid = $form.attr('id').replace('form','');
  var $paymentForm = $('#formpayment'+recid);
  
  if($paymentForm.length == 0) {
    if ($form.data('success-url') > '') {
      window.location.href = $form.data('success-url');
    }
    return false;
  }

  var name = $paymentForm.find('.js_payment_product').val();
  var price = $paymentForm.find('.js_payment_price').val();

  if ($form.data('success-url') > '') {
    $paymentForm.find('.js_payment_successurl').val($form.data('success-url'));
  }
  if($paymentForm.find('.js_payment_successurl').val() == '') {
	$paymentForm.find('.js_payment_successurl').val(window.location.href);
  }

  if ($('#rec'+recid).find('.js-payment-type').length>0) {
    $paymentForm.find('input[name=paymentType]').val( $('#rec'+recid).find('.js-payment-type').val() );
  }

  var $ctrl=$paymentForm.find('[name=customerNumber]');

  var tildaformresult = $form.data('tildaformresult');
  if (tildaformresult && tildaformresult.tranid > '0') {
    if($ctrl.length > 0) {
      $ctrl.val(tildaformresult.tranid); /* dataid */
    }
    
    $ctrl=$paymentForm.find('.js_payment_ordernumber');
    if($ctrl.length > 0) {
      if (tildaformresult.orderid > '0') {
        $ctrl.val(tildaformresult.orderid);
      } else {
        $ctrl.val('');
      }
    }
  } else {
    if($ctrl.length > 0) {
      $ctrl.val('');
    }
  }

  t362_sendPaymentEventToStatistics(name,price);

  var actionUrl = $paymentForm.attr('action');
  if(actionUrl && actionUrl.indexOf('eshop.xml') > 0) {
    var allData = '';
    $form.find('input[type=text]').each(function(){
      var str = $(this).val();
      var cssclass=$(this).attr('class');
      if (!cssclass || cssclass.indexOf('js_pay')==-1) {
        allData = allData+''+str+'; ';
      }
      
      if (str > '' && str.indexOf('@')>0) {
        var $jqemail = $paymentForm.find('input[name=custEmail]');
        if (!$jqemail || $jqemail.length == 0) {
          $paymentForm.append("<input type=hidden name=custEmail value='"+str+"'>");
        } else {
          $jqemail.val(str);
        }
        
        $jqemail = $paymentForm.find('input[name=cps_email]');
        if (!$jqemail || $jqemail.length == 0) {
          $paymentForm.append("<input type=hidden name=cps_email value='"+str+"'>");
        } else {
          $jqemail.val(str);
        }

        if ($paymentForm.find('input[name=business]').length > 0) {
          var $jqemail = $paymentForm.find('input[name=email]');
          if (!$jqemail || $jqemail.length == 0) {
            $paymentForm.append("<input type=hidden name=email value='"+str+"'>");
          } else {
            $jqemail.val(str);
          }
        }
      }
    });
    
    var $jqord = $paymentForm.find('input[name=orderDetails]');
    if($jqord && $jqord.length > 0 && allData > '') {
      $jqord.val($jqord.val()+' ['+allData+']'); 
    }
  }

  $paymentForm.submit();
}

function t362_proccessError($form, recid) {
  var $recbox = $('#rec'+recid);

  $form.find('.js-errorbox-all').hide();
  $form.find('.js-rule-error').hide();
  $form.find('.js-error-rule-all').html('');
  $form.find('.js-successbox').hide();
  $form.find('.js-error-control-box').removeClass('js-error-control-box');

  $form.removeClass('js-send-form-error');
  $form.removeClass('js-send-form-success');

  var arError = validateForm($form);
  var $blockinput='';
  if (arError && arError.length > 0) {
    var clsInputBoxSelector = $form.data('inputbox');
    if ( !clsInputBoxSelector ) {
      clsInputBoxSelector = '.blockinput';
    }

    for(var i=0; i<arError.length; i++) {
      if (!arError[i] || !arError[i].obj) { continue; }
      
      arError[i].obj.closest(clsInputBoxSelector).addClass('js-error-control-box');
      
      for(j=0;j < arError[i].type.length;j++) {
        error = arError[i].type[j];
        var $errItem = $form.find('.js-rule-error-'+error);
        if ($errItem.length > 0){
          $errItem.css('display','block').show();
        }
      }
    }
    $form.find('.js-errorbox-all').css('display','block').show();
    return false;
  } else {
    return true;
  }
}

function t362_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');

  var el=$('#rec'+recid).find('.t362');
  $('[href^="#price"]').click(function(e){
    e.preventDefault();
    var tmp = $(this).attr('href');
    // format:  #price:Cost:Product name
    var arParam = tmp.split(':');
    var price = parseInt(arParam[1].replace(/[^0-9\.]/g,''));
    var pricetext = arParam[1];
    var name = arParam[2];
    var link_recid='0';
    var $link_rec = $(this).closest('.r');
    var htmlpayment = '';
    
    if ($link_rec.length > 0) {
      link_recid = $link_rec.attr('id');
    
      if (! name) {
        var tmp=$link_rec.find('.t-title');
        if (tmp.length > 0) {
          name = tmp.text();
        }
        name = $(this).text();
      }
    }
    

    var $recbox = $('#rec'+recid);
    $recbox.find('.js_payment_product').val(name);
    $recbox.find('.js_payment_price').val(price);
    $recbox.find('#form'+recid).show();

    if(window.tilda_payment_type>'') {
      $recbox.find('.js-tilda-payment').remove();

      /* если Я.Касса подключенная по HTTP */
      if (window.tilda_payment_type == 'yakassa_http') {
		htnlpayment = '<input class="js-tilda-payment" type="hidden" name="tilda_p_projectid" value="'+$('#allrecords').attr('data-tilda-project-id')+'">';
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_p_amount" value="'+price+'">';
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_p_product_name_0" value="'+name+'">';
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_p_product_amount_0" value="'+price+'">';

        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_srv_page" value="'+window.location.href+'">';
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_srv_referrer" value="'+(document.referrer ? document.referrer : '')+'">';
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_srv_uagent" value="'+navigator.userAgent+'">';
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_srv_cookie" value="'+document.cookie+'">';
        var $paymentForm = $('#formpayment'+recid);
        $paymentForm.append(htmlpayment);
        htmlpayment = '';

        /* заменяем обработчик формы на свой */
        $('#form'+recid).removeClass('js-form-proccess').data('success-callback','');
        //$('#rec'+recid).off('submit','.js-form-proccess');
        /*
		if($('#formpayment'+recid).attr('action') > '') {
          $('#form'+recid).data('success-url', $('#formpayment'+recid).attr('action'));
        }*/
        $('#form'+recid).addClass('js-form-yakassa-proccess');

        
        function t362_YaKassaPayment(e) {
          if (! $(this).hasClass('js-form-yakassa-proccess')) {
            return;
          }
          var $recbox = $('#rec'+recid);
          var $paymentForm = $('#formpayment'+recid);
          //var htmlpayment = '';
          
          e.stopPropagation();
          e.preventDefault();

          if (t362_proccessError($(this))) {
            var i,arFormElements = $('#form'+recid).serializeArray();
            var iCntSrv=0;
            for(i in arFormElements) {
              var elemvalue = arFormElements[i].value, elemname = arFormElements[i].name;
              
              if (elemname == 'productprice' || elemname == 'productname' || elemname == 'form-spec-comments' || elemname == 'tildaspec-cookie') {
                continue;
              }

              if (elemvalue > '' && elemvalue.indexOf('@')>0) {
                var $jqemail;
                /*
                $jqemail = $paymentForm.find('input[name=custEmail]');
                if (!$jqemail || $jqemail.length == 0) {
                  $paymentForm.append("<input type=hidden name=custEmail value='"+elemvalue+"'>");
                } else {
                  $jqemail.val(elemvalue);
                }
                */
                
                $jqemail = $paymentForm.find('input[name=cps_email]');
                if (!$jqemail || $jqemail.length == 0) {
                  $paymentForm.append("<input type=hidden name=cps_email value='"+elemvalue+"'>");
                } else {
                  $jqemail.val(elemvalue);
                }

                $jqemail = $paymentForm.find('input[name=customerNumber]');
                if (!$jqemail || $jqemail.length == 0) {
                  $paymentForm.append("<input type=hidden name=customerNumber value='"+elemvalue+"'>");
                } else {
                  $jqemail.val(elemvalue);
                }

                elemname = elemname.replace('[','_');
                elemname = elemname.replace(']','_');
                /* htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildaform_'+elemname+'" value="'+elemvalue+'">'; */
                htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildaform__'+parseInt(i)+'_'+elemname+'" value="'+elemvalue+'">';

              } else {
                
                if(arFormElements[i].name == 'formservices[]') {
                  htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_fs_'+iCntSrv+'" value="'+elemvalue+'">';
                  iCntSrv = parseInt(iCntSrv)+1;
                } else {
                  elemname = elemname.replace('[','_');
                  elemname = elemname.replace(']','_');
                  /*
htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildaform_'+elemname+'" value="'+elemvalue+'">';
*/
                  htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildaform__'+parseInt(i)+'_'+elemname+'" value="'+elemvalue+'">';
                }
              }
            }

            if ($paymentForm.find('input[name=customerNumber]').val() == '') {
              var t = new Date();
              t = t.getTime();
              $paymentForm.find('input[name=customerNumber]').val(t);
            }

            if ($paymentForm.find('input[name=orderNumber]').val() == '') {
              $paymentForm.find('input[name=orderNumber]').remove();
            }

            if ($(this).data('success-url') > '') {
              $paymentForm.find('.js_payment_successurl').val($(this).data('success-url'));
            } else {
				if ($paymentForm.find('.js_payment_successurl').val() == '') {
              		$paymentForm.find('.js_payment_successurl').val(window.location.href);
				}
            }
            
            if ($paymentForm.find('.js_payment_failurl').val() == '') {
              $paymentForm.find('.js_payment_failurl').val(window.location.href);
            }
          
            if ($recbox.find('.js-payment-type').length>0) {
              $paymentForm.find('input[name=paymentType]').val( $recbox.find('.js-payment-type').val() );
            }

            $paymentForm.append(htmlpayment);

            $paymentForm.submit();
          }
        }
        
        $('#rec'+recid+' .js-form-yakassa-proccess').off('submit');
        $('#rec'+recid+' .js-form-yakassa-proccess').on('submit', t362_YaKassaPayment);
      } else {
        var htmlpayment = '<input class="js-tilda-payment" type="hidden" name="tildapayment[projectid]" value="'+$('#allrecords').attr('data-tilda-project-id')+'">';
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildapayment[amount]" value="'+price+'">';
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildapayment[products][0][product]" value="'+name+'">';
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildapayment[products][0][amount]" value="'+price+'">';

        $('#form'+recid).append(htmlpayment);
      }
    }
    
    t362_showPopup(recid,name,pricetext);
    t362_sendPopupEventToStatistics(link_recid,name);
    t362_resizePopup(recid);

    if ($recbox.find('.js-stripe-publishable-key').length > 0) {
      var companyname = $recbox.find('.js-stripe-company-name').val()
      if(! window.stripehandler) {
        window.stripehandler = StripeCheckout.configure({
          key: $recbox.find('.js-stripe-publishable-key').val(),
          image: $recbox.find('.js-stripe-logo').val(),
          name: (companyname ? companyname : window.location.host),
          locale: 'auto'
        });
        /* Close Checkout on page navigation:*/
        $(window).on('popstate', function() {
          window.stripehandler.close();
        });
      }
      
      
      /* заменяем обработчик формы на свой */
      $('#form'+recid).removeClass('js-form-proccess').data('success-callback','');
      //$('#rec'+recid).off('submit','.js-form-proccess');
      if($('#formpayment'+recid).attr('action') > '') {
        $('#form'+recid).data('success-url', $('#formpayment'+recid).attr('action'));
      }
      $('#form'+recid).addClass('js-form-stripe-proccess');

      function t362_stripePayment(e){
        if (! $(this).hasClass('js-form-stripe-proccess')) {
          return;
        }
        var $recbox = $('#rec'+recid);
        e.stopPropagation();
        e.preventDefault();
        
        if (t362_proccessError($(this),recid)) {
          
          window.stripehandler.open({
            name: $recbox.find('.js-stripe-company-name').val(),
            image: $recbox.find('.js-stripe-logo').val(),
            description: $recbox.find('.js_payment_product').val(),
            amount:  $recbox.find('.js_payment_price').val()*100,
            currency: $recbox.find('.js-stripe-currency').val(),
            shippingAddress: $recbox.find('.js-stripe-need-shipping').val() == '1' ? true : false,
            token: function(token, args) {
              if (token && token.id) {
                t362_sendPaymentEventToStatistics(name,price*100);
                $('#form'+recid).removeClass('js-form-stripe-proccess');
                $('#form'+recid).off('submit', t362_stripePayment);

                var htmlpayment = '<input class="js-tilda-payment js-stripe-tokenoptions" type="hidden" name="tildapayment[stripetoken]" value="'+token.id+'">';
                if (token.email) {
                  htmlpayment = htmlpayment + '<input class="js-tilda-payment js-stripe-tokenoptions" type="hidden" name="tildapayment[email]" value="'+token.email+'">';
                }
                htmlpayment = htmlpayment + '<input class="js-tilda-payment js-stripe-tokenoptions" type="hidden" name="tildapayment[currency]" value="'+$recbox.find('.js-stripe-currency').val()+'">';
                
                $('#form'+recid).find('.js-stripe-tokenoptions').remove();
                $('#form'+recid).append(htmlpayment);

                $('#form'+recid).addClass('js-form-proccess').submit();
              }
            }
            
          });
          
        }
        return false;
      }

      $('#rec'+recid+' .js-form-stripe-proccess').on('submit', t362_stripePayment);

    }

    if ($recbox.find('.js-cp-key').length > 0) {

      /* заменяем обработчик формы на свой */
      $('#form'+recid).removeClass('js-form-proccess').data('success-callback','');
      //$('#rec'+recid).off('submit','.js-form-proccess');
      if($('#formpayment'+recid).attr('action') > '') {
        $('#form'+recid).data('success-url', $('#formpayment'+recid).attr('action'));
      }
      $('#form'+recid).addClass('js-form-cp-proccess');

      function t362_cloudPayments(e){
        if (! $(this).hasClass('js-form-cp-proccess')) {
          return;
        }

        var $recbox = $('#rec'+recid);
        e.stopPropagation();
        e.preventDefault();
        
        var currency = $('#rec'+recid+' .js-currency').val();
        if(! window.cloudpaymentshandler) {
          var lang='';
          if ( $('#rec'+recid+' .js-language').length > 0) {
            lang = $('#rec'+recid+' .js-language').val();
          }
          if (lang == '') {
            lang = (currency == 'RUB' || currency == 'BYR' ? 'ru-RU' : 'en-US');
          }
          window.cloudpaymentshandler = new cp.CloudPayments({language: lang});
        }
        
        if (t362_proccessError($(this),recid)) {
          $recbox.find('.t-popup').css('z-index','8000');
          var $paymentForm = $('#formpayment'+recid), $form = $('#form'+recid), email, allData={};
          $form.find('input,textarea').each(function(){
            var str = $(this).val();
            var ctrlname = $(this).attr('name');
            if ( ctrlname.substring(0,8)!= 'formserv' && ctrlname != 'form-spec-comments' && str > '') {
              allData[ctrlname] = str;
            }
            if (str > '' && str.indexOf('@')>0) {
              var $jqemail = $paymentForm.find('input[name=accountId]');
              if (!$jqemail || $jqemail.length == 0) {
                $paymentForm.append("<input type=hidden name=accountId value='"+str+"'>");
              } else {
                $jqemail.val(str);
              }
            }
          });
          email = $paymentForm.find('input[name=accountId]').val();

          if ($paymentForm.data('recurrent') == 1) {
            allData.cloudPayments = {recurrent: { interval: 'Month', period: 1 }};
            if ($paymentForm.data('recurrent-interval') > '') {
                allData.cloudPayments.recurrent.interval = $paymentForm.data('recurrent-interval');
            }
            if ($paymentForm.data('recurrent-period') > '') {
                allData.cloudPayments.recurrent.period = parseInt($paymentForm.data('recurrent-period'));
            }
          }
          
         /* $('#rec'+recid).find('.t-popup').css('z-index','8000');*/

          window.cloudpaymentshandler.charge(
            {
              publicId: $recbox.find('.js-cp-key').val(), 
              description: $recbox.find('.js_payment_product').val(), 
              amount: parseFloat($recbox.find('.js_payment_price').val()),
              currency: $recbox.find('.js-currency').val(), 
              accountId: (email ? email : ''),
              data: allData
            },
            function (options) { /* success*/
              //действие при успешной оплате
              t362_sendPaymentEventToStatistics(name, price);
              $('#form'+recid).removeClass('js-form-cp-proccess');
              $('#form'+recid).off('submit', t362_cloudPayments);
              
              $('#form'+recid).addClass('js-form-proccess').submit();
              $recbox.find('.t-popup').css('z-index','');
            },
            function (reason, options) { // fail
              if ($('#rec'+recid+' .js-failure-url').val() > '') {
                window.location.href = $('#rec'+recid+' .js-failure-url').val();
              }
              $recbox.find('.t-popup').css('z-index','');
            }
          );

        }
        return false;
      }

      $('#rec'+recid+' .js-form-cp-proccess').on('submit', t362_cloudPayments);

    }

    return false;
  });

  if ($('#rec'+recid).find('[name=tildaspec-cookie]').length > 0 ) {
    $('#rec'+recid).find('[name=tildaspec-cookie]').val(document.cookie);
  }

  if ($('#rec'+recid).find('.js-stripe-publishable-key').length > 0 && window.stripeapiiscalled!==true){
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      document.body.appendChild(script);
      window.stripeapiiscalled=true;
  }

  if ($('#rec'+recid).find('.js-cp-key').length > 0 && window.cloudpaymentsapiiscalled!==true){
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://widget.cloudpayments.ru/bundles/cloudpayments";
      document.body.appendChild(script);
      window.cloudpaymentsapiiscalled=true;
  }

} 
function t364_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t364_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t364_closePopup();
  });

  el.find('.t364__text').click(function(){
    t364_closePopup();
    t364_createCookie('t364closefb','yes',30);
  });

  el.find('a[href*=#]').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t364_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t364_closePopup(); }
  });
}

function t364_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t364_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 30,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t364_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
}

function t364_createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function t364_readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function t364_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  var cookieexist=el.attr('data-cookies-exist');
  if(cookieexist!=='yes'){
    var cookie = t364_readCookie('');
  } else var cookie = t364_readCookie('t364closefb');
  if(hook!=='' && cookie!=='yes'){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t364_showPopup(recid);
      t364_resizePopup(recid);
      e.preventDefault();
      if (analitics == 'yes') {
        t364_sendPopupEventToStatistics(hook);
      }
    });
  }
} 
function t365_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t365_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t365_closePopup();
  });

  el.find('.t365__text').click(function(){
    t365_closePopup();
    t365_createCookie('t365closefb','yes',30);
  });

  el.find('a[href*=#]').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t365_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t365_closePopup(); }
  });
}

function t365_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t365_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 30,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t365_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
}

function t365_createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function t365_readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function t365_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  var cookieexist=el.attr('data-cookies-exist');
  if(cookieexist!=='yes'){
    var cookie = t365_readCookie('');
  } else var cookie = t365_readCookie('t365closefb');
  if(hook!=='' && cookie!=='yes'){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t365_showPopup(recid);
      t365_resizePopup(recid);
      e.preventDefault();
      if (analitics == 'yes') {
        t365_sendPopupEventToStatistics(hook);
      }
    });
  }
} 
function t366_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  t366_resizeGallery(recid);
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t366_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t366_closePopup();
  });

  el.find('a[href*=#]:not(.carousel-control,.t-carousel__control)').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t366_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t366_closePopup(); }
  });
}

function t366_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t366_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t366_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
}

function t366_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t366_showPopup(recid);
      t366_resizePopup(recid);
      e.preventDefault();
      if(window.lazy=='y'){t_lazyload_update();}
      if (analitics == 'yes') {
        t366_sendPopupEventToStatistics(hook);
      }
    });
  }
}

function t366_resizeGallery(recid){
  var el=$("#rec"+recid);
  var element = el.find('.t-carousel__checksize');
  var sizer = el.find('.t-carousel__height');
  if (window.matchMedia('(max-width: 800px)').matches) {
    var ratio = 0.9;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 700px)').matches) {
    var ratio = 0.8;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 600px)').matches) {
    var ratio = 0.7;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 500px)').matches) {
    var ratio = 0.6;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 400px)').matches) {
    var ratio = 0.5;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(min-width: 800px)').matches) {
    element.height(sizer.height());
  }
} 
function t367_createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function t367_readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function t367_autoInit(recid){
  var el = $('#rec'+recid).find('.t367__opener');
  var name = el.attr('data-cookie-name');
  var time = el.attr('data-cookie-time');
  var value = "t367cookie";
  var cookie = t367_readCookie(name);
  var delay = el.attr('data-trigger-time');
  var delaytime = delay * 1000;
  if (cookie) {
    $("#rec"+recid+" .t367").html("");
  }else if (el.length){
    setTimeout(function () {
      el.trigger('click');
      $("#rec"+recid+" .t367").html("");
      t367_createCookie(name,value,time);
    }, delaytime);
  }
} 
function t368_alignVertical(recid){
  var el=$("#rec"+recid);
  el.find(".t368__video").css({'padding-bottom':(el.find(".t368__text").height()+12+'px')});
} 
function t369_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  t369_resizeGallery(recid);
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t369_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t369_closePopup();
  });

  el.find('a[href*=#]:not(.carousel-control,.t-carousel__control)').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t369_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t369_closePopup(); }
  });
}

function t369_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t369_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t369_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
}

function t369_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t369_showPopup(recid);
      t369_resizePopup(recid);
      e.preventDefault();
      if(window.lazy=='y'){t_lazyload_update();}
      if (analitics == 'yes') {
        t369_sendPopupEventToStatistics(hook);
      }
    });
  }
}

function t369_resizeGallery(recid){
  var el=$("#rec"+recid);
  var element = el.find('.t-carousel__checksize');
  var sizer = el.find('.t-carousel__height');
  if (window.matchMedia('(max-width: 800px)').matches) {
    var ratio = 0.9;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 700px)').matches) {
    var ratio = 0.8;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 600px)').matches) {
    var ratio = 0.7;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 500px)').matches) {
    var ratio = 0.6;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 400px)').matches) {
    var ratio = 0.5;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(min-width: 800px)').matches) {
    element.height(sizer.height());
  }
} 
function t376_setbg(){
    var bg="no";
    
    $(".r").each(function() {
      var el=$(this);
      //var recid=el.attr('id').replace('rec', '');
      //var offs=el.offset().top;
                  
      if(el.find('.t376').length){bg=el.find('.t376').attr('data-section-bg-color');}

	  if(el.is("[data-bg-color]") === false){

        if(bg!=="no"){
          if(el.is("[data-t376-bg-manual-setted]") === false || (el.is("[data-t376-bg-manual-setted]") && el.attr('data-t376-bg-manual-setted') !== bg) ) {
            el.css('background-color',bg);
            el.attr('data-t376-bg-manual-setted',bg);
          }
          //if(el.attr('data-t376-bg-manual-setted') !== "" && el.attr('data-t376-bg-manual-setted') !== bg) {
          //  el.css('background-color',bg);
          //  el.attr('data-t376-bg-manual-setted',bg);
          //}
        }

        if( bg==="no" && el.is("[data-t376-bg-manual-setted]") ) {
          el.css('background-color','');
          el.removeAttr('data-t376-bg-manual-setted');
        }

	  }

    });
} 
function t381_appearMenu(recid) {
    var window_width=$(window).width();
    if(window_width>980){
         $(".t381").each(function() {
                var el=$(this);
                var appearoffset=el.attr("data-appearoffset");
                var hideoffset=el.attr("data-hideoffset");
                if(appearoffset!=""){
                        if(appearoffset.indexOf('vh') > -1){
                            appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                        }

                        appearoffset=parseInt(appearoffset, 10);

                        if ($(window).scrollTop() >= appearoffset) {
                          if(el.css('visibility') == 'hidden'){
                              el.finish();
                              el.css("visibility","visible");
                              el.animate({"opacity": "1"}, 300,function() {
                              });       
                          }
                        }else{
                          el.stop();
                          el.css("visibility","hidden");
                        }
                }

                if(hideoffset!=""){
                        if(hideoffset.indexOf('vh') > -1){
                            hideoffset = Math.floor((window.innerHeight * (parseInt(hideoffset) / 100)));
                        }

                        hideoffset=parseInt(hideoffset, 10);

                        if ($(window).scrollTop()+$(window).height() >= $(document).height() - hideoffset) {
                          if(el.css('visibility') != 'hidden'){
                              el.finish();
                              el.css("visibility","hidden");
                          }
                        }else{
                          if (appearoffset!="") {
                              if($(window).scrollTop() >= appearoffset){
                                el.stop();
                                el.css("visibility","visible");
                              }
                          }else{
                              el.stop();
                              el.css("visibility","visible");
                          }
                        }
                }
         });
    }
}

 
function t383_highlight(link){
  if(link && link!=''){
	  $("a[href='"+link+"']").addClass("t-active");
  }
}


 
function t384_checkSize(recid){
  var el=$("#rec"+recid);
  var sizer = el.find('.t-carousel__height');
  var height = sizer.height();
  var width = sizer.width();
  var ratio = width/height;
  var gallerywrapper = el.find(".t-carousel__checksize");
  var gallerywidth = gallerywrapper.width();

  if (height != $(window).height()) {
    gallerywrapper.css({'height':((gallerywidth/ratio)+'px')});
  }
} 
    var t385 = {};
    
    t385.equalheight = function(recid) {

        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
            
        $('#rec'+recid+' .t385__textwrapper').each(function() {
     
            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;
       
            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0;
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    };
 
    var t386 = {};
    
    t386.equalheight = function(recid) {

        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
            
        $('#rec'+recid+' .t386__textwrapper').each(function() {
     
            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;
       
            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0;
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    };
 
function t389_scrollToTop(){
  $('html, body').animate({scrollTop: 0}, 700);								
}	  
function t390_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t390_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t390_closePopup();
  });

  el.find('a[href*=#]').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t390_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t390_closePopup(); }
  });
}

function t390_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t390_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t390_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
}

function t390_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t390_showPopup(recid);
      t390_resizePopup(recid);
      e.preventDefault();
      if(window.lazy=='y'){t_lazyload_update();}
      if (analitics == 'yes') {
        t390_sendPopupEventToStatistics(hook);
      }
    });
  }
} 
function t391_checkSize(recid){
  var el=$("#rec"+recid);
  var cover = el.find('.t-cover');
  var carrier = el.find('.t-cover__carrier');
  var filter = el.find('.t-cover__filter');
  var height = el.find('.t391__firstcol').height() + el.find('.t391__secondcol').height();
  if (window.matchMedia('(max-width: 960px)').matches) {
    cover.css('height',height);
    carrier.css('height',height);
    filter.css('height',height);
  }
} 
function t393_appearMenu(recid) {
    var window_width=$(window).width();
    if(window_width>980){
         $(".t393").each(function() {
                var el=$(this);
                var appearoffset=el.attr("data-appearoffset");
                var hideoffset=el.attr("data-hideoffset");
                if(appearoffset!=""){
                        if(appearoffset.indexOf('vh') > -1){
                            appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                        }

                        appearoffset=parseInt(appearoffset, 10);

                        if ($(window).scrollTop() >= appearoffset) {
                          if(el.css('visibility') == 'hidden'){
                              el.finish();
                              el.css("visibility","visible");
                              el.animate({"opacity": "1"}, 300,function() {
                              });       
                          }
                        }else{
                          el.stop();
                          el.css("visibility","hidden");
                        }
                }

                if(hideoffset!=""){
                        if(hideoffset.indexOf('vh') > -1){
                            hideoffset = Math.floor((window.innerHeight * (parseInt(hideoffset) / 100)));
                        }

                        hideoffset=parseInt(hideoffset, 10);

                        if ($(window).scrollTop()+$(window).height() >= $(document).height() - hideoffset) {
                          if(el.css('visibility') != 'hidden'){
                              el.finish();
                              el.css("visibility","hidden");
                          }
                        }else{
                          if (appearoffset!="") {
                              if($(window).scrollTop() >= appearoffset){
                                el.stop();
                                el.css("visibility","visible");
                              }
                          }else{
                              el.stop();
                              el.css("visibility","visible");
                          }
                        }
                }
         });
    }
}

 
function t395_init(recid){
  var el=$('#rec'+recid);
  el.find('.t395__tab').click(function() {
    el.find('.t395__tab').removeClass('t395__tab_active');
    $(this).addClass('t395__tab_active');
  t395_alltabs_updateContent(recid);
    t395_updateSelect(recid);
    $('.t347').trigger('displayChanged');
    $('.t346').trigger('displayChanged');
    $('.t351, .t353, .t341, .t404, .t385, .t386, .t409, .t384, .t279, .t349, .t433, .t418, .t268').trigger('displayChanged');
    setTimeout(function(){
      $('.t351, .t353, .t341, .t404, .t385, .t386, .t409, .t384, .t279, .t349, .t410, .t433, .t418').trigger('displayChanged');
    },50);
    if(window.lazy=='y'){t_lazyload_update();}
  });
  t395_alltabs_updateContent(recid);
  t395_updateContentBySelect(recid);
  var bgcolor=el.css("background-color");
  var bgcolor_target=el.find(".t395__select, .t395__firefoxfix");
  bgcolor_target.css("background", bgcolor);
}

function t395_alltabs_updateContent(recid){
  var el=$('#rec'+recid);
  el.find(".t395__tab").each(function (i) {
    var rec_ids = $(this).attr('data-tab-rec-ids').split(',');
  rec_ids.forEach(function(rec_id, i, arr) {
    var rec_el=$('#rec'+rec_id);
    rec_el.attr('data-connect-with-tab','yes');
    rec_el.attr('data-animationappear','off');
    rec_el.addClass('t379__off');
  });
  });

  el.find(".t395__tab_active").each(function (i) {
    var rec_ids = $(this).attr('data-tab-rec-ids').split(',');
  rec_ids.forEach(function(rec_id, i, arr) {
    //console.log(rec_id);
    var rec_el=$('#rec'+rec_id);
    rec_el.removeClass('t379__off');
    rec_el.css('opacity','');
  });
  });
}

function t395_updateContentBySelect(recid) {
  var el=$('#rec'+recid);
  el.find(".t395__select").change(function() {
    var select_val = el.find(".t395__select").val();
    var tab_index = el.find(".t395__tab[data-tab-rec-ids='" + select_val + "']");
    tab_index.trigger('click');
  });
}

function t395_updateSelect(recid) {
  var el=$('#rec'+recid);
  var current_tab = el.find(".t395__tab_active").attr('data-tab-rec-ids');
  var el_select=el.find(".t395__select");
  el_select.val(current_tab);
}
 
function t396_init(recid){
  var data='';
  var res=t396_detectResolution();
  t396_initTNobj();    
  t396_switchResolution(res);
  t396_updateTNobj();
  t396_artboard_build(data,recid);

  $( window ).resize(function () {
    tn_console('>>>> t396: Window on Resize event >>>>');
    t396_waitForFinalEvent(function(){

        var ww=$(window).width();
        var res=t396_detectResolution();
        var ab=$('#rec'+recid).find('.t396__artboard');
        t396_switchResolution(res);
        t396_updateTNobj();
        t396_ab__renderView(ab);
        t396_allelems__renderView(ab);

      }, 500, 'resizeruniqueid'+recid);
  });

  $( window ).load(function() {
	  var ab=$('#rec'+recid).find('.t396__artboard');
      t396_allelems__renderView(ab);
  });
}

function t396_detectResolution(){
    var ww=$(window).width();
    var res;
    res=1200;
    if(ww<1200){res=960;}
    if(ww<960){res=640;}
    if(ww<640){res=480;}
    if(ww<480){res=320;}
	return(res);
}

function t396_initTNobj(){
	tn_console('func: initTNobj');	
	window.tn={};
	
	window.tn.canvas_min_sizes = ["320","480","640","960","1200"];
	window.tn.canvas_max_sizes = ["480","640","960","1200",""];	
	window.tn.ab_fields = ["height","width","bgcolor","bgimg","bgattachment","bgposition","filteropacity","filtercolor","filteropacity2","filtercolor2","height_vh","valign"];	
}

function t396_updateTNobj(){
	tn_console('func: updateTNobj');		
	
	window.tn.window_width = parseInt($(window).width());
	window.tn.window_height = parseInt($(window).height());

	if(window.tn.curResolution==1200){
		window.tn.canvas_min_width = 1200;
		window.tn.canvas_max_width = window.tn.window_width;
	}
	if(window.tn.curResolution==960){
		window.tn.canvas_min_width = 960;
		window.tn.canvas_max_width = 1200;
	}
	if(window.tn.curResolution==640){
		window.tn.canvas_min_width = 640;
		window.tn.canvas_max_width = 960;
	}
	if(window.tn.curResolution==480){
		window.tn.canvas_min_width = 480;
		window.tn.canvas_max_width = 640;
	}
	if(window.tn.curResolution==320){
		window.tn.canvas_min_width = 320;
		window.tn.canvas_max_width = 480;
	}
	
	window.tn.grid_width = window.tn.canvas_min_width;	
	window.tn.grid_offset_left = parseFloat( (window.tn.window_width-window.tn.grid_width)/2 );	

}


var t396_waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

  
function t396_switchResolution(res,resmax){
	tn_console('func: switchResolution');
	
	if(typeof resmax=='undefined'){
		if(res==1200)resmax='';
		if(res==960)resmax=1200;
		if(res==640)resmax=960;
		if(res==480)resmax=640;
		if(res==320)resmax=480;
	}
	
	window.tn.curResolution=res;
	window.tn.curResolution_max=resmax;
}

function t396_artboard_build(data,recid){
  tn_console('func: t396_artboard_build. Recid:'+recid);
  tn_console(data);    

  /* set style to artboard */
  var ab=$('#rec'+recid).find('.t396__artboard');

  t396_ab__renderView(ab);

  /* create elements */
  ab.find('.tn-elem').each(function() {
      var item=$(this);
      if(item.attr('data-elem-type')=='text'){
          t396_addText(ab,item);
      }
      if(item.attr('data-elem-type')=='image'){
          t396_addImage(ab,item);
      }
      if(item.attr('data-elem-type')=='shape'){
          t396_addShape(ab,item);
      }		
      if(item.attr('data-elem-type')=='button'){
          t396_addButton(ab,item);
      }	
  });

  $('#rec'+recid).find('.t396__artboard').removeClass('rendering').addClass('rendered');

}

function t396_ab__renderView(ab){
	var fields = window.tn.ab_fields;
	
	for ( var i = 0; i < fields.length; i++ ) {
		t396_ab__renderViewOneField(ab,fields[i]);
	}

	var ab_min_height=t396_ab__getFieldValue(ab,'height');
	var ab_max_height=t396_ab__getHeight(ab);

	var offset_top=0;
	if(ab_min_height==ab_max_height){
	  offset_top=0;
	}else{
	  var ab_valign=t396_ab__getFieldValue(ab,'valign');
      if(ab_valign=='top'){
          offset_top=0;
      }else if(ab_valign=='center'){
          offset_top=parseFloat( (ab_max_height-ab_min_height)/2 ).toFixed(1);
      }else if(ab_valign=='bottom'){
          offset_top=parseFloat( (ab_max_height-ab_min_height) ).toFixed(1);
      }else if(ab_valign=='stretch'){
          offset_top=0;
		  ab_min_height=ab_max_height;
      }else{
          offset_top=0;
	  }
	}

	ab.attr('data-artboard-proxy-min-offset-top',offset_top);
	ab.attr('data-artboard-proxy-min-height',ab_min_height);
	ab.attr('data-artboard-proxy-max-height',ab_max_height);
}

function t396_addText(ab,el){
	tn_console('func: addText');
				
	/* add data atributes */
	var fields_str='top,left,width,container,axisx,axisy,animtriggerhook,animduration,animoffset,animparallax,widthunits,leftunits,topunits';
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);		

	/* render elem view */	
	t396_elem__renderView(el);
	
}

function t396_addImage(ab,el){
	tn_console('func: addImage');	
			
	/* add data atributes */
	var fields_str='img,width,filewidth,fileheight,top,left,container,axisx,axisy,animtriggerhook,animduration,animoffset,animparallax,widthunits,leftunits,topunits';
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);	
		

	/* render elem view */	
	t396_elem__renderView(el);

	el.find('img').on("load", function() {
	  t396_elem__renderViewOneField(el,'top');
	}).each(function() {
	  if(this.complete) $(this).load();
	}); 
	
    el.find('img').on('tuwidget_done', function(e, file) { 
		t396_elem__renderViewOneField(el,'top');
    });

}

function t396_addShape(ab,el){
	tn_console('func: addShape');		

	/* add data atributes */
	var fields_str='width,height,top,left,';
	fields_str+='container,axisx,axisy,animtriggerhook,animduration,animoffset,animparallax,widthunits,heightunits,leftunits,topunits';	
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);	
		
	/* render elem view */	
	t396_elem__renderView(el);
	
}

function t396_addButton(ab,el){
	tn_console('func: addButton');
	
	/* add data atributes */
	var fields_str='top,left,width,height,container,axisx,axisy,caption,animtriggerhook,animduration,animoffset,animparallax,leftunits,topunits';
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);
		
	/* render elem view */	
	t396_elem__renderView(el);

	return(el);	
}

function t396_elem__setFieldValue(el,prop,val,flag_render,flag_updateui,res){
	if(res=='')res=window.tn.curResolution;	
	if(res<1200 && prop!='zindex'){
		el.attr('data-field-'+prop+'-res-'+res+'-value',val);
	}else{
		el.attr('data-field-'+prop+'-value',val);		
	}
	if(flag_render=='render')elem__renderViewOneField(el,prop);
	if(flag_updateui=='updateui')panelSettings__updateUi(el,prop,val);
}

function t396_elem__getFieldValue(el,prop){
	
	var res=window.tn.curResolution;
	
	var r;
		
	if(res<1200){
		
		if(res==960){
			r=el.attr('data-field-'+prop+'-res-960-value');			
			if(typeof r=='undefined'){
				r=el.attr('data-field-'+prop+'-value');
			}
		}

		if(res==640){
			r=el.attr('data-field-'+prop+'-res-640-value');			
			if(typeof r=='undefined'){
				r=el.attr('data-field-'+prop+'-res-960-value');
				if(typeof r=='undefined'){
					r=el.attr('data-field-'+prop+'-value');
				}
			}
		}

		if(res==480){
			r=el.attr('data-field-'+prop+'-res-480-value');			
			if(typeof r=='undefined'){
				r=el.attr('data-field-'+prop+'-res-640-value');
				if(typeof r=='undefined'){
					r=el.attr('data-field-'+prop+'-res-960-value');
					if(typeof r=='undefined'){
						r=el.attr('data-field-'+prop+'-value');
					}
				}
			}
		}

		if(res==320){
			r=el.attr('data-field-'+prop+'-res-320-value');			
			if(typeof r=='undefined'){
				r=el.attr('data-field-'+prop+'-res-480-value');
				if(typeof r=='undefined'){
					r=el.attr('data-field-'+prop+'-res-640-value');
					if(typeof r=='undefined'){
						r=el.attr('data-field-'+prop+'-res-960-value');
						if(typeof r=='undefined'){
							r=el.attr('data-field-'+prop+'-value');
						}
					}
				}
			}
		}
						
	}else{
		r=el.attr('data-field-'+prop+'-value');		
	}		

	return(r);
}

function t396_elem__renderView(el){
	tn_console('func: elem__renderView');	
	var fields=el.attr('data-fields');
	if(! fields) {
		return false;
	}
	fields = fields.split(',');
	
	/* set to element value of every field  via css */	
	for ( var i = 0; i < fields.length; i++ ) {
		t396_elem__renderViewOneField(el,fields[i]);
	}
		
}

function t396_elem__renderViewOneField(el,field){

	var value=t396_elem__getFieldValue(el,field);

	if(field=='left'){
		value = t396_elem__convertPosition__Local__toAbsolute(el,field,value);
		el.css('left',parseFloat(value).toFixed(1)+'px');
	}

	if(field=='top'){
		value = t396_elem__convertPosition__Local__toAbsolute(el,field,value);
		el.css('top',parseFloat(value).toFixed(1)+'px');
	}
		
	if(field=='width'){
		value = t396_elem__getWidth(el,value);
        el.css('width',parseFloat(value).toFixed(1)+'px');
	}
	
	if(field=='height'){
		value=t396_elem__getHeight(el,value);
		el.css('height', parseFloat(value).toFixed(1)+'px');
	}	
	
	if(field=='container'){
		t396_elem__renderViewOneField(el,'left');
		t396_elem__renderViewOneField(el,'top');
	}

	if(field=='width' || field=='height' || field=='fontsize' || field=='fontfamily' || field=='letterspacing' || field=='fontweight' || field=='img'){
		t396_elem__renderViewOneField(el,'left');
		t396_elem__renderViewOneField(el,'top');
	}


}
                    
function t396_elem__convertPosition__Local__toAbsolute(el,field,value){
	
	value = parseInt(value);			
	
	if(field=='left'){

		var el_container,offset_left,el_container_width,el_width;
		var container=t396_elem__getFieldValue(el,'container');
		
		if(container=='grid'){
			el_container = 'grid';
			offset_left = window.tn.grid_offset_left;
			el_container_width = window.tn.grid_width;
		}else{
			el_container = 'window';
			offset_left = 0;
			el_container_width = window.tn.window_width;			
		}		
			
		/* fluid or not	*/
		var el_leftunits=t396_elem__getFieldValue(el,'leftunits');
		if(el_leftunits=='%'){

				value = t396_roundFloat( el_container_width * value/100 );
			
		}
			
        value = offset_left + value;

        var el_axisx=t396_elem__getFieldValue(el,'axisx');

        if(el_axisx=='center'){
			el_width = t396_elem__getWidth(el);
            value = el_container_width/2 - el_width/2 + value;
        }

        if(el_axisx=='right'){
            el_width = t396_elem__getWidth(el);
            value = el_container_width - el_width + value;
        }
		
	}	
	
	if(field=='top'){
		var ab=el.parent();

		var el_container,offset_top,el_container_height,el_height;
		var container=t396_elem__getFieldValue(el,'container');
		
		if(container=='grid'){
			el_container = 'grid';
			offset_top = parseFloat( ab.attr('data-artboard-proxy-min-offset-top') );
			el_container_height = parseFloat( ab.attr('data-artboard-proxy-min-height') );
		}else{
			el_container = 'window';
			offset_top = 0;
			el_container_height = parseFloat( ab.attr('data-artboard-proxy-max-height') );
		}

		/* fluid or not	*/
		var el_topunits=t396_elem__getFieldValue(el,'topunits');
		if(el_topunits=='%'){

				value = ( el_container_height * (value/100) );
			
		}

        value = offset_top + value;

        var el_axisy=t396_elem__getFieldValue(el,'axisy');

        if(el_axisy=='center'){
			/* var el_height=parseFloat(el.innerHeight()); */
			el_height=t396_elem__getHeight(el);
            value = el_container_height/2 - el_height/2 + value;
        }

        if(el_axisy=='bottom'){
			/* var el_height=parseFloat(el.innerHeight()); */
			el_height=t396_elem__getHeight(el);
            value = el_container_height - el_height + value;
        }	
                                                   
	}		
	
	return(value);				
	
}

                                          
function t396_ab__setFieldValue(ab,prop,val,res){
	/* tn_console('func: ab__setFieldValue '+prop+'='+val);	*/
	
	if(res=='')res=window.tn.curResolution;
	
	if(res<1200){
		ab.attr('data-artboard-'+prop+'-res-'+res,val);
	}else{
		ab.attr('data-artboard-'+prop,val);		
	}
	
}

function t396_ab__getFieldValue(ab,prop){
	
	var res=window.tn.curResolution;
	
	var r;
		
	if(res<1200){
		
		if(res==960){
			r=ab.attr('data-artboard-'+prop+'-res-960');			
			if(typeof r=='undefined'){
				r=ab.attr('data-artboard-'+prop+'');
			}
		}

		if(res==640){
			r=ab.attr('data-artboard-'+prop+'-res-640');			
			if(typeof r=='undefined'){
				r=ab.attr('data-artboard-'+prop+'-res-960');
				if(typeof r=='undefined'){
					r=ab.attr('data-artboard-'+prop+'');
				}
			}
		}

		if(res==480){
			r=ab.attr('data-artboard-'+prop+'-res-480');			
			if(typeof r=='undefined'){
				r=ab.attr('data-artboard-'+prop+'-res-640');
				if(typeof r=='undefined'){
					r=ab.attr('data-artboard-'+prop+'-res-960');
					if(typeof r=='undefined'){
						r=ab.attr('data-artboard-'+prop+'');
					}
				}
			}
		}

		if(res==320){
			r=ab.attr('data-artboard-'+prop+'-res-320');			
			if(typeof r=='undefined'){
				r=ab.attr('data-artboard-'+prop+'-res-480');
				if(typeof r=='undefined'){
					r=ab.attr('data-artboard-'+prop+'-res-640');
					if(typeof r=='undefined'){
						r=ab.attr('data-artboard-'+prop+'-res-960');
						if(typeof r=='undefined'){
							r=ab.attr('data-artboard-'+prop+'');
						}
					}
				}
			}
		}
						
	}else{
		r=ab.attr('data-artboard-'+prop);		
	}		

	return(r);
}

function t396_ab__renderViewOneField(ab,field){	
	var value=t396_ab__getFieldValue(ab,field);		

}

function t396_allelems__renderView(ab){
	tn_console('func: allelems__renderView: abid:'+ab.attr('data-artboard-recid'));
	ab.find(".tn-elem").each(function() {	
		t396_elem__renderView($(this));
	});
	
}

function t396_ab__filterUpdate(ab){
	var filter=ab.find('.t396__filter');
	var c1=filter.attr('data-filtercolor-rgb');
	var c2=filter.attr('data-filtercolor2-rgb');
	var o1=filter.attr('data-filteropacity');
	var o2=filter.attr('data-filteropacity2');
	if((typeof c2=='undefined' || c2=='') && (typeof c1!='undefined' && c1!='')){
		filter.css("background-color", "rgba("+c1+","+o1+")");
	}else if((typeof c1=='undefined' || c1=='') && (typeof c2!='undefined' && c2!='')){
		filter.css("background-color", "rgba("+c2+","+o2+")");		
	}else if(typeof c1!='undefined' && typeof c2!='undefined' && c1!='' && c2!=''){
		filter.css({
			background: "-webkit-gradient(linear, left top, left bottom, from(rgba("+c1+","+o1+")), to(rgba("+c2+","+o2+")) )" 
		});	
	}else{
		filter.css("background-color", 'transparent');
	}
}

function t396_ab__getHeight(ab, ab_height){
	if(typeof ab_height=='undefined')ab_height=t396_ab__getFieldValue(ab,'height');
	ab_height=parseFloat(ab_height);

    /* get Artboard height (fluid or px) */
    var ab_height_vh=t396_ab__getFieldValue(ab,'height_vh');
    if(ab_height_vh!=''){
          ab_height_vh=parseFloat(ab_height_vh);
          if(isNaN(ab_height_vh)===false){
              var ab_height_vh_px=parseFloat( window.tn.window_height * parseFloat(ab_height_vh/100) );
              if( ab_height < ab_height_vh_px ){
                  ab_height=ab_height_vh_px;
              }
          }
    }
                                               
	return(ab_height);
}
                                                       
function t396_hex2rgb(hexStr){
    /*  note: hexStr should be #rrggbb */
    var hex = parseInt(hexStr.substring(1), 16);
    var r = (hex & 0xff0000) >> 16;
    var g = (hex & 0x00ff00) >> 8;
    var b = hex & 0x0000ff;
    return [r, g, b];
}

String.prototype.t396_replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};


function t396_elem__getWidth(el,value){
	if(typeof value=='undefined')value=parseFloat( t396_elem__getFieldValue(el,'width') );
	var el_widthunits=t396_elem__getFieldValue(el,'widthunits');
	if(el_widthunits=='%'){
		var el_container=t396_elem__getFieldValue(el,'container');
		if(el_container=='window'){
			value=parseFloat( window.tn.window_width * parseFloat( parseInt(value)/100 ) );
		}else{
			value=parseFloat( window.tn.grid_width * parseFloat( parseInt(value)/100 ) );
		}
	}
	return(value);	
}

function t396_elem__getHeight(el,value){

	if(typeof value=='undefined')value=t396_elem__getFieldValue(el,'height');	

	value=parseFloat(value);
	
	if(el.attr('data-elem-type')=='shape'){		
		
		var el_heightunits=t396_elem__getFieldValue(el,'heightunits');
		
		if(el_heightunits=='%'){
		
            var ab=el.parent();
            var ab_min_height=parseFloat( ab.attr('data-artboard-proxy-min-height') );
			var ab_max_height=parseFloat( ab.attr('data-artboard-proxy-max-height') );

			var el_container=t396_elem__getFieldValue(el,'container');
			if(el_container=='window'){
				value=parseFloat( ab_max_height * parseFloat( value/100 ) );
			}else{
				value=parseFloat( ab_min_height * parseFloat( value/100 ) );
			}
			
		}		
		
	}else if(el.attr('data-elem-type')=='button'){
		
		value = value;
		
	}else{
		
		value =  parseFloat(el.innerHeight());
		
	}
	
	return(value);	
}

function t396_roundFloat(n){
	n = Math.round(n * 100) / 100;
	return(n);
}

function tn_console(str){
	if(window.tn_comments==1)console.log(str);
}
 
function t397_init(recid){
  var el=$('#rec'+recid);
  el.find('.t397__tab').click(function() {
    el.find('.t397__tab').removeClass('t397__tab_active');
    $(this).addClass('t397__tab_active');
	t397_alltabs_updateContent(recid);
    t397_updateSelect(recid);
    $('.t347').trigger('displayChanged');
    $('.t346').trigger('displayChanged');
    $('.t351, .t353, .t341, .t404, .t385, .t386, .t412, .t268, .t425, .t409, .t384, .t279, .t428, .t418, .t433, .t121, .t478, .t498, .t552, .t544, .t554, .t545').trigger('displayChanged');
    setTimeout(function(){
      $('.t351, .t353, .t341, .t404, .t385, .t386, .t412, .t268, .t425, .t409, .t384, .t279, .t428, .t433, .t545').trigger('displayChanged');
    },50);
    if(window.lazy=='y'){t_lazyload_update();}
  });
  t397_alltabs_updateContent(recid);
  t397_updateContentBySelect(recid);
  var bgcolor=el.css("background-color");
  var bgcolor_target=el.find(".t397__select, .t397__firefoxfix");
  bgcolor_target.css("background-color", bgcolor);
}

function t397_alltabs_updateContent(recid){
  var el=$('#rec'+recid);
  el.find(".t397__tab").each(function (i) {
    var rec_ids = $(this).attr('data-tab-rec-ids').split(',');
	rec_ids.forEach(function(rec_id, i, arr) {
	  var rec_el=$('#rec'+rec_id);
	  rec_el.attr('data-connect-with-tab','yes');
	  rec_el.attr('data-animationappear','off');
	  rec_el.addClass('t379__off');
	});
  });

  el.find(".t397__tab_active").each(function (i) {
    var rec_ids = $(this).attr('data-tab-rec-ids').split(',');
	rec_ids.forEach(function(rec_id, i, arr) {
	  //console.log(rec_id);
	  var rec_el=$('#rec'+rec_id);
	  rec_el.removeClass('t379__off');
	  rec_el.css('opacity','');
	});
  });
}

function t397_updateContentBySelect(recid) {
  var el=$('#rec'+recid);
  el.find(".t397__select").change(function() {
    var select_val = el.find(".t397__select").val();
    var tab_index = el.find(".t397__tab[data-tab-rec-ids='" + select_val + "']");
    tab_index.trigger('click');
  });
}

function t397_updateSelect(recid) {
  var el=$('#rec'+recid);
  var current_tab = el.find(".t397__tab_active").attr('data-tab-rec-ids');
  var el_select=el.find(".t397__select");
  el_select.val(current_tab);
}
 
function t398_init(recid){
  t398_addArrow(recid);
  t398_highlight();
  $('#rec'+recid).find(".t398").each(function() {
	var $hook=$(this).attr('data-tooltip-hook');
    var $margin=$(this).attr('data-tooltip-margin');
    if($hook!==''){
      var $obj = $('a[href="'+$hook+'"]');
      var $content=$(this).find('.t398__content').html();
      if($hook.charAt(0)=='#'){var touchDevices=true;}else{var touchDevices=false;}
      var position=$(this).attr('data-tooltip-position');
      if(position!==''){}else{position='top';}
      $obj.click(function(e){
        e.preventDefault();
      });
      $obj.tooltipster({
        'theme':'t398__tooltipster-noir t398__tooltipster-noir_'+recid+'',
        'contentAsHTML': true,
        'content': $content,
        interactive:true,
        touchDevices:touchDevices,
        position:position,
        functionReady: function(origin, tooltip) {
          $(".t398__tooltipster-noir_"+recid+"").css("margin-top", $margin);
        }
      });
    }
  });
}

function t398_addArrow(recid){
  $('#rec'+recid).find(".t398").each(function() {
	var $hook=$(this).attr('data-tooltip-hook');
    var $obj = $('a[href="'+$hook+'"]');
    var arrow=$(this).attr('data-add-arrow');
    var arrow_height = $obj.height();
    if($hook!=='' && arrow!==''){
      $obj.append("<div class=\"t398__arrow t398__arrow_"+recid+"\" style=\"height: "+arrow_height+"\px;\"></div>");
    }
  });
}

function t398_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t398__list_item a[href='"+url+"']").addClass("t-active");
  $(".t398__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t398__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t398__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t398__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t398__list_item a[href='/"+pathname+"/']").addClass("t-active");
}
 
function t400_init(recid){
  var el=$('#rec'+recid);
  el.find('.t400__submit').click(function() {
    var rec_ids = $(this).attr('data-hidden-rec-ids').split(',');
	rec_ids.forEach(function(rec_id, i, arr) {
	  var rec_el=$('#rec'+rec_id);
	  rec_el.removeClass('t400__off');
	  rec_el.css('opacity','');
	});
    $('.t351, .t353, .t341, .t385, .t226, .t404, .t412, .t552').trigger('displayChanged');
    setTimeout(function(){
      $('.t351, .t353, .t341, .t410, .t385').trigger('displayChanged');
    },50);
    el.hide();
    if(window.lazy=='y'){t_lazyload_update();}
  });
  t400_alltabs_updateContent(recid);
  t400_checkSize(recid);
}

function t400_alltabs_updateContent(recid){
  var el=$('#rec'+recid);
  el.find(".t400__submit").each(function (i) {
    var rec_ids = $(this).attr('data-hidden-rec-ids').split(',');
	rec_ids.forEach(function(rec_id, i, arr) {
	  var rec_el=$('#rec'+rec_id);
	  rec_el.attr('data-animationappear','off');
	  rec_el.addClass('t400__off');
	});
  });
}

function t400_checkSize(recid){
  var el=$("#rec"+recid).find(".t400__submit");
  if(el.length){
    var btnheight = el.height();
    var textheight = el[0].scrollHeight;
    if (btnheight < textheight) {
      var btntext = el.text();
      el.addClass("t400__submit-overflowed");
      el.html("<span class=\"t400__text\">" + btntext + "</span>");
    }
  }
} 
function t403_showMore(recid) {
  var el=$('#rec'+recid).find(".t403");
  el.find(".t403__container-table").hide();
  cards_size = el.find(".t403__container-table").size();
  cards_count=parseInt(el.attr("data-show-count"));
  x=cards_count;
  y=cards_count;
  el.find('.t403__container-table:lt('+x+')').show();
  el.find('.t403__showmore').click(function () {
      x= (x+y <= cards_size) ? x+y : cards_size;
      el.find('.t403__container-table:lt('+x+')').show();
      if(x == cards_size){
          el.find('.t403__showmore').hide();
      }
  });
} 
function t404_unifyHeights() {
    $('.t404 .t-container').each(function() {
        var highestBox = 0;
        $('.t404__title', this).each(function(){
          $(this).css("height","auto");
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
          $('.t404__title',this).css('height', highestBox);   
        }else{
          $('.t404__title',this).css('height', "auto");    
        }
        
        $('.t404__descr', this).css('height', '');
        var highestBox = 0;
        $('.t404__descr', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
          $('.t404__descr',this).css('height', highestBox);   
        }else{
          $('.t404__descr',this).css('height', "auto");    
        }
                
    });
}

function t404_unifyHeightsTextwrapper() {
    $('.t404 .t-container').each(function() {
        var highestBox = 0;
        $('.t404__textwrapper', this).each(function(){
          $(this).css("height","auto");
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
          $('.t404__textwrapper',this).css('height', highestBox);   
        }else{
          $('.t404__textwrapper',this).css('height', "auto");    
        }      
    });
}

function t404_showMore(recid) {
  var el=$('#rec'+recid).find(".t404");
  el.find(".t-col").hide();
  var cards_size = el.find(".t-col").size();
  var cards_count=parseInt(el.attr("data-show-count"));
  var x=cards_count;
  var y=cards_count;
  el.find('.t-col:lt('+x+')').show();
  el.find('.t404__showmore').click(function () {
      x= (x+y <= cards_size) ? x+y : cards_size;
      el.find('.t-col:lt('+x+')').show();
      if(x == cards_size){
          el.find('.t404__showmore').hide();
      }
      $('.t404').trigger('displayChanged');
      setTimeout(function(){
        $('.t404').trigger('displayChanged');
      },50);
  });
}



 
function t405_showMore(recid) {
  var el=$('#rec'+recid).find(".t405");
  el.find(".t-col").hide();
  cards_size = el.find(".t-col").size();
  cards_count=parseInt(el.attr("data-show-count"));
  x=cards_count;
  y=cards_count;
  el.find('.t-col:lt('+x+')').show();
  el.find('.t405__showmore').click(function () {
      x= (x+y <= cards_size) ? x+y : cards_size;
      el.find('.t-col:lt('+x+')').show();
      if(x == cards_size){
          el.find('.t405__showmore').hide();
      }
      $('.t405').trigger('displayChanged');
  });
}



 
function t409_unifyHeights(recid) {
  if($(window).width()>=960){
    var el = $("#rec"+recid);
    var imgwidth = el.find(".t409__img").width();
    var imgwrapperwidth = el.find(".t409__imgwrapper").css("max-width");
    var imgwrapperwidthpx = parseInt(imgwrapperwidth, 10);
    var margin = imgwrapperwidthpx - imgwidth;
    el.find(".t409__img").css("margin-left", margin);
  }
}
 
function t410_init(recid) {
  var el=$('#rec'+recid);
  var firstimgurl = el.find(".t410__wrapper").attr("data-juxtapose-imgurl-first");
  var firstimgdescr = el.find(".t410__wrapper").attr("data-juxtapose-imgdescr-first");
  var secondimgurl = el.find(".t410__wrapper").attr("data-juxtapose-imgurl-second");
  var secondimgdescr = el.find(".t410__wrapper").attr("data-juxtapose-imgdescr-second");
  new juxtapose.JXSlider('#t410-juxtapose__' + recid + '', [{
      src: firstimgurl,
      label: firstimgdescr
  }, {
      src: secondimgurl,
      label: secondimgdescr
  }], {
      animate: false,
      showLabels: true,
      showCredits: false,
      startingPosition: '50%',
      makeResponsive: true
  });
}

function t410_update(recid) {
  var el=$('#rec'+recid);
} 
function t412_unifyHeights(recid) {
    $('#rec'+recid+' .t412 .t-container').each(function() {
        var highestBox2 = 0;
        $('.t412__descr', this).each(function(){
            if($(this).height() > highestBox2)highestBox2 = $(this).height(); 
        });  
        if($(window).width()>=960 && $(this).is(':visible')){
        	$('.t412__descr',this).css('height', highestBox2); 
        }else{
	        $('.t412__descr',this).css('height', "auto");    
        }
    });
    $('#rec'+recid+' .t412 .t-container').each(function() {
        var highestBox3 = 0;
        $('.t412__title', this).each(function(){
            if($(this).height() > highestBox3)highestBox3 = $(this).height(); 
        });  
        if($(window).width()>=960 && $(this).is(':visible')){
        	$('.t412__title',this).css('height', highestBox3); 
        }else{
	        $('.t412__title',this).css('height', "auto");    
        }
    });
    $('#rec'+recid+' .t412 .t-container').each(function() {
        var highestBox = 0;
        $('.t412__wrapper', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height();
        });  
        if($(window).width()>=960 && $(this).is(':visible')){
        	$('.t412__wrapper',this).css('height', highestBox); 
        }else{
	        $('.t412__wrapper',this).css('height', "auto");    
        }
    });
} 
function t414_showPopup(recid){
  var el=$('#rec'+recid).find('.t414');
  $('body').addClass('t414__body_popupshowed');
  el.show();
  el.find('.t414__close, .t414__bg, .t414__closer').click(function(){
    t414_closePopup(recid);
  });
  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      $('body').removeClass('t414__body_popupshowed');
      $('.t414').hide();
    }
  });
}

function t414_closePopup(recid){
  $('body').removeClass('t414__body_popupshowed');
  $('.t414').hide();
}

function t414_initPopup(recid){
  var el=$('#rec'+recid).find('.t414');
  var hook=el.attr('data-tooltip-hook');
  if(hook!==''){
      var obj = $('a[href="'+hook+'"]');
      obj.click(function(e){
        t414_showPopup(recid);
        var popup = el.find(".t414__content");
        popup.addClass('t414__content_static');
        e.preventDefault();
      });
  }
}

function t414_resizePopup(recid){
  var el = $("#rec"+recid);
  var div = el.find(".t414__mainblock").height();
  var win = $(window).height();
  var popup = el.find(".t414__content");
  if (div > win ) {
    popup.addClass('t414__content_static');
  }
  else {
    popup.removeClass('t414__content_static');
  }
} 
function t418_checkSize(recid){
  var el=$("#rec"+recid);
  var sizer = el.find('.t418__height');
  var height = sizer.height();
  var width = sizer.width();
  var ratio = width/height;
  var gallerywrapper = el.find(".t418__checksize");
  var gallerywidth = gallerywrapper.width();
  gallerywrapper.css({'height':((gallerywidth/ratio)+'px')});

  var maxwidth = el.find(".t418__height").width();
  var windowwidth  = $(window).width();
  var value = windowwidth - 80;
  if (maxwidth > windowwidth) {
    el.find(".t418__item").css("max-width", value + "px");
    el.find(".t418__img").css("left", "20px");
    el.find(".t418__img").css("right", "20px");
  } else {
    el.find(".t418__item").css("max-width", "");
    el.find(".t418__img").css("left", "");
    el.find(".t418__img").css("right", "");
  }
}

function t418_init(recid){
  var el=$('#rec'+recid);
  var pos = 0;
  var t418_doResize;
  var totalSlides = el.find('.t418__item').length;
  var sliderWidth = el.find('.t418__item').width();

  $(window).resize(function() {
    if (t418_doResize) clearTimeout(t418_doResize);
    t418_doResize = setTimeout(function() {
      sliderWidth = el.find('.t418__slider').width();
      el.find('.t418__slidecontainer').width(sliderWidth*totalSlides);
      console.log(sliderWidth);
    }, 200); 
  });
  
  el.find('.t418__slidecontainer').width(sliderWidth*totalSlides);
  
  el.find('.t418__next').click(function(){
    slideRight(recid);
  });

  el.find('.t418__previous').click(function(){
    slideLeft(recid);
  });

  function slideLeft(recid){
    var el=$('#rec'+recid);
    pos--;
    if(pos==-1){ pos = totalSlides-1; }
    el.find('.t418__slidecontainer').css({transform: 'translate(-' + (sliderWidth*pos) + 'px, 0)'})
    el.find('.t418__slidecontainer').css("transition-duration", ".3s");
    if(window.lazy=='y'){t_lazyload_update();}
  }

  function slideRight(recid){
    var el=$('#rec'+recid);
    pos++;
    if(pos==totalSlides){ pos = 0; }
    el.find('.t418__slidecontainer').css({transform: 'translate(-' + (sliderWidth*pos) + 'px, 0)'})
    el.find('.t418__slidecontainer').css("transition-duration", ".3s");
    if(window.lazy=='y'){t_lazyload_update();}
  }

  var swipeOptions = {
      triggerOnTouchEnd: true,
      swipeStatus: swipeStatus,
      allowPageScroll: "vertical",
      threshold: 75
  };

  el.find(".t418__slidecontainer").swipe(swipeOptions);
  el.find(".t418__slidecontainer").swipe( {
    tap:function(event, target) {
      slideRight(recid);
    }
  });

  function swipeStatus(event, phase, direction, distance) {
      if (phase == "move" && (direction == "left" || direction == "right")) {
          var duration = 0;

          if (direction == "left") {
              scrollImages((sliderWidth * pos) + distance, duration);
          } else if (direction == "right") {
              scrollImages((sliderWidth * pos) - distance, duration);
          }

      } else if (phase == "cancel") {
          scrollImages(sliderWidth * pos);
      } else if (phase == "end") {
          if (direction == "right") {
              slideLeft(recid);
          } else if (direction == "left") {
              slideRight(recid);
          }
      }
  }

  function scrollImages(distance, duration) {
      //el.find(".t418__slidecontainer").css("transition-duration", "0s");
      el.find(".t418__slidecontainer").css("transition-duration", (duration / 1000).toFixed(1) + "s");
      var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
      el.find(".t418__slidecontainer").css("transform", "translate(" + value + "px, 0)");
  }
}

                               
 
t422_setHeight = function(recid) {
  if ($(window).width()>960) {
    t422_checkEqualHeight(recid);
  } else {
    $('#rec'+recid+' .t422__img-mobile').height(200);
    $('#rec'+recid+' .t422__text').height('auto');
  }
};

t422_checkEqualHeight = function(recid) {
  var t422__txtel=$('#rec'+recid+' .t422__text');
  var t422__imgel=$('#rec'+recid+' .t422__img');
  var t422__borderwidth = 0;
  if (t422__txtel.css("border-top-width") && t422__txtel.css("border-top-width")[1]!='p') {
    t422__borderwidth = + (t422__txtel.css("border-top-width")[0] + t422__txtel.css('border-top-width')[1]);
  }else{if (t422__txtel.css("border-width"))
    	t422__borderwidth = +(t422__txtel.css("border-width")[0]);
  }
  if (t422__imgel.height() < (t422__txtel.height() + t422__borderwidth*2)) {
      t422__imgel.height(t422__txtel.height() + t422__borderwidth*2);
  }else{if ((t422__imgel.height() - t422__borderwidth*2) > t422__txtel.height()) {
        t422__txtel.height(t422__imgel.height() - t422__borderwidth*2);
    }
  }
}; 
function t425_unifyHeights(recid) {       	
    $('#rec'+recid+' .t425 .t-container').each(function() {
        var t425__highestBox = 0;
        $('.t425__col', this).each(function(){						
			var t425__curcol=$(this);	
			var t425__curcolchild=t425__curcol.find('.t425__col-wrapper');
			if(t425__curcol.height() < t425__curcolchild.height())t425__curcol.height(t425__curcolchild.height());
            if(t425__curcol.height() > t425__highestBox)t425__highestBox = t425__curcol.height();			
        });  
        if($(window).width()>=960){
        	$('.t425__col',this).css('height', t425__highestBox); 
        }else{
	        $('.t425__col',this).css('height', "auto");    
        }
    });
}; 
function t426_unifyHeights(recid) {  
	$('#rec'+recid+' .t426 .t-container').each(function() {        		
        var t426__largestHeight = 0;
        $('.t426__col', this).each(function(){                
        	var t426__curimg=$(this).find('img');		
        	if(t426__curimg.height() > t426__largestHeight)t426__largestHeight = t426__curimg.height();        
        });            
        $('.t426__col', this).each(function(){        	
        	$(this).height(t426__largestHeight);
        });        
	});
};
 
t427_alignMiddle = function(recid) {
	if ($(window).width()>960) {
		var t427__img = $('#rec'+recid+' .t427__img');
		var t427__arrow = $('#rec'+recid+' .t427__arrow');		
		t427__arrow.css('top', (t427__img.height()-t427__arrow.height())/2);
	}
}; 
function t428_unifyHeights(recid) {
    $('#rec'+recid+' .t428 .t-container').each(function() {
        var t428__highestBox = 0;
        $('.t428__col', this).each(function(){
			var t428__curcol=$(this);
			var t428__curcolchild=t428__curcol.find('.t428__col-wrapper');
			if(t428__curcol.height() < t428__curcolchild.height())t428__curcol.height(t428__curcolchild.height());
            if(t428__curcol.height() > t428__highestBox)t428__highestBox = t428__curcol.height();
        });
        if($(window).width()>=960){
        	$('.t428__col',this).css('height', t428__highestBox);
        }else{
	        $('.t428__col',this).css('height', "auto");
        }
    });
}; 
t431_createTable = function(recid,tablehead,tabledata,tablecolsize,hastargetblank,btnstyles,t431__tdstyles,t431__thstyles,t431__oddrowstyles,t431__evenrowstyles){
	var t431__arrayColSize = t431_parseData(tablecolsize);
	var t431__arrayHead = t431_parseData(tablehead);
    var t431__arrayData = t431_parseData(tabledata);

	var t431__maxcolnumber = t431__findMaxRowLengthInTable(t431__arrayHead,t431__arrayData);
	var t431__colWidth = t431__setColumnsWidth(t431__arrayColSize,t431__maxcolnumber,recid);
	if (t431__colWidth[0].myText && t431__colWidth[0].myText[t431__colWidth[0].myText.length - 1] == "%") {
		for (var i=0; i<t431__colWidth.length; i++) {
			t431__colWidth[i].myText = t431__colWidth[i].myText.slice(0,-1);
			t431__colWidth[i].myText += "vw";
		}
	}

	var t431__container = $('#rec'+recid+' .t431 .t-container .t431__table');
	var t431__htmlTable = "";
	if (t431__arrayHead) { t431__htmlTable += t431__generateHtml(recid,t431__arrayHead,"th",hastargetblank,t431__colWidth,btnstyles,t431__thstyles,null,null,t431__maxcolnumber);}
	t431__container.append(t431__htmlTable);
	t431__htmlTable = "";
	if (t431__arrayData) { t431__htmlTable += t431__generateHtml(recid,t431__arrayData,"td",hastargetblank,t431__colWidth,btnstyles,t431__tdstyles,t431__oddrowstyles,t431__evenrowstyles,t431__maxcolnumber);}
    t431__container.append(t431__htmlTable);
};


/*add display:block to thead and tbody for vertical scroll, set th width to fix unequal col width*/
t431_setHeadWidth = function(recid) {
	if ($(window).width()>960){
        var t431__tbody = $('#rec'+recid+' .t431 .t431__tbody');
        var t431__thead = $('#rec'+recid+' .t431 .t431__thead');
		t431__tbody.css("display","block");
		t431__thead.css("display","block");

		var t431__colWidth = $('#rec'+recid+' .t431 .t431__tbody tr:first').children().map(function() {
            return $(this).width();
        });

		if($('#rec'+recid+' .t431 .t431__tbody tr td:first').css('border-left-width').length>=3) {
			var t431__verticalborder = $('#rec'+recid+' .t431 .t431__tbody tr td:first').css('border-left-width').slice(0,-2);
		}

        $('#rec'+recid+' .t431 .t431__thead tr').children().each(function(i, v) {
            if ($(v).is(":last-child")) {
                $(v).width(t431__colWidth[i] + (t431__tbody.width() - $('#rec'+recid+' .t431 .t431__tbody tr:first').width()));
            } else {
                $(v).width(t431__colWidth[i] + (+t431__verticalborder));
            }
        });
	}
};


t431__findMaxRowLengthInTable = function(arrayhead, arraydata) {
	var t431__headmaxlength = 0;
	var t431__datamaxlength = 0;
	if (arrayhead) {
		t431__headmaxlength = t431__findMaxRowLengInArray(arrayhead);
	}
	if (arraydata) {
		t431__datamaxlength = t431__findMaxRowLengInArray(arraydata);
	}
	if (t431__datamaxlength>t431__headmaxlength) {
		return t431__datamaxlength;
	} else {
		return t431__headmaxlength;
	}
};


t431__findMaxRowLengInArray = function(curarray) {
	var t431__maxlength = 0;
	for (var i=0; i<curarray.length; i++) {
		if (curarray[i].length>t431__maxlength) {
			t431__maxlength = curarray[i].length;
		}
	}
	return t431__maxlength;
};


t431__setColumnsWidth = function(t431__colwidth,t431__colsnumber,recid) {
		if (t431__colwidth) {
			return t431__colwidth[0];
		}	else {
			var t431__tablewidth = $('#rec'+recid+' .t431 .t-container .t-col').width();
			return (t431__tablewidth/t431__colsnumber + "px");
		}
};


t431__generateHtml = function(recid,arrayValues,coltag,hastargetblank,colWidth,btnstyles,colstyles,oddrowstyles,evenrowstyles,maxcolnumber) {
	var t431__htmlpart = "";


	if (coltag == "td") {
		var t431__theadorbodytag = "tbody";
	} else {
		var t431__theadorbodytag = "thead";
	}
	t431__htmlpart += "<" + t431__theadorbodytag + " class=\"t431__" + t431__theadorbodytag + "\">";

	//remove forst body row top border, if table head has bottom border
	if($('#rec'+recid+' .t431 .t-container .t431__thead th').length>0 && $('#rec'+recid+' .t431 .t-container .t431__thead th').css("border-bottom-width")[0]!="0") {
		var t431__firstbodyrowstyle = "border-top: 0 !important;";
	}

	for (var i=0; i<arrayValues.length; i++) {

		//add classes for striped table
		if (coltag == "td") {
			if ((i + 1) % 2 > 0) {
				t431__htmlpart += "<tr class=\"t431__oddrow\"" + "style=\"" + oddrowstyles + "\">";
			} else { t431__htmlpart += "<tr class=\"t431__evenrow\"" + "style=\"" + evenrowstyles + "\">";}
		} else {
			t431__htmlpart += "<tr>";
		}

		var t431__addingcols = 0;
		if (arrayValues[i].length<maxcolnumber) {
			t431__addingcols = maxcolnumber - arrayValues[i].length;
        }
		for (var j=0; j<(arrayValues[i].length + t431__addingcols); j++) {
			if (arrayValues[i][j]) {
				//define col width
                if(Array.isArray(colWidth) && colWidth[j]) {
                    var t431__curWidth = colWidth[j].myText;
                } else { var t431__curWidth = colWidth;}

				 if (i==0 && coltag=="td") {
					var t431__colwithattr = "<" + coltag + " class=\"t431__" + coltag + "\" style=\"width:" + t431__curWidth + ";" + colstyles + t431__firstbodyrowstyle + "\">";
				} else {
					var t431__colwithattr = "<" + coltag + " class=\"t431__" + coltag + "\" style=\"width:" + t431__curWidth + ";" + colstyles + "\">";
				}

                if (arrayValues[i][j].myHref) {
                    var t431__tblank = "";
                    if (hastargetblank) {var t431__tblank = "target=\"_blank\"";}
                    //define link type
                    if (arrayValues[i][j].myHrefType == "link") {
                        var t431__linkwithattr = "<a href=\"" + arrayValues[i][j].myHref + "\"" + t431__tblank + ">";
                        var t431__linkclosetag = "</a>";
                    } else {
                        var t431__linkwithattr = "<div class=\"t431__btnwrapper\"><a href=\"" + arrayValues[i][j].myHref + "\"" + t431__tblank + " class=\"t-btn\" style=\"" + btnstyles + "\"><table style=\"width:100%; height:100%;\"><tr><td>";
                        var t431__linkclosetag = "</td></tr></table></a></div>";
                    }
                    t431__htmlpart += t431__colwithattr + t431__linkwithattr + arrayValues[i][j].myText + t431__linkclosetag + "</" + coltag + ">";
                } else {
                    t431__htmlpart += t431__colwithattr + arrayValues[i][j].myText + "</" + coltag + ">";
                }
			} else {
					t431__htmlpart += "<" + coltag + " class=\"t431__" + coltag + "\" style=\"width:" + t431__curWidth + ";" + colstyles + "\">" + "</" + coltag + ">";
			}
		}
		t431__htmlpart += "</tr>";
	}
	t431__htmlpart += "</" + t431__theadorbodytag + ">";
	return t431__htmlpart;
};


t431_parseData = function(t431__data) {
  if (t431__data!="" && typeof t431__data!='undefined')
  {
	t431__data = t431__addBrTag(t431__data);
    var t431__arrayTable = new Array();
    var t431__arrayRow = new Array();
    var t431__curItem = {myText:"", myHref:"", myHrefType:""};
	var t431__HasLink = "";
	var t431__HasLinkWithSpace = "";
    var t431__HasBtn = "";
	var t431__HasBtnWithSpace = "";
	var t431__EndOfLine = "";
    for (var i=0; i<t431__data.length; i++)
    {
	  //col end and check of special symbols: «>», «<» and «&»
      if (t431__data[i] == ";" && !((t431__data[i-1]&&(t431__data[i-1]=="t")) && (t431__data[i-2]&&(t431__data[i-2]=="g" || t431__data[i-2]=="l")) && (t431__data[i-3]&&(t431__data[i-3]=="&"))) && !((t431__data[i-1]&&(t431__data[i-1]=="p")) && (t431__data[i-2]&&(t431__data[i-2]=="m")) && (t431__data[i-3]&&(t431__data[i-3]=="a")) && (t431__data[i-4]&&(t431__data[i-4]=="&")))) {
          t431__arrayRow.push(t431__curItem);
          var t431__curItem = {myText:"", myHref:""};
          t431__HasLink = "";
          t431__HasLinkWithSpace = "";
          t431__HasBtn = "";
          t431__HasBtnWithSpace = "";
      } else {
        if(t431__HasLink == "link=" || t431__HasLinkWithSpace == " link=" || t431__HasBtn == "button=" || t431__HasBtnWithSpace == " button=") {
		  if (t431__curItem.myHref=="" && t431__HasLink == "link=") {
			t431__curItem.myText = t431__curItem.myText.slice(0,-5);
			t431__curItem.myHrefType = "link";
		  } else { if (t431__curItem.myHref=="" && t431__HasLinkWithSpace == " link=") {
			t431__curItem.myText = t431__curItem.myText.slice(0,-6);
            t431__curItem.myHrefType = "link";
		  } else {if (t431__curItem.myHref=="" && t431__HasBtn == "button=") {
			t431__curItem.myText = t431__curItem.myText.slice(0,-7);
			t431__curItem.myHrefType = "btn";
		  } else { if (t431__curItem.myHref=="" && t431__HasBtnWithSpace == " button=") {
			t431__curItem.myText = t431__curItem.myText.slice(0,-8);
			t431__curItem.myHrefType = "btn";
		  }}}}
		  t431__curItem.myHref += (t431__data[i]);
		} else {
		  t431__curItem.myText += (t431__data[i]);
		  t431__HasLink = t431__checkSubstr("link=",t431__HasLink,t431__data[i]);
		  t431__HasLinkWithSpace = t431__checkSubstr(" link=",t431__HasLinkWithSpace,t431__data[i]);
		  t431__HasBtn = t431__checkSubstr("button=",t431__HasBtn,t431__data[i]);
		  t431__HasBtnWithSpace = t431__checkSubstr(" button=",t431__HasBtnWithSpace,t431__data[i]);
		}
		t431__EndOfLine = t431__checkSubstr("<br />",t431__EndOfLine,t431__data[i]);
        if (t431__EndOfLine == "<br />") {
          if (t431__curItem.myHref) {
			t431__curItem.myHref = t431__curItem.myHref.slice(0,-6);
		  } else {
			t431__curItem.myText = t431__curItem.myText.slice(0,-6);
		  }
          t431__arrayRow.push(t431__curItem);
          t431__arrayTable.push(t431__arrayRow);
          var t431__curItem = {myText:"", myHref:""};
		  t431__HasLink = "";
		  t431__HasLinkWithSpace = "";
		  t431__HasBtn = "";
		  t431__HasBtnWithSpace = "";
          t431__arrayRow = new Array();
        }
      }
    }
	if (t431__arrayRow.length > 0 || t431__curItem.myText!="") {
		if (t431__curItem!="") {
			t431__arrayRow.push(t431__curItem);
		}
		t431__arrayTable.push(t431__arrayRow);
	}
  }
  return t431__arrayTable;
};


// checking a step by step combining of t431__targetSubstr
t431__checkSubstr = function(t431__targetSubstr,t431__curSubstr,t431__curSymbol){
	if (!t431__curSubstr && t431__curSymbol == t431__targetSubstr[0]) {
    return t431__curSymbol;
  } else {
    if (t431__curSubstr) {
		for (var i=0; i<(t431__targetSubstr.length-1); i++) {
			if (t431__curSubstr[t431__curSubstr.length - 1] == t431__targetSubstr[i] && t431__curSymbol == t431__targetSubstr[i+1]) {
				return (t431__curSubstr += t431__curSymbol);
            }
        }
    }
  }
};


t431__addBrTag = function(t431__oldStringItem){
	if(typeof t431__oldStringItem=='undefined')return;
	var t431__newStringItem = "";
	for (var i=0; i < t431__oldStringItem.length; i++) {
		if (t431__oldStringItem[i] == "\n" || t431__oldStringItem[i] == "\r") {
			t431__newStringItem += "<br />";
		} else {
			t431__newStringItem += t431__oldStringItem[i];
		}
	}
	return t431__newStringItem;
};
 
function t433_setMapHeight(recid) {
	var el=$('#rec'+recid);
	var map = el.find('.t433__map');
	var textwrapper = el.find('.t433__col_text').height();
	map.css('height', textwrapper);
}
 
function t441__createPieChart(recid,data1,data2,data3,data4,sectorcolor,piebgcolor,bgcolor,blocksnumber,diagramwidth,diameter) {		
	if(diameter>300 || diameter=="" || diameter<100) {
		if(diameter=="") {var t441__radius = 100; diameter = 200;}
		if(diameter>300) {var t441__radius = 150; diameter = 300;}
        if(diameter<100) {var t441__radius = 50; diameter = 100;}
	} else {
		var t441__radius = diameter/2;
	}

	if(diagramwidth=="") { diagramwidth = 10;}
    if(diagramwidth>t441__radius) { diagramwidth = 10;}
	if(diagramwidth<1) { diagramwidth = 1;}
	                    
	//check Retina
	if(window.devicePixelRatio >= 2) {
		var t441__oldsize = diameter;                       
        t441__radius = t441__radius*2;
		diameter = diameter*2;
		diagramwidth = diagramwidth*2;
	}                       
                       
	//border id drawing at the edge of circle, so we need correct the radius to fin into canvas                        
	var t441__correction = +diagramwidth/2;

    var t441__dataarray = [data1,data2,data3,data4];    
    for (var i=0; i<4; i++) {
        if (t441__dataarray[i]!="" && blocksnumber>i) {
            var t441__canvas = document.querySelector('#rec'+recid+' .t441__pie'+(i+1));
			t441__canvas.setAttribute("width", diameter);
			t441__canvas.setAttribute("height", diameter);						
            var t441__context = t441__canvas.getContext("2d");
			if(window.devicePixelRatio >= 2) {								
				t441__canvas.style.width = t441__oldsize + "px";
				t441__canvas.style.height = t441__oldsize + "px";
			}			
			for (var j = 0; j < 2; j++) {				                               
				if(j==1 && t441__dataarray[i]==0) {continue;}                                  
				//0 - bg, 1 - percent sector                                  
                if (j==0) {                    					                                  
					t441__context.strokeStyle = piebgcolor;
					var t441__angle = Math.PI*2;           
					t441__context.lineWidth = diagramwidth-1;                                  
                } else {
                    t441__context.strokeStyle = sectorcolor;
					var t441__angle = Math.PI*2*(t441__dataarray[i]/100);
					t441__context.lineWidth = diagramwidth;                                  
				}
                t441__context.beginPath();								
				t441__context.lineCap="round";
				t441__context.moveTo(diameter-t441__correction,t441__radius);
				t441__context.arc(t441__radius, t441__radius, t441__radius-t441__correction, 0, t441__angle, false);				
				t441__context.stroke();				
			}			
		}
	}
} 
function t446_setLogoPadding(recid){
	if($(window).width()>980){			  
        var t446__menu = $('#rec'+recid+' .t446');
        var t446__logo=t446__menu.find('.t446__logowrapper');	  
        var t446__leftpart=t446__menu.find('.t446__leftwrapper');
        var t446__rightpart=t446__menu.find('.t446__rightwrapper');
        t446__leftpart.css("padding-right",t446__logo.width()/2+50);
        t446__rightpart.css("padding-left",t446__logo.width()/2+50);			        
	}
}

function t446_checkOverflow(recid, menuheight){    
  var t446__menu = $('#rec'+recid+' .t446');
  var t446__rightwr=t446__menu.find('.t446__rightwrapper');	  
  var t446__rightmenuwr=t446__rightwr.find('.t446__rightmenuwrapper');
  var t446__rightadditionalwr=t446__rightwr.find('.t446__additionalwrapper');
  var t446__burgeroverflow=t446__rightwr.find('.t446__burgerwrapper_overflow');  
  var t446__burgerwithoutoverflow=t446__rightwr.find('.t446__burgerwrapper_withoutoverflow');      

  if (menuheight>0) {var t446__height = menuheight;} else {var t446__height = 80;}  

  if($(window).width()>980 && (t446__rightmenuwr.width() + t446__rightadditionalwr.width()) > t446__rightwr.width()){    	  	  	  	  	  	  
		t446__menu.css("height", t446__height*2);
		t446__rightadditionalwr.css("float","right");

		t446__burgeroverflow.css("display","table-cell");
		t446__burgerwithoutoverflow.css("display","none");				
  } else {
		if(t446__menu.height()>t446__height) {t446__menu.css("height",t446__height);}
		if(t446__rightadditionalwr.css("float")=="right") {t446__rightadditionalwr.css("float","none");}

		t446__burgeroverflow.css("display","none");
		t446__burgerwithoutoverflow.css("display","table-cell");		
  }
}

function t446_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t446__list_item a[href='"+url+"']").addClass("t-active");
  $(".t446__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t446__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t446__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t446__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t446__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t446_setPath(){
}

function t446_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t446").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);
      }
      });
      }else{
        $(".t446").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t446_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t446").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t446_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t446").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t446_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t446"),
      burger=el.find(".t446__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t446_opened")
  })
  $(window).resize(function() {
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    } else {
      menu.fadeOut(0);
      burger.removeClass("t446_opened")
    }
  });
} 
function t448_setHeight(recid) {
  var el=$("#rec"+recid);
  var coverheight = el.find(".t-cover").height();
  var coverwrapper = el.find(".t448-cover__wrapper");
  var textheight = el.find(".t448__wrapper").innerHeight();
  var imgheight = el.find(".t448__screenshot").height();
  var height = textheight + imgheight;
  var newheight = coverheight - imgheight;
  var container = el.find(".t448");
  var attr = container.attr("data-crop-image");

  if (typeof attr !== typeof undefined && attr !== false) {
    container.addClass("t448__no-overflow");
    container.css("height", coverwrapper.height());
  }

  if (coverheight > height) {
    el.addClass("t448__stretched");
    coverwrapper.css("height",newheight);
    if (typeof attr !== typeof undefined && attr !== false) {
      container.removeClass("t448__no-overflow");
      container.css("height", "");
    }
  } else {
    el.removeClass("t448__stretched");
    coverwrapper.css("height","");
  }
} 
function t449_appearMenu(recid) {
    var window_width=$(window).width();
    if(window_width>980){
         $(".t449").each(function() {
                var el=$(this);
                var appearoffset=el.attr("data-appearoffset");
                var hideoffset=el.attr("data-hideoffset");
                if(appearoffset!=""){
                        if(appearoffset.indexOf('vh') > -1){
                            appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                        }

                        appearoffset=parseInt(appearoffset, 10);

                        if ($(window).scrollTop() >= appearoffset) {
                          if(el.hasClass('t449__beforeready')){
                              el.finish(); 
                              el.removeClass("t449__beforeready");
                          }
                        }else{
                          el.stop();
                          el.addClass("t449__beforeready");
                        }
                }

                if(hideoffset!=""){
                        if(hideoffset.indexOf('vh') > -1){
                            hideoffset = Math.floor((window.innerHeight * (parseInt(hideoffset) / 100)));
                        }

                        hideoffset=parseInt(hideoffset, 10);

                        if ($(window).scrollTop()+$(window).height() >= $(document).height() - hideoffset) {
                          if(!el.hasClass('t449__beforeready')){
                              el.finish();
                              el.addClass("t449__beforeready");
                          }
                        }else{
                          if (appearoffset!="") {
                              if($(window).scrollTop() >= appearoffset){
                                el.stop();
                                el.removeClass("t449__beforeready");
                              }
                          }else{
                              el.stop();
                              el.removeClass("t449__beforeready");
                          }
                        }
                }
         });
    }
} 
function t450_showMenu(recid){
  var el=$('#rec'+recid);
  $('body').addClass('t450__body_menushowed');
  el.find('.t450').addClass('t450__menu_show');
  el.find('.t450__overlay').addClass('t450__menu_show');
  el.find('.t450__overlay, .t450__close, .t450__list_item, a[href*=#]').click(function(){
	var url = $(this).attr('href');
	if (!url || url.substring(0,7) != '#price:') {
	  	t450_closeMenu();
	}
  });
  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
    	$('body').removeClass('t390__body_popupshowed');
      $('.t390').removeClass('t390__popup_show');
    }
});
}

function t450_closeMenu(){
  $('body').removeClass('t450__body_menushowed');
  $('.t450').removeClass('t450__menu_show');
  $('.t450__overlay').removeClass('t450__menu_show');
}

function t450_checkSize(recid){
  var el=$('#rec'+recid).find('.t450');
  var windowheight = $(window).height() - 80;
  var contentheight = el.find(".t450__top").height() + el.find(".t450__rightside").height();
  if (contentheight > windowheight) {
    el.addClass('t450__overflowed');
    el.find(".t450__container").css('height', 'auto');
  }
}

function t450_initMenu(recid){
  var el=$('#rec'+recid).find('.t450');
  var hook=el.attr('data-tooltip-hook');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t450_closeMenu();
      t450_showMenu(recid);
      t450_checkSize(recid);
      e.preventDefault();
    });
  }
  $('#rec'+recid).find('.t450__burger_container').click(function(e){
    t450_closeMenu();
    t450_showMenu(recid);
    t450_checkSize(recid);
  });
}

 
function t451_showMenu(recid){
  var el=$('#rec'+recid);
  $('body').addClass('t451__body_menushowed');
  el.find('.t451m').addClass('t451m__menu_show');
  el.find('.t451m__overlay').addClass('t451m__menu_show');
  el.find('.t451m__overlay, .t451m__close, .t451m__list_item, a[href*=#]').click(function(){
    t451_closeMenu();
  });
  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      $('body').removeClass('t451__body_menushowed');
      $('.t451m').removeClass('t451m__menu_show');
      $('.t451m__overlay').removeClass('t451m__menu_show');
    }
});
}

function t451_closeMenu(){
  $('body').removeClass('t451__body_menushowed');
  $('.t451m').removeClass('t451m__menu_show');
  $('.t451m__overlay').removeClass('t451m__menu_show');
}

function t451_checkSize(recid){
  var el=$('#rec'+recid).find('.t451m');
  var windowheight = $(window).height() - 80;
  var contentheight = el.find(".t451m__top").height() + el.find(".t451m__rightside").height();
  if (contentheight > windowheight) {
    el.addClass('t451m__overflowed');
    el.find(".t451m__container").css('height', 'auto');
  }
}

function t451_initMenu(recid){
  var el=$('#rec'+recid);
  var obj = el.find('.t451__burger');
  obj.click(function(e){
    t451_closeMenu();
    t451_showMenu(recid);
    t451_checkSize(recid);
    e.preventDefault();
  });
}

function t451_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t451__list_item a[href='"+url+"']").addClass("t-active");
  $(".t451__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t451__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t451__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t451__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t451__list_item a[href='/"+pathname+"/']").addClass("t-active");
}   

function t451_changeBgOpacityMenu(recid) {
  var window_width=$(window).width();
  var record = $("#rec"+recid);
  record.find(".t451__container__bg").each(function() {
        var el=$(this);
        var bgcolor=el.attr("data-bgcolor-rgba");
        var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
        var bgopacity=el.attr("data-bgopacity");
        var bgopacity_afterscroll=el.attr("data-bgopacity2");
        var menu_shadow=el.attr("data-menu-shadow");
        if ($(window).scrollTop() > 20) {
            el.css("background-color",bgcolor_afterscroll);
            if (bgopacity_afterscroll != "0" && bgopacity_afterscroll != "0.0") {
              el.css('box-shadow',menu_shadow);
            } else {
              el.css('box-shadow','none');
            }
        }else{
            el.css("background-color",bgcolor);
            if (bgopacity != "0" && bgopacity != "0.0") {
              el.css('box-shadow',menu_shadow);
            } else {
              el.css('box-shadow','none');
            }
        }
  });
}

function t451_appearMenu(recid) {
      var window_width=$(window).width();
      var record = $("#rec"+recid);
           record.find(".t451__panel").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
console.log(appearoffset)
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.hasClass('t451__beforeready')){
                                el.removeClass('t451__beforeready');
                            }
                          }else{
                            el.addClass('t451__beforeready');
                          }
                  }
           });

}

 
function t452_scrollToTop(){
  $('html, body').animate({scrollTop: 0}, 700);								
}	  
function t453_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t453__list_item a[href='"+url+"']").addClass("t-active");
  $(".t453__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t453__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t453__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t453__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t453__list_item a[href='/"+pathname+"/']").addClass("t-active");
}   

function t453_appearMenu(recid) {
      var window_width=$(window).width();
      var record = $("#rec"+recid);
           record.find(".t453").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
console.log(appearoffset)
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.hasClass('t453__beforeready')){
                                el.removeClass('t453__beforeready');
                            }
                          }else{
                            el.addClass('t453__beforeready');
                          }
                  }
           });

} 
function t454_setLogoPadding(recid){
	if($(window).width()>980){
        var t454__menu = $('#rec'+recid+' .t454');
        var t454__logo=t454__menu.find('.t454__logowrapper');
        var t454__leftpart=t454__menu.find('.t454__leftwrapper');
        var t454__rightpart=t454__menu.find('.t454__rightwrapper');
        t454__leftpart.css("padding-right",t454__logo.width()/2+50);
        t454__rightpart.css("padding-left",t454__logo.width()/2+50);
	}
}

function t454_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t454__list_item a[href='"+url+"']").addClass("t-active");
  $(".t454__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t454__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t454__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t454__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t454__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t454_setPath(){
}

function t454_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t454").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);
      }
      });
      }else{
        $(".t454").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t454_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t454").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t454_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t454").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t454_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t454"),
      burger=el.find(".t454__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t454_opened")
  })
  $(window).resize(function() {
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    } else {
      menu.fadeOut(0);
      burger.removeClass("t454_opened")
    }
  });
} 
function t456_setListMagin(recid,imglogo){
	if($(window).width()>980){		
        var t456__menu = $('#rec'+recid+' .t456');        
        var t456__leftpart=t456__menu.find('.t456__leftwrapper');
        var t456__listpart=t456__menu.find('.t456__list');		
		if (imglogo){
			t456__listpart.css("margin-right",t456__leftpart.width());
		} else {
			t456__listpart.css("margin-right",t456__leftpart.width()+30);        
		}		        
	}
}

function t456_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t456__list_item a[href='"+url+"']").addClass("t-active");
  $(".t456__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t456__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t456__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t456__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t456__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t456_setPath(){
}

function t456_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t456").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);
      }
      });
      }else{
        $(".t456").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t456_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t456").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t456_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t456").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t456_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t456"),
      burger=el.find(".t456__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t456_opened")
  })
  $(window).resize(function() {
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    } else {
      menu.fadeOut(0);
      burger.removeClass("t456_opened")
    }
  });
} 
function t461_setLogoPadding(recid){
	if($(window).width()>980){			  
        var t461__menu = $('#rec'+recid+' .t461');
        var t461__logo=t461__menu.find('.t461__logowrapper');	  
        var t461__leftpart=t461__menu.find('.t461__leftwrapper');
        var t461__rightpart=t461__menu.find('.t461__rightwrapper');
        t461__leftpart.css("padding-right",t461__logo.width()/2+50);
        t461__rightpart.css("padding-left",t461__logo.width()/2+50);			        
	}
}

function t461_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t461__list_item a[href='"+url+"']").addClass("t-active");
  $(".t461__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t461__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t461__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t461__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t461__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t461_setPath(){
}

function t461_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t461").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);
      }
      });
      }else{
        $(".t461").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t461_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t461").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t461_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t461").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t461_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t461"),
      burger=el.find(".t461__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t461_opened")
  })
  $(window).resize(function() {
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    } else {
      menu.fadeOut(0);
      burger.removeClass("t461_opened")
    }
  });
} 
function t462_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t462__list_item a[href='"+url+"']").addClass("t-active");
  $(".t462__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t462__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t462__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t462__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t462__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t462_setPath(){
}

function t462_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t462").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);
      }
      });
      }else{
        $(".t462").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t462_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t462").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t462_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t462").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t462_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t462"),
      burger=el.find(".t462__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t462_opened")
  })
  $(window).resize(function() {
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    } else {
      menu.fadeOut(0);
      burger.removeClass("t462_opened")
    }
  });
}
 
function t466_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t466__item a[href='"+url+"']").addClass("t-active");
  $(".t466__item a[href='"+url+"/']").addClass("t-active");
  $(".t466__item a[href='"+pathname+"']").addClass("t-active");
  $(".t466__item a[href='/"+pathname+"']").addClass("t-active");
  $(".t466__item a[href='"+pathname+"/']").addClass("t-active");
  $(".t466__item a[href='/"+pathname+"/']").addClass("t-active");
}

function t466_initMobileMenu(recid) {
  var window_width=$(window).width();
  var el = $("#rec"+recid);
  if(980>window_width){
    el.find(".t466").each(function() {
      $(this).find(".t466__mobile").css("top", $(this).find(".t466__container__bg_main").innerHeight() + 2);
      $(this).find(".t466__burger").click(function(){
        $("body").toggleClass('t466_opened');
        $(this).closest(".t466").find(".t466__mobile").slideToggle(300);
      });
    });
  }
}

function t466_appearMenu(recid) {
      var window_width=$(window).width();
      var record = $("#rec"+recid);
           record.find(".t466").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
console.log(appearoffset)
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.hasClass('t466__beforeready')){
                                el.removeClass('t466__beforeready');
                            }
                          }else{
                            el.addClass('t466__beforeready');
                          }
                  }
           });

}

function t466_changeBgOpacityMenu(recid) {
  var window_width=$(window).width();
  var record = $("#rec"+recid);
  record.find(".t466__container__bg").each(function() {
        var el=$(this);
        var bgcolor=el.attr("data-bgcolor-rgba");
        var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
        var bgopacity=el.attr("data-bgopacity");
        var bgopacity_afterscroll=el.attr("data-bgopacity2");
        var menu_shadow=el.attr("data-menu-shadow");
        if ($(window).scrollTop() > 20) {
            el.css("background-color",bgcolor_afterscroll);
            if (bgopacity_afterscroll != "0" && bgopacity_afterscroll != "0.0") {
              el.css('box-shadow',menu_shadow);
            } else {
              el.css('box-shadow','none');
            }
        }else{
            el.css("background-color",bgcolor);
            if (bgopacity != "0" && bgopacity != "0.0") {
              el.css('box-shadow',menu_shadow);
            } else {
              el.css('box-shadow','none');
            }
        }
  });
} 
function t477_setHeight(recid) {
  var el=$('#rec'+recid);
  el.find('.t-container').each(function() {
    var highestBox = 0;
    $('.t477__col', this).each(function(){
        if($(this).height() > highestBox)highestBox = $(this).height(); 
    });
    $('.t477__textwrapper',this).css('height', highestBox);
    $('.t477__blockimg',this).css('height', highestBox);
  });
} 
function t478_setHeight(recid) {
  var el=$('#rec'+recid);
  var sizer = el.find('.t478__sizer');
  var height = sizer.height();
  var width = sizer.width();
  var ratio = width/height;
  var imgwrapper = el.find(".t478__blockimg, .t478__textwrapper");
  var imgwidth = imgwrapper.width();
  if (height != $(window).height()) {
    imgwrapper.css({'height':((imgwidth/ratio)+'px')});
  }
} 
function t480_setHeight(recid) {
  var el=$('#rec'+recid);
  var sizer = el.find('.t480__sizer');
  var height = sizer.height();
  var width = sizer.width();
  var ratio = width/height;
  var imgwrapper = el.find(".t480__blockimg, .t480__textwrapper");
  var imgwidth = imgwrapper.width();
  if (height != $(window).height()) {
    imgwrapper.css({'height':((imgwidth/ratio)+'px')});
  }
} 
function t481_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t481__list_item a[href='"+url+"']").addClass("t-active");
  $(".t481__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t481__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t481__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t481__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t481__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t481_setPath(){
}

function t481_setWidth(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t481").each(function() {
      var el=$(this);
      var left_exist=el.find('.t481__leftcontainer').length;
      var left_w=el.find('.t481__leftcontainer').outerWidth(true);
      var max_w=left_w;
      var right_exist=el.find('.t481__rightcontainer').length;
      var right_w=el.find('.t481__rightcontainer').outerWidth(true);
    var items_align=el.attr('data-menu-items-align');
      if(left_w<right_w)max_w=right_w;
      max_w=Math.ceil(max_w);
      var center_w=0;
      el.find('.t481__centercontainer').find('li').each(function() {
        center_w+=$(this).outerWidth(true);
      });
      //console.log(max_w);
      //console.log(center_w);
      var padd_w=40;
      var maincontainer_width=el.find(".t481__maincontainer").outerWidth(true);
      if(maincontainer_width-max_w*2-padd_w*2>center_w+20){
          //if(left_exist>0 && right_exist>0){
      if(items_align=="center" || typeof items_align==="undefined"){
            el.find(".t481__leftside").css("min-width",max_w+"px");
            el.find(".t481__rightside").css("min-width",max_w+"px");
            
          }
       }else{
          el.find(".t481__leftside").css("min-width","");
          el.find(".t481__rightside").css("min-width","");  
          
      }
    });
  }
}

function t481_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t481").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);             
      }
      });
      }else{
        $(".t481").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t481_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t481").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("visibility","visible");
                                el.animate({"opacity": "1"}, 200,function() {
                                });       
                            }
                          }else{
                            el.stop();
                            el.animate({"opacity": "0"}, 200,function() {
                            });
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t481_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t481").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t481_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t481"),
      burger=el.find(".t481__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t481_opened")
  })
  $(window).resize(function() {
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    } else {
      menu.fadeOut(0);
      burger.removeClass("t481_opened")
    }
  });
}

 
function t486_setHeight(recid) {
  var el=$('#rec'+recid);
  var window_width=$(window).width();
  if(window_width>980){
    el.find('.t486__blockimg').css('height', el.find('.t486__blockimg').innerWidth());
    var textwrapper = el.find('.t486__textwrapper');
    var blockimg = el.find('.t486__imgcontainer');
    textwrapper.css('height', blockimg.innerHeight());

    
  } else {
    el.find('.t486__blockimg').css('height', el.find('.t486__blockimg').width());
    el.find('.t486__textwrapper').css('height', 'auto'); 
  }
} 
function t498_unifyHeights(recid) {
    $('#rec'+recid+' .t498 .t-container').each(function() {
        var t498__highestBox = 0;
        $('.t498__col', this).each(function(){
			var t498__curcol=$(this);
			var t498__curcolchild=t498__curcol.find('.t498__col-wrapper');
			if(t498__curcol.height() < t498__curcolchild.height())t498__curcol.height(t498__curcolchild.height());
            if(t498__curcol.height() > t498__highestBox)t498__highestBox = t498__curcol.height();
        });
        if($(window).width()>=960){
        	$('.t498__col',this).css('height', t498__highestBox);
        }else{
	        $('.t498__col',this).css('height', "auto");
        }
    });
};
 
function t504_unifyHeights(recid) {
    $('#rec'+recid+' .t504 .t-container').each(function() {
        var t504__highestBox = 0;
        $('.t504__col', this).each(function(){
			var t504__curcol=$(this);
			var t504__curcolchild=t504__curcol.find('.t504__col-wrapper');
			if(t504__curcol.height() < t504__curcolchild.height())t504__curcol.height(t504__curcolchild.height());
            if(t504__curcol.height() > t504__highestBox)t504__highestBox = t504__curcol.height();
        });
        if($(window).width()>=960){
        	$('.t504__col',this).css('height', t504__highestBox);
        }else{
	        $('.t504__col',this).css('height', "auto");
        }
    });
};
 
function t505__createPieChart(recid,data1,data2,data3,data4,sectorcolor,piebgcolor,bgcolor,blocksnumber,diagramwidth,diameter) {
	if(diameter>300 || diameter=="" || diameter<100) {
		if(diameter=="") {var t505__radius = 100; diameter = 200;}
		if(diameter>300) {var t505__radius = 150; diameter = 300;}
        if(diameter<100) {var t505__radius = 50; diameter = 100;}
	} else {
		var t505__radius = diameter/2;
	}

	if(diagramwidth=="") { diagramwidth = 10;}
    if(diagramwidth>t505__radius) { diagramwidth = 10;}
	if(diagramwidth<1) { diagramwidth = 1;}

	//check Retina
	if(window.devicePixelRatio >= 2) {
		var t505__oldsize = diameter;
        t505__radius = t505__radius*2;
		diameter = diameter*2;
		diagramwidth = diagramwidth*2;
	}

	//border id drawing at the edge of circle, so we need correct the radius to fin into canvas
	var t505__correction = +diagramwidth/2;

    var t505__dataarray = [data1,data2,data3,data4];
    for (var i=0; i<4; i++) {
        if (t505__dataarray[i]!="" && blocksnumber>i) {
            var t505__canvas = document.querySelector('#rec'+recid+' .t505__pie'+(i+1));
			t505__canvas.setAttribute("width", diameter);
			t505__canvas.setAttribute("height", diameter);
            var t505__context = t505__canvas.getContext("2d");
			if(window.devicePixelRatio >= 2) {
				t505__canvas.style.width = t505__oldsize + "px";
				t505__canvas.style.height = t505__oldsize + "px";
			}
			for (var j = 0; j < 2; j++) {
				if(j==1 && t505__dataarray[i]==0) {continue;}
				//0 - bg, 1 - percent sector
                if (j==0) {
					t505__context.strokeStyle = piebgcolor;
					var t505__angle = Math.PI*2;
					t505__context.lineWidth = diagramwidth-1;
                } else {
                    t505__context.strokeStyle = sectorcolor;
					var t505__angle = Math.PI*2*(t505__dataarray[i]/100);
					t505__context.lineWidth = diagramwidth;
				}
                t505__context.beginPath();
				t505__context.lineCap="round";
				t505__context.moveTo(diameter-t505__correction,t505__radius);
				t505__context.arc(t505__radius, t505__radius, t505__radius-t505__correction, 0, t505__angle, false);
				t505__context.stroke();
			}
		}
	}
}
 
function t509_setHeight(recid) {  
  var t509__el=$("#rec"+recid);	
  var t509__image = t509__el.find(".t509__blockimg");
  t509__image.each(function() {
    var t509__width = $(this).attr("data-image-width");
    var t509__height = $(this).attr("data-image-height");	
    var t509__ratio = t509__height/t509__width;
    var t509__padding = t509__ratio*100;    	
    $(this).css("padding-bottom",t509__padding+"%");		
  });
  
  if ($(window).width()>960){
    var t509__textwr = t509__el.find(".t509__textwrapper");
    var t509__deskimg = t509__el.find(".t509__desktopimg");
    t509__textwr.each(function() {    
    $(this).css("height", t509__deskimg.innerHeight());	
    });
  }
}
 
function t517_unifyHeights(recid) {
if($(window).width()>=960){
	$('#rec'+recid+' .t517 .t-container .t517__row').each(function() {
		var t517__highestBox = 0;
		var t517__currow = $(this);
		$('.t517__col', this).each(function(){
			var t517__curcol = $(this);			
			var t517__curcolinfo=t517__curcol.find('.t517__sectioninfowrapper');			
			var t517__curcolpers=t517__curcol.find('.t517__personwrapper');
			var t517__curcolinnerheight = t517__curcolinfo.outerHeight() + t517__curcolpers.outerHeight();						
			if(t517__curcolinnerheight > t517__highestBox)t517__highestBox = t517__curcolinnerheight;
		});
		$('.t517__col',this).css('height', t517__highestBox);
	});
}
};
 
function t518_unifyColHeadersHeights(recid) {
if($(window).width()>=960){
	var t518__highestBox = 0;
	$('#rec'+recid+' .t518 .t-container .t518__col-header').each(function() {
		var t518__curcolheader = $(this);
		var t518__curcolheaderinner = t518__curcolheader.find('.t518__col-header-inner');
		var t518__curcolinnerheight = t518__curcolheaderinner.outerHeight();
		if(t518__curcolinnerheight > t518__highestBox)t518__highestBox = t518__curcolinnerheight;
	});
	$('#rec'+recid+' .t518__col-header').css('height', t518__highestBox);
}
};

function t518_unifyColItems(recid,prefixwidth) {
//if prefixwidth>400, there is just one column or block is empty
	if($(window).width()>=960 && prefixwidth!=400){
	  var t518__colsitems = new Array();
	  var t518__minitemsnumber = 0;
	  for (var i=0; i<3; i++){
	    var t518__curcolitems = document.querySelectorAll('#rec'+recid+' .t518__col_'+(i+1)+' .t518__item');
	    if(typeof t518__curcolitems!="undefined" && t518__curcolitems!=null && t518__curcolitems.length > 0){t518__colsitems.push(t518__curcolitems);}
	    if(t518__curcolitems.length>0 && ((t518__curcolitems.length<t518__minitemsnumber) || (t518__minitemsnumber==0)))
			{t518__minitemsnumber=t518__curcolitems.length;}
	  }                                                                                       
	  //unifying items heights
	  for (var i=0; i<t518__minitemsnumber; i++){
	    var t518__maxrowheight = 0;
	    for (var j=0; j<t518__colsitems.length; j++){
	      var t518__curiteminfo=t518__colsitems[j][i].querySelector('.t518__sectioninfowrapper');
	      var t518__curitempers=t518__colsitems[j][i].querySelector('.t518__personwrapper');
	      var t518__curiteminnerheight = 0;
				if (typeof t518__curiteminfo!="undefined" && t518__curiteminfo!=null) {t518__curiteminnerheight+=t518__curiteminfo.offsetHeight;}
				if (typeof t518__curitempers!="undefined" && t518__curitempers!=null) {t518__curiteminnerheight+=t518__curitempers.offsetHeight;}
	      if (t518__curiteminnerheight>t518__maxrowheight){
	        t518__maxrowheight = t518__curiteminnerheight;
	      }
	    }
	    for (var j=0; j<t518__colsitems.length; j++){
	      if (typeof t518__colsitems[j][i]!="undefined" && t518__colsitems[j][i]!=null){t518__colsitems[j][i].style.height = t518__maxrowheight+"px";}
		  var t518__personwr = t518__colsitems[j][i].querySelector('.t518__personwrapper');
		  if (typeof t518__personwr!="undefined" && t518__personwr!=null){t518__personwr.style.position = "absolute";}
	    }
	  }
	}
};
 
function t520_unifyHeight(recid) {
  var el = $('#rec'+recid),
      image = el.find('.t520__bgimg'),
      text = el.find('.t-slides__item');
  image.css('min-height', '');
  text.each(function() {
    if($(window).width()>=640){
      $('.t520__bgimg', this).css('height', $(this).height()); 
    }else{
      $('.t520__bgimg', this).css('height', '');    
    }
  });
} 
function t527_setHeight(recid) {
  var t527__el=$("#rec"+recid),
      t527__image = t527__el.find(".t527__bgimg:first"),
      t527__width = t527__image.attr("data-image-width"),
      t527__height = t527__image.attr("data-image-height"),
      t527__ratio = t527__height/t527__width,
      t527__padding = t527__ratio*100;	  
  $("#rec"+recid+" .t527__bgimg").css("padding-bottom",t527__padding+"%");  
} 
function t531_setHeight(recid) {
  var t531__el=$("#rec"+recid),
      t531__image = t531__el.find(".t531__blockimg"),
      t531__width = t531__image.attr("data-image-width"),
      t531__height = t531__image.attr("data-image-height"),
      t531__ratio = t531__height/t531__width,
      t531__padding = t531__ratio*100;
  $("#rec"+recid+" .t531__blockimg").css("padding-bottom",t531__padding+"%");

  if ($(window).width()>480){
    var t531__textwr = t531__el.find(".t531__textwrapper");
    var t531__deskimg = t531__el.find(".t531__imgwrapper");
    t531__textwr.each(function() {
    $(this).css("height", t531__deskimg.innerHeight());
    });
  }
}
 
function t532__emulateMobileHover(recid) {
  var el = $('#rec'+recid),
      cell = el.find('.t532__cell');

  cell.hover(
    function () {
      $(this).addClass("t532__cell_hover");
    },
    function () {
      $(this).removeClass("t532__cell_hover");
    }
  );
}

function t532_setHeight(recid) {  
  var t532__el=$("#rec"+recid),
			t532__image = t532__el.find(".t532__bg:first"),
			t532__wrapper = t532__el.find(".t532__table:first"),
			t532__width = t532__image.attr("data-image-width"),
			t532__height = t532__image.attr("data-image-height"),
			t532__ratio = t532__height/t532__width;		
	$("#rec"+recid+" .t532__table").css("height",t532__wrapper.innerWidth()*t532__ratio);			    
}
 
function t533_equalHeight(recid){
  var el = $('#rec'+recid);
  el.find('.t533').css('visibility', 'visible');
  el.find('.t533__textwrapper').css('height','auto');
  $('#rec'+recid+' .t533__row').each(function() {
    var highestBox = 0;
    $('.t533__textwrapper', this).each(function(){
      if($(this).height() > highestBox)highestBox = $(this).height(); 
    });  
    if($(window).width()>=960 && $(this).is(':visible')){
      $('.t533__textwrapper',this).css('height', highestBox); 
    }else{
      $('.t533__textwrapper',this).css('height', "auto");    
    }
  });
}; 
function t534_setWidth(recid){
  var el = $('#rec'+recid),
      topsection = el.find('.t534__topsection'),
      slidewidth = el.find('.t-slides__container').width();
  topsection.css('max-width', slidewidth);
} 
function t536_setWidth(recid){
  var el = $('#rec'+recid),
      topsection = el.find('.t536__topsection'),
      slidewidth = el.find('.t-slides__container').width();
  topsection.css('max-width', slidewidth);
} 
function t537_setHeight(recid) {
  var t537__el=$("#rec"+recid),
      t537__image = t537__el.find(".t537__bgimg:first"),
      t537__width = t537__image.attr("data-image-width"),
      t537__height = t537__image.attr("data-image-height"),
      t537__ratio = t537__height/t537__width,
      t537__padding = t537__ratio*100;	  
  $("#rec"+recid+" .t537__bgimg").css("padding-bottom",t537__padding+"%");  
} 
function t538_setWidth(recid){
  var el = $('#rec'+recid),
      topsection = el.find('.t538__topsection'),
      slidewidth = el.find('.t-slides__container').width();
  topsection.css('max-width', slidewidth);
} 
function t539_equalHeight(recid,blocks){
  var t539__el = $('#rec'+recid),
      t539__cols = t539__el.find(".t539__textwrapper");
	t539__cols.css("height","auto");
	if($(window).width()<=480){                                                
      t539__el.find('.t539').css('visibility', 'visible');
      return;                                                     
    }
	if ($(window).width()<=960) {var t539__perRow = 2;}
	else {var t539__perRow = +blocks;}
	for( var i = 0; i < t539__cols.length; i +=t539__perRow )
	{
		var t539__maxHeight = 0,
				t539__row = t539__cols.slice(i, i + t539__perRow);
		t539__row.each(function(){
			var t539__itemHeight = $(this).outerHeight();
			if ( t539__itemHeight > t539__maxHeight ) { t539__maxHeight = t539__itemHeight; }
		});
		t539__row.css( "height", t539__maxHeight );
	}
  t539__el.find('.t539').css('visibility', 'visible');
};

function t539_setHeight(recid) {
  var t539__el=$("#rec"+recid),
      t539__image = t539__el.find(".t539__bgimg:first"),
      t539__width = t539__image.attr("data-image-width"),
      t539__height = t539__image.attr("data-image-height"),
      t539__ratio = t539__height/t539__width,
      t539__padding = t539__ratio*100;	  
  $("#rec"+recid+" .t539__bgimg").css("padding-bottom",t539__padding+"%");  
}

 
function t544_setHeight(recid) {
  var el=$('#rec'+recid);
  var sizer = el.find('.t544__sizer');
  var height = sizer.height();
  var width = sizer.width();
  var ratio = width/height;
  var imgwrapper = el.find(".t544__blockimg, .t544__textwrapper");
  var imgwidth = imgwrapper.width();
  if (height != $(window).height()) {
    imgwrapper.css({'height':((imgwidth/ratio)+'px')});
  }
} 
function t545_setHeight(recid) {
  var el=$('#rec'+recid);
  el.find('.t-container').each(function() {
    var highestBox = 0;
    $('.t545__col', this).each(function(){
        if($(this).height() > highestBox)highestBox = $(this).height(); 
    });
    $('.t545__textwrapper',this).css('height', highestBox);
    $('.t545__blockimg',this).css('height', highestBox);
  });
} 
function t552_init(recid,ratio){	
  var t552__el=$("#rec"+recid),
      t552__image = t552__el.find(".t552__blockimg:first");    

  t552__setHeight(recid,t552__image,ratio);
  var t552__doResize;
  $(window).resize(function(){
    clearTimeout(t552__doResize);
    t552__doResize = setTimeout(function() {
    	t552__setHeight(recid,t552__image,ratio);
    }, 200);
  });
}

function t552__setHeight(recid,image,ratio){  
  $("#rec"+recid+" .t552__blockimg").css("height",Math.round(image.innerWidth()*ratio));    	    
} 
function t557_init(recid,snowtype){
	$('<img/>').attr('src', 'https://static.tildacdn.com/img/snowflakes_1.png').load(function() {$(this).remove();});
	$('<img/>').attr('src', 'https://static.tildacdn.com/img/snowflakes_2.png').load(function() {$(this).remove();});
	$('<img/>').attr('src', 'https://static.tildacdn.com/img/snowflakes_3.png').load(function() {
		$(this).remove();
		t557__addSnow(recid,snowtype);
	});
}

function t557__addSnow(recid,snowtype){
  	var el=$('#rec'+recid),
  		t557_ids=el.find('.t557__snow-recid-holder').attr('data-snow-rec-ids').split(',');
	if (t557_ids!=""){
        t557_ids.forEach(function(rec_id, i, arr){
						var t557_zeroattr=$('#rec'+rec_id).attr('data-record-type');						
						if(t557_zeroattr==396){
							var t557_wrappertype=" .t396__artboard";						
						}else{							
							var t557_wrappertype=" .t-cover";						
						}
						var t557_cover=document.querySelector('#rec'+rec_id+t557_wrappertype);
						if (t557_cover!=null){
								var t557_snow = document.createElement('div');
								t557_snow.className = snowtype;
								t557_cover.appendChild(t557_snow);	
						}            
        });
	} else {
		t557_cover=$('.t-cover').first();
		var t557_snow = document.createElement('div');
		t557_snow.className = snowtype;
        t557_cover.append(t557_snow);
	}
	$('.'+snowtype).animate({"opacity": "1"}, 1000, function() {});
}
 
function t569_init(recid){
  var el = $('#rec'+recid),
      line = el.find('.t569__line'),
      blocksnumber = el.find('.t569').attr('data-blocks-count'),
      t569_resize;

  if (blocksnumber=='4') {
    var cirqlenumber = 4;
  } else {
    var cirqlenumber = 8;
  }

  line.each(function() {
    var e = $(this).find('.t569__cirqle');
    for (i = 0; i < cirqlenumber; i++) {
      e.clone().insertAfter(e);
    }
  });
                      
  line.css('max-width', $('.t569__col').width() - $('.t569__bgimg').outerWidth());
                                 
  $(window).resize(function() {
    if (t569_resize) clearTimeout(t569_resize);
    t569_resize = setTimeout(function() {
      line.css('max-width', $('.t569__col').width() - $('.t569__bgimg').outerWidth());
    }, 200);        
  });
} 
function t570_init(recid){
if($(window).width()>750){
  t570_setMapHeight(recid);

  $(window).load(function() {
      t570_setMapHeight(recid);
  });

  $(window).resize(function(){
    t570_setMapHeight(recid);
  });
}
}

function t570_setMapHeight(recid) {
  var t570__el=$('#rec'+recid),
  	  t570__map = t570__el.find('.t-map');
  var t570__textwrapper = t570__el.find('.t570__col_text').height();
  t570__map.css('height', t570__textwrapper);
} 
function t576_init(recid){
  var el = $('#rec'+recid),
      line = el.find('.t576__line'),
      cirqle = el.find('.t576__cicqle'),
      block = el.find('.t576__item'),
      t576_resize;

  block.each(function() {
    $(this).find('.t576__circle').css('top', $(this).find('.t576__img').outerHeight() + 15);
  });

  $('.t576__item:first-child').find('.t576__line').css('top', $('.t576__item:first-child').find('.t576__img').outerHeight() + 15);
                      
  $('.t576__item:last-child').find('.t576__line').css('height', $('.t576__item:last-child').find('.t576__img').outerHeight() + 20);
} 
function t577_equalHeight(recid){
  var el = $('#rec'+recid);
  el.find('.t577').css('visibility', 'visible');
  el.find('.t577__textwrapper').css('height','auto');
  el.find('.t577__descr').css('height','auto');
  $('#rec'+recid+' .t577__row').each(function() {
    var highestBox = 0;
    $('.t577__textwrapper', this).each(function(){
      if($(this).height() > highestBox)highestBox = $(this).height(); 
    });  
    if($(window).width()>=960 && $(this).is(':visible')){
      $('.t577__textwrapper',this).css('height', highestBox); 
    }else{
      $('.t577__textwrapper',this).css('height', "auto");    
    }
  });
  $('#rec'+recid+' .t577__row').each(function() {
    var highestBox = 0;
    $('.t577__descr', this).each(function(){
      if($(this).height() > highestBox)highestBox = $(this).height(); 
    });  
    if($(window).width()>=960 && $(this).is(':visible')){
      $('.t577__descr',this).css('height', highestBox); 
    }else{
      $('.t577__descr',this).css('height', "auto");    
    }
  });
}; 
function t590_init(recid,height){	
  t590__setHeight(recid,height);  

  var t590__doResize;
  $(window).resize(function(){
    clearTimeout(t590__doResize);
    t590__doResize = setTimeout(function() {
    	t590__setHeight(recid);
    }, 200);
  });
}

function t590__setHeight(recid,height) {      
  if (height=="" || typeof height=="undefined"){
  var t590__el=$("#rec"+recid),
      t590__div=t590__el.find("#youtubeiframe"+recid),
      t590__height=t590__div.width() * 0.5625;
  t590__div.height(t590__height);
  t590__div.parent().height(t590__height);         
  }  
}