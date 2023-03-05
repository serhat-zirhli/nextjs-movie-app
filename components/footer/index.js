import Link from 'next/link'
import React from 'react'

import styles from "./styles.module.css"
function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                Made with ❤️ by&nbsp;
                <Link href="https://twitter.com/serhatzrhl" target="_blank">
                    Serhat Zırhlı
                </Link>
            </div>
            <div>
                Thanks for <Link href="https://twitter.com/_mehmetpekcan" target="_blank">
                    Mehmet Pekcan
                </Link>
            </div>
        </footer>
    )
}

export default Footer