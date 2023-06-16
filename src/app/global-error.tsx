'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Terminal } from 'lucide-react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorProps) {
  return (
    <html>
      <body>
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
                onClick={() => reset()}
              >
                Try again
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      </body>
    </html>
  );
}
