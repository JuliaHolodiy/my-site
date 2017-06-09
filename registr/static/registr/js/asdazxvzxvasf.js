function showHide(full, small) {
    alert("asfasfasf");
    //Если элемент с id-шником element_id существует
    if (document.getElementById(full)) {
        if (document.getElementById(small)) {
            //Записываем ссылку на элемент в переменную obj
            var full_menu = document.getElementById(full);

            var small_menu = document.getElementById(small);
            //Если css-свойство display не block, то: 
            if (full_menu.style.display != "block") {
                full_menu.style.display = "block"; //Показываем элемент
            }
            else full_menu.style.display = "none"; //Скрываем элемент
            if (small_menu.style.display != "block") {
                small_menu.style.display = "block"; //Показываем элемент
            }
            else small_menu.style.display = "none"; //Скрываем элемент
        }
    }
    //Если элемент с id-шником element_id не найден, то выводим сообщение
    else alert("Элемент с id: " + element_id + " не найден!");
}

function changeSidebar() {
    if ($(window).width() < 750 && ($(".sidebar__category"))) {
        if ($(".sidebar__category").hasClass("fullSidebar")) {
            $(".sidebar__category").removeClass("fullSidebar");
        }
        $(".sidebar__category").addClass("miniSidebar");
    } else {
        if ($(".sidebar__category").hasClass("miniSidebar")) {
            $(".sidebar__category").removeClass("miniSidebar");
        }
        $(".sidebar__category").addClass("fullSidebar");
    }
}
changeSidebar();
$(window).resize(function () {
    changeSidebar();
});
$(document).ready(function () {
    $(".slick-item1").slick({speed: 800, adaptiveHeight: true, autoplay: true, autoplaySpeed: 4000});
    $(".search-button").click(function () {
        var menu = $("form.search");
        if (menu.css("display") != "block") {
            $("form.search").css("display", "none");
            menu.css("display", "block").show("slow");
        } else {
            $("form.search").css("display", "block");
            menu.css("display", "none");
        }
    });
    $(".slick-item4").slick({
        infinite: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {slidesToShow: 3, slidesToScroll: 3, infinite: false, dots: false}
        }, {breakpoint: 600, settings: {slidesToShow: 2, slidesToScroll: 2}}, {
            breakpoint: 480,
            settings: {slidesToShow: 1, slidesToScroll: 1}
        }]
    });
    $("body").on("click", ".sidebar__category.miniSidebar .category-list h3", function () {
        if ($(this).hasClass("open-category-list")) {
            $(this).removeClass("open-category-list");
            $(".sidebar__category.miniSidebar .category-list .category_list").hide("fast");
        } else {
            $(this).addClass("open-category-list");
            $(".sidebar__category.miniSidebar .category-list .category_list").show("fast");
        }
    });
    $("body").on("click", ".sidebar__category.miniSidebar .novinki_instrumentov h5", function () {
        if ($(this).hasClass("open-new-list")) {
            $(this).removeClass("open-new-list");
            $(".sidebar__category.miniSidebar .novinki_instrumentov .row").hide("fast");
        } else {
            $(this).addClass("open-new-list");
            $(".sidebar__category.miniSidebar .novinki_instrumentov .row").show("fast");
        }
    });
    $("body").on("click", ".sidebar__category.miniSidebar .recomended__instrum h5", function () {
        if ($(this).hasClass("open-recommend-list")) {
            $(this).removeClass("open-recommend-list");
            $(".sidebar__category.miniSidebar .recomended__instrum .row").hide("fast");
        } else {
            $(this).addClass("open-recommend-list");
            $(".sidebar__category.miniSidebar .recomended__instrum .row").show("fast");
        }
    });
});
$(document).ready(function () {
    $(".fancybox").fancybox();
});
function divClass(a) {
    divClass.elem.classList[a ? "add" : "remove"]("slick-item1");
}
divClass.elem = document.getElementById("myDiv");
window.resize = function () {
    divClass(this.innerWidth < 580);
};
window.resize();