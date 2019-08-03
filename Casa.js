import styles from './Casa.scss'
import Off from './Offline.svg'

let casaEl = document.createElement('div')
casaEl.id = styles.Casa
document.querySelector('body').appendChild(casaEl)

let offEl = document.createElement('img')
offEl.id = styles.Off
offEl.src = Off
casaEl.appendChild(offEl)
