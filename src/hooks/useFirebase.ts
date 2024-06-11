import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';

import { db } from '../firebase';
import { CharacterType } from '../types';

export const useFirebase = (
  currentUser: User
): {
  characterList: CharacterType[] | null;
  loading: string | null | boolean;
  error: string | null;
} => {
  const [characterList, setCharacterList] = useState<CharacterType[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<string | null | boolean>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading('Loading...');
      setError(null);
      setCharacterList(null);
      try {
        const currentUserId = currentUser.uid;
        const collectionRef = await collection(db, 'characters');
        const getUserCharacters = query(collectionRef, where('userId', '==', currentUserId));
        const snap = await getDocs(getUserCharacters);
        const list: CharacterType[] = [];
        snap.forEach((doc) => {
          const char = {
            id: doc.id,
            ...doc.data()
          } as CharacterType;
          list.push(char);
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
  }, [currentUser.uid]);

  return { characterList, loading, error };
};
