import home5 from "../../../assets/home5.png";
import classes from "./AddressMap.module.css";

const AddressMap = () => {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    const MapHandler = (event) =>{
        event.preventDefault();
        openInNewTab('https://www.google.com/maps/place/Rajesultanpur,+Uttar+Pradesh+224176/@26.3022377,83.0744878,16.82z/data=!4m5!3m4!1s0x39910881d692e6d3:0xfe6d63fc2c67f4f1!8m2!3d26.3034311!4d83.0784157');
    };

  return (
    <div className={classes.homemap}>
      <div className={classes.images}>
        <img src={home5} />
        <h1>Address</h1>
        {/* <p>Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520</p> */}
        <p>T.A. -Rajesultanpur, Dist. -Ambedkar Nagar, Uttar Pradesh - 224176</p>
      </div>
      <div className={classes.contact}>
        <h1>Phone Number</h1>
        <p>+91-7238855177</p>
      </div>
      <div className={classes.map}>
        <button onClick={MapHandler}>Visit on Google Maps</button>
      </div>
    </div>
  );
};

export default AddressMap;
