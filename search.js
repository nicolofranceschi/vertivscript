function searchElement(s) {
    var x = document.getElementById("DocumentTemplateSelectionTemplateId").options;
    var filter = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i].label.toLowerCase().includes(s.toLowerCase())) filter.push({ value: x[i].value, label: x[i].label })
    }
    console.log("filter",filter)
    var form = document.getElementById("formPlace");
    for (let i = 0; i < filter.length; i++) {
        form.insertAdjacentHTML("beforeend", `<strong onclick="selectElement(${filter[i].value})">${filter[i].label}</strong>`);
    }
    return filter
}

function selectElement(value) {
    console.log(value)
    let element = document.getElementById("DocumentTemplateSelectionTemplateId");
    element.value = value;
    closeSearch();
}

function closeSearch() {
    document.getElementById("search").remove();
}

document.body.insertAdjacentHTML("afterend", `<div
id="search"
style='position:fixed; top:0%; left:0%; width:100%; height:100%; background-color:rgba(0,0,0,0.5); z-index:10000; display: flex; justify-content: center; align-items: center;'>
<div  style="margin:50px;">
    <div style="background-color:white; padding:20px; border-radius:10px; position: relative;">
        <h1>Search</h1>
        <p style="position: absolute; top:10px; right:10px; cursor: pointer;" onclick="closeSearch()">X</p>
            <input id="searchValue" type="search" name="search" />
            <button type="submit" value="GO" onclick="searchElement(document.getElementById('searchValue').value)">GO</button>
        <div id="formPlace"  style="display: flex; flex-direction: column; gap: 10px; margin-top: 20px; max-height: 300px; overflow: auto; cursor: pointer;">
        </div>
    </div>
</div>
</div>`);
