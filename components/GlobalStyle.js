import Head from 'next/head'

const GlobalStyle = () => (
  <div>
    <Head></Head>
    <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/lato" type="text/css"/>
    <style jsx global>{`

      #content{
        margin: auto;
        padding: 0 3em 1em 3em;
      }

      /* Color palette */

      :root {
        --turquoise: #00baaf;
        --light-purple: #b7b5ff;
        --dark: #424242;
        --light-grey: #eaeaea;
        --purple: #6d69fb;
      }
      
      /* Text styles */
      
      menu {
        font-family: Lato;
        font-size: 18px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
      }
      
      h1 {
        font-family: Lato;
        font-size: 48px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 67.5px;
        letter-spacing: normal;
        color: #000000;
      }
      
      h2 {
        font-family: Lato;
        font-size: 36px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 50.6px;
        letter-spacing: normal;
        color: #000000;
      }
      
      h3 {
        font-family: Lato;
        font-size: 28px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 39.4px;
        letter-spacing: normal;
        color: #000000;
      }
      
      h4 {
        font-family: Lato;
        font-size: 24px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 33.8px;
        letter-spacing: normal;
        color: #000000;
      }
      
      .Large {
        font-family: Lato;
        font-size: 24px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 36.6px;
        letter-spacing: normal;
        color: #000000;
      }
      
      .Large-semibold {
        font-family: Lato;
        font-size: 24px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 36.6px;
        letter-spacing: normal;
        color: #000000;
      }
      
      .Medium {
        font-family: Lato;
        font-size: 20px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 30.5px;
        letter-spacing: normal;
        color: #000000;
      }
      
      .Medium-SemiBold {
        font-family: Lato;
        font-size: 20px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 30.5px;
        letter-spacing: normal;
        color: #000000;
      }
      
      .Menu {
        font-family: Lato;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 27.4px;
        letter-spacing: normal;
        color: #000000;
      }

      .Small {
        font-family: Lato;
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 18.3px;
        letter-spacing: normal;
        color: #000000;
      }
      
      .Regular {
        font-family: Lato;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 24.4px;
        letter-spacing: normal;
        color: #000000;
      }
      // buttons

      .CTA_start {
        -moz-box-shadow: 0px 10px 20px 0px #00000026;
        -webkit-box-shadow: 0px 10px 20px 0px #00000026;
        box-shadow: 0px 10px 20px 0px #00000026;
        background-color:#ffffff;
        -moz-border-radius:25px;
        -webkit-border-radius:25px;
        border-radius:25px;
        display:inline-block;
        cursor:pointer;
        color:#424242;
        font-family:"LatoBold";
        font-size:17px;
        padding:16px 25px;
        text-decoration:none;
        height: 70px;
      }
      .CTA_start:hover {
        background-color:#476e9e;
      }
      .CTA_start:active {
        position:relative;
        top:1px;
      }
      
        
      
      // responsive

      @media (max-width: 720px) {
				header{
					flex-direction: column;
				}
				ul {
        padding: 0;
        flex-direction: column;
        align-items: center;
				}
			}
    `}</style>
  </div>
)

export default GlobalStyle
