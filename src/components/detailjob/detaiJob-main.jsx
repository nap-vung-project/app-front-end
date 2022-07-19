import React from "react";
import {BsStopwatch} from 'react-icons/bs';
function DetaiMainJob() {
  return (
    <>
      <div className="main__boxinfor">
        <div className="boxinfor">
          <div className="boxinfor_img">
            <img src="images/detailjob_simillar_0.png" alt="" />
          </div>
          <div className="boxinfor_infor">
            <h3>Senior Automation QC Engineer ( Ha Noi &amp; HCM)</h3>
            <div className="infor">
              <div className="infor_pa">
                <p>POSITIVE THINKING COMPANY</p>
                <p>Địa Điểm Làm Việc: Hồ Chí Minh | Hà Nội</p>
                <p><BsStopwatch style={{ fontSize: '18px', }}/> Application deadline: 31/07/2022
                </p>
              </div>
              <div className="infor_btn">
                <button className="l_btn apply" type="submit">
                  Apply
                </button>
                <br />
                <button className="l_btn save" type="submit">
                  Save news
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetaiMainJob;
