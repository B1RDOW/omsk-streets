import { motion } from "framer-motion";

export function CardAnimation({ children, ...props }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.1 }}
            variants={{ visible: { opacity: 1, scale: 1 }, hidden: { opacity: 0, scale: 0 } }}
            {...props}>
            {children}
        </motion.div>
    );
}