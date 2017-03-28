(function ($) {
  $(document).ready(function () {
    // scrollFixed plugin
    $('#sidebar').scrollFixed({
      'begin': '#banner',
      'end': '#footer',
      'breakpoint': 960,
      'navElement': '#banner'
    })
    $('body').scrollStateBar()

    $('#sidebar').scrollbarFaker()
  })
})(jQuery)
