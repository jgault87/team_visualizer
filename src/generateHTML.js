const generateFinal = printTeam => {


  const generateManager = manager => {}

  const generateEngineer = engineer => {}

  const generateEmployee = employee => {}

  const generateIntern = intern => {}



    

}

module.exports = printTeam => {

 return `
 
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1.0"
    />
    <title>Team Members</title>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />
  </head>
  <body>
    <nav class="light-blue lighten-1" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">Our Team</a>
        <ul class="right hide-on-med-and-down"></ul>

        <ul id="nav-mobile" class="sidenav"></ul>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >
      </div>
    </nav>
    <div class="section no-pad-bot" id="index-banner">
      <div class="container">
        <br /><br />
        <h1 class="header center orange-text">Team Profile Gen</h1>
        <div class="row center"></div>
        <div class="row center"></div>
        <br /><br />
      </div>
    </div>

    <div class="container">
      <div class="section">
        <!--   Icon Section   -->
        <div class="row">
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text">
                <i class="material-icons">flash_on</i>
              </h2>
              <h5 class="center"></h5>

              <p class="light"></p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text">
                <i class="material-icons">group</i>
              </h2>
              <h5 class="center"></h5>

              <p class="light"></p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text">
                <i class="material-icons">settings</i>
              </h2>
              <h5 class="center"></h5>

              <p class="light"></p>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </div>

    <footer class="page-footer blue">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Company Bio</h5>
            <p class="grey-text text-lighten-4">
              This is a fake company of the best employees
            </p>
          </div>
          <div class="col l3 s12"></div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          Made by
          <a
            class="white-text text-lighten-3"
            href="https://github.com/jgault87"
            >JJ Gault</a
          >
        </div>
      </div>
    </footer>
  </body>
</html>

 
 
 `   
}