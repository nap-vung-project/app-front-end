import "../asset/scss/formApply.scss"
import "../asset/css/index.css"
const FormApply = () => {
    return(
        <div className="pages__formApply">
            <form action="" className="form">
                <div className="row">
                    <div className="col-left">
                        <div>
                            <label >First name</label>
                            <input className="form-input" type="text" id="" placeholder="Ex:Your name"/>
                        </div>
                    </div>
                    <div className="col-right">
                        <div>
                            <label >Last name</label>
                            <input className="form-input" type="text" id="" placeholder="Ex:Your name"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-left">
                        <div>
                            <label >Your Email (Company Email preferred)</label>
                            <input className="form-input" type="email" id="" placeholder="Ex:eamail@gmail.com"/>
                        </div>
                    </div>
                    <div className="col-right   ">
                        <div>
                            <label >Your phone number</label>
                            <input className="form-input" type="text" id="" placeholder="Ex:089 2245 236"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label >Email Company</label>
                        <input type="email" id="" placeholder="Ex:eamail@gmail.com"/>
                    </div>
                </div>
                <div className="row">
                    <label >Upload Your Cover Letter</label>
                    <input type="text" id="" placeholder="Ex:eamail@gmail.com"/>
                </div>
                <div className="row">
                    <label >Upload your CV</label>
                    <input type="text" id="" placeholder="Ex:eamail@gmail.com"/>
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}
export default FormApply;