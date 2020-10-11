import React, {useState } from 'react'
//import {UserContext} from '../context/UserContext'

export default () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [dateExamen, setDateExamen] = useState('')
    const [examen, setExamen] = useState('')
    const [imageOrdo, setImageOrdo] = useState(null)
    const [error, setError] = useState('')

    console.log("file", imageOrdo)

   // const {user} = useContext(UserContext)

    const handleSubmit = async (event) => {
        event.preventDefault()

        // if(!user){
        //     setError('Please log in first')

        //     return
        // }

        if(!lastName){
            setError('Please add a name')
            return
        }

        if(!firstName){
          setError('Please add a prénom')
          return
      }

        if(!imageOrdo){
            setError('Please add a File')
            return
        }
        
        const formData = new FormData()
        formData.append('data', JSON.stringify({firstName}))
        formData.append('data', JSON.stringify({lastName}))
        formData.append('data', JSON.stringify({phoneNumber}))
        formData.append('data', JSON.stringify({birthDate}))
        formData.append('data', JSON.stringify({dateExamen}))
        formData.append('data', JSON.stringify({examen}))
        formData.append('files.image', imageOrdo)
        
        try{
            const response = await fetch(`https://frozen-dawn-43758.herokuapp.com/ordonnances`, {
                method: 'POST',
                // headers: {
                //     'Authorization': `Bearer ${user.jwt}`
                // },
                body: formData
            })

            const data = await response.json()

            console.log("data", data)
        } catch(err){
            console.log("Exception ", err)
            setError(err)
        }
    }
    
    return (
        <div className="Create">
            <h2>Création ordonnance</h2>

            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="prénom" 
                    value={firstName}
                    onChange={(event) => {
                        setError('')
                        setDescription(event.target.value)
                    }}
                />
                 <input 
                    placeholder="nom" 
                    value={lastName}
                    onChange={(event) => {
                        setError('')
                        setDescription(event.target.value)
                    }}
                />
                 <input 
                    placeholder="Date de naissance" 
                    value={birthDate}
                    onChange={(event) => {
                        setError('')
                        setDescription(event.target.value)
                    }}
                />
                 <input 
                    placeholder="examen" 
                    value={examen}
                    onChange={(event) => {
                        setError('')
                        setDescription(event.target.value)
                    }}
                />
                 <input 
                    placeholder="date d'examen" 
                    value={dateExamen}
                    onChange={(event) => {
                        setError('')
                        setDescription(event.target.value)
                    }}
                />
                <input
                    type="file"
                    placeholder="Add a File"
                    onChange={(event) => {
                        setError('')
                        setFile(event.target.files[0])
                    }}
                />
                
                <button>Submit</button>
            </form>

        </div>
    )

}