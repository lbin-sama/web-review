var container = document.querySelector('.content')
var text = container.innerHTML

var reg = /\s+.+/

var newText = text.replace(reg, function(s){
    s = s.replace(/\s/g, ' ')
    s = '<p>' + s + '</p>'

    return s
})

container.innerHTML = newText