import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/action';

const Post = ({ title, text, color, id, open }) => {
	const dispatch = useDispatch();
	return (
		<div style={styles.conteiner}>
			<div
				style={{
					width: '320px',
					height: '200px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: '35px',
					backgroundColor: color,
				}}>
				Your Image
			</div>
			<div style={styles.title}>{title}</div>
			<div style={styles.text}>{text}</div>
			{open === false ? (
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-around ',
						flexDirection: 'row',
						width: '100%',
						height: 'auto',
						backgroundColor: 'rgba(0, 252, 55, 0.486)',
					}}>
					<button
						onClick={() => {
							dispatch(deletePost(id));
						}}>
						Delete
					</button>
					<Link href={`${id}`}>
						<button>Open</button>
					</Link>
				</div>
			) : null}
		</div>
	);
};
const styles = {
	conteiner: {
		width: '320px',
		height: '500px',
		display: 'flex',
		flexDirection: 'column',
		marginRight: '50px',
		marginleft: '50px',
		marginTop: '20px',
		marginBottom: '20px',
	},
	title: {
		width: '320px',
		height: '100px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '28px',
		backgroundColor: 'rgba(194, 194, 194, 0.486)',
		marginTop: '5px',
	},
	image: {},
	text: {
		padding: '10px',
		width: '300px',
		height: '200px',
		backgroundColor: 'rgba(194, 194, 194, 0.486)',
	},
};
export default Post;
