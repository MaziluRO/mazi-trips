import Card from '../ui/Card';
import classes from './TripItem.module.css';
import { useRouter } from 'next/router';

function TripItem(props) {
	const router = useRouter();

	function showDetailPageHandler() {
		const titleNoSpace = props.title.trim().replace(/\s+/g, '-').toLowerCase();
		router.push('/' + titleNoSpace);
	}

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.image} alt={props.title} />
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
				</div>
				<div className={classes.actions}>
					<button onClick={showDetailPageHandler}>Show Details</button>
				</div>
			</Card>
		</li>
	);
}

export default TripItem;
