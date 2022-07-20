import Partner from "./Partner";

export default function Partners() {
  return (
    <div>
      <h2>PNV's Partners</h2>
      <div className="partners">
        <Partner
          imgList={[
            "https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/ed23051b0dcfc2a59cb8e493a3494521.png?VersionId=.KzgpwG_mKhSCQ5Pmcqi8l.j.P_21z9y",
            "https://brademar.com/wp-content/uploads/2022/05/Microsoft-Logo-PNG-2012-%E2%80%93-Now.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/200px-Acer_2011.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/6/64/KMS-Logo.png",
          ]}
        />
        <Partner
          imgList={[
            "https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/ed23051b0dcfc2a59cb8e493a3494521.png?VersionId=.KzgpwG_mKhSCQ5Pmcqi8l.j.P_21z9y",
            "https://brademar.com/wp-content/uploads/2022/05/Microsoft-Logo-PNG-2012-%E2%80%93-Now.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/200px-Acer_2011.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/6/64/KMS-Logo.png",
          ]}
        />  
      </div>
    </div>
  );
}
