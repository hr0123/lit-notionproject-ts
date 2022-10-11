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
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyTitle = class MyTitle extends LitElement {
    constructor() {
        super(...arguments);
        this.open = false;
    }
    render() {
        return html `
      <div class="wrapper">
        <div class="button-block" ?hidden=${!this.open}>
          <div class="button" ?hidden=${!this.open}>Add icon</div>
          <div class="button" ?hidden=${!this.open}>Add cover</div>
          <div class="button" ?hidden=${!this.open}>Add comment</div>
        </div>
        <div
          class="input"
          contenteditable="true"
          placeholder="Untitled"
          @mouseover=${this._onMouseOver}
          @mouseout=${this._onMouseOver}
        ></div>
      </div>
    `;
    }
    async _onMouseOver() {
        this.open = !this.open;
        await this.updateComplete;
        const name = this.open ? 'opened' : 'closed';
        this.dispatchEvent(new CustomEvent(name, { bubbles: true, composed: true }));
    }
};
MyTitle.styles = [
    css `
      .wrapper {
        /* margin: 2rem 0 0.5rem; */
        margin-top: 70px;
        max-width: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
      }
    `,
    css `
      .button-block {
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
      }
    `,
    css `
      .button {
        color: rgba(55, 53, 47, 0.5);
        padding-right: 8px;
        font-size: 14px;
        cursor: pointer;
      }
    `,
    css `
      .input {
        width: 100%;
        height: auto;
        /* margin-top: 40px; */
        margin-top: 50px;
        font-size: 40px;
        font-weight: 700;
        border: 0;
        border-radius: 0.1em;
        background-color: white;
        color: rgb(55, 53, 47);
        cursor: text;
        outline: none;
      }
    `,
    css `
      .input:empty:before {
        content: attr(placeholder);
        -webkit-text-fill-color: rgba(55, 53, 47, 0.15);
      }
    `,
];
__decorate([
    property({ type: Boolean })
], MyTitle.prototype, "open", void 0);
MyTitle = __decorate([
    customElement('my-title')
], MyTitle);
export { MyTitle };
//# sourceMappingURL=my-title.js.map