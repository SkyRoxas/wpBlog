(function ($) {
  $.fn.scrollStateBar = function ($setting) {
    var scrollState = 'scrollState'

    // prevent $setting value null
    $setting || ($setting = {})

    // setting item
    var $color = $setting.color
    var $bold = $setting.bold
    var $index = $setting.index
    var $transition = $setting.transition

    // default setting
    $color || ($color = '#4A8CB4')
    $bold || ($bold = '4px')
    $index || ($index = '100')
    $transition || ($transition = '1s')

    // Architecture
    $('body').prepend('<div class =' + scrollState + '></div>')

    // select item
    var scrollStateSelect = $('.' + scrollState)

    // css style
    scrollStateSelect.css({
      'display': 'block',
      'transition': $transition,
      'height': $bold,
      'background': $color,
      'position': 'fixed',
      'z-index': $index
    })

    // scroll event
    function scrollEvent () {
      var $animateWidth

      $animateWidth = ($(window).height() + $(window).scrollTop()) / $(document).height() * 100

      if ($(window).scrollTop() === 0) {
        scrollStateSelect.css({
          'width': '0'
        })
      } else {
        scrollStateSelect.css({
          'width': $animateWidth + '%'
        })
      }
    }

    // start up function
    $(document).ready(function () {
      scrollEvent()
    })
    $(window).scroll(function () {
      scrollEvent()
    })
  }
})(jQuery)
