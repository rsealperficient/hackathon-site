import React, { useEffect } from 'react';

type boxeverProps = {
    clientKey: string;
    apiTargetEndPoint: string,
    cookieDomain: string,
};

export default function Boxever(props: boxeverProps) {

    const script = `
        var _boxeverq = _boxeverq || [];
        var _boxever_settings = {
            client_key: '${props.clientKey}',
            target: '${props.apiTargetEndPoint}',
            cookie_domain: '${props.cookieDomain}',
            api_token: 'uz9h803ertuvxcb9jh2cu05t87at85nl',
            web_flow_target: 'https://d35vb5cccm4xzp.cloudfront.net'
        };
        (function() {
            var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;  
            s.src = 'https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.8.min.js';
            var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
        })();`

    return (
        <script dangerouslySetInnerHTML={ { __html: script } }></script>
    );
}



