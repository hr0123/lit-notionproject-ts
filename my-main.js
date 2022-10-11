/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyMain = class MyMain extends LitElement {
    render() {
        return html `
      <div class="wrapper">
        <div class="block">
          <img
            class="drag-icon"
            src="https://img.icons8.com/windows/96/000000/braille.png"
          />
          <div
            class="input"
            contenteditable="true"
            placeholder="Type '/' for commands"
          ></div>
        </div>
        <div class="block">
          <img
            class="drag-icon"
            src="https://img.icons8.com/windows/96/000000/braille.png"
          />
          <div
            class="input"
            contenteditable="true"
            placeholder="Type '/' for commands"
          ></div>
        </div>
      </div>
    `;
    }
};
MyMain.styles = [
    css `
      .wrapper {
        max-width: 650px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
      }
    `,
    css `
      .block {
        position: relative;
        /* margin: 0.5rem 0 0.5rem; */
        /* max-width: 600px; */
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    `,
    css `
      .drag-icon {
        width: 20px;
        height: 20px;
        cursor: pointer;
        /* position: relative;
        right: 17px;
        bottom: 26px; */
      }
    `,
    css `
      .input {
        width: 100%;
        height: auto;
        padding: 0.5rem 0.5rem;
        font-size: 1rem;
        font-weight: 500;
        border: 0;
        border-radius: 0.1em;
        background-color: white;
        white-space: pre-wrap;
        color: rgb(55, 53, 47);
        outline: none;
      }
    `,
    css `
      .input:empty:not(:focus):before {
        content: attr(placeholder);
        -webkit-text-fill-color: rgba(55, 53, 47, 0.5);
      }
    `,
];
MyMain = __decorate([
    customElement('my-main')
], MyMain);
export { MyMain };
//# sourceMappingURL=my-main.js.map