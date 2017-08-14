function getXmlHttpRequestObject() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else {
        alert("this is currently setup to work on Chrome");
    }
}

var searchReady = getXmlHttpRequestObject();

function activeSearch() {
    if (searchReady.readyState == 4 || searchReady.readyState == 0) {
        var strSearch = escape(document.getElementById('txtSearch').value);
        searchReady.open("GET", 'activeSearch.php?search=' + strSearch, true);
        searchReady.onreadystatechange = handleActiveSearch;
        searchReady.send(null);
    }
}

function handleActiveSearch() {
    if (searchReady.readyState == 4) {
        var asearch = document.getElementById('active_search')
        asearch.innerHTML = '';
        var strSearch = searchReady.responseText.split("\n");
        for (i = 0; i < strSearch.length - 1; i++) {
            var suggest = '<div onmouseover="javascript:suggestOver(this);" ';
            suggest += 'onmouseout="javascript:suggestOut(this);" ';
            suggest += 'onclick="javascript:setSearch(this.innerHTML);" ';
            suggest += 'claasearch="suggest_link">' + strSearch[i] + '</div>';
            asearch.innerHTML += suggest;
        }
    }
}

function suggestOver(div_value) {
    div_value.claasearchName = 'suggest_link_over';
}

function suggestOut(div_value) {
    div_value.claasearchName = 'suggest_link';
}

function setSearch(value) {
    document.getElementById('txtSearch').value = value;
    document.getElementById('search_suggest').innerHTML = '';
}