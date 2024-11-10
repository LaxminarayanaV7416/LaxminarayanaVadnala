import logo from './logo.svg';
import './App.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
// import './assets/vendor/aos/aos.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import "./assets/css/main.css";
import coverPic from './assets/img/coverPic.jpg';



function App() {
  return (
    <div className="App">
 <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center">
        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
        {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
        <h1 className="sitename">Lax</h1>
      </a>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="index.html" className="active">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="resume.html">Resume</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

    </div>
  </header>

  <main className="main">

    {/* <!-- Hero Section --> */}
    <section id="hero" className="hero section dark-background">

      <img src={coverPic} alt="" data-aos="fade-in" />

      <div className="container" data-aos="zoom-out" data-aos-delay="100">
        <h2 style={{color: "black"}}>Laxminarayana Vadnala</h2>
        <p style={{color: "black"}}>I'm <span className="typed" style={{color: "black"}} data-typed-items="Designer, Developer, Freelancer, Photographer">Photographer</span><span className="typed-cursor typed-cursor--blink"></span></p>
        <div className="social-links">
          <a href="#" style={{color: "black"}}><i className="bi bi-twitter-x"></i></a>
          <a href="#" style={{color: "black"}}><i className="bi bi-facebook"></i></a>
          <a href="#" style={{color: "black"}}><i className="bi bi-instagram"></i></a>
          <a href="#" style={{color: "black"}}><i className="bi bi-linkedin"></i></a>
        </div>
      </div>

    </section> 
    {/* <!-- /Hero Section --> */}

  </main>


  {/* <!-- Resume Section --> */}
  <main className="main">

    {/* <!-- Page Title --> */}
    <div className="page-title" data-aos="fade">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>Resume</h1>
              <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li className="current">Resume</li>
          </ol>
        </div>
      </nav>
    </div>
    
    {/* <!-- End Page Title -->

    <!-- Resume Section --> */}
    <section id="resume" className="resume section">

      <div className="container">

        <div className="row">

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Sumary</h3>

            <div className="resume-item pb-0">
              <h4>Brandon Johnson</h4>
              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
            </div>
            {/* <!-- Edn Resume Item --> */}

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Master of Fine Arts &amp; Graphic Design</h4>
              <h5>2015 - 2016</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
            </div>
            {/* <!-- Edn Resume Item --> */}

            <div className="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2010 - 2014</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
            </div>
            {/* <!-- Edn Resume Item --> */}

          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Senior graphic design specialist</h4>
              <h5>2019 - Present</h5>
              <p><em>Experion, New York, NY </em></p>
              <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              </ul>
            </div>
            {/* <!-- Edn Resume Item --> */}

            <div className="resume-item">
              <h4>Graphic design specialist</h4>
              <h5>2017 - 2018</h5>
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <ul>
                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
              </ul>
            </div>
            {/* <!-- Edn Resume Item --> */}

          </div>

        </div>

      </div>

    </section>
    {/* <!-- /Resume Section --> */}

  </main>


  {/* <!-- About section --> */}
  <main className="main">

    {/* <!-- Page Title --> */}
    <div className="page-title" data-aos="fade">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>About</h1>
              <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li className="current">About</li>
          </ol>
        </div>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}

    {/* <!-- About Section --> */}
    <section id="about" className="about section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 content">
            <h2>UI/UX Designer &amp; Web Developer.</h2>
            <p className="fst-italic py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
            </p>
          </div>
        </div>

      </div>

    </section>
    {/* <!-- /About Section --> */}

    {/* <!-- Stats Section --> */}
    <section id="stats" className="stats section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="bi bi-emoji-smile"></i>
            <div className="stats-item">
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
              <p>Happy Clients</p>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="bi bi-journal-richtext"></i>
            <div className="stats-item">
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
              <p>Projects</p>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="bi bi-headset"></i>
            <div className="stats-item">
              <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
              <p>Hours Of Support</p>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="bi bi-people"></i>
            <div className="stats-item">
              <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
              <p>Hard Workers</p>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

        </div>

      </div>

    </section>
    {/* <!-- /Stats Section --> */}

    {/* <!-- Skills Section --> */}
    <section id="skills" className="skills section">

      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <div><span>My</span> <span className="description-title">Skills</span></div>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row skills-content skills-animation">

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            {/* <!-- End Skills Item --> */}

            <div className="progress">
              <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            {/* <!-- End Skills Item --> */}

            <div className="progress">
              <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            {/* <!-- End Skills Item --> */}

          </div>

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill"><span>PHP</span> <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            {/* <!-- End Skills Item --> */}

            <div className="progress">
              <span className="skill"><span>WordPress/CMS</span> <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            {/* <!-- End Skills Item --> */}

            <div className="progress">
              <span className="skill"><span>Photoshop</span> <i className="val">55%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            {/* <!-- End Skills Item --> */}

          </div>

        </div>

      </div>

    </section>
    {/* <!-- /Skills Section --> */}

    {/* <!-- Interests Section --> */}
    <section id="interests" className="interests section">

      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <div><span>I'm</span> <span className="description-title">interested in</span></div>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="features-item">
              <i className="bi bi-eye" style={{ color: "#ffbb2c" }}></i>
              <h3><a href="" className="stretched-link">Lorem Ipsum</a></h3>
            </div>
          </div>
          {/* <!-- End Feature Item --> */}

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="features-item">
              <i className="bi bi-infinity" style={{ color: "#5578ff" }}></i>
              <h3><a href="" className="stretched-link">Dolor Sitema</a></h3>
            </div>
          </div>
          {/* <!-- End Feature Item --> */}

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="features-item">
              <i className="bi bi-mortarboard" style={{ color: "#e80368" }}></i>
              <h3><a href="" className="stretched-link">Sed perspiciatis</a></h3>
            </div>
          </div>
          {/* <!-- End Feature Item --> */}

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="features-item">
              <i className="bi bi-nut" style={{ color: "#e361ff" }}></i>
              <h3><a href="" className="stretched-link">Magni Dolores</a></h3>
            </div>
          </div>
          {/* <!-- End Feature Item --> */}

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="500">
            <div className="features-item">
              <i className="bi bi-shuffle" style={{ color: "#47aeff" }}></i>
              <h3><a href="" className="stretched-link">Nemo Enim</a></h3>
            </div>
          </div>
          {/* <!-- End Feature Item --> */}

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="600">
            <div className="features-item">
              <i className="bi bi-star" style={{ color: "#ffa76e" }}></i>
              <h3><a href="" className="stretched-link">Eiusmod Tempor</a></h3>
            </div>
          </div>
          {/* <!-- End Feature Item --> */}

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="700">
            <div className="features-item">
              <i className="bi bi-x-diamond" style={{ color: "#11dbcf" }}></i>
              <h3><a href="" className="stretched-link">Midela Teren</a></h3>
            </div>
          </div>
          {/* <!-- End Feature Item --> */}

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="800">
            <div className="features-item">
              <i className="bi bi-camera-video" style={{ color: "#4233ff" }}></i>
              <h3><a href="" className="stretched-link">Pira Neve</a></h3>
            </div>
          </div>
          {/* <!-- End Feature Item --> */}

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="900">
            <div className="features-item">
              <i className="bi bi-command" style={{color: "#b2904f"}}></i>
              <h3><a href="" className="stretched-link">Dirada Pack</a></h3>
            </div>
          </div>
          {/* <!-- End Feature Item --> */}

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1000">
            <div className="features-item">
              <i className="bi bi-dribbble" style={{color: "#b20969"}}></i>
              <h3><a href="" className="stretched-link">Moton Ideal</a></h3>
            </div>
          </div>
          {/* <!-- End Feature Item --> */}

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1100">
            <div className="features-item">
              <i className="bi bi-activity" style={{color: "#ff5828"}}></i>
              <h3><a href="" className="stretched-link">Verdo Park</a></h3>
            </div>
          </div>
          {/* <!-- End Feature Item --> */}

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1200">
            <div className="features-item">
              <i className="bi bi-brightness-high" style={{color: "#29cc61"}}></i>
              <h3><a href="" className="stretched-link">Flavor Nivelanda</a></h3>
            </div>
          </div>
          {/* <!-- End Feature Item --> */}

        </div>

      </div>

    </section>
    {/* <!-- /Interests Section --> */}

    {/* <!-- Testimonials Section --> */}
    <section id="testimonials" className="testimonials section">

      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <div><span>Check my</span> <span className="description-title">Testimonials</span></div>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="swiper init-swiper" data-speed="600" data-delay="5000">
          {/* <script type="application/json" className="swiper-config">
            {
              "loop": true,
              "speed": 600,
              "autoplay": {
                "delay": 5000
              },
              "slidesPerView": "auto",
              "pagination": {
                "el": ".swiper-pagination",
                "type": "bullets",
                "clickable": true
              },
              "breakpoints": {
                "320": {
                  "slidesPerView": 1,
                  "spaceBetween": 40
                },
                "1200": {
                  "slidesPerView": 3,
                  "spaceBetween": 20
                }
              }
            }
          </script> */}
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item">
            <p>
              <i className=" bi bi-quote quote-icon-left"></i>
                <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>

    </section>
    {/* <!-- /Testimonials Section --> */}

  </main>

  {/* <!-- Contact section --> */}

  <main className="main">

    {/* <!-- Page Title --> */}
    <div className="page-title" data-aos="fade">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>Contact</h1>
              <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li className="current">Contact</li>
          </ol>
        </div>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}

    {/* <!-- Contact Section --> */}
    <section id="contact" className="contact section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
              <i className="icon bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
          </div>
          {/* <!-- End Info Item --> */}

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
              <i className="icon bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Me</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
          </div>
          {/* <!-- End Info Item --> */}

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
              <i className="icon bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>
          </div>
          {/* <!-- End Info Item --> */}

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
              <i className="icon bi bi-share flex-shrink-0"></i>
              <div>
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <a href="#"><i className="bi bi-twitter-x"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-skype"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Info Item --> */}

        </div>

        <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="600">
          <div className="row gy-4">

            <div className="col-md-6">
              <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
            </div>

            <div className="col-md-6 ">
              <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
            </div>

            <div className="col-md-12">
              <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
            </div>

            <div className="col-md-12">
              <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
            </div>

            <div className="col-md-12 text-center">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>

              <button type="submit">Send Message</button>
            </div>

          </div>
        </form>
        {/* <!-- End Contact Form --> */}

      </div>

    </section>
    {/* <!-- /Contact Section --> */}

  </main>

  <footer id="footer" className="footer dark-background">
    <div className="container">
      <h3 className="sitename">Personal</h3>
      <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
      <div className="social-links d-flex justify-content-center">
        <a href=""><i className="bi bi-twitter-x"></i></a>
        <a href=""><i className="bi bi-facebook"></i></a>
        <a href=""><i className="bi bi-instagram"></i></a>
        <a href=""><i className="bi bi-skype"></i></a>
        <a href=""><i className="bi bi-linkedin"></i></a>
      </div>
      <div className="container">
        <div className="copyright">
          <span>Copyright</span> <strong className="px-1 sitename">Personal</strong> <span>All Rights Reserved</span>
        </div>
        <div className="credits">
          {/* <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you've purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </div>
  </footer>

  {/* <!-- Scroll Top --> */}
  <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

  {/* <!-- Preloader --> */}
  {/* <div id="preloader"></div> */}

  {/* <!-- Vendor JS Files --> */}
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/typed.js/typed.umd.js"></script>
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>

  {/* <!-- Main JS File --> */}
  <script src="assets/js/main.js"></script>
    </div>
  );
}

export default App;
