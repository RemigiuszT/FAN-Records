import classes from "./StartingPageContent.module.css";
import F from "../img/F.png";
import FAN from "../img/FAN.png";
import FANR from "../img/FANR.png";
import FANR2 from "../img/FANR2.jpg";
import FANR3 from "../img/FANR3.jpg";

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <div class="Title">
        <h1>Records</h1>
      </div>

      <div id="Square">
        <img src={FANR} alt="FanWorkshops" />
      </div>

      <div id="Square">
        <img src={FANR2} alt="FanWorkshops2" />
      </div>

      <div id="Square">
        <img src={FANR3} alt="FanWorkshops3"></img>
      </div>
    </section>
  );
};

export default StartingPageContent;
