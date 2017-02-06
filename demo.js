document.addEventListener("DOMContentLoaded", function() {
    "use strict";

    var tab_clicked = function(tab_id) {
        // log_output("You clicked the tab " + tab_id);
        WUI_Dialog.setStatusBarContent("demo_centered_dialog", "You clicked the tab " + (tab_id + 1));
    };

    var dropdown_item_selected = function(item_index) {
        log_output("Dropdown item " + item_index + " selected");
    };

    WUI_Tabs.create("demo_tabs", {
        on_tab_click: tab_clicked,
        height: "calc(100% - 32px)"
    });

    var demo_centered_dialog = WUI_Dialog.create("demo_centered_dialog", {
        title: "<span style=\"color: gold;\">Drag me around or resize me!</div>",
        width: "500px",
        height: "525px",
        halign: "center",
        valign: "center",
        minimizable: true,
        draggable: true,
        resizable: true,
        detachable: true,
        status_bar: true,
        status_bar_content: '<div style="font-family: Monospace; font-size: 10px; color: lightgrey; position: absolute; margin-left: 8px;">---</div><span style="font-family: Monospace; font-size: 10px; color: lightgrey;">Status bar.</span>',
        // on_detach: bind_contextmenu,
        keep_align_when_resized: true
    });


    WUI_Dialog.create("demo_integrated_dialog", {
        title: "WUI widgets demo page",
        closable: false,
        minimizable: true,
        width: "90%",
        height: "280px",
        top: 16
    });

    WUI_Dialog.create("demo_integrated_dialog_2", {
        title: "Drag me around!",
        closable: false,
        minimizable: true,
        width: "90%",
        height: "100px",
        top: 32,
        draggable: true
    });

});