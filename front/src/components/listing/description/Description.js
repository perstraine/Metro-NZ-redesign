import styles from "./Description.module.css";
import propman from "./assets/propman.png";
import phone from "./assets/phone.png";
import mail from "./assets/mail.png";
import smallmail from "./assets/smallmail.png";
import map from "./assets/map.png";
import printer from "./assets/printer.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";

export default function Description({ description }) {
  function descriptionSplit(desc) {
    const first = desc.split(".", 1)[0];
    const second = desc.slice(first.length + 2);
    return [first, second];
  }
  console.log(description);
  const split = descriptionSplit(description.description);
  return (
    <div id={styles.outerContainer}>
      <div id={styles.innerContainer}>
        <div id={styles.left}>
          <div id={styles.addiDetails}>
            <div className={styles.details}>
              <div className={styles.detSection}>Available</div>
              <div className={styles.detSection}>
                {description.available["$date"]}
              </div>
            </div>
            <div className={styles.details}>
              <div className={styles.detSection}>Ideal tenants</div>
              <div className={styles.detSection}>
                {description["ideal tenants"]}
              </div>
            </div>
            <div className={styles.details}>
              <div className={styles.detSection}>Pets and Smokers</div>
              <div
                className={styles.detSection}
              >{`Pets ${description.pets}, Smokers ${description.smoking}`}</div>
            </div>
            <div className={styles.details}>
              <div className={styles.detSection}>Broadband</div>
              <div className={styles.detSection}>{description.broadband}</div>
            </div>
          </div>
          <div id={styles.desc}>
            <div id={styles.first}>{split[0]}</div>
            <div id={styles.second}>{split[1]}</div>
          </div>
        </div>
        <div id={styles.right}>
          <div id={styles.buttonHolder}>
            <div id={styles.button}>APPLY</div>
          </div>
          <div id={styles.propManager}>
            <div id={styles.questions}>Still got questions?</div>
            <div id={styles.propdets}>
              <div id={styles.imageHolder}>
                <img id={styles.image} src={propman} alt="profile" />
              </div>
              <div id={styles.stuff}>
                <div id={styles.title}>Property Manager</div>
                <div id={styles.name}>
                  {description["property manager"].name}
                </div>
              </div>
            </div>
            <div id={styles.propcontact}>
              <div id={styles.phone}>
                <img id={styles.phoneimg} src={phone} alt="phone" />
                <div>
                  {`${description["property manager"].number["$numberInt"]}`}
                </div>
              </div>
              <div id={styles.email}>
                <img id={styles.emailimg} src={mail} alt="mail" />
                <div>{`${description["property manager"].email}`}</div>
              </div>
            </div>
          </div>
          <div id={styles.mapHolder}>
            <img id={styles.map} src={map} alt="map" />
          </div>
          <div id={styles.share}>
            <div id={styles.shareTitle}>Share this listing</div>
            <div className={styles.shareinfo}>
              <img className={styles.small} src={smallmail} alt="email" />
              Email
            </div>
            <div className={styles.shareinfo}>
              <img className={styles.small} src={printer} alt="email" />
              Print
            </div>
            <div className={styles.shareinfo}>
              <img className={styles.small} src={facebook} alt="email" />
              Facebook
            </div>
            <div className={styles.shareinfo}>
              <img className={styles.small} src={twitter} alt="email" />
              Twitter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
