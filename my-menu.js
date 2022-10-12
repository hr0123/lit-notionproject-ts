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
let MyMenu = class MyMenu extends LitElement {
    constructor() {
        super(...arguments);
        this.menuItems = [
            {
                type: 'Text',
                placeholder: "Type '/' for commands",
                summary: 'Just start writing with plain text.',
                img: 'https://www.notion.so/images/blocks/text/en-US.png',
                style: 'font-size: 16px; color: rgb(12, 11, 10)',
            },
            {
                type: 'Heading 1',
                summary: 'Big section heading.',
                img: 'https://www.notion.so/images/blocks/header.57a7576a.png',
                style: 'font-size: 30px; font-weight: 700; color: black',
            },
            {
                type: 'Heading 2',
                summary: 'Medium section heading.',
                img: 'https://www.notion.so/images/blocks/subheader.9aab4769.png',
                style: 'font-size: 26px; font-weight: 700; color: rgb(12, 11, 10)',
            },
            {
                type: 'Heading 3',
                summary: 'Small section heading.',
                img: 'https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png',
                style: 'font-size: 20px; font-weight: 700; color: rgb(12, 11, 10)',
            },
            {
                type: 'Bulleted list',
                placeholder: 'List',
                summary: 'Create a simple bulleted list.',
                img: 'https://www.notion.so/images/blocks/bulleted-list.0e87e917.png',
                style: 'display: list-item; margin-left: 1em; color: rgb(12, 11, 10); margin-left: 40px',
            },
        ];
    }
    render() {
        return html `
      <div class="wrapper">
        <div class="container">
          <div class="header">BASIC BLOCKS</div>
          ${this.menuItems.map((item, index) => html ` <div class="block" @click=${() => this._onClickMenu(index)}>
                <img class="icon" src=${item.img} />
                <div class="content">
                  <div class="content-type">${item.type}</div>
                  <div class="content-summary">${item.summary}</div>
                </div>
              </div>`)}
        </div>
      </div>
    `;
    }
    _onClickMenu(index) {
        var _a;
        const mainInput = ((_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.getElementsByClassName('main-input')) || undefined;
        // console.log(mainInput);
        mainInput[0].innerHTML = '';
        switch (index) {
            case 0: {
                mainInput[0].setAttribute('placeholder', `${this.menuItems[0].placeholder}`);
                mainInput[0].setAttribute('style', `${this.menuItems[0].style}`);
                break;
            }
            case 1: {
                mainInput[0].setAttribute('placeholder', `${this.menuItems[1].type}`);
                mainInput[0].setAttribute('style', `${this.menuItems[1].style}`);
                break;
            }
            case 2: {
                mainInput[0].setAttribute('placeholder', `${this.menuItems[2].type}`);
                mainInput[0].setAttribute('style', `${this.menuItems[2].style}`);
                break;
            }
            case 3: {
                mainInput[0].setAttribute('placeholder', `${this.menuItems[3].type}`);
                mainInput[0].setAttribute('style', `${this.menuItems[3].style}`);
                break;
            }
            case 4: {
                mainInput[0].setAttribute('placeholder', `${this.menuItems[4].placeholder}`);
                mainInput[0].setAttribute('style', `${this.menuItems[4].style}`);
                break;
            }
        }
    }
};
MyMenu.styles = [
    css `
      .wrapper {
        margin-left: 25px;
        padding: 0 15px;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 40vh;
        border-radius: 4px;
        width: 324px;
        max-width: calc(100vw - 24px);
        min-width: 180px;
        box-shadow: rgb(15 15 15 / 5%) 0px 0px 0px 1px,
          rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 20%) 0px 9px 24px;
      }
    `,
    css `
      .container {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        align-items: flex-start;
        justify-content: space-between;
        line-height: 120%;
        width: 100%;
        user-select: none;
        min-height: 45px;
        font-size: 14px;
        padding-top: 4px;
        padding-bottom: 4px;
      }
    `,
    css `
      .header {
        display: flex;
        /* padding-left: 14px; */
        /* padding-right: 14px; */
        margin-top: 6px;
        margin-bottom: 8px;
        color: rgba(55, 53, 47, 0.65);
        font-size: 11px;
        font-weight: 500;
        user-select: none;
        text-transform: uppercase;
      }
    `,
    css `
      .block {
        height: 55px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
      }
    `,
    css `
      .icon {
        display: block;
        object-fit: cover;
        border-radius: 3px;
        background: white;
        width: 46px;
        height: 46px;
        flex-grow: 0;
        flex-shrink: 0;
        box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px;
      }
    `,
    css `
      .content {
        margin-left: 6px;
        margin-right: 12px;
        min-width: 0px;
        flex: 1 1 auto;
        padding-left: 3px;
      }
    `,
    css `
      .content-type {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `,
    css `
      .content-summary {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgba(55, 53, 47, 0.65);
        margin-top: 2px;
        font-size: 12px;
      }
    `,
];
__decorate([
    property()
], MyMenu.prototype, "menuItems", void 0);
MyMenu = __decorate([
    customElement('my-menu')
], MyMenu);
export { MyMenu };
//# sourceMappingURL=my-menu.js.map