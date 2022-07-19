export default function Footer() {
    function FooterBot() {
        return (
            <div className="footerBot">
                <p>2022 Passerelles numériques Vietnam </p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg/230px-Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg.png" alt="" />
            </div>
        )
    }
    function FooterLeft() {
        return (
            <div className="footerTopLeft">
                <h3>NAPVUNG_TEAM</h3>
            </div>
        )
    }
    function FooterLogo() {
        return (
            <div className="footerTopLogo">
                <img src="https://assets.topdev.vn/images/2022/01/11/TopDev-pn-logo-PhamThiPhuongDung-1641890453.png" alt="" />
            </div>
        )
    }
    function FooterRight() {
        return (
            <div className="footerTopRight">
                <h3>PASSERELLES NUMÉRIQUES VIETNAM</h3>
                <p><img src="https://cdn-icons-png.flaticon.com/512/684/684809.png" alt="" /> 4th floor, building B,<br />
                    99 To Hien Thanh,<br />
                    Da Nang VIETNAM <span className="iconSocial"><img src="https://cdn-icons.flaticon.com/png/128/2504/premium/2504903.png?token=exp=1658008833~hmac=b395a3095c1f63c41e474235a4d8eb70" alt="" /> <img src="https://cdn.tgdd.vn/2020/03/GameApp/Untitled-2-200x200.jpg" alt="" /></span></p>
                <p><img src="https://cdn-icons-png.flaticon.com/128/159/159832.png" alt="" /> +84 236 3888 503</p>
                <p><img src="https://cdn-icons-png.flaticon.com/512/546/546394.png" alt="" /> info.vietnam@passerellesnumeriques.org</p>
            </div>
        )
    }
    return (
        <div>
            <div className="footerTop">
                <FooterLeft></FooterLeft>
                <FooterRight></FooterRight>
                <FooterLogo></FooterLogo>
            </div>
            <FooterBot></FooterBot>
        </div>
        )
}