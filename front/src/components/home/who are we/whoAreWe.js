import styles from "./whoAreWe.module.css";
import GroupPhoto from "../who are we/assets/group_photo_01.png";
import TickBoxes from "../who are we/assets/tickbox.png";

export default function WhoAreWe() {
	return (
		<>
			<div className={styles.mainContainer}>
				<div className={styles.innerContainer}>
					<div className={styles.imageContainer}>
						<img className={styles.groupPhoto} src={GroupPhoto} alt="" />
					</div>

					<section className={styles.whoWeAreContainer}>
						<div>
							<h6 className={styles.whoWeAreHeading}>WHO WE ARE</h6>
						</div>
						<div>
							<h1 className={styles.innerHeading}>METRO NZ IS ONE OF THE TOP AUCKLAND PROPERTY MANAGEMENT COMPANIES</h1>
						</div>
						<div>
							<p className={styles.innerBody}>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
								rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
								explicabo.
								<br />
								<br /> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
								magni dolores eos qui ratione voluptatem sequi nesciunt.
							</p>
						</div>

						<div className={styles.tickBoxContainer}>
							<div className={styles.leftTickBoxes}>
								<div className={styles.tickBoxes}>
									<img src={TickBoxes} alt="" />
									Flexible Time
								</div>
								<div className={styles.tickBoxes}>
									<img src={TickBoxes} alt="" />
									Perfect Work
								</div>
								<div className={styles.tickBoxes}>
									<img src={TickBoxes} alt="" />
									Client Priority
								</div>
							</div>

							<div className={styles.rightTickBoxes}>
								<div className={styles.tickBoxes}>
									<img src={TickBoxes} alt="" />
									Flexible Time
								</div>
								<div className={styles.tickBoxes}>
									<img src={TickBoxes} alt="" />
									Perfect Work
								</div>
								<div className={styles.tickBoxes}>
									<img src={TickBoxes} alt="" />
									Client Priority
								</div>
							</div>
						</div>

						<div className={styles.companyOutterContainer}>
							<div className={styles.companyInnerContainer}>
								<div className={styles.bodyText}>
									<h2>15Y</h2>
									<p>EXPERIENCE</p>
								</div>
								<div className={styles.bodyText}>
									<h2>25+</h2>
									<p>TEAM MEMBERS</p>
								</div>
								<div className={styles.bodyText}>
									<h2>500+</h2>
									<p>TOTAL CLIENTS</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
