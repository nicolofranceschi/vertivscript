function searchElement(s) {
    var x = document.getElementById(searchAim).options;
    var filter = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i].label.toLowerCase().includes(s.toLowerCase())) filter.push({ value: x[i].value, label: x[i].label })
    }
    console.log("filter ciao", filter)
    var form = document.getElementById("formPlace");
    for (let i = 0; i < filter.length; i++) {
        form.insertAdjacentHTML("beforeend", `<strong onclick="selectElement(${filter[i].value})">${filter[i].label}</strong>`);
    }
    return filter
}

function selectElement(value) {
    console.log(value)
    let element = document.getElementById(searchAim);
    element.value = value;
    closeSearch();
}

function closeSearch() {
    document.getElementById("searchUI").remove();
    document.getElementById("search").remove();
    document.getElementById("fontinter").remove();
    document.getElementById("gstatic").remove();
    document.getElementById("cssfile").remove();
    document.getElementById("interdata").remove();

}

document.head.insertAdjacentHTML("beforeend", `<link id="fontinter" rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" id="gstatic" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" id="cssfile" href="https://vertivscript.vercel.app/plugin.css">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"  id="interdata" rel="stylesheet">`);

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