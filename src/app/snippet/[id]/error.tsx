'use client'; // Error components must be Client Components

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Terminal } from 'lucide-react';
import { useRouter } from 'next/navigation';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error }: ErrorProps) {
  const router = useRouter();
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Something went wrong!</AlertTitle>
      <AlertDescription>
        <div className="flex flex-col space-y-6 mt-4">
          <Text>{error.message}</Text>
          <Button
            size="sm"
            variant="outline"
            className="max-w-fit"
            onClick={() => router.back()}
          >
            Go back
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  );
}
