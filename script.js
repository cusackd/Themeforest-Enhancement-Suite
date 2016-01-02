function loadImageX(){
  console.log('load image');
  var x = $('.product-list').children('li');

  $.each( x, function( index, value ){

    var link = $(value).find('.landscape-image-magnifier').attr('data-preview-url');

    $(value).prepend('<div style="text-align:center; margin-bottom: 10px;"><img style="max-width: 100%;" src="'+link+'"></div>');

  })

}


loadImageX();
