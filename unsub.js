var i = 0, unsubscriber = setInterval(runScript, 3000);

function runScript() {

    var channels = document.getElementById("grid-container").getElementsByClassName("ytd-expanded-shelf-contents-renderer");

    if (i < channels.length) {

        channels[i].querySelector("[aria-label^='Unsubscribe from']").click();

        setTimeout(function () {
            document.getElementById("confirm-button").getElementsByTagName("button")[0].click();
        }, 2000);

        setTimeout(function () {
            channels[i].parentNode.removeChild(channels[i]);
        }, 2000);

    }
    i++;
}