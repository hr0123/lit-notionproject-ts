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
export declare class MyMenu extends LitElement {
    static styles: import("lit").CSSResult[];
    menuItems: {
        type: string;
        summary: string;
        img: string;
    }[];
    render(): import("lit-html").TemplateResult<1>;
    private _onClickMenu;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-menu': MyMenu;
    }
}
//# sourceMappingURL=my-menu.d.ts.map