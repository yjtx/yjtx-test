var examples = {
    "list": ["input", "textarea", "trans", "userAgent", "client", "save"],
    "": []
};

var items_ul = document.getElementById("items_ul");
var item1 = getItem1("DOM");
items_ul.appendChild(item1);

var item2 = getItem2("htmls");
item1.lastChild.appendChild(item2);

for (key in examples) {
    if (key == "") {
        continue;
    }
    var item3 = getItem3(key);
    item2.lastChild.appendChild(item3);

    var contents = examples[key];
    for (var i = 0; i < contents.length; i++) {
        var content = contents[i];

        var href = "HtmlTest/" + content + ".html";

        var item4 = getItem4(content, href);
        item3.lastChild.appendChild(item4);
    }
}