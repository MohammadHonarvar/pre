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
import { PageViewElement } from './page-view-element.js';

// // These are the elements needed by this element.
// import './shop-products.js';
// import './shop-cart.js';

class MyView4 extends PageViewElement {
  static get properties() {
    return {
      // This is the data from the store.
      _cart: { type: Object },
      _quantity: { type: Number },
      _error: { type: String }
    };
  }

  resizeMap() {
    this.resizeAreaTag(cachedAreaCoords);
  }

  resizeAreaTag(cachedAreaCoords) {
    this.scaleCoord(e);
  }

  scaleCoord(e) {
    let isWidth = 0;
    return cachedAreaCoords.split(',').map(Number).map(scaleCoord).map(Math.floor).join(',');
  }

  start() {

  }

  listenForResize() {

  }

  getCoords() {

  }



  init(element){
      if(!element.tagName) {
          throw new TypeError('Object is not a valid DOM element');
      } else if ('MAP' !== element.tagName.toUpperCase()) {
          throw new TypeError('Expected <MAP> tag, found <'+element.tagName+'>.');
      }

      scaleImageMap.call(element);
  }

  imageMapResizeF(target){
    switch (typeof(target)){
        case 'undefined':
        case 'string':
            console.log(this.shadowRoot.querySelectorAll(target||'map'));
            //Array.prototype.forEach.call(document.querySelectorAll(target||'map'),init);
            break;
        case 'object':
            this.init(target);
            break;
        default:
            throw new TypeError('Unexpected data type ('+typeof(target)+').');
    }
};

  factory(){
      return this.imageMapResizeF(undefined);
  }

  firstUpdated() {
    alert();

    this.factory();
    // console.log(this.shadowRoot.querySelectorAll('map'));

  }

  render() {
    return html`
      <p>
        <img name="usaMap" src="../../images/product-categories-type-1.jpg" usemap="#m_usaMap" border="0" width="100%">
      </p>

      <map name="m_usaMap">
        <!-- A -->
        <area shape="poly" coords="65 365,941 365,941 1045,65 1045" href="view1" title="Alabama">
      </map>
    `;
  }

  

  _fire() {

    alert('FIRE');
  }
}

import './imageMapResizer';
window.customElements.define('my-view4', MyView4);
