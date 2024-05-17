var output_path = mp.get_property("working-directory") + "\\";
var file_extension = ".mp3"

function pad(num, size) {
    return ("000" + num).slice(-size);
}

function format_time(sec) {
    var sss = Math.round(sec % 1 * 1000);
    var ss = Math.floor(sec) % 60;
    var mm = Math.floor(sec / 60) % 60;
    var hh = Math.floor(sec / 60 / 60);

    return pad(hh, 2) + ":" + pad(mm, 2) + ":" + pad(ss, 2) + "." + pad(sss, 3);
}

function slicing(){
    var start = mp.get_property("ab-loop-a");
    var end = mp.get_property("ab-loop-b");
    var filename = mp.get_property("filename/no-ext") + Math.floor(start) + file_extension;
    var output = "'" + output_path + filename + "'";
    var input = "'" + mp.get_property("path") + "'";
    
    if (start != "no" && end != "no") {
        mp.commandv("run", "powershell", "ffmpeg", "-i", input, "-ss", format_time(start), "-to", format_time(end), output);
        mp.osd_message(output);
    } else {
        mp.osd_message("A-B loop missing");
    }
}


mp.add_key_binding("Ctrl+s", slicing);