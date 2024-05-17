function replay_subtitle() {
    if (mp.get_property("sub-text")) {
        var a = mp.get_property("sub-start");
        var b = mp.get_property("sub-end");
        mp.set_property("ab-loop-a", a);
        mp.set_property("ab-loop-b", b);
        mp.osd_message("A-B loop");
    }
}

mp.add_key_binding("r", replay_subtitle);
