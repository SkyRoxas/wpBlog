(function ($) {
  $.fn.scrollbarFaker = function ($setting) {
    var fnSelect = this

    // prevent $setting null value
    $setting || ($setting = {})

    // settings item
    var $bold = $setting.bold
    var $color = $setting.color
    var $background = $setting.background

    // default settings
    $bold || ($bold = '5px')
    $color || ($color = '#4183C4')
    $background || ($background = 'rgba(0,0,0,0.1)')

    // Architecture
    var scrollbarFaker = 'scrollbarFaker'
    fnSelect.append('<div class ="' + scrollbarFaker + '"><div style ="position:relative"><div class ="nav"></div></div></div>')

    // clip origin scrollbar
    function clipEvent () {
      var $browserScoll = 15
      // prevent mobile system
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $browserScoll = 0
      }
      fnSelect.css('clip', 'rect(auto, ' + (fnSelect.innerWidth() - $browserScoll) + 'px, auto, auto)')
    }

    // default event
    function defaultEvent () {
      fnSelect.find('.' + scrollbarFaker).css({
        'position': 'absolute',
        'right': '0',
        'top': fnSelect.scrollTop(),
        'display': 'block',
        'height': fnSelect.outerHeight()
      })

      fnSelect.find('.' + scrollbarFaker).children().css({
        'position': 'relative',
        'display': 'block',
        'width': $bold,
        'height': '100%',
        'right': '0',
        'background': $background,
        'z-index': 500
      })
      fnSelect.find('.' + scrollbarFaker).children().children().css({
        'position': 'absolute',
        'right': '0',
        'top': (fnSelect.outerHeight() / fnSelect[0].scrollHeight) * fnSelect.scrollTop(),
        'display': 'block',
        'width': $bold,
        'height': (fnSelect.outerHeight() / fnSelect[0].scrollHeight) * 100 + '%',
        'background': $color
      })
    }

    // set up function
    $(document).ready(function () {
      clipEvent()
      defaultEvent()
    })
    $(window).resize(function () {
      clipEvent()
      defaultEvent()
    })
    fnSelect.scroll(function () {
      defaultEvent()
    })
  }
})(jQuery)
