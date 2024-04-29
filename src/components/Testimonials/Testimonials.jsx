import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.test_con}>
        <h3 className={styles.test_title}>Testimonials</h3>
        <div className={styles.test_list}>
            <div className={styles.test_item}>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                </p>
                <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww" alt="" />
                <h4>John Doe</h4>
                <p className={styles.bio}>Web Developer</p>
            </div>
            <div className={styles.test_item}>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                </p>
                <img src="https://plus.unsplash.com/premium_photo-1687187499277-e1c59bd3032f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww" alt="" />
                <h4>John Doe</h4>
                <p className={styles.bio}>Web Developer</p>
            </div>
            <div className={styles.test_item}>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                </p>
                <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <h4>John Doe</h4>
                <p className={styles.bio}>Web Developer</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
