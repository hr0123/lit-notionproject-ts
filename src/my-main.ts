/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-main')
export class MyMain extends LitElement {
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
        /* position: relative;
        right: 17px;
        bottom: 26px; */
      }
    `,
    css`
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
    css`
      .input:empty:not(:focus):before {
        content: attr(placeholder);
        -webkit-text-fill-color: rgba(55, 53, 47, 0.5);
      }
    `,
  ];

  override render() {
    return html`
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
}

declare global {
  interface HTMLElementTagNameMap {
    'my-main': MyMain;
  }
}
