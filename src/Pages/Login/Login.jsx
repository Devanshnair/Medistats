// LoginForm.jsx
import React, { useState } from 'react';
import styles from './Login.module.css';
import Link from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    console.log('Login attempted with:', email, password);
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.buttonWrapper}>
        <button type="submit" className={styles.button}>
          Sign In
        </button>
      </div>
      <div className={styles.linkWrapper}>
        <Link to="/forgot-password" className={styles.link}>
          Forgot Password?
        </Link>
      </div>
      <p className={styles.signupText}>
        Don't have an account?{' '}
        <Link to="/signup" className={styles.signupLink}>
          Sign up
        </Link>
      </p>
    </form>
  );
}
