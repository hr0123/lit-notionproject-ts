/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import './my-menu';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-text')
export class MyText extends LitElement {
  static override styles = [
    css`
      .wrapper {
        max-width: 650px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
      }
    `,
    css`
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
    css`
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
    css`
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
    css`
      .main-input:empty:before {
        content: attr(placeholder);
        -webkit-text-fill-color: rgba(55, 53, 47, 0.5);
      }
    `,
  ];

  @property({type: Boolean})
  open = false;

  @property({type: Boolean})
  menuOpen = false;

  override render() {
    return html`
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

  private async _onMouseOver() {
    this.open = !this.open;
    await this.updateComplete;
    const name = this.open ? 'opened' : 'closed';
    this.dispatchEvent(new CustomEvent(name, {bubbles: true, composed: true}));
  }

  private _onKeyEnter(e: Event) {
    if ((e as KeyboardEvent).key === 'Enter') {
      console.log(e);
      const newBlock = document.createElement('div');
      newBlock.setAttribute('class', 'block');
      const newIcon = document.createElement('img');
      newIcon.setAttribute('class', 'drag-icon');
      newIcon.setAttribute(
        'src',
        'https://img.icons8.com/windows/96/000000/braille.png'
      );
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

  private _onKeySlash(e: Event) {
    console.log(e);
    // if ((e as InputEvent).data === '/') {
    if ((e as KeyboardEvent).key === '/') {
      this.menuOpen = !this.menuOpen;
      console.log(this.menuOpen);
    } else {
      this.menuOpen = !this.menuOpen;
      console.log(this.menuOpen);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-text': MyText;
  }
}
