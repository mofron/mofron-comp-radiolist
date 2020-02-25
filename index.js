/**
 * @file mofron-comp-radiolist/index.js
 * @brief radiobutton list component for mofron
 * @license MIT
 */
const FormItem = require("mofron-comp-formitem");
const Radio    = require("mofron-comp-radio");
const comutl   = mofron.util.common;

module.exports = class extends FormItem {
    
    /**
     * constructor
     * 
     * @param (mixed) 'text' parameter
     *                key-value: component config
     * @short text
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name("RadioList");
            this.shortForm("text");
            
	    if (undefined !== prm) {
                this.config(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
   /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
	    this.horizon(true);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * get radio component
     *
     * @param (number) index: get index radio button
     *                 undefined: get all radio button
     * @return (mixed) mofron-comp-radio: radio component (specified index)
     *                 array: radio component list
     * @type private
     */
    getRadio (idx) {
        try {
            let chd = this.child();
            if (undefined === idx) {
                let ret = [];
                for (let cidx in chd) {
                    if (true === comutl.isinc(chd[cidx], "Radio")) {
                        ret.push(chd[cidx]);
                    }
                }
                return ret;
            }
            return (undefined !== chd[cidx]) ? chd[cidx] : null;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * radio text contents
     *
     * @param (mixed) array: radio contents list 
     *                string: radio text string
     *                mofron-comp-text: radio text component
     * @return (array) radio text component list
     * @type parameter
     */
    text (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                let chk_lst = this.getRadio();
                let ret     = [];
                for (let cidx in chk_lst) {
                    ret.push(chk_lst[cidx].text());
                }
                return ret;
            }
            if (true === Array.isArray(prm)) {
                for (let pidx in prm) {
                    this.text(prm[pidx]);
                }
                return;
            }
            let radio = new Radio(prm);
            radio.childDom().attrs({ name : this.id() });
            this.child(radio);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * radio button text contents setter/getter
     * same as 'text' parameter
     *
     * @param (mixed) string: text contents string
     *                mofron-comp-text: text contents component
     *                array: radio-button text contents list
     *                undefined: call as getter
     * @return (array) radio-button text contents list
     * @type parameter
     */
    radio (prm) {
        try {
            return this.text(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * select target radio button setter/getter
     *
     * @param (boolean) true: select
     *                  false: unselect
     *                  undefined: call as getter
     * @param (number) select target index
     * @return (mixed) number: selected index
     *                 null: not select
     * @type parameter
     */
    select (flg, idx) {
        try {
            let rdo_lst = this.getRadio();
            if (undefined === flg) {
                /* getter */
		for (let ridx in rdo_lst) {
                    if (true === rdo_lst[ridx].select()) {
                        return parseInt(ridx);
		    }
		}
		return null;
	    }
            /* setter */
            if (undefined === rdo_lst[idx]) {
	        throw new Error("invalid index : " + idx);
	    }
	    rdo_lst[idx].select(flg);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * item value
     *
     * @param (boolean) same as 'select' parameter
     * @param (number) same as 'select' parameter
     * @return (mixed) same as 'select' parameter
     * @type parameter
     */
    value (prm, idx) {
        try {
	    return this.select(prm, idx);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * focus radio-button setter/getter
     *
     * @param (boolean) true: focus target radio-button
     *                  false: defocus target radio-button
     *                  undefined: call as getter
     * @param (number) target index
     * @return (boolean) focus status of target index
     * @type private
     */
    focus (prm, idx) {
        try {
            let chk = this.getRadio();
            if ((undefined === prm) && (undefined === idx)) {
                /* getter */
                let ret = [];
                for (let cidx in chk) {
                    ret.push(chk[cidx].focus());
                }
                return ret;
            }
            if (undefined === idx) {
                return;
            }
            return chk[idx].focus(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * radio-button enable/disable status
     * 
     * @param (boolean) true: change enable mode (default)
     *                  false: change disable mode
     *                  undefined: call as getter
     * @return (boolean) current item status
     * @type parameter
     */
    status (prm) {
        try {
            let chk_lst = this.getRadio();
            let ret     = chk_lst[0].status(prm);
            for (let cidx in chk_lst) {
                if (ret !==  chk_lst[cidx].status()) {
                    console.warn("mismatched radio-button status:" + cidx);
                }
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * unselect all radio button
     *
     * @type function
     */
    clear () {
        try {
	    this.select(false);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * change event function setter/getter
     *
     * @param (function) change event
     *                   undefined: call as getter
     * @param (mix) event parameter
     * @return (array) event list
     * @type private
     */
    changeEvent (fnc, prm) {
        try {
            if (undefined === fnc) {
                return super.changeEvent();
            }
	    super.changeEvent(fnc,prm);
            let chk = this.getRadio();
            for (let cidx in chk) {
                chk[cidx].changeEvent(fnc, prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
