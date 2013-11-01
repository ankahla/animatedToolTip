(function($)
{
    $.fn.animatedToolTip=function(options)
    {
	var plugin_options={
  content: 'My first tooltip',
  duration:10
};
$.extend( plugin_options, options );
var innerhtml='<div class="animated-tip"><div class="content"><div class="inner">'+plugin_options.content+'</div></div><div class="arrow"></div></div>';
       return this.each(function()
       {
var uniqid=(Math.random() + '').replace('0.', '');	   
var the_tooltip=jQuery(innerhtml).attr('id',uniqid);
var pos=jQuery(this).position();
var count=Math.ceil(plugin_options.duration/0.7);

the_tooltip.css({
'animation-iteration-count':count,
'-webkit-animation-iteration-count':count
})
jQuery(this).after(the_tooltip);
var element_width=jQuery(this).width();
the_tooltip.css({
left:pos.left+element_width/2-10,
top:pos.top-the_tooltip.height()
});



       });
    };
})(jQuery);