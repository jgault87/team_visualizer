const generateFinal = printTeam => {


  const generateManager = manager => {
    return ` <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${manager.getRole()} ${manager.getName()}<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Manager<i class="material-icons right">close</i></span>
      <ul>
      <li> ID: ${manager.getId()} </li>
      <li> Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li>Office number: ${manager.getOfficeNumber()}</li>

      
      </ul>
    </div>
   </div>
    
    `;
  };

  const generateEngineer = engineer => {
    return `<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${engineer.getRole()} ${engineer.getName()}<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Manager<i class="material-icons right">close</i></span>
      <ul>
      <li>ID: ${engineer.getId()}</li>
      <li> Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li>Office number: ${engineer.getgithub()}</li>

      
      </ul>
    </div>
   </div>`;
  };

  

  const generateIntern = intern => {

    return `<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${intern.getRole()} ${intern.getName()}<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Manager<i class="material-icons right">close</i></span>
      <ul>
      <li>ID: ${intern.getId()}</li>
      <li> Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li>Office number: ${intern.getSchool()}</li>

      
      </ul>
    </div>
   </div>`;
  };

  const cards = [];

    cards.push(printTeam
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    cards.push(printTeam
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    cards.push(printTeam
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return cards.join("");

    

};

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

    ${generateFinal(printTeam)}

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