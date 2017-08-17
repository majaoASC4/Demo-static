const designTemplates = {
     home: `
     <style>
          background-image: url("https://slack-imgs.com/?c=1&url=https%3A%2F%2Ffarm5.staticflickr.com%2F4425%2F36423310582_78ecd816c1_m.jpg");
          background-repeat: no-repeat;

     </style>
     `
}

const templates = {
     header_home: `<nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light justify-content-between">
          <a class="navbar-brand">TT4H</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
               <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

               </ul>
               <form class="form-inline">
                    <input id="username" class="form-control mr-sm-2" type="text" placeholder="Username" aria-label="Username">
                    <input id="password" class="form-control mr-sm-2" type="text" placeholder="Password" aria-label="Password">
                    <a style="margin:0 1rem;" class="btn btn-outline-dark" href="#">Login</a>
               </form>
          </div>
     </nav>`,
     header_site: `
     <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light justify-content-between">
          <a class="navbar-brand">TT4H</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
               <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                         <a id="home" class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                         <a id="job-add" class="nav-link" href="#">Add Jobs</a>
                    </li>
                    <li class="nav-item">
                         <a id="job-display" class="nav-link" href="#">Jobs</a>
                    </li>
                    <li class="nav-item">
                         <a class="nav-link" id="success-story">Latest Successes</a>
                    </li>
               </ul>
               <form class="form-inline">
                    <input id="search" class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                    <img class="rounded-circle user-avatar-small hidden-lg" src="https://farm5.staticflickr.com/4355/36189377790_9eb66bf50c_m.jpg"
                    alt="">
                    <a style="margin:0 1rem;" class="btn btn-outline-dark" href="#">Search</a>
                    <a href="#" id="sign-out"><i class="fa fa-ellipsis-v"></i></a>
               </form>
          </div>
     </nav>
     `,
     home: `
     <div class="logo-appearance" style="width: 100%; height: 100%;text-align:center;">
          <img src="assets/logo1.png" class="float logo-img rounded-circle" style="border-width:10px;border-style:double;border-color:lightskyblue;width:50vw;max-width:800px;min-width:150px;bottom:0;vertical-align:middle;margin-top:10%;">
     </div>
     <div class="container body-content">
          <div class="text-center container">
               <div class="row justify-content-center text-center">
                    <div class="col-12">
                         <h1 class="main-title" style="font-size: 4rem;margin-top:2rem;"><strong>Join Us!</strong></h1>
                    </div>
                    <div class="col-12" style="margin-bottom: 3rem;">
                    <div class="card sign-in-card" style="margin: 10px auto;">
                         <h3 class="card-title">Or Sign In with:</h3>
                         <div class="card-body">
                              <div class="sign-in-button" id="google-sign">
                                   <div class="content-wrapper" style="vertical-align: middle">
                                        <div class="logo-wrapper" style="vertical-align: top">
                                             <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48" class="abcRioButtonSvg"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                                        </div>
                                        <span style="font-size:13px;padding-bottom:15px;" class="sign-button-contents"><span>Sign in</span>
                                        <span id="connected2nh04gaz02u5" style="display:none">Signed in</span></span>
                                   </div>
                              </div>
                         </div>
                    </div>
                    </div>

                    <div class="col-md-4" style="margin-bottom: 1rem;">
                         <div class="card text-center" style="padding: 1rem;">
                              <img class="card-img-top" src="https://ichef.bbci.co.uk/news/96/media/images/66259000/jpg/_66259112_marwa144_2ap.jpg" style="width:80px;height:80px;border-radius:100px;margin:10px auto;">
                              <h5 class="card-title">Christina</h5>
                              <p class"card-title">Microsoft Digital Marketer</p>
                              <p class="card-body">"Teens4Hire allowed me to start working at the age of 14! I have absolutely loved working for Microsoft ever since."</p>
                         </div>
                    </div>

                    <div class="col-md-4">
                         <div class="card" style="padding: 1rem;">
                         <img class="card-img-top" src="https://i0.wp.com/thegrio.com/wp-content/uploads/2014/01/daniel-green.jpg?fit=256%2C256" style="width:80px;height:80px;border-radius:100px;margin:10px auto;">
                              <h5 class="card-title">Justin Phillips</h5>
                              <p class"card-title">JP Morgan UX Designer</p>
                              <p class="card-body">"I'm a teenager so it's pretty rare for me to find work. But when I do, it always comes from Teens4Hire."</p>
                         </div>
                    </div>

                    <div class="col-md-4" >
                         <div class="card" style="padding: 1rem;">
                         <img class="card-img-top" src="https://secure.gravatar.com/avatar/5dc33c63a75de1c70f40d78e52f1f211?s=96&d=mm&r=g" style="width:80px;height:80px;border-radius:100px;margin:10px auto;">
                              <h5 class="card-title">Shauna Vayne</h5>
                              <p class"card-title">Google SWE Intern</p>
                              <p class="card-body">"The best thing about Teens4Hire is that it's free, simplifies data, and is ONLY for teens. It's never been so easy to get a job."</p>
                         </div>
                    </div>
               </div>
          </div>
     </div>`,
     profile: `
     <div class="profile-render">
          <div class="about container row">
               <div class="about-sec col-xl-3">
                    <div class="card text-center user-intro">
                         <div class="img-constraint">
                              <img src="https://s-media-cache-ak0.pinimg.com/originals/a8/b5/c1/a8b5c15a909c2a3741a2dd7a5d7a0650.jpg" alt="" class="card-img-top">
                         </div>
                         <div class="card-body">
                              <img src="https://farm5.staticflickr.com/4355/36189377790_9eb66bf50c_m.jpg" alt="" class="user-avatar rounded-circle">
                              <div class="clearfix"></div>
                              <h6 class="username">Oliver King</h6>
                              <p class="user-description card-text headline">I'm an Aspiring Full-Stack Developer!</p>
                         </div>
                    </div>
                    <div class="user-public-data card">
                         <strong>About</strong>
                         <ul class="list-group list-group-flush">
                              <li class="list-group-item">Currently Attends <a class="education" href="#!">Ridge High School</a></li>
                              <li class="list-group-item">Looking For <a class="job-company" href="#!">Web Development Internships</a></li>
                              <li class="list-group-item">Skills <a class="occupation" href="#!">Javascript HTML CSS jQuery Web Development PHP</a></li>
                              <li class="list-group-item">
                              </ul>
                         </div>
                    </div>
                    <div class="feed-sec col-xl-6">
                         <div class="card">
                              <div class="card-header">
                                   <b>Experience</b>
                              </div>
                              <ul class="list-group">

                                   <li class="list-group-item">
                                        <div class="container post">
                                             <div class="row">
                                                  <div class="col-4">
                                                       <img src="https://farm5.staticflickr.com/4401/35751320354_4b069f8c61_m.jpg" alt="" class="rounded">
                                                  </div>

                                                  <div class="container col-8">
                                                       <span class="row post-header"><h6 class="col-8 post-owner">Cooking Website</h6></span>
                                                       <p>Using CSS, HTML, and jQuery I developed my mother's cooking website. Here is a link to it -<a href="#!">www.sallyeats.com</a></p>

                                                  </div>
                                                  <div class="col-4">
                                                       <img
                                                       src="https://farm5.staticflickr.com/4372/35751642504_7f42df4ced_m.jpg" alt="" class="rounded">
                                                  </div>

                                                  <div class="col-8">
                                                       <span class="row post-header"><h6 class="col-8 post-owner">School Website</h6></span>
                                                       <p>Using APIs, HTML, CSS, and jQuery I upgraded the website of my school. Here's a link to it -<a href="#!">www.ridgehs.com</a></p>
                                                  </div>

                                                  <div class="col-4">
                                                       <img src="https://farm5.staticflickr.com/4426/36418554632_b79aca3cb2_m.jpg" alt="" class="rounded">
                                                  </div>

                                                  <div class="col-8">
                                                       <span class="row post-header"><h6 class="col-8 post-owner">Basketball Team Site</h6></span>
                                                       <p>Using HTML, CSS, and jQuery I upgraded the website of my basketball website. Here's a link to it - <a href="#!">www.ridgebball.com</a></p>
                                                  </div>
                                             </div>
                                        </div>
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div class="misc col-xl-3 romy2">
                         <div>
                              <!-- <button type="button" class="btn btn-success">Hire Student!</button> -->
                         </div>
                         <div class="card">
                              <ul class="nav">
                                   <span class="badge">Bootstrap</span>
                                   <span class="badge badge-pill badge-light"><a href="#!" class="badge-link">Mohammed Ajao</a></span>
                                   <span class="badge badge-pill badge-light"><a href="#!" class="badge-link">Nate Yaw</a></span>
                                   <span class="badge badge-pill badge-light"><a href="#!" class="badge-link">Ramses Hereford</a></span>
                              </ul>
                         </div>
                         <div class="card">
                              <h6><strong>Resumé</strong></h6>
                              <a href="#!">Resume link</a>
                              <button type="button" class="btn btn-primary">Upload Resumé</button>
                         </div>
                    </div>
                    <div class="feed-sec col-xl-6 romy">
                         <div class="card">
                              <div class="card-header">
                                   <strong>Testimonials</strong>
                              </div>
                              <ul class="list-group">
                                   <li class="list-group-item">
                                        <div class="container post">
                                             <div class="row">
                                                  <div class="col-4">
                                                       <img src="https://farm5.staticflickr.com/4414/35752228174_3a25c91100_m.jpg" alt="" class="rounded-circle">
                                                  </div>
                                                  <div class="col-8">
                                                       <span class="row post-header"><h6 class="col-8 post-owner">Peter Ferrara</h6></span>
                                                       <p>Oliver is a very focused and hard-working developer. He developed our school website thus making it easier for users to navigate and giving it a more modern look.</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>
     `,
     profile_list: `

<div class="about container row">
   <div class="about-sec col-6 col-sm-3">
       <div class="card text-center user-intro">
           <div class="img-constraint">
               <img src="https://www.planwallpaper.com/static/images/Hawaii-Beach-Wallpaper-HD.jpg" alt="" class="card-img-top">
           </div>
           <div class="card-body">
               <img src="https://traviscurry.files.wordpress.com/2013/09/md-headshots-teen-photography-frantza11.jpg?w=869" alt="" class="user-avatar rounded-circle">
               <div class="clearfix"></div>
               <h6 class="username">Oliver King</h6>
               <p class="user-description card-text headline">I'm an Aspiring Full-Stack Developer!</p>
               <a class="sample-profile" href="#!">View Full Profile</a>
           </div>
       </div>
   </div>
   <div class="about-sec col-6 col-sm-3">
       <div class="card text-center user-intro">
           <div class="img-constraint">
               <img src="https://www.planwallpaper.com/static/images/cold_galaxy-HD.jpg" alt="" class="card-img-top">
           </div>
           <div class="card-body">
               <img src="http://4.bp.blogspot.com/-NOYppoNXnoA/Vl0BnGtXEFI/AAAAAAABU1s/fanK3tscSYA/s1600/Actor%2Bheadshots_kids_teens_232.jpg" alt="" class="user-avatar rounded-circle">
               <div class="clearfix"></div>
               <h6 class="username">Tyrone Beckford</h6>
               <p class="user-description card-text headline">I'm an Aspiring Web Developer!</p>
               <a href="#!">View Full Profile</a>
           </div>
       </div>
       </div>
       <div class="about-sec col-6 col-sm-3">
           <div class="card text-center user-intro">
               <div class="img-constraint">
                   <img src="https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg" alt="" class="card-img-top">
               </div>
               <div class="card-body">
                   <img src="https://www.smartheadshots.com/actor-headshots/headshots/kids-headshots-11704.jpg" alt="" class="user-avatar rounded-circle">
                   <div class="clearfix"></div>
                   <h6 class="username">Drake Johnson</h6>
                   <p class="user-description card-text headline">I'm an Aspiring Back-End Developer!</p>
                   <a href="#!">View Full Profile</a>
               </div>
           </div>
       </div>
       <div class="about-sec col-6 col-sm-3">
           <div class="card text-center user-intro">
               <div class="img-constraint">
                   <img src="http://smashingtips.com/wp-content/uploads/2012/08/3D-Pyramid-HD-Wallpaper.jpg" alt="" class="card-img-top">
               </div>
               <div class="card-body">
                   <img src="http://4.bp.blogspot.com/-30CtexNmMuk/VP9xaQl33dI/AAAAAAABUCc/pyI9UQghaXE/s1600/Headshots%2Bteens%2Blos%2Bangeles%2B.jpg" alt="" class="user-avatar rounded-circle">
                   <div class="clearfix"></div>
                   <h6 class="username">Omari Quentin</h6>
                   <p class="user-description card-text headline">I'm an Aspiring Game Developer!</p>
                   <a href="#!">View Full Profile</a>
               </div>
           </div>
       </div>
   </div>



   <div class="about container row">
       <div class="about-sec col-6 col-sm-3">
           <div class="card text-center user-intro">
               <div class="img-constraint">
                   <img src="http://www.pixelstalk.net/wp-content/uploads/2016/04/Lake-in-new-zealand-wallpapers-2880x1800.jpg" alt="" class="card-img-top">
               </div>
               <div class="card-body">
                   <img src="http://johnnyolsen.com/wp-content/gallery/headshots-kids/teenage-actor-headshots.jpg" alt="" class="user-avatar rounded-circle">
                   <div class="clearfix"></div>
                   <h6 class="username">Christina Lee</h6>
                   <p class="user-description card-text headline">I'm an Aspiring Javascript Developer!</p>
                   <a href="#!">View Full Profile</a>
               </div>
           </div>
           </div>
           <div class="about-sec col-6 col-sm-3">
               <div class="card text-center user-intro">
                   <div class="img-constraint">
                       <img src="https://s-media-cache-ak0.pinimg.com/736x/fe/11/b2/fe11b25a00d13c05d682ac225e0973e4--imac-wallpaper-ipad-air-wallpaper.jpg" alt="" class="card-img-top">
                   </div>
                   <div class="card-body">
                       <img src="https://rstarprod.files.wordpress.com/2010/09/hispanic_teen_headshot_ohbi.jpg" alt="" class="user-avatar rounded-circle">
                       <div class="clearfix"></div>
                       <h6 class="username">Riana Hernandez</h6>
                       <p class="user-description card-text headline">I'm an Aspiring Security Specialist!</p>
                       <a href="#!">View Full Profile</a>
                   </div>
               </div>
               </div>
               <div class="about-sec col-6 col-sm-3">
                   <div class="card text-center user-intro">
                       <div class="img-constraint">
                           <img src="http://wallup.net/wp-content/uploads/2015/12/237946-vintage-car-photography.jpg" alt="" class="card-img-top">
                       </div>
                       <div class="card-body">
                           <img src="https://static1.squarespace.com/static/55a94019e4b0dad7bd1c05d1/55c13aade4b0ac1d876fed09/55c3c5ade4b0207cc07d5e7e/1440779044172/Kids+-+and+-+teens+-+headshots+%2829%29.jpg" alt="" class="user-avatar rounded-circle">
                           <div class="clearfix"></div>
                           <h6 class="username">Dante Simpson</h6>
                           <p class="user-description card-text headline">I'm an Aspiring Mobile App Developer!</p>
                           <a href="#!">View Full Profile</a>
                       </div>
                   </div>
                   </div>
                   <div class="about-sec col-6 col-sm-3">
                       <div class="card text-center user-intro">
                           <div class="img-constraint">
                               <img src="http://i.imgur.com/SGW1UYp.jpg" alt="" class="card-img-top">
                           </div>
                           <div class="card-body">
                               <img src="https://s-media-cache-ak0.pinimg.com/originals/83/ec/bb/83ecbbf83cb54c326718d28e4d5f4c05.jpg" alt="" class="user-avatar rounded-circle">
                               <div class="clearfix"></div>
                               <h6 class="username">Francis Castro</h6>
                               <p class="user-description card-text headline">I'm an Aspiring Android Developer!</p>
                               <a href="#!">View Full Profile</a>
                           </div>
                       </div>
                       </div>

   </div>


   <div class="about container row">
       <div class="about-sec col-6 col-sm-3">
           <div class="card text-center user-intro">
               <div class="img-constraint">
                   <img src="https://s-media-cache-ak0.pinimg.com/736x/b8/19/55/b8195520716a9c312175e898f9be9e28--photography-studios-background-images.jpg" alt="" class="card-img-top">
               </div>
               <div class="card-body">
                   <img src="https://s-media-cache-ak0.pinimg.com/originals/cc/4a/6c/cc4a6c12fedb412d6e1f52ff691e6600.jpg" alt="" class="user-avatar rounded-circle">
                   <div class="clearfix"></div>
                   <h6 class="username">Philicia Richardson</h6>
                   <p class="user-description card-text headline">I'm an Aspiring IOS Developer!</p>
                   <a href="#!">View Full Profile</a>
               </div>
           </div>
       </div>
       <div class="about-sec col-6 col-sm-3">
           <div class="card text-center user-intro">
               <div class="img-constraint">
                   <img src="http://cdn.wallpapersafari.com/95/59/HuJCwT.png" alt="" class="card-img-top">
               </div>
               <div class="card-body">
                   <img src="http://johnnyolsen.com/wp-content/gallery/los-angeles-kids-headshots/los-angeles-asian-kids.jpg" alt="" class="user-avatar rounded-circle">
                   <div class="clearfix"></div>
                   <h6 class="username">Nicholas Chen</h6>
                   <p class="user-description card-text headline">I'm an Aspiring Full-Stack Developer!</p>
                   <a href="#!">View Full Profile</a>
               </div>
           </div>
       </div>
       <div class="about-sec col-6 col-sm-3">
           <div class="card text-center user-intro">
               <div class="img-constraint">
                   <img src="https://s-media-cache-ak0.pinimg.com/originals/42/97/15/42971507604eed0ea9332dfd4993f3a1.jpg" alt="" class="card-img-top">
               </div>
               <div class="card-body">
                   <img src="https://static1.squarespace.com/static/590ecd35e58c62a5ff67c001/t/591eafcae6f2e191e539691f/1495354838879/ChandlerKinney-1303rSSWEB.jpg" alt="" class="user-avatar rounded-circle">
                   <div class="clearfix"></div>
                   <h6 class="username">Reina Gilliam</h6>
                   <p class="user-description card-text headline">I'm an Aspiring Node-Bot Developer!</p>
                   <a href="#!">View Full Profile</a>
               </div>
           </div>
       </div>
       <div class="about-sec col-6 col-sm-3">
           <div class="card text-center user-intro">
               <div class="img-constraint">
                   <img src="https://images5.alphacoders.com/568/568653.jpg" alt="" class="card-img-top">
               </div>
               <div class="card-body">
                   <img src="http://www.maxbrandinphotography.com/wp-content/uploads/2016/02/FNL_K8A1016_WEB_CROP2.jpg" alt="" class="user-avatar rounded-circle">
                   <div class="clearfix"></div>
                   <h6 class="username">Cierra Hamilton</h6>
                   <p class="user-description card-text headline">I'm an Aspiring Front-End Developer!</p>
                   <a href="#!">View Full Profile</a>
               </div>
           </div>
       </div>
     `,
     job_list: `
     <div class="container ">
          <div class="row">
               <ul class="listings">
                    <li class="row container">
                         <div class="col-3">
                              <a href="#l"><img class="job-logo" src="https://cdn.dribbble.com/users/68544/screenshots/1466660/g_dr.png" alt="" class="comp-logo"></a>
                         </div>
                         <div class="col"></div>
                         <div class="col-8">
                              <h3 class="page-header">Job Title</h3>
                              <h4 class="company-name">All Star Code</h4>
                              <p class="job-desc">.....</p>
                              <hr>
                              <span><a href="#" class="text-left site">www.allstarcode.org</a><br><a href="" class="text-right location">New York, NY</a></span>
                         </div>
                    </li>
               </ul>
          </div>
     </div>
     `,
     job_select: `
     <div class="job-view">
          <div class="container-fluid">
               <div class="row">
                    <div class="col-md-5">
                         <img src="https://cdn.dribbble.com/users/68544/screenshots/1466660/g_dr.png" alt="Company Logo" class="company-logo">
                    </div>
                    <div class="col-md-7 text-left">
                         <div class="container">
                              <h1 class="page-header job-namer">Job: Software Engineer Intern</h1>
                              <p class="job-description">Read the title.</p>
                         </div>
                    </div>
                    <div class="container row">
                         <div class="col-12">
                              <h1 class="page-header company-name">Google</h1>
                              <p class="company-description">An awesome company</p>
                         </div>
                         <div class="col-12">
                              <h1 class="page-header recruiter">Who to Speak With</h1>
                              <p class="recruiter-2">Speak with Google</p>
                         </div>
                    </div>
               </div>
          </div>
     </div>
     `,
     add_job: `
     <div class="container">
          <div class="text-left">
               <label for="job-name">Job Name</label>
               <div class="input-group">
                    <input id="job-name" type="text" class="form-control" placeholder="Job name" aria-label="Job name" aria-describedby="basic-addon2">
               </div>
               <br>
               <label for="job-description">Job Description</label>
               <div class="input-group">
                    <input id="job-description" type="text" class="form-control" placeholder="Job description" aria-label="Job description" aria-describedby="basic-addon2">
               </div>
               <br>
               <label for="company-name">Company Name</label>
               <div class="input-group">
                    <input id="company-name" type="text" class="form-control" placeholder="Company Name" aria-label="Company Name" aria-describedby="basic-addon2">
               </div>
               <br>
               <label for="company-logo">Company Logo Link</label>
               <div class="input-group">
                    <input id="company-logo" type="text" class="form-control" placeholder="Company Logo Link" aria-label="Company Logo Link" aria-describedby="basic-addon2">
               </div>
               <br>
               <label for="company-site">Company Site</label>
               <div class="input-group">
                    <input id="company-site" type="text" class="form-control" placeholder="Company Site" aria-label="Company Site" aria-describedby="basic-addon2">
               </div>
               <br>
               <label for="offerer">Recruiter/Main Contact</label>
               <div class="input-group">
                    <input id="offerer" type="text" class="form-control" placeholder="Employee offerring/recruiting" aria-label="Company Site" aria-describedby="basic-addon2">
               </div>
               <br>
          </div>
          <button type="button" class="btn btn-outline-info" id="admin-panel-submit">Submit Form</button>
     </div>
     `,
     sample_profile: `
     <div class="profile-render">
          <div class="about container row">
               <div class="about-sec col-xl-3">
                    <div class="card text-center user-intro">
                         <div class="img-constraint">
                              <img src="https://www.planwallpaper.com/static/images/Hawaii-Beach-Wallpaper-HD.jpg" alt="" class="card-img-top">
                         </div>
                         <div class="card-body">
                              <img src="https://traviscurry.files.wordpress.com/2013/09/md-headshots-teen-photography-frantza11.jpg?w=869" alt="" class="user-avatar rounded-circle">
                              <div class="clearfix"></div>
                              <h6 class="username">Oliver King</h6>
                              <p class="user-description card-text headline">I'm an Aspiring Full-Stack Developer!</p>
                         </div>
                    </div>
                    <div class="user-public-data card">
                         <strong>About</strong>
                         <ul class="list-group list-group-flush">
                              <li class="list-group-item">Currently Attends <a class="education" href="#!">Ridge High School</a></li>
                              <li class="list-group-item">Looking For <a class="job-company" href="#!">Web Development Internships</a></li>
                              <li class="list-group-item">Skills <a class="occupation" href="#!">Javascript HTML CSS jQuery Web Development PHP</a></li>
                              <li class="list-group-item">
                              </ul>
                         </div>
                    </div>
                    <div class="feed-sec col-xl-6">
                         <div class="card">
                              <div class="card-header">
                                   <b>Experience</b>
                              </div>
                              <ul class="list-group">

                                   <li class="list-group-item">
                                        <div class="container post">
                                             <div class="row">
                                                  <div class="col-4">
                                                       <img src="https://farm5.staticflickr.com/4401/35751320354_4b069f8c61_m.jpg" alt="" class="rounded">
                                                  </div>

                                                  <div class="container col-8">
                                                       <span class="row post-header"><h6 class="col-8 post-owner username">Cooking Website</h6></span>
                                                       <p>Using CSS, HTML, and jQuery I developed my mother's cooking website. Here is a link to it -<a href="#!">www.sallyeats.com</a></p>

                                                  </div>
                                                  <div class="col-4">
                                                       <img
                                                       src="https://farm5.staticflickr.com/4372/35751642504_7f42df4ced_m.jpg" alt="" class="rounded">
                                                  </div>

                                                  <div class="col-8">
                                                       <span class="row post-header"><h6 class="col-8 post-owner username">School Website</h6></span>
                                                       <p>Using APIs, HTML, CSS, and jQuery I upgraded the website of my school. Here's a link to it -<a href="#!">www.ridgehs.com</a></p>
                                                  </div>

                                                  <div class="col-4">
                                                       <img src="https://farm5.staticflickr.com/4426/36418554632_b79aca3cb2_m.jpg" alt="" class="rounded">
                                                  </div>

                                                  <div class="col-8">
                                                       <span class="row post-header"><h6 class="col-8 post-owner username">Basketball Team Site</h6></span>
                                                       <p>Using HTML, CSS, and jQuery I upgraded the website of my basketball website. Here's a link to it - <a href="#!">www.ridgebball.com</a></p>
                                                  </div>
                                             </div>
                                        </div>
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div class="misc col-xl-3 romy2">
                         <div>
                              <button type="button" class="btn btn-success">Hire Student!</button>
                         </div>
                         <div class="card">
                              <ul class="nav">
                                   <span class="badge">Bootstrap</span>
                                   <span class="badge badge-pill badge-light"><a href="#!" class="badge-link">Mohammed Ajao</a></span>
                                   <span class="badge badge-pill badge-light"><a href="#!" class="badge-link">Nate Yaw</a></span>
                                   <span class="badge badge-pill badge-light"><a href="#!" class="badge-link">Ramses Hereford</a></span>
                              </ul>
                         </div>
                         <div class="card">
                              <h6><strong>Resumé</strong></h6>
                              <a href="#!">Resume link</a>
                         </div>
                    </div>
                    <div class="feed-sec col-xl-6 romy">
                         <div class="card">
                              <div class="card-header">
                                   <strong>Testimonials</strong>
                              </div>
                              <ul class="list-group">
                                   <li class="list-group-item">
                                        <div class="container post">
                                             <div class="row">
                                                  <div class="col-4">
                                                       <img src="https://farm5.staticflickr.com/4414/35752228174_3a25c91100_m.jpg" alt="" class="rounded-circle">
                                                  </div>
                                                  <div class="col-8">
                                                       <span class="row post-header"><h6 class="col-8 post-owner username">Peter Ferrara</h6></span>
                                                       <p>Oliver is a very focused and hard-working developer. He developed our school website thus making it easier for users to navigate and giving it a more modern look.</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>
     `,
     success_story: `
     <div class="success">
        <div class="text-center">
                <div class="background-image" >
                    <div class="jumbotron overlay text-center" style="vertical-align: middle;">
                        <h1 style="margin-top: 4rem;">Zero To Hero</h1>
                        <p> By Ramses Hereford </p>
                    </div>
                </div>
                <div class="row container-fluid text-center article">
                    <h1 class="page-header text-center">Freelancer to Google Intern</h1>
                    <div class="clearfix"></div>
                    <br>
                    <div>
                        <hr>
                    </div>
                    <div>
                        <span class="float-left"><img src="assets/mwin.jpg" alt="" class="success-image"></span>
                        <span class="success-content">
                            <p class="text-left success-story">
                            “Our system is flexible for whatever you want to optimize it for,” says PhD student Hongzi Mao, who was lead author on a related paper with Alizadeh and PhD student Ravi Netravali. “You could even imagine a user personalizing their own streaming experience based on whether they want to prioritize rebuffering versus resolution.”
                              The paper will be presented at next week’s SIGCOMM conference in Los Angeles. The team will also be open-sourcing the code for the project.
                              How adaptive bitrate works<br><br>
                              Broadly speaking, there are two kinds of ABR algorithms: rate-based ones that measure how fast networks transmit data, and buffer-based ones that ensure that there’s always a certain amount of future video that’s already been buffered.
                              Both types are limited by the simple fact that they aren’t using information about both rate and buffering. As a result, these algorithms often make poor bitrate decisions and require careful hand-tuning by human experts to adapt to different network conditions.
                              Researchers have also tried to combine the two methods: A system out of Carnegie Mellon University outperforms both schemes using “model predictive control” (MPC), an approach that aims to optimize decisions by predicting how conditions will evolve over time. This is a major improvement, but still has the problem that factors like network speed can be hard to model.
                              “Modeling network dynamics is difficult, and with an approach like MPC you’re ultimately only going to be as good as your model,” say Alizadeh.<br><br>
                              Pensieve doesn’t need a model or any existing assumptions about things like network speed. It represents an ABR algorithm as a neural network and repeatedly tests it in situations that have a wide range of buffering and network speed conditions.
                              The system tunes its algorithms through a system of rewards and penalties. For example, it might get a reward anytime it delivers a buffer-free, high-resolution experience, but a penalty if it has to rebuffer.
                              “It learns how different strategies impact performance, and, by looking at actual past performance, it can improve its decision-making policies in a much more robust way,” says Mao, who was lead author on the new paper.
                              Content providers like YouTube could customize Pensieve’s reward system based on which metrics they want to prioritize for users. For example, studies show that viewers are more accepting of rebuffering early in the video than later, so the algorithm could be tweaked to give a larger penalty for rebuffering over time.
                              Melding machine learning with deep-learning techniques<br><br>
                              The team tested Pensieve in several settings, including using Wifi at a cafe and an LTE network while walking down the street. Experiments showed that Pensieve could achieve the same video resolution as MPC, but with a reduction of 10 to 30 percent in the amount of rebuffering.
                              “Prior approaches tried to use control logic that is based on the intuition of human experts,” says Vyaz Sekar, an assistant professor of electrical and computer engineering at Carnegie Mellon University who was not involved in the research. “This work shows the early promise of a machine-learned approach that leverages new ‘deep learning’-like techniques.”
                              Mao says that the team’s experiments indicate that Pensieve will work well even in situations it hasn’t seen before.<br>
                              “When we tested Pensieve in a ‘boot camp’ setting with synthetic data, it figured out ABR algorithms that were robust enough for real networks,” says Mao. “This sort of stress test shows that it can generalize well for new scenarios out in the real world.”
                              Alizadeh also notes that Pensive was trained on just a month’s worth of downloaded video. If the team had data at the scale of what Netflix or YouTube has, he says that he’d expect their performance improvements to be even more significant.
                              As a next project his team will be working to test Pensieve on virtual-reality (VR) video.<br><br>
                              “The bitrates you need for 4K-quality VR can easily top hundreds of megabits per second, which today’s networks simply can’t support,” Alizadeh says. “We're excited to see what systems like Pensieve can do for things like VR. This is really just the first step in seeing what we can do.”
                              Pensieve was funded, in part, by the National Science Foundation and an innovation fellowship from Qualcomm.
                            </p>
                        </span>
                    </div>
                </div>
        </div>
    </div>
     `
}
