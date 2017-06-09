$.ajaxSetup({
    beforeSend: function (xhr, settings) {
        function getCookie(name) {
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }
        if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
            xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
        }
    }
});
function client(full, small, token, id) {
    showHide(full, small, token);
    if (id == '0') {
        $.post("/admin/clients/in_hall/", {},
            function (data) {
                $("#client_info").replaceWith(data)
            }
        );
    }
    else {
        $.post("/admin/clients/" + id + "/", {},
            function (data) {
                $("#client_info").replaceWith(data)
            }
        );
    }
}
function New_client() {
    $.post("/admin/clients/new_client/", {
        'username':username,
        'password':password,
        'first_name':first_name,
        "last_name":last_name,
        'middle_name':middle_name,
        'phone':phone,
        'address':address,
        'date_of_birth':date_of_birth,
        'sex':sex,
        'category':category
    },
        function (data) {
            $("#content").date(data)
        }
    );
}
function Get_client(id) {
    $.post("/admin/clients/" + id + "/", {'username':username,
        'password':password,
        'first_name':first_name,
        "last_name":last_name,
        'middle_name':middle_name,
        'phone':phone,
        'address':address,
        'date_of_birth':date_of_birth,
        'sex':sex,
        'category':category},
        function (data) {
            $("#content").date(data)
        }
    );
}
function Del_client(id) {
    $.post("/admin/del_client/" + id + "/", {},
        function (data) {
            $("#content").date(data)
        }
    );
}
function Sell_client(id) {
    $.post("/admin/clients/sell" + id + "/", {},
        function (data) {
            $("#content").date(data)
        }
    );
}
function Fast_client() {
    $.post("/admin/clients/fast_sell/", {},
        function (data) {
            $("#content").date(data)
        }
    );
}
function showHide(full, small, token) {
    if ((document.getElementById(full)) && (document.getElementById(small))) {
        var full_menu = document.getElementById(full);
        var small_menu = document.getElementById(small);
        if (token == "Guest") {
            if ((full_menu.style.display != "none") && (small_menu.style.display = "block")) {
                full_menu.style.display = "none";
                small_menu.style.display = "block";
            }
        }
        else {
            if ((full_menu.style.display != "block") && (small_menu.style.display = "none")) {
                small_menu.style.display = "none";
                full_menu.style.display = "block";
            }
        }
    }
    else
        alert("Элемент с id: " + element_id + " не найден!");
}
