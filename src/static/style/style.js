import {
    createGlobalStyle
} from 'styled-components';

export const GlobalStyle = createGlobalStyle `
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    /* icon-font */
    @font-face {font-family: "iconfont";
    src: url('../icon-font/iconfont.eot?t=1595256307947'); /* IE9 */
    src: url('../icon-font/iconfont.eot?t=1595256307947#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPYAAsAAAAAB/wAAAOLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDFAqDSIMZATYCJAMQCwoABCAFhG0HPhv5BsgekiQlggQUACQAwCmOh6819v7u3qGSJLk2n04ySSRC88aQIDYone4lMJRnTTo9JWvkpIWd9qBgJput01n7e4ZfeoEvJjb4//8cM12K57fZXCqDImm0N8BRAg0oOi8Aj+9A8YaxC1riegLNhsxA7eYUVYHRCrNbIK4VmQejMwqlITY0CnXF2CJeQaUxPWtuA+Al+Pv4AxExmqTKzL57V9kSSPuM+ZgBO/53OPUQgDmdDmwSGdOAQlxWGo7BKDANalaX05oF1IqQPmM/ZvyfKemBgm0yt/+Pl2SiZka3gmUoy66K6ZAJPmPJJL4yomT4GJ0b0YInwBvCDnxDkVSNjX2Ml4NDj4O27mjed6iiDczsOUuD6NU+s/hTzDDQHM3v9NBdqlOv7wwelMQd3g4edzDDlyjqRnfuGfX0qe7x46onT7jhZ6nckuFdneqzZ/o0reTHP33aPLykYzHtMrS0cxlTf6YjSdoeVbX5pN9Kf/266fK5Yclju0/V4iXe+m3TvedKnKzjdm08e/U8zn0wJesBcvovZD6tSSnlNBmCkvJM+zvFTq7EhVIjtkIsU3WK43ymMC3h3QI9ueXr+dtv4reJQSD+1evoUfM0kgFX3L69wuVCqoQrEmsGmfahut7OQC7wz7bUtGlTE+ZqsB42QUzzqTATrD+60G883tB4v4FXExZOGBgY9LNNxPba8vKJtg3L+wcyFr2/xoE6ZQ4tDlMnYarq7430dAllpGf2w6HRo1ZYgRXA//kdBnhwMwwKBddDl5/ZzuiifHehc9Kv0cwDFX0k3v2B7P+0oHuERgnG/HXMjjlFY5vKUhSOw9DXKlaMAAnNmvHL4qHb2ylEfZ2jCY36EkgaDELWaBhZsNNQabEMtUYb0GxK7uQWPVRQlCZM6gUQOu2DpN0bZJ3uIAv2DVT6fYJaZ0Both/uc7YYDYXOVBFPkMQKjawiWszYVhM6jK1Acq2RV9PsAKdDql1xs+EhYflwLjIjdYoB9jo5ghDMYtViYnPAZshotLBW1VKDRBJSTYg1ITQUV70oRLSYAG2HCuERiIQlaMRSiCzMsFeYoAu/XwGR1TLiqQ1ZVUodRGWn1M4KFyKsAzJXYO6UdSuX2NWRRSAIjIWpLExYOUCHGK2ABcta3aoGIiJCVA/wWSUIRflwV0HI8iLTG66CZuacJVLkKFFJWzyNebMs8TWK59cICgAA') format('woff2'),
    url('../icon-font/iconfont.woff?t=1595256307947') format('woff'),
    url('../icon-font/iconfont.ttf?t=1595256307947') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('../icon-font/iconfont.svg?t=1595256307947#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`