export default function Partner({ imgList }) {
  return (
    <div className="partner">
      {imgList.map((img) => 
        <img src={img} alt="" />
      )}
    </div>
  );
}
