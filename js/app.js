const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const jobRoot = firebase.database().ref("jobs")

let global_user;

function main(){
     console.log("Application loaded");
     console.log(templates.header_home);
     renderHomePage()
     handleAuthentication()
}

function renderHomePage(){
     $(".header").html(templates.header_home)
     $("#app").html(templates.home)
     $("#style").attr("href", "assets/styles/home.css")
     console.log("Completed home page render")
}

function renderProfilePage()
{
     if(global_user){
          $(".header").html(templates.header_site)
          $("#app").html(templates.profile)
          $("#style").attr("href", "assets/styles/profile.css")
          handleProfile()
          handleHeaderMain()
     }
}

function renderSampleProfile()
{
     $("#app").html(templates.sample_profile)
     handleSampleProfile()
}

function handleSampleProfile()
{

}

function handleHeaderMain()
{
     $("#job-add").click(function(e){
          e.preventDefault()
          renderAdminPanel()

     })
     $("#home").click(function(e){
          e.preventDefault()
          renderProfilePage()
     })
     $("#job-display").click(function(e){
          e.preventDefault()
          renderJobListings()
     })
     $("#success-story").click(function(e){
          e.preventDefault()
          renderSuccessStory()
     })
}

function renderJobListings()
{
     console.log("We got it!")
     $("#app").html(templates.job_list)
     $(".listings").empty()
     jobRoot.orderByKey().on('child_added',function(row){
          let data = row.val()
          let jobName = data.job
          let desc = data.desc
          let comp = data.company
          let location = data.location
          let offerer = data.offerer
          let website = data.website
          let logo = data.logo
          console.log("Working query")
          $(".listings").append(`
               <li class="row container">
                    <div class="col-3">
                         <a class="job-view-link" href="#"><img class="job-logo" src=`+logo+` alt="" class="comp-logo"></a>
                    </div>
                    <div class="col"></div>
                    <div class="col-8">
                         <h3 class="page-header">`+jobName+`</h3>
                         <h4 class="company-name" style="font-size: 1rem; font-weight: bold">`+comp+`<span class="host"> | `+offerer+` </span></h4>
                         <p class="job-desc">`+desc.substring(0,150)+"..."+`</p>
                         <p class="full-desc" style="display: none;">`+desc+`</p>
                         <hr>
                         <span><a href=`+website+` class="text-left site">`+website+`</a><br><a href="" class="text-right location">`+location+`</a></span>
                    </div>
               </li>
          `)
          handleJobListings()
     })
}

function handleJobListings()
{
     console.log("Called")
     $(".job-view-link").click(function(e){
          let parent = $(this).parents("li.row")
          let desc = parent.children("div.col-8").children(".full-desc").text()
          let jobName = parent.children("div.col-8").children(".page-header").text()
          let website = parent.children("div.col-8").children(".site").text()
          let location = parent.children("div.col-8").children(".location").text()
          let company = parent.children("div.col-8").children(".company-name").text()
          let logo = parent.children("div.col-3").children("a.job-view-link").children("img.job-logo").attr("src")
          let offerer = parent.children("div.col-8").children(".company-name").children("span.host").text().substring(3)
          $("#app").html(templates.job_select)
          $(".company-logo").attr("src", logo)
          $(".job-namer").text(jobName)
          $(".job-description").text(desc)
          $(".company-name").text(company)
          $(".recruiter-2").text("Speak with: " + offerer)
     })
}

function handleHeaderSecondary()
{

}

function renderSuccessStory()
{
     $("#app").html(templates.success_story)
}

function handleProfile()
{
     displayProfile()
     $("#sign-out").click(function(e){
          e.preventDefault();
          console.log("Logging user out")
          firebase.auth().signOut()
          renderHomePage()
          handleAuthentication()
     })
     $("#search").keypress(function(e){
          e.preventDefault();
          if(e.which == 13){
               console.log("Search")
               renderProfileListings()
          }
     })
}

function handleProfileListings()
{
     $(".sample-profile").click(function(e){
          e.preventDefault()
          renderSampleProfile()
     })
}


function renderProfileListings()
{
     $("#app").html(templates.profile_list)
     handleProfileListings()
}

function handleAdminPanel()
{
     $("#admin-panel-submit").click(function(e){
          let jobName = $("#job-name").val()
          let jobDesc = $("#job-description").val()
          let compName = $("#company-name").val()
          let compLogo = $("#company-logo").val()
          let compSite = $("#company-site").val()
          let recruiter = $("#offerer").val()
          console.log("Called to submit")
          console.log(jobName)
          e.preventDefault();
          let condition1 = jobName && jobDesc && compName && compLogo && compSite && recruiter
          let condition2 = jobName != "" && jobDesc != "" && compName != "" && compLogo != "" && recruiter != ""
          let condition3 = jobName != "undefined" && jobDesc != "undefined" && compName != "undefined" && compLogo != "undefined" && recruiter != "undefined"
          if(condition1 && condition2 && condition3){
               console.log("Can add job.")
               jobRoot.push({
                    job: jobName,
                    company: compName,
                    desc: jobDesc,
                    logo: compLogo,
                    offerer: recruiter,
                    website: compSite,
                    location: "New York"
               })
          }
     })
}
function renderAdminPanel()
{
     $("#app").html(templates.add_job)
     handleAdminPanel()
}

function handleAuthentication()
{
     console.log("Authentication management called")
          $("#google-sign").click(function(e){
               e.preventDefault();
               firebase.auth().signInWithPopup(googleAuthProvider).then(function(result){
               const user = result.user
               global_user = user
               renderProfilePage()
               // The signed-in user info.
          }).catch(function(error) {
               // Handle Errors here.
               var errorCode = error.code;
               var errorMessage = error.message;
               // The email of the user's account used.
               var email = error.email;
               // The firebase.auth.AuthCredential type that was used.
               var credential = error.credential;
               // ...
               console.log("Error " + errorCode + " : " + errorMessage)
          });
     })
     firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
               global_user = user
               console.log("User is on");
               renderProfilePage()
               // User is signed in.
          } else {
               global_user = null
               console.log("Nobody is signed in");
               // No user is signed in.
          }
     });
}

function displayProfile()
{
     $(".user-avatar").attr("src", global_user.photoURL)
     $(".user-avatar-small").attr("src", global_user.photoURL)
     $(".username").text(global_user.displayName)
}

$(main);
