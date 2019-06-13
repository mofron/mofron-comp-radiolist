/**
 * @file   mofron-comp-checklist/index.js
 * @brief checkbox list component for mofron
 * @author simpart
 */
const mf       = require("mofron");
const FormItem = require("mofron-comp-formitem");
const Radio    = require("mofron-comp-radio");

mf.comp.RadioList = class extends FormItem {
    
    /**
     * constructor
     * 
     * @param (string) 'text' parameter
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name("RadioList");
            this.prmMap("text");
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set focus status
     *
     * @type private 
     */
    afterRender () {}
    
    /**
     * set chenge event
     *
     * @type private 
     */
    beforeRender () {
        try {
            super.beforeRender();
            let evt = this.changeEvent();
            for (let eidx in evt) {
                let chk_lst = this.getRadio();
                for (let cidx in chk_lst) {
                    chk_lst[cidx].changeEvent(evt[eidx][0], evt[eidx][1]);
                }
            }
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
     * @type private
     */
    getRadio (idx) {
        try {
            let chd = this.child();
            if (undefined === idx) {
                let ret = [];
                for (let cidx in chd) {
                    if (true === mf.func.isInclude(chd[cidx], "Radio")) {
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
     * @param (string/mofron-comp-text) radio text component
     * @return (string/mofron-comp-text) radio text component
     * @type tag parameter
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
            radio.target().attr({ name : this.getId() });
            this.child(radio);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * select target radio button
     *
     * @param (boolean) true: select
     *                  false: unselect
     * @param (number) select target index
     * @return (boolean/number) select status/selected index
     * @type tag parameter
     */
    select (flg, idx) {
        try {
            let chk_lst = this.getRadio();
            if ("number" === typeof idx) {
                if (undefined === chk_lst[idx]) {
                    throw new Error("invalid index : " + idx);
                }
                return (undefined === flg) ? chk_lst[idx].select() : chk_lst[idx].select(flg);
            }
            let ret     = [];
            for (let cidx in chk_lst) {
                if (true === chk_lst[cidx].select()) {
                    return parseInt(cidx);
                }
            }
            return null;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * item value
     *
     * @param (boolean) same as "select"
     * @param (number) same as "select"
     * @return (array) select status
     * @type tag parameter
     */
    value (prm, idx) {
        try { return this.select(prm, idx); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * focus check box
     *
     * @param (boolean) true: focus target check box
     *                  false: defocus target check box
     * @param (number) target index
     * @return focus status of target index
     * @type private
     */
    //focus (prm, idx) {
    //    try {
    //        let chk = this.getCheckBox(idx);
    //        if ((null === chk) || (true === Array.isArray(chk))) {
    //            throw new Error("invalid index : " + idx);
    //        }
    //        return chk[idx].focus(prm);
    //    } catch (e) {
    //        console.error(e.stack);
    //        throw e;
    //    }
    //}
    
    /**
     * check box enable/disable status
     * 
     * @param (boolean) true: change enable mode (default)
     *                  false: change disable mode
     * @param (number/null) target index / get all status
     * @return (boolean) current item status
     * @type tag parameter
     */
    status (prm, idx) {
        try {
            let chk_lst = this.getRadio();
            if ("number" === typeof idx) {
                if (undefined === chk_lst[idx]) {
                    throw new Error("invalid index : " + idx);
                }
                return (undefined === flg) ? chk_lst[idx].status() : chk_lst[idx].status(flg);
            }
            let ret     = [];
            for (let cidx in chk_lst) {
                ret.push(chk_lst[cidx].status(flg));
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
        try { this.select(false); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    changeEvent (fnc, prm) {
        try {
            if (undefined === fnc) {
                return super.changeEvent();
            }
            let rdi_lst = this;
            let set_fnc = (p1,p2,p3) => {
                let lst = rdi_lst.getRadio();
                for (let lidx in lst) {
                    if (lst[lidx].getId() === p1.getId()) {
                        fnc(rdi_lst, [parseInt(lidx),p2], p3);
                        return;
                    }
                }
                fnc(rdi_lst, [undefined,p2],p3);
            }
            super.changeEvent(set_fnc, prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.RadioList;
/* end of file */
