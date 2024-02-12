truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"

function truncate(str, maxlenght){
    if(str.lenght > maxlenght){
        return str.slice(0, maxlenght - 1) + '...'
    }
    return str;
}