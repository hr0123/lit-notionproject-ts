/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
import './my-menu';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyText extends LitElement {
    static styles: import("lit").CSSResult[];
    open: boolean;
    menuOpen: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private _onMouseOver;
    private _onKeySlash;
    private _onKeyEnter;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-text': MyText;
    }
}
//# sourceMappingURL=my-text.d.ts.map