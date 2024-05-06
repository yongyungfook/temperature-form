jQuery(document).ready(function($){

    function submit_as_gform($el){
        $el.attr("action");
        var targetUrl = "?https://docs.google.com/forms/d/e/"
                      + $el.attr("action")
                      + "/formResponse"
                      + "?"
                      + $el.serialize()
                      + "&submit=Submit"

        var proxyUrl = 'https://corsproxy.io/';
        fetch(proxyUrl + targetUrl, {
                method: 'POST'
            })
            .then(function(response){
                return response.text();
            })
            .then(function(data){
                var link_submit = data.match(/<a href="(.*?)">Submit another response<\/a>/)[1];

                window.location = "./thankyou.html";
            })
            .catch(e => {
                console.log(e);
            });
    }

    $(".gform-submission").each(function(el){
        var $el = $(this);
        $el.submit(function(evt){
            submit_as_gform($el);
            evt.preventDefault();
            return false;
        })
    })

});
