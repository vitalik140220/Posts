import CreatePost from '../../../Components/CreatePost';
import Header from '../../../Components/Header';
import Navigation from '../../../Components/Navigation';

function newPost() {
	return (
		<div
			style={{
				display: 'flex',
				height: 1000,
				margin: 0,
				flexDirection: 'column',
				alignItems: 'center',
			}}>
			<Header title="Create Post" />
			<Navigation />
			<CreatePost />
		</div>
	);
}
export default newPost;
