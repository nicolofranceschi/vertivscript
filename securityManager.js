function searchElement(s) {
    const JSONids = localStorage.getItem("ids");
    const x = JSON.parse(JSONids);
    var filter = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i].toLowerCase().includes(s.toLowerCase())) filter.push(x[i])
    }
    if (filter.length === 0) filter = x;
    var form = document.getElementById("formPlace");
    while (form.firstChild) { 
        form.removeChild(form.firstChild); 
        // OR 
        form?.firstChild?.remove(); 
    }
    for (let i = 0; i < filter.length; i++) {
        form.insertAdjacentHTML("beforeend", `
        <div style='display: flex;justify-content: space-between;align-items: center;'>
        <strong onclick="selectElement('${filter[i]}')">${filter[i]}</strong>
        <div style='display: flex;flex-gap: 10px;align-items: center;'>
        <button onclick="createTeamplate('${filter[i]}')">E</button>
        <button onclick="deleteElement('${filter[i]}','${s}')">D</button>
        </div>
        </div>
        `);
    }
    return filter
}

function deleteElement(value,s) {
    localStorage.removeItem(value)
    const JSONids = localStorage.getItem("ids");
    const ids = JSON.parse(JSONids);
    const filter = ids.filter((id) => id !== value);
    localStorage.setItem("ids", JSON.stringify(filter));
    searchElement(s)
}

function selectElement(value) {
    const JSONvalues = localStorage.getItem(value);
    const values = JSON.parse(JSONvalues);
    values.forEach((value) => {
        const input = document.querySelector(`input[name=${value.name}]`);
        input.checked = value.value;
    })
}

function createTeamplate(value) {
    const JSONids = localStorage.getItem("ids");
    const ids = JSON.parse(JSONids);
    if (ids?.includes(value)) return alert("Template ids already taken!");
    localStorage.setItem("ids", JSON.stringify(ids ? [...ids, value] : [value]));
    const domREfBuild = document.querySelectorAll("input[name^=build]")
    const domREfAdmin = document.querySelectorAll("input[name^=admin]")
    const template = [...domREfBuild, ...domREfAdmin].map((input) => ({ name: input.name, value: input.checked }))
    localStorage.setItem(value, JSON.stringify(template));
}

function selectAllBuild() {
    let element = document.getElementById("selectAllBuild");
    if (element.checked) {
        document.querySelectorAll("input[name^=build]").forEach((input) => input.checked = true )
    } else {
        document.querySelectorAll("input[name^=build]").forEach((input) => input.checked = false )
    }
}

function selectAllAdmin() {
    let element = document.getElementById("selectAllAdmin");
    if (element.checked) {
        document.querySelectorAll("input[name^=admin]").forEach((input) => input.checked = true )
    } else {
        document.querySelectorAll("input[name^=admin]").forEach((input) => input.checked = false )
    }
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


fetch('https://vertivscript.vercel.app/layerSecurity.html')
    .then(function (response) {
        return response.text()
    })
    .then(function (html) {
        document.body.insertAdjacentHTML("beforeend", html);
    })
    .catch(function (err) {
        console.log('Failed to fetch page:', err);
    });