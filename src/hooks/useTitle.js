import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}- Go Wild`;
    }, [title])
};

export default useTitle;