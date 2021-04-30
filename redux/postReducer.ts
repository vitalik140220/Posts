import { action } from './action';
import { actions } from './types';

export const initialState = {
	post: [],
	input: '',
	inputArea: '',
	color: 'red',
};
function postReducer(state = initialState, action: action) {
	console.log(action);

	switch (action.type) {
		case actions.add: {
			return {
				...state,
				post: state.post.concat([
					{
						title: action.payload.input,
						id: Date.now(),
						text: action.payload.text,
						color: action.payload.color,
					},
				]),
				input: '',
				inputArea: '',
			};
		}
		case actions.fetch: {
			return {
				...state,
				post: state.post.concat([
					{
						title: action.payload.title,
						id: Date.now(),
						text: action.payload.body,
						color: action.payload.color,
					},
				]),
			};
		}
		case actions.changeTextArea: {
			return { ...state, inputArea: action.payload };
		}
		case actions.changeInput: {
			return { ...state, input: action.payload };
		}
		case actions.changeColor: {
			return { ...state, color: action.payload };
		}
		case actions.deletePost: {
			const res = state.post.filter((el) => {
				console.log(el.id);
				console.log(action.payload);
				if (el.id !== action.payload) {
					return el;
				}
			});
			console.log(state.post);
			console.log(res);

			return { ...state, post: res };
		}
		default:
			return state;
	}
}
export default postReducer;
