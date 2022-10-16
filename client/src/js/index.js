// Import modules
import  "./form";
import { fetchCards } from './cards';
import { toggleForm, clearForm } from './form';

// Import CSS files
import "../css/index.css";

import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

import { initdb } from './database';

import { initDb, getDb, postDb, deleteDb } from './database';

window.addEventListener('load', function() {
  initdb();
  fetchCards();
  document.getElementById('logo').src = Logo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});

window.deleteCard = (e) => {
  // Grabs the id from the button element attached to the contact card.
  let id = parseInt(e.id);
  // Delete the card
  deleteDb(id);
  // Reload the DOM
  fetchCards();
};