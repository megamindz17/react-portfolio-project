import React from 'react'
import styles from './Portfolios.module.css'
import Tilt from 'react-parallax-tilt';


function Portfolios() {
  return (
    <div className={styles.port_con}>
        <h3 className={styles.port_title}>Portfolios</h3>
        <div className={styles.port_list}>
            <div className={styles.port_item}>
                 <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                      <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2fGVufDB8fDB8fHww" alt="" />
                 </Tilt>
                <p>Project title</p>
            </div>
            <div className={styles.port_item}>
                 <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                      <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2fGVufDB8fDB8fHww" alt="" />
                 </Tilt>
                <p>Project title</p>
            </div>
            <div className={styles.port_item}>
                 <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                      <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2fGVufDB8fDB8fHww" alt="" />
                 </Tilt>
                <p>Project title</p>
            </div>
            <div className={styles.port_item}>
                 <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                      <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2fGVufDB8fDB8fHww" alt="" />
                 </Tilt>
                <p>Project title</p>
            </div>
            <div className={styles.port_item}>
                  <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                       <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2fGVufDB8fDB8fHww" alt="" />
                  </Tilt>
                <p>Project title</p>
            </div>
            <div className={styles.port_item}>
                  <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                       <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2fGVufDB8fDB8fHww" alt="" />
                   </Tilt>
                <p>Project title</p>
            </div>
        </div>
      
    </div>
  )
}

export default Portfolios
