import React from 'react';
import boisgauche from './wood-right.png';
import boisdroit from './wood-left.png';
import chaise1 from './chaise01.png';
import chaise2 from './chaise02.png';
import bureau from './office.png';
import wood from './woodfoot.svg';
import './App.css';

function App() {
  return (
<div className="App">
  <div class="row">
      <header className="App-header">
      <div class="layer"></div>
        <img src={boisgauche} className="App-logo" alt="background" />
        <img src={boisdroit} className="App-logo" alt="background" />
      </header>
</div>
{/* presentation */}
<div class="row">
        <img src={chaise1} className="img1" alt="image" />
        <div class=" middle">  
          <h4>About us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a class="liens">Learn More</a>
        </div>
</div>

<div class="row">
      
      <div class=" shop">  
        <h4>Shop</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a class="liens">Go Shopping</a>
      </div>
    <img src={chaise2} className="img2" alt="image" />
</div>
{/* CONCLUSION */}
<div class="row">
      <div class=" conclusion">
        <div class="layer2"></div>
        <img src={bureau} className="office" alt="background" />
          <div class="textCcl"> 
            <h1>CREATIVE TEAM</h1>
            <h2>GOOG MINDSET</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
      </div>
</div>
{/* FORMULAIRE */}
      <div class="row">
      <div class="contactForm">
    <form>
          <div class="form-row">
           <div class="col-6">
             <input type="text" class="form-control"  placeholder="First Name"/>
           </div>
            <div class="col-6">
              <input type="text" class="form-control"  placeholder="Last Name"/>
            </div>
          </div>

          <div class="form-row">
            <div class="col-8">
              <input type="text" class="form-control" placeholder="Email adress"/>
            </div>
            <div class="col-4"></div>
            <div class="col-10">
            <textarea class="form-control" placeholder="Your text here..."></textarea>
            </div>
            <div class="col-2"></div>
          </div>
    </form>
      </div>
      </div>

      <footer>
        <div>
        <img src={wood} className="imgFoot" alt="image" />
        </div>
      </footer>
     
</div>

  );
}

export default App;
