(function ($) {
  $(document).ready(function () {
    // scrollFixed plugin
    $('#sidebar').scrollFixed({
      'begin': '#banner',
      'end': '#footer',
      'breakpoint': 960,
      'navElement': '.scrollFixed__nav'
    })
    // scrollStateBar plugin
    $('body').scrollStateBar()

    // scrollbarFaker plugin
    $('#sidebar').scrollbarFaker()

    // lineAnimate plugin
    $('.archive-list_time-line').find('ul').lineAnimate({
      'positionElement': '.postdate',
      'color': '#98ACC0'
    })

    // topAnimate plugin
    $('.scrollFixed__nav').topAnimate({
      'direction': 'left',
      'row': 10,
      'column': function () {
        if ($(window).width() > 960) {
          return 200
        } else {
          return 150
        }
      }
    })
  })
})(jQuery)
