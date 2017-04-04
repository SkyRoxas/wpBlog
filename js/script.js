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
      'color': '#4183C4',
      'transition': '1.2s'
    })

        // topAnimate plugin
    $('.scrollFixed__nav').topAnimate({
      'direction': 'left',
      'row': 10,
      'column': 150
    })

        // scrollClass
    setTimeout(function () {
      $('.article-wrapper.avatar').scrollClass({
        'className': 'animate_right',
        'delay': 500,
      })

      $('.article-wrapper.body').scrollClass({
        'className': 'animate_left',
        'delay': 700
      })

      $('.article-wrapper.postdate').scrollClass({
        'className': 'animate_fadeIn',
        'delay': 300
      })
    }, 700)
  })
})(jQuery)
