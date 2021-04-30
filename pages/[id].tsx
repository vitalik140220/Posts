import { useRouter } from 'next/dist/client/router';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import Navigation from '../Components/Navigation';
import Post from '../Components/Post';
const fillter = (posts: Array<any>, id: any) => {
	const post = posts.filter((el) => {
		const elId = el.id.toString();

		if (elId === id) {
			return el;
		}
	});
	const obj = post[0];
	return obj;
};
const OnePost = ({ posts }) => {
	const router = useRouter();
	const post = fillter(posts, router.query.id);
	return (
		<div
			style={{
				width: '100%',
				height: 'auto',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
			<Header title={post.title} />
			<Navigation />
			<Post
				title={post.title}
				text={post.text}
				id={post.id}
				color={post.color}
				del={true}
			/>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		posts: state.postReducer.post,
	};
};
export default connect(mapStateToProps)(OnePost);
