import { createContext, useState } from "react"

const Notification = ({ message, severity, other }) => {
    const background = {
      success: 'green',
      error: 'red',
      warning: 'orange',
      default: 'blue'
    }
  
    const notificationStyles = {
      position: 'absolute',
      top: 100,
      right: 10,
      padding: '10px 20px 10px 20px',
      backgroundColor: background[severity] || background.default,
      color: 'white'
    } 

    if(message === '') return
  
    return (
      <div style={notificationStyles} className={'unaClase ' + (other || '')}>
        {message}
      </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (sev, msg) => {
        setMessage(msg)
        setSeverity(sev)
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            {/* {message !== '' && <Notification message={message} severity={severity}/>} */}
            <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext