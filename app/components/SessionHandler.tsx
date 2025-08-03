'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { clearSession } from '@/lib/actions/auth.action';

interface SessionHandlerProps {
  hasInvalidSession: boolean;
}

export default function SessionHandler({ hasInvalidSession }: SessionHandlerProps) {
  const router = useRouter();

  useEffect(() => {
    if (hasInvalidSession) {
      const handleInvalidSession = async () => {
        try {
          await clearSession();
          router.push('/sign-in');
        } catch (error) {
          console.error('Error clearing session:', error);
          router.push('/sign-in');
        }
      };
      
      handleInvalidSession();
    }
  }, [hasInvalidSession, router]);

  if (hasInvalidSession) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Clearing invalid session...</p>
      </div>
    );
  }

  return null;
} 