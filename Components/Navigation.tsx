import Link from 'next/link';
const Navigation = () => {
	return (
		<nav style={styles.conteiner}>
			<div style={styles.elements}>
				<Link href="/">Home</Link>
			</div>
			<div style={styles.elements}>
				<Link href="/posts/new/">Create Post/Load Post</Link>
			</div>
		</nav>
	);
};
const styles = {
	conteiner: {
		width: '100%',
		heigth: '50px',
		backgroundColor: '#00f7ff',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	elements: {
		fontSize: '24px',
		width: 'auto',
	},
};
export default Navigation;
