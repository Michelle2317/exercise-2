import styles from './Button.module.css'

export default function Button({
	title = 'click me',
	color = 'var(--purple)',
}) {
	return (
		<button className={styles.button} style={{ backgroundColor: color }}>{title}</button>
	)
}
