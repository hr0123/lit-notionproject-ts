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
import { customElement, property } from 'lit/decorators.js';
import './my-menu';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyText = class MyText extends LitElement {
    constructor() {
        super(...arguments);
        this.open = false;
        this.menuOpen = false;
    }
    render() {
        return html `
      <div class="wrapper">
        <div class="block">
          <img
            class="drag-icon"
            src="https://img.icons8.com/windows/96/000000/braille.png"
            ?hidden=${!this.open}
          />
          <div
            class="main-input"
            contenteditable="true"
            placeholder="Type '/' for commands"
            @mouseover=${this._onMouseOver}
            @mouseout=${this._onMouseOver}
            @keypress=${this._onKeyEnter}
            @keydown=${this._onKeySlash}
          ></div>
        </div>
        <my-menu id="menuImport" ?hidden=${!this.menuOpen}></my-menu>
      </div>
    `;
    }
    async _onMouseOver() {
        this.open = !this.open;
        await this.updateComplete;
        const name = this.open ? 'opened' : 'closed';
        this.dispatchEvent(new CustomEvent(name, { bubbles: true, composed: true }));
    }
    _onKeyEnter(e) {
        if (e.key === 'Enter') {
            console.log(e);
            const newBlock = document.createElement('div');
            newBlock.setAttribute('class', 'block');
            const newIcon = document.createElement('img');
            newIcon.setAttribute('class', 'drag-icon');
            newIcon.setAttribute('src', 'https://img.icons8.com/windows/96/000000/braille.png');
            newIcon.setAttribute('?hidden', `${!this.open}`);
            const newInput = document.createElement('div');
            newInput.setAttribute('class', 'input');
            newInput.setAttribute('contenteditable', 'true');
            newInput.setAttribute('placeholder', "Type '/' for commands");
            newInput.setAttribute('@mouseover', `${this._onMouseOver}`);
            newInput.setAttribute('@mouseout', `${this._onMouseOver}`);
            newInput.setAttribute('@keydown', `${this._onKeyEnter}`);
            newInput.setAttribute('@keypress', `${this._onKeySlash}`);
            newBlock.appendChild(newIcon);
            newBlock.appendChild(newInput);
            const wrapper = document.getElementsByClassName('.wrapper');
            wrapper[0].appendChild(newBlock);
        }
    }
    _onKeySlash(e) {
        console.log(e);
        // if ((e as InputEvent).data === '/') {
        if (e.key === '/') {
            this.menuOpen = !this.menuOpen;
            console.log(this.menuOpen);
        }
        else {
            this.menuOpen = !this.menuOpen;
            console.log(this.menuOpen);
        }
    }
};
MyText.styles = [
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
        position: absolute;
        /* padding-left: 10px; */
        /* right: 17px;
        bottom: 26px; */
      }
    `,
    css `
      .main-input {
        width: 100%;
        height: auto;
        /* padding: 0.5rem 0.5rem; */
        padding: 0.5rem 1.5rem;
        font-size: 1rem;
        font-weight: 500;
        border: 0;
        border-radius: 0.1em;
        background-color: white;
        white-space: pre-wrap;
        color: rgb(55, 53, 47);
        outline: none;
        cursor: text;
      }
    `,
    css `
      .main-input:empty:before {
        content: attr(placeholder);
        -webkit-text-fill-color: rgba(55, 53, 47, 0.5);
      }
    `,
];
__decorate([
    property({ type: Boolean })
], MyText.prototype, "open", void 0);
__decorate([
    property({ type: Boolean })
], MyText.prototype, "menuOpen", void 0);
MyText = __decorate([
    customElement('my-text')
], MyText);
export { MyText };
//# sourceMappingURL=my-text.js.map