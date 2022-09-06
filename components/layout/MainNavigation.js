import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Mazi's Trips</div>
			<nav>
				<ul>
					<li>
						<Link href='/'>All Trips</Link>
					</li>
					<li>
						<Link href='/new-trip'>Add New Trip</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
