import { useEffect } from "react";

export const useOutsideClick = (ref, callback) => {
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        };

        const handleEscapeKey = (e) => {
            if (e.key === "Escape") {
                callback();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [ref, callback]);
};
