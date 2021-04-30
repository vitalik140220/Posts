import { connect, useDispatch } from 'react-redux';
import { changeInput } from '../redux/action';
import { styled } from 'styled-components';
const InputPost = ({ posts, input }) => {
	const dispatch = useDispatch();
	return (
		<div style={styles.conteiner}>
			<input
				style={styles.input}
				value={input}
				onChange={(event) => {
					dispatch(changeInput(event.target.value));
				}}
				placeholder="Input name post, please"></input>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		posts: state.postReducer,
		input: state.postReducer.input,
	};
};

const styles = {
	conteiner: {
		width: '100%',
		heigth: '100px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '10px',
	},
	input: {
		width: '80%',
		marginRight: '10px',
	},
};
export default connect(mapStateToProps)(InputPost);
