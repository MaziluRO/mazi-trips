//our-domain.com/new-trip

import NewTripForm from '../../components/trips/NewTripForm';

function NewTrip() {
	function addTripHandler(enteredTripData) {
		console.log(enteredTripData);
	}
	return <NewTripForm onAddTrip={addTripHandler}></NewTripForm>;
}

export default NewTrip;
