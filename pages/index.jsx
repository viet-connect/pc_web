import Head from 'next/head'
import Image from 'next/image'
import app from '../lib/firebase/initFirebase'
import styles from '../styles/Home.module.css'
console.log(app);
export default function Home(home) {
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  )
}
