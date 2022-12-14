/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyTitle extends LitElement {
    static styles: import("lit").CSSResult[];
    open: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private _onMouseOver;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-title': MyTitle;
    }
}
//# sourceMappingURL=my-title.d.ts.map