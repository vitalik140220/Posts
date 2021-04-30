import { connect, useDispatch } from 'react-redux';
import InputPost from '../Components/InputPost';
import { addPost, changeColor, changeTextArea, fetch } from '../redux/action';
export let randomColor = () => {
	const number = Math.floor(Math.random() * 6);
	switch (number) {
		case 0:
			return 'red';
		case 1:
			return 'green';
		case 2:
			return 'blue';
		case 3:
			return 'yellow';
		case 4:
			return 'orange';
		case 5:
			return 'pink';
		default:
			return 'red';
	}
};

const CreatePost = ({ input, post, inputText, color }) => {
	const dispatch = useDispatch();
	return (
		<div style={styles.conteiner}>
			<h2>Input name post</h2>
			<InputPost />
			<h2>Input you text</h2>
			<textarea
				value={inputText}
				onChange={(e) => dispatch(changeTextArea(e.target.value))}
				style={{ width: '80%', height: '200px' }}></textarea>
			<h2>Input color Image</h2>
			<div style={{ height: '100px' }}>
				<select
					onChange={(e) => {
						randomColor();
						const text = e.target.options[
							e.target.options.selectedIndex
						].value.toLowerCase();
						dispatch(changeColor(text));
					}}>
					<option>Red</option>
					<option>Green</option>
					<option>Blue</option>
					<option>Yellow</option>
					<option>Orange</option>
					<option>Pink</option>
				</select>
			</div>

			<div>
				<button
					onClick={() => {
						if (!input && !inputText) {
							alert('Please, input name and text');
						} else if (!input) {
							alert('Please, input name ');
						} else if (!inputText) {
							alert('Please, input text');
						} else {
							dispatch(addPost({ input, text: inputText, color }));
						}
					}}>
					Create
				</button>
				<button
					onClick={() => {
						const axios = require('axios');
						axios
							.get('https://simple-blog-api.crew.red/posts?_limit=5')
							.then((response) =>
								response.data.map((el) => {
									dispatch(
										fetch({
											body: el.body,
											title: el.title,
											color: randomColor(),
										}),
									);
								}),
							)
							.then(() => alert('Download finished'))
							.catch((error) => alert(`Error: , ${error}`));
					}}>
					Load
				</button>
			</div>
		</div>
	);
};
const styles = {
	conteiner: {
		width: '50%',
		height: '60%',
		border: '1px solid black',
		borderRadius: '20px',
		marginTop: '10px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
};
const mapStateToProps = (state) => {
	return {
		input: state.postReducer.input,
		post: state,
		inputText: state.postReducer.inputArea,
		color: state.postReducer.color,
	};
};
export default connect(mapStateToProps)(CreatePost);
