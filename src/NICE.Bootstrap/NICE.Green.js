export var Green = function (element, options) {
    this.$element = $(element);
    this.options = options;
}

Green.prototype = {
    load: function() {
        console.log("green load", this.$element);
      this.$element.css({ color: "green" });

      this.$element.after("<p data-red>Red</p>")
    }
};


/* PLUGIN DEFINITION
* ======================== */

var green = $.fn.green

$.fn.green = function (option) {
    return this.each(function () {
        var $this = $(this)
          , data = $this.data('green')
          , options = $.extend({}, $.fn.green.defaults, $this.data(), options);

        if (!data) $this.data('green', (data = new Green(this, options)));

        data.load();
    })
}

$.fn.green.defaults = {
}

$.fn.green.Constructor = Green;


/* NO CONFLICT
* ================== */

$.fn.green.noConflict = function () {
    $.fn.green = old;

    return this;
}


/* DATA-API
* =============== */

function setup() {
    $('[data-green]')
        .each(function() {
            $(this).green();
        });
}

$(() => {
    setup();
})