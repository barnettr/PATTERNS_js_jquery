//  Collapse and expand section of the page with a certain class
//  written by Christian Heilmann, 07/01/08
(function() {

    // Configuration, change CSS class names and labels here
    var config = {
        indicatorClass: 'collapsible',
        collapsedClass: 'collapsed',
        collapseLabel: 'collapse',
        expandLabel: 'expand'
    }

    var sections = document.getElementsByTagName('div');
    for (var i = 0, j = sections.length; i < j; i++) {
        if (sections[i].className.indexOf(config.indicatorClass) !== -1) {
            sections[i].className += ' ' + config.collapsedClass;
            var paragraph = document.createElement('p');
            var triggerLink = document.createElement('a');
            triggerLink.setAttribute('href', '#');
            triggerLink.onclick = toggleSection;
            triggerLink.appendChild(document.createTextNode(config.expandLabel));
            paragraph.appendChild(triggerLink);
            sections[i].parentNode.insertBefore(paragraph, sections[i]);
        }
    }

    function toggleSection() {
        var section = this.parentNode.nextSibling;
        if (section.className.indexOf(config.collapsedClass) !== -1) {
            section.className = section.className.replace(' ' + config.collapsedClass, '');
            this.firstChild.nodeValue = config.collapseLabel
        } else {
            section.className += ' ' + config.collapsedClass;
            this.firstChild.nodeValue = config.expandLabel
        }
        return false;
    }
})();
