import React from 'react';
import "../asset/scss/formRecruit.scss"
import "../asset/css/index.css"
import '../asset/scss/Homepage.scss';
import HeaderNavigation from '../components/Header/HeaderNavigation';
const FormRecruit = () => {
    return(
        <div className="container">
            <div className="header">
                <HeaderNavigation></HeaderNavigation>
            </div>
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
                            <label >Recruitment Service</label>
                            {/* <input type="email" id="" placeholder="Ex:eamail@gmail.com"/> */}
                            <select>
                                <option value="0">Choose</option>
                                <option value="1">Mobile</option>
                                <option value="2">Testing</option>
                                <option value="3">Front end</option>
                                <option value="4">Back end</option>
                                <option value="4">Full Stack </option>
                                <option value="4">BA</option>

                                </select>
                        </div>
                    </div>
                    <div className="row">
                        <label >Please describe your IT recruitment requirements or any specific notes for us</label>
                        <textarea id="w3review" name="w3review" rows={10} cols="185"></textarea>
                    </div>
                    <div className="check__robot">
                        <input id="check-robot" type="checkBox" />
                        <label htmlFor="check-robot">Im not a robot</label>
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        </div>
        
    )
}
export default FormRecruit;