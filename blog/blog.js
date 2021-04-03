function toggle_collapse(target_id) {
    var target = document.getElementById(target_id);
    if (target.classList.contains('collapsed')) {
        target.classList.remove('collapsed');
    } else {
        target.classList.add('collapsed');
    }
}

function replace() {
    var elements = document.querySelectorAll('.blogpost-header-text');
    for (var i = 0; i< elements.length; i++) {
        var parent_date = elements[i].parentElement.id;
        elements[i].innerHTML = String(elements[i].innerHTML).replace('[parent_date]', parent_date).replace('_', ' ');
    }
}

function goBack() {
    window.history.back();
}

window.onload = function() {replace()}