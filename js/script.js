alert(123);
(function ($) {
  $.fn.scrollFixd = function ($setting) {
    var scrollFixedItem = this
    var beginElement = $setting.begin
    var endElement = $setting.end

    function Position (beginElement, endElement) {
      this.begin = $(beginElement).offset().top + $(beginElement).outerHeight()
      this.end = $(endElement).offset().top
    }

    $(scrollFixedItem).parent().css({
      'position': 'relative',
      'width': $(scrollFixedItem).innerWidth()
    })

    function scrollEvent () {
      var scrollPosition = new Position(beginElement, endElement)

      $(scrollFixedItem).css({
        'position': 'absolute',
        'top': '0',
        'bottom': 'auto',
        'height': $(window).outerHeight(),
        'overflow-y': 'scroll'
      })

      if ($(window).scrollTop() > scrollPosition.begin && $(window).scrollTop() < scrollPosition.end - $(window).height()) {
        $(scrollFixedItem).css({
          'position': 'fixed'
        })
      } else {
        $(scrollFixedItem).css({
          'position': 'absolute'
        })
      }
      if ($(window).scrollTop() < scrollPosition.end - $(window).height()) {
        $(scrollFixedItem).css({
          'top': '0',
          'bottom': 'auto'
        })
      } else {
        $(scrollFixedItem).css({
          'top': 'auto',
          'bottom': '0'
        })
      }
    }

    scrollEvent()
    $(window).resize(function () {
      scrollEvent()
    })
    $(window).scroll(function () {
      scrollEvent()
    })
  }

  $(document).ready(function () {
    $('#sidebar').scrollFixd({
      'begin': '#banner',
      'end': '#footer'
    })
  })
})(jQuery)
