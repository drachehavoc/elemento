import { CmpStyleGlobal } from "../../../component/cmp/StyleGlobal.js";

export const component =
    (options?: ElementDefinitionOptions) =>
        (constructor: any) => {
            // -- GET TAGNAME FROM CLASS NAME ----------------------------------

            let tagName = constructor.name.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()

            // -- CHECK CLASS NAME ---------------------------------------------

            if (!tagName.includes('-'))
                throw `Domo WebComponent Class needs a composite name, class '${constructor.name}' can't be a webComponent class.`

            // -- THE INJECTED CLASS -------------------------------------------

            class KL extends constructor {
                constructor(...a: any[]) {
                    super(...a)
                }
            }

            // -- REGISTER CUSTOM ELEMENT CLASS --------------------------------

            window.customElements.define(tagName, KL, options)
        }