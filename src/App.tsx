
import Button from './components/button'
import styles from './styles/App.module.scss'

function App() {

  const handleOnClick = () => console.log('Enter Clicked');

  return (
    <>
      <div className={styles.app}>
        <div className={styles.container}>
          <h1 className={styles.title}>Bolton Kendo Club</h1>
          <div>About</div>
          <div>Practice Times</div>
          <div>Reading</div>
          <div>What is Kendo</div>
          <Button 
            label='Enter' 
            onClick={handleOnClick}
          />
        </div>
      </div>
    </>
  )
}

export default App
