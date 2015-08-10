var count = 0;
function getItem1(name) {
    var li = document.createElement("li");
    li.className = "list score_list";
    li.setAttribute("liname", name);

    var div = document.createElement("div");
    div.className = "list_title";
    li.appendChild(div);
    div.id = "item_a" + count;
    div.setAttribute("name", name);
    div.onclick = onClick;

    var h2 = document.createElement("h2");
    h2.textContent = name;
    div.appendChild(h2);

    var ul = document.createElement("ul");
    ul.setAttribute("ulname", name);
    li.appendChild(ul);
    ul.style.display = "none";
    ul.id = "item_ul" + count;

    count++;

    return li;
}

function getItem2(name, href) {
    var li = document.createElement("li");
    li.setAttribute("liname", name);

    var div = document.createElement("div");
    div.className = "item_title title_lv1";
    li.appendChild(div);
    div.id = "item_a" + count;
    div.setAttribute("name", name);
    div.onclick = onClick;

    var a = document.createElement("a");
    div.appendChild(a);
    if (href) {
        a.href = href;
    }

    var span1 = document.createElement("span");
    span1.className = "bg_x item_icon";
    a.appendChild(span1);

    var span2 = document.createElement("span");
    span2.className = "txt";
    span2.textContent = name;
    a.appendChild(span2);

    var ul = document.createElement("ul");
    ul.setAttribute("ulname", name);
    li.appendChild(ul);
    ul.id = "item_ul" + count;
    ul.style.display = "none";

    count++;

    return li;
}

function getItem3(name, href) {
    var li = document.createElement("li");
    li.setAttribute("liname", name);
    li.className = "list_item li_lv2 list_item_bg1";

    var div = document.createElement("div");
    div.className = "item_title";
    li.appendChild(div);
    div.id = "item_a" + count;
    div.setAttribute("name", name);
    div.onclick = onClick;

    var a = document.createElement("a");
    div.appendChild(a);
    if (href) {
        a.href = href;
    }

    var span1 = document.createElement("span");
    span1.className = "bg_x item_icon";
    a.appendChild(span1);

    var span2 = document.createElement("span");
    span2.className = "txt";
    span2.textContent = name;
    a.appendChild(span2);

    var ul = document.createElement("ul");
    ul.setAttribute("ulname", name);
    li.appendChild(ul);
    ul.id = "item_ul" + count;
    ul.style.display = "none";

    count++;

    return li;
}
function getItem4(name, href) {
    var li = document.createElement("li");
    li.setAttribute("liname", name);
    li.className = "list_item";

    var div = document.createElement("div");
    div.className = "item_title";
    div.setAttribute("name", name);
    li.appendChild(div);

    var a = document.createElement("a");
    div.appendChild(a);
    if (href) {
        a.href = href;
    }
    a.id = "item_a" + count;

    var span1 = document.createElement("span");
    span1.className = "bg_x item_icon";
    a.appendChild(span1);

    var span2 = document.createElement("span");
    span2.className = "txt test_link";
    span2.textContent = name;
    a.appendChild(span2);

    count++;

    return li;
}

function appendToParent(child, parent) {
    parent.lastChild.appendChild(child);
}


function createRoot(firstName, secondName, examples, hrefCall) {
    var item1 = document.getElementById(firstName);
    if (!item1) {
        var item1 = getItem1(firstName);
        item1.id = firstName;
    }

    var items_ul = document.getElementById("items_ul");
    items_ul.appendChild(item1);

    var item2 = getItem2(secondName);
    item1.lastChild.appendChild(item2);

    for (key in examples) {
        if (key == "") {
            continue;
        }
        var item3 = getItem3(key);
        appendToParent(item3, item2);

        var contents = examples[key];
        for (var i = 0; i < contents.length; i++) {
            var content = contents[i];
            var href = hrefCall(key, content);

            var item4 = getItem4(content, href);
            appendToParent(item4, item3);
        }
    }
}

var array = [];

function onClick(e) {
    var a = e.currentTarget;
    var id = a.id;
    var countIdx = parseInt(id.substring(id.indexOf("_a") + 2));
    var item = document.getElementById(id.replace("_a", "_ul"));

    if (item.style.display == "none") {
        item.style.display = "block";

        array.push(countIdx + "");
    }
    else {
        item.style.display = "none";

        array.splice(array.indexOf(countIdx + ""), 1);
    }

    var href = window.location.href;
    href = href.substring(0, href.indexOf("#"));
    window.location.href = href + "#" + array.join("_");
}

function ex() {

    var href = document.location.href;
    var array = [];
    if (href.match(/#[^&]*/)) {
        var tag = href.match(/#[^&]*/)[0].substring(1);
        array = tag.split("_");
        console.log(array);
    }

    for (var i = 0; i < array.length; i++) {
        var item = document.getElementById("item_ul" + array[i]);
        item.style.display = "block";
    }

}
