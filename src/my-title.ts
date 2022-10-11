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
@customElement('my-title')
export class MyTitle extends LitElement {
  static override styles = [
    css`
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
    css`
      .button-block {
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
      }
    `,
    css`
      .button {
        color: rgba(55, 53, 47, 0.5);
        padding-right: 8px;
        font-size: 14px;
        cursor: pointer;
      }
    `,
    css`
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
    css`
      .input:empty:before {
        content: attr(placeholder);
        -webkit-text-fill-color: rgba(55, 53, 47, 0.15);
      }
    `,
  ];

  @property({type: Boolean})
  open = false;

  override render() {
    return html`
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

  private async _onMouseOver() {
    this.open = !this.open;
    await this.updateComplete;
    const name = this.open ? 'opened' : 'closed';
    this.dispatchEvent(new CustomEvent(name, {bubbles: true, composed: true}));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-title': MyTitle;
  }
}
