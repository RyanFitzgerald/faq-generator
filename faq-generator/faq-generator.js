/*
    FAQ Generator - Automatic FAQ JavaScript Generator
    Version 1.0.0
    Ryan Fitzgerald
    https://RyanFitzgerald.ca/
    ---
    Repo: http://github.com/ryanfitzgerald/faq-generator
    Issues: http://github.com/ryanfitzgerald/faq-generator/issues
    Licensed under MIT Open Source
 */


(function($) {

    $.fn.faqGenerator = function(options) {

        // Override defaults, if provided
        var settings = $.extend({
            theme: null,
            limitOne: false,
            startOpen: false
        }, options);

        // Allow chaining and process each DOM node
        return this.each(function() {

            // Store reference to self
            var $this = $(this);

            // Add classes
            $this.addClass("faqgen");
            $this.find("li").addClass("faqgen-item");
            $this.find("li > div:first-child").addClass("faqgen-question");
            $this.find("li > div:last-child").addClass("faqgen-answer");

            // Store reference to questions
            var $questions = $(this).find(".faqgen-question");

            // Store reference to answers
            var $answers = $(this).find(".faqgen-answer");

            // Add theme if provided
            if (settings.theme != null) {
                $this.addClass(settings.theme);
            }

            // Hide all answers unless start set to true
            if (!settings.startOpen || settings.limitOne) {
                $answers.hide();
            } else {
                $answers.addClass("active");
            }

            // Handle click functionality
            $questions.click(function() {

                // Store sibling (answer)
                $sibling = $(this).siblings(".faqgen-answer");

                // Store icon (if exists)
                $icon = $(this).find(".faqgen-icon");

                if ($sibling.hasClass("active")) {

                    // Remove active question
                    $(this).siblings(".faqgen-answer").slideToggle(300).toggleClass("active");

                } else {

                    // Remove previous active question
                    if (settings.limitOne) {
                        $this.find(".active").slideToggle(300).toggleClass("active");
                    }

                    // Slide down and toggle active class
                    $sibling.slideToggle(300).toggleClass("active");

                }

                // TO DO - Change icon

                // TO DO - Add open all button functionality (data-faq=ID of one to open)

            });

        });

    }

})(jQuery);
