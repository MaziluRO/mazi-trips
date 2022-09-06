import classes from './TripDetail.module.css';
import Card from '../ui/Card';

function TripDetail(props) {
	return (
		<Card>
			<section className={classes.detail}>
				<div className={classes.image}>
					<img src={props.image} alt={props.title} />
				</div>
				<h1>{props.title}</h1>
				<address>{props.address}</address>
				<div className={classes.description}>
					<p>{props.description}</p>
				</div>
			</section>
		</Card>
	);
}

export default TripDetail;
