import styled from 'styled-components';
interface HeaderProps {
	title: string;
}
const Header = ({ title }: HeaderProps) => {
	return (
		<div style={styles.conteiner}>
			<h1>{title}</h1>
			<style jsx global>{`
				body {
					margin: 0;
				}
			`}</style>
		</div>
	);
};
const styles = {
	conteiner: {
		width: '100%',
		height: '50px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#00f7ff',
	},
};
export default Header;
