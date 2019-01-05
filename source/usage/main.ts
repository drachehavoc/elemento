import { template, domo, text, attr } from "../../../domo/source/syntax.js";
import { DomoElement } from "../../../domo/source/DomoElement.js";
import { Elemento } from "../Elemento.js"

@Elemento
    .component({ extends: 'p' })

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

    @Elemento
        .attr
        .reflect()

    protected zzz
        : string
        = "zzz"

    @Elemento
        .attr
        .reflect({
            // set: parseInt 
            set: (val, self) => self.dunha()
        })

    protected aaa
        : number
        = 100

    constructor() {
        super()
        this.template.content.appendChild(this.domo.cloneNode().raw)
        this.root.appendChild(this.template.content)
    }

    dunha() {
        console.log('aaaaaaaaaaaaaaaaaapppppppppllllllllllllyyyyyyyyy')
        return 'eu sou o dougras'
    }

    attributeChangedCallback(
        name: string, 
        oldValue: string, 
        newValue: string
    ) {
        console.log('-----', name, oldValue, newValue)
    }
}