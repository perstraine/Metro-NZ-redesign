import styles from './Gallery.module.css'
import axios from 'axios';


export default function Gallery({ result, listing }) {
    return (
        <>{result && <>
        <div>Result:</div>
        <div></div></>
        }
      </>
    );
}