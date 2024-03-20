import React, { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'

function AddWorker(props) {

    const [enteredWorkerName, setEnteredWorkerName] = useState('')
    const [enteredWadge, setEnteredWadge] = useState('')

    let minimumWage = 5000
    const addWorkerHandler = (e) => {
        e.preventDefault()
        if (enteredWorkerName.trim().length === 0 || enteredWadge.trim().length === 0) {
            return
        }
        if (+enteredWadge < minimumWage) {
            return
        }
        props.setWorkers((prevState) => [
            {
                id: Math.floor(Math.random() * 1000),
                name: enteredWorkerName,
                wage: enteredWadge
            },
            ...prevState,
        ])
        setEnteredWorkerName('')
        setEnteredWadge('')
    }
    return (
        <Card className='mt-10 '>
            <form className='flex flex-col gap-y-2' onSubmit={addWorkerHandler}>
                <label htmlFor='name' className='font-medium'>Çalışan İsmi</label>
                <input type="text" className='max-w-[40rem] w-full mx-auto border p-2' placeholder='Çalışan ismi yazınız' id='name' onChange={(e) =>
                    setEnteredWorkerName(e.target.value)
                } value={enteredWorkerName} />
                <label htmlFor='wage' className='font-medium'>Maaş Miktarı</label>
                <input type="number" className='max-w-[40rem] w-full mx-auto border p-2' placeholder='Maaş  miktarı giriniz' id='wage' onChange={(e) =>
                    setEnteredWadge(e.target.value)
                }
                    value={enteredWadge} />
                <Button className='mt-2' type='submit'>Ekle</Button>
            </form>
        </Card>

    )
}

export default AddWorker