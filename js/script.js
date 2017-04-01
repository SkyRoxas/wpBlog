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
      'transition': '0.8s'
    })

    // topAnimate plugin
    $('.scrollFixed__nav').topAnimate({
      'direction': 'left',
      'row': 10,
      'column': 150
    })

    // scrollClass
    // $('.article-wrapper.postdate').scrollClass({
    //   'className': 'test',
    //   'delay': 200
    // })
    //
    // $('.article-wrapper.avatar').scrollClass({
    //   'className': 'test',
    //   'delay': 500
    // })
    //
    // $('.article-wrapper.body').scrollClass({
    //   'className': 'test',
    //   'delay': 700
    // })
  })
})(jQuery)
