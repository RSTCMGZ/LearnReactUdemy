import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddWorker = (props) => {
    // const [enteredWorkerName, setEnteredWorkerName] = useState("");
    // const [enteredWage, setEnteredWage] = useState("");
    const [error, setError] = useState();

    const nameInputRef = useRef()
    const wageInputRef = useRef()
    const minimumWage = 5000;

    const addWorkerHandler = (e) => {
        console.log(nameInputRef);
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredWage = wageInputRef.current.value;
        if (nameInputRef.current.value.trim().length === 0) {
            setError({
                title: "İsim Alanı Zorunludur!",
                message: "Lütfen bir isim giriniz.",
            });
            return;
        }

        if (+wageInputRef.current.value < minimumWage) {
            setError({
                title: "Maaş Alanı Zorunludur!",
                message: `Lütfen ${minimumWage} değerinden büyük bir maaş değeri giriniz.`,
            });
            return;
        }
        props.setWorkers((prevState) => [
            {
                id: Math.floor(Math.random() * 1000),
                name: enteredName,
                wage: enteredWage,
            },
            ...prevState,
        ]);
        nameInputRef.current.value = ''
        wageInputRef.current.value = ''
        // setEnteredWorkerName("");
        // setEnteredWage("");
    };

    const errorHandler = () => {
        setError(null);
    };
    return (
        <Wrapper>
            {error && <ErrorModal setWorkers={props.setWorkers} onConfirm={errorHandler} error={error} />}
            <Card className="mt-10">
                <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
                    <label htmlFor="name" className="font-medium">
                        Çalışan İsmi
                    </label>
                    <input
                        type="text"
                        className="max-w-[40rem] w-full mx-auto border p-2"
                        placeholder="Çalışan ismi yazınız"
                        id="name"
                        // onChange={(e) => setEnteredWorkerName(e.target.value)}
                        // value={enteredWorkerName}
                        ref={nameInputRef}
                    />
                    <label htmlFor="wage" className="font-medium">
                        Maaş Miktarı
                    </label>
                    <input
                        type="number"
                        className="max-w-[40rem] w-full mx-auto border p-2"
                        placeholder="Maaş miktarı yazınız"
                        id="wage"
                        // onChange={(e) => setEnteredWage(e.target.value)}
                        // value={enteredWage}
                        ref={wageInputRef}
                    />
                    <Button className="mt-2" type="submit">
                        Ekle
                    </Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddWorker;
