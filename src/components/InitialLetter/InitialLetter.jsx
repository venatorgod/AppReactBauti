import img from "/src/assets/closedletter.png";
import { motion } from "motion/react";
import hearts from "/src/assets/hearts.gif";
import "./InitialLetter.css"
export default function InitialLetter({ ...props }) {
    return (
        <motion.div
            id="InitialLetter"
            whileTap={{ scale: 1.25, rotate: 0 }}
            animate={{ rotate: 15 }}
            transition={{ duration: 0.2, ease: "easeIn", type: "spring", stiffness: 200 }}
            style={{ paddingTop: "0px", paddingBottom: "0px" }}
            {...props}
        >
            <motion.img
                draggable="false"
                id="InitialLetterImg"
                transition={{ duration: 0.2, ease: "easeIn", type: "spring", stiffness: 200 }}
                whileTap={{ rotate: 0 }}
                src={img}
                alt="Closed letter img"
            />
            <motion.img
                draggable="false"
                id="InitialLetterEffect"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.1, ease: "easeOut", type: "spring", stiffness: 30 }}
                whileTap={{ opacity: 2, rotate: -30 }}
                src={hearts}
            />
        </ motion.div>
    );
}