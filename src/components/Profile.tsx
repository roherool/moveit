import { useContext } from 'react';
import { ChallengesContext } from '../contexts/Challenges.context';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/roherool.png" alt="Roberto Oliveira"/>
      <div>
        <strong>Roberto Oliveira</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}