/** @format */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Button,
	Col,
	Form,
	FormControl,
	FormGroup,
	FormLabel,
	Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { login } from '../actions/userActions';

import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';

const LoginScreen = ({ location, history }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;

	const redirect = location.search ? location.search.split('=')[1] : '/';

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		//DISPATCH LOGIN
		dispatch(login(email, password));
	};

	return (
		<FormContainer>
			<h1>Sign In</h1>
			{loading && <Loader />}
			{error && <Message variant='danger'>{error}</Message>}
			<Form onSubmit={submitHandler}>
				<FormGroup controlId='email'>
					<FormLabel>Email Address</FormLabel>
					<FormControl
						type='email'
						placeholder='Enter email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}></FormControl>
				</FormGroup>
				<FormGroup controlId='password'>
					<FormLabel>Password Address</FormLabel>
					<FormControl
						type='password'
						placeholder='Enter password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}></FormControl>
				</FormGroup>
				<Button type='submit' variant='primary'>
					Sign In
				</Button>
			</Form>
			<Row className='py-3'>
				<Col>
					New Customer?
					<Link
						to={redirect ? `./register?redirect=${redirect}` : './register'}>
						Register
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
};

export default LoginScreen;
