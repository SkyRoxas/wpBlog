(function ($) {
  $.fn.topAnimate = function ($setting) {
    var fnSelect = this

    $setting || ($setting = {})

    // setting item
    var $direction = $setting.direction
    var $row = $setting.row
    var $column = $setting.column
    var $transition = $setting.transition
    var $index = $setting.index

    // defalult setting
    $column || ($column = 0)
    $direction || ($direction = 'left')
    $row || ($row = 0)
    $transition || ($transition = '1s')
    $index || ($index = 500)

    function defaultStyle () {
      fnSelect.parent().css({
        'position': 'relative'
      })
      fnSelect.css({
        'transition': $transition,
        'position': 'absolute',
        'z-index': $index,
        [$direction]: $row
      })
    }

    function positionTop () {
      fnSelect.css({
        'top': $column
      })
      if ($(window).scrollTop() > fnSelect.parent().offset().top) {
        fnSelect.css({
          'top': $(window).scrollTop() - fnSelect.parent().offset().top + $column
        })
      }
    }

    // set up function
    $(document).ready(function () {
      defaultStyle()
      positionTop()
    })
    $(window).scroll(function () {
      positionTop()
    })
  }
})(jQuery)
