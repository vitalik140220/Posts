import { actions } from './types';

export interface action {
	type: string;
	payload?: any;
}
export function addPost(input: object): action {
	return {
		type: actions.add,
		payload: input,
	};
}
export function changeInput(input: string): action {
	return {
		type: actions.changeInput,
		payload: input,
	};
}
export function changeTextArea(input: string): action {
	return {
		type: actions.changeTextArea,
		payload: input,
	};
}
export function fetch(post: object): action {
	return {
		type: actions.fetch,
		payload: post,
	};
}
export function changeColor(color: string): action {
	return {
		type: actions.changeColor,
		payload: color,
	};
}
export function deletePost(id: number): action {
	return {
		type: actions.deletePost,
		payload: id,
	};
}
