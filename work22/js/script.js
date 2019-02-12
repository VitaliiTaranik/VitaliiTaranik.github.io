$(function () {

    // Preloader
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

    
    // Параллакс от движения мыши
    if ($(window).width() > 1100)
    {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.ellips',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 3,
                                'multiplier': 0.007,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'bottom': {
                                'initial': -8.1,
                                'multiplier': 0.007,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                },
                
                {
                'selector': '.lines-dot',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 6,
                                'multiplier': 0.005,
                                'unit': '%',
                                'invert': true
                            }
                        },
                        'y': {
                            'bottom': {
                                'initial': 5,
                                'multiplier': 0.005,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                },

                {
                'selector': '.plus-yellow',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': -24,
                                'multiplier': 0.004,
                                'unit': '%',
                                'invert': true
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -44,
                                'multiplier': 0.004,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                },

                {
                'selector': '.line-wave',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 10,
                                'multiplier': 0.003,
                                'unit': '%',
                                'invert': true
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -31,
                                'multiplier': 0.003,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                },

                {
                'selector': '.rnb-man',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': -10,
                                'multiplier': 0.0002,
                                'unit': '%',
                                'invert': true
                            }
                        },
                        'y': {
                            'bottom': {
                                'initial': 0,
                                'multiplier': 0,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                },
            ]
        });
    }

    // Анимация

    $(window).scroll(function() {
        $('.circle').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+550) {
                $(this).addClass("fadeInRight");
            }
        });
    });
    
});