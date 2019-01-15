import { template, domo, text, attr } from "../../../domo/source/syntax.js";
import { DomoElement } from "../../../domo/source/DomoElement.js";
import { component } from "../Elemento.js"

@component({ extends: 'p' })

class XX extends HTMLParagraphElement {
    protected root
        : ShadowRoot
        = this.attachShadow({ mode: 'open' })

    protected domo!
        : DomoElement

    protected text!
        : Text

    protected attr!
        : Attr

    protected template
        : HTMLTemplateElement
        = template(
            this.domo = domo`div`(
                this.text = text`oi`,
                this.attr = attr`class``inicial`,
            )
        )

    constructor() {
        super()
        this.template.content.appendChild(this.domo.cloneNode().raw)
        this.root.appendChild(this.template.content)
    }

    attributeChangedCallback(...p: any[]) {
        let [name, oldValue, newValue,] = p
        console.log('-----', name, oldValue, newValue)
    }
}