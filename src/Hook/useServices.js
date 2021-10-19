import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useServices = () => {
    const [medicines, setMedicines] = useState([])

    useEffect(() => {
        fetch('/medicine.json')
            .then(rsc => rsc.json())
            .then(data => {
                setMedicines(data)
                console.log(data);
            })
    }, [])
    
    return {medicines,setMedicines};
};

export default useServices;