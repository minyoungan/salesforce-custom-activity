define("customActivity", ["postmonger"], function(Postmonger) {
    "use strict";

    var connection = new Postmonger.Session();
    var payload = {};

    $(window).ready(onRender);

    connection.on("initActivity", initialize);
    connection.on("clickedNext", save);

    function onRender() {
        connection.trigger("ready");
        connection.trigger("requestTokens");
        connection.trigger("requestEndpoints");
        connection.trigger("requestTriggerEventDefinition");
    }

    function initialize(data) {
        if (data) {
            payload = data;
        }
        // Optionally, set form fields here from payload
    }

    function save() {
        // Optionally, collect form values here
        payload["metaData"] = payload["metaData"] || {};
        payload["metaData"].isConfigured = true;
        connection.trigger("updateActivity", payload);
    }
});
