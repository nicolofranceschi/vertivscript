var id = null;

function searchElement(s) {
    var x = id.options;
    let elementCheck = document.getElementById("searchByTag").checked;
    var filter = [];
    for (let i = 0; i < x.length; i++) {
        if (elementCheck) {
            if (x[i].label.search(s)) filter.push({ value: x[i].value, label: x[i].label })
        } else {
            if (x[i].label.toLowerCase().includes(s.toLowerCase())) filter.push({ value: x[i].value, label: x[i].label })
        }
    }
    var form = document.getElementById("formPlace");
    for (let i = 0; i < filter.length; i++) {
        form.insertAdjacentHTML("beforeend", `<strong onclick="selectElement(${filter[i].value})">${filter[i].label}</strong>`);
    }
    return filter
}

function selectElement(value) {
    console.log(value)
    id.value = value;
    closeSearch();
}


function init(e) {
    if (id) return
    e.preventDefault();
    document.getElementById("banner").remove();
    id = e.target
    fetch('https://vertivscript.vercel.app/layer.html')
        .then(function (response) {
            return response.text()
        })
        .then(function (html) {
            document.body.insertAdjacentHTML("beforeend", html);
        })
        .catch(function (err) {
            console.log('Failed to fetch page:', err);
        });
}

function closeSearch() {
    document.removeEventListener("mousedown", init, false);
    document.getElementById("searchUI").remove();
    document.getElementById("search").remove();
    document.getElementById("fontinter").remove();
    document.getElementById("gstatic").remove();
    document.getElementById("cssfile").remove();
    document.getElementById("interdata").remove();
    id = null;
}

document.head.insertAdjacentHTML("beforeend", `<link id="fontinter" rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" id="gstatic" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" id="cssfile" href="https://vertivscript.vercel.app/plugin.css">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"  id="interdata" rel="stylesheet">`);

document.addEventListener("mousedown", init, false);

fetch('https://vertivscript.vercel.app/banner.html')
    .then(function (response) {
        return response.text()
    })
    .then(function (html) {
        document.body.insertAdjacentHTML("beforeend", html);
    })
    .catch(function (err) {
        console.log('Failed to fetch page:', err);
    });