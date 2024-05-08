import Image from 'next/image';
import './globals.css';


export default function Home() {
  return (
    <>
    <main>
      <section className="page1">
        <Image
          alt="Page1BackgroundImage"
          src="/Rectangle 9.svg"
          width={1920}
          height={1080}
        />
          <section className="overlayText">
            <div className="menubarlinks">
              <p>Home</p>
              <p>Product</p>
              <p>Pricing</p>
              <p>About</p>
              <p>Contact</p>
              <style>
                {`
                  .menubarlinks {
                    color: white;
                    font-family: 'Roboto';
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 1;
                    letter-spacing: 0.20;
                    word-wrap: break-word;
                  }
                `}
              </style>
            </div> 
          </section>   
          <div className = "logoParent">
            <div className="logo">
              <Image
                src="/next.svg"
                alt="FigmaLand Logo"
                width={186}
                height={58}
              />
            </div>
          </div>
          <div className = "overlaySocial">    
            <div className = "Socialss">
              <Image
                src="/twitter.svg"
                alt="Twitter Logo"
                width={32}
                height={32} />
              <Image
                src="/facebook.svg"
                alt="Facebook Logo"
                width={32}
                height={32} />
              <Image
                src="/linkedin.svg"
                alt="Linkedin Logo"
                width={32}
                height={32} />
            </div>
          </div> 
          <div className="page1HeadingText">
            <h1 className="Heading1Text">
              The best products start with Figma
              <style>
                {`
                  .Heading1Text {
                    font-size: 66px;
                    font-family: 'Roboto';
                    font-weight: 700;
                    line-height: 1;
                    letter-spacing: 0.20;
                    word-wrap: break-word;
                    color: white;
                    text-align: center;
                  }
                `}
              </style>
            </h1>
          </div>  
          <p className="Page1ParagraphText">
            Most calendars are designed for teams. Slate is designed<br></br> for freelancers
            <style>
              {`
                .Page1ParagraphText {
                  font-size: 24px;
                  font-family: 'Roboto';
                  font-weight: 400;
                  line-height: 1;
                  letter-spacing: 0.25;
                  word-wrap: break-word;
                  color: white;
                  text-align: center;
                }
              `}
            </style>  
          </p>
        <div className="Page1Button">
          <div style={{width: 200, height: 45, paddingTop: 10, paddingBottom: 16, background: '#2091F9', borderRadius: 35, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
          <div style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, wordWrap: 'break-word'}}>Try For Free</div>
          </div>
          </div>
        </div>
    </section>  
  </main>
      <section className="page2">
        <section className="Page2Top">
          <h2 className= "Features">Features
            <style>
              {`
                .Features {
                  font-size: 48px;
                  font-family: 'Roboto';
                  font-weight: 400;
                  padding-top: 10%;
                  line-height: 0;
                  letter-spacing: 0.20;
                  word-wrap: break-word;
                  color: #252B42;
                  text-align: center;
                }
              `}
            </style>
          </h2>
          <p className = "FeatureJustBelow">Most calendars are designed for teams. <br></br>Slate is designed for freelancers
            <style>
              {`
                .FeatureJustBelow {
                  font-size: 28px;
                  font-family: 'Roboto';
                  font-weight: 400;
                  line-height: 1;
                  padding: 4%;
                  letter-spacing: 0.20;
                  word-wrap: break-word;
                  color: #374754;
                  text-align: center;
                }
              `}
            </style>
          </p>
        </section>
        <section className="Page2DifferentFeatures">
          <div>
            <div>
            <Image
              src="/mdi_shapes.svg"
              alt="Page2image"
              width={56}
              height={56} 
              />
              <style>
                {`
                  .Page2DifferentFeatures div {
                    display: flex;
                    flex-direction: column;
                    
                    align-items: center;
                    gap: 10px;
                  }
                `}
              </style>
             </div> 
            <h3>
              OpenType features<br></br> Variable fonts
              <style>
                {`
                  h3 {
                    font-size: 24px;
                    font-family: 'Roboto';
                    font-weight: 400;
                    line-height: 1;
                    letter-spacing: 0.20;
                    word-wrap: break-word;
                    text-align: center;
                    color: #252B42;
                  }
                `}
              </style>
            </h3>
            <p className = "ppp">
              Slate helps you see how<br></br>many more days you need<br></br>to work to reach your<br></br>financial goal.
              <style>
                {`
                  .ppp {
                    font-size: 16px;
                    font-family: 'Roboto';
                    font-weight: 400;
                    line-height: 1;
                    letter-spacing: 0.20;
                    word-wrap: break-word;
                    text-align: center;
                    color: #374754;
                  }
                `}
              </style>
            </p>
          </div>
          <div>
            <Image
              src="/mdi_draw.svg"
              alt="Page2shape2"
              width={56}
              height={56} />
            <h3>
              Design with real data
            </h3>
            <p className = "ppp">
              Slate helps you see how<br></br>many more days you need<br></br>to work to reach your<br></br>financial goal.
            </p>
          </div>
          <div>
            <Image
              src="/mdi_brush.svg"
              alt="Page2shape3"
              width={56}
              height={56} />
            <h3>
              Fastest way to<br></br>take action
            </h3>
            <p className = "ppp">
              Slate helps you see how<br></br>many more days you need<br></br>to work to reach your<br></br>financial goal.
            </p>
          </div>
        </section>
        <section className="page2">
          <div className = "vidImage">
            <Image
              src="/screen.svg"
              alt="Page2vid"
              width={600}
              height={400} />
          </div>
            <div className= "playbuttoncircle">
              <Image
                src="/playButtonCircle.svg"
                alt="Page2shape5"
                width={48}
                height={32} />
            </div>
              <div className = "PlayButton">
                <Image
                  src="/playButton.svg"
                  alt="Page2shape6"
                  width={18}
                  height={16} />
              </div>
        </section>
      </section>
      <section className="Page3">
        <div className = "Page3flex">
          <section className="Page3 Image">
            <Image
              src = "/page3image.svg"
              alt = "Page3Image"
              width = {600}
              height = {400}
            />
          </section>
          <section className="Page3EverythingElse">
            <div>
              <div style={{width: 173, height: 28, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
              <div style={{color: '#252B42', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 1, letterSpacing: 0.10, wordWrap: 'break-word'}}>At your fingertips</div>
              </div>
              <h2 className="Page3 Heading">
                <div style={{width: 324, height: 130, paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{color: '#252B42', fontSize: 48, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, wordWrap: 'break-word'}}>Lightning fast <br/>prototyping </div>
                </div>
              </h2>
            </div>
            <section>
              <div>
                <div style={{color: '#252B42', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 1, paddingTop: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Subscribe to our Newsletter
                </div>
                <div style={{color: '#374754', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, wordWrap: 'break-word'}}>Available exclusivery on Figmaland
                </div>
              </div>
              <div>
                <div style={{width: 273, height: 54, paddingLeft: 39, paddingRight: 39, paddingTop: 19, paddingBottom: 19 ,background: '#F4F4F4', borderRadius: 39, overflow: 'hidden', border: '1px #E8E8E8 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 64, display: 'inline-flex', marginRight: 11}}>
                  <div style={{color: '#18171D', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10, wordWrap: 'break-word'}}>Your Email</div>
                </div>
                <div style={{width: 172, height: 58, paddingLeft: 38, paddingRight: 38, paddingTop: 19, paddingBottom: 19, background: '#2091F9', borderRadius: 35, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                  <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, wordWrap: 'break-word'}}>Subscribe</div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>  
      </section>
      <section className="Page4">
        <div className="Page4flex">
          <div>
            <div style={{color: '#252B42', fontSize: 48, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, wordWrap: 'break-word', paddingBottom: 50, paddingTop: 20}}>Fastest way to <br/>organize</div>
            <div style={{color: '#374754', fontSize: 24, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, wordWrap: 'break-word', paddingBottom: 70}}>Most calendars are designed for teams. <br/>Slate is designed for freelancers</div>
            <div style={{width: 175, height: 45, marginLeft: 75, paddingTop: 12, paddingBottom: 16, background: '#2091F9', borderRadius: 35, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, wordWrap: 'break-word'}}>Try For Free</div>
            </div>
            </div>
          </div>
          <div className="Page4 Image">
            <Image
              src="/page4image.svg"
              alt="Page4Image"
              width={600}
              height={400} />
          </div>
        </div>  
      </section>
      <section className= "Page5">
        <div className="Page5Top">
          <div style={{textAlign: 'center', color: '#252B42', fontSize: 48, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, wordWrap: 'break-word', paddingBottom: 20}}>Partners</div>
          <div style={{textAlign: 'center', color: '#374754', fontSize: 28, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, wordWrap: 'break-word', paddingBottom: 70}}>Most calendars are designed for teams. <br/>Slate is designed for freelancers</div>
        </div>
        <section className="Partners">
          <div style={{width: 1075, height: 330, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
              <div style={{paddingLeft: 40, paddingRight: 40, paddingTop: 31, paddingBottom: 31, background: 'white', border: '1px #D8D8D8 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'inline-flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                  <div style={{color: '#374754', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10, wordWrap: 'break-word'}}>Client Name</div>
                </div>
                <img style={{width: 193, height: 58.14}} src="/logos_google.svg" />
              </div>
              <div style={{width: 273, paddingLeft: 40, paddingRight: 40, paddingTop: 32, paddingBottom: 32, background: 'white', border: '1px #D8D8D8 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'inline-flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                  <div style={{color: '#374754', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10, wordWrap: 'break-word'}}>Client Name</div>
                </div>
                <img style={{width: 193, height: 58.14}} src="/Rectangle.svg" />
              </div>
              <div style={{paddingLeft: 40, paddingRight: 40, paddingTop: 25, paddingBottom: 25, background: 'white', border: '1px #D8D8D8 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'inline-flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                  <div style={{color: '#374754', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10, wordWrap: 'break-word'}}>Client Name</div>
                </div>
                <img style={{width: 221.54, height: 77}} src="/Rectangle (1).svg" />
              </div>
              <div style={{paddingLeft: 40, paddingRight: 40, paddingTop: 25, paddingBottom: 25, background: 'white', border: '1px #D8D8D8 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'inline-flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                  <div style={{color: '#374754', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10, wordWrap: 'break-word'}}>Client Name</div>
                </div>
                <img style={{width: 140, height: 77}} src="/Rectangle (2).svg" />
              </div>
            </div>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
              <div style={{padding: 40, background: 'white', border: '1px #D8D8D8 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'inline-flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                  <div style={{color: '#374754', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10, wordWrap: 'break-word'}}>Client Name</div>
                </div>
                <img style={{width: 229, height: 46}} src="/Rectangle (3).svg" />
              </div>
              <div style={{paddingLeft: 40, paddingRight: 40, paddingTop: 31, paddingBottom: 31, background: 'white', border: '1px #D8D8D8 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'inline-flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                  <div style={{color: '#374754', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10, wordWrap: 'break-word'}}>Client Name</div>
                </div>
                <img style={{width: 193, height: 58.14}} src="/logos_google.svg" />
              </div>
              <div style={{paddingLeft: 40, paddingRight: 40, paddingTop: 25, paddingBottom: 25, background: 'white', border: '1px #D8D8D8 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'inline-flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                  <div style={{color: '#374754', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10, wordWrap: 'break-word'}}>Client Name</div>
                </div>
                <img style={{width: 140, height: 77}} src= "/Rectangle (2).svg" />
              </div>
              <div style={{width: 273, paddingLeft: 40, paddingRight: 40, paddingTop: 32, paddingBottom: 32, background: 'white', border: '1px #D8D8D8 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'inline-flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                  <div style={{color: '#374754', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10, wordWrap: 'break-word'}}>Client Name</div>
                </div>
                <img style={{width: 193, height: 58.14}} src="/Rectangle.svg" />
              </div>
            </div>
          </div>
        </section>
        <div className="Page5Button">
          <div style={{width: 200, height: 45, paddingTop: 16, paddingBottom: 16, background: '#2091F9', borderRadius: 35, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
          <div style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, wordWrap: 'break-word'}}>Try For Free</div>
          </div>
          </div>
        </div>
      </section><section className="Page6">
      <div style={{textAlign: 'center', color: '#252B42', fontSize: 48, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, wordWrap: 'break-word', paddingBottom: 100}}>Testimonials</div>
        <section className = "Sheesh">
          <Image
            src="/logos_ibm.svg"
            alt="IBM Logo"
            width={125}
            height={20}
          />
          <div style={{textAlign: 'center', color: '#374754', fontSize: 28, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, wordWrap: 'break-word'}}>Most calendars are designed for teams. Slate is designed for freelancers <br/>who want a simple way to plan their schedule.</div>
          <div style={{width: 186, height: 55, justifyContent: 'flex-start', alignItems: 'center', gap: 13, display: 'inline-flex'}}>
            <div style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
              <img style={{width: 50, height: 50, borderRadius: 9999}} src="/testimonial.svg" />
            </div>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
              <div style={{paddingTop: 2, paddingBottom: 2, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{color: '#374754', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10, wordWrap: 'break-word'}}>Organize across</div>
              </div>
              <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{color: '#252B42', fontSize: 15, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, wordWrap: 'break-word'}}>Ui designer</div>
              </div>
            </div>
          </div>
        </section>
        <div className="Page6Button">
          <div style={{width: 200, height: 45, paddingTop: 16, paddingBottom: 16, background: '#2091F9', borderRadius: 35, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
          <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
          <div style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, wordWrap: 'break-word'}}>More Testimonials</div>
          </div>
          </div>
        </div>
      </section><section className="Page7">
        <div>
          <div style={{textAlign: 'center', color: 'white', fontSize: 48, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, paddingTop: 80, wordWrap: 'break-word'}}>Pricing</div>
          <div style={{textAlign: 'center', color: 'white', fontSize: 28, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, paddingTop: 30, wordWrap: 'break-word'}}>Most calendars are designed for teams. <br/>Slate is designed for freelancers</div>
        </div>
        <section className="PricingPlans">
          <section className="Free Plan">
            <div className="Free Price Section">

            <div style={{width: 335, height: 607, padding: 40, background: 'white', boxShadow: '0px 13px 19px rgba(0, 0, 0, 0.07)', borderRadius: 10, border: '1px #DEDEDE solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 30, display: 'inline-flex'}}>
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <div style={{padding: '3px 0', color: '#252B42', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 1, letterSpacing: 0.10}}>FREE</div>
    <div style={{textAlign: 'center', color: '#374754', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10}}>Organize across all<br/>apps by hand</div>
  </div>
  <div style={{alignSelf: 'stretch', height: 61, display: 'inline-flex', alignItems: 'flex-start', justifyContent: "center"}}>
    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 10}}>
      <div style={{color: '#252B42', fontSize: 74, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 1, letterSpacing: 0.20}}>0</div>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
        <div style={{color: '#252B42', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 1, letterSpacing: 0.10}}>$</div>
        <div style={{color: '#374754', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10}}>Per Month</div>
      </div>
    </div>
  </div>
  <div style={{alignSelf: 'stretch', height: 240, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    {[...Array(5)].map((_, index) => (
      <div key={index} style={{padding: 10}}>
        <div style={{color: '#252B42', fontSize: 15, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20}}>Pricing Feature</div>
      </div>
    ))}
  </div>
  <div style={{alignSelf: 'stretch', height: 56, padding: '18px 38px', background: '#2091F9', borderRadius: 35, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10}}>
    <div style={{color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20}}>Order Now</div>
  </div>
</div>

            </div>  
          </section>
          <section className="Standard Plan">
          <div style={{width: 335, height: 693, padding: '83px 40px', background: '#2091F9', boxShadow: '0px 13px 19px rgba(0, 0, 0, 0.07)', borderRadius: 10, border: '1px #DEDEDE solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 30, display: 'inline-flex'}}>
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <div style={{padding: '3px 0', color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 1, letterSpacing: 0.10}}>STANDARD</div>
    <div style={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10}}>Organize across all <br/>apps by hand</div>
  </div>
  <div style={{height: 61, display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 10}}>
      <div style={{color: 'white', fontSize: 74, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 1, letterSpacing: 0.20}}>10</div>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
        <div style={{color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 1, letterSpacing: 0.10}}>$</div>
        <div style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10}}>Per Month</div>
      </div>
    </div>
  </div>
  <div style={{alignSelf: 'stretch', height: 240, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    {[...Array(5)].map((_, index) => (
      <div key={index} style={{padding: 10}}>
        <div style={{color: 'white', fontSize: 15, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20}}>Pricing Feature</div>
      </div>
    ))}
  </div>
  <div style={{alignSelf: 'stretch', height: 56, padding: '18px 38px', background: 'white', borderRadius: 35, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10}}>
    <div style={{color: '#2091F9', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20}}>Order Now</div>
  </div>
</div>
            
          </section>
          <section className="Business Plan">
          <div style={{width: 335, height: 607, padding: 40, background: 'white', boxShadow: '0px 13px 19px rgba(0, 0, 0, 0.07)', borderRadius: 10, border: '1px #DEDEDE solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 30, display: 'inline-flex'}}>
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <div style={{padding: '3px 0', color: '#252B42', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 1, letterSpacing: 0.10}}>BUSINESS</div>
    <div style={{textAlign: 'center', color: '#374754', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10}}>Organize across all <br/>apps by hand</div>
  </div>
  <div style={{height: 61, display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 10}}>
      <div style={{color: '#252B42', fontSize: 74, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 1, letterSpacing: 0.20}}>99</div>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
        <div style={{color: '#252B42', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 1, letterSpacing: 0.10}}>$</div>
        <div style={{color: '#374754', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10}}>Per Month</div>
      </div>
    </div>
  </div>
  <div style={{alignSelf: 'stretch', height: 240, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    {[...Array(5)].map((_, index) => (
      <div key={index} style={{padding: 10}}>
        <div style={{color: '#252B42', fontSize: 15, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20}}>Pricing Feature</div>
      </div>
    ))}
  </div>
  <div style={{alignSelf: 'stretch', height: 56, padding: '18px 38px', background: '#2091F9', borderRadius: 35, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10}}>
    <div style={{color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20}}>Order Now</div>
  </div>
</div>

          </section>
        </section>
      </section>
      <section className="Page8">
        <div className="Page8Top">
          <div style={{textAlign: 'center', color: '#252B42', fontSize: 48, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, paddingTop: 120, wordWrap: 'break-word'}}>Contact Us</div>
            <div style={{textAlign: 'center', color: '#374754', fontSize: 28, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, paddingTop: 40, paddingBottom: 80, wordWrap: 'break-word'}}>Most calendars are designed for teams. <br/>Slate is designed for freelancers</div>
  
        </div>
        <section className="ContactUsInput">
          <div style={{width: 453, height: 669, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex',}}>
            <div style={{alignSelf: 'stretch', height: 669, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 13, display: 'flex'}}>
              <div style={{alignSelf: 'stretch', height: 669, paddingLeft: 50, paddingRight: 50, paddingTop: 52, paddingBottom: 52, background: 'white', boxShadow: '0px 13px 19px rgba(0, 0, 0, 0.07)', overflow: 'hidden', border: '1px #DDDDDD solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 45, display: 'flex'}}>
                <div style={{color: '#252B42', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 1, letterSpacing: 0.10}}>Contact Us</div>
                <div style={{alignSelf: 'stretch', height: 54, paddingLeft: 20, paddingRight: 20, paddingTop: 19, paddingBottom: 19, background: '#F5F5F5', borderRadius: 39, overflow: 'hidden', border: '1px #E8E8E8 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{color: '#18171D', fontSize: 15, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10}}>Your Name</div>
                </div>
                <div style={{alignSelf: 'stretch', height: 54, paddingLeft: 20, paddingRight: 20, paddingTop: 19, paddingBottom: 19, background: '#F5F5F5', borderRadius: 39, overflow: 'hidden', border: '1px #E8E8E8 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{color: '#18171D', fontSize: 15, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10}}>Your Email</div>
                </div>
                <div style={{alignSelf: 'stretch', height: 193, paddingLeft: 20, paddingRight: 20, paddingTop: 23, paddingBottom: 23, background: '#F5F5F5', border: '1px #E8E8E8 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{width: 313, height: 147, paddingBottom: 131, paddingRight: 216, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{color: '#18171D', fontSize: 15, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10}}>Your Message</div>
                  </div>
                </div>
                <div style={{height: 56, paddingLeft: 38, paddingRight: 38, paddingTop: 18, paddingBottom: 18, background: '#2091F9', borderRadius: 35, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                  <div style={{color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20}}>Send</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: 825, height: 612.17, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex', paddingLeft: 80 }}>
            <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
              <div style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'flex', gap: 20 }}>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', gap: 10, alignItems: 'center', display: 'inline-flex' }}>
                  <div style={{ width: 26, height: 32, position: 'relative', alignItems: 'center' }}>
                    <div>
                      <Image
                        src="/bx_bx-map (1).svg"
                        alt="LinkedIn Icon"
                        width={27}
                        height={22} />
                    </div>
                  </div>
                  <div style={{ padding: 10, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ color: '#374754', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10 }}>6386 Spring St undefined Anchorage, <br />Georgia 12473 United States</div>
                  </div>
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                  <div style={{ width: 21, height: 34, paddingTop: 0.96, paddingBottom: 0.96, paddingRight: 0.58, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <Image
                      src="/ic_baseline-phone-android (1).svg"
                      alt="LinkedIn Icon"
                      width={27}
                      height={22} />
                  </div>
                  <div style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ padding: 10, justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
                      <div style={{ color: '#374754', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10 }}>(843) 555-0130</div>
                    </div>
                  </div>
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'flex', alignItems: 'center', display: 'inline-flex' }}>
                  <div style={{ width: 27, height: 22, paddingTop: 0.69, paddingBottom: 0.69, paddingRight: 0.75, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                    <div>
                      <Image
                        src="/Vector (1).svg"
                        alt="LinkedIn Icon"
                        width={27}
                        height={22} />
                    </div>
                  </div>
                  <div style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ padding: 10, justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
                      <div style={{ color: '#374754', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.10 }}>willie.jennings@example.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: 343.19, paddingTop: 10, paddingBottom: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 29, display: 'flex' }}>
              <div style={{ width: 516, height: 323.19, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                <img style={{ width: 516, height: 323.19 }} src="/mapscreen.svg" />
              </div>
            </div>
            <div style={{ padding: 10, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
              <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex' }}>
                <div style={{ width: 40.99, height: 40.99, paddingLeft: 3.84, paddingRight: 3.84, paddingTop: 6.96, paddingBottom: 6.96, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                  <div>
                    <Image
                      src="/ant-design_twitter-outlined (2).svg"
                      alt="LinkedIn Icon"
                      width={27}
                      height={22} />
                  </div>
                </div>
                <div style={{ width: 40.99, height: 40.99, padding: 4.48, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                  <div>
                    <Image
                      src="/Vector (2).svg"
                      alt="LinkedIn Icon"
                      width={27}
                      height={22} />
                  </div>
                </div>
                <div style={{ width: 40.99, height: 40.99, padding: 4.48, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                  <div>
                    <Image
                      src="/Vector (3).svg"
                      alt="LinkedIn Icon"
                      width={27}
                      height={22} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        <div className = "enough">
          <section className="Page8LastPart">
          </section>
        </div>
 
      </section><section className="LastPage">
        <div className = "Thats-how-it-s-donee">
          <div className="Page9 Pages List">
            <div style={{color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 2.8, letterSpacing: 0.10, wordWrap: 'break-word'}}>Pages</div>
              <div style={{color: 'white', fontSize: 15, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 2.8, letterSpacing: 0.4, wordWrap: 'break-word'}}>Home<br></br>Product<br></br>Pricing<br></br>About<br></br>Contact</div>
          </div>
          <div className="Page9 Tomothy List">
            <div style={{color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 2.8, letterSpacing: 0.10, wordWrap: 'break-word'}}>Tomothy</div>
              <div style={{color: 'white', fontSize: 15, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 2.8, letterSpacing: 0.4, wordWrap: 'break-word'}}>Eleanor Edwards<br></br>Ted Robertson<br></br>Annette Russell<br></br>Jennie Mckinney<br></br>Gloria Richards</div>

          </div>
          <div className="Page9 Jane Black List">
            <div style={{color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 2.8, letterSpacing: 0.10, wordWrap: 'break-word'}}>Jane Black</div>
              <div style={{color: 'white', fontSize: 15, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 2.8, letterSpacing: 0.4, wordWrap: 'break-word'}}>Philip Jones<br></br>Product<br></br>Colleen Russell<br></br>Marvin Hawkins<br></br>Bruce Simmmons</div>

          </div>
          <section className="Page9End">
            <div className = "location">
              <div className = "locationIcon">
                <Image
                  src="/bx_bx-map.svg"
                  alt="Location Icon"
                  width={32}
                  height={32} />
              </div>
              <div style={{color: 'white', fontSize: 15, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, wordWrap: 'break-word'}}>7480 Mockingbird Hill undefined </div>
            </div>
            <div className = "phoneNumber">
              <div className = "phoneIcon">
                <Image
                  src="/phone.svg"
                  alt="Phone Icon"
                  width={30.67}
                  height={38.33} />
              </div>
              <div style={{color: 'white', fontSize: 15, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, wordWrap: 'break-word'}}>(239) 555-0108 </div>
            </div>
            <div className = "overlaySocial2">    
              <div className = "Socialss2">
                <Image
                  src="/twitter.svg"
                  alt="Twitter Logo"
                  width={32}
                  height={32} />
                <Image
                  src="/facebook.svg"
                  alt="Facebook Logo"
                  width={32}
                  height={32} />
                <Image
                  src="/linkedin.svg"
                  alt="Linkedin Logo"
                  width={32}
                  height={32} />
              </div>
            </div> 
          </section>
        </div>
      </section></>
  )
}




//     <div style={{ 
//       display: 'flex', 
//       flexDirection: 'column', /* Stack elements vertically */
//       minHeight: '100vh', /* Ensure the container takes up at least the height of the viewport */
//     }}>
//       <div style={{ 
//         flex: '1', /* Allow the container to grow and take up remaining vertical space */
//         background: `url("/Rectangle 9.svg")`, /* Set background image */
//         backgroundSize: 'cover', /* Cover the entire division */
//         backgroundPosition: 'center', /* Center the background image */
//         padding: '20px', /* Add padding after the background image */
//         minHeight: '100vh', /* Ensure the container takes up at least the height of the viewport */
//       }}>
//         <div style={{wclassNameth: 1210, height: 156, position: 'relative'}}>
//   <div style={{paddingLeft: 20, paddingRight: 20, left: '40%', top: 39, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
//     <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex'}}>
//       <div style={{padding: 10, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
//         <img style={{wclassNameth: 186, height: 58}} src="/next.svg" />
//       </div>
//     </div>
//   </div>
//   <div style={{left: '82%', top: 56.51, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 44, display: 'inline-flex'}}>
//     <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
//       <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex'}}>
//         <div style={{wclassNameth: 40.99, height: 40.99, paddingLeft: 3.84, paddingRight: 3.84, paddingTop: 6.96, paddingBottom: 6.96, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
//           <div style={{wclassNameth: 33.31, height: 27.06, background: 'white'}}></div>
//         </div>
//         {[1, 2].map((_, index) => (
//           <div key={index} style={{wclassNameth: 40.99, height: 40.99, padding: 4.48, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
//             <div style={{wclassNameth: 32.02, height: 32.02, background: 'white'}}></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
//   <div style={{left: 40, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 21, display: 'inline-flex'}}>
//     {['Home', 'Product', 'Pricing', 'About', 'Contact'].map((item, index) => (
//       <div key={index} style={{padding: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
//         <div style={{textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 9, letterSpacing: 0.20, wordWrap: 'break-word'}}>{item}</div>
//       </div>
//     ))}
//   </div>
// </div>

//         <div style={{textAlign: 'center', color: 'white', fontSize: 74, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 1, letterSpacing: 0.20, wordWrap: 'break-word'}}>The best products <br/>start with Figma</div>
//         <div style={{wclassNameth: 786, height: 100, padding: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
//         <div style={{textAlign: 'center', color: 'white', fontSize: 28, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 2, letterSpacing: 0.20, wordWrap: 'break-word'}}>Most calendars are designed for teams. Slate is designed <br/>for freelancers</div>

// </div>{/* Your other content */}
// <div style={{wclassNameth: 276, height: 92, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10}}>
//   <div style={{background: '#2091F9', borderRadius: 35, height: 52, overflow: 'hclassNameden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
//     <div style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', lineHeight: '20px', letterSpacing: 0.20, padding: '16px 0', wordWrap: 'break-word'}}>Try For Free</div>
//   </div>
// </div>
//       </div>
//       {/* Division with white background */}
//       <div style={{ 
//   background: '#ffffff',
//   padding: '20px',
//   textAlign: 'center',
//   marginTop: 'auto',
// }}>
//   <div style={{wclassNameth: 552, height: 182, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 7, display: 'inline-flex'}}>
//     <div style={{padding: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
//       <div style={{textAlign: 'center', color: '#252B42', fontSize: 48, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 5, letterSpacing: 0.20, wordWrap: 'break-word'}}>Features</div>
//     </div>
//     <div style={{padding: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
//       <div style={{textAlign: 'center', color: '#374754', fontSize: 28, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1, letterSpacing: 0.20, wordWrap: 'break-word'}}>Most calendars are designed for teams. <br/>Slate is designed for freelancers</div>
//     </div>
//   </div>
//   <div style={{wclassNameth: '90vw', maxWclassNameth: '1177.34px', height: 'calc(90vw * 0.5592)', position: 'relative', borderRadius: '10%', margin: 'auto', marginTop: '20px'}}>
//     <img style={{wclassNameth: '100%', height: '100%', left: 0, top: 0, position: 'absolute', boxShadow: '0px 1vw 7vw rgba(0, 0, 0, 0.15)', borderRadius: '4%'}} src="/screen.svg" alt="Screen" />
//     <div style={{wclassNameth: '16%', height: '16%', left: '42%', top: '35%', position: 'absolute'}}>
//       <div style={{wclassNameth: '57%', height: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-49%, -12%)', background: '#2091F9', borderRadius: '50%'}} />
//       <div style={{wclassNameth: '60%', height: '85%', paddingLeft: '2%', paddingRight: '2%', left: '20%', top: '45%', position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
//         <div style={{wclassNameth: '21%', height: '25%', background: 'white', borderRadius: '5%'}}></div>
//       </div>
//     </div>
//   </div>


        
//       </div>
//     </div>












// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">app/page.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               wclassNameth={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           wclassNameth={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grclassName text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grclassName-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Explore starter templates for Next.js.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
