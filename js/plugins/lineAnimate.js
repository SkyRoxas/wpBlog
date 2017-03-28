(function ($) {
  $.fn.lineAnimate = function ($setting) {
    var fnSelect = this

    // prevent $setting value null
    $setting || ($setting = {})

    var positionElement = $setting.positionElement

    // setting item
    var $color = $setting.color
    var $bold = $setting.bold
    var $transition = $setting.transition

    // default setting
    $color || ($color = '#4A8CB4')
    $bold || ($bold = '4px')
    $transition || ($transition = '1.7s')

    // Architecture
    var lineElement = 'lineElement'
    fnSelect.prepend('<div class =' + lineElement + '></div>')

    // defalult css style
    function defaultStyle () {
      // select item
      fnSelect.css({
        'position': 'relative'
      })

      // lineElement style
      fnSelect.find('.' + lineElement).css({
        'display': 'block',
        'width': $bold,
        'background': $color,
        'position': 'absolute',
        'top': '0',
        'height': '0'
      })
    }

    function linePosition () {
      if (positionElement) {
        fnSelect.find('.' + lineElement).css({
          'left': (($(positionElement).position().left + ($(positionElement).innerWidth()) / 2) / fnSelect.innerWidth()) * 100 + '%',
          'transform': 'translate(-50%, 0%)'
        })
      } else {
        fnSelect.find('.' + lineElement).css({
          'left': '50%',
          'transform': 'translate(-50%, 0%)'
        })
      }
    }

    function lineHeight () {
      fnSelect.find('.' + lineElement).css({
        'height': $(window).outerHeight() + $(window).scrollTop(),
        'transition': $transition
      })
    }

    // set up function
    $(document).ready(function () {
      defaultStyle()
      linePosition()
      lineHeight()
    })
    $(window).resize(function () {
      lineHeight()
      setTimeout(function () {
        linePosition()
      }, 500)
    })
    $(window).scroll(function () {
      lineHeight()
    })
  }
})(jQuery)
