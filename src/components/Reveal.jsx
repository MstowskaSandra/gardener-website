// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Reveal = ({ children, width = "fit-content", delay = 0, className = "" }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
                duration: 0.6, 
                delay: delay, 
                ease: "easeOut" 
            }}
            className={className}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;