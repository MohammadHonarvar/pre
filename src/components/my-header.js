/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, css } from 'lit-element';
// import { Test } from './Test.js';
import { PageViewElement } from './page-view-element.js';


// // These are the elements needed by this element.
// import './shop-products.js';
// import './shop-cart.js';

class MyHeader extends PageViewElement {

  render() {
    return html`
        <!-- <p> -->
          <img name="usaMap" src="../../images/header.jpeg" usemap="#m_usaMap" border="0" width="100%">
        <!-- </p> -->
        
        <map name="m_usaMap">
          <!-- A -->
          <area shape="poly" coords="65 365,941 365,941 1045,65 1045" href="#" title="Alabama">
        </map>
    `;
  }
}

window.customElements.define('my-header', MyHeader);
