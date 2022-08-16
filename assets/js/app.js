(function() {
    let devProjectContentInner = document.querySelectorAll('.dev-project-content-inner');
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        //document.getElementById('yourDiv').scrollLeft -= (delta * 40); // Multiplied by 40
        devProjectContentInner.forEach(e => {
            e.scrollLeft -= (delta * 40);
        })
        e.preventDefault();
    }
    
    devProjectContentInner.forEach(function(e) {
        if (e.addEventListener) {
            // IE9, Chrome, Safari, Opera
            e.addEventListener('mousewheel', scrollHorizontally, false);
            // Firefox
            e.addEventListener('DOMMouseScroll', scrollHorizontally, false);
        } else {
            // IE 6/7/8
            e.attachEvent('onmousewheel', scrollHorizontally);
        }
    })
    
})();


// load more blog
function loadMoreBlog(count) {
    setTimeout(() => {
        if ($(".blog-item:hidden").length < 1) {
            $('.blog-load-button').remove();
        } else {
    
        }
    }, 100);
        
    for (let i = 0; i < count; i++) {
        $('.blog-item:eq(' + i + ')').addClass('load');
    };
    let calcCount = Number(count) + 2;
    $('.blog__button').remove();
    $('.blog-load-button').append('<button type="button" class="blog__button" onclick="loadMoreBlog(' + calcCount + ')"><p>Показать еще</p></button>');
};
loadMoreBlog(8);

// load more project
function loadMoreProject(count) {
    setTimeout(() => {
        if ($(".project-item:hidden").length < 1) {
            $('.project-load-button').remove();
        } else {
    
        }
    }, 100);
        
    for (let i = 0; i < count; i++) {
        $('.project-item:eq(' + i + ')').addClass('load');
    };
    let calcCount = Number(count) + 2;
    $('.project__button').remove();
    $('.project-load-button').append('<button type="button" class="project__button" onclick="loadMoreProject(' + calcCount + ')"><p>Показать еще</p></button>');
};
loadMoreProject(6);



function verticalScroll () {
    $('.scroll').parent().parent().find('.dev-project-slide').each(function () {
        $(this).parent().parent().find('.scroll-inner').css("width", $(this).width());
    });
    

    $('.dev-project-content-inner').each(function() {
        $(this).scroll(function(){
            $(this).parent().parent().find('.scroll').scrollLeft($(this).scrollLeft());
        })
    });
    $('.scroll').each(function() {
        $(this).scroll(function(){
            $(this).parent().parent().find('.dev-project-content-inner').scrollLeft($(this).scrollLeft());
        })
    });
    

    $('.scroll').parent().parent().find('.about-nav').each(function () {
        $(this).parent().parent().find('.scroll-inner').css("width", $(this).width());
    });
    $('.about-inner-block').each(function() {
        $(this).scroll(function(){
            $(this).parent().parent().find('.scroll').scrollLeft($(this).scrollLeft());
        })
    });
    $('.scroll').each(function() {
        $(this).scroll(function(){
            $(this).parent().parent().find('.about-inner-block').scrollLeft($(this).scrollLeft());
        })
    });
};

function adaptiveHeader () {
    if($(window).innerWidth() < 992) {
        $('.header-contacts__telegram').append(`<p>Telegram<p>`);
        $('.header-contacts__telegram img').remove();
    } else {

    }
};
adaptiveHeader();
//replacement image section telegram adaptive
function iconReplacementTelegram () {
    if($(window).innerWidth() < 768) {
        $('.telegram-block__svg svg').replaceWith(`
        <svg width="90" height="167" viewBox="0 0 90 167" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.9284 101.025L36.3546 99.5872L36.3546 99.5872L35.9284 101.025ZM25.6307 87.8122L24.1372 87.6726L25.6307 87.8122ZM40.1251 79.9462L40.8588 78.6379L40.1251 79.9462ZM42.9737 121.072L44.3399 121.691L44.3399 121.691L42.9737 121.072ZM18.2469 150.522L19.1502 151.72L18.2469 150.522ZM1.02195 157.37C0.607441 158.088 0.852881 159.005 1.57015 159.42L13.2588 166.174C13.976 166.589 14.8935 166.343 15.308 165.626C15.7225 164.909 15.4771 163.991 14.7598 163.577L4.36994 157.573L10.3742 147.183C10.7887 146.466 10.5432 145.548 9.82595 145.134C9.10868 144.719 8.1912 144.965 7.77669 145.682L1.02195 157.37ZM82.4584 41.0836L81.1428 41.8041L82.4584 41.0836ZM4.21062 0.155056C3.3827 0.126066 2.68803 0.773726 2.65904 1.60165C2.63005 2.42957 3.27771 3.12423 4.10563 3.15322L4.21062 0.155056ZM78.7388 88.884C69.3825 101.724 52.4819 104.367 36.3546 99.5872L35.5022 102.464C52.3143 107.446 70.7782 104.903 81.1634 90.6507L78.7388 88.884ZM36.3546 99.5872C34.5577 99.0547 32.0734 97.4249 30.0986 95.1727C28.1169 92.9129 26.9025 90.3224 27.1242 87.9519L24.1372 87.6726C23.8059 91.2154 25.6052 94.5987 27.843 97.1507C30.0876 99.7104 33.0287 101.731 35.5022 102.464L36.3546 99.5872ZM27.1242 87.9519C27.3861 85.15 29.0297 82.6478 31.3272 81.2652C33.5846 79.9068 36.4791 79.6214 39.3914 81.2545L40.8588 78.6379C36.9585 76.4508 32.9133 76.8095 29.7804 78.6948C26.6876 80.5559 24.4902 83.8968 24.1372 87.6726L27.1242 87.9519ZM39.3914 81.2545C46.1766 85.0594 48.2222 91.4813 47.8115 98.78C47.3975 106.138 44.4757 114.123 41.6074 120.452L44.3399 121.691C47.2494 115.271 50.3608 106.875 50.8068 98.9485C51.2561 90.9628 48.9885 83.1967 40.8588 78.6379L39.3914 81.2545ZM41.6074 120.452C36.7362 131.202 27.5242 141.647 17.3437 149.325L19.1502 151.72C29.6255 143.819 39.2131 133.004 44.3399 121.691L41.6074 120.452ZM17.3437 149.325C15.5934 150.645 12.8116 152.201 9.88106 153.584C6.95537 154.965 3.99917 156.119 1.93304 156.672L2.70832 159.57C5.01625 158.953 8.15293 157.718 11.1617 156.297C14.1657 154.879 17.16 153.221 19.1502 151.72L17.3437 149.325ZM81.1634 90.6507C91.381 76.6286 93.0216 57.2473 83.774 40.363L81.1428 41.8041C89.8399 57.6833 88.2628 75.8137 78.7388 88.884L81.1634 90.6507ZM83.774 40.363C73.2501 21.1484 53.2159 11.1311 36.0627 5.90702C27.4592 3.2868 19.5097 1.85036 13.7121 1.06836C10.8117 0.677148 8.44578 0.449187 6.80077 0.318863C5.97817 0.253693 5.33553 0.212914 4.89615 0.188343C4.67645 0.176057 4.50753 0.167822 4.39232 0.162615C4.33471 0.160011 4.29052 0.158165 4.26011 0.156948C4.24491 0.156339 4.23316 0.155888 4.22489 0.155578C4.22076 0.155423 4.2175 0.155303 4.21512 0.155217C4.21393 0.155173 4.2128 0.155133 4.21221 0.155112C4.2113 0.15508 4.21062 0.155056 4.15812 1.65414C4.10563 3.15322 4.10539 3.15321 4.10537 3.15321C4.10565 3.15322 4.10584 3.15323 4.10641 3.15325C4.10755 3.15329 4.10956 3.15336 4.11244 3.15347C4.1182 3.15369 4.12743 3.15404 4.1401 3.15455C4.16543 3.15556 4.20447 3.15719 4.25688 3.15956C4.36169 3.16429 4.51991 3.17199 4.72865 3.18366C5.14614 3.20701 5.7656 3.24625 6.56384 3.30949C8.16054 3.43599 10.4713 3.65841 13.3111 4.04143C18.9936 4.80791 26.778 6.21537 35.1887 8.77688C52.0639 13.9163 71.1798 23.6137 81.1428 41.8041L83.774 40.363Z" fill="#53B3EE"/>
        </svg>
        `);
     } else {
        $('.telegram-block__svg svg').replaceWith(`
        <svg width="112" height="51" viewBox="0 0 112 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.31012 0.532407C1.49959 0.361135 0.70368 0.879355 0.532407 1.68988C0.361135 2.50041 0.879355 3.29632 1.68988 3.46759L2.31012 0.532407ZM42.4789 29.8517L41.1358 30.5196L42.4789 29.8517ZM39.5 46.5L40.3823 47.7131L39.5 46.5ZM23.2958 41.0082L21.8363 41.3546L23.2958 41.0082ZM53 11L52.5531 9.56812L53 11ZM93 9.5L93.2712 8.02472L93 9.5ZM110.338 17.7037C111.145 17.517 111.648 16.7113 111.461 15.9042L108.418 2.75169C108.231 1.94459 107.426 1.44168 106.619 1.62843C105.812 1.81517 105.309 2.62084 105.495 3.42795L108.2 15.1191L96.5093 17.8241C95.7022 18.0109 95.1993 18.8165 95.3861 19.6236C95.5728 20.4307 96.3785 20.9336 97.1856 20.7469L110.338 17.7037ZM1.68988 3.46759C22.6378 7.89409 34.41 16.9939 41.1358 30.5196L43.822 29.1838C36.6045 14.6694 23.9538 5.10591 2.31012 0.532407L1.68988 3.46759ZM41.1358 30.5196C41.981 32.2193 42.462 35.1734 42.1087 38.1694C41.7547 41.1703 40.6123 43.8363 38.6177 45.2869L40.3823 47.7131C43.3323 45.5676 44.6855 41.9332 45.088 38.5208C45.4911 35.1034 44.9893 31.5314 43.822 29.1838L41.1358 30.5196ZM38.6177 45.2869C36.2566 47.0041 33.1445 47.4812 30.4381 46.6931C27.7755 45.9176 25.5312 43.9314 24.7552 40.6618L21.8363 41.3546C22.8825 45.7627 25.9904 48.5224 29.5993 49.5734C33.1645 50.6117 37.2434 49.9959 40.3823 47.7131L38.6177 45.2869ZM24.7552 40.6618C22.9453 33.0361 26.4487 27.1576 32.3771 22.5039C38.3476 17.8172 46.5573 14.5821 53.4469 12.4319L52.5531 9.56812C45.5735 11.7465 36.9363 15.1111 30.5247 20.1442C24.0709 25.2102 19.6568 32.1716 21.8363 41.3546L24.7552 40.6618ZM53.4469 12.4319C65.1599 8.77623 79.6747 8.57542 92.7288 10.9753L93.2712 8.02472C79.8654 5.5602 64.8401 5.73335 52.5531 9.56812L53.4469 12.4319ZM92.7288 10.9753C94.9809 11.3893 98.1336 12.4147 101.252 13.6661C104.367 14.9158 107.329 16.3434 109.206 17.5148L110.794 14.9699C108.709 13.668 105.567 12.1649 102.37 10.8819C99.1767 9.60073 95.8106 8.49157 93.2712 8.02472L92.7288 10.9753Z" fill="#53B3EE"/>
                        </svg>
        `);
    }
}
iconReplacementTelegram();


$(window).on('load resize', function() {
    verticalScroll();
    iconReplacementTelegram();
    if($(window).innerWidth() < 768) {
        $('.block-wrapper').attr("style", "background: url('assets/img/block/banner-mobile.jpg') no-repeat center/cover");
    } else {
        $('.block-wrapper').attr("style", "background: url('assets/img/block/banner.jpg') no-repeat center/cover");
    }
})


// jQuery function
$(document).ready(function() {   
    (function modal () {
        $(".header-contacts__btn").click(function (e) {
            e.preventDefault();
            $(".popup-application").addClass("open");
            $("html").addClass("blocking");
        });
        $(document).mouseup(function (e) {
            var container = $(".crop");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $("html").removeClass("blocking");
                $(".duty").removeClass("open");
            }
        });
        $(".popup-close").click(function () {
            $("html").removeClass("blocking");
            $(".duty").removeClass("open");
        });
        $(".tarif-services__btn").click(function () {
            $(".popup-request").addClass("open");
            $("html").addClass("blocking");
            $('.popup-request__descr span span').text($(this).parent().find('.tarif-list__title').text().trim())
            $('.popup-request-form__proposal').val($(this).parent().find('.tarif-list__title').text().trim())
        })
    })
    // navPosition RECALL
    (function navPosition() {
        if ($('.dev-project-image').length) {
            function navAbsolute() {
                let sectionWidth = $('.dev-project').width();
                let contWidth = $('.dev-project .container').width();

                let totalRight = (sectionWidth - contWidth) / 2;

                $('.dev-project-content-inner').css("padding-left", totalRight);
                $('.dev-project-content-inner').css("padding-right", totalRight);
            };
            navAbsolute();
            $(window).on('load resize', function() {
                navAbsolute();
            })
        }
        if ($('.work-list__item').length) {
            if($(window).innerWidth() < 768) {
                function navAbsoluteTwo() {
                    let sectionWidth = $('.work').width();
                    let contWidth = $('.work .container').width();
    
                    let totalRight = (sectionWidth - contWidth) / 2;
                    let widthItemsAll = $('.work-list__item').width() * $('.work-list__item').length;

                    $('.work-block-inner').css("padding-left", totalRight);
                    $('.work-block-inner').css("padding-right", totalRight);
                    $('.work-list').css("width", widthItemsAll + totalRight + 40);
                    $('.work-block-inner').css("width", sectionWidth);
                    $('.work-block-inner').css("margin-left", -totalRight);
    
                };
                navAbsoluteTwo();
                $(window).on('load resize', function() {
                    navAbsoluteTwo();
                })
            }
        }
        if ($('.team-list__item').length) {
            if($(window).innerWidth() < 992) {
                function navAbsoluteThree() {
                    let sectionWidth = $('.team').width();
                    let contWidth = $('.team .container').width();
    
                    let totalRight = (sectionWidth - contWidth) / 2;
                    let widthItemsAll = $('.team-list__item').width() * $('.team-list__item').length;
                    let marginLeft = ($('.team-list__item').outerWidth(true) - $('.team-list__item').outerWidth());
                    $('.team-inner').css("padding-left", totalRight);
                    $('.team-inner').css("padding-right", totalRight);
                    $('.team-list').css("width", widthItemsAll + (marginLeft * $('.team-list__item').length));
                    $('.team-inner').css("width", sectionWidth);
                    $('.team-inner').css("margin-left", -totalRight);
    
                };
                navAbsoluteThree();
                $(window).on('load resize', function() {
                    navAbsoluteThree();
                })
            }
        }
        if ($('.team-list__item').length) {
            if($(window).innerWidth() < 992) {
                function navAbsoluteFour() {
                    let sectionWidth = $('.advantages').width();
                    let contWidth = $('.advantages .container').width();
    
                    let totalRight = (sectionWidth - contWidth) / 2;
                    let widthItemsAll = $('.advantages-wrapper').width();
                    $('.advantages-inner').css("padding-left", totalRight);
                    $('.advantages-inner').css("padding-right", totalRight);
                    $('.advantages-inner').css("width", sectionWidth);
                    $('.advantages-inner').css("margin-left", -totalRight);
    
                };
                navAbsoluteFour();
                $(window).on('load resize', function() {
                    navAbsoluteFour();
                })
            }
        }
        if ($('.about-menu__item').length) {
            function navAbsoluteFive() {
                let sectionWidth = $('.about').width();
                let contWidth = $('.about .container').width();

                let totalRight = (sectionWidth - contWidth) / 2;

                $('.about-nav').css("padding-left", totalRight);
                $('.about-nav').css("padding-right", totalRight);
                $('.about-inner-block').css("margin-left", -totalRight);
                $('.about-inner-block').css("margin-right", -totalRight);
            };
            navAbsoluteFive();
            $(window).on('load resize', function() {
                navAbsoluteFive();
            })
        }
    }());
    // rellax
    (function rellax() {
        const rellax = new Rellax(".rellax");
    }());

    // phone mask
    (function phoneMask() {
        if ($('input[type=tel]').length) {
            $('input[type=tel]').mask("+7 (999) 999-99-99");
        };
    }());

    // focusInput
    (function focusInput() {
        $('.focus-area input').focus(function(){
            $(this).parent().addClass('focus-active');
        }).blur(function() {
            $(this).parent().removeClass('focus-active');
        });
    }());

    // slickCarousel
    (function slickCarousel() {
        if ($('.slider-wrapper').length) {
            $('.slider-wrapper').slick({
                infinite: true,
                slidesToShow: 1,
                arrows: true,
                dots: true,
                prevArrow: `<span class="prev">
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5491 23.5659C12.948 24.1447 11.9733 24.1447 11.3722 23.5659L0.450865 13.048C-0.150288 12.4692 -0.150288 11.5308 0.450865 10.952C1.05202 10.3733 2.02668 10.3733 2.62783 10.952L13.5491 21.47C14.1503 22.0488 14.1503 22.9871 13.5491 23.5659Z" fill="white"/>
                <path d="M0.450865 13.048C-0.150288 12.4692 -0.150288 11.5308 0.450865 10.952L11.3722 0.434081C11.9733 -0.144694 12.948 -0.144694 13.5491 0.434081C14.1503 1.01286 14.1503 1.95123 13.5491 2.53001L2.62781 13.0479C2.02666 13.6267 1.05202 13.6267 0.450865 13.048Z" fill="white"/>
            </svg> 
                </span>`,
                nextArrow: `<span class="next">
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.450865 0.434081C1.05202 -0.144694 2.02668 -0.144694 2.62783 0.434081L13.5491 10.952C14.1503 11.5308 14.1503 12.4692 13.5491 13.048C12.948 13.6267 11.9733 13.6267 11.3722 13.048L3.75278 5.71221L0.450865 2.53001C-0.150288 1.95124 -0.150288 1.01286 0.450865 0.434081Z" fill="white"/>
                <path d="M13.5491 10.952C14.1503 11.5308 14.1503 12.4692 13.5491 13.048L2.62785 23.5659C2.0267 24.1447 1.05203 24.1447 0.450882 23.5659C-0.150271 22.9871 -0.150271 22.0488 0.450882 21.47L11.3722 10.952C11.9733 10.3733 12.948 10.3733 13.5491 10.952Z" fill="white"/>
            </svg>
                </span>`,
                fade: true,
                cssEase: 'linear',
            });
        };
    }());

    // tabs
    (function tabs() {
        $('.tabs-item').click(function() {
            const tabsItem = $(this).attr("data-tab");
            const tabsParent = $(this).parents('.tabs-wrapper').find('.tabs-content');

            $(this).parents('.tabs-wrapper').find('.tabs-item').removeClass('active');
            $(this).addClass('active');

            $(this).parents('.tabs-wrapper').find('.tabs-content').removeClass('active');

            for (let dataContent of tabsParent) {
                if (dataContent.getAttribute("data-content") == tabsItem) {
                    dataContent.classList.add('active');
                };
            };
            
            return false;
        });
    }());

    // accordion
    (function accordion() {
        $('.accordion').click(function () {
            $(this).toggleClass('open').next().slideToggle();
            $('.accordion').not(this).removeClass('open').next().slideUp();
            return false;
        });
    }());

    // menu
    (function headerBurger (){
        $('.header-burger').click(function () {
            $('.header-burger').toggleClass('open');
            $('.header').toggleClass('header-open');
            $('html').toggleClass('hidden');
        });
    }());

    // popup
    (function popup() {
        // open popup
        $('.popup-btn').click(function() {
            $('.popup').addClass('show');
        });

        // close popup
        $('.popup-close').click(function() {
            $('.popup').removeClass('show');
        });

        // close popup overlay
        $(document).mouseup(function (e) {
            const mainPopup = $(".popup-body");
            if (!mainPopup.is(e.target) && mainPopup.has(e.target).length === 0) {
                $(".popup").removeClass("show");
            }
        });
    }());

    // scroll link
    (function scrollLink() {
        $(".scroll-link").click(function() {
            var elementClick = $(this).attr("href")
            var destination = $(elementClick).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 1500);
            return false;
        });
    }());

    // headerScroll
    (function headerScroll() {
        function scrollPage () {
            let headerOffset = $('.header').offset().top;
            
            if (headerOffset > 1) {
                $('.header').addClass('header-fixed');
            } else {
                $('.header').removeClass('header-fixed');
            }
        }
        scrollPage();
        $(window).scroll(function() {
            scrollPage();    
        });

    }());

    // checkbox
    (function checkbox() {
        $.each($(".checkbox-item"), function () {
            if ($(this).find("input").prop("checked") == true) {
                $(this).addClass("active");
                $('.recall-dop-form__btn').addClass("active");
            }
        });

        $(document).on("click", ".checkbox-item", function () {
            if ($(this).hasClass("active")) {
                $(this).find("input").prop("checked", false);
            } else {
                $(this).find("input").prop("checked", true);
            }
            $(this).toggleClass("active");
            $('.recall-dop-form__btn').toggleClass("active");
            return false;
        });
    }());

    // radio button
    (function radioButton() {
        $.each($(".radio-item"), function () {
            if ($(this).find("input").prop("checked") == true) {
            $(this).addClass("active");
            }
        });

        $(document).on("click", ".radio-item", function () {
            var thisRadio = $(this);
            thisRadio
            .parents(".radio-wrapper")
            .find(".radio-item")
            .removeClass("active");
            thisRadio
            .parents(".radio-wrapper")
            .find(".radio-item input")
            .prop("checked", false);
            thisRadio.toggleClass("active");
            thisRadio.find("input").prop("checked", true);
            return false;
        });
    }());

    // accept politic
    (function acceptPolitic() {
        $(".accept-politic__label").click(function () {
            $(this).toggleClass("active");

            if ($(this).hasClass("active")) {
                $(this).parent().find("input").prop("checked", true);
            } else {
                $(this).parent().find("input").prop("checked", false);
            }
        });
    }());

    console.log("Dev | Скрипты загружены");
});