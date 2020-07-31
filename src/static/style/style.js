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
    @font-face {
        font-family: "iconfont";
        src: url('../icon-font/iconfont.eot?t=1596186380799'); /* IE9 */
        src: url('../icon-font/iconfont.eot?t=1596186380799#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAU8AAsAAAAACigAAATtAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDVgqHCIYAATYCJAMcCxAABCAFhG0HVRvFCCMR5oPSJvvHQU7msvbhkUJ1OAoPwrUxEU20H419z4fozH+zM0E3exBUMCmdK+XcF3P95i7OFfCB8BFqJM89e2BVSAG3Lk+oNAbA/xwzXT6fDfOvbSBTjEyKCIqk8XhAA8q8KIu2Aw1hvAU9gwq8uF0PBAAPW3iDJKdmF0MOBmcZAUC6O9oaIC8ZwXpwBHKNtGUvA1kJCeTcIu4xgBXx35NvEEjkAAcJhbM2vzWlGfFa8raAKsUPVIcIiNazA5AOARSANwAGkJmtzsmgacQbFLzxEIZsAALk4MC0RBs2bjee+LZAFIESV6jUsRMILlpXgRn/8yABhRQEIFKQUkBseVQKaInPBg7QhrKBAdowNkiAcTs2UGA8kQ1S4G2B+OqUsnCPLgBjgBgBZBoctXfMyIGBgj2bxMDAYgLT0bcS5HIThakgGAksTjqp+MobvH59SopLyNjYhUpTWlpMU74pKLuqUVMxbUI0mnN5M/jv/ebchgMuevsOWdGNB3t7PunNmzMIgy7Vq1+8FvhQL1lHiGp0mnD6ufXGlhch83Ov7Da33ZysXMsLi0eJTLVOofBQ7wnwS/aZeZWqIT3nF69VqiuPs041qseXCsV8l6KictSW32xe3nBJsQSYLPPX+cVPiaqsTBUfjC45vR/KA4oltwiZVnpt7Fz8M1QvGYs7Uy85pBo8Er8hpNE8L1Fvi9DnS1836Yoyunl/cPHui5Ybrcq2ebVdW9Js/G9evFZtVrbPy+ymuaSttOSQnzuv3v3nckXFh35DCdyC06cXcPGznB/FX2H//suuVCXt+Oer1C2OGoeghB+tw7mJW7ZMDGScyMM54db938uuy77vb4+TvcJJ7cyZtSgjzMPx4deN/mi/3h7UJ4jCfl9pTlvgu6v+tT9lAqP+z+PjiZ9jDeqIwmtB1BFgon9f12a9z/U2d9X569QmHI46LogWonBch74RrremvXBPftGiKzYmaTpj80q4xMaO2DH2T+zQ8J1wPyJJ8O3zKO3QqVFkxUd+UVs2/MjC5B9Ll59cbBGx0vTs2V7P4US64fHjDYGMooluyH2Jw57a9nEHbUps/t3HTd21ayrLOHbQqZT5EQ+rEa7U5z80/pDn+y1837nOeeHCRZYDLq1DIwUFLgM71i9YmFj/5b0STNTPYK3+g66tpPi/BzsJzS2JCUkLcHOIbEM/YgEA4nXaTeNj4nYaR+uJIr1OQXyH7qa2sU/odqr/B70OGr959l+dXvRvcgUDALyf+dlEVCEqGagS+JepMFr0dxSN7GCmxDHJmF7fXwACQIYwSD6WHeDdPuBv6DXER+u5TYDcTiCXRQgcZLABCjmckQzrDRIoEAxSyBEHPLyQdlgBIwyCgrAJADwxD4BAH8eAgy6uAYU+niAZ9kOQwBTfgRT6hAKPUmJ0pgKu5BQ72SvICCXwR7AiJ+VZaJLkH6O+DawUJTHhHMto/dBWTTV+hAnLGhvGO90RKVAlRziEm2EIGfqSHQqqDFG/qGvV9kKVyHFpgqSCjFACfwQrclLhYJrUfv8Y9W1gpaemwXmOZbSjQ1s1I5BHyjSq5lkmj3e6I1K8SJUc4RDtGNxIhr59lkNBlZkR6hc19VJjldX+6nifhwB4OI8pIxyhhBEJkRIZkYMN9TatRRvZxmjyrbMrO2yiWNKS5bwwvMLt0hIAAAA=') format('woff2'),
        url('../icon-font/iconfont.woff?t=1596186380799') format('woff'),
        url('../icon-font/iconfont.ttf?t=1596186380799') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('../icon-font/iconfont.svg?t=1596186380799#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .iconspin:before {
        content: "\e851";
    }

    .iconmima:before {
        content: "\e601";
    }

    .iconshouji:before {
        content: "\e71f";
    }

    .iconAa:before {
        content: "\e636";
    }

    .iconfangdajing:before {
        content: "\e637";
    }

    .iconbi:before {
        content: "\e742";
    }
`