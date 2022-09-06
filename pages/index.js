//our-domain.com/
import TripList from '../components/trips/TripList';

const DUMMY_TRIPS = [
	{
		id: 1,
		title: 'First Trip',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Palacio_CEC%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_91-93_HDR.jpg/640px-Palacio_CEC%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_91-93_HDR.jpg',
		address: 'Bucharest',
		description: 'This is my first trip',
	},
	{
		id: 2,
		title: 'Second Trip',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Palacio_CEC%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_91-93_HDR.jpg/640px-Palacio_CEC%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_91-93_HDR.jpg',
		address: 'Bucharest',
		description: 'This is my second trip',
	},
];

function HomePage(props) {
	return <TripList trips={props.trips}></TripList>;
}

export async function getStaticProps() {
	//fetch data from APIs

	//always return object
	return {
		props: {
			trips: DUMMY_TRIPS,
		},
	};
}

export default HomePage;
