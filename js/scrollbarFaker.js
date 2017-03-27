(function ($) {
  $.fn.scrollbarFaker = function ($setting) {
    var fnSelect = this

    // prevent $setting null value
    $setting || ($setting = {})

    // settings item
    var $bold = $setting.bold
    var $color = $setting.color

    // default settings
    $bold || ($bold = '4px')
    $color || ($bold = 'rgba(229,229,229,0.8)')

    // Architecture
    var scrollbarFaker = 'scrollbarFaker'
    fnSelect.append('<div class ="' + scrollbarFaker + '"><div class ="nav"></div></div>')
    var scrollbarFakerSelect = $('.' + scrollbarFaker)

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
        'width': $bold,
        'height': fnSelect.innerHeight(),
        'background': $color
      })

      fnSelect.find('.' + scrollbarFaker).children().css({
        'position': 'relative',
        'display': 'block',
        'width': $bold,
        'height': '100%',
        'right': $bold
      })
    }

    // scroll event
    function scrollEvent () {}
    defaultEvent()
  }
})(jQuery)
