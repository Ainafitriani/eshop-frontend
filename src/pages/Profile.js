import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
// import CartItem from '../components/CartItem';
import { Navigate } from 'react-router-dom';

function Profile({isLogedIn}) {

	if (!isLogedIn) {
		return (
			<Navigate to ='/auth/login' replace />
		);
	}

	return (
		<Container>
			<Card className ='m-3 p-3'>
				<Card.Title>Name</Card.Title>
				<Card.Subtitle>Email</Card.Subtitle>
				<Button variant='danger'>Logout</Button>
			</Card>
		</Container>
	);

}

export default Profile;