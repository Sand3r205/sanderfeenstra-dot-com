import './css/stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import jquery from 'jquery';
import bootstrap from 'bootstrap';

import imgAngular from './img/angular.png';
import imgAngularJS from './img/AngularJS-large.png';
import imgBootstrap from './img/bootstrap-solid.png';
import imgCSS3 from './img/css3-logo-png-transparent.png';
import imgGitHub from './img/GitHub-Mark-Light-120px-plus.png';
import imgMaterial from './img/Google_Material_Design_Logo.svg.png';
import imgHTML from './img/HTML5_Logo_512.png';
import imgJavaScript from './img/JavaScript-logo.png';
import imgJQuery from './img/jQuery-Logo.png';
import imgLinkedIn from './img/LinkedIn.png';
import imgPHP from './img/new-php-logo.png';
import imgNodeJS from './img/nodejs-new-pantone-black.png';
import imgProfilePic from './img/profilepic.png';
import imgReact from './img/react.png';

jquery('document').ready(function () {
  document.getElementById('profilepic').src = imgProfilePic;
  document.getElementById('linkedin-logo').src = imgLinkedIn;
  document.getElementById('github-logo').src = imgGitHub;

  document.getElementById('js').src = imgJavaScript;
  document.getElementById('jquery').src = imgJQuery;
  document.getElementById('angularjs').src = imgAngularJS;
  document.getElementById('angular').src = imgAngular;
  document.getElementById('react').src = imgReact;
  document.getElementById('nodejs').src = imgNodeJS;
  document.getElementById('html5').src = imgHTML;
  document.getElementById('css3').src = imgCSS3;
  document.getElementById('bootstrap').src = imgBootstrap;
  document.getElementById('material').src = imgMaterial;
  document.getElementById('php').src = imgPHP;
});
