import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { db } from '../firebase';

export const useFirebase = (currentUser) => {
  const [characterList, setCharacterList] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading('Loading...');
      setError(null);
      setCharacterList(null);
      try {
        const currentUserId = currentUser.uid;
        const collectionRef = await collection(db, 'characters');
        const q = query(collectionRef, where('userId', '==', currentUserId));
        const snap = await getDocs(q);
        let list = [];
        snap.forEach((doc) => {
          list.push({
            id: doc.id,
            ...doc.data()
          });
        });
        if (list.length < 1) {
          setError('Could not retrieve any saved characters.');
          return;
        }
        setCharacterList(list);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError('Fetch error.');
      }
    };
    fetchCharacter();
  }, []);

  return { characterList, loading, error };
};
