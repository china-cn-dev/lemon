import React from 'react'
import { Link } from 'react-router-dom'
import FooterBar from './common/footerbar'
import styles from '../scss/my.module.scss'
export default class My extends React.Component {
    render() {
        return (
            <div className="app">
                <header className="nav-bar">
                    <Link className="back" to="/"></Link>
                    <span>我的</span>
                </header>
                <div className={styles.main}>
                    <p>TEST CSS MODULE</p>
                    <span>TEST SCSS</span>
                </div>
                <FooterBar/>
            </div>
        );
    }
}
