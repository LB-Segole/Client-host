import { useEffect, useState } from 'react';

export default function withClientOnly<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithClientOnly(props: P) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
      setHasMounted(true);
    }, []);

    // Don't render anything on the server
    if (!hasMounted) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
} 