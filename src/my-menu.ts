/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-menu')
export class MyMenu extends LitElement {
  static override styles = [
    css`
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
    css`
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
    css`
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
    css`
      .block {
        height: 55px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    `,
    css`
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
    css`
      .content {
        margin-left: 6px;
        margin-right: 12px;
        min-width: 0px;
        flex: 1 1 auto;
        padding-left: 3px;
      }
    `,
    css`
      .content-type {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `,
    css`
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

  @property()
  menuItems = [
    {
      type: 'Text',
      summary: 'Just start writing with plain text.',
      img: 'https://www.notion.so/images/blocks/text/en-US.png',
    },
    {
      type: 'Heading 1',
      summary: 'Big section heading.',
      img: 'https://www.notion.so/images/blocks/header.57a7576a.png',
    },
    {
      type: 'Heading 2',
      summary: 'Medium section heading.',
      img: 'https://www.notion.so/images/blocks/subheader.9aab4769.png',
    },
    {
      type: 'Heading 3',
      summary: 'Small section heading.',
      img: 'https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png',
    },
    {
      type: 'Bulleted list',
      summary: 'Create a simple bulleted list.',
      img: 'https://www.notion.so/images/blocks/bulleted-list.0e87e917.png',
    },
  ];

  override render() {
    return html`
      <div class="wrapper">
        <div class="container">
          <div class="header">BASIC BLOCKS</div>
          ${this.menuItems.map(
            (item) =>
              html` <div class="block" @click=${this._onClickMenu}>
                <img class="icon" src=${item.img} />
                <div class="content">
                  <div class="content-type">${item.type}</div>
                  <div class="content-summary">${item.summary}</div>
                </div>
              </div>`
          )}
        </div>
      </div>
    `;
  }

  private _onClickMenu() {
    console.log('MENU CLICKED!!');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-menu': MyMenu;
  }
}
