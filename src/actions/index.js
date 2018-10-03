import axios from "axios";

import { FETCH_DATA } from './type';

export const fetchData = () => {
	return dispatch => {
		axios
			.get('https://jsonplaceholder.typicode.com/todos')
			.then(res => {
        console.log("RESULT ", res);
				dispatch({
					type: FETCH_DATA,
					payload: res.data
          });
			})
			.catch(err => console.log(err));
	};
};