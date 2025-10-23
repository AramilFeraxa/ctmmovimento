import { useState } from 'react';
import styles from './InstructorsGrid.module.css';
import instructorsData from '../../data/instructors';
import InstructorCard from './InstructorsCard';
import { FaUsers, FaSearch } from 'react-icons/fa';

export default function InstructorList() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredInstructors = instructorsData.filter(instructor =>
        instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        instructor.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.iconWrapper}>
                        <FaUsers />
                    </div>
                    <h2 className={styles.title}>
                        Nasi <span className={styles.accent}>Instruktorzy</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Poznaj profesjonalny zespół pedagogiczny CTM Movimento
                    </p>
                </div>

                <div className={styles.searchWrapper}>
                    <div className={styles.searchContainer}>
                        <FaSearch className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Szukaj instruktora..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.list}>
                {filteredInstructors.length > 0 ? (
                    filteredInstructors.map((instr, index) => (
                        <InstructorCard
                            key={index}
                            {...instr}
                            reverse={index % 2 === 1}
                        />
                    ))
                ) : (
                    <div className={styles.noResults}>
                        <p>Nie znaleziono instruktorów spełniających kryteria wyszukiwania.</p>
                    </div>
                )}
            </div>
        </section>
    );
}