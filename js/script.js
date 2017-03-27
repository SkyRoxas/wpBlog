(function ($) {
  $(document).ready(function () {
    // scrollFixed plugin
    $('#sidebar').scrollFixed({
      'begin': '#banner',
      'end': '#footer',
      'breakpoint': 760,
      'navElement': '#content'
    })
    $('body').scrollStateBar()

    $('#sidebar').scrollbarFaker()
  })
})(jQuery)
