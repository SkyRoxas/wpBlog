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
    if ($(window).width() > 768) {
      $('.archive-list_time-line').find('ul').lineAnimate({
        'positionElement': '.postdate',
        'color': '#4183C4',
        'transition': '1.2s'
      })
    } else {
      $('.archive-list_time-line').find('ul').lineAnimate({
        'positionElement': '.postdate',
        'color': '#4183C4',
        'transition': '0'
      })
    }

        // topAnimate plugin
    $('.scrollFixed__nav').topAnimate({
      'direction': 'left',
      'row': 10,
      'column': 150
    })

        // scrollClass
    setTimeout(function () {
      scrollClassSet()
      $(window).resize(function () {
        scrollClassSet()
      })
    }, 700)
  })

  $(document).ajaxComplete(function () {
    scrollClassSet()
  })

  function scrollClassSet () {
    if ($(window).width() > 768) {
      $('.article-wrapper.avatar').scrollClass({
        'className': 'animate_right',
        'delay': 350
      })

      $('.article-wrapper.body').scrollClass({
        'className': 'animate_left',
        'delay': 450
      })

      $('.article-wrapper.postdate').scrollClass({
        'className': 'animate_fadeIn',
        'delay': 150
      })
    }
  }
})(jQuery)
