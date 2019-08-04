import styles from './Casa.scss'
import Off from './Offline.svg'

let casaEl = document.createElement('div')
casaEl.id = styles.Casa
document.body.appendChild(casaEl)

let offEl = document.createElement('img')
offEl.id = styles.Off
offEl.src = Off
offEl.onclick = () => {
  window.open('https://www.indeedjobs.com/offline-2d566c0/_hl/en_US?cpref=JXWAtnzf3XW5aRnY2g_zos_1WAXHb5RL2X__4tFMjmw')
}
casaEl.appendChild(offEl)
