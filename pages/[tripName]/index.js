//our-domain.com/trip-name

import TripDetail from '../../components/trips/TripDetail';

function TripDetailPage() {
	return (
		<TripDetail
			image='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Palacio_CEC%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_91-93_HDR.jpg/640px-Palacio_CEC%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_91-93_HDR.jpg'
			title='First Trip'
			address='Bucharest'
			description='Trip Description'
		></TripDetail>
	);
}

export default TripDetailPage;
