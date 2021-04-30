import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { randomColor } from '../Components/CreatePost';
import Header from '../Components/Header';
import Navigation from '../Components/Navigation';
import Post from '../Components/Post';
import { initialState } from '../redux/postReducer';

function Home({ posts }) {
	return (
		<div
			style={{
				display: 'flex',
				height: 1000,
				margin: 0,
				flexDirection: 'column',
			}}>
			<Header title="Posts" />
			<Navigation />
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					width: 'auto',
					alignItems: 'center',
					flexWrap: 'wrap',
					paddingLeft: '25px',
					justifyContent: posts.length ? 'start' : 'center',
				}}>
				{!posts.length ? (
					<div>
						<h1>You don`t have posts</h1>
					</div>
				) : null}
				{posts.map((el) => {
					return (
						<Post
							title={el.title}
							id={el.id}
							text={el.text}
							color={el.color}
							open={false}
						/>
					);
				})}
			</div>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		posts: state.postReducer.post,
	};
};
export default connect(mapStateToProps)(Home);
