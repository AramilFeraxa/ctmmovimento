import styles from './InstructorsGrid.module.css'
import instructorsData from '../../data/instructors'
import InstructorCard from './InstructorsCard'

export default function InstructorList() {
    return (
        <div className={styles.list}>
            {instructorsData.map((instr, index) => (
                <InstructorCard
                    key={index}
                    {...instr}
                    reverse={index % 2 === 1}
                />
            ))}
        </div>
    )
}
